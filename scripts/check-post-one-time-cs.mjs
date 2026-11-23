// Check of the blog article /blog/jednorazove-seo-nebo-prubezne/ (brief of 23.11.2026, comparative series, article 1): meta (Title 43, Description 119, H1 58), direct answers (43/40/40/49/41), FAQ (42/40/48/40/40) = JSON-LD,
// the table (4 rows x 5 columns, prices as on the service pages), steps (5, no HowTo) with exactly two article links, one quote, K5 before the CTA, K7, ONE button to /konzultace/, no links to the service pages in the body,
// no names / outside prices / market figures / promises, dates by hand (23. 11. 2026), no hreflang, three cards in "Další články".
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/blog/jednorazove-seo-nebo-prubezne/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'Jednorázové SEO, nebo průběžné? | Eranosian' || title.length !== 43) e(`title ${title.length}`);
if (h1 !== 'Jednorázová úprava webu, nebo průběžné SEO: v čem se liší?' || h1.length !== 58) e(`H1 ${h1.length}`);
if (desc !== 'Jednorázové SEO, nebo průběžné: pro koho se hodí která varianta, co obsahuje, kolik orientačně stojí a jaká má omezení.' || desc.length !== 119) e(`description ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === h1) e('Title must differ from H1');
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/jednorazove-seo-nebo-prubezne/">')) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('hreflang: none by the convention of the published articles');
if (!/Aktualizováno: <time datetime="2026-11-23">23\. 11\. 2026<\/time>/.test(h)) e('dates 23. 11. 2026');
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead.split(' ').length !== 43 || !lead.startsWith('Jednorázová úprava řeší konkrétní problém na webu a končí.') || !lead.endsWith('Žádná varianta nezaručuje pozici ani počet poptávek.')) e(`line under H1: ${lead.split(' ').length}`);
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]).split(' ').length);
if (answers.join() !== '43,40,40,49,41' || answers.some((n) => n < 40 || n > 60)) e(`direct answers: ${answers}`);
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
if (h2.length !== 7 || h2.slice(0, 5).some((x) => !x.endsWith('?')) || h2[5] !== 'Časté otázky' || h2[6] !== 'Další články') e(`H2: ${h2}`);
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 5 || faq.map(([, a]) => a.split(' ').length).join() !== '42,40,48,40,40') e('FAQ 5 questions: 42/40/48/40/40');
const lists = [...main.matchAll(/<ul class="checks">([\s\S]*?)<\/ul>/g)].map((m) => (m[1].match(/<li>/g) || []).length);
if (lists.join() !== '4,4') e(`checklists: ${lists}`);
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 5 || !main.includes('Žádný z kroků nezaručuje výsledek ani pozici.')) e('one numbered list with 5 steps + the limit line');
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 1 || (tables[0].match(/<tr>/g) || []).length !== 5 || (tables[0].match(/<th scope="col">/g) || []).length !== 5) e('one table: header + 4 rows x 5 columns');
else {
  const cells = [...tables[0].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((m) => txt(m[1]));
  for (const f of ['2 000 Kč za hodinu; 3 000 Kč s auditem webu', '50 000 Kč (25 000 Kč na začátku, 25 000 Kč po dohodě)', 'Od 15 000 Kč měsíčně, podle oboru a rozsahu webu', 'Úpravy za vás neprovádím, takže se tím neprovedou', 'Práce na webu i na mapách, týdenní reporty']) if (!cells.includes(f)) e(`table cell: ${f}`);
  if (!/2 000 Kč/.test(tables[0].replace(/ /g, ' ')) || !/2 000 Kč/.test(tables[0])) e('non-breaking spaces in the prices');
}
if (!main.includes('Ceny jsou orientační podle mých stránek služeb, zkontrolováno 23. 11. 2026. U některých oborů je minimum Full SEO vyšší. Tabulka nehodnotí práci jiných dodavatelů.')) e('table note with the check date');
if ((main.match(/<blockquote/g) || []).length !== 1 || !main.includes('Jednorázová úprava a průběžné SEO nejsou soupeři. Liší se tím, jak dlouho trvá práce, kterou web potřebuje.')) e('one quote');
// ld
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text.replace(/\u00a0/g, ' ')])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.headline !== h1 || bp.datePublished !== '2026-11-23' || bp.dateModified !== '2026-11-23' || bp.description !== desc || bp.inLanguage !== 'cs-CZ') e('BlogPosting');
const wp = ld.find((x) => x['@type'] === 'WebPage');
if (!wp || wp.name !== 'Jednorázové SEO, nebo průběžné?' || wp.dateModified !== '2026-11-23') e('WebPage');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ') === 'Domů > Blog > Jednorázová úprava webu, nebo průběžné SEO: v čem se liší?')) e('BreadcrumbList');
// links
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/o-mne/', '/kontakt/', '/konzultace/', '/blog/audit-konzultace-nebo-start/', '/blog/seo-plan-na-12-mesicu/', '/blog/seo-a-reklama/', '/blog/jak-vybrat-seo-specialistu/', '/blog/co-je-seo-audit/'];
if (links.some((l) => !okLinks.includes(l)) || okLinks.some((l) => !links.includes(l))) e(`links: ${links}`);
if (links.filter((l) => l === '/blog/audit-konzultace-nebo-start/').length !== 1 || links.filter((l) => l === '/blog/seo-plan-na-12-mesicu/').length !== 1 || !steps[0] || !steps[0][1].includes('<a href="/blog/audit-konzultace-nebo-start/">co si vybrat jako první krok</a>') || !steps[0][1].includes('<a href="/blog/seo-plan-na-12-mesicu/">SEO plán na 12 měsíců</a>')) e('two article links in the steps, each once');
if (links.filter((l) => l === '/konzultace/').length !== 1 || (main.match(/class="btn btn--primary/g) || []).length !== 1 || !/<a class="btn btn--primary btn--lg" href="\/konzultace\/">Objednat SEO konzultaci<\/a>/.test(main) || /<form/.test(main)) e('ONE button to /konzultace/ and no other link to it');
if (/\/(start-3-mesice|full-seo|audit-zdarma)\//.test(links.join(' '))) e('no links to the service pages in the body');
const more = (main.match(/Další články<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...more.matchAll(/<a class="card card--link post-card" href="([^"]+)"/g)].map((m) => m[1]).join() !== '/blog/seo-a-reklama/,/blog/jak-vybrat-seo-specialistu/,/blog/co-je-seo-audit/' || !more.includes('Další články o tom, jak vybrat první krok a plánovat SEO.')) e('Další články: three cards in the order of the brief');
// text
const body = txt(main);
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || !body.includes('Našli jste chybu? Napište mi.') || body.indexOf('Jsem SEO specialista') > body.indexOf('Nevíte, která varianta se hodí vašemu webu?')) e('K5 before the CTA, K7');
if (/\bTOP\b|nejlepší|první místo|zaručuj(?!i)|volno|agentur|freelanc|konkurenc|levn|drah|%/i.test(body.replace(/Žádná varianta nezaručuje/g, '').replace(/nezaručuje/g, '').replace(/nezaručují/g, '').replace(/nezaručené/g, '').replace(/Nezaručuje/g, ''))) e('forbidden word (agencies, competitors, prices of others, promises, percentages)');
if (/\d+\s*(měsíc|týdn)/i.test(body.replace(/tři měsíce|3 měsíce|tři měsíce nebo rok/g, '').replace(/12 měsíců/g, ''))) e('no claim "SEO takes N months"');
if (/[Ѐ-ӿ]/.test(body)) e('Cyrillic in the Czech text');
if (errs.length) { console.error('✗ check-post-one-time-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-one-time-cs: ok (answers ${answers})`);
