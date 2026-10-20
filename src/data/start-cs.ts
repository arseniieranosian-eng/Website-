// Czech content of /start-3-mesice/ (brief of 19.10.2026): an adaptation for the Czech market, not a
// translation of the Russian page. Prices come from start-shared.ts / fullseo-shared.ts / maps-shared.ts.
import { fmtKc } from './consulting-shared';
import { START_PAYMENTS, START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { MAPS_MIN_MONTHS } from './maps-shared';
import { CONSULTING_CS } from './consulting-cs';
import { CASE_LINE, TYPO_LINE_CS, EDU_LINE_CS, SEASON_LINE_CS } from './case-summary';

const [PAY1, PAY2] = START_PAYMENTS;
const price = fmtKc(START_PRICE);
const payment = `platba ${fmtKc(PAY1)} na začátku a ${fmtKc(PAY2)} po dohodě`;

interface Include { text: string; link?: { part: string; page: 'geo' }; catalog?: string; inCatalog?: false }

export const START_CS = {
  lang: 'cs' as const,
  h1: 'SEO start na 3 měsíce',
  lead: 'Intenzivní první etapa SEO: po dobu 3 měsíců se naplno věnuji vašemu webu i mapám Google a Mapy.com. Technický audit a opravy, struktura podle poptávky, optimalizace hlavních stránek, měření a týdenní reporty. Jsem SEO specialista v Praze.',
  updatedLabel: 'Aktualizováno',
  badge: `${price} · 3 měsíce · týdenní reporty`,
  heroPrimary: 'Mám zájem o službu',
  heroAudit: 'Audit zdarma',

  priceTitle: 'Kolik stojí SEO start na 3 měsíce?',
  priceAnswer: `SEO start na 3 měsíce stojí ${price}. Platba: ${fmtKc(PAY1)} na začátku a ${fmtKc(PAY2)} po dohodě. V ceně je práce na webu i na mapách Google a Mapy.com, týdenní reporty a call podle zájmu.`,
  // JSON-LD Offer.description: the first FAQ answer without its final period.
  offerTerms: `${price}, ${payment}`,

  forWhomTitle: 'Pro koho je SEO start vhodný?',
  forWhom: [
    'Pro nové weby a e-shopy: SEO pro nový web a pro e-shop od základů.',
    'Pro firmy, které SEO zatím systematicky nedělaly.',
    'Pro weby, které po redesignu ztratily návštěvnost: SEO po redesignu webu.',
  ],

  includesTitle: 'Co je v ceně SEO startu',
  groups: [
    {
      title: 'Práce na webu',
      items: <Include[]>[
        { text: 'Kompletní technický SEO audit a opravy.' },
        { text: 'Analýza klíčových slov a konkurentů.' },
        { text: 'Návrh struktury webu podle poptávky.' },
        { text: 'Optimalizace hlavních stránek.' },
        { text: 'Nastavení GA4 a Google Search Console.' },
      ],
    },
    {
      title: 'Mapy Google a Mapy.com',
      items: <Include[]>[
        {
          text: 'Profily na Google i Mapy.com bez omezení počtu.',
          // Wording of this OfferCatalog item as given in the brief (it merges the three map bullets).
          catalog: 'Profily na Google i Mapy.com bez omezení počtu: hovory, trasy, přechody na web, recenze',
        },
        { text: 'Sledování hovorů, tras a přechodů na web.', inCatalog: false },
        { text: 'Práce s recenzemi.', inCatalog: false },
      ],
    },
    {
      title: 'GEO/AEO a reporting',
      items: <Include[]>[
        { text: 'Optimalizace pro AI vyhledávání (GEO/AEO).', link: { part: 'GEO/AEO', page: 'geo' as const } },
        { text: 'Týdenní report: co je hotovo, proč a jaké jsou výsledky. Call podle zájmu.', catalog: 'Týdenní report' },
      ],
    },
  ],

  mapsTitle: 'Mapy Google a Mapy.com jsou součástí balíčku',
  maps: {
    first: 'Profily na Google i Mapy.com vedu bez omezení počtu, včetně hovorů, tras, přechodů na web a recenzí. Ve Startu jsou mapy součástí širšího balíčku na 3 měsíce. ',
    link: 'Samostatná služba Mapy',
    after: ` je dlouhodobá, od ${MAPS_MIN_MONTHS} měsíců, s platbou za výsledek.`,
  },

  stagesTitle: 'Jak probíhá SEO start',
  // The same strings are shown in the numbered list and emitted as HowToStep name/text (word for word).
  stages: [
    { name: 'Měsíc 1', text: 'Audit, analýza a plán (včetně auditu profilů na mapách).' },
    { name: 'Měsíc 2', text: 'Technické opravy a struktura webu (včetně optimalizace profilů na mapách).' },
    { name: 'Měsíc 3', text: 'Obsah, optimalizace hlavních stránek a vyhodnocení.' },
  ],
  weekly: 'Každý týden dostanete report.',

  resultsTitle: 'Kdy přijdou první výsledky SEO?',
  resultsAnswer: 'První výsledky SEO obvykle přijdou za 2-3 měsíce od začátku spolupráce. Přesný průběh závisí na oboru a konkurenci. Každý týden vidíte v reportu, co je hotovo a jak se mění čísla.',

  guaranteeTitle: 'Garantujete první místo v Google?',
  guaranteeAnswer: 'Ne. První místo v Google nelze poctivě garantovat, protože algoritmy vyhledávačů nikdo neovládá. Garantuji transparentní práci, srozumitelný plán a měřitelné cíle domluvené na začátku.',

  compareTitle: 'Start na 3 měsíce, nebo Full SEO na rok?',
  table: {
    corner: 'Parametr',
    head: ['Start na 3 měsíce', 'Full SEO na rok'],
    rows: [
      ['Délka', '3 měsíce', '12 měsíců'],
      ['Cena', `${price} (${fmtKc(PAY1)} na začátku, ${fmtKc(PAY2)} po dohodě)`, `od ${fmtKc(FULLSEO_MONTHLY)} měsíčně`],
      ['Zaměření', 'Technický základ, struktura webu, optimalizace hlavních stránek, měření', 'Roční strategie, obsah každý měsíc, linkbuilding, čtvrtletní plány, výsledky roku'],
      ['Mapy Google a Mapy.com', 'Ano, bez omezení počtu profilů', 'Ano, bez omezení počtu profilů'],
      ['Reporty', 'Týdenní, call podle zájmu', 'Týdenní, call podle zájmu'],
    ],
  },
  fullLink: 'Full SEO na rok',
  consultingNote: { before: 'Pokud potřebujete jen odpovědi a plán, práci vám neprovedu, ale poradím: ', link: 'konzultace', after: '.' },
  mapsNote: { before: 'Pokud potřebujete jen mapy: ', link: 'samostatná služba Mapy', after: '.' },

  caseTitle: 'Co to přineslo klientům',
  caseText: CASE_LINE.cs,
  caseLink: 'Celý příběh',
  caseText2: TYPO_LINE_CS,
  caseLink2: 'Případová studie SEO pro tiskárnu',
  caseText3: EDU_LINE_CS,
  caseLink3: 'Příklad: SEO pro novou vzdělávací platformu (start nového webu)',
  caseText4: SEASON_LINE_CS,
  caseLink4: 'SEO v nízké sezóně (část 2)',

  reviewsTitle: 'Co říkají klienti',
  reviewsLink: 'Všechny reference',

  faqTitle: 'Časté otázky o SEO startu',
  faq: [
    { q: 'Kolik stojí SEO start na 3 měsíce?', a: `${price}, ${payment}.` },
    { q: 'Jak často dostanu report?', a: 'Týdenní report, call podle zájmu.' },
    { q: 'Kdy přijdou první výsledky?', a: 'Obvykle za 2-3 měsíce.' },
    { q: 'Jsou mapy součástí balíčku?', a: 'Ano, profily na Google i Mapy.com bez omezení počtu, včetně hovorů, tras a recenzí.' },
    { q: 'Čím se liší Start od Full SEO na rok?', a: `Start je intenzivní první etapa na 3 měsíce za ${price}: technický základ, struktura webu a mapy. Full SEO je práce na 12 měsíců podle roční strategie, od ${fmtKc(FULLSEO_MONTHLY)} měsíčně, s obsahem každý měsíc, linkbuildingem a čtvrtletními plány.` },
    { q: 'Garantujete první místo v Google?', a: 'Ne, garantuji transparentní práci a měřitelné cíle.' },
  ],
  faqAll: 'Všechny časté dotazy',

  formTitle: 'Nezávazná poptávka',

  otherTitle: 'Další služby',
  more: 'Více',
  audit: CONSULTING_CS.audit,
  geo: CONSULTING_CS.geo,

  schema: {
    serviceName: 'SEO start na 3 měsíce',
    serviceType: 'SEO optimalizace webu',
    audience: 'Nové weby a e-shopy, firmy bez systematického SEO, weby po redesignu',
    catalogName: 'Co je v ceně SEO startu',
    howToName: 'Jak probíhá SEO start na 3 měsíce',
    availableLanguage: ['cs', 'en', 'ru'],
    areaServed: [
      { '@type': 'Country', name: 'Česko' },
      { '@type': 'Country', name: 'Spojené státy' },
      { '@type': 'AdministrativeArea', name: 'Evropská unie' },
    ],
  },
};
