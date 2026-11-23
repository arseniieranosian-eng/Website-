// Check of the blog article /blog/web-ordinace-nebo-mapy-a-katalogy/ (brief of 23.11.2026, comparative series, article 2): meta (Title 47, Description 110, H1 64), direct answers (40/41/40/42/51/45/42), FAQ (41/41/42/44) = JSON-LD,
// the table (3 rows x 5 columns, prices as on the author's pages: 50 000 / 24 000 / 1 800 Kč), steps (5, no HowTo) with ONE link to the profile article, three Firmy.cz sources with the check date, one quote, K5 before the CTA, K7,
// ONE button to the dental landing + ONE text link to /lokalni-seo-mapy/, no other links to the services, no names / outside prices / ratings / promises / "co dřív", dates by hand (23. 11. 2026), no hreflang, three cards.
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/blog/web-ordinace-nebo-mapy-a-katalogy/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'Web ordinace, nebo mapy a katalogy? | Eranosian' || title.length !== 47) e(`title ${title.length}`);
if (h1 !== 'Vlastní web, mapy a katalogy: kdy se hodí co pro zubní ordinaci?' || h1.length !== 64) e(`H1 ${h1.length}`);
if (desc !== 'Web ordinace, nebo mapy a katalogy: pro koho se hodí která varianta, kolik orientačně stojí a jaká má omezení.' || desc.length !== 110) e(`description ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === h1 || /co dřív/i.test(title + h1 + desc)) e('Title must differ from H1; no "co dřív"');
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/web-ordinace-nebo-mapy-a-katalogy/">')) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('hreflang: none by the convention of the published articles');
if (!/Aktualizováno: <time datetime="2026-11-23">23\. 11\. 2026<\/time>/.test(h)) e('dates 23. 11. 2026');
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead.split(' ').length !== 40 || !lead.startsWith('Vlastní web, profil v mapách a záznam v katalogu ordinaci ukazují') || !lead.endsWith('Žádná varianta nezaručuje pacienty ani pozici.')) e(`line under H1: ${lead.split(' ').length}`);
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]).split(' ').length);
if (answers.join() !== '40,41,40,42,51,45,42' || answers.some((n) => n < 40 || n > 60)) e(`direct answers: ${answers}`);
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
if (h2.length !== 9 || h2.slice(0, 7).some((x) => !x.endsWith('?')) || h2[7] !== 'Časté otázky' || h2[8] !== 'Další články') e(`H2: ${h2}`);
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 4 || faq.map(([, a]) => a.split(' ').length).join() !== '41,41,42,44') e('FAQ 4 questions: 41/41/42/44');
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 5 || !main.includes('Interval kontroly je moje doporučení, ne pravidlo.')) e('one numbered list with 5 steps + the note');
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 1 || (tables[0].match(/<tr>/g) || []).length !== 4 || (tables[0].match(/<th scope="col">/g) || []).length !== 5) e('one table: header + 3 rows x 5 columns');
else {
  const cells = [...tables[0].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((m) => txt(m[1]));
  for (const f of ['Tvorbu webu nenabízím. SEO: Start 50 000 Kč na 3 měsíce, Full SEO od 24 000 Kč měsíčně', 'Mapy samostatně: balíček Full 1 800 Kč měsíčně za 1 profil, od 4 měsíců; mapy jsou součástí i SEO Start a Full SEO', 'Přidání profilu je podle nápovědy Firmy.cz zdarma; placené tarify a aukce, ceny neuvádím']) if (!cells.includes(f)) e(`table cell: ${f.slice(0, 40)}`);
  if (!/24 000 Kč/.test(tables[0]) || !/1 800 Kč/.test(tables[0]) || !/50 000 Kč/.test(tables[0])) e('non-breaking spaces in the prices');
}
if (!main.includes('Ceny jsou orientační podle mých stránek služeb a nápovědy Firmy.cz, zkontrolováno 23. 11. 2026. Tabulka vychází z obecné logiky a nehodnotí práci jiných dodavatelů ani konkrétních služeb.')) e('table note with the check date');
if (!main.includes('Zdroje: nápověda Firmy.cz (zkontrolováno 23. 11. 2026; na stránkách datum změny není uvedeno):')) e('sources line with the check date');
if ((main.match(/<blockquote/g) || []).length !== 1 || !main.includes('Web, profil v mapách i katalog ukazují ordinaci jiným lidem. Nejde o soupeře, jde o to, co z toho zvládnete udržovat.')) e('one quote');
// ld
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text.replace(/ /g, ' ')])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.headline !== h1 || bp.datePublished !== '2026-11-23' || bp.dateModified !== '2026-11-23' || bp.description !== desc || bp.inLanguage !== 'cs-CZ') e('BlogPosting');
const wp = ld.find((x) => x['@type'] === 'WebPage');
if (!wp || wp.name !== 'Web ordinace, nebo mapy a katalogy?' || wp.dateModified !== '2026-11-23') e('WebPage');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ') === 'Domů > Blog > ' + h1)) e('BreadcrumbList');
// links
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/o-mne/', '/kontakt/', '/seo-pro-zubni-ordinace-praha/', '/lokalni-seo-mapy/', '/blog/profil-zubni-ordinace-v-mapach/', '/blog/jak-ziskat-pacienty-pro-zubni-ordinaci/', '/blog/stomatologie-v-mapach-co-jsem-zjistil/', '/blog/slabe-seo-konkurence-zubni-ordinace/', 'https://napoveda.firmy.cz/zaciname/vlozeni-nove-firmy/', 'https://napoveda.firmy.cz/zaciname/kde-se-profil-zobrazuje/', 'https://napoveda.firmy.cz/kampane-cileni/princip-aukce-a-predplatne/'];
if (links.some((l) => !okLinks.includes(l)) || okLinks.some((l) => !links.includes(l))) e(`links: ${links}`);
if (links.filter((l) => l === '/blog/profil-zubni-ordinace-v-mapach/').length !== 1 || !/<h2[^>]*>Jak to dělat správně\?<\/h2>\s*<p class="answer">[^<]*<a href="\/blog\/profil-zubni-ordinace-v-mapach\/">v samostatném článku<\/a>\./.test(main)) e('ONE link to the profile article, inside the answer of H2-6');
if ((main.match(/class="btn btn--primary/g) || []).length !== 1 || !/<a class="btn btn--primary btn--lg" href="\/seo-pro-zubni-ordinace-praha\/">SEO pro zubní ordinace v Praze<\/a>/.test(main) || /<form/.test(main)) e('one button to the dental landing');
if (links.filter((l) => l === '/lokalni-seo-mapy/').length !== 1 || !main.includes('Podívejte se také na <a href="/lokalni-seo-mapy/">lokální SEO pro Google Maps a Mapy.com</a>.')) e('one text link to /lokalni-seo-mapy/');
if (/\/(audit-zdarma|konzultace|start-3-mesice|full-seo)\//.test(links.join(' '))) e('no links to audit / consultation / Start / Full SEO');
const more = (main.match(/Další články<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...more.matchAll(/<a class="card card--link post-card" href="([^"]+)"/g)].map((m) => m[1]).join() !== '/blog/jak-ziskat-pacienty-pro-zubni-ordinaci/,/blog/stomatologie-v-mapach-co-jsem-zjistil/,/blog/slabe-seo-konkurence-zubni-ordinace/' || more.includes('profil-zubni-ordinace') || !more.includes('Další články o webech, mapách a kanálech pro zubní ordinace.')) e('Další články: three cards in the order of the brief, not the profile article');
// text
const body = txt(main);
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || !body.includes('Našli jste chybu? Napište mi.') || body.indexOf('Jsem SEO specialista') > body.indexOf('Chcete mít údaje své ordinace v pořádku na webu i v mapách?')) e('K5 before the CTA, K7');
if (/\bTOP\b|nejlepší\b(?! kombinace)|první místo|volno|agentur|freelanc|konkurenc|levn|drah|rating|hodnocení \d|\d+ recenz|Zoner|ZnamyLekar|Heureka|Zdravotnictví|Dentist\b|%/i.test(body)) e('forbidden word (other catalogues, agencies, competitors, ratings, promises)');
if (/zaručuj(?!i)/i.test(body.replace(/nezaručuj\S*/gi, '').replace(/nezaručen\S*/gi, ''))) e('promise');
if (/pozorov|vzorek|30 výsledk|15 karet/.test(body)) e('no figures or wording of the observation articles');
if (/[Ѐ-ӿ]/.test(body)) e('Cyrillic in the Czech text');
if (errs.length) { console.error('✗ check-post-dental-web-maps-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-dental-web-maps-cs: ok (answers ${answers})`);
