// Post-build check of Part 2 of the translation-agency case (cs) against its brief of 20.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/pripadove-studie/seo-v-nizke-sezone/';
const RU_PATH = '/ru/kejsy/seo-v-nizkij-sezon/';
const P1 = '/pripadove-studie/seo-prekladatelska-agentura-4-mesice/';
const H1 = 'SEO v nízké sezóně pro překladatelskou agenturu: poptávky z webu vzrostly 24×';
const FORMULA = 'Poptávky z formuláře ×24 (+2300 %): jaro (březen–květen) → léto (červen–srpen) 2026, jedno okno, ne meziročně. Od nízké základny';
const SECTIONS = [H1, 'Proč se organická návštěvnost nepřeváděla na poptávky?', 'Co jsem udělal v technické vrstvě?', 'Jak jsem přestavěl stránky služeb pro komerční záměr?', 'Proč blog a FAQ jako horní část trychtýře?', 'Co daly lokální stránky podle měst?', 'Jaké byly výsledky za léto?', 'Byla to sezóna? Co ukázal Google Trends', 'Šest praktických závěrů', 'Časté otázky k případové studii', 'Související služby', 'Chcete stejný trychtýř pro svůj web?'];
const LINKS = ['/pripadove-studie/', P1, '/seo-a-geo/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/konzultace/', '/audit-zdarma/', '/kontakt/', '/o-mne/', '/pripadove-studie/seo-tiskarna/', '/pripadove-studie/seo-vzdelavaci-platforma/'];
const FORBIDDEN = ['KB P', 'kb-preklady', 'ChatGPT', 'LinkedIn', 'AggregateRating', 'útlumov'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/pripadove-studie/seo-v-nizke-sezone/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== 'SEO v nízké sezóně: poptávky 24× za léto | Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc !== 'Jak jsem za léto zvýšil poptávky z webu překladatelské agentury 24×, zatímco zájem o široký dotaz klesal. Případová studie, část 2. Audit zdarma.') e(`description: ${desc}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type article / og:locale cs_CZ');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/pripadove-studie/og-seo-v-nizke-sezone.png">`)) e('og:image card');
for (const [l, u] of [['cs', URL_PATH], ['ru', RU_PATH], ['x-default', URL_PATH]]) if (!h.includes(`<link rel="alternate" hreflang="${l}" href="${BASE}${u}">`)) e(`hreflang ${l}`);
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.toLowerCase().includes(f.toLowerCase())) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<form|<video|<img|★|ratingValue/.test(main)) e('no form / video / images / stars on this page');
if (/\bmy\b|\bjsme\b/i.test(mainTxt.replace(/Poptávky|zájem/g, ''))) e('first person singular only ("já")');

// Czech number typography
const main0 = main.replace(/<(script|style)[\s\S]*?<\/\1>/g, '').replace(/<[^>]+>/g, ' ');
if (/\d %/.test(main0) || !main0.includes('2300\u00a0%') || !main0.includes('357\u00a0%')) e('"357 %" / "2300 %" need a non-breaking space before %');

// Hero
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!lead.startsWith('Za léto 2026 (červen–srpen)') || words < 35 || words > 60) e(`hero answer (${words} words)`);
const cards = [...(main.match(/<dl class="stats[\s\S]*?<\/dl>/) || [''])[0].matchAll(/<dt>([^<]*)<\/dt><dd>([^<]*)<\/dd>/g)].map((m) => `${norm(m[2])} ${norm(m[1])}`);
if (cards.join('|') !== '×24 poptávky z webu|+357 % kliky|+398 % zobrazení') e(`hero cards: ${cards.join('|')}`);
if (!mainTxt.includes('data se upřesňují')) e('dates note until confirmed');
const byline = h.match(/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time> · Projekt: překladatelská agentura, březen – srpen 2026 · Část 2<\/p>/);
if (!byline) e('byline');
if (!mainTxt.includes('Toto je Část 2. Část 1: první 4 měsíce práce')) e('link to Part 1 in the hero');
if (!mainTxt.includes('telefonáty a messengery se neměří, takže reálný růst je vyšší')) e('data note');

// One formula, word for word
if (!mainTxt.includes(FORMULA)) e('result formula must appear verbatim');
const vis = mainTxt.replace(FORMULA, '');
if (/\d+\s*%/.test(vis.replace(/[+]?(357|398|2300) %|asi (35|24|60|40) %|55\/45/g, ''))) e(`unexpected percentages: ${[...new Set(vis.match(/\d+\s*%/g))].join(', ')}`);

// Results table
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
for (const r of ['Ukazatel|Období|Změna', 'Poptávky z formuláře|březen–květen → červen–srpen 2026|×24 (+2300 %)', 'Kliky (Search Console)|poslední 4 měsíce → předchozí období [data se upřesňují]|+357 %', 'Zobrazení (Search Console)|totéž|+398 %']) if (!rows.some((x) => x.join('|') === r)) e(`results table row: ${r}`);
if (!mainTxt.includes('Zdroj: Search Console, GA4.')) e('source line under the table');
for (const s of ['asi 35 % letních poptávek', 'asi 24 %', 'Dohromady asi 60 %', 'zhruba 55/45', 'asi 40 % se rozkládá mezi 10+ stránek']) if (!mainTxt.includes(s)) e(`lead share missing: ${s}`);
for (const s of ['top 3 zdroje poptávek', 'top 2 pozice', 'top 5 zdrojů poptávek']) if (!mainTxt.includes(s)) e(`local pages fact missing: ${s}`);

for (const [hd, ans] of [['Proč se organická návštěvnost nepřeváděla na poptávky?', 'Když jsem v polovině března'], ['Co jsem udělal v technické vrstvě?', 'Před obsahem jsem zrychlil'], ['Jak jsem přestavěl stránky služeb pro komerční záměr?', 'Klíčové stránky jsem přepsal'], ['Proč blog a FAQ jako horní část trychtýře?', 'Spustil jsem blog'], ['Co daly lokální stránky podle měst?', 'Místo jedné obecné stránky'], ['Jaké byly výsledky za léto?', 'Poptávky z formuláře vzrostly 24×'], ['Byla to sezóna? Co ukázal Google Trends', 'Ne. Za dva roky']]) {
  if (!new RegExp(`${hd.replace(/[?.+]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
const six = (h.match(/Šest praktických závěrů<\/h2>\s*<ol class="case-steps">([\s\S]*?)<\/ol>/) || [, ''])[1];
if ([...six.matchAll(/<li><h3>/g)].length !== 6) e('six theses expected');
if (!/takový výsledek zaručit nelze\./.test(mainTxt)) e('closing conclusion with the no-guarantee sentence');
if ([...main.matchAll(/<ol class="case-steps">([\s\S]*?)<\/ol>/g)][0][1].split('<li>').length !== 5) e('four funnel holes expected');
if (!/Žádná horní část trychtýře\.[\s\S]*?Nejasný záměr stránek služeb\.[\s\S]*?Žádné geografické pokrytí\.[\s\S]*?Slabé signály důvěry\./.test(main)) e('funnel holes order');
if (/<svg|<canvas/.test(main)) e('no chart without data');
const wc = mainTxt.split(/\s+/).length;
if (wc < 900 || wc > 1800) e(`word count ${wc} out of range`);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), art = by('Article'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ser = by('CreativeWorkSeries');
if (ld.some((n) => ['Service', 'Offer', 'Review', 'AggregateRating', 'VideoObject'].includes(n['@type']))) e('no Service / Offer / Review / ratings / VideoObject in the markup');
if (norm(wp.name) !== title || norm(wp.description) !== desc || wp.inLanguage !== 'cs') e('WebPage name / description / inLanguage');
if (wp.relatedLink !== `${BASE}${P1}`) e('WebPage.relatedLink = Part 1');
if (!byline || byline[1] !== wp.dateModified || art.dateModified !== wp.dateModified) e(`dateModified ${wp.dateModified} must match the visible byline`);
if (wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#article` || art.mainEntityOfPage['@id'] !== wp['@id']) e('WebPage / Article references');
if (norm(art.headline) !== H1 || art.author['@id'] !== by('Person')['@id'] || art.datePublished !== '2026-10-20') e('Article headline / author / datePublished');
if (art.isPartOf['@id'] !== `${BASE}/pripadove-studie/#seo-case-series` || ser?.['@id'] !== art.isPartOf['@id'] || ser.name !== 'SEO případová studie překladatelské agentury') e('case series (isPartOf + CreativeWorkSeries node)');
const ments = (art.mentions ?? []).map((m) => m['@id']);
if (!ments.includes(`${BASE}/start-3-mesice/#service`) || !ments.includes(`${BASE}/full-seo/#service`)) e('Article.mentions Start + Full SEO');
if (fq.mainEntity.length !== 3 || !fq.mainEntity.every((q) => body.includes(norm(q.name)) && body.includes(norm(q.acceptedAnswer.text)))) e('3 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > Případové studie > SEO v nízké sezóně' || bc.itemListElement.at(-1).item || bc.itemListElement[1].item !== `${BASE}/pripadove-studie/`) e('breadcrumb (three levels)');
if (/KB P|Instagram/.test(JSON.stringify(ld.filter((n) => !['Person', 'ProfessionalService', 'WebSite', 'ImageObject'].includes(n['@type']))))) e('client name / Instagram in the case markup');

// Site: listed on /pripadove-studie/, Part 1 continuation + series, Start, Full SEO, seo-a-geo; sitemap; not in en
const list = readFileSync('dist/pripadove-studie/index.html', 'utf8');
if (!list.includes(`href="${URL_PATH}"`) || !txt(list).includes('Překladatelská agentura, část 2.') || !txt(list).includes(FORMULA)) e('card on /pripadove-studie/ with the formula');
const p1 = readFileSync(`dist${P1}index.html`, 'utf8');
const p1ld = JSON.parse(p1.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
if (!p1.includes(`href="${URL_PATH}"`) || !txt(p1).includes(FORMULA)) e('main case: link to Part 2 and the ×24 line with its definition');
if (!p1ld.some((n) => n['@type'] === 'Article' && n.isPartOf?.['@id'] === `${BASE}/pripadove-studie/#seo-case-series`) || !p1ld.some((n) => n['@type'] === 'CreativeWorkSeries')) e('Part 1: Article.isPartOf the same series');
for (const p of ['dist/start-3-mesice/index.html', 'dist/full-seo/index.html', 'dist/seo-a-geo/index.html']) {
  const c = readFileSync(p, 'utf8');
  if (!c.includes(`href="${URL_PATH}"`)) e(`${p}: link to Part 2`);
  if (!p.includes('seo-a-geo') && !txt(c).includes(FORMULA)) e(`${p}: the one formula`);
}
const sm = readFileSync('dist/sitemap.xml', 'utf8');
if (!sm.includes(`${BASE}${URL_PATH}`)) e('sitemap');
if (/seo-v-nizke-sezone/.test(readFileSync('dist/en/case-studies/index.html', 'utf8').replace(/<link rel="alternate"[^>]*>/g, ''))) e('the case must not be listed in en');

if (errors.length) {
  console.error(`\nCzech season case (part 2) check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech season case (part 2) check passed: cs.');
