// Post-build check of the Russian niche landing /ru/seo-dlya-buhgalterskih-kompanij-praga/ (brief of 31.10.2026): meta (title <= 55, description <= 150), H1, the summary block (from niche-summaries.json),
// section order, direct answers of 40–60 words, FAQ = JSON-LD, hreflang pair cs ↔ ru (+ x-default = cs), parity of the facts with the Czech page, no guarantees / site names / "агентство" about the author,
// links to the Russian service pages, JSON-LD without Offer / Review / HowTo, inbound links (home, menu), sitemap.
import { readFileSync } from './fs-clean.mjs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/ru/seo-dlya-buhgalterskih-kompanij-praga/';
const CS_PATH = '/seo-pro-ucetni-kancelare-praha/';
const SUM = JSON.parse(readFileSync('src/data/niche-summaries.json', 'utf8'));
const H1 = 'SEO и GEO/AEO для бухгалтерских компаний в Праге: заявки из Google и ИИ';
const TITLE = 'SEO для бухгалтерских компаний | Eranosian';
const DESC = 'Делаю SEO и GEO/AEO для бухгалтерских компаний в Праге: сайт, страницы услуг, FAQ. Закажите бесплатный технический аудит.';
const SECTIONS = [H1, 'Как выглядит сотрудничество?', 'Сколько это стоит?', 'Какой у меня опыт в этой нише?', 'Что я увидел на сайтах бухгалтерских компаний?', 'Для кого SEO имеет смысл, а для кого нет?', 'Частые вопросы', 'Хотите узнать, какие технические ошибки есть на вашем сайте?'];
const LINKS = ['/ru/besplatnyj-audit/', '/ru/konsultacii/', '/ru/start-3-mesyaca/', '/ru/full-seo/', '/ru/karty/', '/ru/kejsy/seo-perevodcheskoe-agentstvo-polgoda/', '/ru/obo-mne/'];
const FORBIDDEN = ['гарантирую', 'гарантированно', 'топ-1', 'первое место', 'быстро', 'бухгалтерия', 'контор', 'SEO агентств', 'ИП', ' ×8', ' ×24', 'втрое', 'ztrojn', 'нет собственных', 'кейсов у меня пока'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)»])/g, '$1').replace(/\( /g, '(').replace(/« /g, '«'));
const wc = (s) => s.split(/\s+/).filter(Boolean).length;
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/ru/seo-dlya-buhgalterskih-kompanij-praga/index.html', 'utf8');
const hc = readFileSync('dist/seo-pro-ucetni-kancelare-praha/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const mainC = txt((hc.match(/<main[\s\S]*?<\/main>/) || [hc])[0]);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + ' ' + m[2]);
if (/<meta name="robots"[^>]*noindex/.test(h) || JSON.stringify(alts) !== JSON.stringify([`cs ${BASE}${CS_PATH}`, `ru ${BASE}${URL_PATH}`, `x-default ${BASE}${CS_PATH}`])) e('indexable; hreflang pair cs ↔ ru (+ x-default = cs)');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!main.includes(`href="${l}"`)) e(`missing link ${l}`);
if (/href="\/(?!ru\/|#)[^"]*"/.test(main.replace(/href="\/seo-pro[^"]*"/g, ''))) e('links in the Russian page lead to Russian pages');
if (/\b(я|мои|моё|наше)\b[^.]{0,30}\bагентств/i.test(mainTxt.replace(/переводческого агентства/g, ''))) e('"агентство" about the author');
if (/GEO(?!\/AEO)/.test(mainTxt)) e('"GEO" only together with AEO');
if (/<form/.test(main)) e('no form');
if (!/Обновлено: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time>/.test(h)) e('visible date');
// summary block
const lead = txt((main.match(/<div class="summary-box"><p class="lead">([\s\S]*?)<\/p><\/div>/) || [, ''])[1]);
if (lead !== SUM[URL_PATH]) e('summary block text');
if (wc(lead) < 6 || wc(lead) > 60 || /\d/.test(lead.replace(/24/g, '').replace(/\d[\d\s]*Kč/g, ''))) e(`summary block: ${wc(lead)} words`);
// answers
for (const hd of SECTIONS.slice(1, 6)) {
  const m = h.match(new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">([\\s\\S]*?)</p>`));
  if (!m) { e(`answer-first: ${hd}`); continue; }
  const n = wc(txt(m[1]));
  if (n < 6 || n > 60) e(`direct answer of "${hd}": ${n} words`);
}
const steps = [...(main.match(/Как выглядит сотрудничество\?[\s\S]*?<\/table>/) || [''])[0].matchAll(/<tr>/g)].length;
if (steps !== 6) e('steps table: header + 5 rows');
// parity of the facts with the Czech page
const par = [['16', '16'], ['14 из 16', '14 z nich'], ['5 сайтов', '5 webů'], ['65–70 %', '65–70 %'], ['31.10.2026', '31. 10. 2026'], ['24 часов', '24 hodin'], ['три', 'tři'], ['2 000 Kč', '2 000 Kč'], ['3 000 Kč', '3 000 Kč'], ['50 000 Kč', '50 000 Kč'], ['15 000 Kč', '15 000 Kč'], ['25.10.2026', '25. 10. 2026']];
for (const [r, c] of par) if (!mainTxt.includes(r) || !mainC.includes(c)) e(`parity: "${r}" (ru) and "${c}" (cs)`);
if (!mainTxt.includes('Статус для ниши бухгалтерии на 31.10.2026: свободно.') || /\d из 3/.test(mainTxt)) e('capacity status: dated, no counter');
if (!mainTxt.includes('март–сентябрь 2026')) e('translation case period');
// JSON-LD
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.filter((n) => n['@type'] === t);
const wp = by('WebPage').find((n) => n['@id'] === `${BASE}${URL_PATH}#webpage`);
const sv = by('Service').find((n) => n['@id'] === `${BASE}${URL_PATH}#service`);
if (!wp || wp.inLanguage !== 'ru' || wp.author['@id'] !== `${BASE}/#arsenii` || !wp.datePublished) e('WebPage');
if (!sv || sv.areaServed !== 'Praha' || sv.offers) e('Service: Praha, no Offer');
const fq = by('FAQPage')[0];
const visFaq = [...main.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/div>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 6 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage = the visible 6 questions');
for (const [i, q] of visFaq.entries()) { const n = wc(q[1]); if (n < 6 || n > 60) e(`FAQ ${i + 1} answer: ${n} words`); }
if (ld.some((n) => ['Offer', 'Quotation', 'VideoObject', 'HowTo', 'AggregateRating', 'Review'].includes(n['@type']))) e('no Offer / Quotation / video / HowTo / ratings / Review');
const bc = by('BreadcrumbList')[0];
if (!bc || bc.itemListElement.length !== 2) e('breadcrumb: Главная → the page');
// inbound links, sitemap, the switcher
if (!readFileSync('dist/ru/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('inbound link missing on the Russian home page');
if (!hc.includes(`href="${URL_PATH}"`)) e('the Czech page: language switcher leads to the Russian page');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (errors.length) { console.error('✗ check-niche-accounting-ru:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-accounting-ru: ok (${mainTxt.split(/\s+/).length} words)`);
