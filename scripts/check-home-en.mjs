// Post-build check of the English home page /en/ against its brief of 21.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const H1 = 'English-speaking SEO specialist in Prague: enquiries from Google, Seznam and AI';
const TITLE = 'SEO & GEO/AEO Specialist in Prague | Arsenii Eranosian';
const DESC = 'English-speaking SEO and GEO/AEO specialist in Prague for Google, Seznam and AI search. Start with a free technical audit: no call, no obligation.';
const SECTIONS = [H1, 'Results with a method and a source', 'Which service fits you?', 'Why search in Czechia needs local knowledge', 'How do SEO and GEO/AEO work together?', 'Case studies', 'What clients say', 'Frequently asked questions', 'About me', 'Find out whether your site has technical errors'];
const LINKS = ['/en/free-audit/', '/en/consulting/', '/en/3-month-start/', '/en/full-seo/', '/en/maps/', '/en/seo-and-geo/', '/en/case-studies/', '/en/reviews/', '/en/faq/', '/en/about/', '/en/contact/', '/en/privacy-policy/'];
const FORBIDDEN = ['we guarantee', 'guaranteed results', 'Years in SEO', '55–60', '×8', '×24', '8×', '6×', '300×', 'ChatGPT and AI Overviews', 'free audit and a short call', '4–8 weeks', 'page one', 'SEO agency', '/blog'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/en/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 160) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Arsenii Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}/en/">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="website">')) e('og:type website');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/og-home-en.png">`)) e('og:image');
for (const [l, u] of [['cs', '/'], ['en', '/en/'], ['ru', '/ru/'], ['x-default', '/']]) if (!h.includes(`<link rel="alternate" hreflang="${l}" href="${BASE}${u}">`)) e(`hreflang ${l}`);
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
// "agency" only inside the case name ("Translation agency"); the company is never called an agency, never "we"
if (/agency/i.test(mainTxt.replace(/[Tt]ranslation agency/g, ''))) e('the word "agency" must not be used about myself');
if (/\bWe (are|help|do|offer|work|provide)\b/.test(mainTxt)) e('"I", not "we"');
for (const f of FORBIDDEN) if (mainTxt.includes(f) || desc.includes(f) || title.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/★|AggregateRating|ratingValue/.test(h)) e('no stars / AggregateRating');
if (/<ul class="checks">/.test(main.split('Results with a method')[0])) e('the hero list of audit scope must be gone');

// Hero: direct answer, photo + name, two buttons, form with the note
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (lead !== 'I am Arsenii Eranosian, an English-speaking SEO and GEO/AEO specialist in Prague. I help businesses in Czechia get found in Google, Seznam and AI answers, working in English, Czech or Russian. Start with a free technical audit: no call and no obligation.' || words < 35 || words > 60) e(`hero answer (${words} words)`);
if (!/class="hero-person"[\s\S]*?Arsenii Eranosian[\s\S]*?SEO specialist in Prague/.test(main)) e('hero: photo, name, role');
if (!/<a class="btn btn--primary btn--lg" href="\/en\/free-audit\/">Get my free audit<\/a>/.test(main) || !/btn--secondary btn--lg" href="\/en\/consulting\/">Book a consultation<\/a>/.test(main)) e('hero buttons');
if (!/<input[^>]*name="website"/.test(h)) e('hero form');
for (const o of ['Free SEO audit', 'Consulting', '3-month start', 'Full SEO', 'Maps', 'Other']) if (!h.includes(`>${o}`)) e(`form option: ${o}`);
if (!mainTxt.includes('I check technical errors such as indexing and duplicate pages. You receive a short presentation within 24 hours, with no call and no obligation.')) e('text under the form');

// Trust bar: 4 tiles with periods, right after the hero
const tb = main.indexOf('class="trust-bar"');
const tiles = [...(main.match(/<dl class="stats[^"]*">[\s\S]*?<\/dl>/) || [''])[0].matchAll(/<dt>([\s\S]*?)<\/dt><dd>([^<]*)<\/dd>/g)].map((m) => txt(m[1]) + ' | ' + norm(m[2]));
if (tb < 0 || !(main.indexOf('class="hero') < tb) || tb > main.indexOf('Which service fits you?') || tiles.length !== 4) e('trust bar: four HTML tiles right after the hero');
const need = ['print shop, July 2024 → July 2025', 'educational platform, March → September 2025 (7 months), relative data from the low base of a new site', 'translation agency, March–September 2026', 'Czech, Russian, Bulgarian, Indian'];
for (const n of need) if (!tiles.some((x) => x.includes(n))) e(`trust tile: ${n}`);
if (!tiles.some((x) => /\+775/.test(x)) || !tiles.some((x) => /\+55/.test(x)) || !tiles.some((x) => /65–70/.test(x) && /tripled/.test(x))) e('trust tile figures');
if (!mainTxt.includes('Data are relative, clients anonymous, results as of the end of each project.')) e('trust note');

// Hub table: five services, no prices, links to the EN pages
const tbl = (main.match(/Which service fits you\?[\s\S]*?<\/table>/) || [''])[0];
const rows = [...tbl.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 6 || rows[0].join('|') !== 'Service|What it is|Best for|Time' || !rows.slice(1).map((r) => r[0]).join('|').startsWith('Free audit|Consulting|3-month start|Full SEO|Maps')) e(`hub table: ${JSON.stringify(rows.map((r) => r[0]))}`);
if (/[€$]|Kč|CZK|\bEUR\b/.test(tbl) || /(\d[\d,. ]*)\s?(Kč|CZK|EUR)/.test(mainTxt)) e('no prices on the home page');
if (!mainTxt.includes('GEO/AEO is included in every service. Results depend on niche, competition and the starting point and cannot be guaranteed.')) e('hub note');
// Answer-first
for (const [hd, ans] of [['Which service fits you?', 'Start with a free technical audit'], ['Why search in Czechia needs local knowledge', 'Czech customers search in Google, Seznam and Mapy.com'], ['How do SEO and GEO/AEO work together?', 'SEO helps your pages rank']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="(answer|lead)">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
// GEO platforms list and link
if (!/<ul class="checks">(?:<li>(?:Google|Seznam|ChatGPT|Gemini|Perplexity|AI Overviews)<\/li>){6}<\/ul>/.test(main)) e('platform list');
// Cases: three cards, formulas, links to the EN case list
const cases = (main.match(/<h2>Case studies<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...cases.matchAll(/<a class="card card--link" href="\/en\/case-studies\/"/g)].length !== 3) e('three case cards linking to /en/case-studies/');
for (const f of ['Enquiries up 65–70 % month over month for three months in a row, B2B enquiries tripled, AI Overview visibility', 'Organic traffic +775 %, July 2024 → July 2025 (1,200 → 10,500 visits per month)', '+55 % organic traffic, March → September 2025 (7 months), relative data from the low base of a new site']) if (!txt(cases).includes(f)) e(`case formula: ${f}`);
// One pull quote between the cases and the reviews, signed with a link to /en/about/
const Q = 'SEO is not about activity, it is about priorities. First remove what stops Google understanding the site, then build the architecture around the business, then scale content.';
if (!(mainTxt.indexOf('All case studies') < mainTxt.indexOf(Q) && mainTxt.indexOf(Q) < mainTxt.indexOf('What clients say'))) e('quote between the cases and the reviews');
if ([...main.matchAll(/<blockquote class="pullquote">/g)].length !== 1 || !/<cite><a href="\/en\/about\/">Arsenii Eranosian<\/a><span>SEO and GEO\/AEO specialist<\/span><\/cite>/.test(main)) e('one signed quote');
// Reviews from the shared source: no partner-agency review, no figures
const rv = (main.match(/What clients say[\s\S]*?<\/section>/) || [''])[0];
if (!/class="card review"/.test(rv) || /Make Up|6×|300×/.test(rv)) e('reviews block from the shared source');
// FAQ
const FAQ = [['What does the free audit cover?', 'A check of technical errors: indexing, duplicate pages and other technical problems. You receive a short presentation within 24 hours, with no call and no obligation. It does not cover keywords, competitors, maps, AI visibility, speed or mobile.'], ['How soon will I see results?', 'Technical fixes can show an effect within weeks, and the first results of ongoing work usually appear in 2–3 months.'], ['What is the difference between SEO and GEO/AEO?', 'SEO helps pages rank in Google and Seznam.'], ['How does working together look?', 'It starts with a free audit'], ['Do you work with English-speaking clients and the Czech market?', 'Yes. I work in English, Czech and Russian'], ['Which languages do you work in?', 'English, Czech and Russian.']];
for (const [q, a] of FAQ) if (!mainTxt.includes(q) || !mainTxt.includes(a)) e(`FAQ: ${q}`);
if (!mainTxt.includes('Arsenii Eranosian, SEO and GEO/AEO specialist in Prague. I work personally with each client in English, Czech or Russian.')) e('about');
if (!mainTxt.includes('A free audit shows technical errors: indexing, duplicate pages and other technical problems. A short presentation arrives within 24 hours, with no call and no obligation.')) e('final CTA text');
if (!/btn--primary btn--lg" href="\/en\/free-audit\/">Get a free audit<\/a>/.test(main) || !/btn--ghost-light btn--lg" href="\/en\/contact\/">Get in touch<\/a>/.test(main)) e('final CTA buttons');
const date = h.match(/Updated: <time datetime="([^"]+)">([^<]+)<\/time>/);

// JSON-LD
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = ld.find((n) => n['@type'] === 'WebPage' && n['@id'] === `${BASE}/en/#webpage`), fq = by('FAQPage');
const qn = ld.filter((n) => n['@type'] === 'Quotation');
if (!wp || norm(wp.name) !== title || norm(wp.description) !== desc || wp.inLanguage !== 'en' || wp.url !== `${BASE}/en/`) e('WebPage name / description / inLanguage / url');
if (qn.length !== 1 || qn[0]['@id'] !== `${BASE}/en/#quote-1` || qn[0].text !== Q || qn[0].inLanguage !== 'en' || qn[0].isPartOf['@id'] !== `${BASE}/en/#webpage` || qn[0].creator['@id'] !== `${BASE}/#arsenii`) e('Quotation #quote-1');
if (ld.some((n) => ['AggregateRating', 'Review', 'BreadcrumbList', 'Offer'].includes(n['@type']))) e('home markup: no ratings / reviews / breadcrumb / offers');
if (!date || !wp || date[1] !== wp.dateModified) e('dateModified must match the visible date');
if (!fq || fq.mainEntity.length !== 6 || !fq.mainEntity.every((q) => body.includes(norm(q.name)) && body.includes(norm(q.acceptedAnswer.text)))) e('6 FAQ Q/A not visible verbatim');
if (/agency/i.test(JSON.stringify([wp])) ) e('"agency" must not appear in the page markup');
const robots = readFileSync('dist/robots.txt', 'utf8');
if (/User-agent: (GPTBot|ClaudeBot|PerplexityBot)[\s\S]{0,40}Disallow: \//.test(robots)) e('robots.txt must not block AI bots');

if (errors.length) { console.error(`\nEnglish home page check failed (${errors.length}):\n- ` + errors.join('\n- ')); process.exit(1); }
console.log('English home page check passed: en.');
