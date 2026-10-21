// English content of the home page /en/ (brief of 21.10.2026): a separate adaptation for English-speaking entrepreneurs and expats in
// Czechia, not a translation of the cs / ru pages. No prices, no blog, no "agency" about myself ("I", never "we"), no guarantees, no
// "years in SEO", no average growth. Case formulas come from case-summary.ts, reviews from the shared source. Maps show no price or
// terms beyond "from 4 months". Czech-language copywriting is not promised. The brief's fifth trust tile (a review) is not used.
import { HALF_FORMULA_EN, TYPO_FORMULA_EN, EDU_FORMULA_EN } from './case-summary';

export const HOME_EN = {
  lang: 'en' as const,
  updatedLabel: 'Updated',
  heroName: 'Arsenii Eranosian',
  eyebrow: 'SEO specialist in Prague',
  lead: 'I am Arsenii Eranosian, an English-speaking SEO and GEO/AEO specialist in Prague. I help businesses in Czechia get found in Google, Seznam and AI answers, working in English, Czech or Russian. Start with a free technical audit: no call and no obligation.',
  heroAudit: 'Get my free audit',
  heroConsult: 'Book a consultation',
  formTitle: 'Free SEO audit',
  formNote: 'I check technical errors such as indexing and duplicate pages. You receive a short presentation within 24 hours, with no call and no obligation.',

  trustTitle: 'Results with a method and a source',

  hubTitle: 'Which service fits you?',
  hubAnswer: 'Start with a free technical audit if you want to know whether your site has technical errors. Choose consulting for answers and a plan, a 3-month start for a foundation, Full SEO for year-round growth, and Maps for local search.',
  hub: {
    head: ['Service', 'What it is', 'Best for', 'Time'],
    rows: [
      { page: 'audit' as const, label: 'Free audit', what: 'technical errors: indexing, duplicate pages, other technical problems', best: 'checking your site for technical errors', time: 'presentation within 24 hours' },
      { page: 'consulting' as const, label: 'Consulting', what: 'one hour, or an audit with a 12-month plan', best: 'answers and an action plan', time: 'one-off' },
      { page: 'start' as const, label: '3-month start', what: 'audit, fixes, key-page optimisation', best: 'building the foundation', time: '3 months' },
      { page: 'fullSeo' as const, label: 'Full SEO', what: 'strategy, quarterly priorities, new content each month', best: 'long-term growth', time: '12 months' },
      { page: 'maps' as const, label: 'Maps (Google + Mapy.com)', what: 'local SEO on Google Maps and Mapy.com', best: 'businesses that win customers locally', time: 'from 4 months' },
    ],
  },
  hubNote: 'GEO/AEO is included in every service. Results depend on niche, competition and the starting point and cannot be guaranteed.',

  czTitle: 'Why search in Czechia needs local knowledge',
  czAnswer: 'Czech customers search in Google, Seznam and Mapy.com, in Czech and often in English. I work in English and understand how each of these works, so you do not have to explain your business twice.',
  czText: 'A site for Czech customers and a site for English-speaking clients need different logic: the language, the search phrases and the places where people look. I help you set up the structure and search visibility for both, so each audience finds the right page.',

  geoTitle: 'How do SEO and GEO/AEO work together?',
  geoAnswer: 'SEO helps your pages rank in Google and Seznam. GEO/AEO helps AI tools understand and quote your content. I do both together, and I cannot promise citations.',
  geoPlatforms: ['Google', 'Seznam', 'ChatGPT', 'Gemini', 'Perplexity', 'AI Overviews'],
  geoLink: 'How SEO + GEO/AEO works',

  resultsTitle: 'Case studies',
  cases: [
    { label: 'Translation agency, six months', name: 'From zero enquiries to growth', formula: HALF_FORMULA_EN.replace(', March–September 2026', '') + ', AI Overview visibility', page: 'cases' as const },
    { label: 'Print shop', name: 'Organic traffic growth', formula: TYPO_FORMULA_EN, page: 'cases' as const },
    { label: 'Educational platform', name: 'A new site from a low base', formula: EDU_FORMULA_EN, page: 'cases' as const },
  ],
  resultsMore: 'All case studies',
  caseMore: 'Case studies',
  resultsNote: 'Client names and absolute numbers are not published. Counts and percentages are relative data.',

  quote: 'SEO is not about activity, it is about priorities. First remove what stops Google understanding the site, then build the architecture around the business, then scale content.',

  reviewsTitle: 'What clients say',
  reviewsMore: 'All reviews',

  faqTitle: 'Frequently asked questions',
  faq: [
    { q: 'What does the free audit cover?', a: 'A check of technical errors: indexing, duplicate pages and other technical problems. You receive a short presentation within 24 hours, with no call and no obligation. It does not cover keywords, competitors, maps, AI visibility, speed or mobile.' },
    { q: 'How soon will I see results?', a: 'Technical fixes can show an effect within weeks, and the first results of ongoing work usually appear in 2–3 months. Timing depends on your niche, competition and starting point, and results cannot be guaranteed.' },
    { q: 'What is the difference between SEO and GEO/AEO?', a: 'SEO helps pages rank in Google and Seznam. GEO/AEO helps AI tools understand and quote your content. I do both together, and I cannot promise citations.', link: 'geo' as const, linkText: 'How SEO + GEO/AEO works' },
    { q: 'How does working together look?', a: 'It starts with a free audit, then we choose a format (consulting, a 3-month start, Full SEO or Maps), agree a plan, and you get regular reports and one point of contact. Most work is online, and meetings in Prague are possible.' },
    { q: 'Do you work with English-speaking clients and the Czech market?', a: 'Yes. I work in English, Czech and Russian and know how Czech search works: Google, Seznam and Mapy.com.' },
    { q: 'Which languages do you work in?', a: 'English, Czech and Russian.' },
  ],
  faqMore: 'All questions',

  aboutTitle: 'About me',
  aboutAnswer: 'Arsenii Eranosian, SEO and GEO/AEO specialist in Prague. I work personally with each client in English, Czech or Russian.',
  aboutMore: 'About me',
  photoAlt: 'Arsenii Eranosian, SEO specialist in Prague',

  ctaTitle: 'Find out whether your site has technical errors',
  ctaText: 'A free audit shows technical errors: indexing, duplicate pages and other technical problems. A short presentation arrives within 24 hours, with no call and no obligation.',
  ctaAudit: 'Get a free audit',
  ctaContact: 'Get in touch',
};
