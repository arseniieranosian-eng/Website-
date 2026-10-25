// Post-build check of the blog article /blog/seo-a-reklama/ (cs, brief of 21.10.2026).
import { readFileSync, existsSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/blog/seo-a-reklama/';
const H1 = 'SEO a reklama: proč reklama funguje lépe na optimalizovaném webu';
const TITLE = 'SEO a reklama: jak je kombinovat | Eranosian';
const DESC = 'SEO nebo reklama? Reklama dodá návštěvníky rychle, ale výsledek závisí na webu. Jak SEO reklamě pomáhá a jak je kombinovat.';
const SECTIONS = [H1, 'Reklama, nebo SEO: v čem se liší?', 'Proč reklama často vychází draho?', 'Jak pomáhá SEO-připravený web reklamě?', 'Co se stane, když pošlete reklamu na neoptimalizovaný web?', 'V jakém pořadí SEO a reklamu kombinovat?', 'Kdy je reklama první volba?', 'Jak poznat, že je web připravený na reklamu?', 'Časté otázky o SEO a reklamě', 'Chcete web, který unese reklamu i SEO?'];
const LINKS = ['/blog/', '/start-3-mesice/', '/konzultace/', '/audit-zdarma/', '/seo-a-geo/', '/o-mne/'];
const FORBIDDEN = ['garantuj', 'zaručeně', 'ChatGPT', 'Screaming', 'Kč', 'agentur', 'Google Ads vyhodnocuje', 'nižší cena za klienta'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/blog/seo-a-reklama/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length < 35 || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type article / og:locale');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/blog/og-seo-a-reklama.png">`)) e('og:image');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('Czech-only page: no hreflang alternates');
if (/<meta name="robots"[^>]*noindex/.test(h)) e('page must be indexable');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing link ${l}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
if (/<form|<video|★|AggregateRating|ratingValue|\[\?\]/.test(main)) e('no form / video / stars / [?] markers');
if ((main.match(/href="\/audit-zdarma\/"/g) || []).length !== 1) e('free audit: exactly one soft link');
if (!/<img class="post-cover" src="\/images\/blog\/seo-a-reklama\.webp" width="1200" height="630" alt="Ilustrace:[^"]+"/.test(main) || main.indexOf('post-cover') > main.indexOf('<h1')) e('cover illustration before the H1');
if (!/<a class="card card--link post-card" href="\/blog\/proc-se[^>]*>\s*<img class="post-card-img"/.test(readFileSync('dist/blog/index.html', 'utf8'))) e('blog card with the cover');
// Byline
if (!/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">[^<]+<\/time> · Čtení: \d+ min/.test(h)) e('byline');
// Answer-first: a direct answer right after every question-form H2
for (const hd of SECTIONS.slice(1, 8)) {
  if (!new RegExp(`${hd.replace(/[?.:]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
}
// Table of the audit types (HTML)
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 6 || rows[0].join('|') !== 'Hledisko|Reklama|SEO') e('reklama vs SEO table (5 rows)');
// Illustrations: 4, labelled, with accessible names
const figs = [...main.matchAll(/<figure class="post-figure">([\s\S]*?)<\/figure>/g)].map((m) => m[1]);
if (figs.length !== 1 || figs.some((f) => !/<svg[^>]*role="img"[^>]*aria-label="Ilustrace:/.test(f) || !/<figcaption>Ilustrace:/.test(f))) e('one labelled illustration');
// Author quote: figure, cite, signature
const QUOTE = 'Reklama dodá návštěvníky, ale o tom, jestli z nich budou poptávky, rozhoduje web. Proto začínám základem, ne rozpočtem.';
if (!new RegExp(`<figure class="quote-fig">\\s*<blockquote cite="${BASE}${URL_PATH}"><p>${QUOTE.replace(/\./g, '\\.')}</p></blockquote>\\s*<figcaption>[\\s\\S]*?— <a href="/o-mne/">Arsenii Eranosian</a>, SEO a GEO/AEO specialista`).test(main)) e('author quote figure');
if (mainTxt.indexOf('Proč reklama často vychází draho?') > mainTxt.indexOf(QUOTE) || mainTxt.indexOf(QUOTE) > mainTxt.indexOf('Jak pomáhá SEO-připravený web reklamě?')) e('author quote after the cost section');
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
const hows = node('HowTo');
if (hows.length !== 1 || hows.some((hw, k) => hw.step.length !== visSteps[k].length || hw.step.some((st, i) => norm(st.text) !== visSteps[k][i]))) e('HowTo step texts must equal the visible numbered steps word for word');
const faq = node('FAQPage')[0];
const visFaq = [...main.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/div>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!faq || faq.mainEntity.length !== 4 || faq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ');
if (g.some((n) => ['Service', 'Offer', 'AggregateRating', 'Review'].includes(n['@type']))) e('no Service/Offer/rating markup');
const Q2 = 'Dobrá cílová stránka je polovina úspěchu kampaně. Když neodpovídá tomu, co člověk hledal, může být každý klik zbytečně drahý.';
if (!/<figure class="owner-quote">\s*<blockquote cite="[^"]*seo-a-reklama\/"><p>[^<]*<\/p><\/blockquote>\s*<figcaption>\s*<img src="\/images\/blog\/ilya-naumuk\.jpg"[^>]*alt="Ilya Naumuk, specialista na PPC reklamu"[^>]*>\s*<span>— <a href="https:\/\/www\.instagram\.com\/naum_official"[^>]*>Ilya Naumuk<\/a>, specialista na PPC reklamu<\/span><\/figcaption>/.test(main)) e('PPC specialist quote with the Instagram link');
const iq2 = mainTxt.indexOf(Q2);
if (!(mainTxt.indexOf('Jak poznat, že je web připravený na reklamu?') < iq2 && iq2 < mainTxt.indexOf('Stránka odpovídá na konkrétní dotaz.'))) e('quote 2 after the first paragraph of the readiness section, before the checklist');
if (!mainTxt.includes('Reklamu nespravuji, pomáhám připravit web.')) e('border: advertising is not managed');
const q2n = node('Quotation').find((n) => n['@id'] === `${U}#quote-2`);
if (!q2n || q2n.text !== Q2) e('Quotation #2');
const ppc = g.find((n) => n['@id'] === `${U}#ppc`);
if (!ppc || ppc.name !== 'Ilya Naumuk' || !ppc.sameAs.includes('https://www.instagram.com/naum_official')) e('PPC specialist Person node');
if (!/<a class="btn btn--primary btn--lg" href="\/start-3-mesice\/">SEO start na 3 měsíce<\/a>/.test(main) || !/btn btn--secondary btn--lg" href="\/konzultace\/">Domluvit konzultaci/.test(main)) e('closing buttons: Start (primary) + consultation');
if (/class="btn[^"]*" href="\/audit-zdarma\/"/.test(main)) e('free audit is a soft text link, not a button');
if (!/relatedLink/.test(JSON.stringify(g)) || post.relatedLink !== `${BASE}/start-3-mesice/`) e('relatedLink → Start');
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

if (errors.length) { console.error('✗ check-post-ads-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-ads-cs: ok (${wc} words)`);
