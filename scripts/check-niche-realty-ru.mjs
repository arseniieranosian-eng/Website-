// Post-build check of the Russian niche landing page /ru/seo-dlya-agentstv-nedvizhimosti-praga/ (brief of 22.10.2026). Built together with the Czech page
// (NICHE_READY.nicheRealty); until then it only confirms that the page is not built, not in the sitemap and not linked.
import { readFileSync, existsSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/seo-dlya-agentstv-nedvizhimosti-praga/';
const CS_PATH = '/seo-pro-realitni-kancelare-praha/';
const H1 = 'SEO для агентств недвижимости в Праге';
const TITLE = 'Продвижение агентства недвижимости в Праге | Eranosian';
const DESC = 'Делаю SEO и GEO/AEO для агентств недвижимости в Праге: страницы объектов и районов, индексация, Mapy.com. Начните с бесплатного аудита.';
const SECTIONS = [H1, 'Зачем агентству недвижимости SEO?', 'Что я делаю для агентства недвижимости в Праге?', 'Какие области проверяю на сайтах агентств недвижимости в первую очередь?', 'Как работает локальное присутствие агентства недвижимости?', 'Как выглядит аудит с планом на 12 месяцев?', 'Как я сотрудничаю с агентствами недвижимости?', 'Что входит в бесплатный аудит?', 'Какие форматы сотрудничества есть?', 'Что говорят клиенты?', 'Частые вопросы', 'Узнайте, есть ли на вашем сайте технические ошибки'];
const LINKS = ['/ru/besplatnyj-audit/', '/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/otzyvy/', '/ru/obo-mne/', '/ru/kontakty/'];
const FORBIDDEN = ['гарантирую', 'гарантированно', 'первое место', 'SEO агентство', 'Quantum', 'PriceHubble', 'Expats', 'KB P', 'kbpreklady', 'Correct', 'Přikop', '65–70', 'ChatGPT', 'AggregateRating', 'бесплатный аудит за 24 часа', 'купленн', 'Search Console'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)»])/g, '$1').replace(/([«(]) /g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

if (!existsSync('dist/ru/seo-dlya-agentstv-nedvizhimosti-praga/index.html')) {
  const bad = [];
  if (readFileSync('dist/sitemap.xml', 'utf8').includes('seo-dlya-agentstv-nedvizhimosti-praga')) bad.push('sitemap');
  for (const f of ['dist/ru/index.html']) if (readFileSync(f, 'utf8').includes('seo-dlya-agentstv-nedvizhimosti-praga')) bad.push(f);
  if (bad.length) { console.error('✗ check-niche-realty-ru: the page is not published but is referenced: ' + bad.join(', ')); process.exit(1); }
  console.log('✓ check-niche-realty-ru: not published, not referenced anywhere');
  process.exit(0);
}
const h = readFileSync('dist/ru/seo-dlya-agentstv-nedvizhimosti-praga/index.html', 'utf8');
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
// Hero
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead !== 'Я занимаюсь SEO и GEO/AEO для агентств недвижимости в Праге: улучшаю страницы объектов и районов, слежу за индексацией и дублями, работаю с Google Maps и Mapy.com. Начинаем с бесплатного аудита технических ошибок, без звонка и обязательств. Презентацию присылаю в течение 24 часов.') e('hero lead');
const hero = main.slice(0, main.indexOf(SECTIONS[1]));
if (/<blockquote/.test(hero) || !/href="\/ru\/besplatnyj-audit\/">Хочу бесплатный аудит<\/a>/.test(hero)) e('hero: button, no quote');
if (!/Обновлено: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time>/.test(h)) e('visible date dd.mm.yyyy');
for (const hd of SECTIONS.slice(1, 9)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
// No case study: no translation-case results
if (/трёхкратно|рост[лш]и обращени|×24|×3|\+200/.test(mainTxt)) e('no case results carried over from the translation case');
// Dated analysis of the Czech query and the honest note
if (!/Проверено: 22\.10\.2026/.test(mainTxt) || !mainTxt.includes('Выдачу на русском языке я для этой страницы не проверял.')) e('dated analysis of the Czech query with the note about the Russian results');
// Capacity rule, audit wording, formats cards
if (!mainTxt.includes('Я работаю одновременно не более чем с тремя компаниями из одной ниши. Это ограничение по загрузке, а не обещание эксклюзивности') || !mainTxt.includes('Данные на 22.10.2026')) e('capacity rule');
if (/осталось|свободных мест|\d из 3/.test(mainTxt.replace('Счётчик «X из 3» не веду.', ''))) e('no counter / places left');
if (!mainTxt.includes('Бесплатный аудит проверяет технические ошибки сайта: индексацию, дубли и другие технические проблемы. На сайтах агентств недвижимости я отдельно смотрю индексацию объявлений и дубли из фильтров.') || !mainTxt.includes('в течение 24 часов, без звонка и обязательств')) e('audit wording');
const cards = [...main.matchAll(/<a class="card card--link service-card" href="([^"]+)">([\s\S]*?)<\/a>/g)].map((m) => [m[1], txt(m[2])]);
if (cards.length !== 4 || ['/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/'].some((u, i) => cards[i]?.[0] !== u)) e('four service cards: ' + JSON.stringify(cards.map((c) => c[0])));
// Control-areas table: header + 6 rows
const area = (main.match(/Какие области проверяю[\s\S]*?<\/table>/) || [''])[0];
const rows = [...area.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 7 || rows[0].join('|') !== 'Область|Как понять|Что проверить сначала') e('control-areas table: header + 6 rows');
if (!mainTxt.includes('Бесплатный аудит охватывает технические ошибки (индексация, дубли); остальные области разбираются в консультации или в работе.')) e('table note on the scope of the free audit');
// Audit example: short description + a link to the mini-case (the slides live on that page), no client / third-party names
if (/<img[^>]*niche-realty-audit|<img[^>]*razbor-slide/.test(main) || !/href="\/ru\/kejsy\/razbor-agentstvo-nedvizhimosti-praga\/"/.test(main)) e('audit example: link to the mini-case, no slides on this page');
// One quote
const Q = 'Агентство недвижимости выигрывает не тем, что у него много объектов, а тем, что их легко найти.';
if (mainTxt.indexOf(Q) < mainTxt.indexOf('GEO/AEO: входит в каждую услугу') || mainTxt.indexOf(Q) > mainTxt.lastIndexOf('Какие области проверяю') || [...main.matchAll(/<blockquote/g)].length !== 1) e('one quote after the "what I do" section');
// JSON-LD
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = ld.find((n) => n['@type'] === 'WebPage' && n['@id'] === `${BASE}${URL_PATH}#webpage`);
const sv = ld.find((n) => n['@type'] === 'Service' && n['@id'] === `${BASE}${URL_PATH}#service`);
if (!wp || wp.name !== 'Продвижение агентства недвижимости в Праге' || wp.description !== DESC || wp.inLanguage !== 'ru' || wp.about['@id'] !== sv?.['@id'] || wp.author['@id'] !== `${BASE}/#arsenii` || !wp.datePublished) e('WebPage');
if (!sv || sv.areaServed !== 'Praha' || sv.audience?.audienceType !== 'агентства недвижимости' || sv.offers) e('Service: Praha, audience, no offers');
const how = by('HowTo');
const vis = [...(main.match(/Как я сотрудничаю с агентствами недвижимости\?[\s\S]*?<\/section>/) || [''])[0].matchAll(/<li><span>([\s\S]*?)<\/span><\/li>/g)].map((x) => txt(x[1]));
if (!how || how.step.length !== 3 || how.step.some((s, i) => norm(s.text) !== vis[i])) e('HowTo steps = the visible three steps');
const qn = ld.filter((n) => n['@type'] === 'Quotation');
if (qn.length !== 1 || qn[0].text !== Q) e('Quotation');
const fq = by('FAQPage');
const visFaq = [...main.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/div>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 5 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage = the visible 5 questions');
if (ld.some((n) => ['AggregateRating', 'Review', 'Offer', 'VideoObject'].includes(n['@type']))) e('no ratings / reviews / offers / video');
const bc = by('BreadcrumbList');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[0].name !== 'Главная' || bc.itemListElement[1].name !== H1) e('breadcrumb: Главная → the page');
// Inbound / hreflang partner / sitemap
if (!readFileSync('dist/ru/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('inbound link missing on the Russian home page');
if (!readFileSync('dist' + CS_PATH + 'index.html', 'utf8').includes(`hreflang="ru" href="${BASE}${URL_PATH}"`)) e('the Czech page must point to the Russian one');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
const wc = mainTxt.split(/\s+/).length;
if (wc < 700) e(`too short: ${wc} words`);

if (errors.length) { console.error('✗ check-niche-realty-ru:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-realty-ru: ok (${wc} words)`);
