// Post-build check of the anonymised case study (cs) against its brief of 20.10.2026, plus the site-wide anonymisation.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/pripadove-studie/seo-prekladatelska-agentura-4-mesice/';
const H1 = 'SEO pro překladatelskou agenturu se třemi pobočkami';
const SECTIONS = [H1, 'Jaký byl výchozí stav webu?', 'Proč jedna stránka pro každé město?', 'Jak funguje obsah jako trychtýř?', 'Proč lokalizovat, a ne jen překládat?', 'Co jsem udělal v technickém SEO?', 'Jaké byly výsledky?', 'Jak se v analytice objevil nový kanál AI Assistant?', 'Šest kroků pro váš web', 'Časté otázky k případové studii', 'Související služby', 'Chcete stejný postup pro svůj web?'];
const LINKS = ['/pripadove-studie/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/konzultace/', '/seo-a-geo/', '/audit-zdarma/', '/kontakt/', '/o-mne/'];
// Figures not confirmed by the author must not appear on the case page (the partner agency's review elsewhere is a quote)
const FORBIDDEN = ['KB PŘEKLADY', 'KB Překlady', '24×', '6× zobraz', '300×', '×300', '65–70', 'ChatGPT v odpovědích', 'naše agentura'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/pripadove-studie/seo-prekladatelska-agentura-4-mesice/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const flat = body.replace(/\( /g, '(').replace(/ ([.,:;)])/g, '$1');
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'SEO překladatelské agentury za 4 měsíce | Eranosian' || title.length < 35 || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc.length < 120 || desc.length > 150 || /jsme /.test(desc)) e(`description (${desc.length}) must be 120-160 chars, first person singular`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">')) e('og:type article');
if (!h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:locale cs_CZ');
for (const [l, p] of [['cs', URL_PATH], ['en', '/en/case-studies/seo-translation-agency-4-months/'], ['ru', '/ru/kejsy/seo-perevodcheskoe-agentstvo-4-mesyaca/'], ['x-default', URL_PATH]]) {
  if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<form|<video|★|AggregateRating|ratingValue/.test(main)) e('no form / video / stars on this page');
// hero: direct answer + author line + data note
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!lead.startsWith('Za 4 měsíce SEO práce') || words < 40 || words > 60) e(`hero answer must be 40-60 words (${words})`);
if (!mainTxt.includes('Přesná čísla a identitu klienta nezveřejňuji')) e('data note missing');
const byline = h.match(/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time> · Projekt: březen–červen/);
// Hidden / absent blocks
if (/Co bude dál\?/.test(mainTxt)) e('"Co bude dál?" stays hidden until the autumn data exists');
if (/Co říkají klienti/.test(mainTxt)) e('no reviews block on this page');
// Six steps, pull quote
const steps = [...(h.match(/<ol class="case-steps">([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li><h3>([\s\S]*?)<\/h3>/g)].length;
if (steps !== 6) e(`six steps expected, found ${steps}`);
const bq = h.match(/<blockquote class="pullquote">[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<cite>/);
// Images: the one screenshot has alt + figcaption + dimensions; charts are real HTML/SVG text
const img = main.match(/<img[^>]*faq-lokalizace-cs-uk\.webp[^>]*>/);
if (!img || !/alt="Porovnání časté dotazy[^"]+"/.test(img[0]) || !/width="720"/.test(img[0]) || !/height="730"/.test(img[0]) || !/loading="lazy"/.test(img[0])) e('FAQ screenshot: alt, width, height, lazy');
if (!/<svg class="channel-chart"[^>]*role="img"/.test(h)) e('channel chart must be an accessible SVG');
if (!body.includes('Ilustrativní schéma podle vzorce, který vidím na živém projektu. Nejde o přesná data klienta.')) e('mandatory caption of the illustrative chart missing');
if (!body.includes('Mobilní načítání podle PageSpeed Insights: z 5-6 s na 3,6 s')) e('speed caption missing');
if (/~40 ?%/.test(main)) e('the "~40 %" claim must not be used (28-40 %)');

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const ht = by('HowTo');
const wp = by('WebPage'), art = by('Article'), fq = by('FAQPage'), bc = by('BreadcrumbList'), qt = by('Quotation'), im = ld.find((n) => n['@type'] === 'ImageObject' && String(n['@id']).endsWith('#img-faq'));
if (ld.some((n) => ['Service', 'Offer', 'Review', 'VideoObject'].includes(n['@type']))) e('no Service / Offer / Review / VideoObject in the markup');
if (wp.name !== title || wp.description !== desc || wp.inLanguage !== 'cs') e('WebPage name / description / inLanguage');
if (!byline || byline[1] !== wp.dateModified || art.dateModified !== wp.dateModified) e(`dateModified ${wp.dateModified} must match the visible byline`);
if (wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#article`) e('WebPage.mainEntity must be the Article');
if (art.headline !== H1 || art.author['@id'] !== by('Person')['@id'] || art.datePublished !== '2026-10-19') e('Article headline / author / datePublished');
const ment = (art.mentions ?? []).map((m) => m['@id']);
for (const p of ['/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/']) if (!ment.includes(`${BASE}${p}#service`)) e(`Article.mentions ${p}`);
if (!art.image.some((i) => i['@id'] === im['@id']) || !body.includes(im.caption) || im.width !== 720 || im.height !== 730) e('ImageObject must match the visible figure');
// HowTo: the six steps, name and text word for word as in the visible numbered list
if (!ht || ht.name !== 'Šest kroků pro váš web' || ht.step.length !== 6) e('HowTo: "Šest kroků pro váš web" with 6 steps expected');
else {
  const li = [...(h.match(/<ol class="case-steps">([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/li>/g)].map((m) => [txt(m[1]), txt(m[2])]);
  ht.step.forEach((st, i) => { if (!li[i] || li[i][0] !== st.name || li[i][1] !== st.text) e(`HowTo step ${i + 1} != the visible list item`); });
}
if (!bq || !mainTxt.includes(qt.text) || qt.creator['@id'] !== by('Person')['@id']) e('Quotation must equal the visible pull quote');
if (fq.mainEntity.length !== 4 || !fq.mainEntity.every((q) => flat.includes(q.name) && flat.includes(q.acceptedAnswer.text))) e('4 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > Případové studie > SEO pro překladatelskou agenturu' || bc.itemListElement.at(-1).item || bc.itemListElement[1].item !== `${BASE}/pripadove-studie/`) e('breadcrumb (three levels)');
for (const [hd, ans] of [['Jaký byl výchozí stav webu?', 'Web fungoval'], ['Proč jedna stránka pro každé město?', 'Agentura má pobočky'], ['Jak funguje obsah jako trychtýř?', 'Stránka služby zachytí'], ['Proč lokalizovat, a ne jen překládat?', 'Web běží ve čtyřech jazycích'], ['Co jsem udělal v technickém SEO?', 'Zaměřil jsem se na tři oblasti'], ['Jaké byly výsledky?', 'Za 4 měsíce práce'], ['Jak se v analytice objevil nový kanál AI Assistant?', 'V GA4 jsem našel']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}

// Site-wide anonymisation: the client's name and the old addresses appear nowhere in the built pages / sitemap
const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : /\.(html|xml|txt)$/.test(p) ? [p] : []; });
for (const f of walk('dist')) {
  const c = readFileSync(f, 'utf8');
  if (/KB P[ŘR]EKLADY|KB Překlady|kb-preklady/i.test(c)) e(`${f}: the client's name / old case address must not appear`);
  // ×24 is confirmed only as the Part-2 formula (spring → summer 2026, one window); ×300+ stays banned everywhere
  const vis = c.replace(/<script[\s\S]*?<\/script>/g, '');
  if (/×300\+/.test(vis) || ((/×24/.test(vis) || /24×/.test(vis)) && !vis.includes('одно окно, не год к году') && !vis.includes('jedno okno, ne meziročně') && !vis.includes('jaro → léto 2026') && !vis.includes('spring → summer 2026') && !vis.includes('весна → лето 2026'))) e(`${f}: unconfirmed figure (×24 without its window / 24× / ×300+) present`);
}

if (errors.length) {
  console.error(`\nCzech case-study check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech case-study check passed: cs (and the site is anonymised).');
