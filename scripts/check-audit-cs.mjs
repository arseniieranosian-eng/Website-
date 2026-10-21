// Post-build check of /audit-zdarma/ (cs) against its brief of 20.10.2026.
import { readFileSync } from 'node:fs';

const BASE = 'https://seo-eranosian.com';
const URL_PATH = '/audit-zdarma/';
const H1 = 'Bezplatný SEO audit technických chyb vašeho webu';
const SECTIONS = [H1, 'Co v bezplatném auditu zkontroluji?', 'Co v auditu nenajdete?', 'Jak audit probíhá?', 'Jak vypadá výstup auditu?', 'Čím se bezplatný audit liší od placené konzultace?', 'Co po auditu?', 'Co říkají výsledky a klienti?', 'Související články', 'Časté otázky k bezplatnému auditu', 'Požádejte o bezplatný audit'];
const LINKS = ['/konzultace/', '/start-3-mesice/', '/full-seo/', '/lokalni-seo-mapy/', '/seo-a-geo/', '/recenze/', '/o-mne/', '/pripadove-studie/seo-prekladatelska-agentura-4-mesice/', '/ochrana-osobnich-udaju/'];
// Out of scope for the free audit and the old page text: must not appear as promises (the "not included" table names them)
const FORBIDDEN = ['KB PŘEKLADY', '20minut', '20 minut', '5–10', '5-10', '×300', '×6', 'VEED'];

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const norm = (s) => s.replace(/[\s\u00a0]+/g, ' ').trim();
const txt = (s) => norm(dec(s.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/ ([.,:;!?)])/g, '$1'));
const errors = [];
const e = (m) => errors.push(m);

const h = readFileSync('dist/audit-zdarma/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const body = txt(h);
const mainTxt = txt(main);
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
if (title !== 'Bezplatný SEO audit webu: technické chyby | Eranosian' || title.length < 50 || title.length > 60) e(`title: ${title} (${title.length})`);
if (desc !== 'Bezplatná kontrola technických chyb webu: indexace, duplicity a další problémy. Prezentace do 24 hodin, bez callu a bez závazků. Požádejte o audit.') e(`description: ${desc}`);
if (title.replace(/ \| Eranosian$/, '') === H1) e('title must differ from H1');
if (!h.includes(`<link rel="canonical" href="${BASE}${URL_PATH}">`)) e('canonical');
if (!h.includes('<meta property="og:locale" content="cs_CZ">') || !h.includes('<meta property="og:type" content="website">')) e('og:locale cs_CZ / og:type website');
for (const [l, p] of [['cs', URL_PATH], ['en', '/en/free-audit/'], ['ru', '/ru/besplatnyj-audit/'], ['x-default', URL_PATH]]) if (!h.includes(`hreflang="${l}" href="${BASE}${p}"`)) e(`hreflang ${l} -> ${p}`);
const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => txt(m[1]));
if (h1s.length !== 1 || h1s[0] !== H1) e(`H1: ${JSON.stringify(h1s)}`);
const hs = [...h.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => txt(m[1])).filter((x) => SECTIONS.includes(x));
if (JSON.stringify(hs) !== JSON.stringify(SECTIONS)) e(`section order: ${JSON.stringify(hs)}`);
for (const f of FORBIDDEN) if (mainTxt.includes(f)) e(`forbidden text: ${f}`);
for (const l of LINKS) if (!h.includes(`href="${l}"`)) e(`missing internal link ${l}`);
if (/★|AggregateRating|ratingValue/.test(h)) e('no stars / AggregateRating');
if (!/<input[^>]*name="website"[^>]*required/.test(h)) e('website field must be required');
if (/SEO \+ GEO/.test(main)) e('the form must not offer "SEO + GEO/AEO"');

// Hero
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
const words = lead.split(/\s+/).length;
if (!lead.startsWith('Pošlete adresu webu a do 24 hodin') || words < 28 || words > 50) e(`hero answer (${words} words)`);
if (!mainTxt.includes('Audit vyhodnocuji sám jako specialista, nejde o automatický report z nástroje.')) e('trust line');
const date = h.match(/Autor: <a href="\/o-mne\/">Arsenii Eranosian<\/a> · Aktualizováno: <time datetime="([^"]+)">([^<]+)<\/time>/);

// Out-of-scope table, comparison table, scope list
const rows = [...h.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => txt(c[1])));
const EXPECT = [
  ['Téma', 'Kde se řeší'],
  ['Klíčová slova', 'SEO konzultace'],
  ['Konkurence', 'SEO konzultace, SEO start na 3 měsíce'],
  ['Mapy a lokální SEO', 'Mapy (Google Maps + Mapy.com)'],
  ['Viditelnost v AI', 'SEO a GEO/AEO'],
  ['Rychlost, Core Web Vitals, mobilní verze', 'v bezplatném auditu je nekontroluji'],
  ['Parametr', 'Bezplatný audit', 'SEO konzultace'],
  ['Cena', 'zdarma', '2 000 Kč za 1 hodinu nebo 3 000 Kč za audit bez časového limitu'],
  ['Co řeší', 'technické chyby, indexace, duplicity', 'audit, plán na 12 měsíců'],
  ['Výstup', 'krátká prezentace do 24 hodin', 'u varianty s auditem prezentace do 2 pracovních dnů, u hodinové konzultace krátké písemné shrnutí'],
];
if (JSON.stringify(rows) !== JSON.stringify(EXPECT)) e(`tables: ${JSON.stringify(rows)}`);
for (const [hd, ans] of [['Co v bezplatném auditu zkontroluji?', 'Kontroluji technické chyby webu'], ['Co v auditu nenajdete?', 'V bezplatném auditu neřeším'], ['Jak audit probíhá?', 'Vyplníte formulář s adresou webu'], ['Jak vypadá výstup auditu?', 'Výstupem je krátká prezentace'], ['Čím se bezplatný audit liší od placené konzultace?', 'Bezplatný audit hledá jen technické chyby'], ['Co po auditu?', 'Rozhodnete se sami']]) {
  if (!new RegExp(`${hd.replace(/[?.]/g, '\\$&')}</h2>\\s*<p class="answer">${ans}`).test(h)) e(`answer-first: ${hd}`);
}
const checks = [...(h.match(/Co v bezplatném auditu zkontroluji\?[\s\S]*?<ul class="checks">([\s\S]*?)<\/ul>/) || [, ''])[1].matchAll(/<li>/g)].length;
if (checks !== 3) e(`three checks expected, found ${checks}`);
if (!mainTxt.includes('Bezplatný audit je') && false) e('');

const ld = JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const by = (t) => ld.find((n) => n['@type'] === t);
const wp = by('WebPage'), sv = by('Service'), fq = by('FAQPage'), bc = by('BreadcrumbList'), ht = by('HowTo'), vd = by('VideoObject');
if (ld.some((n) => ['AggregateRating', 'Review'].includes(n['@type'])) || sv.review) e('no AggregateRating / Review');
if (/klíčov|konkurenc|mapy|viditelnost|rychlost|Core Web|mobiln/i.test(JSON.stringify([sv.name, sv.serviceType, sv.description, sv.offers]))) e('Service markup must describe technical errors only');
if (wp.name !== title || wp.description !== desc || wp.inLanguage !== 'cs') e('WebPage name / description / inLanguage');
if (!date || date[1] !== wp.dateModified) e(`dateModified ${wp.dateModified} != visible ${date && date[1]}`);
if (wp.mainEntity['@id'] !== `${BASE}${URL_PATH}#service`) e('WebPage.mainEntity');
if (sv.name !== 'Bezplatný SEO audit technických chyb webu' || sv.serviceType !== 'Audit technických chyb webu') e('Service name / serviceType');
if (!body.includes(norm(sv.description))) e('Service.description not visible');
if (sv.provider['@id'] !== by('Person')['@id']) e('provider must reference Person');
if (JSON.stringify(sv.areaServed) !== JSON.stringify(['Česko', 'Spojené státy', 'Evropská unie']) || JSON.stringify(sv.availableLanguage) !== JSON.stringify(['cs', 'en', 'ru'])) e('areaServed / availableLanguage');
const o = sv.offers;
if (Array.isArray(o) || o.price !== '0' || o.priceCurrency !== 'CZK' || o.url !== `${BASE}${URL_PATH}`) e('single free Offer, price 0 CZK');
if (!ht || ht['@id'] !== `${BASE}${URL_PATH}#howto` || ht.totalTime !== 'PT24H' || ht.step.length !== 4) e('HowTo: expected #howto, PT24H and 4 steps');
else {
  const ol = [...(h.match(/<ol class="steps[^>]*>([\s\S]*?)<\/ol>/) || [, ''])[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => txt(m[1]));
  ht.step.forEach((st, i) => { if (ol[i] !== st.text || st.position !== i + 1 || !st.name) e(`step ${i + 1}: <ol> "${ol[i]}" != HowToStep`); });
}
if (fq.mainEntity.length !== 6 || !fq.mainEntity.every((q) => body.includes(norm(q.name)) && body.includes(norm(q.acceptedAnswer.text)))) e('6 FAQ Q/A not visible verbatim');
if (bc['@id'] !== wp.breadcrumb['@id'] || bc.itemListElement.map((i) => i.name).join(' > ') !== 'Domů > Bezplatný audit' || bc.itemListElement.at(-1).item) e('breadcrumb');
// Quote after "Co v auditu nenajdete?", before "Jak audit probíhá?" (not in the hero), with the Quotation node
const QT = 'Raději hned řeknu, co bezplatný audit nenajde, než slíbím víc, než dokáže.';
const qf = h.match(/<figure class="quote-fig">\s*<blockquote cite="([^"]*)"><p>([^<]*)<\/p><\/blockquote>\s*<figcaption><img src="\/images\/author-1-avatar\.jpg"[^>]*><span>— <a href="\/o-mne\/">Arsenii Eranosian<\/a>, SEO a GEO\/AEO specialista<\/span><\/figcaption>/);
if (!qf || qf[2] !== QT || qf[1] !== `${BASE}${URL_PATH}`) e('quote figure: text, cite, caption with a link to /o-mne/');
const iq = mainTxt.indexOf(QT);
if (!(mainTxt.indexOf('Co v auditu nenajdete?') < iq && iq < mainTxt.indexOf('Jak audit probíhá?')) || iq < mainTxt.indexOf('Co v bezplatném auditu zkontroluji?')) e('quote position: after "Co v auditu nenajdete?", before "Jak audit probíhá?"');
const qn = ld.find((n) => n['@type'] === 'Quotation');
if (!qn || qn['@id'] !== `${BASE}${URL_PATH}#quote-1` || qn.text !== QT || qn.creator['@id'] !== by('Person')['@id'] || qn.inLanguage !== 'cs' || qn.isPartOf['@id'] !== wp['@id']) e('Quotation node');
// Video: when present, everything lines up
const hasVideo = /<video/.test(h);
if (hasVideo !== Boolean(vd)) e('<video> and VideoObject must appear together');
if (hasVideo) {
  if (!/<video[^>]*controls[^>]*preload="metadata"[^>]*poster=/.test(h) || /autoplay/.test(h)) e('video: controls, preload=metadata, poster, no autoplay');
  if (!body.includes(norm(vd.description)) || !body.includes(norm(vd.transcript))) e('video description / transcript must be visible');
  if (!vd.contentUrl || vd.embedUrl || wp.video?.['@id'] !== vd['@id'] || vd.name !== 'Ukázka výstupu bezplatného SEO auditu (anonymizováno)') e('VideoObject fields');
}
// One source: the case line equals the shared one, the consultation prices come from the consultation page
if (!mainTxt.includes('Překladatelská agentura se třemi pobočkami')) e('case line from the shared source');
if (!readFileSync('dist/konzultace/index.html', 'utf8').includes('2 000') ) e('consultation price source');
// The old page text is gone
if (/Technické SEO|Mapy a lokální SEO<\/strong>|ChatGPT/.test(main)) e('old five-direction block must be gone');

// Related articles: eight cards with covers, linking to the audit-funnel articles (not the advertising one)
const ra = (h.match(/Související články<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...ra.matchAll(/<a class="card card--link post-card" href="\/blog\/[a-z0-9-]+\/"[^>]*>\s*<img class="post-card-img"/g)].length !== 8 || ra.includes('/blog/seo-a-reklama/')) e('related articles: eight cards with covers, no advertising article');
if (errors.length) {
  console.error(`\nCzech audit page check failed (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`Czech audit page check passed: cs${hasVideo ? ' (with video)' : ''}.`);
