// Check of the blog article /blog/stomatologie-v-brne-co-jsem-zjistil/ (brief of 27.11.2026). Published by the author's decision of 27.11.2026; checked: meta (Title 48, Description 127, H1 72), summary 37, direct answers
// (47/45/45/41/40/41), FAQ (44/44/41/41) = JSON-LD, the author's numbers (appendix of the brief), 8 H2, two tables, one quote, 4 steps (no HowTo), K5 before the CTA, K7, ONE button to the Brno landing, no body links,
// no site / catalogue / portal names, no Prague numbers or dates (except the sample-size sentence of the FAQ), 3 cards.
import { existsSync, readFileSync as rf } from 'node:fs';
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const P = '/blog/stomatologie-v-brne-co-jsem-zjistil/';
const file = 'dist' + P + 'index.html';
if (!existsSync(file)) { console.error('✗ check-post-dental-brno-obs-cs: article not built'); process.exit(1); }
if (!rf('dist/sitemap.xml', 'utf8').includes('https://seo-eranosian.com' + P)) e('not in the sitemap');
const h = readFileSync(file, 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'Stomatologie v Brně: co jsem zjistil | Eranosian' || title.length !== 48) e(`title ${title.length}`);
if (h1 !== 'Co jsem zjistil ve výsledcích Googlu a Seznamu pro „stomatologie v Brně“' || h1.length !== 72) e(`H1 ${h1.length}`);
if (desc !== 'K 27. 11. 2026 jsem na Googlu a Seznamu prošel po 20 výsledcích dotazu „stomatologie v Brně“ a spočítal, co mají weby ordinací.' || desc.length !== 127) e(`description ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === h1) e('Title must differ from H1');
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/stomatologie-v-brne-co-jsem-zjistil/">')) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('hreflang: none by the convention of the published articles');
if (!/<time datetime="2026-11-27">27\. 11\. 2026<\/time>/.test(h)) e('date (author sets it by hand; default 27. 11. 2026)');
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (lead.split(' ').length !== 37 || !lead.startsWith('K 27. 11. 2026 jsem na Googlu a Seznamu prošel po 20 výsledcích') || !lead.endsWith('ne průzkum trhu.')) e(`summary ${lead.split(' ').length}`);
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]).split(' ').length);
if (answers.join() !== '47,45,45,41,40,41' || answers.some((n) => n < 40 || n > 60)) e(`direct answers: ${answers}`);
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
if (h2.join('|') !== ['Jak jsem dotaz „stomatologie v Brně“ zkoumal?', 'Co se zobrazilo kolem organických výsledků?', 'Odkud pocházelo 20 výsledků na Googlu a na Seznamu?', 'Co jsem našel na webech zubních ordinací?', 'Co z tohoto pozorování nevyplývá?', 'Jak si svůj web zkontrolovat sám?', 'Časté otázky', 'Další články'].join('|')) e(`H2: ${h2}`);
if (!main.includes('<strong>Metodika a limity: jeden dotaz, jeden den; výsledky se mění podle osoby, polohy a času.</strong>')) e('method line (bold, not H3)');
if (/<h3>Metodika/.test(main)) e('Metodika a limity must not be H3');
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 4 || faq.map(([, a]) => a.split(' ').length).join() !== '44,44,41,41' || faq.some(([q]) => !q.endsWith('?'))) e('FAQ 4 questions: 44/44/41/41');
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 4) e('one numbered list with 4 steps');
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => [...m[0].matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((r) => [...r[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((x) => txt(x[1])).join(' | ')));
const w1 = ['Složení 20 pozic | Google.cz | Seznam.cz', 'Weby ordinací a klinik (pozice) | 18 | 13', 'Katalogy | 1 | 6', 'Karta Mapy.com | 0 | 1', 'Klinika nemocnice | 1 | 0', 'Celkem pozic | 20 | 20'];
const w2 = ['Ukazatel | Google (17 webů) | Seznam (13 webů)', 'Stránka s FAQ: ano / částečně | 2 / 1 | 3 / 0', 'Blog: ano / částečně | 4 / 3 | 8 / 1', 'Strukturovaná data (JSON-LD nebo microdata): ano | 11 | 11', 'z toho JSON-LD | 8 | 11', 'Značka FAQPage | 1 | 0'];
if (tables.length !== 2 || JSON.stringify(tables[0]) !== JSON.stringify(w1) || JSON.stringify(tables[1]) !== JSON.stringify(w2)) e(`tables: ${JSON.stringify(tables)}`);
if (!main.includes('Krátkou odpověď na stránce služby jsem neposuzoval, protože šlo většinou o úvodní stránky.') || !main.includes('Částečně: jen otázky v kódu bez typu FAQPage, nebo jen sekce novinek či aktualit; u části webů jde o obecné značení šablony.')) e('table note / explanation');
if ((main.match(/<blockquote/g) || []).length !== 1 || !main.includes('Na Seznamu zabíraly katalogy a karta Mapy.com 7 z 20 pozic, na Googlu jeden katalog. Je to pozorování jednoho dotazu, ne vysvětlení pořadí.')) e('one quote');
// ld
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist|AccountingService/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text.replace(/ /g, ' ')])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.headline !== h1 || bp.description !== desc || bp.inLanguage !== 'cs-CZ' || bp.datePublished !== '2026-11-27') e('BlogPosting');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ') === 'Domů > Blog > Stomatologie v Brně: co jsem zjistil')) e('BreadcrumbList');
// links
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/o-mne/', '/kontakt/', '/seo-pro-zubni-ordinace-brno/', '/blog/slabe-seo-konkurence-zubni-ordinace/', '/blog/faq-na-webu-zubni-ordinace/', '/blog/web-ordinace-nebo-mapy-a-katalogy/'];
if (links.some((l) => !okLinks.includes(l)) || okLinks.some((l) => !links.includes(l))) e(`links: ${links}`);
if (/\/(audit-zdarma|konzultace|start-3-mesice|full-seo|lokalni-seo-mapy)\//.test(links.join(' '))) e('no links to audit / consultation / Start / Full SEO / maps');
if ((main.match(/class="btn btn--primary/g) || []).length !== 1 || !/<a class="btn btn--primary btn--lg" href="\/seo-pro-zubni-ordinace-brno\/">SEO pro zubní ordinace v Brně<\/a>/.test(main) || /<form/.test(main)) e('one button to the Brno landing');
const more = (main.match(/Další články<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if ([...more.matchAll(/<a class="card card--link post-card" href="([^"]+)"/g)].map((m) => m[1]).join() !== '/blog/slabe-seo-konkurence-zubni-ordinace/,/blog/faq-na-webu-zubni-ordinace/,/blog/web-ordinace-nebo-mapy-a-katalogy/') e('three cards in the order of the brief');
// text
const body = txt(main);
const bodyNoCards = txt(main.replace(/Další články<\/h2>[\s\S]*?<\/section>/, ''));
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || !body.includes('Našli jste chybu? Napište mi.') || body.indexOf('Jsem SEO specialista') > body.indexOf('Chcete, aby byl web vaší zubní ordinace srozumitelný pro Google i AI?')) e('K5 before the CTA, K7');
if (/30 výsledků z|24 webů|\b7 z 24|17 z 24|12 z 24|11 z 17 na Seznamu|15\. 11\. 2026|31\. 10\. 2026|notebook/.test(bodyNoCards.replace('mělo 30 výsledků z každého vyhledávače', ''))) e('a number / date of the Prague observation was carried over');
if (/Firmy\.cz|doktor|ZnamyLekar|Cylex|Zdravotnictví|nemocnice [A-Z]|\bTOP\b|rating|hodnocení \d|\d+ recenz|garance|jistota|nejlepší|volno|%/i.test(bodyNoCards)) e('forbidden word (names, ratings, promises)');
if (/zaručuj(?!i)/i.test(body.replace(/nezaručuj\S*/gi, '').replace(/nezaručen\S*/gi, ''))) e('promise');
if (/[Ѐ-ӿ]/.test(body)) e('Cyrillic in the Czech text');
if (errs.length) { console.error('✗ check-post-dental-brno-obs-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-dental-brno-obs-cs: draft ok (answers ${answers}, FAQ ${faq.map(([, a]) => a.split(' ').length)})`);
