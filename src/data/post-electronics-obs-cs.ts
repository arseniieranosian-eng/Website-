// Czech content of the blog article /blog/obchody-s-elektronikou-praha-co-jsem-zjistil/ (brief of 13.11.2026): the author's dated observation of the first 30 organic results for "obchod s elektronikou Praha"
// (12.11.2026, computer, location Praha): 12 webs of shops among them. An OBSERVATION, not an explanation of positions: no site, chain, catalogue, portal or map service is named; nothing is evaluated; no result or position
// is promised; the Google interface language is NOT stated (open question 9.1). The numbers are the author's and must not be changed (30 = 16 + 8 + 4 + 1 + 1; FAQ 7 none / 5 general / 0 category level; blog 4 / 8;
// short answer 0 of 12; structured data 9 / 3; 8 home pages, 3 branch pages, 1 list of shops). The author re-checks the data on the day of publication (open question 9.2): if a number changes, change the summary,
// the tables, the answers, the FAQ and the landing page /seo-pro-obchody-s-elektronikou/ together. Texts are verbatim from the brief. The landing page links here from "Další články".
import { walk } from '../lib/cs-typo';

// First publication: the author sets it by hand on the day the article goes out (open question 9.4); the day of the brief is only a placeholder. Do NOT bump it when the page is edited.
export const POST_ELECTRONICS_OBS_PUBLISHED = '2026-11-13';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/obchody-s-elektronikou-praha-co-jsem-zjistil.webp', width: 1200, height: 630, alt: 'Ilustrace: 30 výsledků vyhledávání, z nich 12 webů obchodů s elektronikou' },

  summary: 'K 12. 11. 2026 jsem prošel 30 výsledků pro dotaz „obchod s elektronikou Praha“. Bylo mezi nimi 12 webů obchodů. Žádný z nich nemá na stránce kategorie krátkou odpověď a žádný nemá FAQ na úrovni kategorie nebo produktu. Je to můj pozorovací vzorek, ne průzkum trhu, a nevysvětluje pozice.',

  methodTitle: 'Jak jsem výsledky sledoval a jaké to má limity?',
  methodAnswer: 'Zadal jsem dotaz „obchod s elektronikou Praha“ na počítači s polohou Praha dne 12. 11. 2026 a prošel 30 organických výsledků. Je to můj pozorovací vzorek, ne průzkum trhu. Výsledky se mění podle osoby, polohy a času, takže někdo jiný může vidět jiné pořadí.',
  methodAbove: 'Nad organickými výsledky se mi zobrazila reklama, blok s mapou a obchody a AI Overview.',
  methodListLead: 'Co jsem u webů obchodů počítal',
  methodList: [
    'Blog: je kdekoli na webu a odkazuje se na něj z navigace nebo z patičky.',
    'FAQ: žádné / obecné (stránka s dotazy pro celý web) / na úrovni kategorie nebo produktu.',
    'Krátká odpověď: 2–3 věty na stránce kategorie, které říkají, co kategorie obsahuje a jak vybírat.',
    'Strukturovaná data: podle zdroje stránky; značení přidané skriptem mohu přehlédnout.',
  ],

  typesTitle: 'Jaké weby byly mezi 30 výsledky?',
  typesAnswer: 'Z 30 výsledků bylo 16 stránek webů obchodů (12 různých webů), 8 katalogů, 4 mapové výpisy, 1 agregátor slev a 1 článek městského portálu. Ve výsledku byla u osmi webů hlavní stránka, u tří stránka pobočky a u jednoho výpis prodejen.',
  typesHead: ['Typ výsledku', 'Počet'],
  typesRows: [
    ['Stránky webů obchodů (12 webů)', '16'],
    ['Katalogy', '8'],
    ['Mapové výpisy', '4'],
    ['Agregátor slev', '1'],
    ['Městský portál (článek)', '1'],
    ['Celkem', '30'],
  ],

  commonTitle: 'Co mají weby obchodů s elektronikou na stránkách společné?',
  commonAnswer: 'Z 12 webů obchodů nemá žádný na stránce kategorie krátkou odpověď na otázku, co v ní je a jak vybírat, a žádný nemá FAQ na úrovni kategorie nebo produktu. Obecné FAQ pro celý web má pět webů, blog čtyři a strukturovaná data devět.',
  commonHead: ['Co jsem sledoval', 'Výsledek (z 12 webů)'],
  commonRows: [
    ['Krátká odpověď na stránce kategorie', 'žádný web'],
    ['FAQ na úrovni kategorie nebo produktu', 'žádný web'],
    ['Obecné FAQ pro celý web', '5'],
    ['Bez FAQ', '7'],
    ['Blog', '4'],
    ['Bez blogu', '8'],
    ['Strukturovaná data (podle zdroje stránky)', '9'],
    ['Bez strukturovaných dat', '3'],
  ],
  commonNote: 'U řetězců mají některé pobočky vlastní stránky. Beru to jen jako pozorování.',
  quote: 'Z dvanácti webů obchodů nemá žádný na kategorii krátkou odpověď ani FAQ na úrovni kategorie. Je to pozorování z jednoho dotazu, ne vysvětlení pozic.',

  weakTitle: 'Znamená to, že jsou tyto weby slabé?',
  weakAnswer: 'Ne, to z pozorování vyvodit nemohu. Proč jsou tyto weby vpředu, nevím: Google podle své dokumentace používá mnoho signálů. Zapisuji jen to, co jsem na stránkách našel a nenašel, a nehodnotím práci jednotlivých webů. Výsledek ani pozici z toho nevyvozuji ani nezaručuji.',
  sourceLabel: 'Zdroj:',
  weakSource: { before: 'Google Search Central, „Ranking systems guide“,', href: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', after: ', poslední aktualizace 10. 12. 2025.' },

  checkTitle: 'Jak zkontrolovat u svého e-shopu to, co jsem u těchto webů sledoval?',
  checkAnswer: 'Stejné body si můžete projít na vlastním e-shopu. Nejde o návod, jak se dostat na pozici, ale o kontrolní seznam toho, co jsem u vzorku sledoval. Každý krok vychází z jednoho zjištění výše a žádný z nich nezaručuje výsledek ani změnu pozice.',
  checkSteps: [
    'Otevřete jednu kategorii a zkontrolujte, zda u produktů stojí 2–3 věty o tom, co kategorie obsahuje a jak vybírat.',
    'Zkontrolujte, zda máte FAQ pro celý web a zda existuje alespoň u jedné kategorie nebo produktu.',
    'Pokud máte prodejnu, ověřte, zda má každá pobočka vlastní stránku s adresou a otevírací dobou.',
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
    { q: 'Musí mít e-shop s elektronikou blog?', a: 'Ne. V mém vzorku mají blog čtyři z dvanácti webů obchodů a osm jej nemá. Z toho nelze říct, zda blog pomáhá pozici, protože nevím, proč jsou jednotlivé weby vpředu. Blog je rozhodnutí o obsahu webu, ne podmínka, kterou by šlo z tohoto vzorku odvodit.' },
    { q: 'Musí mít stránka kategorie krátký úvodní text?', a: 'V mém vzorku ho nemá žádný z dvanácti webů, takže jde jen o pozorování, ne o pravidlo. Krátký text může návštěvníkovi usnadnit rozhodnutí, co v kategorii hledá, ale vliv na pozici nezaručuji. Je to věc obsahu stránky, kterou si každý majitel posuzuje sám.' },
    { q: 'Mají pobočky e-shopu mít vlastní stránku?', a: 'U tří webů z dvanácti byla ve výsledku přímo stránka pobočky. Pro člověka, který hledá prodejnu v konkrétní části města, je to praktické. Vliv na pozici z toho nevyvozuji. Kdo má jedinou prodejnu, může její adresu a otevírací dobu popsat na jedné stránce.' },
    { q: 'Potřebuje e-shop strukturovaná data, aby se zobrazil v AI přehledech?', a: 'Google v dokumentaci k AI funkcím (aktualizováno 10. 12. 2025) uvádí, že pro zobrazení v AI Overviews ani v AI Mode nejsou potřeba žádné zvláštní optimalizace ani zvláštní strukturovaná data. V mém vzorku je mají devět z dvanácti webů, příčinu pozice z toho ale vyvodit nelze.' },
  ],

  relatedLead: 'Související článek:',
  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endText: 'Pokud provozujete obchod s elektronikou, podrobnosti o spolupráci jsou na samostatné stránce.',
  endCta: 'SEO pro obchody s elektronikou',
  mistake: 'Našli jste chybu? Napište mi.',

  schema: {
    about: ['obchody s elektronikou Praha', 'weby obchodů s elektronikou', 'FAQ a blog e-shopu', 'pozorování výsledků vyhledávání'],
  },
};

export const POST_ELECTRONICS_OBS_CS = walk(raw);
