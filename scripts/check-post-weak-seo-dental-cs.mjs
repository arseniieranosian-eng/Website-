// Check of the blog article /blog/slabe-seo-konkurence-zubni-ordinace/ (rewritten 15.11.2026 as a neutral observation "stomatologie v Praze", Google + Seznam): meta (Title 49, Description 128, H1 73),
// summary 56, direct answers (51/44/49/50/46/43), FAQ (38/50/44/55) = JSON-LD, the author's numbers, no old claims (14 webů, 31. 10. 2026 only in the update line, "Domněnkou", weak competition), no site names,
// the allowed links only (three Google pages, the landing page, the related articles), one CTA button, no Cyrillic.
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/blog/slabe-seo-konkurence-zubni-ordinace/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'Stomatologie v Praze: co jsem zjistil | Eranosian' || title.length !== 49) e(`title ${title.length}`);
if (h1 !== 'Co jsem zjistil ve výsledcích Googlu a Seznamu pro „stomatologie v Praze“' || h1.length !== 73) e('H1');
if (desc.length !== 128 || !desc.startsWith('K 15. 11. 2026 jsem na Googlu a Seznamu prošel po 30 výsledcích')) e(`description ${desc.length}`);
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/slabe-seo-konkurence-zubni-ordinace/">')) e('canonical');
if (!h.includes('hreflang="x-default"') && !h.includes('hreflang="cs')) e('hreflang');
if (!/Aktualizováno: <time datetime="2026-11-15">15\. 11\. 2026<\/time>/.test(h)) e('dates: 4. 11. 2026 / 15. 11. 2026');
if (!main.includes('Aktualizace 15. 11. 2026: původní pozorování z 31. 10. 2026 (14 webů) jsem nahradil širším vzorkem z Googlu a Seznamu.')) e('update line');
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]).split(' ').length;
if (lead !== 56) e(`summary ${lead}`);
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]).split(' ').length);
if (answers.join() !== '51,44,49,50,46,43') e(`direct answers: ${answers}`);
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
if (h2.slice(0, 7).some((x) => !x.endsWith('?') && x !== 'Časté otázky') || h2.length !== 8) e(`H2: ${h2}`);
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 4 || faq.map(([, a]) => a.split(' ').length).join() !== '38,50,44,55') e('FAQ 4 questions: 38/50/44/55');
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 4) e('numbered list with 4 steps');
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 1) e('one table');
else {
  const rows = [...tables[0].matchAll(/<tr><th scope="row">([\s\S]*?)<\/th><td>([\s\S]*?)<\/td><td>([\s\S]*?)<\/td><\/tr>/g)].map((m) => [txt(m[2]), txt(m[3])].join('|'));
  if (rows.join(';') !== '7 / 1|3 / 0;12 / 3|8 / 1;17|11;2|1;0 / 2 / 2|0 / 1 / 5') e(`table: ${rows}`);
}
if ((main.match(/<blockquote/g) || []).length !== 1) e('one quote');
let ld = [];
for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.inLanguage !== 'cs-CZ' || bp.headline !== h1 || bp.datePublished !== '2026-11-04' || bp.dateModified !== '2026-11-15' || bp.description !== desc) e('BlogPosting');
const wp = ld.find((x) => x['@type'] === 'WebPage');
if (!wp || wp.name !== 'Stomatologie v Praze: co jsem zjistil' || wp.dateModified !== '2026-11-15') e('WebPage');
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/o-mne/', 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', 'https://developers.google.com/search/docs/crawling-indexing/url-structure', 'https://developers.google.com/search/docs/appearance/ai-features', '/kontakt/', '/seo-pro-zubni-ordinace-praha/', '/blog/jak-ziskat-pacienty-pro-zubni-ordinaci/', '/blog/faq-na-webu-zubni-ordinace/'];
if (links.some((l) => !okLinks.includes(l)) || okLinks.some((l) => !links.includes(l)) || (main.match(/class="btn btn--primary/g) || []).length !== 1 || /<form/.test(main)) e(`links / one button: ${links}`);
const body = txt(main);
const UPD = /Aktualizace 15\. 11\. 2026: původní pozorování z 31\. 10\. 2026 \(14 webů\) jsem nahradil širším vzorkem z Googlu a Seznamu\./;
if (/\bTOP\b|nejlepší|slabé SEO|slabá konkurence|silný konkurent|Domněnkou|mezera na trhu|nikdo nemá|lépe než|snáz|rychleji|HowTo|(?<!ne)zaručuj(?!i)|Kč|volno|u 11 z 14/i.test(body.replace(UPD, ''))) e('forbidden word');
if (/Zoner|Dentist|Dentalni|Zdravotnictví|Znamylekar|ZnamyLekar|Doktor|Heureka|Firmy\.cz|Mapy\.com|Alza/i.test(body.replace('Mapy.com', ''))) e('named site');
if (/14 webů|31\. 10\. 2026/.test(body.replace(UPD, ''))) e('old numbers outside the update line');
if (/[Ѐ-ӿ]/.test(body.replace('(rozhraní v ruštině)', ''))) e('Cyrillic in the Czech text');
for (const k of ['aktualizováno 10. 12. 2025', 'aktualizováno 21. 10. 2026']) if (!body.includes(k)) e(`source / date: ${k}`);
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || !body.includes('Našli jste chybu? Napište mi.') || body.indexOf('Jsem SEO specialista') > body.indexOf('Chcete, aby byl web vaší zubní ordinace')) e('K5 before CTA, K7');
if (errs.length) { console.error('✗ check-post-weak-seo-dental-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-weak-seo-dental-cs: ok (answers ${answers})`);
