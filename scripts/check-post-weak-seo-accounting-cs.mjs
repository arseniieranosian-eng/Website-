// Post-build check of the blog article /blog/slabe-seo-konkurence-ucetni-kancelare/ (cs, brief of 02.11.2026): meta (title <= 55, description <= 150, no call to action), H1 and H2 order, direct answers,
// FAQ = JSON-LD (3), no links in the body, two equal CTA buttons to the accounting niche pages, no names / guarantees / prices / services, hreflang absent (cs only), inbound links (both niche pages, blog index, sitemap).
import { readFileSync } from './fs-clean.mjs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/blog/slabe-seo-konkurence-ucetni-kancelare/';
const FILE = 'dist/blog/slabe-seo-konkurence-ucetni-kancelare/index.html';
const H1 = 'Proč jsou ve vyhledávání vpředu i účetní kanceláře se slabým SEO?';
const TITLE = 'Slabé SEO účetních kanceláří | Eranosian';
const DESC = 'Proč bývá ve vyhledávání vpředu účetní kancelář se slabým webem: pozorování u 10 webů, hypotézy a to, co z toho nevyplývá.';
const SECTIONS = [H1, 'Co jsem viděl u prvních výsledků pro „účetní kancelář“?', 'Co z toho plyne a co ne?', 'Jak si svůj web zkontrolovat sám?', 'Proč jsou tyto weby vpředu?', 'Časté otázky'];
const FORBIDDEN = ['zaručuj', 'záruk', 'garant', 'neslibuj', 'zaručeně', 'Kč', 'DPH', 'daňov', 'top 1', 'jen proto', 'pouze protože', 'udělám z vás', 'vyvedu do topu', 'Start', 'Full SEO', 'bezplatný audit', 'konzultac', 'B2B', 'AI Overview'];
const CTAS = ['/seo-pro-ucetni-kancelare-praha/', '/seo-pro-ucetni-kancelare-brno/'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const wc = (s) => s.split(/\s+/).filter(Boolean).length;
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync(FILE, 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55 || title === H1) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150 || /Požádejte|Objednejte|Kontaktujte|Podívejte/i.test(desc)) e(`description: ${desc} (${desc.length})`);
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes(`<meta property="og:image" content="${BASE}/images/blog/og-slabe-seo-konkurence-ucetni-kancelare.png">`)) e('og:type / og:image');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('Czech-only page: no hreflang alternates');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
// no links in the body (the author, the closing buttons and nothing else)
const bodyLinks = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((x) => x !== '/o-mne/' && !CTAS.includes(x) && x !== 'https://developers.google.com/search/docs/appearance/ranking-systems-guide'); // + the visible Google source line (09.11.2026, K4)
if (bodyLinks.length) e(`no links in the body: ${bodyLinks}`);
for (const c of CTAS) if ((main.match(new RegExp(`class="btn btn--primary btn--lg" href="${c}"`, 'g')) || []).length !== 1) e(`CTA button to ${c}`);
if ((main.match(/class="btn /g) || []).length !== 2) e('exactly two buttons (the closing block)');
if (/Prah/.test(mainTxt.replace('SEO pro účetní kanceláře v Praze', ''))) e('nothing about Prague except the CTA button');
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
if (/<form|★|AggregateRating|<iframe|\[\?/.test(main)) e('no form / stars / quote / video / placeholder');
if (/\b(jsem|moje|naše|moji)\b[^.]{0,30}\bagentur/i.test(mainTxt.replace(/Jsem SEO specialista/g, '')) || /GEO(?!\/AEO)/.test(mainTxt)) e('"agentura" about the author / bare GEO');
if (!/<img class="post-cover" src="\/images\/blog\/slabe-seo-konkurence-ucetni-kancelare\.webp" width="1200" height="630" alt="Ilustrace:[^"]+"/.test(main) || main.indexOf('post-cover') > main.indexOf('<h1')) e('cover illustration before the H1');
if (!/<a class="card card--link post-card" href="\/blog\/slabe-seo-konkurence-ucetni[^>]*>\s*<img class="post-card-img"/.test(readFileSync('dist/blog/index.html', 'utf8'))) e('blog card with the cover');
if (!/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="2026-11-02">2\. 11\. 2026<\/time> · Čtení: \d+ min/.test(h)) e('byline with the date 2. 11. 2026');
// lead: two sentences max, no digits; direct answers
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (/\d/.test(lead) || (lead.match(/[.!?](\s|$)/g) || []).length > 2) e(`lead: one or two sentences without numbers: ${lead}`);
for (const hd of SECTIONS.slice(1, 5)) {
  const m = h.match(new RegExp(`${hd.replace(/[?.:,„“]/g, '\\$&')}</h2>\\s*<p class="answer">([\\s\\S]*?)</p>`));
  if (!m) { e(`answer-first: ${hd}`); continue; }
  const n = wc(txt(m[1]));
  if (n < 6 || n > 60) e(`direct answer of "${hd}": ${n} words`);
}
// H2-1: the observation exactly
for (const s of ['K 25. 10. 2026 jsem si prohlédl 10 webů z prvních výsledků pro dotaz „účetní kancelář“', 'U všech 10 je FAQ nedostatečné, u 9 z 10 chybí blog a u všech 10 je web špatně strukturovaný pro AI', 'Názvy webů neuvádím']) if (!mainTxt.includes(s)) e(`H2-1 text missing: ${s}`);
if (!mainTxt.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || main.indexOf('Jsem SEO specialista') > main.indexOf('post-cta')) e('disclosure before the CTA');
if (!mainTxt.includes('Chcete, aby byl web vaší účetní kanceláře srozumitelný pro Google i AI?')) e('CTA title');
// JSON-LD
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const node = (t) => g.filter((n) => n['@type'] === t);
const U = BASE + URL_PATH;
const post = node('BlogPosting')[0];
if (!post || post['@id'] !== `${U}#article` || post.headline !== H1 || post.author['@id'] !== `${BASE}/#arsenii` || post.datePublished !== '2026-11-02' || post.dateModified !== '2026-11-02') e('BlogPosting (dates 2026-11-02)');
const wp = node('WebPage')[0];
if (!wp || wp['@id'] !== `${U}#webpage` || wp.inLanguage !== 'cs' || wp.name !== title || wp.description !== desc) e('WebPage');
const bc = node('BreadcrumbList')[0];
if (!bc || bc.itemListElement.length !== 3) e('BreadcrumbList: Domů, Blog, article');
const faq = node('FAQPage')[0];
const visFaq = [...main.match(/<div class="faq-open">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/)[0].matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!faq || faq.mainEntity.length !== 3 || faq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ (3 questions: f4 is not written, guarantee rule)');
for (const [i, q] of visFaq.entries()) { const n = wc(q[1]); if (n < 6 || n > 60) e(`FAQ ${i + 1} answer: ${n} words`); }
// P1.1 (brief of 03.11.2026): Quotation / HowTo markup is no longer used on the site. if ((main.match(/<figure class="quote-fig">/g) || []).length !== 1 || g.filter((n) => n['@type'] === 'Quotation').length !== 1) e('one author quote with the Quotation node');
if (g.some((n) => ['HowTo', 'Service', 'Offer', 'AggregateRating', 'Review', 'VideoObject', 'Product', 'LocalBusiness'].includes(n['@type']))) e('no HowTo / Service / Offer / rating / VideoObject / LocalBusiness markup');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`${BASE}${URL_PATH}`)) e('the page must be in the sitemap');
for (const c of CTAS) if (!readFileSync(`dist${c}index.html`, 'utf8').includes(`href="${URL_PATH}"`)) e(`${c} links to the article (Další články)`);
// Prague page: no weak-competition sentence (no data for Prague); Brno page: the sentence with one link
const praha = txt((readFileSync('dist/seo-pro-ucetni-kancelare-praha/index.html', 'utf8').match(/<main[\s\S]*?<\/main>/) || [''])[0]);
if (praha.includes('Proč jsou tyto weby vpředu')) e('Prague page must not contain the weak-competition sentence');
const brno = readFileSync('dist/seo-pro-ucetni-kancelare-brno/index.html', 'utf8');
if (!txt(brno).includes('Proč jsou tyto weby vpředu, nevím') || (brno.match(new RegExp(`href="${URL_PATH}"`, 'g')) || []).length < 2) e('Brno page: weak-competition sentence + "Podrobněji" link + the article card');

if (errors.length) {
  console.error(`\nWeak-SEO accounting article check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`✓ check-post-weak-seo-accounting-cs: ok (${mainTxt.split(/\s+/).length} words)`);
