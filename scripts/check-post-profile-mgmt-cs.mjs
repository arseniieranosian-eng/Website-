// Check of the blog article /blog/jednorazove-nastaveni-profilu-nebo-sprava-map/ (brief of 23.11.2026, comparative series, article 3): meta (Title 50, Description 120, H1 61), line under H1 (44 words),
// direct answers (41/40/43/40/52/43/43), FAQ (44/41/46/44) = JSON-LD, the table (3 rows x 5 columns), 3 checklists, 5 steps (no HowTo) with ONE link to the profile article, five help sources + the policy source with the check date,
// one quote, K5 before the CTA, K7, ONE button to /lokalni-seo-mapy/ and no text link, no links to Start / Full SEO / consultation / audit, no names / outside prices / ratings / promises, dates by hand, no hreflang, three cards.
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/blog/jednorazove-nastaveni-profilu-nebo-sprava-map/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'Správa profilu: jednou, nebo průběžně? | Eranosian' || title.length !== 50) e(`title ${title.length}`);
if (h1 !== 'Jednorázové nastavení profilů, nebo průběžná správa v mapách?' || h1.length !== 61) e(`H1 ${h1.length}`);
if (desc !== 'Správa profilu firmy v mapách: kdy stačí jednorázové nastavení, kdy průběžná správa, kolik orientačně stojí a co obnáší.' || desc.length !== 120) e(`description ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === h1 || /co dřív|správa map\b|koupit recenze/i.test(title + h1 + desc)) e('Title must differ from H1; no banned phrases');
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/jednorazove-nastaveni-profilu-nebo-sprava-map/">')) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('hreflang: none by the convention of the published articles');
if (!/Aktualizováno: <time datetime="2026-11-23">23\. 11\. 2026<\/time>/.test(h)) e('dates 23. 11. 2026');
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead.split(' ').length !== 44 || !lead.startsWith('Jednorázové nastavení profilů je jedna práce, která končí.') || !lead.endsWith('Žádná varianta nezaručuje pozici ani poptávky.')) e(`line under H1: ${lead.split(' ').length}`);
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]).split(' ').length);
if (answers.join() !== '41,40,43,40,52,43,43' || answers.some((n) => n < 40 || n > 60)) e(`direct answers: ${answers}`);
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
if (h2.length !== 9 || h2.slice(0, 7).some((x) => !x.endsWith('?')) || h2[7] !== 'Časté otázky' || h2[8] !== 'Další články') e(`H2: ${h2}`);
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 4 || faq.map(([, a]) => a.split(' ').length).join() !== '44,41,46,44') e('FAQ 4 questions: 44/41/46/44');
const lists = [...main.matchAll(/<ul class="checks">([\s\S]*?)<\/ul>/g)].map((m) => (m[1].match(/<li>/g) || []).length);
if (lists.join() !== '4,4,4') e(`three checklists of 4 items: ${lists}`);
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 5 || !main.includes('Žádný z kroků nezaručuje výsledek ani pozici.')) e('one numbered list with 5 steps + the note');
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 1 || (tables[0].match(/<tr>/g) || []).length !== 4 || (tables[0].match(/<th scope="col">/g) || []).length !== 5) e('one table: header + 3 rows x 5 columns');
else {
  const cells = [...tables[0].matchAll(/<th scope="row">([\s\S]*?)<\/th>/g)].map((m) => txt(m[1]));
  if (cells.join('|') !== 'Nastavení sám podle nápovědy|Mapy samostatně|Mapy v rámci SEO Start a Full SEO') e(`row heads: ${cells}`);
  for (const p of ['1\u00a0800\u00a0Kč', '1\u00a0000\u00a0Kč', '500\u00a0Kč', '50\u00a0000\u00a0Kč', '15\u00a0000\u00a0Kč']) if (!tables[0].includes(p)) e(`price ${p}`);
}
if (!main.includes('Ceny jsou orientační podle mých stránek služeb, zkontrolováno 23. 11. 2026. Tabulka nehodnotí práci jiných dodavatelů.')) e('table note with the check date');
if (!main.includes('Zdroje (zkontrolováno 23. 11. 2026; na stránkách Google ani Firmy.cz datum změny není uvedeno):')) e('sources line with the check date');
if (!/Zdroj ke krokům 3 a 4: zásady Google pro správu profilů třetí stranou, <a href="https:\/\/support\.google\.com\/business\/answer\/7353941"[^>]*>[^<]*<\/a> \(zkontrolováno 23\. 11\. 2026\)\./.test(main)) e('policy source with the check date');
if ((main.match(/<blockquote/g) || []).length !== 1 || !main.includes('Jednorázové nastavení dá profilu základ. Údaje se ale mohou změnit i bez vás, a proto je někdo musí hlídat.')) e('one quote');
// ld
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text.replace(/ /g, ' ')])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.headline !== h1 || bp.datePublished !== '2026-11-23' || bp.dateModified !== '2026-11-23' || bp.description !== desc || bp.inLanguage !== 'cs-CZ') e('BlogPosting');
const wp = ld.find((x) => x['@type'] === 'WebPage');
if (!wp || wp.name !== 'Správa profilu: jednou, nebo průběžně?' || wp.dateModified !== '2026-11-23') e('WebPage');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ') === 'Domů > Blog > ' + h1)) e('BreadcrumbList');
// links
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/o-mne/', '/kontakt/', '/lokalni-seo-mapy/', '/blog/profil-zubni-ordinace-v-mapach/', 'https://support.google.com/business/answer/7107242', 'https://support.google.com/business/answer/9918094?hl=cs', 'https://support.google.com/business/answer/3480441?hl=cs', 'https://support.google.com/business/answer/6303076?hl=cs', 'https://napoveda.firmy.cz/administracni-rozhrani/statistiky/', 'https://support.google.com/business/answer/7353941', '/blog/jednorazove-seo-nebo-prubezne/', '/blog/lokalni-pritomnost-ucetni-kancelare/', '/blog/web-ordinace-nebo-mapy-a-katalogy/'];
if (links.some((l) => !okLinks.includes(l)) || okLinks.some((l) => !links.includes(l))) e(`links: ${links}`);
if (links.filter((l) => l === '/blog/profil-zubni-ordinace-v-mapach/').length !== 1 || !/<h2[^>]*>Jak to dělat správně\?<\/h2>\s*<p class="answer">[^<]*<a href="\/blog\/profil-zubni-ordinace-v-mapach\/">v samostatném článku<\/a>\./.test(main)) e('ONE link to the profile article, inside the answer of H2-6');
if ((main.match(/class="btn btn--primary/g) || []).length !== 1 || !/<a class="btn btn--primary btn--lg" href="\/lokalni-seo-mapy\/">Lokální SEO pro Google Maps a Mapy\.com<\/a>/.test(main) || /<form/.test(main)) e('one button to /lokalni-seo-mapy/');
if (links.filter((l) => l === '/lokalni-seo-mapy/').length !== 1) e('/lokalni-seo-mapy/ only via the button (no text link)');
if (/\/(audit-zdarma|konzultace|start-3-mesice|full-seo|seo-pro-)/.test(links.join(' '))) e('no links to audit / consultation / Start / Full SEO / niches in the body');
const more = (main.match(/Další články<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...more.matchAll(/<a class="card card--link post-card" href="([^"]+)"/g)].map((m) => m[1]).join() !== '/blog/jednorazove-seo-nebo-prubezne/,/blog/lokalni-pritomnost-ucetni-kancelare/,/blog/web-ordinace-nebo-mapy-a-katalogy/' || !more.includes('Další články o profilech, mapách a volbě mezi variantami.')) e('Další články: three cards in the order of the brief');
// text
const body = txt(main);
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || !body.includes('Našli jste chybu? Napište mi.') || body.indexOf('Jsem SEO specialista') > body.indexOf('Chcete vědět, kterou variantu zvolit pro své profily?')) e('K5 before the CTA, K7');
if (/\bTOP\b|nejlepší(?<!univerzálně nejlepší)|první místo|volno|agentur|freelanc|konkurenc|levn|drah|rating|hodnocení \d|\d+ recenz|Zoner|Heureka|%/i.test(body)) e('forbidden word (agencies, competitors, ratings, promises)');
if (/zaručuj(?!i)/i.test(body.replace(/nezaručuj\S*/gi, '').replace(/nezaručen\S*/gi, ''))) e('promise');
if (/správa map\b|koupit recenze|co dřív/i.test(body)) e('banned phrase');
if (/[Ѐ-ӿ]/.test(body)) e('Cyrillic in the Czech text');
if (errs.length) { console.error('✗ check-post-profile-mgmt-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-profile-mgmt-cs: ok (answers ${answers})`);
