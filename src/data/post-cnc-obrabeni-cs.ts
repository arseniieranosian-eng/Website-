// Czech content of the blog article /blog/cnc-obrabeni-co-jsem-zjistil/ (brief of 16.11.2026): the author's dated observation of the first 30 organic results of Google and of Seznam for "CNC obrábění"
// (16.11.2026, laptop, location Praha; Google interface in English). NEUTRAL: no site, firm, catalogue or portal is named; nothing is evaluated; no result or position is promised; no "weak competition", no "Domněnkou".
// The numbers are the author's (from the table of the author, not re-checked here: brief section 7) and must not be changed: 30 + 30 results; Google 24 firm sites (24 domains), 2 catalogues, 2 intermediaries and
// platforms, 2 other; Seznam 22 firm sites (21 domains), 6 catalogues, 2 other; 2 common domains of 51 different; firm sites only: Google 24 (FAQ page 2 + 1 partly, blog 7 + 1, structured data 15, FAQPage 2),
// Seznam 21 (FAQ 4 + 1, blog 3, structured data 10, FAQPage 2); short answer on a service page: Google 20 measurable (5 / 10 / 5), Seznam 6 measurable (1 / 1 / 4), together 26 (6 / 11 / 9).
// NOT used (brief): the author's ratings of Titles / Descriptions of the sites, any criticism of named sites, and indicators for which there is no data (PDF catalogue, request form, language versions, certificates, references).
// If a number changes, change this article (summary, H2-4, table, quote, FAQ, chart) and the block on the landing page /seo-pro-strojirenske-firmy/ together.
// Body links: the three Google sources and, in the closing block, the landing page (rule F: no links to Start, Full SEO, consultation, audit); one quote (rule J, plain blockquote without Quotation markup); ONE button.
// No block "Další články" (there is no other article of the niche yet; the article of another niche is not linked).
import { walk } from '../lib/cs-typo';

// Dates are set by hand (brief of 16.11.2026), not from git.
export const POST_CNC_PUBLISHED = '2026-11-16';
export const POST_CNC_MODIFIED = '2026-11-16';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/cnc-obrabeni-co-jsem-zjistil.webp', width: 1200, height: 630, alt: 'Ilustrace: dvakrát 30 výsledků vyhledávání pro „CNC obrábění“, z nich 24 webů firem na Googlu a 22 na Seznamu' },

  summary: 'K 16. 11. 2026 jsem na Googlu a na Seznamu prošel po 30 výsledcích dotazu „CNC obrábění“. Z katalogů pocházely na Googlu 2 výsledky, na Seznamu 6. Stránku s FAQ mělo 2 z 24 webů firem na Googlu a 4 z 21 na Seznamu. Je to můj pozorovací vzorek, ne průzkum trhu, a nevysvětluje pozice.',

  methodTitle: 'Jak jsem dotaz „CNC obrábění“ zkoumal?',
  methodAnswer: 'Zadal jsem dotaz „CNC obrábění“ na notebooku s polohou Praha dne 16. 11. 2026. Na Googlu (rozhraní v angličtině) i na Seznamu jsem prošel prvních 30 organických výsledků. Je to můj pozorovací vzorek, ne průzkum trhu. Výsledky se mění podle osoby, polohy a času, takže někdo jiný může vidět jiné pořadí.',

  aroundTitle: 'Co se zobrazilo kolem organických výsledků?',
  aroundAnswer: 'Na Googlu byly nad organickými výsledky reklamy, blok Map a přehled AI, na pozici 25 bylo video. Na Seznamu byly nad výsledky reklama a Mapy.com, mezi výsledky 4 a 5 blok se šesti videi. Názvy webů neuvádím. Pořadí se může lišit podle osoby, polohy a času.',

  originTitle: 'Odkud pocházelo 30 výsledků na Googlu a na Seznamu?',
  originAnswer: 'Z 30 výsledků na Googlu bylo 24 z webů firem, 2 z katalogů, 2 od zprostředkovatelů a platforem a 2 jiné (video a článek e-shopu). Na Seznamu bylo 22 výsledků z webů firem, 6 z katalogů a 2 jiné. Společné byly 2 weby z 51 různých.',

  findTitle: 'Co jsem našel na webech firem?',
  findAnswer: 'Stránku s FAQ mělo 2 z 24 webů firem na Googlu a 4 z 21 na Seznamu, blog 7 z 24 a 3 z 21, strukturovaná data 15 z 24 a 10 z 21. Krátkou odpověď nahoře na stránce služby mělo 6 z 26 měřitelných výsledků, částečně ji mělo 11.',
  tableHead: ['Ukazatel', 'Google (24 webů firem)', 'Seznam (21 webů firem)'],
  tableRows: [
    ['Stránka s FAQ: ano / částečně', '2 / 1', '4 / 1'],
    ['Blog: ano / částečně', '7 / 1', '3 / 0'],
    ['Strukturovaná data: ano', '15', '10'],
    ['Značka FAQPage', '2', '2'],
    ['Krátká odpověď na stránce služby (měřitelné výsledky: 20 / 6): ano / částečně / ne', '5 / 10 / 5', '1 / 1 / 4'],
  ],
  tableNote: 'Weby firem jsou stránky firem, které nabízejí CNC obrábění, včetně dodavatelů materiálu a výrobců zařízení se stránkou služby. Blog je sekce webu, na kterou vede menu nebo patička. FAQ je stránka s otázkami a odpověďmi (obecná). Krátká odpověď jsou 2–3 věty nahoře na stránce služby; „částečně“ se nepočítá jako „ano“. Značení počítám podle zdrojového kódu stránky, značení přidané skriptem mohlo zůstat nepovšimnuto.',
  methodLine: 'Metodika a limity: jeden dotaz, jeden den, jedno zařízení (notebook, Praha); výsledky se mění podle osoby, polohy a času.',
  // Stacked bars up to 30; the numbers are those of the origin paragraph (24 / 2 / 4 and 22 / 6 / 2). No site names, no links inside the chart.
  chartCaption: 'Složení 30 výsledků pro „CNC obrábění“, 16. 11. 2026: weby firem, katalogy, ostatní (Google a Seznam).',
  chartLegend: ['weby firem', 'katalogy', 'ostatní'],
  chartRows: [
    { label: 'Google', values: [24, 2, 4] },
    { label: 'Seznam', values: [22, 6, 2] },
  ],
  quote: 'Na Googlu mělo stránku s FAQ 2 z 24 webů firem, na Seznamu 4 z 21. Je to pozorování z jednoho dotazu, ne vysvětlení pozic.',

  notTitle: 'Co z tohoto pozorování nevyplývá?',
  notAnswer: 'Nevyplývá z něj, proč jsou tyto weby vpředu. Nevím to: Google podle své dokumentace používá mnoho signálů (přehled systémů, aktualizováno 10. 12. 2025). Zapisuji jen to, co jsem na stránkách našel a nenašel, a nehodnotím práci jednotlivých webů. Výsledek ani pozici z toho nevyvozuji ani nezaručuji.',
  sourceLabel: 'Zdroj:',
  notSource: { before: 'Google Search Central, Přehled systémů pro řazení výsledků,', href: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', after: ', aktualizováno 10. 12. 2025.' },

  checkTitle: 'Jak si svůj web zkontrolovat sám?',
  checkAnswer: 'Stejné body si můžete projít na webu své firmy. Nejde o návod, jak se dostat na pozici, ale o kontrolní seznam toho, co jsem u vzorku sledoval. Každý krok vychází z jednoho zjištění výše a žádný z nich nezaručuje výsledek ani změnu pozice.',
  checkSteps: [
    'Zkontrolujte, zda stránka služby začíná 2–3 větami o tom, co firma nabízí a pro koho je to určeno.',
    'Ověřte, zda má web stránku s otázkami zákazníků a zda odpovědi existují i u jednotlivých technologií.',
    'Podívejte se, zda adresy služeb obsahují čitelná slova. Google v dokumentaci k URL (aktualizováno 21. 10. 2026) doporučuje čitelná slova místo dlouhých čísel.',
    'Pokud používáte strukturovaná data, ověřte, že odpovídají viditelnému textu na stránce.',
  ],
  checkSource: { href: 'https://developers.google.com/search/docs/crawling-indexing/url-structure', after: ' (aktualizováno 21. 10. 2026)' },

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Proč jsou ve výsledcích vpředu právě tyto weby?', a: 'Z mého pozorování se to zjistit nedá. Proč jsou jednotlivé weby vpředu, nevím: Google podle své dokumentace používá mnoho signálů. Zapisuji jen to, co jsem na stránkách našel a nenašel. Výsledek ani pozici z toho nevyvozuji ani nezaručuji, ani nehodnotím jednotlivé weby.' },
    { q: 'Je blog u webu strojírenské firmy podmínkou?', a: 'Ne. V mém vzorku mělo blog 7 z 24 webů firem na Googlu a 3 z 21 na Seznamu, ale z toho nelze říct, zda blog pomáhá pozici, protože nevím, proč jsou jednotlivé weby vpředu. Blog je rozhodnutí o obsahu webu, ne podmínka, kterou by šlo z tohoto vzorku odvodit.' },
    { q: 'Liší se výsledky Googlu a Seznamu?', a: 'V mém vzorku ano. Z 51 různých webů se v obou výsledcích objevily jen 2, ostatní jen v jednom z nich. Na Seznamu bylo z katalogů 6 z 30 výsledků, na Googlu 2 z 30. Z jednoho dotazu v jeden den to nelze zobecnit.' },
    { q: 'Potřebuje firma zvláštní data pro AI přehledy?', a: 'Google v dokumentaci k AI funkcím (aktualizováno 10. 12. 2025) uvádí, že pro zobrazení v AI Overviews ani v AI Mode nejsou potřeba žádné zvláštní optimalizace ani zvláštní strukturovaná data. V mém vzorku je mělo 15 z 24 webů firem na Googlu a 10 z 21 na Seznamu, příčinu pozice z toho ale vyvodit nelze.' },
  ],

  faqAiSource: { href: 'https://developers.google.com/search/docs/appearance/ai-features' },
  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  endTitle: 'Chcete, aby byl web vaší strojírenské firmy srozumitelný pro Google i AI?',
  endText: 'Podívejte se na stránku SEO pro strojírenské firmy.',
  endCta: 'SEO pro strojírenské firmy',
};

export const POST_CNC_CS = walk(raw);
