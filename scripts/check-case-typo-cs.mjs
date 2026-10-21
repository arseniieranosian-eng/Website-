// Post-build check of the Czech print-shop case against its brief of 20.10.2026 (pair of the Russian page).
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/pripadove-studie/seo-tiskarna/';
const RU_PATH = '/ru/kejsy/seo-tipografiya/';
const H1 = 'SEO pro tiskárnu: organická návštěvnost vzrostla 8,75× za 12 měsíců';
const SECTIONS = [H1, 'Jaká byla výchozí situace webu?', 'Co jsem udělal v prvních 30 dnech?', 'Jak jsem postavil architekturu klíčových slov podle komerčního záměru?', 'Proč 20+ vstupních stránek a jak jsou postavené?', 'Jak jsem sledoval propady návštěvnosti?', 'Jaké byly výsledky za 12 měsíců?', 'V jakém pořadí dělat SEO?', 'Dá se to zopakovat v Česku?', 'Časté otázky k případové studii', 'Související služby', 'Chcete stejný postup pro svůj web?'];
const LINKS = ['/pripadove-studie/', '/start-3-mesice/', '/full-seo/', '/konzultace/', '/mapy/', '/audit-zdarma/', '/kontakt/', '/o-mne/', '/pripadove-studie/seo-prekladatelska-agentura-4-mesice/'];
const FORBIDDEN = ['777', 'YoY', 'meziročně', '+55', '+64', '30 % potenciálu', 'crawl budget', 'Screaming', 'AggregateRating', 'KB P', 'ChatGPT'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')));
const errors = [];
const e = (m) => errors.push(m);

const raw = readFileSync('dist/pripadove-studie/seo-tiskarna/index.html', 'utf8');
const h = raw;
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'SEO pro tiskárnu: návštěvnost 8,75× za rok | Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (norm(desc) !== 'Případová studie: jak jsem zvýšil organickou návštěvnost tiskárny z 1 200 na 10 500 měsíčně za rok. Pořadí priorit a 20+ vstupních stránek. Audit zdarma.') e(`description: ${desc}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type article / og:locale cs_CZ');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/pripadove-studie/og-tiskarna.png">`)) e('og:image card');
for (const [l, u] of [['cs', URL_PATH], ['ru', RU_PATH], ['x-default', URL_PATH]]) if (!h.includes(`<link rel="alternate" hreflang="${l}" href="${BASE}${u}">`)) e(`hreflang ${l}`);
if (/hreflang="en"/.test(h.replace(/<a [^>]*>/g, ''))) e('no en alternate');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<form|<video|★|ratingValue/.test(main)) e('no form / video / stars on this page');

// Czech number typography: non-breaking space inside 1 200 / 10 500 and before %, comma as decimal mark
const main0 = main.replace(/<(script|style)[\s\S]*?<\/\1>/g, '').replace(/<[^>]+>/g, ' ');
if (/\d \d{3}(?!\d)/.test(main0.replace(/20\d\d/g, ''))) e('numbers like "1 200" need a non-breaking space');
if (/\d %/.test(main0)) e('"775 %" needs a non-breaking space before %');
if (!main0.includes('1\u00a0200') || !main0.includes('775\u00a0%')) e('non-breaking spaces expected in the figures');
if (/8\.75/.test(mainTxt)) e('decimal comma: 8,75');

// Hero
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!lead.startsWith('Za 12 měsíců (červenec 2024 → červenec 2025)') || words < 35 || words > 60) e(`hero answer (${words} words)`);
const cards = [...(main.match(/<dl class="stats[\s\S]*?<\/dl>/) || [''])[0].matchAll(/<dt>([^<]*)<\/dt><dd>([^<]*)<\/dd>/g)].map((m) => `${norm(m[2])} ${norm(m[1])}`);
if (cards.join('|') !== '1 200 → 10 500 návštěv za měsíc|+775 % růst návštěvnosti|8,75× kolikrát více|12 měsíců červenec 2024 → červenec 2025') e(`hero cards: ${cards.join('|')}`);
if (!mainTxt.includes('Název klienta nezveřejňuji') || !mainTxt.includes('Projekt běžel na ruskojazyčném webu pro ruskojazyčný trh')) e('data note with the market sentence');
const byline = h.match(/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time> · Projekt: tiskárna, leden 2024 – červenec 2025/);
if (!mainTxt.includes('červenec 2024 → červenec 2025')) e('period missing');

// Results table
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (!rows.some((r) => r.join('|') === 'Ukazatel|Červenec 2024|Červenec 2025|Změna') || !rows.some((r) => r.join('|') === 'Organické návštěvy za měsíc|1 200|10 500|+775 % (8,75×)')) e('results table');
if (!rows.some((r) => r.join('|') === 'Typ stránky|Úkol') || rows.filter((r) => ['Prodejní', 'Zahřívací', 'Odpovídající na námitky'].includes(r[0])).length !== 3) e('keyword table (no invented example queries)');
if (!/Zdroj: data analytiky webu[^<]*červenec 2024 a červenec 2025/.test(norm(h))) e('source line under the results table');
if (!mainTxt.includes('Poptávky, telefonáty a tržby do případové studie nepatří')) e('limits of the case');
if (!mainTxt.includes('Porovnávám stejné měsíce dvou let, takže sezónnost výsledek nezkresluje')) e('seasonality note');
if (Math.round((10500 / 1200 - 1) * 100) !== 775 || 10500 / 1200 !== 8.75) e('arithmetic');
// only the confirmed figures
const pct = (mainTxt.match(/[+\-]?\d+ ?%/g) ?? []).map((x) => x.replace(/ /g, ''));
if (pct.some((x) => x !== '+775%' && x !== '775%')) e(`only +775 % may appear: ${[...new Set(pct)].join(', ')}`);

for (const [hd, ans] of [['Jaká byla výchozí situace webu?', 'V lednu 2024'], ['Co jsem udělal v prvních 30 dnech?', 'Provedl jsem technický crawl'], ['Jak jsem postavil architekturu klíčových slov podle komerčního záměru?', 'Nesbíral jsem'], ['Proč 20+ vstupních stránek a jak jsou postavené?', 'Spustil jsem více než 20'], ['Jak jsem sledoval propady návštěvnosti?', 'Každý týden jsem kontroloval'], ['Jaké byly výsledky za 12 měsíců?', 'Organická návštěvnost vzrostla'], ['V jakém pořadí dělat SEO?', 'SEO určuje pořadí priorit'], ['Dá se to zopakovat v Česku?', 'Pořadí priorit']]) {
  if (!new RegExp(`${hd.replace(/[?.+]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
if ([...(h.match(/<ol class="case-steps">([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li><h3>/g)].length !== 3) e('three lesson steps expected');
if (!mainTxt.includes('Když pořadí otočíte, vznikne hodně obsahu na špatném základu.')) e('closing sentence');
const wc = mainTxt.split(/\s+/).length;
if (wc < 450 || wc > 1000) e(`word count ${wc}`);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), art = by('Article'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (ld.some((n) => ['Service', 'Offer', 'Review', 'AggregateRating', 'VideoObject'].includes(n['@type']))) e('no Service / Offer / Review / ratings in the markup');
if (wp.name !== title || norm(wp.description) !== norm(desc) || wp.inLanguage !== 'cs') e('WebPage name / description / inLanguage');
if (wp.primaryImageOfPage !== `${BASE}/images/pripadove-studie/og-tiskarna.png`) e('primaryImageOfPage');
if (!byline || byline[1] !== wp.dateModified || art.dateModified !== wp.dateModified) e(`dateModified ${wp.dateModified} must match the visible byline`);
if (wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#article` || art.mainEntityOfPage['@id'] !== wp['@id']) e('WebPage / Article references');
if (art.headline !== H1 || art.author['@id'] !== by('Person')['@id'] || art.datePublished !== '2026-10-20') e('Article headline / author / datePublished');
const ment = (art.mentions ?? []).map((m) => m['@id']);
for (const p of ['/start-3-mesice/', '/full-seo/']) if (!ment.includes(`${BASE}${p}#service`)) e(`Article.mentions ${p}`);
if (fq.mainEntity.length !== 4 || !fq.mainEntity.every((q) => body.includes(norm(q.name)) && body.includes(norm(q.acceptedAnswer.text)))) e('4 FAQ Q/A not visible verbatim');
if (/777|YoY/.test(JSON.stringify(ld.filter((n) => n['@type'] !== 'Person')))) e('+777 / YoY in the markup');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > Případové studie > SEO pro tiskárnu' || bc.itemListElement.at(-1).item || bc.itemListElement[1].item !== `${BASE}/pripadove-studie/`) e('breadcrumb (three levels)');

// Site: listed on /pripadove-studie/, linked from the cs service pages with the one formula, in the sitemap, not in en
const FORMULA = '1 200 → 10 500 návštěv za měsíc, +775 %, červenec 2024 → červenec 2025';
if (!readFileSync('dist/pripadove-studie/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('the case must be listed on /pripadove-studie/');
for (const p of ['dist/start-3-mesice/index.html', 'dist/full-seo/index.html', 'dist/konzultace/index.html']) {
  const x = readFileSync(p, 'utf8');
  if (!x.includes(`href="${URL_PATH}"`) || !txt(x).includes(`Tiskárna: organická návštěvnost ${FORMULA}.`)) e(`${p}: the print-shop line with one formula and a link`);
}
const sm = readFileSync('dist/sitemap.xml', 'utf8');
if (!sm.includes(`${BASE}${URL_PATH}`) || /seo-print-shop/.test(sm)) e('sitemap');

if (errors.length) {
  console.error(`\nCzech print-shop case check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech print-shop case check passed: cs.');
