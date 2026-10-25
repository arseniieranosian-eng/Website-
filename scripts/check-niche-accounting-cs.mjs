// Post-build check of the niche landing page /seo-pro-ucetni-kancelare-praha/ (cs, brief of 23.10.2026): meta, section order, answer-first, the two tables, the checklist, no prices,
// no search volumes, no guarantees, no "agentura" about the author, FAQ = JSON-LD, no Offer / Quotation / video / HowTo, no hreflang (Czech only), inbound links.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/seo-pro-ucetni-kancelare-praha/';
const H1 = 'SEO pro účetní kanceláře v Praze';
const TITLE = 'SEO pro účetní kanceláře Praha | Eranosian';
const DESC = 'Dělám SEO a GEO/AEO pro účetní kanceláře v Praze: stránky služeb, FAQ a struktura webu. Začněte bezplatným auditem technických chyb.';
const SECTIONS = [H1, 'Jak klienti hledají účetní?', 'Proč web účetní kanceláře často nepřináší poptávky z vyhledávání?', 'Co potřebuje web účetní kanceláře?', 'Co znamená GEO/AEO pro účetní kancelář?', 'Jak spolupráce vypadá?', 'Kolik to stojí a kdy přijdou první výsledky?', 'Jaké mám zkušenosti s tímto oborem?', 'Pro koho SEO dává smysl a pro koho ne?', 'Časté otázky', 'Požádejte o bezplatný audit technických chyb'];
const LINKS = ['/audit-zdarma/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/seo-a-geo/', '/pripadove-studie/seo-prekladatelska-agentura/', '/o-mne/'];
const FORBIDDEN = ['více klientů', 'garantovaně', 'za 24 hodin', 'top 1', 'první místo', 'SEO agentur', 'Max 3', 'Kč', 'Sklik:', ' my ', 'AggregateRating', 'reels', 'rilsu', 'reel'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/seo-pro-ucetni-kancelare-praha/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (/více klientů|garantovaně|za 24 hodin/i.test(title + ' ' + desc)) e('no "více klientů / garantovaně / za 24 hodin" in the meta');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('Czech only, indexable, no hreflang');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/(?:en\/|ru\/)?blog\/(?!jak-ziskat-klienty-pro-ucetni-kancelar\/")|<form|\/seo-pro-prekladatelske|\/seo-pro-realitni/.test(main)) e('no blog links, no form, no links to the other niche landing pages');
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt)) e('"agentura" about the author');
if (/GEO(?!\/AEO)/.test(mainTxt)) e('"GEO" only together with AEO');
if (!/Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">\d{1,2}\. \d{1,2}\. \d{4}<\/time>/.test(h)) e('visible date');
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead !== 'Dělám SEO a GEO/AEO pro účetní kanceláře v Praze. Pomáhám webu, aby ho vyhledávače i odpovědi AI chápaly jako konkrétní služby, ne jednu obecnou stránku. Začínáme bezplatným auditem technických chyb. Pozice ani poptávky neslibuji a v tomto oboru zatím nemám vlastní případovou studii.') e('hero lead');
const hero = main.slice(0, main.indexOf(SECTIONS[1]));
if (!/href="\/audit-zdarma\/">Požádat o bezplatný audit<\/a>/.test(hero) || !/href="\/konzultace\/">Konzultace<\/a>/.test(hero)) e('hero buttons');
for (const hd of SECTIONS.slice(1, 9)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
// Tables: queries (header + 5), formats (header + 5 with a link in every row)
const tbl = (from) => [...(main.match(new RegExp(`${from.replace(/[?.]/g, '\\$&')}[\\s\\S]*?</table>`)) || [''])[0].matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
const t1 = tbl('Jak klienti hledají účetní?');
if (t1.length !== 6 || t1[0].join('|') !== 'Typ dotazu|Příklad|Co člověk hledá') e('query table: header + 5 rows');
const t2 = tbl('Jak spolupráce vypadá?');
if (t2.length !== 6 || t2[0].join('|') !== 'Krok|Co obsahuje|Odkaz') e('formats table: header + 5 rows');
if (/\d[\d  ]*\s*(?:Kč|CZK|%)/.test(txt((main.match(/Jak klienti hledají účetní\?[\s\S]*?<\/table>/) || [''])[0]))) e('no search volumes or figures in the query table');
// Checklist of 6, the honest experience block, the capacity status
if ([...(main.match(/Co potřebuje web účetní kanceláře\?[\s\S]*?<\/ul>/) || [''])[0].matchAll(/<li>/g)].length !== 6) e('checklist of 6 items');
if (!mainTxt.includes('V oboru účetnictví zatím vlastní případovou studii nemám.') || !mainTxt.includes('tři měsíce po sobě rostly poptávky z formulářů o 65–70 % měsíc od měsíce a B2B poptávky se ztrojnásobily (březen až září 2026)') || /×8|×24|\+400/.test(mainTxt)) e('experience: own case missing said openly, the approved formula only');
if (!mainTxt.includes('Stav pro obor účetnictví k 23. 10. 2026: volno.') || /zbývá|\d ze 3/.test(mainTxt)) e('capacity status (volno, dated), no counter');
// JSON-LD
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.filter((n) => n['@type'] === t);
const wp = by('WebPage').find((n) => n['@id'] === `${BASE}${URL_PATH}#webpage`);
const sv = by('Service').find((n) => n['@id'] === `${BASE}${URL_PATH}#service`);
if (!wp || wp.name !== 'SEO pro účetní kanceláře Praha' || wp.description !== DESC || wp.about['@id'] !== sv?.['@id'] || wp.author['@id'] !== `${BASE}/#arsenii` || !wp.datePublished) e('WebPage');
if (!sv || sv.areaServed !== 'Praha' || sv.serviceType !== 'SEO a GEO/AEO pro účetní kanceláře' || sv.offers) e('Service: Praha, serviceType, no Offer');
const fq = by('FAQPage')[0];
const visFaq = [...main.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/div>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 6 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage = the visible 6 questions');
if (ld.some((n) => ['Offer', 'Quotation', 'VideoObject', 'HowTo', 'AggregateRating', 'Review'].includes(n['@type']))) e('no Offer / Quotation / video / HowTo / ratings / Review');
const bc = by('BreadcrumbList')[0];
if (!bc || bc.itemListElement.map((x) => x.name).join('|') !== `Domů|${H1}`) e('breadcrumb: Domů → the page');
// Inbound links, sitemap
for (const [f, what] of [['dist/index.html', 'home'], ['dist/audit-zdarma/index.html', 'free audit page']]) if (!readFileSync(f, 'utf8').includes(`href="${URL_PATH}"`)) e(`inbound link missing on the ${what}`);
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
const wc = mainTxt.split(/\s+/).length;
if (wc < 800) e(`too short: ${wc} words`);

if (errors.length) { console.error('✗ check-niche-accounting-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-accounting-cs: ok (${wc} words)`);
