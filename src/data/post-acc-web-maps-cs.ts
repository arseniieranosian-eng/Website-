// Czech content of the blog article /blog/web-ucetni-kancelare-mapy-a-katalogy/ (brief of 23.11.2026, comparative series, article 4): a comparison of THREE CHANNELS (own website, profile in maps, catalogue entry) for an accounting firm,
// not of firms or contractors. Texts are verbatim from the brief, written anew (not copied from the dental article). Sources: Firmy.cz help (add a firm - free, profiles also on Mapy.com; where the profile is shown - the look of the card differs
// for paying / non-paying; auction principle) and Google 9918094 (statistics only for verified profiles), all "zkontrolováno 23. 11. 2026". Prices checked on /start-3-mesice/, /full-seo/, /seo-pro-ucetni-kancelare-praha/, /lokalni-seo-mapy/.
// No names of firms, agencies, studios or other catalogues; no outside prices; no promises; no tax or accounting advice. ONE link to the local-presence article (H2-6); ONE button to the niche landing + ONE text link to /lokalni-seo-mapy/.
// The comparative wording is to be shown to a lawyer before the series is published. Dates by hand.
import { walk } from '../lib/cs-typo';

export const POST_ACCWEBMAPS_PUBLISHED = '2026-11-23';
export const POST_ACCWEBMAPS_MODIFIED = '2026-11-23';

const K = ' Kč';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/web-ucetni-kancelare-mapy-a-katalogy.webp', width: 1200, height: 630, alt: 'Ilustrace: web, mapa a katalog jako tři místa, kde je vidět účetní kancelář' },

  lead: 'Vlastní web, profil v mapách a záznam v katalogu ukazují účetní kancelář různým lidem a různým způsobem. Tady je přehled, pro koho se hodí která varianta, co obsahuje, kolik orientačně stojí a jaká má omezení. Žádná varianta nezaručuje klienty ani pozici.',

  diffTitle: 'Čím se liší vlastní web, profil v mapách a záznam v katalogu?',
  diffAnswer: 'Vlastní web vysvětluje služby, postup spolupráce a kontakt a hledají na něm lidé, kteří kancelář vyhledávají sami. Profil v mapách ukazuje polohu, telefon a pracovní dobu. Katalog kancelář nabízí lidem, kteří srovnávají. Varianty se doplňují a žádná není univerzálně nejlepší.',
  tableHead: ['Varianta', 'Pro koho je vhodná', 'Orientační cena', 'Výhody', 'Omezení'],
  tableRows: [
    ['Vlastní web a SEO', 'Pro kanceláře, které klienti hledají sami na Googlu, Seznamu nebo v AI', `Tvorbu webu nenabízím. SEO: Start 50 000${K} na 3 měsíce, Full SEO od 15 000${K} měsíčně`, 'Je místo pro služby, postup spolupráce a kontakt', 'Vyžaduje průběžnou práci, výsledek ani čas nelze zaručit'],
    ['Profil v mapách', 'Pro kanceláře, u kterých při výběru rozhoduje poloha', `Mapy samostatně: balíček Full 1 800${K} měsíčně za 1 profil, od 4 měsíců; mapy jsou součástí i SEO Start a Full SEO`, 'Ukazuje adresu, telefon a pracovní dobu přímo v mapách', 'Údaje je třeba udržovat; u práce z domova nebo u klientů je potřeba s adresou zacházet opatrně'],
    ['Záznam v katalogu', 'Pro kanceláře, které chtějí být vidět tam, kde lidé srovnávají', 'Přidání profilu je podle nápovědy Firmy.cz zdarma; placené tarify a aukce, ceny neuvádím', 'Další místo, kde kancelář najdou i na Mapy.com', 'U placených tarifů ovlivňuje pozici aukce a karta vypadá jinak než u neplatících'],
  ],
  tableNote: 'Ceny jsou orientační podle mých stránek služeb a nápovědy Firmy.cz, zkontrolováno 23. 11. 2026. Tabulka vychází z obecné logiky a nehodnotí práci jiných dodavatelů ani konkrétních služeb.',
  quote: 'Kancelář, která roste doporučením, nemusí mít všechno. Důležité je, aby to, co má, bylo pravdivé a stejné všude.',

  webTitle: 'Kdy se hodí vlastní web?',
  webAnswer: 'Vlastní web se hodí, když klient kancelář hledá sám, například na Googlu, Seznamu nebo v odpovědích AI, a chce vidět služby, postup spolupráce a kontakt. Počítejte s průběžnou prací, výsledek ani čas nelze zaručit. Pokud kancelář roste hlavně doporučením, může být web jen vizitkou.',
  webNote: 'Je to moje doporučení, ne pravidlo.',

  mapsTitle: 'Kdy se hodí profil v mapách?',
  mapsAnswer: 'Profil v mapách se hodí, když klienti hledají kancelář v okolí a rozhoduje poloha. Ukazuje adresu, telefon a pracovní dobu přímo ve výsledcích map. Pokud kancelář pracuje z domova nebo u klientů, je potřeba s adresou zacházet opatrně. Údaje je třeba udržovat a hlídat.',

  catalogTitle: 'Kdy se hodí záznam v katalogu?',
  catalogAnswer: 'Katalog je třetí místo, kde může být kancelář vidět. Podle nápovědy Firmy.cz je přidání firemního profilu zdarma a profily jsou dohledatelné i na Mapy.com. Pozici u placených tarifů ovlivňuje aukce. Zda se vyplatí, závisí na tom, odkud klienti kancelář znají a zda údaje zvládnete udržovat.',

  priceTitle: 'Kolik která varianta orientačně stojí?',
  priceAnswer: `Orientační ceny uvádím podle svých stránek služeb k 23. 11. 2026. Tvorbu webu nenabízím, cenu webu proto neuvádím. SEO pro účetní kanceláře: Start na tři měsíce 50 000${K} a Full SEO od 15 000${K} měsíčně. Mapy samostatně: balíček Full 1 800${K} měsíčně za jeden profil, od čtyř měsíců.`,
  sourcesLine: 'Zdroje: nápověda Firmy.cz (zkontrolováno 23. 11. 2026; na stránkách datum změny není uvedeno):',
  sources: [
    { text: 'vložení nové firmy', href: 'https://napoveda.firmy.cz/zaciname/vlozeni-nove-firmy/' },
    { text: 'kde se profil zobrazuje', href: 'https://napoveda.firmy.cz/zaciname/kde-se-profil-zobrazuje/' },
    { text: 'princip aukce', href: 'https://napoveda.firmy.cz/kampane-cileni/princip-aukce-a-predplatne/' },
  ],

  rightTitle: 'Jak to dělat správně?',
  rightAnswer: {
    before: 'Nejdřív zjistěte, jak vás klienti dnes nacházejí: doporučením, na Googlu nebo v mapách. Podle toho zvolte variantu, kterou zvládnete udržovat, a údaje o kanceláři držte všude stejné. Podrobně, co do profilu vyplnit, popisuji ',
    link: 'v samostatném článku',
    after: '. Žádný krok nezaručuje výsledek.',
  },
  rightSteps: [
    'Zapište, odkud klienti přicházejí dnes: doporučení, web, mapy nebo katalog.',
    'Vyberte variantu podle toho, co zvládnete udržovat.',
    'Zapište název, adresu, telefon a pracovní dobu a nastavte stejné údaje všude.',
    'Určete, kdo má k profilům přístup a kdo údaje mění.',
    'Po prvních měsících porovnejte, odkud klienti přicházejí, a variantu upravte.',
  ],
  rightNote: 'Interval porovnání je moje doporučení, ne pravidlo.',

  notTitle: 'Co z tohoto srovnání nevyplývá?',
  notAnswer: 'Srovnání neříká, která varianta přivede víc klientů, ani že kancelář musí mít všechny tři. Nevychází z měření výsledků a nehodnotí práci jiných dodavatelů. Pro kancelář, která roste hlavně doporučením, může stačit méně variant. Rozhodnutí závisí na čase, rozpočtu a na tom, odkud klienti přicházejí.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Hodí se katalog pro kancelář, která pracuje na dálku?', a: 'Záleží na tom, jak klienti kancelář hledají. U práce na dálku nemusí rozhodovat poloha, a profil v mapách proto pomůže méně než web. Katalog může být další místo, kde je kancelář vidět. Údaje o adrese a pracovní době mají být pravdivé a stejné všude.' },
    { q: 'Platí se za viditelnost v katalogu?', a: 'Podle nápovědy Firmy.cz je přidání profilu zdarma, ale pozici profilů řadí aukce a vzhled karty se u platících a neplatících liší. Placené tarify tedy dávají smysl jen tehdy, když víte, odkud klienti přicházejí. Ceny tarifů zde neuvádím. Zkontrolováno 23. 11. 2026, podmínky se mohou měnit.' },
    { q: 'Lze variantu změnit, když kancelář roste?', a: 'Ano. Varianty se doplňují, a proto lze začít tím, co zvládnete udržovat, a další přidat později, když kancelář roste nebo mění způsob získávání klientů. Důležité je, aby údaje o kanceláři zůstaly všude stejné a aby je někdo pravidelně kontroloval. Univerzální pořadí neexistuje.' },
    { q: 'Jak zjistím, odkud klienti přicházejí?', a: 'Nejjednodušší je ptát se nových klientů, jak o kanceláři zjistili, a odpovědi zapisovat. Profil na Googlu podle nápovědy ukazuje, kolikrát klienti klikli na hovor, trasu nebo odkaz na web. Čísla ukazují aktivitu, nevysvětlují ale, proč k ní došlo. Údaje jsou jen u ověřených profilů.' },
  ],
  faqSource: { before: 'Zdroj k poslední otázce: nápověda Google,', href: 'https://support.google.com/business/answer/9918094?hl=cs', after: ' (zkontrolováno 23. 11. 2026; na stránce datum změny není uvedeno).' },

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  endTitle: 'Chcete mít údaje své kanceláře v pořádku na webu i v mapách?',
  endCta: 'SEO pro účetní kanceláře v Praze',
  endLink: { before: 'Podívejte se také na', text: 'lokální SEO pro Google Maps a Mapy.com', after: '.' },
  moreTitle: 'Další články',
  moreLead: 'Další články o webech, mapách a klientech účetních kanceláří.',
  moreMore: 'Číst článek',
};

export const POST_ACCWEBMAPS_CS = walk(raw);
