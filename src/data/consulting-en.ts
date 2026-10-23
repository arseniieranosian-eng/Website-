// English content of /en/consulting/ (brief of 23.10.2026): rewritten to the level of the Czech and Russian pages, for an English-speaking audience (enquiries, leads,
// questions about language and the Czech market). The page has NO video (removed on the author's instruction; /media/intro.mp4 stays on the server for the cs and ru
// pages). Prices come from consulting-shared.ts (one source for all languages); euro amounts are approximate and appear only in the visible text (about 25 CZK per euro,
// not tied to a dated rate: the current CNB rate is still to be checked). No HowTo in JSON-LD, no guarantees, no "free" / "24 hours" in the meta, the word "agency" is
// never used about the author, the niche capacity rule is not used here. The case line uses variant A of the brief (four-month window, "8×" explained by its window).
import { fmtCzk, PRICES, type ConsultingContent } from './consulting-shared';

export const CONSULTING_EN: ConsultingContent = {
  lang: 'en',
  h1: 'SEO consulting in Prague',
  durationLine: 'Duration: One-off or recurring',
  lead: `An SEO consultation is a one-off session, online or in person in Prague, where I review your website and answer your questions. You can book one hour of answers for ${fmtCzk(PRICES.questions)}, or a consultation with a website audit, a presentation and a 12-month plan for ${fmtCzk(PRICES.audit)}. I do not promise rankings.`,
  updatedLabel: 'Updated',
  heroPrimary: 'Book a consultation',
  heroAudit: 'Free audit',

  priceTitle: 'How much does an SEO consultation cost?',
  // Euro amounts are approximate and appear only in the visible text (JSON-LD has CZK only).
  priceAnswer: `A one-hour SEO consultation with answers to your questions costs ${fmtCzk(PRICES.questions)} (approx. €80). A consultation with a website audit, a presentation and a 12-month plan costs ${fmtCzk(PRICES.audit)} (approx. €120) and has no time limit. Euro amounts are approximate, at about 25 CZK per euro.`,
  priceNote: 'The main price is in Czech koruna; the euro amounts are only an estimate.',
  offers: [
    {
      id: 'questions',
      name: 'Answers to your questions',
      duration: '1 hour',
      cardText: 'For specific questions about SEO or your website. You ask, I answer, and we decide what to do first. You get answers, priorities for the next steps and a short written summary.',
      cta: 'Book one hour',
      prefill: `Interested in: Answers to your questions (${fmtCzk(PRICES.questions)}, 1 hour).`,
      jsonName: 'Answers to your questions (1 hour)',
      jsonDescription: 'A consultation on specific questions about SEO or your website',
    },
    {
      id: 'audit',
      name: 'Consultation + website audit',
      duration: 'no time limit',
      cardText: 'For those who need a plan. I analyse your site, prepare a presentation with growth points and a 12-month plan within 2 business days of receiving your site, and then we go through it on a call.',
      cta: 'Book consultation with audit',
      prefill: `Interested in: Consultation + website audit (${fmtCzk(PRICES.audit)}, 12-month plan).`,
      jsonName: 'Consultation + website audit',
      jsonDescription: 'A consultation, a website audit, a presentation and a 12-month plan',
    },
  ],
  table: {
    corner: 'Parameter',
    head: ['Answers to your questions', 'Consultation + website audit'],
    rows: [
      ['Price', fmtCzk(PRICES.questions), fmtCzk(PRICES.audit)],
      ['Duration', '1 hour', 'no time limit'],
      ['Who it is for', 'specific questions about SEO or your website', 'business owners and teams with a website who need a plan'],
      ['What you get', 'answers, priorities and a short written summary', 'a presentation with the audit, growth points and a 12-month plan (within 2 business days of receiving your site), then a call'],
      ['Format', 'online or in person in Prague', 'online or in person in Prague'],
    ],
  },

  forWhomTitle: 'Who is an SEO consultation for?',
  forWhom: [
    'Business owners who want to understand SEO and get a second opinion on their website.',
    'Marketing teams and in-house specialists who want to check their direction.',
    'Website owners planning a redesign or migration.',
  ],
  forWhomAnswer: 'An SEO consultation suits business owners who want to understand SEO, marketing teams and in-house specialists who want to check their direction, and website owners planning a redesign or migration. It is not for those who need the work done for them: implementation is not included, and longer work is covered by the 3-month Start and Full SEO.',
  forWhomNote: 'A consultation is self-contained: you do not need to sign a long-term contract.',

  includesTitle: 'What is included in an SEO consultation?',
  includesAnswer: 'The one-hour format gives you answers to your specific questions, priorities for the next steps and a short written summary. The audit format gives you a website analysis before the call, a presentation with growth points and a 12-month plan, and a call to go through everything. GEO/AEO, optimisation for AI search, is covered in both formats.',
  includesGeoLink: 'Read more about SEO and GEO/AEO',

  stepsTitle: 'How does an SEO consultation work?',
  stepsAnswer: 'You send your website address and questions, and I review the site before we talk. In the audit format I prepare a presentation within two business days of receiving your site, and then we go through it on a call. After the one-hour format, you receive a short written summary.',
  steps: [
    'Send me your website address and your questions through the form.',
    'I review your site. In the audit format, I prepare a presentation with the audit, growth points and a 12-month plan within 2 business days.',
    'We talk online or in person in Prague. In the audit format, I present the presentation and answer your questions with no time limit.',
    'After the one-hour format, you receive a short written summary.',
  ],

  channelsTitle: 'Online or in person in Prague?',
  channels: 'Both formats are available online or in person in Prague, with the same content and the same price. Most work happens online, with clients in Czechia and abroad. I consult in Czech, English and Russian, and I can work with multilingual websites, including hreflang setup.',

  longTermTitle: 'Consultation or ongoing work?',
  longTermAnswer: 'Choose a consultation if you need direction, a second opinion or a plan that your own team will carry out. Choose the 3-month Start or Full SEO if you want me to do the work. A consultation is self-contained: there is no long-term contract and no obligation to continue afterwards.',
  longTermIntro: 'If you want the work done for you, see:',
  formatsTable: {
    head: ['', 'Consultation', '3-month Start', 'Full SEO (1 year)'],
    rows: [
      ['What we do', 'answers or an audit with a 12-month plan, then a call', 'an audit, fixes, keywords and optimisation of your key pages', 'a year of strategy, content, links and technical monitoring, including GEO/AEO'],
      ['Who it suits', 'those who need direction and will carry out the plan themselves', 'those who want me to build the foundation of the site', 'those who want long-term growth and want me to do the work'],
    ],
  },

  notIncludedTitle: 'What is not included in the consultation?',
  notIncludedAnswer: 'Implementation on your website, content creation and link buying are not part of the consultation, and there is no long-term contract. I do not guarantee rankings, traffic or enquiries. If you want the work done, the 3-month Start and Full SEO cover implementation, content and technical monitoring.',

  caseTitle: 'What did SEO work change for clients?',
  caseLabel: 'SEO work',
  caseText: 'Translation agency with three branches: over four months of SEO work, form and email enquiries in June 2026 were about 8× those of May (the four-month case window). First B2B client and appearances in Google AI Overview.',
  caseLink: 'Read the case study',

  reviewsTitle: 'What clients say',
  reviewsLink: 'All reviews',

  faqTitle: 'Frequently asked questions',
  faq: [
    { q: 'How long does an SEO consultation take?', a: 'A one-hour consultation takes one hour. The consultation with an audit has no time limit: I prepare the website analysis and the presentation within two business days of receiving your site, and then we go through it on a call. The free audit is a different, shorter format with its own timing.' },
    { q: 'What should I prepare for an SEO consultation?', a: 'Send me your website address and the questions you want answered. If you can share access to Google Search Console and GA4, the review is more precise, but it is not required. If you have a redesign, migration or new language version planned, mention it in your message.' },
    { q: 'Is an SEO consultation worth it?', a: 'It depends on what you need. If you want a second opinion, a priority list or a 12-month plan that your team can carry out, a consultation is a reasonable format. If you want someone to do the work, it is not enough on its own. I cannot promise rankings or results from a consultation.' },
    { q: 'What do I get from an SEO consultation?', a: 'In the one-hour format you get answers to your questions, priorities and a short written summary. In the audit format you get a presentation with an audit, growth points and a 12-month plan, plus a call. Implementation, content and link buying are not included, and there is no long-term contract.' },
    { q: 'What is the difference between the free audit and a consultation with an audit?', a: 'The free audit checks only technical errors such as indexing and duplicates, comes as a presentation within 24 hours, and has no call and no obligation. A consultation with an audit is paid, covers growth points and a 12-month plan, and includes a call. Keywords, competitors and maps are not part of the free audit.' },
    { q: 'Do you work in English with Czech-market websites?', a: 'Yes. I work in Czech, English and Russian, and I can handle Ukrainian content. Many of my projects are multilingual sites for the Czech market, including hreflang setup, and I work with Google and Mapy.com. You can send your questions and the website in English, and I will answer in the same language.' },
    { q: 'Do you work with businesses outside Prague?', a: 'Yes. Most of the work is online, with clients across Czechia and abroad, and in-person meetings are available in Prague. The content and price of the consultation are the same online and in person, so the choice depends only on what is more convenient for you.' },
  ],
  faqAll: 'All questions',

  formTitle: 'Send an enquiry',

  otherTitle: 'Other services',
  more: 'Learn more',
  audit: 'Technical errors of your site: indexing, duplicates and other issues. Free, as a presentation within 24 hours.',
  geo: 'A site that both Google and ChatGPT can find: SEO and optimisation for AI search together.',

  prefillStart: 'Interested in:',

  schema: {
    serviceName: 'SEO consultation',
    serviceType: 'SEO consultation',
    audience: 'Business owners and marketing teams with an existing website',
    availableLanguage: 'en',
    areaServed: [
      { '@type': 'City', name: 'Prague' },
      { '@type': 'Country', name: 'Czechia' },
    ],
    onlineChannel: 'Online (video call)',
    cityChannel: 'In person in Prague',
  },
};
