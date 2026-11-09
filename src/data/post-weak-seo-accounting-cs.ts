// Czech content of the blog article /blog/slabe-seo-konkurence-ucetni-kancelare/ (brief of 02.11.2026): why an accounting firm with a weak site can stand in front in the results.
// Informational: the author's observation (25. 10. 2026, 10 sites, query "účetní kancelář" without a city [?Q1 default]) and a hypothesis, no proof of a cause.
// Decisions from the author's standing rules, which override the brief: no guarantee phrases anywhere (the sentences "Výsledek ani pozici nezaručuji" of H2-4 and of the closing block are not written, FAQ f4 "Stačí k prvnímu místu dobré SEO?"
// is not written, f3 has no "termín neslibuji"). S1: "podle své dokumentace" is kept on the strength of the author's confirmation of the same wording for the dental page (the Google page was not reachable from the build
// environment). S3/Q2: no AI Overview sentence (no confirmed wording). Q3 defaults: FAQ = no separate answers to clients' questions on the service pages or no FAQ page; AI structure = no structured data and an unclear structure of the service pages.
// The brief's f2 variant without the audit is used (rule F). No links in the body; the closing block has two equal buttons (the author's exception to rule H) to the Prague and Brno niche pages.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_WEAK_SEO_ACC_PUBLISHED = '2026-11-02';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/slabe-seo-konkurence-ucetni-kancelare.webp', width: 1200, height: 630, alt: 'Ilustrace: výsledky vyhledávání pro dotaz „účetní kancelář“ s webem vpředu, kterému chybí blog a FAQ, a otazník nad příčinou' },

  lead: 'Níže jsou moje pozorování výsledků vyhledávání pro dotaz „účetní kancelář“, hypotéza a to, co z ní nevyplývá.',

  seenTitle: 'Co jsem viděl u prvních výsledků pro „účetní kancelář“?',
  seenAnswer: 'K 25. 10. 2026 jsem si prohlédl 10 webů z prvních výsledků pro dotaz „účetní kancelář“. U všech 10 je FAQ nedostatečné, u 9 z 10 chybí blog a u všech 10 je web špatně strukturovaný pro AI. Je to můj pozorovací vzorek, ne průzkum trhu. Názvy webů neuvádím.',
  seenMore: 'FAQ jsem považoval za nedostatečné, když na stránkách služeb chyběly samostatné odpovědi na otázky klientů nebo když web neměl stránku s častými otázkami. Špatnou strukturu pro AI jsem určil podle chybějících strukturovaných dat a nejasné struktury stránek služeb.',

  whatTitle: 'Co z toho plyne a co ne?',
  whatAnswer: 'V mém vzorku platilo, že weby s těmito nedostatky jsou ve výsledcích vpředu. To neznamená, že je to příčina. Google používá mnoho signálů a z deseti webů, jednoho dotazu a jednoho data nelze odvozovat obecné pravidlo. Jde o pozorování, které nemusí platit pro jiný dotaz ani pro jiné město.',

  checkTitle: 'Jak si svůj web zkontrolovat sám?',
  checkAnswer: 'Porovnejte svůj web s tím, co jsem sledoval: má každá služba vlastní stránku s čitelnou adresou, jsou na webu odpovědi na časté otázky, existuje blog a jsou použita strukturovaná data? Je to kontrolní seznam pozorovaných věcí, ne návod na pozici. Otázky účetnictví a daní tady nerozebírám.',

  whyTitle: 'Proč jsou tyto weby vpředu?',
  whyAnswer: 'Proč jsou tyto weby vpředu, nevím: Google podle své dokumentace používá mnoho signálů. Domněnkou je, že mezi účetními kancelářemi zatím není silný konkurent, který by byl dobře čitelný pro vyhledávače i AI. Mým cílem je, aby jím byl váš web.',
  // Source line added on 09.11.2026 (retro-audit P1, K4): the weak-competition sentence stays only with a dated observation block and a visible Google source; the page was opened on 07.11.2026.
  whySource: { before: 'Google Search Central, Systémy řazení (ranking systems guide),', href: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', after: ', Last updated 2025-12-10, zkontrolováno 7. 11. 2026.' },

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Proč je nade mnou konkurence se slabším webem?', a: 'Může to mít více důvodů a z vnějšku je spolehlivě nezjistíte. Google používá mnoho signálů a každý dotaz i město se může chovat jinak. V mém pozorování byly vpředu weby s viditelnými nedostatky, ale z toho nevyplývá příčina. Proto ji neodhaduji.' },
    { q: 'Jak poznám, jak silná je konkurence?', a: 'Zkuste si projít prvních deset výsledků pro svůj dotaz a všímejte si, zda mají služby vlastní stránky, FAQ, blog a strukturovaná data. To je jen hrubé srovnání, ne měření síly. Přesnější obrázek dá samostatná analýza konkurence.' },
    { q: 'Kdy má smysl začít s SEO?', a: 'Smysl to má, když chcete poptávky z vyhledávání a jste ochotni web průběžně doplňovat. Rozhodnutí nechávám na vás: nejdřív si web projděte a zhodnoťte, co chybí.' },
  ],

  // The author's quote (brief of 02.11.2026: every article about weak competition carries one quote derived from a paragraph).
  quote: 'To, že mají weby vpředu nedostatky, ještě neznamená, že jsou jejich příčinou: z deseti webů nelze odvozovat obecné pravidlo.',
  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Chcete, aby byl web vaší účetní kanceláře srozumitelný pro Google i AI?',
  endText: 'Podívejte se na stránku pro své město.',
  ctas: [
    { page: 'nicheAccounting' as const, label: 'SEO pro účetní kanceláře v Praze' },
    { page: 'nicheAccountingBrno' as const, label: 'SEO pro účetní kanceláře v Brně' },
  ],
};

export const POST_WEAK_SEO_ACC_CS = walk(raw);
