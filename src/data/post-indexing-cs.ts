// Czech content of the blog article /blog/jak-zjistit-jestli-je-web-indexovany/ (brief of 21.10.2026), a "how to" article of the
// free-audit funnel. Names of the Search Console items (Kontrola adresy URL, Stránky, Mapy webu, Požádat o indexaci) are working
// names from the brief and must be checked against a live Czech account before publishing. Links to the funnel articles
// 1, 3 and 5 are added when those articles exist. No guarantees about indexing time or audit results. The illustrations are
// drawn pictures (not screenshots) and are labelled "ilustrace".
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_INDEXING_PUBLISHED = '2026-10-21';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',

  cover: { src: '/images/blog/jak-zjistit-indexaci.webp', width: 1200, height: 630, alt: 'Ilustrace: lupa se zelenou fajfkou nad výsledky vyhledávání site:vasedomena.cz' },

  lead: 'Nejrychleji to zjistíte zadáním site:vasedomena.cz do Googlu: uvidíte přibližný počet stránek v indexu. Přesně to ukáže Google Search Console: Kontrola adresy URL u jedné stránky a report Stránky u celého webu. Pokud stránky chybí, bývá příčinou noindex, robots.txt, duplicita nebo canonical.',
  methodsTitle: 'Pět způsobů, jak zkontrolovat indexaci',
  methods: {
    head: ['Způsob', 'Co ukáže', 'Přesnost', 'Potřebujete účet'],
    rows: [
      ['1. site:vasedomena.cz', 'přibližný počet stránek v Googlu', 'přibližná', 'ne'],
      ['2. Kontrola adresy URL', 'stav jedné konkrétní stránky', 'přesná', 'Search Console'],
      ['3. Report Stránky', 'stav všech stránek webu a důvody, proč se některé neindexují', 'přesná', 'Search Console'],
      ['4. Mapy webu', 'kolik odeslaných adres Google zpracoval', 'přesná', 'Search Console'],
      ['5. Bing Webmaster Tools', 'stav webu v Bingu', 'přesná', 'Bing účet'],
    ],
  },
  forWhom: 'Text je pro majitele webu bez technických znalostí. Většinu kontrol zvládnete sami a zdarma. Audit se vyplatí ve chvíli, kdy vidíte, že něco nesedí, ale nevíte co.',

  whatTitle: 'Co znamená, že je web indexovaný?',
  whatAnswer: 'Indexovaný web znamená, že Google stránku našel, přečetl a uložil do svého indexu, takže se může zobrazit ve výsledcích. Stav „nalezeno“ nebo „prolezeno“ ještě neznamená, že je stránka v indexu.',
  whatText: 'Google stránku nejdřív najde (například v mapě webu nebo přes odkaz), pak ji prolezne a přečte a teprve potom ji může zařadit do indexu. Každý z těchto kroků se může zastavit a stránka se pak ve výsledcích neobjeví.',
  whatDupLead: 'Duplicitní obsah je častá příčina, tomu se věnuji v samostatném článku',
  whatDupLinkText: 'Duplicitní obsah',
  whatSymptom: 'Pokud se web nezobrazuje v Googlu vůbec, začněte tímto článkem a pak se vraťte k příčinám.',
  whatSymptomLead: 'Příčiny najdete v článku',
  whatSymptomLinkText: 'Proč se web nezobrazuje v Googlu',

  siteTitle: 'Jak rychle zkontrolovat indexaci pomocí site:?',
  siteAnswer: 'Zadejte do Googlu site:vasedomena.cz. Výsledky ukazují stránky, které Google zná, a číslo u nich je přibližné.',
  siteSteps: [
    'Otevřete Google a zadejte site:vasedomena.cz (bez https:// a bez www).',
    'Podívejte se, zda se zobrazují hlavní stránky (úvodní, služby, kontakt).',
    'Konkrétní stránku zkontrolujte zadáním site:vasedomena.cz/adresa-stranky/.',
  ],
  siteText: 'Počet výsledků je jen přibližný, takže na něm nestavte závěry o přesném počtu stránek. Když se nenajde nic, nemusí jít o chybu: u úplně nového webu je to běžné. Pokud nevidíte žádné výsledky vůbec, pokračujte v Google Search Console.',

  gscTitle: 'Jak zjistit indexaci přesně v Google Search Console?',
  gscAnswer: 'V Google Search Console zjistíte stav jedné stránky přes Kontrolu adresy URL a stav celého webu v reportu Stránky. Obojí je zdarma, stačí ověřit vlastnictví webu.',
  gscBlocks: [
    {
      h3: 'Kontrola jedné stránky',
      howTo: 'Zkontrolujte stránku v Kontrole adresy URL',
      steps: [
        'Vložte adresu stránky do horního pole.',
        'Přečtěte si stav: „Adresa URL je v Googlu“ nebo „Adresa URL není v Googlu“.',
        'Přečtěte si důvod, který Google u stránky uvádí.',
      ],
    },
    {
      h3: 'Report Stránky',
      howTo: 'Otevřete report Stránky',
      steps: [
        'Otevřete Indexování → Stránky.',
        'Porovnejte počet indexovaných a neindexovaných stránek.',
        'Otevřete seznam důvodů pod grafem.',
      ],
    },
    {
      h3: 'Mapy webu',
      howTo: 'Odešlete mapu webu',
      steps: [
        'Otevřete Mapy webu.',
        'Odešlete adresu sitemap.xml.',
        'Sledujte stav a počet zpracovaných adres.',
      ],
    },
  ],
  gscNoAccess: 'Pokud nemáte přístup do Search Console, přidejte web jako vlastnost a ověřte vlastnictví. Data za minulá období se hned nezobrazí a první údaje přijdou až o něco později.',

  bingTitle: 'Dá se indexace zkontrolovat i v Bingu?',
  bingAnswer: 'Ano, v nástroji Bing Webmaster Tools. Bing využívají i některé AI nástroje, takže indexace v Bingu může pomoci jejich viditelnosti, ale nic nezaručuje.',
  bingText: 'Web do Bing Webmaster Tools přidáte například importem z Google Search Console a potom sledujete stav stránek. Jak SEO a GEO/AEO funguje a proč záleží na obou, vysvětluji na samostatné stránce.',
  bingLinkText: 'Jak SEO a GEO/AEO funguje',

  whyTitle: 'Proč se stránka neindexuje?',
  whyAnswer: 'Nejčastěji ji blokuje značka noindex, soubor robots.txt, canonical na jinou stránku, duplicita nebo slabý obsah. Podle reportu Stránky poznáte, který případ je váš.',
  whyList: [
    'noindex: stránka sama říká Googlu, aby ji nezařazoval.',
    'robots.txt: soubor zakazuje Googlu stránku číst.',
    'canonical na jinou stránku: Google bere za hlavní jinou adresu.',
    'duplicitní obsah: podobných stránek je víc a Google vybírá jednu.',
    'slabý nebo prázdný obsah: stránka nemá co nabídnout.',
  ],
  whyText: 'U každé stránky se důvod liší a odpověď je v reportu Stránky.',

  oftenTitle: 'Jak často kontrolovat indexaci?',
  oftenAnswer: 'Po spuštění nového webu, po každé větší změně (redesign, změna adres, nové sekce) a pak zhruba jednou měsíčně. Každý den to hlídat nemusíte.',
  quote: 'Indexaci nemusíte hlídat každý den. Stačí ji projít po každé větší změně webu a pak jednou měsíčně.',

  fixTitle: 'Co dělat, když to nesedí?',
  fixAnswer: 'Nejdřív zjistěte důvod v reportu Stránky, opravte, co jde, a u důležitých stránek požádejte o indexaci. Pokud si nejste jistí, co vidíte, pomůže bezplatný audit.',
  fixSteps: [
    'Zjistěte důvod u konkrétní stránky (postup je výše).',
    'Opravte zjevné příčiny (noindex, robots.txt, canonical).',
    'U důležitých stránek použijte „Požádat o indexaci“ v Kontrole adresy URL.',
    'Počkejte několik dnů až týdnů a zkontrolujte znovu.',
  ],
  bridge: 'Pokud si nejste jistí, co v reportu vidíte, bezplatný audit ukáže technické chyby webu: indexaci, duplicity a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  newSiteLead: 'Pokud jde o nový web, jak dlouho čekat a co udělat hned po spuštění, najdete v článku',
  newSiteLinkText: 'Nový web nevidí Google',
  redesignLead: 'Pokud web ztratil návštěvnost po změně webu, zkontrolujte postup v článku',
  redesignLinkText: 'Po redesignu klesla návštěvnost',
  auditArticleLead: 'Co bezplatný audit zahrnuje a čím se liší od širšího, vysvětluji v článku',
  auditArticleLink: 'Co je SEO audit',
  cta: 'Chci audit zdarma',

  faqTitle: 'Časté otázky o indexaci webu',
  faq: [
    { q: 'Za jak dlouho se nová stránka objeví v Googlu?', a: 'Od několika dnů po několik týdnů; záleží na webu a na tom, jak snadno ji Google najde. Odeslání mapy webu a žádost o indexaci v Search Console mohou proces urychlit, ale nic nezaručují.' },
    { q: 'Proč je v site: méně stránek, než mám?', a: 'Číslo u site: je přibližné a Google do indexu nezařadí vždy všechny stránky. Přesnější údaj najdete v reportu Stránky v Google Search Console.' },
    { q: 'Stačí poslat mapu webu?', a: 'Mapa webu pomáhá Googlu stránky najít, ale indexaci nezaručuje. Stránku může stále blokovat noindex, robots.txt nebo duplicita.' },
    { q: 'Musím platit za indexaci?', a: 'Ne. Zařazení do indexu Googlu je zdarma a Google Search Console je také zdarma.' },
  ],

  endTitle: 'Nevíte, kde je příčina?',
  endText: 'Když poznáte symptomy, ale nevíte, kde je příčina, podívám se na technické chyby webu.',
  nextText: 'Další krok: duplicitní obsah, co to je a jak ho poznat (článek připravuji).',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  // Drawn illustrations (not screenshots), labelled "ilustrace"
  figures: [
    { kind: 'site' as const, aria: 'Ilustrace: výsledky vyhledávání po zadání site:vasedomena.cz', caption: 'Ilustrace: výsledky po zadání site:vasedomena.cz (nejde o skutečný web).' },
    { kind: 'inspect' as const, aria: 'Ilustrace: Kontrola adresy URL v Google Search Console se stavem „Adresa URL je v Googlu“', caption: 'Ilustrace: Kontrola adresy URL, stav jedné stránky (zjednodušené, ne skutečný snímek obrazovky).' },
    { kind: 'pages' as const, aria: 'Ilustrace: report Stránky v Google Search Console s grafem indexovaných a neindexovaných stránek a seznamem důvodů', caption: 'Ilustrace: report Stránky, počet indexovaných a neindexovaných stránek a důvody (hodnoty jsou ukázkové).' },
    { kind: 'sitemaps' as const, aria: 'Ilustrace: Mapy webu v Google Search Console se stavem odeslané mapy sitemap.xml', caption: 'Ilustrace: odeslaná mapa webu a její stav (zjednodušené, hodnoty jsou ukázkové).' },
  ],

  schema: {
    about: ['indexace webu v Googlu', 'kontrola indexace', 'Google Search Console', 'operátor site:'],
    mentions: ['Google Search Console', 'Bing Webmaster Tools'],
    howToName: 'Jak zjistit, jestli je web indexovaný v Googlu',
    siteHowTo: 'Zadejte site:vasedomena.cz do Googlu',
  },
};

export const POST_INDEXING_CS = walk(raw);
