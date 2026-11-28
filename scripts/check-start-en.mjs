// Check of /en/3-month-start/ (brief of 28.11.2026, v2 final): meta (Title 44, Description unchanged, H1 "A 3-month SEO start"), lead 22 words, badge 10 words, price answer 24 + note 23 words (CNB 24.435, 27 November 2026),
// sections in the order of the brief, the three groups of "included", maps paragraph (priced separately), months 1-3 as in the brief + weekly line, quote (39 words), results / guarantee answers, comparison table, four case links to English pages,
// two reviews, "Why do clients trust me?" with 4 H3, 6 FAQ (47/53/48/44/54/41) = JSON-LD FAQPage, "Consultation first?", the form (start preselected), 4 "Other services" cards + GEO/AEO line; no "4–8 weeks", "months 3–6",
// "ideal first step", "paid per result", "scaling the reach"; EUR only as "approx." (2,050 / 1,020 / 610); no Offer / price markup, no forbidden JSON-LD types; links to English pages only; hreflang and canonical unchanged.
import { readFileSync } from 'node:fs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/en/3-month-start/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;| /g, ' ');
const txt = (s) => dec(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== '3-Month SEO Start for 50,000 CZK | Eranosian' || title.length !== 44) e(`title ${title.length}`);
if (desc !== 'A three-month SEO kick-off: technical audit and fixes, keyword research, optimisation of key pages and analytics setup.' || desc.length > 130) e(`description: ${desc}`);
if (h1 !== 'A 3-month SEO start' || title.replace(/ \| Eranosian$/, '') === h1) e('H1');
for (const l of ['cs', 'en', 'ru', 'uk', 'x-default']) if (!h.includes(`hreflang="${l}"`)) e(`hreflang ${l}`);
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/en/3-month-start/">')) e('canonical');
if (!/Author: <a href="\/en\/about\/">Arsenii Eranosian<\/a> · Updated: <time datetime="2026-11-03">03\.11\.2026<\/time>/.test(h)) e('byline /en/about/ + date unchanged');
const w = (s) => s.split(' ').length;
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead !== 'An intensive first stage of SEO: for 3 months I work fully on your website and on your Google and Mapy.com profiles.' || w(lead) !== 22) e(`lead ${w(lead)}`);
const badge = inl((main.match(/<p class="price-badge">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (badge !== '50,000 CZK (approx. €2,050) · 3 months · weekly reports' || w(badge) !== 10) e(`badge ${w(badge)}`);
if (!/On this page/.test(main)) e('table of contents');
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
const want = ['How much does the 3-month SEO start cost?', 'Who is it for?', 'What is included in the price?', 'Are the Google and Mapy.com profiles part of the package?', 'How it works', 'When will the first results come?', 'Do you guarantee first place on Google?', '3-month start, or Full SEO for a year?', 'What has it brought clients?', 'What clients say', 'Why do clients trust me?', 'Questions about the 3-month start', 'Consultation first?', 'Send an enquiry', 'Other services'];
if (h2.join('|') !== want.join('|')) e(`H2: ${h2}`);
const ans = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]));
if (w(ans[0]) !== 24 || ans[0] !== 'The 3-month SEO start costs 50,000 CZK (approx. €2,050). Payment: 25,000 CZK (approx. €1,020) at the start and 25,000 CZK (approx. €1,020) by agreement.') e(`price answer ${w(ans[0])}`);
const note = inl((main.match(/<p class="small muted">(Prices are in Czech koruna[\s\S]*?)<\/p>/) || [, ''])[1]);
if (note !== 'Prices are in Czech koruna (CZK). Approximate EUR amounts use the Czech National Bank rate of 27 November 2026 (24.435 CZK per EUR).' || w(note) !== 23) e('rate note');
const groups = [...main.matchAll(/<h3>([^<]*)<\/h3>\s*<ul class="checks">([\s\S]*?)<\/ul>/g)].map((m) => [m[1], (m[2].match(/<li>/g) || []).length]);
if (JSON.stringify(groups) !== JSON.stringify([['Work on the website', 5], ['Google and Mapy.com profiles', 3], ['GEO/AEO and reporting', 2]])) e(`groups: ${JSON.stringify(groups)}`);
if (!/AI search optimisation \(GEO\/AEO\)\.\s*<a href="\/en\/seo-and-geo\/">What that means<\/a>/.test(main)) e('"What that means" link');
if (!main.includes('The standalone Maps service</a> is long-term (from 4 months) and is priced separately.')) e('maps paragraph');
const steps = [...(main.match(/<ol class="steps[^"]*">([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li>[\s\S]*?<strong>([^<]*)<\/strong>([\s\S]*?)<\/span>/g)].map((m) => m[1] + inl(m[2]));
if (JSON.stringify(steps) !== JSON.stringify(['Month 1:Audit, analysis and plan (including an audit of the maps profiles).', 'Month 2:Technical fixes and site structure (including optimisation of the maps profiles).', 'Month 3:Content, optimisation of the main pages and evaluation.']) || !main.includes('Weekly reports are part of every month.')) e(`months: ${JSON.stringify(steps)}`);
const q = 'A start is not just a beginning. In three months I lay a solid foundation: an audit, a 12-month plan, technical fixes, the structure of the site, content and work on maps. The site can keep growing on it.';
if ((main.match(/class="quote-fig"/g) || []).length !== 1 || !main.includes(q) || w(q) !== 39) e('quote');
if (!main.includes('Usually after two to three months, depending on the industry and the competition. I cannot promise a specific result or date.') || !main.includes('No. First place cannot be guaranteed honestly. I offer transparent work and measurable goals that we agree on in advance.')) e('results / guarantee answers');
const table = [...(main.match(/<table[\s\S]*?<\/table>/) || [''])[0].matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((r) => [...r[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((x) => inl(x[1])).join(' | '));
if (table.length !== 6 || !table.includes('Duration | 3 months | 12 months') || !table.includes('Price | 50,000 CZK (approx. €2,050) | from 15,000 CZK per month (approx. €610)')) e(`table: ${table}`);
const cases = (main.match(/What has it brought clients\?<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...cases.matchAll(/class="link-arrow" href="([^"]+)"/g)].map((m) => m[1]).join() !== '/en/case-studies/seo-translation-agency-4-months/,/en/case-studies/seo-print-shop/,/en/case-studies/seo-education-platform/,/en/case-studies/seo-translation-agency-half-year/') e('four case links');
const rev = (main.match(/What clients say<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ((rev.match(/class="card review/g) || rev.match(/review-card/g) || []).length < 2) e('two reviews');
const why = (main.match(/Why do clients trust me\?<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...why.matchAll(/<h3>([^<]*)<\/h3>/g)].map((m) => m[1]).join('|') !== 'I work personally|Numbers with a period and a source|A concrete output|Honest limits') e('why trust: 4 H3');
const faq = [...(main.match(/Questions about the 3-month start<\/h2>[\s\S]*?<\/section>/) || [''])[0].matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 6 || faq.map(([, a]) => w(a)).join() !== '47,53,48,44,54,41') e(`FAQ: ${faq.map(([, a]) => w(a))}`);
const form = (main.match(/<form[\s\S]*?<\/form>/) || [''])[0];
if (!/<option value="start" selected/.test(form)) e('form: start preselected');
const other = (main.match(/Other services<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...other.matchAll(/<a class="card card--link" href="([^"]+)"/g)].map((m) => m[1]).join() !== '/en/free-audit/,/en/consulting/,/en/full-seo/,/en/maps/' || !other.includes('is included in every service.')) e('four Other services cards + GEO/AEO line');
// ld
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /VideoObject|HowTo|Review|Rating|Product|Offer|Quotation|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist|AccountingService/.test(String(t))) || /"price"|Offer/.test(JSON.stringify(ld))) e(`forbidden JSON-LD: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((x) => [x.name, x.acceptedAnswer.text])) !== JSON.stringify(faq.map(([q, a]) => [q, a.replace(/\s*\((?:≈|approx\.?)\s*€[^)]*\)/g, '')]))) e('FAQPage must equal the visible FAQ (6), euro estimates in brackets removed from the JSON-LD by the site rule');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ') === 'Home > 3-month start')) e('BreadcrumbList');
// text / links
const body = txt(main);
if (/4[–-]8 weeks|months 3[–-]6|ideal first step|paid per result|scaling the reach|significant share|\bEU\b|guarantee(?!d honestly| first place| first| first place on)/i.test(body.replace(/Do you guarantee first place on Google\?|cannot be guaranteed honestly|First place cannot be guaranteed/g, ''))) e(`forbidden wording: ${body.match(/4[–-]8 weeks|months 3[–-]6|ideal first step|paid per result|scaling the reach|significant share|\bEU\b/i)}`);
const eur = [...body.matchAll(/€\s?[\d,]+/g)].map((m) => m[0].replace(/\s/g, ''));
if (eur.some((x) => !['€2,050', '€1,020', '€610'].includes(x))) e(`EUR amounts: ${eur}`);
if ([...body.matchAll(/[\d,]+ CZK \(approx\./g)].length < 4) e('CZK amounts with approx. EUR');
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
if (links.some((l) => (/^\/(?!en\/)/.test(l) && l !== '/start-3-mesice/') || /\/blog\/|seo-pro-/.test(l))) e(`links to non-English pages: ${links.filter((l) => /^\/(?!en\/)/.test(l))}`);
if (/[ěščřžýáíéúůďťň]/.test(body.replace(/Czech/g, ''))) e('Czech letters');
if (errs.length) { console.error('✗ check-start-en:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log('✓ check-start-en: ok (15 H2, 6 FAQ, 4 cases, 4 Other services)');
