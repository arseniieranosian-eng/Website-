// Czech content of the blog article /blog/jednorazove-nastaveni-profilu-nebo-sprava-map/ (brief of 23.11.2026, comparative series, article 3): a general (not niche) comparison of WAYS OF WORKING WITH PROFILES IN MAPS for a business owner:
// by yourself according to the help, maps as a separate service of the author, maps inside SEO Start / Full SEO. Texts are verbatim from the brief. Paraphrases of the help pages (NO direct quotes) checked on 23.11.2026:
// Google 7107242 (verify to edit / interact), 9918094 (performance data only for verified profiles; calls = clicks on the call button, directions, website clicks), 3480441 (Google may update info; 4 days to answer a suggested edit,
// otherwise it may be published if other sources support it), 6303076 (confirm hours for official holidays), 3403100 (owners / managers, each user needs an own Google Account, no password sharing), 7353941 (third parties: the client keeps
// ownership or co-ownership; explicit approval to reply to reviews; a management fee: tell that the profile is a service at no extra cost); Firmy.cz statistics (export to CSV). The Google pages show no date -> "zkontrolováno 23. 11. 2026".
// Prices checked on /lokalni-seo-mapy/, /start-3-mesice/, /full-seo/. No agencies, firms or other catalogues, no outside prices, no promises, no "number of reviews". One link to the profile article in H2-6 ([?-2]); ONE button to /lokalni-seo-mapy/.
// The comparative wording and the Google third-party policy are to be shown to a lawyer before the series is published ([?-4]). Dates by hand ([?-6]).
import { walk } from '../lib/cs-typo';

// Set by hand: the day the author publishes (the day of the brief is the default). Do NOT bump it when the page is edited.
export const POST_PROFMGMT_PUBLISHED = '2026-11-23';
export const POST_PROFMGMT_MODIFIED = '2026-11-23';

const K = ' Kč';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/jednorazove-nastaveni-profilu-nebo-sprava-map.webp', width: 1200, height: 630, alt: 'Ilustrace: jednou nastavený profil a profil, o který se průběžně pečuje' },

  lead: 'Jednorázové nastavení profilů je jedna práce, která končí. Průběžná správa je opakovaná péče o profily na Googlu, Mapy.com a Firmy.cz. Tady je přehled, pro koho se hodí která varianta, co obsahuje, kolik orientačně stojí a jaká má omezení. Žádná varianta nezaručuje pozici ani poptávky.',

  diffTitle: 'Čím se liší jednorázové nastavení profilů a průběžná správa?',
  diffAnswer: 'Jednorázové nastavení vyplní profily a skončí. Průběžná správa údaje hlídá, odpovídá na recenze a sleduje statistiky. Nastavit si profily můžete sám, nebo je může spravovat někdo jiný. Varianty se liší tím, kolik opakované práce chcete předat, a žádná není univerzálně nejlepší.',
  tableHead: ['Varianta', 'Pro koho je vhodná', 'Orientační cena', 'Výhody', 'Omezení'],
  tableRows: [
    ['Nastavení sám podle nápovědy', 'Pro firmy, které mají čas profily vyplnit a udržovat', 'Bez nákladů na službu, počítá se váš čas', 'Plná kontrola, nikomu nepředáváte přístup', 'Kontrolu údajů, odpovědi na recenze a statistiky děláte sám'],
    ['Mapy samostatně', 'Pro firmy, které chtějí profily udržovat průběžně a nepotřebují práci na webu', `Balíček Full 1 800${K} měsíčně za 1 profil, od 4 měsíců; nebo platba podle výsledků (1 000${K} za 10 kliknutí na hovor, 1 000${K} za 20 tras, 500${K} za 10 prokliků)`, 'Údaje, odpovědi na recenze a měření z profilů v jedné službě', 'Minimální doba 4 měsíce; výsledek se nezaručuje'],
    ['Mapy v rámci SEO Start a Full SEO', 'Pro firmy, které potřebují i práci na webu', `SEO Start 50 000${K} na 3 měsíce; Full SEO od 15 000${K} měsíčně (u některých oborů vyšší)`, 'Web a mapy se řeší společně', 'Vyšší cena a delší závazek; výsledek se nezaručuje'],
  ],
  tableNote: 'Ceny jsou orientační podle mých stránek služeb, zkontrolováno 23. 11. 2026. Tabulka nehodnotí práci jiných dodavatelů.',
  quote: 'Jednorázové nastavení dá profilu základ. Údaje se ale mohou změnit i bez vás, a proto je někdo musí hlídat.',

  onceTitle: 'Pro koho je vhodné jednorázové nastavení?',
  onceAnswer: 'Hodí se, když se údaje firmy mění zřídka, máte čas je sám zkontrolovat a nepotřebujete měřit výsledky. Základem je ověřený profil se správným názvem, adresou, telefonem a hodinami. Po změně údajů ho ale musíte upravit sám a odpovídat na recenze.',
  onceList: [
    'údaje se mění zřídka,',
    'čas na kontrolu máte,',
    'výsledky neměříte,',
    'odpovídat na recenze zvládnete sám.',
  ],

  ongoingTitle: 'Pro koho je vhodná průběžná správa?',
  ongoingAnswer: 'Hodí se, když se údaje mění častěji, přibývají recenze a chcete sledovat hovory, trasy a prokliky na web. Dává smysl tam, kde nemáte čas profily udržovat. Výsledek se ale nezaručuje a profil má zůstat ve vašem vlastnictví, i když ho spravuje někdo jiný.',
  ongoingList: [
    'údaje se mění častěji,',
    'přibývají recenze,',
    'chcete měřit hovory, trasy, prokliky,',
    'není kdo profily udržuje.',
  ],

  helpTitle: 'Co obnáší průběžná správa podle nápovědy?',
  helpAnswer: 'Podle nápovědy Google je pro úpravy údajů, odpovědi na recenze a statistiky nutné profil ověřit. Google může údaje aktualizovat sám, pokud se zdroje liší, a otevírací dobu na státní svátky doporučuje potvrdit zvlášť. Firmy.cz nabízí statistiky s exportem do CSV.',
  helpList: [
    'profil je ověřený (jinak nelze upravit údaje, odpovídat na recenze ani vidět statistiky),',
    'údaje se kontrolují po změně a před svátky,',
    'někdo hlídá změny navržené Googlem (neodpovíte-li do čtyř dnů, může je Google zveřejnit sám, jsou-li potvrzeny jinými zdroji),',
    'statistiky: hovory, trasy, prokliky na web (Google), prokliky na telefon a trasu s exportem CSV (Firmy.cz).',
  ],
  sourcesLabel: 'Zdroje (zkontrolováno 23. 11. 2026; na stránkách Google ani Firmy.cz datum změny není uvedeno):',
  helpSources: [
    { text: 'Google: ověření profilu', href: 'https://support.google.com/business/answer/7107242' },
    { text: 'Google: výkon profilu', href: 'https://support.google.com/business/answer/9918094?hl=cs' },
    { text: 'Google: aktualizace údajů', href: 'https://support.google.com/business/answer/3480441?hl=cs' },
    { text: 'Google: speciální otevírací doba', href: 'https://support.google.com/business/answer/6303076?hl=cs' },
    { text: 'Firmy.cz: statistiky', href: 'https://napoveda.firmy.cz/administracni-rozhrani/statistiky/' },
  ],

  priceTitle: 'Kolik která varianta orientačně stojí?',
  priceAnswer: `Orientační ceny uvádím podle svých stránek služeb k 23. 11. 2026. Samostatně mapy stojí 1 800${K} měsíčně za jeden profil, od čtyř měsíců, nebo platíte podle výsledků. V rámci SEO Start je mapy součástí za 50 000${K} na tři měsíce a v rámci Full SEO od 15 000${K} měsíčně.`,

  rightTitle: 'Jak to dělat správně?',
  rightAnswer: {
    before: 'Nejdřív určete, co chcete měřit a kdo je vlastník profilu. Pokud správu svěříte jinému, profil má zůstat vaším majetkem nebo spolumajetkem. Pak domluvte, kdo odpovídá na recenze a jak se kontrolují údaje. Postup vyplnění profilu popisuji ',
    link: 'v samostatném článku',
    after: '. Žádný krok nezaručuje výsledek.',
  },
  rightSteps: [
    'Určete, co chcete z profilů měřit: hovory, trasy nebo prokliky na web.',
    'Ověřte profily a zapište, kdo je vlastník a kdo správce.',
    'Pokud správu svěříte jinému, profil musí zůstat ve vašem vlastnictví nebo spoluvlastnictví.',
    'Domluvte, kdo odpovídá na recenze; odpovídání za vás vyžaduje výslovný souhlas.',
    'Pravidelně kontrolujte statistiky a údaje. Interval je moje doporučení, ne pravidlo.',
  ],
  rightSource: { before: 'Zdroj ke krokům 3 a 4: zásady Google pro správu profilů třetí stranou,', href: 'https://support.google.com/business/answer/7353941', after: ' (zkontrolováno 23. 11. 2026).' },
  rightNote: 'Žádný z kroků nezaručuje výsledek ani pozici.',

  notTitle: 'Co z tohoto srovnání nevyplývá?',
  notAnswer: 'Srovnání neříká, která varianta přinese víc hovorů, tras či poptávek, ani že profily musíte svěřit někomu jinému. Nevychází z měření výsledků a nehodnotí práci jiných dodavatelů. Ukazuje, co která varianta obnáší. Rozhodnutí závisí na čase, rozpočtu a na tom, kolik práce zvládnete udržovat.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Jak často aktualizovat profil na Googlu?', a: 'Nenašel jsem v nápovědě pevný interval. Google doporučuje zvlášť potvrdit otevírací dobu na státní svátky a údaje opravit po každé změně. Může je také sám upravit, když zdroje uvádějí něco jiného, a pokud neodpovíte do čtyř dnů, může změnu zveřejnit automaticky. Proto údaje hlídejte.' },
    { q: 'Může profil spravovat někdo jiný než majitel?', a: 'Ano. Majitel profilu může na Googlu pozvat další vlastníky nebo správce, kteří upravují údaje a odpovídají na recenze, a každý potřebuje vlastní účet Google. Při správě třetí stranou má podle zásad Google zákazník zůstat vlastníkem nebo spoluvlastníkem profilu. Heslo nikomu nesdílejte.' },
    { q: 'Je profil na Googlu zdarma, i když platím za správu?', a: 'Podle zásad Google pro správu profilů třetí stranou má ten, kdo účtuje poplatek za správu, zákazníkovi sdělit, že Firemní profil je služba bez dalších nákladů. Platíte tedy za práci správce, ne za samotný profil. Tuto informaci má správce uvést jasně a předem. Zkontrolováno 23. 11. 2026.' },
    { q: 'Jak poznám, že správa profilu něco přinesla?', a: 'Podle nápovědy Google ukazuje panel výkonu, kolikrát zákazníci klikli na tlačítko hovoru, zeptali se na trasu nebo klikli na odkaz na web. Údaje jsou jen u ověřených profilů. Firmy.cz nabízí statistiky s exportem do CSV. Čísla ukazují aktivitu, nevysvětlují ale, proč k ní došlo.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  endTitle: 'Chcete vědět, kterou variantu zvolit pro své profily?',
  endCta: 'Lokální SEO pro Google Maps a Mapy.com',
  moreTitle: 'Další články',
  moreLead: 'Další články o profilech, mapách a volbě mezi variantami.',
  moreMore: 'Číst článek',
};

export const POST_PROFMGMT_CS = walk(raw);
