// Czech content of the blog article /blog/slabe-seo-konkurence-zubni-ordinace/ (the slug stays; brief of 15.11.2026): the author's dated observation of the first 30 organic results of Google and of Seznam for
// "stomatologie v Praze" (15.11.2026, laptop, location Praha; Google interface in Russian), rewritten as a NEUTRAL observation: it replaces the earlier text of 31.10.2026 (14 sites), which contradicted the new sample.
// No site, clinic, catalogue or portal is named; nothing is evaluated; no result or position is promised; no "weak competition", no "Domněnkou". The numbers are the author's (from the table of the author, not re-checked
// here: brief section 8) and must not be changed: 30 + 30 results; Google 25 results of clinic sites (24 domains), 2 catalogues, 3 institutions; Seznam 17 / 12 / 1; 8 common, 46 different; clinic sites only:
// Google 24 (FAQ page 7 + 1 partly, blog 12 + 3, structured data 17, FAQPage 2), Seznam 17 (FAQ 3, blog 8 + 1, structured data 11, FAQPage 1); short answer on a service page: 10 measurable results, "ano" 0.
// If a number changes, change this article (summary, H2-4, table, quote, FAQ), the section of the article about the channels and the block on the landing page /seo-pro-zubni-ordinace-praha/ together.
// Medical / legal / price statements: none (YMYL niche); text about treatment must be approved by the doctor of the practice (step 2 of the checklist). Body links: the three Google sources and, in the closing block,
// the landing page (rule F: no links to Start, Full SEO, consultation, audit, maps); one quote (rule J, plain blockquote without Quotation markup); the closing block has ONE button.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited.
export const POST_WEAK_SEO_DENTAL_PUBLISHED = '2026-11-04';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/slabe-seo-konkurence-zubni-ordinace.webp', width: 1200, height: 630, alt: 'Ilustrace: dvakrát 30 výsledků vyhledávání pro „stomatologie v Praze“, z nich 25 webů ordinací na Googlu a 17 na Seznamu' },

  summary: 'K 15. 11. 2026 jsem na Googlu a na Seznamu prošel po 30 výsledcích dotazu „stomatologie v Praze“. Z katalogů pocházely na Googlu 2 výsledky, na Seznamu 12. Stránku s FAQ mělo 7 z 24 webů ordinací na Googlu a 3 z 17 na Seznamu. Je to můj pozorovací vzorek, ne průzkum trhu, a nevysvětluje pozice.',
  updateNote: 'Aktualizace 15. 11. 2026: původní pozorování z 31. 10. 2026 (14 webů) jsem nahradil širším vzorkem z Googlu a Seznamu.',

  methodTitle: 'Jak jsem dotaz „stomatologie v Praze“ zkoumal?',
  methodAnswer: 'Zadal jsem dotaz „stomatologie v Praze“ na notebooku s polohou Praha dne 15. 11. 2026. Na Googlu (rozhraní v ruštině) i na Seznamu jsem prošel 30 organických výsledků. Je to můj pozorovací vzorek, ne průzkum trhu. Výsledky se mění podle osoby, polohy a času, takže někdo jiný může vidět jiné pořadí.',

  aroundTitle: 'Co se zobrazilo kolem organických výsledků?',
  aroundAnswer: 'Na Googlu byl nad organickými výsledky přehled AI a reklamy, za prvním organickým výsledkem blok Map. Na Seznamu byly nad výsledky reklama a Mapy.com, mezi výsledky 2 a 3 přehled Seznam AI. Názvy webů neuvádím. Pořadí se může lišit podle osoby, polohy a času.',

  originTitle: 'Odkud pocházelo 30 výsledků na Googlu a na Seznamu?',
  originAnswer: 'Z 30 výsledků na Googlu bylo 25 z webů ordinací a klinik (24 webů), 2 z katalogů a 3 z institucí, například nemocnice nebo pojišťovny. Na Seznamu bylo 17 výsledků z webů ordinací a klinik, 12 z katalogů a 1 z instituce. Společných bylo 8 webů ze 46 různých.',

  findTitle: 'Co jsem našel na webech zubních ordinací?',
  findAnswer: 'Stránku s FAQ mělo 7 z 24 webů ordinací na Googlu a 3 z 17 na Seznamu, blog 12 z 24 a 8 z 17, strukturovaná data 17 z 24 a 11 z 17. Jasnou krátkou odpověď na stránce služby neměl žádný z 10 sledovaných výsledků, částečně ji mělo 3.',
  tableHead: ['Ukazatel', 'Google (24 webů)', 'Seznam (17 webů)'],
  tableRows: [
    ['Stránka s FAQ: ano / částečně', '7 / 1', '3 / 0'],
    ['Blog: ano / částečně', '12 / 3', '8 / 1'],
    ['Strukturovaná data: ano', '17', '11'],
    ['Značka FAQPage', '2', '1'],
    ['Krátká odpověď na stránce služby (měřitelné výsledky: 4 / 6): ano / částečně / ne', '0 / 2 / 2', '0 / 1 / 5'],
  ],
  tableNote: 'Blog je sekce webu, na kterou vede menu nebo patička. FAQ je stránka s otázkami a odpověďmi (obecná). Krátká odpověď jsou 2–3 věty nahoře na stránce služby; „částečně“ se nepočítá jako „ano“. Značení počítám podle zdrojového kódu stránky, značení přidané skriptem mohlo zůstat nepovšimnuto.',
  methodLine: 'Metodika a limity: jeden dotaz, jeden den, jedno zařízení (notebook, Praha); výsledky se mění podle osoby, polohy a času.',
  // D1 (brief of 15.11.2026): stacked bars up to 30; the numbers are those of the table (25 / 2 / 3 and 17 / 12 / 1). No site names, no links inside the chart.
  chartCaption: 'Složení 30 výsledků pro „stomatologie v Praze“, 15. 11. 2026: weby ordinací, katalogy, instituce (Google a Seznam).',
  chartLegend: ['weby ordinací', 'katalogy', 'instituce'],
  chartRows: [
    { label: 'Google', values: [25, 2, 3] },
    { label: 'Seznam', values: [17, 12, 1] },
  ],
  quote: 'Na stránce služby neměl jasnou krátkou odpověď žádný z 10 sledovaných výsledků. Je to pozorování z jednoho dotazu, ne vysvětlení pozic.',

  notTitle: 'Co z tohoto pozorování nevyplývá?',
  notAnswer: 'Nevyplývá z něj, proč jsou tyto weby vpředu. Nevím to: Google podle své dokumentace používá mnoho signálů (přehled systémů, aktualizováno 10. 12. 2025). Zapisuji jen to, co jsem na stránkách našel a nenašel, a nehodnotím práci jednotlivých webů. Výsledek ani pozici z toho nevyvozuji ani nezaručuji.',
  sourceLabel: 'Zdroj:',
  notSource: { before: 'Google Search Central, Přehled systémů pro řazení výsledků,', href: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', after: ', aktualizováno 10. 12. 2025.' },

  checkTitle: 'Jak si svůj web zkontrolovat sám?',
  checkAnswer: 'Stejné body si můžete projít na webu své ordinace. Nejde o návod, jak se dostat na pozici, ale o kontrolní seznam toho, co jsem u vzorku sledoval. Každý krok vychází z jednoho zjištění výše a žádný z nich nezaručuje výsledek ani změnu pozice.',
  checkSteps: [
    'Zkontrolujte, zda máte stránku s dotazy pacientů a zda existují odpovědi i u jednotlivých služeb.',
    'Na stránce služby ověřte, zda nahoře stojí 2–3 věty o tom, co služba je a pro koho je. Text o léčbě musí schválit lékař ordinace.',
    'Podívejte se, zda adresy služeb obsahují čitelná slova. Google v dokumentaci k URL (aktualizováno 21. 10. 2026) doporučuje čitelná slova místo dlouhých čísel.',
    'Pokud používáte strukturovaná data, ověřte, že odpovídají viditelnému textu na stránce.',
  ],
  checkSource: { href: 'https://developers.google.com/search/docs/crawling-indexing/url-structure', after: ' (aktualizováno 21. 10. 2026)' },

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Proč jsou ve výsledcích vpředu právě tyto weby?', a: 'Z mého pozorování se to zjistit nedá. Proč jsou jednotlivé weby vpředu, nevím: Google podle své dokumentace používá mnoho signálů. Zapisuji jen to, co jsem na stránkách našel a nenašel. Výsledek ani pozici z toho nevyvozuji ani nezaručuji.' },
    { q: 'Je blog u webu zubní ordinace podmínkou?', a: 'Ne. V mém vzorku mělo blog 12 z 24 webů ordinací na Googlu a 8 z 17 na Seznamu, ale z toho nelze říct, zda blog pomáhá pozici, protože nevím, proč jsou jednotlivé weby vpředu. Blog je rozhodnutí o obsahu webu, ne podmínka, kterou by šlo z tohoto vzorku odvodit.' },
    { q: 'Liší se výsledky Googlu a Seznamu?', a: 'V mém vzorku ano. Z 46 různých webů se v obou výsledcích objevilo jen 8, ostatní jen v jednom z nich. Na Seznamu bylo z katalogů 12 z 30 výsledků, na Googlu 2 z 30. Z jednoho dotazu v jeden den to nelze zobecnit.' },
    { q: 'Potřebuje ordinace zvláštní data pro AI přehledy?', a: 'Google v dokumentaci k AI funkcím (aktualizováno 10. 12. 2025) uvádí, že pro zobrazení v AI Overviews ani v AI Mode nejsou potřeba žádné zvláštní optimalizace ani zvláštní strukturovaná data. V mém vzorku je mělo 17 z 24 webů ordinací na Googlu a 11 z 17 na Seznamu, příčinu pozice z toho ale vyvodit nelze.' },
  ],

  faqAiSource: { href: 'https://developers.google.com/search/docs/appearance/ai-features' },
  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  endTitle: 'Chcete, aby byl web vaší zubní ordinace srozumitelný pro Google i AI?',
  endText: 'Podívejte se na stránku SEO pro zubní ordinace.',
  endCta: 'SEO pro zubní ordinace v Praze',
  moreTitle: 'Další články',
  moreMore: 'Číst článek',
};

export const POST_WEAK_SEO_DENTAL_CS = walk(raw);
