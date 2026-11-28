// English content of /en/full-seo/ (brief of 28.11.2026, v2 final): structure and blocks follow /full-seo/ (data/fullseo-cs.ts); the texts that the brief gives are verbatim (lead, price answer and note, steps, first-results answer, the
// quote, the seven FAQ answers, the confirmed review), the other blocks are translated from the Czech page without new claims. The author's decisions of 28.11.2026: weekly reports everywhere (no "monthly"), prices in CZK and approximate EUR at the CNB
// rate of 27 November 2026 (24.435 CZK per EUR: 15,000 -> 610; 50,000 -> 2,050), no "4-8 weeks", no "months 3-6", no "biggest results over the long run", no niche prices, no "paid per result" for maps ([?]).
// No Offer / price markup in JSON-LD. No Czech articles or niches are linked.
import { CASE_LINE, TYPO_LINE_EN, SEASON_LINE_EN, HALF_LINE_EN } from './case-summary';
import { CONSULTING_EN } from './consulting-en';

export const FULLSEO_EN_UPDATED = '2026-11-03'; // the visible date is set by hand by the author (the previous value of the page is kept)

export const FULLSEO_EN = {
  lang: 'en' as const,
  h1: 'Full SEO for a year',
  label: 'Duration: 12 months',
  authorLabel: 'Author',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Updated',
  lead: 'Year-round SEO from A to Z: I work on your website and beyond it, including your maps profiles, with weekly reports.',
  badge: 'From 15,000 CZK (approx. €610) per month · 12 months · weekly reports',
  heroPrimary: 'I am interested',
  heroAudit: 'Free audit',

  priceTitle: 'How much does Full SEO for a year cost?',
  priceAnswer: 'Full SEO for a year starts at 15,000 CZK per month (approx. €610). The exact price depends on the scope and the industry.',
  priceNote: 'Prices are in Czech koruna (CZK). Approximate EUR amounts use the Czech National Bank rate of 27 November 2026 (24.435 CZK per EUR).',
  duration: 'Duration: 12 months.',

  forWhomTitle: 'Who is it for?',
  forWhom: [
    'Businesses whose website is the main source of leads',
    'Online stores and services in competitive niches',
    'Companies without an in-house SEO',
  ],

  includesTitle: 'What is included in the price?',
  groups: [
    { title: 'Work on the website', items: [
      { text: 'SEO audit of the website: speed, errors, indexing, structure, texts.' },
      { text: 'Keyword analysis in Ahrefs, SEMrush and Google Keyword Planner.' },
      { text: 'On-page SEO: H1 and H2 headings, meta descriptions, keywords, texts, image alt texts.' },
      { text: 'Content every month: articles, service pages, blog. I choose the scope individually according to the industry and the competition.' },
      { text: 'Ongoing technical supervision and monitoring.' },
      { text: 'Analytics in Google Analytics (GA4) and Google Search Console.' },
      { text: 'Annual strategy, quarterly priority plans and the results of the year.' },
    ] },
    { title: 'Work beyond the website', items: [
      { text: 'Link building: publications, catalogues, PR articles, links from other websites.' },
      { text: 'Management of the profiles on Google, Mapy.com and Firmy.cz (Seznam) without a limit on their number: calls, routes, website clicks and reviews.' },
    ] },
    { title: 'GEO/AEO and reporting', items: [
      { text: 'Optimisation for search engines and for AI (GEO/AEO).', link: { text: 'What that means', page: 'geo' as const } },
      { text: 'Weekly report: what is done, why and what the results are. A call if you want one.' },
    ] },
  ],

  mapsTitle: 'Are Google, Mapy.com and Firmy.cz profiles part of the package?',
  maps: {
    first: 'Yes. I manage the profiles on Google, Mapy.com and Firmy.cz without a limit on their number for the whole cooperation, including calls, routes, website clicks and reviews. The same as in the 3-month start. If you only need maps, there is the standalone Maps service. ',
    link: 'The standalone Maps service',
    after: ' is long-term (from 4 months) and is priced separately.',
  },

  stagesTitle: 'How does Full SEO for a year work?',
  stages: [
    'Audit and strategy for the year.',
    'Quarterly priority plan.',
    'Ongoing work and weekly reports.',
    'Annual review and next-year plan.',
  ],

  resultsTitle: 'When will the first results come?',
  resultsAnswer: 'The time and the result cannot be guaranteed, because they depend on the state of your website, on the competition and on the scope of the changes. A year of SEO is not a sprint.',

  compareTitle: '3-month start, or Full SEO for a year?',
  table: {
    corner: 'Parameter',
    head: ['3-month start', 'Full SEO for a year'],
    rows: [
      ['Duration', '3 months', '12 months'],
      ['Price', '50,000 CZK (approx. €2,050)', 'from 15,000 CZK per month (approx. €610)'],
      ['Focus', 'Technical foundation, site structure, optimisation of the main pages, measurement', 'Annual strategy, content every month, link building, quarterly plans, results of the year'],
      ['Maps (Google, Mapy.com and Firmy.cz)', 'Yes, no limit on the number of profiles', 'Yes, no limit on the number of profiles'],
      ['Reports', 'Weekly, a call if you want one', 'Weekly, a call if you want one'],
    ],
  },
  startLink: '3-month start',
  consultingNote: { before: 'If you only need answers and a plan, I will not do the work for you, but I will advise: ', link: 'consultation', after: '.' },
  mapsNote: { before: 'If you only need maps: ', link: 'standalone Maps service', after: '.' },

  caseTitle: 'What has it brought clients?',
  cases: [
    { text: CASE_LINE.en.replace('(form and e-mail)', '(form and e-mail; the real number is higher)'), link: 'The full story', page: 'caseKb' as const },
    { text: TYPO_LINE_EN, link: 'Case study: SEO for a print shop', page: 'caseTypo' as const },
    { text: SEASON_LINE_EN, link: 'SEO in the low season (part 2)', page: 'caseSeason' as const },
    { text: HALF_LINE_EN, link: 'Half a year of work on a translation agency’s website', page: 'caseHalf' as const },
  ],

  reviewsTitle: 'What clients say',
  // The confirmed translation of the partner-agency review (author, 28.11.2026), used on this page only: the shared text of the other pages differs slightly (see the report).
  makeUpShort: 'At the start, the website practically did not rank and brought no enquiries. Arsenii built the structure of the site from scratch, carried out regular audits and sent detailed reports every week. […] Search impressions grew 6×, clicks more than 300×, and B2B enquiries tripled. We recommend him as a systematic, responsible and results-oriented SEO specialist.',

  quote: 'I do all services personally, Arsenii Eranosian, from the audit to the reports.',

  faqTitle: 'Questions about Full SEO for a year',
  faq: [
    { q: 'How much does Full SEO for a year cost?', a: 'Full SEO for a year starts at 15,000 CZK per month (approx. €610). The exact price depends on the scope of the work and on your industry. The programme runs for 12 months, and the price includes work on the website and beyond it, GEO/AEO, the maps profiles and weekly reports.' },
    { q: 'How soon will I see the results?', a: 'The time and the result cannot be guaranteed, because they depend on the state of your website, on the competition and on the scope of the changes. I cannot promise a date, so I do not state one. A year of SEO is not a sprint; we start with a free audit of technical errors.' },
    { q: 'Are maps part of the package?', a: 'Yes. The package includes profiles on Google, Mapy.com and Firmy.cz without a limit on their number, including tracking of calls, routes and website clicks and review management. If you need only maps, the standalone Maps service is a separate, long-term option from four months.' },
    { q: 'How often will I get a report?', a: 'Every week. You receive a weekly report that shows what is done, why it was done and what the results are. A call is held only if you want one. The weekly report is part of Full SEO for a year and is included in its price, so you do not pay for it separately.' },
    { q: 'How does Full SEO differ from the 3-month start?', a: 'The 3-month start is an intensive first stage for 50,000 CZK in total (approx. €2,050). Full SEO for a year is a 12-month programme that follows an annual strategy and costs from 15,000 CZK per month (approx. €610). The comparison table above shows duration, price, focus, maps and reports side by side.' },
    { q: 'What is the difference between SEO and GEO/AEO?', a: 'SEO improves how your pages rank in Google and Seznam results. GEO/AEO aims to make AI tools such as ChatGPT, Gemini or Google AI Overviews more likely to recommend and cite your business. I do both together because they reinforce each other. I cannot promise that any AI tool will mention you.' },
    { q: 'Do you work on Seznam too, or only on Google?', a: 'Both. The optimisation covers Google and Seznam, because both are used for searching in Czechia. Seznam also includes Mapy.com and Firmy.cz, which are part of the maps work in this package. The share of each search engine differs by business, so I do not give a general figure.' },
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
