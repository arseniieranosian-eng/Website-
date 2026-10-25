// Post-build check of the blog article /blog/proc-prekladatelska-agentura-nema-poptavky/ (cs, brief of 21.10.2026).
import { readFileSync, existsSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/blog/proc-prekladatelska-agentura-nema-poptavky/';
const H1 = 'Proč překladatelská agentura nemá poptávky z webu?';
const TITLE = 'Web překladatelské agentury bez poptávek | Eranosian';
const DESC = 'Web překladatelské agentury nepřináší poptávky? Co zkontrolovat první: indexaci, jazykové verze, stránky pro firmy. Bezplatný audit.';
const SECTIONS = [H1, 'Přehled příčin a pořadí kontroly', 'Je to sezóna, nebo chyba na webu?', 'Vidí Google všechny stránky a jazykové verze webu?', 'Opakuje se obsah mezi jazykovými verzemi?', 'Má web stránky pro to, co lidé hledají?', 'Mluví web i k firmám, nebo jen ke koncovým zákazníkům?', 'Nezmizelo něco po redesignu nebo změně adres?', 'Souhlasí údaje na Google Maps a Mapy.com s webem?', 'Najde návštěvník, jak se ozvat?', 'Co zahrnuje bezplatný audit?', 'Pro překladatelské agentury v Praze', 'Často kladené otázky', 'Nevíte, kde je příčina?'];
const LINKS = ['/blog/', '/audit-zdarma/', '/seo-pro-prekladatelske-agentury-praha/', '/pripadove-studie/seo-v-nizke-sezone/', '/pripadove-studie/seo-prekladatelska-agentura/', '/blog/jak-zjistit-jestli-je-web-indexovany/', '/blog/duplicitni-obsah/', '/blog/po-redesignu-klesla-navstevnost/', '/blog/presmerovani-301-a-chyby-404/', '/blog/seo-a-reklama/', '/blog/novy-web-a-google-ho-nevidi/', '/o-mne/'];
const FORBIDDEN = ['garantuj', 'zaručeně', 'ChatGPT', 'Screaming', 'Kč', 'SEO agentur', 'první místo', 'nedostatek poptávek', 'objednávky', '×8', '×24', '+400'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/blog/proc-prekladatelska-agentura-nema-poptavky/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length < 35 || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type article / og:locale');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/blog/og-proc-prekladatelska-agentura-nema-poptavky.png">`)) e('og:image');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('Czech-only page: no hreflang alternates');
if (/<meta name="robots"[^>]*noindex/.test(h)) e('page must be indexable');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing link ${l}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
if (/<form|<video|★|AggregateRating|ratingValue|\[\?\]/.test(main)) e('no form / video / stars / [?] markers');
if ((main.match(/href="\/audit-zdarma\/"/g) || []).length < 2) e('audit links');
if (!/<img class="post-cover" src="\/images\/blog\/proc-prekladatelska-agentura-nema-poptavky\.webp" width="1200" height="630" alt="Ilustrace:[^"]+"/.test(main) || main.indexOf('post-cover') > main.indexOf('<h1')) e('cover illustration before the H1');
if (!/<a class="card card--link post-card" href="\/blog\/proc-se[^>]*>\s*<img class="post-card-img"/.test(readFileSync('dist/blog/index.html', 'utf8'))) e('blog card with the cover');
// Byline
if (!/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">[^<]+<\/time> · Čtení: \d+ min/.test(h)) e('byline');
// Answer-first: a direct answer right after every question-form H2
for (const hd of SECTIONS.slice(2, 10)) {
  if (!new RegExp(`${hd.replace(/[?.:]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
}
// Table of the audit types (HTML)
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 9 || rows[0].join('|') !== 'Příčina|Jak poznám|Co zkontrolovat první') e('table of causes (8 rows)');
// Illustrations: 4, labelled, with accessible names
const figs = [...main.matchAll(/<figure class="post-figure">([\s\S]*?)<\/figure>/g)].map((m) => m[1]);
if (figs.length !== 1 || figs.some((f) => !/<svg[^>]*role="img"[^>]*aria-label="Ilustrace:/.test(f) || !/<figcaption>Ilustrace:/.test(f))) e('one labelled illustration');
// Author quote: figure, cite, signature
const QUOTE = 'Když agentura nemá poptávky, málokdy za tím stojí jedna chyba. Obvykle je to několik drobností, které se sčítají.';
if (!new RegExp(`<figure class="quote-fig">\\s*<blockquote cite="${BASE}${URL_PATH}"><p>${QUOTE.replace(/\./g, '\\.')}</p></blockquote>\\s*<figcaption>[\\s\\S]*?— <a href="/o-mne/">Arsenii Eranosian</a>, SEO a GEO/AEO specialista`).test(main)) e('author quote figure');
if (mainTxt.lastIndexOf('Nezmizelo něco po redesignu nebo změně adres?') > mainTxt.indexOf(QUOTE) || mainTxt.indexOf(QUOTE) > mainTxt.lastIndexOf('Souhlasí údaje na Google Maps')) e('quote after the redesign section');
// JSON-LD equals the visible text
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
const g = ld['@graph'];
const node = (t) => g.filter((n) => n['@type'] === t);
const U = BASE + URL_PATH;
const post = node('BlogPosting')[0];
if (!post || post['@id'] !== `${U}#article` || post.headline !== H1 || post.author['@id'] !== `${BASE}/#arsenii` || !post.datePublished || post.dateModified !== h.match(/Aktualizováno: <time datetime="([^"]+)"/)[1]) e('BlogPosting');
const wp = node('WebPage')[0];
if (!wp || wp['@id'] !== `${U}#webpage` || wp.mainEntity['@id'] !== `${U}#article` || wp.inLanguage !== 'cs') e('WebPage');
const qn = node('Quotation')[0];
if (!qn || qn['@id'] !== `${U}#quote-1` || qn.text !== QUOTE) e('Quotation');
const visSteps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)].map((m) => [...m[1].matchAll(/<li><span>([\s\S]*?)<\/span><\/li>/g)].map((x) => txt(x[1])));
if (node('HowTo').length) e('no HowTo on this article');
const faq = node('FAQPage')[0];
const visFaq = [...main.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!faq || faq.mainEntity.length !== 5 || faq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ');
if (g.some((n) => ['Service', 'Offer', 'AggregateRating', 'Review'].includes(n['@type']))) e('no Service/Offer/rating markup');
if ([...(main.match(/<ol class="toc">[\s\S]*?<\/ol>/) || [''])[0].matchAll(/<li><a href="#/g)].length !== 8) e('table of contents: eight anchors');
for (const id of ['sezonnost', 'indexace', 'duplicity', 'stranky', 'firmy', 'zmeny', 'mapy', 'kontakt']) if (!main.includes(`id="${id}"`)) e(`anchor target: ${id}`);
if (!mainTxt.includes('Níže je osm příčin v pořadí, v jakém je doporučuji kontrolovat.')) e('eight causes sentence');
if (/Co vidím u webů překladatelských agentur/.test(mainTxt)) e('no invented author observations');
if ((main.match(/class="btn btn--primary/g) || []).length !== 2) e('two audit buttons (audit section and the end)');
const first100 = mainTxt.split(' ').slice(0, 100).join(' ');
if (/seo-pro-prekladatelske|Praze/.test(first100.replace(/Praha/g, ''))) e('no landing link or quote in the first 100 words');
// Length (brief: 1 200–1 600 words is the target; flag only when far off)
const wc = mainTxt.split(/\s+/).length;
if (wc < 700) e(`too short: ${wc} words`);
// Czech-only: no en/ru copy, robots.txt lets AI bots in, blog index lists the article
if (existsSync('dist/en/blog/how-to-check-if-a-site-is-indexed') || existsSync('dist/ru/blog/kak-proverit-indeksaciyu-sajta')) e('no en/ru versions yet');
const robots = readFileSync('dist/robots.txt', 'utf8');
if (/User-agent: (GPTBot|ClaudeBot|PerplexityBot)[\s\S]{0,40}Disallow: \//.test(robots)) e('robots.txt must not block AI bots');
const blog = readFileSync('dist/blog/index.html', 'utf8');
if (!blog.includes(`href="${URL_PATH}"`) || /<meta name="robots"[^>]*noindex/.test(blog)) e('blog index must list the article and be indexable');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');

if (errors.length) { console.error('✗ check-post-noleads-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-noleads-cs: ok (${wc} words)`);
