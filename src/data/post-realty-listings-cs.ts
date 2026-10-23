// Czech content of the blog article /blog/nabidky-nemovitosti-seo-indexace-duplicity/ (brief N5 of 23.10.2026), the lower part of the real-estate funnel N1–N10. Defaults taken (no answers to
// the brief's questions): no "I have seen" observations (principles only), publication date = the date of the brief, the author's quote is a DRAFT and is NOT published until the author confirms
// it and his position on sold listings (QUOTE_CONFIRMED = false: no quote block, no Quotation), "duplicates against portals" are NOT caught by the free audit. Technical statements stay strictly inside the three
// Google documentation pages listed in the brief (checked by the brief's author on 23. 10. 2026; this checking date is shown on the page, it must be repeated before publishing and at every 90-day review);
// there is no Google guidance on sold property listings, so the text gives principles and consequences, not "Google recommends". No universal recipes. The existing audit-funnel articles are linked
// (not shown, duplicates, 301 and 404); N4 and N6–N10 are named without a link until published. No HowTo, no Service, no ratings, no prices, no legal topics.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_REALTY_LISTINGS_PUBLISHED = '2026-10-23';
export const QUOTE_CONFIRMED = false;
export const DOCS_CHECKED = '23. 10. 2026';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/nabidky-nemovitosti-seo-indexace-duplicity.webp', width: 1200, height: 630, alt: 'Ilustrace: tři karty nabídek nemovitostí, jedna označená jako prodaná, a lupa s odškrtnutím' },

  lead: 'Nabídky nemovitostí na webu realitní kanceláře dělají SEO tři hlavní potíže: některé se neindexují, filtry a řazení vytvářejí duplicitní adresy a prodané nabídky zůstávají na webu. Níže vysvětluji principy podle dokumentace Googlu a ukazuji, co zkontrolovat. Technické chyby ukáže bezplatný audit. Pozice neslibuji.',
  forWhom: 'Text je pro majitele nebo manažera realitní kanceláře, který má na webu vlastní nabídky. Najdete tu principy indexace, vznik duplicit z filtrů, tabulku možností u prodaných nabídek a přehled toho, co zachytí bezplatný audit.',

  tocTitle: 'Co v textu najdete',
  toc: [
    { id: 'slozite', text: 'Proč jsou nabídky nemovitostí pro SEO složité?' },
    { id: 'indexace', text: 'Jak poznám, že se nabídky neindexují?' },
    { id: 'filtry', text: 'Jak vznikají duplicity z filtrů a řazení?' },
    { id: 'prodane', text: 'Co dělat s prodanými nabídkami?' },
    { id: 'portaly', text: 'Jak se vyhnout duplicitě s portály?' },
    { id: 'kontrola', text: 'Co zkontrolovat jako první?' },
    { id: 'audit', text: 'Co zachytí bezplatný audit a co ne?' },
  ],

  hardTitle: 'Proč jsou nabídky nemovitostí pro SEO složité?',
  hardAnswer: 'Nabídek je na webu mnoho, rychle se mění a každá má vlastní adresu. K tomu přibývají filtry a řazení, které vytvářejí další adresy se stejným obsahem. Vyhledávač pak ztrácí čas na málo hodnotných stránkách a důležité nabídky nemusí zaindexovat. Proto je u nabídek technický pořádek zvlášť důležitý.',

  indexTitle: 'Jak poznám, že se nabídky neindexují?',
  indexAnswer: 'Zda jsou nabídky ve vyhledávání, zjistíte v Google Search Console ve zprávách o indexaci a kontrolou jednotlivých adres. Pokud se důležité nabídky neindexují, příčin může být víc, například technická chyba nebo duplicita. Obecný rozbor, proč se web nezobrazuje, najdete v samostatném článku. Bezplatný audit tuto kontrolu pokrývá.',
  indexLead: 'Obecný rozbor najdete v článku',
  indexLinkText: 'Proč se web nezobrazuje v Googlu?',
  indexAuditLead: 'Technickou kontrolu indexace pokrývá',
  indexAuditLinkText: 'bezplatný audit',

  filtersTitle: 'Jak vznikají duplicity z filtrů a řazení?',
  filtersAnswer: 'Filtry a řazení mohou vytvářet mnoho adres se stejným nebo velmi podobným obsahem. Google pro sjednocení duplicit uvádí přesměrování a rel=canonical, pro omezení procházení zbytečných filtrovaných adres soubor robots.txt. Která varianta se hodí, záleží na webu a je lepší ji řešit po kontrole konkrétního webu.',
  filtersText: [
    'Základní princip je jedna stránka, jedna adresa. Pokud se stejný seznam nabídek dá otevřít přes různé parametry nebo v jiném pořadí, vznikají duplicitní adresy.',
    'Podle dokumentace Googlu o fasetové navigaci by neplatné nebo nesmyslné kombinace filtrů měly vracet odpověď 404.',
  ],
  filtersLead: 'Obecné vysvětlení duplicit a canonical najdete v článku',
  filtersLinkText: 'Duplicitní obsah: co to je, jak ho poznat a jak ho vyřešit',

  soldTitle: 'Co dělat s prodanými nabídkami?',
  soldAnswer: 'Co s prodanými nabídkami, záleží na webu a cíli. Podle dokumentace Googlu se adresa, která vrací chybu 4xx, například 404, postupně odstraní z indexu, přesměrování 301 je silný signál pro cílovou adresu a chybová stránka s kódem 200 se označuje jako soft 404. Univerzální recept nedávám.',
  sold: {
    head: ['Postup', 'Co se stane', 'Na co dát pozor'],
    rows: [
      ['Odpověď 4xx (například 404)', 'adresa se podle dokumentace Googlu postupně odstraní z indexu', 'chybová stránka musí skutečně vracet chybový kód, ne kód 200, jinak jde o soft 404'],
      ['Přesměrování 301 na podobnou stránku', 'podle dokumentace jde o silný signál, že se má zpracovat cílová adresa', 'cílová stránka musí dávat smysl návštěvníkovi, který hledal původní nabídku'],
      ['Stránka zůstane dostupná', 'adresa může zůstat v indexu', 'návštěvník nemusí poznat, že nabídka už neplatí, a je třeba rozhodnout, co mu nabídnout'],
    ],
  },
  soldNote: 'Tabulka popisuje následky, ne jedno nejlepší řešení. K prodaným nabídkám Google nemá samostatný návod, proto jde o principy z obecné dokumentace.',
  soldLead: 'Obecně o přesměrování a chybách 404 píšu v článku',
  soldLinkText: 'Přesměrování 301 a chyby 404: co dělat po změně adres webu',

  portalsTitle: 'Jak se vyhnout duplicitě s portály?',
  portalsAnswer: 'Stejný inzerát na portálu i na vlastním webu je technicky možný. Pokud nenastavíte preferovanou verzi, Google si podle dokumentace vybere tu, kterou považuje za nejlepší. Unikátní popis a jasná struktura vlastní stránky pomáhají, ale zobrazení nezaručují. Právní stránky inzerce zde neřeším.',

  checkTitle: 'Co zkontrolovat jako první?',
  checkAnswer: 'Zkontrolujte, zda jsou nabídky ve vyhledávání, zda filtry a řazení nevytvářejí nadbytečné adresy, zda mají prodané nabídky promyšlený postup, zda mají nabídky unikátní popis a zda nesmyslné kombinace filtrů vracejí odpovídající chybovou odpověď. Technické body ukáže bezplatný audit, ostatní vyžadují kontrolu webu.',
  check: [
    'Jsou nabídky ve vyhledávání?',
    'Nevytvářejí filtry a řazení nadbytečné adresy?',
    'Mají prodané nabídky promyšlený postup?',
    'Mají nabídky unikátní popis?',
    'Vracejí nesmyslné kombinace filtrů odpovídající chybovou odpověď?',
  ],
  checkLead: 'Co v oboru dělám, popisuji na stránce',
  checkLinkText: 'SEO pro realitní kanceláře v Praze',

  auditTitle: 'Co zachytí bezplatný audit a co ne?',
  auditAnswer: 'Bezplatný audit zkontroluje technické chyby: indexaci, duplicity a další technické problémy. Prezentaci dostanete do 24 hodin, bez hovoru a bez závazku. Nepokrývá strukturu stránek služeb, texty nabídek, duplicity vůči portálům ani rychlost. Ty řeší placená konzultace nebo Start. Rozsah je záměrně úzký, aby byl výstup rychlý a konkrétní.',
  audit: {
    head: ['Problém', 'Zachytí bezplatný audit?'],
    rows: [
      ['Indexace', 'Ano'],
      ['Duplicity z filtrů', 'Ano'],
      ['Ostatní technické problémy', 'Ano'],
      ['Struktura stránek služeb', 'Ne'],
      ['Texty nabídek', 'Ne'],
      ['Duplicity vůči portálům', 'Ne'],
      ['Rychlost', 'Ne'],
    ],
  },
  auditLead: 'Žádost o audit je na stránce',
  auditLinkText: 'Bezplatný audit',
  auditConsultingLead: 'Ostatní body řeší',
  auditConsultingLinkText: 'konzultace',
  auditStartLead: 'nebo',
  auditStartLinkText: 'SEO start na 3 měsíce',

  // DRAFT: published only when QUOTE_CONFIRMED is true (the author must also confirm his position on sold listings)
  quote: 'U nabídek rozhoduje pořádek: každá stránka má mít jasný důvod existovat a jasný konec.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Co dělat s prodanými nabídkami na webu?', a: 'Záleží na webu a cíli. Podle dokumentace Googlu se adresa, která vrací chybu 4xx, například 404, postupně odstraní z indexu. Přesměrování 301 je silný signál pro cílovou adresu. Univerzální recept nedávám a konkrétní postup volím až po kontrole webu a typu nabídek.' },
    { q: 'Proč se nabídky nezobrazují v Googlu?', a: 'Důvodů může být víc: technická chyba, duplicita nebo to, že stránky Google zatím nezpracoval. Příčinu nelze určit bez kontroly konkrétního webu. Obecný rozbor najdete v samostatném článku a technickou kontrolu indexace pokrývá bezplatný audit, prezentaci dostanete do 24 hodin, bez hovoru.', links: [{ page: 'postNotShown' as const, text: 'Proč se web nezobrazuje v Googlu?' }, { page: 'audit' as const, text: 'Bezplatný audit' }] },
    { q: 'Jak odstranit duplicitní stránky?', a: 'Podle dokumentace Googlu se duplicity sjednocují přesměrováním nebo rel=canonical, procházení zbytečných filtrovaných adres lze omezit v robots.txt. Nespoléhejte jen na jednu metodu a nezkoušejte hromadné zásahy bez kontroly. Postup se liší podle webu, proto se vyplatí nejdřív zjistit, odkud duplicity vznikají.' },
    { q: 'Jak zjistím, že mám duplicitní obsah?', a: 'Duplicity poznáte tak, že se stejný nebo velmi podobný obsah zobrazuje na více adresách, například z filtrů, řazení nebo parametrů. V Google Search Console najdete u stránek informace o duplicitách a vybrané kanonické adrese. Přesné názvy zpráv se v rozhraní mohou lišit. Technickou kontrolu duplicit pokrývá bezplatný audit.', links: [{ page: 'postDuplicates' as const, text: 'Duplicitní obsah' }] },
    { q: 'Může být stejný inzerát na portálu a na webu?', a: 'Technicky ano. Pokud nenastavíte preferovanou verzi, Google si podle dokumentace vybere tu, kterou považuje za nejlepší. Unikátní popis a jasná struktura vlastní stránky pomáhají, ale zobrazení nezaručují. Právní stránky inzerce a práv k obsahu zde neřeším. Která varianta je pro konkrétní nabídku vhodná, ukáže až kontrola webu.' },
    { q: 'Co ověří bezplatný audit a co ne?', a: 'Bezplatný audit ověří technické chyby: indexaci, duplicity a další technické problémy. Prezentaci dostanete do 24 hodin, bez hovoru a bez závazku. Neověří strukturu stránek služeb, texty nabídek, duplicity vůči portálům ani rychlost. Ty řeší placená konzultace nebo Start. Rozsah je úzký záměrně, aby výstup byl rychlý a konkrétní.', links: [{ page: 'audit' as const, text: 'Bezplatný audit' }] },
  ],

  sourcesTitle: 'Zdroje a datum kontroly',
  sourcesLead: 'Technická tvrzení vycházejí z dokumentace Googlu. Ověřeno',
  sources: [
    { href: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls', text: 'Sjednocení duplicitních adres (Google Search Central)' },
    { href: 'https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation', text: 'Fasetová navigace a filtry (Google Search Central)' },
    { href: 'https://developers.google.com/search/docs/crawling-indexing/http-network-errors', text: 'Stavové kódy HTTP a chyby sítě (Google Search Central)' },
  ],

  endTitle: 'Chcete vědět, jestli má váš web technické chyby s indexací a duplicitami?',
  endText: 'Požádejte o bezplatný audit. Zkontroluje indexaci, duplicity a další technické problémy webu, ne celý web. Prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  cta: 'Požádat o bezplatný audit',
  endConsulting: 'Nebo se podívejte na',
  endConsultingLink: 'konzultaci',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  schema: {
    about: ['nabídky nemovitostí SEO', 'indexace nabídek realitní kancelář', 'prodané nabídky SEO', 'duplicitní obsah realitní web'],
  },
};

export const POST_REALTY_LISTINGS_CS = walk(raw);
