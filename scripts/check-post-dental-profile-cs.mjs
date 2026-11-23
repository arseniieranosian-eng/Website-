// Check of the blog article /blog/profil-zubni-ordinace-v-mapach/ (brief B of 21.11.2026, series "maps", pilot dentistry): meta (Title 50, Description 127, H1 46), direct answers (44/45/46/40/43/48/41/41/41), FAQ
// (40/40/41/40) = JSON-LD, 11 H2 with the ids of the contents, the steps list (6, no HowTo), the checklists, one table, one quote, sources with the check date, K5 before the CTA, K7, ONE button + ONE text link,
// no link to the observation article, no names / ratings / numbers of reviews / promises / medical advice, dates set by hand (21. 11. 2026), canonical non-www, no hreflang.
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/blog/profil-zubni-ordinace-v-mapach/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'Profil zubní ordinace na mapách: návod | Eranosian' || title.length !== 50) e(`title ${title.length}`);
if (h1 !== 'Jak má vypadat profil zubní ordinace v mapách?' || h1.length !== 46) e(`H1 ${h1.length}`);
if (desc !== 'Jak vyplnit profil zubní ordinace na Google, Mapy.com a Firmy.cz: název, kategorie, služby, kontakty, recenze a kontrola údajů.' || desc.length !== 127) e(`description ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === h1) e('Title must differ from H1');
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/profil-zubni-ordinace-v-mapach/">')) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('hreflang: none by the convention of the published articles');
if (!/Aktualizováno: <time datetime="2026-11-21">21\. 11\. 2026<\/time>/.test(h)) e('dates 21. 11. 2026');
const lead = txt((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead !== 'Profil ordinace v mapách je karta s názvem, adresou, telefonem, kategoriemi a ordinační dobou. Tady je přehled, co do ní na Googlu, Mapy.com a Firmy.cz vyplnit a co si ověřit v aktuální nápovědě.') e('definition line under H1');
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => txt(m[1]).split(' ').length);
if (answers.join() !== '44,45,46,40,43,48,41,41,41' || answers.some((n) => n < 40 || n > 60)) e(`direct answers: ${answers}`);
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
if (h2.length !== 11 || h2.slice(0, 9).some((x) => !x.endsWith('?')) || h2[9] !== 'Časté otázky' || h2[10] !== 'Související články') e(`H2: ${h2}`);
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [txt(m[1]), txt(m[2])]);
if (faq.length !== 4 || faq.map(([, a]) => a.split(' ').length).join() !== '40,40,41,40') e('FAQ 4 questions: 40/40/41/40');
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 6) e('one numbered list with 6 steps');
const lists = [...main.matchAll(/<ul class="checks">([\s\S]*?)<\/ul>/g)].map((m) => (m[1].match(/<li>/g) || []).length);
if (lists.join() !== '4,5,7,5') e(`checklists: ${lists}`);
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)];
if (tables.length !== 1 || (tables[0][0].match(/<tr>/g) || []).length !== 4 || !main.includes('Tabulka není vyčerpávající přehled pravidel jednotlivých služeb.')) e('one table with 3 rows + note');
if ((main.match(/<blockquote/g) || []).length !== 1 || !main.includes('Profil v mapách nemá být reklamní text. Má být pravdivý, stejný všude a udržovaný.')) e('one quote');
// ld
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.headline !== h1 || bp.datePublished !== '2026-11-21' || bp.dateModified !== '2026-11-21' || bp.description !== desc || bp.inLanguage !== 'cs-CZ') e('BlogPosting');
const wp = ld.find((x) => x['@type'] === 'WebPage');
if (!wp || wp.name !== 'Profil zubní ordinace na mapách: návod' || wp.dateModified !== '2026-11-21' || wp.url !== 'https://seo-eranosian.com/blog/profil-zubni-ordinace-v-mapach/') e('WebPage');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ') === 'Domů > Blog > Jak má vypadat profil zubní ordinace v mapách?')) e('BreadcrumbList Domů > Blog > H1');
// links
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/o-mne/', '/kontakt/', '/lokalni-seo-mapy/', '/seo-pro-zubni-ordinace-praha/', '/blog/jak-ziskat-pacienty-pro-zubni-ordinaci/', '/blog/slabe-seo-konkurence-zubni-ordinace/', '/blog/stomatologie-v-mapach-co-jsem-zjistil/', '/blog/web-ordinace-nebo-mapy-a-katalogy/', 'https://support.google.com/business/answer/3038177', 'https://support.google.com/business/answer/7091', 'https://support.google.com/contributionpolicy/answer/7400114', 'https://support.google.com/business/answer/3474122', 'https://napoveda.firmy.cz/zaciname/vlozeni-nove-firmy/'];
if (links.some((l) => !okLinks.includes(l)) || okLinks.some((l) => !links.includes(l))) e(`links: ${links}`);
if ((main.match(/class="btn btn--primary/g) || []).length !== 1 || !/<a class="btn btn--primary btn--lg" href="\/lokalni-seo-mapy\/">Lokální SEO pro Google Maps a Mapy\.com<\/a>/.test(main) || /<form/.test(main)) e('one button to /lokalni-seo-mapy/');
if (links.filter((l) => l === '/seo-pro-zubni-ordinace-praha/').length !== 1 || !main.includes('Podívejte se také na <a href="/seo-pro-zubni-ordinace-praha/">SEO pro zubní ordinace v Praze</a>.')) e('one text link to the niche landing');
if (/\/(audit-zdarma|konzultace|start-3-mesice|full-seo)\//.test(links.join(' '))) e('no links to audit / consultation / Start / Full SEO');
const relBlock = (main.match(/Související články<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if (txt(main.replace(relBlock, '')).includes('Co jsem zjistil v kartách') || main.replace(relBlock, '').includes('/blog/stomatologie-v-mapach-co-jsem-zjistil/') || !relBlock.includes('/blog/stomatologie-v-mapach-co-jsem-zjistil/') || (relBlock.match(/class="card card--link post-card"/g) || []).length !== 4 || !relBlock.includes('/blog/web-ordinace-nebo-mapy-a-katalogy/') || main.replace(relBlock, '').includes('/blog/web-ordinace-nebo-mapy-a-katalogy/')) e('C6: the observation article only as the THIRD card of Související články, no link in the text');
// text
const body = txt(main);
if (!body.includes('zkontrolováno 21. 11. 2026')) e('sources with the check date');
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || !body.includes('Našli jste chybu? Napište mi.') || body.indexOf('Jsem SEO specialista') > body.indexOf('Chcete mít profil své ordinace v mapách v pořádku?') || body.indexOf('Jsem SEO specialista') < body.indexOf('Zdroje')) e('K5 after the sources, before the CTA; K7');
if (!/Související články Další články o profilech, mapách a webech zubních ordinací\./.test(body)) e('related lead');
if (/\bTOP\b|nejlepší|první místo|slabé SEO|slabá konkurence|Domněnkou|(?<!ne)zaručuj(?!i)|Kč|volno|rating|hodnocení \d|\d+ recenz|HowTo|Heureka|Zoner|ZnamyLekar/i.test(body)) e('forbidden word');
if (/[Ѐ-ӿ]/.test(body)) e('Cyrillic in the Czech text');
if (/pozorov|vzorek|30 výsledk|(?<!\d)24 webů/.test(body)) e('no numbers or wording of the observation article');
if (errs.length) { console.error('✗ check-post-dental-profile-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-dental-profile-cs: ok (answers ${answers})`);
