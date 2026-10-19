// Post-build check of /ru/uslugi/karty/ against its brief of 19.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://www.seo-eranosian.com';
const URL_PATH = '/ru/uslugi/karty/';
const H1 = 'Локальное SEO: Google Maps и Mapy.com';
const SECTIONS = [H1, 'Сколько стоит продвижение в Google Maps и Mapy.com?', 'Кому подходит продвижение в картах', 'Что входит в продвижение в картах', 'Какие метрики карт отслеживаются?', 'Локальные страницы для точек и филиалов', 'Как проходит работа', 'Когда ждать первых результатов?', 'Карты входят в пакеты «Старт» и «Full SEO»', 'Что говорят клиенты', 'Частые вопросы о продвижении в картах', 'Оставить заявку', 'Другие услуги'];
const LINKS = ['/ru/besplatnyj-audit/', '/ru/uslugi/konsultacii/', '/ru/uslugi/start-3-mesyaca/', '/ru/uslugi/full-seo/', '/ru/seo-i-geo/', '/ru/kejsy/', '/ru/otzyvy/', '/ru/voprosy-i-otvety/', '/ru/uslugi/', '/ru/politika-konfidencialnosti/'];
const FORBIDDEN = ['KB PŘEKLADY', 'KB Překlady', 'ежемесячный мониторинг', 'от 1 месяца', 'От 1 месяца', 'Seznam Mapy', 'создаю страницы', 'Что это дало клиентам', '[ПОДТВЕРДИТЬ'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Visible text only: <script> / <style> contents (incl. the JSON-LD itself) are removed first.
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/uslugi/karty/index.html', 'utf8');
const body = txt(h);
// Header and footer are shared by every page; page-specific bans apply to <main> only.
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'Продвижение в Google Maps и Mapy.com: звонки | Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc.length < 120 || desc.length > 160) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
const og = (h.match(/<meta property="og:description" content="([^"]*)"/) || [])[1];
if (!og || dec(og) !== desc || !/[а-я]/i.test(og)) e(`og:description must be the Russian description, got: ${og}`);
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
for (const [l, p] of [['cs', '/sluzby/mapy/'], ['en', '/en/services/maps/'], ['ru', URL_PATH], ['x-default', '/sluzby/mapy/']]) {
  if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
if (!body.includes('Оплата за результат · от 4 месяцев · без ограничения по профилям')) e('badge missing');
if (!body.includes('50 000 Kč') || !body.includes('от 15 000 Kč в месяц')) e('package prices missing in the packages block');
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<video|★|AggregateRating|ratingValue|VideoObject|LocalBusiness/.test(h)) e('video / stars / AggregateRating / VideoObject / LocalBusiness must not be on this page');
if (/kb-preklady/.test(main)) e('KB PŘEKLADY case must not be linked from this page');

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ht = by('HowTo');
if (wp.name !== title) e('WebPage.name != <title>');
if (wp.description !== desc) e('WebPage.description != meta description');
if (wp.inLanguage !== 'ru') e('inLanguage');
const date = h.match(/Обновлено: <time datetime="([^"]+)">([^<]+)<\/time>/);
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} != visible ${date && date[1]}`);
if (!body.includes(sv.description)) e('Service.description not visible');
if (sv.name !== H1) e('Service.name must equal H1');
const o = sv.offers;
if (Array.isArray(o) || 'price' in o || o.priceCurrency !== 'CZK') e('offer must be a single offer (rates live in priceSpecification)');
const ps = o.priceSpecification ?? [];
if (ps.map((p) => p.price).join() !== '1000,1000,500,1800' || !ps.every((p) => p.priceCurrency === 'CZK' && body.includes(p.name))) e('priceSpecification must be 1000/1000/500/1800 CZK with visible names');
if (!/1 000 Kč/.test(body) || !body.includes('500 Kč') || !body.includes('1 800 Kč')) e('rates must be visible');
if (/€|EUR/.test(JSON.stringify(ld))) e('no euro in JSON-LD');
if (o.eligibleDuration.minValue !== 4 || o.eligibleDuration.unitCode !== 'MON') e('eligibleDuration must be minValue 4 MON');
if (!body.includes(o.description)) e('Offer.description not visible');
const cat = sv.hasOfferCatalog;
if (!body.includes(cat.name) || cat.itemListElement.length !== 9 || !cat.itemListElement.every((i) => body.includes(i.itemOffered.name))) e('OfferCatalog does not match the visible list');
const lis = [...(h.match(/<ul class="checks">([\s\S]*?)<\/ul>/g) || [])].map((u) => [...u.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1])));
const incl = lis.find((l) => l.some((x) => x.startsWith('Создание или оптимизация профиля Google Business Profile')));
if (!incl || incl.length !== 9) e('"Что входит" list must have 9 items');
if (!incl || !cat.itemListElement.every((i, k) => incl[k].startsWith(i.itemOffered.name))) e('OfferCatalog order != visible list');
if (fq.mainEntity.length !== 8 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('8 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Главная > Услуги > Карты (Google + Mapy.com)' || bc.itemListElement.at(-1).item) e('breadcrumb');
if (!ht || ht.step.length !== 4) e('HowTo: expected 4 steps');
else {
  const ol = [...(h.match(/<ol class="steps[^>]*>([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]));
  if (ol.length !== 4) e(`<ol> must have 4 items, has ${ol.length}`);
  ht.step.forEach((st, i) => { if (ol[i] !== st.text || st.name !== `Шаг ${i + 1}`) e(`step ${i + 1} in <ol> != HowToStep ("${ol[i]}")`); });
  if (ht.step.some((st) => /ежемесяч/i.test(st.text))) e('monitoring must be weekly');
}
if (sv.provider['@id'] !== by('Person')['@id']) e('provider must reference Person');
const rel = (sv.isRelatedTo ?? []).map((r) => r['@id']);
for (const p of ['/ru/uslugi/start-3-mesyaca/', '/ru/uslugi/full-seo/']) if (!rel.includes(`${BASE}${p}#service`)) e(`isRelatedTo ${p}`);
// Answer-first blocks: the answer sits right under its question heading
for (const [hd, ans] of [['Сколько стоит продвижение в Google Maps и Mapy.com?', 'Продвижение в картах оплачивается за результат'], ['Какие метрики карт отслеживаются?', 'Я отслеживаю три метрики'], ['Локальные страницы для точек и филиалов', 'Я готовлю ТЗ'], ['Когда ждать первых результатов?', 'Сроки зависят от ниши']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}

// The Start and Full SEO pages use the shared name of the Seznam maps
for (const p of ['dist/ru/uslugi/start-3-mesyaca/index.html', 'dist/ru/uslugi/full-seo/index.html']) {
  const t = txt(readFileSync(p, 'utf8'));
  if (/Seznam Mapy/.test(t)) e(`${p}: "Seznam Mapy" must be "Mapy.com (Seznam)"`);
  if (!t.includes('Mapy.com (Seznam)') || !t.includes('Firmy.cz')) e(`${p}: missing "Mapy.com (Seznam)" / "Firmy.cz"`);
}
const svcs = txt(readFileSync('dist/ru/uslugi/index.html', 'utf8'));
if (!svcs.includes('От 4 месяцев · Full-пакет 1 800 Kč в месяц') || svcs.includes('От 1 месяца')) e('/ru/uslugi/ card must say "От 4 месяцев"');

if (errors.length) {
  console.error(`\nMaps page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Maps page check passed: ru.');
