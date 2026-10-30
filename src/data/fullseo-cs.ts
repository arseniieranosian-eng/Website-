// Czech content of /full-seo/ (brief of 20.10.2026): an adaptation for the Czech market, not a translation of the
// Russian page. Prices come from fullseo-shared.ts / start-shared.ts / maps-shared.ts. The Start comparison table,
// the consultation / maps notes and the KB PŘEKLADY case text are shared with the Start page (one source).
import { fmtKc } from './consulting-shared';
import { FULLSEO_MONTHLY, FULLSEO_MONTHS } from './fullseo-shared';
import { START_PRICE } from './start-shared';
import { MAPS_MIN_MONTHS } from './maps-shared';
import { START_CS } from './start-cs';
import { CONSULTING_CS } from './consulting-cs';

interface Include { text: string; link?: { part: string; page: 'geo' }; catalog?: string }

const from = `od ${fmtKc(FULLSEO_MONTHLY)} měsíčně`;
const startPrice = fmtKc(START_PRICE);

export const FULLSEO_CS = {
  lang: 'cs' as const,
  // The author's quote (after the block named in the brief of 20.10.2026); text word for word in the page and in the Quotation node.
  quote: 'Rok SEO není sprint. Strategie, čtvrtletní priority a nový obsah každý měsíc se sčítají, proto Full SEO dává smysl tam, kde chcete růst dlouhodobě.',
  label: `Délka: ${FULLSEO_MONTHS} měsíců`,
  h1: 'Full SEO na rok',
  lead: 'Celoroční SEO od A do Z: pracuji na vašem webu i mimo něj, vedu profily na mapách Google, Mapy.com a Firmy.cz a každý týden vám ukážu, co je hotovo a jaké jsou výsledky. Jsem SEO specialista v Praze.',
  updatedLabel: 'Aktualizováno',
  badge: `${from} · ${FULLSEO_MONTHS} měsíců`,
  heroPrimary: 'Mám zájem o službu',
  heroAudit: 'Audit zdarma',

  priceTitle: 'Kolik stojí Full SEO na rok?',
  priceAnswer: `Full SEO na rok stojí ${from}. Přesná cena závisí na rozsahu práce a oboru. Cenu upřesním v odpovědi na vaši poptávku a navrhnu rozsah práce podle vašeho rozpočtu.`,
  // JSON-LD Offer.description: the first FAQ answer without its final period.
  offerTerms: `Od ${fmtKc(FULLSEO_MONTHLY)} měsíčně, přesná cena závisí na rozsahu práce a oboru`,

  forWhomTitle: 'Pro koho je Full SEO na rok vhodné?',
  forWhom: [
    'Pro firmy, pro které je web hlavním zdrojem poptávek.',
    'Pro e-shopy a služby v konkurenčních oborech: SEO pro e-shop.',
    'Pro firmy bez vlastního SEO specialisty.',
    'Pro podniky, kterým záleží na hovorech z map Google, Mapy.com a Firmy.cz.',
  ],

  includesTitle: 'Co je v ceně Full SEO na rok?',
  groups: [
    {
      title: 'Práce na webu',
      items: <Include[]>[
        { text: 'SEO audit webu: rychlost, chyby, indexace, struktura, texty.' },
        { text: 'Analýza klíčových slov v Ahrefs, SEMrush a Google Keyword Planner.' },
        { text: 'On-page SEO: nadpisy H1 a H2, meta description, klíčová slova, texty, alt texty obrázků.' },
        { text: 'Obsah každý měsíc: články, stránky služeb, blog. Rozsah volím individuálně podle oboru a konkurence.', catalog: 'Obsah každý měsíc: články, stránky služeb, blog' },
        { text: 'Průběžný technický dohled a monitoring.' },
        { text: 'Analytika v Google Analytics (GA4) a Google Search Console.' },
        { text: 'Roční strategie, čtvrtletní plány priorit a výsledky roku.' },
      ],
    },
    {
      title: 'Práce mimo web',
      items: <Include[]>[
        { text: 'Linkbuilding: publikace, katalogy, PR články, odkazy z jiných webů.' },
        {
          text: 'Vedení profilů na mapách Google, Mapy.com a Firmy.cz (Seznam) bez omezení počtu profilů: hovory, trasy, přechody na web a recenze.',
          // Wording of this OfferCatalog item as given in the brief (differs slightly from the visible sentence).
          catalog: 'Vedení profilů na mapách Google, Mapy.com a Firmy.cz bez omezení počtu profilů: hovory, trasy, přechody na web, recenze',
        },
      ],
    },
    {
      title: 'GEO/AEO a reporting',
      items: <Include[]>[
        { text: 'Optimalizace pro vyhledávače i pro AI (GEO/AEO).', link: { part: 'GEO/AEO', page: 'geo' as const } },
        { text: 'Týdenní report: co je hotovo, proč a jaké jsou výsledky. Call podle zájmu.', catalog: 'Týdenní report' },
      ],
    },
  ],

  mapsTitle: 'Mapy Google, Mapy.com a Firmy.cz jsou součástí balíčku',
  maps: {
    first: 'Profily na Google, Mapy.com a Firmy.cz vedu bez omezení počtu po celou dobu spolupráce, včetně hovorů, tras, přechodů na web a recenzí. Stejně jako ve Startu na 3 měsíce. Pokud potřebujete jen mapy, je tu ',
    link: 'samostatná služba Mapy',
    after: `: od ${MAPS_MIN_MONTHS} měsíců, s platbou za výsledek.`,
  },

  stagesTitle: 'Jak probíhá Full SEO na rok?',
  // The same strings are shown in the numbered list and emitted as HowToStep text (word for word).
  stages: [
    'Audit a roční strategie.',
    'Čtvrtletní plán priorit.',
    'Průběžná práce a týdenní reporty.',
    'Výsledky roku a plán na další rok.',
  ],

  resultsTitle: START_CS.resultsTitle,
  resultsAnswer: START_CS.resultsAnswer,
  guaranteeTitle: START_CS.guaranteeTitle,
  guaranteeAnswer: START_CS.guaranteeAnswer,

  compareTitle: 'Full SEO na rok, nebo Start na 3 měsíce?',
  table: START_CS.table,
  startLink: 'Start na 3 měsíce',
  consultingNote: START_CS.consultingNote,
  mapsNote: START_CS.mapsNote,

  caseTitle: START_CS.caseTitle,
  caseText: START_CS.caseText,
  caseLink: START_CS.caseLink,
  caseText2: START_CS.caseText2,
  caseLink2: START_CS.caseLink2,
  caseText4: START_CS.caseText4,
  caseLink4: START_CS.caseLink4,
  caseText5: START_CS.caseText5,
  caseLink5: START_CS.caseLink5,

  reviewsTitle: START_CS.reviewsTitle,
  reviewsLink: START_CS.reviewsLink,

  // "Související články": posts that help to decide on a year of work and to understand what is checked regularly.
  articlesTitle: 'Související články',
  articlesLead: 'Praktické články o tom, jak vybrat první krok v SEO, jak SEO souvisí s reklamou a jak kontrolovat indexaci.',
  articlesMore: 'Číst článek',
  articles: ['postChoose', 'postAds', 'postSeoAudit', 'postIndexing'] as const,

  faqTitle: 'Časté otázky o Full SEO na rok',
  faq: [
    { q: 'Kolik stojí Full SEO na rok?', a: `Od ${fmtKc(FULLSEO_MONTHLY)} měsíčně, přesná cena závisí na rozsahu práce a oboru.` },
    { q: 'Jak dlouho než uvidím výsledky?', a: 'Obvykle za 2-3 měsíce.' },
    { q: 'Jsou mapy součástí balíčku?', a: 'Ano, profily na Google, Mapy.com a Firmy.cz bez omezení počtu, včetně hovorů, tras a recenzí.' },
    { q: 'Jak často dostanu report?', a: 'Týdenní report, call podle zájmu.' },
    { q: 'Čím se liší Full SEO od Startu na 3 měsíce?', a: `Start je intenzivní první etapa na 3 měsíce za ${startPrice}: technický základ, struktura webu a mapy. Full SEO je práce na 12 měsíců podle roční strategie, ${from}, s obsahem každý měsíc, linkbuildingem a čtvrtletními plány.` },
    { q: 'Garantujete první místo v Google?', a: 'Ne, garantuji transparentní práci a měřitelné cíle.' },
  ],
  faqAll: 'Všechny časté dotazy',

  formTitle: 'Nezávazná poptávka',

  otherTitle: 'Další služby',
  more: 'Více',
  audit: CONSULTING_CS.audit,
  geo: CONSULTING_CS.geo,

  schema: {
    serviceName: 'Full SEO na rok',
    alternateName: 'Celoroční SEO',
    serviceType: 'Komplexní SEO služby',
    audience: 'Firmy, pro které je web hlavním zdrojem poptávek, e-shopy a služby v konkurenčních oborech',
    catalogName: 'Co je v ceně Full SEO na rok?',
    howToName: 'Jak probíhá Full SEO na rok?',
    availableLanguage: ['cs', 'en', 'ru'],
    areaServed: [
      { '@type': 'Country', name: 'Česko' },
      { '@type': 'Country', name: 'Spojené státy' },
      { '@type': 'AdministrativeArea', name: 'Evropská unie' },
    ],
  },
};
