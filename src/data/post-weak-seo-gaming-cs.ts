// Czech content of the blog article /blog/slabe-seo-konkurence-pocitacove-herny/ (brief C3 of 07.11.2026, published 08.11.2026): why even computer clubs with weak SEO stand in front in the results.
// Informational: the author's observations of 07.11.2026 (one query "počítačová herna praha", mobile browser, Prague, English interface, one day; 11 sites of the clubs themselves, catalogues excluded), a hypothesis and
// what does not follow from them. No names of clubs / catalogues / portals, no review counts or ratings, no prices, no cases, no periods. Sources (Google ranking-systems-guide and ai-features) verified on 07.11.2026
// (Last updated 2025-12-10 UTC). The word "herna" alone (also a casino in Czech) is used only in the line under the H1 (as the brief allows) and in the body, never in the title, H1, H2 or FAQ questions.
// The structured-data sentence is "ve zdrojovém kódu jsem nenašel" (manual Ctrl+U search), never "značení není". The sentences "Výsledek ani pozici nezaručuji" (H2-4, approved verbatim by the author in this brief)
// and "a nezaručuji" (H2-6 paragraph) are inserted verbatim as the brief says; note that the earlier dental, realty and FAQ articles omit such first-person clauses. K8 (AI line) waits for the author.
import { walk } from '../lib/cs-typo';

// First publication of this address (08.11.2026, entered by hand); the date of the measurements is 07.11.2026.
export const POST_WEAK_SEO_GAMING_PUBLISHED = '2026-11-08';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/slabe-seo-konkurence-pocitacove-herny.webp', width: 1200, height: 630, alt: 'Ilustrace: mezery na webu počítačové herny a její pozice ve výsledcích vyhledávání' },

  lead: 'Vpředu může být i herna, jejíž web má podle mého pozorování mezery.',

  seenTitle: 'Co jsem viděl ve výsledcích pro dotaz „počítačová herna praha“?',
  seenAnswer: 'K 7. 11. 2026 jsem v mobilním prohlížeči s polohou Praha zadal dotaz „počítačová herna praha“. Nad organickými výsledky byla placená reklama, AI Overview s výčtem heren, u kterého byl jako zdroj uveden katalog, a blok map s hodnocením heren. Teprve pod nimi následovaly organické výsledky.',
  seenMore: 'Rozhraní prohlížeče bylo v angličtině, což mohlo vzhled výsledků ovlivnit. Šlo o jeden dotaz, jedno zařízení a jeden den. Názvy heren a katalogů neuvádím.',

  sitesTitle: 'Co jsem viděl u 11 webů počítačových heren?',
  sitesAnswer: 'Z těchto výsledků jsem prohlédl 11 webů samotných heren, katalogy jsem nezahrnul. FAQ chybělo u deseti webů, u jednoho bylo, ale všechny rubriky byly pohromadě. Blog chyběl u všech jedenácti, osm webů mělo všechny služby na jedné stránce. Je to můj pozorovací vzorek, ne průzkum trhu.',
  sitesMore: 'U všech jedenácti jsem na stránkách nenašel jasnou krátkou odpověď na otázku zákazníka. Ve zdrojovém kódu stránek jsem strukturovaná data nenašel; hledal jsem je ručně, proto jsem nemohl zachytit data, která stránka přidává skriptem až po načtení.',

  ratedTitle: 'Podle čeho jsem weby hodnotil?',
  ratedAnswer: 'Hodnotil jsem, co vidí zákazník: zda má služba nebo akce vlastní stránku, zda je adresa URL srozumitelná, zda stránka odpovídá hned na začátku na otázku zákazníka a zda je na webu FAQ a blog. Jde o mé hodnocení z pohledu zákazníka, ne o měření ani o požadavek Google.',

  whyTitle: 'Proč jsou tyto weby vpředu?',
  whyAnswer: 'Proč jsou tyto weby vpředu, nevím: Google podle své dokumentace používá mnoho signálů. Domněnkou je, že mezi počítačovými hernami zatím není silný konkurent, který by byl dobře čitelný pro vyhledávače i AI. To může být příležitost, ale ne jistota. Mým cílem je, aby jím byl váš web. Výsledek ani pozici nezaručuji.',
  whyMore: 'V mém vzorku platilo, že weby s těmito mezerami jsou vpředu. To neznamená, že mezery jsou příčinou jejich pozice. Další domněnka: některé herny mohou být vpředu díky sociálním sítím a pověsti, ve výsledcích jsem viděl blok map s hodnocením. Nemám to ověřené a nelze to brát jako příčinu.',
  sourceLabel: 'Zdroj:',
  whySource: { before: 'Google Search Central, Systémy řazení (ranking systems guide),', href: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', after: ', Last updated 2025-12-10, zkontrolováno 7. 11. 2026.' },
  quote: 'Nad weby stojí ve vyhledávání reklama, AI a mapy. Web je jedna z cest, jak si vás zákazník najde.',

  aiTitle: 'Jsou krátké odpovědi, FAQ a strukturovaná data podmínkou pro AI přehledy Googlu?',
  aiAnswer: 'Ne. Podle dokumentace Google neexistují pro zobrazení v AI Overviews ani AI Mode žádné další požadavky ani zvláštní optimalizace a není potřeba ani zvláštní strukturovaná data schema.org. Chybějící FAQ a značení proto beru jen jako pozorování, ne jako příčinu ani jako podmínku zobrazení.',
  aiSource: { before: 'Google Search Central, AI features and your website,', href: 'https://developers.google.com/search/docs/appearance/ai-features', after: ', Last updated 2025-12-10, zkontrolováno 7. 11. 2026.' },

  checkTitle: 'Jak si web své počítačové herny zkontrolovat sám?',
  checkAnswer: 'Projděte stránku každé služby a zeptejte se, zda zákazník hned najde krátkou odpověď: co služba zahrnuje, pro koho je a jak začít. Zkontrolujte, zda má každá služba nebo akce vlastní stránku se srozumitelnou adresou URL a zda je na webu FAQ. Nic z toho nezaručuje pozici.',
  checkMore: 'Služby a akce na jedné stránce míchají různé záměry hledání. Samostatná stránka dovolí popsat každou z nich konkrétně: co zahrnuje, pro koho je a jak začít. Jak se to projeví na pozici, nevím a nezaručuji.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Proč je nade mnou počítačová herna se slabším webem?', a: 'Z vnějšku to nepoznáte. Google podle své dokumentace používá mnoho signálů, takže pozici neurčuje samotný vzhled ani text webu. Ve svém vzorku jsem u webů vpředu viděl mezery, ale nevím, zda s pozicí souvisejí. Nejdřív porovnejte svůj web s tím, co vidíte u konkurence.' },
    { q: 'Jak poznám, jak silná je konkurence počítačové herny?', a: 'Spolehlivé číslo nemám. Na svůj hlavní dotaz si můžete projít výsledky a u každého webu poznamenat, zda má stránky služeb, FAQ a blog a zda najdete krátké odpovědi. Takové srovnání ukáže rozdíly mezi weby, ale sílu konkurence ani pozici neměří.' },
    { q: 'Má pro počítačovou hernu smysl blog?', a: 'Záleží na tom, zda máte o čem psát a zda články pomáhají odpovídat na otázky zákazníků. V mém vzorku neměl blog ani jeden z jedenácti webů. Jaký vliv má blog na pozici, z tohoto pozorování nevyplývá, ani že je blog podmínkou.' },
    { q: 'Kdy se SEO pro počítačovou hernu hodí?', a: 'SEO se hodí, když chcete, aby vás zákazníci našli přes vyhledávání, a máte kapacitu web průběžně upravovat. Čas ani výsledek nelze zaručit. Nejdřív se vyplatí zjistit, zda web nemá technické chyby, například v indexaci nebo duplicitní stránky, a zda zákazník najde odpovědi.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Chcete vědět, co SEO pro počítačovou hernu v Praze obnáší?',
  endText: 'Podívejte se na stránku pro počítačové herny v Praze.',
  endCta: 'SEO pro počítačové herny v Praze',

  schema: {
    about: ['slabé SEO počítačových heren', 'počítačová herna ve vyhledávání', 'web počítačové herny', 'FAQ a blog počítačové herny'],
  },
};

export const POST_WEAK_SEO_GAMING_CS = walk(raw);
