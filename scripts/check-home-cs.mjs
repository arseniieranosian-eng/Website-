// Post-build check of the Czech home page / (hub) against its brief of 20.10.2026.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = 'https://www.seo-eranosian.com';
const SECTIONS = ['SEO, které přivádí poptávky. Ve vyhledávačích i v AI.', 'Kam dál? Vyberte podle toho, co potřebujete', 'Jaké služby nabízím?', 'Co je GEO/AEO a proč ho dělám spolu se SEO?', 'Jaké výsledky už mají moji klienti?', 'Co říkají klienti?', 'Časté otázky', 'Kdo za tím stojí?', 'Zjistěte, kolik zákazníků vám uniká'];
const LINKS = ['/audit-zdarma/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/mapy/', '/seo-a-geo/', '/pripadove-studie/', '/pripadove-studie/seo-prekladatelska-agentura/', '/pripadove-studie/seo-v-nizke-sezone/', '/pripadove-studie/seo-tiskarna/', '/pripadove-studie/seo-vzdelavaci-platforma/', '/recenze/', '/caste-dotazy/', '/o-mne/', '/kontakt/', '/ochrana-osobnich-udaju/'];
const FORBIDDEN = ['první pozice', 'YoY', '3 roky', 'průměrný růst', '55–60', 'ChatGPT v odpovědích', 'technický stav a rychlost', '4–8 týdnů', '3–6 měsíců', 'krátký call po auditu', 'SEO agentur', '6×', '300×', 'B2B ×3'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s ]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
const H1 = SECTIONS[0];
if (title !== 'SEO specialista Praha: SEO a GEO/AEO | Arsenii Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc !== 'Pracuji osobně: bezplatný SEO audit, konzultace, SEO start na 3 měsíce a Full SEO na rok včetně GEO/AEO. Zjistěte, kolik zákazníků vám uniká.') e(`description: ${desc}`);
if (title.replace(/ \| Arsenii Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}/">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="website">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type website / og:locale cs_CZ');
for (const [l, u] of [['cs', '/'], ['en', '/en/'], ['ru', '/ru/'], ['x-default', '/']]) if (!h.includes(`<link rel="alternate" hreflang="${l}" href="${BASE}${u}">`)) e(`hreflang ${l}`);
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f) || desc.includes(f) || title.includes(f)) e(`forbidden text: ${f}`);
// "agentura" only inside the case names (the brief names the translation-agency case that way)
if (/agentur/i.test(mainTxt.replace(/Překladatelská agentura(?:, část 2|: půl roku práce)/g, ''))) e('the word "agentura" must not be used (except in the case name)');
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/blog\//.test(h)) e('no blog links on the home page');
if (/★|AggregateRating|ratingValue/.test(h)) e('no stars / AggregateRating');
if (/<ul class="checks">/.test(main.split('Kam dál?')[0])) e('the hero list of audit scope must be gone');

// Hero
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!lead.startsWith('Jsem SEO a GEO/AEO specialista v Praze a pracuji osobně') || words < 35 || words > 60) e(`hero answer (${words} words)`);
if (!mainTxt.includes('SEO specialista v Praze')) e('eyebrow');
if (!/<input[^>]*name="website"/.test(h) || !/Chci bezplatný audit/.test(main)) e('hero form with the audit button');
if (/SEO \+ GEO/.test(main)) e('the form must not offer "SEO + GEO/AEO"');

// Navigator: six cards, plain links
const nav = (main.match(/Kam dál\?[\s\S]*?<\/section>/) || [''])[0];
if ([...nav.matchAll(/<a class="card card--link"/g)].length !== 6 || /<script|carousel|swiper/i.test(nav)) e('navigator: six plain link cards expected');
// Services: four cards with the prices of the shared sources, no price for maps
const sv = (main.match(/Jaké služby nabízím\?[\s\S]*?<\/section>/) || [''])[0];
const meta = [...sv.matchAll(/<span class="meta">([^<]*)<\/span>/g)].map((m) => norm(m[1]));
if (JSON.stringify(meta) !== JSON.stringify(['Od 2 000 Kč (1 hodina nebo bez časového limitu)', '50 000 Kč, 3 měsíce', 'Od 15 000 Kč měsíčně, 12 měsíců', 'Od 4 měsíců'])) e(`service meta: ${JSON.stringify(meta)}`);
if (/Kč/.test(txt((sv.match(/\/mapy\/[\s\S]*?<\/a>/) || [''])[0]))) e('maps: no price on the card');
// Results: four cases with their single formulas
const FORMULAS = ['Poptávky tři měsíce po sobě +65–70 % měsíčně, B2B poptávky ×3 (+200 %), březen–září 2026', 'Poptávky z formuláře ×24 (+2300 %): jaro (březen–květen) → léto (červen–srpen) 2026, jedno okno, ne meziročně. Od nízké základny', '1 200 → 10 500 návštěv za měsíc, +775 %, červenec 2024 → červenec 2025', '+55 % organické návštěvnosti, březen → září 2025 (7 měsíců), relativní data od nízké základny nového webu'];
for (const f of FORMULAS) if (!mainTxt.includes(f)) e(`case formula missing: ${f}`);
if (!mainTxt.includes('Názvy klientů a absolutní čísla nezveřejňuji. Počty a procenta jsou relativní data.')) e('results note');
if (/Výsledky v číslech/.test(mainTxt)) e('the numbers block must be gone');
// The same formulas live on the case pages / the Start page (one source)
if (!txt(readFileSync('dist/pripadove-studie/seo-v-nizke-sezone/index.html', 'utf8')).includes(FORMULAS[1])) e('season page: formula differs from the home page');
const startTxt = txt(readFileSync('dist/start-3-mesice/index.html', 'utf8'));
for (const f of [FORMULAS[2], FORMULAS[3]]) if (!startTxt.includes(f)) e(`Start page: formula differs from the home page: ${f}`);
// Reviews: none of the unconfirmed figures
const rv = (main.match(/Co říkají klienti\?[\s\S]*?<\/section>/) || [''])[0];
if (!/class="card review"/.test(rv)) e('reviews block expected');
if (/\d+\s*×|×\s*\d/.test(txt(rv)) || /Make Up/.test(rv)) e('reviews: no figures / partner-agency review on the home page');
// One pull quote between the case cards and the reviews, signed with a link to /o-mne/; same text in the markup
const Q = 'SEO není o aktivitě, ale o pořadí priorit. Nejdřív odstraníte, co Googlu brání web pochopit, pak postavíte architekturu podle byznysu a teprve potom škálujete obsah.';
const order = (a) => mainTxt.indexOf(a);
if (!(order('Jaké výsledky už mají moji klienti?') < order(Q) && order(Q) < order('Co říkají klienti?')) || order(Q) < order('Všechny případové studie')) e('the quote must sit after the case cards and before the reviews');
if ([...main.matchAll(/<blockquote class="pullquote">/g)].length !== 1) e('exactly one pull quote expected');
if ([...main.matchAll(/<cite><a href="\/o-mne\/">Arsenii Eranosian<\/a><span>SEO a GEO\/AEO specialista<\/span><\/cite>/g)].length !== 1) e('quote author must be signed and link to /o-mne/');
// FAQ
const FAQ = [['Jak probíhá bezplatný audit?', 'Pošlete adresu webu'], ['Kolik stojí SEO služby?', 'Audit je zdarma. Konzultace stojí od 2 000 Kč, SEO start 50 000 Kč za 3 měsíce a Full SEO od 15 000 Kč měsíčně.'], ['Za jak dlouho přijdou první výsledky?', 'První výsledky přicházejí obvykle za 2–3 měsíce, ale zaručit je nelze.'], ['Pracujete i mimo Prahu?', 'Ano. Pracuji převážně na dálku'], ['Čím se liší SEO a GEO/AEO?', 'SEO míří na pozice v Googlu a Seznamu'], ['Co když nevím, kterou službu potřebuji?', 'Začněte bezplatným auditem nebo konzultací']];
for (const [q, a] of FAQ) if (!mainTxt.includes(q) || !mainTxt.includes(a)) e(`FAQ: ${q}`);
// About, CTA, date
if (!mainTxt.includes('Pracuji osobně, česky, anglicky a rusky.')) e('about answer');
if (!mainTxt.includes('Bezplatný audit ukáže technické chyby vašeho webu.')) e('final CTA text');
const date = h.match(/Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time>/);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), fq = by('FAQPage'), pro = by('ProfessionalService');
const qn = ld.filter((n) => n['@type'] === 'Quotation');
if (qn.length !== 1 || qn[0]['@id'] !== `${BASE}/#quote-1` || qn[0].text !== Q || qn[0].inLanguage !== 'cs' || qn[0].isPartOf['@id'] !== wp['@id'] || qn[0].creator['@id'] !== by('Person')['@id']) e('Quotation node (#quote-1) must repeat the quote word for word');
if (ld.some((n) => ['AggregateRating', 'Review', 'BreadcrumbList', 'Service', 'Offer'].includes(n['@type']))) e('home markup: no ratings / reviews / breadcrumb / services');
if (/SearchAction/.test(JSON.stringify(ld))) e('no SearchAction');
if (norm(wp.name) !== title || norm(wp.description) !== desc || wp.inLanguage !== 'cs') e('WebPage name / description / inLanguage');
if (wp['@id'] !== `${BASE}/#webpage` || wp.isPartOf['@id'] !== by('WebSite')['@id'] || wp.about['@id'] !== pro['@id']) e('WebPage ids / isPartOf / about');
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} must match the visible date`);
if (fq.mainEntity.length !== 6 || !fq.mainEntity.every((q) => body.includes(norm(q.name)) && body.includes(norm(q.acceptedAnswer.text)))) e('6 FAQ Q/A not visible verbatim');
const cat = (pro.hasOfferCatalog?.itemListElement ?? []).map((i) => i['@id']);
if (JSON.stringify(cat) !== JSON.stringify(['/audit-zdarma/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/mapy/'].map((p) => `${BASE}${p}#service`))) e(`ProfessionalService.hasOfferCatalog order: ${JSON.stringify(cat)}`);
if (/agentur/i.test(JSON.stringify([wp, pro.name]))) e('"agentura" must not appear in the markup');

// Site-wide: no Blog in the menu or the footer of any language
const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : p.endsWith('index.html') ? [p] : []; });
for (const f of walk('dist').filter((x) => !/(^|\/)blog\/index\.html$/.test(x))) {
  const c = readFileSync(f, 'utf8').replace(/<main[\s\S]*?<\/main>/, '');
  if (/<a href="\/(en\/|ru\/)?blog\/"/.test(c)) e(`${f}: Blog must not be in the menu / footer`);
}

if (errors.length) {
  console.error(`\nCzech home page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech home page check passed: cs.');
