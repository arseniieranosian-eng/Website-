// Numbers shared by every language version of the consulting page (single source for prices).
export const fmtCzk = (n: number) => `${n.toLocaleString('en-US')} CZK`; // English pages
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
  lang: 'cs' | 'ru' | 'en';
  h1: string;
  lead: string;
  updatedLabel: string;
  durationLine?: string; // en: the short "Duration: …" caption under the date
  heroPrimary: string;
  heroAudit: string;
  priceTitle: string;
  priceAnswer: string;
  priceNote?: string;
  offers: OfferContent[];
  table: { corner: string; head: string[]; rows: string[][] };
  forWhomTitle: string;
  forWhom: string[];
  forWhomAnswer?: string; // en: direct answer under the H2
  forWhomNote: string;
  examplesTitle?: string;
  examples?: { id: keyof typeof PRICES; title: string; text: string; images: { src: string; alt: string }[] }[];
  examplesNote?: string;
  includesTitle?: string; // en: "What is included" with the GEO/AEO link
  includesAnswer?: string;
  includesGeoLink?: string;
  notIncludedTitle?: string; // en: "What is not included"
  notIncludedAnswer?: string;
  formatsTable?: { head: string[]; rows: string[][] }; // en: consultation vs Start vs Full SEO (no prices)
  stepsTitle: string;
  stepsAnswer?: string; // en: direct answer under the H2
  steps: string[];
  marketTitle?: string;
  market?: string;
  channelsTitle: string;
  channels: string;
  longTermTitle: string;
  longTermAnswer?: string; // en: direct answer under the H2
  longTermIntro: string;
  longTermGeo?: { before: string; link: string; after: string };
  caseTitle: string;
  caseText: string;
  caseLink: string;
  caseLabel?: string; // en: "SEO work" label above the case line
  caseText2?: string; // second case line (ru only: the print-shop case)
  caseLink2?: string;
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
  video?: { name: string; caption: string; alt: string }; // absent on the English page (the video was removed there)
  prefillStart: string; // message prefix that marks an auto-filled message
  schema: {
    serviceName: string;
    serviceType: string;
    audience: string;
    availableLanguage?: string;
    areaServed: object[];
    onlineChannel: string;
    cityChannel: string;
    howToName?: string; // HowTo is added only when set
    videoLanguage?: string;
  };
}
