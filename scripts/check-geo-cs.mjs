// Post-build check of /seo-a-geo/ (cs) against its brief of 20.10.2026: an informational hub, not a service.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/seo-a-geo/';
const H1 = 'SEO + GEO/AEO: dvě v jednom';
const SECTIONS = [H1, 'Co je GEO a co je AEO?', 'Jaký je rozdíl mezi SEO a GEO/AEO?', 'Proč dělám SEO a GEO/AEO dohromady?', 'Co o tom říká Google?', 'Co konkrétně dělám pro GEO/AEO', 'Garantujete zmínku v odpovědích AI?', 'Platím za GEO/AEO zvlášť?', 'Jak vás vidí AI a kde to ověřím?', 'Příklady z praxe', 'Časté otázky o GEO a AEO', 'Chcete začít u základu?'];
const LINKS = ['/audit-zdarma/', '/kontakt/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/pripadove-studie/seo-prekladatelska-agentura-4-mesice/', '/o-mne/'];
const FORBIDDEN = ['SEO služby cena', 'od 2 000 Kč', 'od 15 000 Kč', '50 000 Kč', 'zaručíme', 'zaručujeme zmínku'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Visible text only: <script> / <style> contents (incl. the JSON-LD itself) are removed first.
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/seo-a-geo/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'Co je GEO a AEO? Optimalizace pro Google i AI | Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc.length < 120 || desc.length > 160) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:locale cs_CZ');
for (const [l, p] of [['cs', URL_PATH], ['en', '/en/seo-and-geo/'], ['ru', '/ru/seo-i-geo/'], ['x-default', URL_PATH]]) {
  if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (!h.includes('href="https://developers.google.com/search/docs/appearance/ai-features"')) e('link to the Google documentation missing');
if (/<form|<video|★|AggregateRating|ratingValue|VideoObject/.test(main)) e('no form / video / stars on this page');
// Definition: first visible paragraph after the byline, 40-60 words
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!/^GEO \(Generative Engine Optimization\) a AEO/.test(lead) || words < 40 || words > 60) e(`hero definition must open with the GEO/AEO definition and be 40-60 words (${words})`);
// Byline: author (links to /o-mne/) + date
const date = h.match(/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a>[^<]*· Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time>/);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), art = by('Article'), ts = by('DefinedTermSet'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ht = by('HowTo');
if (ld.some((n) => ['Service', 'Offer', 'VideoObject'].includes(n['@type']) || JSON.stringify(n).includes('"Offer"'))) e('no Service / Offer / VideoObject in the page markup');
if (wp.name !== title || wp.description !== desc || wp.inLanguage !== 'cs') e('WebPage name / description / inLanguage');
if (!date || date[1] !== wp.dateModified || art.dateModified !== wp.dateModified) e(`dateModified ${wp.dateModified} must match the visible date ${date && date[1]} and the Article`);
if (wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#article`) e('WebPage.mainEntity must be the Article');
if (art.headline !== H1 || art.author['@id'] !== by('Person')['@id'] || art.datePublished !== '2026-10-19') e('Article headline / author / datePublished');
if (art.mainEntityOfPage['@id'] !== wp['@id']) e('Article.mainEntityOfPage');
const ment = (art.mentions ?? []).map((m) => m['@id']);
for (const p of ['/konzultace/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/']) if (!ment.includes(`${BASE}${p}#service`)) e(`Article.mentions ${p}`);
// Terms: description equals the visible bullet (first letter case aside)
for (const t of ts.hasDefinedTerm) {
  const visible = mainTxt.toLowerCase();
  if (!visible.includes(`${t.name.toLowerCase()}: ${t.description.toLowerCase()}`)) e(`DefinedTerm ${t.name} description not visible`);
  if (t['@id'] !== `${BASE}${URL_PATH}#term-${t.name.toLowerCase()}`) e(`DefinedTerm id ${t.name}`);
}
if (!art.about.every((a) => ts.hasDefinedTerm.some((t) => t['@id'] === a['@id']))) e('Article.about must reference the DefinedTerms');
if (!body.includes('Generative Engine Optimization') || !body.includes('Answer Engine Optimization')) e('alternateNames not visible');
if (fq.mainEntity.length !== 5 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('5 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > SEO + GEO/AEO' || bc.itemListElement.at(-1).item) e('breadcrumb (two levels)');
if (!ht || ht.step.length !== 5) e('HowTo: expected 5 steps');
else {
  const ol = [...(h.match(/<ol class="steps[^>]*>([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]));
  ht.step.forEach((st, i) => { if (ol[i] !== st.text || st.name !== `Krok ${i + 1}`) e(`step ${i + 1} in <ol> != HowToStep ("${ol[i]}")`); });
  if (!ht.step[1].text.includes('není to podmínka zobrazení v Google')) e('step 2 must say that markup is not a condition for Google');
}
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
const EXPECT = [
  ['Parametr', 'SEO', 'GEO/AEO'],
  ['Kde se zobrazujete', 'Google a Seznam', 'ChatGPT, Gemini, Perplexity, AI Overviews'],
  ['Cíl', 'Pozice a návštěvnost z výsledků vyhledávání', 'Zmínky a citace v odpovědích AI'],
  ['Na co se optimalizuje', 'Technický stav a rychlost, klíčová slova a obsah, odkazy a autorita', 'Strukturovaná data a jasná entita, obsah ve formátu otázka a přímá odpověď, zmínky v důvěryhodných zdrojích'],
  ['Jak se měří', 'Pozice, návštěvnost, poptávky', 'Zmínky v odpovědích AI'],
];
if (JSON.stringify(rows) !== JSON.stringify(EXPECT)) e(`table: ${JSON.stringify(rows)}`);
for (const [hd, ans] of [['Jaký je rozdíl mezi SEO a GEO/AEO?', 'SEO zlepšuje pozice'], ['Proč dělám SEO a GEO/AEO dohromady?', 'AI nástroje čerpají'], ['Co o tom říká Google?', 'Google ve své dokumentaci'], ['Garantujete zmínku v odpovědích AI?', 'Ne. Nikdo nemůže zaručit'], ['Platím za GEO/AEO zvlášť?', 'Ne. GEO/AEO je součástí každé služby'], ['Jak vás vidí AI a kde to ověřím?', 'Viditelnost vašeho webu v AI odpovědích']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
// Screenshots of AI answers: four images in the order medical → diploma (two parts of one query) → cities, each with alt, size,
// lazy loading and a caption; the client's name never appears in alt / caption / file names / markup
const shots = [...main.matchAll(/<img src="(\/images\/geo\/[^"]+)" width="(\d+)" height="(\d+)" alt="([^"]+)" loading="lazy"/g)];
if (shots.map((m) => m[1]).join('|') !== '/images/geo/ai-medical.webp|/images/geo/ai-diploma-1.webp|/images/geo/ai-diploma-2.webp|/images/geo/ai-cities.webp') e(`AI screenshots: ${shots.map((m) => m[1]).join(', ')}`);
const caps = [...main.matchAll(/<figure class="ai-example">[\s\S]*?<figcaption>([^<]*)<\/figcaption>/g)].map((m) => txt(m[1]));
if (caps.length !== 3 || !caps[1].includes('jednu odpověď na dvou snímcích')) e('three figures, the diploma query as one answer on two screenshots');
if (/KB P|SK P|kb-?preklady|Třída Míru|Příkop|Opletalova|604 496/i.test(shots.map((m) => m[4]).join(' ') + caps.join(' ') + JSON.stringify(ld.filter((n) => n['@type'] === 'ImageObject')))) e('the client must not be named in alt / captions / markup');
if (!mainTxt.includes('Odpovědi AI se mění a zmínku v nich zaručit nelze.')) e('no-guarantee note under the examples');
const imgNodes = ld.filter((n) => n['@type'] === 'ImageObject' && String(n['@id']).includes('#img-ai-'));
if (imgNodes.length !== 4 || !(art.image ?? []).every((r) => imgNodes.some((n) => n['@id'] === r['@id'])) || imgNodes.some((n) => !n.caption || !caps.includes(txt(n.caption)))) e('ImageObject nodes (4) must match the visible captions and be referenced from Article.image');
// Consistency with the rest of the site: menu item, no geo option in forms, GEO/AEO line on service pages
const home = readFileSync('dist/index.html', 'utf8');
if (!/<ul class="nav">[\s\S]*?href="\/seo-a-geo\/"[^>]*>SEO a GEO\/AEO</.test(home)) e('top menu must have the "SEO a GEO/AEO" item');
if (/<option value="geo"/.test(readFileSync('dist/konzultace/index.html', 'utf8'))) e('forms must not offer SEO + GEO/AEO');
for (const p of ['dist/konzultace/index.html', 'dist/start-3-mesice/index.html', 'dist/full-seo/index.html', 'dist/lokalni-seo-mapy/index.html']) {
  if (!/<p class="geo-note"><a href="\/seo-a-geo\/">GEO\/AEO<\/a> je součástí každé služby\.<\/p>/.test(readFileSync(p, 'utf8'))) e(`${p}: "GEO/AEO je součástí každé služby" line missing`);
}

if (errors.length) {
  console.error(`\nCzech GEO/AEO page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech GEO/AEO page check passed: cs.');
