// Czech content of the blog article /blog/lokalni-pritomnost-realitni-kancelare/ (brief N8 of 25.10.2026), the middle of the real-estate funnel N1–N10. Defaults taken for the brief's open
// questions: the unsourced sentence "Rozdíl mezi nimi je nejčastější důvod…" in H2-7 is removed (the answer stays at 42 words), no "Mapy.cz", Mapy.com and Firmy.cz appear only as data types, no rules.
// The Google statements follow the brief word for word; they were NOT compared with the two Google help pages from here (support.google.com is not reachable from the build environment), so that
// comparison is still open before the live release. No prices, no CTA, no audit link, no link to /lokalni-seo-mapy/ and no mention of that service, no portals articles, no observations, no quote.
// No HowTo, no Service, no ratings, no Quotation.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_REALTY_LOCAL_PUBLISHED = '2026-10-25';
// Review every 90 days against the official Google help pages: next 2027-01-23.

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  authorRole: 'SEO a GEO/AEO specialista',
  publishedLabel: 'Publikováno',
  updatedLabel: 'Aktualizováno',
  cover: { src: '/images/blog/lokalni-pritomnost-realitni-kancelare.webp', width: 1200, height: 630, alt: 'Ilustrace: profil realitní kanceláře na mapě se stejným názvem, adresou a telefonem' },

  lead: 'Lokální přítomnost realitní kanceláře tvoří profily na mapách a v katalozích a shodné údaje o firmě: název, adresa a telefon (zkráceně NAP). Stejné údaje na webu i v profilech zájemcům usnadňují orientaci a kanceláři dávají přehled, kde je musí udržovat. Pravidla Google v článku vycházejí z jeho oficiální nápovědy.',

  whatTitle: 'Co je lokální přítomnost realitní kanceláře?',
  whatAnswer: 'Lokální přítomnost je souhrn toho, jak kancelář vypadá na mapách, v katalozích a na vlastním webu: profily, název, adresa, telefon a otevírací doba. Nejde o jednu stránku ani o jeden profil. Jde o údaje, které musí být správné a stejné všude, kde je zájemce najde.',
  whatMore: 'Skládá se z profilů na mapách, z katalogů a z údajů na vlastním webu. Tyto tři části je třeba udržovat společně.',

  whereTitle: 'Které profily a katalogy by kancelář měla mít?',
  whereAnswer: 'Základem je profil kanceláře v Google Business Profile, doplněný profily na Mapy.com a Firmy.cz. Na každém místě kancelář vyplňuje stejné základní údaje: název, adresu, telefon a otevírací dobu. Seznam není vyčerpávající a závisí na tom, kde zájemci kancelář hledají; první místo na mapách nikdo nezaručí.',
  where: {
    head: ['Kde', 'Co vyplnit'],
    rows: [
      ['Google Business Profile', 'název, adresa (nebo oblast působení), telefon, otevírací doba, kategorie, odkaz na web'],
      ['Mapy.com', 'název, adresa, telefon, otevírací doba, odkaz na web'],
      ['Firmy.cz', 'název, adresa, telefon, otevírací doba, odkaz na web'],
      ['Vlastní web', 'stejný název, adresa, telefon a otevírací doba v zápatí a na stránce kontaktu'],
    ],
  },
  whereNote: 'Tabulka uvádí typy údajů, ne pravidla jednotlivých služeb.',

  napTitle: 'Co znamená shoda názvu, adresy a telefonu?',
  napAnswer: 'NAP znamená název, adresa, telefon. Shoda znamená, že kancelář uvádí tyto tři údaje na webu, v profilu na mapách i v katalozích stejně, včetně zápisu čísla a ulice. Rozdíly mohou zájemce zmást a ztěžují kanceláři údržbu. Při každé změně je třeba opravit všechna místa najednou.',
  napLead: 'Kontrolní seznam shody údajů:',
  nap: [
    'název stejný;',
    'ulice a číslo stejné;',
    'obec a PSČ stejné;',
    'telefon ve stejném zápisu;',
    'otevírací doba stejná;',
    'odkaz na web stejný;',
    'změna provedena na všech místech najednou.',
  ],

  profileTitle: 'Jak správně zadat název, kategorie a otevírací dobu?',
  profileAnswer: 'Název profilu má odpovídat skutečnému názvu kanceláře, bez sloganů a údajů o místě. Kategorií vyberte co nejméně a jen takové, které popisují hlavní činnost. Otevírací doba je doba, kdy mohou přijít zájemci. Kancelář, která přijímá jen po domluvě, otevírací dobu podle pokynů Google neuvádí.',
  profileLead: 'Kontrolní seznam profilu:',
  profile: [
    'název bez sloganu;',
    'adresa skutečná, ne poštovní schránka;',
    'telefon pod kontrolou kanceláře;',
    'co nejméně kategorií, ne jako klíčová slova;',
    'otevírací doba jen pro příchozí zájemce;',
    'odkaz na odpovídající stránku webu.',
  ],

  agentsTitle: 'Jak je to s makléři a pobočkami?',
  agentsAnswer: 'Pobočka má v Google jeden profil na jedno místo. Makléř může mít vlastní profil jen za podmínek uvedených v nápovědě Google a ne více profilů pro různé specializace. Kancelář bez provozovny pro klienty používá oblast působení a adresu skrývá. Zda profil makléře dává smysl, je třeba posoudit podle aktuální nápovědy.',

  offerTitle: 'Může mít profil na mapách i nabízená nemovitost?',
  offerAnswer: 'Ne. Podle pravidel Google nemají profil nemovitosti nabízené k prodeji nebo k pronájmu, například prázdné byty. Profil může získat kancelář, respektive její prodejní nebo pronájemní kancelář, pokud projde ověřením. Jednotlivé nabídky patří na web kanceláře, kde mají vlastní stránky a popis.',

  webTitle: 'Jak profil propojit s webem?',
  webAnswer: 'Profil na mapách má odkazovat na odpovídající stránku vlastního webu, nejčastěji na hlavní stránku nebo na stránku konkrétní pobočky. Údaje v profilu a na webu musí souhlasit: název, adresa, telefon i otevírací doba. Stránky čtvrtí jsou samostatné téma, které popisuje',
  webLinkText: 'další článek',

  checkTitle: 'Jak často údaje kontrolovat?',
  checkAnswer: 'Údaje o kanceláři je dobré kontrolovat v pravidelných intervalech, například jednou za čtvrtletí, a vždy po změně adresy, telefonu nebo otevírací doby. Změnu je třeba provést na webu, v profilu na Google i v ostatních katalozích najednou. Pravidla služeb se mění, proto je ověřte v jejich oficiální nápovědě.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Potřebuje realitní kancelář profil na mapách, když má web?', a: 'Web a profil na mapách plní různé úlohy. Web popisuje nabídku a služby kanceláře, profil ukazuje kancelář na mapě s adresou, telefonem a otevírací dobou. Kancelář s provozovnou pro klienty profil mít může, pokud splňuje pravidla Google. Jedno druhé nenahrazuje.' },
    { q: 'Musí být adresa v profilu stejná jako na webu?', a: 'Ano, adresa má být stejná a odpovídat skutečné provozovně. Google vyžaduje přesnou a skutečnou adresu a nepřijímá poštovní schránky. Rozdílný zápis ulice, čísla nebo obce na webu a v profilu je zbytečné riziko zmatku, proto jej sjednoťte. Při změně adresy upravte všechna místa najednou.' },
    { q: 'Může mít makléř vlastní profil?', a: 'Může, ale jen za podmínek uvedených v nápovědě Google pro makléře jako jednotlivce. Jeden makléř nemá mít více profilů pro různé specializace. Zda profil dává smysl, záleží na tom, jak makléř skutečně jedná s klienty. Přesné podmínky vždy ověřte v aktuální nápovědě Google, protože se mohou měnit.' },
    { q: 'Co dělat, když kancelář nemá pobočku pro klienty?', a: 'Kancelář, která klienty nepřijímá na provozovně, může podle pravidel Google používat oblast působení a adresu před zákazníky skrýt. Profil se pak vede jako jeden profil pro oblast působení. Poštovní schránka ani virtuální kancelář se jako adresa nepřijímá. Přesná pravidla ověřte v aktuální nápovědě Google.' },
    { q: 'Kolik kategorií v profilu vybrat?', a: 'Co nejméně: Google doporučuje vybrat jen tolik kategorií, kolik je třeba k popisu hlavní činnosti kanceláře. Kategorie nemají sloužit jako klíčová slova ani popisovat vlastnosti kanceláře. Pokud kancelář dělá více věcí, vybere tu kategorii, která popisuje její hlavní podnikání, a další jen tehdy, když se skutečně hodí.' },
    { q: 'Je telefon v profilu stejný jako na webu a v katalozích?', a: 'Telefon má být stejný na webu, v profilu a v katalozích a musí být pod přímou kontrolou kanceláře. Google požaduje číslo, které vede na konkrétní místo kanceláře. Stejný zápis čísla předchází zmatku a usnadňuje kontrolu při každé změně kontaktních údajů. Při změně čísla ho upravte na všech místech najednou.' },
    { q: 'Může mít nabízený byt nebo dům vlastní profil na mapách?', a: 'Ne. Nemovitosti nabízené k prodeji nebo k pronájmu, například prázdné byty, profil podle pravidel Google nezískají. Profil může mít kancelář nebo její prodejní či pronájemní kancelář. Nabídky patří na web kanceláře, kde mají vlastní stránky a popis, které lze udržovat a aktualizovat.' },
  ],

  relatedTitle: 'Související články',
  relatedListingsText: 'Indexace nabídek nemovitostí a duplicity',

  endText: 'Systematickou práci s SEO webu realitní kanceláře popisuje stránka',
  endLinkText: 'SEO pro realitní kanceláře v Praze',
  endText2: 'Tento článek je jen přehled toho, jak má kancelář vypadat na mapách a v katalozích.',

  schema: {
    about: ['lokální přítomnost realitní kanceláře', 'NAP název adresa telefon', 'profil realitní kanceláře na mapách', 'Google Business Profile realitní kancelář'],
  },
};

export const POST_REALTY_LOCAL_CS = walk(raw);
