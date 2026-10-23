// Post-build check of the English consulting page /en/consulting/ (brief of 23.10.2026): no video anywhere, meta lengths, section order, prices in CZK equal
// in the text and in JSON-LD, FAQ = JSON-LD, hreflang trio, no guarantees / "agency" about the author / HowTo / video markup.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/en/consulting/';
const TITLE = 'SEO Consultation Prague: 1 Hour or Audit + Plan | Eranosian';
const DESC = 'SEO consulting in Prague, online or in person: answers to your questions in one hour, or a full site review with a 12-month action plan. Book a consultation.';
const H1 = 'SEO consulting in Prague';
const SECTIONS = [H1, 'How much does an SEO consultation cost?', 'Who is an SEO consultation for?', 'What is included in an SEO consultation?', 'How does an SEO consultation work?', 'Online or in person in Prague?', 'Consultation or ongoing work?', 'What is not included in the consultation?', 'What did SEO work change for clients?', 'What clients say', 'Frequently asked questions', 'Send an enquiry', 'Other services'];
const LINKS = ['/en/free-audit/', '/en/3-month-start/', '/en/full-seo/', '/en/maps/', '/en/seo-and-geo/', '/en/faq/', '/en/reviews/', '/en/case-studies/seo-translation-agency-4-months/'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/en/consulting/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 160) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (/free|24 hours|guarantee/i.test(title + ' ' + desc)) e('no "free" / "24 hours" / guarantees in the meta');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes(`<meta property="og:title" content="${TITLE}">`) || !h.includes(`<meta property="og:description" content="${DESC}">`)) e('og:title / og:description equal to the Title and Description');
const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + ' ' + m[2]);
if (JSON.stringify(alts) !== JSON.stringify([`cs ${BASE}/konzultace/`, `en ${BASE}${URL_PATH}`, `ru ${BASE}/ru/konsultacii/`, `x-default ${BASE}/konzultace/`])) e('hreflang trio: ' + JSON.stringify(alts));
for (const [f, what] of [['dist/konzultace/index.html', 'cs'], ['dist/ru/konsultacii/index.html', 'ru']]) if (!readFileSync(f, 'utf8').includes(`hreflang="en" href="${BASE}${URL_PATH}"`)) e(`the ${what} page must point back to the English one`);
// No video at all on this page (the file stays on the server for cs and ru)
if (/<video|intro\.mp4|<figure class="hero-video"|VideoObject|"Clip"|watch (?:the )?video|video below/i.test(h)) e('no video: no <video>, intro.mp4, caption, VideoObject or Clip');
if (/<video|intro\.mp4|<video:/i.test(readFileSync('dist/sitemap.xml', 'utf8'))) e('no video entries in the sitemap');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
if (!/Updated: <time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time> · Duration: One-off or recurring/.test(h)) e('visible "Updated: dd.mm.yyyy · Duration: One-off or recurring"');
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
// Hero: the two buttons, no empty video column
const hero = main.slice(0, main.indexOf('How much does an SEO consultation cost?'));
if (!/href="#form">Book a consultation<\/a>/.test(hero) || !/href="\/en\/free-audit\/">Free audit<\/a>/.test(hero)) e('hero buttons: Book a consultation (#form) and Free audit');
if (/hero-split/.test(hero)) e('the hero must not keep the video column');
// Direct answers under the question H2s
for (const hd of SECTIONS.slice(1, 8)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*(?:<p class="muted small price-note">[^<]*</p>\\s*)?<p class="answer">`).test(h) && !new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
// Prices
if (!mainTxt.includes('2,000 CZK') || !mainTxt.includes('3,000 CZK') || !mainTxt.includes('approx. €80') || !mainTxt.includes('approx. €120')) e('prices 2,000 / 3,000 CZK and the approximate euro amounts');
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 2) e('two tables: the two formats and the three paths');
// Wording rules
if (/\bagency\b/i.test(mainTxt.replace(/Translation agency with three branches/g, '').replace(/Make Up Digital Agency|partner digital agency|digital agency/gi, ''))) e('"agency" is not used about the author');
if (/not more than three|no more than three|three firms/i.test(mainTxt)) e('the niche capacity rule is not used here');
if (/guarantee(?!d? rankings)/i.test(mainTxt.replace(/I do not guarantee rankings, traffic or enquiries/g, ''))) e('no guarantees');
if (!mainTxt.includes('about 8× those of May (the four-month case window)') || /real figure higher/i.test(mainTxt)) e('case line: variant A with the window, no "real figure higher"');
// JSON-LD
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.filter((n) => n['@type'] === t);
const wp = by('WebPage').find((n) => n['@id'] === `${BASE}${URL_PATH}#webpage`);
const sv = by('Service').find((n) => n['@id'] === `${BASE}${URL_PATH}#service`);
if (!wp || wp.name !== TITLE || wp.inLanguage !== 'en' || wp.description !== DESC) e('WebPage');
if (!sv || sv.serviceType !== 'SEO consultation' || sv.offers.length !== 2 || sv.offers.map((o) => `${o.price} ${o.priceCurrency}`).join('|') !== '2000 CZK|3000 CZK') e('Service with two Offers in CZK');
if (JSON.stringify(sv?.areaServed) !== JSON.stringify([{ '@type': 'City', name: 'Prague' }, { '@type': 'Country', name: 'Czechia' }])) e('areaServed Prague, Czechia');
const fq = by('FAQPage')[0];
const visFaq = [...main.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/div>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 7 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage = the visible 7 questions');
if (ld.some((n) => ['VideoObject', 'Clip', 'HowTo', 'AggregateRating'].includes(n['@type']))) e('no VideoObject / Clip / HowTo / AggregateRating');
if (!/<option value="consulting" selected/.test(h)) e('the form pre-selects Consulting');
const bc = by('BreadcrumbList')[0];
if (!bc || bc.itemListElement.map((x) => x.name).join('|') !== 'Home|Consulting') e('breadcrumb Home → Consulting: ' + JSON.stringify(bc?.itemListElement?.map((x) => x.name)));
// Links from the other English pages
for (const [f, what] of [['dist/en/free-audit/index.html', 'free audit'], ['dist/en/3-month-start/index.html', '3-month start'], ['dist/en/full-seo/index.html', 'Full SEO'], ['dist/en/faq/index.html', 'FAQ'], ['dist/en/index.html', 'home']]) if (!readFileSync(f, 'utf8').includes(`href="${URL_PATH}"`)) e(`link to the consultation missing on ${what}`);
const wc = mainTxt.split(/\s+/).length;
if (wc < 900) e(`too short: ${wc} words`);

if (errors.length) { console.error('✗ check-consulting-en:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-consulting-en: ok (${wc} words)`);
