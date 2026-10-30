// v2 of 25.10.2026 (rules A–F): commercial intent only; the PPC objection block and the quote of Yelizaveta Butyrina (written consent, role PPC specialistka, Praha, photo and Instagram of the case page)
// moved to funnel article 4 (open question 11, default), so the landing has NO quote and NO Quotation; the maps block is a short offer. The area is Praha (answer of 25.10.2026).
// v3 of 25.10.2026 (pair with the Russian page): the translation case is removed from the proof line (the Russian page has none; default of the brief), the area Praha is stated, the maps profiles name Firmy.cz.
// Czech niche landing page /seo-pro-obchody-s-elektronikou/ "SEO a GEO/AEO pro obchody s elektronikou: objednávky z Googlu a AI" (brief of 25.10.2026; cs only, hreflang self-reference only, no x-default). Rules A–D of the brief:
// the H1 carries the result but no disclaimer (the disclaimer stands under the H1, in "Pro koho" and in the FAQ); a proof line under the H1 (the translation case, marked as another niche, then "v oboru zatím výsledky nemám");
// commercial FAQ; prices in the cooperation block and in the FAQ come from the single sources of the service pages (consulting-shared / start-shared / fullseo-shared), the date moves with them.
// Answers of 25.10.2026: slug confirmed, the client's consent for the proof line confirmed, the area is PRAHA (Brno gets its own page), the PPC specialist's quote is confirmed by her (Yelizaveta Butyrina, Praha, spelled as on the case page; her photo and
// Instagram are the ones of the case page; she is the owner of the partner agency of the translation case, so the relationship is disclosed). Defaults taken: publication as in the brief, the maps block included, NO observation block (no data), NO "Související články", NO VAT statement (the service pages
// do not say whether the prices include it), the translation-agency client's consent is assumed to cover this line as the case page (open question 9), the audit video is only linked (text link to the example on /audit-zdarma/, described as an example of an e-shop audit, not as a case). No Heureka / Zboží.cz (only "srovnávače"),
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
  heroAudit: 'Chci bezplatný technický audit',

  diffTitle: 'Čím se SEO obchodu s technikou liší od jiných oborů?',
  diffAnswer: 'Obchod s technikou má velký katalog, filtry podle parametrů, varianty produktů a rychle se měnící nabídku. Hlavní práce proto spočívá v tom, aby vyhledávač viděl správné stránky kategorií a produktů a nenarážel na duplicity z filtrů, variant a vyprodaného zboží.',
  diffLead: 'Typy stránek, na kterých to stojí:',
  diff: ['kategorie', 'produktové stránky a jejich varianty', 'filtry a parametry v adrese', 'vyprodané a vyřazené zboží', 'vnitřní vyhledávání'],

  doTitle: 'S čím obchodům s technikou pomáhám',
  doAnswer: 'Kontroluji technický základ e-shopu, aby vyhledávače viděly kategorie, produkty a jejich varianty, a navrhuji strukturu kategorií a filtrů. Doporučuji obsah kategorií a odpovědi na časté dotazy a připravuji web na doporučení v odpovědích AI. Strukturu, texty a značení produktů řeším v placených formátech.',
  doListLead: 'Co dostanete:',
  do: [
    'technická kontrola e-shopu',
    'návrh struktury kategorií a filtrů',
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

  seeTitle: 'Co vidím na webech obchodů s elektronikou a co s tím dělám?',
  seeAnswer: 'K 15. 10. 2026 jsem si prohlédl 12 webů obchodů s elektronikou. Nejčastěji chybí FAQ nebo je nedostatečné, téměř vždy chybí blog, nadpisy nejsou formulované jako otázky a často chybí strukturovaná data. Tyto body nejsou součástí bezplatného auditu, řeší se v konzultaci a v balíčku Start.',
  seeLead: 'Problém a co nabízím:',
  see: [
    'chybí FAQ nebo je nedostatečné → sada otázek a formát odpovědí',
    'chybí blog → struktura blogu a témata článků',
    'nadpisy nejsou otázky → nadpisy sekcí ve formě otázky',
    'chybí strukturovaná data → značení produktů v rámci placené práce',
  ],
  seeLink: 'Rozebrat můj web na konzultaci',

  forTitle: 'Pro koho je to a pro koho ne?',
  forNext: 'Co bezplatný audit obsahuje:',
  forAnswer: 'Služba je pro internetové obchody s elektronikou a technikou v Praze i pro prodejny s e-shopem, které chtějí, aby je zájemci našli v Google a v odpovědích AI. Není pro toho, kdo čeká zaručený počet objednávek nebo první místo ve vyhledávání; to poctivě slíbit nelze.',

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
  auditChecksLead: 'Co technicky zkontroluji na vašem e-shopu:',
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

  mapsTitle: 'Profil prodejny na mapách',
  mapsAnswer: 'Profily prodejny na Google, Mapy.com (Seznam) a Firmy.cz vedu v balíčcích Start a Full SEO: hovory, trasy, přechody na web a recenze. Existuje i samostatná služba Mapy. Do bezplatného auditu mapy nepatří. První místo na mapách nezaručuji. Podrobnosti a podmínky najdete na stránce služby.',
  mapsLead: 'Služba je popsaná na stránce',
  mapsLink: 'SEO pro Mapy',

  coopTitle: 'Jak začít a kolik stojí?',
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
    { q: 'Čím se liší Start od Full SEO?', a: `Start je tříměsíční balíček za ${S}: ${fmtKc(PAY1)} se platí na začátku a ${fmtKc(PAY2)} po dohodě. Full SEO je dlouhodobá práce od ${F} měsíčně podle rozsahu a oboru. Oba formáty zahrnují vedení profilů na Google, Mapy.com a Firmy.cz. Co se vám hodí, ukáže bezplatný audit.` },
    { q: 'Jak vypadá spolupráce krok za krokem?', a: 'Začnete bezplatným technickým auditem. Pokud chcete řešit i strukturu a obsah webu, následuje konzultace a poté balíček Start na 3 měsíce nebo průběžné Full SEO. Rozsah práce upřesníme na konzultaci. První změny u svých projektů vidím obvykle za 2–3 měsíce, bez záruky.' },
    { q: 'Zaručíte objednávky nebo pozice?', a: 'Ne. Počet objednávek ani pozice nezaručuji, protože výsledek závisí i na konkurenci, poptávce a rozhodnutích vyhledávačů. Zaručit mohu jen to, co dělám: technický audit, doporučení a práci v dohodnutém rozsahu.' },
    { q: 'Můžu začít jen konzultací?', a: `Ano. Konzultace za ${Q} je hodina odpovědí na otázky k webu a SEO se stručným písemným shrnutím. Varianta za ${A} zahrnuje audit webu a prezentaci s plánem na 12 měsíců, připravené do 2 pracovních dnů od zaslání webu. Start nebo Full SEO si můžete objednat později.` },
    { q: 'Kolik firem z oboru obsluhujete současně?', a: `Pracuji současně nejvýše se třemi firmami z jednoho oboru. Jde o limit mé kapacity, ne o exkluzivitu. K ${ELECTRONICS_CAPACITY_DATE} je obor obchodů s elektronikou volný. Změní-li se to, údaj na stránce aktualizuji, aby byl vždy platný a stejný ve všech jazykových verzích.` },
  ],

  endTitle: 'Další krok',
  endText: 'Chcete vědět, jestli má váš e-shop technické chyby, které brání indexaci kategorií nebo produktů? Začněte bezplatným technickým auditem.',
  endCta: 'Chci bezplatný technický audit',

  schema: {
    serviceName: 'SEO a GEO/AEO pro obchody s elektronikou',
    serviceType: 'SEO a GEO/AEO',
    areaServed: 'Praha',
    description: 'SEO a GEO/AEO pro obchody s elektronikou a technikou: technický základ e-shopu, kategorie, filtry, varianty produktů, odpovědi na časté dotazy a příprava na doporučení v odpovědích AI.',
  },
};

export const NICHE_ELECTRONICS_CS = walk(raw);
