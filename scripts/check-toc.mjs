// Check of the generated table of contents of blog articles: every link leads to an existing unique id, every H2 (but an empty one and the closing CTA question) has an id,
// link text = heading text, translated mirrors share the ids of the Czech original, no table of contents outside blog articles.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const errs = []; const e = (m) => errs.push(m);
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const pages = [];
(function walk(d) { for (const n of readdirSync(d)) { const p = join(d, n); if (statSync(p).isDirectory()) walk(p); else if (n === 'index.html') pages.push(p); } })('dist');
const urlOf = (p) => '/' + p.replace(/^dist\/?/, '').replace(/index\.html$/, '');
const isArticle = (u) => /^\/(?:(?:ru|en|uk)\/)?blog\/[^/]+\/$/.test(u);
const info = new Map();
let articles = 0;
for (const p of pages) {
  const u = urlOf(p); const h = readFileSync(p, 'utf8');
  const nav = h.match(/<nav class="toc"[\s\S]*?<\/nav>/);
  if (!isArticle(u)) { if (nav || /<ol class="toc"/.test(h)) e(`${u}: table of contents outside a blog article`); continue; }
  articles++;
  const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
  const h2 = [...main.matchAll(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/g)].map((m) => ({ id: (m[1].match(/\bid="([^"]*)"/) || [, ''])[1], text: txt(m[2]) }));
  const allIds = [...main.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  const dup = allIds.filter((x, i) => allIds.indexOf(x) !== i);
  if (dup.length) e(`${u}: duplicate ids ${[...new Set(dup)]}`);
  if (/<ol class="toc"/.test(h)) e(`${u}: old hand-written table of contents left`);
  const needed = h2.filter((x, i) => x.text && !(i === h2.length - 1 && x.text.endsWith('?') && !x.id));
  const missing = needed.filter((x) => !x.id);
  if (missing.length) e(`${u}: H2 without id: ${missing.map((x) => x.text).join(' | ')}`);
  const links = nav ? [...nav[0].matchAll(/<a href="#([^"]+)">([\s\S]*?)<\/a>/g)].map((m) => ({ id: m[1], text: txt(m[2]) })) : [];
  if (needed.length >= 4 && !nav) e(`${u}: ${needed.length} headings but no table of contents`);
  if (nav && links.length < 4) e(`${u}: table of contents with fewer than 4 items`);
  for (const l of links) {
    const t = h2.find((x) => x.id === l.id);
    if (!t) e(`${u}: broken anchor #${l.id}`);
    else if (t.text !== l.text) e(`${u}: link text differs from heading #${l.id}`);
  }
  if (nav && links.length !== needed.filter((x) => x.id).length) e(`${u}: ${links.length} links but ${needed.length} headings`);
  const alt = [...h.matchAll(/<link rel="alternate" hreflang="([a-z-]+)" href="https:\/\/seo-eranosian\.com([^"]*)"/g)].map((m) => [m[1], m[2]]);
  info.set(u, { ids: links.map((l) => l.id), alt });
}
// mirrors: the ids of a translation are the leading ids of the Czech original
for (const [u, v] of info) {
  if (u.startsWith('/ru/')) {
    const cs = v.alt.find(([l]) => l === 'cs'); const o = cs && info.get(cs[1]);
    if (o && v.ids.length && v.ids.join() !== o.ids.slice(0, v.ids.length).join()) e(`${u}: ids differ from the Czech original ${cs[1]}`);
  }
}
if (articles < 30) e(`only ${articles} articles found`);
if (errs.length) { console.error('check-toc: ' + errs.length + ' problems\n' + errs.slice(0, 30).join('\n')); process.exit(1); }
console.log(`check-toc OK (${articles} articles)`);
