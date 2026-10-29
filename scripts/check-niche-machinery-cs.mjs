// Post-build check of the niche landing /seo-pro-strojirenske-firmy/ (cs, brief of 25.10.2026): meta (title <= 55, description <= 150), section order, answer-first, lists/tables, the audit example block
// (links only, findings as on the audit page, no client / domain), no prices, no guarantees, no "agentura" about the author, FAQ = JSON-LD, Service without Offer, cs-only (no hreflang), inbound links.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/seo-pro-strojirenske-firmy/';
const NAME = 'SEO a GEO/AEO pro strojírenské firmy'; // the breadcrumb label (META name)
const H1 = 'SEO a GEO/AEO pro strojírenské firmy: poptávky z Googlu a AI';
const TITLE = 'SEO pro strojírenské firmy a výrobu | Eranosian';
const DESC = 'Dělám SEO a GEO/AEO pro strojírenské a výrobní firmy: stránky technologií, PDF katalogy, poptávkový formulář. Bez slibů. Technický audit zdarma.';
const SECTIONS = [H1, 'Co pro strojírenskou firmu dělám?', 'Pro koho je to a pro koho ne?', 'Ukázka auditu ze související oblasti', 'Co obsahuje bezplatný audit a co ne?', 'Jak spolupráce probíhá?', 'Časté otázky', 'Další krok'];
const LINKS = ['/audit-zdarma/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/seo-a-geo/', '/o-mne/'];
const FORBIDDEN = ['garantovaně', 'zaručeně', 'top 1', 'rychlé výsledky pro', 'SEO agentur', 'Kč', 'Německ', 'export', 'ISO ', 'certifik', 'tiskárn', 'AggregateRating', 'na části webů', 'N webů', 'poptávky z Německa'];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/seo-pro-strojirenske-firmy/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('Czech only, indexable, no hreflang');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/(?:en\/|ru\/)?blog\/|<form|<video|<iframe|\/seo-pro-prekladatelske|\/seo-pro-realitni|\/seo-pro-ucetni|\/seo-pro-tiskarny/.test(main)) e('no blog links, no form / video / iframe, no links to the other niche landing pages');
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt)) e('"agentura" about the author');
if (/GEO(?!\/AEO)/.test(mainTxt)) e('"GEO" only together with AEO');
if (!/Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">\d{1,2}\. \d{1,2}\. \d{4}<\/time>/.test(h)) e('visible date');
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/audit-zdarma\/"/g) !== 3 || cnt(/href="\/audit-zdarma\/#priklady-auditu"/g) !== 1) e(`audit links: ${cnt(/href="\/audit-zdarma\/"/g)} + the example link (hero, audit section, CTA)`);
for (const l of ['/konzultace/', '/start-3-mesice/', '/full-seo/', '/seo-a-geo/']) if (cnt(new RegExp(`href="${l}"`, 'g')) !== 1) e(`${l} once`);
if (cnt(/class="btn btn--primary/g) !== 2) e('two buttons: hero and the closing CTA');
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (!lead.startsWith('Dělám SEO a GEO/AEO pro strojírenské a výrobní firmy') || !lead.endsWith('zaručit nelze.')) e('hero lead');
for (const hd of SECTIONS.slice(1, 6)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
const ols = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (ols.length !== 1 || [...ols[0][1].matchAll(/<li><span>/g)].length !== 3) e('three steps list');
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 5 || rows[0].join('|') !== 'Co obsahuje|Co neobsahuje') e('audit table: header + 4 rows');
if (([...(main.match(/Co zkontrolovat na webu výrobní firmy:[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) || [, ''])[1].matchAll(/<li>/g)]).length !== 5) e('audit checklist: 5 items');
if (!mainTxt.includes('pracuji s češtinou, angličtinou, ruštinou, ukrajinštinou a němčinou: řeším jejich indexaci a strukturu.') || !mainTxt.includes('texty v těchto jazycích nepíšu')) e('language versions line');
// Audit example: links only, findings as on the audit page, no client / domain
if (!mainTxt.includes('V ukázce je například jedna canonical adresa na neindexovatelné stránce a osm stránek, u kterých canonical vede na jinou adresu.')) e('findings line');
const audit = txt(readFileSync('dist/audit-zdarma/index.html', 'utf8'));
if (!audit.includes('1 canonical na neindexovatelnou stránku, 8 stránek s canonical na jinou adresu')) e('findings must match the audit page');
if (!/href="https:\/\/youtube\.com\/shorts\/J6w0iMTKJJk" target="_blank" rel="noopener"/.test(main) || /si=|utm_/.test(main)) e('YouTube Short link: rel=noopener, no tracking parameters');
if (/\.(?:com|cz|net|io)\b/.test(mainTxt.replace(/Mapy\.com|YouTube/g, ''))) e('no domain names');
if (!audit.includes('SEO a GEO/AEO pro strojírenské firmy') || !readFileSync('dist/audit-zdarma/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('the audit page links to this landing');
// Capacity line
if (!mainTxt.includes('k 25. 10. 2026 je obor strojírenských a výrobních firem volný') || /\d ze 3|max\. ?3/i.test(mainTxt)) e('capacity line, no counter');
// JSON-LD
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => g.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (g.some((n) => ['AggregateRating', 'Review', 'HowTo', 'Quotation'].includes(n['@type']))) e('no AggregateRating / Review / HowTo / Quotation');
if (g.some((n) => n['@type'] === 'VideoObject' && String(n['@id']).includes('strojirenske'))) e('no VideoObject on this page');
if (sv.offers || sv.areaServed.name !== 'Česko' || sv.provider['@id'] !== by('Person')['@id'] || sv.serviceType !== 'SEO a GEO/AEO pro strojírenské a výrobní firmy') e('Service');
if (wp.inLanguage !== 'cs' || wp.name !== H1 || wp.datePublished !== '2026-10-25' || wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#service`) e('WebPage');
if (wp.dateModified !== h.match(/Aktualizováno: <time datetime="([^"]+)"/)[1]) e('dateModified = visible date');
const faqHtml = (main.match(/<div class="faq-open">[\s\S]*?<\/section>/) || [''])[0];
const visFaq = [...faqHtml.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 7 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage: 7 questions equal to the visible FAQ');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[1].name !== NAME) e('breadcrumbs: Domů → page');
// Inbound
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (!readFileSync('dist/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('home link');
if (readFileSync('dist/en/index.html', 'utf8').includes(URL_PATH) || readFileSync('dist/ru/index.html', 'utf8').includes(URL_PATH)) e('only the Czech version links to the page');
if (errors.length) { console.error('✗ check-niche-machinery-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-machinery-cs: ok (${mainTxt.split(/\s+/).length} words)`);
