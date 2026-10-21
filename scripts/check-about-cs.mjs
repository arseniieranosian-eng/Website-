// Post-build check of /o-mne/ (cs) against its brief of 20.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://www.seo-eranosian.com';
const URL_PATH = '/o-mne/';
const H1 = 'Arsenii Eranosian: SEO a GEO/AEO specialista v Praze';
const SECTIONS = [H1, 'Jak přistupuji k SEO?', 'Jaké mám zkušenosti?', 'Co jsem řešil v konzultacích?', 'S jakými trhy a jazyky pracuji?', 'Jaké nástroje používám?', 'Kde si mě ověříte?', 'Co říkají klienti?', 'Časté otázky o mně', 'Jste v SEO na začátku, nebo chcete druhý pohled?'];
const LINKS = ['/audit-zdarma/', '/kontakt/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/mapy/', '/seo-a-geo/', '/pripadove-studie/', '/pripadove-studie/seo-prekladatelska-agentura-4-mesice/', '/pripadove-studie/seo-v-nizke-sezone/', '/pripadove-studie/seo-tiskarna/', '/pripadove-studie/seo-vzdelavaci-platforma/', '/recenze/'];
// Figures / claims the brief rules out; client names never appear
const FORBIDDEN = ['777', 'YoY', '3 roky', 'tři roky', 'za tři roky', '55–60', '65–70', 'B2B ×3', '×6', '300×', 'KB P', 'QUBIS', 'Unimenty', 'short call', 'krátký call', 'USA', 'Screaming'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/o-mne/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== 'Arsenii Eranosian: SEO a GEO/AEO specialista | O mně' || title.length < 45 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc !== 'Jsem Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Začínám od byznys modelu, ne od klíčových slov. Podívejte se na projekty. Napište mi.') e(`description: ${desc}`);
if (title.replace(/ \| O mně$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="profile">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type profile / og:locale cs_CZ');
for (const [l, u] of [['cs', URL_PATH], ['en', '/en/about/'], ['ru', '/ru/obo-mne/'], ['x-default', URL_PATH]]) if (!h.includes(`<link rel="alternate" hreflang="${l}" href="${BASE}${u}">`)) e(`hreflang ${l}`);
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
// the reviews block comes from the shared source and names its authors' companies (reviewers are not clients of the cases)
const noReviews = txt(main.replace(/<section[^>]*>(?:(?!<\/section>)[\s\S])*?Co říkají klienti\?[\s\S]*?<\/section>/, ''));
for (const f of FORBIDDEN) if (noReviews.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/blog\/|href="\/ru\/|href="\/en\//.test(main)) e('no blog / other-language links in the body');
if (/★|AggregateRating|ratingValue/.test(h)) e('no stars / AggregateRating');
if (!h.includes('https://www.linkedin.com/in/arsenii-eranosian-seo/')) e('LinkedIn link');

// Hero
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!lead.startsWith('Jsem Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Pracuji osobně') || words < 35 || words > 60) e(`hero answer (${words} words)`);
if (!/<img[^>]*alt="Arsenii Eranosian, SEO specialista v Praze"/.test(main)) e('author photo with alt');
const date = h.match(/Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time>/);
// Trust bar: five HTML tiles with periods, the note and the link
const tiles = [...(main.match(/<dl class="stats stats--five">[\s\S]*?<\/dl>/) || [''])[0].matchAll(/<dt>([\s\S]*?)<\/dt><dd>([^<]*)<\/dd>/g)].map((m) => norm(dec(m[2] + ' ' + m[1].replace(/<[^>]+>/g, ' '))));
const EXP_TILES = ['1 200 → 10 500 návštěv za měsíc (+775 %) tiskárna, červenec 2024 → červenec 2025', '×24 poptávek z formuláře překladatelská agentura, jaro → léto 2026, od nízké základny', '+55 % organické návštěvnosti nová vzdělávací platforma, březen → září 2025', '4 trhy Česko, Rusko, Bulharsko, Indie projekty podle období v přehledu zkušeností', '4 jazyky obsahu: cs, en, ru, uk obsah adaptuji, ne jen překládám'];
if (JSON.stringify(tiles.map((x) => x.replace(/\s+/g, ' '))) !== JSON.stringify(EXP_TILES)) e(`trust bar tiles: ${JSON.stringify(tiles)}`);
if (!mainTxt.includes('Názvy klientů nezveřejňuji. Počty a procenta jsou relativní data.')) e('trust bar note');
// Formulas shared with the case pages
const FORM = ['Poptávky z formuláře ×24 (+2300 %): jaro (březen–květen) → léto (červen–srpen) 2026, jedno okno, ne meziročně. Od nízké základny', '1 200 → 10 500 návštěv za měsíc, +775 %, červenec 2024 → červenec 2025'];
for (const f of FORM) if (!mainTxt.includes(f)) e(`formula missing: ${f}`);
const pct = (mainTxt.match(/[+\-]?\d[\d ]*%/g) ?? []).map((x) => x.replace(/\s/g, ''));
if (pct.some((x) => !['+775%', '+2300%', '+55%', '+60%'].includes(x))) e(`unexpected percentages: ${[...new Set(pct)].join(', ')}`);
// Answer-first
for (const [hd, ans] of [['Jak přistupuji k SEO?', 'Nezačínám seznamem klíčových slov'], ['Jaké mám zkušenosti?', 'Pracuji v SEO od roku 2024'], ['Co jsem řešil v konzultacích?', 'Vedle dlouhodobých projektů'], ['S jakými trhy a jazyky pracuji?', 'Pracoval jsem na projektech'], ['Jaké nástroje používám?', 'Pracuji s Ahrefs'], ['Kde si mě ověříte?', 'Mé zkušenosti si ověříte']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
// Chronology: four entries, newest first
const tl = [...(main.match(/<ul class="timeline">[\s\S]*?<\/ul>/) || [''])[0].matchAll(/<strong>([^<]*)<\/strong>/g)].map((m) => norm(m[1]));
if (tl.length !== 4 || !tl[0].startsWith('Překladatelská agentura') || !tl[1].startsWith('Tiskárna') || !tl[2].startsWith('Vzdělávací platforma') || !tl[3].startsWith('Digitální marketing')) e(`chronology: ${JSON.stringify(tl)}`);
if ([...(main.match(/Co jsem řešil v konzultacích\?[\s\S]*?<\/section>/) || [''])[0].matchAll(/<li>/g)].length !== 4) e('four consultation examples');
if (!mainTxt.includes('Nástroje jen sbírají data; závěry dělám ručně.')) e('tools sentence');

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('ProfilePage'), fq = by('FAQPage'), bc = by('BreadcrumbList'), person = by('Person');
if (ld.some((n) => ['AggregateRating', 'Review', 'Service', 'Offer'].includes(n['@type']))) e('no ratings / reviews / services in the markup');
if (JSON.stringify(ld.filter((n) => n['@type'] !== 'Person' && n['@type'] !== 'ProfessionalService' && n['@type'] !== 'WebSite')).match(/alumniOf|hasCredential|KB P|QUBIS|Unimenty/)) e('no clients / credentials in the markup');
if (norm(wp.name) !== title || norm(wp.description) !== desc || wp.inLanguage !== 'cs') e('ProfilePage name / description / inLanguage');
if (wp['@id'] !== `${BASE}${URL_PATH}#webpage` || wp.mainEntity['@id'] !== person['@id'] || wp.isPartOf['@id'] !== by('WebSite')['@id']) e('ProfilePage ids / mainEntity = Person / isPartOf');
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} must match the visible date`);
if (fq.mainEntity.length !== 5 || !fq.mainEntity.every((q) => body.includes(norm(q.name)) && body.includes(norm(q.acceptedAnswer.text)))) e('5 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > O mně' || bc.itemListElement.at(-1).item) e('breadcrumb');

// Site: service pages carry the "Kdo to dělá?" block with a link here
for (const p of ['dist/konzultace/index.html', 'dist/start-3-mesice/index.html', 'dist/full-seo/index.html', 'dist/mapy/index.html']) {
  const c = readFileSync(p, 'utf8');
  if (!c.includes('Kdo to dělá?') || !c.includes(`href="${URL_PATH}"`)) e(`${p}: "Kdo to dělá?" block with a link to /o-mne/`);
}

if (errors.length) {
  console.error(`\nCzech about page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech about page check passed: cs.');
