// Post-build check of the Russian niche landing /ru/seo-dlya-perevodcheskih-agentstv-pardubice/ (brief of 1.11.2026, Pardubice): meta (title <= 55, description <= 150), H1, the summary block, section order, direct answers (max 60 words),
// FAQ = JSON-LD (6), hreflang pair cs ↔ ru (+ x-default = cs), parity of the facts with the Czech Pardubice page, the video facade (neutral poster, no company names), no guarantees / site names / "агентство" about the author / B2B tripling,
// prices equal to the Czech page, links to the Russian pages, JSON-LD without Offer / Review / VideoObject / HowTo / Quotation, inbound links, sitemap.
import { readFileSync } from './fs-clean.mjs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/seo-dlya-perevodcheskih-agentstv-pardubice/';
const CS_PATH = '/seo-pro-prekladatelske-agentury-pardubice/';
const SUM = JSON.parse(readFileSync('src/data/niche-summaries.json', 'utf8'));
const H1 = 'SEO и GEO/AEO для переводческих агентств в Пардубице: заявки из Google и ИИ';
const TITLE = 'SEO для агентств переводов, Пардубице | Eranosian';
const DESC = 'Делаю SEO и GEO/AEO для переводческих агентств в Пардубице: сайт, языковые версии, карты, FAQ. Бесплатный технический аудит.';
const SECTIONS = [H1, 'Что показывает выдача по запросу «překlady Pardubice»?', 'Что я делаю для переводческого агентства в Пардубице?', 'Что я увидел на сайтах двух переводческих агентств?', 'Как это работает на практике?', 'Как я работаю с агентствами?', 'Что входит в бесплатный аудит?', 'Какие форматы сотрудничества есть и сколько они стоят?', 'Что говорят клиенты?', 'Частые вопросы', 'Хотите узнать, какие технические ошибки есть на сайте вашего агентства?'];
const LINKS = ['/ru/besplatnyj-audit/', '/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/seo-i-geo/', '/ru/kejsy/seo-perevodcheskoe-agentstvo-polgoda/', '/ru/otzyvy/', '/ru/obo-mne/'];
const FORBIDDEN = ['presto.cz', 'адрес клиента', 'гарантирую', /* 'гарантировать' allowed since 09.11.2026: the approved timing / ads FAQ answers say "гарантировать нельзя" */ 'гарантий', 'гарантированно', 'топ-1', 'первое место', 'быстро', 'втрое', 'в три раза', '+200', 'ztrojn', 'přesto', 'skrivanek', 'Skřivánek', 'Presto', 'presto', 'бюро переводов', 'SEO агентств', 'нотариальн'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)»])/g, '$1').replace(/([«(]) /g, '$1'));
const wc = (s) => s.split(/\s+/).filter(Boolean).length;
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/seo-dlya-perevodcheskih-agentstv-pardubice/index.html', 'utf8');
const hc = readFileSync('dist/seo-pro-prekladatelske-agentury-pardubice/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const mainC = txt((hc.match(/<main[\s\S]*?<\/main>/) || [hc])[0]);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!/<html lang="ru"/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('lang ru, indexable');
const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + ' ' + m[2]);
if (JSON.stringify(alts) !== JSON.stringify([`cs ${BASE}${CS_PATH}`, `ru ${BASE}${URL_PATH}`, `x-default ${BASE}${CS_PATH}`])) e('hreflang pair cs ↔ ru: ' + JSON.stringify(alts));
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!main.includes(`href="${l}"`)) e(`missing link ${l}`);
if (/href="\/(?!ru\/|#)[^"]*"/.test(main)) e('links lead to Russian pages only');
if (/<form|<iframe/.test(main)) e('no form, no iframe before the click');
if (/\b(?:я|моё|наше)\b[^.]{0,30}агентств/i.test(mainTxt.replace(/переводческих агентств|переводческого агентства|агентства в Пардубице|агентства/g, ''))) e('"агентство" about the author');
if (/GEO(?!\/AEO)/.test(mainTxt)) e('"GEO" only together with AEO');
if (!/Обновлено: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time>/.test(h)) e('visible date dd.mm.yyyy');
const lead = txt((main.match(/<div class="summary-box"><p class="lead">([\s\S]*?)<\/p><\/div>/) || [, ''])[1]);
if (lead !== SUM[URL_PATH] || wc(lead) < 40 || wc(lead) > 60 || /\d/.test(lead.replace(/24/g, '').replace(/\d[\d\s]*Kč/g, ''))) e('summary block');
for (const hd of SECTIONS.slice(1, 8)) {
  const m = h.match(new RegExp(`${hd.replace(/[?.«»]/g, '\\$&')}</h2>\\s*<p class="answer">([\\s\\S]*?)</p>`));
  if (!m) { e(`answer-first: ${hd}`); continue; }
  if (wc(txt(m[1])) > 60) e(`direct answer of "${hd}": ${wc(txt(m[1]))} words`);
}
// parity of the facts with the Czech page
const par = [['65–70 %', '65–70 %'], ['март–сентябрь 2026', 'březen–září 2026'], ['16.10.2026', '16. 10. 2026'], ['15.09.2026', '15. 9. 2026'], ['24.10.2026', '24. 10. 2026'], ['24 часов', '24 hodin'], ['2 000 Kč', '2 000 Kč'], ['50 000 Kč', '50 000 Kč'], ['15 000 Kč', '15 000 Kč'], ['июнь 2026', 'červen 2026'], ['Девятиминутное', '9minutovém']];
for (const [r, c] of par) if (!mainTxt.includes(r.replace('июнь', 'июне').replace('девятиминутное', 'девятиминутное')) && !mainTxt.includes(r) || !mainC.includes(c)) e(`parity: "${r}" (ru) and "${c}" (cs)`);
if (!mainTxt.includes('Статус для ниши переводческих агентств на 24.10.2026: свободно.') || !mainC.includes('Stav pro obor překladatelských agentur k 24. 10. 2026: volno.')) e('capacity status: dated and "free" on both pages');
// the video facade: neutral poster, no company names, one link to the Czech article, no VideoObject
const vid = (main.match(/<figure class="niche-video"[\s\S]*?<\/figure>/) || [''])[0];
if (!/data-youtube="l2-SXybLlss"/.test(vid) || !/slabe-seo-video-poster\.webp/.test(vid) || !/data-title="Разбор сайтов двух переводческих агентств"/.test(vid) || !/href="https:\/\/youtu\.be\/l2-SXybLlss"/.test(vid)) e('video facade');
if ((main.match(/href="\/ru\/blog\/slabaya-seo-konkurenciya-perevodcheskie-agentstva\/"/g) || []).length !== 0) e('no link to the article about weak competition (the weak-competition paragraph was removed on 09.11.2026)');
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/ru\/besplatnyj-audit\/"/g) !== 3) e(`audit links: ${cnt(/href="\/ru\/besplatnyj-audit\/"/g)} (hero, audit section, CTA)`);
if (cnt(/class="btn btn--primary/g) !== 3) e('three buttons: hero, audit section, closing CTA');
// JSON-LD
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => g.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (g.some((n) => ['AggregateRating', 'Review', 'VideoObject', 'HowTo', 'Quotation', 'Offer'].includes(n['@type']))) e('no AggregateRating / Review / VideoObject / HowTo / Quotation / Offer');
if (sv.offers || sv.areaServed.name !== 'Pardubice' || sv.provider['@id'] !== by('Person')['@id']) e('Service: Pardubice, no Offer');
if (wp.inLanguage !== 'ru' || wp.name !== H1 || wp.datePublished !== '2026-11-01' || wp.dateModified !== h.match(/Обновлено: <time datetime="([^"]+)"/)[1]) e('WebPage');
const faqHtml = (main.match(/<div class="faq-open">[\s\S]*?<\/section>/) || [''])[0];
const visFaq = [...faqHtml.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 6 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ (6)');
for (const [i, q] of visFaq.entries()) if (wc(q[1]) > 60) e(`FAQ ${i + 1} answer: ${wc(q[1])} words`);
if (!bc || bc.itemListElement.length !== 2) e('breadcrumbs: Главная → page');
// inbound links, sitemap, the switcher
if (!readFileSync('dist/ru/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('inbound link missing on the Russian home page');
if (!hc.includes(`href="${URL_PATH}"`)) e('the Czech page: language switcher leads to the Russian page');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (errors.length) { console.error('✗ check-niche-translation-pardubice-ru:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-translation-pardubice-ru: ok (${mainTxt.split(/\s+/).length} words)`);
