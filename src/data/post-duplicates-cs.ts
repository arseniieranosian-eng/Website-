// Czech content of the blog article /blog/duplicitni-obsah/ (brief of 21.10.2026), level 2 of the free-audit funnel ("looks for a
// diagnosis"). The thesis "Google obvykle nepenalizuje automaticky" is always worded with "obvykle". Canonical is given as a
// recommendation to Google, not a command. The free audit checks technical duplicates on the author's own site: plagiarism on
// other sites and keyword cannibalisation are out of scope (stated twice). Names of the Search Console statuses and of the CMS
// settings are working names to check on live accounts. No author story is invented (the optional anonymous experience is not
// used). The pictures are drawn illustrations ("ilustrace"). Links to funnel articles 2 (redesign) and 3 are added when they exist.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_DUPLICATES_PUBLISHED = '2026-10-21';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/duplicitni-obsah.webp', width: 1200, height: 630, alt: 'Ilustrace: dvě stejné stránky na různých adresách a lupa' },

  lead: 'Duplicitní obsah znamená, že se stejný nebo velmi podobný text objeví na více adresách. Google obvykle vybere jednu verzi a ostatní nezařadí, takže se může zobrazit jiná stránka, než chcete. Poznáte ho v Search Console a vyřešíte přesměrováním, canonical nebo úpravou obsahu.',
  forWhom: 'Text je pro majitele webu, který se dozvěděl o „duplicitách“ a neví, co to znamená. Duplicity většinou vznikají bez čí viny, jen z toho, jak web funguje. Najdete tu příčiny, způsob kontroly a řešení.',

  whatTitle: 'Co je duplicitní obsah?',
  whatAnswer: 'Duplicitní obsah je stejný nebo velmi podobný obsah dostupný na více adresách, uvnitř jednoho webu nebo mezi weby.',
  whatText: 'Většinou jde o duplicity uvnitř jednoho webu: stejná stránka se otevře na dvou adresách. Duplicity mezi weby vznikají, když se stejný text objeví na více doménách. Nejde o kanibalizaci klíčových slov ani o plagiát, to jsou jiná témata.',

  causesTitle: 'Jaké jsou nejčastější příčiny duplicit?',
  causesAnswer: 'Nejčastěji jde o stejnou stránku na více adresách: s www a bez www, přes http a https nebo s lomítkem a bez něj. Dalšími zdroji jsou parametry v URL a archivy v redakčním systému.',
  causes: {
    head: ['Příčina', 'Příklad', 'Řešení'],
    rows: [
      ['www a bez www', 'vasedomena.cz a www.vasedomena.cz', 'přesměrování 301 na jednu verzi'],
      ['http a https', 'dvě verze stejné adresy', 'přesměrování 301 na https'],
      ['Lomítko na konci', '/sluzba a /sluzba/', 'přesměrování 301 na jednu podobu'],
      ['Parametry v URL', 'filtry, řazení, UTM', 'canonical na hlavní verzi'],
      ['Stránkování a tiskové verze', '/strana-2/, tisk', 'canonical nebo noindex podle účelu'],
      ['Štítky, kategorie a archivy (WordPress)', 'stejné články na více adresách', 'noindex nebo vypnutí archivů v nastavení'],
      ['Testovací nebo vývojový web v indexu', 'kopie webu na jiné doméně', 'uzavřít přístup a noindex'],
      ['Podobné stránky', 'dvě stránky o stejné službě', 'sloučit a přesměrovat'],
    ],
  },
  causesNote: 'Příklady jsou ilustrační; názvy nastavení v administraci se mohou lišit.',

  harmTitle: 'Proč duplicity webu škodí?',
  harmAnswer: 'Google obvykle nepenalizuje web automaticky, ale vybere jednu verzi a ostatní nezařadí. Může tak vybrat jinou stránku, než chcete, a signály se dělí mezi víc adres.',
  harm: [
    'Ve výsledcích se může zobrazit nechtěná verze stránky.',
    'Důležitá stránka se nemusí zařadit do indexu.',
    'Signály (odkazy, návštěvy) se dělí mezi adresy.',
  ],
  harmIndexLead: 'Jak zjistit, co Google zařadil, vysvětluji v článku',
  harmIndexLinkText: 'Jak zjistit, jestli je web indexovaný v Googlu',
  harmText: 'Zaručit konkrétní dopad nelze, záleží na webu.',

  spotTitle: 'Jak duplicity poznat?',
  spotAnswer: 'Nejrychleji pomůže Search Console a ruční kontrola adres. Zadejte do Googlu část textu v uvozovkách s site:vasedomena.cz, otevřete obě verze adresy a podívejte se do reportu Stránky.',
  spotSteps: [
    'Zadejte do Googlu site:vasedomena.cz "část textu stránky v uvozovkách" a podívejte se, kolik adres se objeví.',
    'Otevřete www a bez www, http a https a zkontrolujte, zda se přesměrují na jednu verzi.',
    'V Search Console otevřete Indexování → Stránky a projděte důvody, které zmiňují duplicitu nebo kanonickou adresu.',
    'Porovnejte adresy se stejným obsahem a rozhodněte, která má být hlavní.',
  ],

  spotHowToName: 'Jak poznat duplicitní obsah',
  spotStepNames: ['Vyhledejte část textu přes site:', 'Zkontrolujte verze adresy', 'Projděte report Stránky', 'Rozhodněte o hlavní adrese'],

  fixTitle: 'Jak duplicity vyřešit?',
  fixAnswer: 'Řešení závisí na situaci: stejnou stránku na více adresách sjednotíte přesměrováním 301, podobné stránky označíte canonical a nepotřebné stránky vyřadíte přes noindex.',
  fix: {
    head: ['Problém', 'Řešení', 'Poznámka'],
    rows: [
      ['Stejná stránka na více adresách', 'přesměrování 301 na hlavní adresu', 'stará adresa přestane fungovat samostatně'],
      ['Podobné stránky, které mají zůstat dostupné', 'canonical na hlavní verzi', 'Google canonical bere jako doporučení, ne příkaz'],
      ['Stránky, které nemají být ve výsledcích', 'noindex', 'stránka zůstane dostupná, ale nezařadí se'],
      ['Stránky o stejném tématu', 'sloučit a přesměrovat', 'jedna silnější stránka místo dvou slabších'],
      ['Jazykové verze', 'správné označení jazykových verzí (hreflang)', 'každá verze má vlastní adresu'],
    ],
  },
  fixText: 'Po opravě Google web projde znovu. V reportu Stránky pak zkontrolujte, zda se statusy změnily.',
  quote: 'Duplicity většinou nevznikají záměrně: jde o stejný obsah na dvou adresách. Důležité je Googlu jasně říct, kterou verzi má vybrat.',

  redirectLead: 'Jak přesměrování 301 správně nastavit a ověřit, vysvětluji v článku',
  redirectLinkText: 'Přesměrování 301 a chyby 404',
  redesignLead: 'Duplicity často vzniknou při změně webu, o tom je článek',
  redesignLinkText: 'Po redesignu klesla návštěvnost',

  fearTitle: 'Kdy se duplicit nemusíte bát?',
  fearAnswer: 'Drobné přirozené duplicity, například právní text nebo varianty produktu, obvykle nevadí, pokud je hlavní adresa jasně označená.',
  fearText: 'Cílem není mít na webu nulu podobných textů, ale aby Google věděl, kterou verzi má vybrat. Nemusíte kvůli tomu přepisovat vše, co se trochu opakuje.',

  indexTitle: 'Jak souvisejí duplicity s indexací?',
  indexAnswer: 'Duplicita bývá častým důvodem, proč Google stránku nezařadí do indexu. Pokud se web v Googlu nezobrazuje, je to jedna z věcí ke kontrole.',
  indexLead1: 'Další příčiny, proč se web v Googlu nezobrazuje, najdete v článku',
  indexLink1: 'Proč se můj web nezobrazuje v Googlu',
  indexLead2: 'Obecný postup, jak zjistit, co je v indexu, vysvětluji v článku',
  indexLink2: 'Jak zjistit, jestli je web indexovaný v Googlu',
  bridge: 'Pokud nevíte, jestli má váš web duplicity, bezplatný audit ukáže technické chyby: indexaci, duplicity a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  border: 'Plagiát na cizích webech ani kanibalizaci klíčových slov bezplatný audit neřeší.',
  cta: 'Chci audit zdarma',

  faqTitle: 'Časté otázky o duplicitním obsahu',
  faq: [
    { q: 'Penalizuje Google duplicitní obsah?', a: 'Obvykle ne. Google většinou vybere jednu verzi a ostatní nezařadí; problém bývá v tom, že vybere jinou, než chcete. Opisování cizího obsahu je jiná věc.' },
    { q: 'Je duplicita to samé jako plagiát?', a: 'Ne. Duplicita je technický jev uvnitř webu nebo mezi adresami, plagiát je opsání cizího textu. Bezplatný audit kontroluje technické duplicity na vašem webu, ne plagiáty na jiných webech.' },
    { q: 'Je canonical totéž co přesměrování?', a: 'Ne. Přesměrování 301 pošle návštěvníky i Google na jinou adresu, zatímco canonical jen doporučí Googlu hlavní verzi a stránka zůstane dostupná.' },
    { q: 'Za jak dlouho Google duplicity zpracuje?', a: 'Od několika dnů po několik týdnů po opravě; záleží na velikosti webu a na tom, jak často ho Google navštěvuje. Nic nezaručuje.' },
  ],

  endTitle: 'Nevíte, jestli má váš web duplicity?',
  endText: 'Když si nejste jistí, jestli váš web duplicity má, podívám se na technické chyby webu.',
  nextLead: 'Další krok:',
  nextLinkText: 'Co je SEO audit a co obsahuje',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  figures: [
    { kind: 'addresses' as const, aria: 'Ilustrace: tři adresy téže stránky (http, https a https s www)', caption: 'Ilustrace: tři adresy téže stránky, které Google bere jako samostatné (zjednodušené, ne skutečný snímek obrazovky).' },
    { kind: 'dupreport' as const, aria: 'Ilustrace: report Stránky v Search Console s důvody týkajícími se duplicit', caption: 'Ilustrace: report Stránky s důvody týkajícími se duplicit (hodnoty jsou ukázkové).' },
  ],

  schema: {
    about: ['duplicitní obsah', 'duplicitní obsah SEO', 'canonical', 'přesměrování 301', 'noindex'],
  },
};

export const POST_DUPLICATES_CS = walk(raw);
