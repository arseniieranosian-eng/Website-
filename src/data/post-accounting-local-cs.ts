// Czech content of the blog article /blog/lokalni-pritomnost-ucetni-kancelare/ (brief U5 of 27.10.2026), the local-presence article of the accounting-firm funnel (the realtors' counterpart is N8).
// Defaults taken: no quote, no observations, no figures, no prices, no CTA / audit, no link to /lokalni-seo-mapy/ and no mention of that service (the site adds the back link from that page), no U4 / U6 / U7 links,
// no Mapy.cz, no rules for Mapy.com and Firmy.cz (data types only), the FAQ about a sole trader without an office is removed ([?]5). The Google statements follow the brief word for word; they were NOT compared
// with https://support.google.com/business/answer/3038177 from here (support.google.com is not reachable from the build environment), so that comparison is still open before the live release.
// Title 53 and description 145 (within the site limits 55 / 150). Length: the brief's texts give about 1 000 words, below the 1 200–1 800 target; nothing outside the brief was added.
// No HowTo, no Service, no ratings, no Quotation.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_ACCOUNTING_LOCAL_PUBLISHED = '2026-10-27';
// Review every 90 days against the official Google help: next 2027-01-25.

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/lokalni-pritomnost-ucetni-kancelare.webp', width: 1200, height: 630, alt: 'Ilustrace: profil účetní kanceláře na mapě se stejným názvem, adresou a telefonem' },

  leadBefore: 'Lokální přítomnost účetní kanceláře tvoří profily na mapách a v katalozích a shodné údaje o firmě: název, adresa a telefon (zkráceně NAP). Přehled kanálů, kam mapy patří, najdete v článku',
  leadLinkText: 'Jak získat klienty pro účetní kancelář',

  whatTitle: 'Co je lokální přítomnost účetní kanceláře?',
  whatAnswer: 'Lokální přítomnost je souhrn toho, jak kancelář vypadá na mapách, v katalozích a na vlastním webu: profily, název, adresa, telefon a otevírací doba. Nejde o jednu stránku, ale o údaje, které musí být správné a stejné všude, kde je zájemce najde. Pozici na mapách ani poptávky nikdo nezaručí.',

  whereTitle: 'Kde by měla být kancelář vidět?',
  whereAnswer: 'Základem je profil v Google Business Profile, doplněný profily na Mapy.com a Firmy.cz a údaji na vlastním webu. Všude se vyplňují stejné základní údaje: název, adresa nebo oblast působení, telefon, otevírací doba a odkaz na web. Seznam není vyčerpávající a závisí na tom, kde vás zájemci hledají.',
  where: {
    head: ['Kde', 'Co vyplnit'],
    rows: [
      ['Google Business Profile', 'název, adresa nebo oblast působení, telefon, otevírací doba, kategorie, odkaz na web'],
      ['Mapy.com', 'název, adresa, telefon, otevírací doba, odkaz na web'],
      ['Firmy.cz', 'název, adresa, telefon, otevírací doba, odkaz na web'],
      ['Vlastní web', 'stejný název, adresa, telefon a otevírací doba v zápatí a na stránce kontaktu'],
    ],
  },
  whereNote: 'Tabulka uvádí typy údajů, ne pravidla jednotlivých služeb.',

  addressTitle: 'Má kancelář uvádět adresu, když klienty nepřijímá osobně?',
  addressAnswer: 'Google požaduje přesnou a skutečnou adresu a nepřijímá poštovní schránky ani virtuální kanceláře. Kancelář, která za klienty jezdí nebo je přijímá jinde, může podle jeho pravidel vést jeden profil s oblastí působení a adresu skrýt. Někteří účetní pracují z domova; rozhodnutí o adrese je na vás.',

  profileTitle: 'Jak zadat název, kategorie a otevírací dobu?',
  profileAnswer: 'Název profilu má odpovídat skutečnému názvu kanceláře, bez sloganů a dodatků. Kategorií vyberte co nejméně a ne jako klíčová slova. Otevírací doba jsou běžné hodiny pro klienty; kancelář, která přijímá jen po domluvě, hodiny podle pokynů Google neuvádí. Podrobnosti ověřte v aktuální nápovědě Google.',
  profileLead: 'Kontrolní seznam profilu:',
  profile: [
    'název bez sloganu;',
    'adresa skutečná, ne poštovní schránka;',
    'telefon pod kontrolou kanceláře;',
    'co nejméně kategorií;',
    'otevírací doba jen pro příchozí klienty;',
    'odkaz na odpovídající stránku webu.',
  ],

  napTitle: 'Co znamená shoda názvu, adresy a telefonu?',
  napAnswer: 'NAP znamená název, adresa, telefon. Shoda znamená, že kancelář uvádí tyto údaje na webu, v profilu na Google i v katalozích stejně, včetně zápisu ulice a čísla. Rozdíly mohou zájemce zmást a ztěžují údržbu údajů. Při změně proto opravte všechna místa najednou.',
  napLead: 'Kontrolní seznam shody údajů:',
  nap: [
    'název stejný;',
    'ulice a číslo stejné;',
    'obec a PSČ stejné;',
    'telefon ve stejném zápisu;',
    'otevírací doba stejná;',
    'odkaz na web stejný;',
    'změna provedena všude najednou.',
  ],

  branchTitle: 'Jak je to s pobočkami a s pracovníky?',
  branchAnswer: 'Pobočka má v Google jeden profil na jedno místo; kancelář s jedním místem má jeden profil. Zda může mít vlastní profil i jednotlivý pracovník, určují podmínky v nápovědě Google a ty se mohou měnit. Před založením dalšího profilu je proto ověřte a neodhadujte je.',

  webTitle: 'Jak profil propojit s webem?',
  webAnswer: 'Profil má odkazovat na odpovídající stránku vlastního webu, nejčastěji na hlavní stránku nebo na stránku kontaktu. Údaje v profilu a na webu musí souhlasit: název, adresa, telefon i otevírací doba. Kontakt má být na webu snadno dohledatelný, aby zájemce z mapy rychle našel, co potřebuje.',

  checkTitle: 'Jak často údaje kontrolovat?',
  checkAnswer: 'Údaje je dobré kontrolovat pravidelně, například jednou za čtvrtletí, a vždy po změně adresy, telefonu nebo otevírací doby. Změnu proveďte na webu, v profilu Google i v ostatních katalozích najednou. Interval je doporučení autora, ne požadavek Google, a pravidla služeb se mění.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Potřebuje účetní kancelář profil na mapách, když má web?', a: 'Web a profil na mapách plní různé úlohy. Web popisuje služby kanceláře, profil ukazuje kancelář na mapě s adresou nebo oblastí působení, telefonem a hodinami. Jedno druhé nenahrazuje. Zda profil dává smysl, záleží na tom, jak kancelář s klienty pracuje, a pozici na mapách nikdo nezaručí.' },
    { q: 'Musí být adresa v profilu stejná jako na webu?', a: 'Ano, adresa má být stejná a odpovídat skutečnému místu. Google vyžaduje přesnou a skutečnou adresu a nepřijímá poštovní schránky. Rozdílný zápis ulice, čísla nebo obce na webu a v profilu je zbytečné riziko zmatku, proto jej sjednoťte. Při změně adresy upravte všechna místa najednou.' },
    { q: 'Co dělat, když účetní pracuje z domova nebo u klientů?', a: 'Kancelář, která klienty nepřijímá na provozovně, může podle pravidel Google vést jeden profil s oblastí působení a adresu před zákazníky skrýt. Poštovní schránka ani virtuální kancelář se jako adresa nepřijímá. Rozhodnutí, zda adresu uvést, je na vás; přesná pravidla ověřte v aktuální nápovědě Google.' },
    { q: 'Kolik kategorií v profilu vybrat?', a: 'Co nejméně: Google doporučuje vybrat jen tolik kategorií, kolik je třeba k popisu hlavní činnosti kanceláře. Kategorie nemají sloužit jako klíčová slova ani popisovat vlastnosti kanceláře. Pokud kancelář dělá více věcí, vybere kategorii, která popisuje její hlavní podnikání, a další jen tehdy, když se skutečně hodí.' },
    { q: 'Je telefon v profilu stejný jako na webu a v katalozích?', a: 'Telefon má být stejný na webu, v profilu a v katalozích a musí být pod přímou kontrolou kanceláře. Google požaduje číslo, které vede na konkrétní místo kanceláře. Stejný zápis čísla předchází zmatku a usnadňuje kontrolu. Při změně čísla ho upravte na všech místech najednou.' },
    { q: 'Stačí profil na Google, nebo i Mapy.com a Firmy.cz?', a: 'Záleží na tom, kde vás zájemci hledají. Profil na Google je výchozí bod, profily na Mapy.com a Firmy.cz ho doplňují. Důležitější než počet profilů je, aby údaje všude souhlasily s webem. Pozici na mapách ani počet poptávek žádný profil nezaručuje.' },
  ],

  relatedTitle: 'Související články',

  endText: 'Systematickou práci na SEO webu účetní kanceláře popisuje stránka',
  endLinkText: 'SEO pro účetní kanceláře v Praze',
  endText2: 'Tento článek je jen přehled toho, jak má kancelář vypadat na mapách a v katalozích.',

  schema: {
    about: ['lokální přítomnost účetní kanceláře', 'profil účetní kanceláře na mapách', 'NAP název adresa telefon', 'Google Business Profile účetní kancelář'],
  },
};

export const POST_ACCOUNTING_LOCAL_CS = walk(raw);
