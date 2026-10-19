// Czech content of /sluzby/konzultace/ (brief of 19.10.2026): an adaptation for the Czech market, not a translation
// of the Russian page. Prices come from consulting-shared.ts, the packages' prices from start-shared / fullseo-shared.
import { fmtKc, PRICES, QUESTIONS_HOURS } from './consulting-shared';
import { START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';

interface Include { text: string; link?: { part: string; page: 'geo' }; catalog?: string }

const languages = 'Konzultace probíhá v češtině, angličtině, ruštině a ukrajinštině. Podle potřeby řeším i vícejazyčné SEO a hreflang.';

export const CONSULTING_CS = {
  lang: 'cs' as const,
  h1: 'SEO konzultace',
  lead: 'Nezávislý pohled na SEO vašeho webu a jasný plán, co dělat dál. Odpovím na vaše otázky, případně udělám audit webu a připravím akční plán na 12 měsíců. Online nebo osobně v Praze, písemné shrnutí do 2 dnů.',
  updatedLabel: 'Aktualizováno',
  badge: `od ${fmtKc(PRICES.questions)} · online nebo v Praze · plán do 2 dnů`,
  heroPrimary: 'Mám zájem o službu',
  heroAudit: 'Audit zdarma',

  priceTitle: 'Kolik stojí SEO konzultace?',
  priceAnswer: `SEO konzultace stojí ${fmtKc(PRICES.questions)} za hodinu, nebo ${fmtKc(PRICES.audit)} s auditem webu bez časového omezení. Obě varianty zahrnují písemné shrnutí a plán do 2 dnů. Konzultace probíhá online nebo osobně v Praze.`,
  offers: [
    {
      id: 'questions' as const,
      name: 'Odpovím na vaše otázky',
      duration: '1 hodina',
      gets: 'Odpovědi na vaše otázky k webu a SEO, písemné shrnutí a plán do 2 dnů',
      prefill: `Mám zájem o: Odpovím na vaše otázky (${fmtKc(PRICES.questions)}, 1 hodina).`,
    },
    {
      id: 'audit' as const,
      name: 'Konzultace + audit webu',
      duration: 'Bez časového omezení',
      gets: 'Audit webu, odpovědi na otázky, akční plán na 12 měsíců, písemné shrnutí do 2 dnů',
      prefill: `Mám zájem o: Konzultace + audit webu (${fmtKc(PRICES.audit)}, plán na 12 měsíců).`,
    },
  ],
  table: { head: ['Varianta', 'Cena', 'Délka', 'Co dostanete'] },
  priceCta: 'Mám zájem o službu',

  forWhomTitle: 'Pro koho je SEO konzultace vhodná?',
  forWhom: [
    'Pro majitele firem, kteří chtějí nezávislý pohled na SEO svého webu.',
    'Pro firmy před redesignem webu: co zachovat a na co si dát pozor.',
    'Pro firmy před migrací webu: jak nepřijít o pozice a návštěvnost.',
    'Pro ty, kdo chtějí nejdřív pochopit, co dělat, a až pak se rozhodnout, zda si SEO objednat.',
    'Pro mezinárodní firmy: konzultace probíhá česky, anglicky, rusky nebo ukrajinsky.',
  ],

  includesTitle: 'Co je součástí SEO konzultace',
  includes: <Include[]>[
    { text: 'Rozbor webu před konzultací.' },
    { text: 'Konzultace online nebo osobně v Praze.' },
    { text: 'Písemné shrnutí a akční plán do 2 dnů, seřazený podle priorit.', catalog: 'Písemné shrnutí a akční plán do 2 dnů' },
    { text: 'U varianty s auditem: audit webu a plán na 12 měsíců.', catalog: 'Audit webu a plán na 12 měsíců' },
    { text: 'GEO/AEO: doporučení pro optimalizaci pro AI vyhledávání.', link: { part: 'GEO/AEO', page: 'geo' as const } },
    { text: 'Vícejazyčné SEO a hreflang, pokud web funguje ve více jazycích.', catalog: 'Vícejazyčné SEO a hreflang' },
  ],

  stepsTitle: 'Jak probíhá SEO konzultace',
  // The same strings are shown in the numbered list and emitted as HowToStep text (word for word).
  steps: [
    'Pošlete mi adresu webu a své otázky. Přístup do Google Search Console a GA4 umožní přesnější analýzu.',
    'Rozbor webu před konzultací: připravím se na váš případ.',
    'Společná konzultace online nebo osobně v Praze.',
    'Písemné shrnutí a plán do 2 dnů.',
  ],
  examplesTitle: 'Ukázky konzultací',
  examples: [
    {
      id: 'questions' as const,
      title: `Konzultace za ${fmtKc(PRICES.questions)}: odpovědi na vaše otázky`,
      text: 'Klient se ptá na SEO, já odpovídám. Na snímcích videohovor a zpětná vazba po něm.',
      images: [
        { src: '/images/consulting/call-2000.webp', alt: 'Videohovor SEO konzultace, tvář klienta je znepřístupněna' },
        { src: '/images/consulting/review-2000.webp', alt: 'E-mailová zpětná vazba klienta po SEO konzultaci' },
      ],
    },
    {
      id: 'audit' as const,
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

  languagesTitle: 'V jakých jazycích konzultace probíhá?',
  languages, // identical to the FAQ answer below (one question = one answer)

  compareTitle: 'Konzultace, audit zdarma, nebo Start a Full SEO?',
  compare: {
    audit: { before: '', link: 'Audit zdarma', after: ' ukáže chyby vašeho webu.' },
    consulting: 'Konzultace dá odpovědi na vaše otázky a plán, ale práci neprovádím.',
    packages: {
      start: 'Start na 3 měsíce',
      startPrice: ` (${fmtKc(START_PRICE)}) a `,
      full: 'Full SEO na rok',
      fullPrice: ` (od ${fmtKc(FULLSEO_MONTHLY)} měsíčně) zahrnují realizaci: práci na webu dělám já.`,
    },
    outro: { before: 'Pokud vám stačí plán a odpovědi, vyberte konzultaci. Pokud chcete, aby práci udělal někdo za vás, podívejte se na ', start: 'Start', mid: ' nebo ', full: 'Full SEO', after: '.' },
  },

  caseTitle: 'Co může SEO plán přinést',
  caseText: 'Příklad po realizaci plánu. KB PŘEKLADY: překladatelská agentura, web téměř neměl poptávky. Za první 4 měsíce vzrostl počet poptávek 8×, v létě 24× a agentura se objevila v odpovědích Google AI Overview.',
  caseLink: 'Celý příběh',

  reviewsTitle: 'Co říkají klienti',
  reviewsLink: 'Všechny reference',

  faqTitle: 'Časté otázky o SEO konzultaci',
  faq: [
    { q: 'Kolik stojí SEO konzultace?', a: `${fmtKc(PRICES.questions)} za hodinu, nebo ${fmtKc(PRICES.audit)} s auditem webu bez časového omezení.` },
    { q: 'Jak dlouho konzultace trvá?', a: `${QUESTIONS_HOURS} hodina, nebo bez omezení u varianty s auditem.` },
    { q: 'Probíhá konzultace online, nebo osobně v Praze?', a: 'Obojí: online, nebo osobně v Praze.' },
    { q: 'Co dostanu po konzultaci?', a: 'Písemné shrnutí a plán do 2 dnů.' },
    { q: 'Čím se konzultace liší od Startu na 3 měsíce nebo Full SEO?', a: 'Při konzultaci práci neprovádím, dostanete plán. Start na 3 měsíce a Full SEO zahrnují realizaci.' },
    { q: 'V jakých jazycích konzultace probíhá?', a: languages },
  ],
  faqAll: 'Všechny časté dotazy',

  formTitle: 'Nezávazná poptávka',

  otherTitle: 'Další služby',
  otherAll: 'Všechny služby',
  more: 'Více',
  audit: 'Technický stav webu, klíčová slova, konkurence a viditelnost v AI. Zdarma, do 24 hodin.',
  geo: 'Web, který najde Google i ChatGPT: SEO a optimalizace pro AI vyhledávání v jednom.',

  schema: {
    serviceName: 'SEO konzultace',
    serviceType: 'SEO konzultace',
    audience: 'Majitelé firem, firmy před redesignem nebo migrací webu',
    availableLanguage: ['cs', 'en', 'ru', 'uk'],
    areaServed: [
      { '@type': 'Country', name: 'Česko' },
      { '@type': 'Country', name: 'Spojené státy' },
      { '@type': 'AdministrativeArea', name: 'Evropská unie' },
    ],
    onlineChannel: 'Online',
    cityChannel: 'Osobně v Praze',
    catalogName: 'Co je součástí SEO konzultace',
    howToName: 'Jak probíhá SEO konzultace',
  },
};
