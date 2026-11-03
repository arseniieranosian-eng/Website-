// Post-build check of the Russian blog article /ru/blog/slabaya-seo-konkurenciya-perevodcheskie-agentstva/ (brief of 1.11.2026): meta (title <= 55, description <= 150, no call to action), H1 and H2 order, direct answers (max 60 words),
// FAQ = JSON-LD (4), one Google link, the video facade (youtube-nocookie on click, neutral poster, no company names), three equal CTA buttons to the Russian city pages, hreflang pair cs ↔ ru (+ x-default = cs),
// parity of the facts with the Czech article, no names / guarantees / prices / "X of Y", inbound links (the three Russian city pages, the Russian blog index).
import { readFileSync, existsSync } from './fs-clean.mjs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/blog/slabaya-seo-konkurenciya-perevodcheskie-agentstva/';
const CS_PATH = '/blog/slabe-seo-konkurence-prekladatelske-agentury/';
const H1 = 'Почему в поиске выше и переводческие агентства со слабым SEO?';
const TITLE = 'Слабое SEO переводческих агентств в поиске | Eranosian';
const DESC = 'Почему выше в поиске бывает конкурент со слабым сайтом: наблюдения по выдаче «překlady», гипотезы и то, что из них не следует.';
const SECTIONS = [H1, 'Что я увидел у первых результатов по переводам?', 'Как выглядят сайты двух из этих агентств?', 'Почему впереди могут быть и сайты с недостатками?', 'Значит ли это, что конкуренция лёгкая?', 'Что агентству из этого взять?', 'Частые вопросы'];
const FORBIDDEN = ['гарантир', 'гарантий', 'Kč', 'топ-1', 'первое место', 'быстро', 'presto', 'skrivanek', 'Presto', 'Skřivánek', 'Start', 'Full SEO', 'из 3', 'DPH'];
const GOOGLE = 'https://developers.google.com/search/docs/appearance/ranking-systems-guide';
const CTAS = ['/ru/seo-dlya-perevodcheskih-agentstv-praga/', '/ru/seo-dlya-perevodcheskih-agentstv-brno/', '/ru/seo-dlya-perevodcheskih-agentstv-pardubice/'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)»])/g, '$1').replace(/([«(]) /g, '$1'));
const wc = (s) => s.split(/\s+/).filter(Boolean).length;
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/blog/slabaya-seo-konkurenciya-perevodcheskie-agentstva/index.html', 'utf8');
const hc = readFileSync('dist/blog/slabe-seo-konkurence-prekladatelske-agentury/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const mainC = txt((hc.match(/<main[\s\S]*?<\/main>/) || [hc])[0]);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150 || /Закажите|Свяжитесь/i.test(desc) || /\d/.test(desc)) e(`description: ${desc} (${desc.length})`);
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !/<html lang="ru"/.test(h)) e('og:type article / lang ru');
const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + ' ' + m[2]);
if (JSON.stringify(alts) !== JSON.stringify([`cs ${BASE}${CS_PATH}`, `ru ${BASE}${URL_PATH}`, `x-default ${BASE}${CS_PATH}`])) e('hreflang pair cs ↔ ru: ' + JSON.stringify(alts));
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
if ((main.match(new RegExp(`href="${GOOGLE.replace(/[.#/]/g, '\\$&')}"`, 'g')) || []).length !== 1) e('one link to the Google documentation');
for (const c of CTAS) if ((main.match(new RegExp(`class="btn btn--primary btn--lg" href="${c}"`, 'g')) || []).length !== 1) e(`CTA button to ${c}`);
if ((main.match(/class="btn /g) || []).length !== 3) e('exactly three buttons (the closing block)');
if (/href="\/ru\/(?:besplatnyj-audit|konsultacii|start-3-mesyaca|full-seo|karty)\//.test(main)) e('no links to the other services / audit');
for (const f of FORBIDDEN) if (new RegExp(f, 'i').test(mainTxt)) e(`forbidden text: ${f}`);
if (/<form|★|AggregateRating/.test(main)) e('no form / stars / quote');
if (/GEO(?!\/AEO)/.test(mainTxt)) e('bare GEO');
if (!/<img class="post-cover" src="\/images\/blog\/slabe-seo-konkurence-prekladatelske-agentury\.webp"[^>]*alt="Иллюстрация:/.test(main)) e('cover with a Russian alt');
if (!/Автор: <a href="\/ru\/obo-mne\/">Арсений Ераносьян<\/a> · Обновлено: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time> · Время чтения: \d+ мин/.test(h)) e('byline');
if (!/<a class="card card--link post-card" href="\/ru\/blog\/slabaya-seo[^>]*>/.test(readFileSync('dist/ru/blog/index.html', 'utf8'))) e('card on the Russian blog index');
const vid = (main.match(/<figure class="niche-video"[\s\S]*?<\/figure>/) || [''])[0];
if (!vid || /<iframe/.test(main) || !/data-youtube="l2-SXybLlss"/.test(vid) || !/data-title="Разбор сайтов двух переводческих агентств"/.test(vid) || !/href="https:\/\/youtu\.be\/l2-SXybLlss"/.test(vid) || !/slabe-seo-video-poster\.webp/.test(vid) || !/<img [^>]*alt="Превью видео/.test(vid)) e('video facade');
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if ((lead.match(/[.!?](\s|$)/g) || []).length !== 2) e(`lead: two sentences expected: ${lead}`);
for (const hd of SECTIONS.slice(1, 6)) {
  const m = h.match(new RegExp(`${hd.replace(/[?.:,]/g, '\\$&')}</h2>\\s*<p class="answer">([\\s\\S]*?)</p>`));
  if (!m) { e(`answer-first: ${hd}`); continue; }
  if (wc(txt(m[1])) > 60) e(`direct answer of "${hd}": ${wc(txt(m[1]))} words`);
}
if (!mainTxt.includes('Я SEO-специалист, поэтому моя оценка может быть предвзятой.') || !mainTxt.includes('Я не могу доказать, что эти сайты не занимаются SEO')) e('disclosure and the "cannot prove" sentence');
// parity with the Czech article
const par = [['12 раз', '12×'], ['10–15', '10 až 15'], ['«překlady Praha»', '„překlady Praha“'], ['«překlady Brno»', '„překlady Brno“'], ['«překlady Pardubice»', '„překlady Pardubice“'], ['середины марта', 'poloviny března'], ['середины сентября', 'poloviny září'], ['2026', '2026'], ['9 минут', '9 minut'], ['в июне 2026', 'červnu 2026'], ['Пардубице владелец', 'Pardubicích si majitel']];
for (const [r, c] of par) if (!mainTxt.includes(r) || !mainC.includes(c)) e(`parity: "${r}" (ru) and "${c}" (cs)`);
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const node = (t) => g.filter((n) => n['@type'] === t);
const U = BASE + URL_PATH;
const post = node('BlogPosting')[0];
if (!post || post['@id'] !== `${U}#article` || post.headline !== H1 || post.author['@id'] !== `${BASE}/#arsenii` || post.inLanguage !== 'ru' || post.datePublished !== '2026-11-01') e('BlogPosting');
const wp = node('WebPage')[0];
if (!wp || wp['@id'] !== `${U}#webpage` || wp.inLanguage !== 'ru' || wp.name !== title || wp.description !== desc) e('WebPage');
const bc = node('BreadcrumbList')[0];
if (!bc || bc.itemListElement.length !== 3) e('BreadcrumbList: Главная, Статьи, article');
const faq = node('FAQPage')[0];
const visFaq = [...main.match(/<div class="faq-open">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/)[0].matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!faq || faq.mainEntity.length !== 4 || faq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ (4 questions)');
for (const [i, q] of visFaq.entries()) if (wc(q[1]) > 60) e(`FAQ ${i + 1} answer: ${wc(q[1])} words`);
// P1.1 (brief of 03.11.2026): Quotation / HowTo markup is no longer used on the site. if ((main.match(/<figure class="quote-fig">/g) || []).length !== 1 || g.filter((n) => n['@type'] === 'Quotation').length !== 1) e('one author quote with the Quotation node');
if (g.some((n) => ['HowTo', 'Service', 'Offer', 'AggregateRating', 'Review', 'VideoObject', 'Product', 'LocalBusiness'].includes(n['@type']))) e('no HowTo / Service / Offer / rating / VideoObject markup');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`${BASE}${URL_PATH}`)) e('the page must be in the sitemap');
if (!hc.includes(`href="${URL_PATH}"`)) e('the Czech article: language switcher leads to the Russian article');
for (const c of CTAS) if (!readFileSync(`dist${c}index.html`, 'utf8').includes(`href="${URL_PATH}"`)) e(`${c} links to the article`);
if (errors.length) { console.error('✗ check-post-weak-seo-ru:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-weak-seo-ru: ok (${mainTxt.split(/\s+/).length} words)`);
