// Post-build check of /ru/besplatnyj-audit/ against its brief of 19.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://www.seo-eranosian.com';
const URL_PATH = '/ru/besplatnyj-audit/';
const H1 = 'Бесплатный SEO-аудит вашего сайта';
const SECTIONS = [H1, 'Что проверяет бесплатный SEO-аудит?', 'Чего в бесплатном аудите нет', 'Как проходит SEO-аудит', 'Что вы получите после аудита?', 'Чем бесплатный аудит отличается от консультации и Старта?', 'Что говорят клиенты', 'Вопросы о бесплатном SEO-аудите', 'Заказать бесплатный аудит', 'Другие услуги'];
const LINKS = ['/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/seo-i-geo/', '/ru/otzyvy/', '/ru/voprosy-i-otvety/', '/ru/politika-konfidencialnosti/'];
// Out of scope for the free audit (and the old page text) must not appear in <main> or in the page JSON-LD.
const FORBIDDEN = ['KB PŘEKLADY', '20-минутн', '5-10', '5–10', 'Core Web Vitals', 'мобильная версия', 'мобильной версии', 'полтора часа', '1,5 часа', 'VEED'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Visible text only: <script> / <style> contents (incl. the JSON-LD itself) are removed first.
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/besplatnyj-audit/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'Бесплатный технический SEO-аудит сайта | Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc.length < 120 || desc.length > 160) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:locale" content="ru_RU">')) e('og:locale ru_RU');
for (const [l, p] of [['cs', '/audit-zdarma/'], ['en', '/en/free-audit/'], ['ru', URL_PATH], ['x-default', '/audit-zdarma/']]) {
  if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
if (!mainTxt.includes('Бесплатно · 24 часа · без созвона')) e('badge missing');
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/★|AggregateRating|ratingValue/.test(h)) e('stars / AggregateRating must not be on this page');
if (/kb-preklady/.test(main)) e('KB PŘEKLADY case must not be linked from this page');
// The website field of the form is mandatory
if (!/<input[^>]*name="website"[^>]*required/.test(h) || !/Адрес сайта \*/.test(txt(h))) e('website field must be required (marked with *)');

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ht = by('HowTo'), vd = by('VideoObject');
const own = JSON.stringify([wp, sv, ht, fq, vd]);
for (const f of ['ключев', 'конкурент', 'карт', 'видимост', 'скорост', 'Core Web Vitals', 'мобильн']) {
  // 'Карты'/'конкуренты' may only appear in the page's own FAQ/visible text, never in the service markup
  if (new RegExp(f, 'i').test(JSON.stringify([sv.hasOfferCatalog, sv.offers, sv.description, sv.name, sv.serviceType]))) e(`Service markup mentions "${f}"`);
}
if (wp.name !== title) e('WebPage.name != <title>');
if (wp.description !== desc) e('WebPage.description != meta description');
if (wp.inLanguage !== 'ru') e('inLanguage');
const date = h.match(/Обновлено: <time datetime="([^"]+)">([^<]+)<\/time>/);
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} != visible ${date && date[1]}`);
if (!body.includes(sv.description)) e('Service.description not visible');
if (sv.name !== 'Бесплатный SEO-аудит сайта' || sv.serviceType !== 'Технический SEO-аудит') e('Service name / serviceType');
const o = sv.offers;
if (Array.isArray(o) || o.price !== '0' || o.priceCurrency !== 'CZK' || o.deliveryLeadTime.value !== 24 || o.deliveryLeadTime.unitCode !== 'HUR') e('offer must be a single free offer, 24 HUR');
if (!body.includes(o.description)) e('Offer.description not visible');
const cat = sv.hasOfferCatalog;
const items = cat.itemListElement.map((i) => i.itemOffered.name);
if (!body.includes(cat.name) || items.length !== 4 || !items.every((n) => body.includes(n))) e('OfferCatalog must have 4 visible items');
if (fq.mainEntity.length !== 6 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('6 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Главная > Бесплатный аудит' || bc.itemListElement.at(-1).item) e('breadcrumb');
if (!ht || ht.totalTime !== 'PT24H' || ht.step.length !== 4) e('HowTo: expected PT24H and 4 steps');
else {
  const ol = [...(h.match(/<ol class="steps[^>]*>([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]));
  ht.step.forEach((st, i) => { if (ol[i] !== st.text || st.name !== `Шаг ${i + 1}`) e(`step ${i + 1} in <ol> != HowToStep ("${ol[i]}")`); });
}
if (sv.provider['@id'] !== by('Person')['@id']) e('provider must reference Person');
const rel = (sv.isRelatedTo ?? []).map((r) => r['@id']);
for (const p of ['/ru/konsultacii/', '/ru/start-3-mesyaca/']) if (!rel.includes(`${BASE}${p}#service`)) e(`isRelatedTo ${p}`);
// Table
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
const EXPECT = [
  ['Параметр', 'Бесплатный аудит', 'Консультация + аудит сайта', 'Старт на 3 месяца'],
  ['Цена', 'Бесплатно', '3 000 Kč', '50 000 Kč'],
  ['Что вы получаете', 'Презентация с главными техническими ошибками и рекомендациями', 'Ошибки с примерами страниц, решения и план на 12 месяцев', 'Исправления, работа над сайтом и картами 3 месяца'],
  ['Созвон', 'Нет', 'Онлайн или лично в Праге', 'Еженедельный отчёт, созвон по желанию'],
  ['Кто исправляет', 'Вы', 'Вы', 'Я'],
];
if (JSON.stringify(rows) !== JSON.stringify(EXPECT)) e(`table: ${JSON.stringify(rows)}`);
for (const [hd, ans] of [['Что проверяет бесплатный SEO-аудит?', 'Бесплатный аудит проверяет технические ошибки сайта'], ['Чего в бесплатном аудите нет', 'Бесплатный аудит это только технические ошибки сайта'], ['Что вы получите после аудита?', 'Короткую презентацию'], ['Чем бесплатный аудит отличается от консультации и Старта?', 'Аудит показывает, где проблемы']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
// Video: optional until the anonymised file exists; when present everything must line up
const hasVideo = /<video/.test(h);
if (hasVideo !== Boolean(vd)) e('<video> on the page and VideoObject in JSON-LD must appear together');
if (hasVideo) {
  if (!/<video[^>]*controls[^>]*preload="metadata"[^>]*poster=/.test(h) || /autoplay/.test(h)) e('video: controls, preload=metadata, poster, no autoplay');
  if (!body.includes(vd.description) || !body.includes(vd.transcript)) e('video description / transcript must be visible under the video');
  if (!body.includes('Пример презентации бесплатного SEO-аудита (32 секунды, без звука).')) e('video caption missing');
  if (!vd.contentUrl || vd.embedUrl) e('VideoObject: contentUrl only');
  if (wp.video?.['@id'] !== vd['@id']) e('WebPage.video must reference the VideoObject');
}
void own;

if (errors.length) {
  console.error(`\nAudit page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`Audit page check passed: ru${hasVideo ? ' (with video)' : ' (video block pending)'}.`);
