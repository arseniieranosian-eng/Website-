// English version of the niche landing page /seo-pro-prekladatelske-agentury-praha/ (brief of 28.11.2026): the page for translation agencies in Prague for the English-speaking owner / manager. Structure and facts follow the Czech page (data/niche-translation-cs.ts);
// the texts of the brief are verbatim; blocks of the Czech page that the brief does not list are NOT carried over (the video of the Czech review [?4], the 5 article cards [?6], the other cities / niches, the "why SEO" block). The status "free" is dated 28 November 2026 by the
// author's decision [?2] (the Czech page keeps 24. 10. 2026); the case study has two sets of figures with their own periods, both confirmed by the author [?3] (no total, no duration of the work). Prices in CZK + "approx." EUR, CNB rate of 27 November 2026 (24.435 CZK per EUR).
// No Czech pages or articles are linked; no claims about English-language demand (no Search Console data). JSON-LD: WebPage + FAQPage (9, 1:1 except the euro estimates in brackets, which the site rule removes from the markup).
import { CASE_LINE } from './case-summary';

// Placeholders: the author sets the real dates at publication (the status date below is the author's decision of 28.11.2026).
export const NICHE_TRANSLATION_EN_PUBLISHED = '2026-11-28';
export const NICHE_TRANSLATION_EN_UPDATED = '2026-11-28';
export const NICHE_TRANSLATION_EN_STATUS_DATE = '28 November 2026';

export const NICHE_TRANSLATION_EN = {
  lang: 'en' as const,
  authorLabel: 'Author',
  authorName: 'Arsenii Eranosian',
  publishedLabel: 'Published',
  updatedLabel: 'Updated',

  lead: 'I work on SEO and GEO/AEO for translation agencies in Prague: pages for language pairs and services, B2B pages and correct language versions of the site. You can work with me in English. I start with a free audit of technical errors: a short presentation within 24 hours, with no call and no obligation. A consultation costs from 2,000 CZK (approx. €80), Full SEO from 15,000 CZK per month (approx. €610).',
  heroAudit: 'Get a free audit',

  forTitle: 'Is this page for you?',
  forAnswer: 'This page is for translation agencies based in Prague or with a Prague office, whose owners or managers prefer to work in English, and for agencies that serve both Czech and English-speaking clients. If your website has one language version only, the audit and the plan still apply, but the language-version work does not.',

  doTitle: 'What do I do for a translation agency?',
  doIntro: 'A translation agency is chosen on details: the language pair, the field and the city. My work therefore covers the pages where those details are visible, the technical side that lets Google and AI tools read them, and your local presence in Prague.',
  do: [
    { h: 'Pages for language pairs', art: 'pairs', text: 'A separate page makes sense where there is demand for the pair and the agency has something specific to say about it. It is not needed in every case.' },
    { h: 'Pages for services and fields', art: 'services', text: 'Companies search for a specific type of translation, such as legal, technical or medical. Each type needs its own page that explains what the agency offers and for whom.' },
    { h: 'A page for companies (B2B enquiries)', art: 'b2b', text: 'For firms that order repeatedly, a separate page shows the fields you cover and how you work with companies, so that a business can see quickly whether the agency fits.' },
    { h: 'Language versions: indexing and duplicates', art: 'versions', text: 'I check that Google sees each language version of the site and does not take the versions for copies of each other. For an agency that serves Czech and English-speaking clients, this affects which version can appear for which search.' },
    { h: 'Local presence: Google Maps and Mapy.com for agencies', art: 'local', text: 'A profile on Google Maps and Mapy.com describes one place. The Prague profile describes only the Prague office, and every branch needs its own page on the website and its own profile with the same name, address and phone number as on the page. Maps are included in the 3-month start and in Full SEO, and are priced separately as a standalone service.' },
    { h: 'GEO/AEO: part of every service', art: 'geo', text: 'I prepare content that AI tools can understand and quote. I cannot promise that any AI tool will mention you.' },
  ],
  quote: 'For a translation agency, the enquiry is decided in the details: the language pair, the field and the city.',

  caseTitle: 'How does it work in practice? A case study',
  caseP1: 'An agency with branches saw enquiries grow in three consecutive months, by 65–70 % per month (March to September 2026). The figures are relative and the client stays anonymous.',
  // The second set of figures: the line of the case summary (the 4-month case page); each figure has its own period; no "real enquiries are higher" sentence.
  caseP2: CASE_LINE.en.replace('A translation agency with three branches: over 4 months of SEO work, enquiries', 'Separately, in June enquiries').replace('in June grew 8× compared with May', 'grew 8× compared with May'),
  caseLink: 'Read the full case study',
  caseImage: { src: '/images/niche-ai-overview-prekladatelska-agentura.webp', width: 760, height: 438, alt: 'Google AI Overview for the Czech query “překlady Praha”: the list of translation agencies includes the client’s website; its name, address and logo are blurred', caption: 'Google AI Overview for the Czech query “překlady Praha”, captured 16 October 2026; the agency’s logo is blurred.' },

  coopTitle: 'How do I work with translation agencies?',
  coopCapacity: 'I work with no more than three firms from one industry at the same time.',
  coopStatus: 'Status for translation agencies as of 28 November 2026: free.',
  coopSteps: ['Free audit of technical errors.', 'Choose a format of cooperation.', 'Work in the chosen format.'],

  auditTitle: 'What does the free audit include?',
  auditAnswer: 'The audit checks indexing, duplicate pages and other technical problems. For a website with several language versions it also checks each version separately. You receive a short presentation within 24 hours, without a call and without obligation.',
  auditNotLead: 'The audit does not include:',
  auditNot: ['keywords', 'competition', 'maps', 'visibility in AI search', 'page speed', 'mobile version'],
  auditCta: 'Get a free audit',

  priceTitle: 'How much does it cost?',
  priceAnswer: 'A consultation costs 2,000 CZK per hour (approx. €80), or 3,000 CZK (approx. €120) with a website audit and a 12-month plan. The 3-month start costs 50,000 CZK (approx. €2,050). Full SEO starts at 15,000 CZK per month (approx. €610). The audit is free. I am not a VAT payer, so the prices are final. EUR amounts are approximate, at the CNB rate of 27 November 2026 (24.435 CZK per EUR).',

  formatsTitle: 'Which formats of cooperation are there?',
  formatsAnswer: 'Choose a format by how much work you need. Maps (Google and Mapy.com) are also available as a separate service and are priced separately.',
  formats: [
    { page: 'consulting' as const, label: 'Consulting', price: 'from 2,000 CZK (approx. €80)', what: '1 hour or no time limit' },
    { page: 'start' as const, label: '3-month start', price: '50,000 CZK (approx. €2,050)', what: '3 months: audit, fixes, keywords, optimisation of the main pages' },
    { page: 'fullSeo' as const, label: 'Full SEO for a year', price: 'from 15,000 CZK per month (approx. €610)', what: '12 months' },
    { page: 'maps' as const, label: 'Maps (Google + Mapy.com)', price: 'priced separately', what: 'from 4 months' },
  ],
  formatsNote: 'I cannot guarantee time or result.',
  more: 'Learn more',

  reviewsTitle: 'What do clients say?',
  reviewsLink: 'Client reviews',

  faqTitle: 'Frequently asked questions',
  faq: [
    { q: 'How much does SEO for a translation agency cost?', a: 'A consultation costs 2,000 CZK per hour (approx. €80), or 3,000 CZK (approx. €120) with a website audit and a 12-month plan. The 3-month start costs 50,000 CZK (approx. €2,050) and Full SEO starts at 15,000 CZK per month (approx. €610). The audit of technical errors is free.' },
    { q: 'How long does SEO for a translation agency take?', a: 'Neither the time nor the result can be guaranteed, because they depend on your website, the competition and the scope of the changes. First comes the free audit, then we agree on a plan. I do not promise a deadline, and I do not state one on this page.' },
    { q: 'How is SEO different from advertising for a translation agency?', a: 'Advertising is paid for the period of a campaign, while SEO needs continuous work on the website and its content. Neither one can be guaranteed. The free audit is the first step in either case, and after it you decide whether to order a consultation, the 3-month start or Full SEO for a year.' },
    { q: 'Does an agency need a separate page for every language pair?', a: 'Not always. A separate page makes sense where there is demand for the pair and the agency has something concrete to say about it, such as the fields it covers. Where there is nothing specific to add, a page for the pair would only repeat other pages, so it is better to skip it.' },
    { q: 'What does SEO look like for an agency with branches in several cities?', a: 'Each city has its own local page on the website and its own profile on Google Maps and Mapy.com, with the same name, address and phone number as on the page. The Prague profile describes only the Prague office. Branches are therefore set up separately, each with its own page and profile.' },
    { q: 'What does the free audit do for a website with several language versions?', a: 'It checks whether each language version is indexed and whether Google takes the versions for duplicates of each other, as well as the usual technical errors. It does not cover keywords, competition, maps, AI visibility, speed or the mobile version. The result is a short presentation within 24 hours.' },
    { q: 'How many firms from one industry do you work with at a time?', a: 'No more than three firms from one industry at the same time. Whether there is room in the translation agency industry is stated on this page with a date, and it is the status as of that day only. Write to me if you want to check it before ordering the audit.' },
    { q: 'Can we work in English, and can we meet in Prague?', a: 'Yes to both. I work in English, Czech and Russian, so we can agree on everything in English. I am based in Prague, so a meeting in Prague is possible, and consultations can also be held online by video from anywhere, whatever the location of your agency.' },
    { q: 'Should a Prague agency target Czech or English searches?', a: 'That depends on who your clients are and how they search, and I do not assume it in advance. The free audit shows how the language versions of your site are set up. Keyword and demand analysis is not part of the audit; it belongs to the paid consultation and to the 3-month start.' },
  ],

  disclosure: 'I am an SEO specialist, so my assessment may be biased.',
  endTitle: 'Find out whether your website has technical errors',
  endText: 'A free audit shows the technical errors of a translation agency’s website: indexing, duplicates and other technical problems. I send a short presentation within 24 hours, without a call and without obligation.',
  endCta: 'Get a free audit',
  endContact: 'Write to me',
};
