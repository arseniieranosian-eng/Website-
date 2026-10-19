// Czech content of /sluzby/konzultace/ (brief of 19.10.2026). en/ru versions are adapted separately.
import { fmtKc, PRICES, type ConsultingContent } from './consulting-shared';

export { fmtKc, MIN_PRICE } from './consulting-shared';

export const CONSULTING_CS: ConsultingContent = {
  lang: 'cs',
  h1: 'SEO konzultace',
  lead: 'SEO konzultace pro majitele firem, kteří už mají web a chtějí vědět, co s ním dál. Probereme váš web online nebo osobně v Praze a dostanete konkrétní odpovědi i plán kroků.',
  updatedLabel: 'Aktualizováno',
  heroPrimary: 'Domluvit konzultaci',
  heroAudit: 'Audit zdarma',

  priceTitle: 'Kolik stojí SEO konzultace?',
  priceAnswer: `Hodinová SEO konzultace stojí ${fmtKc(PRICES.questions)}. Konzultace s podrobným auditem webu a plánem na 12 měsíců stojí ${fmtKc(PRICES.audit)}.`,
  offers: [
    {
      id: 'questions',
      name: 'Odpovědi na vaše otázky',
      duration: '1 hodina',
      cardText: 'Pro ty, kdo mají konkrétní otázky k SEO nebo k webu. Zeptáte se, odpovím a řekneme si, co udělat jako první.',
      cta: 'Chci konzultaci',
      prefill: `Mám zájem o: Odpovědi na vaše otázky (${fmtKc(PRICES.questions)}, 1 hodina).`,
      jsonName: 'Odpovědi na vaše otázky (1 hodina)',
      jsonDescription: 'Konzultace o konkrétních otázkách k SEO nebo webu',
    },
    {
      id: 'audit',
      name: 'Konzultace + audit webu',
      duration: 'bez časového omezení',
      cardText: 'Pro ty, kdo už web mají. Odpovím na vaše otázky, připravím podrobný audit a plán na 12 měsíců: co dělat a kdy.',
      cta: 'Chci konzultaci s auditem',
      prefill: `Mám zájem o: Konzultace + audit webu (${fmtKc(PRICES.audit)}, plán na 12 měsíců).`,
      jsonName: 'Konzultace + audit webu',
      jsonDescription: 'Konzultace, podrobný audit webu a plán na 12 měsíců',
    },
  ],
  table: {
    corner: 'Parametr',
    head: ['Odpovědi na vaše otázky', 'Konzultace + audit webu'],
    rows: [
      ['Cena', fmtKc(PRICES.questions), fmtKc(PRICES.audit)],
      ['Délka', '1 hodina', 'bez časového omezení'],
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

  examplesTitle: 'Ukázky konzultací',
  examples: [
    {
      id: 'questions',
      title: `Konzultace za ${fmtKc(PRICES.questions)}: odpovědi na vaše otázky`,
      text: 'Klient se ptá na SEO, já odpovídám. Na snímcích videohovor a zpětná vazba po něm.',
      images: [
        { src: '/images/consulting/call-2000.webp', alt: 'Videohovor SEO konzultace, tvář klienta je znepřístupněna' },
        { src: '/images/consulting/review-2000.webp', alt: 'E-mailová zpětná vazba klienta po SEO konzultaci' },
      ],
    },
    {
      id: 'audit',
      title: `Konzultace za ${fmtKc(PRICES.audit)}: podrobný audit a plán na 12 měsíců`,
      text: 'Ukázka z reportu: kde web ztrácí příležitosti, jaká je reálná konkurence a plán na 12 měsíců.',
      images: [
        { src: '/images/consulting/audit-3000-1.webp', alt: 'Ukázka SEO auditu: technický základ, FAQ a plán na rok' },
        { src: '/images/consulting/audit-3000-2.webp', alt: 'Ukázka SEO auditu: konkurence a reálné příležitosti' },
        { src: '/images/consulting/audit-3000-3.webp', alt: 'Ukázka SEO auditu: kde se ztrácejí příležitosti' },
      ],
    },
  ],
  examplesNote: 'Údaje a tváře klientů jsou skryté.',
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
    { q: 'Kolik stojí SEO konzultace?', a: `Hodinová konzultace stojí ${fmtKc(PRICES.questions)}. Konzultace s podrobným auditem webu a plánem na 12 měsíců stojí ${fmtKc(PRICES.audit)} a není časově omezená.` },
    { q: 'Jak dlouho konzultace trvá?', a: 'Konzultace s otázkami trvá 1 hodinu. Konzultace s auditem není časově omezená, audit a plán dostanete do 2 dnů.' },
    { q: 'Probíhá konzultace online, nebo osobně?', a: 'Obojí. Konzultace může proběhnout přes video hovor, nebo osobně v Praze.' },
    { q: 'Co dostanu po konzultaci s auditem?', a: 'Podrobný audit vašeho webu a plán na 12 měsíců: co a kdy udělat, abyste z vyhledávání získali víc poptávek.' },
    { q: 'Čím se liší konzultace od služby Start na 3 měsíce?', a: 'Konzultace je jednorázová: dostanete odpovědi a plán. Ve Startu na 3 měsíce změny na webu, obsah a odkazy rovnou realizuji já.' },
  ],
  faqAll: 'Všechny časté dotazy',

  formTitle: 'Nezávazná poptávka',

  otherTitle: 'Další služby',
  otherAll: 'Všechny služby',
  more: 'Více',
  audit: 'Technický stav webu, klíčová slova, konkurence a viditelnost v AI. Zdarma, do 24 hodin.',
  geo: 'Web, který najde Google i ChatGPT: SEO a optimalizace pro AI vyhledávání v jednom.',

  video: {
    name: 'SEO konzultace s Arsenii Eranosianem',
    // Visible caption and VideoObject.description are the same text on purpose.
    caption: 'Krátké video: Arsenii Eranosian se představuje a mluví o SEO. Video je v ruštině.',
    alt: 'Arsenii Eranosian při konzultaci',
  },
  prefillStart: 'Mám zájem o:',

  schema: {
    serviceName: 'SEO konzultace',
    serviceType: 'SEO konzultace',
    audience: 'Majitelé firem, kteří už mají web',
    areaServed: [{ '@type': 'City', name: 'Praha' }],
    onlineChannel: 'Online (video hovor)',
    cityChannel: 'Osobně v Praze',
    howToName: 'Jak probíhá SEO konzultace',
    videoLanguage: 'ru',
  },
};
