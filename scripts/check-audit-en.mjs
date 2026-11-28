// Check of /en/free-audit/ (brief of 28.11.2026): meta (Title 42, Description 127, H1 51), intro 52 words, badge, 9 H2 in the order of the brief, 6 FAQ (45/46/46/48/43/46) = JSON-LD FAQPage only,
// the "not included" table, the quote, 4 steps (no HowTo), the sample video + two examples (local files that exist), the comparison table (price word for word as on /en/consulting/), three "after" cards without prices,
// the form (website address required, "Free SEO audit" preselected), byline /en/about/, no links to Czech articles / niches, no VideoObject / HowTo / Service / Offer / Review in JSON-LD, hreflang and canonical unchanged.
import { readFileSync, existsSync } from 'node:fs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/en/free-audit/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;| /g, ' ');
const txt = (s) => dec(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'Free SEO Audit of Your Website | Eranosian' || title.length !== 42) e(`title ${title.length}`);
if (desc !== "Free check of your website's technical errors: indexing, duplicates and more. Presentation in 24 hours, no call, no obligation." || desc.length !== 127) e(`description ${desc.length}`);
if (h1 !== "A free SEO audit of your website's technical errors" || h1.length !== 51 || title.replace(/ \| Eranosian$/, '') === h1) e(`H1 ${h1.length}`);
for (const l of ['cs', 'en', 'ru', 'uk', 'x-default']) if (!h.includes(`hreflang="${l}"`)) e(`hreflang ${l}`);
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/en/free-audit/">')) e('canonical');
if (!/Author: <a href="\/en\/about\/">Arsenii Eranosian<\/a> · Updated: <time datetime="2026-11-03">03\.11\.2026<\/time>/.test(h)) e('byline /en/about/ + date unchanged (03.11.2026)');
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead.split(' ').length !== 52 || !lead.startsWith('Send me your website address and within 24 hours') || !lead.endsWith('I work in English, Czech or Russian.')) e(`intro ${lead.split(' ').length}`);
if (!main.includes('<p class="price-badge">Free · within 24 hours · no call</p>')) e('trust line');
if (!/On this page/.test(main)) e('table of contents');
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
const want = ['What does the free audit check?', 'What will the free audit not find?', 'How does the audit work?', 'What does the audit output look like?', 'How does the free audit differ from a paid consultation?', 'What happens after the audit?', 'What do results and clients say?', 'Questions about the free audit', 'Request a free audit'];
if (h2.join('|') !== want.join('|')) e(`H2: ${h2}`);
const checks = [...main.matchAll(/<ul class="checks">([\s\S]*?)<\/ul>/g)];
if (checks.length !== 1 || (checks[0][1].match(/<li>/g) || []).length !== 3) e('3 checks');
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => [...m[0].matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((r) => [...r[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((x) => inl(x[1])).join(' | ')));
const t1 = ['Topic | Where it is covered', 'Keywords | SEO consultation', 'Competitors | SEO consultation, 3-month SEO start', 'Maps and local SEO | Maps (Google Maps + Mapy.com)', 'AI visibility | SEO + GEO/AEO', 'Speed, Core Web Vitals, mobile | Not checked in the free audit'];
const t2 = ['Parameter | Free audit | SEO consultation', 'Price | Free | 2,000 CZK (approx. €80) per hour, or 3,000 CZK (approx. €120) with a website audit', 'Scope | Technical errors | Audit plus a 12-month plan', 'Output | Short presentation within 24 hours | Presentation within 2 working days or a short written summary'];
if (tables.length !== 2 || JSON.stringify(tables[0]) !== JSON.stringify(t1) || JSON.stringify(tables[1]) !== JSON.stringify(t2)) e(`tables: ${JSON.stringify(tables)}`);
const cons = txt((readFileSync('dist/en/consulting/index.html', 'utf8').match(/<main[\s\S]*?<\/main>/) || [''])[0]);
if (!cons.includes('2,000 CZK (approx. €80) per hour, or 3,000 CZK (approx. €120) with a website audit')) e('consultation price must stay word for word as on /en/consulting/');
if ((main.match(/class="quote-fig"/g) || []).length !== 1 || !main.includes('I would rather say straight away what the free audit will not find than promise more than it can do.')) e('one quote');
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 4) e('4 steps');
// videos
const vids = [...main.matchAll(/<video[^>]*>[\s\S]*?<source src="([^"]+)"/g)].map((m) => m[1]);
if (vids.join() !== '/media/audit-example-en.mp4,/media/audit-example-machinery-en.mp4,/media/audit-example-pilates-en.mp4') e(`videos: ${vids}`);
for (const v of vids) if (!existsSync('dist' + v) || !existsSync('dist' + v.replace('.mp4', '-poster.jpg'))) e(`missing file ${v}`);
if (/audit-example-cs|audit-example-pilates\.mp4|audit-example-machinery-software|youtube|youtu\.be/i.test(main)) e('no Czech / Russian videos, no YouTube');
if (!main.includes('Sample output (anonymised)') || !main.includes('Examples of audits by industry')) e('output H3s');
// after cards
const after = (main.match(/What happens after the audit\?<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...after.matchAll(/<a class="card card--link" href="([^"]+)"/g)].map((m) => m[1]).join() !== '/en/consulting/,/en/3-month-start/,/en/full-seo/' || /CZK|€|Kč/.test(after) || (after.match(/Learn more/g) || []).length !== 3) e('three cards, no prices');
// FAQ
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]).filter(([q]) => q.endsWith('?'));
if (faq.length !== 6 || faq.map(([, a]) => a.split(' ').length).join() !== '45,46,46,48,43,46') e(`FAQ: ${faq.map(([, a]) => a.split(' ').length)}`);
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /VideoObject|HowTo|Review|Rating|Product|Offer|Quotation|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist|AccountingService|Service/.test(String(t)))) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ (6)');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ') === 'Home > Free audit')) e(`BreadcrumbList: ${ld.filter((x) => x['@type'] === 'BreadcrumbList').map((x) => x.itemListElement.map((i) => i.name).join(' > '))}`);
// form
const form = (main.match(/<form[\s\S]*?<\/form>/) || [''])[0];
if (!/<input id="[^"]*-website"[^>]*required/.test(form) || !/<option value="audit" selected/.test(form) || !/Website address \*/.test(form)) e('form: website address required, "Free SEO audit" preselected');
// links, text
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
if (links.some((l) => (/^\/(?!en\/)/.test(l) && l !== '/audit-zdarma/') || /\/blog\/|seo-pro-/.test(l))) e(`links to non-English pages: ${links.filter((l) => /^\/(?!en\/)/.test(l))} (only the Czech pair of the existing language note is allowed)`);
const body = txt(main);
if (/guarantee|garance|free forever|\bEU\b|European Union|[ěščřžýáíéúůďťň]/.test(body.replace(/Czech|Open the Czech version/g, ''))) e('forbidden wording / Czech letters');
if (errs.length) { console.error('✗ check-audit-en:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log('✓ check-audit-en: ok (9 H2, 6 FAQ, 3 videos, 2 tables)');
