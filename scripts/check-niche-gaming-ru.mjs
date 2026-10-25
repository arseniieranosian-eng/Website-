// Post-build check of the Russian niche landing /ru/seo-dlya-kompyuternyh-klubov-praga/ (brief of 25.10.2026): meta (title <= 55, description <= 150), section order, answer-first, lists/tables,
// no bare "игровой клуб" / "игровые автоматы", nothing about minors, no prices / competitors / guarantees, FAQ = JSON-LD, Service without Offer, hreflang pair with the Czech page,
// the same niche status date and the same audit terms as the Czech page, inbound links.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/seo-dlya-kompyuternyh-klubov-praga/';
const CS_PATH = '/seo-pro-pocitacove-herny-praha/';
const H1 = 'SEO и GEO/AEO для компьютерных клубов в Праге: бронирования из Google и ИИ';
const TITLE = 'SEO для компьютерных клубов: Прага, GEO/AEO | Eranosian';
const DESC = 'Делаю SEO и GEO/AEO для компьютерных клубов в Праге: сайт, бронирование, тарифы, акции, FAQ. Без гарантий. Бесплатный технический аудит.';
const SECTIONS = [H1, 'Что я делаю для компьютерного клуба?', 'Для кого это и для кого нет?', 'Что входит в бесплатный аудит, а что нет?', 'Как проходит работа?', 'Частые вопросы', 'Следующий шаг'];
const LINKS = ['/ru/besplatnyj-audit/', '/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/seo-i-geo/', '/ru/obo-mne/'];
const FORBIDDEN = ['(?<!не )гарантирую', 'гарантированно(?![а-я])', 'первое место', 'SEO агентств', 'Kč', 'несовершеннолет', 'школьник', 'возраст', 'дет', 'казино', 'азарт', 'игровые автоматы', 'AggregateRating', '12 сайтов', 'часто нахожу', 'GEO(?!/AEO)'];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)»])/g, '$1').replace(/([«(]) /g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/seo-dlya-kompyuternyh-klubov-praga/index.html', 'utf8');
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
for (const f of FORBIDDEN) if (new RegExp(f).test(mainTxt)) e(`forbidden text: ${f}`);
// Gambling ambiguity: "игровой клуб" never appears without "компьютерный / киберспортивный"
for (const m of mainTxt.matchAll(/(\S+\s+)?игров\S*\s+клуб\S*/gi)) if (!/компьютерн|киберспортивн/i.test(m[1] || '')) e(`bare "игровой клуб": ${m[0]}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/(?:en\/|ru\/)?blog\/|<form|<video|<iframe|seo-dlya-perevodcheskih|seo-dlya-agentstv|seo-dlya-finansovyh/.test(main)) e('no blog links, no form / video / iframe, no links to other niches');
if (/\b(?:я|моё|наше)\b[^.]{0,30}агентств/i.test(mainTxt)) e('"агентство" about the author');
if (!/Обновлено: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time>/.test(h)) e('visible date dd.mm.yyyy');
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/ru\/besplatnyj-audit\/"/g) !== 3) e(`audit links: ${cnt(/href="\/ru\/besplatnyj-audit\/"/g)} (hero, audit section, CTA)`);
for (const l of ['/ru/konsultacii/', '/ru/seo-i-geo/', '/ru/karty/']) if (cnt(new RegExp(`href="${l}"`, 'g')) !== 1) e(`${l} once`);
if (cnt(/href="\/ru\/start-3-mesyaca\/"/g) < 1 || cnt(/href="\/ru\/full-seo\/"/g) < 1) e('Start / Full SEO linked');
if (cnt(/class="btn btn--primary/g) !== 2) e('two buttons: hero and the closing CTA');
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (!lead.startsWith('Делаю SEO и GEO/AEO для компьютерных клубов, киберклубов и киберспортивных арен в Праге') || !lead.endsWith('Клиентов и позиции не гарантирую.')) e('hero lead');
for (const hd of SECTIONS.slice(1, 5)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
const lists = (re) => [...(main.match(re) || [, ''])[1].matchAll(/<li>/g)].length;
if (lists(/Что я делаю для компьютерного клуба\?[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) !== 6) e('what I do: 6 bullets');
if (lists(/Что технически проверяется на сайте клуба:[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) !== 6) e('audit checklist: 6');
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 5 || rows[0].join('|') !== 'Входит|Не входит') e('audit table: header + 4 rows');
if (!mainTxt.includes('на 25.10.2026 ниша свободна') || !mainTxt.includes('На 25.10.2026 ниша компьютерных клубов свободна.') || /\d из 3/.test(mainTxt)) e('capacity lines, no counter');
// Same terms as the Czech page: capacity date, audit exclusions, 7 FAQ
const cs = txt(readFileSync('dist/seo-pro-pocitacove-herny-praha/index.html', 'utf8'));
if (!cs.includes('25. 10. 2026')) e('the Czech page carries the same status date 25.10.2026');
// JSON-LD
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => g.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (g.some((n) => ['AggregateRating', 'Review', 'VideoObject', 'HowTo', 'Quotation'].includes(n['@type']))) e('no AggregateRating / Review / VideoObject / HowTo / Quotation');
if (sv.offers || sv.areaServed.name !== 'Praha' || sv.provider['@id'] !== by('Person')['@id'] || sv.serviceType !== 'SEO и GEO/AEO' || sv.name !== 'SEO и GEO/AEO для компьютерных клубов') e('Service');
if (wp.inLanguage !== 'ru' || wp.name !== H1 || wp.datePublished !== '2026-10-25' || wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#service` || wp.author['@id'] !== by('Person')['@id']) e('WebPage');
if (wp.dateModified !== h.match(/Обновлено: <time datetime="([^"]+)"/)[1]) e('dateModified = visible date');
const faqHtml = (main.match(/<div class="faq-open">[\s\S]*?<\/section>/) || [''])[0];
const visFaq = [...faqHtml.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 7 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage: 7 questions equal to the visible FAQ');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[1].name !== 'SEO для компьютерных клубов') e('breadcrumbs: Главная → SEO для компьютерных клубов');
// Inbound
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (!readFileSync('dist/ru/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('ru home link');
if (errors.length) { console.error('✗ check-niche-gaming-ru:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-gaming-ru: ok (${mainTxt.split(/\s+/).length} words)`);
