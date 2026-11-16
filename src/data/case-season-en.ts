// English content of /en/case-studies/seo-in-low-season/ (Part 2 of the translation-agency case, brief of 16.11.2026): a mirror of the Czech page (case-season-cs.ts), same structure and figures.
// The client (name, domain) appears nowhere. One result formula (SEASON_FORMULA_EN), repeated word for word. Form enquiries only (e-mail separate, calls / messengers not measured), relative data from a low base,
// no absolute numbers. Search Console periods: March–June 2026 vs November 2025–February 2026 (filled in by the author).
import { SEASON_FORMULA_EN } from './case-summary';
import { CASE_SEASON_PUBLISHED } from './case-season-ru';

export { CASE_SEASON_PUBLISHED };

const nb = (s: string) => s.replace(/ %/g, ' %');

const raw = {
  lang: 'en' as const,
  label: 'Case study · Translation agency · Part 2',
  h1: 'SEO in the low season for a translation agency: enquiries from the website grew 24×',
  authorLabel: 'Author',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Updated',
  project: 'Project: translation agency, March – August 2026 · ',
  partLabel: 'Part 2',
  answer: 'Over the summer of 2026 (June–August), form enquiries on a translation agency’s website grew 24× compared with the spring (March–May), even though interest in a broad query in Google Trends was falling in those months. This is growth from a low base; I do not publish absolute numbers.',
  formula: SEASON_FORMULA_EN,
  cards: [
    { value: '×24', label: 'enquiries from the website' },
    { value: '+357 %', label: 'clicks' },
    { value: '+398 %', label: 'impressions' },
  ],
  cardsNote: 'Clicks and impressions: Search Console, March–June 2026 compared with November 2025–February 2026.',
  dataNote: 'I do not publish the client’s name or absolute numbers, just as I would protect your data. I count form enquiries; e-mail is measured separately and calls and messengers are not measured, so the real growth is higher. Growth is counted from a low base.',
  part1Link: 'This is Part 2. Part 1: the first 4 months of work',
  heroCta: 'Get a free audit',

  diagTitle: 'Why did organic traffic not turn into enquiries?',
  diagAnswer: 'When I took over the project in mid-March, the website had four holes in the funnel: no entry for those who search for an answer to a life situation, an unclear commercial intent of the service pages, no local coverage and weak trust signals. Each hole lost a different type of client.',
  diagText: 'First I found out how the business makes money, who the real customer is and what stops organic visitors from becoming enquiries. I dealt with keywords only after that.',
  holes: [
    { name: 'No top of the funnel.', text: 'Neither a blog nor an FAQ: someone who does not yet know they need exactly this service and is looking for an answer to a life situation had nowhere to land.' },
    { name: 'Unclear intent of the service pages.', text: 'Nothing said that these were commercial pages, not information. Traffic came, but it did not convert.' },
    { name: 'No geographic coverage.', text: 'Part of the demand is local (you need a translator or notary in your own city) and it went to competitors with a visible presence in the city.' },
    { name: 'Weak trust signals.', text: 'The website had little confirmation of expertise and reputation, which affects the conversion of commercial pages.' },
  ],
  diagConclusion: 'Each hole was not a technical error but a specific place where money was being lost.',

  techTitle: 'What did I do in the technical layer?',
  techAnswer: 'Before the content, I sped up loading and introduced a complete layer of structured data. Without it, neither the content nor the commercial pages would be read by search engines and AI as structured and trustworthy answers.',
  techListLead: 'Markup introduced:',
  techList: ['FAQPage', 'Article/BlogPosting', 'LocalBusiness/Organization', 'Service', 'BreadcrumbList', 'Person + Quote for expert quotations'],

  servTitle: 'How did I rebuild the service pages for commercial intent?',
  servAnswer: 'I rewrote the key pages so that it is clear at first glance that this is a commercial offer, not an article. The pages about prices and about certified translations brought more than half of the summer enquiries.',

  blogTitle: 'Why a blog and an FAQ as the top of the funnel?',
  blogAnswer: 'I launched a blog for informational queries around the agency’s main topics: it catches future clients before they realise they need a specific service and leads them to the right service page. I added an FAQ to every key page.',
  blogText: { before: 'The FAQ serves users and the citability for AI (Google AI Overview and similar): it widens the top of the funnel. In more detail: ', link: 'SEO and GEO/AEO', after: '.' },

  geoTitle: 'What did the local city pages bring?',
  geoAnswer: 'Instead of one general “translations in Czechia” page, I made separate pages by city. They bring enquiries, not just positions: the page for Brno is among the 3 main sources of enquiries on the website.',
  geoList: [
    'Brno: top 3 source of enquiries on the whole website and visibility in Google AI Overview for its topic.',
    'Pardubice: top 2 positions for the main commercial queries.',
    'A page with several cities (Prague/Brno/Pardubice): top 5 source of enquiries.',
  ],

  resTitle: 'What were the results over the summer?',
  resAnswer: 'Form enquiries grew 24× (+2,300 %) in June–August compared with March–May 2026. Traffic followed the enquiries: clicks +357 %, impressions +398 % in Search Console.',
  resTable: {
    head: ['Indicator', 'Period', 'Change'],
    rows: [
      ['Form enquiries', 'March–May → June–August 2026', '×24 (+2,300 %)'],
      ['Clicks (Search Console)', 'November 2025–February 2026 → March–June 2026', '+357 %'],
      ['Impressions (Search Console)', 'same', '+398 %'],
    ],
  },
  resSource: 'Source: Search Console, GA4.',
  sourcesTitle: 'Where did the enquiries come from?',
  sources: [
    '“Price list of translations” (cs + en + uk): about 35 % of the summer enquiries.',
    '“Certified and official translations” (all languages): about 24 %.',
    'Together about 60 %.',
    'Inside the “price list”: the Czech version and English + Ukrainian together share the enquiries roughly 55/45, so the localised versions convert almost as well as the original.',
    'The remaining about 40 % is spread across 10+ pages: the funnel does not depend on a single entry.',
  ],
  dynamics: 'Dynamics: according to GA4, traffic held at the same level in April and May, while the technical and structural work was under way, and from June it grew several times over. The growth in traffic and enquiries began at the same point, roughly 2–3 months after the work started.',
  limits: 'Limits: form enquiries are counted. The real growth is higher (e-mail, calls, messengers). Growth from a low base.',

  trendsTitle: 'Was it the season? What Google Trends showed',
  trendsAnswer: 'No. Over two years, Google Trends shows for the broad query “překlad dokumentů” (“document translation”) a sharp peak of interest every April and a drop to almost zero from May to August. Enquiries nevertheless started to grow from June, when interest in this query was already falling.',
  trendsText: 'To avoid attributing the growth to the season without checking, I went through two years of Google Trends data. The agency’s main queries (certified translations, city variants) are too small on Google Trends, so I measured seasonality on a broad query. Conclusion: the growth in enquiries did not coincide with the general wave of interest in the broad query. This is a conclusion from one query, not from the whole market.',

  lessonTitle: 'Six practical conclusions',
  lesson: [
    { title: 'Diagnosis before changes.', text: 'First you need to understand the business model and the real obstacles, and only then look for keywords.' },
    { title: 'Technical layer first.', text: 'Structured data and the health of the website must come before the content, otherwise search engines and AI do not trust it.' },
    { title: 'Commercial pages must look commercial.', text: 'An unclear intent kills conversion even with healthy traffic.' },
    { title: 'A blog and an FAQ are the top of the funnel, not a separate content marketing.', text: 'They exist to feed the pages that convert.' },
    { title: 'Local pages by city, not one general page.', text: 'Geographic coverage pays off in enquiries, not just in positions.' },
    { title: 'Before you credit growth to yourself, check the macro trend.', text: 'Growth while interest in a broad query is falling is more convincing than growth on its own.' },
  ],
  lessonClosing: 'It is not a seasonal swing or a lucky page but a funnel where every layer (technical foundation, clear commercial intent, top-of-funnel content, trust, local coverage) worked towards one goal: enquiries, not positions or traffic for their own sake. This is my conclusion from one project.',

  faqTitle: 'Frequently asked questions about the case study',
  faq: [
    { q: 'Is growth in SEO possible outside the season?', a: 'In this project, form enquiries grew 24× (spring → summer 2026) from a low base, while interest in a broad query in Google Trends was falling in those months.' },
    { q: 'How can you tell that growth is real and not seasonal?', a: 'Compare your data with Google Trends over several years for your main broad query and see whether the moment of growth coincided with the peak of interest. Also check whether the growth started 2–3 months after the work began.' },
    { q: 'What do local city pages bring?', a: 'They answer local demand where a specialist nearby is needed. In this project, the page for Brno got among the 3 main sources of enquiries on the website and the page with several cities among the 5 main ones.' },
  ],

  relatedTitle: 'Related services',
  related: ['start', 'fullSeo', 'maps', 'consulting'] as const,
  more: 'More',
  ctaTitle: 'Want the same funnel for your website?',
  ctaText: 'A free audit will show the technical errors of your website.',
  ctaAudit: 'Get a free audit',
  ctaContact: 'Write to me',
  part1Back: 'Part 1: the first 4 months of work',
  nextCases: [
    { key: 'caseTypo' as const, text: 'Neighbouring case study: SEO for a print shop' },
    { key: 'caseEdu' as const, text: 'Neighbouring case study: SEO for a new education platform' },
    { key: 'caseHalf' as const, text: 'Follow-up case study: half a year of work on the same website' },
  ],

  series: { id: 'https://seo-eranosian.com/en/case-studies/#seo-case-series', name: 'SEO case study of a translation agency' },
  schema: {
    about: ['SEO in the low season', 'SEO for a translation agency', 'how to get enquiries through SEO', 'local SEO for branches', 'checking seasonality with Google Trends'],
  },
};

const walk = <T,>(v: T): T =>
  (typeof v === 'string' ? nb(v) : Array.isArray(v) ? v.map(walk) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)])) : v) as T;
export const CASE_SEASON_EN = walk(raw);
