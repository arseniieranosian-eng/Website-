// Post-build check of /sluzby/konzultace/ (cs) against its brief of 19.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://www.seo-eranosian.com';
const URL_PATH = '/sluzby/konzultace/';
const H1 = 'SEO konzultace';
const SECTIONS = [H1, 'Kolik stojí SEO konzultace?', 'Pro koho je SEO konzultace vhodná?', 'Co je součástí SEO konzultace', 'Jak probíhá SEO konzultace', 'V jakých jazycích konzultace probíhá?', 'Konzultace, audit zdarma, nebo Start a Full SEO?', 'Co může SEO plán přinést', 'Co říkají klienti', 'Časté otázky o SEO konzultaci', 'Nezávazná poptávka', 'Další služby'];
const LINKS = ['/audit-zdarma/', '/sluzby/start-3-mesice/', '/sluzby/full-seo/', '/sluzby/mapy/', '/seo-a-geo/', '/pripadove-studie/kb-preklady/', '/recenze/', '/caste-dotazy/', '/sluzby/', '/ochrana-osobnich-udaju/'];
const FORBIDDEN = ['60–90', '60-90', 'Marketingové týmy', 'in-house', 'nahrávk', 'Jak probíhá spolupráce'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Visible text only: <script> / <style> contents (incl. the JSON-LD itself) are removed first.
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/sluzby/konzultace/index.html', 'utf8');
const body = txt(h);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'SEO konzultace — od 2 000 Kč za hodinu | Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc.length < 120 || desc.length > 160) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical must be the www URL');
if (!h.includes(`<meta property="og:url" content="${BASE}${URL_PATH}">`)) e('og:url must be the www URL');
if (/(?:href|content)="https:\/\/seo-eranosian\.com/.test(h)) e('non-www absolute URL found');
for (const [l, p] of [['cs', URL_PATH], ['en', '/en/services/consulting/'], ['ru', '/ru/uslugi/konsultacii/'], ['x-default', URL_PATH]]) {
  if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
if (!body.includes('od 2 000 Kč · online nebo v Praze')) e('price badge missing');
for (const f of FORBIDDEN) if (body.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<video|★|AggregateRating|ratingValue|VideoObject/.test(h)) e('video / stars / AggregateRating / VideoObject must not be on this page');
if (!/<table/.test(h)) e('comparison table must be HTML');
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
const EXPECT = [
  ['Varianta', 'Cena', 'Délka', 'Co dostanete'],
  ['Odpovím na vaše otázky', '2 000 Kč', '1 hodina', 'Odpovědi na vaše otázky k webu a SEO a krátké písemné shrnutí po hovoru'],
  ['Konzultace + audit webu', '3 000 Kč', 'Bez časového omezení', 'Audit webu a prezentace s akčním plánem na 12 měsíců do 2 dnů, poté konzultace, kde vše probereme a odpovím na vaše otázky'],
];
if (JSON.stringify(rows) !== JSON.stringify(EXPECT)) e(`table: ${JSON.stringify(rows)}`);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ht = by('HowTo');
if (wp.name !== title) e('WebPage.name != <title>');
if (wp.description !== desc) e('WebPage.description != meta description');
if (wp.inLanguage !== 'cs') e('inLanguage');
const date = h.match(/Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time>/);
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} != visible ${date && date[1]}`);
if (!body.includes(sv.description)) e('Service.description not visible');
if (sv.name !== H1) e('Service.name');
if (JSON.stringify(sv.availableLanguage) !== '["cs","en","ru"]') e('availableLanguage');
const [o1, o2] = sv.offers;
if (sv.offers.length !== 2 || o1.priceCurrency !== 'CZK' || o2.priceCurrency !== 'CZK') e('two CZK offers expected');
const ps = o1.priceSpecification;
if (!ps || ps.price !== '2000' || ps.priceCurrency !== 'CZK' || ps.referenceQuantity.value !== 1 || ps.referenceQuantity.unitCode !== 'HUR' || 'price' in o1) e('offer 1 must be 2000 CZK per 1 HUR via priceSpecification');
if (o2.price !== '3000' || 'priceSpecification' in o2) e('offer 2 must be price 3000');
for (const o of sv.offers) if (!body.includes(o.name) || !body.includes(o.description)) e(`offer not visible verbatim: ${o.name}`);
if (/€|EUR/.test(JSON.stringify(ld))) e('no euro in JSON-LD');
const cat = sv.hasOfferCatalog;
const lis = (h.match(/<h2[^>]*>Co je součástí SEO konzultace<\/h2>\s*<ul class="checks">([\s\S]*?)<\/ul>/) || [, ''])[1];
const incl = [...lis.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]).replace(/ ([:,.])/g, '$1'));
if (!body.includes(cat.name) || cat.itemListElement.length !== 6 || incl.length !== 6) e('OfferCatalog / included list must have 6 items');
else cat.itemListElement.forEach((i, k) => { if (!incl[k].toLowerCase().includes(i.itemOffered.name.toLowerCase())) e(`catalog item ${k + 1} not in visible list: ${i.itemOffered.name}`); });
if (fq.mainEntity.length !== 6 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('6 FAQ Q/A not visible verbatim');
const langAns = fq.mainEntity.at(-1).acceptedAnswer.text;
if (!new RegExp(`V jakých jazycích konzultace probíhá\\?</h2>\\s*<p class="answer">${langAns}</p>`).test(h)) e('language block must repeat the FAQ answer verbatim, right under its heading');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > Služby > SEO konzultace' || bc.itemListElement.at(-1).item) e('breadcrumb');
if (!ht || ht.step.length !== 4) e('HowTo: expected 4 steps');
else {
  const ol = [...(h.match(/<ol class="steps[^>]*>([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]));
  ht.step.forEach((st, i) => { if (ol[i] !== st.text || st.name !== `Krok ${i + 1}`) e(`step ${i + 1} in <ol> != HowToStep ("${ol[i]}")`); });
}
if (sv.provider['@id'] !== by('Person')['@id']) e('provider must reference Person');
const rel = (sv.isRelatedTo ?? []).map((r) => r['@id']);
for (const p of ['/sluzby/start-3-mesice/', '/sluzby/full-seo/']) if (!rel.includes(`${BASE}${p}#service`)) e(`isRelatedTo ${p}`);
for (const [hd, ans] of [['Kolik stojí SEO konzultace?', 'SEO konzultace stojí 2 000 Kč za hodinu'], ['V jakých jazycích konzultace probíhá?', 'Konzultace probíhá v češtině, angličtině a ruštině']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
// The shared 50 000 Kč / 15 000 Kč come from one source
if (!body.includes('Start na 3 měsíce (50 000 Kč)') || !body.includes('Full SEO na rok (od 15 000 Kč měsíčně)')) e('package prices in the comparison block');

if (errors.length) {
  console.error(`\nCzech consulting page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech consulting page check passed: cs.');
