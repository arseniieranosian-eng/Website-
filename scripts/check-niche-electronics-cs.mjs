// Post-build check of the niche landing /seo-pro-obchody-s-elektronikou/ (cs, brief of 25.10.2026): meta (title <= 55, description <= 150), the H1 rule (result, no disclaimer, no negation), the proof line under the H1,
// section order, answer-first, lists/tables, prices = the live service pages, no quote without consent, no Heureka / brands / competitors, no guarantees, FAQ = JSON-LD, Service without Offer, cs-only, inbound links.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/seo-pro-obchody-s-elektronikou/';
const H1 = 'SEO a GEO/AEO pro obchody s elektronikou: objednávky z Googlu a AI';
const TITLE = 'SEO pro obchody s elektronikou a technikou | Eranosian';
const DESC = 'Dělám SEO a GEO/AEO pro obchody s elektronikou a technikou: kategorie, filtry, varianty produktů, FAQ. Bez garancí. Bezplatný technický audit.';
const SECTIONS = [H1, 'S čím obchodům s technikou pomáhám', 'Pro koho je to a pro koho ne?', 'Co obsahuje bezplatný audit a co ne?', 'Profil prodejny na mapách', 'Jak začít a kolik stojí', 'Časté otázky', 'Další krok'];
const LINKS = ['/audit-zdarma/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/seo-a-geo/', '/pripadove-studie/seo-prekladatelska-agentura/', '/o-mne/'];
const FORBIDDEN = ['garantovaně', 'zaručeně', 'top 1', 'SEO agentur', 'Heureka', 'Zboží', 'Alza', 'Datart', 'DPH', 'AggregateRating', 'N webů', 'často nacház', 'tiskárn'];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/seo-pro-obchody-s-elektronikou/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1 || title.length >= H1.length) e('title must differ from the H1 and be shorter');
if (/negarant|bez slib|bez garanc|nezaruč|ne\b/i.test(H1.replace(/\bne\b/g, '')) || /negarant|bez slib|bez garanc/i.test(H1)) e('the H1 carries no disclaimer or negation');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('Czech only, indexable, no hreflang, no x-default');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/(?:en\/|ru\/)?blog\/|<form|<video|<iframe|\/seo-pro-prekladatelske|\/seo-pro-realitni|\/seo-pro-ucetni|\/seo-pro-tiskarny|\/seo-pro-strojirenske|\/seo-pro-pocitacove/.test(main)) e('no blog links, no form / video / iframe, no links to the other niche landing pages');
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt)) e('"agentura" about the author');
if (/GEO(?!\/AEO)/.test(mainTxt)) e('"GEO" only together with AEO');
if (!/Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">\d{1,2}\. \d{1,2}\. \d{4}<\/time>/.test(h)) e('visible date');
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/audit-zdarma\/"/g) !== 3 || cnt(/href="\/audit-zdarma\/#vystup-auditu"/g) !== 1) e(`audit links: ${cnt(/href="\/audit-zdarma\/"/g)} + the example link (hero, audit section, CTA)`);
if (cnt(/href="\/konzultace\/"/g) !== 1 || cnt(/href="\/seo-a-geo\/"/g) !== 1 || cnt(/href="\/lokalni-seo-mapy\/"/g) !== 1) e('consulting / SEO a GEO/AEO / maps once each');
if (cnt(/href="\/start-3-mesice\/"/g) < 1 || cnt(/href="\/full-seo\/"/g) < 1) e('Start / Full SEO linked');
if (cnt(/class="btn btn--primary/g) !== 2) e('two buttons: hero and the closing CTA');
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (!lead.startsWith('Dělám SEO a GEO/AEO pro obchody s elektronikou a technikou') || !lead.endsWith('Počet objednávek ani pozice negarantuji.')) e('hero lead (the disclaimer is on the first screen)');
// Proof line: metric + period + another niche, no absolute numbers, not merged with ×24 / ×3, not the print-shop case
if (!mainTxt.includes('Například u překladatelské agentury, se kterou pracuji od března 2026, rostly poptávky z webu o 65–70 % měsíc po měsíci tři měsíce po sobě. V oboru obchodů s elektronikou zatím výsledky nemám.')) e('proof line');
if (/×24|×3|8,75|1 200|10 500/.test(mainTxt)) e('no ×24 / ×3 / the print-shop figures');
const caseTxt = txt(readFileSync('dist/pripadove-studie/seo-prekladatelska-agentura/index.html', 'utf8'));
if (!/65\s?–\s?70\s?%/.test(caseTxt) || !/březen\s?–\s?září 2026/.test(caseTxt)) e('the proof line must match the live case page (65–70 %, březen–září 2026)');
for (const hd of SECTIONS.slice(1, 6)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
const lists = (re) => [...(main.match(re) || [, ''])[1].matchAll(/<li>/g)].length;
if (lists(/Co dostanete:[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) !== 6) e('what I do: 6 bullets');
if (lists(/Co technicky zkontroluji na vašem e-shopu:[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) !== 8) e('audit checklist: 8');
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 5 || rows[0].join('|') !== 'Co obsahuje|Co neobsahuje') e('audit table: header + 4 rows');
// v2: no quote and no objection block on the landing (they moved to funnel article 4)
if (/<blockquote|<figure class="owner-quote"|Butyrina|kliknutí se platí/.test(h)) e('no PPC quote / objection block on the landing');
// Prices: the same as on the live service pages (single sources)
const pg = (f) => txt(readFileSync(f, 'utf8'));
const cons = pg('dist/konzultace/index.html'), start = pg('dist/start-3-mesice/index.html'), full = pg('dist/full-seo/index.html');
for (const [p, where, label] of [['2 000 Kč', cons, 'konzultace'], ['3 000 Kč', cons, 'konzultace'], ['50 000 Kč', start, 'Start'], ['25 000 Kč', start, 'Start'], ['15 000 Kč', full, 'Full SEO']]) {
  if (!where.includes(p)) e(`price ${p} not found on the ${label} page`);
  if (!mainTxt.includes(p) && p !== '25 000 Kč') e(`price ${p} missing on this page`);
}
if (!mainTxt.includes('Konzultace stojí 2 000 Kč za hodinu nebo 3 000 Kč s auditem webu a plánem na 12 měsíců, balíček Start na 3 měsíce 50 000 Kč, Full SEO od 15 000 Kč měsíčně.')) e('cooperation answer with prices');
if (!mainTxt.includes('k 25. 10. 2026 je obor volný') || !mainTxt.includes('K 25. 10. 2026 je obor obchodů s elektronikou volný') || /\d ze 3|max\. ?3/i.test(mainTxt)) e('capacity lines, no counter');
// JSON-LD
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => g.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (g.some((n) => ['AggregateRating', 'Review', 'VideoObject', 'HowTo', 'Product', 'Offer', 'Quotation'].includes(n['@type']))) e('no AggregateRating / Review / VideoObject / HowTo / Quotation / Product / Offer');
if (sv.offers || sv.areaServed.name !== 'Praha' || sv.provider['@id'] !== by('Person')['@id'] || sv.serviceType !== 'SEO a GEO/AEO' || sv.name !== 'SEO a GEO/AEO pro obchody s elektronikou') e('Service');
if (wp.inLanguage !== 'cs' || wp.name !== H1 || wp.datePublished !== '2026-10-25' || wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#service` || wp.author['@id'] !== by('Person')['@id']) e('WebPage');
if (wp.dateModified !== h.match(/Aktualizováno: <time datetime="([^"]+)"/)[1]) e('dateModified = visible date');
const faqHtml = (main.match(/<div class="faq-open">[\s\S]*?<\/section>/) || [''])[0];
const visFaq = [...faqHtml.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 7 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage: 7 questions equal to the visible FAQ');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[1].name !== 'SEO pro obchody s elektronikou') e('breadcrumbs: Domů → SEO pro obchody s elektronikou');
// Inbound
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (!readFileSync('dist/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('home link');
if (readFileSync('dist/en/index.html', 'utf8').includes(URL_PATH) || readFileSync('dist/ru/index.html', 'utf8').includes(URL_PATH)) e('only the Czech version links to the page');
if (errors.length) { console.error('✗ check-niche-electronics-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-electronics-cs: ok (${mainTxt.split(/\s+/).length} words)`);
