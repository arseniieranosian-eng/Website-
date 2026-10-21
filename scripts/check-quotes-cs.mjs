// Post-build check of the author's quotes on the Czech service pages (brief of 20.10.2026): position, markup, Quotation node.
import { readFileSync } from 'node:fs';

const BASE = 'https://www.seo-eranosian.com';
const PAGES = [
  { path: '/konzultace/', dir: 'konzultace', prev: 'Konzultace, audit zdarma, nebo Start a Full SEO?', next: 'Co může SEO plán přinést', text: 'Konzultace dá odpovědi a plán. Práci za vás neprovádím, a když potřebujete realizaci, řeknu to rovnou.' },
  { path: '/start-3-mesice/', dir: 'start-3-mesice', prev: 'Jak probíhá SEO start', next: 'Kdy přijdou první výsledky SEO?', text: 'Start není o rychlých trucích. Je to tři měsíce práce na základu webu: technika, struktura a hlavní stránky, aby měl další růst na čem stát.' },
  { path: '/full-seo/', dir: 'full-seo', prev: 'Jak probíhá Full SEO na rok', next: 'Kdy přijdou první výsledky SEO?', text: 'Rok SEO není sprint. Strategie, čtvrtletní priority a nový obsah každý měsíc se sčítají, proto Full SEO dává smysl tam, kde chcete růst dlouhodobě.' },
  { path: '/mapy/', dir: 'mapy', prev: 'Jaké metriky z map sleduji?', next: 'Lokální stránky pro pobočky a provozovny', text: 'V mapách nerozhoduje jen pozice. Rozhodují hovory, trasy a návštěvy webu, proto sleduji právě je.' },
];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s ]+/g, ' ').trim();
const strip = (s) => norm(dec(s.replace(/<[^>]+>/g, ' ')));
const errors = [];
const e = (m) => errors.push(m);

for (const P of PAGES) {
  const h = readFileSync(`dist/${P.dir}/index.html`, 'utf8');
  const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
  const url = `${BASE}${P.path}`;
  // one figure, exact markup, one link to /o-mne/
  const figs = [...main.matchAll(/<figure class="quote-fig">\s*<blockquote cite="([^"]*)"><p>([^<]*)<\/p><\/blockquote>\s*<figcaption><img src="\/images\/author-1-avatar\.jpg"[^>]*><span>— <a href="\/o-mne\/">Arsenii Eranosian<\/a>, SEO a GEO\/AEO specialista<\/span><\/figcaption>\s*<\/figure>/g)];
  if (figs.length !== 1 || figs[0][1] !== url || dec(figs[0][2]) !== P.text) { e(`${P.path}: one quote figure with cite = page URL, the text and the signature linking to /o-mne/`); continue; }
  // position: right after the named block, before the next one (not in the hero)
  const i = main.indexOf('class="quote-fig"');
  const hs = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => ({ pos: m.index, t: strip(m[1]) }));
  const prev = hs.filter((x) => x.pos < i).at(-1)?.t, next = hs.find((x) => x.pos > i)?.t;
  if (prev !== P.prev || next !== P.next) e(`${P.path}: quote must sit after "${P.prev}" and before "${P.next}" (found ${prev} / ${next})`);
  // JSON-LD
  const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const q = ld.filter((n) => n['@type'] === 'Quotation');
  const wp = ld.find((n) => n['@type'] === 'WebPage'), person = ld.find((n) => n['@type'] === 'Person');
  if (q.length !== 1 || q[0]['@id'] !== `${url}#quote-1` || q[0].text !== P.text || q[0].inLanguage !== 'cs' || q[0].creator['@id'] !== person['@id'] || q[0].isPartOf['@id'] !== wp['@id']) e(`${P.path}: Quotation node`);
}

if (errors.length) {
  console.error(`\nCzech service-page quotes check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech service-page quotes check passed: cs.');
