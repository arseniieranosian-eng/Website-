// English content of /en/consulting/ (brief of 29.10.2026): the same content as the Czech page /konzultace/ (data/consulting-cs.ts), translated section by section, used by the same template (views/ConsultingCsPage.astro).
// Prices come from consulting-shared.ts (one source for all languages); euro amounts are approximate and appear only in the visible text (about 25 CZK per euro, not tied to a dated rate: the current CNB rate is still to
// be checked). No guarantees, the word "agency" is never used about the author. Differences from the Czech page that cannot be avoided: no "Related articles" block (the blog exists in Czech only), no second case line
// (the print-shop case has no English page), no link to the Czech review of a real estate agency website. The three audit slides are English re-creations of the Czech ones (public/images/consulting/en/), the two other
// example images are the original screenshots (Russian-language messages) with an English translation in the text below them.
import { fmtCzk, PRICES, QUESTIONS_HOURS } from './consulting-shared';
import { CASE_LINE } from './case-summary';
import { START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';

interface Include { text: string; link?: { part: string; page: 'geo' }; catalog?: string }

const languages = 'The consultation is held in Czech, English and Russian. I can work with Ukrainian content. I also handle multilingual SEO and hreflang when needed.';

export const CONSULTING_EN = {
  lang: 'en' as const,
  // The author's quote (same statement as on the Czech page); text word for word in the page and in the Quotation node.
  quote: 'A consultation gives you answers and a plan. I do not do the work for you, and if you need implementation, I will say so straight away.',
  h1: 'SEO consulting in Prague',
  lead: 'An independent view of your website’s SEO and a clear plan of what to do next. I will answer your questions or prepare a website audit with a 12-month action plan and present it to you on the consultation. Online or in person in Prague.',
  updatedLabel: 'Updated',
  badge: `from ${fmtCzk(PRICES.questions)} · online or in Prague`,
  heroPrimary: 'I am interested',
  heroAudit: 'Free audit',

  priceTitle: 'How much does an SEO consultation cost?',
  priceAnswer: `An SEO consultation costs ${fmtCzk(PRICES.questions)} (approx. €80) per hour, or ${fmtCzk(PRICES.audit)} (approx. €120) with a website audit and a consultation without a time limit. In the audit variant I prepare the audit and the presentation within 2 business days of receiving your website, and then we go through it together. The consultation takes place online or in person in Prague.`,
  priceNote: 'The main price is in Czech koruna; the euro amounts are only an estimate.',
  offers: [
    {
      id: 'questions' as const,
      name: 'Answers to your questions',
      duration: '1 hour',
      gets: 'Answers to your questions about your website and SEO and a short written summary after the call',
      prefill: `Interested in: Answers to your questions (${fmtCzk(PRICES.questions)}, 1 hour).`,
    },
    {
      id: 'audit' as const,
      name: 'Consultation + website audit',
      duration: 'No time limit',
      gets: 'A website audit and a presentation with a 12-month action plan within 2 business days, then a consultation where we go through everything and I answer your questions',
      prefill: `Interested in: Consultation + website audit (${fmtCzk(PRICES.audit)}, 12-month plan).`,
    },
  ],
  table: { head: ['Option', 'Price', 'Duration', 'What you get'] },
  priceCta: 'I am interested',

  forWhomTitle: 'Who is an SEO consultation for?',
  forWhom: [
    'For business owners who want an independent view of their website’s SEO.',
    'For companies before a website redesign: what to keep and what to watch out for.',
    'For companies before a website migration: how not to lose rankings and traffic.',
    'For those who first want to understand what to do and only then decide whether to order SEO.',
    'For international companies: the consultation is held in Czech, English or Russian.',
  ],

  includesTitle: 'What is included in an SEO consultation?',
  includes: <Include[]>[
    { text: 'A review of your website before the consultation.' },
    { text: 'The consultation online or in person in Prague.' },
    { text: 'A website audit and a presentation with a 12-month action plan: in the audit variant, within 2 business days of receiving your website.', catalog: 'Website audit and a presentation with a 12-month action plan' },
    { text: 'A short written summary after the one-hour consultation.', catalog: 'Short written summary after the one-hour consultation' },
    { text: 'GEO/AEO: recommendations for optimisation for AI search.', link: { part: 'GEO/AEO', page: 'geo' as const } },
    { text: 'Multilingual SEO and hreflang, if the website works in several languages.', catalog: 'Multilingual SEO and hreflang' },
  ],

  stepsTitle: 'How an SEO consultation works',
  steps: [
    'Send me your website address and your questions. Access to Google Search Console and GA4 allows a more precise analysis.',
    'A review of your website before the consultation: in the audit variant, I prepare the audit and a presentation with growth points and a 12-month plan within 2 business days.',
    'The joint consultation online or in person in Prague: in the audit variant, I present the presentation to you and answer your questions with no time limit.',
    'After the one-hour consultation you receive a short written summary.',
  ],
  examplesTitle: 'Examples of consultations',
  examples: [
    {
      id: 'questions' as const,
      title: `Consultation for ${fmtCzk(PRICES.questions)}: answers to your questions`,
      text: 'The client, a woman, came with questions about SEO in digital marketing: she wanted to know where to start in SEO. The images show a video call and the feedback after it.',
      images: [
        { src: '/images/consulting/call-2000.webp', alt: 'Video call of an SEO consultation, the client’s face is hidden. The caption on the picture (in Russian) says: “I recently had an SEO consultation, he explained where it is best to start in SEO”' },
        { src: '/images/consulting/review-2000.webp', alt: 'The client’s e-mail feedback after an SEO consultation (original in Russian, names hidden)' },
      ],
      translation: [
        'Translation of the messages in the screenshots (the originals are in Russian, the names are hidden):',
        '“Dear Arsenii! Thank you for the consultation about SEO in digital marketing. It was very informative for me. I received a lot of valuable, useful information from your experience and practice. I had many questions, and in an hour and a half of talking I got a direction and a practical plan of action for this stage. I wish you success and inspiration in creating your projects.”',
        '“Thank you, Arsenii! It is very comfortable to talk to you, you are a very tactful interlocutor and a pleasant person. I wish you success in all directions.”',
      ],
    },
    {
      id: 'audit' as const,
      title: `Consultation for ${fmtCzk(PRICES.audit)}: a detailed audit and a 12-month plan`,
      text: 'A sample from the report on the website of a small Prague real estate agency: where the website loses opportunities, who the real competition is and a 12-month plan.',
      caseLink: { text: 'A review without results, only an audit and a plan. The page is in Czech.', link: 'What I proposed for a small real estate agency website in Prague (in Czech)' },
      images: [
        { src: '/images/consulting/en/audit-3000-1.webp', alt: 'A sample of an SEO audit: the technical base, FAQ and a plan for the year' },
        { src: '/images/consulting/en/audit-3000-2.webp', alt: 'A sample of an SEO audit: the competition and real opportunities' },
        { src: '/images/consulting/en/audit-3000-3.webp', alt: 'A sample of an SEO audit: where opportunities are lost' },
      ],
      translation: [],
    },
  ],
  examplesNote: 'Client data and faces are hidden. The slides are an English version of a presentation made in Czech.',

  languagesTitle: 'In which languages is the consultation held?',
  languages, // identical to the FAQ answer below (one question = one answer)

  compareTitle: 'Consultation, free audit, or Start and Full SEO?',
  compare: {
    audit: { before: '', link: 'The free audit', after: ' shows the errors of your website.' },
    consulting: 'The consultation gives you answers to your questions and a plan, but I do not do the work.',
    packages: {
      start: 'Start for 3 months',
      startPrice: ` (${fmtCzk(START_PRICE)}) and `,
      full: 'Full SEO for a year',
      fullPrice: ` (from ${fmtCzk(FULLSEO_MONTHLY)} per month) include implementation: I do the work on your website.`,
    },
    outro: { before: 'If a plan and answers are enough for you, choose the consultation. If you want someone to do the work for you, see ', start: 'Start', mid: ' or ', full: 'Full SEO', after: '.' },
  },

  caseTitle: 'What an SEO plan can bring',
  caseText: CASE_LINE.en,
  caseLink: 'The whole story',

  reviewsTitle: 'What clients say',
  reviewsLink: 'All reviews',

  faqTitle: 'Frequently asked questions about the SEO consultation',
  faq: [
    { q: 'How much does an SEO consultation cost?', a: `${fmtCzk(PRICES.questions)} per hour, or ${fmtCzk(PRICES.audit)} with a website audit and a consultation without a time limit.` },
    { q: 'How long does the consultation take?', a: `${QUESTIONS_HOURS} hour, or without a limit in the audit variant. I prepare the audit and the presentation within 2 business days of receiving your website, and the consultation takes place only after that.` },
    { q: 'Is the consultation online, or in person in Prague?', a: 'Both: online, or in person in Prague.' },
    { q: 'What do I get after the consultation?', a: 'With the one-hour consultation, answers to your questions and a short written summary. With the audit variant, a detailed presentation with the audit, growth points and a 12-month plan, and a consultation where we go through it together.' },
    { q: 'How is the consultation different from Start for 3 months or Full SEO?', a: 'In a consultation I do not do the work, you get a plan. Start for 3 months and Full SEO include implementation.' },
    { q: 'In which languages is the consultation held?', a: languages },
  ],
  faqAll: 'All questions',

  formTitle: 'Non-binding enquiry',

  otherTitle: 'Other services',
  more: 'Learn more',
  audit: 'Technical errors of your website: indexing, duplicates and other issues. Free, within 24 hours.',
  geo: 'A website that both Google and ChatGPT can find: SEO and optimisation for AI search together.',

  schema: {
    serviceName: 'SEO consultation',
    serviceType: 'SEO consultation',
    audience: 'Business owners, companies before a website redesign or migration',
    availableLanguage: ['cs', 'en', 'ru'],
    areaServed: [
      { '@type': 'Country', name: 'Czechia' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'AdministrativeArea', name: 'European Union' },
    ],
    onlineChannel: 'Online',
    cityChannel: 'In person in Prague',
    catalogName: 'What is included in an SEO consultation',
    howToName: 'How an SEO consultation works',
  },
};
