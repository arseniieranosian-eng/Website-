// Numbers shared by every language version of the consulting page (single source for prices).
export const fmtKc = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Kč`;

export const PRICES = { questions: 2000, audit: 3000 } as const;
export const QUESTIONS_HOURS = 1;
export const MIN_PRICE = Math.min(...Object.values(PRICES));

export interface OfferContent {
  id: keyof typeof PRICES;
  name: string;
  duration: string;
  cardText: string;
  cta: string;
  prefill: string;
  jsonName: string; // Offer.name in JSON-LD
  jsonDescription: string; // Offer.description in JSON-LD
}

export interface ConsultingContent {
  lang: 'cs' | 'ru';
  h1: string;
  lead: string;
  updatedLabel: string;
  heroPrimary: string;
  heroAudit: string;
  priceTitle: string;
  priceAnswer: string;
  priceNote?: string;
  offers: OfferContent[];
  table: { corner: string; head: string[]; rows: string[][] };
  forWhomTitle: string;
  forWhom: string[];
  forWhomNote: string;
  examplesTitle: string;
  examples: { id: keyof typeof PRICES; title: string; text: string; images: { src: string; alt: string }[] }[];
  examplesNote: string;
  stepsTitle: string;
  steps: string[];
  marketTitle?: string;
  market?: string;
  channelsTitle: string;
  channels: string;
  longTermTitle: string;
  longTermIntro: string;
  longTermGeo: { before: string; link: string; after: string };
  caseTitle: string;
  caseText: string;
  caseLink: string;
  reviewsTitle: string;
  reviewsLink: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  faqAll: string;
  formTitle: string;
  otherTitle: string;
  more: string;
  audit: string;
  geo: string;
  video: { name: string; caption: string; alt: string };
  prefillStart: string; // message prefix that marks an auto-filled message
  schema: {
    serviceName: string;
    serviceType: string;
    audience: string;
    availableLanguage?: string;
    areaServed: object[];
    onlineChannel: string;
    cityChannel: string;
    howToName: string;
    videoLanguage: string;
  };
}
