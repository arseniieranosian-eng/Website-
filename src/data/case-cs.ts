// Czech content of /pripadove-studie/seo-prekladatelska-agentura-4-mesice/ (brief of 20.10.2026): the anonymised case study.
// The client is never named (text, alt, captions, URL, JSON-LD). Only figures confirmed by the author's text appear, each
// with its period and source. NOT used until confirmed: ×24, ×6 impressions, ×300+ clicks, B2B ×3, +65-70 % a month,
// ChatGPT presence. The "Co bude dál?" block is hidden until the autumn data exists. No review block: there is no
// review of this project in the shared source (the partner agency's review is not used here).

// First publication of the page (site launch); do NOT bump it when the page is edited.
export const CASE_PUBLISHED = '2026-10-19';

export const CASE_CS = {
  lang: 'cs' as const,
  label: 'Případová studie · Překladatelská agentura',
  h1: 'SEO pro překladatelskou agenturu se třemi pobočkami',
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  project: 'Projekt: březen–červen',
  // Direct answer (48 words)
  answer: 'Za 4 měsíce SEO práce na vícejazyčném webu překladatelské agentury z Prahy vzrostl počet poptávek v červnu 8× oproti květnu, agentura získala prvního B2B klienta, obsadila 1. a 2. místo ve výsledcích vyhledávání pro své město a objevila se v Google AI Overview. To vše v letním útlumu.',
  dataNote: 'Přesná čísla a identitu klienta nezveřejňuji, stejně bych zacházel s vašimi daty. Grafy ukazují relativní růst, ne absolutní hodnoty.',

  startTitle: 'Jaký byl výchozí stav webu?',
  startAnswer: 'Web fungoval, ale nepřiváděl nové klienty. Byl postavený pro lidi, kteří firmu už znají a jen potřebují objednat.',
  startText: 'V březnu jsem začal pracovat na SEO překladatelské agentury z Prahy. Objednávkové tlačítko fungovalo, formulář se odesílal, stránky se načítaly. Ale ti, kdo hledají překlady, porovnávají nabídky nebo zjišťují, jaké dokumenty potřebují, se na web vůbec nedostali. Majitel chtěl od začátku B2B klienty: firmy, které objednávají pravidelně a uzavírají dlouhodobé smlouvy. Realistický odhad prvních znatelných výsledků jsme si domluvili na 3-5 měsíců, bez slibů zkratek.',

  localTitle: 'Proč jedna stránka pro každé město?',
  localAnswer: 'Agentura má pobočky v Praze, Brně a Pardubicích. Pro každé město jsem vytvořil samostatnou, ucelenou stránku, která cílí na lokální a transakční vyhledávání.',
  localText: [
    'Kdo hledá „soudní překlady Pardubice“, nic neprochází: potřebuje překladatele ve svém městě hned. Proto se název města neobjevuje jen v poznámce, ale v titulku, H1, textu, FAQ i meta description, a to přirozeně: adresa pobočky, otevírací doba, okolní města, nejčastější dokumenty pro místní klienty, regionální specifika.',
    'Stránka pro Pardubice obsahuje služby, ceny, lokální FAQ, recenze, dosah do okolních měst, samostatnou B2B sekci pro místní firmy a kontaktní formulář.',
  ],
  localResult: 'Výsledek: 1. místo na „soudní překlady Pardubice“ a 2. místo na „překlady Pardubice“. Při kontrole 15. 9. 2026 byla pobočka na dotaz „překlady Pardubice“ v Google AI Overview uvedena jako první, v organických výsledcích a v lokálním balíčku na prvním až druhém místě. Pozici nelze zaručit.',
  localDecision: 'V Pardubicích lidé hledají česky, proto má stránka jen českou verzi, bez anglické. Lokalizace není jen překlad, ale i rozhodnutí, které verze nestavět.',

  funnelTitle: 'Jak funguje obsah jako trychtýř?',
  funnelAnswer: 'Stránka služby zachytí toho, kdo je připravený objednat. Články zachytí všechny ostatní a vedou je ke správné stránce.',
  funnelText: 'Za 4 měsíce jsem publikoval 8 článků, uzavřel celý obsahový cluster kolem hodnotného tématu a postavil trychtýř kolem překladů pro zakládání s.r.o. Každý článek odpovídá na skutečnou otázku („co je soudní překlad“, „jaké dokumenty pro pobyt v ČR“, „jak funguje uznání diplomu“) a obsahuje jasnou cestu zpět na příslušnou stránku služby.',

  localizeTitle: 'Proč lokalizovat, a ne jen překládat?',
  localizeAnswer: 'Web běží ve čtyřech jazycích (čeština, ruština, ukrajinština, angličtina) a každá verze má vlastní sadu otázek, protože každé publikum řeší jiné situace.',
  localize: [
    'Ruská verze: otázka o vystavení plné moci pro právní záležitosti v Rusku a zemích SNS.',
    'Ukrajinská verze: dokumenty pro dočasnou ochranu a pro zápis dětí do školy.',
    'Česká verze: soudní překlady a dokumenty pro zahraniční zaměstnance.',
    'Anglická verze: přijímají české úřady dokumenty v angličtině bez překladu? (Ne.)',
  ],
  localizeResult: 'Každá jazyková verze se umísťuje na vlastní sadu dotazů, místo aby čtyři verze soupeřily o jeden.',
  faqImage: {
    src: '/images/pripadove-studie/faq-lokalizace-cs-uk.webp',
    width: 720,
    height: 730,
    alt: 'Porovnání časté dotazy české a ukrajinské verze webu překladatelské agentury: stejná struktura, ale různé otázky.',
    caption: 'Časté dotazy české a ukrajinské verze: stejná struktura, jiné otázky (například úřady a dokumenty).',
  },

  techTitle: 'Co jsem udělal v technickém SEO?',
  techAnswer: 'Zaměřil jsem se na tři oblasti: strukturovaná data, rychlost webu a mobilní verzi.',
  tech: [
    {
      title: 'Strukturovaná data',
      text: 'Každá stránka nese tři typy dat ve formátu JSON-LD přímo v HTML, bez pluginů a bez Tag Manageru: FAQPage (otázky a odpovědi připravené k citaci), Organization/LocalBusiness (potvrzuje, že jde o skutečnou firmu, a plní znalostní panel) a BreadcrumbList (čistá hierarchie webu, často nahradí neuspořádané URL v SERP).',
    },
    {
      title: 'Rychlost webu',
      text: 'Obrázkové widgety CMS web zpomalovaly: obalovaly obrázky do zbytečného kódu, inline stylů a někdy JavaScriptu. Nahradil jsem je čistým HTML <img> s deklarovanými rozměry a líným načítáním. Mobilní načítání kleslo z 5-6 s na 3,6 s. Stejné obrázky, stejný obsah, jiný způsob doručení.',
    },
    {
      title: 'Mobilní verze',
      text: 'Je technicky zdravá: rychlá, procházitelná, plně funkční. UX investice jde do desktopu, protože u B2B služby klienti nahrávají dokumenty a rozhodují se u počítače. Mobile-first indexace je požadavek Google, který plním; mobile-first design je moje rozhodnutí podle chování publika.',
    },
  ],
  speed: {
    label: 'Mobilní rychlost, před a po',
    before: { tag: 'Před', value: '5-6 s', title: 'Obrázkové widgety CMS', text: 'Nadbytečné obaly, inline styly, JS' },
    after: { tag: 'Po', value: '3,6 s', title: 'Čisté HTML <img>', text: 'Deklarované rozměry + líné načítání' },
    gain: 'o 28-40 % rychleji',
    caption: 'Mobilní načítání podle PageSpeed Insights: z 5-6 s na 3,6 s po nahrazení obrázkových widgetů čistým HTML s deklarovanými rozměry a líným načítáním.',
  },

  resultsTitle: 'Jaké byly výsledky?',
  resultsAnswer: 'Za 4 měsíce práce vzrostl počet poptávek v červnu 8× oproti květnu a agentura získala prvního B2B klienta. Všechno v létě, kdy lidé odpočívají a poptávka klesá.',
  results: [
    'Poptávky: 8× v červnu oproti květnu (formulář a e-mail; telefonáty a zprávy se přesně neměří, reálné číslo je vyšší).',
    'První B2B klient: zástupce firmy, přesně ten typ klienta, kterého majitel chtěl od začátku.',
    'Rekordní týden konverzí v polovině června.',
    'Červenec: do poloviny měsíce přibližně 80 % výsledku celého června.',
    'Pozice: 1. a 2. místo pro město agentury.',
    'AI Overview: web se objevil v odpovědi Google AI Overview.',
    'První konverze z AI v červnu.',
  ],
  resultsNote: 'Výsledky přišly navzdory sezóně, ne díky ní.',

  aiTitle: 'Jak se v analytice objevil nový kanál AI Assistant?',
  aiAnswer: 'V GA4 jsem našel samostatný kanál AI Assistant: návštěvníky, kteří se zeptali AI (ChatGPT, Perplexity, Gemini) a prokliknuli na web. V červnu z něj přišla první konverze: skutečná poptávka.',
  aiText: [
    'Neoptimalizoval jsem „pro AI“ jako samostatný úkol. Ale práce, kterou jsem dělal (FAQ bloky s čistými páry otázka a odpověď, články se shrnutím „stručně“ na začátku, nadpisy H2 ve formě otázek, strukturovaná data), je přesně to, co AI systémy čtou a citují.',
    'AI nenahradila SEO, zvedla laťku. Strukturovaný a dobře napsaný obsah se dnes odměňuje na dvou místech: v klasickém vyhledávání a v odpovědích AI.',
  ],
  aiMore: { before: 'Podrobnosti: ', link: 'SEO + GEO/AEO', after: '.' },
  channels: {
    title: 'Návštěvnost podle kanálů, 6 měsíců',
    months: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn'],
    legend: ['Organické vyhledávání', 'Přímá návštěvnost', 'AI Assistant'],
    // Relative stacked values [organic, direct, AI] read from the author's illustrative chart (not client data).
    data: [[296, 161, 0], [312, 151, 6], [323, 146, 10], [334, 129, 27], [340, 112, 49], [350, 97, 75]],
    note: 'AI Assistant: nový kanál, zatím malý, roste',
    alt: 'Ilustrativní schéma návštěvnosti podle kanálů za 6 měsíců: organická návštěvnost roste, kanál AI Assistant je nový a stále malý, ale roste.',
    caption: 'Ilustrativní schéma podle vzorce, který vidím na živém projektu. Nejde o přesná data klienta.',
  },

  stepsTitle: 'Šest kroků pro váš web',
  steps: [
    { title: 'Máte více poboček? Vytvořte pro každou samostatnou stránku.', text: 'Ne zmínku, ale celou stránku s lokálním obsahem, FAQ, recenzemi a kontaktním formulářem.' },
    { title: 'Přiřaďte stránku k záměru.', text: 'Stránka služby má převádět, článek informovat a vést dál. Dohromady pokryjí celý trychtýř.' },
    { title: 'Nepřekládejte, lokalizujte.', text: 'Různé publikum má různé otázky a váš obsah to má odrážet.' },
    { title: 'Investujte do technického SEO včas.', text: 'Strukturovaná data, rychlost a zdraví mobilní verze se časem kumulují.' },
    { title: 'Sledujte v analytice návštěvnost z AI.', text: 'Zatím je malá, ale roste. V odpovědích AI se objevují weby s čistou strukturou, jasnými odpověďmi a skutečnou odborností.' },
    { title: 'Buďte trpěliví a měřte upřímně.', text: 'SEO trvá měsíce. Uvádějte skutečná čísla, i ta, která nevypadají působivě. Důvěra stojí na transparentnosti, ne na nafouknutých metrikách.' },
  ],

  quote: {
    text: 'SEO není kouzlo. Není to štěstí. Je to systém, a systémy fungují i v letním útlumu, i v malých městech, i když výsledky chvíli trvají. Takhle vypadají čtyři měsíce soustavné práce, než se z nich stane vidět výsledek.',
    author: 'Arsenii Eranosian, SEO a GEO/AEO specialista',
  },

  faqTitle: 'Časté otázky k případové studii',
  faq: [
    { q: 'Jak získat B2B klienty přes SEO?', a: 'Spojte lokální stránky pro každé město, články, které čtenáře vedou ke službě, a technický základ. U této agentury přišel první B2B klient po 4 měsících práce. Výsledek nelze zaručit, záleží na oboru a konkurenci.' },
    { q: 'Proč jedna stránka pro každé město?', a: 'Kdo hledá překladatele ve svém městě, potřebuje ho hned. Samostatná stránka s lokálním obsahem odpoví na místní dotazy na jednom místě.' },
    { q: 'Proč lokalizovat místo překládat?', a: 'Každé publikum má jiné otázky a hledá jinak. Lokalizovaná verze se umísťuje na vlastní dotazy, místo aby se verze navzájem konkurovaly.' },
    { q: 'Může se web objevit v Google AI Overview?', a: 'Zaručit to nelze. U této agentury se to stalo po práci na SEO a na jasných odpovědích v obsahu. Podrobnosti: SEO + GEO/AEO.' },
  ],

  relatedTitle: 'Související služby',
  related: ['start', 'fullSeo', 'maps', 'consulting'] as const,
  more: 'Více',
  ctaTitle: 'Chcete stejný postup pro svůj web?',
  ctaText: 'Bezplatný audit ukáže technické chyby vašeho webu.',
  ctaAudit: 'Chci bezplatný audit',
  ctaContact: 'Napište mi',

  schema: {
    about: ['lokální SEO', 'vícejazyčné SEO', 'SEO pro překladatelskou agenturu', 'viditelnost v AI Overviews'],
  },
};
