// Post-build check of /ru/start-3-mesyaca/ against its brief of 19.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://www.seo-eranosian.com';
const URL_PATH = '/ru/start-3-mesyaca/';
const H1 = 'SEO продвижение сайта на 3 месяца';
const SECTIONS = [H1, 'Сколько стоит SEO продвижение сайта на 3 месяца?', 'Что входит в SEO продвижение на 3 месяца', 'Как проходит работа', 'Когда будут первые результаты?', 'Для кого подходит продвижение на 3 месяца', 'Карты Google и Seznam входят в пакет', 'Старт на 3 месяца или Full SEO на год?', 'Что это дало клиентам', 'Что говорят клиенты', 'Частые вопросы о SEO продвижении на 3 месяца', 'Оставить заявку', 'Другие услуги'];
const LINKS = ['/ru/besplatnyj-audit/', '/ru/konsultacii/', '/ru/full-seo/', '/ru/karty/', '/ru/seo-i-geo/', '/ru/kejsy/kb-preklady/', '/ru/otzyvy/', '/ru/voprosy-i-otvety/'];
const FORBIDDEN = ['ежемесячный отчёт', '4-8 недель', 'Разово или регулярно', 'дальше только рост'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Visible text only: <script> / <style> contents (incl. the JSON-LD itself) are removed first.
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/start-3-mesyaca/index.html', 'utf8');
const body = txt(h);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title.length < 50 || title.length > 60) e(`title length ${title.length}: ${title}`);
if (desc.length < 120 || desc.length > 160) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
for (const [l, p] of [['cs', '/start-3-mesice/'], ['en', '/en/3-month-start/'], ['ru', URL_PATH], ['x-default', '/start-3-mesice/']]) {
  if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
if (!body.includes('На рельсы роста') || !body.includes('50 000 Kč · 3 месяца')) e('slogan / price badge missing');
for (const f of FORBIDDEN) if (body.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<video|★|AggregateRating|ratingValue|VideoObject/.test(h)) e('video / stars / AggregateRating / VideoObject must not be on this page');
if (body.includes('Сколько стоит SEO продвижение сайта на 3 месяца?') && !body.includes('Первое место в Google не гарантирую')) e('guarantee sentence missing');

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ht = by('HowTo');
if (wp.name !== title) e('WebPage.name != <title>');
if (wp.description !== desc) e('WebPage.description != meta description');
if (wp.inLanguage !== 'ru') e('inLanguage');
const date = h.match(/Обновлено: <time datetime="([^"]+)">([^<]+)<\/time>/);
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} != visible ${date && date[1]}`);
if (!body.includes(sv.description)) e('Service.description not visible');
if (sv.name !== H1 || !body.includes(sv.alternateName) || !body.includes(sv.serviceType)) e('Service name / alternateName / serviceType');
const o = sv.offers;
if (Array.isArray(o) || o.price !== '50000' || o.priceCurrency !== 'CZK' || o.eligibleDuration.value !== 3 || o.eligibleDuration.unitCode !== 'MON') e('offer must be a single 50000 CZK / 3 MON offer');
if (!body.includes(o.description)) e('Offer.description not visible');
if (!body.includes('≈ €2 000') || /€|EUR/.test(JSON.stringify(ld))) e('euro estimate must be visible and absent from JSON-LD');
const cat = sv.hasOfferCatalog;
// Every catalog item is visible verbatim, except the maps item whose wording is fixed by the brief.
const MAPS_ITEM = 'Ведение профилей на Google Картах, Mapy.com (Seznam) и Firmy.cz без ограничения по количеству профилей: звонки, маршруты, переходы на сайт, отзывы';
if (!body.includes(cat.name) || cat.itemListElement.length !== 9 || !cat.itemListElement.every((i) => body.includes(i.itemOffered.name) || i.itemOffered.name === MAPS_ITEM)) e('OfferCatalog does not match the visible list');
if (!cat.itemListElement.some((i) => i.itemOffered.name === MAPS_ITEM)) e('maps item of the OfferCatalog must use the wording from the brief');
for (const t of ['звонки, маршруты, переходы на сайт и работа с отзывами.', 'Работаю со всеми метриками (звонки, маршруты, переходы на сайт) и с отзывами.']) if (!body.includes(t)) e(`missing text: ${t}`);
if (!/бизнесу\. Работаю со всеми метриками/.test(body)) e('metrics sentence must follow the first sentence of the maps block');
if (fq.mainEntity.length !== 7 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('7 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Главная > Старт на 3 месяца' || bc.itemListElement.at(-1).item) e('breadcrumb');
// HowTo: three monthly stages as a numbered list, word for word; the weekly report is a separate paragraph
if (!ht || ht.totalTime !== 'P3M' || ht.step.length !== 3) e('HowTo: expected totalTime P3M and 3 steps');
else {
  const lis = [...(h.match(/<ol class="steps[^>]*>([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]));
  if (lis.length !== 3) e(`stages <ol> must have 3 items, has ${lis.length}`);
  ht.step.forEach((st, i) => { if (lis[i] !== `${st.name}: ${st.text}`) e(`stage ${i + 1} in <ol> != HowToStep ("${lis[i]}")`); });
  if (ht.step.some((st) => /недел/i.test(st.name + st.text))) e('the weekly report must not be a HowTo step');
  if (!/<\/ol>\s*<p[^>]*>Каждую неделю: отчёт о проделанной работе\.<\/p>/.test(h)) e('weekly line must be a separate paragraph right under the list');
}
if (sv.provider['@id'] !== by('Person')['@id']) e('provider must reference Person');
const rel = (sv.isRelatedTo ?? []).map((r) => r['@id']);
for (const p of ['/ru/konsultacii/', '/ru/full-seo/', '/ru/karty/']) if (!rel.includes(`${BASE}${p}#service`)) e(`isRelatedTo ${p}`);

if (errors.length) {
  console.error(`\nStart page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Start page check passed: ru.');
