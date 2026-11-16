// English content of /en/case-studies/seo-translation-agency-4-months/ (brief of 16.11.2026): the anonymised case study, a mirror of the Czech page (case-cs.ts), same structure, figures and periods.
// The client is never named (text, alt, captions, URL, JSON-LD). Only figures confirmed by the author's text appear, each with its period and source. The "What's next?" block is hidden until the autumn data exists.
import { CASE_PUBLISHED } from './case-cs';

export { CASE_PUBLISHED };

const nb = (s: string) => s.replace(/ %/g, ' %');

const raw = {
  lang: 'en' as const,
  label: 'Case study · Translation agency',
  h1: 'SEO for a translation agency with three branches',
  authorLabel: 'Author',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Updated',
  project: 'Project: March–June',
  answer: 'Over 4 months of SEO work on the multilingual website of a Prague translation agency, the number of enquiries in June grew 8× compared with May, the agency won its first B2B client, took 1st and 2nd place in search results for its city and appeared in Google AI Overview. All of that during the summer slowdown.',
  dataNote: 'I do not publish exact numbers or the client’s identity, just as I would treat your data. The charts show relative growth, not absolute values.',

  startTitle: 'What was the starting point of the website?',
  startAnswer: 'The website worked, but it did not bring new clients. It was built for people who already know the company and just need to order.',
  startText: 'In March I started working on the SEO of a translation agency from Prague. The order button worked, the form was sent, the pages loaded. But those who search for translations, compare offers or find out which documents they need did not get to the website at all. From the start, the owner wanted B2B clients: companies that order regularly and sign long-term contracts. We agreed on a realistic estimate of the first noticeable results at 3–5 months, with no promises of shortcuts.',

  localTitle: 'Why one page for each city?',
  localAnswer: 'The agency has branches in Prague, Brno and Pardubice. For each city I created a separate, complete page that targets local and transactional search.',
  localText: [
    'Someone searching for “soudní překlady Pardubice” (certified translations Pardubice) is not browsing: they need a translator in their city right now. That is why the name of the city does not appear only in a note but in the title, H1, text, FAQ and meta description, and naturally: the branch address, opening hours, surrounding towns, the most common documents for local clients, regional specifics.',
    'The page for Pardubice contains services, prices, a local FAQ, reviews, reach into surrounding towns, a separate B2B section for local companies and a contact form.',
  ],
  localResult: 'Result: 1st place for “soudní překlady Pardubice” and 2nd place for “překlady Pardubice”. When checked on 15 September 2026, the branch was listed first in Google AI Overview for the query “překlady Pardubice”, and in first to second place in the organic results and in the local pack.',
  localDecision: 'In Pardubice people search in Czech, so the page has only a Czech version, without an English one. Localisation is not just translation, but also the decision on which versions not to build.',

  funnelTitle: 'How does content work as a funnel?',
  funnelAnswer: 'The service page catches the one who is ready to order. Articles catch everyone else and lead them to the right page.',
  funnelText: 'In 4 months I published 8 articles, closed a whole content cluster around a valuable topic and built a funnel around translations for setting up a limited company (s.r.o.). Each article answers a real question (“what is a certified translation”, “which documents for residence in Czechia”, “how does diploma recognition work”) and contains a clear path back to the relevant service page.',

  localizeTitle: 'Why localise and not just translate?',
  localizeAnswer: 'The website runs in four languages (Czech, Russian, Ukrainian, English) and each version has its own set of questions, because each audience deals with different situations.',
  localize: [
    'Russian version: a question about issuing a power of attorney for legal matters in Russia and the CIS countries.',
    'Ukrainian version: documents for temporary protection and for enrolling children in school.',
    'Czech version: certified translations and documents for foreign employees.',
    'English version: do Czech authorities accept documents in English without translation? (No.)',
  ],
  localizeResult: 'Each language version ranks for its own set of queries instead of the four versions competing for one.',
  faqImage: {
    src: '/images/pripadove-studie/faq-lokalizace-cs-uk.webp',
    width: 720,
    height: 730,
    alt: 'Comparison of the FAQ of the Czech and Ukrainian versions of a translation agency’s website (screenshot in Czech and Ukrainian): the same structure but different questions.',
    caption: 'FAQ of the Czech and Ukrainian versions: the same structure, different questions (for example authorities and documents).',
  },

  techTitle: 'What did I do in technical SEO?',
  techAnswer: 'I focused on three areas: structured data, website speed and the mobile version.',
  tech: [
    {
      title: 'Structured data',
      text: 'Every page carries three types of data in JSON-LD format directly in the HTML, without plugins and without Tag Manager: FAQPage (questions and answers ready to be cited), Organization/LocalBusiness (confirms that this is a real company and fills the knowledge panel) and BreadcrumbList (a clean hierarchy of the website, which often replaces messy URLs in the SERP).',
    },
    {
      title: 'Website speed',
      text: 'The CMS image widgets were slowing the website down: they wrapped images in unnecessary code, inline styles and sometimes JavaScript. I replaced them with plain HTML <img> with declared dimensions and lazy loading. Mobile loading dropped from 5–6 s to 3.6 s. The same images, the same content, a different way of delivery.',
    },
    {
      title: 'Mobile version',
      text: 'It is technically healthy: fast, crawlable, fully functional. The UX investment goes into the desktop, because with a B2B service clients upload documents and decide at a computer. Mobile-first indexing is a Google requirement that I meet; mobile-first design is my decision based on the behaviour of the audience.',
    },
  ],
  speed: {
    label: 'Mobile speed, before and after',
    before: { tag: 'Before', value: '5–6 s', title: 'CMS image widgets', text: 'Redundant wrappers, inline styles, JS' },
    after: { tag: 'After', value: '3.6 s', title: 'Plain HTML <img>', text: 'Declared dimensions + lazy loading' },
    gain: '28–40 % faster',
    caption: 'Mobile loading according to PageSpeed Insights: from 5–6 s to 3.6 s after replacing the image widgets with plain HTML with declared dimensions and lazy loading.',
  },

  resultsTitle: 'What were the results?',
  resultsAnswer: 'Over 4 months of work, the number of enquiries in June grew 8× compared with May and the agency won its first B2B client. All of it in the summer, when people rest and demand falls.',
  results: [
    'Enquiries: 8× in June compared with May (form and e-mail; calls and messages are not measured exactly, the real number is higher).',
    'First B2B client: a company representative, exactly the type of client the owner wanted from the start.',
    'A record week of conversions in mid-June.',
    'July: by mid-month, about 80 % of the result of the whole of June.',
    'Positions: 1st and 2nd place for the agency’s city.',
    'AI Overview: the website appeared in a Google AI Overview answer.',
    'First conversion from AI in June.',
  ],
  resultsNote: 'The results came despite the season, not thanks to it.',

  aiTitle: 'How did the new AI Assistant channel appear in analytics?',
  aiAnswer: 'In GA4 I found a separate AI Assistant channel: visitors who asked an AI (ChatGPT, Perplexity, Gemini) and clicked through to the website. In June the first conversion came from it: a real enquiry.',
  aiText: [
    'I did not optimise “for AI” as a separate task. But the work I was doing (FAQ blocks with clean question and answer pairs, articles with a “in short” summary at the start, H2 headings in the form of questions, structured data) is exactly what AI systems read and cite.',
    'AI did not replace SEO, it raised the bar. Structured and well-written content is rewarded today in two places: in classic search and in AI answers.',
  ],
  aiMore: { before: 'Details: ', link: 'SEO + GEO/AEO', after: '.' },
  channels: {
    title: 'Traffic by channel, 6 months',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    legend: ['Organic search', 'Direct traffic', 'AI Assistant'],
    // Relative stacked values [organic, direct, AI] read from the author's illustrative chart (not client data).
    data: [[296, 161, 0], [312, 151, 6], [323, 146, 10], [334, 129, 27], [340, 112, 49], [350, 97, 75]],
    note: 'AI Assistant: a new channel, still small, growing',
    alt: 'Illustrative chart of traffic by channel over 6 months: organic traffic grows, the AI Assistant channel is new and still small, but growing.',
    caption: 'An illustrative chart based on the pattern I see on a live project. It is not exact client data.',
  },

  stepsTitle: 'Six steps for your website',
  steps: [
    { title: 'Do you have several branches? Create a separate page for each.', text: 'Not a mention, but a whole page with local content, an FAQ, reviews and a contact form.' },
    { title: 'Match the page to the intent.', text: 'A service page should convert, an article should inform and lead onward. Together they cover the whole funnel.' },
    { title: 'Do not translate, localise.', text: 'Different audiences have different questions and your content should reflect that.' },
    { title: 'Invest in technical SEO early.', text: 'Structured data, speed and the health of the mobile version accumulate over time.' },
    { title: 'Watch AI traffic in analytics.', text: 'It is small for now, but growing. Websites with a clean structure, clear answers and real expertise appear in AI answers.' },
    { title: 'Be patient and measure honestly.', text: 'SEO takes months. State the real numbers, even the ones that do not look impressive. Trust stands on transparency, not on inflated metrics.' },
  ],

  quote: {
    text: 'SEO is not magic. It is not luck. It is a system, and systems work even during the summer slowdown, even in small towns, even when the results take a while. This is what four months of consistent work look like before they turn into visible results.',
    author: 'Arsenii Eranosian, SEO and GEO/AEO specialist',
  },

  faqTitle: 'Frequently asked questions about the case study',
  faq: [
    { q: 'How do you get B2B clients through SEO?', a: 'Combine local pages for each city, articles that lead the reader to a service and a technical foundation. This agency got its first B2B client after 4 months of work.' },
    { q: 'Why one page for each city?', a: 'Someone searching for a translator in their city needs one right away. A separate page with local content answers local queries in one place.' },
    { q: 'Why localise instead of translating?', a: 'Each audience has different questions and searches differently. A localised version ranks for its own queries instead of the versions competing with each other.' },
    { q: 'Can a website appear in Google AI Overview?', a: 'With this agency it happened after the work on SEO and on clear answers in the content. Details: SEO + GEO/AEO.' },
  ],

  relatedTitle: 'Related services',
  related: ['start', 'fullSeo', 'maps', 'consulting'] as const,
  more: 'More',
  ctaTitle: 'Want the same approach for your website?',
  ctaText: 'A free audit will show the technical errors of your website.',
  ctaAudit: 'Get a free audit',
  ctaContact: 'Write to me',

  schema: {
    about: ['local SEO', 'multilingual SEO', 'SEO for a translation agency', 'visibility in AI Overviews'],
  },
};

const walk = <T,>(v: T): T =>
  (typeof v === 'string' ? nb(v) : Array.isArray(v) ? v.map(walk) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)])) : v) as T;
export const CASE_EN = walk(raw);
