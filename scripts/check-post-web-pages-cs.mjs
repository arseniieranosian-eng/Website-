// Post-build check of the blog article /blog/jake-stranky-ma-mit-web-firmy/ (cs, brief of 03.11.2026): meta (title <= 55, description <= 150, no call to action), H1 and H2 order, direct answers,
// the author's quote after H2-1 (plain blockquote, NO Quotation markup), FAQ = JSON-LD (4), no links in the body, ONE closing button to the free audit, no names / guarantees / prices,
// no hreflang (cs only), inbound (blog index, sitemap), the landing pages do NOT link to the article yet (rule F).
import { readFileSync } from './fs-clean.mjs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/blog/jake-stranky-ma-mit-web-firmy/';
const FILE = 'dist/blog/jake-stranky-ma-mit-web-firmy/index.html';
const H1 = 'Jaké stránky má mít web firmy a co která z nich dělá?';
const TITLE = 'Jaké stránky má mít web firmy a k čemu jsou | Eranosian';
const DESC = 'Stránky služeb, informační články a stránky důvěry: co každá z nich dělá na webu firmy, jak se doplňují a proč je nemíchat.';
const SECTIONS = [H1, 'Jaké tři úlohy mají stránky na webu firmy?', 'Co dělá stránka služby?', 'K čemu je firmě blog?', 'Jaké stránky budují důvěru?', 'Jsou stránky pro města a obory zvláštní typ?', 'Jak spolu tyto stránky souvisejí?', 'Časté otázky'];
const FORBIDDEN = ['zaručuj', 'záruk', 'garant', 'neslibuj', 'Kč', 'DPH', 'WordPress', 'jen proto', 'pouze protože', 'udělám z vás', 'vyvedu do topu', 'Start', 'Full SEO', 'konzultac', 'kejsy', 'B2B'];

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
if (!h.includes('<meta property="og:type" content="article">') || !h.includes(`<meta property="og:image" content="${BASE}/images/blog/og-jake-stranky-ma-mit-web-firmy.png">`)) e('og:type / og:image');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('Czech-only page: no hreflang alternates');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
// links: only the author and the one closing button
const bodyLinks = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((x) => x !== '/o-mne/' && x !== '/audit-zdarma/');
if (bodyLinks.length) e(`no links in the body: ${bodyLinks}`);
if ((main.match(/class="btn /g) || []).length !== 1 || !/class="btn btn--primary btn--lg" href="\/audit-zdarma\/">Požádat o bezplatný technický audit</.test(main)) e('exactly one button, to the free audit');
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
if (/<form|★|AggregateRating|<iframe|\[\?/.test(main)) e('no form / stars / video / placeholder');
if (/\b(jsem|moje|naše|moji)\b[^.]{0,30}\bagentur/i.test(mainTxt.replace(/Jsem SEO specialista/g, '')) || /GEO(?!\/AEO)/.test(mainTxt)) e('"agentura" about the author / bare GEO');
if (!/<img class="post-cover" src="\/images\/blog\/jake-stranky-ma-mit-web-firmy\.webp" width="1200" height="630" alt="Ilustrace:[^"]+"/.test(main) || main.indexOf('post-cover') > main.indexOf('<h1')) e('cover illustration before the H1');
if (!/<a class="card card--link post-card" href="\/blog\/jake-stranky-ma-mit-web-firmy[^>]*>\s*<img class="post-card-img"/.test(readFileSync('dist/blog/index.html', 'utf8'))) e('blog card with the cover');
if (!/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="2026-11-03">3\. 11\. 2026<\/time> · Čtení: \d+ min/.test(h)) e('byline with the date 3. 11. 2026');
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (/\d/.test(lead) || (lead.match(/[.!?](\s|$)/g) || []).length > 2) e(`lead: one or two sentences without numbers: ${lead}`);
for (const hd of SECTIONS.slice(1, 7)) {
  const m = h.match(new RegExp(`${hd.replace(/[?.:,]/g, '\\$&')}</h2>\\s*<p class="answer">([\\s\\S]*?)</p>`));
  if (!m) { e(`answer-first: ${hd}`); continue; }
  const n = wc(txt(m[1]));
  if (n < 6 || n > 60) e(`direct answer of "${hd}": ${n} words`);
}
// the author's quote: right after H2-1, a plain blockquote, signed, one only
const qs = [...main.matchAll(/<figure class="quote-fig">\s*<blockquote cite="[^"]*"><p>([^<]*)<\/p><\/blockquote>/g)];
const QUOTE = 'Každá stránka na webu má jednu práci. Když se pokouší dělat dvě, nedělá dobře ani jednu.';
if (qs.length !== 1 || dec(qs[0][1]).replace(/\u00a0/g, ' ') !== QUOTE) e('one author quote, word for word');
if (main.indexOf('quote-fig') < main.indexOf('Jaké tři úlohy') || main.indexOf('quote-fig') > main.indexOf('Co dělá stránka služby?')) e('the quote stands after H2-1 and before H2-2');
if (!mainTxt.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || main.indexOf('Jsem SEO specialista') > main.indexOf('post-cta')) e('disclosure before the CTA');
// JSON-LD
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const node = (t) => g.filter((n) => n['@type'] === t);
const U = BASE + URL_PATH;
const post = node('BlogPosting')[0];
if (!post || post['@id'] !== `${U}#article` || post.headline !== H1 || post.author['@id'] !== `${BASE}/#arsenii` || post.datePublished !== '2026-11-03') e('BlogPosting');
const wp = node('WebPage')[0];
if (!wp || wp['@id'] !== `${U}#webpage` || wp.inLanguage !== 'cs' || wp.name !== title || wp.description !== desc) e('WebPage');
const bc = node('BreadcrumbList')[0];
if (!bc || bc.itemListElement.length !== 3) e('BreadcrumbList: Domů, Blog, article');
const faq = node('FAQPage')[0];
const visFaq = [...main.match(/<div class="faq-open">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/)[0].matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!faq || faq.mainEntity.length !== 4 || faq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ (4 questions)');
for (const [i, q] of visFaq.entries()) { const n = wc(q[1]); if (n < 6 || n > 60) e(`FAQ ${i + 1} answer: ${n} words`); }
if (g.some((n) => ['HowTo', 'Service', 'Offer', 'AggregateRating', 'Review', 'Quotation', 'VideoObject', 'Product', 'LocalBusiness'].includes(n['@type']))) e('no HowTo / Service / Offer / rating / Quotation / VideoObject / LocalBusiness markup');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`${BASE}${URL_PATH}`)) e('the page must be in the sitemap');
// rule F: the landing pages do not link to the article
for (const f of ['dist/seo-pro-prekladatelske-agentury-praha/index.html', 'dist/seo-pro-ucetni-kancelare-praha/index.html', 'dist/audit-zdarma/index.html', 'dist/index.html']) if (readFileSync(f, 'utf8').includes(`href="${URL_PATH}"`)) e(`${f}: must not link to the article (rule F)`);

if (errors.length) {
  console.error(`\nWeb-pages article check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`✓ check-post-web-pages-cs: ok (${mainTxt.split(/\s+/).length} words)`);
