// Post-build check of the niche landing page /seo-pro-ucetni-kancelare-brno/ (cs, brief of 31.10.2026). While NICHE_READY.nicheAccountingBrno is false the page must be absent
// (no file, not in the sitemap, not linked). When it is true the page must contain B2 (the search check), otherwise the check fails (doorway rule of the brief).
import { readFileSync, existsSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/seo-pro-ucetni-kancelare-brno/';
const FILE = 'dist/seo-pro-ucetni-kancelare-brno/index.html';
const H1 = 'SEO a GEO/AEO pro účetní kanceláře v Brně: poptávky z Googlu a AI';
const TITLE = 'SEO pro účetní kanceláře Brno: GEO/AEO | Eranosian';
const DESC = 'Dělám SEO a GEO/AEO pro účetní kanceláře v Brně: stránky služeb, FAQ, struktura pro vyhledávání i AI. Bez slibů. Požádejte o bezplatný audit.';
const ready = /nicheAccountingBrno: true/.test(readFileSync('src/i18n/routes.ts', 'utf8').split('NICHE_READY =')[1].split('\n')[0]);
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s ]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const words = (s) => s.split(/\s+/).filter(Boolean).length;
const errors = [];
const e = (m) => errors.push(m);

if (!ready) {
  if (existsSync(FILE)) e('page built although NICHE_READY.nicheAccountingBrno is false');
  if (readFileSync('dist/sitemap.xml', 'utf8').includes('seo-pro-ucetni-kancelare-brno')) e('page in the sitemap');
  for (const f of ['dist/index.html', 'dist/seo-pro-ucetni-kancelare-praha/index.html']) if (readFileSync(f, 'utf8').includes('seo-pro-ucetni-kancelare-brno')) e(`link to the unpublished page in ${f}`);
  if (errors.length) { console.error('✗ check-niche-accounting-brno-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
  console.log('✓ check-niche-accounting-brno-cs: page not published (B2 pending), nothing leaks');
  process.exit(0);
}

const h = readFileSync(FILE, 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)"/g)].map((m) => m[1]);
if (alts.some((a) => !['cs', 'cs-CZ', 'x-default'].includes(a))) e(`hreflang: ${alts}`);
if ((main.match(/<h1[ >]/g) || []).length !== 1 || txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]) !== H1) e('H1');
const hs = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
const B2 = hs.find((x) => /^Co ukazuje vyhledávání/.test(x));
const SECTIONS = ['Jak spolupráce vypadá?', 'Kolik to stojí a jak začít?', 'Jaké mám zkušenosti s tímto oborem?', 'Co jsem zjistil na webech brněnských účetních kanceláří?', B2 ?? 'Co ukazuje vyhledávání pro účetní kanceláře v Brně?', 'Na co si dát pozor, když má účetní kancelář sídlo nebo pobočku v Brně?', 'Pro koho SEO dává smysl a pro koho ne?', 'Časté otázky', 'Další články', 'Chcete vědět, jaké technické chyby má váš web?'];
if (!B2) e('B2 (search check for "účetní kancelář Brno") is missing: the page must not be published without it');
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
// direct answers 40–60 words
for (const m of main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)) { const n = words(txt(m[1])); if (n < 40 || n > 60) e(`answer length ${n}: ${txt(m[1]).slice(0, 50)}`); }
// FAQ = JSON-LD 1:1
const faqHtml = [...main.matchAll(/<div class="faq-open">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/g)][0]?.[1] || '';
const vis = [...faqHtml.matchAll(/<h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
const nodes = ld.flatMap((x) => x['@graph'] || [x]);
const faq = nodes.find((n) => n['@type'] === 'FAQPage');
if (vis.length !== 5 || !faq || JSON.stringify(faq.mainEntity.map((q) => [q.name, q.acceptedAnswer.text].map(txt))) !== JSON.stringify(vis)) e('FAQ must be 5 questions and equal to the JSON-LD');
if (/Review|AggregateRating|HowTo|VideoObject|Offer|Quotation|LocalBusiness|PostalAddress/.test(JSON.stringify(nodes.filter((n) => ['WebPage', 'Service', 'FAQPage'].includes(n['@type']))))) e('forbidden schema types');
const svc = nodes.find((n) => n['@type'] === 'Service');
if (!svc || svc.areaServed !== 'Brno' || svc.offers) e('Service: areaServed Brno, no offers');
const wp = nodes.find((n) => n['@type'] === 'WebPage');
if (!wp || wp.name !== H1 || wp.inLanguage !== 'cs') e('WebPage name = H1, inLanguage cs');
// content rules
for (const w of ['top 1', 'první místo', 'garantovaně', 'obejdeme', 'hodně poptávek', 'rychle', 'DPH', 'pracovní dny', 'více klientů', 'Praha', 'v Praze']) if (new RegExp(w, 'i').test(mainTxt.replace(/pracuji z Prahy|osobně v Praze|pro Prahu/g, ''))) e(`forbidden: ${w}`);
if (/\b(jsem|moje|naše|moji)\b[^.]{0,30}\bagentur/i.test(mainTxt.replace(/pro překladatelskou agenturu|U překladatelské agentury/g, ''))) e('"agentura" about the author');
if (/zatím nemám|výsledky nemám|případovou studii nemám/.test(mainTxt)) e('no "no results in the niche" statements');
if (/[Ѐ-ӿ]/.test(mainTxt)) e('Cyrillic letters in the Czech text');
if (/(^|[^A-Za-z])GEO(?!\/AEO| a AEO)/.test(mainTxt)) e('bare GEO (use GEO/AEO)');
for (const hd of hs) if (/web účetní kancelář Brno|marketing účetní kancelář/i.test(hd)) e(`keyword not allowed in a heading: ${hd}`);
// links
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/audit-zdarma\/"/g) < 2 || cnt(/href="\/konzultace\/"/g) < 1 || cnt(/href="\/lokalni-seo-mapy\/"/g) !== 1 || cnt(/href="\/pripadove-studie\/seo-prekladatelska-agentura\/"/g) < 2) e('links: audit-zdarma, konzultace, lokalni-seo-mapy once, translation case');
if (/seo-pro-prekladatelske-agentury-brno/.test(main)) e('no link to the Brno translation niche page');
if (/<form/.test(main)) e('no form');
const related = (main.match(/related-posts[\s\S]*?<\/section>/) || [''])[0];
if ([...related.matchAll(/href="(\/blog\/[^"]+)"/g)].length !== 6) e('Další články: six cards');
for (const f of ['dist/seo-pro-ucetni-kancelare-praha/index.html']) if (!readFileSync(f, 'utf8').includes(URL_PATH)) e('link from the Prague page to Brno ("Další města")');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (errors.length) { console.error('✗ check-niche-accounting-brno-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-accounting-brno-cs: ok (${words(mainTxt)} words)`);
