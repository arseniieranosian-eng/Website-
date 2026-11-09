// Czech content of the blog article /blog/web-nebo-socialni-site-pocitacova-herna/ (brief C2 of 09.11.2026): the roles of a website and of social networks for a computer club, and how they can coexist.
// Neutral, no "what is better", no names of clubs / accounts / platforms / catalogues, no numbers of followers / reviews / ratings, no prices, no cases, no periods, nothing about Google, algorithms,
// behaviour of customers or effectiveness of channels. The observation of 07.11.2026 (11 club sites, links to social networks on all of them) is the same sample as in the article about the weak SEO of computer clubs.
// The expert block (H2-3b) and the two lines (a), (b) are published because the author confirmed all three points of the brief on 09.11.2026: written consent of Alina Kasyanova (name, position, link, the exact text of
// the quote), position "SMM specialistka", no relationship (no reward, no cooperation with any club of the sample). The expert and her quote are NOT in the JSON-LD (the author's decision). The word "herna" alone is not in
// the title, H1, H2 or FAQ questions. The first-person clause "a nezaručuji to" (H2-3) is inserted verbatim as the brief says (see the note on guarantee phrases in the report). K8 (AI line) waits for the author.
import { walk } from '../lib/cs-typo';

// First publication of this address (09.11.2026, entered by hand).
export const POST_WEB_SOCIAL_GAMING_PUBLISHED = '2026-11-09';
export const EXPERT_URL = 'https://www.instagram.com/alina.kasyanovaa/';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/web-nebo-socialni-site-pocitacova-herna.webp', width: 1200, height: 630, alt: 'Ilustrace: vlastní web a sociální sítě jako dva kanály počítačové herny' },

  expertLine: { before: 'Část o sociálních sítích konzultovala', name: 'Alina Kasyanova', after: ', SMM specialistka.' },
  lead: 'Dva kanály s různou rolí, bez pořadí důležitosti.',

  diffTitle: 'Čím se liší vlastní web a sociální sítě u počítačové herny?',
  diffAnswer: 'Sociální sítě jsou profily na cizí platformě, kde herna sdílí příspěvky a komunikuje se sledujícími. Web je vlastní adresa, kde má herna pod kontrolou texty, stránky služeb a údaje. Každý z nich plní jinou roli. Které role herna potřebuje, záleží na tom, odkud jí zájemci přicházejí dnes.',
  tableCaption: 'Web a sociální sítě v kostce',
  table: {
    head: ['Kritérium', 'Vlastní web', 'Sociální sítě'],
    rows: [
      ['Kdo to řídí', 'Adresa a obsah patří herně', 'Profil běží na cizí platformě podle jejích pravidel'],
      ['Co tam lze ukázat', 'Stránky služeb a akcí, FAQ a údaje na jednom místě', 'Příspěvky, příběhy a komunikace se sledujícími'],
      ['Práce', 'Úpravy podle potřeby; SEO vyžaduje průběžnou práci', 'Pravidelné publikování'],
      ['Kdy se hodí', 'Když chce herna mít údaje a stránky pod svou kontrolou', 'Když chce herna komunikovat se stávající komunitou'],
      ['Omezení', 'Výsledek ve vyhledávání nelze zaručit', 'Pravidla určuje platforma'],
    ],
  },
  tableNote: 'Tabulka vychází z obecné logiky, bez čísel a bez hodnocení konkrétních sítí ani heren.',

  enoughTitle: 'Kdy stačí sociální sítě a kdy se hodí i vlastní web?',
  enoughAnswer: 'Sociální sítě mohou stačit, když chce herna hlavně komunikovat se stávající komunitou a má málo času na web. Vlastní web se hodí, když chce mít údaje, stránky služeb a akcí na jednom místě pod svou kontrolou. Rozhodnutí závisí na času, rozpočtu a na tom, odkud zájemci přicházejí.',

  togetherTitle: 'Jak mohou web a sociální sítě fungovat spolu?',
  togetherAnswer: 'Web může odkazovat na profily a profily na web, takže zájemce najde obojí. Příspěvky ukazují život herny, web drží stálé údaje. Jak se to promítne do návštěv, nelze předem říct a nezaručuji to. Není nutné dělat všechno najednou, stačí začít jedním kanálem, který zvládnete udržovat.',

  // Expert block (H2-3b): published after the author's confirmation of 09.11.2026.
  expertTitle: 'Co k tomu říká SMM specialistka?',
  expertAnswer: 'Sociální sítě znají lépe SMM specialisté, proto jsem požádal o komentář Alinu Kasyanovou, SMM specialistku. Níže je její pohled na to, k čemu sociální sítě herně slouží a co vyžadují. Je to její osobní názor, ne průzkum a ne záruka výsledku. Do hodnocení konkrétních heren se nepouštíme.',
  expertQuote: 'Sociální sítě jsou pro herny hlavně způsob, jak zůstat v kontaktu s komunitou. Vyžadují ale pravidelnou práci, a s tou je dobré počítat předem.',
  expertCaption: { name: 'Alina Kasyanova', role: 'SMM specialistka' },

  seenTitle: 'Co jsem viděl u 11 webů počítačových heren?',
  seenAnswer: 'K 7. 11. 2026 jsem měl v přehledu 11 webů samotných heren z výsledků pro dotaz „počítačová herna praha“. Na všech jedenácti byly odkazy na sociální sítě. Nepočítal jsem sledující ani aktivitu, takže o síle jejich profilů nic tvrdit nemohu. Je to můj pozorovací vzorek, ne průzkum trhu.',
  seenMore: 'Šlo o jeden dotaz, jedno zařízení a jeden den. Názvy heren, účtů a platforem neuvádím.',
  quote: 'Otázka není, co je lepší, ale co která počítačová herna zvládne dlouhodobě udržovat.',

  startTitle: 'Jak začít, když nevíte, který kanál zvolit?',
  startAnswer: 'Začněte tím, že zjistíte, odkud přišli současní zákazníci. Vyberte jeden kanál, web nebo sociální sítě, který dokážete průběžně udržovat, a ostatní odložte. Po čase vyhodnoťte, co přineslo poptávky, a teprve potom přidejte další. Nic z toho nezaručuje počet zákazníků ani pozici ve vyhledávání.',
  start: [
    'Zjistěte, odkud přišli vaši současní zákazníci.',
    'Vyberte jeden kanál, který dokážete průběžně udržovat.',
    'Po čase vyhodnoťte, co přineslo poptávky.',
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Jak poznám, jestli počítačová herna potřebuje vlastní web?', a: 'Zeptejte se, kde zájemci dnes získají údaje o herně a zda je chcete mít pod vlastní kontrolou. Pokud je všechno jen v profilech, spoléháte se na cizí platformu a její pravidla. Nic z toho nezaručuje návštěvy ani výsledek, rozhodnutí závisí na vašem čase a rozpočtu.' },
    { q: 'Je potřeba mít web i sociální sítě?', a: 'Není to povinné a univerzální odpověď neexistuje. Web a sociální sítě plní různé role, takže některé herny využijí obojí a jiné jeden kanál. Záleží na čase, rozpočtu a na tom, odkud zájemci přicházejí. Nejdřív zjistěte, kde vás nacházejí dnes, a podle toho vybírejte.' },
    { q: 'Co dělat, když počítačová herna nemá web?', a: 'Zjistěte, kde vás zájemci nacházejí dnes, a rozhodněte, zda chcete údaje, stránky služeb a akcí mít na vlastní adrese pod svou kontrolou. Web nevzniká sám a vyžaduje práci. Výsledek ve vyhledávání nelze zaručit. Pokud nemáte čas, začněte jedním kanálem, který zvládnete udržovat.' },
  ],

  // Line (b): published because the author confirmed "no relationship" on 09.11.2026.
  expertDisclosure: 'Alina Kasyanova za komentář nedostala odměnu a nespolupracuje s žádnou z heren v mém vzorku.',
  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Zvažujete web pro svou počítačovou hernu?',
  endText: 'Podívejte se na stránku pro počítačové herny v Praze.',
  endCta: 'SEO pro počítačové herny v Praze',

  schema: {
    about: ['web nebo sociální sítě pro počítačovou hernu', 'web počítačové herny', 'sociální sítě počítačové herny'],
  },
};

export const POST_WEB_SOCIAL_GAMING_CS = walk(raw);
