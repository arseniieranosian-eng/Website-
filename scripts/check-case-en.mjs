// Check of the English case studies (brief of 16.11.2026): a mirror of the Czech pages. Per page: Title <= 50 / Description <= 130, canonical, hreflang trio cs / en / ru (+ x-default = cs, none for the Ukrainian
// version), one H1, no Cyrillic and no Czech text in the main text (only the quoted Czech search queries), FAQPage = the visible FAQ, no client name; the case list links to every case; the sitemap lists them.
import { readFileSync } from './fs-clean.mjs';
const BASE = 'https://seo-eranosian.com';
const PAGES = [
  ['/en/case-studies/seo-translation-agency-4-months/', '/pripadove-studie/seo-prekladatelska-agentura-4-mesice/', '/ru/kejsy/seo-perevodcheskoe-agentstvo-4-mesyaca/', 'SEO Case Study: Translation Agency | Eranosian'],
  ['/en/case-studies/seo-print-shop/', '/pripadove-studie/seo-tiskarna/', '/ru/kejsy/seo-tipografiya/', 'Print Shop SEO: Traffic Up 8.75× | Eranosian'],
  ['/en/case-studies/seo-education-platform/', '/pripadove-studie/seo-vzdelavaci-platforma/', '/ru/kejsy/seo-obrazovatelnaya-platforma/', 'Education Platform SEO: +55 % | Eranosian'],
  ['/en/case-studies/seo-in-low-season/', '/pripadove-studie/seo-v-nizke-sezone/', '/ru/kejsy/seo-v-nizkij-sezon/', 'SEO in the Low Season: Enquiries 24× | Eranosian'],
  ['/en/case-studies/seo-translation-agency-half-year/', '/pripadove-studie/seo-prekladatelska-agentura/', '/ru/kejsy/seo-perevodcheskoe-agentstvo-polgoda/', 'Translation Agency SEO: Six Months | Eranosian'],
  ['/en/case-studies/review-real-estate-agency-prague/', '/pripadove-studie/rozbor-webu-realitni-kancelare-praha/', '/ru/kejsy/razbor-agentstvo-nedvizhimosti-praga/', 'Real Estate Agency Website Review | Eranosian'],
];
const errs = []; const e = (m) => errs.push(m);
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;| /g, ' ');
const txt = (s) => dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const sm = readFileSync('dist/sitemap.xml', 'utf8');
const list = readFileSync('dist/en/case-studies/index.html', 'utf8');
for (const [en, cs, ru, TITLE] of PAGES) {
  const h = readFileSync('dist' + en + 'index.html', 'utf8');
  const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
  const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
  const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
  if (title !== TITLE || title.length > 50) e(`${en}: title ${title.length}`);
  if (desc.length > 130 || desc.length < 60) e(`${en}: description ${desc.length}`);
  if (!h.includes(`<link rel="canonical" href="${BASE}${en}">`)) e(`${en}: canonical`);
  const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + ' ' + m[2]);
  if (JSON.stringify(alts) !== JSON.stringify([`cs ${BASE}${cs}`, `en ${BASE}${en}`, `ru ${BASE}${ru}`, `x-default ${BASE}${cs}`])) e(`${en}: hreflang ${JSON.stringify(alts)}`);
  if (!readFileSync('dist' + cs + 'index.html', 'utf8').includes(`hreflang="en" href="${BASE}${en}"`)) e(`${en}: the Czech page must point to the English one`);
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) e(`${en}: one H1`);
  const body = txt(main);
  if (/[Ѐ-ӿ]/.test(body)) e(`${en}: Cyrillic in the English text`);
  const cz = (body.match(/[^\s]*[ěščřžýáíéůúťďňĚŠČŘŽÝ][^\s]*/g) || []).filter((w) => !/^[(“"]*(soudní|překlady|překlad|dokumentů|ocenění|nemovitosti)/i.test(w) && !/(dokumentů|nemovitosti|Pardubice)[”"]/.test(w));
  if (cz.length) e(`${en}: Czech words ${cz.slice(0, 5)}`);
  if (/KB P[ŘR]EKLADY|kb-preklady/i.test(h)) e(`${en}: the client's name must not appear`);
  if (/guarantee[sd]? (?:you )?(?:top|#1|first)/i.test(body)) e(`${en}: guarantee wording`);
  let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
  const fp = ld.find((x) => x['@type'] === 'FAQPage');
  const vis = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].filter((m) => fp && fp.mainEntity.some((q) => q.name === txt(m[1])));
  if (!fp || fp.mainEntity.length < 3 || vis.length !== fp.mainEntity.length || fp.mainEntity.some((q, i) => txt(vis[i][2]).replace(/\s+/g, '') !== q.acceptedAnswer.text.replace(/\s+/g, ''))) e(`${en}: FAQPage must equal the visible FAQ`);
  const wp = ld.find((x) => x['@type'] === 'WebPage');
  if (!wp || wp.inLanguage !== 'en' || wp.dateModified !== '2026-11-16') e(`${en}: WebPage`);
  if (!list.includes(`href="${en}"`)) e(`${en}: listed on /en/case-studies/`);
  if (!sm.includes(`<loc>${BASE}${en}</loc>`)) e(`${en}: sitemap`);
}
if (errs.length) { console.error('✗ check-case-en:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log('✓ check-case-en: ok (' + PAGES.length + ' pages)');
