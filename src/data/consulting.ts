// Czech content of /sluzby/konzultace/ (brief of 19.10.2026). Single source for the page,
// its JSON-LD, the card on /sluzby/ and the home page. en/ru versions are adapted separately.

export const fmtKc = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Kč`;

export interface Offer {
  id: 'questions' | 'audit';
  name: string;
  price: number;
  duration: string;
  hours?: number; // set when the duration is a fixed number of hours (schema eligibleDuration)
  cardText: string;
  cta: string;
  prefill: string;
  jsonDescription: string; // as in the brief's JSON-LD
}

export const OFFERS: Offer[] = [
  {
    id: 'questions',
    name: 'Odpovědi na vaše otázky',
    price: 2000,
    duration: '1 hodina',
    hours: 1,
    cardText: 'Pro ty, kdo mají konkrétní otázky k SEO nebo k webu. Zeptáte se, odpovím a řekneme si, co udělat jako první.',
    cta: 'Chci konzultaci',
    prefill: 'Mám zájem o: Odpovědi na vaše otázky (2 000 Kč, 1 hodina).',
    jsonDescription: 'Konzultace o konkrétních otázkách k SEO nebo webu',
  },
  {
    id: 'audit',
    name: 'Konzultace + audit webu',
    price: 3000,
    duration: 'bez časového omezení',
    cardText: 'Pro ty, kdo už web mají. Odpovím na vaše otázky, připravím podrobný audit a plán na 12 měsíců: co dělat a kdy.',
    cta: 'Chci konzultaci s auditem',
    prefill: 'Mám zájem o: Konzultace + audit webu (3 000 Kč, plán na 12 měsíců).',
    jsonDescription: 'Konzultace, podrobný audit webu a plán na 12 měsíců',
  },
];

export const [OFFER_QUESTIONS, OFFER_AUDIT] = OFFERS;
export const MIN_PRICE = Math.min(...OFFERS.map((o) => o.price));

export const CONSULTING = {
  h1: 'SEO konzultace',
  lead: 'SEO konzultace pro majitele firem, kteří už mají web a chtějí vědět, co s ním dál. Probereme váš web online nebo osobně v Praze a dostanete konkrétní odpovědi i plán kroků.',

  priceTitle: 'Kolik stojí SEO konzultace?',
  priceAnswer: `Hodinová SEO konzultace stojí ${fmtKc(OFFER_QUESTIONS.price)}. Konzultace s podrobným auditem webu a plánem na 12 měsíců stojí ${fmtKc(OFFER_AUDIT.price)}.`,
  table: {
    head: ['', OFFER_QUESTIONS.name, OFFER_AUDIT.name],
    rows: [
      ['Cena', fmtKc(OFFER_QUESTIONS.price), fmtKc(OFFER_AUDIT.price)],
      ['Délka', OFFER_QUESTIONS.duration, OFFER_AUDIT.duration],
      ['Pro koho', 'konkrétní otázky k SEO nebo webu', 'majitelé firem s webem, kteří chtějí plán'],
      ['Výstup', 'odpovědi na vaše otázky', 'odpovědi + podrobný audit + plán na 12 měsíců'],
      ['Forma', 'online i osobně v Praze', 'online i osobně v Praze'],
    ],
  },

  forWhomTitle: 'Pro koho je SEO konzultace',
  forWhom: [
    'Majitelé firem, kteří chtějí druhý názor na SEO svého webu.',
    'Weby před redesignem nebo přechodem na nový web, kde je potřeba hlídat SEO.',
    'Firmy, které chtějí vědět, co a kdy na webu změnit, aby jim přibývaly poptávky z vyhledávání.',
  ],
  forWhomNote: 'Konzultace je samostatná služba, nemusíte kvůli ní uzavírat dlouhodobou spolupráci.',

  stepsTitle: 'Jak probíhá konzultace',
  steps: [
    'Pošlete adresu webu a své otázky přes formulář.',
    'Projdu váš web a připravím se na schůzku.',
    'Probereme to společně, online nebo osobně v Praze.',
    'Do 2 dnů dostanete písemné shrnutí a plán kroků podle priorit.',
  ],

  channelsTitle: 'SEO konzultace online i osobně v Praze',
  channels: 'Konzultace proběhne přes video hovor, nebo osobně v Praze, podle toho, co vám vyhovuje. Obsah i cena jsou stejné.',

  longTermTitle: 'Konzultace, nebo dlouhodobá spolupráce?',
  longTermIntro: 'Konzultace je jednorázová SEO pomoc: odpovědi a plán. Pokud chcete, aby změny na webu, obsah a odkazy rovnou udělal někdo za vás, podívejte se na:',
  longTermGeo: { before: 'Při konzultaci se věnuji SEO i ', link: 'optimalizaci pro AI vyhledávání', after: '.' },

  caseTitle: 'Co to přineslo klientům',
  caseText: 'KB PŘEKLADY: web překladatelské agentury téměř nebyl vidět ve vyhledávání. Po 4 měsících práce vzrostl počet poptávek 8×, v létě dokonce 24×, a agentura se objevuje i v odpovědích Google AI Overview.',
  caseLink: 'Celý příběh',

  reviewsTitle: 'Co říkají klienti',
  reviewsLink: 'Všechny recenze',

  faqTitle: 'Časté dotazy k SEO konzultaci',
  faq: [
    { q: 'Kolik stojí SEO konzultace?', a: `Hodinová konzultace stojí ${fmtKc(OFFER_QUESTIONS.price)}. Konzultace s podrobným auditem webu a plánem na 12 měsíců stojí ${fmtKc(OFFER_AUDIT.price)} a není časově omezená.` },
    { q: 'Jak dlouho konzultace trvá?', a: 'Konzultace s otázkami trvá 1 hodinu. Konzultace s auditem není časově omezená, audit a plán dostanete do 2 dnů.' },
    { q: 'Probíhá konzultace online, nebo osobně?', a: 'Obojí. Konzultace může proběhnout přes video hovor, nebo osobně v Praze.' },
    { q: 'Co dostanu po konzultaci s auditem?', a: 'Podrobný audit vašeho webu a plán na 12 měsíců: co a kdy udělat, abyste z vyhledávání získali víc poptávek.' },
    { q: 'Čím se liší konzultace od služby Start na 3 měsíce?', a: 'Konzultace je jednorázová: dostanete odpovědi a plán. Ve Startu na 3 měsíce změny na webu, obsah a odkazy rovnou realizuji já.' },
  ],
  faqAll: 'Všechny časté dotazy',

  formTitle: 'Nezávazná poptávka',

  otherTitle: 'Další služby',
  otherAll: 'Všechny služby',
  // Cards on the page: [page key, one-line text]. Text for start/fullSeo/maps comes from data/services.ts.
  audit: 'Technický stav webu, klíčová slova, konkurence a viditelnost v AI. Zdarma, do 5 pracovních dnů.',
  geo: 'Web, který najde Google i ChatGPT: SEO a optimalizace pro AI vyhledávání v jednom.',

  video: {
    name: 'SEO konzultace s Arsenii Eranosianem',
    // Visible caption and VideoObject.description are the same text on purpose.
    caption: 'Krátké video: Arsenii Eranosian se představuje a mluví o SEO. Video je v ruštině.',
    alt: 'Arsenii Eranosian při konzultaci',
  },
};
