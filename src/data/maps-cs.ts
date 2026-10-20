// Czech content of /mapy/ (keyword brief of 20.10.2026): an adaptation for the Czech market, not a translation of the
// Russian page. Rates and the minimum term come from maps-shared.ts, package prices from start-shared / fullseo-shared.
// No case block and no case link for now (the maps case data has not been provided yet).
import { fmtKc } from './consulting-shared';
import { START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { MAPS_MIN_MONTHS, MAPS_RATES, MAPS_FULL_MONTHLY } from './maps-shared';
import { CONSULTING_CS } from './consulting-cs';

interface Include { text: string; link?: { part: string; page: 'geo' }; catalog?: string }

const term = `${MAPS_MIN_MONTHS} měsíce`;
// Czech labels for the shared rates ("za 10 hovorů" etc.).
const CS_LABEL = { calls: ['Hovory', 'hovorů'], routes: ['Trasy', 'tras'], visits: ['Prokliky na web', 'prokliků'] } as const;
const CS_RATES = MAPS_RATES.map((r) => ({ name: CS_LABEL[r.key][0], unit: `za ${r.qty} ${CS_LABEL[r.key][1]}`, price: r.price }));
const full = fmtKc(MAPS_FULL_MONTHLY);

export const MAPS_CS = {
  lang: 'cs' as const,
  h1: 'Lokální SEO: propagace na Google Maps a Mapy.com',
  lead: 'Propaguji váš byznys v mapách Google a Seznam: optimalizuji profily, sjednocuji údaje o firmě, nastavuji získávání recenzí a sleduji hovory, trasy a prokliky na web. Pracuji na dálku, pro firmy z jakéhokoli města. Platíte za výsledek.',
  updatedLabel: 'Aktualizováno',
  badge: `Platba za výsledek · od ${MAPS_MIN_MONTHS} měsíců · profily bez omezení počtu`,
  heroPrimary: 'Mám zájem o službu',
  heroAudit: 'Audit zdarma',

  priceTitle: 'Kolik stojí propagace na Google Maps a Mapy.com?',
  priceAnswer: `Propagace v mapách se platí za výsledek: platíte za skutečné hovory, trasy a prokliky na web z map. Minimální doba spolupráce je ${term}.`,
  // JSON-LD Offer.description: the visible answer without its final period.
  offerTerms: `Propagace v mapách se platí za výsledek: platíte za skutečné hovory, trasy a prokliky na web z map. Minimální doba spolupráce je ${term}`,
  rates: [
    ...CS_RATES.map((r) => ({ label: `${r.name}:`, text: `${r.unit}, 1 profil`, price: r.price, spec: `${r.name}: ${r.unit}, 1 profil` })),
    {
      label: 'Balíček Full:',
      text: 'Google Maps + Mapy.com (Seznam), všechny metriky a práce s recenzemi, za měsíc, 1 profil',
      price: MAPS_FULL_MONTHLY,
      spec: 'Balíček Full: Google Maps + Mapy.com (Seznam), všechny metriky a práce s recenzemi, za měsíc, 1 profil',
    },
  ],
  ratesNote: 'Platba se počítá za výsledky získané po dobu trvání smlouvy. Výsledek potvrzuje export statistik z map: Google Business Profile i Mapy.com je mají. Balíček Full je výhodnější než sjednávat vše zvlášť. Máte víc poboček? Každý profil se počítá zvlášť. Cena se vždy počítá za 1 profil.',
  priceNote: 'Pokud potřebujete i web, mapy jsou už součástí balíčků Start na 3 měsíce a Full SEO.',
  priceImagesTitle: 'Ceník v přehledu',
  priceImages: [
    { src: '/images/maps/price-slide-1.webp', alt: 'Ceník propagace v mapách: hovory 1 000 Kč za 10, trasy 1 000 Kč za 20, prokliky na web 500 Kč za 10, vždy za 1 profil' },
    { src: '/images/maps/price-slide-2.webp', alt: 'Balíček Full: všechny metriky a práce s recenzemi za 1 800 Kč měsíčně za 1 profil' },
  ],

  forWhomTitle: 'Pro koho je propagace v mapách vhodná?',
  forWhom: [
    'Pro kliniky, salony a restaurace: lidé vybírají místo přes vyhledávání v okolí.',
    'Pro terénní specialisty a servisní služby: záleží na hovorech a pokrytí čtvrtí.',
    'Pro sítě a firmy s více pobočkami: každá pobočka má vlastní profil a vlastní recenze.',
    'Pro obchody a firmy s kamennou provozovnou.',
    'Pro podniky v jakémkoli městě v Česku i v EU: pracuji na dálku.',
  ],

  includesTitle: 'Co je součástí propagace v mapách',
  // The OfferCatalog in JSON-LD is built from these items (first sentence, or the `catalog` wording).
  includes: <Include[]>[
    { text: 'Založení nebo optimalizace profilu Google Business Profile.' },
    { text: 'Profil na Mapy.com a Firmy.cz.' },
    { text: 'Jednotné údaje o firmě (název, adresa, telefon) ve všech katalozích.' },
    { text: 'Systém získávání recenzí a práce s recenzemi na Googlu.' },
    { text: 'Vedení profilů bez omezení počtu.' },
    { text: 'Sledování metrik: hovory, trasy, prokliky na web.' },
    {
      text: 'Zadání pro lokální stránky: struktura a metadata s vysvětlením každého bloku (implementace na vaší straně).',
      catalog: 'Zadání pro lokální stránky: struktura a metadata s vysvětlením každého bloku',
    },
    { text: 'Optimalizace pro AI vyhledávání (GEO/AEO).', link: { part: 'GEO/AEO', page: 'geo' as const } },
    { text: 'Týdenní report, call podle zájmu.', catalog: 'Týdenní report' },
  ],

  metricsTitle: 'Jaké metriky z map sleduji?',
  metricsAnswer: 'Sleduji tři metriky: hovory, trasy a prokliky na web z map. Právě podle nich se počítá výsledek práce.',
  metrics: ['Hovory z map Google a Mapy.com.', 'Trasy k vaší provozovně.', 'Prokliky na web z map.'],
  metricsExtra: 'Navíc: vývoj recenzí a pozic v mapách.',
  branchesTitle: 'Jak vypadá vývoj metrik po pobočkách',
  branchesText: 'Příklad vývoje metrik z map u jednotlivých poboček, od dubna do září.',
  branchImages: [
    { src: '/images/maps/branch-brno.webp', alt: 'Vývoj metrik z map, pobočka Brno: výrazný nárůst přes léto, na podzim mírný pokles nad úrovní dubnového startu' },
    { src: '/images/maps/branch-pardubice.webp', alt: 'Vývoj metrik z map, pobočka Pardubice: hovory i prokliky na web rostou téměř nepřetržitě od dubna do září' },
    { src: '/images/maps/branch-praha.webp', alt: 'Vývoj metrik z map, pobočka Praha: růst na jaře a začátkem léta, vrchol v červnu, na podzim postupný pokles' },
  ],

  localTitle: 'Lokální stránky pro pobočky a provozovny',
  localAnswer: 'Připravím kompletní zadání lokální stránky: strukturu, meta tagy, nadpisy, obsah i mikrodata, a vysvětlím každý blok. Implementace je na straně klienta nebo vývojáře.',
  localIntro: 'Zadání obsahuje:',
  local: [
    'Nadpisy a pořadí bloků stránky.',
    'Meta tagy: title a description.',
    'Vazbu na čtvrť a provozovnu.',
    'Klíčová slova a mikrodata pro každý blok.',
    'Prolinkování s ostatními stránkami webu.',
  ],

  stagesTitle: 'Jak probíhá propagace v mapách',
  // The same strings are shown in the numbered list and emitted as HowToStep text (word for word).
  stages: [
    'Audit stávajících profilů a konkurence.',
    'Optimalizace profilů a katalogů.',
    'Nastavení recenzí a lokálního obsahu.',
    'Týdenní report a sledování pozic v mapách.',
  ],

  resultsTitle: 'Kdy přijdou první výsledky v mapách?',
  resultsAnswer: `Závisí na oboru, konkurenci a výchozí pozici, proto váš případ probereme zvlášť. Minimální doba spolupráce je ${term}. Vývoj hovorů, tras a prokliků vidíte v týdenním reportu.`,
  resultsNote: 'První místo v mapách negarantuji.',

  packsTitle: 'Mapy jsou součástí balíčků Start a Full SEO',
  packs: {
    intro: 'Pokud potřebujete nejen profil, ale i propagaci webu, mapy jsou už zahrnuty: ',
    startLink: 'Start na 3 měsíce',
    startPrice: `, ${fmtKc(START_PRICE)}`,
    mid: ' a ',
    fullLink: 'Full SEO na rok',
    fullPrice: `, od ${fmtKc(FULLSEO_MONTHLY)} měsíčně`,
    outro: '. Profily bez omezení počtu, metriky stejné.',
  },

  reviewsTitle: 'Co říkají klienti',
  reviewsLink: 'Všechny reference',

  faqTitle: 'Časté otázky o propagaci v mapách',
  faq: [
    { q: 'Jak probíhá platba?', a: `Platíte za konkrétní výsledky: ${CS_RATES.map((r) => `${fmtKc(r.price)} ${r.unit}`).join(', ')} — vždy za 1 profil. Výhodnější je balíček Full za ${full} měsíčně, který zahrnuje všechny metriky i práci s recenzemi.` },
    { q: 'Co když mám víc poboček?', a: 'Každý profil (pobočka) se počítá zvlášť.' },
    { q: 'Kolik profilů mohu mít?', a: 'Bez omezení počtu.' },
    { q: 'Jaké metriky sledujete?', a: 'Hovory, trasy, přechody na web, recenze.' },
    { q: 'Jaká je minimální doba spolupráce?', a: `Od ${MAPS_MIN_MONTHS} měsíců.` },
    { q: 'Kdy přijdou první výsledky?', a: 'Závisí na oboru, konkurenci a výchozí pozici.' },
    { q: 'Vytváříte lokální stránky?', a: 'Připravím kompletní zadání: strukturu stránky, meta tagy, nadpisy, obsah i mikrodata. Implementace je na straně klienta nebo vývojáře.' },
    { q: 'Jsou mapy součástí balíčků Start a Full SEO?', a: 'Ano.' },
    { q: 'Pracujete i mimo Prahu?', a: 'Ano, pracuji pro firmy v celém Česku i v zahraničí, práce probíhá na dálku.' },
  ],
  faqAll: 'Všechny časté dotazy',

  formTitle: 'Nezávazná poptávka',

  otherTitle: 'Další služby',
  more: 'Více',
  audit: CONSULTING_CS.audit,
  geo: CONSULTING_CS.geo,

  schema: {
    serviceName: 'Lokální SEO: propagace na Google Maps a Mapy.com',
    serviceType: 'Lokální SEO, propagace v mapách',
    offerName: 'Propagace na Google Maps a Mapy.com',
    audience: 'Firmy s kamennou provozovnou, terénní specialisté a firmy s více pobočkami',
    catalogName: 'Co je součástí propagace v mapách',
    howToName: 'Jak probíhá propagace v mapách',
    availableLanguage: ['cs', 'en', 'ru'],
    areaServed: [
      { '@type': 'Country', name: 'Česko' },
      { '@type': 'Country', name: 'Spojené státy' },
      { '@type': 'AdministrativeArea', name: 'Evropská unie' },
    ],
  },
};
