// Post-build check of the niche landing page /seo-pro-prekladatelske-agentury-brno/ (cs, brief of 22.10.2026). The page is built only when
// NICHE_READY.nicheBrno is true; until then this check only confirms that it is not built, not in the sitemap and not linked.
import { readFileSync, existsSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/seo-pro-prekladatelske-agentury-brno/';
const H1 = 'SEO pro překladatelské agentury v Brně';
const TITLE = 'SEO pro překladatelské agentury Brno a GEO/AEO | Eranosian';
const DESC = 'Pomáhám překladatelským agenturám v Brně s B2B poptávkami přes Google a Mapy.com. Prezentace bezplatného auditu do 24 hodin, bez hovoru.';
const SECTIONS = [H1, 'Proč překladatelské agentury v Brně potřebují SEO?', 'Co pro překladatelskou agenturu v Brně konkrétně dělám?', 'Jak funguje lokální přítomnost agentury v Brně?', 'Jak to funguje v praxi? Případová studie', 'Jak spolupracuji s překladatelskými agenturami?', 'Co zahrnuje bezplatný audit?', 'Jaké formáty spolupráce existují?', 'Co říkají klienti?', 'Další články pro agentury', 'Často kladené otázky', 'Zjistěte, jestli má váš web technické chyby'];
const LINKS = ['/audit-zdarma/', '/pripadove-studie/seo-prekladatelska-agentura/', '/konzultace/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/recenze/', '/o-mne/', '/kontakt/', '/seo-pro-prekladatelske-agentury-praha/'];
const FORBIDDEN = ['garantuj', 'zaručeně', 'první místo', 'první pozice', '×8', '×24', '+400', 'SEO agentur', 'SEO překladatelské služby', 'jak získat klienty', ' my ', 'AggregateRating', '3 chyby', '5k'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

if (!existsSync('dist/seo-pro-prekladatelske-agentury-brno/index.html')) {
  // Not published: no page, no sitemap entry, no menu item, no link from the other pages.
  const bad = [];
  if (readFileSync('dist/sitemap.xml', 'utf8').includes('seo-pro-prekladatelske-agentury-brno')) bad.push('sitemap');
  for (const f of ['dist/index.html', 'dist/seo-pro-prekladatelske-agentury-praha/index.html', 'dist/pripadove-studie/seo-prekladatelska-agentura/index.html']) if (readFileSync(f, 'utf8').includes('seo-pro-prekladatelske-agentury-brno')) bad.push(f);
  if (bad.length) { console.error('✗ check-niche-brno-cs: the Brno page is not published but is referenced: ' + bad.join(', ')); process.exit(1); }
  console.log('✓ check-niche-brno-cs: not published (NICHE_READY.nicheBrno = false), not referenced anywhere');
  process.exit(0);
}
const h = readFileSync('dist/seo-pro-prekladatelske-agentury-brno/index.html', 'utf8');
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
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x) || /^Co jsem viděl na webech/.test(x));
const hsNoVideo = hs.filter((x) => !/^Co jsem viděl na webech/.test(x));
if (!hs.some((x) => /^Co jsem viděl na webech/.test(x))) e('video block (the same recording as on the Prague page, by the author\'s decision)');
if (JSON.stringify(hsNoVideo) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/blog\/(?!(?:proc-prekladatelska-agentura-nema-poptavky|jak-ziskat-klienty-pro-prekladatelskou-agenturu|jak-ziskat-b2b-klienty-pro-prekladatelskou-agenturu)\/)|<form/.test(main)) e("no blog links except the agency articles for agencies, no form on this page");
// "agentura" is never used about the author
if (/\b(jsem|moje|naše|moji|my jsme)\b[^.]{0,30}\bagentur/i.test(mainTxt)) e('"agentura" about the author');
// Hero: the direct answer, the date, the button; no quote, no numbers of the case
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead !== 'Dělám SEO a GEO/AEO pro překladatelské agentury v Brně. Stavím stránky jazykových párů, služeb pro firmy a měst, hlídám indexaci jazykových verzí a pracuji s Google Maps i Mapy.com. Začínáme bezplatným auditem technických chyb, bez hovoru a bez závazků. Prezentaci posílám do 24 hodin.') e('hero answer');
const heroEnd = main.indexOf(SECTIONS[1]);
const hero = main.slice(0, heroEnd);
if (/<blockquote|65–70|×3/.test(hero) || !/href="\/audit-zdarma\/">Chci bezplatný audit<\/a>/.test(hero)) e('hero: button, no quote, no case numbers');
if (!/Aktualizováno: <time datetime="\d{4}-\d{2}-\d{2}">/.test(h)) e('visible date');
// Answer-first
for (const hd of SECTIONS.slice(1, 9)) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">`).test(h)) e(`answer-first: ${hd}`);
}
// Case: approved formula only
if (!mainTxt.includes('rostly poptávky tři měsíce po sobě o 65–70 % měsíc po měsíci a B2B poptávky se zvýšily trojnásobně (březen–září 2026)') || !mainTxt.includes('Brno: výrazný letní růst')) e('case formula and the Brno line');
if (/AI Overview/.test(mainTxt) && !mainTxt.includes('Snímek obrazovky z 16. 10. 2026.')) e('AI Overview only with the dated screenshot');
if (!/<img src="\/images\/niche-ai-overview-brno\.webp" width="670" height="484" alt="Google AI Overview[^"]*zakryté" loading="lazy"/.test(main) || /KB P|kb-?preklady|Přikop|Correct/i.test(h)) e('Brno screenshot with the client covered, no client or third-party name in the text');
if (!/Zkontrolováno: \d/.test(mainTxt)) e('market observations with the date of the check');
if (!/Další články pro agentury<\/h2>[\s\S]*?href="\/blog\/proc-prekladatelska-agentura-nema-poptavky\/"/.test(main)) e('card of the article for agencies');
// Capacity rule: one source, the date, the three steps
if (!/Další města:[\s\S]*seo-pro-prekladatelske-agentury-praha/.test(main)) e('Další města: Praha');
if (!mainTxt.includes('Pracuji současně nejvýše se třemi firmami z jednoho oboru. Je to omezení kapacity, ne příslib výlučnosti') || !mainTxt.includes('Údaj platí k 22. 10. 2026')) e('capacity rule');
if (/zbývá|volných míst|\d ze 3/.test(mainTxt)) e('no counter / places left');
// Audit
if (!mainTxt.includes('Bezplatný audit zkontroluje technické chyby webu: indexaci, duplicitní obsah a další technické problémy.') || !mainTxt.includes('Výsledek dostanete jako krátkou prezentaci do 24 hodin')) e('audit wording');
// Formats: the same four service cards (with price and duration) as on the home page
const cards = [...main.matchAll(/<a class="card card--link service-card" href="([^"]+)">([\s\S]*?)<\/a>/g)].map((m) => [m[1], txt(m[2])]);
const CARDS = [['/konzultace/', 'Od 2 000 Kč'], ['/start-3-mesice/', '50 000 Kč · 3 měsíce'], ['/full-seo/', 'Od 15 000 Kč měsíčně · 12 měsíců'], ['/lokalni-seo-mapy/', 'Od 4 měsíců']];
if (cards.length !== 4 || CARDS.some(([u, x], i) => cards[i]?.[0] !== u || !cards[i][1].includes(x))) e('four service cards with price and duration: ' + JSON.stringify(cards));
// One quote after the "what I do" section, signed with the link
const Q = 'U překladatelské agentury v Brně se poptávka rozhoduje v detailech: jazykový pár, obor, město. Stránky, které je nepopisují, nemá Google co ukázat.';
if (mainTxt.indexOf(Q) < mainTxt.indexOf('GEO/AEO: součást každé služby') || mainTxt.indexOf(Q) > mainTxt.indexOf('Jak funguje lokální přítomnost agentury v Brně?') || [...main.matchAll(/<blockquote/g)].length !== 1) e('one quote after the "what I do" section');
// JSON-LD
const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = ld.find((n) => n['@type'] === 'WebPage' && n['@id'] === `${BASE}${URL_PATH}#webpage`);
const sv = ld.find((n) => n['@type'] === 'Service' && n['@id'] === `${BASE}${URL_PATH}#service`);
if (!wp || wp.name !== 'SEO pro překladatelské agentury Brno a GEO/AEO' || wp.description !== DESC || wp.about['@id'] !== sv?.['@id'] || wp.author['@id'] !== `${BASE}/#arsenii` || !wp.datePublished) e('WebPage');
if (!sv || sv.areaServed !== 'Brno' || sv.audience?.audienceType !== 'překladatelské agentury' || sv.offers) e('Service: Praha, audience, no offers');
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
if (hasVideoBlock && (!/data-youtube="[^"]+"/.test(main) || !/<img src="\/media\/[^"]+"[^>]*alt="Náhled videa/.test(main) || !/Pokud se vás web týká a chcete něco upřesnit nebo opravit, napište mi přes <a href="\/kontakt\/">kontaktní stránku<\/a>\./.test(main))) e('video block: YouTube id, poster with alt, right of reply');
if (ld.find((n) => n['@type'] === 'VideoObject') && !/Přepis videa/.test(main)) e('VideoObject only with a visible transcript');
const bc = ld.find((n) => n['@type'] === 'BreadcrumbList');
if (!bc || bc.itemListElement.length !== 2 || bc.itemListElement[1].name !== H1) e('breadcrumb: Domů → the page');
// Inbound links: home, the Prague page (Další města), the case study
for (const [f, what] of [['dist/index.html', 'home'], ['dist/seo-pro-prekladatelske-agentury-praha/index.html', 'Prague page'], ['dist/pripadove-studie/seo-prekladatelska-agentura/index.html', 'case study']]) if (!readFileSync(f, 'utf8').includes(`href="${URL_PATH}"`)) e(`inbound link missing on the ${what}`);
if (!readFileSync('dist/sitemap.xml', 'utf8').includes(`<loc>${BASE}${URL_PATH}</loc>`)) e('sitemap');
const wc = mainTxt.split(/\s+/).length;
if (wc < 700) e(`too short: ${wc} words`);

if (errors.length) { console.error('✗ check-niche-brno-cs:\n  - ' + errors.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-brno-cs: ok (${wc} words)`);
