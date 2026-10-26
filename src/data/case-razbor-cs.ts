// Czech localisation of the Russian review "Разбор сайта агентства недвижимости в Праге" (brief of 26.10.2026): a REVIEW, not a result case. Facts compared with data/case-razbor-ru.ts on 26.10.2026 (item 9 of the brief):
// the case, the dates 23.10.2026 (search results) and 21.–22.10.2026 (presentation), "about three weeks instead of two working days", the three directions, the four findings, the plan structure, "no results", the anonymity
// and the definition of the free audit all agree, so the cs <-> ru hreflang pair is on (ONLY_LANGS). Differences that are not facts: the Czech page has no author quote (no Quotation allowed), four bullets in the last list
// (the Russian page has five), and it names google.cz as the source of the 23.10.2026 observation (confirmed by the author on 26.10.2026). Defaults taken: slug as in the brief, slides described as "originál v ruštině",
// no EN version, the description is 143 characters (not 154) so that the site-wide limit of 150 holds. The word "výsledky" appears where the brief's own texts use it (lead, byline, "Výsledky zatím nejsou", FAQ 5).
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const CASE_RAZBOR_CS_PUBLISHED = '2026-10-26';
// Review every 90 days (next 2027-01-24) and whenever the client's situation changes.

const raw = {
  lang: 'cs' as const,
  published: CASE_RAZBOR_CS_PUBLISHED,
  label: 'Rozbor, ne výsledkový případ',
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  bylineRest: 'Konzultace s auditem, prezentace 21.–22. 10. 2026. Výsledky zatím nejsou.',

  lead: 'Tohle je rozbor webu malé pražské realitní kanceláře z placené SEO konzultace s auditem. Popisuji, co majitel chtěl vědět, co jsem na webu viděl, jaké tři směry jsem navrhl a co zatím nevíme. Výsledky zatím nejsou: majitel dosud nerozhodl o další spolupráci.',

  whoTitle: 'Co chtěl majitel zjistit?',
  whoAnswer: 'Majitel malé pražské realitní kanceláře si objednal placenou SEO konzultaci s auditem a plánem na 12 měsíců. Zajímalo ho, zda se vyplatí investovat do stránky pro ocenění nemovitosti a co od ní realisticky čekat. Název, adresu ani jiné identifikující údaje neuvádím, majitel s anonymním zveřejněním souhlasil.',

  howTitle: 'Jak konzultace s auditem probíhala?',
  howAnswerBefore: 'Konzultace s auditem zahrnuje kontrolu webu, prezentaci bodů růstu, plán na 12 měsíců a navazující hovor. Prezentaci slibuji do dvou pracovních dnů po obdržení webu. V tomto případě rozbor trval zhruba tři týdny a prezentace byla hotová 21.–22. října 2026. Cenu najdete na',
  howLinkText: 'stránce konzultace',

  seenTitle: 'Co jsem na webu viděl?',
  seenAnswer: 'Při konzultaci jsem našel čtyři věci: cíl pro široký dotaz byl pro malou kancelář nereálný, informační články si vedly lépe než cílová stránka, zahraniční poptávka nebyla dobře obsloužena a některé stránky měly technické chyby. K nálezům jsem navrhl úzké dotazy, články, anglickou verzi a opravy.',
  table: {
    head: ['Nález', 'Návrh'],
    rows: [
      ['Cíl: široký dotaz je nereálný', 'úzké dotazy'],
      ['Obsah: články si vedou lépe než cílová stránka', 'články na otázky majitelů'],
      ['Jazyky: zahraniční poptávka je obsloužena špatně', 'anglická verze'],
      ['Technika: chyby na části stránek', 'opravit před spuštěním směrů'],
    ],
  },
  slides: [
    { src: '/images/razbor-slide-1.webp', width: 1067, height: 412, alt: 'Ukázka z prezentace k SEO rozboru: titulní slide' },
    { src: '/images/razbor-slide-2.webp', width: 1072, height: 602, alt: 'Ukázka z prezentace k SEO rozboru: slide s čestným zhodnocením cíle' },
    { src: '/images/razbor-slide-3.webp', width: 1068, height: 592, alt: 'Ukázka z prezentace k SEO rozboru: slide se směry růstu' },
  ],
  slidesCaption: 'Ukázky z prezentace, říjen 2026, údaje klienta skryté, originál v ruštině.',

  rivalsTitle: 'S kým malá kancelář soutěží?',
  rivalsAnswer: 'Podle výsledků vyhledávání z 23. 10. 2026 jsem viděl tři typy konkurentů: specializované projekty navázané na velké firmy, finanční služby s vlastními kalkulačkami a kanceláře s fungující online kalkulačkou. Názvy firem neuvádím. Kancelář proto nesoutěží s ostatními malými kancelářemi, ale s jinými typy webů.',
  rivalsSource: 'Zdroj pozorování: výsledky vyhledávání Google.cz z 23. 10. 2026.',

  chanceTitle: 'Má malá realitní kancelář šanci na dotaz „ocenění nemovitosti“?',
  chanceAnswer: 'Na široký dotaz „ocenění nemovitosti“ je top pozice pro malou kancelář nereálná. Ve viditelných výsledcích z 23. 10. 2026 převažovaly specializované služby a velké projekty a stránka klienta byla hluboko. Šanci mají užší, místní dotazy. Žádnou pozici ale nelze zaručit.',

  dirTitle: 'Které tři směry jsem navrhl?',
  dirAnswer: 'Navrhl jsem tři směry: úzké dotazy s nižší konkurencí, obsah odpovídající na skutečné otázky majitelů nemovitostí a anglickou verzi pro zahraniční kupující a prodávající v Praze. U každého směru je nejdřív potřeba ověřit poptávku. Technické chyby se opravují před spuštěním směrů, ne po něm.',
  directions: [
    { h: 'Úzké a dlouhé dotazy', text: 'Na obecné dotazy je pro malou kancelář těžké soutěžit. Užší a místní dotazy mají nižší konkurenci, proto jsem navrhl hledat cíle tam. Před výběrem dotazu je třeba ověřit poptávku.' },
    { h: 'Obsah odpovídající na otázky majitelů', text: 'Články, které odpovídají na skutečné otázky majitelů nemovitostí, vedou k poptávce. Na webu už fungují lépe než hlavní stránka, proto je vhodné je rozvíjet cíleně.' },
    { h: 'Anglická verze webu', text: 'Zahraniční kupující a prodávající jsou na webu obslouženi slabě a mohou být samostatným cílem. I tady je třeba nejdřív ověřit poptávku.' },
  ],

  planTitle: 'Co obsahuje plán na 12 měsíců?',
  planAnswer: 'Plán na 12 měsíců má tři etapy: opravu technických chyb a úklid stránek, spuštění vybraných směrů a vyhodnocení dat s úpravou postupu. Přesné etapy a načasování závisí na rozhodnutí klienta a na rozpočtu. Plán neslibuje pozice ani poptávky, jen popisuje ověřitelné kroky.',

  unknownTitle: 'Co zatím nevíme?',
  unknownBadge: 'Výsledky zatím nejsou',
  unknownAnswer: 'Majitel zatím nerozhodl o další spolupráci, proto nemám žádné pozice ani poptávky a čísla neuvádím. Nevíme tedy, zda by navržené směry fungovaly. Materiál proto není výsledkový případ, ale popis rozboru. Stránku doplním, pokud klient bude pokračovat a objeví se měřitelná data.',

  anyTitle: 'Co z toho platí pro jinou malou kancelář?',
  anyAnswer: 'Z rozboru platí pro jinou malou kancelář čtyři věci: nejdřív ověřit poptávku, mířit na užší dotazy, odpovídat na skutečné otázky majitelů a opravit technické chyby před spuštěním nového obsahu. Žádný krok nezaručuje pozice. Platí to pro kanceláře podobné velikosti, ale vždy závisí na konkrétním webu.',
  any: [
    'Nejdřív ověřit poptávku.',
    'Mířit na užší dotazy.',
    'Odpovídat na skutečné otázky majitelů.',
    'Opravit technické chyby před spuštěním nového obsahu.',
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Jak se konzultace s auditem liší od auditu zdarma?', a: 'Konzultace je placená a zahrnuje kontrolu webu, prezentaci, plán na 12 měsíců a navazující hovor. Audit zdarma je jiná služba: kontroluje jen technické chyby, například indexaci a duplicity, bez hovoru a bez závazku, s prezentací do 24 hodin. Struktura, obsah a konverze patří do konzultace.', link: 'audit' as const, linkText: 'Technický audit zdarma' },
    { q: 'Může se malá kancelář dostat na top u dotazu „ocenění nemovitosti“?', a: 'Na široký dotaz „ocenění nemovitosti“ je top pozice pro malou kancelář nereálná, protože v hledání převažují velké projekty a specializované služby. Lepší šanci mají užší místní dotazy a obsah, který odpovídá na otázky majitelů. Žádnou pozici ani počet poptávek nelze zaručit.' },
    { q: 'Dává SEO smysl pro každou malou kancelář?', a: 'SEO často pomůže, ale ne vždy. Pokud poptávky přicházejí hlavně z doporučení a z reklamy, může být vyhledávání jen doplňkovým kanálem. Rozhodnutí závisí na webu, oboru a rozpočtu. Proto konzultace u každého navrženého směru začíná ověřením poptávky, ne slibem výsledku.' },
    { q: 'Co obsahuje plán na 12 měsíců?', a: 'Plán na 12 měsíců má etapy s ověřitelnými kroky: opravy webu, spuštění vybraných směrů a vyhodnocení dat. Rozsah a načasování závisí na webu, oboru a rozpočtu. U tohoto klienta zatím práce nezačala, proto čas ani výsledek neuvádím a nic neslibuji.' },
    { q: 'Kdy se objeví první výsledky?', a: 'U tohoto klienta lhůtu uvést nelze, protože práce zatím nezačala. U svých projektů vidím změny obvykle po dvou až třech měsících, ale nezaručuji je. Rychlost závisí na stavu webu, konkurenci a rozsahu změn, proto žádný slib výsledku nedávám ani u tohoto klienta.' },
  ],

  relatedTitle: 'Související stránky',
  related: [
    { key: 'nicheRealty' as const, text: 'SEO pro realitní kanceláře v Praze' },
    { key: 'consulting' as const, text: 'SEO konzultace' },
    { key: 'audit' as const, text: 'Technický audit zdarma' },
    { key: 'cases' as const, text: 'Další případové studie' },
  ],
  ctaTitle: 'Chcete podobný rozbor svého webu?',
  ctaBefore: 'Objednejte si',
  ctaConsulting: 'SEO konzultaci',
  ctaMiddle: 'nebo si nechte udělat',
  ctaAudit: 'technický audit zdarma',

  schema: {
    about: ['rozbor webu realitní kanceláře', 'SEO konzultace s auditem', 'plán na 12 měsíců'],
  },
};

export const CASE_RAZBOR_CS = walk(raw);
