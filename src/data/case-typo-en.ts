// English content of /en/case-studies/seo-print-shop/ (brief of 16.11.2026): a mirror of the Czech page (case-typo-cs.ts): same structure, same figures
// (1,200 → 10,500 visits a month, +775 % = 8.75×, July 2024 → July 2025), same single source. The client (name, domain) appears nowhere. NOT used: +777 %, YoY, leads, calls, revenue.
// English number format: comma as the thousands separator, point as the decimal mark, non-breaking space before %.
import { CASE_TYPO_PUBLISHED } from './case-typo-ru';
import { TYPO_FORMULA_EN } from './case-summary';

export { CASE_TYPO_PUBLISHED };

const nb = (s: string) => s.replace(/ %/g, ' %');

const raw = {
  lang: 'en' as const,
  label: 'Case study · Print shop',
  h1: 'SEO for a print shop: organic traffic grew 8.75× in 12 months',
  authorLabel: 'Author',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Updated',
  project: 'Project: print shop, January 2024 – July 2025',
  answer: 'Over 12 months (July 2024 → July 2025), organic traffic to a print shop website grew from 1,200 to 10,500 visits a month, up 775 % (8.75×). I first removed the technical obstacles, then built a query architecture around commercial intent and launched 20+ landing pages.',
  cards: [
    { value: '1,200 → 10,500', label: 'visits per month' },
    { value: '+775 %', label: 'traffic growth' },
    { value: '8.75×', label: 'times more' },
    { value: '12 months', label: 'July 2024 → July 2025' },
  ],
  dataNote: 'I do not publish the client’s name. The numbers are real; source: the website’s analytics data (Google Search Console or the site’s measurement tool). The project ran on a Russian-language website for the Russian-speaking market.',
  heroCta: 'Get a free audit',

  startTitle: 'What was the starting point of the website?',
  startAnswer: 'In January 2024 the print shop’s website had no systematic keyword architecture, and the key pages had a broken heading hierarchy and broken links.',
  problems: [
    'broken heading hierarchy (jumping from H1 to H3) on key pages;',
    'broken links;',
    'no systematic keyword architecture.',
  ],
  startText: 'The website worked, but Google understood its structure poorly, and the pages were not tied to the queries people use when they order print.',

  techTitle: 'What did I do in the first 30 days?',
  techAnswer: 'I ran a technical crawl of the website together with Google Search Console data, fixed the broken links and restored the heading hierarchy. While a website is technically unreadable for Google, any content works worse.',
  techSteps: [
    'technical crawl of the website + Google Search Console;',
    'fixing broken links;',
    'restoring the heading hierarchy (H1 → H2 → H3 without gaps) on key pages.',
  ],

  keysTitle: 'How did I build a keyword architecture around commercial intent?',
  keysAnswer: 'I did not collect a list of high-volume words but a query map along the sales funnel: which pages sell, which warm the visitor up and which answer objections. Every query got its own page and its own job.',
  keysTable: {
    head: ['Page type', 'Job'],
    rows: [
      ['Sales', 'lead to an order'],
      ['Warm-up', 'compare options, explain'],
      ['Answering objections', 'price, deadlines, files'],
    ],
  },

  landingTitle: 'Why 20+ landing pages and how are they built?',
  landingAnswer: 'I launched more than 20 SEO landing pages on WordPress. Each targets one commercial query with high search volume and is built for an order, not for reading like a blog article.',
  landingDiff: [
    'Landing page = one query, one solution, a path to the order.',
    'Article = an informational question, an answer, a link onward.',
  ],

  monitorTitle: 'How did I watch for traffic drops?',
  monitorAnswer: 'Every week I checked the data in Ahrefs and Google Search Console and ran a technical crawl, so I caught any drop within 7 days, not after a quarter.',
  monitor: [
    'positions and visibility;',
    'indexing errors;',
    'new technical errors;',
    'pages that lost queries.',
  ],

  resultsTitle: 'What were the results after 12 months?',
  resultsAnswer: 'Organic traffic grew from 1,200 to 10,500 visits a month, up 775 %, which is 8.75× (July 2024 → July 2025).',
  resultsTable: {
    head: ['Indicator', 'July 2024', 'July 2025', 'Change'],
    rows: [['Organic visits per month', '1,200', '10,500', '+775 % (8.75×)']],
  },
  resultsSource: 'Source: the website’s analytics data (Google Search Console or the site’s measurement tool), July 2024 and July 2025.',
  resultsNote: 'I compare the same months of two years, so seasonality does not distort the result.',
  resultsLimits: 'I measured the project by organic traffic. Enquiries, calls and revenue are not part of this case study.',

  lessonTitle: 'In what order should SEO be done?',
  lessonAnswer: 'SEO sets the order of priorities, not the amount of work. First remove what stops Google from understanding the website, then build the architecture around the business, and only then scale the content.',
  lesson: [
    { title: 'Technical foundation first.', text: 'Broken links and a broken heading hierarchy stop Google from reading the website, and the content above them works worse.' },
    { title: 'Then the architecture around the business.', text: 'A query map along the funnel shows which page sells and which one warms up.' },
    { title: 'And only then the scale.', text: '20+ landing pages brought growth because each one already had its role.' },
  ],
  lessonClose: 'If you reverse the order, you get a lot of content on a bad foundation.',

  marketTitle: 'Can this be repeated in Czechia?',
  marketAnswer: 'The order of priorities (technique → architecture → content) does not depend on the market, but the industry and the competition in Czechia will be different, so a result cannot be guaranteed. The project ran on a Russian-language website for the Russian-speaking market.',
  marketText: 'What can be carried over is the process: first the technical foundation, then the query map along the funnel and only after that the landing pages. Specific numbers and demand do not carry over; they depend on the industry, the competition and the state of the website.',

  faqTitle: 'Frequently asked questions about the case study',
  faq: [
    { q: 'How long does organic traffic growth take?', a: 'In this project, the comparison July 2024 → July 2025 showed growth from 1,200 to 10,500 visits a month.' },
    { q: 'Why landing pages instead of blog articles?', a: 'A landing page targets one commercial query and leads to an order, while an article answers an informational question. In this project, 20+ landing pages were the basis of the growth.' },
    { q: 'In what order should SEO be done?', a: 'First remove the technical obstacles: broken links and a broken heading hierarchy. Then build a query map along the funnel and only then scale the content.' },
    { q: 'Does this approach also work on the Czech market?', a: 'The order of priorities does not depend on the market, but the industry and the competition in Czechia will be different, so a result cannot be guaranteed. The project ran on the Russian-speaking market.' },
  ],

  relatedTitle: 'Related services',
  related: ['start', 'fullSeo', 'consulting', 'maps'] as const,
  more: 'More',
  ctaTitle: 'Want the same approach for your website?',
  ctaText: 'A free audit will show the technical errors of your website.',
  ctaAudit: 'Get a free audit',
  ctaContact: 'Write to me',
  nextCase: 'Neighbouring case study: SEO for a translation agency',

  schema: {
    about: ['SEO case study', 'SEO for a print shop', 'organic traffic growth', 'keyword architecture', 'technical SEO audit'],
    formula: TYPO_FORMULA_EN,
  },
};

const walk = <T,>(v: T): T =>
  (typeof v === 'string' ? nb(v) : Array.isArray(v) ? v.map(walk) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)])) : v) as T;
export const CASE_TYPO_EN = walk(raw);
