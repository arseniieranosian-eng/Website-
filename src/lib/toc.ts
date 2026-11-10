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

// ---- Service pages (audit, consultation, 3-month start, full SEO, maps, SEO and GEO/AEO; every language), brief of 09.11.2026 ----
// The same block as in the articles, directly under the introduction of the hero (below its buttons, full width). The ids of the headings are made from the heading text (no hand-written map: the
// structure differs per language), the links are the headings themselves. Not listed: the enquiry form, the "other services" cards and dark call-to-action bands.
export const SERVICE_KEYS_TOC = new Set(['audit', 'consulting', 'start', 'fullSeo', 'maps', 'geo']);
// the niche landing pages (nicheDental, nicheGaming, ... in every language) get the same block
export const hasServiceToc = (key: string) => SERVICE_KEYS_TOC.has(key) || /^niche[A-Z]/.test(key);
const LABEL_SERVICE: Record<Lang, { title: string; aria: string }> = {
  cs: { title: 'Na stránce najdete:', aria: 'Obsah stránky' },
  ru: { title: 'На странице:', aria: 'Содержание страницы' },
  en: { title: 'On this page:', aria: 'Page contents' },
  uk: { title: 'На сторінці:', aria: 'Зміст сторінки' },
};
const CYR: Record<string, string> = { а: 'a', б: 'b', в: 'v', г: 'g', ґ: 'g', д: 'd', е: 'e', є: 'ie', ж: 'zh', з: 'z', и: 'i', і: 'i', ї: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'iu', я: 'ia', ё: 'e' };
const OTHER_SERVICES = /^(?:Other services|Další služby|Другие услуги|Інші послуги)$/i;
const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
function slug(text: string): string {
  const t = decode(text).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[а-яёіїєґъь]/g, (c) => CYR[c] ?? '');
  const words = t.replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(Boolean).slice(0, 7);
  return words.join('-') || 'sekce';
}

export function addServiceToc(body: string, lang: Lang): string {
  const heroStart = body.indexOf('<section class="page-hero">');
  if (heroStart < 0) return body;
  const heroEnd = body.indexOf('</section>', heroStart);
  const rest = body.slice(heroEnd + '</section>'.length);
  const taken = new Set([...body.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  const used = new Set<string>();
  const entries: { id: string; text: string }[] = [];
  const secRx = /<section(\b[^>]*)>([\s\S]*?)<\/section>/g;
  const newRest = rest.replace(secRx, (whole, attrs: string, inner: string) => {
    const nH2 = (inner.match(/<h2\b/g) || []).length;
    if (/section--dark|cta-band/.test(attrs) || (/<form\b/.test(inner) && nH2 <= 1)) return whole;
    let secAttrs = attrs;
    const inner2 = inner.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/g, (h, hattrs: string, content: string) => {
      const text = strip(content);
      if (!text || OTHER_SERVICES.test(text)) return h;
      const own = (hattrs.match(/\bid="([^"]*)"/) || [, ''])[1];
      if (own) { used.add(own); entries.push({ id: own, text }); return h; }
      // the "other services" cards: a heading in a section head followed by link cards only
      if (/section-head/.test(inner.slice(Math.max(0, inner.indexOf(h) - 60), inner.indexOf(h))) && (inner.match(/card--link/g) || []).length >= 3 && !/<p class="answer"/.test(inner)) return h;
      let id = (secAttrs.match(/\sid="([^"]*)"/) || [, ''])[1];
      if (id) secAttrs = secAttrs.replace(/\sid="[^"]*"/, '');
      else {
        const base = slug(text); id = base; let n = 2;
        while (taken.has(id) || used.has(id) || RESERVED.has(id)) id = `${base}-${n++}`;
      }
      used.add(id); taken.add(id);
      entries.push({ id, text });
      return `<h2${hattrs} id="${id}">${content}</h2>`;
    });
    return `<section${secAttrs}>${inner2}</section>`;
  });
  if (entries.length < TOC_MIN_ITEMS) return body;
  const L = LABEL_SERVICE[lang] ?? LABEL_SERVICE.cs;
  const li = entries.map((e) => `<li><a href="#${e.id}">${e.text}</a></li>`).join('');
  const narrow = /<div class="container[^"]*\bnarrow\b/.test(body.slice(heroStart, heroEnd)); // same width as the introduction of the hero
  const nav = `<div class="container${narrow ? ' narrow' : ''}"><nav class="toc${narrow ? '' : ' toc--cols'}" aria-label="${L.aria}"><p class="toc-title">${L.title}</p><ul>${li}</ul></nav></div>`;
  return body.slice(0, heroEnd) + nav + body.slice(heroEnd, heroEnd + '</section>'.length) + newRest;
}

// ---- Blog index (/blog/ in every language): one entry per group of articles (H2 of a `blog-group` section, whose id already exists) ----
export function addBlogToc(body: string, lang: Lang): string {
  const heroStart = body.indexOf('<section class="page-hero">');
  if (heroStart < 0) return body;
  const heroEnd = body.indexOf('</section>', heroStart) + '</section>'.length;
  const entries = [...body.slice(heroEnd).matchAll(/<section class="blog-group" id="([^"]+)">\s*<h2>([\s\S]*?)<\/h2>/g)].map((m) => ({ id: m[1], text: strip(m[2]) })).filter((e) => e.text);
  if (entries.length < TOC_MIN_ITEMS) return body;
  const L = LABEL_SERVICE[lang] ?? LABEL_SERVICE.cs;
  const li = entries.map((e) => `<li><a href="#${e.id}">${e.text}</a></li>`).join('');
  const nav = `<div class="container"><nav class="toc toc--cols" aria-label="${L.aria}"><p class="toc-title">${L.title}</p><ul>${li}</ul></nav></div>`;
  return body.slice(0, heroEnd - '</section>'.length) + nav + '</section>' + body.slice(heroEnd);
}
