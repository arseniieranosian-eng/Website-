// Czech content of the blog article /blog/jak-ziskat-pacienty-pro-zubni-ordinaci/ (brief B6 of 07.11.2026): an overview of the channels through which a dental practice can reach new patients (the funnel of the dental niche).
// Informational, YMYL niche: NO statements about what is allowed or forbidden in the advertising of health services (check 11A is not awaited by the author's decision), no legal advice, no medical, price or review statements,
// no names of sites / practices / catalogues / portals (ZnamyLekar is not named), no own data, no periods. Impersonal statements "žádný kanál nic nezaručuje" / "nelze zaručit" are as in the brief (the author's own first-person
// guarantee clauses are not in this text). The table has no empty cell. K2 (original data): none, an overview of channels (Q6). K8 waits for the author. Review the text every 90 days (5. 2. 2027).
import { walk } from '../lib/cs-typo';

// First publication of this address (07.11.2026, by hand).
export const POST_DENTAL_CHANNELS_PUBLISHED = '2026-11-07';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/jak-ziskat-pacienty-pro-zubni-ordinaci.webp', width: 1200, height: 630, alt: 'Ilustrace: šest kanálů, kterými může zubní ordinace oslovit nové pacienty' },

  lead: 'Přehled kanálů bez slibů výsledku, od doporučení po vyhledávání.',

  channelsTitle: 'Odkud mají zubní ordinace pacienty?',
  channelsAnswer: 'Zubní ordinace oslovují pacienty přes doporučení pacientů a kolegů, vlastní web a vyhledávání, mapy a profily, placenou reklamu, sociální sítě a spolupráci s jinými ordinacemi. Každý kanál má svá omezení a žádný nic nezaručuje. Který se hodí, záleží na času, rozpočtu a na tom, odkud přišli dosavadní pacienti.',
  tableCaption: 'Kanály získávání pacientů',
  channels: {
    head: ['Kanál', 'Odkud pacient přichází', 'Kdy se hodí', 'Omezení'],
    rows: [
      ['Doporučení pacientů a kolegů', 'Od stávajících pacientů a od jiných lékařů', 'Když má ordinace stálé pacienty a vztahy s kolegy', 'Nelze je plánovat a nejsou zaručená'],
      ['Vlastní web a SEO, GEO/AEO', 'Z vyhledávání a z odpovědí AI', 'Když pacient ordinaci hledá sám', 'Výsledek ani čas nelze zaručit; texty o léčbě schvaluje lékař ordinace'],
      ['Mapy, místní profily a katalogy lékařů', 'Z map a z hledání v okolí', 'Když rozhoduje poloha', 'Údaje je třeba udržovat a kontrolovat'],
      ['Placená reklama', 'Z reklam ve vyhledávání a na sítích', 'Když ordinace chce pacienty oslovit placeným kanálem', 'Působí jen po dobu platby; před spuštěním si ověřte, co smíte uvádět (komora, právník)'],
      ['Sociální sítě a obsah', 'Z příspěvků a článků', 'Když chce ordinace ukázat sebe a tým', 'Vyžaduje pravidelnou práci a kontrolu, co smíte zveřejnit'],
      ['Spolupráce s jinými ordinacemi a lékaři', 'Od lékařů, kteří pacienty doporučují', 'Když existují spřízněné obory', 'Závisí na vztazích, výsledek není zaručen'],
    ],
  },

  recTitle: 'Co přinášejí doporučení pacientů a kolegů?',
  recAnswer: 'Doporučení přivádějí pacienty, kteří už někomu věří, a mohou přicházet i od jiných lékařů. Nelze je plánovat a jejich počet závisí na okruhu stávajících pacientů a kolegů. Jako jediný kanál tedy nemusí stačit, pokud ordinace chce růst nebo hledá pacienty mimo svůj okruh.',

  webTitle: 'Kdy dává smysl vlastní web a vyhledávání?',
  webAnswer: 'Web a vyhledávání dávají smysl, pokud pacienti ordinaci hledají sami na Googlu nebo Seznamu, případně se ptají AI. Vyžadují průběžnou práci a výsledek ani čas nelze zaručit. Texty o léčbě na webu musí schválit lékař ordinace, já připravuji strukturu a formulace.',
  webLink: { before: 'Jak má vypadat FAQ na webu ordinace, popisuji v', text: 'samostatném článku', after: '.' },

  mapsTitle: 'Co přinášejí mapy, profily a katalogy lékařů?',
  mapsAnswer: 'Mapy, místní profily a katalogy lékařů ukazují ordinaci lidem, kteří hledají v okolí nebo srovnávají. Přínos závisí na tom, zda rozhoduje poloha, a na udržovaných údajích. Co o ordinaci napíšou jiní, nemusí být plně pod její kontrolou. Podmínky jednotlivých služeb zde neuvádím, najdete je u nich.',

  adsTitle: 'Jak je to s placenou reklamou a sociálními sítěmi?',
  adsAnswer: 'Placená reklama i sociální sítě mohou ordinaci ukázat novým lidem, ale působí jen po dobu platby nebo pravidelné práce. U zdravotních služeb si před spuštěním ověřte, co smíte uvádět; obraťte se na komoru nebo právníka. Reklamu nespravuji a pravidla zde nevysvětluji.',
  quote: 'Žádný kanál nic nezaručuje. Rozhodnutí se ale dá opřít o to, odkud přišli dosavadní pacienti.',

  chooseTitle: 'Jak vybrat kanál, když není čas na všechno?',
  chooseAnswer: 'Výběr závisí na čase, rozpočtu a na tom, odkud přicházejí dosavadní pacienti. Univerzálně nejlepší kanál pro každou ordinaci neexistuje. Vyberte jeden nebo dva, které dokážete dlouhodobě udržovat, a ostatní odložte. Po čase vyhodnoťte, co přineslo poptávky, a teprve potom přidejte další.',

  startTitle: 'Jak začít: první tři kroky',
  startAnswer: 'Začněte třemi kroky: zjistěte, odkud přišli současní pacienti, vyberte jeden nebo dva kanály podle času a rozpočtu a po čase vyhodnoťte, co přineslo poptávky. Žádný z kroků nezaručuje počet pacientů ani pozici ve vyhledávání, jde jen o rozumné pořadí práce.',
  start: [
    'Zjistěte, odkud přišli vaši současní pacienti.',
    'Vyberte jeden nebo dva kanály podle času a rozpočtu.',
    'Po čase vyhodnoťte, co přineslo poptávky.',
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Jak může zubní ordinace získat nové pacienty?', a: 'Možnosti jsou doporučení pacientů a kolegů, web a vyhledávání, mapy a profily, sociální sítě nebo spolupráce s jinými ordinacemi. Žádný kanál nic nezaručuje. Nejdřív zjistěte, odkud přišli dosavadní pacienti, a podle toho vyberte jeden nebo dva kanály, které stihnete udržovat.' },
    { q: 'Který kanál je pro zubní ordinaci nejlepší?', a: 'Univerzálně nejlepší kanál neexistuje. Záleží na čase, rozpočtu a na tom, kde pacienti ordinaci nacházejí dnes. Z přehledu výše si vyberte jeden nebo dva kanály, které dokážete dlouhodobě udržovat, a po čase vyhodnoťte, co přineslo poptávky. Výsledek nelze předem zaručit.' },
    { q: 'Jak začít, když ordinace nemá čas ani velký rozpočet?', a: 'Začněte tím, že zjistíte, odkud přišli současní pacienti. Pak vyberte jeden kanál, který dokážete průběžně udržovat, a ostatní odložte. Nemusíte dělat všechno najednou. Po čase si ověřte, zda kanál přinesl poptávky, a teprve potom zvažte další. Nic z toho nezaručuje výsledek.' },
    { q: 'Kdy se SEO pro zubní ordinaci hodí?', a: 'SEO se hodí, když chce ordinace být nalezena přes vyhledávání a má kapacitu web průběžně upravovat. Čas ani výsledek nelze zaručit. Texty o léčbě na webu musí schválit lékař ordinace. Nejdřív se vyplatí zjistit, zda web nemá technické chyby, například v indexaci nebo duplicitní stránky.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Chcete vědět, co SEO pro zubní ordinaci obnáší?',
  endText: 'Podívejte se, co SEO pro zubní ordinaci v Praze obnáší.',
  endCta: 'SEO pro zubní ordinace v Praze',

  schema: {
    about: ['jak získat pacienty pro zubní ordinaci', 'kanály pro zubní ordinaci', 'propagace zubní ordinace', 'nové pacienty zubní ordinace'],
  },
};

export const POST_DENTAL_CHANNELS_CS = walk(raw);
