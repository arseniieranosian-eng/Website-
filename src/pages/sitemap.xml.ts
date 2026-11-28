import { lastModified } from '../lib/lastmod';
import type { APIRoute } from 'astro';
import { DEFAULT_LANG, LANGS, NOINDEX, PAGE_KEYS, ROUTES, alternatesFor, langsFor, type Lang, type PageKey } from '../i18n/routes';
import { dedicatedPosts } from '../data/blog-posts';
import { allPosts, postAlternates, postsByLang, postUrl } from '../lib/blog';

// sitemap.xml with every language version and xhtml:link hreflang alternates.
// lastmod of the ENGLISH pages (brief EN-1 of 28.11.2026): only where the page shows a visible "Updated" date; the value is that date (the same manual date as data/page-dates.json / the page's own constant).
// Pages without a visible date (case index, reviews, FAQ, about, contact, privacy) get no lastmod. scripts/check-en-1.mjs compares this map with the visible dates.
const EN_LASTMOD: Partial<Record<PageKey, string>> = { nicheTranslation: '2026-11-28', postLangVersionsEn: '2026-11-28', postNoEnquiriesEn: '2026-11-28', faq: '2026-11-09', home: '2026-11-02', audit: '2026-11-03', consulting: '2026-11-03', start: '2026-11-03', fullSeo: '2026-11-03', maps: '2026-11-03', geo: '2026-11-03', caseTypo: '2026-11-16', caseEdu: '2026-11-16', caseRazbor: '2026-11-16', caseSeason: '2026-11-16', caseHalf: '2026-11-16', caseKb: '2026-11-16' };

export const GET: APIRoute = async ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const entries: { loc: string; alternates: Partial<Record<Lang, string>>; lastmod?: string }[] = [];

  for (const key of PAGE_KEYS) {
    if (NOINDEX.includes(key)) continue;
    if (key === 'blog') {
      // Blog index: only the languages that already have posts (an empty index is noindex).
      const withPosts: Lang[] = [];
      for (const lang of LANGS) if ((await postsByLang(lang)).length + dedicatedPosts(lang).length) withPosts.push(lang);
      const alternates = Object.fromEntries(withPosts.map((l) => [l, ROUTES.blog[l]]));
      for (const lang of withPosts) entries.push({ loc: ROUTES.blog[lang], alternates });
      continue;
    }
    // lastmod only where the brief asks for it (the electronics observation article, 13.11.2026); the date is the manual one of the page (data/page-dates.json)
    const lastmod = key === 'postCncObrabeni' ? '2026-11-16' : key === 'postDentalProfile' ? '2026-11-21' : key === 'postDentalMapsObs' ? '2026-11-21' : key === 'postOneTime' ? '2026-11-23' : key === 'postDentalWebMaps' ? '2026-11-23' : key === 'postProfileMgmt' ? '2026-11-23' : key === 'nicheDentalBrno' ? '2026-11-27' : key === 'postDentalBrnoObs' ? '2026-11-27' : key === 'postAccWebMaps' ? '2026-11-23' : key === 'postElectronicsObs' ? lastModified(['src/views/PostElectronicsObsCsPage.astro'], '2026-11-13') : key === 'postTiskOnline' ? lastModified(['src/views/PostTiskOnlineCsPage.astro'], '2026-11-14') : undefined;
    for (const lang of langsFor(key)) entries.push({ loc: ROUTES[key][lang], alternates: alternatesFor(key, lang), lastmod: lang === 'en' ? EN_LASTMOD[key] ?? lastmod : lastmod });
  }
  for (const post of await allPosts()) {
    entries.push({
      loc: postUrl(post),
      alternates: await postAlternates(post),
      lastmod: (post.data.updated ?? post.data.date).toISOString().slice(0, 10),
    });
  }

  const links = (alt: Partial<Record<Lang, string>>) => {
    const langs = LANGS.filter((l) => alt[l]);
    if (langs.length < 2) return '';
    const out = langs.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(alt[l]!)}"/>`);
    if (alt[DEFAULT_LANG]) out.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${abs(alt[DEFAULT_LANG]!)}"/>`);
    return out.join('');
  };

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map((e) => `<url><loc>${abs(e.loc)}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}${links(e.alternates)}</url>`)
  .join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
