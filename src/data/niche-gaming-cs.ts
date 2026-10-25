// Czech niche landing page /seo-pro-pocitacove-herny-praha/ "SEO a GEO/AEO pro počítačové herny v Praze" (brief of 25.10.2026; cs only, hreflang self-reference only, no x-default). Own structure: how the niche differs
// (page types), what I do (bullets), for whom, local presence (Mapy only linked), audit scope (table + technical checklist), cooperation, FAQ (7). Defaults taken (no answers to the brief's questions): slug as in the
// brief, NO observation block (the 12 viewed sites have no date and no findings), NO link to the audit video of the related niche (the author's decision is open), no "Související články" block, no consultation sentence
// next to the maps. Safety rules: always "počítačová herna / herní klub / gaming klub / esport aréna" (the bare "herna" is never used: gambling ambiguity), nothing about minors, age limits, children's birthdays or safety,
// no competitors / aggregators / booking platforms, no prices, no case in the niche, "2–3 měsíce" only about the author's own projects, "agentura" never about the author, only "SEO a GEO/AEO". Review every 90 days (23. 1. 2027).
import { walk } from '../lib/cs-typo';

// Publication date of this address (the brief: 25. 10. 2026); do NOT bump it when the page is edited.
export const NICHE_GAMING_PUBLISHED = '2026-10-25';
export const GAMING_CAPACITY_DATE = '25. 10. 2026';
export const GAMING_CAPACITY_DATE_RU = '25.10.2026';

const raw = {
  lang: 'cs' as const,
  published: NICHE_GAMING_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  lead: 'Dělám SEO a GEO/AEO pro počítačové herny, herní kluby a esport arény v Praze: technický základ webu, stránky tarifů, rezervací a akcí, odpovědi na časté dotazy a přípravu na doporučení v odpovědích AI. Začíná se bezplatným technickým auditem. Zákazníky ani pozice negarantuji.',
  heroAudit: 'Chci bezplatný technický audit',

  diffTitle: 'Čím se SEO počítačové herny liší od jiných oborů?',
  diffAnswer: 'Zájemce o počítačovou hernu hledá hlavně v okolí a chce rychle zjistit tři věci: kolik to stojí, jak si rezervovat místo a co je v nabídce. Web proto potřebuje samostatné stránky tarifů, vybavení, rezervací a akcí a stejné údaje jako profil na mapách.',
  diffLead: 'Typy stránek, na kterých to stojí:',
  diff: ['tarify a ceník', 'vybavení', 'rezervace', 'akce a firemní akce', 'kontakt, mapa a otevírací hodiny'],

  doTitle: 'Co pro počítačovou hernu dělám?',
  doAnswer: 'Připravím technický základ webu, aby vyhledávače viděly stránky služeb, tarifů, vybavení a akcí. Doplním přímé odpovědi na časté dotazy a strukturu, kterou umí číst i AI. Rezervace řeším jako cíl stránek. Profily na mapách jsou součástí balíčků Start a Full SEO.',
  do: [
    'technický základ webu',
    'stránky tarifů, vybavení a akcí',
    'rezervace jako cíl stránky',
    'FAQ',
    'příprava na GEO/AEO: přímé odpovědi, tabulky, aktuální údaje',
    'profil a recenze na mapách jsou součástí balíčků Start a Full SEO',
  ],
  doLead: 'Rozsah popisují stránky',
  doLinks: [
    { page: 'start' as const, text: 'SEO start na 3 měsíce' },
    { page: 'fullSeo' as const, text: 'Full SEO na rok' },
  ],
  doMapsLink: 'SEO pro Mapy',
  doGeoLead: 'GEO/AEO je součástí každé služby, popisuji ho na stránce',
  doGeoLink: 'SEO a GEO/AEO',

  forTitle: 'Pro koho je to a pro koho ne?',
  forAnswer: 'Služba je pro jednu počítačovou hernu, menší síť klubů nebo esport arénu v Praze, která chce, aby ji zájemci našli na webu i v odpovědích AI. Není pro toho, kdo čeká zaručený počet zákazníků nebo první místo na mapách; to poctivě slíbit nelze.',

  auditTitle: 'Co obsahuje bezplatný audit a co ne?',
  auditAnswer: 'Bezplatný audit je technický: kontroluji indexaci, duplicity a další technické chyby webu. Prezentaci dostanete do 24 hodin, bez hovoru a bez závazku. Nálezy předem neslibuji, liší se web od webu. Nezahrnuje klíčová slova, konkurenci, mapy, viditelnost v AI, rychlost ani mobilní verzi.',
  audit: {
    head: ['Co obsahuje', 'Co neobsahuje'],
    rows: [
      ['indexace', 'klíčová slova'],
      ['duplicity', 'konkurence'],
      ['další technické chyby', 'mapy a viditelnost v AI'],
      ['prezentace do 24 hodin, bez hovoru a bez závazku', 'rychlost a mobilní verze'],
    ],
  },
  auditNote: 'Strukturu, obsah, konverzi a FAQ audit nehodnotí: to řeší placená konzultace nebo balíček Start.',
  auditChecksLead: 'Co se technicky kontroluje na webu počítačové herny:',
  auditChecks: [
    'jsou stránky služeb, tarifů a poboček v indexu',
    'vidí vyhledávač obsah stránek s rezervacemi (widgety, iframe)',
    'nevytváří kalendář a parametry v adrese duplicitní adresy',
    'jsou stránky akcí a jejich staré verze v pořádku',
    'jsou jazykové verze (pokud existují) správně označené',
    'shoduje se název, adresa a telefon na webu (NAP)',
  ],
  auditLead: 'Podrobnosti k auditu najdete na stránce',
  auditLink: 'Bezplatný audit',

  coopTitle: 'Jak spolupráce probíhá?',
  coopAnswer: `Začnete bezplatným technickým auditem. Chcete-li řešit i strukturu a obsah webu, následuje placená konzultace, balíček Start nebo průběžné Full SEO. Rozsah a cenu najdete na stránkách jednotlivých služeb. Pracuji současně nejvýše se třemi firmami z jednoho oboru; k ${GAMING_CAPACITY_DATE} je obor volný.`,
  coopLinks: [
    { page: 'consulting' as const, text: 'SEO konzultace' },
    { page: 'start' as const, text: 'SEO start na 3 měsíce' },
    { page: 'fullSeo' as const, text: 'Full SEO na rok' },
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Zaručíte zákazníky?', a: 'Ne. Zákazníky, pozice ani citování v AI nezaručuji, protože výsledek závisí i na konkurenci, poptávce a rozhodnutích vyhledávačů. Zaručit mohu jen to, co dělám: technický audit, doporučení a práci v dohodnutém rozsahu. První změny u svých projektů vidím obvykle za 2–3 měsíce.' },
    { q: 'Potřebuje počítačová herna web, když má sociální sítě?', a: 'Sociální sítě slouží stávající komunitě, ale ceník, rezervace, adresu a otevírací hodiny najdou noví zájemci snáz na webu. Web zachytí i lidi, kteří hledají v Google nebo na mapách. Co potřebuje konkrétní počítačová herna, záleží na tom, odkud jí dnes zájemci přicházejí.' },
    { q: 'Jak dlouho trvá SEO?', a: 'U mých projektů se první změny obvykle objeví za 2–3 měsíce, bez záruky. Délka závisí na stavu webu, konkurenci a rozsahu prací. V oboru počítačových heren zatím výsledky nemám, proto žádné neuvádím a nic neslibuji. Nejdřív proto doporučuji bezplatný technický audit.' },
    { q: 'Čím se SEO liší od reklamy?', a: 'Reklama přináší návštěvy rychleji, ale jen dokud za ni platíte. SEO se rozbíhá pomaleji, zato web a profily pracují i bez průběžného rozpočtu na kliknutí. Obě cesty lze kombinovat; SEO nenahrazuje reklamu a reklama nenahrazuje pořádek na webu. Co se vyplatí, závisí na rozpočtu a cílech klubu.' },
    { q: 'Zaručíte citování AI?', a: 'Ne. Odpovědi AI nelze zaručit ani objednat. Připravuji web tak, aby byl srozumitelný a dobře čitelný: přímé odpovědi, tabulky, aktuální údaje. Jednou měsíčně ručně testuji otázky vašeho oboru v ChatGPT, Perplexity a Google AI Overview a výsledky zapisuji do logu.' },
    { q: 'Co dělá bezplatný audit u webu s rezervacemi?', a: 'Zkontroluji, zda vyhledávač vidí stránky s rezervacemi, zda widgety a iframe nebrání indexaci a zda kalendář nebo parametry v adrese nevytvářejí duplicity. Nálezy předem neslibuji, liší se web od webu. Do auditu nepatří klíčová slova, konkurence, mapy, viditelnost v AI, rychlost a mobilní verze.' },
    { q: 'Kolik firem z oboru obsluhujete současně?', a: `Pracuji současně nejvýše se třemi firmami z jednoho oboru. Jde o limit mé kapacity, ne o exkluzivitu. K ${GAMING_CAPACITY_DATE} je obor počítačových heren volný. Změní-li se to, údaj na stránce aktualizuji, aby byl vždy platný a stejný ve všech jazykových verzích.` },
  ],

  endTitle: 'Další krok',
  endText: 'Chcete vědět, jestli má váš web technické chyby, které brání indexaci stránek tarifů nebo rezervací? Začněte bezplatným technickým auditem.',
  endCta: 'Chci bezplatný technický audit',

  schema: {
    serviceName: 'SEO a GEO/AEO pro počítačové herny',
    serviceType: 'SEO a GEO/AEO',
    areaServed: 'Praha',
    description: 'SEO a GEO/AEO pro počítačové herny, herní kluby a esport arény v Praze: technický základ webu, stránky tarifů, rezervací a akcí, odpovědi na časté dotazy a příprava na doporučení v odpovědích AI.',
  },
};

export const NICHE_GAMING_CS = walk(raw);
