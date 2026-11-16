// Check of the blog article /blog/cnc-obrabeni-co-jsem-zjistil/ (brief of 16.11.2026, neutral observation "CNC obrábění", Google + Seznam): meta (Title 41, Description 127, H1 65), summary 55, direct answers
// (51/46/46/50/46/43), FAQ (42/50/44/55) = JSON-LD, the author's numbers, dates set by hand (16. 11. 2026), no site names, no ratings of other sites' Titles, no weak-competition wording, the allowed links only
// (three Google pages, the landing page), one CTA button, no block "Další články", no Cyrillic.
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/blog/cnc-obrabeni-co-jsem-zjistil/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'CNC obrábění: co jsem zjistil | Eranosian' || title.length !== 41) e(`title ${title.length}`);
if (h1 !== 'Co jsem zjistil ve výsledcích Googlu a Seznamu pro „CNC obrábění“' || h1.length !== 65) e('H1');
if (desc.length !== 127 || !desc.startsWith('K 16. 11. 2026 jsem na Googlu a Seznamu prošel po 30 výsledcích dotazu „CNC obrábění“')) e(`description ${desc.length}`);
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/cnc-obrabeni-co-jsem-zjistil/">')) e('canonical');
if (!h.includes('hreflang="x-default"') && !h.includes('hreflang="cs')) e('hreflang');
if (!/Aktualizováno: <time datetime="2026-11-16">16\. 11\. 2026<\/time>/.test(h)) e('dates: 16. 11. 2026');
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]).split(' ').length;
if (lead !== 55) e(`summary ${lead}`);
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]).split(' ').length);
if (answers.join() !== '51,46,46,50,46,43') e(`direct answers: ${answers}`);
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
if (h2.slice(0, 6).some((x) => !x.endsWith('?')) || h2[6] !== 'Časté otázky' || h2.length !== 7) e(`H2: ${h2}`);
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 4 || faq.map(([, a]) => a.split(' ').length).join() !== '42,50,44,55') e('FAQ 4 questions: 42/50/44/55');
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 4) e('numbered list with 4 steps');
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 1) e('one table');
else {
  const rows = [...tables[0].matchAll(/<tr><th scope="row">([\s\S]*?)<\/th><td>([\s\S]*?)<\/td><td>([\s\S]*?)<\/td><\/tr>/g)].map((m) => [txt(m[2]), txt(m[3])].join('|'));
  if (rows.join(';') !== '2 / 1|4 / 1;7 / 1|3 / 0;15|10;2|2;5 / 10 / 5|1 / 1 / 4') e(`table: ${rows}`);
}
if ((main.match(/<blockquote/g) || []).length !== 1) e('one quote');
// D1: methodology line + chart (numbers: 24/2/4 and 22/6/2), caption, aria-label with the numbers, no links inside, no libraries
if (!main.includes('Metodika a limity: jeden dotaz, jeden den, jedno zařízení (notebook, Praha); výsledky se mění podle osoby, polohy a času.') || main.indexOf('Metodika a limity') > main.indexOf('<blockquote') || main.indexOf('Metodika a limity') < main.indexOf('</table>')) e('methodology line after the table, before the quote');
const chart = (main.match(/<figure class="stack-chart">[\s\S]*?<\/figure>/) || [''])[0];
const segs = [...chart.matchAll(/<span class="stack-chart__seg stack-chart__seg--\d" style="flex: (\d+) 1 0">(\d+)<\/span>/g)].map((m) => +m[2]);
if (segs.join() !== '24,2,4,22,6,2' || (chart.match(/flex: (\d+) 1 0/g) || []).join() !== ['24', '2', '4', '22', '6', '2'].map((n) => `flex: ${n} 1 0`).join()) e(`chart numbers: ${segs}`);
if (!/aria-label="Složení 30 výsledků pro „CNC obrábění“, 16\. 11\. 2026: weby firem, katalogy, ostatní \(Google a Seznam\)\. Google: weby firem 24, katalogy 2, ostatní 4; Seznam: weby firem 22, katalogy 6, ostatní 2\./.test(chart) || !chart.includes('Složení 30 výsledků pro „CNC obrábění“, 16. 11. 2026: weby firem, katalogy, ostatní (Google a Seznam).') || /<a |<script|<img|<svg/.test(chart) || /výzkum|průzkum/i.test(chart)) e('chart caption / aria-label / no links');
let ld = [];
for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.inLanguage !== 'cs-CZ' || bp.headline !== h1 || bp.datePublished !== '2026-11-16' || bp.dateModified !== '2026-11-16' || bp.description !== desc) e('BlogPosting');
const wp = ld.find((x) => x['@type'] === 'WebPage');
if (!wp || wp.name !== 'CNC obrábění: co jsem zjistil' || wp.dateModified !== '2026-11-16') e('WebPage');
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/o-mne/', 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', 'https://developers.google.com/search/docs/crawling-indexing/url-structure', 'https://developers.google.com/search/docs/appearance/ai-features', '/kontakt/', '/seo-pro-strojirenske-firmy/'];
if (links.some((l) => !okLinks.includes(l)) || okLinks.some((l) => !links.includes(l)) || (main.match(/class="btn btn--primary/g) || []).length !== 1 || /<form/.test(main)) e(`links / one button: ${links}`);
const body = txt(main);
if (/\bTOP\b|nejlepší|slabé SEO|slabá konkurence|silný konkurent|Domněnkou|slabá konkurence|mezera na trhu|nikdo nemá|lépe než|snáz|rychleji|HowTo|(?<!ne)zaručuj(?!i)|Kč|volno|u 11 z 14/i.test(body)) e('forbidden word');
if (/Zoner|Heureka|Firmy\.cz|Alza|Dentist|strunk|harcross|kovintrade|jafholz|tosmont|mnastrojarna|Title|Description/i.test(body.replace('Mapy.com', ''))) e('named site / ratings of other sites');
if (/Další články/.test(body)) e('no block Další články');
if (/[Ѐ-ӿ]/.test(body.replace('(rozhraní v angličtině)', ''))) e('Cyrillic in the Czech text');
for (const k of ['aktualizováno 10. 12. 2025', 'aktualizováno 21. 10. 2026']) if (!body.includes(k)) e(`source / date: ${k}`);
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || !body.includes('Našli jste chybu? Napište mi.') || body.indexOf('Jsem SEO specialista') > body.indexOf('Chcete, aby byl web vaší strojírenské firmy')) e('K5 before CTA, K7');
if (errs.length) { console.error('✗ check-post-cnc-obrabeni-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-cnc-obrabeni-cs: ok (answers ${answers})`);
