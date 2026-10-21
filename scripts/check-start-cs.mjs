// Post-build check of /start-3-mesice/ (cs) against its brief of 19.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://www.seo-eranosian.com';
const URL_PATH = '/start-3-mesice/';
const H1 = 'SEO start na 3 měsíce';
const SECTIONS = [H1, 'Kolik stojí SEO start na 3 měsíce?', 'Pro koho je SEO start vhodný?', 'Co je v ceně SEO startu', 'Mapy Google a Mapy.com jsou součástí balíčku', 'Jak probíhá SEO start', 'Kdy přijdou první výsledky SEO?', 'Garantujete první místo v Google?', 'Start na 3 měsíce, nebo Full SEO na rok?', 'Co to přineslo klientům', 'Co říkají klienti', 'Časté otázky o SEO startu', 'Nezávazná poptávka', 'Další služby'];
const LINKS = ['/audit-zdarma/', '/konzultace/', '/full-seo/', '/mapy/', '/seo-a-geo/', '/pripadove-studie/seo-prekladatelska-agentura/', '/recenze/', '/caste-dotazy/', '/ochrana-osobnich-udaju/'];
const FORBIDDEN = ['agentura Praha', 'SEO agentura', 'měsíční report', '4–8 týdnů', 'Jak probíhá spolupráce', 'Marketingové týmy', 'in-house'];
// Wording of the maps item of the OfferCatalog is fixed by the brief (merges the three map bullets).
const MAPS_ITEM = 'Profily na Google i Mapy.com bez omezení počtu: hovory, trasy, přechody na web, recenze';

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Visible text only: <script> / <style> contents (incl. the JSON-LD itself) are removed first.
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/start-3-mesice/index.html', 'utf8');
const body = txt(h);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'SEO start na 3 měsíce za 50 000 Kč: audit, mapy | Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc.length < 120 || desc.length > 160) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:locale cs_CZ');
for (const [l, p] of [['cs', URL_PATH], ['en', '/en/3-month-start/'], ['ru', '/ru/start-3-mesyaca/'], ['x-default', URL_PATH]]) {
  if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
if (!body.includes('50 000 Kč · 3 měsíce · týdenní reporty')) e('price badge missing');
for (const f of FORBIDDEN) if (body.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<video|★|AggregateRating|ratingValue|VideoObject/.test(h)) e('video / stars / AggregateRating / VideoObject must not be on this page');
const h3s = [...h.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => txt(m[1]));
for (const g of ['Práce na webu', 'Mapy Google a Mapy.com', 'GEO/AEO a reporting']) if (!h3s.includes(g)) e(`missing H3 group: ${g}`);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ht = by('HowTo');
if (wp.name !== title) e('WebPage.name != <title>');
if (wp.description !== desc) e('WebPage.description != meta description');
if (wp.inLanguage !== 'cs') e('inLanguage');
const date = h.match(/Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time>/);
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} != visible ${date && date[1]}`);
if (!body.includes(sv.description)) e('Service.description not visible');
if (sv.name !== H1 || sv.serviceType !== 'SEO optimalizace webu') e('Service name / serviceType');
if (JSON.stringify(sv.availableLanguage) !== '["cs","en","ru"]') e('availableLanguage');
const o = sv.offers;
if (Array.isArray(o) || o.price !== '50000' || o.priceCurrency !== 'CZK' || o.eligibleDuration.value !== 3 || o.eligibleDuration.unitCode !== 'MON') e('offer must be a single 50000 CZK / 3 MON offer');
if (o.description !== '50 000 Kč, platba 25 000 Kč na začátku a 25 000 Kč po dohodě' || !body.includes(o.description)) e('Offer.description');
if (/€|EUR/.test(JSON.stringify(ld))) e('no euro in JSON-LD');
const cat = sv.hasOfferCatalog;
const flat = body.replace(/\( /g, '(').replace(/ \)/g, ')'); // inline links leave a space inside parentheses after tag stripping
if (!body.includes(cat.name) || cat.itemListElement.length !== 8) e('OfferCatalog must have 8 items and a visible name');
else if (!cat.itemListElement.every((i) => flat.includes(i.itemOffered.name) || i.itemOffered.name === MAPS_ITEM)) e('OfferCatalog does not match the visible list');
if (!cat.itemListElement.some((i) => i.itemOffered.name === MAPS_ITEM)) e('maps item of the OfferCatalog must use the wording from the brief');
if (fq.mainEntity.length !== 6 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('6 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > SEO start na 3 měsíce' || bc.itemListElement.at(-1).item) e('breadcrumb');
if (!ht || ht.totalTime !== 'P3M' || ht.step.length !== 3) e('HowTo: expected totalTime P3M and 3 steps');
else {
  const lis = [...(h.match(/<ol class="steps[^>]*>([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]));
  ht.step.forEach((st, i) => { if (lis[i] !== `${st.name}: ${st.text}`) e(`stage ${i + 1} in <ol> != HowToStep ("${lis[i]}")`); });
  if (!/<\/ol>\s*<p[^>]*>Každý týden dostanete report\.<\/p>/.test(h)) e('weekly line must be a separate paragraph right under the list');
}
if (sv.provider['@id'] !== by('Person')['@id']) e('provider must reference Person');
const rel = (sv.isRelatedTo ?? []).map((r) => r['@id']);
for (const p of ['/full-seo/', '/konzultace/', '/mapy/']) if (!rel.includes(`${BASE}${p}#service`)) e(`isRelatedTo ${p}`);
// Comparison table (HTML) and answer-first blocks
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
const EXPECT = [
  ['Parametr', 'Start na 3 měsíce', 'Full SEO na rok'],
  ['Délka', '3 měsíce', '12 měsíců'],
  ['Cena', '50 000 Kč (25 000 Kč na začátku, 25 000 Kč po dohodě)', 'od 15 000 Kč měsíčně'],
  ['Zaměření', 'Technický základ, struktura webu, optimalizace hlavních stránek, měření', 'Roční strategie, obsah každý měsíc, linkbuilding, čtvrtletní plány, výsledky roku'],
  ['Mapy Google a Mapy.com', 'Ano, bez omezení počtu profilů', 'Ano, bez omezení počtu profilů'],
  ['Reporty', 'Týdenní, call podle zájmu', 'Týdenní, call podle zájmu'],
];
if (JSON.stringify(rows) !== JSON.stringify(EXPECT)) e(`table: ${JSON.stringify(rows)}`);
for (const [hd, ans] of [['Kolik stojí SEO start na 3 měsíce?', 'SEO start na 3 měsíce stojí 50 000 Kč'], ['Kdy přijdou první výsledky SEO?', 'První výsledky SEO obvykle přijdou za 2-3 měsíce'], ['Garantujete první místo v Google?', 'Ne. První místo v Google nelze poctivě garantovat']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
if (!body.includes('od 4 měsíců, s platbou za výsledek')) e('maps block must mention the standalone service terms');

if (errors.length) {
  console.error(`\nCzech Start page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech Start page check passed: cs.');
