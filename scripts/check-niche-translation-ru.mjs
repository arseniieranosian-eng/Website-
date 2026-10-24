// Post-build check of the Russian niche landing /ru/seo-dlya-perevodcheskih-agentstv-praga/ (brief of 24.10.2026): meta, section order, answer-first, lists/tables, case lines with windows,
// no absolute figures / names, no prices, no guarantees, FAQ = JSON-LD, Service without Offer, hreflang pair with the Czech page, inbound links, one capacity date everywhere.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/seo-dlya-perevodcheskih-agentstv-praga/';
const CS_PATH = '/seo-pro-prekladatelske-agentury-praha/';
const H1 = 'SEO для переводческих агентств в Праге';
const TITLE = 'SEO для бюро переводов в Праге: GEO/AEO и аудит | Eranosian';
const DESC = 'Делаю SEO и GEO/AEO для бюро переводов и переводческих агентств в Праге: страницы языковых пар, языковые версии, кейс. Бесплатный технический аудит.';
const SECTIONS = [H1, 'Зачем переводческим агентствам SEO?', 'Что я делаю для переводческого агентства?', 'Как это работает на практике?', 'Как я работаю с агентствами?', 'Что входит в бесплатный аудит?', 'Какие форматы сотрудничества есть?', 'Что говорят клиенты?', 'Частые вопросы', 'Закажите бесплатный технический аудит'];
const LINKS = ['/ru/besplatnyj-audit/', '/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/seo-i-geo/', '/ru/kejsy/seo-perevodcheskoe-agentstvo-polgoda/', '/ru/otzyvy/', '/ru/obo-mne/'];
const FORBIDDEN = ['гарантирую', 'гарантированно', 'первое место', 'топ-1', 'SEO агентств', 'Kč', 'нотариальн', 'заверенн', 'KB P', 'Quantum', 'Correct', 'AggregateRating', 'аудит за 24 часа', ' ×8', '×8 ', 'июнь к маю', 'GEO(?!/AEO)'];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)»])/g, '$1').replace(/([«(]) /g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/seo-dlya-perevodcheskih-agentstv-praga/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 160) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!/<html lang="ru"/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('lang ru, indexable');
const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + ' ' + m[2]);
if (JSON.stringify(alts) !== JSON.stringify([`cs ${BASE}${CS_PATH}`, `ru ${BASE}${URL_PATH}`, `x-default ${BASE}${CS_PATH}`])) e('hreflang pair cs ↔ ru: ' + JSON.stringify(alts));
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (new RegExp(f).test(mainTxt)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/(?:en\/|ru\/)?blog\/|<form|<video|\/seo-pro-prekladatelske-agentury-(?:brno|pardubice)|seo-dlya-agentstv-nedvizhimosti|seo-dlya-finansovyh/.test(main)) e('no blog / form / video, no links to Brno / Pardubice / other niches');
if (/\b(?:я|моё|наше)\b[^.]{0,30}агентств/i.test(mainTxt)) e('"агентство" about the author');
if (!/Обновлено: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time>/.test(h)) e('visible date dd.mm.yyyy');
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/ru\/besplatnyj-audit\/"/g) !== 3) e(`audit links: ${cnt(/href="\/ru\/besplatnyj-audit\/"/g)} (hero, audit section, CTA)`);
for (const l of ['/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/seo-i-geo/', '/ru/otzyvy/']) if (cnt(new RegExp(`href="${l}"`, 'g')) !== 1) e(`${l} once`);
if (cnt(/href="\/ru\/kejsy\/seo-perevodcheskoe-agentstvo-polgoda\/"/g) < 1 || cnt(/href="\/ru\/kejsy\/seo-perevodcheskoe-agentstvo-polgoda\/"/g) > 2) e('case link 1–2 times');
if (cnt(/class="btn btn--primary/g) !== 2) e('two buttons: hero and the closing CTA');
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (!lead.startsWith('Делаю SEO и GEO/AEO для бюро переводов и переводческих агентств в Праге') || !lead.endsWith('с цифрами и условиями.')) e('hero lead');
for (const hd of SECTIONS.slice(1, 7)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
// Steps, H3s, case lines, audit table + checklist
if ([...(main.match(/<ol class="steps">([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li><span>/g)].length !== 4) e('four steps');
const h3 = [...main.matchAll(/<h3>([\s\S]*?)<\/h3>/g)].map((m) => txt(m[1]));
if (JSON.stringify(h3.slice(0, 6)) !== JSON.stringify(['Страницы языковых пар', 'Страницы услуг и отраслей', 'Страница для компаний (B2B-запросы)', 'Языковые версии: индексация и дубли', 'Локальное присутствие: Google Maps и Mapy.com', 'GEO/AEO как часть каждой услуги'])) e('six H3');
if (!mainTxt.includes('По другим нишам и странам результатов у меня пока нет.')) e('no results elsewhere line');
if (!mainTxt.includes('заявки через форму выросли в 24 раза (+2300 %).') || !mainTxt.includes('Если сравнить весну (март–май) и лето (июнь–август) 2026')) e('×24 line with its window');
if ((mainTxt.match(/в 24 раза/g) || []).length !== 1) e('"24 раза" once, as a separate line');
if (!mainTxt.includes('чешская 52 %, английская 26 %, украинская 18 %, русская 4 % ') && !mainTxt.includes('чешская 52 %, английская 26 %, украинская 18 %, русская 4 %')) e('language split');
if (!mainTxt.includes('Брно: топ-5 по ключевым запросам и показ в Google AI Overview (на конец проекта). Пардубице: верхние локальные позиции (на конец проекта).')) e('Brno / Pardubice lines');
if (!mainTxt.includes('разовый снимок на дату, не гарантия') || !mainTxt.includes('16.10.2026')) e('AI Overview snapshot caption');
if (!mainTxt.includes('В июне 2026 я посмотрел сайты переводческих агентств.')) e('observation line');
if (/\d[\d\s]{3,}(?:посещени|заявок в месяц|визит)|1 200|10 500/.test(mainTxt)) e('no absolute figures');
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 5 || rows[0].join('|') !== 'Что входит|Что не входит') e('audit table: header + 4 rows');
if (([...(main.match(/Что проверяется на сайте агентства:[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) || [, ''])[1].matchAll(/<li>/g)]).length !== 5) e('audit checklist: 5 items');
const date = '24.10.2026';
if (!mainTxt.includes(`по состоянию на ${date} место в нише переводческих агентств свободно`) || !mainTxt.includes(`По состоянию на ${date} ниша переводческих агентств свободна.`) || /\d из 3/.test(mainTxt)) e('capacity status line, no counter');
// JSON-LD
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => g.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (g.some((n) => ['AggregateRating', 'Review', 'VideoObject', 'HowTo', 'Quotation'].includes(n['@type']))) e('no AggregateRating / Review / VideoObject / HowTo / Quotation');
if (sv.offers || sv.areaServed.name !== 'Praha' || sv.provider['@id'] !== by('Person')['@id']) e('Service');
if (wp.inLanguage !== 'ru' || wp.name !== H1 || wp.datePublished !== '2026-10-25' || wp.dateModified !== h.match(/Обновлено: <time datetime="([^"]+)"/)[1]) e('WebPage');
const faqHtml = (main.match(/<div class="faq-open">[\s\S]*?<\/section>/) || [''])[0];
const visFaq = [...faqHtml.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 6 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[1].name !== H1) e('breadcrumbs: Главная → page');
// Inbound and the shared status date
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (!readFileSync('dist/ru/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('ru home link');
if (!readFileSync('dist/ru/kejsy/seo-perevodcheskoe-agentstvo-polgoda/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('ru case link to the landing');
const cs = txt(readFileSync('dist/seo-pro-prekladatelske-agentury-praha/index.html', 'utf8'));
if (!cs.includes('Údaj platí k 24. 10. 2026')) e('the Czech Praha page must carry the same status date 24. 10. 2026');
if (errors.length) { console.error('✗ check-niche-translation-ru:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-translation-ru: ok (${mainTxt.split(/\s+/).length} words)`);
