// Czech content of the blog article /blog/seo-a-reklama/ (brief of 21.10.2026), mid-funnel article towards /start-3-mesice/ (main) and
// /konzultace/. The author does not run advertising ("Reklamu nespravuji, pomáhám připravit web"); no promise that SEO lowers the cost per
// client (mechanism worded as possible, no numbers, no prices); advertising is not belittled. The brief's claim about Google Ads judging
// the landing-page experience is NOT stated (to be checked against the Google Ads help before it goes in). Quote 2 is by the PPC
// specialist Ilya Naumuk (Instagram link given by the author); the wording is a draft that needs his approval, without it the block and
// its Quotation node are to be removed. The word "agentura" is not used about the author. The pictures are drawn illustrations.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_ADS_PUBLISHED = '2026-10-21';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/seo-a-reklama.webp', width: 1200, height: 630, alt: 'Ilustrace: reklama a SEO jako dva doplňující se kanály nad stejným webem' },

  lead: 'Reklama dodá návštěvníky rychle, ale platíte za každého a výsledek závisí na webu, kam je pošlete. Web připravený pro SEO, srozumitelný a relevantní, může reklamě pomoci a zlepšit poměr návštěv a poptávek. SEO reklamu nenahrazuje, ale dává jí základ, na kterém může stát.',
  forWhom: 'Text je pro majitele firmy, který platí za kliky nebo to plánuje a chce vědět, jak s tím souvisí SEO. Reklamu nespravuji, pomáhám připravit web.',

  diffTitle: 'Reklama, nebo SEO: v čem se liší?',
  diffAnswer: 'Reklama dá návštěvy hned a platíte za každou. SEO se buduje postupně, ale výsledky ve vyhledávání zůstávají a neplatíte za jednotlivé kliky.',
  diff: {
    head: ['Hledisko', 'Reklama', 'SEO'],
    rows: [
      ['Rychlost', 'návštěvy hned po spuštění', 'výsledky přicházejí postupně'],
      ['Platba', 'za kliknutí nebo zobrazení', 'za práci na webu, ne za každý klik'],
      ['Trvalost', 'končí s rozpočtem', 'výsledky se mohou udržet i po skončení práce, ale časem se mění'],
      ['Kontrola', 'přesné cílení a rozpočet', 'výsledky nelze přesně řídit ani zaručit'],
      ['Kdy dává smysl', 'sezónní akce, test poptávky', 'dlouhodobý stabilní růst'],
    ],
  },
  diffText: 'Oba kanály se doplňují, nenahrazují.',
  diffLead: 'Jak SEO a viditelnost v AI souvisí, vysvětluji na stránce',
  diffLinkText: 'Jak SEO a GEO/AEO funguje',

  costTitle: 'Proč reklama často vychází draho?',
  costAnswer: 'Platíte za každý klik, i když návštěvník na webu nic neudělá. Když stránka neodpovídá tomu, co člověk hledal, klik je zaplacený, ale poptávka nepřijde.',
  costText: 'Typicky jde o jeden klik na jednu stránku, která nedává odpověď. Návštěvník odejde a rozpočet je pryč. Nejde o chybu reklamy, ale o místo, kam míří.',
  quote1: 'Reklama dodá návštěvníky, ale o tom, jestli z nich budou poptávky, rozhoduje web. Proto začínám základem, ne rozpočtem.',

  helpTitle: 'Jak pomáhá SEO-připravený web reklamě?',
  helpAnswer: 'Web připravený pro SEO má stránky, které odpovídají na konkrétní dotazy, jsou srozumitelné a vzbuzují důvěru. Na takovou stránku se reklama míří snáz a návštěvník má větší šanci udělat další krok.',
  help: [
    'Stránka odpovídá na to, co člověk hledal.',
    'Struktura a nadpisy vedou k jednomu cíli stránky.',
    'Prvky důvěry a jasná výzva k akci.',
    'Data ze Search Console ukazují, co lidé na webu skutečně hledají; z nich lze vybrat témata pro reklamu.',
  ],
  helpText: 'Zaručit konkrétní dopad na cenu za klienta nelze, záleží na oboru a kampani.',

  badTitle: 'Co se stane, když pošlete reklamu na neoptimalizovaný web?',
  badAnswer: 'Zaplatíte za návštěvy, které se na webu ztratí: stránka neodpovídá dotazu, chybí důvěra nebo formulář není vidět.',
  bad: [
    'Stránka neodpovídá dotazu, na který reklama míří.',
    'Chybí důkazy a reference.',
    'Formulář nebo výzva k akci jsou schované.',
    'Stránka je pomalá nebo nepřehledná na mobilu.',
  ],
  badText: 'Jde o obecné pozorování. Bezplatný audit tyto věci nekontroluje, protože se zaměřuje jen na technické chyby.',

  orderTitle: 'V jakém pořadí SEO a reklamu kombinovat?',
  orderAnswer: 'Nejdřív základ webu, pak měření, pak reklama na nejlepší stránky a nakonec přesun rozpočtu tam, kde funguje.',
  orderSteps: [
    'Připravte základ webu: technika, struktura, hlavní stránky.',
    'Nastavte měření poptávek.',
    'Pošlete reklamu na stránky, které nejlépe odpovídají dotazům.',
    'Podle dat přesouvejte rozpočet.',
  ],
  bridgeA: 'Pokud chcete, aby váš web unesl reklamu i organické vyhledávání, začněte základem:',
  bridgeStartLink: 'SEO start na 3 měsíce',
  bridgeB: 'Potřebujete plán, jak rozdělit rozpočet mezi reklamu a SEO? Domluvte',
  bridgeConsultLink: 'konzultaci',
  softLead: 'Technické chyby webu ukáže',
  softLinkText: 'bezplatný audit',

  firstTitle: 'Kdy je reklama první volba?',
  firstAnswer: 'Reklama dává smysl, když potřebujete rychle otestovat poptávku, máte sezónní akci nebo teprve začínáte a nemáte co optimalizovat.',
  firstText: 'V takových situacích nemá smysl čekat na SEO. Reklama je rychlý a řiditelný nástroj a SEO k ní může přibýt později.',

  readyTitle: 'Jak poznat, že je web připravený na reklamu?',
  readyAnswer: 'Web je připravený, když stránka odpovídá na dotaz, má jasnou nabídku a výzvu k akci, vzbuzuje důvěru a měří poptávky.',
  quote2: 'Dobrá cílová stránka je polovina úspěchu kampaně. Když neodpovídá tomu, co člověk hledal, může být každý klik zbytečně drahý.',
  quote2Person: { name: 'Ilya Naumuk', role: 'specialista na PPC reklamu', instagram: 'https://www.instagram.com/naum_official', photo: { src: '/images/blog/ilya-naumuk.jpg', width: 150, height: 150, alt: 'Ilya Naumuk, specialista na PPC reklamu' } },
  ready: [
    'Stránka odpovídá na konkrétní dotaz.',
    'Nabídka a výzva k akci jsou na první pohled jasné.',
    'Web vzbuzuje důvěru (reference, kontakty, informace o firmě).',
    'Formulář nebo telefon fungují a poptávky se měří.',
    'Web je technicky v pořádku (je v Googlu, bez zjevných chyb).',
    'Stránka je přehledná na mobilu.',
  ],

  faqTitle: 'Časté otázky o SEO a reklamě',
  faq: [
    { q: 'Je SEO levnější než reklama?', a: 'Záleží na oboru a konkurenci. SEO se platí za práci na webu, ne za každý klik, ale výsledky přicházejí postupně. Reklama dodá návštěvy rychle, ale platíte za každou. Jedno druhé nenahrazuje.' },
    { q: 'Můžu dělat SEO a reklamu najednou?', a: 'Ano, a často to dává smysl: reklama přináší rychlé návštěvy, SEO buduje základ, který zlepšuje stránky, kam reklama vede.' },
    { q: 'Kdy se SEO začne vyplácet?', a: 'Výsledky přicházejí postupně a záleží na oboru, konkurenci a stavu webu. Konkrétní termín slíbit nelze.' },
    { q: 'Spravujete také reklamu?', a: 'Ne, reklamu nespravuji. Pomáhám připravit web, aby měly reklama i organické vyhledávání na čem stát.' },
  ],

  endTitle: 'Chcete web, který unese reklamu i SEO?',
  endText: 'Když chcete, aby váš web unesl reklamu i organické vyhledávání, začněte základem.',
  ctaStart: 'SEO start na 3 měsíce',
  ctaConsult: 'Domluvit konzultaci',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  figure: { kind: 'flow' as const, aria: 'Ilustrace: schéma kroků základ webu, měření, reklama a přesun rozpočtu', caption: 'Ilustrace: v jakém pořadí SEO a reklamu kombinovat.' },

  schema: {
    about: ['SEO a reklama', 'SEO nebo reklama', 'kombinace SEO a PPC', 'kvalita cílové stránky'],
  },
};

export const POST_ADS_CS = walk(raw);
