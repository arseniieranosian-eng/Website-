// Post-build check of Part 2 of the translation-agency case (ru only) against its brief of 20.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/kejsy/seo-v-nizkij-sezon/';
const P1 = '/ru/kejsy/seo-perevodcheskoe-agentstvo-4-mesyaca/';
const H1 = 'SEO в низкий сезон для переводческого агентства: заявки с сайта выросли в 24 раза';
const FORMULA = 'Заявки с сайта ×24 (+2300%): весна (март–май) → лето (июнь–август) 2026, одно окно, не год к году. От низкой базы';
const SECTIONS = [H1, 'Почему органический трафик не превращался в заявки?', 'Что я сделал в техническом слое?', 'Как я перестроил страницы услуг под коммерческий интент?', 'Зачем блог и FAQ как верх воронки?', 'Что дали локальные страницы по городам?', 'Какие результаты за лето?', 'Это был сезон? Что показал Google Trends', 'Шесть практических выводов', 'Частые вопросы по кейсу', 'Связанные услуги', 'Хотите такую же воронку для своего сайта?'];
const LINKS = ['/ru/kejsy/', P1, '/ru/seo-i-geo/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/konsultacii/', '/ru/besplatnyj-audit/', '/ru/kontakty/', '/ru/obo-mne/', '/ru/kejsy/seo-tipografiya/', '/ru/kejsy/seo-obrazovatelnaya-platforma/'];
const FORBIDDEN = ['KB P', 'kb-preklady', 'мы с коллегой', 'ChatGPT', 'LinkedIn', 'AggregateRating'];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '(').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/kejsy/seo-v-nizkij-sezon/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'SEO в низкий сезон: заявки выросли в 24 раза | Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc.length < 120 || desc.length > 160) e(`description length ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="ru_RU">')) e('og:type article / og:locale ru_RU');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/pripadove-studie/og-seo-v-nizkij-sezon.png">`)) e('og:image card');
for (const [l, u] of [['cs', '/pripadove-studie/seo-v-nizke-sezone/'], ['ru', URL_PATH], ['x-default', '/pripadove-studie/seo-v-nizke-sezone/']]) if (!h.includes(`<link rel="alternate" hreflang="${l}" href="${BASE}${u}">`)) e(`hreflang ${l}`);
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.toLowerCase().includes(f.toLowerCase())) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/<form|<video|<img|★|ratingValue/.test(main)) e('no form / video / images / stars on this page');

// Hero
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!lead.startsWith('За лето 2026 (июнь–август)') || words < 40 || words > 60) e(`hero answer (${words} words)`);
const cards = [...(main.match(/<dl class="stats[\s\S]*?<\/dl>/) || [''])[0].matchAll(/<dt>([^<]*)<\/dt><dd>([^<]*)<\/dd>/g)].map((m) => `${m[2]} ${m[1]}`);
if (cards.join('|') !== '×24 заявки с сайта|+357% клики|+398% показы') e(`hero cards: ${cards.join('|')}`);
if (!mainTxt.includes('даты уточняются')) e('dates note until confirmed');
if (!/Автор: <a href="\/ru\/obo-mne\/">Арсений Ераносьян<\/a> · Обновлено: <time datetime="([^"]+)">([^<]+)<\/time> · Проект: переводческое агентство, март – август 2026 · Часть 2<\/p>/.test(h)) e('byline');
const byline = h.match(/Обновлено: <time datetime="([^"]+)">/);
if (!mainTxt.includes('Это Часть 2. Часть 1: первые 4 месяца работы')) e('link to Part 1 in the hero');
if (!mainTxt.includes('звонки и мессенджеры не измеряются, поэтому реальный рост выше')) e('data note');

// One formula, word for word; ×24 never appears without it on the page
if (!mainTxt.includes(FORMULA)) e('result formula must appear verbatim');
const vis = mainTxt.replace(FORMULA, '');
for (const m of vis.matchAll(/×24|в 24 раза/g)) void m;
if (/\d+\s*%/.test(vis.replace(/[+]?(357|398|2300)%|~?(35|24|60|40)%|55\/45/g, ''))) e(`unexpected percentages: ${[...new Set(vis.match(/\d+\s*%/g))].join(', ')}`);
if (/\d[\d  ]*\s*(визит|посетител|пользовател|заявок в месяц)/i.test(mainTxt)) e('no absolute numbers');

// Results table
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
for (const r of ['Показатель|Период|Изменение', 'Заявки из формы|март–май → июнь–август 2026|×24 (+2300%)', 'Клики (Search Console)|последние 4 месяца → предыдущий период [даты уточняются]|+357%', 'Показы (Search Console)|последние 4 месяца → предыдущий период [даты уточняются]|+398%']) {
  if (!rows.some((x) => x.join('|') === r)) e(`results table row: ${r}`);
}
if (!mainTxt.includes('Источник: Search Console, GA4.')) e('source line under the table');
for (const s of ['около 35% летних заявок', 'около 24%', 'Вместе около 60%', 'примерно 55/45', 'около 40% распределены по 10+ страницам']) if (!mainTxt.includes(s)) e(`lead share missing: ${s}`);
for (const s of ['топ-3 источников заявок', 'топ-2 позиции', 'топ-5 источников заявок']) if (!mainTxt.includes(s)) e(`local pages fact missing: ${s}`);

// Answer-first H2 sections
for (const [hd, ans] of [['Почему органический трафик не превращался в заявки?', 'Когда я взял проект в середине марта'], ['Что я сделал в техническом слое?', 'Перед контентом я ускорил'], ['Как я перестроил страницы услуг под коммерческий интент?', 'Ключевые страницы я переписал'], ['Зачем блог и FAQ как верх воронки?', 'Я запустил блог'], ['Что дали локальные страницы по городам?', 'Вместо одной общей страницы'], ['Какие результаты за лето?', 'Заявки из формы выросли в 24 раза'], ['Это был сезон? Что показал Google Trends', 'Нет. За два года Google Trends']]) {
  if (!new RegExp(`${hd.replace(/[?.+]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
const sixList = (h.match(/Шесть практических выводов<\/h2>\s*<ol class="case-steps">([\s\S]*?)<\/ol>/) || [, ''])[1];
if ([...sixList.matchAll(/<li><h3>/g)].length !== 6) e('six theses expected');
if (!/гарантировать такой результат нельзя\./.test(mainTxt)) e('closing conclusion with the no-guarantee sentence');
if (!/<ol class="case-steps">[\s\S]*?<\/ol>/.test(main) || [...main.matchAll(/<ol class="case-steps">([\s\S]*?)<\/ol>/g)][0][1].split('<li>').length !== 5) e('four funnel holes expected');
if (!/Почему органический трафик[\s\S]*?Нет верха воронки\.[\s\S]*?Нечёткий интент на страницах услуг\.[\s\S]*?Нет гео-покрытия\.[\s\S]*?Слабые сигналы доверия\./.test(main)) e('funnel holes order');
if (/google trends/i.test(main) && /<svg|<canvas/.test(main)) e('no chart without data');
const wc = mainTxt.split(/\s+/).length;
if (wc < 900 || wc > 1800) e(`word count ${wc} out of range`);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), art = by('Article'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ser = by('CreativeWorkSeries');
if (ld.some((n) => ['Service', 'Offer', 'Review', 'AggregateRating', 'VideoObject'].includes(n['@type']))) e('no Service / Offer / Review / ratings / VideoObject in the markup');
if (wp.name !== title || wp.description !== desc || wp.inLanguage !== 'ru') e('WebPage name / description / inLanguage');
if (wp.relatedLink !== `${BASE}${P1}`) e('WebPage.relatedLink = Part 1');
if (wp.primaryImageOfPage !== `${BASE}/images/pripadove-studie/og-seo-v-nizkij-sezon.png`) e('primaryImageOfPage');
if (!byline || byline[1] !== wp.dateModified || art.dateModified !== wp.dateModified) e(`dateModified ${wp.dateModified} must match the visible byline`);
if (wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#article` || art.mainEntityOfPage['@id'] !== wp['@id']) e('WebPage / Article references');
if (art.headline !== H1 || art.author['@id'] !== by('Person')['@id'] || art.datePublished !== '2026-10-20') e('Article headline / author / datePublished');
if (art.isPartOf['@id'] !== `${BASE}/ru/kejsy/#seo-case-series` || ser?.['@id'] !== art.isPartOf['@id'] || ser.name !== 'SEO-кейс переводческого агентства') e('case series (isPartOf + CreativeWorkSeries node)');
const ments = (art.mentions ?? []).map((m) => m['@id']);
if (!ments.includes(`${BASE}/ru/start-3-mesyaca/#service`) || !ments.includes(`${BASE}/ru/full-seo/#service`)) e('Article.mentions Start + Full SEO');
if (fq.mainEntity.length !== 3 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('3 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Главная > Кейсы > SEO в низкий сезон' || bc.itemListElement.at(-1).item || bc.itemListElement[1].item !== `${BASE}/ru/kejsy/`) e('breadcrumb (three levels)');
if (/KB P|Instagram/.test(JSON.stringify(ld.filter((n) => !['Person', 'ProfessionalService', 'WebSite', 'ImageObject'].includes(n['@type']))))) e('client name / Instagram in the case markup');

// Site: listed on /ru/kejsy/, linked from Part 1 (with the series), Start, Full SEO, seo-i-geo; sitemap; not in cs / en
const list = readFileSync('dist/ru/kejsy/index.html', 'utf8');
if (!list.includes(`href="${URL_PATH}"`) || !txt(list).includes('Переводческое агентство, часть 2.') || !txt(list).includes(FORMULA)) e('card on /ru/kejsy/ with the formula');
const p1 = readFileSync(`dist${P1}index.html`, 'utf8');
const p1ld = JSON.parse(p1.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
if (!p1.includes(`href="${URL_PATH}"`) || !txt(p1).includes('Продолжение: Часть 2') || !txt(p1).includes(FORMULA)) e('Part 1: "Продолжение: Часть 2" block with link and formula');
if (!p1ld.some((n) => n['@type'] === 'Article' && n.isPartOf?.['@id'] === `${BASE}/ru/kejsy/#seo-case-series`) || !p1ld.some((n) => n['@type'] === 'CreativeWorkSeries')) e('Part 1: Article.isPartOf the same series');
for (const p of ['dist/ru/start-3-mesyaca/index.html', 'dist/ru/full-seo/index.html', 'dist/ru/seo-i-geo/index.html']) {
  const c = readFileSync(p, 'utf8');
  if (!c.includes(`href="${URL_PATH}"`)) e(`${p}: link to Part 2`);
  if (!p.includes('seo-i-geo') && !txt(c).includes(FORMULA)) e(`${p}: the one formula`);
}
const sm = readFileSync('dist/sitemap.xml', 'utf8');
if (!sm.includes(`${BASE}${URL_PATH}`) || !sm.includes(`${BASE}/pripadove-studie/seo-v-nizke-sezone/`) || /seo-in-low/.test(sm)) e('sitemap: cs + ru, no en');
if (/seo-v-nizkij-sezon|seo-v-nizke-sezone/.test(readFileSync('dist/en/case-studies/index.html', 'utf8').replace(/<link rel="alternate"[^>]*>/g, ''))) e('the case must not be listed in en');

if (errors.length) {
  console.error(`\nSeason case (part 2) check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Season case (part 2) check passed: ru.');
