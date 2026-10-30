// Post-build check of the blog article /ru/blog/kak-poluchit-klientov-finansovomu-konsultantu-chehiya/ (ru, brief F1 of 24.10.2026): meta, H2 order, answer-first, channel table,
// checklist, steps, one confirmed quote, the dated observation, links, FAQ = JSON-LD, no HowTo/Service, ru-only hreflang, blog index.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/blog/kak-poluchit-klientov-finansovomu-konsultantu-chehiya/';
const H1 = 'Как получить клиентов финансовому консультанту в Чехии: обзор каналов';
const TITLE = 'Как получить клиентов финансовому консультанту';
const DESC = 'Как получить клиентов финансовому консультанту в Чехии: рекомендации, соцсети, реклама, сайт и SEO. Обзор без гарантий. Бесплатный технический аудит.';
const SECTIONS = [H1, 'Откуда финансовые консультанты получают клиентов?', 'Что дают рекомендации и партнёрства?', 'Когда подходят соцсети и контент?', 'Что нужно знать о платной рекламе?', 'Когда имеет смысл собственный сайт и SEO?', 'Как выбрать канал, если времени мало?', 'Как начать: первые три шага', 'Частые вопросы', 'Проверьте технические ошибки сайта'];
const LINKS = ['/ru/blog/', '/ru/besplatnyj-audit/', '/ru/konsultacii/', '/ru/seo-dlya-finansovyh-konsultantov-chehiya/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/otzyvy/', '/ru/obo-mne/'];
const FORBIDDEN = ['гарантирую', 'гарантированно', 'много клиентов', 'первое место', 'топ-1', 'SEO агентств', 'без первого взноса', 'AggregateRating', 'аудит за 24 часа', 'ЧНБ', 'комисси', 'Google Ads', 'Sklik', 'Kč', 'беженц', 'виз', 'GEO(?!/AEO)'];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)»])/g, '$1').replace(/([«(]) /g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/blog/kak-poluchit-klientov-finansovomu-konsultantu-chehiya/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (/гарантир|топ|много клиентов|за 24 часа/i.test(title + ' ' + desc)) e('forbidden words in the meta');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="ru_RU">')) e('og:type article / og:locale ru_RU');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/blog/og-kak-poluchit-klientov-finansovomu-konsultantu.png">`)) e('og:image');
if (/<meta name="robots"[^>]*noindex/.test(h) || !/<html lang="ru"/.test(h)) e('ru, indexable');
if ([...h.matchAll(/<link rel="alternate" hreflang=/g)].length > 1) e('ru only: no hreflang for non-existent versions');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (new RegExp(f).test(mainTxt)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing link ${l}`);
if (/<form|<video|★|ratingValue|\[\?\]/.test(main)) e('no form / video / stars / [?] markers');
if (/seo-dlya-agentstv|seo-dlya-perevodcheskih|\/ru\/blog\/(?!kak-poluchit)/.test(main.replace(/href="\/ru\/blog\/"/g, ''))) e('no links to other niches / posts (F2–F4 do not exist yet)');
if (/\b(?:я|моё|наше)\b[^.]{0,30}агентств/i.test(mainTxt)) e('"агентство" about the author');
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/ru\/besplatnyj-audit\/"/g) !== 1) e(`audit links: ${cnt(/href="\/ru\/besplatnyj-audit\/"/g)} (text)`);
if (cnt(/href="\/ru\/konsultacii\/"/g) !== 1) e('consulting link once');
if (cnt(/href="\/ru\/seo-dlya-finansovyh-konsultantov-chehiya\/"/g) < 1 || cnt(/href="\/ru\/seo-dlya-finansovyh-konsultantov-chehiya\/"/g) > 3) e('landing link 1–3 times');
if (cnt(/class="btn btn--primary/g) !== 1) e('one audit button (the final CTA)');
if (!/<img class="post-cover" src="\/images\/blog\/kak-poluchit-klientov-finansovomu-konsultantu\.webp" width="1200" height="630" alt="Иллюстрация:[^"]+"/.test(main) || main.indexOf('post-cover') > main.indexOf('<h1')) e('cover illustration before the H1');
if (!/Автор: <a href="\/ru\/obo-mne\/">Арсений Ераносьян<\/a> · Обновлено: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time> · Чтение: \d+ мин/.test(h)) e('byline');
for (const hd of SECTIONS.slice(1, 8)) if (!new RegExp(`${hd.replace(/[?.:]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
// Channel table: header + 6 rows, 4 columns, maps link inside; no numbers
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 7 || rows[0].join('|') !== 'Канал|Откуда приходит клиент|Когда подходит|Ограничения' || rows.some((r) => r.length !== 4)) e('channel table: header + 6 rows × 4 columns');
if (rows.slice(1).some((r) => /\d/.test(r.join(' ')))) e('no numbers in the channel table');
if (!/<td>Из профилей в Google Maps и Mapy\.com \(<a href="\/ru\/karty\/">Карты<\/a>\)<\/td>/.test(main)) e('maps link in the table row');
if (([...(main.match(/Как выбрать канал, если времени мало\?[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) || [, ''])[1].matchAll(/<li>/g)]).length !== 5) e('checklist: 5 questions');
const steps = [...(main.match(/<ol class="steps">([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li><span>/g)].length;
if (steps !== 3) e('three steps');
// Observation and the quote
if (!mainTxt.includes('За последние три месяца до 24.10.2026 я просмотрел 8 сайтов финансовых консультантов в Чехии. Ни на одном из них не было FAQ, а на части услуги были собраны на одной странице. Это мои наблюдения, а не оценка конкретных сайтов.')) e('observation paragraph');
if (!mainTxt.includes('Я занимаюсь SEO, поэтому моя оценка может быть пристрастной.')) e('bias disclosure');
const QUOTE = 'Рекомендации приходят от клиентов, а чтобы клиенты были, сайту стоит находиться в поиске и в ответах ИИ.';
if (!new RegExp(`<figure class="quote-fig">\\s*<blockquote cite="${BASE}${URL_PATH}"><p>${QUOTE.replace(/[.,]/g, '\\$&')}</p></blockquote>\\s*<figcaption>[\\s\\S]*?— <a href="/ru/obo-mne/">Арсений Ераносьян</a>`).test(main) || cnt(/<blockquote/g) !== 1) e('one quote figure with the signature');
if (mainTxt.split(' ').slice(0, 100).join(' ').includes('Рекомендации приходят от клиентов, а чтобы')) e('quote not in the first 100 words');
const first100 = mainTxt.split(' ').slice(0, 100).join(' ');
if (/seo-dlya|SEO для финансовых/.test(first100)) e('no landing mention in the first 100 words');
if (mainTxt.includes('Подпись')) e('');
// JSON-LD equals the visible text
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const node = (t) => g.filter((n) => n['@type'] === t);
const U = BASE + URL_PATH;
const post = node('BlogPosting')[0];
if (!post || post['@id'] !== `${U}#article` || post.headline !== H1 || post.author['@id'] !== `${BASE}/#arsenii` || post.datePublished !== '2026-10-24' || post.dateModified !== h.match(/Обновлено: <time datetime="([^"]+)"/)[1]) e('BlogPosting');
const wp = node('WebPage')[0];
if (!wp || wp['@id'] !== `${U}#webpage` || wp.mainEntity['@id'] !== `${U}#article` || wp.inLanguage !== 'ru') e('WebPage');
const qn = node('Quotation');
if (qn.length !== 1 || qn[0].text !== QUOTE || qn[0]['@id'] !== `${U}#quote-1`) e('one Quotation = the visible quote');
if (g.some((n) => ['HowTo', 'Service', 'Offer', 'AggregateRating', 'Review', 'VideoObject'].includes(n['@type']))) e('no HowTo / Service / Offer / ratings / VideoObject');
const faq = node('FAQPage')[0];
const visFaq = [...main.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!faq || faq.mainEntity.length !== 6 || faq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ');
const bc = node('BreadcrumbList')[0];
if (!bc || bc.itemListElement.length !== 3 || bc.itemListElement[1].item !== `${BASE}/ru/blog/`) e('breadcrumbs: Главная → Блог → статья');
if ([...(main.match(/<ol class="toc">[\s\S]*?<\/ol>/) || [''])[0].matchAll(/<li><a href="#/g)].length !== 7) e('table of contents: seven anchors');
for (const id of ['kanaly', 'rekomendacii', 'socseti', 'reklama', 'sajt', 'vybor', 'start']) if (!main.includes(`id="${id}"`)) e(`anchor target: ${id}`);
// Inbound: blog index (indexable now), sitemap, landing, robots
const blog = readFileSync('dist/ru/blog/index.html', 'utf8');
if (!blog.includes(`href="${URL_PATH}"`) || /<meta name="robots"[^>]*noindex/.test(blog)) e('ru blog index must list the article and be indexable');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`) || !readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}/ru/blog/</loc>`)) e('sitemap: article and ru blog');
if (/User-agent: (GPTBot|ClaudeBot|PerplexityBot)[\s\S]{0,40}Disallow: \//.test(readFileSync('dist/robots.txt', 'utf8'))) e('robots.txt must not block AI bots');
if (readFileSync('dist/index.html', 'utf8').includes(URL_PATH)) e('the Czech home must not link the ru article');
const wc = mainTxt.split(/\s+/).length;
if (wc < 700) e(`too short: ${wc} words`);
if (errors.length) { console.error('✗ check-post-finance-channels-ru:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-finance-channels-ru: ok (${wc} words)`);
