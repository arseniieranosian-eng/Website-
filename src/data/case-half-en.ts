// English content of /en/case-studies/seo-translation-agency-half-year/ (brief of 16.11.2026): a mirror of the Czech page (case-half-cs.ts), same structure, figures and periods. The client is anonymous ("a translation agency");
// no domain, no absolute numbers (the language table is published as percentages only; the screenshot of it has the site name, the counts and the footnote numbers covered).
// The quote is by Yelyzaveta Butyrina, owner of Make Up Digital Agency (the partner digital agency through which the author worked with the translation agency), NOT of the translation agency; the English wording
// translates the Czech one. The niche pages for translation agencies exist in Czech and Russian only, so the English page does not link to them.
import { SEASON_FORMULA_EN } from './case-summary';
import { CASE_SEASON_EN } from './case-season-en';
import { CASE_HALF_PUBLISHED } from './case-half-cs';

export { CASE_HALF_PUBLISHED };

const nb = (s: string) => s.replace(/ %/g, ' %');

const raw = {
  lang: 'en' as const,
  label: 'Case study · Translation agency',
  h1: 'SEO case study for a translation agency: half a year from zero to growing enquiries',
  authorLabel: 'Author',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Updated',
  project: 'Project: translation agency, March – September 2026',
  answer: 'Over half a year (March–September 2026), I turned a translation agency’s website with not a single enquiry into a system of three kinds of pages. Enquiries rose 65–70 % a month for three months in a row, B2B enquiries tripled and the website appeared in Google AI Overview.',
  cards: [
    { value: '+65–70 %', label: 'enquiries a month (3 months in a row)' },
    { value: '×3 (+200 %)', label: 'B2B enquiries' },
    { value: '6 months', label: 'of work' },
  ],
  dataNote: 'I do not publish the client’s name or absolute numbers, just as I would protect your data. All results are as of the end of my work (September 2026). The numbers and the development of the website were confirmed by the client. I count enquiries from the form and by e-mail; calls and messengers are not measured, so the real growth is higher.',
  seasonLink: 'How the project behaved in the summer season: SEO in the low season',
  heroCta: 'Get a free audit',

  goalsTitle: 'What were the goals of the engagement?',
  goalsAnswer: 'The engagement had two goals: to raise awareness of the company and to support sales. Each result below belongs to one of them, and for each I state the metric, the period and the source.',
  goals: [
    'Awareness of the company: impressions and clicks in Google, positions in local search, appearance in Google AI Overview, new landing pages.',
    'Sales support: enquiries from the form and by e-mail, B2B enquiries, new sections that bring enquiries on their own.',
  ],

  startTitle: 'What did the website look like at the start?',
  startAnswer: 'A translation agency with branches in Prague, Brno and Pardubice had a website in four languages that brought no enquiries: not a single submitted form.',
  startList: [
    'not a single submitted form from the website;',
    'roughly half of the sections such a website needs did not exist: there was no page for companies, no language pairs, FAQ, references, blog or city pages;',
    'the website hardly ranked anywhere in search;',
    'no SEO work had ever been done on it, neither technical nor content.',
  ],
  startText: 'The agency got clients outside the website: mainly through referrals from acquaintances and, to a lesser extent, from social networks. This is not a story about optimisation but about building. You cannot tune something that does not exist.',

  builtTitle: 'What did I build?',
  builtAnswer: 'I stopped treating pages as separate items and built the website as a system with three kinds of pages: pages that lead to an enquiry, pages that support the decision and pages that build trust.',
  builtTypes: [
    'Lead to an enquiry: home page, services, language pairs, city pages.',
    'Support the decision: price list, blog.',
    'Build trust: about, references, FAQ.',
  ],
  builtSections: [
    'Home page: reworked, with trust elements, a block of language pairs, services and calls to action.',
    'Service pages: all rebuilt to one pattern (price and deadline on top, several entries to the form, an FAQ on every page).',
    'Language pairs: created from scratch for searches of specific language combinations.',
    'Price list: updated regularly, works as a traffic hub for other pages.',
    'For companies (B2B): from scratch, a single goal: growth of corporate clients.',
    'About: reworked, with the team, the process and facts about the company.',
    'References: from scratch, sorted by service.',
    'FAQ: a separate page of questions for the whole website.',
    'Contacts: a dedicated e-mail for the website and contact channels for each branch.',
    'Blog: several dozen articles from scratch.',
    'City pages: separate pages for Prague, Brno and Pardubice, built for local queries.',
  ],
  builtText: 'Unique meta tags and structured data (schema markup) on every page, the same work with the same intensity on the Russian, Ukrainian and English versions. Every week I sent a report with verifiable numbers and the source of each enquiry.',

  resTitle: 'What were the results after half a year?',
  resAnswer: 'Enquiries went up 65–70 % a month for three months in a row, B2B enquiries tripled and the website appeared in Google AI Overview. All of it in the summer, when demand in the industry is weakest (confirmed by Google Trends).',
  ownerQuote: {
    text: 'The biggest surprise was that the client’s enquiries kept growing even in the summer, when things are quietest in the translation industry.',
    name: 'Yelyzaveta Butyrina',
    role: 'owner of Make Up Digital Agency',
    worksFor: 'Make Up Digital Agency',
    instagram: 'https://www.instagram.com/elzabutirina/',
    photo: { src: '/images/pripadove-studie/majitelka.jpg', width: 150, height: 150, alt: 'Yelyzaveta Butyrina, owner of Make Up Digital Agency' },
  },
  resTable: {
    head: ['Goal', 'Metric', 'Result', 'Period', 'Source'],
    rows: [
      ['Sales support', 'Enquiries (form + e-mail)', 'three months in a row +65–70 % month over month', '15 Jun–15 Jul, 15 Jul–15 Aug and 15 Aug–15 Sep 2026', 'GA4, weekly reports'],
      ['Sales support', 'B2B enquiries', '+200 % (×3) in a month, held for the rest of the summer', '15 Jun–15 Jul, 15 Jul–15 Aug and 15 Aug–15 Sep 2026', 'GA4, weekly reports'],
      ['Sales support', 'Best week of the summer', 'more than 30 % above the previous record', 'summer 2026', 'GA4'],
      ['Sales support', 'New sections (language pairs, blog, city pages)', 'bring enquiries on their own', 'state at the end of the project', 'GA4'],
      ['Sales support', 'Russian version', 'first conversion at the end of July', 'July 2026', 'GA4'],
      ['Awareness of the company', 'Impressions and clicks in Google', 'growth from June, peaks in August and September', 'March–September 2026', 'Google Search Console (relative data)'],
      ['Awareness of the company', 'Pardubice', 'leading positions in local results for key queries', 'end of the project', 'Google'],
      ['Awareness of the company', 'Brno', 'top 5 or higher for key queries; Google AI Overview', 'end of the project', 'Google'],
    ],
  },
  awareShot: { src: '/images/pripadove-studie/povedomi-gsc.webp', width: 968, height: 370, alt: 'Chart from Google Search Console by day from 12 March to September 2026: impressions and clicks of the translation agency’s website grow from June, values on the axes are hidden', caption: 'Awareness of the company: impressions (purple line) and clicks (blue line) in Google Search Console by day, March–September 2026. Values on the axes are hidden, the data is relative.' },
  resCaption: 'The numbers and the development of the website were confirmed by the client. The data is relative; I do not publish absolute numbers.',
  seasonFormula: SEASON_FORMULA_EN,
  seasonFormulaLink: 'SEO in the low season',

  langTitle: 'What clients started to come to the website?',
  langAnswer: 'From 24 May to 20 September 2026, three quarters of the form enquiries (78 %) came through the Czech and English versions of the website. The Ukrainian version brought 18 % and the Russian 4 %. So the website serves a wider circle of clients than at the start.',
  langChartTitle: 'Share of enquiries by language version of the website',
  langRows: [
    { rank: '1', name: 'Czech', pct: 52 },
    { rank: '2', name: 'English', pct: 26 },
    { rank: '3', name: 'Ukrainian', pct: 18 },
    { rank: '4', name: 'Russian', pct: 4 },
  ],
  langTableHead: ['Rank', 'Language version', 'Share of enquiries'],
  langAria: 'Bar chart: Czech version 52 %, English 26 %, Ukrainian 18 %, Russian 4 % of form enquiries.',
  langCaption: 'Share of form enquiries with a known language version, 24 May – 20 September 2026. Source: GA4, form. Direct e-mails are not counted and enquiries without a known language version are not included in the share. I do not state absolute counts.',
  langText: 'Before I came, the website brought no enquiries. The agency got clients mainly through referrals from acquaintances and, to a lesser extent, from social networks. Today enquiries also come directly from the website, and the Czech and English versions are in the first two places. A language version does not say where the client is from but in which language they use the website. That is why I built each of the four versions as a separate piece of work, not as a translation (see conclusion no. 4).',
  langImage: { src: '/images/pripadove-studie/poptavky-jazykove-verze.webp', width: 1000, height: 743, alt: 'Ranking of language versions of the website by number of enquiries (screenshot in Czech): Czech 52 %, English 26 %, Ukrainian 18 %, Russian 4 %', caption: 'Excerpt from the report on enquiries by language version (in Czech; the website name and absolute counts are covered).' },

  citiesTitle: 'How did the individual cities behave?',
  citiesAnswer: 'Local promotion ran separately for each of the three branches, and each city had its own course.',
  cities: [
    'Pardubice: the steadiest picture; calls and website visits grew almost without a break from April to September.',
    'Brno: strong summer growth with several peaks; in the autumn activity eased slightly but stayed well above the April start; top 5 or higher for key queries; appears in Google AI Overview.',
    'Prague: active growth in spring and early summer with a peak in June, then gradually declined towards autumn but did not return to the starting level.',
  ],
  citiesText: 'Reviews are separate, ongoing work. A review cannot be deleted or edited, but the reply to it shapes how new clients see the agency. The agency answers each one quickly and to the point, as a routine.',

  aiTitle: 'Did the website appear in AI search?',
  aiAnswer: 'Yes, the website appeared in Google AI Overview for queries about translation agencies in Brno. For ChatGPT and other AI tools I state only what I can document.',
  aiText: 'An “AI Assistant” channel also appeared for the website in GA4.',
  aiLink: 'How SEO and GEO/AEO works',

  lessonTitle: 'What would I repeat on any similar project?',
  lesson: [
    { title: 'First map what is missing, and only then touch what exists.', text: 'When half of the website does not exist, tuning the other half is a bad first step.' },
    { title: 'Build more entry points.', text: 'Growth from many pages survives a bad season. Growth from one page does not.' },
    { title: 'Give every page one job.', text: 'Convert, support the decision or build trust. Pages that try to do everything usually manage nothing.' },
    { title: 'Treat localisation as separate work.', text: 'Each language version has its own content logic, not a translated copy.' },
    { title: 'Report every week with verifiable sources.', text: 'It slows nobody down and it is the reason the client trusts the numbers.' },
    { title: 'Measure enquiries, not positions.', text: 'Positions and AI citations are signals. The result is an enquiry.' },
  ],
  authorQuote: 'SEO is not magic. It is a system, and a system built properly works outside the season, in small towns and even when you start from zero.',

  faqTitle: 'Frequently asked questions about the case study',
  faq: [
    { q: 'What does half a year of SEO for a company with several branches involve?', a: 'In this project it meant building the website as a system: pages that lead to an enquiry, support the decision and build trust, separate pages for each city, localisation of each language version and weekly reports with verifiable sources. The result depends on the industry and the competition.' },
    { q: 'Why a blog and an FAQ even before the first enquiries?', a: 'A blog and an FAQ catch people who do not yet know they need exactly this service and lead them to the pages that convert. In this project the website had neither at the start.' },
    { q: 'How can you tell that SEO brought the enquiries and not the season?', a: 'Compare your data with Google Trends for your main broad query and see whether growth started even in a weak period. The detailed procedure is in the case study about the low season.', link: 'caseSeason' as const, linkText: 'SEO in the low season' },
    { q: 'Does this work for a website that is only half built?', a: 'Exactly such a website is a good candidate: first you need to map what is missing, and only then tune what exists. The result depends on the industry and the state of the website.' },
    { q: 'Does multilingual SEO help reach new groups of clients?', a: 'In this project, most form enquiries came through the Czech and English versions, and I built each of the four versions separately, not as a translation. The result, however, depends on the industry, the market and the starting state of the website. That is why on a specific website I always first find out where the enquiries come from and which versions bring them.' },
  ],

  relatedTitle: 'Related services',
  related: ['start', 'fullSeo', 'maps', 'consulting'] as const,
  more: 'More',
  ctaTitle: 'Do you have a website that “works” but does not bring clients?',
  ctaText: 'A free audit will show the technical errors of your website.',
  ctaAudit: 'Get a free audit',
  ctaContact: 'Write to me',
  nextCases: [
    { key: 'caseTypo' as const, text: 'Neighbouring case study: SEO for a print shop' },
    { key: 'caseEdu' as const, text: 'Neighbouring case study: SEO for a new education platform' },
    { key: 'caseSeason' as const, text: 'Follow-up case study: SEO in the low season' },
  ],

  schema: {
    about: ['SEO case study', 'SEO for a translation agency', 'local SEO for branches', 'multilingual SEO', 'how to get B2B enquiries through SEO'],
  },
};

const walk = <T,>(v: T): T =>
  (typeof v === 'string' ? nb(v) : Array.isArray(v) ? v.map(walk) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)])) : v) as T;
export const CASE_HALF_EN = walk(raw);
export const CASE_HALF_SERIES = CASE_SEASON_EN.series;
