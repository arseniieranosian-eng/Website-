// Czech content of the blog article /blog/web-ordinace-nebo-mapy-a-katalogy/ (brief of 23.11.2026, comparative series, article 2): an informational comparison of THREE CHANNELS for a dental practice (own website,
// profile in maps, record in a catalogue), not of practices or contractors. Texts are verbatim from the brief. Checked on 23.11.2026: prices on /start-3-mesice/ (50 000 Kč), /seo-pro-zubni-ordinace-praha/ (Full SEO od 24 000 Kč měsíčně),
// /lokalni-seo-mapy/ (Full 1 800 Kč měsíčně za 1 profil, od 4 měsíců, mapy jsou součástí Start i Full SEO); Firmy.cz help: adding a profile is free, profiles are findable on Mapy.com, paid tariffs and an auction decide the order,
// the look of the card differs for paying and non-paying clients (the help pages show no date of change). No other catalogue / clinic / agency / web studio is named, no outside prices, no observation figures, no promises,
// no text about treatment (where mentioned: "schvaluje lékař"). One link to the profile article in H2-6; ONE button + ONE text link in the closing block; no other links to the service pages. Dates by hand ([?-5]).
// The comparative wording is to be shown to a lawyer before the series is published ([?-3]).
import { walk } from '../lib/cs-typo';

// Set by hand: the day the author publishes (the day of the brief is the default). Do NOT bump it when the page is edited.
export const POST_WEBMAPS_PUBLISHED = '2026-11-23';
export const POST_WEBMAPS_MODIFIED = '2026-11-23';

const K = ' Kč';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/web-ordinace-nebo-mapy-a-katalogy.webp', width: 1200, height: 630, alt: 'Ilustrace: web, mapa a katalog jako tři místa, kde je vidět ordinace' },

  lead: 'Vlastní web, profil v mapách a záznam v katalogu ordinaci ukazují různým lidem a různým způsobem. Tady je přehled, pro koho se hodí která varianta, co obsahuje, kolik orientačně stojí a jaká má omezení. Žádná varianta nezaručuje pacienty ani pozici.',

  diffTitle: 'Čím se liší vlastní web, profil v mapách a záznam v katalogu?',
  diffAnswer: 'Vlastní web popisuje služby, lékaře a objednání a hledají na něm lidé, kteří ordinaci vyhledávají sami. Profil v mapách ukazuje polohu, telefon a ordinační dobu. Katalog ordinaci nabízí lidem, kteří srovnávají. Varianty se doplňují, žádná z nich není univerzálně nejlepší.',
  tableHead: ['Varianta', 'Pro koho je vhodná', 'Orientační cena', 'Výhody', 'Omezení'],
  tableRows: [
    ['Vlastní web a SEO', 'Pro ordinace, které pacienti hledají sami na Googlu, Seznamu nebo v AI', `Tvorbu webu nenabízím. SEO: Start 50 000${K} na 3 měsíce, Full SEO od 24 000${K} měsíčně`, 'Je místo pro služby, lékaře a objednání', 'Vyžaduje průběžnou práci, výsledek ani čas nelze zaručit'],
    ['Profil v mapách', 'Pro ordinace, u kterých při výběru rozhoduje poloha', `Mapy samostatně: balíček Full 1 800${K} měsíčně za 1 profil, od 4 měsíců; mapy jsou součástí i SEO Start a Full SEO`, 'Ukazuje adresu, telefon a ordinační dobu přímo v mapách', 'Údaje je třeba udržovat; co napíšou jiní, nemusí být plně pod kontrolou ordinace'],
    ['Záznam v katalogu', 'Pro ordinace, které chtějí být vidět tam, kde lidé srovnávají', 'Přidání profilu je podle nápovědy Firmy.cz zdarma; placené tarify a aukce, ceny neuvádím', 'Další místo, kde ordinaci najdou i na Mapy.com', 'U placených tarifů řadí aukce a karta vypadá jinak než u neplatících'],
  ],
  tableNote: 'Ceny jsou orientační podle mých stránek služeb a nápovědy Firmy.cz, zkontrolováno 23. 11. 2026. Tabulka vychází z obecné logiky a nehodnotí práci jiných dodavatelů ani konkrétních služeb.',
  quote: 'Web, profil v mapách i katalog ukazují ordinaci jiným lidem. Nejde o soupeře, jde o to, co z toho zvládnete udržovat.',

  webTitle: 'Kdy se hodí vlastní web?',
  webAnswer: 'Vlastní web se hodí, když pacienti ordinaci vyhledávají sami, například na Googlu, Seznamu nebo v odpovědích AI. Je na něm místo pro služby, lékaře a objednání. Počítejte s průběžnou prací, výsledek ani čas nelze zaručit. Texty o léčbě musí schválit lékař.',

  mapsTitle: 'Kdy se hodí profil v mapách?',
  mapsAnswer: 'Profil v mapách se hodí, když při výběru ordinace rozhoduje poloha. Ukazuje adresu, telefon a ordinační dobu přímo ve výsledcích map. Údaje je potřeba udržovat, aby seděly s webem. Co o ordinaci napíšou jiní, nemusí být plně pod její kontrolou.',

  catalogTitle: 'Kdy se hodí záznam v katalogu?',
  catalogAnswer: 'Záznam v katalogu se hodí, když chcete být vidět i tam, kde lidé ordinace srovnávají. Podle nápovědy Firmy.cz je vložení firmy zdarma a profily jsou dohledatelné i na Mapy.com. U placených tarifů řadí profily aukce a karta vypadá jinak než u neplatících.',

  priceTitle: 'Kolik která varianta orientačně stojí?',
  priceAnswer: `Orientační ceny uvádím podle svých stránek služeb k 23. 11. 2026. Tvorbu webu nenabízím, cenu webu proto neuvádím. SEO pro zubní ordinace: Start na tři měsíce 50 000${K} a Full SEO od 24 000${K} měsíčně. Mapy samostatně: balíček Full 1 800${K} měsíčně za jeden profil, od čtyř měsíců.`,
  sourcesLine: 'Zdroje: nápověda Firmy.cz (zkontrolováno 23. 11. 2026; na stránkách datum změny není uvedeno):',
  sources: [
    { text: 'vložení nové firmy', href: 'https://napoveda.firmy.cz/zaciname/vlozeni-nove-firmy/' },
    { text: 'kde se profil zobrazuje', href: 'https://napoveda.firmy.cz/zaciname/kde-se-profil-zobrazuje/' },
    { text: 'princip aukce', href: 'https://napoveda.firmy.cz/kampane-cileni/princip-aukce-a-predplatne/' },
  ],

  rightTitle: 'Jak to dělat správně?',
  rightAnswer: {
    before: 'Základem je, aby údaje o ordinaci byly na webu, v profilu a v katalogu stejné a aby je spravoval někdo, kdo k nim má přístup. Pak vyberte variantu podle toho, jak vás pacienti hledají. Postup vyplnění profilu popisuji ',
    link: 'v samostatném článku',
    after: '. Žádný krok nezaručuje výsledek.',
  },
  rightSteps: [
    'Zapište název, adresu, telefon a ordinační dobu přesně tak, jak jsou na vývěsce.',
    'Nastavte stejné údaje na webu, v profilu na mapách a v katalogu.',
    'Určete, kdo má k jednotlivým profilům přístup a kdo údaje mění.',
    'Vyberte varianty podle toho, jak vás pacienti hledají a kolik práce zvládnete udržovat.',
    'Údaje pravidelně kontrolujte a po každé změně opravte všude najednou.',
  ],
  rightNote: 'Interval kontroly je moje doporučení, ne pravidlo.',

  notTitle: 'Co z tohoto srovnání nevyplývá?',
  notAnswer: 'Srovnání neříká, která varianta přivede víc pacientů, ani že ordinace musí mít všechny tři. Nevychází z měření výsledků a nehodnotí práci jiných dodavatelů ani konkrétních služeb. Ukazuje, kdy se varianty hodí. Rozhodnutí závisí na čase, rozpočtu a na tom, odkud pacienti přicházejí.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Musí mít ordinace záznam v katalogu?', a: 'Katalog firem není úřední registr. Je to volitelná možnost, jak být vidět tam, kde lidé ordinace srovnávají. Zda se vyplatí, závisí na tom, odkud pacienti ordinaci znají, a na tom, zda údaje zvládnete udržovat. Univerzálně nejlepší kombinace pro každou ordinaci neexistuje.' },
    { q: 'Je záznam v katalogu zdarma?', a: 'Podle nápovědy Firmy.cz je přidání firemního profilu zdarma a profily jsou dohledatelné i na Mapy.com. Nabízejí se také placené tarify a aukce, které ovlivňují řazení a vzhled karty. Podmínky se mohou měnit, proto je zkontrolujte u provozovatele. Zkontrolováno 23. 11. 2026.' },
    { q: 'Dají se varianty kombinovat?', a: 'Ano, varianty se doplňují. Důležité je, aby údaje o ordinaci byly všude stejné a aby je někdo pravidelně kontroloval. Začít lze tím, co zvládnete udržovat, a další variantu přidat později. Pořadí a rozsah závisí na čase a rozpočtu, ne na univerzálním pravidle.' },
    { q: 'Mohu si údaje v katalogu a v mapách spravovat sám?', a: 'Ano, profil spravuje majitel nebo pověřená osoba ordinace, pokud k němu má přístup. Já pomáhám s nastavením a kontrolou, texty o léčbě ale patří lékaři. Zapište si, kdo má přístup k jednotlivým profilům, a po změně telefonu nebo ordinační doby opravte údaje všude najednou.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  endTitle: 'Chcete mít údaje své ordinace v pořádku na webu i v mapách?',
  endCta: 'SEO pro zubní ordinace v Praze',
  endLink: { before: 'Podívejte se také na', text: 'lokální SEO pro Google Maps a Mapy.com', after: '.' },
  moreTitle: 'Další články',
  moreLead: 'Další články o webech, mapách a kanálech pro zubní ordinace.',
  moreMore: 'Číst článek',
};

export const POST_WEBMAPS_CS = walk(raw);
