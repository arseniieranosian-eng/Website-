// Check of the blog article /blog/tisk-online-co-jsem-zjistil/ (brief of 14.11.2026): meta limits (Title <= 50, Description <= 130), direct answers (50/41/45/46/42/42), summary 52, FAQ (46/41/44/54) = JSON-LD,
// the author's numbers, the table sums (27+1+1+1 = 30, 29+1 = 30), no site names and no forbidden words, the allowed links only (three Google pages, the related article, one CTA button), no capacity phrase / prices, no Cyrillic.
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/blog/tisk-online-co-jsem-zjistil/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'Tisk online: co jsem zjistil | Eranosian' || title.length > 50) e(`title ${title.length}`);
if (h1 !== 'Co jsem zjistil ve výsledcích Googlu a Seznamu pro „tisk online“') e('H1');
if (desc.length > 130 || !desc.startsWith('K 14. 11. 2026 jsem na Googlu a Seznamu prošel po 30 výsledcích')) e(`description ${desc.length}`);
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/tisk-online-co-jsem-zjistil/">')) e('canonical');
if (!h.includes('hreflang="x-default"') && !h.includes('hreflang="cs')) e('hreflang');
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]).split(' ').length);
if (answers.join() !== '50,41,45,46,42,42') e(`direct answers: ${answers}`);
const sum = inl((main.match(/<div class="summary-box">([\s\S]*?)<\/div>/) || [, ''])[1]).split(' ').length;
if (sum !== 52) e(`summary ${sum}`);
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 4 || faq.map(([, a]) => a.split(' ').length).join() !== '46,41,44,54') e('FAQ 4 questions: 46/41/44/54');
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 5) e('numbered list with 5 steps');
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 2) e('two tables');
else {
  const rows = [...tables[0].matchAll(/<tr><th scope="row">([\s\S]*?)<\/th><td>(\d+)<\/td><td>(\d+)<\/td><\/tr>/g)].map((m) => [txt(m[1]), +m[2], +m[3]]);
  const g = Object.fromEntries(rows.map(([n, a, b]) => [n, [a, b]]));
  if (rows.length !== 7 || g['Celkem výsledků'].join() !== '30,30' || g['Výsledky z webů tiskových služeb'][0] + g['Katalog'][0] + g['Designový nástroj'][0] + g['Firemní stránka bez služby'][0] !== 30 || g['Výsledky z webů tiskových služeb'][1] + g['Tržiště'][1] !== 30 || g['Weby tiskových služeb (různé)'].join() !== '24,24') e('types table: 27+1+1+1 = 30 and 29+1 = 30');
  const r2 = [...tables[1].matchAll(/<tr><th scope="row">([\s\S]*?)<\/th><td>([\s\S]*?)<\/td><td>([\s\S]*?)<\/td><\/tr>/g)].map((m) => [txt(m[2]), txt(m[3])].join('/'));
  if (r2.join('|') !== '0/1|8/10|1/2|14/12|1/0|13/13|2/2|8/9|1/0|11/13|13/11|11: ano 1, částečně 3, ne 7/9: ano 0, částečně 1, ne 8') e(`second table: ${r2}`);
}
let ld = [];
for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.inLanguage !== 'cs-CZ' || bp.headline !== h1 || bp.datePublished !== '2026-11-14' || bp.dateModified !== '2026-11-14') e('BlogPosting');
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/o-mne/', 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', 'https://developers.google.com/search/docs/crawling-indexing/url-structure', 'https://developers.google.com/search/docs/appearance/ai-features', '/blog/duplicitni-stranky-eshop-tisk-varianty/', '/seo-pro-tiskarny-a-polygrafii/'];
if (links.some((l) => !okLinks.includes(l)) || okLinks.some((l) => !links.includes(l)) || (main.match(/class="btn btn--primary/g) || []).length !== 1 || /<form/.test(main)) e(`links / one button: ${links}`);
const body = txt(main);
if (/\bTOP\b|nejlepší|slabé SEO|slabá konkurence|silný konkurent|\bchyba\b|lépe než|snáz|rychleji|HowTo|(?<!ne)zaručuj(?!i)|Kč|volný|tři firmy/i.test(body.replace('Znamená to, že jsou tyto weby slabé?', ''))) e('forbidden word');
if (/Vistaprint|Printo|Helloprint|Pixartprinting|Zoner|Fotolab|Fotoknihy|Heureka|Zboží|Alza|Firmy\.cz|Canva|Google Maps|Mapy\.com/i.test(body)) e('named site');
if (/[Ѐ-ӿ]/.test(body.replace('(rozhraní v ruštině)', ''))) e('Cyrillic in the Czech text');
for (const k of ['poslední aktualizace 10. 12. 2025', 'aktualizováno 21. 10. 2026', 'aktualizováno 10. 12. 2025']) if (!body.includes(k)) e(`source / date: ${k}`);
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || body.indexOf('Jsem SEO specialista') > body.indexOf('Pokud provozujete tiskárnu') || !body.trim().endsWith('Našli jste chybu? Napište mi.')) e('K5 before CTA, K7 last');
if (errs.length) { console.error('✗ check-post-tisk-online-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-tisk-online-cs: ok (answers ${answers})`);
