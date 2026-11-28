// English version of the page /caste-dotazy/ (brief of 28.11.2026): the same 6 groups, the questions of the brief (19: the Czech question 20 about niche pages is not carried over, there are no English niche pages), the answers as given
// in the brief (40-60 words). Facts follow the Czech page (data/faq-page-cs.ts); the statements that the brief gives beyond the Czech text are listed in the report. "{key|text}" in an answer is a link to an English page (the JSON-LD gets the plain text).
// Prices in CZK + "approx." EUR at the CNB rate of 27 November 2026 (24.435 CZK per EUR); the euro estimates in brackets are removed from the JSON-LD by the site rule. No "4-8 weeks", no "months 3-6", no "significant share", no "paid per result".
import type { FaqPageGroup } from './faq-page-cs';

// The dates are the ones of the Czech page (published 18. 10. 2026, updated 9. 11. 2026); the author sets the English ones by hand at publication.
export const FAQ_PAGE_EN_UPDATED = '2026-11-09';
export const FAQ_PAGE_EN_PUBLISHED = '2026-10-18';

export const FAQ_PAGE_EN_GROUPS: FaqPageGroup[] = [
  { id: 'ceny', title: 'How much does SEO cost and what are the packages?', items: [
    { q: 'How much does SEO cost?', a: '{fullSeo|Full SEO for a year} costs from 15,000 CZK per month (approx. €610) on a 12-month term. The {start|3-month start} costs 50,000 CZK (approx. €2,050), and a {consulting|consultation} costs 2,000 CZK per hour (approx. €80). The exact price of Full SEO depends on the industry and the scope and is confirmed after your enquiry.' },
    { q: 'How is the price set and why does it differ by industry?', a: 'The price starts at 15,000 CZK per month and depends on the competition in your industry and on the current state of your website. The amount of content is also set individually. That is why I give a starting price and confirm the exact amount after your enquiry, not before it.' },
    { q: 'What does Full SEO include?', a: 'Work on the website (audit, keywords, edits of texts and headings, monthly content, technical monitoring), work beyond it (link building and profiles on Google, Mapy.com and Firmy.cz), AI optimisation (GEO/AEO) and a weekly report. You work with one person, me, from the audit to the reports. Details are on the {fullSeo|Full SEO page}.' },
    { q: 'How does the 3-month start differ from Full SEO?', a: 'The {start|3-month start} costs 50,000 CZK in total (approx. €2,050) and covers a technical audit and fixes, keyword analysis, a 12-month plan, site structure, content and maps. {fullSeo|Full SEO} is a yearly engagement from 15,000 CZK per month (approx. €610). Which one suits you depends on your site, industry and budget.' },
    { q: 'How much does a consultation cost?', a: 'A {consulting|consultation} costs 2,000 CZK per hour (approx. €80), or 3,000 CZK (approx. €120) including a website audit, with no time limit on the consultation. Before the call, please send me the address of your website and your questions, so that we can use the time well.' },
    { q: 'Do I have to add VAT to the prices?', a: 'No. I am not a VAT payer, so the prices listed on this website are final and no VAT is added to them. Prices are in Czech koruna (CZK). The EUR amounts are approximate and use the Czech National Bank rate of 27 November 2026 (24.435 CZK per EUR).' },
  ] },
  { id: 'spoluprace', title: 'How do we work together?', items: [
    { q: 'How does working together look?', a: 'It starts with a free audit, which you receive as a short presentation, with no call. Then you choose a service; calls are part of the paid services. I prepare a plan and report on the results regularly. You work with one person, me, from the first audit to the reports.' },
    { q: 'How should I prepare for a consultation?', a: 'Send me the address of your website and a list of questions. Access to Google Search Console and GA4 makes the analysis more precise. The more specific your questions are, the more practical a plan I can give you within the time of the consultation, so it is worth writing them down beforehand.' },
    { q: 'How often will I get a report?', a: 'Full SEO includes a weekly report that shows what is done, why it was done and what the results are. The 3-month start also includes weekly reports. A call is held only if you want one, so you decide how much we talk and how much you simply read.' },
  ] },
  { id: 'audit', title: 'What do I get in the free audit?', items: [
    { q: 'What does the free SEO audit include?', a: 'A {audit|technical check of your website}: indexing, duplicate pages and other technical issues. You receive a short presentation of the main errors and recommendations within 24 hours, without a call and without obligation. It is the first step before any paid service, and it stays free whatever you decide afterwards.' },
    { q: 'What does the free audit not include?', a: 'It does not cover keywords, competitors, maps, AI visibility, speed or mobile. It is a {audit|check of technical errors}, not a broad analysis of your market. Those topics belong to a paid consultation or to another service. The result arrives within 24 hours, with no call and no obligation.' },
    { q: 'Do I have to order anything after the free audit?', a: 'No. You decide what to do next. You can do nothing, book a paid consultation, choose the 3-month start or the Full SEO for a year. I do not push any option, and the audit stays free and without obligation whatever you decide.' },
  ] },
  { id: 'terminy', title: 'What about timelines and results?', items: [
    { q: 'How soon will I see results?', a: 'Neither the time nor the result can be guaranteed, because they depend on your website, on the competition and on the scope of the changes. The free audit comes first and sets the approach. I do not promise a deadline, and I do not state one on this page.' },
    { q: 'Do you guarantee first place on Google?', a: 'No. Rankings cannot be guaranteed, and promising first place would not be honest. What I offer is transparent work and measurable goals that we agree on in advance. Full SEO includes a weekly report, so you can see what was done and what the results are.' },
  ] },
  { id: 'seo-geo', title: 'SEO, GEO/AEO and search engines', items: [
    { q: 'What is the difference between SEO and GEO/AEO?', a: 'SEO improves how your pages rank in Google and Seznam results. {geo|GEO/AEO} aims to make AI tools such as ChatGPT, Gemini or Google AI Overviews more likely to recommend and cite your business. I do both together because they reinforce each other. I cannot promise that any AI tool will mention you.' },
    { q: 'Do you work on Seznam too, or only on Google?', a: 'Both. I optimise and track your website for Google and for Seznam, because both are used for searching in Czechia. Seznam also includes Mapy.com and Firmy.cz, which are part of the maps work. The share of each search engine differs by business, so I do not give a general figure.' },
    { q: 'Are Google, Mapy.com and Firmy.cz profiles part of Full SEO?', a: 'Yes. Full SEO includes profiles on Google, Mapy.com and Firmy.cz without a limit on their number. Maps are also available as a {maps|standalone service}, which is long-term and priced separately. The 3-month start includes the maps profiles as well, so you do not need to order maps separately for it.' },
  ] },
  { id: 'pro-koho', title: 'Who and where do I work with?', items: [
    { q: 'Do you work with businesses outside Prague?', a: 'Yes. I am based in Prague, but most of the work is online, with clients across Czechia and abroad. If you prefer to meet in person, we can arrange a meeting in Prague. Consultations can also be held online by video from anywhere, so the location of your business is not a limit.' },
    { q: 'Which languages do you work in?', a: 'I work in Czech, English and Russian for consultations and for the work itself. I also handle Ukrainian content, including multilingual websites and hreflang setup. You can write to me in any of the first three languages, whichever is most comfortable for you.' },
  ] },
];
