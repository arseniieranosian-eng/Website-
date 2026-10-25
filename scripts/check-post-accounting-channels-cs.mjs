// Post-build check of the blog article /blog/jak-ziskat-klienty-pro-ucetni-kancelar/ (cs, brief U1 of 24.10.2026): meta, H2 order, answer-first, channel table, checklist, steps,
// one confirmed quote, no invented observation, links, FAQ = JSON-LD, no HowTo/Service, cs-only, blog index.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/blog/jak-ziskat-klienty-pro-ucetni-kancelar/';
const H1 = 'Jak získat klienty pro účetní kancelář: přehled kanálů';
const TITLE = 'Jak získat klienty pro účetní kancelář | Eranosian';
const DESC = 'Jak získat klienty pro účetní kancelář: doporučení, web a SEO, mapy, reklama i sítě. Přehled kanálů bez slibů. Zdarma technický audit webu.';
const SECTIONS = [H1, 'Odkud mají účetní kanceláře klienty?', 'Co dělají doporučení a reference?', 'Kdy dává smysl vlastní web a vyhledávání?', 'Co přinášejí mapy a profil firmy?', 'Kdy se vyplatí placená reklama?', 'Jak vybrat kanál, když není čas na všechno?', 'Jak začít: první tři kroky', 'Často kladené otázky', 'Související stránky a další krok'];
const LINKS = ['/blog/', '/audit-zdarma/', '/konzultace/', '/seo-pro-ucetni-kancelare-praha/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/o-mne/'];
const FORBIDDEN = ['garantovaně', 'zaručeně', 'top 1', 'první místo', 'mnoho klientů', 'SEO agentur', 'Kč', 'Sklik', 'Google Ads', 'Facebook Ads', 'daňov', 'GDPR', 'zákon', 'na části webů', 'prohlédl', 'ChatGPT'];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/blog/jak-ziskat-klienty-pro-ucetni-kancelar/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type article / og:locale cs_CZ');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/blog/og-jak-ziskat-klienty-pro-ucetni-kancelar.png">`)) e('og:image');
if (/<link rel="alternate"[^>]*hreflang=/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('Czech only, indexable, no hreflang');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const hd of [...main.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1]))) if (/SEO pro účetní/i.test(hd)) e(`"SEO pro účetní" must not be in a heading: ${hd}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing link ${l}`);
if (/<form|<video|★|ratingValue|\[\?\]/.test(main)) e('no form / video / stars / [?] markers');
if (/seo-pro-prekladatelske|seo-pro-realitni|\/blog\/(?!jak-ziskat)[a-z]/.test(main.replace(/href="\/blog\/"/g, ''))) e('no links to other niches / posts (U2–U6 do not exist yet)');
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt)) e('"agentura" about the author');
if (/GEO(?!\/AEO)/.test(mainTxt)) e('"GEO" only together with AEO');
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/seo-pro-ucetni-kancelare-praha\/"/g) !== 2) e('landing link twice');
if (cnt(/href="\/audit-zdarma\/"/g) !== 2) e(`audit links: ${cnt(/href="\/audit-zdarma\/"/g)} (step 7 and the closing button)`);
if (cnt(/href="\/konzultace\/"/g) !== 1 || cnt(/href="\/start-3-mesice\/"/g) !== 1 || cnt(/href="\/full-seo\/"/g) !== 1) e('consulting / Start / Full SEO once each');
if (cnt(/href="\/lokalni-seo-mapy\/"/g) < 2) e('maps link in the table and in the maps section');
if (cnt(/class="btn btn--primary/g) !== 1) e('one audit button');
if (!/<img class="post-cover" src="\/images\/blog\/jak-ziskat-klienty-pro-ucetni-kancelar\.webp" width="1200" height="630" alt="Ilustrace:[^"]+"/.test(main) || main.indexOf('post-cover') > main.indexOf('<h1')) e('cover illustration before the H1');
if (!/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">[^<]+<\/time> · Čtení: \d+ min/.test(h)) e('byline');
for (const hd of SECTIONS.slice(1, 8)) if (!new RegExp(`${hd.replace(/[?.:]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
if (!mainTxt.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.')) e('bias disclosure');
// Channel table: header + 6 rows × 4 columns, no numbers
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 7 || rows[0].join('|') !== 'Kanál|Odkud klient přichází|Kdy se hodí|Omezení' || rows.some((r) => r.length !== 4)) e('channel table: header + 6 rows × 4 columns');
if (rows.slice(1).some((r) => /\d/.test(r.join(' ')))) e('no numbers in the channel table');
if (!/podrobnosti na stránce \(<a href="\/lokalni-seo-mapy\/">Mapy<\/a>\)/.test(main.replace(/\u00a0/g, ' '))) e('maps link in the table row');
if (([...(main.match(/Jak vybrat kanál, když není čas na všechno\?[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) || [, ''])[1].matchAll(/<li>/g)]).length !== 5) e('checklist: 5 questions');
if ([...(main.match(/<ol class="steps">([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li><span>/g)].length !== 3) e('three steps');
// Quote: one, confirmed, not in the first 100 words, no unconfirmed observation
const QUOTE = 'Doporučení jsou pro účetní kancelář dobrý základ, ale klient si kancelář může ještě vyhledat. Proto stojí za to, aby byla vidět ve vyhledávání i v odpovědích AI.';
const qfig = [...main.matchAll(/<figure class="quote-fig">[\s\S]*?<\/figure>/g)];
if (qfig.length !== 1 || !txt(qfig[0][0]).includes(QUOTE) || !/<a href="\/o-mne\/">Arsenii Eranosian<\/a>/.test(qfig[0][0])) e('one quote figure with the signature');
if (mainTxt.split(' ').slice(0, 100).join(' ').includes('Doporučení jsou pro účetní kancelář dobrý')) e('quote not in the first 100 words');
// JSON-LD equals the visible text
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const node = (t) => g.filter((n) => n['@type'] === t);
const U = BASE + URL_PATH;
const post = node('BlogPosting')[0];
if (!post || post['@id'] !== `${U}#article` || post.headline !== H1 || post.author['@id'] !== `${BASE}/#arsenii` || post.datePublished !== '2026-10-24' || post.dateModified !== h.match(/Aktualizováno: <time datetime="([^"]+)"/)[1]) e('BlogPosting');
const wp = node('WebPage')[0];
if (!wp || wp['@id'] !== `${U}#webpage` || wp.mainEntity['@id'] !== `${U}#article` || wp.inLanguage !== 'cs') e('WebPage');
const qn = node('Quotation');
if (qn.length !== 1 || norm(qn[0].text) !== QUOTE || qn[0]['@id'] !== `${U}#quote-1`) e('one Quotation = the visible quote');
if (g.some((n) => ['HowTo', 'Service', 'Offer', 'AggregateRating', 'Review', 'VideoObject'].includes(n['@type']))) e('no HowTo / Service / Offer / ratings / VideoObject');
const faq = node('FAQPage')[0];
const visFaq = [...main.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!faq || faq.mainEntity.length !== 6 || faq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ');
const bc = node('BreadcrumbList')[0];
if (!bc || bc.itemListElement.length !== 3 || bc.itemListElement[1].item !== `${BASE}/blog/`) e('breadcrumbs: Domů → Blog → článek');
if ([...(main.match(/<ol class="toc">[\s\S]*?<\/ol>/) || [''])[0].matchAll(/<li><a href="#/g)].length !== 7) e('table of contents: seven anchors');
for (const id of ['kanaly', 'doporuceni', 'web', 'mapy', 'reklama', 'vyber', 'start']) if (!main.includes(`id="${id}"`)) e(`anchor target: ${id}`);
// Inbound: blog index, sitemap, landing, robots
const blog = readFileSync('dist/blog/index.html', 'utf8');
if (!blog.includes(`href="${URL_PATH}"`)) e('blog index must list the article');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (!readFileSync('dist/seo-pro-ucetni-kancelare-praha/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('landing block "Další články"');
if (/User-agent: (GPTBot|ClaudeBot|PerplexityBot)[\s\S]{0,40}Disallow: \//.test(readFileSync('dist/robots.txt', 'utf8'))) e('robots.txt must not block AI bots');
const wc = mainTxt.split(/\s+/).length;
if (wc < 700) e(`too short: ${wc} words`);
if (errors.length) { console.error('✗ check-post-accounting-channels-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-accounting-channels-cs: ok (${wc} words)`);
