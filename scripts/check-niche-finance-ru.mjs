// Post-build check of the Russian niche landing /ru/seo-dlya-finansovyh-konsultantov-chehiya/ (brief of 24.10.2026): meta, section order, answer-first, tables, checklist,
// one confirmed quote, no prices, no volumes, no guarantees, no "агентство" about the author, FAQ = JSON-LD, no Offer / video / HowTo, ru-only hreflang, inbound links.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/seo-dlya-finansovyh-konsultantov-chehiya/';
const H1 = 'SEO для финансовых консультантов в Чехии';
const TITLE = 'Продвижение сайта финансового консультанта | Eranosian';
const DESC = 'SEO для финансового консультанта: как разделить услуги по страницам, добавить FAQ и подготовить сайт для поиска и ИИ. Бесплатный аудит.';
const SECTIONS = [H1, 'Как клиенты ищут финансового консультанта в Чехии?', 'Почему сайт финансового консультанта не приводит обращений из поиска?', 'Что нужно сайту финансового консультанта?', 'Чем финансовая тематика отличается в поиске?', 'Чем GEO/AEO помогает финансовому консультанту?', 'Как распределены роли в проекте?', 'Как выглядит работа?', 'Сколько это стоит и когда будут первые результаты?', 'Подходит ли это вам?', 'Частые вопросы', 'Узнайте, есть ли на вашем сайте технические ошибки'];
const LINKS = ['/ru/besplatnyj-audit/', '/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/seo-i-geo/', '/ru/kejsy/', '/ru/obo-mne/'];
const FORBIDDEN = ['гарантирую', 'гарантированно', 'больше клиентов', 'первое место', 'топ-1', 'SEO агентств', 'без первого взноса', 'AggregateRating', 'бесплатный аудит за 24 часа', 'аудит за 24 часа', 'ЧНБ', 'Sklik', 'Keyword Planner', 'Kč', 'виз и беженц', 'беженц'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)»])/g, '$1').replace(/([«(]) /g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/seo-dlya-finansovyh-konsultantov-chehiya/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (/больше клиентов|гарантированно|топ|за 24 часа/i.test(title + ' ' + desc)) e('forbidden words in the meta');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!/<html lang="ru"/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('lang ru, indexable');
const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
if (alts.length > 1) e('ru only: no hreflang for non-existent versions ' + JSON.stringify(alts.map((m) => m[1])));
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/(?:en\/)?(?:ru\/)?blog\/(?!kak-poluchit-klientov-finansovomu-konsultantu-chehiya\/")|<form|seo-dlya-perevodcheskih|seo-dlya-agentstv|kejsy\/seo-perevodcheskoe/.test(main)) e('no blog links, no form, no links to other niches / the translation case');
if (/\b(?:я|моё|наше)\b[^.]{0,30}агентств/i.test(mainTxt)) e('"агентство" about the author');
if (/GEO(?!\/AEO)/.test(mainTxt)) e('"GEO" only together with AEO');
if (!/Обновлено: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time>/.test(h)) e('visible date dd.mm.yyyy');

// Hero
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (!lead.startsWith('Я делаю SEO и GEO/AEO для финансовых консультантов в Чехии') || !lead.endsWith('Гарантий нет, кейса в этой нише пока нет.')) e('hero lead');
const hero = main.slice(0, main.indexOf(SECTIONS[1]));
if (/<blockquote/.test(hero) || !/href="\/ru\/besplatnyj-audit\/">Заказать бесплатный технический аудит<\/a>/.test(hero) || !/href="\/ru\/konsultacii\/">Консультация<\/a>/.test(hero)) e('hero buttons, no quote');
for (const hd of SECTIONS.slice(1, 10)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);

// Tables, checklist
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 2) e(`two tables expected, found ${tables.length}`);
else {
  const rows = (t) => [...t.matchAll(/<tr>/g)].length - 1;
  if (rows(tables[0]) !== 5 || rows(tables[1]) !== 5) e(`table rows: ${rows(tables[0])}, ${rows(tables[1])}`);
  if (!/Направление[\s\S]*Как может звучать запрос[\s\S]*Что нужно сайту/.test(tables[0]) || !/Шаг[\s\S]*Что входит[\s\S]*Ссылка/.test(tables[1])) e('table headers');
}
if (([...(main.match(/Что нужно сайту финансового консультанта\?[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) || [, ''])[1].matchAll(/<li>/g)]).length !== 6) e('checklist: 6 items');
if (/\d[\d\s]*\s?(?:запросов в месяц|показов)/.test(mainTxt)) e('no search volumes');
if (!mainTxt.includes('Объёмы запросов я здесь не называю')) e('volumes note');
if (!mainTxt.includes('Консультанты работают с клиентами на разных визах и на нескольких языках') || (mainTxt.match(/визах/g) || []).length !== 1) e('one short visa sentence');

// Observation: dated, no invented numbers
if (!mainTxt.includes('За последние три месяца (к 24.10.2026) я просмотрел 8 сайтов финансовых консультантов. Это не исследование, и общих выводов или цифр из него я не делаю.')) e('observation sentence');
if (/на \d+ из 8|ни на одном/.test(mainTxt)) e('no unconfirmed counts from the 8 sites');

// YMYL source
if (!mainTxt.includes('Рекомендации проверены 24.10.2026.') || !h.includes('href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"')) e('Google source and check date');

// Quote: one, confirmed, not in the first 100 words
const quotes = [...main.matchAll(/<figure class="quote-fig">[\s\S]*?<\/figure>/g)];
if (quotes.length !== 1 || !txt(quotes[0][0]).includes('Финансовые тексты пишет консультант, а моя задача — чтобы сайт был понятен поиску и ИИ.')) e('one quote');
if (mainTxt.indexOf('Финансовые тексты пишет консультант, а моя') < 400) e('quote must not be in the first 100 words');

// Capacity rule
if (!mainTxt.includes('По состоянию на 24.10.2026 в нише финансовых консультантов есть свободное место.') || /\d из 3|макс\. ?3/i.test(mainTxt)) e('capacity rule, no counter');
if (!mainTxt.includes('Кейса в этой нише пока нет.')) e('no-case line');
// Audit button count: hero + table + CTA
const auditLinks = (main.match(/href="\/ru\/besplatnyj-audit\/"/g) || []).length;
if (auditLinks !== 3) e(`audit links: ${auditLinks} (hero, table, CTA)`);
const consLinks = (main.match(/href="\/ru\/konsultacii\/"/g) || []).length;
if (consLinks < 2) e(`consulting links: ${consLinks}`);

// JSON-LD
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), qt = by('Quotation'), bc = by('BreadcrumbList');
if (ld.some((n) => ['AggregateRating', 'Review', 'VideoObject', 'HowTo'].includes(n['@type']))) e('no AggregateRating / Review / VideoObject / HowTo');
if (sv.offers || sv.areaServed !== 'Česko' || sv.provider['@id'] !== by('Person')['@id'] || sv.serviceType !== 'SEO и GEO/AEO для финансовых консультантов') e('Service');
if (wp.inLanguage !== 'ru' || wp.name !== H1 && wp.name !== TITLE.replace(/ \| Eranosian$/, '')) e('WebPage');
if (fq.mainEntity.length !== 6) e('FAQPage: 6 questions');
for (const q of fq.mainEntity) if (!mainTxt.includes(norm(q.acceptedAnswer.text)) || !mainTxt.includes(norm(q.name))) e(`FAQ not visible word for word: ${q.name}`);
if (!qt || qt.text !== 'Финансовые тексты пишет консультант, а моя задача — чтобы сайт был понятен поиску и ИИ.') e('Quotation');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[1].name !== H1 && !bc.itemListElement[1].name.includes('финансовых')) e('breadcrumbs: two levels');

if (!main.includes('href="/ru/blog/kak-poluchit-klientov-finansovomu-konsultantu-chehiya/"') || !mainTxt.includes('Другие материалы')) e('block "Другие материалы" with F1');
// Inbound: sitemap, ru home, audit, header
const sm = readFileSync('dist/sitemap.xml', 'utf8');
if (!sm.includes(`${BASE}${URL_PATH}`)) e('sitemap');
if (!readFileSync('dist/ru/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('ru home link');
if (!readFileSync('dist/ru/besplatnyj-audit/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('ru audit link');
if (readFileSync('dist/index.html', 'utf8').includes(URL_PATH) || readFileSync('dist/en/index.html', 'utf8').includes(URL_PATH)) e('only ru versions link to the page');

if (errors.length) { console.error(`✗ check-niche-finance-ru (${errors.length}):\n- ` + errors.join('\n- ')); process.exit(1); }
console.log(`✓ check-niche-finance-ru: ok (${mainTxt.split(' ').length} words)`);
