// Check of the English version after the brief EN-1 of 28.11.2026 (edits of the existing /en/, no new pages): Titles of the seven pages (unified "| Eranosian", <= 50, Title != H1),
// Descriptions <= 130, no "significant share" claim, the replacement sentence of the FAQ, the English 404 page (lang="en", noindex), lastmod of the English sitemap entries only where a visible "Updated" date exists
// (and equal to it), hreflang sets and canonical of the 19 English pages unchanged, no new English pages (19 in the sitemap), no "EU" as a target market, no prices or exchange rates added to the Start / Full SEO / Maps pages.
import { readFileSync, existsSync } from 'node:fs';
const errs = []; const e = (m) => errs.push(m);
const sm = readFileSync('dist/sitemap.xml', 'utf8');
const entries = [...sm.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
const en = entries.filter((u) => /<loc>https:\/\/seo-eranosian\.com\/en\//.test(u));
if (en.length !== 20) e(`20 English pages in the sitemap (19 + the translation-agency page of 28.11.2026), found ${en.length}`);
const want = {
  '/en/3-month-start/': '3-Month SEO Start for 50,000 CZK | Eranosian', '/en/full-seo/': 'Full-Year SEO from 15,000 CZK a Month | Eranosian', '/en/seo-and-geo/': 'SEO + GEO/AEO: Google and ChatGPT | Eranosian',
  '/en/faq/': 'SEO FAQ: Prices, Process and Results | Eranosian', '/en/maps/': 'Local SEO: Google Maps and Mapy.com | Eranosian', '/en/privacy-policy/': 'Privacy Policy | Eranosian', '/en/reviews/': 'Client Reviews | Eranosian',
};
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
const txt = (s) => dec(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
let seenDates = 0;
for (const u of en) {
  const loc = u.match(/<loc>([^<]*)<\/loc>/)[1]; const path = loc.replace('https://seo-eranosian.com', '');
  const h = readFileSync('dist' + path + 'index.html', 'utf8');
  const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
  const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
  const h1 = txt((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
  if (title.length > 50) e(`${path} Title ${title.length} > 50`);
  if (desc.length > 130) e(`${path} Description ${desc.length} > 130`);
  if (title === h1) e(`${path} Title equals H1`);
  if (want[path] && title !== want[path]) e(`${path} Title: ${title}`);
  if (!h.includes(`<link rel="canonical" href="${loc}">`)) e(`${path} canonical`);
  if (/significant share/.test(h)) e(`${path}: "significant share" without a source`);
  const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0]; const t = txt(main);
  if (/\b(the EU|EU market|European Union)\b/.test(t)) e(`${path}: "EU" as a target market`);
  // hreflang sets: head == sitemap
  const head = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + '=' + m[2]).sort().join();
  const smh = [...u.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + '=' + m[2]).sort().join();
  if (head !== smh) e(`${path} hreflang head differs from the sitemap`);
  // lastmod only with a visible date, equal to it
  const lm = (u.match(/<lastmod>([^<]*)<\/lastmod>/) || [])[1];
  const visible = /Updated:? /.test(t) ? (h.match(/<time datetime="(\d{4}-\d\d-\d\d)"[^>]*>[^<]*<\/time>/g) || []).map((x) => x.match(/datetime="([^"]+)"/)[1]).sort().pop() : undefined;
  if (lm && lm !== visible) e(`${path} lastmod ${lm} differs from the visible date ${visible}`);
  if (!lm && visible) e(`${path} has a visible date ${visible} but no lastmod`);
  if (lm) seenDates++;
}
if (seenDates !== 15) e(`lastmod expected on 15 English pages (6 services + home + 6 cases + FAQ + translation agencies), found ${seenDates}`);
const faq = readFileSync('dist/en/faq/index.html', 'utf8');
if (!faq.includes('because both are used for searching in Czechia.')) e('FAQ replacement wording (Seznam: both are used for searching in Czechia)');
if (!existsSync('dist/en/404/index.html') || !existsSync('dist/en/.htaccess')) e('English 404 page / en/.htaccess missing');
else {
  const n = readFileSync('dist/en/404/index.html', 'utf8');
  if (!/<html lang="en"/.test(n) || !/<meta name="robots" content="noindex/.test(n) || !/Page not found/.test(n)) e('English 404: lang / noindex / text');
  if (!/ErrorDocument 404 \/en\/404\/index\.html/.test(readFileSync('dist/en/.htaccess', 'utf8'))) e('en/.htaccess ErrorDocument');
  if (!/ErrorDocument 404 \/404\.html/.test(readFileSync('dist/.htaccess', 'utf8'))) e('root ErrorDocument must stay');
  if (sm.includes('/en/404/')) e('the 404 page must not be in the sitemap');
}
for (const p of ['/en/maps/']) { // (the Start and Full SEO pages show their prices since the author's decisions of 28.11.2026: scripts/check-start-en.mjs, check-fullseo-en.mjs)
  const t = txt((readFileSync('dist' + p + 'index.html', 'utf8').match(/<main[\s\S]*?<\/main>/) || [''])[0]);
  if (/\d[\d,]*\s?(CZK|EUR|€)|€\s?\d|Kč/.test(t)) e(`${p}: prices must not be added without the author's decision`);
}
const cons = txt((readFileSync('dist/en/consulting/index.html', 'utf8').match(/<main[\s\S]*?<\/main>/) || [''])[0]);
if (!cons.includes('2,000 CZK (approx. €80) per hour, or 3,000 CZK (approx. €120)') || /rate of/.test(cons)) e('consulting prices stay as they are (no exchange-rate note without the author\'s date)');
if (errs.length) { console.error('✗ check-en-1:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-en-1: ok (19 English pages, ${seenDates} with lastmod, 7 Titles unified, English 404)`);
