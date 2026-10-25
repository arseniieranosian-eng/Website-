// Post-build check of the Russian half-year case study /ru/kejsy/seo-perevodcheskoe-agentstvo-polgoda/ (brief of 22.10.2026), page 3 of the series.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/kejsy/seo-perevodcheskoe-agentstvo-polgoda/';
const CS_PATH = '/pripadove-studie/seo-prekladatelska-agentura/';
const H1 = 'Кейс SEO для переводческого агентства: полгода от нуля до роста заявок';
const TITLE = 'Кейс SEO переводческого агентства: полгода | Eranosian';
const DESC = 'Разбор полугода SEO для переводческого агентства: исходное состояние, структура сайта, города и языковые версии. Бесплатный аудит.';
const SECTIONS = [H1, 'Какие были цели заказа?', 'Как выглядел сайт в начале?', 'Что я построил?', 'Какие результаты за полгода?', 'Какие клиенты стали приходить на сайт?', 'Как вели себя отдельные города?', 'Появился ли сайт в AI-поиске?', 'Что бы я повторил на любом похожем проекте?', 'Частые вопросы по кейсу', 'Связанные услуги', 'Есть сайт, который «работает», но не приводит клиентов?'];
const LINKS = ['/ru/besplatnyj-audit/', '/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/seo-i-geo/', '/ru/kejsy/seo-perevodcheskoe-agentstvo-4-mesyaca/', '/ru/kejsy/seo-v-nizkij-sezon/', '/ru/kejsy/seo-tipografiya/', '/ru/kejsy/seo-obrazovatelnaya-platforma/', '/ru/obo-mne/', '/ru/kontakty/'];
const FORBIDDEN = ['×8', '×24', '+400', '+200', 'июнь к маю', 'SEO агентство', 'я гарантирую', 'гарантированно', 'первое место', 'KB P', 'kbpreklady', 'Correct', 'Přikop', 'AggregateRating', 'в сумме', '141'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)»])/g, '$1').replace(/([«(]) /g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/kejsy/seo-perevodcheskoe-agentstvo-polgoda/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!/<html lang="ru"/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('lang ru, indexable');
const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + ' ' + m[2]);
if (JSON.stringify(alts) !== JSON.stringify([`cs ${BASE}${CS_PATH}`, `ru ${BASE}${URL_PATH}`, `x-default ${BASE}${CS_PATH}`])) e('hreflang pair cs ↔ ru: ' + JSON.stringify(alts));
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/(?:ru\/)?blog\/|<form/.test(main)) e('no blog links, no form');
if (/\b(?:я|моё|наше)\b[^.]{0,30}агентств/i.test(mainTxt)) e('"агентство" about the author');
if (!/Обновлено: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time>\. Проект: март–сентябрь 2026\./.test(h)) e('byline: Обновлено dd.mm.yyyy. Проект: март–сентябрь 2026.');
// Answer-first under every question H2
for (const hd of SECTIONS.slice(1, 9)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
// Figures map: only the figures that stand on the page
for (const n of ['65–70 %', 'в три раза', 'более чем на 30 %', '24.05 по 20.09.2026', '52 %', '26 %', '18 %', '4 %']) if (!mainTxt.includes(n)) e(`figure missing: ${n}`);
// Results table: header + 8 rows, 5 columns
const rows = [...(main.match(/Какие результаты за полгода\?[\s\S]*?<\/table>/) || [''])[0].matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 9 || rows[0].join('|') !== 'Цель|Метрика|Результат|Период|Источник' || rows.some((r) => r.length !== 5)) e('results table: header + 8 rows × 5 columns');
if (!mainTxt.includes('Другие окна проекта:')) e('other windows of the project (pages 1 and 2, no figures)');
// Language shares: table 4 rows + chart with the same numbers
const lrows = [...(main.match(/Какие клиенты стали приходить на сайт\?[\s\S]*?<\/table>/) || [''])[0].matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (lrows.length !== 5 || lrows.slice(1).map((r) => r[2]).join('|') !== '52 %|26 %|18 %|4 %') e('language shares table');
if (!/<svg class="lang-chart"[^>]*role="img"[^>]*aria-label="Столбчатая диаграмма/.test(main)) e('language chart with an aria-label');
// Cities: Praha is shown honestly (no return to the starting level)
if (!mainTxt.includes('без возврата к исходному уровню')) e('Praha: honest line');
// AI: dated, no screenshot, no invented ChatGPT claim
if (!mainTxt.includes('Проверка по запросу «překlady Brno» выполнена 16.10.2026.') || /<img[^>]*ai-overview/.test(main)) e('AI Overview: dated, no screenshot on this page');
// Six lessons
if ([...main.matchAll(/<ol class="case-steps">[\s\S]*?<\/ol>/g)].map((m) => [...m[0].matchAll(/<li>/g)].length)[0] !== 6) e('six lessons');
// Quotes: owner (figure with a link and photo) + author (pullquote)
const OQ = 'Самым большим сюрпризом было то, что заявки росли и летом, когда в нашей отрасли тише всего.';
const AQ = 'SEO — не магия. Это система, и правильно построенная система работает и вне сезона, в маленьких городах и тогда, когда вы начинаете с нуля.';
if (!new RegExp(`<figure class="owner-quote">\\s*<blockquote cite="${BASE}${URL_PATH}"><p>${OQ}</p></blockquote>`).test(main) || !/<img src="\/images\/pripadove-studie\/majitelka\.jpg"[^>]*alt="Yelyzaveta Butyrina/.test(main)) e('owner quote with photo');
if (!main.includes(`<blockquote class="pullquote">`) || !mainTxt.includes(AQ)) e('author quote');
if (mainTxt.indexOf(OQ) < mainTxt.indexOf('Какие результаты за полгода?') || mainTxt.indexOf(OQ) > mainTxt.indexOf('Какие клиенты стали приходить на сайт?')) e('owner quote inside the results section');
// JSON-LD
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.filter((n) => n['@type'] === t);
const wp = by('WebPage').find((n) => n['@id'] === `${BASE}${URL_PATH}#webpage`);
const art = by('Article').find((n) => n['@id'] === `${BASE}${URL_PATH}#article`);
if (!wp || wp.name !== TITLE || wp.inLanguage !== 'ru' || wp.description !== DESC) e('WebPage');
if (!art || art.headline !== H1 || art.author['@id'] !== `${BASE}/#arsenii` || !art.datePublished || !art.isPartOf || !by('CreativeWorkSeries').length) e('Article + CreativeWorkSeries');
const qn = by('Quotation').map((n) => n.text).sort();
if (JSON.stringify(qn) !== JSON.stringify([AQ, OQ].sort())) e('two Quotations = the two visible quotes');
const fq = by('FAQPage')[0];
const visFaq = [...main.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 5 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage = the visible 5 questions');
if (ld.some((n) => ['Service', 'Offer', 'AggregateRating', 'Review'].includes(n['@type']))) e('no Service / Offer / ratings / Review');
const bc = by('BreadcrumbList')[0];
if (!bc || bc.itemListElement.map((x) => x.name).join('|') !== `Главная|Кейсы|${'SEO для переводческого агентства: полгода'}`) e('breadcrumb: Главная → Кейсы → the case: ' + JSON.stringify(bc?.itemListElement?.map((x) => x.name)));
// Inbound links and the Czech partner
for (const [f, what] of [['dist/ru/index.html', 'home'], ['dist/ru/kejsy/index.html', 'case hub'], ['dist/ru/kejsy/seo-perevodcheskoe-agentstvo-4-mesyaca/index.html', 'page 1'], ['dist/ru/kejsy/seo-v-nizkij-sezon/index.html', 'page 2']]) if (!readFileSync(f, 'utf8').includes(`href="${URL_PATH}"`)) e(`inbound link missing on ${what}`);
if (!readFileSync('dist' + CS_PATH + 'index.html', 'utf8').includes(`hreflang="ru" href="${BASE}${URL_PATH}"`)) e('the Czech page must point to the Russian one');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
const wc = mainTxt.split(/\s+/).length;
if (wc < 900) e(`too short: ${wc} words`);

if (errors.length) { console.error('✗ check-case-half-ru:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-case-half-ru: ok (${wc} words)`);
