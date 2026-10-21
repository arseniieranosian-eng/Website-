// Czech content of /pripadove-studie/seo-prekladatelska-agentura/ (brief of 21.10.2026): the "half a year of work" case study, a case
// of its own next to the first-4-months case and the summer case (the author's decision: three separate cases). The client is anonymous ("překladatelská agentura"); no domain, no absolute numbers (the language
// table is published as percentages only; the screenshot of it has the site name, the counts and the footnote numbers covered).
// The owner's quote is a draft the author put on the page together with her name and Instagram. Not invented: months of the
// +65–70 % series and of the B2B peak, the contract wording of the two goals, the dates of the AI checks, charts without data
// (Search Console, cities), the client's confirmation screenshot (not provided, so only the line "potvrdil klient" is shown).
import { SEASON_FORMULA_CS } from './case-summary';
import { CASE_SEASON_CS } from './case-season-cs';
import { walk } from '../lib/cs-typo';

// First publication of this address (the page replaces the old "Část 1"); do NOT bump it when the page is edited.
export const CASE_HALF_PUBLISHED = '2026-10-21';

const raw = {
  lang: 'cs' as const,
  label: 'Případová studie · Překladatelská agentura',
  h1: 'Případová studie SEO pro překladatelskou agenturu: půl roku od nuly k růstu poptávek',
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  project: 'Projekt: překladatelská agentura, březen – září 2026',
  answer: 'Za půl roku (březen–září 2026) jsem u překladatelské agentury proměnil web bez jediné poptávky na systém tří druhů stránek. Poptávky tři měsíce po sobě rostly o 65–70 % měsíčně, B2B poptávky se ztrojnásobily a web se objevil v Google AI Overview.',
  cards: [
    { value: '+65–70 %', label: 'poptávek měsíčně (3 měsíce po sobě)' },
    { value: '×3 (+200 %)', label: 'B2B poptávky' },
    { value: '6 měsíců', label: 'práce' },
  ],
  dataNote: 'Název klienta a absolutní čísla nezveřejňuji, stejně jako bych chránil vaše data. Všechny výsledky jsou ve stavu na konci mé práce (září 2026). Čísla a vývoj webu potvrdil klient. Poptávky počítám z formuláře a e-mailem; telefonáty a messengery se neměří, takže reálný růst je vyšší.',
  seasonLink: 'Jak se projekt choval v letní sezóně: SEO v nízké sezóně',
  heroCta: 'Chci audit zdarma',

  goalsTitle: 'Jaké byly cíle zakázky?',
  goalsAnswer: 'Zakázka měla dva cíle: zvýšit povědomí o firmě a podpořit prodej. Každý výsledek níže patří k jednomu z nich a u každého uvádím metriku, období a zdroj.',
  goals: [
    'Povědomí o firmě: zobrazení a kliky v Google, pozice v místním vyhledávání, výskyt v Google AI Overview, nové vstupní stránky.',
    'Podpora prodeje: poptávky z formuláře a e-mailem, B2B poptávky, nové sekce, které poptávky přinášejí samy.',
  ],

  startTitle: 'Jak web vypadal na začátku?',
  startAnswer: 'Překladatelská agentura s pobočkami v Praze, Brně a Pardubicích měla web ve čtyřech jazycích, který nepřinášel žádné poptávky: ani jeden odeslaný formulář.',
  startList: [
    'ani jeden odeslaný formulář z webu;',
    'zhruba polovina sekcí, které takový web potřebuje, neexistovala: chyběla stránka pro firmy, jazykové páry, FAQ, reference, blog i stránky měst;',
    'web se téměř nikde neumisťoval ve vyhledávání;',
    'nikdy na něm neproběhla žádná SEO práce, ani technická, ani obsahová.',
  ],
  startText: 'Klienty agentura získávala mimo web: hlavně doporučením od známých a v menší míře ze sociálních sítí. Není to příběh o optimalizaci, ale o stavbě. Nemůžete ladit něco, co neexistuje.',

  builtTitle: 'Co jsem postavil?',
  builtAnswer: 'Přestal jsem brát stránky jako oddělené položky a postavil web jako systém se třemi druhy stránek: stránky, které vedou k poptávce, stránky, které podporují rozhodnutí, a stránky, které budují důvěru.',
  builtTypes: [
    'Vedou k poptávce: úvodní stránka, služby, jazykové páry, stránky měst.',
    'Podporují rozhodnutí: ceník, blog.',
    'Budují důvěru: o nás, reference, FAQ.',
  ],
  builtSections: [
    'Úvodní stránka: přepracovaná, s prvky důvěry, blokem jazykových párů, službami a výzvami k akci.',
    'Stránky služeb: všechny přestavěné podle jednoho vzoru (cena a termín nahoře, několik vstupů do formuláře, FAQ na každé stránce).',
    'Jazykové páry: vytvořené od nuly pro vyhledávání konkrétních kombinací jazyků.',
    'Ceník: pravidelně aktualizovaný, funguje jako rozcestník návštěvnosti pro další stránky.',
    'Pro firmy (B2B): od nuly, jediný cíl: růst firemních klientů.',
    'O nás: přepracovaná, s týmem, postupem a fakty o firmě.',
    'Reference: od nuly, seřazené podle služeb.',
    'FAQ: samostatná stránka otázek pro celý web.',
    'Kontakty: vyhrazený e-mail webu a kontaktní kanály pro každou pobočku.',
    'Blog: od nuly několik desítek článků.',
    'Stránky měst: samostatné stránky pro Prahu, Brno a Pardubice, postavené na lokální dotazy.',
  ],
  builtText: 'Unikátní meta tagy a strukturovaná data (schema markup) na každé stránce, stejná práce se stejnou intenzitou na ruské, ukrajinské a anglické verzi. Každý týden jsem posílal report s ověřitelnými čísly a zdrojem každé poptávky.',

  resTitle: 'Jaké byly výsledky za půl roku?',
  resAnswer: 'Poptávky šly tři měsíce po sobě nahoru o 65–70 % měsíčně, B2B poptávky se ztrojnásobily a web se objevil v Google AI Overview. Všechno v létě, kdy je poptávka v oboru nejslabší (potvrzuje Google Trends).',
  ownerQuote: {
    text: 'Největší překvapení bylo, že poptávky rostly i v létě, kdy je v našem oboru nejklidněji.',
    name: 'Yelyzaveta Butyrina',
    role: 'majitelka překladatelské agentury',
    instagram: 'https://www.instagram.com/elzabutirina/',
    photo: { src: '/images/pripadove-studie/majitelka.jpg', width: 150, height: 150, alt: 'Yelyzaveta Butyrina, majitelka překladatelské agentury' },
  },
  resTable: {
    head: ['Cíl', 'Metrika', 'Výsledek', 'Období', 'Zdroj'],
    rows: [
      ['Podpora prodeje', 'Poptávky (formulář + e-mail)', 'tři měsíce po sobě +65–70 % měsíc po měsíci', '[měsíce se upřesňují]', 'GA4, týdenní reporty'],
      ['Podpora prodeje', 'B2B poptávky', '+200 % (×3) za měsíc, držely se po zbytek léta', 'léto 2026 [měsíc se upřesňuje]', 'GA4, týdenní reporty'],
      ['Podpora prodeje', 'Nejlepší týden léta', 'o více než 30 % nad dosavadní rekord', 'léto 2026', 'GA4'],
      ['Podpora prodeje', 'Nové sekce (jazykové páry, blog, stránky měst)', 'přinášejí poptávky samy', 'stav na konci projektu', 'GA4'],
      ['Podpora prodeje', 'Ruská verze', 'první konverze na konci července', 'červenec 2026', 'GA4'],
      ['Povědomí o firmě', 'Zobrazení a kliky v Google', 'růst od června, vrcholy v srpnu a září', 'březen–září 2026', 'Google Search Console (relativní data)'],
      ['Povědomí o firmě', 'Pardubice', 'přední pozice v místních výsledcích u klíčových dotazů', 'konec projektu', 'Google'],
      ['Povědomí o firmě', 'Brno', 'top 5 a výš u klíčových dotazů; Google AI Overview', 'konec projektu', 'Google'],
    ],
  },
  resCaption: 'Čísla a vývoj webu potvrdil klient. Data jsou relativní, absolutní čísla nezveřejňuji.',
  seasonFormula: SEASON_FORMULA_CS,
  seasonFormulaLink: 'SEO v nízké sezóně',

  langTitle: 'Jací klienti na web začali chodit?',
  langAnswer: 'Od 24. 5. do 20. 9. 2026 přišly tři čtvrtiny poptávek z formuláře (78 %) přes českou a anglickou verzi webu. Ukrajinská verze přinesla 18 % a ruská 4 %. Web tedy slouží širšímu okruhu klientů, než tomu bylo na začátku.',
  langChartTitle: 'Podíl poptávek podle jazykové verze webu',
  langRows: [
    { rank: '1', name: 'Česká', pct: 52 },
    { rank: '2', name: 'Anglická', pct: 26 },
    { rank: '3', name: 'Ukrajinská', pct: 18 },
    { rank: '4', name: 'Ruská', pct: 4 },
  ],
  langTableHead: ['Pořadí', 'Jazyková verze', 'Podíl poptávek'],
  langAria: 'Sloupcový graf: česká verze 52 %, anglická 26 %, ukrajinská 18 %, ruská 4 % poptávek z formuláře.',
  langCaption: 'Podíl z poptávek z formuláře s určenou jazykovou verzí, 24. 5. – 20. 9. 2026. Zdroj: GA4, formulář. Přímé e-maily nejsou započteny a poptávky bez určené jazykové verze se do podílu nepočítají. Absolutní počty neuvádím.',
  langText: 'Před mým příchodem web žádné poptávky nepřiváděl. Klienty agentura získávala hlavně doporučením od známých a v menší míře ze sociálních sítí. Dnes přicházejí poptávky i přímo z webu a na prvních dvou místech je česká a anglická verze. Jazyková verze neříká, odkud klient je, ale v jakém jazyce web používá. Proto jsem každou ze čtyř verzí stavěl jako samostatnou práci, ne jako překlad (viz závěr č. 4).',
  langImage: { src: '/images/pripadove-studie/poptavky-jazykove-verze.webp', width: 1000, height: 743, alt: 'Žebříček jazykových verzí webu podle počtu poptávek: česká 52 %, anglická 26 %, ukrajinská 18 %, ruská 4 %', caption: 'Výřez z reportu o poptávkách podle jazykových verzí (název webu a absolutní počty zakryty).' },

  citiesTitle: 'Jak se chovala jednotlivá města?',
  citiesAnswer: 'Lokální propagace běžela zvlášť pro každou ze tří poboček a každé město mělo vlastní průběh.',
  cities: [
    'Pardubice: nejstabilnější obraz; hovory a návštěvy webu rostly téměř bez přestávky od dubna do září.',
    'Brno: výrazný letní růst s několika vrcholy; na podzim aktivita mírně polevila, ale zůstala výrazně nad dubnovým startem; u klíčových dotazů top 5 a výš; objevuje se v Google AI Overview.',
    'Praha: aktivní růst na jaře a na začátku léta s vrcholem v červnu, pak postupně klesala k podzimu, ale nevrátila se na výchozí úroveň.',
  ],
  citiesText: 'Recenze jsou samostatná, průběžná práce. Recenzi nejde smazat ani upravit, ale odpověď na ni formuje, jak agenturu vidí noví klienti. Agentura odpovídá na každou rychle a k věci, jako rutina.',

  aiTitle: 'Objevil se web v AI vyhledávání?',
  aiAnswer: 'Ano, v Google AI Overview se objevil web u dotazů na překladatelské agentury v Brně. U ChatGPT a dalších AI nástrojů uvádím jen to, co umím doložit.',
  aiText: 'V GA4 se u webu objevil také kanál „AI Assistant“.',
  aiLink: 'Jak SEO a GEO/AEO funguje',

  lessonTitle: 'Co bych zopakoval na jakémkoli podobném projektu?',
  lesson: [
    { title: 'Nejdřív zmapovat, co chybí, a teprve potom sáhnout na to, co existuje.', text: 'Když polovina webu není, ladit tu druhou polovinu je špatný první krok.' },
    { title: 'Stavět více vstupních bodů.', text: 'Růst z mnoha stránek přežije špatnou sezónu. Růst z jedné stránky ne.' },
    { title: 'Dát každé stránce jeden úkol.', text: 'Konvertovat, podpořit rozhodnutí, nebo budovat důvěru. Stránky, které se snaží o všechno, obvykle nezvládnou nic.' },
    { title: 'Lokalizaci brát jako samostatnou práci.', text: 'Každá jazyková verze má vlastní logiku obsahu, ne přeloženou kopii.' },
    { title: 'Reportovat každý týden s ověřitelnými zdroji.', text: 'Nikoho to nezdržuje a je to důvod, proč klient číslům věří.' },
    { title: 'Měřit poptávky, ne pozice.', text: 'Pozice a AI citace jsou signály. Výsledkem je poptávka.' },
  ],
  authorQuote: 'SEO není magie. Je to systém, a správně postavený systém funguje i mimo sezónu, v malých městech i tehdy, když začínáte od nuly.',

  faqTitle: 'Časté otázky k případové studii',
  faq: [
    { q: 'Co obnáší půl roku SEO pro firmu s více pobočkami?', a: 'V tomto projektu to byla stavba webu jako systému: stránky, které vedou k poptávce, podporují rozhodnutí a budují důvěru, samostatné stránky pro každé město, lokalizace každé jazykové verze a týdenní reporty s ověřitelnými zdroji. Výsledek záleží na oboru a konkurenci a zaručit ho nelze.' },
    { q: 'Proč blog a FAQ ještě před prvními poptávkami?', a: 'Blog a FAQ zachytí lidi, kteří ještě nevědí, že potřebují právě tuto službu, a vedou je na stránky, které konvertují. V tomto projektu web na začátku nemělo ani jedno.' },
    { q: 'Jak poznat, že SEO přineslo poptávky, a ne sezóna?', a: 'Porovnejte svá data s Google Trends u hlavního širokého dotazu a podívejte se, jestli růst začal i ve slabém období. Podrobný postup je v případové studii o nízké sezóně.', link: 'caseSeason' as const, linkText: 'SEO v nízké sezóně' },
    { q: 'Funguje to i pro web, který je postavený jen napůl?', a: 'Právě takový web je dobrý kandidát: nejdřív je potřeba zmapovat, co chybí, a teprve potom ladit to, co existuje. Výsledek záleží na oboru a stavu webu a zaručit ho nelze.' },
    { q: 'Pomůže vícejazyčné SEO oslovit nové skupiny klientů?', a: 'V tomto projektu přišla většina poptávek z formuláře přes českou a anglickou verzi a každou ze čtyř verzí jsem stavěl zvlášť, ne jako překlad. Výsledek ale záleží na oboru, trhu a výchozím stavu webu a zaručit ho nelze.' },
  ],

  relatedTitle: 'Související služby',
  related: ['start', 'fullSeo', 'maps', 'consulting'] as const,
  more: 'Více',
  ctaTitle: 'Máte web, který „funguje“, ale nepřivádí klienty?',
  ctaText: 'Bezplatný audit ukáže technické chyby vašeho webu.',
  ctaAudit: 'Chci audit zdarma',
  ctaContact: 'Napište mi',
  nextCases: [
    { key: 'caseTypo' as const, text: 'Sousední případová studie: SEO pro tiskárnu' },
    { key: 'caseEdu' as const, text: 'Sousední případová studie: SEO pro novou vzdělávací platformu' },
    { key: 'caseSeason' as const, text: 'Navazující případová studie: SEO v nízké sezóně' },
  ],

  schema: {
    about: ['případová studie SEO', 'SEO pro překladatelskou agenturu', 'lokální SEO pro pobočky', 'vícejazyčné SEO', 'jak získat B2B poptávky přes SEO'],
  },
};

export const CASE_HALF_CS = walk(raw);
export const CASE_HALF_SERIES = CASE_SEASON_CS.series;
