// Czech niche landing page /seo-pro-obchody-s-elektronikou/ "SEO a GEO/AEO pro obchody s elektronikou: objednávky z Googlu a AI" (brief of 25.10.2026; cs only, hreflang self-reference only, no x-default). Rules A–D of the brief:
// the H1 carries the result but no disclaimer (the disclaimer stands under the H1, in "Pro koho" and in the FAQ); a proof line under the H1 (the translation case, marked as another niche, then "v oboru zatím výsledky nemám");
// commercial FAQ; prices in the cooperation block and in the FAQ come from the single sources of the service pages (consulting-shared / start-shared / fullseo-shared), the date moves with them.
// Defaults taken (no answers to the brief's questions): slug and publication as in the brief, area Česko, the maps block included, NO observation block (no data), NO "Související články", NO VAT statement (the service pages
// do not say whether the prices include it), the translation-agency client's consent is assumed to cover this line as the case page (open question 9), the PPC specialist's quote is NOT published (no name, role or written
// consent: only the 47-word answer; no Quotation), the audit video is only linked (text link to the example on /audit-zdarma/, described as an example of an e-shop audit, not as a case). No Heureka / Zboží.cz (only "srovnávače"),
// no brands / shops / competitors, no guarantees, "agentura" never about the author, only "SEO a GEO/AEO", no Product/Offer, "2–3 měsíce" only about the author's own projects. Review every 90 days and at any price change (23. 1. 2027).
import { walk } from '../lib/cs-typo';
import { fmtKc, PRICES } from './consulting-shared';
import { START_PAYMENTS, START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';

// Publication date of this address (the brief: 25. 10. 2026); do NOT bump it when the page is edited (dateModified comes from git, so it moves with price edits).
export const NICHE_ELECTRONICS_PUBLISHED = '2026-10-25';
export const ELECTRONICS_CAPACITY_DATE = '25. 10. 2026';
const [PAY1, PAY2] = START_PAYMENTS;
const Q = fmtKc(PRICES.questions);
const A = fmtKc(PRICES.audit);
const S = fmtKc(START_PRICE);
const F = fmtKc(FULLSEO_MONTHLY);

const raw = {
  lang: 'cs' as const,
  published: NICHE_ELECTRONICS_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  lead: 'Dělám SEO a GEO/AEO pro obchody s elektronikou a technikou: technický základ e-shopu, kategorie, filtry, varianty produktů, odpovědi na časté dotazy a přípravu na doporučení v odpovědích AI. Začíná se bezplatným technickým auditem, bez hovoru a bez závazku. Počet objednávek ani pozice negarantuji.',
  proofLead: 'Například u',
  proofLink: 'překladatelské agentury',
  proofTail: ', se kterou pracuji od března 2026, rostly poptávky z webu o 65–70 % měsíc po měsíci tři měsíce po sobě. V oboru obchodů s elektronikou zatím výsledky nemám.',
  heroAudit: 'Chci bezplatný technický audit',

  diffTitle: 'Čím se SEO obchodu s technikou liší od jiných oborů?',
  diffAnswer: 'Obchod s technikou má velký katalog, filtry podle parametrů, varianty produktů a rychle se měnící nabídku. Hlavní práce proto spočívá v tom, aby vyhledávač viděl správné stránky kategorií a produktů a nenarážel na duplicity z filtrů, variant a vyprodaného zboží.',
  diffLead: 'Typy stránek, na kterých to stojí:',
  diff: ['kategorie', 'produktové stránky a jejich varianty', 'filtry a parametry v adrese', 'vyprodané a vyřazené zboží', 'vnitřní vyhledávání'],

  doTitle: 'Co pro obchod s technikou dělám?',
  doAnswer: 'Kontroluji technický základ e-shopu, aby vyhledávače viděly kategorie, produkty a jejich varianty, a navrhuji strukturu kategorií a filtrů. Doporučuji obsah kategorií a odpovědi na časté dotazy a připravuji web na doporučení v odpovědích AI. Strukturu, texty a značení produktů řeším v placených formátech.',
  do: [
    'technický základ e-shopu',
    'struktura kategorií a filtrů',
    'doporučení k textům kategorií',
    'FAQ',
    'příprava na GEO/AEO: přímé odpovědi, tabulky, aktuální údaje',
    'strukturovaná data produktů jen jako součást placené práce',
  ],
  doLead: 'Rozsah popisují stránky',
  doLinks: [
    { page: 'start' as const, text: 'SEO start na 3 měsíce' },
    { page: 'fullSeo' as const, text: 'Full SEO na rok' },
  ],
  doGeoLead: 'GEO/AEO je součástí každé služby, popisuji ho na stránce',
  doGeoLink: 'SEO a GEO/AEO',

  forTitle: 'Pro koho je to a pro koho ne?',
  forAnswer: 'Služba je pro internetové obchody s elektronikou a technikou i pro prodejny s e-shopem, které chtějí, aby je zájemci našli v Google a v odpovědích AI. Není pro toho, kdo čeká zaručený počet objednávek nebo první místo ve vyhledávání; to poctivě slíbit nelze.',

  auditTitle: 'Co obsahuje bezplatný audit a co ne?',
  auditAnswer: 'Bezplatný audit je technický: kontroluji indexaci, duplicity a další technické chyby e-shopu. Prezentaci dostanete do 24 hodin, bez hovoru a bez závazku. Nálezy předem neslibuji, liší se web od webu. Nezahrnuje klíčová slova, konkurenci, mapy, viditelnost v AI, rychlost ani mobilní verzi.',
  audit: {
    head: ['Co obsahuje', 'Co neobsahuje'],
    rows: [
      ['indexace', 'klíčová slova'],
      ['duplicity', 'konkurence'],
      ['další technické chyby', 'mapy a viditelnost v AI'],
      ['prezentace do 24 hodin, bez hovoru a bez závazku', 'rychlost a mobilní verze'],
    ],
  },
  auditNote: 'Strukturu, obsah, konverzi, FAQ a značení produktů audit nehodnotí: to řeší placená konzultace nebo balíček Start.',
  auditChecksLead: 'Co technicky zkontrolovat na webu obchodu s technikou:',
  auditChecks: [
    'jsou kategorie a produkty v indexu',
    'nevznikají duplicity z filtrů a parametrů v adrese',
    'jsou varianty produktů a canonical v pořádku',
    'funguje stránkování',
    'jak se chová vyprodané a vyřazené zboží (stavové kódy, přesměrování)',
    'nejsou ve vyhledávači stránky vnitřního vyhledávání',
    'je v pořádku sitemap',
    'jsou jazykové verze (pokud existují) správně označené',
  ],
  auditLead: 'Podrobnosti k auditu najdete na stránce',
  auditLink: 'Bezplatný audit',
  auditExampleLead: 'Příklad, jak vypadá výstup auditu e-shopu:',
  auditExampleLink: 'krátké anonymní video (36 sekund) na stránce auditu',
  auditExampleNote: 'Je to ukázka výstupu auditu, ne případová studie obchodu s technikou.',

  mapsTitle: 'A co obchod s kamennou prodejnou?',
  mapsAnswer: 'Má-li obchod i kamennou prodejnu, řeší se také profil na mapách: stejný název, adresa, telefon a otevírací doba na webu i v profilu. Mapy do bezplatného auditu nepatří; jsou součástí balíčků Start a Full SEO, existuje i samostatná služba Mapy. První místo na mapách nezaručuji.',
  mapsLead: 'Samostatnou službu popisuje stránka',
  mapsLink: 'SEO pro Mapy',

  adsTitle: 'Nestačí obchodu reklama?',
  adsAnswer: 'Reklamní karty produktů ve vyhledávání jsou vidět hned, ale za kliknutí se platí i tehdy, když návštěvník skončí na slabé stránce. Reklama se proto vyplatí spíš tam, kam vede na dobře připravený web s jasnými kategoriemi, produkty a údaji. SEO a reklamu lze kombinovat; jedno druhé nenahrazuje.',

  coopTitle: 'Jak spolupráce probíhá a kolik stojí?',
  coopAnswer: `Začnete bezplatným technickým auditem. Konzultace stojí ${Q} za hodinu nebo ${A} s auditem webu a plánem na 12 měsíců, balíček Start na 3 měsíce ${S}, Full SEO od ${F} měsíčně. Pracuji současně nejvýše se třemi firmami z jednoho oboru; k ${ELECTRONICS_CAPACITY_DATE} je obor volný.`,
  coopLinks: [
    { page: 'consulting' as const, text: 'SEO konzultace' },
    { page: 'start' as const, text: 'SEO start na 3 měsíce' },
    { page: 'fullSeo' as const, text: 'Full SEO na rok' },
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Kolik stojí SEO pro e-shop s elektronikou?', a: `Konzultace stojí ${Q} za hodinu, konzultace s auditem webu a plánem na 12 měsíců ${A}. Balíček Start na 3 měsíce stojí ${S}, Full SEO začíná od ${F} měsíčně podle rozsahu a oboru. Bezplatný technický audit je zdarma. Aktuální ceny najdete na stránkách služeb.` },
    { q: 'Co dostanu po bezplatném auditu a co bude dál?', a: 'Po auditu dostanete prezentaci technických chyb webu do 24 hodin, bez hovoru a bez závazku. Co dál, rozhodnete sami: konzultace, balíček Start nebo Full SEO. Strukturu, obsah, konverzi a FAQ audit neřeší, ty patří do placených formátů. Audit také nezahrnuje klíčová slova, konkurenci, mapy ani viditelnost v AI.' },
    { q: 'Čím se liší Start od Full SEO?', a: `Start je tříměsíční balíček za ${S}: ${fmtKc(PAY1)} se platí na začátku a ${fmtKc(PAY2)} po dohodě. Full SEO je dlouhodobá práce od ${F} měsíčně podle rozsahu a oboru. Oba formáty zahrnují vedení profilů na Google a Mapy.com. Co se vám hodí, ukáže bezplatný audit.` },
    { q: 'Jak vypadá spolupráce krok za krokem?', a: 'Začnete bezplatným technickým auditem. Pokud chcete řešit i strukturu a obsah webu, následuje konzultace a poté balíček Start na 3 měsíce nebo průběžné Full SEO. Rozsah práce upřesníme na konzultaci. První změny u svých projektů vidím obvykle za 2–3 měsíce, bez záruky.' },
    { q: 'Zaručíte objednávky nebo pozice?', a: 'Ne. Počet objednávek ani pozice nezaručuji, protože výsledek závisí i na konkurenci, poptávce a rozhodnutích vyhledávačů. Zaručit mohu jen to, co dělám: technický audit, doporučení a práci v dohodnutém rozsahu. V oboru obchodů s elektronikou zatím výsledky nemám, proto je neuvádím.' },
    { q: 'Můžu začít jen konzultací?', a: `Ano. Konzultace za ${Q} je hodina odpovědí na otázky k webu a SEO se stručným písemným shrnutím. Varianta za ${A} zahrnuje audit webu a prezentaci s plánem na 12 měsíců, připravené do 2 pracovních dnů od zaslání webu. Start nebo Full SEO si můžete objednat později.` },
    { q: 'Kolik firem z oboru obsluhujete současně?', a: `Pracuji současně nejvýše se třemi firmami z jednoho oboru. Jde o limit mé kapacity, ne o exkluzivitu. K ${ELECTRONICS_CAPACITY_DATE} je obor obchodů s elektronikou volný. Změní-li se to, údaj na stránce aktualizuji, aby byl vždy platný a stejný ve všech jazykových verzích.` },
  ],

  endTitle: 'Další krok',
  endText: 'Chcete vědět, jestli má váš e-shop technické chyby, které brání indexaci kategorií nebo produktů? Začněte bezplatným technickým auditem.',
  endCta: 'Chci bezplatný technický audit',

  schema: {
    serviceName: 'SEO a GEO/AEO pro obchody s elektronikou',
    serviceType: 'SEO a GEO/AEO',
    areaServed: 'Česko',
    description: 'SEO a GEO/AEO pro obchody s elektronikou a technikou: technický základ e-shopu, kategorie, filtry, varianty produktů, odpovědi na časté dotazy a příprava na doporučení v odpovědích AI.',
  },
};

export const NICHE_ELECTRONICS_CS = walk(raw);
