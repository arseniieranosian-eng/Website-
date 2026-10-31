// Post-build check of the blog article /blog/prazske-mestske-casti-a-ctvrti-web-realitni-kancelare/ (cs, brief N9 of 31.10.2026): meta (title <= 55, description <= 150, no call to action), H1 and H2 order,
// direct answers of 40-60 words, the list of the 57 city sections (22 linked to metropolevsech.eu), one link to N6, one CTA button to the Prague landing page, FAQ = JSON-LD, forbidden text (no prices / services /
// guarantees / portals), JSON-LD without HowTo / Offer / ratings / Quotation, inbound links (the Prague landing page and N6).
import { readFileSync, existsSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/blog/prazske-mestske-casti-a-ctvrti-web-realitni-kancelare/';
const H1 = 'Jak uvést pražské městské části a čtvrti na webu realitní kanceláře?';
const TITLE = 'Městské části Prahy na webu realitky | Eranosian';
const DESC = 'Jak označit pražské lokality na webu realitní kanceláře, aby stránky lokalit nebyly šablonové: městské části, jejich názvy a struktura stránek.';
const SECTIONS = [H1, 'Jak se v Praze označují území a čím se liší?', 'Jak má stránka lokality v Praze vypadat?', 'Jak psát názvy: oficiálně, nebo tak, jak lidé mluví?', 'Jakým chybám se u pražských lokalit vyhnout?', 'Jak lokality zapsat do struktury webu?', 'Časté otázky'];
const FORBIDDEN = ['garantuj', 'zaručeně', 'Kč', 'SEO agentur', 'první místo', 'top 1', 'rychle', 'Sreality', 'Bezrealitky', 'Reas', 'nejlepší čtvrť', 'kde bydlet', 'Statut', 'Vinohrady', 'Smíchov', 'Žižkov', 'Brno'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const wc = (s) => s.split(/\s+/).filter(Boolean).length;
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/blog/prazske-mestske-casti-a-ctvrti-web-realitni-kancelare/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150 || /Požádejte|Objednejte|Kontaktujte/i.test(desc) || /\d/.test(desc)) e(`description: ${desc} (${desc.length})`);
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type article / og:locale');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/blog/og-prazske-mestske-casti-a-ctvrti-web-realitni-kancelare.png">`)) e('og:image');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('Czech-only page: no hreflang alternates');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
// links: one source link (the list), one link to N6, one button to the Prague landing page; no other service links
if ((main.match(/href="\/blog\/stranky-ctvrti-a-lokalit-realitni-kancelare\/"/g) || []).length !== 1) e('exactly one link to N6');
if ((main.match(/href="\/seo-pro-realitni-kancelare-praha\/"/g) || []).length !== 1 || (main.match(/class="btn /g) || []).length !== 1) e('exactly one CTA button to the Prague landing page');
if ((main.match(/href="https:\/\/metropolevsech\.eu\/[^"]+"/g) || []).length !== 22) e('22 links to metropolevsech.eu (Praha 1–22)');
if (/href="\/(?:audit-zdarma|konzultace|start-3-mesice|full-seo|lokalni-seo-mapy)\//.test(main)) e('no links to the other services / audit');
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
if (/<form|<video|★|AggregateRating|ratingValue|<blockquote|\[\?\]|\[počet\]/.test(main)) e('no form / video / stars / quote / placeholder');
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt) || /GEO(?!\/AEO)/.test(mainTxt)) e('"agentura" about the author / bare GEO');
if (!/<img class="post-cover" src="\/images\/blog\/prazske-mestske-casti-a-ctvrti-web-realitni-kancelare\.webp" width="1200" height="630" alt="Ilustrace:[^"]+"/.test(main) || main.indexOf('post-cover') > main.indexOf('<h1')) e('cover illustration before the H1');
if (!/<a class="card card--link post-card" href="\/blog\/mestske-casti[^>]*>\s*<img class="post-card-img"/.test(readFileSync('dist/blog/index.html', 'utf8'))) e('blog card with the cover');
if (!/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">[^<]+<\/time> · Čtení: \d+ min/.test(h)) e('byline');
// lead (2 sentences) and direct answers 40-60 words
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if ((lead.match(/[.!?](\s|$)/g) || []).length !== 2) e(`lead: two sentences expected: ${lead}`);
for (const hd of SECTIONS.slice(1, 6)) {
  const m = h.match(new RegExp(`${hd.replace(/[?.:,]/g, '\\$&')}</h2>\\s*<p class="answer">([\\s\\S]*?)</p>`));
  if (!m) { e(`answer-first: ${hd}`); continue; }
  const n = wc(txt(m[1]));
  if (n < 6 || n > 60) e(`direct answer of "${hd}": ${n} words`);
}
// the list of the 57 city sections: Praha 1–22 (linked) + 35 with their own names; the number 57 in F4
const names = [...main.matchAll(/<ul class="checks districts-list">([\s\S]*?)<\/ul>/g)].flatMap((m) => [...m[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((x) => txt(x[1])));
if (names.length !== 57 || new Set(names).size !== 57 || names.filter((x) => /^Praha \d+$/.test(x)).length !== 22) e(`list of the city sections: ${names.length}`);
if ((main.match(/<li><a href="https:\/\/metropolevsech\.eu\/[^"]+" rel="noopener">Praha \d+<\/a><\/li>/g) || []).length !== 22) e('Praha 1–22 link to their pages');
if (!/má Praha 57 městských částí/.test(mainTxt)) e('the number 57 in the FAQ');
// JSON-LD equals the visible text
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const node = (t) => g.filter((n) => n['@type'] === t);
const U = BASE + URL_PATH;
const post = node('BlogPosting')[0];
if (!post || post['@id'] !== `${U}#article` || post.headline !== H1 || post.author['@id'] !== `${BASE}/#arsenii` || post.datePublished !== '2026-10-31' || post.dateModified !== h.match(/Aktualizováno: <time datetime="([^"]+)"/)[1]) e('BlogPosting');
const wp = node('WebPage')[0];
if (!wp || wp['@id'] !== `${U}#webpage` || wp.inLanguage !== 'cs' || wp.name !== title || wp.description !== desc) e('WebPage');
const bc = node('BreadcrumbList')[0];
if (!bc || bc.itemListElement.length !== 3) e('BreadcrumbList: Domů, Blog, article');
const faq = node('FAQPage')[0];
const visFaq = [...main.match(/<div class="faq-open">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/)[0].matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!faq || faq.mainEntity.length !== 4 || faq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ (4 questions)');
for (const [i, q] of visFaq.entries()) { const n = wc(q[1]); if (n < 6 || n > 60) e(`FAQ ${i + 1} answer: ${n} words`); }
if (g.some((n) => ['HowTo', 'Service', 'Offer', 'AggregateRating', 'Review', 'Quotation', 'VideoObject', 'Product', 'LocalBusiness'].includes(n['@type']))) e('no HowTo / Service / Offer / rating / Quotation / VideoObject markup');
if (existsSync('dist/en/blog/prague-districts-on-a-real-estate-agency-website') || existsSync('dist/ru/blog/prazhskie-rajony-na-sajte-agentstva-nedvizhimosti')) e('no en/ru versions');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`${BASE}${URL_PATH}`)) e('the page must be in the sitemap');
// inbound links: the Prague landing page (Další články) and N6 (one link)
if (!readFileSync('dist/seo-pro-realitni-kancelare-praha/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('the Prague landing page links to the article');
if ((readFileSync('dist/blog/stranky-ctvrti-a-lokalit-realitni-kancelare/index.html', 'utf8').match(new RegExp(`href="${URL_PATH}"`, 'g')) || []).length !== 1) e('N6 links to the article once');

if (errors.length) {
  console.error(`\nN9 article check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`✓ check-post-realty-prague-districts-cs: ok (${mainTxt.split(/\s+/).length} words)`);
