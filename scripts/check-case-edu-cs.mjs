// Post-build check of the anonymised education-platform case (cs) against its brief of 20.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/pripadove-studie/seo-vzdelavaci-platforma/';
const RU_PATH = '/ru/kejsy/seo-obrazovatelnaya-platforma/';
const H1 = 'SEO pro novou vzdělávací platformu: +55 % organické návštěvnosti za 7 měsíců';
const SECTIONS = [H1, 'Jaká byla výchozí situace?', 'Proč jsme na začátku zvolili málo hledané dotazy?', 'Co jsme dělali?', 'Jaké byly výsledky za 7 měsíců?', 'Čemu se z případu naučit?', 'Časté otázky k případové studii', 'Související služby', 'Spouštíte nový web a nevíte, kde začít?'];
const LINKS = ['/pripadove-studie/', '/start-3-mesice/', '/full-seo/', '/konzultace/', '/audit-zdarma/', '/kontakt/', '/o-mne/', '/pripadove-studie/seo-tiskarna/', '/pripadove-studie/seo-prekladatelska-agentura-4-mesice/'];
// Out of scope / not confirmed: absolute numbers, sign-ups, rankings, Instagram, community, other figures, the client
const FORBIDDEN = ['Instagram', 'community', 'komunit', 'zapojení', 'tržb', 'já jsem vybudoval', 'já jsem zvýšil', 'ChatGPT', 'AggregateRating', 'KB P'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/pripadove-studie/seo-vzdelavaci-platforma/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== 'SEO pro vzdělávací platformu: +55 % návštěv | Eranosian' || title.length < 35 || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== 'Jak jsme s kolegou zvýšili organickou návštěvnost nové vzdělávací platformy o 55 % za 7 měsíců se sázkou na málo hledané dotazy. Audit zdarma.') e(`description: ${desc}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type article / og:locale cs_CZ');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/pripadove-studie/og-vzdelavaci-platforma.png">`)) e('og:image: the +55 % card');
for (const [l, u] of [['cs', URL_PATH], ['ru', RU_PATH], ['x-default', URL_PATH]]) if (!h.includes(`<link rel="alternate" hreflang="${l}" href="${BASE}${u}">`)) e(`hreflang ${l}`);
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.toLowerCase().includes(f.toLowerCase())) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/ru\/|href="\/en\//.test(main)) e('no links to the ru / en versions from the page body');
if (/<form|<video|<img|<svg class="channel|★|ratingValue/.test(main)) e('no form / video / images / charts / stars on this page');
// Role of the author: "jsme" allowed here and present; "já" for the author's own statements
if (!/Společně s kolegou jsme/.test(mainTxt) || !mainTxt.includes('Na projektu jsem pracoval společně s kolegou')) e('the colleague role must be stated');
// Czech number typography
const main0 = main.replace(/<(script|style)[\s\S]*?<\/\1>/g, '').replace(/<[^>]+>/g, ' ');
if (/\d %/.test(main0) || !main0.includes('55\u00a0%')) e('"55 %" needs a non-breaking space before %');
// Hero
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!lead.startsWith('Za 7 měsíců (březen → září 2025)') || words < 35 || words > 60) e(`hero answer (${words} words)`);
const cards = [...(main.match(/<dl class="stats[\s\S]*?<\/dl>/) || [''])[0].matchAll(/<dt>([^<]*)<\/dt><dd>([^<]*)<\/dd>/g)].map((m) => `${norm(m[2])} ${norm(m[1])}`);
if (cards.join('|') !== '+55 % organické návštěvnosti|7 měsíců doba|březen → září 2025 období') e(`hero cards: ${cards.join('|')}`);
const byline = h.match(/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time> · Projekt: vzdělávací platforma, březen – září 2025/);
// Only one number: +55 %
const pct = (mainTxt.match(/[+\-]?\d[\d ]*%/g) ?? []).map((x) => x.replace(/\s/g, ''));
if (pct.some((x) => x !== '+55%' && x !== '55%')) e(`only +55 % may appear, found: ${[...new Set(pct)].join(', ')}`);
if (/\d[\d ]*\s*(návštěv|uživatel|registrac)/i.test(mainTxt.replace(/7 měsíců/g, '').replace(/55 % návštěv/g, ''))) e('no absolute visits / users / sign-ups');
// Results table
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (!rows.some((r) => r.join('|') === 'Ukazatel|Období|Změna') || !rows.some((r) => r.join('|') === 'Organická návštěvnost|březen → září 2025 (7 měsíců)|+55 %')) e('results table');
if (!/Zdroj: data analytiky webu[^<]*březen a září 2025/.test(norm(h))) e('source line under the results table');
if (!mainTxt.includes('Absolutní hodnoty nezveřejňuji')) e('limits of the case must be stated');
for (const [hd, ans] of [['Jaká byla výchozí situace?', 'Platforma, která propojuje'], ['Proč jsme na začátku zvolili málo hledané dotazy?', 'Nový web nemá autoritu'], ['Co jsme dělali?', 'Společně s kolegou jsme zkoumali'], ['Jaké byly výsledky za 7 měsíců?', 'Organická návštěvnost vzrostla']]) {
  if (!new RegExp(`${hd.replace(/[?.+]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
if ([...(h.match(/<ol class="case-steps">([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li><h3>/g)].length !== 3) e('three theses expected');
const wc = mainTxt.split(/\s+/).length;
if (wc < 450 || wc > 800) e(`short case: about 500-700 words expected, found ${wc}`);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), art = by('Article'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (ld.some((n) => ['Service', 'Offer', 'Review', 'AggregateRating', 'VideoObject'].includes(n['@type']))) e('no Service / Offer / Review / ratings in the markup');
if (norm(wp.name) !== title || norm(wp.description) !== desc || wp.inLanguage !== 'cs') e('WebPage name / description / inLanguage');
if (wp.primaryImageOfPage !== `${BASE}/images/pripadove-studie/og-vzdelavaci-platforma.png`) e('primaryImageOfPage = the +55 % card');
if (!byline || byline[1] !== wp.dateModified || art.dateModified !== wp.dateModified) e(`dateModified ${wp.dateModified} must match the visible byline`);
if (wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#article` || art.mainEntityOfPage['@id'] !== wp['@id']) e('WebPage / Article references');
if (norm(art.headline) !== H1 || art.author['@id'] !== by('Person')['@id'] || art.datePublished !== '2026-10-20') e('Article headline / author / datePublished');
if (!(art.mentions ?? []).some((m) => m['@id'] === `${BASE}/start-3-mesice/#service`)) e('Article.mentions Start');
if (fq.mainEntity.length !== 3 || !fq.mainEntity.every((q) => body.includes(norm(q.name)) && body.includes(norm(q.acceptedAnswer.text)))) e('3 FAQ Q/A not visible verbatim');
if (/Instagram/.test(JSON.stringify(ld.filter((n) => !['Person', 'ProfessionalService', 'WebSite', 'ImageObject'].includes(n['@type']))))) e('Instagram must not appear in the case markup');
if (/kolegou|kolegy/.test(JSON.stringify(art))) e('the colleague role stays in the visible text, not in Article fields');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > Případové studie > SEO pro novou vzdělávací platformu' || bc.itemListElement.at(-1).item || bc.itemListElement[1].item !== `${BASE}/pripadove-studie/`) e('breadcrumb (three levels)');

// Site: listed on /pripadove-studie/, linked from Start with the one formula, in the sitemap, not in en
const FORMULA = '+55 % organické návštěvnosti, březen → září 2025 (7 měsíců), relativní data od nízké základny nového webu';
if (!readFileSync('dist/pripadove-studie/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('the case must be listed on /pripadove-studie/');
const start = readFileSync('dist/start-3-mesice/index.html', 'utf8');
if (!start.includes(`href="${URL_PATH}"`) || !txt(start).includes(`Vzdělávací platforma: ${FORMULA}.`)) e('Start page: the case line with one formula and a link');
const sm = readFileSync('dist/sitemap.xml', 'utf8');
if (!sm.includes(`${BASE}${URL_PATH}`)) e('sitemap');

if (errors.length) {
  console.error(`\nCzech education-platform case check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech education-platform case check passed: cs.');
