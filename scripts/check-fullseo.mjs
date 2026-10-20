// Post-build check of /ru/full-seo/ against its brief of 19.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://www.seo-eranosian.com';
const URL_PATH = '/ru/full-seo/';
const H1 = 'SEO продвижение сайта на год';
const SECTIONS = [H1, 'Сколько стоит SEO продвижение на год?', 'Что входит в SEO продвижение на год', 'Как проходит работа', 'Когда будут первые результаты?', 'Для кого подходит Full SEO на год', 'Карты Google и Seznam входят в пакет', 'Full SEO на год или Старт на 3 месяца?', 'Что это дало клиентам', 'Что говорят клиенты', 'Частые вопросы о SEO продвижении на год', 'Оставить заявку', 'Другие услуги'];
const GROUPS = ['Работа над сайтом', 'Работа вне сайта', 'ИИ и отчётность'];
const LINKS = ['/ru/besplatnyj-audit/', '/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/karty/', '/ru/seo-i-geo/', '/ru/kejsy/seo-perevodcheskoe-agentstvo-4-mesyaca/', '/ru/otzyvy/', '/ru/voprosy-i-otvety/'];
const FORBIDDEN = ['ежемесячные отчёты', 'ежемесячная отчётность', '4-8 недель', 'Чем SEO отличается от GEO'];
const MAPS_ITEM = 'Ведение профилей на Google Картах, Mapy.com (Seznam) и Firmy.cz без ограничения по количеству профилей: звонки, маршруты, переходы на сайт, отзывы';

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Visible text only: <script> / <style> contents (incl. the JSON-LD itself) are removed first.
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/full-seo/index.html', 'utf8');
const body = txt(h);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title.length < 50 || title.length > 60) e(`title length ${title.length}: ${title}`);
if (desc.length < 120 || desc.length > 160) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
for (const [l, p] of [['cs', '/full-seo/'], ['en', '/en/full-seo/'], ['ru', URL_PATH], ['x-default', '/full-seo/']]) {
  if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
const incl = h.match(/<h2[^>]*>Что входит в SEO продвижение на год<\/h2>([\s\S]*?)<\/section>/);
const groups = incl ? [...incl[1].matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => txt(m[1])) : [];
if (JSON.stringify(groups) !== JSON.stringify(GROUPS)) e(`include groups: ${JSON.stringify(groups)}`);
if (incl && [...incl[1].matchAll(/<li>/g)].length !== 11) e('the included list must have 11 items');
if (!/<p class="eyebrow">Full SEO<\/p>/.test(h) || !body.includes('от 15 000 Kč в месяц · 12 месяцев')) e('package name / price badge missing');
for (const f of FORBIDDEN) if (body.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<video|★|AggregateRating|ratingValue|VideoObject/.test(h)) e('video / stars / AggregateRating / VideoObject must not be on this page');
if (!body.includes('Первое место в Google не гарантирую')) e('guarantee sentence missing');
if (!body.includes('Пример контента: статья «Какие документы нужно перевести для ПМЖ в Чехии» приводит клиентов из поиска.')) e('content example missing');
// Honeypot: invisible, unlabeled, inert
const hp = h.match(/<div class="hp"[^>]*>([\s\S]*?)<\/div>/);
if (!hp || !/aria-hidden="true"/.test(hp[0]) || !/\binert\b/.test(hp[0]) || /<label/.test(hp[1])) e('honeypot field must be aria-hidden, inert and without a label');

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ht = by('HowTo');
if (wp.name !== title) e('WebPage.name != <title>');
if (wp.description !== desc) e('WebPage.description != meta description');
if (wp.inLanguage !== 'ru') e('inLanguage');
const date = h.match(/Обновлено: <time datetime="([^"]+)">([^<]+)<\/time>/);
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} != visible ${date && date[1]}`);
if (!body.includes(sv.description)) e('Service.description not visible');
if (sv.name !== H1 || sv.alternateName !== 'Full SEO' || !body.includes(sv.serviceType)) e('Service name / alternateName / serviceType');
const o = sv.offers;
const ps = o.priceSpecification;
if (Array.isArray(o) || o.priceCurrency !== 'CZK' || o.price !== undefined) e('offer must be a single CZK offer priced via priceSpecification');
if (!ps || ps['@type'] !== 'UnitPriceSpecification' || ps.price !== '15000' || ps.priceCurrency !== 'CZK' || ps.referenceQuantity.unitCode !== 'MON' || ps.referenceQuantity.value !== 1) e('priceSpecification must be 15000 CZK per 1 MON');
if (o.eligibleDuration.value !== 12 || o.eligibleDuration.unitCode !== 'MON') e('eligibleDuration must be 12 MON');
if (!body.includes(o.description)) e('Offer.description not visible');
if (!body.includes('≈ €600') || /€|EUR/.test(JSON.stringify(ld))) e('euro estimate must be visible and absent from JSON-LD');
const cat = sv.hasOfferCatalog;
if (!body.includes(cat.name) || cat.itemListElement.length !== 11 || !cat.itemListElement.every((i) => body.includes(i.itemOffered.name) || i.itemOffered.name === MAPS_ITEM)) e('OfferCatalog does not match the visible list');
if (!cat.itemListElement.some((i) => i.itemOffered.name === MAPS_ITEM)) e('maps item of the OfferCatalog must use the wording from the brief');
if (fq.mainEntity.length !== 6 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('6 FAQ Q/A not visible verbatim');
if (!ht || ht.totalTime !== 'P12M' || ht.step.length !== 4) e('HowTo: expected totalTime P12M and 4 steps');
else {
  const lis = [...(h.match(/<ol class="steps[^>]*>([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]));
  if (lis.length !== 4) e(`stages <ol> must have 4 items, has ${lis.length}`);
  ht.step.forEach((st, i) => { if (lis[i] !== st.text) e(`stage ${i + 1} in <ol> != HowToStep ("${lis[i]}")`); });
}
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Главная > Full SEO на год' || bc.itemListElement.at(-1).item) e('breadcrumb');
if (sv.provider['@id'] !== by('Person')['@id']) e('provider must reference Person');
const rel = (sv.isRelatedTo ?? []).map((r) => r['@id']);
for (const p of ['/ru/start-3-mesyaca/', '/ru/konsultacii/', '/ru/karty/']) if (!rel.includes(`${BASE}${p}#service`)) e(`isRelatedTo ${p}`);

if (errors.length) {
  console.error(`\nFull SEO page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Full SEO page check passed: ru.');
