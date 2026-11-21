// Check of the blog article /blog/stomatologie-v-mapach-co-jsem-zjistil/ (brief of 21.11.2026, series "maps", pilot dentistry): meta (Title 50, Description 128, H1 75), summary 55, direct answers (59/42/54/44/42/42),
// FAQ (41/40/42/44) = JSON-LD, the author's numbers identical in the summary / H2-3 / table / chart / quote / FAQ, no type of profile / reservations / ratings / names, no "better / worse" comparison of the platforms,
// sources with the check date, ONE link to the profile article (H2-6, 200), ONE button + ONE text link, "Další články" with two links, K5 before the CTA, K7, dates by hand (21. 11. 2026), no hreflang.
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/blog/stomatologie-v-mapach-co-jsem-zjistil/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'Stomatologie v mapách: co jsem zjistil | Eranosian' || title.length !== 50) e(`title ${title.length}`);
if (h1 !== 'Co jsem zjistil v kartách Google Maps a Mapy.com pro „stomatologie v Praze“' || h1.length !== 75) e(`H1 ${h1.length}`);
if (desc !== 'K 21. 11. 2026 jsem v Google Maps a na Mapy.com prošel po 15 kartách dotazu „stomatologie v Praze“ a zapsal, co je v nich vidět.' || desc.length !== 128) e(`description ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === h1) e('Title must differ from H1');
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/stomatologie-v-mapach-co-jsem-zjistil/">')) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('hreflang: none by the convention of the published articles');
if (!/Aktualizováno: <time datetime="2026-11-21">21\. 11\. 2026<\/time>/.test(h)) e('dates 21. 11. 2026');
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead.split(' ').length !== 55 || !lead.startsWith('K 21. 11. 2026 jsem v Google Maps a na Mapy.com prošel po 15 kartách pro dotaz „stomatologie v Praze“. Web a telefon měly všechny karty. Odpověď majitele bylo vidět u 10 z 15 karet na Googlu a u 6 z 15 na Mapy.com.') || !lead.endsWith('ne průzkum trhu, a nevysvětluje pozice.')) e(`summary ${lead.split(' ').length}`);
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]).split(' ').length);
if (answers.join() !== '59,42,54,44,42,42' || answers.some((n) => n < 40 || n > 60)) e(`direct answers: ${answers}`);
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
if (h2.length !== 8 || h2.slice(0, 6).some((x) => !x.endsWith('?')) || h2[5] !== 'Jak si zkontrolovat profil ordinace v mapách?' || h2[6] !== 'Časté otázky' || h2[7] !== 'Další články') e(`H2: ${h2}`);
if (!/<h2 id="kontrola">/.test(main) && !/id="kontrola"/.test(h)) e('anchor #kontrola');
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 4 || faq.map(([, a]) => a.split(' ').length).join() !== '41,40,42,44') e('FAQ 4 questions: 41/40/42/44');
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 5 || !steps[0][1].includes('Google uvádí, že kategorie nemají sloužit jen jako klíčová slova.')) e('one numbered list with 5 steps (step 2 as in the brief)');
// table + numbers
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 1) e('one table');
else {
  const rows = [...tables[0].matchAll(/<tr><th scope="row">([\s\S]*?)<\/th><td>([\s\S]*?)<\/td><td>([\s\S]*?)<\/td><\/tr>/g)].map((m) => [txt(m[1]), txt(m[2]), txt(m[3])].join('|'));
  if (rows.join(';') !== 'Web|15 / 0 / 0|15 / 0 / 0;Telefon|15 / 0 / 0|15 / 0 / 0;Hodiny|14 / 0 / 1|14 / 0 / 1;Fotky|15 / 0 / 0|12 / 3 / 0;Odpověď majitele|10 / 5 / 0|6 / 8 / 1;Seznam služeb|9 / 5 / 1|3 / 9 / 3') e(`table: ${rows}`);
}
if (!main.includes('Karta je záznam firmy v seznamu výsledků v mapách. Odpověď majitele počítám, pokud je mezi prvními pěti zobrazenými recenzemi aspoň jedna. „Nelze určit“ znamená, že jsem údaj na kartě neviděl. Recenze a hodnocení nepočítám a názvy neuvádím.')) e('table note');
if (!main.includes('Metodika a limity: jeden dotaz, jeden den, jedno zařízení (notebook); mapa ukazovala celou Prahu, střed hledání přesně nezaznamenán (pravděpodobně Praha 6); výsledky se mění podle osoby, místa a času.') || main.indexOf('Metodika a limity') < main.indexOf('</table>') || main.indexOf('Metodika a limity') > main.indexOf('<blockquote')) e('methodology line after the table, before the quote');
// chart: 8 rows, segments = the table (zeros not drawn)
const chart = (main.match(/<figure class="stack-chart[^"]*">[\s\S]*?<\/figure>/) || [''])[0];
const crows = [...chart.matchAll(/<span class="stack-chart__bar">([\s\S]*?)<\/span>\s*<\/div>/g)].map((m) => [...m[1].matchAll(/stack-chart__seg--(\d)" style="flex: (\d+) 1 0">(\d+)</g)].map((x) => `${x[1]}:${x[3]}`).join(','));
if (crows.join(';') !== '1:15;1:12,2:3;1:10,2:5;1:6,2:8,3:1;1:9,2:5,3:1;1:3,2:9,3:3;1:14,3:1;1:14,3:1') e(`chart segments: ${crows}`);
if (!chart.includes('Co bylo vidět na kartách pro „stomatologie v Praze“, 21. 11. 2026: ano, ne, nelze určit (Google Maps a Mapy.com).') || !/aria-label="Co bylo vidět[^"]*Fotky · Google: ano 15, ne 0, nelze určit 0; Fotky · Mapy.com: ano 12, ne 3, nelze určit 0; Odpověď majitele · Google: ano 10, ne 5, nelze určit 0; Odpověď majitele · Mapy.com: ano 6, ne 8, nelze určit 1; Seznam služeb · Google: ano 9, ne 5, nelze určit 1; Seznam služeb · Mapy.com: ano 3, ne 9, nelze určit 3; Hodiny · Google: ano 14, ne 0, nelze určit 1; Hodiny · Mapy.com: ano 14, ne 0, nelze určit 1\./.test(chart) || /<a |<script|<img|<svg/.test(chart) || /výzkum|průzkum/i.test(chart)) e('chart caption / aria-label / no links');
if ((main.match(/<blockquote/g) || []).length !== 1 || !main.includes('Web a telefon byly vidět na všech kartách. Odpověď majitele a seznam služeb už vidět nebyly všude. Je to pozorování z jednoho dotazu, ne vysvětlení pozic.')) e('one quote');
// numbers in the text
const body = txt(main);
for (const f of ['Na Googlu měla jako hlavní kategorii 10 karet „Dental clinic“, 4 „Dentist“ a 1 „Oral surgeon“.', 'Na Mapy.com mělo 12 karet kategorii „Stomatologická ordinace“ a 3 jinou (poliklinika, zdravotnictví, lékař).', 'Web a telefon měly všech 15 karet na obou službách, hodiny bylo vidět u 14 z 15. Fotky měly všechny karty na Googlu a 12 z 15 na Mapy.com. Odpověď majitele bylo vidět u 10 z 15 karet na Googlu a u 6 z 15 na Mapy.com, seznam služeb u 9 a u 3.']) if (!body.includes(f)) e(`numbers: ${f.slice(0, 50)}`);
// ld
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.headline !== h1 || bp.datePublished !== '2026-11-21' || bp.dateModified !== '2026-11-21' || bp.description !== desc || bp.inLanguage !== 'cs-CZ') e('BlogPosting');
const wp = ld.find((x) => x['@type'] === 'WebPage');
if (!wp || wp.name !== 'Stomatologie v mapách: co jsem zjistil' || wp.dateModified !== '2026-11-21') e('WebPage');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList')) e('BreadcrumbList');
// links
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/o-mne/', '/kontakt/', '/lokalni-seo-mapy/', '/seo-pro-zubni-ordinace-praha/', '/blog/profil-zubni-ordinace-v-mapach/', '/blog/slabe-seo-konkurence-zubni-ordinace/', '/blog/jak-ziskat-pacienty-pro-zubni-ordinaci/', 'https://support.google.com/business/answer/7091', 'https://napoveda.firmy.cz/zaciname/kde-se-profil-zobrazuje/', 'https://support.google.com/business/answer/3038177', 'https://support.google.com/contributionpolicy/answer/7400114'];
if (links.some((l) => !okLinks.includes(l)) || okLinks.some((l) => !links.includes(l))) e(`links: ${links}`);
if (links.filter((l) => l === '/blog/profil-zubni-ordinace-v-mapach/').length !== 1 || !/<h2[^>]*>Jak si zkontrolovat profil ordinace v mapách\?<\/h2>\s*<p class="answer">[^<]*<a href="\/blog\/profil-zubni-ordinace-v-mapach\/">v samostatném článku<\/a>\./.test(main)) e('ONE link to the profile article, inside the answer of H2-6');
if (/\/(audit-zdarma|konzultace|start-3-mesice|full-seo)\//.test(links.join(' '))) e('no links to audit / consultation / Start / Full SEO');
if ((main.match(/class="btn btn--primary/g) || []).length !== 1 || !/<a class="btn btn--primary btn--lg" href="\/lokalni-seo-mapy\/">Lokální SEO pro Google Maps a Mapy\.com<\/a>/.test(main) || /<form/.test(main)) e('one button to /lokalni-seo-mapy/');
if (links.filter((l) => l === '/seo-pro-zubni-ordinace-praha/').length !== 1 || !main.includes('Podívejte se také na <a href="/seo-pro-zubni-ordinace-praha/">SEO pro zubní ordinace v Praze</a>.')) e('one text link to the niche landing');
const more = (main.match(/Další články<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...more.matchAll(/<a class="card card--link post-card" href="([^"]+)"/g)].map((m) => m[1]).join() !== '/blog/slabe-seo-konkurence-zubni-ordinace/,/blog/jak-ziskat-pacienty-pro-zubni-ordinaci/' || more.includes('profil-zubni-ordinace')) e('Další články: two links, not the profile article');
// text
if ((body.match(/zkontrolováno 21\. 11\. 2026/g) || []).length < 2) e('sources with the check date (two blocks)');
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || !body.includes('Našli jste chybu? Napište mi.') || body.indexOf('Jsem SEO specialista') > body.indexOf('Chcete mít profil své ordinace v mapách v pořádku?')) e('K5 before the CTA, K7');
if (/\bTOP\b|nejlepší|první místo|slabé SEO|slabá konkurence|Domněnkou|(?<!ne)zaručuj(?!i)|Kč|volno|Typ profilu|Rezervace|rezervace|Ověřená|rating|hodnocení \d|\d+ recenz|HowTo|Heureka|Zoner|ZnamyLekar|gaming/i.test(body)) e('forbidden word');
if (/lépe než|lepší než|horší než|nejlépe/.test(body)) e('no comparison of the platforms as better / worse');
if (/[Ѐ-ӿ]/.test(body)) e('Cyrillic in the Czech text');
if (errs.length) { console.error('✗ check-post-dental-maps-obs-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-dental-maps-obs-cs: ok (answers ${answers})`);
