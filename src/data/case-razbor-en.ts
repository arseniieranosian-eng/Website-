// English localisation of the Czech review of a real estate agency website (brief of 16.11.2026): a REVIEW, not a result case; a mirror of data/case-razbor-cs.ts (facts, dates 23.10.2026 and 21.–22.10.2026, "no results", anonymity).
// The slides are the author's Czech originals (public/images/razbor-cs-slide-*.webp; names of an agency, a service and a competitor in them are covered with grey bars); the English page says that the slides are in Czech.
// No author quote, no client name, no figures, no prices; the link to the Czech niche page for real estate agencies is omitted (that page does not exist in English).
import { CASE_RAZBOR_CS_PUBLISHED } from './case-razbor-cs';

export { CASE_RAZBOR_CS_PUBLISHED as CASE_RAZBOR_EN_PUBLISHED };

const raw = {
  lang: 'en' as const,
  published: CASE_RAZBOR_CS_PUBLISHED,
  label: 'A review, not a results case',
  authorLabel: 'Author',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Updated',
  bylineRest: 'Consultation with an audit, presentation on 21–22 October 2026. No results yet.',

  lead: 'This is a review of the website of a small Prague real estate agency from a paid SEO consultation with an audit. I describe what the owner wanted to know, what I saw on the website, which three directions I proposed and what we do not know yet. There are no results yet: the owner has not yet decided on further cooperation.',

  whoTitle: 'What did the owner want to find out?',
  whoAnswer: 'The owner of a small Prague real estate agency ordered a paid SEO consultation with an audit and a 12-month plan. They wanted to know whether it pays to invest in a property valuation page and what to realistically expect from it. I do not state the name, the address or any other identifying details; the owner agreed to anonymous publication.',

  howTitle: 'How did the consultation with an audit go?',
  howAnswerBefore: 'A consultation with an audit includes a check of the website, a presentation of growth points, a 12-month plan and a follow-up call. I promise the presentation within two working days of receiving the website. In this case the review took about three weeks and the presentation was ready on 21–22 October 2026. You can find the price on the',
  howLinkText: 'consultation page',

  seenTitle: 'What did I see on the website?',
  seenAnswer: 'During the consultation I found four things: the target of a broad query was unrealistic for a small agency, informational articles performed better than the target page, enquiries from abroad were not well served, and some pages had technical errors. For these findings I proposed narrow queries, articles, an English version and fixes.',
  table: {
    head: ['Finding', 'Proposal'],
    rows: [
      ['Target: the broad query is unrealistic', 'narrow queries'],
      ['Content: articles perform better than the target page', 'articles answering owners’ questions'],
      ['Languages: enquiries from abroad are served poorly', 'English version'],
      ['Technique: errors on some pages', 'fix before launching the directions'],
    ],
  },
  slides: [
    { src: '/images/razbor-cs-slide-1.webp', width: 1080, height: 1372, alt: 'Excerpt from the SEO review presentation (in Czech): title slide, where opportunities are lost and why backlinks did not help' },
    { src: '/images/razbor-cs-slide-2.webp', width: 1080, height: 1631, alt: 'Excerpt from the SEO review presentation (in Czech): competition, an honest assessment of the goal and where the real opportunity is' },
    { src: '/images/razbor-cs-slide-3.webp', width: 1080, height: 2042, alt: 'Excerpt from the SEO review presentation (in Czech): technical foundation, FAQ and a one-year plan in four stages' },
  ],
  slidesCaption: 'Excerpts from the presentation (in Czech), October 2026, client data hidden.',

  rivalsTitle: 'Who does a small agency compete with?',
  rivalsAnswer: 'Based on the search results of 23 October 2026, I saw three types of competitors: specialised projects tied to large companies, financial services with their own calculators and agencies with a working online calculator. I do not name the companies. So the agency does not compete with other small agencies but with other types of websites.',
  rivalsSource: 'Source of the observation: Google.cz search results of 23 October 2026.',

  chanceTitle: 'Does a small real estate agency have a chance for the query “property valuation”?',
  chanceAnswer: 'For the broad query “property valuation” (“ocenění nemovitosti”), a top position is unrealistic for a small agency. In the visible results of 23 October 2026, specialised services and large projects dominated and the client’s page was far down. Narrower, local queries have a chance. That is why the plan focuses on these narrower queries and on content that answers owners’ questions.',

  dirTitle: 'Which three directions did I propose?',
  dirAnswer: 'I proposed three directions: narrow queries with lower competition, content answering the real questions of property owners and an English version for foreign buyers and sellers in Prague. For each direction, demand first needs to be verified. Technical errors are fixed before launching the directions, not after.',
  directions: [
    { h: 'Narrow and long queries', text: 'It is hard for a small agency to compete for general queries. Narrower and local queries have lower competition, so I proposed looking for targets there. Before choosing a query, demand needs to be verified.' },
    { h: 'Content answering owners’ questions', text: 'Articles that answer the real questions of property owners lead to enquiries. On the website they already work better than the main page, so it makes sense to develop them in a targeted way.' },
    { h: 'English version of the website', text: 'Foreign buyers and sellers are served weakly on the website and can be a target of their own. Here too, demand first needs to be verified.' },
  ],

  planTitle: 'What does the 12-month plan include?',
  planAnswer: 'The 12-month plan has three stages: fixing technical errors and cleaning up pages, launching the selected directions, and evaluating the data and adjusting the approach. The exact stages and timing depend on the client’s decision and the budget. The plan does not promise positions or enquiries; it only describes verifiable steps.',

  unknownTitle: 'What do we not know yet?',
  unknownBadge: 'No results yet',
  unknownAnswer: 'The owner has not yet decided on further cooperation, so I have no positions or enquiries and I do not state numbers. So we do not know whether the proposed directions would work. That is why this material is not a results case but a description of a review. I will update the page if the client continues and measurable data appears.',

  anyTitle: 'What applies to another small agency?',
  anyAnswer: 'Four things from the review apply to another small agency: verify demand first, aim at narrower queries, answer owners’ real questions and fix technical errors before launching new content. This applies to agencies of a similar size, but it always depends on the specific website.',
  any: [
    'Verify demand first.',
    'Aim at narrower queries.',
    'Answer owners’ real questions.',
    'Fix technical errors before launching new content.',
  ],

  faqTitle: 'Frequently asked questions',
  faq: [
    { q: 'How does a consultation with an audit differ from a free audit?', a: 'The consultation is paid and includes a check of the website, a presentation, a 12-month plan and a follow-up call. The free audit is a different service: it checks only technical errors, for example indexing and duplicates, without a call and without obligation, with a presentation within 24 hours. Structure, content and conversion belong to the consultation.', link: 'audit' as const, linkText: 'Free technical audit' },
    { q: 'Can a small agency reach the top for the query “property valuation”?', a: 'For the broad query “property valuation”, a top position is unrealistic for a small agency, because large projects and specialised services dominate the search. Narrower local queries and content that answers owners’ questions have a better chance. The plan is therefore built on narrower queries and specific answers.' },
    { q: 'Does SEO make sense for every small agency?', a: 'SEO often helps, but not always. If enquiries come mainly from referrals and advertising, search may be only a supporting channel. The decision depends on the website, the industry and the budget. That is why the consultation starts every proposed direction by verifying demand, not by promising a result.' },
    { q: 'What does the 12-month plan include?', a: 'The 12-month plan has stages with verifiable steps: fixes to the website, launching the selected directions and evaluating the data. The scope and timing depend on the website, the industry and the budget. Each stage has its own goal and checkpoint, so it is visible what was done, why and what follows from it. The plan is adjusted based on the data of the previous stage.' },
    { q: 'When will the first results appear?', a: 'Time and results cannot be guaranteed, because they depend on the state of the website, the competition and the scope of changes. First comes a free technical audit, which shows indexing errors and duplicate pages. The approach is agreed on that basis. I cannot promise any deadline, so I do not state one.' },
  ],

  relatedTitle: 'Related pages',
  related: [
    { key: 'consulting' as const, text: 'SEO consultation' },
    { key: 'audit' as const, text: 'Free technical audit' },
    { key: 'cases' as const, text: 'More case studies' },
  ],
  ctaTitle: 'Want a similar review of your website?',
  ctaBefore: 'Order an',
  ctaConsulting: 'SEO consultation',
  ctaMiddle: 'or get a',
  ctaAudit: 'free technical audit',

  schema: {
    about: ['review of a real estate agency website', 'SEO consultation with an audit', '12-month plan'],
  },
};

export const CASE_RAZBOR_EN = raw;
