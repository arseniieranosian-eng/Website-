// Post-build check of the niche landing page /seo-pro-zubni-ordinace-praha/ (cs, brief of 01.11.2026). While NICHE_READY.nicheDental is false the page must be absent
// (no file, not in the sitemap, not linked). When it is true the page is checked against the brief (with the author's standing rules: no guarantee phrases, no "no results in the niche").
import { readFileSync, existsSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/seo-pro-zubni-ordinace-praha/';
const FILE = 'dist/seo-pro-zubni-ordinace-praha/index.html';
const H1 = 'SEO a GEO/AEO pro zubní ordinace v Praze: poptávky z Googlu a AI';
const TITLE = 'SEO pro zubní ordinace Praha: web a GEO/AEO | Eranosian';
const DESC = 'Dělám SEO a GEO/AEO pro zubní ordinace v Praze: technický základ webu, stránky služeb, FAQ. Požádejte o bezplatný technický audit.';
const ready = /nicheDental: true/.test(readFileSync('src/i18n/routes.ts', 'utf8').split('NICHE_READY =')[1].split('\n')[0]);
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s ]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const words = (s) => s.split(/\s+/).filter(Boolean).length;
const errors = [];
const e = (m) => errors.push(m);
const done = () => {
  if (errors.length) { console.error('✗ check-niche-dental-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
};

if (!ready) {
  if (existsSync(FILE)) e('page built although NICHE_READY.nicheDental is false');
  if (readFileSync('dist/sitemap.xml', 'utf8').includes('seo-pro-zubni-ordinace')) e('page in the sitemap');
  for (const f of ['dist/index.html']) if (readFileSync(f, 'utf8').includes('seo-pro-zubni-ordinace')) e(`link to the unpublished page in ${f}`);
  done();
  console.log('✓ check-niche-dental-cs: page not published (stop list S1–S4 open), nothing leaks');
  process.exit(0);
}

const h = readFileSync(FILE, 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main).replace(/\u00a0/g, " ");
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)"/g)].map((m) => m[1]);
if (alts.some((a) => !['cs', 'cs-CZ', 'x-default'].includes(a))) e(`hreflang: ${alts}`);
if ((main.match(/<h1[ >]/g) || []).length !== 1 || txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]) !== H1) e('H1');
const hs = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
const SECTIONS = ['Jak probíhá spolupráce?', 'Kolik to stojí?', 'Jaké mám zkušenosti v oboru zubní péče?', 'Co jsem zjistil na webech zubních ordinací v Praze?', 'Co pro zubní ordinaci konkrétně dělám?', 'Pro koho SEO dává smysl a pro koho ne?', 'Časté otázky', 'Chcete vědět, jaké technické chyby má váš web?'];
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order (D2 not published yet): ${JSON.stringify(hs)}`);
// line under the H1 exactly, then the summary box, both before the first H2
if (!mainTxt.includes('U překladatelské agentury: poptávky z webu +65–70 % měsíc po měsíci tři měsíce po sobě (březen–září 2026).') || main.indexOf('U překladatelské') > main.indexOf('summary-box')) e('line under the H1 / order');
const SUM = JSON.parse(readFileSync('src/data/niche-summaries.json', 'utf8'))[URL_PATH];
const sum = txt((main.match(/<div class="summary-box"><p class="lead">([\s\S]*?)<\/p><\/div>/) || [, ''])[1]);
if (sum.replace(/ /g, ' ') !== SUM || main.indexOf('summary-box') > main.indexOf('<h2')) e('summary block: text and position');
for (const m of main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)) { const n = words(txt(m[1])); if (n < 6 || n > 60) e(`answer length ${n}: ${txt(m[1]).slice(0, 50)}`); }
// D1 exact figures
for (const s of ['K 31. 10. 2026 jsem si prohlédl 14 webů zubních ordinací', 'dotaz „stomatologie v Praze“', 'U 11 z 14 chybí blog', 'u všech 14 jsou FAQ nedostatečné', 'u tří jsou služby jen na jedné stránce', 'žádný nemá strukturovaná data', 'Názvy webů neuvádím']) if (!mainTxt.replace(/ /g, ' ').includes(s)) e(`D1 text missing: ${s}`);
if (!mainTxt.includes('Proč jsou tyto weby vpředu, nevím')) e('weak-competition sentence');
if (main.indexOf('Proč jsou tyto weby vpředu') < main.indexOf('Názvy webů neuvádím') || main.indexOf('Proč jsou tyto weby vpředu') > main.indexOf('Co pro zubní ordinaci')) e('weak-competition sentence must follow D1 and precede the "what I do" block');
// FAQ = JSON-LD 1:1 (f1 and f5 are not written: guarantee rule, capacity date S4)
const faqHtml = [...main.matchAll(/<div class="faq-open">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/g)][0]?.[1] || '';
const vis = [...faqHtml.matchAll(/<h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
const nodes = ld.flatMap((x) => x['@graph'] || [x]);
const faq = nodes.find((n) => n['@type'] === 'FAQPage');
if (vis.length !== 4 || !faq || JSON.stringify(faq.mainEntity.map((q) => [q.name, q.acceptedAnswer.text].map(txt))) !== JSON.stringify(vis)) e('FAQ must be 4 questions and equal to the JSON-LD');
const types = nodes.map((n) => n['@type']);
for (const need of ['Person', 'WebPage', 'Service', 'BreadcrumbList', 'FAQPage']) if (!types.includes(need)) e(`JSON-LD: ${need} missing`);
if (/"(Review|AggregateRating|HowTo|VideoObject|Product|Offer|Quotation|LocalBusiness|MedicalBusiness|Dentist)"/.test(JSON.stringify(nodes))) e('forbidden schema types');
const svc = nodes.find((n) => n['@type'] === 'Service');
if (!svc || svc.areaServed !== 'Praha' || svc.offers || svc.provider?.['@id'] !== `${BASE}/#arsenii`) e('Service: provider Person, areaServed Praha, no offers');
const wp = nodes.find((n) => n['@type'] === 'WebPage' && n.url === BASE + URL_PATH);
if (!wp || wp.name !== H1) e('WebPage name = H1');
// content rules
for (const w of ['bezbolestně', 'nejlepší', 'účinnost', 'hodně pacientů', 'noví pacienti', 'udělám z vás', 'vyvedu do topu', 'jen proto', 'pouze protože', 'zubař', 'DPH', 'zaručuj', 'záruk', 'garant', 'slib', 'neručí']) if (new RegExp(w, 'i').test(mainTxt)) e(`forbidden text: ${w}`);
if (/zatím nemám|výsledky nemám|případovou studii nemám/.test(mainTxt)) e('no "no results in the niche" statements');
if (/\b(jsem|moje|naše|moji)\b[^.]{0,30}\bagentur/i.test(mainTxt.replace(/pro překladatelskou agenturu|U překladatelské agentury/g, ''))) e('"agentura" about the author');
if (/(^|[^A-Za-z])GEO(?!\/AEO| a AEO)/.test(mainTxt)) e('bare GEO (use GEO/AEO)');
if (/[Ѐ-ӿ]/.test(mainTxt)) e('Cyrillic letters in the Czech text');
if (/B2B|×\s?3|\+200/.test(mainTxt)) e('no B2B ×3 / +200 %');
// links
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/audit-zdarma\/"/g) < 3 || cnt(/href="\/konzultace\/"/g) < 1 || cnt(/href="\/lokalni-seo-mapy\/"/g) !== 1 || cnt(/href="\/start-3-mesice\/"/g) < 1) e('links: audit-zdarma (≥3), konzultace, lokalni-seo-mapy exactly once, start');
if (/href="\/seo-pro-(?!zubni)/.test(main)) e('no links to other niche pages');
if (/related-posts|<form|<video/.test(main)) e('no articles block / form / video');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (!readFileSync('dist/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('home page lists the niche');
done();
console.log(`✓ check-niche-dental-cs: ok (${words(mainTxt)} words)`);
