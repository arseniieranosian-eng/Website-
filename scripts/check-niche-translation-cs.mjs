// Post-build check of the niche landing page /seo-pro-prekladatelske-agentury-praha/ (cs, brief of 22.10.2026).
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/seo-pro-prekladatelske-agentury-praha/';
const H1 = 'SEO pro překladatelské agentury v Praze';
const TITLE = 'SEO a GEO/AEO pro překladatelské agentury Praha | Eranosian';
const DESC = 'Dělám SEO a GEO/AEO pro překladatelské agentury v Praze: jazykové páry, služby, B2B stránky. Začněte bezplatným auditem technických chyb.';
const SECTIONS = [H1, 'Proč překladatelské agentury potřebují SEO?', 'Co pro překladatelskou agenturu konkrétně dělám?', 'Jak to funguje v praxi? Případová studie', 'Jak spolupracuji s překladatelskými agenturami?', 'Co zahrnuje bezplatný audit?', 'Jaké formáty spolupráce existují?', 'Co říkají klienti?', 'Často kladené otázky', 'Zjistěte, jestli má váš web technické chyby'];
const LINKS = ['/audit-zdarma/', '/pripadove-studie/seo-prekladatelska-agentura/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/recenze/', '/o-mne/', '/kontakt/'];
const FORBIDDEN = ['garantuj', 'zaručeně', 'první místo', 'první pozice', '×8', '×24', '+400', 'SEO agentur', 'SEO překladatelské služby', 'jak získat klienty', ' my ', 'AggregateRating', '3 chyby', 'Kč', '5k'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/seo-pro-prekladatelske-agentury-praha/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const mainTxt = txt(main);
const body = txt(h);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== TITLE || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 160) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h) || /<meta name="robots"[^>]*noindex/.test(h)) e('Czech-only page, indexable, no hreflang');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x) || /přesto\.cz/.test(x));
const hsNoVideo = hs.filter((x) => !/přesto\.cz/.test(x));
if (JSON.stringify(hsNoVideo) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/blog\/|<form/.test(main)) e('no blog links / form on this page');
// "agentura" is never used about the author
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt)) e('"agentura" about the author');
// Hero: the direct answer, the date, the button; no quote, no numbers of the case
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead !== 'Dělám SEO a GEO/AEO pro překladatelské agentury v Praze. Stavím stránky jazykových párů, služeb pro firmy a měst, hlídám indexaci jazykových verzí a pracuji s Google Maps i Mapy.com. Začínáme bezplatným auditem technických chyb, bez hovoru a bez závazků. Prezentaci posílám do 24 hodin.') e('hero answer');
const heroEnd = main.indexOf(SECTIONS[1]);
const hero = main.slice(0, heroEnd);
if (/<blockquote|65–70|×3/.test(hero) || !/href="\/audit-zdarma\/">Chci bezplatný audit<\/a>/.test(hero)) e('hero: button, no quote, no case numbers');
if (!/Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">/.test(h)) e('visible date');
// Answer-first
for (const hd of SECTIONS.slice(1, 8)) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
}
// Case: approved formula only
if (!mainTxt.includes('rostly poptávky tři měsíce po sobě o 65–70 % měsíc po měsíci a B2B poptávky se zvýšily trojnásobně (březen–září 2026)')) e('case formula');
// Capacity rule: one source, the date, the three steps
if (!mainTxt.includes('Pracuji současně nejvýše se třemi firmami z jednoho oboru. Je to omezení kapacity, ne příslib výlučnosti') || !mainTxt.includes('Údaj platí k 22. 10. 2026')) e('capacity rule');
if (/zbývá|volných míst|\d ze 3/.test(mainTxt)) e('no counter / places left');
// Audit
if (!mainTxt.includes('Bezplatný audit zkontroluje technické chyby webu: indexaci, duplicitní obsah a další technické problémy.') || !mainTxt.includes('Výsledek dostanete jako krátkou prezentaci do 24 hodin')) e('audit wording');
// Formats table without prices
const rows = [...main.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (rows.length !== 5 || rows[0].join('|') !== 'Formát|Pro koho|Co zahrnuje') e('formats table (4 rows)');
// One quote after the "what I do" section, signed with the link
const Q = 'U překladatelské agentury se poptávka rozhoduje v detailech: jazykový pár, obor, město. Stránky, které tyto detaily nepopisují, nemá Google co ukázat.';
if (mainTxt.indexOf(Q) < mainTxt.indexOf('GEO/AEO: součást každé služby') || mainTxt.indexOf(Q) > mainTxt.indexOf('Jak to funguje v praxi?') || [...main.matchAll(/<blockquote/g)].length !== 1) e('one quote after the "what I do" section');
// JSON-LD
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = ld.find((n) => n['@type'] === 'WebPage' && n['@id'] === `${BASE}${URL_PATH}#webpage`);
const sv = ld.find((n) => n['@type'] === 'Service' && n['@id'] === `${BASE}${URL_PATH}#service`);
if (!wp || wp.name !== 'SEO a GEO/AEO pro překladatelské agentury Praha' || wp.description !== DESC || wp.about['@id'] !== sv?.['@id'] || wp.author['@id'] !== `${BASE}/#arsenii` || !wp.datePublished) e('WebPage');
if (!sv || sv.areaServed !== 'Praha' || sv.audience?.audienceType !== 'překladatelské agentury' || sv.offers) e('Service: Praha, audience, no offers');
const how = by('HowTo');
const coop = (main.match(/Jak spolupracuji s překladatelskými agenturami\?[\s\S]*?<\/section>/) || [''])[0];
const vis = [...coop.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)].map((m) => [...m[1].matchAll(/<li><span>([\s\S]*?)<\/span><\/li>/g)].map((x) => txt(x[1])));
if (!how || how.step.length !== 3 || how.step.some((s, i) => norm(s.text) !== vis[0][i])) e('HowTo steps = the visible three steps');
const qn = ld.filter((n) => n['@type'] === 'Quotation');
if (qn.length !== 1 || qn[0].text !== Q || qn[0].creator['@id'] !== `${BASE}/#arsenii`) e('Quotation');
const fq = by('FAQPage');
const visFaq = [...main.matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/div>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 6 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage = the visible 6 questions');
if (ld.some((n) => ['AggregateRating', 'Review', 'Offer'].includes(n['@type']))) e('no ratings / reviews / offers');
const hasVideoBlock = /id="rozbor-webu"/.test(main);
if (hasVideoBlock !== !!ld.find((n) => n['@type'] === 'VideoObject')) e('VideoObject only together with the video block');
const bc = ld.find((n) => n['@type'] === 'BreadcrumbList');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[1].name !== H1) e('breadcrumb: Domů → the page');
// Inbound links: home, the case study, the free-audit page
for (const [f, what] of [['dist/index.html', 'home'], ['dist/pripadove-studie/seo-prekladatelska-agentura/index.html', 'case study'], ['dist/audit-zdarma/index.html', 'free audit page']]) if (!readFileSync(f, 'utf8').includes(`href="${URL_PATH}"`)) e(`inbound link missing on the ${what}`);
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
const wc = mainTxt.split(/\s+/).length;
if (wc < 700) e(`too short: ${wc} words`);

if (errors.length) { console.error('✗ check-niche-translation-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-translation-cs: ok (${wc} words)`);
