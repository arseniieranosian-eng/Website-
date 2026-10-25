// Post-build check of the niche landing /seo-pro-tiskarny-a-polygrafii/ (cs, brief of 24.10.2026): meta, section order, answer-first, tables/lists, case block without absolute numbers,
// no prices, no guarantees, no "agentura" about the author, FAQ = JSON-LD, Service without Offer, cs-only (no hreflang), inbound links.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/seo-pro-tiskarny-a-polygrafii/';
const H1 = 'SEO a GEO/AEO pro tiskárny a polygrafii';
const TITLE = 'SEO pro tiskárny a polygrafii: katalog | Eranosian';
const DESC = 'Dělám SEO a GEO/AEO pro tiskárny a polygrafické firmy: katalog, varianty produktů, kalkulačky, FAQ. Bez slibů. Začněte technickým auditem zdarma.';
const SECTIONS = [H1, 'Čím se SEO tiskárny liší od jiných oborů?', 'Co pro tiskárny a polygrafické firmy dělám?', 'Pro koho je to a pro koho ne?', 'Jaký výsledek měla případová studie tiskárny?', 'Co obsahuje bezplatný audit a co ne?', 'Jak spolupráce probíhá?', 'Časté otázky', 'Další krok'];
const LINKS = ['/audit-zdarma/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/seo-a-geo/', '/pripadove-studie/seo-tiskarna/', '/o-mne/'];
const FORBIDDEN = ['garantovaně', 'zaručeně', 'top 1', 'rychlé výsledky pro', 'SEO agentur', 'Kč', 'Sklik:', 'Petrohrad', 'Sankt', 'ofset', '1 200', '10 500', '775', 'tiskárnu', 'AggregateRating', 'na části webů', '9 webů'];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/seo-pro-tiskarny-a-polygrafii/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (/tiskárnu|8,75/.test(title + ' ' + H1 + ' ' + desc)) e('no "tiskárnu" / 8,75× in Title, H1, Description');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('Czech only, indexable, no hreflang');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/(?:en\/|ru\/)?blog\/|<form|\/seo-pro-prekladatelske|\/seo-pro-realitni|\/seo-pro-ucetni/.test(main)) e('no blog links, no form, no links to the other niche landing pages');
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt)) e('"agentura" about the author');
if (/GEO(?!\/AEO)/.test(mainTxt)) e('"GEO" only together with AEO');
if (!/Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">\d{1,2}\. \d{1,2}\. \d{4}<\/time>/.test(h)) e('visible date');
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/audit-zdarma\/"/g) !== 3) e(`audit links: ${cnt(/href="\/audit-zdarma\/"/g)} (hero, audit section, CTA)`);
for (const l of ['/konzultace/', '/start-3-mesice/', '/full-seo/', '/seo-a-geo/']) if (cnt(new RegExp(`href="${l}"`, 'g')) !== 1) e(`${l} once`);
if (cnt(/href="\/pripadove-studie\/seo-tiskarna\/"/g) < 1 || cnt(/href="\/pripadove-studie\/seo-tiskarna\/"/g) > 2) e('case link 1–2 times');
if (cnt(/class="btn btn--primary/g) !== 2) e('two buttons: hero and the closing CTA');
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (!lead.startsWith('Dělám SEO a GEO/AEO pro tiskárny a polygrafické firmy') || !lead.endsWith('nelze zaručit.')) e('hero lead');
for (const hd of SECTIONS.slice(1, 7)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
// Lists and tables
const ols = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (ols.length !== 1 || [...ols[0][1].matchAll(/<li><span>/g)].length !== 3) e('three steps list');
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 5 || rows[0].join('|') !== 'Co obsahuje|Co neobsahuje') e('audit table: header + 4 rows');
if (([...(main.match(/Co se u webu tiskárny kontroluje:[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) || [, ''])[1].matchAll(/<li>/g)]).length !== 4) e('audit checklist: 4 items');
// Case block: metric + window, no absolute numbers, the transfer line
if (!mainTxt.includes('Organická návštěvnost webu tiskárny vzrostla 8,75× za 12 měsíců (červenec 2024 → červenec 2025).') || !mainTxt.includes('Co se přenáší a co ne:')) e('case block');
if ((mainTxt.match(/8,75×/g) || []).length !== 1 || /×8/.test(mainTxt)) e('8,75× once, with metric and window; no "×8"');
if (!mainTxt.includes('U tiskáren v Česku zatím výsledky nemám.')) e('no results in Czechia line');
if (!mainTxt.includes('k 24. 10. 2026 je obor tiskáren volný') || /\d ze 3|max\. ?3/i.test(mainTxt)) e('capacity line, no counter');
// JSON-LD
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => g.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (g.some((n) => ['AggregateRating', 'Review', 'VideoObject', 'HowTo', 'Quotation'].includes(n['@type']))) e('no AggregateRating / Review / VideoObject / HowTo / Quotation');
if (sv.offers || sv.areaServed.name !== 'Česko' || sv.provider['@id'] !== by('Person')['@id'] || sv.serviceType !== 'SEO a GEO/AEO pro tiskárny a polygrafické firmy') e('Service');
if (wp.inLanguage !== 'cs' || wp.name !== H1 || wp.datePublished !== '2026-10-25' || wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#service`) e('WebPage');
const mod = h.match(/Aktualizováno: <time datetime="([^"]+)"/)[1];
if (wp.dateModified !== mod) e('dateModified = visible date');
if (!fq || fq.mainEntity.length !== 6) e('FAQPage: 6 questions');
const faqHtml = (main.match(/<div class="faq-open">[\s\S]*?<\/section>/) || [''])[0];
const visFaq = [...faqHtml.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (fq && fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[1].name !== H1) e('breadcrumbs: Domů → page');
// Inbound: sitemap, home, case page
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (!readFileSync('dist/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('home link');
if (!readFileSync('dist/pripadove-studie/seo-tiskarna/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('case page link to the landing');
if (readFileSync('dist/en/index.html', 'utf8').includes(URL_PATH) || readFileSync('dist/ru/index.html', 'utf8').includes(URL_PATH)) e('only the Czech version links to the page');
const wc = mainTxt.split(/\s+/).length;
if (errors.length) { console.error('✗ check-niche-typography-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-typography-cs: ok (${wc} words)`);
