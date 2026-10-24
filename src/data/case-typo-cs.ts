// Czech content of /pripadove-studie/seo-tiskarna/ (brief of 20.10.2026): an adaptation of the Russian print-shop case, not a
// translation. Same figures and the same single source (case-summary.ts): 1 200 → 10 500 visits a month, +775 % (8,75×),
// July 2024 → July 2025. The client (name, domain) appears nowhere. NOT used: +777 %, YoY, +55 % / +64 % a month, leads,
// calls, revenue, "30 % of the potential", "crawl budget", crawler names. Open points of the brief are handled neutrally:
// the January 2024 starting traffic, the exact data source, the author's role on the landing pages and example queries
// for the keyword table are not stated, so none of them is invented. Czech number format: non-breaking space in numbers
// and before %, comma as the decimal mark (applied by nb() below).
import { CASE_TYPO_PUBLISHED } from './case-typo-ru';
import { TYPO_FORMULA_CS } from './case-summary';

export { CASE_TYPO_PUBLISHED };

// Non-breaking space inside 4-digit-group numbers ("1 200", "10 500") and before the percent sign ("775 %").
const nb = (s: string) => s.replace(/(\d) (?=\d{3}(?!\d))/g, '$1 ').replace(/ %/g, ' %');

const raw = {
  lang: 'cs' as const,
  label: 'Případová studie · Tiskárna',
  h1: 'SEO pro tiskárnu: organická návštěvnost vzrostla 8,75× za 12 měsíců',
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  project: 'Projekt: tiskárna, leden 2024 – červenec 2025',
  answer: 'Za 12 měsíců (červenec 2024 → červenec 2025) vzrostla organická návštěvnost webu tiskárny z 1 200 na 10 500 návštěv měsíčně, tedy o 775 % (8,75×). Nejdřív jsem odstranil technické překážky, pak postavil architekturu dotazů podle komerčního záměru a spustil 20+ vstupních stránek.',
  cards: [
    { value: '1 200 → 10 500', label: 'návštěv za měsíc' },
    { value: '+775 %', label: 'růst návštěvnosti' },
    { value: '8,75×', label: 'kolikrát více' },
    { value: '12 měsíců', label: 'červenec 2024 → červenec 2025' },
  ],
  dataNote: 'Název klienta nezveřejňuji. Čísla jsou reálná, zdroj: data analytiky webu (Google Search Console nebo měřicí nástroj webu). Projekt běžel na ruskojazyčném webu pro ruskojazyčný trh.',
  heroCta: 'Chci audit zdarma',

  startTitle: 'Jaká byla výchozí situace webu?',
  startAnswer: 'V lednu 2024 neměl web tiskárny systematickou architekturu klíčových slov a na klíčových stránkách byla porušená hierarchie nadpisů a rozbité odkazy.',
  problems: [
    'porušená hierarchie nadpisů (přeskakování H1 → H3) na klíčových stránkách;',
    'rozbité odkazy;',
    'žádná systematická architektura klíčových slov.',
  ],
  startText: 'Web fungoval, ale Google špatně rozuměl jeho struktuře a stránky nebyly navázané na dotazy, u kterých lidé objednávají tisk.',

  techTitle: 'Co jsem udělal v prvních 30 dnech?',
  techAnswer: 'Provedl jsem technický crawl webu spolu s daty z Google Search Console, opravil rozbité odkazy a obnovil hierarchii nadpisů. Dokud je web pro Google technicky nečitelný, jakýkoli obsah funguje hůř.',
  techSteps: [
    'technický crawl webu + Google Search Console;',
    'oprava rozbitých odkazů;',
    'obnova hierarchie nadpisů (H1 → H2 → H3 bez přeskakování) na klíčových stránkách.',
  ],

  keysTitle: 'Jak jsem postavil architekturu klíčových slov podle komerčního záměru?',
  keysAnswer: 'Nesbíral jsem seznam frekventovaných slov, ale mapu dotazů podle prodejního trychtýře: které stránky prodávají, které zahřívají a které odpovídají na námitky. Každý dotaz dostal svou stránku a svůj úkol.',
  keysTable: {
    head: ['Typ stránky', 'Úkol'],
    rows: [
      ['Prodejní', 'dovést k objednávce'],
      ['Zahřívací', 'porovnat možnosti, vysvětlit'],
      ['Odpovídající na námitky', 'cena, termíny, podklady'],
    ],
  },

  landingTitle: 'Proč 20+ vstupních stránek a jak jsou postavené?',
  landingAnswer: 'Spustil jsem více než 20 SEO vstupních stránek na WordPressu. Každá cílí na jeden komerční dotaz s vysokým vyhledáváním a je postavená pro objednávku, ne pro čtení jako blogový článek.',
  landingDiff: [
    'Vstupní stránka = jeden dotaz, jedno řešení, cesta k objednávce.',
    'Článek = informační otázka, odpověď, odkaz dál.',
  ],

  monitorTitle: 'Jak jsem sledoval propady návštěvnosti?',
  monitorAnswer: 'Každý týden jsem kontroloval data v Ahrefs a Google Search Console a spouštěl technický crawl, takže jakýkoli propad jsem zachytil do 7 dnů, ne za čtvrtletí.',
  monitor: [
    'pozice a viditelnost;',
    'chyby indexace;',
    'nové technické chyby;',
    'stránky, které ztratily dotazy.',
  ],

  resultsTitle: 'Jaké byly výsledky za 12 měsíců?',
  resultsAnswer: 'Organická návštěvnost vzrostla z 1 200 na 10 500 návštěv měsíčně, tedy o 775 %, což je 8,75× (červenec 2024 → červenec 2025).',
  resultsTable: {
    head: ['Ukazatel', 'Červenec 2024', 'Červenec 2025', 'Změna'],
    rows: [['Organické návštěvy za měsíc', '1 200', '10 500', '+775 % (8,75×)']],
  },
  resultsSource: 'Zdroj: data analytiky webu (Google Search Console nebo měřicí nástroj webu), červenec 2024 a červenec 2025.',
  resultsNote: 'Porovnávám stejné měsíce dvou let, takže sezónnost výsledek nezkresluje.',
  resultsLimits: 'Projekt jsem měřil podle organické návštěvnosti. Poptávky, telefonáty a tržby do případové studie nepatří.',

  lessonTitle: 'V jakém pořadí dělat SEO?',
  lessonAnswer: 'SEO určuje pořadí priorit, ne objem práce. Nejdřív odstranit, co brání Googlu web pochopit, pak postavit architekturu podle byznysu a teprve potom škálovat obsah.',
  lesson: [
    { title: 'Nejdřív technický základ.', text: 'Rozbité odkazy a porušené nadpisy brání Googlu číst web a obsah nad nimi funguje hůř.' },
    { title: 'Potom architektura podle byznysu.', text: 'Mapa dotazů podle trychtýře ukáže, která stránka prodává a která zahřívá.' },
    { title: 'A teprve potom měřítko.', text: '20+ vstupních stránek přineslo růst, protože každá už měla svou roli.' },
  ],
  lessonClose: 'Když pořadí otočíte, vznikne hodně obsahu na špatném základu.',

  marketTitle: 'Dá se to zopakovat v Česku?',
  marketAnswer: 'Pořadí priorit (technika → architektura → obsah) na trhu nezávisí, ale obor a konkurence v Česku budou jiné, takže výsledek zaručit nelze. Projekt běžel na ruskojazyčném webu pro ruskojazyčný trh.',
  marketText: 'Přenést lze postup: nejdřív technický základ, potom mapa dotazů podle trychtýře a až poté vstupní stránky. Nepřenesou se konkrétní čísla ani poptávka, ty závisí na oboru, konkurenci a stavu webu.',

  faqTitle: 'Časté otázky k případové studii',
  faq: [
    { q: 'Jak dlouho trvá růst organické návštěvnosti?', a: 'V tomto projektu srovnání červenec 2024 → červenec 2025 ukázalo růst z 1 200 na 10 500 návštěv měsíčně. Záleží na oboru, konkurenci a stavu webu, takže termín nelze zaručit.' },
    { q: 'Proč vstupní stránky místo blogových článků?', a: 'Vstupní stránka cílí na jeden komerční dotaz a vede k objednávce, zatímco článek odpovídá na informační otázku. V tomto projektu byl základem růstu 20+ vstupních stránek.' },
    { q: 'V jakém pořadí dělat SEO?', a: 'Nejdřív odstranit technické překážky: rozbité odkazy a porušenou hierarchii nadpisů. Potom postavit mapu dotazů podle trychtýře a teprve potom škálovat obsah.' },
    { q: 'Funguje tento postup i na českém trhu?', a: 'Pořadí priorit na trhu nezávisí, ale obor a konkurence v Česku budou jiné, takže výsledek zaručit nelze. Projekt běžel na ruskojazyčném trhu.' },
  ],

  relatedTitle: 'Související služby',
  related: ['start', 'fullSeo', 'consulting', 'maps'] as const,
  relatedNicheLead: 'Pro tiskárny a polygrafické firmy mám samostatnou stránku:',
  relatedNicheLink: 'SEO a GEO/AEO pro tiskárny a polygrafii',
  more: 'Více',
  ctaTitle: 'Chcete stejný postup pro svůj web?',
  ctaText: 'Bezplatný audit ukáže technické chyby vašeho webu.',
  ctaAudit: 'Chci audit zdarma',
  ctaContact: 'Napište mi',
  nextCase: 'Sousední případová studie: SEO pro překladatelskou agenturu',

  schema: {
    about: ['případová studie SEO', 'SEO pro tiskárnu', 'růst organické návštěvnosti', 'architektura klíčových slov', 'technický SEO audit'],
    formula: TYPO_FORMULA_CS,
  },
};

// Apply Czech number typography to every visible string (strings only; keys and the language code stay as they are).
const walk = <T,>(v: T): T =>
  (typeof v === 'string' ? nb(v) : Array.isArray(v) ? v.map(walk) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)])) : v) as T;
export const CASE_TYPO_CS = walk(raw);
