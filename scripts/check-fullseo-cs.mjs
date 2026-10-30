// Post-build check of /full-seo/ (cs) against its brief of 20.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/full-seo/';
const H1 = 'Full SEO na rok';
const SECTIONS = [H1, 'Kolik stojí Full SEO na rok?', 'Pro koho je Full SEO na rok vhodné?', 'Co je v ceně Full SEO na rok?', 'Mapy Google, Mapy.com a Firmy.cz jsou součástí balíčku', 'Jak probíhá Full SEO na rok?', 'Kdy přijdou první výsledky SEO?', 'Garantujete první místo v Google?', 'Full SEO na rok, nebo Start na 3 měsíce?', 'Co to přineslo klientům?', 'Co říkají klienti?', 'Související články', 'Časté otázky o Full SEO na rok', 'Nezávazná poptávka', 'Další služby'];
const LINKS = ['/audit-zdarma/', '/konzultace/', '/start-3-mesice/', '/lokalni-seo-mapy/', '/seo-a-geo/', '/pripadove-studie/seo-prekladatelska-agentura-4-mesice/', '/recenze/', '/caste-dotazy/', '/ochrana-osobnich-udaju/'];
// Positioning: a specialist ("já"), not an agency ("my"). The client's own agency in the case text is fine.
const FORBIDDEN = ['SEO agentura', 'naše agentura', 'agentura Praha', 'Marketingové týmy', 'in-house', 'měsíční report', '4–8 týdnů', 'ESP', 'PMŘ'];
const MAPS_ITEM = 'Vedení profilů na mapách Google, Mapy.com a Firmy.cz bez omezení počtu profilů: hovory, trasy, přechody na web, recenze';

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Visible text only: <script> / <style> contents (incl. the JSON-LD itself) are removed first.
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/full-seo/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'Full SEO na rok — od 15 000 Kč měsíčně | Eranosian' || title.length < 35 || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc.length < 120 || desc.length > 150) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:locale cs_CZ');
for (const [l, p] of [['cs', URL_PATH], ['en', '/en/full-seo/'], ['ru', '/ru/full-seo/'], ['x-default', URL_PATH]]) {
  if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
if (!mainTxt.includes('Délka: 12 měsíců') || !mainTxt.includes('od 15 000 Kč měsíčně · 12 měsíců')) e('label / price badge missing');
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
if (/(?<![\p{L}])(my|náš|naše)(?![\p{L}])/iu.test(mainTxt.replace(/Příklad[^.]*\./g, ''))) e('"my / naše" must not be used: the author works as a specialist ("já")');
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<video|★|AggregateRating|ratingValue|VideoObject/.test(h)) e('video / stars / AggregateRating / VideoObject must not be on this page');
const h3s = [...h.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => txt(m[1]));
for (const g of ['Práce na webu', 'Práce mimo web', 'GEO/AEO a reporting']) if (!h3s.includes(g)) e(`missing H3 group: ${g}`);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ht = by('HowTo');
if (wp.name !== title) e('WebPage.name != <title>');
if (wp.description !== desc) e('WebPage.description != meta description');
if (wp.inLanguage !== 'cs') e('inLanguage');
const date = h.match(/Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time>/);
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} != visible ${date && date[1]}`);
if (!body.includes(sv.description)) e('Service.description not visible');
if (sv.name !== H1 || sv.alternateName !== 'Celoroční SEO' || sv.serviceType !== 'Komplexní SEO služby') e('Service name / alternateName / serviceType');
if (JSON.stringify(sv.availableLanguage) !== '["cs","en","ru"]') e('availableLanguage');
const o = sv.offers;
const ps = o.priceSpecification;
if (Array.isArray(o) || 'price' in o || o.priceCurrency !== 'CZK' || o.eligibleDuration.value !== 12 || o.eligibleDuration.unitCode !== 'MON') e('offer: single CZK offer, 12 MON, price only via priceSpecification');
if (!ps || ps.price !== '15000' || ps.priceCurrency !== 'CZK' || ps.referenceQuantity.value !== 1 || ps.referenceQuantity.unitCode !== 'MON') e('priceSpecification must be 15000 CZK per 1 MON');
if (o.description !== 'Od 15 000 Kč měsíčně, přesná cena závisí na rozsahu práce a oboru' || !body.includes(o.description)) e('Offer.description');
if (/€|EUR/.test(JSON.stringify(ld))) e('no euro in JSON-LD');
const cat = sv.hasOfferCatalog;
const flat = body.replace(/\( /g, '(').replace(/ \)/g, ')'); // inline links leave a space inside parentheses after tag stripping
if (!body.includes(cat.name) || cat.itemListElement.length !== 11) e('OfferCatalog must have 11 items and a visible name');
else if (!cat.itemListElement.every((i) => flat.includes(i.itemOffered.name) || i.itemOffered.name === MAPS_ITEM)) e('OfferCatalog does not match the visible list');
if (!cat.itemListElement.some((i) => i.itemOffered.name === MAPS_ITEM)) e('maps item of the OfferCatalog must use the wording from the brief');
if (fq.mainEntity.length !== 6 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('6 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > Full SEO na rok' || bc.itemListElement.at(-1).item) e('breadcrumb (two levels)');
if (!ht || ht.totalTime !== 'P12M' || ht.step.length !== 4) e('HowTo: expected totalTime P12M and 4 steps');
else {
  const ol = [...(h.match(/<ol class="steps[^>]*>([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]));
  ht.step.forEach((st, i) => { if (ol[i] !== st.text || st.name !== `Krok ${i + 1}`) e(`step ${i + 1} in <ol> != HowToStep ("${ol[i]}")`); });
}
if (sv.provider['@id'] !== by('Person')['@id']) e('provider must reference Person');
const rel = (sv.isRelatedTo ?? []).map((r) => r['@id']);
for (const p of ['/start-3-mesice/', '/konzultace/', '/lokalni-seo-mapy/']) if (!rel.includes(`${BASE}${p}#service`)) e(`isRelatedTo ${p}`);
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
const EXPECT = [
  ['Parametr', 'Start na 3 měsíce', 'Full SEO na rok'],
  ['Délka', '3 měsíce', '12 měsíců'],
  ['Cena', '50 000 Kč (25 000 Kč na začátku, 25 000 Kč po dohodě)', 'od 15 000 Kč měsíčně'],
  ['Zaměření', 'Technický základ, struktura webu, optimalizace hlavních stránek, měření', 'Roční strategie, obsah každý měsíc, linkbuilding, čtvrtletní plány, výsledky roku'],
  ['Mapy Google, Mapy.com a Firmy.cz', 'Ano, bez omezení počtu profilů', 'Ano, bez omezení počtu profilů'],
  ['Reporty', 'Týdenní, call podle zájmu', 'Týdenní, call podle zájmu'],
];
if (JSON.stringify(rows) !== JSON.stringify(EXPECT)) e(`table: ${JSON.stringify(rows)}`);
for (const [hd, ans] of [['Kolik stojí Full SEO na rok?', 'Full SEO na rok stojí od 15 000 Kč měsíčně'], ['Kdy přijdou první výsledky SEO?', 'První výsledky SEO obvykle přijdou za 2-3 měsíce'], ['Garantujete první místo v Google?', 'Ne. První místo v Google nelze poctivě garantovat']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
if (!body.includes('od 4 měsíců, s platbou za výsledek')) e('maps block must mention the standalone service terms');

// Related articles: four cards with covers (choosing the first step, advertising, SEO audit, indexation check)
const ra = (h.match(/Související články<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...ra.matchAll(/<a class="card card--link post-card" href="\/blog\/[a-z0-9-]+\/"[^>]*>\s*<img class="post-card-img"/g)].length !== 4 || !ra.includes('/blog/audit-konzultace-nebo-start/')) e('related articles: four cards with covers');
if (errors.length) {
  console.error(`\nCzech Full SEO page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech Full SEO page check passed: cs.');
