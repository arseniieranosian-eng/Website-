// Check of the blog article /blog/stranky-sluzeb-realitni-kancelare/ (brief of 10.11.2026, DRAFT): meta lengths, answers 40-60 words, FAQ 4 = JSON-LD, no forbidden types / words, only the allowed body links,
// two city buttons, the expert lines hidden until the author confirms, observation numbers as in the source article, the Google source with date, no Cyrillic.
import { readFileSync } from './fs-clean.mjs';
const errs = []; const e = (m) => errs.push(m);
const h = readFileSync('dist/blog/stranky-sluzeb-realitni-kancelare/index.html', 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'Služby realitní kanceláře na webu: jak je popsat | Eranosian' || title.length !== 60) e(`title ${title.length}`);
if (h1 !== 'Jak popsat služby realitní kanceláře na webu?' || h1.length !== 45) e('H1');
if (desc.length !== 134) e(`description ${desc.length}`);
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/blog/stranky-sluzeb-realitni-kancelare/">')) e('canonical');
if (!h.includes('hreflang="cs-CZ"') && !h.includes('hreflang="cs"')) e('hreflang self');
const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]).split(' ').length);
if (answers.length !== 7 || answers.some((n) => n < 40 || n > 60)) e(`direct answers 40-60: ${answers}`);
const faq = [...main.matchAll(/<h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 4 || faq.some(([, a]) => a.split(' ').length < 40 || a.split(' ').length > 60)) e('FAQ 4 questions, 40-60 words');
const steps = [...main.matchAll(/<ol class="steps">([\s\S]*?)<\/ol>/g)];
if (steps.length !== 1 || (steps[0][1].match(/<li>/g) || []).length !== 5) e('numbered list with 5 steps');
let ld = [];
for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService/.test(String(t)))) e(`forbidden JSON-LD type: ${types}`);
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((q) => [q.name, q.acceptedAnswer.text])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ');
const bp = ld.find((x) => x['@type'] === 'BlogPosting');
if (!bp || bp.inLanguage !== 'cs' || bp.headline !== h1 || bp.datePublished !== bp.dateModified) e('BlogPosting');
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/o-mne/', 'https://katariinaestates.cz/', 'https://seo-eranosian.com/blog/stranky-ctvrti-a-lokalit-realitni-kancelare/', 'https://developers.google.com/search/docs/essentials/spam-policies', 'https://seo-eranosian.com/blog/faq-na-webu-realitni-kancelare/', 'https://seo-eranosian.com/blog/slabe-seo-konkurence-realitni-kancelare/', 'https://seo-eranosian.com/blog/proc-web-realitni-kancelare-neprinasi-poptavky/#sluzby', '/kontakt/', '/seo-pro-realitni-kancelare-praha/', '/seo-pro-realitni-kancelare-brno/'];
if (links.some((l) => !okLinks.includes(l)) || (main.match(/class="btn btn--primary/g) || []).length !== 2 || /<form/.test(main)) e(`links / two buttons: ${links}`);
const body = txt(main);
if (/\bTOP\b|\d\s?%|snáz|rychleji|lépe než|2[–-]3 měsíc|dvou až třech|zaručuj|(?<!ne)slibuj|nejlepší|AI Overviews|AI Mode|AI to má ráda|HowTo|penaliz|správa|správu|hypotéky|hypotéku/i.test(body)) e('forbidden word');
if (/[Ѐ-ӿ]/.test(body)) e('Cyrillic in the Czech text');
if (!/K 7\. 11\. 2026 jsem si prohlédl 12 webů[^.]*„realitní kancelář v Praze“ a 11 webů pro dotaz „realitní kancelář v Brně“\. U všech dvanácti v Praze i u všech jedenácti v Brně jsem na stránkách služeb nenašel jasnou krátkou odpověď/.test(body)) e('observation numbers');
if (!/Last updated 2026-08-28, zkontrolováno 10\. 11\. 2026/.test(body) || !body.includes('doorway abuse')) e('Google source');
// the author confirmed on 10.11.2026 that the expert agrees: both lines visible, the link only under the byline, nothing in the markup
if (!/Obsah konzultovala a věcně zkontrolovala Katariina Kofanova, realitní makléřka\./.test(inl(main)) || !main.includes('<a href="https://katariinaestates.cz/" target="_blank" rel="noopener">Katariina Kofanova</a>')) e('expert line under the byline');
if (!body.includes('Katariina Kofanova za konzultaci nedostala odměnu a nespolupracuje se mnou na komerčním základě.') || body.indexOf('Našli jste chybu') > body.indexOf('komerčním základě') || body.indexOf('komerčním základě') > body.indexOf('Jsem SEO specialista')) e('expert disclosure line order');
if (/Katariina|Kofanova/.test(JSON.stringify(ld))) e('expert in JSON-LD');
if (!body.includes('Jsem SEO specialista, proto může být moje hodnocení zaujaté.') || !body.includes('Našli jste chybu? Napište mi.') || body.indexOf('Našli jste chybu') > body.indexOf('Jsem SEO specialista') || body.indexOf('Jsem SEO specialista') > body.indexOf('Řešíte, jak popsat služby na webu své realitní kanceláře?')) e('closing lines order');
if (errs.length) { console.error('✗ check-post-services-realty-cs:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log(`✓ check-post-services-realty-cs: ok (answers ${answers})`);
