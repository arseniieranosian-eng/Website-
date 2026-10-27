// Czech content of the blog article /blog/stranky-sluzeb-ucetni-kancelare/ (brief U4 of 27.10.2026), the practical article of the accounting-firm funnel (how to write a service page).
// Defaults taken: no quote, no observations, no figures, no prices, no CTA / audit, no tax or legal statements, no U6 / U7 links, no real service names in the example ("Příklad k úpravě" uses placeholders).
// The Title is 53 characters ("Stránky služeb účetní kanceláře: jak psát | Eranosian"; the brief's 58 would break the site-wide limit of 55) and the description 142 (brief: 151, limit 150).
// The doorway-abuse paraphrase follows the brief (source: https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse); it was NOT compared with the Google page from here (not reachable
// from the build environment), so that comparison is still open before the live release. Item 8 of the brief (replace FAQ 4 of the U2 article) is NOT done: the new answer is to come in a separate brief.
// Links: U2 (introduction), the duplicate-content article (F5), U3 (related), the accounting landing page (closing block). Length: the brief's texts give about 1 100 words, below the 1 200–1 800 target;
// nothing outside the brief was added. No HowTo, no Service, no ratings, no Quotation.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_ACCOUNTING_PAGES_PUBLISHED = '2026-10-27';
export const GOOGLE_DOORWAY_URL = 'https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse';
// Review every 90 days: next 2027-01-25.

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/stranky-sluzeb-ucetni-kancelare.webp', width: 1200, height: 630, alt: 'Ilustrace: stránka služby účetní kanceláře složená z úvodu, postupu spolupráce a kontaktu' },

  leadBefore: 'Stránka služby účetní kanceláře je stránka, která jedné službě vysvětlí, pro koho je a jak spolupráce začíná. Kolik takových stránek mít, záleží na kanceláři; příčiny, proč web poptávky nepřináší, popisuje',
  leadLinkText: 'samostatný článek',

  whenTitle: 'Kdy má služba dostat vlastní stránku?',
  whenAnswer: 'Vlastní stránku dává smysl dát službě, kterou klient hledá samostatně, o které máte co říct a která se liší od ostatních. Podobné služby zvládne jedna společná stránka. Rozhodujte podle toho, zda stránka přinese klientovi novou informaci, ne podle toho, kolik stránek chcete mít.',
  whenTable: {
    head: ['Situace', 'Vlastní stránka, nebo společná'],
    rows: [
      ['Klient hledá službu samostatně a potřebuje konkrétní informace', 'vlastní stránka'],
      ['Služby jsou velmi podobné a liší se jen detailem', 'společná stránka'],
      ['Služba je pro jiný typ klienta než ostatní', 'vlastní stránka'],
      ['O službě nemáte co říct víc než jednu větu', 'součást přehledu služeb'],
      ['Chcete jen pokrýt další hledané slovo', 'stránku nevytvářet'],
    ],
  },
  whenNote: 'Tabulka je orientační, bez čísel.',

  partsTitle: 'Z čeho se skládá stránka služby?',
  partsAnswer: 'Stránka služby obsahuje několik prvků: co kancelář dělá, pro koho je služba, jak spolupráce probíhá, co se od klienta čeká a jak se kancelář kontaktuje. Pořadí se může lišit, ale zájemce má najít odpověď na to, co dostane a co má udělat dál.',
  partsTable: {
    head: ['Prvek', 'K čemu je'],
    rows: [
      ['Úvod', 'řekne, o jaké službě stránka je'],
      ['Pro koho', 'pomůže poznat, zda je služba pro čtenáře'],
      ['Postup spolupráce', 'ukáže první kroky'],
      ['Podklady od klienta', 'řekne, co má klient připravit'],
      ['Kontakt', 'umožní ozvat se'],
      ['Související stránky', 'vede k příbuzným službám'],
    ],
  },

  introTitle: 'Jak napsat úvod stránky služby?',
  introAnswer: 'Úvod stránky služby má v prvních dvou až třech větách říct, co kancelář dělá, pro koho a jaký je další krok. Zájemce nemá hledat odpověď až v dalších odstavcích. Cena do úvodu patří jen tehdy, pokud se pro ni sami rozhodnete; tento článek žádné ceny nedoporučuje. Příklad k úpravě najdete níže.',
  exampleLabel: 'Příklad k úpravě',
  example: '[Název služby] pro [typ klienta]. Zajišťujeme [co kancelář dělá, jednou větou]. Spolupráce začíná [první krok]. Od klienta potřebujeme [podklady] a výsledkem je [co klient dostane]. Napište nebo zavolejte na [kontakt] a domluvíme další postup.',

  whoTitle: 'Jak popsat, pro koho je služba?',
  whoAnswer: 'Popište typ klienta tak, jak sám sebe popisuje: například OSVČ, s.r.o., plátce nebo neplátce DPH, firma se zaměstnanci. Typ klienta je jen označení, nevysvětlujte tu pravidla ani povinnosti. Pokud kancelář pracuje s více typy klientů, rozlište je krátkými odstavci, ne složitými tabulkami.',

  stepsTitle: 'Jak popsat postup spolupráce a podklady?',
  stepsAnswer: 'Popište postup spolupráce v několika krocích: první kontakt, domluva rozsahu, předání podkladů a pravidelná spolupráce. Uveďte, co klient připraví a jak se podklady předávají. Nepište právní lhůty ani povinnosti, ty řešte mimo tento text. Jasný postup snižuje nejistotu zájemce před prvním kontaktem.',
  stepsLead: 'Kontrolní seznam postupu:',
  steps: [
    'první kontakt;',
    'domluva rozsahu služby;',
    'jak se předávají podklady;',
    'co klient připraví;',
    'kdo je kontaktní osoba;',
    'jak vypadá pravidelná spolupráce.',
  ],

  headTitle: 'Jak zvolit název stránky, nadpisy a adresu URL?',
  headAnswer: 'Název stránky a nadpis H1 mají jasně říkat, o jaké službě stránka je. Adresa URL má být krátká, čitelná a stálá. Podnadpisy pište jako otázky klienta, například pro koho je služba a jak spolupráce probíhá. Nenatahujte klíčová slova a neměňte adresy bez přesměrování.',
  headLead: 'Kontrolní seznam nadpisů:',
  heads: [
    'H1 říká, o jaké službě stránka je;',
    'URL krátká a čitelná;',
    'podnadpisy jako otázky klienta;',
    'žádné opakování klíčových slov;',
    'adresu neměnit bez přesměrování;',
    'title se liší od H1.',
  ],

  linksTitle: 'Jak stránky služeb propojit mezi sebou a s kontaktem?',
  linksAnswer: 'Stránky služeb propojte tam, kde klient přirozeně potřebuje další informaci: z přehledu služeb na jednotlivé stránky, mezi příbuznými službami a vždy ke kontaktu. Odkaz má mít srozumitelný text, ne jen „více“. Kontakt musí být dohledatelný na každé stránce služby, aby zájemce nemusel hledat, jak se ozvat.',

  avoidTitle: 'Čemu se při psaní stránek služeb vyhnout?',
  avoidAnswer: 'Vyhněte se téměř stejným stránkám pro každou obec nebo město s pouhou výměnou slov a textům vytvořeným jen pro pokrytí hledaných slov. Google takové stránky v zásadách o doorway označuje jako zneužití: vznikají kvůli podobným dotazům, ne kvůli čtenáři. Každá stránka má mít vlastní užitek pro klienta.',
  avoidSource: 'Zásady Google proti spamu, část o doorway stránkách',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Kolik stránek služeb má účetní kancelář mít?', a: 'Počet stránek se odvíjí od toho, kolik různých služeb a typů klientů kancelář má a kolik užitečného lze o každé napsat. Neexistuje správný počet. Raději méně stránek, které klientovi opravdu pomohou, než mnoho podobných. Zvažte vždy, zda stránka přinese novou informaci.' },
    { q: 'Má mít každý typ klienta vlastní stránku?', a: 'Nemusí. Vlastní stránku zvažte, pokud se služba pro daný typ klienta výrazně liší a máte o ní co říct. Jinak stačí společná stránka s odstavcem pro každý typ klienta. Rozhodnutí závisí na obsahu a na tom, zda klient službu hledá samostatně, ne na pevném pravidle.' },
    { q: 'Jak dlouhá má být stránka služby?', a: 'Stránka má být tak dlouhá, aby odpověděla na otázky zájemce, ne delší. Pro běžnou službu stačí úvod, popis, pro koho je, postup spolupráce, podklady a kontakt. Délka není cíl sama o sobě. Hlavní je srozumitelnost. Dlouhý text bez nového obsahu klientovi nepomáhá.' },
    { q: 'Mám uvést cenu na stránce služby?', a: 'Záleží na vašem rozhodnutí a na tom, zda cenu umíte stanovit předem. Tento článek žádné ceny ani tarify nedoporučuje. Pokud cenu neuvedete, napište aspoň, jak se cena určuje nebo jak ji zájemce zjistí. Jasná informace zájemci pomáhá víc než mlčení.' },
    { q: 'Mohu použít stejný text pro více služeb?', a: 'Nedoporučuje se. Téměř stejné texty na více stránkách zbytečně opakují obsah a ztěžují zájemci orientaci. Takový obsah čtenáři nepomáhá. Pokud se služby liší, napište pro každou vlastní popis. Pokud se neliší, spojte je do jedné stránky. Souvislosti duplicitního obsahu popisuje samostatný článek.', linkAfter: 'samostatný článek', linkKey: 'postDuplicates' },
    { q: 'Jak poznám, že stránka služby funguje?', a: 'Sledujte, zda stránka přivádí poptávky a návštěvnost, a zapisujte si, odkud se zájemci ozvali. Konkrétní čísla tu neuvádím, protože závisí na webu a oboru. Pokud stránka poptávky nepřináší, zkontrolujte srozumitelnost úvodu, postup spolupráce a dostupnost kontaktu. Změny hodnoťte v delším období, ne po několika dnech.' },
  ],

  relatedTitle: 'Související články',

  endText: 'Systematickou práci na SEO webu účetní kanceláře popisuje stránka',
  endLinkText: 'SEO pro účetní kanceláře v Praze',
  endText2: 'Tento článek je jen přehled toho, jak psát stránky služeb.',

  schema: {
    about: ['stránky služeb účetní kanceláře', 'jak napsat stránku služby účetní kanceláře', 'kolik stránek služeb má mít web účetní kanceláře'],
  },
};

export const POST_ACCOUNTING_PAGES_CS = walk(raw);
