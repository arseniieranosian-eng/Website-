// Post-build check of the main case study (cs, brief of 21.10.2026), plus the site-wide anonymisation.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/pripadove-studie/seo-prekladatelska-agentura/';
const H1 = 'Případová studie SEO pro překladatelskou agenturu: půl roku od nuly k růstu poptávek';
const SECTIONS = [H1, 'Jaké byly cíle zakázky?', 'Jak web vypadal na začátku?', 'Co jsem postavil?', 'Jaké byly výsledky za půl roku?', 'Jací klienti na web začali chodit?', 'Jak se chovala jednotlivá města?', 'Objevil se web v AI vyhledávání?', 'Co bych zopakoval na jakémkoli podobném projektu?', 'Časté otázky k případové studii', 'Související služby', 'Máte web, který „funguje“, ale nepřivádí klienty?'];
const LINKS = ['/pripadove-studie/', '/pripadove-studie/seo-v-nizke-sezone/', '/seo-a-geo/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/konzultace/', '/audit-zdarma/', '/kontakt/', '/o-mne/', '/pripadove-studie/seo-tiskarna/', '/pripadove-studie/seo-vzdelavaci-platforma/'];
// Never on the page: client name / domain, absolute numbers of the language table, old formulas, unconfirmed claims
const FORBIDDEN = ['KB P', 'kbpreklady', 'kb-preklady', '×8', '×300', '6× zobraz', '+400', '141', ' 74 ', 'Američan', 'Rakušan', 'Němc', '55–60', 'jsme '];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1').replace(/\( /g, '('));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/pripadove-studie/seo-prekladatelska-agentura/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = norm(dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]));
const desc = norm(dec(h.match(/<meta name="description" content="([^"]*)"/)[1]));
if (title !== 'Případová studie SEO překladatelské agentury | Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc !== 'Jak jsem za půl roku postavil web překladatelské agentury, který měl nulu poptávek: lokální stránky, B2B poptávky a nové vstupní body. Audit zdarma.') e(`description: ${desc}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (/nízk\S* sezón|útlumov/i.test(title + desc + H1)) e('"SEO v nízké sezóně" stays with Part 2 (not in Title / H1 / Description)');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:type" content="article">') || !h.includes('<meta property="og:locale" content="cs_CZ">')) e('og:type article / og:locale cs_CZ');
if (!h.includes(`<meta property="og:image" content="${BASE}/images/pripadove-studie/og-seo-prekladatelska-agentura.png">`)) e('og:image card');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('Czech-only page: no hreflang alternates');
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f) || desc.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/href="\/blog\/|<form|<video|★|AggregateRating|ratingValue/.test(main)) e('no blog links / form / video / stars on this page');
if (/Czech Republic|"agentura"/.test(mainTxt)) e('stray text');

// Hero
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!lead.startsWith('Za půl roku (březen–září 2026) jsem u překladatelské agentury') || words < 40 || words > 60) e(`hero answer (${words} words)`);
const cards = [...(main.match(/<dl class="stats[\s\S]*?<\/dl>/) || [''])[0].matchAll(/<dt>([^<]*)<\/dt><dd>([^<]*)<\/dd>/g)].map((m) => `${norm(m[2])} ${norm(m[1])}`);
if (cards.join('|') !== '+65–70 % poptávek měsíčně (3 měsíce po sobě)|×3 (+200 %) B2B poptávky|6 měsíců práce') e(`hero cards: ${cards.join('|')}`);
const byline = h.match(/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time> · Projekt: překladatelská agentura, březen – září 2026/);
if (!byline) e('byline');
if (!mainTxt.includes('Čísla a vývoj webu potvrdil klient.') || !mainTxt.includes('Název klienta a absolutní čísla nezveřejňuji')) e('data note / client confirmation line');
if (!mainTxt.includes('Jak se projekt choval v letní sezóně: SEO v nízké sezóně')) e('link to Part 2 in the hero');
// Czech number typography
const main0 = main.replace(/<(script|style)[\s\S]*?<\/\1>/g, '').replace(/<[^>]+>/g, ' ');
if (/\d %/.test(main0) || !main0.includes('65–70\u00a0%')) e('non-breaking space before %');
// Results table, owner's quote right after the first paragraph (before the table), separate ×24 line with its own definition
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
if (!rows.some((r) => r.join('|') === 'Cíl|Metrika|Výsledek|Období|Zdroj') || rows.filter((r) => r.length === 5 && ['Podpora prodeje', 'Povědomí o firmě'].includes(r[0])).length !== 8) e('results table: header + 8 rows');
if (!mainTxt.includes('Poptávky z formuláře ×24 (+2300 %): jaro (březen–květen) → léto (červen–srpen) 2026, jedno okno, ne meziročně. Od nízké základny')) e('the separate ×24 line with its own definition');
const OQ = 'Největší překvapení bylo, že poptávky klienta rostly i v létě, kdy je v oboru překladů nejklidněji.';
const iq = mainTxt.indexOf(OQ);
if (!(mainTxt.indexOf('Jaké byly výsledky za půl roku?') < iq && iq < mainTxt.indexOf('Cíl Metrika Výsledek'))) e("owner's quote: after the first results paragraph, before the table");
if (!/<figure class="owner-quote">\s*<blockquote cite="[^"]*seo-prekladatelska-agentura\/"><p>[^<]*<\/p><\/blockquote>\s*<figcaption>\s*<img src="\/images\/pripadove-studie\/majitelka\.jpg"[^>]*alt="Yelyzaveta Butyrina, majitelka Make Up Digital Agency"[^>]*>\s*<span>— <a href="https:\/\/www\.instagram\.com\/elzabutirina\/"[^>]*>Yelyzaveta Butyrina<\/a>, majitelka Make Up Digital Agency<\/span>/.test(main)) e("owner's quote figure: photo with alt, name linking to her Instagram, role");
// Language shares: SVG chart with real text, table, screenshot (counts / site name covered)
if (!/<svg class="lang-chart"[^>]*role="img"[^>]*aria-label="Sloupcový graf: česká verze 52[^"]*"/.test(main)) e('language chart: accessible SVG');
const lrows = rows.filter((r) => r.length === 3 && /^\d$/.test(r[0]));
if (JSON.stringify(lrows) !== JSON.stringify([['1', 'Česká', '52 %'], ['2', 'Anglická', '26 %'], ['3', 'Ukrajinská', '18 %'], ['4', 'Ruská', '4 %']])) e(`language table: ${JSON.stringify(lrows)}`);
if (!/<img src="\/images\/pripadove-studie\/poptavky-jazykove-verze\.webp" width="1000" height="743" alt="[^"]+" loading="lazy"/.test(main)) e('language screenshot: size, alt, lazy');
if (!mainTxt.includes('Absolutní počty neuvádím.')) e('no absolute counts note');
// Answer-first
for (const [hd, ans] of [['Jaké byly cíle zakázky?', 'Zakázka měla dva cíle'], ['Jak web vypadal na začátku?', 'Překladatelská agentura s pobočkami'], ['Co jsem postavil?', 'Přestal jsem brát stránky'], ['Jaké byly výsledky za půl roku?', 'Poptávky šly tři měsíce po sobě'], ['Jací klienti na web začali chodit?', 'Od 24. 5. do 20. 9. 2026'], ['Jak se chovala jednotlivá města?', 'Lokální propagace běžela'], ['Objevil se web v AI vyhledávání?', 'Ano, v Google AI Overview']]) {
  if (!new RegExp(`${hd.replace(/[?.„“]/g, '\\$&')}</h2>\\s*<p class="answer">${ans.replace(/\./g, '\\.')}`).test(h)) e(`answer-first: ${hd}`);
}
const six = (h.match(/Co bych zopakoval na jakémkoli podobném projektu\?<\/h2>\s*<ol class="case-steps">([\s\S]*?)<\/ol>/) || [, ''])[1];
if ([...six.matchAll(/<li><h3>/g)].length !== 6) e('six conclusions expected');
// Author quote between the conclusions and the FAQ, signed with the photo and the link
const AQ = 'SEO není magie. Je to systém, a správně postavený systém funguje i mimo sezónu, v malých městech i tehdy, když začínáte od nuly.';
const ia = mainTxt.indexOf(AQ);
if (!(mainTxt.indexOf('Co bych zopakoval') < ia && ia < mainTxt.indexOf('Časté otázky k případové studii'))) e('author quote between the conclusions and the FAQ');
if (!/<cite><a href="\/o-mne\/">Arsenii Eranosian<\/a><span>SEO a GEO\/AEO specialista<\/span><\/cite>/.test(main)) e('author quote signature');
const wc = mainTxt.split(/\s+/).length;
if (wc < 1000 || wc > 2400) e(`word count ${wc}`);

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), art = by('Article'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ser = by('CreativeWorkSeries');
const quotes = ld.filter((n) => n['@type'] === 'Quotation');
if (ld.some((n) => ['Service', 'Offer', 'Review', 'AggregateRating', 'VideoObject'].includes(n['@type']))) e('no Service / Offer / Review / ratings / VideoObject in the markup');
if (norm(wp.name) !== title || norm(wp.description) !== desc || wp.inLanguage !== 'cs') e('WebPage name / description / inLanguage');
if (wp.relatedLink !== `${BASE}/pripadove-studie/seo-v-nizke-sezone/`) e('WebPage.relatedLink = Part 2');
if (wp.primaryImageOfPage !== `${BASE}/images/pripadove-studie/og-seo-prekladatelska-agentura.png`) e('primaryImageOfPage');
if (!byline || byline[1] !== wp.dateModified || art.dateModified !== wp.dateModified) e(`dateModified ${wp.dateModified} must match the visible byline`);
if (wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#article` || art.mainEntityOfPage['@id'] !== wp['@id']) e('WebPage / Article references');
if (norm(art.headline) !== H1 || art.author['@id'] !== by('Person')['@id'] || art.datePublished !== '2026-10-21') e('Article headline / author / datePublished');
if (art.isPartOf['@id'] !== `${BASE}/pripadove-studie/#seo-case-series` || ser?.['@id'] !== art.isPartOf['@id'] || ser.name !== 'SEO případová studie překladatelské agentury') e('case series');
const ment = (art.mentions ?? []).map((m) => m['@id']);
for (const p of ['/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/']) if (!ment.includes(`${BASE}${p}#service`)) e(`Article.mentions ${p}`);
if (quotes.length !== 2) e('two Quotation nodes (the author and the owner)');
else {
  const [q1, q2] = quotes;
  if (q1['@id'] !== `${BASE}${URL_PATH}#quote-1` || q1.text !== AQ || q1.creator['@id'] !== by('Person')['@id'] || q1.inLanguage !== 'cs' || q1.isPartOf['@id'] !== wp['@id']) e('Quotation #quote-1 (author)');
  const owner = ld.find((n) => n['@id'] === q2.creator?.['@id']);
  if (q2['@id'] !== `${BASE}${URL_PATH}#quote-2` || q2.text !== OQ || !owner || owner['@type'] !== 'Person' || owner.name !== 'Yelyzaveta Butyrina' || owner.jobTitle !== 'majitelka Make Up Digital Agency' || !(owner.sameAs ?? []).includes('https://www.instagram.com/elzabutirina/')) e('Quotation #quote-2 (owner with Instagram)');
}
const imgs = ld.filter((n) => n['@type'] === 'ImageObject' && /#img-(owner|languages)$/.test(n['@id']));
if (imgs.length !== 2 || imgs.some((n) => !n.contentUrl || !n.caption || !n.width || !n.height)) e('ImageObject: owner photo + language screenshot');
if (!(art.image ?? []).some((r) => r['@id'] === `${BASE}${URL_PATH}#img-languages`)) e('Article.image → language screenshot');
if (fq.mainEntity.length !== 5 || !fq.mainEntity.every((q) => body.includes(norm(q.name)) && body.includes(norm(q.acceptedAnswer.text)))) e('5 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > Případové studie > SEO pro překladatelskou agenturu: půl roku' || bc.itemListElement.at(-1).item || bc.itemListElement[1].item !== `${BASE}/pripadove-studie/`) e('breadcrumb (three levels)');
if (/KB P|kbpreklady|Instagram/.test(JSON.stringify(ld.filter((n) => !['Person', 'ProfessionalService', 'WebSite', 'ImageObject'].includes(n['@type']) || n['@id']?.includes('#owner'))).replace(/instagram\.com\/(elzabutirina|mr\.eranosian)/g, ''))) e('client name / domain in the markup');

// Site: listed on /pripadove-studie/ next to the 4-month case, linked from Start and Full SEO with the half-year line, in the sitemap
const list = readFileSync('dist/pripadove-studie/index.html', 'utf8');
if (!list.includes(`href="${URL_PATH}"`) || !list.includes('href="/pripadove-studie/seo-prekladatelska-agentura-4-mesice/"')) e('case list: both translation-agency cases (4 months and half a year) are listed');
const sm = readFileSync('dist/sitemap.xml', 'utf8');
if (!sm.includes(`${BASE}${URL_PATH}`) || !sm.includes(`${BASE}/pripadove-studie/seo-prekladatelska-agentura-4-mesice/`)) e('sitemap: both addresses');
const HL = 'Překladatelská agentura, půl roku práce: poptávky tři měsíce po sobě +65–70 % měsíčně, B2B poptávky ×3 (+200 %), březen–září 2026.';
for (const p of ['dist/start-3-mesice/index.html', 'dist/full-seo/index.html']) if (!txt(readFileSync(p, 'utf8')).includes(HL)) e(`${p}: the half-year line`);
// .htaccess: the new address is a real page (no redirect away from it); the 4-month address is a real page too
const ht = readFileSync('public/.htaccess', 'utf8');
if (/\^\/pripadove-studie\/seo-prekladatelska-agentura\/\?\$/.test(ht) || /\^\/pripadove-studie\/seo-prekladatelska-agentura-4-mesice\/\?\$ /.test(ht)) e('.htaccess: no redirect away from either translation-agency case address');
if (!/\^\/pripadove-studie\/kb-preklady\/\?\$ https:\/\/seo-eranosian\.com\/pripadove-studie\/seo-prekladatelska-agentura-4-mesice\/\n/.test(ht)) e('.htaccess: kb-preklady → the 4-month case');

if (errors.length) {
  console.error(`\nCzech half-year case check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Czech half-year case check passed: cs.');
