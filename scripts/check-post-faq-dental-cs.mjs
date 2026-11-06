// Check of the blog article /blog/faq-na-webu-zubni-ordinace/ (brief B2 of 06.11.2026): meta lengths, answers 40-60 words, FAQ 4 = JSON-LD, no forbidden types / words, no body links but the two sources and the one button.
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/blog/faq-na-webu-zubni-ordinace/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title.length > 55 || title === h1) e(`title ${title.length}`);
if (h1 !== 'Jak má vypadat FAQ na webu zubní ordinace?') e('H1');
if (desc.length !== 124 || /objednat|zaručuj/i.test(desc)) e(`description ${desc.length}`);
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/faq-na-webu-zubni-ordinace/">')) e('canonical');
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => txt(m[1]).split(' ').length);
if (answers.length !== 5 || answers.some((n) => n < 40 || n > 60)) e(`direct answers 40-60: ${answers}`);
const faq = [...main.matchAll(/<h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (faq.length !== 4 || faq.some(([, a]) => a.split(' ').length < 40 || a.split(' ').length > 60)) e('FAQ 4 questions, 40-60 words');
let ld = [];
for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist/.test(String(t)))) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.datePublished !== '2026-11-06' || bp.inLanguage !== 'cs') e('BlogPosting');
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]);
const okLinks = ['/o-mne/', 'https://developers.google.com/search/docs/appearance/structured-data/faqpage', 'https://o-seznam.cz/napoveda/vyhledavani/strukturovana-data/snippety-k-faq-strankam/', '/seo-pro-zubni-ordinace-praha/'];
if (links.some((l) => !okLinks.includes(l)) || (main.match(/class="btn btn--primary/g) || []).length !== 1 || /<form/.test(main)) e(`links / one button: ${links}`);
const body = txt(main);
if (/\d\s?%|největší|widget|zaručuj(?!e)|slibuj|nejlepší|bezbolestně|recenz|před a po|do\/po/i.test(body)) e('forbidden word');
if (!/zkontrolováno 6\. 11\. 2026/.test(body) || !/K 6\. 11\. 2026/.test(body) || !/K 31\. 10\. 2026/.test(body)) e('sources / observations dates');
if (errs.length) { console.error('✗ check-post-faq-dental-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-faq-dental-cs: ok (answers ${answers})`);
