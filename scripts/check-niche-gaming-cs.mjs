// Post-build check of the niche landing /seo-pro-pocitacove-herny-praha/ (cs, brief of 25.10.2026): meta, section order, answer-first, lists/tables, the gambling-ambiguity rule (no bare "herna"),
// nothing about minors, no prices / competitors / guarantees, no "agentura" about the author, FAQ = JSON-LD, Service without Offer, cs-only (no hreflang, no x-default), inbound links.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/seo-pro-pocitacove-herny-praha/';
const NAME = 'SEO a GEO/AEO pro počítačové herny v Praze'; // the breadcrumb label (META name)
const H1 = 'SEO a GEO/AEO pro počítačové herny v Praze: rezervace z Googlu a AI';
const TITLE = 'SEO pro počítačové herny a herní kluby | Eranosian';
const DESC = 'Dělám SEO a GEO/AEO pro počítačové herny a herní kluby v Praze: služby, tarify, rezervace, akce, FAQ. Bez slibů. Technický audit zdarma.';
const SECTIONS = [H1, 'Co pro počítačovou hernu dělám?', 'Pro koho je to a pro koho ne?', 'Co obsahuje bezplatný audit a co ne?', 'Jak spolupráce probíhá?', 'Časté otázky', 'Další krok'];
const LINKS = ['/audit-zdarma/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/seo-a-geo/', '/o-mne/'];
const FORBIDDEN = ['garantovaně', 'zaručeně', 'top 1', 'SEO agentur', 'Kč', 'nezletil', 'děti', 'dětsk', 'školák', 'věkov', 'narozenin', 'bezpečnost', 'hazard', 'sázk', 'AggregateRating', '12 webů', 'často nacház'];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/seo-pro-pocitacove-herny-praha/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 55 || title.length < 50) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1 || /Mapy/.test(title)) e('title must differ from H1 and not contain "Mapy"');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (/<meta name="robots"[^>]*noindex/.test(h)) e('indexable');
// hreflang pair cs ↔ ru (the Russian version exists since 25.10.2026; the site convention adds x-default = cs)
const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + ' ' + m[2]);
if (JSON.stringify(alts) !== JSON.stringify([`cs ${BASE}${URL_PATH}`, `ru ${BASE}/ru/seo-dlya-kompyuternyh-klubov-praga/`, `x-default ${BASE}${URL_PATH}`])) e('hreflang pair cs ↔ ru: ' + JSON.stringify(alts));
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
// Gambling ambiguity: every "herna" form must follow "počítačov…" (or be inside "herní"/"počítačov…" compounds); never a bare "herna"
for (const m of mainTxt.matchAll(/(\S+)\s+(hern[aeuy]\b|hernou|hernách|heren\b)/gi)) if (!/^počítačov/i.test(m[1]) && !/^(a|i)$/i.test(m[1])) e(`bare "herna": "${m[0]}"`);
for (const m of mainTxt.matchAll(/(^|[.?!:;]\s)(Herna|Herny|Hernu)\b/g)) e(`bare "herna" at the start of a sentence: ${m[0]}`);
if (/\b(herna|herny|hernu)\b/i.test(h1s[0] + ' ' + title + ' ' + desc) && !/počítačov/i.test(h1s[0])) e('bare "herna" in H1 / title / description');
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/(?:en\/|ru\/)?blog\/|<form|<video|<iframe|\/seo-pro-prekladatelske|\/seo-pro-realitni|\/seo-pro-ucetni|\/seo-pro-tiskarny|\/seo-pro-strojirenske/.test(main)) e('no blog links, no form / video / iframe, no links to the other niche landing pages');
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt)) e('"agentura" about the author');
if (/GEO(?!\/AEO)/.test(mainTxt)) e('"GEO" only together with AEO');
if (!/Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">\d{1,2}\. \d{1,2}\. \d{4}<\/time>/.test(h)) e('visible date');
if ((mainTxt.match(/esport aré/gi) || []).length > 2) e('"esport arény" at most twice (hero and "Pro koho")');
const cnt = (re) => (main.match(re) || []).length;
if (cnt(/href="\/audit-zdarma\/"/g) < 3 || cnt(/href="\/audit-zdarma\/"/g) > 4) e(`audit links: ${cnt(/href="\/audit-zdarma\/"/g)} (hero, audit section, CTA)`);
if (cnt(/href="\/konzultace\/"/g) !== 1 || cnt(/href="\/seo-a-geo\/"/g) !== 1 || cnt(/href="\/lokalni-seo-mapy\/"/g) !== 1) e('consulting / SEO a GEO/AEO / maps once each');
if (cnt(/href="\/start-3-mesice\/"/g) < 1 || cnt(/href="\/full-seo\/"/g) < 1) e('Start / Full SEO linked');
if (cnt(/class="btn btn--primary/g) !== 2) e('two buttons: hero and the closing CTA');
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (!lead.startsWith('Dělám SEO a GEO/AEO pro počítačové herny, herní kluby a esport arény v Praze') || !lead.endsWith('Zákazníky ani pozice negarantuji.')) e('hero lead');
for (const hd of SECTIONS.slice(1, 5)) if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
// Lists and tables
const lists = (re) => [...(main.match(re) || [, ''])[1].matchAll(/<li>/g)].length;
if (lists(/Co pro počítačovou hernu dělám\?[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) !== 6) e('what I do: 6 bullets');
if (lists(/Co se technicky kontroluje na webu počítačové herny:[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) !== 6) e('audit checklist: 6');
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 5 || rows[0].join('|') !== 'Co obsahuje|Co neobsahuje') e('audit table: header + 4 rows');
if (/Příklad auditu z příbuzného oboru|ukázk/i.test(mainTxt)) e('no audit-example link / video (the author has not decided)');
if (!mainTxt.includes('k 25. 10. 2026 je obor volný') || !mainTxt.includes('K 25. 10. 2026 je obor počítačových heren volný') || /\d ze 3|max\. ?3/i.test(mainTxt)) e('capacity lines, no counter');
// JSON-LD
const g = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => g.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList');
if (g.some((n) => ['AggregateRating', 'Review', 'VideoObject', 'HowTo', 'Quotation'].includes(n['@type']))) e('no AggregateRating / Review / VideoObject / HowTo / Quotation');
if (sv.offers || sv.areaServed.name !== 'Praha' || sv.provider['@id'] !== by('Person')['@id'] || sv.serviceType !== 'SEO a GEO/AEO' || sv.name !== 'SEO a GEO/AEO pro počítačové herny') e('Service');
if (wp.inLanguage !== 'cs' || wp.name !== H1 || wp.datePublished !== '2026-10-25' || wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#service` || !wp.isPartOf || wp.author['@id'] !== by('Person')['@id']) e('WebPage');
if (wp.dateModified !== h.match(/Aktualizováno: <time datetime="([^"]+)"/)[1]) e('dateModified = visible date');
const faqHtml = (main.match(/<div class="faq-open">[\s\S]*?<\/section>/) || [''])[0];
const visFaq = [...faqHtml.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 7 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage: 7 questions equal to the visible FAQ');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[1].name !== NAME) e('breadcrumbs: Domů → page');
// Inbound
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
if (!readFileSync('dist/index.html', 'utf8').includes(`href="${URL_PATH}"`)) e('home link');
if (readFileSync('dist/en/index.html', 'utf8').includes(URL_PATH)) e('the English home must not link the page');
if (errors.length) { console.error('✗ check-niche-gaming-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-gaming-cs: ok (${mainTxt.split(/\s+/).length} words)`);
