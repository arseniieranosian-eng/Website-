// Check of the blog article /blog/obchody-s-elektronikou-praha-co-jsem-zjistil/ (brief of 13.11.2026): meta lengths, direct answers (44/41/43/42/42), FAQ (45/43/43/46) = JSON-LD, the author's numbers,
// the sum of the table = 30, no site names and no forbidden words, the allowed links only (three Google pages, the related article, one CTA button), no capacity phrase / prices, no Cyrillic.
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/blog/obchody-s-elektronikou-praha-co-jsem-zjistil/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'Obchody s elektronikou v Praze: co jsem zjistil | Eranosian' || title.length !== 59) e(`title ${title.length}`);
if (h1 !== 'Co jsem zjistil na webech obchodů s elektronikou v Praze' || h1.length !== 56) e('H1');
if (desc.length !== 135 || !desc.startsWith('K 12. 11. 2026 jsem prošel 30 výsledků')) e(`description ${desc.length}`);
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/obchody-s-elektronikou-praha-co-jsem-zjistil/">')) e('canonical');
if (!h.includes('hreflang="x-default"') && !h.includes('hreflang="cs')) e('hreflang');
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]).split(' ').length);
if (answers.join() !== '44,41,43,42,42') e(`direct answers: ${answers}`);
const sum = inl((main.match(/<div class="summary-box">([\s\S]*?)<\/div>/) || [, ''])[1]).split(' ').length;
if (sum !== 49) e(`summary ${sum}`);
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 4 || faq.map(([, a]) => a.split(' ').length).join() !== '45,43,43,46') e('FAQ 4 questions: 45/43/43/46');
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 5) e('numbered list with 5 steps');
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 2) e('two tables');
else {
  const rows = [...tables[0].matchAll(/<tr><th scope="row">([\s\S]*?)<\/th><td>(\d+)<\/td><\/tr>/g)].map((m) => [txt(m[1]), +m[2]]);
  const total = rows.find(([n]) => n === 'Celkem');
  if (!total || total[1] !== 30 || rows.filter(([n]) => n !== 'Celkem').reduce((a, [, v]) => a + v, 0) !== 30 || rows.map(([, v]) => v).join() !== '16,8,4,1,1,30') e('types table: 16 + 8 + 4 + 1 + 1 = 30');
  const r2 = [...tables[1].matchAll(/<tr><th scope="row">([\s\S]*?)<\/th><td>([\s\S]*?)<\/td><\/tr>/g)].map((m) => txt(m[2]));
  if (r2.join('|') !== 'žádný web|žádný web|5|7|4|8|9|3') e(`second table: ${r2}`);
}
let ld = [];
for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.inLanguage !== 'cs-CZ' || bp.headline !== h1 || bp.datePublished !== '2026-11-13' || bp.dateModified !== '2026-11-13') e('BlogPosting');
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/o-mne/', 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', 'https://developers.google.com/search/docs/crawling-indexing/url-structure', 'https://developers.google.com/search/docs/appearance/ai-features', '/blog/duplicitni-stranky-eshop-tisk-varianty/', '/seo-pro-obchody-s-elektronikou/'];
if (links.some((l) => !okLinks.includes(l)) || okLinks.some((l) => !links.includes(l)) || (main.match(/class="btn btn--primary/g) || []).length !== 1 || /<form/.test(main)) e(`links / one button: ${links}`);
const body = txt(main);
if (/\bTOP\b|nejlepší|slabé SEO|slabá konkurence|silný konkurent|\bchyba\b|lépe než|snáz|rychleji|HowTo|(?<!ne)zaručuj(?!i)|Kč|volný|tři firmy/i.test(body.replace('Znamená to, že jsou tyto weby slabé?', ''))) e('forbidden word');
if (/Google Maps|Mapy\.com|Firmy\.cz|Heureka|Zboží|Alza|Datart|Mall|CZC|rozhraní Google|angličtin|ruštin|češtin/i.test(body)) e('named site or interface language');
if (/[Ѐ-ӿ]/.test(body)) e('Cyrillic in the Czech text');
for (const k of ['Zdroj: Google Search Central, „Ranking systems guide“', 'poslední aktualizace 10. 12. 2025', 'aktualizováno 21. 10. 2026', 'aktualizováno 10. 12. 2025']) if (!body.includes(k)) e(`source / date: ${k}`);
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || body.indexOf('Jsem SEO specialista') > body.indexOf('Pokud provozujete obchod s elektronikou') || !body.trim().endsWith('Našli jste chybu? Napište mi.')) e('K5 before CTA, K7 last');
if (errs.length) { console.error('✗ check-post-electronics-obs-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-electronics-obs-cs: ok (answers ${answers})`);
