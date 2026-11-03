// Post-build check of the blog article /blog/slabe-seo-konkurence-prekladatelske-agentury/ (cs, brief of 1.11.2026): meta (title <= 55, description <= 150, no call to action), H1 and H2 order, direct answers
// of 40-60 words, FAQ = JSON-LD (5), one Google link, the video facade (youtube-nocookie on click, Czech title, no VideoObject), three equal CTA buttons to the translation niche pages, no names / guarantees / prices,
// inbound links (the three niche pages, the blog index).
import { readFileSync, existsSync } from './fs-clean.mjs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/blog/slabe-seo-konkurence-prekladatelske-agentury/';
const H1 = 'Proč jsou ve vyhledávání vpředu i překladatelské agentury se slabým SEO?';
const TITLE = 'Proč vede konkurence se slabým SEO | Eranosian';
const DESC = 'Proč je ve vyhledávání vpředu konkurence se slabým webem: pozorování u výsledků pro překlady, hypotézy a to, co z toho nevyplývá.';
const SECTIONS = [H1, 'Co jsem viděl u prvních výsledků pro překlady?', 'Jak vypadají weby dvou z těchto agentur?', 'Proč mohou být vpředu i weby s nedostatky?', 'Znamená to, že je konkurence snadná?', 'Co si z toho má vzít agentura?', 'Časté otázky'];
const FORBIDDEN = ['garantuj', 'zaručeně', 'Kč', 'SEO agentur', 'top 1', 'rychle', 'presto', 'skřivánek', 'skrivanek', 'Presto', 'Skřivánek', 'Start', 'Full SEO', 'konkurence nemá žádnou', 'DPH'];
const GOOGLE = 'https://developers.google.com/search/docs/appearance/ranking-systems-guide';
const CTAS = ['/seo-pro-prekladatelske-agentury-praha/', '/seo-pro-prekladatelske-agentury-brno/', '/seo-pro-prekladatelske-agentury-pardubice/'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const wc = (s) => s.split(/\s+/).filter(Boolean).length;
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/blog/slabe-seo-konkurence-prekladatelske-agentury/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150 || /Požádejte|Objednejte|Kontaktujte/i.test(desc) || /\d/.test(desc)) e(`description: ${desc} (${desc.length})`);
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type article / og:locale');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/blog/og-slabe-seo-konkurence-prekladatelske-agentury.png">`)) e('og:image');
{
  const alts = [...h.matchAll(/<link rel="alternate"[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"/g)].map((m) => m[1] + ' ' + m[2]).sort();
  const want = ['cs https://seo-eranosian.com/blog/slabe-seo-konkurence-prekladatelske-agentury/', 'ru https://seo-eranosian.com/ru/blog/slabaya-seo-konkurenciya-perevodcheskie-agentstva/', 'x-default https://seo-eranosian.com/blog/slabe-seo-konkurence-prekladatelske-agentury/'].sort();
  if (JSON.stringify(alts) !== JSON.stringify(want)) e('hreflang pair cs/ru/x-default expected, got: ' + alts.join(' | '));
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
// links: one Google link, the three CTA buttons (equal), no other service links
if ((main.match(new RegExp(`href="${GOOGLE.replace(/[.#/]/g, '\\$&')}"`, 'g')) || []).length !== 1) e('one link to the Google documentation');
for (const c of CTAS) if ((main.match(new RegExp(`class="btn btn--primary btn--lg" href="${c}"`, 'g')) || []).length !== 1) e(`CTA button to ${c}`);
if ((main.match(/class="btn /g) || []).length !== 3) e('exactly three buttons (the closing block)');
if (/href="\/(?:audit-zdarma|konzultace|start-3-mesice|full-seo|lokalni-seo-mapy)\//.test(main)) e('no links to the other services / audit');
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
if (/<form|★|AggregateRating|ratingValue|\[\?\]|\[počet\]/.test(main)) e('no form / stars / quote / placeholder');
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt.replace(/Jsem SEO specialista/g, '')) || /GEO(?!\/AEO)/.test(mainTxt)) e('"agentura" about the author / bare GEO');
if (!/<img class="post-cover" src="\/images\/blog\/slabe-seo-konkurence-prekladatelske-agentury\.webp" width="1200" height="630" alt="Ilustrace:[^"]+"/.test(main) || main.indexOf('post-cover') > main.indexOf('<h1')) e('cover illustration before the H1');
if (!/<a class="card card--link post-card" href="\/blog\/slabe-seo[^>]*>\s*<img class="post-card-img"/.test(readFileSync('dist/blog/index.html', 'utf8'))) e('blog card with the cover');
if (!/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="2026-11-0[12]">[12]\. 11\. 2026<\/time> · Čtení: \d+ min/.test(h)) e('byline with the date 1. 11. 2026');
// the video: a facade (no iframe before the click), youtube-nocookie on click, a title in Czech, the link to the original, no VideoObject
const vid = (main.match(/<figure class="niche-video"[\s\S]*?<\/figure>/) || [''])[0];
if (!vid || /<iframe/.test(main) || !/data-youtube="l2-SXybLlss"/.test(vid) || !/data-title="Rozbor webů dvou překladatelských agentur"/.test(vid) || !/href="https:\/\/youtu\.be\/l2-SXybLlss"/.test(vid) || !/<img [^>]*alt="Náhled videa/.test(vid)) e('video facade');
if (!/youtube-nocookie\.com\/embed\//.test(h) || /youtube\.com\/embed/.test(h)) e('the player loads from youtube-nocookie.com on click');
// lead and direct answers 40-60 words
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if ((lead.match(/[.!?](\s|$)/g) || []).length !== 2) e(`lead: two sentences expected: ${lead}`);
for (const hd of SECTIONS.slice(1, 6)) {
  const m = h.match(new RegExp(`${hd.replace(/[?.:,]/g, '\\$&')}</h2>\\s*<p class="answer">([\\s\\S]*?)</p>`));
  if (!m) { e(`answer-first: ${hd}`); continue; }
  const n = wc(txt(m[1]));
  if (n < 6 || n > 60) e(`direct answer of "${hd}": ${n} words`);
}
if (!mainTxt.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || !mainTxt.includes('Nedokážu prokázat, že konkurence SEO nedělá')) e('disclosure and the "I cannot prove" sentence');
// JSON-LD equals the visible text
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const node = (t) => g.filter((n) => n['@type'] === t);
const U = BASE + URL_PATH;
const post = node('BlogPosting')[0];
if (!post || post['@id'] !== `${U}#article` || post.headline !== H1 || post.author['@id'] !== `${BASE}/#arsenii` || post.datePublished !== '2026-11-01' || !/^2026-11-0[12]$/.test(post.dateModified)) e('BlogPosting (dates 2026-11-01)');
const wp = node('WebPage')[0];
if (!wp || wp['@id'] !== `${U}#webpage` || wp.inLanguage !== 'cs' || wp.name !== title || wp.description !== desc) e('WebPage');
const bc = node('BreadcrumbList')[0];
if (!bc || bc.itemListElement.length !== 3) e('BreadcrumbList: Domů, Blog, article');
const faq = node('FAQPage')[0];
const visFaq = [...main.match(/<div class="faq-open">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/)[0].matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!faq || faq.mainEntity.length !== 4 || faq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ (4 questions)');
for (const [i, q] of visFaq.entries()) { const n = wc(q[1]); if (n < 6 || n > 60) e(`FAQ ${i + 1} answer: ${n} words`); }
// P1.1 (brief of 03.11.2026): Quotation / HowTo markup is no longer used on the site. if ((main.match(/<figure class="quote-fig">/g) || []).length !== 1 || g.filter((n) => n['@type'] === 'Quotation').length !== 1) e('one author quote with the Quotation node');
if (g.some((n) => ['HowTo', 'Service', 'Offer', 'AggregateRating', 'Review', 'VideoObject', 'Product', 'LocalBusiness'].includes(n['@type']))) e('no HowTo / Service / Offer / rating / VideoObject markup');
if (existsSync('dist/en/blog/why-competitors-with-weak-seo-rank-ahead')) e('no en version');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`${BASE}${URL_PATH}`)) e('the page must be in the sitemap');
for (const c of CTAS) if (!readFileSync(`dist${c}index.html`, 'utf8').includes(`href="${URL_PATH}"`)) e(`${c} links to the article (Další články)`);

if (errors.length) {
  console.error(`\nWeak-SEO article check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`✓ check-post-weak-seo-cs: ok (${mainTxt.split(/\s+/).length} words)`);
