// Czech content of the blog article /blog/vlastni-web-nebo-realitni-portaly/ (brief N4 of 24.10.2026), the middle of the real-estate funnel N1–N10. Defaults taken (no answers to the brief's
// questions): slug fine, no portal names (nothing is said about the conditions, prices, shares of leads or client contacts of any portal), one dated observation only (13 realtors' websites viewed in the last five months, as of 24. 10. 2026, answer of the author; no findings are claimed), publication date = the
// date of the brief, the author's quote is a DRAFT and is NOT published until the author confirms it (QUOTE_CONFIRMED = false: no quote block, no Quotation). The portal is never belittled. The
// article owns "jak získat klienty bez portálů" (N1 only mentions it). Links: N1, N2, N3, N5 (published); N8 and N10 are named without a link until they exist. No HowTo, no Service, no ratings,
// no prices, no legal topics (rights to content), no web-building offer ("tvorbu webů nenabízím").
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_REALTY_PORTALS_PUBLISHED = '2026-10-24';
export const QUOTE_CONFIRMED = true;

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/vlastni-web-nebo-realitni-portaly.webp', width: 1200, height: 630, alt: 'Ilustrace: realitní portál a vlastní web realitní kanceláře spojené znaménkem plus' },

  lead: 'Vlastní web a realitní portály se nevylučují, ale doplňují. Portál přivádí lidi, kteří už hledají nabídku, vlastní web dává kanceláři kontrolu nad značkou a obsahem. Co se hodí, záleží na cíli a kapacitě, ne na jednom pravidle. Níže je srovnání a případy, kdy stačí portál. Výsledky neslibuji.',
  forWhom: 'Text je pro majitele realitní kanceláře, který zvažuje, jestli potřebuje vlastní web, když má nabídky na portálech. Najdete tu, co umí a čím je omezený portál i vlastní web, srovnání v tabulce, otázky k rozhodnutí a způsob, jak oba kanály propojit.',

  tocTitle: 'Co v textu najdete',
  toc: [
    { id: 'portaly', text: 'Co umějí realitní portály a kde mají omezení?' },
    { id: 'web', text: 'Co umí vlastní web a kde má omezení?' },
    { id: 'rozdil', text: 'Portál, nebo vlastní web: v čem se liší?' },
    { id: 'nezavislost', text: 'Jak nezávisle fungovat, aniž byste portály opustili?' },
    { id: 'kdy', text: 'Kdy stačí portál a kdy je vlastní web nutný?' },
    { id: 'propojeni', text: 'Jak vlastní web propojit s nabídkami z portálů?' },
    { id: 'seo', text: 'Kdy dává smysl SEO a GEO/AEO pro vlastní web?' },
  ],

  portalsTitle: 'Co umějí realitní portály a kde mají omezení?',
  portalsAnswer: 'Realitní portály přivádějí lidi, kteří už hledají konkrétní nemovitost, takže první kontakty mohou přijít rychle. Kancelář tam ale stojí vedle mnoha dalších a řídí se pravidly platformy. Podmínky konkrétních portálů zde neuvádím a neposuzuji, najdete je u jejich provozovatelů. Portál je nástroj, ne soupeř vlastního webu.',

  webTitle: 'Co umí vlastní web a kde má omezení?',
  webAnswer: 'Vlastní web dává kanceláři kontrolu nad značkou, obsahem a tím, jak zachytí poptávku. Sám ale klienty nepřivede: lidé ho musí najít, například ve vyhledávání, z reklamy nebo z doporučení. Přínos se projevuje postupně a vyžaduje péči o obsah. Hodí se zejména tehdy, když kancelář chce budovat vlastní značku.',

  diffTitle: 'Portál, nebo vlastní web: v čem se liší?',
  diffAnswer: 'Portál obvykle dává rychlejší první kontakty, vlastní web větší kontrolu nad značkou a obsahem a dlouhodobější hodnotu. Porovnání vychází z obecné logiky, ne z měření konkrétních portálů. Číselné srovnání neuvádím, protože závisí na portálu, oblasti a webu. Která kombinace se hodí, určuje váš cíl.',
  diff: {
    head: ['Kritérium', 'Portál', 'Vlastní web'],
    rows: [
      ['Kontrola', 'omezená pravidly platformy', 'kancelář řídí obsah i uspořádání'],
      ['Rychlost prvních kontaktů', 'obvykle rychlejší', 'obvykle pomalejší, výsledky se projevují postupně'],
      ['Závislost', 'na provozovateli a jeho podmínkách', 'na tom, zda vás lidé najdou'],
      ['Značka', 'kancelář stojí vedle mnoha dalších', 'prostor pro vlastní značku a příběh'],
      ['Čas na odezvu', 'kratší cesta k prvním kontaktům', 'delší, vyžaduje péči o obsah'],
    ],
  },
  diffNote: 'Tabulka vychází z obecné logiky, bez čísel a bez hodnocení konkrétních portálů.',
  diffObservation: 'Za posledních pět měsíců (k 24. 10. 2026) jsem si prohlédl 13 webů realitních kanceláří. Nejde o průzkum a obecná čísla z toho neodvozuji.',

  freeTitle: 'Jak nezávisle fungovat, aniž byste portály opustili?',
  freeAnswer: 'Nezávislost na jediném kanálu znamená mít víc zdrojů klientů: portály, doporučení, vlastní web a mapy. Žádný z nich nemusíte opouštět. Cílem je, aby výpadek nebo změna podmínek jednoho kanálu neohrozila celý přísun poptávek. Přehled kanálů a práci s mapami rozebírám v samostatných článcích.',
  freeLead: 'Přehled kanálů najdete v článku',
  freeLinkText: 'Jak získat klienty pro realitní kancelář',

  whenTitle: 'Kdy stačí portál a kdy je vlastní web nutný?',
  whenAnswer: 'Portál může stačit, pokud kancelář potřebuje hlavně rychlé kontakty, nemá kapacitu spravovat web a vlastní značka pro ni není priorita. Vlastní web je vhodný, pokud chce budovat značku, získávat klienty i mimo portály a má čas na obsah. Rozhodnutí je třeba založit na cíli, ne na módě.',
  whenLead: 'Otázky k rozhodnutí:',
  when: [
    'Potřebuji hlavně rychlé kontakty, nebo chci budovat značku?',
    'Mám čas a kapacitu spravovat web a obsah?',
    'Chci, aby mě klienti našli i mimo portál?',
    'Dokážu pravidelně doplňovat obsah?',
    'Jak dlouho můžu čekat na první výsledky?',
  ],
  whenLead2: 'Zda se vlastní web vyplatí právě vám, posoudí',
  whenLink2: 'konzultace',

  linkTitle: 'Jak vlastní web propojit s nabídkami z portálů?',
  linkAnswer: 'Nabídky z portálu lze zobrazit i na vlastním webu, ale vznikají tak podobné stránky na různých adresách. Je třeba rozhodnout, která verze je hlavní, a dbát na unikátní popisy. Technické detaily duplicit rozebírám v samostatném článku. Právní stránky inzerce a práv k obsahu zde neřeším.',
  linkLead: 'Technické detaily najdete v článku',
  linkLinkText: 'Nabídky nemovitostí a SEO: indexace, duplicity filtrů, prodané nabídky',

  seoTitle: 'Kdy dává smysl SEO a GEO/AEO pro vlastní web?',
  seoAnswer: 'SEO a GEO/AEO dávají vlastnímu webu smysl, pokud ho chcete zviditelnit ve vyhledávání a v odpovědích AI a umíte počkat. U mých vlastních projektů se první změny obvykle objevují za 2–3 měsíce, záruku nedávám. Podrobnosti jsou na stránce SEO pro realitní kanceláře.',
  seoLead: 'Co v oboru dělám, popisuji na stránce',
  seoLinkText: 'SEO pro realitní kanceláře v Praze',
  seoSmallLead: 'Jestli SEO dává smysl právě pro malou kancelář, rozebírám v článku',
  seoSmallLinkText: 'Má SEO smysl pro malou realitní kancelář?',

  // Confirmed by the author (24.10.2026): published
  quote: 'Portál a vlastní web nejsou soupeři: portál přivádí rychle, web buduje značku, a obojí se dá spojit.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Má smysl vlastní web, když jsou portály?', a: 'Může mít, pokud chcete budovat vlastní značku a získávat klienty i mimo portál. Pokud potřebujete hlavně rychlé kontakty a nemáte kapacitu spravovat web, stačit může portál. Záleží na cíli, kapacitě a rozpočtu, ne na jednom pravidle. Zda se vlastní web vyplatí vám, posoudí konzultace.', links: [{ page: 'consulting' as const, text: 'SEO konzultace' }] },
    { q: 'Jak získat klienty bez portálů?', a: 'Klienty mimo portály získáváte z doporučení, vlastního webu, map nebo reklamy. Žádný kanál nezaručuje výsledek a každý má své omezení. Neznamená to portály opustit, ale nespoléhat jen na ně. Přehled kanálů a práci s mapami rozebírám v samostatných článcích. Vyberte si ten, který zvládnete udržovat.', links: [{ page: 'postRealty' as const, text: 'Jak získat klienty pro realitní kancelář' }, { page: 'maps' as const, text: 'SEO pro Mapy' }] },
    { q: 'Může vlastní web nahradit portál?', a: 'Ne vždy. Vlastní web dává kontrolu nad značkou a obsahem, ale sám klienty nepřivede, lidé ho musí najít. Portál přivádí lidi, kteří už nemovitost hledají. U některých kanceláří může stačit portál, u jiných se obojí doplňuje. Nahrazení neslibuji, záleží na cíli a kapacitě.' },
    { q: 'Kolik stojí vlastní web realitní kanceláře?', a: 'Tvorbu webů nenabízím, proto cenu vlastního webu neuvádím. Cena záleží na rozsahu, technologii a dodavateli. Já řeším, aby byl hotový web dobře dohledatelný: SEO a GEO/AEO. Ceny mých služeb najdete na stránkách konzultace, tříměsíčního Startu a Full SEO. Cenu webu vám sdělí vývojář nebo studio, které jej tvoří.', links: [{ page: 'consulting' as const, text: 'SEO konzultace' }, { page: 'start' as const, text: 'SEO start na 3 měsíce' }, { page: 'fullSeo' as const, text: 'Full SEO na rok' }, { page: 'audit' as const, text: 'Bezplatný audit' }] },
    { q: 'Jak propojit nabídky z portálů s webem?', a: 'Nabídky lze zobrazit i na vlastním webu, ale vznikají podobné stránky na různých adresách. Je třeba rozhodnout, která verze je hlavní, a psát unikátní popisy. Technické detaily duplicit rozebírám v samostatném článku o nabídkách. Právní stránky inzerce a práv k obsahu zde neřeším.', links: [{ page: 'postRealtyListings' as const, text: 'Nabídky nemovitostí a SEO' }] },
    { q: 'Kdy dává smysl SEO pro vlastní web?', a: 'Pokud chcete, aby vás klienti našli i mimo portály, máte co nabídnout a umíte počkat. U mých vlastních projektů se první změny obvykle objevují za 2–3 měsíce, ale záruku nedávám. Termín neslibuji.' },
  ],

  endTitle: 'Aktualizujte si přehled o stavu webu',
  endText: 'Požádejte o bezplatný audit technických chyb. Zkontroluje indexaci, duplicity a další technické problémy webu. Prezentaci pošlu do 24 hodin, bez hovoru a bez závazků. V auditu nejsou klíčová slova, konkurence, mapy, viditelnost v AI, rychlost ani mobilní verze.',
  endNote: 'Bezplatný audit odpověď na otázku portál, nebo web nedá, kontroluje jen technické chyby, indexaci a duplicity. Úvahu o vhodném kanálu řeší',
  endConsultingLink: 'konzultace',
  cta: 'Požádat o bezplatný audit',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  schema: {
    about: ['realitní portály vs vlastní web', 'vlastní web nebo realitní portál', 'má smysl vlastní web realitní kanceláře', 'jak získat klienty bez portálů'],
  },
};

export const POST_REALTY_PORTALS_CS = walk(raw);
