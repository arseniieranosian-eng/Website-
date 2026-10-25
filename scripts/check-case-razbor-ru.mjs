// Post-build check of the Russian mini-case "Разбор сайта агентства недвижимости в Праге" /ru/kejsy/razbor-agentstvo-nedvizhimosti-praga/ (brief of 23.10.2026).
// A review, not a result: no figures, no "рост", "привело", "×", no purchased-links slide, no client or third-party names.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/kejsy/razbor-agentstvo-nedvizhimosti-praga/';
const H1 = 'Разбор сайта агентства недвижимости в Праге: что я увидел и что предложил';
const TITLE = 'SEO-аудит агентства недвижимости: разбор | Eranosian';
const DESC = 'Честная оценка конкуренции, три направления продвижения и план на 12 месяцев для агентства недвижимости в Праге. Без обещаний. Закажите консультацию.';
const SECTIONS = [H1, 'С чем пришёл владелец агентства недвижимости?', 'Как проходит консультация с аудитом и планом на 12 месяцев?', 'Что я увидел на сайте?', 'С кем конкурирует небольшое агентство недвижимости в поиске?', 'Какие направления продвижения я предложил?', 'Что входит в план на 12 месяцев?', 'Что пока неизвестно?', 'Что из этого подходит любому небольшому агентству недвижимости?', 'Частые вопросы', 'Связанные страницы', 'Хотите такой разбор для своего сайта?'];
const LINKS = ['/ru/konsultacii/', '/ru/besplatnyj-audit/', '/ru/seo-dlya-agentstv-nedvizhimosti-praga/', '/ru/kejsy/seo-perevodcheskoe-agentstvo-polgoda/', '/ru/kejsy/seo-perevodcheskoe-agentstvo-4-mesyaca/', '/ru/obo-mne/'];
const FORBIDDEN = ['выросл', 'вырос ', 'привело', 'привели', '×', 'за 24 часа', 'Quantum', 'PriceHubble', 'Expats', 'купленн', 'Search Console', '65–70', '+200', 'в три раза', 'я гарантирую', 'первое место', 'kbpreklady', 'KB P', 'Correct'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)»])/g, '$1').replace(/([«(]) /g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/kejsy/razbor-agentstvo-nedvizhimosti-praga/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (/\bрост\b|привело|×|кейс с результатом|за 24 часа/i.test(title + ' ' + desc)) e('no "рост / привело / × / за 24 часа" in the meta');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!/<html lang="ru"/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('lang ru, indexable');
if (/<link rel="alternate"[^>]*hreflang="(?:cs|en)/.test(h)) e('no cs / en alternates (no such pages)');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
if (!/<p class="eyebrow">Разбор<\/p>/.test(main)) e('label "Разбор" above the H1');
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
if (/(^|[^а-я])рост([^а-я]|$)/i.test(mainTxt)) e('forbidden word: рост ("точки роста" is fine)');
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/(?:ru\/)?blog\/|<form/.test(main)) e('no blog links, no form');
if (!/Обновлено: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time>/.test(h)) e('visible date dd.mm.yyyy');
// Answer-first under the question H2s
for (const hd of SECTIONS.slice(1, 9)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
// Table: header + 4 rows × 3 columns; one table only
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 5 || rows[0].join('|') !== 'Область|Что обнаружено|Что предложено' || rows.some((r) => r.length !== 3)) e('table: header + 4 rows × 3');
// Slides: three, neutral alt text, caption without names, no purchased-links slide
const figs = [...main.matchAll(/<img src="\/images\/razbor-slide-([123])\.webp" width="\d+" height="\d+" alt="(Фрагмент презентации по SEO-разбору[^"]*)"/g)];
if (figs.length !== 3) e('three slides with neutral alt text');
if (!mainTxt.includes('Фрагменты презентации по SEO-разбору для агентства недвижимости в Праге, октябрь 2026. Данные клиента скрыты.')) e('caption of the slides');
// "Что пока неизвестно" is honest: no results
if (!mainTxt.includes('решение владельца о дальнейшей работе не принято') || !mainTxt.includes('не называю этот материал кейсом с результатом')) e('what is still unknown');
// Three directions as H3 + the quote after them
const h3 = [...main.matchAll(/<h3>([\s\S]*?)<\/h3>/g)].map((m) => txt(m[1]));
for (const d of ['Узкие и длиннохвостые запросы', 'Контентная воронка', 'Английская версия сайта']) if (!h3.includes(d)) e(`H3: ${d}`);
const Q = 'Честный разбор начинается с вопроса, какой цели можно достичь у этого сайта, а не с обещания первого места.';
if ([...main.matchAll(/<blockquote/g)].length !== 1 || mainTxt.indexOf(Q) < mainTxt.indexOf('Какие направления продвижения я предложил?') || mainTxt.indexOf(Q) > mainTxt.lastIndexOf('Что входит в план на 12 месяцев?') || mainTxt.split(/\s+/).slice(0, 100).join(' ').includes(Q)) e('one author quote, not in the first 100 words');
// Checklist 5 items
if ([...(main.match(/Что из этого подходит любому[\s\S]*?<\/section>/) || [''])[0].matchAll(/<li>/g)].length < 4) e('checklist of 4–5 items');
// Two CTA buttons with the two formats not mixed
const ctas = [...(main.match(/Хотите такой разбор[\s\S]*?<\/section>/) || [''])[0].matchAll(/<a class="btn btn--(?:primary|secondary) btn--lg" href="([^"]+)">([^<]+)<\/a>/g)].map((m) => m[1] + ' ' + m[2]);
if (JSON.stringify(ctas) !== JSON.stringify(['/ru/konsultacii/ Заказать консультацию', '/ru/besplatnyj-audit/ Бесплатный технический аудит'])) e('two CTAs: ' + JSON.stringify(ctas));
// JSON-LD
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.filter((n) => n['@type'] === t);
const wp = by('WebPage').find((n) => n['@id'] === `${BASE}${URL_PATH}#webpage`);
const art = by('Article').find((n) => n['@id'] === `${BASE}${URL_PATH}#article`);
if (!wp || wp.name !== TITLE || wp.inLanguage !== 'ru' || wp.description !== DESC) e('WebPage');
if (!art || art.headline !== H1 || art.author['@id'] !== `${BASE}/#arsenii` || !art.datePublished) e('Article');
if (by('Quotation').length !== 1 || by('Quotation')[0].text !== Q) e('Quotation');
const fq = by('FAQPage')[0];
const visFaq = [...main.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 5 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage = the visible 5 questions');
if (ld.some((n) => ['Service', 'Offer', 'AggregateRating', 'Review', 'HowTo', 'VideoObject'].includes(n['@type']))) e('no Service / Offer / ratings / Review / HowTo / video');
const bc = by('BreadcrumbList')[0];
if (!bc || bc.itemListElement.map((x) => x.name).join('|') !== 'Главная|Кейсы|Разбор сайта агентства недвижимости в Праге') e('breadcrumb: ' + JSON.stringify(bc?.itemListElement?.map((x) => x.name)));
// Inbound links and the sitemap
for (const [f, what] of [['dist/ru/kejsy/index.html', 'case hub'], ['dist/ru/seo-dlya-agentstv-nedvizhimosti-praga/index.html', 'real-estate niche page'], ['dist/ru/konsultacii/index.html', 'consultation page']]) if (!readFileSync(f, 'utf8').includes(`href="${URL_PATH}"`)) e(`inbound link missing on ${what}`);
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
const wc = mainTxt.split(/\s+/).length;
if (wc < 600) e(`too short: ${wc} words`);

if (errors.length) { console.error('✗ check-case-razbor-ru:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-case-razbor-ru: ok (${wc} words)`);
