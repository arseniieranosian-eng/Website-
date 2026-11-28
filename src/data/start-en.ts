// English content of /en/3-month-start/ (brief of 28.11.2026, v2 final): structure and blocks follow /start-3-mesice/ (data/start-cs.ts); the texts that the brief gives are verbatim (the months 1-3, the first-results answer, the
// guarantee answer, the quote, the six FAQ answers), the other blocks are translated from the Czech page without new claims. The author's decisions of 28.11.2026: months as in the brief (the old "scaling the reach, links…" is gone),
// prices in CZK and approximate EUR at the CNB rate of 27 November 2026 (1 EUR = 24.435 CZK: 50,000 -> 2,050; 25,000 -> 1,020; 15,000 -> 610), no "4-8 weeks", no "months 3-6", no "The ideal first step", no "paid per result" for maps ([?3]).
// No Offer / price markup in JSON-LD. No Czech articles or niches are linked.
import { CASE_LINE, TYPO_LINE_EN, EDU_LINE_EN, HALF_LINE_EN } from './case-summary';
import { CONSULTING_EN } from './consulting-en';

export const START_EN_UPDATED = '2026-11-03'; // the visible date is set by hand by the author (the previous value of the page is kept)

export const START_EN = {
  lang: 'en' as const,
  h1: 'A 3-month SEO start',
  authorLabel: 'Author',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Updated',
  lead: 'An intensive first stage of SEO: for 3 months I work fully on your website and on your Google and Mapy.com profiles.',
  badge: '50,000 CZK (approx. €2,050) · 3 months · weekly reports',
  heroPrimary: 'I am interested',
  heroAudit: 'Free audit',

  priceTitle: 'How much does the 3-month SEO start cost?',
  priceAnswer: 'The 3-month SEO start costs 50,000 CZK (approx. €2,050). Payment: 25,000 CZK (approx. €1,020) at the start and 25,000 CZK (approx. €1,020) by agreement.',
  priceNote: 'Prices are in Czech koruna (CZK). Approximate EUR amounts use the Czech National Bank rate of 27 November 2026 (24.435 CZK per EUR).',

  forWhomTitle: 'Who is it for?',
  forWhom: [
    'New websites and online stores',
    'Businesses that have never done SEO systematically',
    'Sites that lost traffic after a redesign',
  ],

  includesTitle: 'What is included in the price?',
  groups: [
    { title: 'Work on the website', items: [
      { text: 'Full technical SEO audit and fixes.' },
      { text: 'Keyword and competitor analysis.' },
      { text: 'Site structure proposal based on demand.' },
      { text: 'Optimisation of the main pages.' },
      { text: 'GA4 and Google Search Console setup.' },
    ] },
    { title: 'Google and Mapy.com profiles', items: [
      { text: 'Profiles on Google and Mapy.com without a limit on their number.' },
      { text: 'Tracking of calls, routes and website clicks.' },
      { text: 'Review management.' },
    ] },
    { title: 'GEO/AEO and reporting', items: [
      { text: 'AI search optimisation (GEO/AEO).', link: { text: 'What that means', page: 'geo' as const } },
      { text: 'Weekly report: what is done, why, and the results. A call if you want one.' },
    ] },
  ],

  mapsTitle: 'Are the Google and Mapy.com profiles part of the package?',
  maps: {
    first: 'Yes. I manage the profiles on Google and Mapy.com without a limit on their number, including calls, routes, website clicks and reviews. In the start the maps are part of a broader 3-month package. ',
    link: 'The standalone Maps service',
    after: ' is long-term (from 4 months) and is priced separately.',
  },

  stagesTitle: 'How it works',
  stages: [
    { name: 'Month 1', text: 'Audit, analysis and plan (including an audit of the maps profiles).' },
    { name: 'Month 2', text: 'Technical fixes and site structure (including optimisation of the maps profiles).' },
    { name: 'Month 3', text: 'Content, optimisation of the main pages and evaluation.' },
  ],
  weekly: 'Weekly reports are part of every month.',

  quote: 'A start is not just a beginning. In three months I lay a solid foundation: an audit, a 12-month plan, technical fixes, the structure of the site, content and work on maps. The site can keep growing on it.',

  resultsTitle: 'When will the first results come?',
  resultsAnswer: 'Usually after two to three months, depending on the industry and the competition. I cannot promise a specific result or date.',
  guaranteeTitle: 'Do you guarantee first place on Google?',
  guaranteeAnswer: 'No. First place cannot be guaranteed honestly. I offer transparent work and measurable goals that we agree on in advance.',

  compareTitle: '3-month start, or Full SEO for a year?',
  table: {
    corner: 'Parameter',
    head: ['3-month start', 'Full SEO for a year'],
    rows: [
      ['Duration', '3 months', '12 months'],
      ['Price', '50,000 CZK (approx. €2,050)', 'from 15,000 CZK per month (approx. €610)'],
      ['Focus', 'Technical foundation, site structure, optimisation of the main pages, measurement', 'Annual strategy, content every month, link building, quarterly plans, results of the year'],
      ['Maps (Google and Mapy.com)', 'Yes, no limit on the number of profiles', 'Yes, no limit on the number of profiles'],
      ['Reports', 'Weekly, a call if you want one', 'Weekly, a call if you want one'],
    ],
  },
  fullLink: 'Full SEO for a year',
  consultingNote: { before: 'If you only need answers and a plan, I will not do the work for you, but I will advise: ', link: 'consultation', after: '.' },
  mapsNote: { before: 'If you only need maps: ', link: 'standalone Maps service', after: '.' },

  caseTitle: 'What has it brought clients?',
  cases: [
    { text: CASE_LINE.en, link: 'The full story', page: 'caseKb' as const },
    { text: TYPO_LINE_EN, link: 'Case study: SEO for a print shop', page: 'caseTypo' as const },
    { text: EDU_LINE_EN, link: 'Example: SEO for a new education platform (starting a new site)', page: 'caseEdu' as const },
    { text: HALF_LINE_EN, link: 'Half a year of work on a translation agency’s website', page: 'caseHalf' as const },
  ],

  reviewsTitle: 'What clients say',

  faqTitle: 'Questions about the 3-month start',
  faq: [
    { q: 'How much does the 3-month SEO start cost?', a: 'The 3-month SEO start costs 50,000 CZK in total (approx. €2,050). You pay 25,000 CZK at the start and the other 25,000 CZK by agreement. The price includes the work on the website, the Google and Mapy.com profiles, GEO/AEO and the weekly reports described on this page.' },
    { q: 'How often will I get a report?', a: 'Every week. You receive a weekly report, and a call is held only if you want one. The weekly report is part of the 3-month start and is included in its price. If you would like to discuss a report, write to me or book a call at a time that suits you.' },
    { q: 'When will I see the first results?', a: 'Usually after two to three months, depending on the industry and the competition. I cannot promise a specific result or date. The 3-month start is foundational work on technology, structure and the main pages, and the outcome depends on how your website and your market react to it.' },
    { q: 'Are maps part of the package?', a: 'Yes. The start includes Google and Mapy.com profiles without a limit on their number, together with tracking of calls, routes and website clicks and with review management. The standalone Maps service is a separate, long-term option from four months, and it is priced separately.' },
    { q: 'How does the start differ from Full SEO for a year?', a: 'The 3-month start is an intensive first stage for 50,000 CZK in total (approx. €2,050). Full SEO runs for twelve months and costs from 15,000 CZK per month (approx. €610). The comparison table above shows duration, price, focus, maps and reports side by side, so you can choose the format that suits your site.' },
    { q: 'Do you guarantee first place on Google?', a: 'No. First place cannot be guaranteed honestly, because rankings depend on factors I do not control. What I offer is transparent work and measurable goals that we agree on in advance. I do not promise a position, traffic or a date.' },
  ],
  faqAll: 'All questions',

  consultTitle: 'Consultation first?',
  consultText: 'If you are not sure which format fits, a one-hour consultation or a consultation with an audit and a 12-month plan can come first. It is self-contained, with no obligation to continue.',
  consultLink: 'SEO consulting in Prague',

  formTitle: 'Send an enquiry',
  otherTitle: 'Other services',
  more: 'More',
  audit: CONSULTING_EN.audit,
  geoLine: { link: 'GEO/AEO', after: ' is included in every service.' },
};
