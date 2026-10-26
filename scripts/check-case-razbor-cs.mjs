// Post-build check of the Czech review /pripadove-studie/rozbor-webu-realitni-kancelare-praha/ (brief of 26.10.2026): meta limits, H1/H2 order, direct answers of 40-60 words,
// "Výsledky zatím nejsou" visible, anonymity (no names), no Quotation/Review/Service markup, FAQ = JSON-LD, links, hreflang pair with the Russian review, pointers from the landing page,
// the cases index and the consulting page.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/pripadove-studie/rozbor-webu-realitni-kancelare-praha/';
const RU_PATH = '/ru/kejsy/razbor-agentstvo-nedvizhimosti-praga/';
const H1 = 'Co jsem navrhl pro web malé realitní kanceláře v Praze?';
const TITLE = 'Rozbor webu realitní kanceláře v Praze | Eranosian';
const DESC = 'Rozbor webu malé pražské realitní kanceláře: co jsem viděl a co navrhl. Konzultace s auditem, prezentace 21.–22. 10. 2026. Více o konzultaci.';
const SECTIONS = [H1, 'Co chtěl majitel zjistit?', 'Jak konzultace s auditem probíhala?', 'Co jsem na webu viděl?', 'S kým malá kancelář soutěží?', 'Má malá realitní kancelář šanci na dotaz „ocenění nemovitosti“?', 'Které tři směry jsem navrhl?', 'Co obsahuje plán na 12 měsíců?', 'Co zatím nevíme?', 'Co z toho platí pro jinou malou kancelář?', 'Časté otázky', 'Související stránky', 'Chcete podobný rozbor svého webu?'];
const FORBIDDEN = ['garantuj', 'zaručeně', 'Kč', 'top 1', 'rychlé výsledky', 'případová studie s výsledky', 'Sreality', 'Bezrealitky', 'Reas', 'Seznam.cz', 'agentur'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);
const wc = (s) => s.split(/\s+/).filter(Boolean).length;

const h = readFileSync('dist/pripadove-studie/rozbor-webu-realitni-kancelare-praha/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (/případová studie|audit webu/i.test(title + ' ' + H1)) e('no "případová studie" / "audit webu" in Title / H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">')) e('og:type article');
if (/<meta name="robots"[^>]*noindex/.test(h)) e('page must be indexable');
// hreflang pair cs <-> ru (facts reconciled on 26.10.2026), no x-default to a missing version
if (!h.includes(`hreflang="cs" href="${BASE}${URL_PATH}"`) && !h.includes(`hreflang="cs-CZ" href="${BASE}${URL_PATH}"`)) e('hreflang self-reference');
if (!h.includes(`href="${BASE}${RU_PATH}"`)) e('hreflang pair with the Russian review');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
if (!/Rozbor, ne výsledkový případ/.test(main.slice(0, main.indexOf('<h1')))) e('visible label "Rozbor, ne výsledkový případ" next to the H1');
if (!/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno <time datetime="\d{4}-\d{2}-\d{2}">[^<]+<\/time> · Konzultace s auditem, prezentace 21\.–22\. 10\. 2026\. Výsledky zatím nejsou\./.test(h)) e('byline');
if (!/class="card no-results"[\s\S]*?Výsledky zatím nejsou/.test(main)) e('"Výsledky zatím nejsou" block');
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
if (/<form|<video|★|AggregateRating|ratingValue|<blockquote|\[\?\]|class="btn/.test(main)) e('no form / video / stars / quote / buttons / [?] markers');
if (/GEO(?!\/AEO)/.test(mainTxt)) e('bare GEO');
// Direct answers (40-60 words): lead + one under every question H2
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (wc(lead) < 40 || wc(lead) > 60) e(`lead: ${wc(lead)} words`);
for (const hd of SECTIONS.slice(1, 10)) {
  const m = h.match(new RegExp(`${hd.replace(/[?.:„“]/g, '\\$&')}</h2>\\s*(?:<div class="card no-results">\\s*<p class="eyebrow">[^<]*</p>\\s*)?<p class="answer">([\\s\\S]*?)</p>`));
  if (!m) { e(`answer-first: ${hd}`); continue; }
  const n = wc(txt(m[1]));
  if (n < 40 || n > 60) e(`direct answer of "${hd}": ${n} words`);
}
// Table (header + 4 rows), 3 slides with alt + caption, 4 bullets, 3 H3 directions
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 5 || rows[0].join('|') !== 'Nález|Návrh') e('table "Nález → Návrh": header + 4 rows');
const slides = [...main.matchAll(/<img src="\/images\/razbor-cs-slide-\d\.webp"[^>]*alt="Ukázka z prezentace[^"]+"/g)];
if (slides.length !== 3 || !mainTxt.includes('Ukázky z prezentace, říjen 2026, údaje klienta skryté.')) e('3 slides with alt text and the caption');
if ([...(main.match(/<ul class="checks">[\s\S]*?<\/ul>/) || [''])[0].matchAll(/<li>/g)].length !== 4) e('4 bullets');
const h3s = [...main.matchAll(/<h3>([\s\S]*?)<\/h3>/g)].map((m) => txt(m[1]));
if (!['Úzké a dlouhé dotazy', 'Obsah odpovídající na otázky majitelů', 'Anglická verze webu'].every((x) => h3s.includes(x))) e('three H3 directions');
// Links: landing page, consulting (H2-2 + CTA), free audit (FAQ 1 + CTA), cases index; no blog links, no maps service
for (const l of ['/seo-pro-realitni-kancelare-praha/', '/konzultace/', '/audit-zdarma/', '/pripadove-studie/']) if (!h.includes(`href="${l}"`)) e(`missing link ${l}`);
if ((main.match(/href="\/konzultace\/"/g) || []).length < 3 || (main.match(/href="\/audit-zdarma\/"/g) || []).length < 3) e('consulting and audit links (H2-2 / related / CTA, FAQ 1 / related / CTA)');
if (/href="\/(?:en\/|ru\/)?blog\/|lokalni-seo-mapy/.test(main)) e('no blog links, no maps service link');
// JSON-LD
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const node = (t) => g.filter((n) => n['@type'] === t);
const U = BASE + URL_PATH;
const post = node('BlogPosting')[0];
if (!post || post['@id'] !== `${U}#article` || post.headline !== H1 || post.author['@id'] !== `${BASE}/#arsenii` || post.datePublished !== '2026-10-26' || post.dateModified !== h.match(/Aktualizováno <time datetime="([^"]+)"/)[1]) e('BlogPosting');
const wp = node('WebPage')[0];
if (!wp || wp.mainEntity['@id'] !== `${U}#article` || wp.name !== title || wp.description !== desc) e('WebPage');
const bc = node('BreadcrumbList')[0];
if (!bc || bc.itemListElement.map((i) => i.name).join(' > ') !== `Domů > Případové studie > ${H1}`) e(`BreadcrumbList: ${bc && bc.itemListElement.map((i) => i.name).join(' > ')}`);
const faq = node('FAQPage')[0];
const visFaq = [...main.match(/<div class="faq-open">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/)[0].matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!faq || faq.mainEntity.length !== 5 || faq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage must equal the visible FAQ (5 questions)');
for (const [i, q] of visFaq.entries()) { const n = wc(q[1]); if (n < 40 || n > 60) e(`FAQ ${i + 1} answer: ${n} words`); }
if (g.some((n) => ['Review', 'AggregateRating', 'Quotation', 'Product', 'Offer', 'HowTo', 'VideoObject', 'Service'].includes(n['@type']))) e('forbidden JSON-LD types');
// Pointers and index
const landing = readFileSync('dist/seo-pro-realitni-kancelare-praha/index.html', 'utf8');
if (!landing.includes(`href="${URL_PATH}"`) || !txt(landing).includes('Výsledky v této nice zatím nejsou.') || landing.includes('Moje pozorování')) e('landing page: pointer to the review instead of "Moje pozorování"');
if (!/href="\/pripadove-studie\/rozbor-webu-realitni-kancelare-praha\/"[\s\S]{0,2500}Rozbor, bez výsledků/.test(readFileSync('dist/pripadove-studie/index.html', 'utf8'))) e('cases index card "Rozbor, bez výsledků"');
if (!readFileSync('dist/konzultace/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('consulting page links to the review');
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`${BASE}${URL_PATH}`)) e('the page must be in the sitemap');
if (mainTxt.split(/\s+/).length < 600) e(`too short: ${mainTxt.split(/\s+/).length} words`);

if (errors.length) {
  console.error(`\nCzech review check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`✓ check-case-razbor-cs: ok (${mainTxt.split(/\s+/).length} words)`);
