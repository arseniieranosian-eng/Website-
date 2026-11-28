// Check of /en/seo-for-translation-agencies-prague/ (brief of 28.11.2026): meta (Title 50, Description 125, H1 80), byline /en/about/ + Published / Updated, intro 71 words, sections in the order of the brief (no video block, no article cards),
// the six H3 of "What do I do" (29/29/30/40/63/20 words) + the quote, the two case paragraphs (65–70 % in March–September 2026; 8× in June vs May; no total, no duration of the work, no "real enquiries are higher"), the AI Overview screenshot with the
// English caption, the capacity line and the status "free" dated 28 November 2026, 3 steps, audit block (37 words, 6 "not included"), price answer (71) with the rate note once, 4 format cards with the prices of the brief, 9 FAQ (48/49/54/54/52/49/52/47/54) =
// all three "Get a free audit" buttons lead to /en/free-audit/?niche=translation-agencies (funnel of 28.11.2026), FAQPage (euro estimates in brackets removed from the markup by the site rule), no forbidden JSON-LD types, English links only (case page /en/case-studies/seo-translation-agency-half-year/), hreflang cs / en / ru / x-default on the three pages.
import { readFileSync } from 'node:fs';
const errs = []; const e = (m) => errs.push(m);
const P = 'dist/en/seo-for-translation-agencies-prague/index.html';
const h = readFileSync(P, 'utf8');
const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;| /g, ' ');
const txt = (s) => dec(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const w = (s) => s.split(' ').length;
const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)[1]);
const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
if (title !== 'SEO for Translation Agencies in Prague | Eranosian' || title.length !== 50) e(`title ${title.length}`);
if (desc !== 'SEO and GEO/AEO for translation agencies in Prague: language pairs, services, B2B pages and a free audit of technical errors.' || desc.length !== 125) e(`description ${desc.length}`);
if (h1 !== 'SEO and GEO/AEO for translation agencies in Prague: enquiries from Google and AI' || h1.length !== 80 || title.replace(/ \| Eranosian$/, '') === h1) e('H1');
if (!h.includes('<link rel="canonical" href="https://seo-eranosian.com/en/seo-for-translation-agencies-prague/">') || !h.includes('<html lang="en"')) e('canonical / lang');
if (!/Author: <a href="\/en\/about\/">Arsenii Eranosian<\/a> · Published: <time datetime="[\d-]+">[\d.]+<\/time> · Updated: <time datetime="[\d-]+">[\d.]+<\/time>/.test(h)) e('byline');
const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
if (w(lead) !== 71 || !lead.startsWith('I work on SEO and GEO/AEO for translation agencies in Prague:') || !lead.endsWith('(approx. €610).')) e(`intro ${w(lead)}`);
if (!/On this page/.test(main)) e('table of contents');
const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
const want = ['Is this page for you?', 'What do I do for a translation agency?', 'How does it work in practice? A case study', 'How do I work with translation agencies?', 'What does the free audit include?', 'How much does it cost?', 'Which formats of cooperation are there?', 'What do clients say?', 'Frequently asked questions', 'Related articles', 'Find out whether your website has technical errors'];
if (h2.join('|') !== want.join('|')) e(`H2: ${h2}`);
const ans = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]));
if (w(ans[0]) !== 54) e(`"Is this page for you?" ${w(ans[0])}`);
if (w(ans[1]) !== 43) e(`what-I-do intro ${w(ans[1])}`);
const doH3 = [...main.matchAll(/<div class="do-item">[\s\S]*?<h3>([^<]*)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [m[1], w(inl(m[2]))]);
if (JSON.stringify(doH3.map(([, n]) => n)) !== '[29,29,30,40,63,20]' || doH3.map(([x]) => x).join('|') !== 'Pages for language pairs|Pages for services and fields|A page for companies (B2B enquiries)|Language versions: indexing and duplicates|Local presence: Google Maps and Mapy.com for agencies|GEO/AEO: part of every service') e(`do blocks: ${JSON.stringify(doH3)}`);
if ((main.match(/class="quote-fig"/g) || []).length !== 1 || !main.includes('For a translation agency, the enquiry is decided in the details: the language pair, the field and the city.')) e('one quote');
const c1 = ans[2];
if (c1 !== 'An agency with branches saw enquiries grow in three consecutive months, by 65–70 % per month (March to September 2026). The figures are relative and the client stays anonymous.' || w(c1) !== 29) e('case paragraph 1');
const caseSec = (main.match(/How does it work in practice\? A case study<\/h2>[\s\S]*?<\/section>/) || [''])[0];
const c2 = inl((caseSec.match(/<p>(Separately[\s\S]*?)<\/p>/) || [, ''])[1]);
if (!c2.includes('in June enquiries grew 8× compared with May (form and e-mail), the agency won its first B2B client and appeared in Google AI Overview answers.')) e(`case paragraph 2: ${c2}`);
if (/real (enquiries|number|growth)|in total|overall|over 4 months|4 months|half-year|half a year|six months|over 3 years|\+775/i.test(inl(caseSec).replace('seo-translation-agency-half-year', ''))) e('case: no total, no duration, no foreign figures');
if (!/<a class="link-arrow" href="\/en\/case-studies\/seo-translation-agency-half-year\/">Read the full case study<\/a>/.test(caseSec)) e('case link');
if (!caseSec.includes('Google AI Overview for the Czech query “překlady Praha”, captured 16 October 2026; the agency’s logo is blurred.') || !/niche-ai-overview-prekladatelska-agentura\.webp/.test(caseSec)) e('AI Overview screenshot + caption');
const coop = (main.match(/How do I work with translation agencies\?<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if (!coop.includes('I work with no more than three firms from one industry at the same time.') || !coop.includes('Status for translation agencies as of 28 November 2026: free.') || (coop.match(/<li>/g) || []).length !== 3) e('capacity line, dated status, 3 steps');
if (!/free\b/.test(coop) || /volno/i.test(main)) e('status');
const aud = (main.match(/What does the free audit include\?<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if (w(inl((aud.match(/<p class="answer">([\s\S]*?)<\/p>/) || [, ''])[1])) !== 37 || [...aud.matchAll(/<li>([^<]*)<\/li>/g)].map((m) => m[1]).join('|') !== 'keywords|competition|maps|visibility in AI search|page speed|mobile version' || !/href="\/en\/free-audit\/\?niche=translation-agencies" data-cta="audit_block">Get a free audit<\/a>/.test(aud)) e('audit block');
const price = (main.match(/How much does it cost\?<\/h2>[\s\S]*?<\/section>/) || [''])[0];
if (w(inl((price.match(/<p class="answer">([\s\S]*?)<\/p>/) || [, ''])[1])) !== 71 || (txt(main).match(/24\.435 CZK per EUR/g) || []).length < 1) e('price answer');
const cards = [...(main.match(/Which formats of cooperation are there\?<\/h2>[\s\S]*?<\/section>/) || [''])[0].matchAll(/<a class="card card--link" href="([^"]+)">[\s\S]*?<h3>([^<]*)<\/h3>[\s\S]*?<strong>([^<]*)<\/strong>/g)].map((m) => [m[1], m[2], inl(m[3])]);
if (JSON.stringify(cards) !== JSON.stringify([['/en/consulting/', 'Consulting', 'from 2,000 CZK (approx. €80)'], ['/en/3-month-start/', '3-month start', '50,000 CZK (approx. €2,050)'], ['/en/full-seo/', 'Full SEO for a year', 'from 15,000 CZK per month (approx. €610)'], ['/en/maps/', 'Maps (Google + Mapy.com)', 'priced separately']]) || !main.includes('I cannot guarantee time or result.')) e(`format cards: ${JSON.stringify(cards)}`);
if (!/href="\/en\/reviews\/">Client reviews<\/a>/.test(main)) e('reviews link');
const faq = [...(main.match(/Frequently asked questions<\/h2>[\s\S]*?<\/section>/) || [''])[0].matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
if (faq.length !== 9 || faq.map(([, a]) => w(a)).join() !== '48,49,54,54,52,49,52,47,54') e(`FAQ: ${faq.map(([, a]) => w(a))}`);
if (!main.includes('I am an SEO specialist, so my assessment may be biased.') || !/href="\/en\/free-audit\/\?niche=translation-agencies" data-cta="final">Get a free audit<\/a>[\s\S]*href="\/en\/contact\/">Write to me<\/a>/.test(main)) e('K5 + final CTA buttons');
let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
const types = ld.map((x) => x['@type']);
if (types.some((t) => /VideoObject|HowTo|Review|Rating|Product|Offer|Quotation|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist|AccountingService|Service/.test(String(t))) || !types.includes('WebPage') || types.filter((t) => t === 'Person').length !== 1) e(`JSON-LD types: ${types}`);
if (!ld.some((x) => x['@type'] === 'WebPage' && x.inLanguage === 'en')) e('WebPage inLanguage en');
const fp = ld.find((x) => x['@type'] === 'FAQPage');
if (!fp || JSON.stringify(fp.mainEntity.map((x) => [x.name, x.acceptedAnswer.text])) !== JSON.stringify(faq.map(([q, a]) => [q, a.replace(/\s*\((?:≈|approx\.?)\s*€[^)]*\)/g, '')]))) e('FAQPage must equal the visible FAQ (9)');
if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ') === 'Home > SEO for translation agencies in Prague')) e('BreadcrumbList');
const body = txt(main);
if (/4[–-]8 weeks|months 3[–-]6|significant|certified|sworn|\bEU\b|rating/i.test(body)) e('forbidden wording');
const eur = [...body.matchAll(/€\s?[\d,]+/g)].map((m) => m[0].replace(/\s/g, ''));
if (eur.some((x) => !['€610', '€2,050', '€80', '€120'].includes(x))) e(`EUR amounts: ${eur}`);
if ((main.match(/href="\/en\/free-audit\/\?niche=translation-agencies"/g) || []).length !== 3 || /href="\/en\/free-audit\/"/.test(main)) e('the three audit buttons must carry ?niche=translation-agencies');
const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
const related = (main.match(/<h2[^>]*>Related articles<\/h2>[\s\S]*?<\/section>/) || [''])[0];
const rcards = [...related.matchAll(/<a class="card card--link post-card" href="([^"]+)"/g)].map((m) => m[1]);
if (rcards.join() !== '/en/blog/czech-and-english-website-versions-translation-agency/,/en/blog/translation-agency-website-no-enquiries/' || !related.includes('Read the article') || links.filter((l) => /\/blog\//.test(l)).length !== 2) e('Related articles: exactly the two English articles as cards, no other link to them (rule F)');
if (links.some((l) => (/^\/(?!en\/)/.test(l) && l !== '/seo-pro-prekladatelske-agentury-praha/') || /\/blog\/|seo-pro-/.test(l.replace('/seo-pro-prekladatelske-agentury-praha/', '').replace(/\/en\/blog\/(czech-and-english-website-versions-translation-agency|translation-agency-website-no-enquiries)\//g, '')))) e(`links to Czech pages / articles: ${links.filter((l) => /^\/(?!en\/)/.test(l))}`);
if (/[ěščřžýáíéúůďťň]/.test(body.replace(/“překlady Praha”|Czech/g, ''))) e('Czech letters outside the quoted query');
// hreflang: cs, en, ru, x-default on the three pages
const want3 = { '/seo-pro-prekladatelske-agentury-praha/': 'dist/seo-pro-prekladatelske-agentury-praha/index.html', '/en/seo-for-translation-agencies-prague/': P, '/ru/seo-dlya-perevodcheskih-agentstv-praga/': 'dist/ru/seo-dlya-perevodcheskih-agentstv-praga/index.html' };
for (const [u, f] of Object.entries(want3)) {
  const x = readFileSync(f, 'utf8'); const set = [...x.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1] + '=' + m[2]).sort().join();
  const exp = ['cs=https://seo-eranosian.com/seo-pro-prekladatelske-agentury-praha/', 'en=https://seo-eranosian.com/en/seo-for-translation-agencies-prague/', 'ru=https://seo-eranosian.com/ru/seo-dlya-perevodcheskih-agentstv-praga/', 'x-default=https://seo-eranosian.com/seo-pro-prekladatelske-agentury-praha/'].sort().join();
  if (set !== exp) e(`hreflang on ${u}: ${set}`);
}
const sm = readFileSync('dist/sitemap.xml', 'utf8');
if (!sm.includes('<loc>https://seo-eranosian.com/en/seo-for-translation-agencies-prague/</loc>')) e('not in the sitemap');
if (errs.length) { console.error('✗ check-niche-translation-en:\n  - ' + errs.join('\n  - ')); process.exit(1); }
console.log('✓ check-niche-translation-en: ok (11 H2 incl. Related articles, 9 FAQ, 4 formats)');
