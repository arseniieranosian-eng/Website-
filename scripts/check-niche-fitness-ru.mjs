// Post-build check of the Russian niche landing /ru/seo-dlya-onlajn-fitnesa-i-wellness-praga/ (brief of 25.10.2026, rules A–G): meta (title <= 55, description <= 150), the H1 rule, the disclaimer and the "no results" line on
// the first screen, section order, answer-first, the author's observation verbatim, lists/tables, prices = the live service pages, no health / medical words, no competitors, no guarantees in the H1, FAQ = JSON-LD,
// Service without Offer, no hreflang (ru only until the Czech pair), inbound links.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const SUM = JSON.parse(readFileSync('src/data/niche-summaries.json', 'utf8'));
const URL_PATH = '/ru/seo-dlya-onlajn-fitnesa-i-wellness-praga/';
const H1 = 'SEO и GEO/AEO для онлайн-фитнеса и wellness в Праге: записи из Google и ИИ';
const NAME = 'SEO для онлайн-фитнеса и wellness';
const TITLE = 'SEO для онлайн-фитнеса и wellness в Праге | Eranosian';
const DESC = 'Делаю SEO и GEO/AEO для онлайн-фитнеса и wellness в Праге: FAQ, структура адресов, заголовки, блог. Без гарантий. Старт: бесплатный технический аудит.';
const SECTIONS = [H1, 'С чем я помогаю онлайн-фитнесу и wellness в Праге?', 'Что я вижу на сайтах онлайн-фитнеса и что с этим делаю?', 'Для кого это и для кого нет?', 'Что входит в бесплатный аудит, а что нет?', 'А что с профилями студии на картах?', 'Как начать и сколько стоит?', 'Частые вопросы', 'Следующий шаг'];
const LINKS = ['/ru/besplatnyj-audit/', '/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/seo-i-geo/', '/ru/obo-mne/'];
const FORBIDDEN = ['(?<!не )гарантирую(?! число)', 'гарантированно(?![а-я])', 'первое место в выдаче(?!\\.)', 'похуден', 'лечени', 'диет', 'БАД', 'добавк', 'Mall', 'AggregateRating', 'часто нахожу', 'GEO(?!/AEO)'];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)»])/g, '$1').replace(/([«(]) /g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/seo-dlya-onlajn-fitnesa-i-wellness-praga/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1 || title.length >= H1.length) e('title must differ from the H1 and be shorter');
if (/гаранти|не гарант|без слов|отрицан/i.test(H1)) e('the H1 carries no disclaimer');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!/<html lang="ru"/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('lang ru, indexable');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('no hreflang until the Czech pair is published');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (new RegExp(f).test(mainTxt)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/(?:en\/|ru\/)?blog\/|<form|<video|<iframe|<blockquote|kejsy|seo-dlya-perevodcheskih|seo-dlya-agentstv|seo-dlya-finansovyh|seo-dlya-kompyuternyh/.test(main)) e('no blog links, no form / video / iframe / quote, no case links, no links to other niches');
if (/\b(?:я|моё|наше)\b[^.]{0,30}агентств/i.test(mainTxt)) e('"агентство" about the author');
if (!/Обновлено: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time>/.test(h)) e('visible date dd.mm.yyyy');
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/ru\/besplatnyj-audit\/"/g) !== 3) e(`audit links: ${cnt(/href="\/ru\/besplatnyj-audit\/"/g)} (hero, audit section, CTA)`);
if (cnt(/href="\/ru\/karty\/"/g) !== 1 || cnt(/href="\/ru\/seo-i-geo\/"/g) !== 1) e('maps / SEO и GEO/AEO once each');
if (cnt(/class="btn btn--primary/g) !== 2) e('two buttons: hero and the closing CTA');
// First screen: the lead with the disclaimer, then the "no results" line, both before the button
const heroEnd = main.indexOf('btn btn--primary');
const hero = txt(main.slice(0, heroEnd));
if (!hero.includes('гарантировать нельзя.')) e('the guarantee disclaimer is in the hero (summary block)');
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead !== SUM['/ru/seo-dlya-onlajn-fitnesa-i-wellness-praga/'].replace(/\u00a0/g, ' ') && lead !== SUM['/ru/seo-dlya-onlajn-fitnesa-i-wellness-praga/']) e('summary block text'); const sw = lead.split(/\s+/).length; if (sw < 40 || sw > 60 || /\d/.test(lead.replace(/24/g, ''))) e(`summary block: ${sw} words, no numbers except 24`);
for (const hd of SECTIONS.slice(1, 7)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
// The author's observation verbatim (14 sites, 20.10.2026) and the criterion line
if (!mainTxt.includes('20.10.2026 я просмотрел 14 сайтов онлайн-фитнеса и wellness в Праге: у 5 нет FAQ вообще, а полноценного нет ни у одного; у 12 нет блога; у 13 адреса страниц не говорят, о чём страница; ни на одном заголовки не сформулированы как вопросы.') || !mainTxt.includes('Адрес не говорит, о чём страница, поэтому поисковик и ИИ хуже понимают её.')) e('the observation of 20.10.2026 verbatim');
const lists = (re) => [...(main.match(re) || [, ''])[1].matchAll(/<li>/g)].length;
if (lists(/Что вы получаете:[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) !== 6) e('what you get: 6');
if (lists(/Проблема и что я предлагаю:[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) !== 4) e('problem → offer: 4');
if (lists(/Что технически проверяется на сайте фитнес-проекта:[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) !== 6) e('audit checklist: 6');
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 5 || rows[0].join('|') !== 'Входит|Не входит') e('audit table: header + 4 rows');
if (!mainTxt.includes('Говорю на чешском, английском и русском; могу работать с сайтами на украинском, польском и словацком.')) e('languages line');
if (!mainTxt.includes('Профили студии на Google Картах, Mapy.com и Firmy.cz входят в пакеты Start и Full SEO')) e('maps block with Firmy.cz');
// Prices = the live RU service pages (single sources)
const pg = (f) => txt(readFileSync(f, 'utf8'));
const cons = pg('dist/ru/konsultacii/index.html'), start = pg('dist/ru/start-3-mesyaca/index.html'), full = pg('dist/ru/full-seo/index.html');
for (const [p, where, label] of [['2 000 Kč', cons, 'консультации'], ['3 000 Kč', cons, 'консультации'], ['50 000 Kč', start, 'Start'], ['25 000 Kč', start, 'Start'], ['15 000 Kč', full, 'Full SEO']]) {
  if (!where.includes(p)) e(`price ${p} not found on the ${label} page`);
  if (!mainTxt.includes(p)) e(`price ${p} missing on this page`);
}
if (!mainTxt.includes('Консультация стоит 2 000 Kč за час или 3 000 Kč с аудитом сайта и планом на 12 месяцев, пакет Start на 3 месяца 50 000 Kč, Full SEO от 15 000 Kč в месяц.') || /DPH|НДС/.test(mainTxt)) e('cooperation answer with prices, nothing about VAT');
if (!mainTxt.includes('на 25.10.2026 ниша свободна') || !mainTxt.includes('На 25.10.2026 ниша онлайн-фитнеса и wellness свободна.') || /\d из 3/.test(mainTxt)) e('capacity lines, no counter');
// JSON-LD
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => g.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (g.some((n) => ['AggregateRating', 'Review', 'VideoObject', 'HowTo', 'Quotation', 'Product', 'Offer'].includes(n['@type']))) e('no AggregateRating / Review / VideoObject / HowTo / Quotation / Product / Offer');
if (sv.offers || sv.areaServed.name !== 'Praha' || sv.provider['@id'] !== by('Person')['@id'] || sv.serviceType !== 'SEO и GEO/AEO' || sv.name !== 'SEO и GEO/AEO для онлайн-фитнеса и wellness') e('Service');
if (wp.inLanguage !== 'ru' || wp.name !== H1 || wp.datePublished !== '2026-10-25' || wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#service` || wp.author['@id'] !== by('Person')['@id']) e('WebPage');
if (wp.dateModified !== h.match(/Обновлено: <time datetime="([^"]+)"/)[1]) e('dateModified = visible date');
const faqHtml = (main.match(/<div class="faq-open">[\s\S]*?<\/section>/) || [''])[0];
const visFaq = [...faqHtml.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 7 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage: 7 questions equal to the visible FAQ');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[1].name !== NAME) e('breadcrumbs: Главная → SEO для онлайн-фитнеса и wellness');
// Inbound
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (!readFileSync('dist/ru/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('ru home link');
if (readFileSync('dist/index.html', 'utf8').includes(URL_PATH) || readFileSync('dist/en/index.html', 'utf8').includes(URL_PATH)) e('only the Russian version links to the page');
if (errors.length) { console.error('✗ check-niche-fitness-ru:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-fitness-ru: ok (${mainTxt.split(/\s+/).length} words)`);
