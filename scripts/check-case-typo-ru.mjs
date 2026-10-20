// Post-build check of the anonymised print-shop case (ru only) against its brief of 20.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://www.seo-eranosian.com';
const URL_PATH = '/ru/kejsy/seo-tipografiya/';
const H1 = 'SEO для типографии: рост органического трафика в 8,75 раза за 12 месяцев';
const SECTIONS = [H1, 'Какой была исходная ситуация сайта?', 'Что я сделал в первые 30 дней?', 'Как я строил архитектуру ключей под коммерческий интент?', 'Зачем 20+ посадочных страниц и как они устроены?', 'Как я отслеживал просадки трафика?', 'Какие результаты за 12 месяцев?', 'В каком порядке делать SEO?', 'Частые вопросы по кейсу', 'Связанные услуги', 'Хотите такой же порядок работы для своего сайта?'];
const LINKS = ['/ru/kejsy/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/konsultacii/', '/ru/besplatnyj-audit/', '/ru/kontakty/', '/o-mne/'.replace('/o-mne/', '/ru/obo-mne/')];
// Figures / claims the brief rules out (unconfirmed or different formula)
const FORBIDDEN = ['+777', '777%', 'YoY', 'год к году', '+55', '+64', '30% потенциала', 'crawl budget', 'Screaming', 'AggregateRating', 'KB P', 'ChatGPT'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/kejsy/seo-tipografiya/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'SEO для типографии: рост трафика в 8,75 раза | Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc.length < 120 || desc.length > 160) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="ru_RU">')) e('og:type article / og:locale ru_RU');
// hreflang pair cs ↔ ru, x-default → cs
for (const [l, u] of [['cs', '/pripadove-studie/seo-tiskarna/'], ['ru', URL_PATH], ['x-default', '/pripadove-studie/seo-tiskarna/']]) if (!h.includes(`<link rel="alternate" hreflang="${l}" href="${BASE}${u}">`)) e(`hreflang ${l}`);
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<form|<video|★|ratingValue/.test(main)) e('no form / video / stars on this page');
// Hero: direct answer, the four number cards (HTML text), data note, author line
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!lead.startsWith('За 12 месяцев органический трафик') || words < 35 || words > 60) e(`hero answer (${words} words)`);
for (const c of ['1 200 → 10 500', '+775%', '8,75 раза', '12 месяцев']) if (!mainTxt.includes(c)) e(`number card missing: ${c}`);
if (!mainTxt.includes('Название клиента не раскрываю')) e('data note missing');
const byline = h.match(/Автор: <a href="\/ru\/obo-mne\/">Арсений Ераносьян<\/a> · Обновлено: <time datetime="([^"]+)">([^<]+)<\/time> · Проект: типография, январь 2024 – июль 2025/);
// One result formula: every mention of the figures uses the same numbers and period
const nums = mainTxt.match(/\d[\d  ]*→ ?\d[\d  ]*/g) ?? [];
if (!mainTxt.includes('июль 2024 → июль 2025')) e('period "июль 2024 → июль 2025" missing');
// Results table (the single source of the figures)
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (!rows.some((r) => r.join('|') === 'Показатель|Июль 2024|Июль 2025|Изменение') || !rows.some((r) => r.join('|') === 'Органические визиты в месяц|1 200|10 500|+775% (8,75 раза)')) e('results table must carry the figures with the period');
if (!/Источник: данные аналитики сайта[^<]*июль 2024 и июль 2025/.test(h)) e('source line under the results table');
if (!mainTxt.includes('Заявки, звонки и выручка в кейс не входят')) e('limits of the case must be stated');
for (const p of [10500, 1200]) if (8.75 !== 10500 / 1200) e('arithmetic');
if (Math.round((10500 / 1200 - 1) * 100) !== 775) e('+775 % arithmetic');
// Answer-first blocks
for (const [hd, ans] of [['Какой была исходная ситуация сайта?', 'В январе 2024'], ['Что я сделал в первые 30 дней?', 'Я провёл технический краулинг'], ['Как я строил архитектуру ключей под коммерческий интент?', 'Я собрал не список'], ['Зачем 20+ посадочных страниц и как они устроены?', 'Я запустил более 20'], ['Как я отслеживал просадки трафика?', 'Каждую неделю я проверял'], ['Какие результаты за 12 месяцев?', 'Органический трафик вырос'], ['В каком порядке делать SEO?', 'SEO определяется порядком']]) {
  if (!new RegExp(`${hd.replace(/[?.+]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
const steps = [...(h.match(/<ol class="case-steps">([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li><h3>/g)].length;
if (steps !== 3) e(`three lesson steps expected, found ${steps}`);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), art = by('Article'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (ld.some((n) => ['Service', 'Offer', 'Review', 'AggregateRating', 'VideoObject'].includes(n['@type']))) e('no Service / Offer / Review / ratings in the markup');
if (wp.name !== title || wp.description !== desc || wp.inLanguage !== 'ru') e('WebPage name / description / inLanguage');
if (!byline || byline[1] !== wp.dateModified || art.dateModified !== wp.dateModified) e(`dateModified ${wp.dateModified} must match the visible byline`);
if (wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#article` || art.mainEntityOfPage['@id'] !== wp['@id']) e('WebPage / Article references');
if (art.headline !== H1 || art.author['@id'] !== by('Person')['@id'] || art.datePublished !== '2026-10-20') e('Article headline / author / datePublished');
const ment = (art.mentions ?? []).map((m) => m['@id']);
for (const p of ['/ru/start-3-mesyaca/', '/ru/full-seo/']) if (!ment.includes(`${BASE}${p}#service`)) e(`Article.mentions ${p}`);
if (fq.mainEntity.length !== 4 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('4 FAQ Q/A not visible verbatim');
if (/777|YoY/.test(JSON.stringify(ld.filter((n) => n['@type'] !== 'Person')))) e('+777 / YoY in the markup');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Главная > Кейсы > SEO для типографии' || bc.itemListElement.at(-1).item || bc.itemListElement[1].item !== `${BASE}/ru/kejsy/`) e('breadcrumb (three levels)');

// Site: the case is listed on /ru/kejsy/ and /pripadove-studie/ (cs pair), linked from the service pages, not in en, one formula everywhere
const list = readFileSync('dist/ru/kejsy/index.html', 'utf8');
if (!list.includes(`href="${URL_PATH}"`)) e('the case must be listed on /ru/kejsy/');
for (const p of ['dist/ru/start-3-mesyaca/index.html', 'dist/ru/full-seo/index.html', 'dist/ru/konsultacii/index.html']) {
  const x = readFileSync(p, 'utf8');
  if (!x.includes(`href="${URL_PATH}"`) || !txt(x).includes('Типография: органический трафик вырос с 1 200 до 10 500 визитов в месяц (+775%, июль 2024 → июль 2025).')) e(`${p}: the print-shop line with one formula and a link`);
}
const sm = readFileSync('dist/sitemap.xml', 'utf8');
if (!sm.includes(`${BASE}${URL_PATH}`) || !sm.includes(`${BASE}/pripadove-studie/seo-tiskarna/`) || /seo-print-shop/.test(sm)) e('sitemap: cs + ru, no en');
if (/seo-tipografiya|seo-tiskarna/.test(readFileSync('dist/en/case-studies/index.html', 'utf8').replace(/<link rel="alternate"[^>]*>/g, ''))) e('the case must not be listed in en');
// +777 is gone from the whole site
for (const p of ['dist/o-mne/index.html', 'dist/ru/obo-mne/index.html', 'dist/index.html']) if (/777/.test(readFileSync(p, 'utf8'))) e(`${p}: +777 must be replaced by +775`);

if (errors.length) {
  console.error(`\nPrint-shop case check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Print-shop case check passed: ru.');
