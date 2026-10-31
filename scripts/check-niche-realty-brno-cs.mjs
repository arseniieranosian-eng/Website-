// Post-build check of the niche landing page /seo-pro-realitni-kancelare-brno/ (cs, brief of 31.10.2026). While NICHE_READY.nicheRealtyBrno is false the page must be absent
// (no file, not in the sitemap, not linked). When it is true the page must contain R3 (the official list of the Brno districts), otherwise the check fails (doorway rule of the brief).
import { readFileSync, existsSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/seo-pro-realitni-kancelare-brno/';
const FILE = 'dist/seo-pro-realitni-kancelare-brno/index.html';
const H1 = 'SEO a GEO/AEO pro realitní kanceláře v Brně: poptávky z Googlu a AI';
const TITLE = 'SEO pro realitní kanceláře Brno: GEO/AEO | Eranosian';
const DESC = 'Dělám SEO a GEO/AEO pro realitní kanceláře v Brně: nabídky, čtvrti a městské části, indexace, FAQ. Bez slibů. Požádejte o bezplatný technický audit.';
const ready = /nicheRealtyBrno: true/.test(readFileSync('src/i18n/routes.ts', 'utf8').split('NICHE_READY =')[1].split('\n')[0]);
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s ]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const words = (s) => s.split(/\s+/).filter(Boolean).length;
const errors = [];
const e = (m) => errors.push(m);

if (!ready) {
  if (existsSync(FILE)) e('page built although NICHE_READY.nicheRealtyBrno is false');
  if (readFileSync('dist/sitemap.xml', 'utf8').includes('seo-pro-realitni-kancelare-brno')) e('page in the sitemap');
  for (const f of ['dist/index.html', 'dist/seo-pro-realitni-kancelare-praha/index.html']) if (readFileSync(f, 'utf8').includes('seo-pro-realitni-kancelare-brno')) e(`link to the unpublished page in ${f}`);
  if (errors.length) { console.error('✗ check-niche-realty-brno-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
  console.log('✓ check-niche-realty-brno-cs: page not published (R3 pending), nothing leaks');
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
const SECTIONS = ['Co jsem viděl v Brně?', 'Co pro realitní kancelář v Brně konkrétně dělám?', 'Jak má realitní kancelář v Brně pracovat s městskými částmi?', 'Jaké mám zkušenosti s weby nemovitostí?', 'Jak spolupracuji s realitními kancelářemi a kolik to stojí?', 'Co zahrnuje bezplatný audit?', 'Pro koho SEO dává smysl a pro koho ne?', 'Časté otázky', 'Další články', 'Chcete vědět, jaké technické chyby má váš web?'];
// R3: the official list of the Brno city districts (names, count and a link to the official source) must stand under the H2-3 answer
const r3 = (main.match(/Jak má realitní kancelář v Brně pracovat s městskými částmi\?[\s\S]*?<\/section>/) || [''])[0];
const r3n = [...r3.matchAll(/<li>/g)].length;
if (r3n < 10 || !/href="https:\/\/(www\.)?brno\.cz\//.test(r3)) e('R3 (official list of the Brno districts with a link to brno.cz) is missing: the page must not be published without it');
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
// direct answers 40–60 words
for (const m of main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)) { const n = words(txt(m[1])); if (n < 40 || n > 60) e(`answer length ${n}: ${txt(m[1]).slice(0, 50)}`); }
// FAQ = JSON-LD 1:1
const faqHtml = [...main.matchAll(/<div class="faq-open">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/g)][0]?.[1] || '';
const vis = [...faqHtml.matchAll(/<h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
const nodes = ld.flatMap((x) => x['@graph'] || [x]);
const faq = nodes.find((n) => n['@type'] === 'FAQPage');
if (vis.length !== 4 || !faq || JSON.stringify(faq.mainEntity.map((q) => [q.name, q.acceptedAnswer.text].map(txt))) !== JSON.stringify(vis)) e('FAQ must be 4 questions and equal to the JSON-LD');
if (/Review|AggregateRating|HowTo|VideoObject|Offer|Quotation|LocalBusiness|PostalAddress/.test(JSON.stringify(nodes.filter((n) => ['WebPage', 'Service', 'FAQPage'].includes(n['@type']))))) e('forbidden schema types');
const svc = nodes.find((n) => n['@type'] === 'Service');
if (!svc || svc.areaServed !== 'Brno' || svc.offers) e('Service: areaServed Brno, no offers');
const wp = nodes.find((n) => n['@type'] === 'WebPage');
if (!wp || wp.name !== H1 || wp.inLanguage !== 'cs') e('WebPage name = H1, inLanguage cs');
// summary block ("Stručně"): the approved text, framed, right under the H1 and before the first H2
const SUM = JSON.parse(readFileSync('src/data/niche-summaries.json', 'utf8'))[URL_PATH];
const sum = txt((main.match(/<div class="summary-box"><p class="lead">([\s\S]*?)<\/p><\/div>/) || [, ''])[1]);
if (sum.replace(/\u00a0/g, ' ') !== SUM || main.indexOf('summary-box') > main.indexOf('<h2')) e('summary block: text and position');
if (words(sum) < 40 || words(sum) > 60 || /\d/.test(sum.replace(/24/g, ''))) e('summary block: 40–60 words, no numbers except 24');
// content rules
for (const w of ['top 1', 'první místo', 'garantovaně', 'obejdeme', 'hodně poptávek', 'rychle', 'DPH', 'pracovní dny', 'více klientů', 'Praha', 'v Praze']) if (new RegExp(w, 'i').test(mainTxt.replace(/pracuji z Prahy|osobně v Praze|pro Prahu|Z Prahy|z Prahy|příklad z Prahy|Případová studie z Prahy/g, ''))) e(`forbidden: ${w}`);
if (/\b(jsem|moje|naše|moji)\b[^.]{0,30}\bagentur/i.test(mainTxt.replace(/pro překladatelskou agenturu|U překladatelské agentury|realitní kancelář/g, ''))) e('"agentura" about the author');
if (/zatím nemám|výsledky nemám|případovou studii nemám/.test(mainTxt)) e('no "no results in the niche" statements');
if (/[Ѐ-ӿ]/.test(mainTxt)) e('Cyrillic letters in the Czech text');
if (/(^|[^A-Za-z])GEO(?!\/AEO| a AEO)/.test(mainTxt)) e('bare GEO (use GEO/AEO)');
for (const hd of hs) if (/web realitní kancelář Brno|marketing realitní kancelář/i.test(hd)) e(`keyword not allowed in a heading: ${hd}`);
// links
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/audit-zdarma\/"/g) < 2 || cnt(/href="\/konzultace\/"/g) < 1 || cnt(/href="\/lokalni-seo-mapy\/"/g) !== 1 || cnt(/href="\/pripadove-studie\/seo-prekladatelska-agentura\/"/g) !== 1 || cnt(/href="\/pripadove-studie\/rozbor-webu-realitni-kancelare-praha\/"/g) < 1 || cnt(/href="\/recenze\/"/g) !== 1) e('links: audit-zdarma, konzultace, lokalni-seo-mapy once, translation case once (strip), review of the Prague agency, recenze once');
if (/seo-pro-prekladatelske-agentury-brno/.test(main)) e('no link to the Brno translation niche page');
if (/<form/.test(main)) e('no form');
const related = (main.match(/related-posts[\s\S]*?<\/section>/) || [''])[0];
if ([...related.matchAll(/href="(\/blog\/[^"]+)"/g)].length !== 7) e('Další články: seven cards');
for (const f of ['dist/seo-pro-realitni-kancelare-praha/index.html']) if (!readFileSync(f, 'utf8').includes(URL_PATH)) e('link from the Prague page to Brno ("Další města")');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (errors.length) { console.error('✗ check-niche-realty-brno-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-realty-brno-cs: ok (${words(mainTxt)} words)`);
