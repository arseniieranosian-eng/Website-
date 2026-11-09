// Table of contents of a blog article (brief of 09.11.2026): the list of links is generated from the H2 headings of the rendered article, never written by hand, so the text of a link is the text of
// its heading. Ids are put on the H2 elements themselves and come from data/toc-ids.ts (one place, the same ids in every language). The block stands after the introduction, before the first H2,
// and is shown when it has at least four items. No JSON-LD for the block.
import { ROUTES, type Lang } from '../i18n/routes';
import { TOC_IDS, TOC_IDS_RU_ONLY } from '../data/toc-ids';

export const TOC_MIN_ITEMS = 4;
const LABEL: Record<Lang, { title: string; aria: string }> = {
  cs: { title: 'Co v textu najdete:', aria: 'Obsah článku' },
  ru: { title: 'Что в тексте:', aria: 'Содержание статьи' },
  en: { title: 'In this article:', aria: 'Article contents' },
  uk: { title: 'Що в тексті:', aria: 'Зміст статті' },
};
const RESERVED = new Set(['main', 'header', 'footer', 'skip-link', 'form', 'top', 'content', 'site-header', 'site-footer']);
const strip = (h: string) => h.replace(/<[^>]+>/g, '').trim();

export function isArticlePath(path: string): boolean {
  return /^\/(?:(?:ru|en|uk)\/)?blog\/[^/]+\/$/.test(path);
}

export function addToc(body: string, lang: Lang, pageKey: string | undefined): string {
  const key = String(pageKey ?? '');
  let ids = TOC_IDS_RU_ONLY[key] ?? TOC_IDS[(ROUTES as any)[key]?.cs ?? ''];
  if (!ids) throw new Error(`toc: no ids for the article "${key}" (add it to src/data/toc-ids.ts)`);
  const heroStart = body.indexOf('<section class="page-hero">');
  const heroEnd = heroStart >= 0 ? body.indexOf('</section>', heroStart) + '</section>'.length : 0;
  const hero = body.slice(0, heroEnd);
  const rest = body.slice(heroEnd);
  // 1st pass: the headings of the sections after the hero
  const secRx = /<section(\b[^>]*)>([\s\S]*?)<\/section>/g;
  type Item = { text: string; sec: number; included: boolean };
  const items: Item[] = [];
  const secs = [...rest.matchAll(secRx)];
  secs.forEach((m, si) => {
    for (const h of m[2].matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)) items.push({ text: strip(h[1]), sec: si, included: true });
  });
  items.forEach((it, i) => {
    const secHtml = secs[it.sec][2];
    const last = i === items.length - 1;
    if (!it.text) it.included = false;
    else if (last && it.text.endsWith('?') && (secHtml.includes('post-cta') || secHtml.includes('btn--primary'))) it.included = false;
  });
  const included = items.filter((i) => i.included);
  // a translated mirror may omit trailing sections of the Czech original: it takes the leading shared ids
  if (lang !== 'cs' && included.length < ids.length && !TOC_IDS_RU_ONLY[key]) ids = ids.slice(0, included.length);
  if (included.length !== ids.length) throw new Error(`toc: article "${key}" has ${included.length} headings for the table of contents but ${ids.length} ids in src/data/toc-ids.ts`);
  // 2nd pass: put the ids on the H2 elements (an id that stood on the section moves to its heading)
  let n = 0;
  let k = 0;
  const newRest = rest.replace(secRx, (whole, attrs: string, inner: string) => {
    let secAttrs = attrs;
    const inner2 = inner.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/g, (h, hattrs: string, content: string) => {
      const it = items[n++];
      if (!it.included) return h;
      const id = ids[k++];
      if (/\bid=/.test(hattrs)) throw new Error(`toc: a heading of "${key}" already has an id`);
      secAttrs = secAttrs.replace(/\sid="[^"]*"/, '');
      return `<h2${hattrs} id="${id}">${content}</h2>`;
    });
    return `<section${secAttrs}>${inner2}</section>`;
  });
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id) || RESERVED.has(id) || !/^[a-z][a-z0-9-]*$/.test(id)) throw new Error(`toc: bad or repeated id "${id}" in "${key}"`);
    seen.add(id);
  }
  for (const id of ids) if ((newRest.match(new RegExp(`\\bid="${id}"`, 'g')) || []).length !== 1 || hero.includes(`id="${id}"`)) throw new Error(`toc: id "${id}" is not unique on the page "${key}"`);
  // the hand-written block of the old templates is replaced by the generated one
  let newHero = hero.replace(/\s*<p class="muted small">[^<]*:<\/p>\s*<ol class="toc">[\s\S]*?<\/ol>/, '');
  if (included.length >= TOC_MIN_ITEMS && heroStart >= 0) {
    const L = LABEL[lang] ?? LABEL.cs;
    const li = included.map((it, i) => `<li><a href="#${ids[i]}">${it.text}</a></li>`).join('');
    const nav = `<nav class="toc" aria-label="${L.aria}"><p class="toc-title">${L.title}</p><ul>${li}</ul></nav>`;
    const cut = newHero.lastIndexOf('</div>');
    newHero = newHero.slice(0, cut) + nav + newHero.slice(cut);
  }
  return newHero + newRest;
}
