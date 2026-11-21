// Post-build check of /lokalni-seo-mapy/ (cs) against its keyword brief of 20.10.2026.
import { readFileSync } from './fs-clean.mjs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/lokalni-seo-mapy/';
const H1 = 'Lokální SEO: propagace na Google Maps a Mapy.com';
const SECTIONS = [H1, 'Kolik stojí propagace na Google Maps a Mapy.com?', 'Pro koho je propagace v mapách vhodná?', 'Co je součástí propagace v mapách?', 'Jaké metriky z map sleduji?', 'Lokální stránky pro pobočky a provozovny', 'Jak probíhá propagace v mapách?', 'Kdy přijdou první výsledky v mapách?', 'Mapy jsou součástí balíčků Start a Full SEO', 'Co říkají klienti?', 'Související články', 'Časté otázky o propagaci v mapách', 'Nezávazná poptávka', 'Další služby'];
const LINKS = ['/audit-zdarma/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/seo-a-geo/', '/recenze/', '/caste-dotazy/', '/ochrana-osobnich-udaju/'];
const FORBIDDEN = ['KB PŘEKLADY', 'KB Překlady', 'Seznam Mapy', 'od 1 měsíce', 'měsíční monitoring', 'vytvářím stránky', 'vytvářím lokální stránky', 'Co to přineslo klientům?', 'agentura Praha'];
const IMAGES = ['price-slide-1', 'price-slide-2', 'branch-brno', 'branch-pardubice', 'branch-praha'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Visible text only: <script> / <style> contents (incl. the JSON-LD itself) are removed first.
const txt = (s) => dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/lokalni-seo-mapy/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
// The title is the one given in the brief (47 chars, a little under the usual 50)
if (title !== 'Lokální SEO: Google Maps a Mapy.com | Eranosian' || title.length < 35 || title.length > 55) e(`title: ${title} (${title.length})`);
if (desc !== 'Lokální SEO pro Google Maps a Mapy.com: profily, údaje, odpovědi na recenze, měření kliků. Full od 1\u00a0800\u00a0Kč měsíčně.' || desc.length !== 116) e(`description (brief of 21.11.2026, B1): ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:locale cs_CZ');
for (const [l, p] of [['cs', URL_PATH], ['en', '/en/maps/'], ['ru', '/ru/karty/'], ['x-default', URL_PATH]]) {
  if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
}
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
if (!mainTxt.includes('Platba podle výsledků nebo balíček Full · od 4 měsíců · profily bez omezení počtu')) e('badge missing');
// Brief of 21.11.2026 (B2–B10)
for (const f of ['skutečné hovory', 'skutečných hovor', 'Platíte za výsledek', 'platí za výsledek', 'Systém získávání recenzí', 'Nastavení získávání recenzí', '6×', '300×']) if (mainTxt.includes(f) || body.includes(f)) e(`B: forbidden on the maps page: ${f}`);
for (const f of ['Platba podle výsledků (kliknutí na hovor, trasy, prokliky) nebo balíček Full za 1 800 Kč měsíčně.', 'Pomohu nastavit, jak požádat klienty o upřímné hodnocení (odkaz, QR kód) a jak na recenze odpovídat. Hodnocení nekupuji ani za ně neodměňuji.', 'Pozice v mapách měřím z pevného bodu a zařízení. Je to orientační údaj, protože pořadí se mění podle místa, zařízení a času.', 'Mapy.com a Firmy.cz přijímají podle nápovědy jen firmy působící v ČR. Profil na Googlu lze vést i mimo ČR.', 'Výsledek potvrzuje export statistik z administrace Firmy.cz a z Google Business Profile.', ', od 15 000 Kč měsíčně, podle oboru a rozsahu webu', 'Články o tom, jak má firma vypadat v mapách a katalozích, a co jsem zjistil při procházení karet v mapách.', 'Reference k projektu webového SEO', 'Reference k webovému SEO / konzultaci', 'Zdroje (zkontrolováno 21. 11. 2026):']) if (!mainTxt.includes(f)) e(`B: missing text: ${f}`);
if (/volno|nejvýše se třemi/.test(mainTxt)) e('B12: no capacity line');
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
if (/(?<![\p{L}])(my|náš|naše)(?![\p{L}])/iu.test(mainTxt)) e('"my / naše" must not be used: the author works as a specialist ("já")');
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/kb-preklady/.test(main) || /href="\/pripadove-studie\/"/.test(main)) e('no case links on this page for now');
if (/<video|★|AggregateRating|ratingValue|VideoObject|LocalBusiness/.test(h)) e('video / stars / AggregateRating / VideoObject / LocalBusiness must not be on this page');
for (const i of IMAGES) if (!main.includes(`/images/maps/${i}.webp`)) e(`image missing: ${i}`);
if ([...main.matchAll(/<img[^>]*\/images\/maps\/[^>]*>/g)].some((m) => !/alt="[^"]{10,}"/.test(m[0]))) e('every maps image needs a descriptive alt');

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ht = by('HowTo');
if (wp.name !== title) e('WebPage.name != <title>');
if (wp.description !== desc) e('WebPage.description != meta description');
if (wp.inLanguage !== 'cs') e('inLanguage');
const date = h.match(/Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time>/);
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} != visible ${date && date[1]}`);
if (!body.includes(sv.description)) e('Service.description not visible');
if (sv.name !== H1) e('Service.name must equal H1');
if (JSON.stringify(sv.availableLanguage) !== '["cs","en","ru"]') e('availableLanguage');
const o = sv.offers;
if (Array.isArray(o) || 'price' in o || o.priceCurrency !== 'CZK') e('offer must be a single offer (rates live in priceSpecification)');
if (o.eligibleDuration.minValue !== 4 || o.eligibleDuration.unitCode !== 'MON') e('eligibleDuration must be minValue 4 MON');
if (!body.includes(o.description)) e('Offer.description not visible');
const ps = o.priceSpecification ?? [];
if (ps.map((p) => p.price).join() !== '1000,1000,500,1800' || !ps.every((p) => p.priceCurrency === 'CZK' && body.includes(p.name))) e('priceSpecification must be 1000/1000/500/1800 CZK with visible names');
if (!/1 000 Kč/.test(body) || !body.includes('500 Kč') || !body.includes('1 800 Kč')) e('rates must be visible');
if (/€|EUR/.test(JSON.stringify(ld))) e('no euro in JSON-LD');
const cat = sv.hasOfferCatalog;
const flat = body.replace(/\( /g, '(').replace(/ \)/g, ')');
if (!body.includes(cat.name) || cat.itemListElement.length !== 9 || !cat.itemListElement.every((i) => flat.includes(i.itemOffered.name))) e('OfferCatalog does not match the visible list');
if (fq.mainEntity.length !== 10 || !fq.mainEntity.every((q) => body.includes(q.name) && body.includes(q.acceptedAnswer.text))) e('10 FAQ Q/A not visible verbatim (B10: new question "Dá se zaplatit za pozici v mapách?")');
const pay = fq.mainEntity[0].acceptedAnswer.text;
if (!/1 000 Kč za 10 kliknutí na hovor, 1 000 Kč za 20 tras, 500 Kč za 10 prokliků/.test(pay) || !pay.includes('1 800 Kč měsíčně')) e('payment FAQ must carry the rates');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > Mapy (Google + Mapy.com)' || bc.itemListElement.at(-1).item) e('breadcrumb (two levels)');
// P1.1 (brief of 03.11.2026): Quotation / HowTo markup is no longer used on the site. if (!ht || ht.step.length !== 4) e('HowTo: expected 4 steps');
else {
  const ol = [...(h.match(/<ol class="steps[^>]*>([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]));
// P1.1 (brief of 03.11.2026): Quotation / HowTo markup is no longer used on the site. ht.step.forEach((st, i) => { if (ol[i] !== st.text || st.name !== `Krok ${i + 1}`) e(`step ${i + 1} in <ol> != HowToStep ("${ol[i]}")`); });
}
if (sv.provider['@id'] !== by('Person')['@id']) e('provider must reference Person');
const rel = (sv.isRelatedTo ?? []).map((r) => r['@id']);
for (const p of ['/start-3-mesice/', '/full-seo/']) if (!rel.includes(`${BASE}${p}#service`)) e(`isRelatedTo ${p}`);
for (const [hd, ans] of [['Kolik stojí propagace na Google Maps a Mapy.com?', 'Propagace v mapách se platí podle výsledků'], ['Jaké metriky z map sleduji?', 'Sleduji tři metriky'], ['Lokální stránky pro pobočky a provozovny', 'Připravím kompletní zadání'], ['Kdy přijdou první výsledky v mapách?', 'Závisí na oboru']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
// The cs services card says "Od 4 měsíců" and shows the Full package price
const home = txt(readFileSync('dist/index.html', 'utf8'));
if (!home.includes('Od 4 měsíců') || home.includes('Od 1 měsíce')) e('home services card must say "Od 4 měsíců"');

// Related articles: eight cards with covers (brief of 21.11.2026: the observation of the cards in maps first, then the profile how-to, then choosing the first step, advertising, SEO audit, no-show, local presence of a realty / accounting agency)
const ra = (h.match(/Související články<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...ra.matchAll(/<a class="card card--link post-card" href="\/blog\/[a-z0-9-]+\/"[^>]*>\s*<img class="post-card-img"/g)].length !== 8 || ra.indexOf('/blog/stomatologie-v-mapach-co-jsem-zjistil/') < 0 || ra.indexOf('/blog/stomatologie-v-mapach-co-jsem-zjistil/') > ra.indexOf('/blog/profil-zubni-ordinace-v-mapach/') || ra.indexOf('/blog/profil-zubni-ordinace-v-mapach/') > ra.indexOf('/blog/audit-konzultace-nebo-start/') || !ra.includes('/blog/lokalni-pritomnost-realitni-kancelare/') || !ra.includes('/blog/lokalni-pritomnost-ucetni-kancelare/') || !ra.includes('/blog/audit-konzultace-nebo-start/')) e('related articles: eight cards with covers (observation, profile, then the rest)');
if (errors.length) {
  console.error(`\nCzech Maps page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech Maps page check passed: cs.');
