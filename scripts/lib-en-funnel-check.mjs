// Shared checks of the two English funnel articles (brief of 28.11.2026). Each article script passes its own expectations (meta, answers, H2, FAQ, ...).
import * as realFs from 'node:fs';
import { readFileSync } from './fs-clean.mjs';

const txt = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const inl = (s) => txt(s.replace(/<[^>]+>/g, ''));
const wc = (s) => s.split(' ').length;

export function checkEnArticle(cfg) {
  const errs = []; const e = (m) => errs.push(m);
  const dir = `dist/en/blog/${cfg.slug}/`;
  const h = readFileSync(dir + 'index.html', 'utf8');
  const raw = realFs.readFileSync(dir + 'index.html', 'utf8');
  const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0];
  const title = txt(h.match(/<title>([\s\S]*?)<\/title>/)[1]);
  const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
  const h1 = txt((main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]);
  // meta
  if (title !== cfg.title || title.length !== cfg.titleLen || title.length > 50 || !title.endsWith(' | Eranosian')) e(`title "${title}" (${title.length})`);
  if (h1 !== cfg.h1 || h1.length !== cfg.h1Len) e(`H1 (${h1.length})`);
  if (desc !== cfg.desc || desc.length !== cfg.descLen || desc.length > 130) e(`description (${desc.length})`);
  if (title.replace(/ \| Eranosian$/, '') === h1) e('Title must differ from H1');
  if (/\b(buy|order now|call us|free audit)\b/i.test(desc)) e('no CTA in the description');
  if (!h.includes(`<link rel="canonical" href="https://seo-eranosian.com/en/blog/${cfg.slug}/">`)) e('canonical (non-www)');
  if (/<link rel="alternate"[^>]*hreflang=/.test(h)) e('hreflang: none (an adaptation, no pair with a Czech page)');
  if (!/<html lang="en"/.test(h)) e('html lang');
  if (!/Published: <time datetime="2026-11-28">28 November 2026<\/time> · Updated: <time datetime="2026-11-28">28 November 2026<\/time>/.test(raw)) e('Published / Updated dates (28 November 2026, set by the author later)');
  if (!/Author: <a href="\/en\/about\/">Arsenii Eranosian<\/a>/.test(main)) e('K3 byline -> /en/about/');
  // sitemap: the page without hreflang pairs, lastmod = the visible Updated date
  const sm = realFs.readFileSync('dist/sitemap.xml', 'utf8');
  if (!sm.includes(`<url><loc>https://seo-eranosian.com/en/blog/${cfg.slug}/</loc><lastmod>2026-11-28</lastmod></url>`)) e('sitemap: the URL without hreflang pairs and with lastmod 2026-11-28');
  // lead (the answer after the H1) and the direct answers
  const lead = inl((main.match(/<p class="lead">([\s\S]*?)<\/p>/) || [, ''])[1]);
  if (lead !== cfg.lead || wc(lead) < 40 || wc(lead) > 60) e(`lead: ${wc(lead)} words`);
  const answers = [...main.matchAll(/<p class="answer">([\s\S]*?)<\/p>/g)].map((m) => inl(m[1]));
  if (answers.map((a) => wc(a)).join() !== cfg.answerCounts.join() || answers.some((a) => wc(a) < 40 || wc(a) > 60)) e(`direct answers: ${answers.map((a) => wc(a))}`);
  for (const [i, a] of cfg.answerTexts.entries()) if (answers[i] !== a) e(`answer ${i + 1} text`);
  // headings
  const h2 = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => txt(m[1]));
  if (JSON.stringify(h2) !== JSON.stringify(cfg.h2)) e(`H2: ${JSON.stringify(h2)}`);
  for (const x of h2) if (!x.endsWith('?') && !cfg.h2Plain.includes(x)) e(`H2 must be a question: ${x}`);
  const faq = [...main.matchAll(/<h3>((?:(?!<h3>)[\s\S])*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((m) => [inl(m[1]), inl(m[2])]);
  if (JSON.stringify(faq.map(([q, a]) => [q, wc(a)])) !== JSON.stringify(cfg.faq.map(([q, n]) => [q, n]))) e(`FAQ questions / answer lengths: ${faq.map(([, a]) => wc(a))}`);
  if (faq.some(([q, a]) => !q.endsWith('?') || wc(a) < 40 || wc(a) > 60)) e('FAQ: question mark, 40-60 words');
  // quote
  const bq = [...main.matchAll(/<blockquote[^>]*><p>([\s\S]*?)<\/p><\/blockquote>/g)].map((m) => inl(m[1]));
  if (bq.length !== 1 || bq[0] !== cfg.quote || cfg.quote.length > 125) e(`one author quote (<=125): ${bq.length}`);
  // JSON-LD
  let ld = []; for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { const g = JSON.parse(m[1]); ld = ld.concat(g['@graph'] || [g]); }
  const types = ld.map((x) => x['@type']);
  if (types.some((t) => /Quotation|HowTo|Review|Rating|VideoObject|Product|Offer|LocalBusiness|ProfessionalService|MedicalBusiness|Dentist|AccountingService/.test(String(t))) || types.filter((t) => t === 'Person').length !== 1) e(`forbidden JSON-LD type or a third-party Person: ${types}`);
  const person = ld.find((x) => x['@type'] === 'Person');
  if (!person || person['@id'] !== 'https://seo-eranosian.com/#arsenii') e('the byline Person is the site author');
  const fp = ld.filter((x) => x['@type'] === 'FAQPage');
  if (fp.length !== 1 || JSON.stringify(fp[0].mainEntity.map((q) => [q.name, q.acceptedAnswer.text])) !== JSON.stringify(faq)) e('FAQPage must equal the visible FAQ 1:1');
  const bp = ld.find((x) => x['@type'] === 'BlogPosting');
  if (!bp || bp.headline !== h1 || bp.datePublished !== '2026-11-28' || bp.dateModified !== '2026-11-28' || bp.description !== desc || bp.inLanguage !== 'en' || bp.author?.['@id'] !== 'https://seo-eranosian.com/#arsenii') e('BlogPosting');
  const wp = ld.find((x) => x['@type'] === 'WebPage');
  if (!wp || wp.name !== cfg.title.replace(/ \| Eranosian$/, '') || wp.dateModified !== '2026-11-28') e('WebPage');
  if (!ld.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.map((i) => i.name).join(' > ') === 'Home > Blog > ' + h1)) e('BreadcrumbList Home > Blog > article');
  // links: the body has no link to another article (rule F), no Czech page; only about, contact, the niche page, the sources and the one related card
  const links = [...main.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((l) => !l.startsWith('#'));
  const ok = ['/en/about/', '/en/contact/', '/en/seo-for-translation-agencies-prague/', cfg.relatedHref, ...cfg.sources];
  if (links.some((l) => !ok.includes(l)) || ok.some((l) => !links.includes(l))) e(`links: ${links}`);
  if (links.some((l) => l.startsWith('/') && !l.startsWith('/en/'))) e('no link to a Czech / Russian page');
  const more = (main.match(/<h2[^>]*>Related articles<\/h2>[\s\S]*?<\/section>/) || [''])[0];
  const cards = [...more.matchAll(/<a class="card card--link post-card" href="([^"]+)"/g)].map((m) => m[1]);
  if (cards.join() !== cfg.relatedHref || !more.includes('Read the article') || !more.includes(cfg.moreLead)) e('Related articles: one card (the other article), "Read the article"');
  if (links.filter((l) => l === cfg.relatedHref).length !== 1) e('the other article is linked by the card only');
  const outsideMore = main.replace(more, '');
  if (outsideMore.includes(cfg.relatedHref)) e('rule F: no link to the other article in the body');
  // CTA (rule H), K5 before, K7 after
  if ((main.match(/class="btn btn--primary/g) || []).length !== 1 || !/<a class="btn btn--primary btn--lg" href="\/en\/seo-for-translation-agencies-prague\/">SEO for translation agencies in Prague<\/a>/.test(main) || /<form/.test(main)) e('ONE button to the translation-agency page');
  const body = txt(main);
  const iK5 = body.indexOf('I am an SEO specialist, so my assessment may be biased.');
  const iCta = body.indexOf('SEO for translation agencies in Prague', iK5);
  const iK7 = body.indexOf('Found a mistake? Write to me.');
  if (iK5 < 0 || iCta < iK5 || iK7 < iCta || iK5 < body.indexOf('Related articles')) e('K5 before the CTA, K7 after it, both after the "Related articles" block');
  if (!/<p class="muted">Found a mistake\? <a href="\/en\/contact\/">Write to me\.<\/a><\/p>/.test(main)) e('K7 -> /en/contact/');
  // toc + illustrations come from the layout; here: the list exists with every H2
  const toc = (raw.match(/<nav class="toc"[\s\S]*?<\/nav>/) || [''])[0];
  if (!toc.includes('In this article:') || (toc.match(/<li>/g) || []).length !== cfg.h2.length) e(`table of contents: ${(toc.match(/<li>/g) || []).length} items for ${cfg.h2.length} H2`);
  // cover
  const cover = main.match(/<img class="post-cover" src="([^"]+)" width="1200" height="630" alt="([^"]*)"/);
  if (!cover || cover[1] !== `/images/blog/${cfg.slug}.webp` || !realFs.existsSync('public' + cover[1]) || !realFs.existsSync(`public/images/blog/og-${cfg.slug}.png`) || cover[2].length > 125 || /^(photo|image|picture)/i.test(cover[2]) || cover[2].split(' ').length < 3) e('cover: file, alt 3+ words, <=125 characters');
  if (!h.includes(`content="https://seo-eranosian.com/images/blog/og-${cfg.slug}.png"`)) e('og:image');
  // text rules
  if (/[Ѐ-ӿ]/.test(body) || /[ěščřžýáíéúůťďňĚŠČŘŽÝÁÍÉÚŮŤĎŇ]/.test(body)) e('Czech / Cyrillic characters in the English text');
  const stripNeg = body.replace(/\b(do not|does not|doesn't|don't|cannot|can't|not|no|nor|neither|without)\b[^.]*\./gi, ' ').replace(/Does hreflang guarantee[^?]*\?/g, ' ').replace(/guaranteed/gi, ' ');
  if (/\bguarantee/i.test(stripNeg) || /\bwill (rank|bring|increase|grow|double)\b|first place|first page|top \d|\b#1\b|within \d+ (days|weeks|months)|\d+ ?%/i.test(body)) e('no promises of a result or a time');
  if (/\bdemand\b|search volume|monthly searches|\bSeznam\.cz\b|Firmy\.cz|Heureka|Zoner|competitor/i.test(body)) e('no demand statements, no catalogue / competitor names');
  if (/\bGDPR\b|\bVAT\b|\blegal(ly)?\b|\blaw\b/i.test(body)) e('no legal statements');
  return { errs, h, main, answers, faq, h2 };
}

export function finish(name, errs, info) {
  if (errs.length) { console.error(`✗ ${name}:\n  - ` + errs.join('\n  - ')); process.exit(1); }
  console.log(`✓ ${name}: ok (${info})`);
}
