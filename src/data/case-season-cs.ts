// Czech content of /pripadove-studie/seo-v-nizke-sezone/ (Part 2 of the translation-agency case, brief of 20.10.2026): an
// adaptation of the Russian page, not a translation. The client (name, domain) appears nowhere. One result formula
// (SEASON_FORMULA_CS), repeated word for word. Form leads only (e-mail separate, calls / messengers not measured), relative
// data from a low base, no absolute numbers. No charts: the brief has no Google Trends / GA4 data to draw. Not invented:
// details of the service-page rewrite, the Trends region, the dates of the Search Console figures (shown as "data se upřesňují"),
// the LinkedIn profile clause.
import { SEASON_FORMULA_CS } from './case-summary';
import { CASE_SEASON_PUBLISHED } from './case-season-ru';
import { walk } from '../lib/cs-typo';

export { CASE_SEASON_PUBLISHED };

const raw = {
  lang: 'cs' as const,
  label: 'Případová studie · Překladatelská agentura · Část 2',
  h1: 'SEO v nízké sezóně pro překladatelskou agenturu: poptávky z webu vzrostly 24×',
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  project: 'Projekt: překladatelská agentura, březen – srpen 2026 · ',
  partLabel: 'Část 2',
  answer: 'Za léto 2026 (červen–srpen) vzrostly poptávky z formuláře na webu překladatelské agentury 24× oproti jaru (březen–květen), přestože zájem o široký dotaz v Google Trends v těchto měsících klesal. Jde o růst od nízké základny, absolutní čísla nezveřejňuji.',
  formula: SEASON_FORMULA_CS,
  cards: [
    { value: '×24', label: 'poptávky z webu' },
    { value: '+357 %', label: 'kliky' },
    { value: '+398 %', label: 'zobrazení' },
  ],
  cardsNote: 'Kliky a zobrazení: Search Console, data se upřesňují.',
  dataNote: 'Název klienta a absolutní čísla nezveřejňuji, stejně jako bych chránil vaše data. Počítám poptávky z formuláře; e-mail se měří zvlášť a telefonáty a messengery se neměří, takže reálný růst je vyšší. Růst se počítá od nízké základny.',
  part1Link: 'Toto je Část 2. Hlavní případová studie: půl roku práce na webu',
  heroCta: 'Chci audit zdarma',

  diagTitle: 'Proč se organická návštěvnost nepřeváděla na poptávky?',
  diagAnswer: 'Když jsem v polovině března převzal projekt, měl web čtyři díry v trychtýři: žádný vstup pro ty, kdo hledají odpověď na životní situaci, nejasný komerční záměr stránek služeb, žádné lokální pokrytí a slabé signály důvěry. Každá díra ztrácela jiný typ klienta.',
  diagText: 'Nejdřív jsem zjišťoval, jak byznys vydělává peníze, kdo je skutečný zákazník a co brání organickým návštěvníkům stát se poptávkou. Klíčová slova jsem řešil až potom.',
  holes: [
    { name: 'Žádná horní část trychtýře.', text: 'Ani blog, ani FAQ: kdo ještě neví, že potřebuje právě tuto službu, a hledá odpověď na životní situaci, neměl kam přijít.' },
    { name: 'Nejasný záměr stránek služeb.', text: 'Nic neříkalo, že jde o komerční stránky, ne o informace. Návštěvnost chodila, ale nepřeváděla.' },
    { name: 'Žádné geografické pokrytí.', text: 'Část poptávky je lokální (překladatele nebo notáře potřebujete ve svém městě) a odcházela ke konkurenci s viditelnou přítomností ve městě.' },
    { name: 'Slabé signály důvěry.', text: 'Na webu bylo málo potvrzení odbornosti a reputace, což ovlivňuje konverzi komerčních stránek.' },
  ],
  diagConclusion: 'Každá díra nebyla technická chyba, ale konkrétní místo, kde se ztrácely peníze.',

  techTitle: 'Co jsem udělal v technické vrstvě?',
  techAnswer: 'Před obsahem jsem zrychlil načítání a zavedl kompletní vrstvu strukturovaných dat. Bez ní by obsah ani komerční stránky vyhledávače a AI nečetly jako strukturované a důvěryhodné odpovědi.',
  techListLead: 'Zavedené značení:',
  techList: ['FAQPage', 'Article/BlogPosting', 'LocalBusiness/Organization', 'Service', 'BreadcrumbList', 'Person + Quote pro citace odborníka'],

  servTitle: 'Jak jsem přestavěl stránky služeb pro komerční záměr?',
  servAnswer: 'Klíčové stránky jsem přepsal tak, aby bylo na první pohled jasné, že jde o komerční nabídku, ne o článek. Stránky o cenách a o soudních překladech přinesly víc než polovinu letních poptávek.',

  blogTitle: 'Proč blog a FAQ jako horní část trychtýře?',
  blogAnswer: 'Spustil jsem blog pro informační dotazy kolem hlavních témat agentury: zachytí budoucí klienty dřív, než si uvědomí, že potřebují konkrétní službu, a povede je na správnou stránku služby. FAQ jsem přidal na každou klíčovou stránku.',
  blogText: { before: 'FAQ slouží uživatelům i citovatelnosti pro AI (Google AI Overview a podobné): rozšiřuje horní část trychtýře. Podrobněji: ', link: 'SEO a GEO/AEO', after: '.' },

  geoTitle: 'Co daly lokální stránky podle měst?',
  geoAnswer: 'Místo jedné obecné stránky „překlady v ČR“ jsem udělal samostatné stránky podle měst. Přinášejí poptávky, ne jen pozice: stránka pro Brno patří mezi 3 hlavní zdroje poptávek na webu.',
  geoList: [
    'Brno: top 3 zdroje poptávek na celém webu a zobrazení v Google AI Overview u svého tématu.',
    'Pardubice: top 2 pozice u hlavních komerčních dotazů.',
    'Stránka s více městy (Praha/Brno/Pardubice): top 5 zdrojů poptávek.',
  ],

  resTitle: 'Jaké byly výsledky za léto?',
  resAnswer: 'Poptávky z formuláře vzrostly 24× (+2300 %) v červnu–srpnu oproti březnu–květnu 2026. Návštěvnost šla za poptávkami: kliky +357 %, zobrazení +398 % v Search Console.',
  resTable: {
    head: ['Ukazatel', 'Období', 'Změna'],
    rows: [
      ['Poptávky z formuláře', 'březen–květen → červen–srpen 2026', '×24 (+2300 %)'],
      ['Kliky (Search Console)', 'poslední 4 měsíce → předchozí období [data se upřesňují]', '+357 %'],
      ['Zobrazení (Search Console)', 'totéž', '+398 %'],
    ],
  },
  resSource: 'Zdroj: Search Console, GA4.',
  sourcesTitle: 'Odkud přišly poptávky?',
  sources: [
    '„Ceník překladů“ (cs + en + uk): asi 35 % letních poptávek.',
    '„Soudní a úřední překlady“ (všechny jazyky): asi 24 %.',
    'Dohromady asi 60 %.',
    'Uvnitř „ceníku“: česká verze a angličtina + ukrajinština dohromady se dělí o poptávky zhruba 55/45, takže lokalizované verze konvertují skoro stejně jako originál.',
    'Zbylých asi 40 % se rozkládá mezi 10+ stránek: trychtýř nezávisí na jednom vstupu.',
  ],
  dynamics: 'Dynamika: podle GA4 návštěvnost držela na stejné úrovni v dubnu a květnu, když probíhaly technické a strukturální práce, a od června vzrostla několikanásobně. Růst návštěvnosti a poptávek začal ve stejném bodě, zhruba 2–3 měsíce po startu práce.',
  limits: 'Hranice: počítají se poptávky z formuláře. Reálný růst je vyšší (e-mail, telefonáty, messengery). Růst od nízké základny.',

  trendsTitle: 'Byla to sezóna? Co ukázal Google Trends',
  trendsAnswer: 'Ne. Za dva roky ukazuje Google Trends u širokého dotazu „překlad dokumentů“ každý duben prudký vrchol zájmu a od května do srpna pokles téměř na nulu. Poptávky přitom začaly růst od června, kdy zájem u tohoto dotazu už klesal.',
  trendsText: 'Abych růst nepřisuzoval sezóně bez ověření, prošel jsem dva roky dat z Google Trends. Hlavní dotazy agentury (soudní překlady, varianty podle měst) jsou na Google Trends příliš malé, proto jsem sezónnost měřil na širokém dotazu. Závěr: růst poptávek se nekryl s obecnou vlnou zájmu u širokého dotazu. Je to závěr z jednoho dotazu, ne z celého trhu.',

  lessonTitle: 'Šest praktických závěrů',
  lesson: [
    { title: 'Diagnóza před úpravami.', text: 'Nejdřív je potřeba pochopit byznys model a skutečné překážky, teprve potom hledat klíčová slova.' },
    { title: 'Technická vrstva první.', text: 'Strukturovaná data a zdraví webu musí být před obsahem, jinak mu vyhledávače a AI nevěří.' },
    { title: 'Komerční stránky musí vypadat komerčně.', text: 'Nejasný záměr zabíjí konverzi i při zdravé návštěvnosti.' },
    { title: 'Blog a FAQ jsou horní část trychtýře, ne samostatný obsahový marketing.', text: 'Existují proto, aby krmily stránky, které konvertují.' },
    { title: 'Lokální stránky podle měst, ne jedna obecná.', text: 'Geografické pokrytí se vyplatí poptávkami, ne jen pozicemi.' },
    { title: 'Před přisouzením růstu sobě ověřte makrotrend.', text: 'Růst při klesajícím zájmu u širokého dotazu je přesvědčivější než růst sám o sobě.' },
  ],
  lessonClosing: 'Není to sezónní výkyv ani šťastná stránka, ale trychtýř, kde každá vrstva (technický základ, jasný komerční záměr, obsah horní části, důvěra, lokální pokrytí) pracovala na jednom cíli: poptávky, ne pozice nebo návštěvnost samy o sobě. Je to můj závěr z jednoho projektu; takový výsledek zaručit nelze.',

  faqTitle: 'Časté otázky k případové studii',
  faq: [
    { q: 'Dá se růst v SEO mimo sezónu?', a: 'Dá se, ale zaručit to nelze. V tomto projektu poptávky z formuláře vzrostly 24× (jaro → léto 2026) od nízké základny, zatímco zájem o široký dotaz v Google Trends v těchto měsících klesal.' },
    { q: 'Jak poznat, že je růst skutečný, a ne sezónní?', a: 'Porovnejte svá data s Google Trends za několik let u hlavního širokého dotazu a podívejte se, jestli se moment růstu kryl s vrcholem zájmu. Také ověřte, jestli růst začal 2–3 měsíce po startu práce.' },
    { q: 'Co dají lokální stránky podle měst?', a: 'Odpovídají na lokální poptávku tam, kde je potřeba specialista poblíž. V tomto projektu se stránka pro Brno dostala mezi 3 hlavní zdroje poptávek na webu a stránka s více městy mezi 5 hlavních.' },
  ],

  relatedTitle: 'Související služby',
  related: ['start', 'fullSeo', 'maps', 'consulting'] as const,
  more: 'Více',
  ctaTitle: 'Chcete stejný trychtýř pro svůj web?',
  ctaText: 'Bezplatný audit ukáže technické chyby vašeho webu.',
  ctaAudit: 'Chci audit zdarma',
  ctaContact: 'Napište mi',
  part1Back: 'Hlavní případová studie: půl roku práce na webu',
  nextCases: [
    { key: 'caseTypo' as const, text: 'Sousední případová studie: SEO pro tiskárnu' },
    { key: 'caseEdu' as const, text: 'Sousední případová studie: SEO pro novou vzdělávací platformu' },
  ],

  series: { id: 'https://www.seo-eranosian.com/pripadove-studie/#seo-case-series', name: 'SEO případová studie překladatelské agentury' },
  schema: {
    about: ['SEO v nízké sezóně', 'SEO pro překladatelskou agenturu', 'jak získat poptávky přes SEO', 'lokální SEO pro pobočky', 'ověření sezónnosti přes Google Trends'],
  },
};

export const CASE_SEASON_CS = walk(raw);
