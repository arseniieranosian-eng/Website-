// Post-build check of the Ukrainian version (brief of 02.11.2026: a mirror of the Russian one, built in iterations; routes.ts: UK_READY).
// Every Ukrainian page: <html lang="uk">, canonical on itself, hreflang set with uk + x-default = cs, an og:locale uk_UA, no Russian-only letters (ы э ъ ё) in the visible text,
// the language switcher offers UK, the page is in the sitemap; the pages that have a Ukrainian version carry the uk alternate on their cs / en / ru twins.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = 'https://seo-eranosian.com';
const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : n === 'index.html' ? [p] : []; });
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const errors = [];
const e = (m) => errors.push(m);
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
const pages = walk('dist/uk');
if (pages.length < 10) e(`Ukrainian pages: ${pages.length}`);
for (const f of pages) {
  const url = '/' + f.replace(/^dist\//, '').replace(/index\.html$/, '');
  const h = readFileSync(f, 'utf8');
  if (!/<html lang="uk">/.test(h)) e(`${url}: <html lang="uk">`);
  if (!/noindex/.test(h) && !h.includes(`<link rel="canonical" href="${BASE}${url}">`)) e(`${url}: canonical`);
  if (!h.includes('<meta property="og:locale" content="uk_UA">')) e(`${url}: og:locale`);
  const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1]);
  if (!/noindex/.test(h) && (!alts.includes('uk') || !alts.includes('x-default') || !alts.includes('cs'))) e(`${url}: hreflang uk / cs / x-default`);
  const vis = dec(h.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' '));
  const ru = vis.match(/[^\s]*[ыэъё][^\s]*/g);
  if (ru) e(`${url}: Russian-only letters in the text: ${ru.slice(0, 4).join(', ')}`);
  if (!/<a href="[^"]*" hreflang="uk" lang="uk"[^>]*>UK<\/a>/.test(h)) e(`${url}: language switcher offers UK`);
  if (!/noindex/.test(h) && !sitemap.includes(`<loc>${BASE}${url}</loc>`)) e(`${url}: in the sitemap`);
}
if (!/hreflang="uk" href="https:\/\/seo-eranosian\.com\/uk\/"/.test(readFileSync('dist/index.html', 'utf8'))) e('the Czech home page carries the uk alternate');
if (errors.length) { console.error('✗ check-uk:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-uk: ${pages.length} Ukrainian pages`);
