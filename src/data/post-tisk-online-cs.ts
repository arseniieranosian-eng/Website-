// Czech content of the blog article /blog/tisk-online-co-jsem-zjistil/ (brief of 14.11.2026): the author's dated observation of the first 30 organic results of Google and of Seznam for "tisk online" (14.11.2026, laptop,
// location Praha): 24 sites of print services on each search engine. An OBSERVATION, not an explanation of positions: no site, firm, catalogue, marketplace or service is named; nothing is evaluated; no result or position is
// promised. The numbers are the author's (from the tool reports, not re-checked: open question 9.1) and must not be changed: 30 + 30 results; 24 + 24 sites; 27 and 29 results from print-service sites; 10 common, 38 different;
// FAQ at category level 0 and 1; FAQ page 8 and 10; blog 13 and 13; structured data 11 and 13; short answer 1 of 11 and 0 of 9. If a number changes, change the summary, the tables, the answers, the FAQ and the landing page
// /seo-pro-tiskarny-a-polygrafii/ together. Texts are verbatim from the brief. The landing page links here from "Další články".
import { walk } from '../lib/cs-typo';

// First publication: the author sets it by hand on the day the article goes out (open question 9.3); the day of the brief is only a placeholder. Do NOT bump it when the page is edited.
export const POST_TISK_ONLINE_PUBLISHED = '2026-11-14';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/tisk-online-co-jsem-zjistil.webp', width: 1200, height: 630, alt: 'Ilustrace: dvakrát 30 výsledků vyhledávání, z nich 24 webů tiskových služeb na Googlu a na Seznamu' },

  summary: 'K 14. 11. 2026 jsem na Googlu a na Seznamu prošel po 30 výsledcích dotazu „tisk online“. Na každém vyhledávači to bylo 24 webů tiskových služeb. FAQ na úrovni kategorie nebo produktu nemá na Googlu žádný z nich, na Seznamu jeden. Je to můj pozorovací vzorek, ne průzkum trhu, a nevysvětluje pozice.',

  methodTitle: 'Jak jsem výsledky sledoval a jaké to má limity?',
  methodAnswer: 'Zadal jsem dotaz „tisk online“ na notebooku s polohou Praha dne 14. 11. 2026. Na Googlu (rozhraní v ruštině) i na Seznamu jsem prošel 30 organických výsledků. Je to můj pozorovací vzorek, ne průzkum trhu. Výsledky se mění podle osoby, polohy a času, takže někdo jiný může vidět jiné pořadí.',
  methodListLead: 'Co jsem u webů počítal',
  methodList: [
    'Weby tiskových služeb: online tiskárny, kopírovací centra a fotoslužby. Nepočítal jsem katalogy, tržiště a designové nástroje. Stejný web na obou vyhledávačích jsem počítal zvlášť, mezi vyhledávači jsem je porovnal.',
    'Blog: je kdekoli na webu a odkazuje se na něj z navigace nebo z patičky. „Částečně“ je sekce rad nebo novinek bez klasického blogu.',
    'FAQ: žádné / stránka s dotazy pro celý web / na úrovni kategorie nebo produktu. „Částečně“ je sekce rad bez klasického FAQ.',
    'Krátká odpověď: 2–3 věty na stránce kategorie nebo produktu, které říkají, co obsahuje a jak vybírat. Jen u výsledků, které takovou stránku byly. Částečné případy jsem nepočítal jako „ano“.',
    'Strukturovaná data: podle zdroje stránky; značení přidané skriptem mohu přehlédnout. Údaje jsem posuzoval podle zdroje stránky a části z nich ověřil po zadání výsledků.',
  ],

  aboveTitle: 'Co bylo nad organickými výsledky na Googlu a na Seznamu?',
  aboveAnswer: 'Na Googlu byla nad organickými výsledky sbalená reklama, přehled AI a blok Map. Na Seznamu následovaly reklamy, mapy, organické výsledky 1–3, blok šesti videí a výsledky 4–30. Názvy firem neuvádím. Pořadí těchto prvků se může lišit podle osoby, polohy a času.',

  typesTitle: 'Jaké weby byly mezi 30 výsledky?',
  typesAnswer: 'Z 30 výsledků na Googlu bylo 27 z webů tiskových služeb (24 webů), 1 designový nástroj, 1 firemní stránka bez služby a 1 katalog. Na Seznamu bylo 29 výsledků z webů tiskových služeb (24 webů) a 1 tržiště. Společných bylo 10 webů, dohromady 38 různých.',
  typesHead: ['Typ výsledku', 'Google', 'Seznam'],
  typesRows: [
    ['Výsledky z webů tiskových služeb', '27', '29'],
    ['Weby tiskových služeb (různé)', '24', '24'],
    ['Katalog', '1', '0'],
    ['Tržiště', '0', '1'],
    ['Designový nástroj', '1', '0'],
    ['Firemní stránka bez služby', '1', '0'],
    ['Celkem výsledků', '30', '30'],
  ],
  typesNote: 'Blok videí na Seznamu není v počtu 30 výsledků.',

  commonTitle: 'Co mají weby tiskových služeb na stránkách společné?',
  commonAnswer: 'Krátkou odpověď na stránce kategorie nebo produktu mělo na Googlu 1 z 11 sledovaných výsledků a na Seznamu žádný z 9. FAQ na úrovni kategorie nebo produktu nemá na Googlu žádný web, na Seznamu jeden. Obecné FAQ má 8 webů na Googlu a 10 na Seznamu.',
  commonHead: ['Co jsem sledoval', 'Google (24 webů)', 'Seznam (24 webů)'],
  commonRows: [
    ['FAQ na úrovni kategorie nebo produktu', '0', '1'],
    ['Stránka s FAQ pro celý web', '8', '10'],
    ['FAQ částečně', '1', '2'],
    ['Bez FAQ', '14', '12'],
    ['FAQ nelze ověřit', '1', '0'],
    ['Blog', '13', '13'],
    ['Blog částečně', '2', '2'],
    ['Bez blogu', '8', '9'],
    ['Blog nelze ověřit', '1', '0'],
    ['Strukturovaná data', '11', '13'],
    ['Bez strukturovaných dat', '13', '11'],
    ['Krátká odpověď na kategorii nebo produktu (sledované výsledky)', '11: ano 1, částečně 3, ne 7', '9: ano 0, částečně 1, ne 8'],
  ],
  commonNote: 'Ostatní výsledky byly úvodní stránky, kalkulátory a kontakty, u kterých se krátká odpověď na kategorii neposuzovala.',
  quote: 'Na stránkách kategorie nebo produktu mělo jasnou krátkou odpověď jen 1 z 20 sledovaných výsledků a FAQ na úrovni kategorie jediný web. Je to pozorování z jednoho dotazu, ne vysvětlení pozic.',

  weakTitle: 'Znamená to, že jsou tyto weby slabé?',
  weakAnswer: 'Ne, to z pozorování vyvodit nemohu. Proč jsou tyto weby vpředu, nevím: Google podle své dokumentace používá mnoho signálů. Zapisuji jen to, co jsem na stránkách našel a nenašel, a nehodnotím práci jednotlivých webů. Výsledek ani pozici z toho nevyvozuji ani nezaručuji.',
  sourceLabel: 'Zdroj:',
  weakSource: { before: 'Google Search Central, „Ranking systems guide“,', href: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', after: ', poslední aktualizace 10. 12. 2025.' },

  checkTitle: 'Jak zkontrolovat u svého e-shopu to, co jsem u těchto webů sledoval?',
  checkAnswer: 'Stejné body si můžete projít na vlastním e-shopu. Nejde o návod, jak se dostat na pozici, ale o kontrolní seznam toho, co jsem u vzorku sledoval. Každý krok vychází z jednoho zjištění výše a žádný z nich nezaručuje výsledek ani změnu pozice.',
  checkSteps: [
    'Otevřete jednu kategorii a zkontrolujte, zda u produktů stojí 2–3 věty o tom, co kategorie obsahuje a jak vybírat.',
    'Zkontrolujte, zda máte FAQ pro celý web a zda existuje alespoň u jedné kategorie nebo produktu.',
    'U produktu s kalkulačkou zkontrolujte, zda nad kalkulačkou stojí krátký popis produktu.',
    'Podívejte se, zda adresy kategorií a produktů obsahují čitelná slova. Google v dokumentaci k URL (aktualizováno 21. 10. 2026) doporučuje čitelná slova místo dlouhých čísel.',
    'Pokud používáte strukturovaná data, ověřte, že odpovídají viditelnému textu na stránce.',
  ],
  checkSourcesLabel: 'Zdroje:',
  checkSources: [
    { href: 'https://developers.google.com/search/docs/crawling-indexing/url-structure', after: ' (aktualizováno 21. 10. 2026)' },
    { href: 'https://developers.google.com/search/docs/appearance/ai-features', after: ' (aktualizováno 10. 12. 2025)' },
  ],

  faqTitle: 'Často kladené otázky',
  faq: [
    { q: 'Musí mít tiskárna blog?', a: 'Ne. V mém vzorku mělo blog 13 z 24 webů na Googlu i na Seznamu, ale z toho nelze říct, zda blog pomáhá pozici, protože nevím, proč jsou jednotlivé weby vpředu. Blog je rozhodnutí o obsahu webu, ne podmínka, kterou by šlo z tohoto vzorku odvodit.' },
    { q: 'Musí mít stránka kategorie krátký úvodní text?', a: 'Na Googlu mělo krátkou odpověď 1 z 11 sledovaných výsledků a na Seznamu žádný z 9, takže jde jen o pozorování, ne o pravidlo. Krátký text může návštěvníkovi usnadnit rozhodnutí, ale vliv na pozici nezaručuji. Každý majitel si to posuzuje sám.' },
    { q: 'Liší se výsledky Googlu a Seznamu?', a: 'V mém vzorku ano. Z 38 různých webů se v obou výsledcích objevilo jen 10, ostatní jen v jednom z nich. Lišilo se i okolí výsledků: Google měl přehled AI a mapu, Seznam blok videí. Z jednoho dotazu v jeden den to nelze zobecnit.' },
    { q: 'Potřebuje e-shop strukturovaná data, aby se zobrazil v AI přehledech?', a: 'Google v dokumentaci k AI funkcím (aktualizováno 10. 12. 2025) uvádí, že pro zobrazení v AI Overviews ani v AI Mode nejsou potřeba žádné zvláštní optimalizace ani zvláštní strukturovaná data. V mém vzorku je mělo 11 z 24 webů na Googlu a 13 z 24 na Seznamu, příčinu pozice z toho ale vyvodit nelze.' },
  ],

  relatedLead: 'Související článek:',
  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endText: 'Pokud provozujete tiskárnu nebo polygrafickou firmu, podrobnosti o spolupráci jsou na samostatné stránce.',
  endCta: 'SEO pro tiskárny a polygrafii',
  mistake: 'Našli jste chybu? Napište mi.',

  schema: {
    about: ['tisk online', 'weby tiskových služeb', 'FAQ a blog e-shopu s tiskem', 'pozorování výsledků vyhledávání'],
  },
};

export const POST_TISK_ONLINE_CS = walk(raw);
