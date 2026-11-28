// Check of /en/faq/ (brief of 28.11.2026): meta (Title 48, Description 92, H1 48), byline /en/about/ + Published / Updated, "On this page" with 6 anchors, 6 H2 + 19 H3 in the order of the brief, answers 40-60 words (the brief's counts,
// Q3 +7 words: the cs-supported pointer to the Full SEO page), FAQPage 19 = the visible text (euro estimates in brackets removed by the site rule), the closing "Have another question?" block, no "4–8 weeks", "months 3–6",
// "significant share", "paid per result", "three firms", no niche pages, EUR only as "approx." (€610, €2,050, €80, €120) with the rate note in the VAT answer, English links only, hreflang and canonical unchanged.
import { readFileSync } from 'node:fs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/en/faq/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;| /g, ' ');
const txt = (s) => dec(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const w = (s) => s.split(' ').length;
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'SEO FAQ: Prices, Process and Results | Eranosian' || title.length !== 48) e(`title ${title.length}`);
if (desc !== 'Answers about SEO prices, packages, the free audit, working together, timelines and GEO/AEO.' || desc.length !== 92) e(`description ${desc.length}`);
if (h1 !== 'Frequently asked questions about SEO and GEO/AEO' || h1.length !== 48 || title.replace(/ \| Eranosian$/, '') === h1) e('H1');
for (const l of ['cs', 'en', 'ru', 'uk', 'x-default']) if (!h.includes(`hreflang="${l}"`)) e(`hreflang ${l}`);
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/en/faq/">')) e('canonical');
if (!/Author: <a href="\/en\/about\/">Arsenii Eranosian<\/a> · Published: <time datetime="2026-10-18">18\.10\.2026<\/time> · Updated: <time datetime="2026-11-09">09\.11\.2026<\/time>/.test(h)) e('byline + Published / Updated');
if (!/Didn’t find your answer\? Write to me\./.test(main) || !/href="\/en\/contact\/">Contact<\/a>/.test(main)) e('lead + Contact');
const toc = [...(main.match(/<nav class="toc"[\s\S]*?<\/nav>/) || [''])[0].matchAll(/<a href="#([^"]+)">([^<]*)<\/a>/g)].map((m) => m[1]);
if (toc.join() !== 'ceny,spoluprace,audit,terminy,seo-geo,pro-koho') e(`TOC anchors: ${toc}`);
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
if (h2.join('|') !== ['How much does SEO cost and what are the packages?', 'How do we work together?', 'What do I get in the free audit?', 'What about timelines and results?', 'SEO, GEO/AEO and search engines', 'Who and where do I work with?', 'Have another question?'].join('|')) e(`H2: ${h2}`);
const qa = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
const qs = ['How much does SEO cost?', 'How is the price set and why does it differ by industry?', 'What does Full SEO include?', 'How does the 3-month start differ from Full SEO?', 'How much does a consultation cost?', 'Do I have to add VAT to the prices?', 'How does working together look?', 'How should I prepare for a consultation?', 'How often will I get a report?', 'What does the free SEO audit include?', 'What does the free audit not include?', 'Do I have to order anything after the free audit?', 'How soon will I see results?', 'Do you guarantee first place on Google?', 'What is the difference between SEO and GEO/AEO?', 'Do you work on Seznam too, or only on Google?', 'Are Google, Mapy.com and Firmy.cz profiles part of Full SEO?', 'Do you work with businesses outside Prague?', 'Which languages do you work in?'];
if (JSON.stringify(qa.map(([q]) => q)) !== JSON.stringify(qs)) e(`questions: ${qa.map(([q]) => q)}`);
const counts = '54,51,53,51,47,49,51,53,49,50,49,43,49,46,52,50,50,53,43';
if (qa.map(([, a]) => w(a)).join() !== counts || qa.some(([, a]) => w(a) < 40 || w(a) > 60)) e(`answer lengths: ${qa.map(([, a]) => w(a))}`);
if (!qa[5][1].includes('The EUR amounts are approximate and use the Czech National Bank rate of 27 November 2026 (24.435 CZK per EUR).')) e('rate note in the VAT answer');
// JSON-LD
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /VideoObject|HowTo|Review|Rating|Product|Offer|Quotation|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist|AccountingService/.test(String(t)))) e(`forbidden JSON-LD: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || fp.mainEntity.length !== 19 || JSON.stringify(fp.mainEntity.map((x) => [x.name, x.acceptedAnswer.text])) !== JSON.stringify(qa.map(([q, a]) => [q, a.replace(/\s*\((?:≈|approx\.?)\s*€[^)]*\)/g, '')]))) e('FAQPage must equal the visible FAQ (19), euro estimates in brackets removed by the site rule');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ') === 'Home > FAQ')) e('BreadcrumbList');
if (!ld.some((x) => x['@type'] === 'WebPage' && x.inLanguage === 'en')) e('WebPage inLanguage en');
const body = txt(main);
if (!/Have another question\?/.test(body) || !/I reply within one business day\./.test(body) || !/href="\/en\/free-audit\/"/.test(main) || !/href="\/en\/contact\/"/.test(main)) e('closing block');
if (/4[–-]8 weeks|months 3[–-]6|significant (share|growth)|paid per result|three firms|\bEU\b|monthly report|Monthly report/i.test(body)) e(`forbidden wording: ${body.match(/4[–-]8 weeks|months 3[–-]6|significant (share|growth)|paid per result|three firms|\bEU\b|monthly report/i)}`);
const eur = [...body.matchAll(/€\s?[\d,]+/g)].map((m) => m[0].replace(/\s/g, ''));
if (eur.some((x) => !['€610', '€2,050', '€80', '€120'].includes(x))) e(`EUR amounts: ${eur}`);
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
if (links.some((l) => (/^\/(?!en\/)/.test(l) && l !== '/caste-dotazy/') || /\/blog\/|seo-pro-/.test(l))) e(`links to non-English pages: ${links.filter((l) => /^\/(?!en\/)/.test(l))}`);
if (/[ěščřžýáíéúůďťň]/.test(body.replace(/Czech/g, ''))) e('Czech letters');
if (errs.length) { console.error('✗ check-faq-en:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log('✓ check-faq-en: ok (6 H2, 19 H3, FAQPage 19)');
