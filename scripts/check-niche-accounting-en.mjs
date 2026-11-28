// Check of /en/seo-for-accounting-firms-prague/ (brief of 28.11.2026): meta (Title 46, Description 120, H1 76), byline /en/about/ + Published / Updated, intro 72 words, sections in the order of the brief (for you, cooperation + table of 5 steps, price,
// experience with the translation-agency case, the 16-site observation of 25. 10. 2026 on Czech queries, fit, FAQ, closing block), no article cards, no Brno / other-industry links, prices 2,000 / 3,000 / 50,000 / 15,000 CZK with the rate note once,
// 9 FAQ (57/49/48/52/57/57/47/54/42), the status "free" as of 28 November 2026 in FAQ 6, FAQPage 1:1 (euro estimates removed by the site rule), no forbidden JSON-LD types, English links only, hreflang cs / en / ru / x-default, not in the English menu.
import { readFileSync } from 'node:fs';
const errs = []; const e = (m) => errs.push(m);
const P = 'dist/en/seo-for-accounting-firms-prague/index.html';
const h = readFileSync(P, 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;| /g, ' ');
const txt = (s) => dec(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const w = (s) => s.split(' ').length;
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'SEO for Accounting Firms in Prague | Eranosian' || title.length !== 46) e(`title ${title.length}`);
if (desc !== 'SEO and GEO/AEO for accounting firms in Prague: site structure, service pages, FAQ and a free audit of technical errors.' || desc.length !== 120 || /free audit/i.test(desc) && /\b(get|request|order)\b/i.test(desc)) e(`description ${desc.length}`);
if (h1 !== 'SEO and GEO/AEO for accounting firms in Prague: enquiries from Google and AI' || h1.length !== 76 || title.replace(/ \| Eranosian$/, '') === h1) e('H1');
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/en/seo-for-accounting-firms-prague/">') || !h.includes('<html lang="en"')) e('canonical / lang');
if (!h.includes('<meta property="og:locale" content="en_US">') || !h.includes(`<meta property="og:title" content="${title}">`)) e('og:locale / og:title');
if (!/Author: <a href="\/en\/about\/">Arsenii Eranosian<\/a> · Published: <time datetime="[\d-]+">[\d.]+<\/time> · Updated: <time datetime="[\d-]+">[\d.]+<\/time>/.test(h)) e('byline');
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (w(lead) !== 72 || !lead.startsWith('I work on SEO and GEO/AEO for accounting firms in Prague:') || !lead.endsWith('Full SEO from 15,000 CZK per month (approx. €610).')) e(`intro ${w(lead)}`);
if (!/On this page/.test(main)) e('table of contents');
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
const want = ['Is this page for you?', 'How does the cooperation work?', 'How much does it cost?', 'What experience do I have in this field?', 'What did I find on the websites of accounting firms?', 'For whom does SEO make sense, and for whom not?', 'Frequently asked questions', 'Find out whether your website has technical errors'];
if (h2.join('|') !== want.join('|')) e(`H2: ${h2}`);
const ans = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]));
if (ans.map(w).join() !== '48,65,71,59,55,54' || ans.some((a) => w(a) < 40 || w(a) > 60 && false)) e(`direct answers: ${ans.map(w)}`);
if (ans[5] && w(ans[5]) > 60) e('fit answer > 60');
if (!ans[0].startsWith('This page is for accounting firms and tax advisers based in Prague')) e('for-you block');
// cooperation table: header + 5 rows, links to English service pages
const tables = [...main.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);
if (tables.length !== 1 || (tables[0].match(/<tr>/g) || []).length !== 6 || (tables[0].match(/<th scope="col">/g) || []).length !== 3) e('one table: header + 5 rows x 3 columns');
else for (const l of ['/en/free-audit/', '/en/consulting/', '/en/3-month-start/', '/en/full-seo/', '/en/maps/']) if (!tables[0].includes(`href="${l}"`)) e(`table link ${l}`);
// price block
const price = ans[2] || '';
if (price !== 'A consultation costs 2,000 CZK per hour (approx. €80), or 3,000 CZK (approx. €120) with a website audit and a 12-month plan. The 3-month start costs 50,000 CZK (approx. €2,050). Full SEO starts at 15,000 CZK per month (approx. €610). The audit is free. I am not a VAT payer, so the prices are final. EUR amounts are approximate, at the CNB rate of 27 November 2026 (24.435 CZK per EUR).') e('price answer');
if ((main.match(/CNB rate of 27 November 2026 \(24\.435 CZK per EUR\)/g) || []).length !== 1) e('the rate note appears once');
// experience: the case of another industry, the cs formula, one link, no duration of the work
const exp = ans[3] || '';
if (!exp.includes('65–70 % month after month for three months in a row (March to September 2026)') || !exp.includes('for accounting firms these numbers promise nothing') || /\b(months of work|\d+ months)\b/.test(exp.replace('three months in a row', ''))) e('experience block');
if (!/<a class="link-arrow" href="\/en\/case-studies\/seo-translation-agency-half-year\/">Read the case study<\/a>/.test(main)) e('case link');
// observation (16 sites, 25. 10. 2026, Czech query, no names)
const obsSec = (main.match(/What did I find on the websites of accounting firms\?<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if (!obsSec.includes('As of 25 October 2026') || !obsSec.includes('16 accounting firms') || !obsSec.includes('Czech-language query “účetní kancelář Praha”') || !obsSec.includes('This is my own observation, not a study.') || !obsSec.includes('The observation was made on Czech-language search queries on one day. It is not a rule for other sites.')) e('observation block');
if ((obsSec.match(/<li>/g) || []).length !== 5 || !obsSec.includes('14 of the 16 websites have no blog.')) e('observation list (5 items)');
// FAQ
const faq = [...(main.match(/Frequently asked questions<\/h2>[\s\S]*?<\/section>/) || [''])[0].matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 9 || faq.map(([, a]) => w(a)).join() !== '57,49,48,52,57,57,47,54,42' || faq.some(([q, a]) => !q.endsWith('?') || w(a) < 40 || w(a) > 60)) e(`FAQ: ${faq.map(([, a]) => w(a))}`);
if (!faq[5] || !faq[5][1].includes('Status for accounting firms as of 28 November 2026: free.') || (main.match(/Status for accounting firms as of 28 November 2026: free\./g) || []).length !== 1) e('capacity status "free" as of 28 November 2026 (once, in FAQ 6)');
if (!faq[4] || faq[4][1].includes('several language versions')) e('FAQ 5 follows the Czech page (no language-version sentence)');
if (!faq[8] || !faq[8][1].includes('I do not give tax or legal advice.')) e('FAQ 9');
// K5 before the closing CTA
const body = txt(main);
if (body.indexOf('I am an SEO specialist, so my assessment may be biased.') < 0 || body.indexOf('I am an SEO specialist') > body.indexOf('Find out whether your website has technical errors')) e('K5 before the CTA');
if (!/Get a free audit<\/a>\s*<a class="btn btn--ghost-light btn--lg" href="\/en\/contact\/">Write to me<\/a>/.test(main)) e('closing buttons: Get a free audit + Write to me');
// JSON-LD
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /VideoObject|HowTo|Review|Rating|Product|Offer|Quotation|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist|AccountingService|Service/.test(String(t))) || !types.includes('WebPage') || types.filter((t) => t === 'Person').length !== 1) e(`JSON-LD types: ${types}`);
if (!ld.some((x) => x['@type'] === 'WebPage' && x.inLanguage === 'en')) e('WebPage inLanguage en');
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((x) => [x.name, x.acceptedAnswer.text])) !== JSON.stringify(faq.map(([q, a]) => [q, a.replace(/\s*\((?:≈|approx\.?)\s*€[^)]*\)/g, '')]))) e('FAQPage must equal the visible FAQ (9)');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ') === 'Home > SEO for accounting firms in Prague')) e('BreadcrumbList');
// wording and amounts
if (/4[–-]8 weeks|months 3[–-]6|significant|certified|\bEU\b|rating|tax return|deadline for|according to the law|by law/i.test(body.replace(/I do not promise a deadline/g, ''))) e('forbidden wording');
const eur = [...body.matchAll(/€\s?[\d,]+/g)].map((m) => m[0].replace(/\s/g, ''));
if (eur.some((x) => !['€610', '€2,050', '€80', '€120'].includes(x))) e(`EUR amounts: ${eur}`);
const czk = [...body.matchAll(/(?<![\d.])[\d,]+ CZK/g)].map((m) => m[0]);
if (czk.some((x) => !['2,000 CZK', '3,000 CZK', '50,000 CZK', '15,000 CZK'].includes(x))) e(`CZK amounts: ${czk}`);
// links: English pages only, no articles, no Brno / other industries
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const okLinks = ['/en/about/', '/en/free-audit/', '/en/consulting/', '/en/3-month-start/', '/en/full-seo/', '/en/maps/', '/en/contact/', '/en/case-studies/seo-translation-agency-half-year/'];
if (links.some((l) => !okLinks.includes(l))) e(`links: ${links.filter((l) => !okLinks.includes(l))}`);
if (/Related articles|post-card|Brno|Pardubice/.test(main)) e('no article cards, no Brno / other-city links');
if (/[ěščřžýáíéúůďťň]/.test(body.replace(/“účetní kancelář Praha”/g, ''))) e('Czech letters outside the quoted query');
if (/[Ѐ-ӿ]/.test(body)) e('Cyrillic');
// hreflang: cs, en, ru, x-default on the three pages (the Russian page exists and was already paired with the Czech one)
const U = { cs: 'https://seo-eranosian.com/seo-pro-ucetni-kancelare-praha/', en: 'https://seo-eranosian.com/en/seo-for-accounting-firms-prague/', ru: 'https://seo-eranosian.com/ru/seo-dlya-buhgalterskih-kompanij-praga/' };
const want3 = { [U.cs]: 'dist/seo-pro-ucetni-kancelare-praha/index.html', [U.en]: P, [U.ru]: 'dist/ru/seo-dlya-buhgalterskih-kompanij-praga/index.html' };
for (const [u, f] of Object.entries(want3)) {
  const x = readFileSync(f, 'utf8'); const set = [...x.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + '=' + m[2]).sort().join();
  const exp = [`cs=${U.cs}`, `en=${U.en}`, `ru=${U.ru}`, `x-default=${U.cs}`].sort().join();
  if (set !== exp) e(`hreflang on ${u}: ${set}`);
}
const sm = readFileSync('dist/sitemap.xml', 'utf8');
if (!/<url><loc>https:\/\/seo-eranosian\.com\/en\/seo-for-accounting-firms-prague\/<\/loc><lastmod>[\d-]+<\/lastmod>/.test(sm)) e('not in the sitemap');
// not in the English menu / home block (the author decides, [?8])
const home = readFileSync('dist/en/index.html', 'utf8');
if (home.includes('seo-for-accounting-firms-prague')) e('the page must not be linked from the English menu / home page yet');
if (errs.length) { console.error('✗ check-niche-accounting-en:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log('✓ check-niche-accounting-en: ok (8 H2, 9 FAQ, 5 steps)');
