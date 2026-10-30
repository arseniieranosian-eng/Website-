// Post-build check of the blog article /blog/stranky-ctvrti-a-lokalit-realitni-kancelare/ (cs, brief K3 of 28.10.2026): meta limits (title <= 55, description <= 150), H1 and H2 order,
// direct answers of 40-60 words, FAQ = JSON-LD, two tables/lists in HTML, one Google link, links, forbidden text (no prices, guarantees, portals, real districts), JSON-LD without HowTo/Quotation.
import { readFileSync, existsSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/blog/seo-plan-na-12-mesicu/';
const H1 = 'Jak vypadá SEO plán na 12 měsíců a co má obsahovat?';
const TITLE = 'SEO plán na 12 měsíců: co obsahuje | Eranosian';
const DESC = 'Co má obsahovat SEO plán: cíl, výchozí stav, priority, etapy, měření a odpovědnosti. Plán není záruka výsledků. Přehled s tabulkou a třemi checklisty.';
const SECTIONS = [H1, 'Co je SEO plán a k čemu slouží?', 'Z čeho se dobrý plán skládá?', 'Jak plán vychází z auditu?', 'Jak se plán dělí na etapy?', 'Jak plán určuje priority?', 'Jak se v plánu měří pokrok?', 'Čím se kvalitní plán liší od obecného seznamu rad?', 'Co si z plánu odnést, i když nic nekoupíte?', 'Časté otázky', 'Související články'];
const LINKS = ['/blog/', '/konzultace/', '/blog/co-je-seo-audit/', '/blog/jak-vybrat-seo-specialistu/', '/blog/audit-konzultace-nebo-start/'];
const FORBIDDEN = ['garantuj', 'zaručeně', 'Kč', 'SEO agentur', 'top 1', 'rychlé výsledky', 'SEO plán zdarma', 'bezplatný audit', 'audit zdarma', 'Start na', 'Full SEO', 'za 3 měsíce', 'za půl roku', 'minimálně'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/blog/seo-plan-na-12-mesicu/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type article / og:locale');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/blog/og-seo-plan-na-12-mesicu.png">`)) e('og:image');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('Czech-only page: no hreflang alternates');
if (/<meta name="robots"[^>]*noindex/.test(h)) e('page must be indexable');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing link ${l}`);
if ((main.match(/href="\/blog\/co-je-seo-audit\/"/g) || []).length !== 1 || (main.match(/href="\/blog\/jak-vybrat-seo-specialistu\/"/g) || []).length !== 1 || (main.match(/href="\/blog\/audit-konzultace-nebo-start\/"/g) || []).length !== 1 || (main.match(/href="\/konzultace\/"/g) || []).length !== 2 || /redesign-webu|audit-zdarma|start-3-mesice|full-seo/.test(main)) e('links: co-je-seo-audit once (H2-3), K2 once (F2), audit-konzultace-nebo-start once (related), /konzultace/ once; no K1 / audit / Start / Full SEO links');
if (!mainTxt.startsWith('Autor') && !/Jsem SEO specialista, proto může být moje hodnocení zaujaté\. Plán popisuji obecně, ne podle konkrétní nabídky\./.test(mainTxt)) e('disclosure of the author interest in the first two sentences');
if ((main.match(/class="btn /g) || []).length !== 1) e('exactly one button: the closing CTA to the consultation');
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
if (/<form|<video|★|AggregateRating|ratingValue|<blockquote|\[\?\]/.test(main)) e('no form / video / stars / quote / [?] markers');
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt) || /GEO(?!\/AEO)/.test(mainTxt)) e('"agentura" about the author / bare GEO');
if (!/<img class="post-cover" src="\/images\/blog\/seo-plan-na-12-mesicu\.webp" width="1200" height="630" alt="Ilustrace:[^"]+"/.test(main) || main.indexOf('post-cover') > main.indexOf('<h1')) e('cover illustration before the H1');
if (!/<a class="card card--link post-card" href="\/blog\/proc-web-ucetni[^>]*>\s*<img class="post-card-img"/.test(readFileSync('dist/blog/index.html', 'utf8'))) e('blog card with the cover');
if (!/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno <time datetime="\d{4}-\d{2}-\d{2}">[^<]+<\/time> · Čtení: \d+ min/.test(h)) e('byline');
// Direct answers: lead + one under every H2 (40-60 words)
const wc = (s) => s.split(/\s+/).filter(Boolean).length;
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (wc(lead) < 20 || wc(lead) > 60) e(`lead: ${wc(lead)} words`);
for (const hd of SECTIONS.slice(1, 9)) {
  const m = h.match(new RegExp(`${hd.replace(/[?.:]/g, '\\$&')}</h2>\\s*<p class="answer">([\\s\\S]*?)</p>`));
  if (!m) { e(`answer-first: ${hd}`); continue; }
  const n = wc(txt(m[1]));
  if (n < 40 || n > 60) e(`direct answer of "${hd}": ${n} words`);
}
// Table (header + 5 rows) and the two lists (checklist of 7, signs of 4)
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 7 || rows[0].join('|') !== 'Část plánu|Co obsahuje' || !mainTxt.includes('Tabulka je doporučení autora, ne požadavek Google.')) e('parts table: header + 6 rows, marked as the author\'s recommendation');
const lists = [...main.matchAll(/<ul class="checks">([\s\S]*?)<\/ul>/g)].map((m) => [...m[1].matchAll(/<li>/g)].length);
if (lists.join() !== '5,5,5') e(`lists: ${lists.join()} (three checklists of 5 expected)`);
// JSON-LD equals the visible text
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const node = (t) => g.filter((n) => n['@type'] === t);
const U = BASE + URL_PATH;
const post = node('BlogPosting')[0];
if (!post || post['@id'] !== `${U}#article` || post.headline !== H1 || post.author['@id'] !== `${BASE}/#arsenii` || post.datePublished !== '2026-10-28' || post.dateModified !== h.match(/Aktualizováno <time datetime="([^"]+)"/)[1]) e('BlogPosting');
const wp = node('WebPage')[0];
if (!wp || wp['@id'] !== `${U}#webpage` || wp.mainEntity['@id'] !== `${U}#article` || wp.inLanguage !== 'cs' || wp.name !== title || wp.description !== desc) e('WebPage');
const bc = node('BreadcrumbList')[0];
if (!bc || bc.itemListElement.length !== 3) e('BreadcrumbList: Domů, Blog, article');
const faq = node('FAQPage')[0];
const visFaq = [...(main.match(/<div class="faq-open">[\s\S]*$/) || [""])[0].matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!faq || faq.mainEntity.length !== 6 || faq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ (6 questions)');
for (const [i, q] of visFaq.entries()) { const n = wc(q[1]); if (n < 40 || n > 60) e(`FAQ ${i + 1} answer: ${n} words`); }
if (g.some((n) => ['HowTo', 'Service', 'Offer', 'AggregateRating', 'Review', 'Quotation', 'VideoObject', 'Product'].includes(n['@type']))) e('no HowTo / Service / Offer / rating / Quotation / VideoObject markup');
if (existsSync('dist/en/blog/12-month-seo-plan') || existsSync('dist/ru/blog/seo-plan-na-12-mesyacev')) e('no en/ru versions');
const robots = readFileSync('dist/robots.txt', 'utf8');
if (/User-agent: (GPTBot|ClaudeBot|PerplexityBot)[\s\S]{0,40}Disallow: \//.test(robots)) e('robots.txt must not block AI bots');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`${BASE}${URL_PATH}`)) e('the page must be in the sitemap');
if (!readFileSync('dist/konzultace/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('the consultation page lists the article');
if (mainTxt.split(/\s+/).length < 800) e(`too short: ${mainTxt.split(/\s+/).length} words`);

if (errors.length) {
  console.error(`\nSEO plan K3 article check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`✓ check-post-seo-plan-cs: ok (${mainTxt.split(/\s+/).length} words)`);
