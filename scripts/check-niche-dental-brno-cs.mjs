// Check of the landing page /seo-pro-zubni-ordinace-brno/ (brief of 27.11.2026; published by the author's decision of 27.11.2026 WITHOUT block 4, which is added later with the dated Brno data):
// meta (Title 39, Description 123, H1 61), new texts (3.6: 49 words, FAQ "Máte v Brně kancelář?"), every H2 a question (except FAQ / Další články), answers 40-60 words (the shortened experience paragraph excepted),
// FAQ 7 = JSON-LD, no Prague numbers or dates, block 4 only with a dated observation, no names / ratings / promises, 6 cards, one end CTA, in the sitemap.
import { existsSync, readFileSync as rf } from 'node:fs';
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const file = 'dist/seo-pro-zubni-ordinace-brno/index.html';
if (!existsSync(file)) { console.error('✗ check-niche-dental-brno-cs: page not built'); process.exit(1); }
if (!rf('dist/sitemap.xml', 'utf8').includes('https://seo-eranosian.com/seo-pro-zubni-ordinace-brno/')) e('not in the sitemap');
const h = readFileSync(file, 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;|\u00a0/g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'SEO pro zubní ordinace Brno | Eranosian' || title.length !== 39) e(`title ${title.length}`);
if (h1 !== 'SEO a GEO/AEO pro zubní ordinace v Brně: stránky služeb a FAQ' || h1.length !== 61) e(`H1 ${h1.length}`);
if (desc !== 'SEO a GEO/AEO pro zubní ordinace v Brně: audit technických chyb webu, stránky služeb a FAQ. Výsledek ani termín nezaručuji.' || desc.length !== 123) e(`description ${desc.length}`);
if (title.replace(/ \| Eranosian$/, '') === h1 || /požádejte|\d\s*Kč|zaručuji(?! )/.test(desc.replace('nezaručuji', ''))) e('Title must differ from H1; no CTA / price in the Description');
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/seo-pro-zubni-ordinace-brno/">')) e('canonical');
if (/<link rel="alternate"[^>]*hreflang=/.test(h.replace(/<link rel="alternate" hreflang="cs"[^>]*>/, '').replace(/<link rel="alternate" hreflang="x-default"[^>]*>/, ''))) e('hreflang: only self (cs) allowed, as on the Prague page');
const body = txt(main);
const bodyNoCards = txt(main.replace(/Další články<\/h2>[\s\S]*?<\/section>/, '')); // the cards carry the titles of the live articles (one of them names Praha, see the report)
// block 4 / gate
const obsH2 = 'Co vidím na webech zubních ordinací v Brně?';
if (body.includes(obsH2) && !/K \d+\. \d+\. 2026/.test(body)) e('block 4 without a date');
if (/30 výsledk|24 webů|17 webů|\b7 z 24|\b3 z 17|12 z 24|8 z 17|17 z 24|11 z 17|15\. 11\. 2026|5\. 11\. 2026|0 yes|3 partial|7 no|stomatologie v Praze|zubní lékař v Praze/.test(bodyNoCards)) e('a number / date / query of the Prague observation was carried over');
if (/\bPraz[eaiu]\b(?! online)/.test(bodyNoCards.replace(/pracuji z Prahy/g, '').replace(/osobně v Praze/g, ''))) e('"Praha" in the text outside the author\'s own statement');
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (!lead.startsWith('Dělám SEO a GEO/AEO pro zubní ordinace v Brně. Pracuji z Prahy: konzultace probíhají online nebo osobně v Praze.')) e('hero intro');
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
const bad = h2.filter((x) => !x.endsWith('?') && x !== 'Časté otázky' && x !== 'Další články' && !/^Chcete vědět/.test(x));
if (bad.length) e(`H2 not a question: ${bad}`);
if (!h2.includes('Na co si dát pozor, když má ordinace sídlo nebo pobočku v Brně?')) e('H2 3.6');
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]).split(' ').length);
// the Prague text "Jaké mám zkušenosti…" (copied, brief 3.4) has 30 words: reported to the author, not changed here
if (answers.some((n, i) => (n < 40 || n > 60) && i !== 2)) e(`direct answers outside 40-60: ${answers}`);
const brno = inl((main.match(/Na co si dát pozor[\s\S]*?<p class="answer">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (brno.split(' ').length !== 49 || !brno.endsWith('schvaluje lékař ordinace.')) e(`3.6: ${brno.split(' ').length} words`);
const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 7 || faq.some(([q, a]) => !q.endsWith('?') || a.split(' ').length < 40 || a.split(' ').length > 60)) e(`FAQ: 7 questions, answers 40-60 words (${faq.map(([, a]) => a.split(' ').length)})`);
const nf = faq.find(([q]) => q === 'Máte v Brně kancelář?');
if (!nf || !nf[1].startsWith('V Brně adresu nemám, pracuji z Prahy.') || !nf[1].includes('neuvádím brněnskou adresu ani netvrdím místní přítomnost')) e('new FAQ');
// ld
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist|AccountingService/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`JSON-LD types: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text.replace(/\u00a0/g, ' ')])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ').endsWith('SEO pro zubní ordinace Brno'))) e('BreadcrumbList');
// cards, links, text
const more = (main.match(/Další články<\/h2>[\s\S]*?<\/section>/) || [''])[0];
const cards = [...more.matchAll(/<a class="card card--link post-card" href="([^"]+)"/g)].map((m) => m[1]);
if (cards.join() !== '/blog/web-ordinace-nebo-mapy-a-katalogy/,/blog/profil-zubni-ordinace-v-mapach/,/blog/jednorazove-nastaveni-profilu-nebo-sprava-map/,/blog/faq-na-webu-zubni-ordinace/,/blog/jak-ziskat-pacienty-pro-zubni-ordinaci/,/blog/slabe-seo-konkurence-zubni-ordinace/') e(`cards: ${cards}`);
if (main.includes('/seo-pro-zubni-ordinace-praha/')) e('no link to the Prague page [?4]');
if ((main.match(/cta-band/g) || []).length !== 1 || !body.includes('Chcete vědět, jaké technické chyby má váš web?')) e('one final CTA');
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || !body.includes('Našli jste chybu? Napište mi.')) e('K5 / K7 lines');
if (/volno|Stav pro obor|nejvýše se třemi/.test(body)) e('capacity line must not be on the page until the author decides');
if (/\bTOP\b|nejlepší|garance|jistota|Zoner|Heureka|rating|hodnocení \d|\d+ recenz|tvorbu webů nabízím|agentur(?!y)|%/i.test(body.replace(/překladatelskou agenturu/g, ''))) e('forbidden word');
if (/zaručuj(?!i)/i.test(body.replace(/nezaručuj\S*/gi, '').replace(/nezaručen\S*/gi, ''))) e('promise');
if (/[Ѐ-ӿ]/.test(body)) e('Cyrillic in the Czech text');
if (errs.length) { console.error('✗ check-niche-dental-brno-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-niche-dental-brno-cs: draft ok (answers ${answers}, FAQ ${faq.map(([, a]) => a.split(' ').length)})`);
