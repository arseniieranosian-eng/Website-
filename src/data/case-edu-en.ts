// English content of /en/case-studies/seo-education-platform/ (brief of 16.11.2026): a mirror of the Czech page (case-edu-cs.ts). The client (name, domain) appears nowhere.
// The author took part together with a colleague, so "we" is allowed in THIS case only (the rest of the site stays in the first person singular). The ONLY figure: +55 % organic traffic,
// March → September 2025 (7 months), relative data from the low base of a new site. No absolute numbers, sign-ups, rankings, Instagram or community management anywhere.
import { CASE_EDU_PUBLISHED } from './case-edu-ru';
import { EDU_FORMULA_EN } from './case-summary';

export { CASE_EDU_PUBLISHED };

const nb = (s: string) => s.replace(/ %/g, ' %');

const raw = {
  lang: 'en' as const,
  label: 'Case study · Education platform',
  h1: 'SEO for a new education platform: +55 % organic traffic in 7 months',
  authorLabel: 'Author',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Updated',
  project: 'Project: education platform, March – September 2025',
  answer: 'Over 7 months (March → September 2025), the organic traffic of a new education platform grew by 55 %. This is relative growth from the low base of a new website; I do not publish absolute numbers.',
  cards: [
    { value: '+55 %', label: 'organic traffic' },
    { value: '7 months', label: 'duration' },
    { value: 'March → September 2025', label: 'period' },
  ],
  dataNote: 'I do not publish the client’s name. The data is relative: growth is counted from the low base of a new website. I worked on the project together with a colleague. Source: the website’s analytics data (Google Search Console or the site’s measurement tool).',
  heroCta: 'Get a free audit',

  startTitle: 'What was the starting point?',
  startAnswer: 'The platform, which connects students with universities, was a new website without history or accumulated authority in search. Competing with established websites for the most searched queries was unrealistic from such a start.',
  startImage: { src: '/images/pripadove-studie/vzdelavaci-platforma-vyhledavani-univerzit.webp', width: 1672, height: 941, alt: 'Laptop showing a university search on an education platform' },
  startText: 'A new website has no data about which pages work, so it was important to first choose the queries where we could break into the results at all.',

  lowTitle: 'Why did we choose low-volume queries at the start?',
  lowAnswer: 'A new website has no authority, so it usually does not appear for the most searched queries. Low-volume queries are more specific and less competitive, which is why I started the project with them and then expanded it.',
  lowText: 'Together with a colleague, we did not try to fight for the most popular phrasings. We looked for queries where a new platform can realistically break into the results. This bet at the start determined which pages and blog sections we designed next.',

  doTitle: 'What did we do?',
  doAnswer: 'Together with a colleague, we researched keywords for the pages of the website and designed the structure of the pages and the blog. Keyword research came before the design: the structure was built around the queries we found.',
  doList: [
    'keyword research for the pages of the website with an emphasis on low-volume queries;',
    'design of the structure of the website’s pages;',
    'design of the blog pages.',
  ],

  resultsTitle: 'What were the results after 7 months?',
  resultsAnswer: 'Organic traffic grew by 55 % in 7 months (March → September 2025). The data is relative: growth is counted from the low base of a new website.',
  resultsTable: {
    head: ['Indicator', 'Period', 'Change'],
    rows: [['Organic traffic', 'March → September 2025 (7 months)', '+55 %']],
  },
  resultsSource: 'Source: the website’s analytics data (Google Search Console or the site’s measurement tool), March and September 2025.',
  resultsLimits: 'I do not publish absolute values. Sign-ups, enquiries and positions for individual queries are not part of this case study. Growth from a low base cannot be compared directly with the growth of websites that have a history.',

  lessonTitle: 'What can be learned from the case?',
  lesson: [
    { title: 'A new website starts with the queries where it has a chance.', text: 'Without authority, it is more sensible to take specific low-volume queries than to compete for the most popular ones.' },
    { title: 'Keywords come before structure.', text: 'Pages and the blog are designed around the queries found, not the other way round.' },
    { title: 'Read growth from a low base honestly.', text: 'A percentage without a base and a period proves nothing, so I always state the period and stress that the data is relative.' },
  ],

  faqTitle: 'Frequently asked questions about the case study',
  faq: [
    { q: 'How do you promote a new website without authority?', a: 'Start with keyword research and choose low-volume queries where a new website can realistically appear. Design the pages and the blog around them. The result depends on the industry and the competition.' },
    { q: 'Why start with low-volume queries?', a: 'A new website has no authority, so it usually does not appear for the most searched queries. Low-volume queries are less competitive, which is why I started with them.' },
    { q: 'How soon do the first SEO results come?', a: 'In this project, growth of 55 % was measured over 7 months (March → September 2025).' },
  ],

  relatedTitle: 'Related services',
  related: ['start', 'fullSeo', 'consulting'] as const,
  more: 'More',
  ctaTitle: 'Launching a new website and not sure where to start?',
  ctaText: 'A free audit will show the technical errors of your website.',
  ctaAudit: 'Get a free audit',
  ctaContact: 'Write to me',
  nextCases: [
    { key: 'caseTypo' as const, text: 'Neighbouring case study: SEO for a print shop' },
    { key: 'caseKb' as const, text: 'Neighbouring case study: SEO for a translation agency' },
  ],

  schema: {
    about: ['SEO for an education platform', 'promoting a new website', 'low-volume queries', 'keyword research'],
    formula: EDU_FORMULA_EN,
  },
};

const walk = <T,>(v: T): T =>
  (typeof v === 'string' ? nb(v) : Array.isArray(v) ? v.map(walk) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)])) : v) as T;
export const CASE_EDU_EN = walk(raw);
