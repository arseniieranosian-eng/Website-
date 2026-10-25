// Post-build check of the anonymised education-platform case (ru only) against its brief of 20.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/kejsy/seo-obrazovatelnaya-platforma/';
const H1 = 'SEO для новой образовательной платформы: +55% органического трафика за 7 месяцев';
const SECTIONS = [H1, 'Какой была исходная ситуация?', 'Почему на старте выбрали низкочастотные запросы?', 'Что мы делали?', 'Какие результаты за 7 месяцев?', 'Чему учит этот кейс?', 'Частые вопросы по кейсу', 'Связанные услуги', 'Запускаете новый сайт и хотите понять, с чего начать?'];
const LINKS = ['/ru/kejsy/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/konsultacii/', '/ru/besplatnyj-audit/', '/ru/kontakty/', '/ru/obo-mne/', '/ru/kejsy/seo-tipografiya/'];
// Out of scope / not confirmed: absolute numbers, leads, rankings, Instagram, community management, other figures, the client
const FORBIDDEN = ['Instagram', 'инстаграм', 'community', 'комьюнити', 'вовлечённост', 'выручк', 'я построил', 'я вырастил', 'я поднял', 'ChatGPT', 'AggregateRating', 'KB P', 'студент'.slice(0, 0) + 'zzzz'];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/kejsy/seo-obrazovatelnaya-platforma/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
// Instagram appears in the site footer / header (the author's own profile): the ban applies to the case text only
const mainTxt = txt(main);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'SEO образовательной платформы: +55% трафика | Eranosian' || title.length < 35 || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc.length < 120 || desc.length > 150) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="ru_RU">')) e('og:type article / og:locale ru_RU');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/pripadove-studie/og-obrazovatelnaya-platforma.png">`)) e('og:image: the +55 % card');
for (const [l, u] of [['cs', '/pripadove-studie/seo-vzdelavaci-platforma/'], ['ru', URL_PATH], ['x-default', '/pripadove-studie/seo-vzdelavaci-platforma/']]) if (!h.includes(`<link rel="alternate" hreflang="${l}" href="${BASE}${u}">`)) e(`hreflang ${l}`);
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.toLowerCase().includes(f.toLowerCase())) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<form|<video|<img|<svg class="channel|★|ratingValue/.test(main)) e('no form / video / images / charts / stars on this page');
// Role of the author: "мы с коллегой" is allowed here and must be present; the data note says "вместе с коллегой"
if (!/Мы с коллегой/.test(mainTxt) || !mainTxt.includes('Я участвовал в проекте вместе с коллегой')) e('the colleague role must be stated');
// Hero: answer, three number cards, data note, author line
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!lead.startsWith('За 7 месяцев (март → сентябрь 2025)') || words < 35 || words > 60) e(`hero answer (${words} words)`);
for (const c of ['+55%', '7 месяцев', 'март → сентябрь 2025']) if (!mainTxt.includes(c)) e(`number card missing: ${c}`);
const byline = h.match(/Автор: <a href="\/ru\/obo-mne\/">Арсений Ераносьян<\/a> · Обновлено: <time datetime="([^"]+)">([^<]+)<\/time> · Проект: образовательная платформа, март – сентябрь 2025/);
// Only one number: +55 %. No other percentages or absolute visit counts in the case text
const pct = (mainTxt.match(/[+\-−]?\d[\d  ]*%/g) ?? []).map((x) => x.replace(/\s/g, ''));
if (pct.some((x) => x !== '+55%' && x !== '55%')) e(`only +55% may appear, found: ${[...new Set(pct)].join(', ')}`);
if (/\d[\d  ]*\s*(визит|посетител|пользовател|регистрац)/i.test(mainTxt)) e('no absolute visits / users / sign-ups');
// Results table
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (!rows.some((r) => r.join('|') === 'Показатель|Период|Изменение') || !rows.some((r) => r.join('|') === 'Органический трафик|март → сентябрь 2025 (7 месяцев)|+55%')) e('results table');
if (!/Источник: данные аналитики сайта[^<]*март и сентябрь 2025/.test(h)) e('source line under the results table');
if (!mainTxt.includes('Абсолютные значения не раскрываю')) e('limits of the case must be stated');
for (const [hd, ans] of [['Какой была исходная ситуация?', 'Платформа, которая связывает'], ['Почему на старте выбрали низкочастотные запросы?', 'У нового сайта нет авторитета'], ['Что мы делали?', 'Мы с коллегой исследовали'], ['Какие результаты за 7 месяцев?', 'Органический трафик вырос на 55%']]) {
  if (!new RegExp(`${hd.replace(/[?.+]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
if ([...(h.match(/<ol class="case-steps">([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li><h3>/g)].length !== 3) e('three theses expected');
const wc = mainTxt.split(/\s+/).length;
if (wc < 450 || wc > 800) e(`short case: about 500-700 words expected, found ${wc}`);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), art = by('Article'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (ld.some((n) => ['Service', 'Offer', 'Review', 'AggregateRating', 'VideoObject', 'ImageObject'].includes(n['@type']) && !String(n['@id'] ?? '').includes('#photo') && !String(n['@id'] ?? '').includes('#logo'))) e('no Service / Offer / Review / ratings in the page markup');
if (wp.name !== title || wp.description !== desc || wp.inLanguage !== 'ru') e('WebPage name / description / inLanguage');
if (wp.primaryImageOfPage !== `${BASE}/images/pripadove-studie/og-obrazovatelnaya-platforma.png`) e('primaryImageOfPage = the +55 % card');
if (!byline || byline[1] !== wp.dateModified || art.dateModified !== wp.dateModified) e(`dateModified ${wp.dateModified} must match the visible byline`);
if (wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#article` || art.mainEntityOfPage['@id'] !== wp['@id']) e('WebPage / Article references');
if (art.headline !== H1 || art.author['@id'] !== by('Person')['@id'] || art.datePublished !== '2026-10-20') e('Article headline / author / datePublished');
if (!(art.mentions ?? []).some((m) => m['@id'] === `${BASE}/ru/start-3-mesyaca/#service`)) e('Article.mentions Start');
if (fq.mainEntity.length !== 3 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('3 FAQ Q/A not visible verbatim');
if (/Instagram/.test(JSON.stringify(ld.filter((n) => !['Person', 'ProfessionalService', 'WebSite', 'ImageObject'].includes(n['@type']))))) e('Instagram must not appear in the case markup');
if (/коллег/.test(JSON.stringify(art))) e('the colleague role stays in the visible text, not in Article.author / Article fields');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Главная > Кейсы > SEO для образовательной платформы' || bc.itemListElement.at(-1).item || bc.itemListElement[1].item !== `${BASE}/ru/kejsy/`) e('breadcrumb (three levels)');

// Site: listed on /ru/kejsy/ (ru only), linked from Start, in the sitemap, not in cs / en
if (!readFileSync('dist/ru/kejsy/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('the case must be listed on /ru/kejsy/');
const start = readFileSync('dist/ru/start-3-mesyaca/index.html', 'utf8');
if (!start.includes(`href="${URL_PATH}"`) || !txt(start).includes('Образовательная платформа: +55% органического трафика за 7 месяцев (март → сентябрь 2025, относительные данные от низкой базы нового сайта).')) e('Start page: the case line with one formula and a link');
const sm = readFileSync('dist/sitemap.xml', 'utf8');
if (!sm.includes(`${BASE}${URL_PATH}`) || !sm.includes(`${BASE}/pripadove-studie/seo-vzdelavaci-platforma/`) || /education-platform/.test(sm)) e('sitemap: cs + ru, no en');
if (/obrazovatelnaya|vzdelavaci/.test(readFileSync('dist/en/case-studies/index.html', 'utf8').replace(/<link rel="alternate"[^>]*>/g, ''))) e('the case must not be listed in en');

if (errors.length) {
  console.error(`\nEducation-platform case check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Education-platform case check passed: ru.');
