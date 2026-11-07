// Czech content of the blog article /blog/slabe-seo-konkurence-realitni-kancelare/ (brief of 07.11.2026): why even real-estate agencies with weak SEO stand in front in the results.
// Informational: the author's observations of 07.11.2026 (Praha: 12 sites, "realitní kancelář v Praze"; Brno: 11 sites, "realitní kancelář v Brně"), a hypothesis and what does not follow from them.
// No names of sites / catalogues / portals, no cases, no prices, no legal statements. The criterion "clear short answer" is the author's reader-side assessment, not a measurement and not a Google
// requirement. Sources (Google ranking-systems-guide and ai-features) verified by the author on 07.11.2026 (Last updated 2025-12-10 UTC).
// Differences from the brief's wording (the author's standing rule "no guarantee phrases anywhere", as on the dental pages): the first-person clauses "Výsledek ani pozici nezaručuji" (H2-4)
// and "a nezaručuji" (H2-6 paragraph) are left out; impersonal statements ("Nic z toho nezaručuje pozici", "nelze předem zaručit") stay. K8 (AI line) waits for the author.
// Position "4. místě" only for the one site with all services on one page (H2-1); no position for the site with the problematic URL and none for Brno. The quote (rule J) is a plain blockquote, no Quotation markup.
import { walk } from '../lib/cs-typo';

// First publication of this address (07.11.2026, entered by hand); the date of the measurements is the same day.
export const POST_WEAK_SEO_REALTY_PUBLISHED = '2026-11-07';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/slabe-seo-konkurence-realitni-kancelare.webp', width: 1200, height: 630, alt: 'Ilustrace: mezery na webu realitní kanceláře a její pozice ve výsledcích vyhledávání' },

  lead: 'Vpředu může být i kancelář, jejíž web má podle mého pozorování mezery.',

  prahaTitle: 'Co jsem viděl u webů realitních kanceláří v Praze?',
  prahaAnswer: 'K 7. 11. 2026 jsem si prohlédl 12 webů realitních kanceláří z výsledků pro dotaz „realitní kancelář v Praze“. FAQ chybělo u všech dvanácti, blog u šesti. U všech dvanácti jsem na stránkách služeb nenašel jasnou krátkou odpověď na otázku klienta. Je to můj pozorovací vzorek, ne průzkum trhu.',
  prahaMore: 'U jednoho webu byly všechny služby na jedné stránce; v organických výsledcích stál na 4. místě. U jednoho adresa URL neodpovídala obsahu stránky. Mezi výsledky byly také známé katalogy; do vzorku jsem je nezahrnul.',

  brnoTitle: 'Co jsem viděl u webů realitních kanceláří v Brně?',
  brnoAnswer: 'K 7. 11. 2026 jsem si prohlédl 11 webů realitních kanceláří z výsledků pro dotaz „realitní kancelář v Brně“. FAQ chybělo u všech jedenácti, blog u čtyř. U všech jedenácti jsem na stránkách služeb nenašel jasnou krátkou odpověď na otázku klienta. Je to můj pozorovací vzorek, ne průzkum trhu.',
  brnoMore: 'Praha a Brno jsou dva samostatné vzorky s různým dotazem. Čísla z jiných dnů nebo jiných dotazů nesrovnávám.',

  ratedTitle: 'Podle čeho jsem weby hodnotil?',
  ratedAnswer: 'Hodnotil jsem, co vidí návštěvník: zda má služba vlastní stránku, zda je adresa URL srozumitelná, zda stránka služby odpovídá hned na začátku na otázku klienta a zda je na webu FAQ a blog. Jde o mé hodnocení z pohledu čtenáře, ne o měření ani o požadavek Google. Jde o nedostatky obsahu, ne o technické chyby.',

  whyTitle: 'Proč jsou tyto weby vpředu?',
  whyAnswer: 'Proč jsou tyto weby vpředu, nevím: Google podle své dokumentace používá mnoho signálů. Domněnkou je, že mezi realitními kancelářemi zatím není silný konkurent, který by byl dobře čitelný pro vyhledávače i AI. Mým cílem je, aby jím byl váš web.',
  whyMore: 'V mém vzorku platilo, že weby s těmito mezerami jsou vpředu. To neznamená, že mezery jsou příčinou jejich pozice.',
  sourceLabel: 'Zdroj:',
  whySource: { before: 'Google Search Central, Systémy řazení (ranking systems guide),', href: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', after: ', Last updated 2025-12-10, zkontrolováno 7. 11. 2026.' },
  quote: 'Jedno pozorování není vysvětlení. Je to místo, kde začít hledat.',

  aiTitle: 'Jsou krátké odpovědi a FAQ podmínkou pro AI přehledy Googlu?',
  aiAnswer: 'Ne. Podle dokumentace Google neexistují pro zobrazení v AI Overviews ani AI Mode žádné další požadavky ani zvláštní optimalizace a není potřeba ani zvláštní strukturovaná data schema.org. Jasné krátké odpovědi proto beru jako užitečné pro čtenáře, ne jako podmínku zobrazení.',
  aiSource: { before: 'Google Search Central, AI features and your website,', href: 'https://developers.google.com/search/docs/appearance/ai-features', after: ', Last updated 2025-12-10, zkontrolováno 7. 11. 2026.' },

  checkTitle: 'Jak si web své realitní kanceláře zkontrolovat sám?',
  checkAnswer: 'Projděte stránku každé služby a zeptejte se, zda klient hned najde krátkou odpověď: co služba zahrnuje, pro koho je a jak začít. Zkontrolujte, zda má každá služba vlastní stránku se srozumitelnou adresou URL a zda je na webu FAQ. Nic z toho nezaručuje pozici.',
  checkMore: 'Služby na jedné stránce míchají různé záměry hledání. Samostatná stránka dovolí popsat každou službu konkrétně: co zahrnuje, pro koho je a jak začít. Jak se to projeví na pozici, nevím.',
  checkLink: { before: 'Širší přehled příčin, proč web nepřináší poptávky, najdete v', text: 'samostatném článku', after: '.' },

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Proč je nade mnou realitní kancelář se slabším webem?', a: 'Z vnějšku to nepoznáte. Google podle své dokumentace používá mnoho signálů, takže pozici neurčuje samotný vzhled ani text webu. Ve svém vzorku jsem u webů vpředu viděl mezery, ale nevím, zda s pozicí souvisejí. Nejdřív porovnejte svůj web s tím, co vidíte u konkurence.' },
    { q: 'Jak poznám, jak silná je konkurence realitní kanceláře?', a: 'Spolehlivé číslo nemám. Na svůj hlavní dotaz si můžete projít výsledky a u každého webu poznamenat, zda má stránky služeb, FAQ a blog a zda najdete krátké odpovědi. Takové srovnání ukáže rozdíly mezi weby, ale sílu konkurence ani pozici neměří.' },
    { q: 'Má pro realitní kancelář smysl blog?', a: 'Záleží na tom, zda máte o čem psát a zda články pomáhají odpovídat na otázky klientů. V mém vzorku neměl blog šest z dvanácti pražských a čtyři z jedenácti brněnských webů. Jaký vliv má blog na pozici, z tohoto pozorování nevyplývá.' },
    { q: 'Kdy má smysl začít s SEO?', a: 'Když chcete, aby vás klienti našli přes vyhledávání, a máte kapacitu web průběžně upravovat. Časový rámec ani výsledek nelze předem zaručit. Nejdřív se vyplatí zjistit, zda web nemá technické chyby, například v indexaci nebo duplicitní stránky, a zda klient na webu najde odpovědi.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Chcete, aby byl web vaší realitní kanceláře srozumitelný pro Google i AI?',
  endText: 'Podívejte se na stránku pro své město.',
  endPraha: 'SEO pro realitní kanceláře v Praze',
  endBrno: 'SEO pro realitní kanceláře v Brně',

  schema: {
    about: ['slabé SEO realitních kanceláří', 'realitní kancelář ve vyhledávání', 'web realitní kanceláře', 'FAQ a blog realitní kanceláře'],
  },
};

export const POST_WEAK_SEO_REALTY_CS = walk(raw);
