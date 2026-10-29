// Post-build check of /en/consulting/ (en): the same content as the Czech page, translated (brief of 29.10.2026).
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/en/consulting/';
const H1 = 'SEO consulting in Prague';
const SECTIONS = [H1, 'How much does an SEO consultation cost?', 'Who is an SEO consultation for?', 'What is included in an SEO consultation', 'How an SEO consultation works', 'In which languages is the consultation held?', 'Consultation, free audit, or Start and Full SEO?', 'What an SEO plan can bring', 'What clients say', 'Frequently asked questions about the SEO consultation', 'Why do clients trust me?', 'Non-binding enquiry', 'Other services'];
const LINKS = ['/en/free-audit/', '/en/3-month-start/', '/en/full-seo/', '/en/maps/', '/en/seo-and-geo/', '/en/case-studies/seo-translation-agency-4-months/', '/en/reviews/', '/en/faq/', '/en/privacy-policy/'];
const FORBIDDEN = ['60–90', '60-90', 'in-house', 'Marketingové', 'Konzultace'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Visible text only: <script> / <style> contents (incl. the JSON-LD itself) are removed first.
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/en/consulting/index.html', 'utf8');
const body = txt(h);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'SEO Consultation Prague: 1 Hour or Audit | Eranosian' || title.length < 35 || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc.length < 120 || desc.length > 150) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical must be the www URL');
if (!h.includes(`<meta property="og:url" content="${BASE}${URL_PATH}">`)) e('og:url must be the www URL');
if (/(?:href|content)="https:\/\/www\.seo-eranosian\.com/.test(h)) e('www absolute URL found: the canonical host is seo-eranosian.com');
for (const [l, p] of [['cs', '/konzultace/'], ['en', URL_PATH], ['ru', '/ru/konsultacii/'], ['x-default', '/konzultace/']]) {
  if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
if (!body.includes('from 2,000 CZK · online or in Prague')) e('price badge missing');
for (const f of FORBIDDEN) if (body.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<video|★|AggregateRating|ratingValue|VideoObject/.test(h)) e('video / stars / AggregateRating / VideoObject must not be on this page');
if (!/<table/.test(h)) e('comparison table must be HTML');
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
const EXPECT = [
  ['Option', 'Price', 'Duration', 'What you get'],
  ['Answers to your questions', '2,000 CZK', '1 hour', 'Answers to your questions about your website and SEO and a short written summary after the call'],
  ['Consultation + website audit', '3,000 CZK', 'No time limit', 'A website audit and a presentation with a 12-month action plan within 2 business days, then a consultation where we go through everything and I answer your questions'],
];
if (JSON.stringify(rows) !== JSON.stringify(EXPECT)) e(`table: ${JSON.stringify(rows)}`);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ht = by('HowTo');
if (wp.name !== title) e('WebPage.name != <title>');
if (wp.description !== desc) e('WebPage.description != meta description');
if (wp.inLanguage !== 'en') e('inLanguage');
const date = h.match(/Updated: <time datetime="([^"]+)">([^<]+)<\/time>/);
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} != visible ${date && date[1]}`);
if (!body.includes(sv.description)) e('Service.description not visible');
if (sv.name !== 'SEO consultation') e('Service.name');
if (JSON.stringify(sv.availableLanguage) !== '["cs","en","ru"]') e('availableLanguage');
const [o1, o2] = sv.offers;
if (sv.offers.length !== 2 || o1.priceCurrency !== 'CZK' || o2.priceCurrency !== 'CZK') e('two CZK offers expected');
const ps = o1.priceSpecification;
if (!ps || ps.price !== '2000' || ps.priceCurrency !== 'CZK' || ps.referenceQuantity.value !== 1 || ps.referenceQuantity.unitCode !== 'HUR' || 'price' in o1) e('offer 1 must be 2000 CZK per 1 HUR via priceSpecification');
if (o2.price !== '3000' || 'priceSpecification' in o2) e('offer 2 must be price 3000');
for (const o of sv.offers) if (!body.includes(o.name) || !body.includes(o.description)) e(`offer not visible verbatim: ${o.name}`);
if (/€|EUR/.test(JSON.stringify(ld))) e('no euro in JSON-LD');
if (!body.includes('approx. €80') || !body.includes('approx. €120')) e('approximate euro amounts in the visible text');
const cat = sv.hasOfferCatalog;
const lis = (h.match(/<h2[^>]*>What is included in an SEO consultation<\/h2>\s*<ul class="checks">([\s\S]*?)<\/ul>/) || [, ''])[1];
const incl = [...lis.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]).replace(/ ([:,.])/g, '$1'));
if (!body.includes(cat.name) || cat.itemListElement.length !== 6 || incl.length !== 6) e('OfferCatalog / included list must have 6 items');
else cat.itemListElement.forEach((i, k) => { if (!incl[k].toLowerCase().includes(i.itemOffered.name.toLowerCase())) e(`catalog item ${k + 1} not in visible list: ${i.itemOffered.name}`); });
if (fq.mainEntity.length !== 6 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('6 FAQ Q/A not visible verbatim');
const langAns = fq.mainEntity.at(-1).acceptedAnswer.text;
if (!new RegExp(`In which languages is the consultation held\\?</h2>\\s*<p class="answer">${langAns}</p>`).test(h)) e('language block must repeat the FAQ answer verbatim, right under its heading');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Home > Consulting' || bc.itemListElement.at(-1).item) e('breadcrumb');
if (ht) e('no HowTo on the English page');
if (sv.provider['@id'] !== by('Person')['@id']) e('provider must reference Person');
const rel = (sv.isRelatedTo ?? []).map((r) => r['@id']);
for (const p of ['/en/3-month-start/', '/en/full-seo/']) if (!rel.includes(`${BASE}${p}#service`)) e(`isRelatedTo ${p}`);
for (const [hd, ans] of [['How much does an SEO consultation cost?', 'An SEO consultation costs 2,000 CZK'], ['In which languages is the consultation held?', 'The consultation is held in Czech, English and Russian']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
// The shared 50 000 Kč / 15 000 Kč come from one source
if (!body.includes('Start for 3 months (50,000 CZK)') || !body.includes('Full SEO for a year (from 15,000 CZK per month)')) e('package prices in the comparison block');

// No related-articles block on the English page (the blog exists in Czech only); the examples carry the English slides and the translation of the Russian messages
if (/Související články|Related articles/.test(h)) e('no related-articles block in English');
if (!h.includes('/images/consulting/en/audit-3000-1.webp') || !body.includes('Translation of the messages in the screenshots')) e('English slides and the translation of the screenshots');
if (/Quantum|PriceHubble|Expats\.cz/.test(body)) e('no names of a competitor / service in the text');
if (errors.length) {
  console.error(`\nEnglish consulting page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('English consulting page check passed: en.');
