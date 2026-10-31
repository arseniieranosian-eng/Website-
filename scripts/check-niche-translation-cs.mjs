// Post-build check of the niche landing page /seo-pro-prekladatelske-agentury-praha/ (cs, brief of 22.10.2026).
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const SUM = JSON.parse(readFileSync('src/data/niche-summaries.json', 'utf8'));
const URL_PATH = '/seo-pro-prekladatelske-agentury-praha/';
const NAME = 'SEO pro překladatelské agentury v Praze'; // the breadcrumb label (META name)
const H1 = 'SEO a GEO/AEO pro překladatelské agentury v Praze: poptávky z Googlu a AI';
const TITLE = 'SEO pro překladatelské agentury Praha | Eranosian';
const DESC = 'Dělám SEO a GEO/AEO pro překladatelské agentury v Praze: jazykové páry, služby, B2B stránky. Začněte bezplatným auditem technických chyb.';
const SECTIONS = [H1, 'Co pro překladatelskou agenturu konkrétně dělám?', 'Jak to funguje v praxi? Případová studie', 'Jak spolupracuji s překladatelskými agenturami?', 'Co zahrnuje bezplatný audit?', 'Jaké formáty spolupráce existují?', 'Co říkají klienti?', 'Další články pro agentury', 'Často kladené otázky', 'Zjistěte, jestli má váš web technické chyby'];
const LINKS = ['/audit-zdarma/', '/pripadove-studie/seo-prekladatelska-agentura/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/recenze/', '/o-mne/', '/kontakt/'];
const FORBIDDEN = ['garantuj', 'zaručeně', 'první místo', 'první pozice', '×8', '×24', '+400', 'SEO agentur', 'SEO překladatelské služby', 'jak získat klienty', ' my ', 'AggregateRating', '3 chyby', '5k'];

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
if (title !== TITLE || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== DESC || desc.length > 150) e(`description: ${desc} (${desc.length})`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (/<meta name="robots"[^>]*noindex/.test(h)) e('indexable');
// hreflang pair cs ↔ ru (the Russian version exists since 24.10.2026; the site convention adds x-default = cs)
const alts = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + ' ' + m[2]);
if (JSON.stringify(alts) !== JSON.stringify([`cs ${BASE}${URL_PATH}`, `ru ${BASE}/ru/seo-dlya-perevodcheskih-agentstv-praga/`, `x-default ${BASE}${URL_PATH}`])) e('hreflang pair cs ↔ ru: ' + JSON.stringify(alts));
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x) || /přesto\.cz/.test(x));
const hsNoVideo = hs.filter((x) => !/přesto\.cz/.test(x));
if (JSON.stringify(hsNoVideo) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/blog\/(?!(?:proc-prekladatelska-agentura-nema-poptavky|jak-ziskat-klienty-pro-prekladatelskou-agenturu|jak-ziskat-b2b-klienty-pro-prekladatelskou-agenturu|stranka-pro-kazdy-jazykovy-par)\/)|<form/.test(main)) e("no blog links except the agency articles for agencies, no form on this page");
// "agentura" is never used about the author
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt)) e('"agentura" about the author');
// Hero: the direct answer, the date, the button; no quote, no numbers of the case
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead !== SUM['/seo-pro-prekladatelske-agentury-praha/'].replace(/\u00a0/g, ' ') && lead !== SUM['/seo-pro-prekladatelske-agentury-praha/']) e('summary block text'); const sw = lead.split(/\s+/).length; if (sw < 40 || sw > 60 || /\d/.test(lead.replace(/24/g, ''))) e(`summary block: ${sw} words, no numbers except 24`);
const heroEnd = main.indexOf(SECTIONS[1]);
const hero = main.slice(0, heroEnd);
if (/<blockquote|65–70|×3/.test(hero) || !/href="\/audit-zdarma\/">Chci bezplatný audit<\/a>/.test(hero)) e('hero: button, no quote, no case numbers');
if (!/Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">/.test(h)) e('visible date');
// Answer-first
for (const hd of SECTIONS.slice(1, 7)) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
}
// Case: approved formula only
if (!mainTxt.includes('rostly poptávky tři měsíce po sobě o 65–70 % měsíc po měsíci a B2B poptávky se zvýšily trojnásobně (březen–září 2026)')) e('case formula');
// Case screenshot: the client is covered (no name, address or logo in the text), alt and caption in Czech
if (!/<img src="\/images\/niche-ai-overview-prekladatelska-agentura\.webp" width="760" height="438" alt="Google AI Overview[^"]*zakryté" loading="lazy"/.test(main) || /KB P|kb-?preklady|Opletalova/i.test(h)) e('case screenshot with the client covered');
if (!mainTxt.includes('Snímek obrazovky z 16. 10. 2026.')) e('case screenshot: dated 16. 10. 2026');
if (!/Další články pro agentury<\/h2>[\s\S]*?href="\/blog\/proc-prekladatelska-agentura-nema-poptavky\/"/.test(main)) e('card of the article for agencies');
// Capacity rule: one source, the date, the three steps
if (!mainTxt.includes('Pracuji současně nejvýše se třemi firmami z jednoho oboru. Je to omezení kapacity, ne příslib výlučnosti') || !mainTxt.includes('Údaj platí k 24. 10. 2026')) e('capacity rule');
if (/zbývá|volných míst|\d ze 3/.test(mainTxt)) e('no counter / places left');
// Audit
if (!mainTxt.includes('Bezplatný audit zkontroluje technické chyby webu: indexaci, duplicitní obsah a další technické problémy.') || !mainTxt.includes('Výsledek dostanete jako krátkou prezentaci do 24 hodin')) e('audit wording');
// Formats: the same four service cards (with price and duration) as on the home page
const cards = [...main.matchAll(/<a class="card card--link service-card" href="([^"]+)">([\s\S]*?)<\/a>/g)].map((m) => [m[1], txt(m[2])]);
const CARDS = [['/konzultace/', 'Od 2 000 Kč'], ['/start-3-mesice/', '50 000 Kč · 3 měsíce'], ['/full-seo/', 'Od 15 000 Kč měsíčně · 12 měsíců'], ['/lokalni-seo-mapy/', 'Od 4 měsíců']];
if (cards.length !== 4 || CARDS.some(([u, x], i) => cards[i]?.[0] !== u || !cards[i][1].includes(x))) e('four service cards with price and duration: ' + JSON.stringify(cards));
// One quote after the "what I do" section, signed with the link
const Q = 'U překladatelské agentury se poptávka rozhoduje v detailech: jazykový pár, obor, město. Stránky, které tyto detaily nepopisují, nemá Google co ukázat.';
if (mainTxt.indexOf(Q) < mainTxt.indexOf('GEO/AEO: součást každé služby') || mainTxt.indexOf(Q) > mainTxt.indexOf('Jak to funguje v praxi?') || [...main.matchAll(/<blockquote/g)].length !== 1) e('one quote after the "what I do" section');
// JSON-LD
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = ld.find((n) => n['@type'] === 'WebPage' && n['@id'] === `${BASE}${URL_PATH}#webpage`);
const sv = ld.find((n) => n['@type'] === 'Service' && n['@id'] === `${BASE}${URL_PATH}#service`);
if (!wp || wp.name !== 'SEO pro překladatelské agentury Praha' || wp.description !== DESC || wp.about['@id'] !== sv?.['@id'] || wp.author['@id'] !== `${BASE}/#arsenii` || !wp.datePublished) e('WebPage');
if (!sv || sv.areaServed !== 'Praha' || sv.audience?.audienceType !== 'překladatelské agentury' || sv.offers) e('Service: Praha, audience, no offers');
const how = by('HowTo');
const coop = (main.match(/Jak spolupracuji s překladatelskými agenturami\?[\s\S]*?<\/section>/) || [''])[0];
const vis = [...coop.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)].map((m) => [...m[1].matchAll(/<li><span>([\s\S]*?)<\/span><\/li>/g)].map((x) => txt(x[1])));
if (!how || how.step.length !== 3 || how.step.some((s, i) => norm(s.text) !== vis[0][i])) e('HowTo steps = the visible three steps');
const qn = ld.filter((n) => n['@type'] === 'Quotation');
if (qn.length !== 1 || qn[0].text !== Q || qn[0].creator['@id'] !== `${BASE}/#arsenii`) e('Quotation');
const fq = by('FAQPage');
const visFaq = [...((main.match(/<div class="faq-open">[\s\S]*?<\/section>/) || [""])[0]).matchAll(/<div><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/div>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (!fq || fq.mainEntity.length !== 6 || fq.mainEntity.some((q, i) => norm(q.name) !== visFaq[i]?.[0] || norm(q.acceptedAnswer.text) !== visFaq[i]?.[1])) e('FAQPage = the visible 6 questions');
if (ld.some((n) => ['AggregateRating', 'Review', 'Offer'].includes(n['@type']))) e('no ratings / reviews / offers');
const hasVideoBlock = /id="rozbor-webu"/.test(main);
if (hasVideoBlock && (!/data-youtube="l2-SXybLlss"/.test(main) || !/<img src="\/media\/rozbor-webu-prekladatelskych-agentur-poster\.webp"[^>]*alt="Náhled videa/.test(main) || !/Pokud se vás web týká a chcete něco upřesnit nebo opravit, napište mi přes <a href="\/kontakt\/">kontaktní stránku<\/a>\./.test(main))) e('video block: YouTube id, poster with alt, right of reply');
if (ld.find((n) => n['@type'] === 'VideoObject') && !/Přepis videa/.test(main)) e('VideoObject only with a visible transcript');
const bc = ld.find((n) => n['@type'] === 'BreadcrumbList');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[1].name !== NAME) e('breadcrumb: Domů → the page');
// Inbound links: home, the case study, the free-audit page
for (const [f, what] of [['dist/index.html', 'home'], ['dist/pripadove-studie/seo-prekladatelska-agentura/index.html', 'case study'], ['dist/audit-zdarma/index.html', 'free audit page']]) if (!readFileSync(f, 'utf8').includes(`href="${URL_PATH}"`)) e(`inbound link missing on the ${what}`);
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
const wc = mainTxt.split(/\s+/).length;
if (wc < 700) e(`too short: ${wc} words`);

if (errors.length) { console.error('✗ check-niche-translation-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-translation-cs: ok (${wc} words)`);
