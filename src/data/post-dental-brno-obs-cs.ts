// Czech content of the blog article /blog/stomatologie-v-brne-co-jsem-zjistil/ (brief of 27.11.2026): the author's dated observation of the first 20 organic results of Google.cz and of Seznam.cz for "stomatologie v Brně",
// a NEUTRAL observation in the form of the Prague article /blog/slabe-seo-konkurence-zubni-ordinace/ (structure only; text and numbers are new). No site, clinic, catalogue, hospital or portal is named; "Mapy.com" only as a platform.
// The numbers are the author's (appendix of the brief, section 8) and must not be changed: Google 20 positions = 19 different sites (one site twice), 18 positions / 17 sites of practices and clinics, 1 catalogue,
// 1 hospital clinic; FAQ 2 (+1 partial), blog 4 (+3 only news), markup 11 (JSON-LD 8, 3 microdata only), FAQPage type 1; Seznam 20 positions: 13 practice sites, 6 catalogues, 1 Mapy.com card; FAQ 3, blog 8 (+1 partial),
// markup 11 (all JSON-LD), FAQPage 0; 4 practice sites in both results, 26 different practice sites in total (17 + 13 - 4).
// Not carried over from Prague: 30 výsledků, 24/17, 15. 11. 2026, 31. 10. 2026, "notebook, Praha". The device and the place of the check are not in the data: not stated [?5]. The position of the video block on Seznam is not
// confirmed [?4]. The date of the check (27. 11. 2026) is a default [?1]. Dates of publication / update: set by hand by the author. YMYL: no text about treatment. Body links: none except the author's page and contact
// (rule F); ONE end button to the landing page of Brno; no sources (no outside documentation is cited).
import { walk } from '../lib/cs-typo';

// Placeholders: the author sets the real date of publication / update.
export const POST_DENTAL_BRNO_PUBLISHED = '2026-11-27';
export const POST_DENTAL_BRNO_MODIFIED = '2026-11-27';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/stomatologie-v-brne-co-jsem-zjistil.webp', width: 1200, height: 630, alt: 'Ilustrace: dvakrát 20 výsledků vyhledávání pro „stomatologie v Brně“, z nich 17 webů ordinací na Googlu a 13 na Seznamu' },

  summary: 'K 27. 11. 2026 jsem na Googlu a Seznamu prošel po 20 výsledcích dotazu „stomatologie v Brně“. Počítal jsem, co mají weby zubních ordinací: FAQ, blog a strukturovaná data. Je to můj pozorovací vzorek, ne průzkum trhu.',

  methodTitle: 'Jak jsem dotaz „stomatologie v Brně“ zkoumal?',
  methodAnswer: 'Zadal jsem jeden dotaz, „stomatologie v Brně“, na Google.cz a Seznam.cz a vzal prvních 20 organických výsledků z každého. Reklamy, AI Overviews, blok Mapy.com a videa jsem do počtu nepočítal. U webů ordinací jsem ve zdrojovém kódu zadané stránky hledal FAQ, blog a strukturovaná data, bez přihlášení.',
  methodLine: 'Metodika a limity: jeden dotaz, jeden den; výsledky se mění podle osoby, polohy a času.',

  aroundTitle: 'Co se zobrazilo kolem organických výsledků?',
  aroundAnswer: 'Na Google.cz byly nad organickými výsledky dva bloky reklam a mezi nimi AI Overviews. Na Seznam.cz byla nad organikou reklama a blok Mapy.com, uvnitř organiky blok šesti videí „Stomatologie v Brně“. Přesnou pozici videí mezi výsledky jsem nezaznamenal. Jde o jediné vyhledávání v jeden den.',

  originTitle: 'Odkud pocházelo 20 výsledků na Googlu a na Seznamu?',
  originAnswer: 'Na Googlu šlo o 20 pozic a 19 různých webů: 17 webů ordinací a klinik (jeden z nich dvakrát), jeden katalog a jedna klinika nemocnice. Na Seznamu bylo 13 webů ordinací a klinik, 6 katalogů a karta Mapy.com. Čtyři weby ordinací byly v obou výsledcích.',
  originTableHead: ['Složení 20 pozic', 'Google.cz', 'Seznam.cz'],
  originTableRows: [
    ['Weby ordinací a klinik (pozice)', '18', '13'],
    ['Katalogy', '1', '6'],
    ['Karta Mapy.com', '0', '1'],
    ['Klinika nemocnice', '1', '0'],
    ['Celkem pozic', '20', '20'],
  ],

  findTitle: 'Co jsem našel na webech zubních ordinací?',
  findAnswer: 'Weby ordinací jsem posuzoval zvlášť podle každé výsledkové stránky: 17 na Googlu a 13 na Seznamu. FAQ mělo 2, respektive 3 weby, blog 4, respektive 8, a strukturovaná data 11 a 11. Všechna čísla vycházejí jen z jedné stránky každého webu.',
  tableHead: ['Ukazatel', 'Google (17 webů)', 'Seznam (13 webů)'],
  tableRows: [
    ['Stránka s FAQ: ano / částečně', '2 / 1', '3 / 0'],
    ['Blog: ano / částečně', '4 / 3', '8 / 1'],
    ['Strukturovaná data (JSON-LD nebo microdata): ano', '11', '11'],
    ['z toho JSON-LD', '8', '11'],
    ['Značka FAQPage', '1', '0'],
  ],
  tableNote: 'Krátkou odpověď na stránce služby jsem neposuzoval, protože šlo většinou o úvodní stránky.',
  tableExplain: 'Částečně: jen otázky v kódu bez typu FAQPage, nebo jen sekce novinek či aktualit; u části webů jde o obecné značení šablony.',
  quote: 'Na Seznamu zabíraly katalogy a karta Mapy.com 7 z 20 pozic, na Googlu jeden katalog. Je to pozorování jednoho dotazu, ne vysvětlení pořadí.',

  notTitle: 'Co z tohoto pozorování nevyplývá?',
  notAnswer: 'Nevyplývá z něj, proč jsou některé weby vpředu, ani že FAQ, blog nebo značení zlepšují pozici. Nevyplývá z něj ani, že výsledky pro Brno vypadají stejně každý den. Je to jeden dotaz, jeden den a 20 výsledků z každého vyhledávače.',

  // The brief gives the steps but no lead paragraph of this H2: the paragraph below is the executor's wording (new text, to be approved by the author).
  checkTitle: 'Jak si svůj web zkontrolovat sám?',
  checkAnswer: 'Stejné věci, které jsem počítal u vzorku, si můžete ověřit na vlastním webu. Čtyři kroky nejsou návod, jak získat pozici, jen zápis toho, co na webu je. Žádný krok nezaručuje výsledek ani změnu pozice, berte je jako podklad pro vaše rozhodnutí.',
  checkSteps: [
    'Otevřete zdrojový kód úvodní stránky a vyhledejte „application/ld+json“; zapište typy, které tam jsou.',
    'Zjistěte, zda web má samostatnou stránku s častými dotazy.',
    'Zkontrolujte, zda web má blog nebo aktuality a kdy vyšel poslední text.',
    'Zadejte „stomatologie v Brně“ na Google.cz i Seznam.cz a zapište, jaké typy výsledků se zobrazují vedle webů ordinací.',
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Proč je na Seznamu víc katalogů než na Googlu?', a: 'Z mého pozorování se to zjistit nedá. Vidím jen počty: na Seznamu tvořily katalogy a karta Mapy.com 7 z 20 pozic, na Googlu jeden katalog z 20. Jeden dotaz v jeden den nestačí k vysvětlení, proč se výsledky liší, a žádný důvod proto netvrdím.' },
    { q: 'Dají se výsledky pro Brno srovnat s Prahou?', a: 'Přímo ne. Moje pozorování pro Prahu bylo z jiného dne a mělo 30 výsledků z každého vyhledávače, to brněnské jich má 20. Čísla proto nesrovnávám a netvrdím, kde je čeho víc. Srovnání by dávalo smysl při stejném dni, stejném počtu výsledků a stejném postupu.' },
    { q: 'Kolik webů ordinací bylo v obou výsledcích?', a: 'V mém vzorku čtyři. Dohromady se objevilo 26 různých webů ordinací a klinik: 17 na Googlu, 13 na Seznamu a čtyři v obou. U katalogů jsem překryv nepočítal, takže o nich žádné číslo neuvádím. Čísla platí jen pro toto jedno vyhledávání.' },
    { q: 'Proč jste neposuzoval krátkou odpověď na stránce služby?', a: 'V brněnském vzorku šlo většinou o úvodní stránky ordinací, kde se krátká odpověď na dotaz nehodnotí. Posoudit ji lze u stránek služeb nebo kategorií. Proto v tabulce chybí, na rozdíl od mého pozorování pro Prahu, a o ní tu nic neříkám.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  endTitle: 'Chcete, aby byl web vaší zubní ordinace srozumitelný pro Google i AI?',
  endCta: 'SEO pro zubní ordinace v Brně',
  moreTitle: 'Další články',
  moreMore: 'Číst článek',
};

export const POST_DENTAL_BRNO_CS = walk(raw);
