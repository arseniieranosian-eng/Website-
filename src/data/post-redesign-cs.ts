// Czech content of the blog article /blog/po-redesignu-klesla-navstevnost/ (full brief of 21.10.2026, replaces the first version written from the keyword brief),
// level 1 of the free-audit funnel (symptom). Order: first "is the drop real" (measurement), then the technical causes. No promise of
// recovery or timing; the free audit covers technical errors only (indexing, duplicates, other technical problems). Redirect setup (article 8)
// is mentioned without a link until it exists. Names of Search Console items (Výkon, Stránky, Mapy webu, Kontrola adresy URL) are working
// names to check on a live account; no SERP analysis was done. No author story is invented. The pictures are drawn illustrations ("ilustrace").
// HowTo markup is kept on the two numbered lists at the author's explicit request (the brief's generic note says it is not used).
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_REDESIGN_PUBLISHED = '2026-10-21';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/po-redesignu-klesla-navstevnost.webp', width: 1200, height: 630, alt: 'Ilustrace: graf návštěvnosti, který po spuštění nového webu klesá' },

  lead: 'Po redesignu nejčastěji klesá návštěvnost kvůli změněným adresám bez přesměrování, zapomenutému zákazu indexace, smazaným stránkám nebo chybně nastavenému měření. Nejdřív ověřte, zda je pokles skutečný, potom zkontrolujte adresy a indexaci. Většinu příčin si ověříte sami v Search Console a v prohlížeči.',
  forWhom: 'Text je pro majitele webu, kterému po spuštění nového webu klesla návštěvnost a neví proč. Najdete v něm sedm nejčastějších příčin, způsob kontroly a seznam, co ohlídat před dalším redesignem. Pokles se dá obvykle vysvětlit a většinou jde o technickou věc.',

  tableTitle: 'Sedm příčin, proč po redesignu klesá návštěvnost',
  table: {
    head: ['Příčina', 'Jak poznat', 'Co dělat'],
    rows: [
      ['1. Chyba měření', 'návštěvnost v GA4 klesla, ale v Search Console ne', 'opravit měřicí kód'],
      ['2. Změněné adresy bez přesměrování', 'starý odkaz vede na chybu 404', 'přesměrování 301 na odpovídající stránku'],
      ['3. Noindex nebo robots.txt', 'zdroj stránky, Kontrola adresy URL', 'odstranit zákaz'],
      ['4. Smazané nebo sloučené stránky', 'stránky, které přinášely návštěvnost, chybí', 'obnovit nebo přesměrovat'],
      ['5. Změna struktury a vnitřních odkazů', 'důležité stránky bez odkazů', 'doplnit vnitřní odkazy'],
      ['6. Duplicity a chyby u hlavní adresy', 'www a bez www, http a https, canonical', 'sjednotit adresy'],
      ['7. Změna domény nebo https bez správného přesměrování', 'stará doména je dál v Googlu', 'přesměrování 301, ověření v Search Console'],
    ],
  },

  realTitle: 'Je pokles skutečný, nebo se jen přestala měřit návštěvnost?',
  realAnswer: 'Nejdřív ověřte, zda pokles nezpůsobila chyba měření: po redesignu se často ztratí měřicí kód. Porovnejte GA4 s Google Search Console.',
  realHowToName: 'Jak ověřit, zda je pokles po redesignu skutečný',
  realStepNames: ['Zkontrolujte měřicí kód', 'Porovnejte GA4 s Search Console', 'Vyloučte sezónnost'],
  realSteps: [
    'Zkontrolujte, zda je na novém webu měřicí kód (GA4).',
    'Porovnejte návštěvnost z vyhledávání v GA4 s kliky v Search Console (sekce Výkon).',
    'Vyloučte sezónnost: porovnejte stejné období loni.',
  ],
  realText: 'Pokud v Search Console pokles není, problém je v měření. Pokud tam pokles je, pokračujte dalšími kroky.',

  normalTitle: 'Kdy je pokles po redesignu normální?',
  normalAnswer: 'Krátkodobé výkyvy po změně webu jsou časté, protože Google web znovu zpracovává. Pokud pokles trvá týdny nebo se prohlubuje, hledejte příčinu.',
  normalText: 'Po změně webu Google stránky znovu prochází a vyhodnocuje. Nejde o pevné pravidlo ani o časový limit: sledujte, zda se pokles zastaví, nebo prohlubuje.',

  urlTitle: 'Změnily se adresy bez přesměrování?',
  urlAnswer: 'Je to nejčastější technická příčina. Když se po redesignu změní adresy a staré se nepřesměrují, návštěvníci i Google skončí na chybě 404 a web ztratí viditelnost.',
  urlText: 'Otevřete v prohlížeči několik starých adres, například ze starého sitemapu nebo ze seznamu stránek v Search Console. Přesměrování 301 pošle návštěvníka i Google ze staré adresy na odpovídající novou stránku. Podrobný postup nastavení najdete v článku',
  urlLinkText: 'Přesměrování 301 a chyby 404',
  quote: 'Po redesignu se často ztrácejí hlavně adresy, ne obsah. Než začnete psát nové texty, ověřte, kam vedou ty staré.',

  indexTitle: 'Zůstal na webu zákaz indexace po vývoji?',
  indexAnswer: 'Při vývoji se web často zavírá před vyhledávači a po spuštění se zapomene otevřít. Zkontrolujte noindex a soubor robots.txt.',
  indexLead: 'Další příčiny, proč se web v Googlu nezobrazuje, najdete v článku',
  indexLinkText: 'Proč se můj web nezobrazuje v Googlu',
  indexLead2: 'Jak zjistit, co Google zařadil, vysvětluji v článku',
  indexLinkText2: 'Jak zjistit, jestli je web indexovaný v Googlu',

  goneTitle: 'Zmizely stránky nebo obsah, který přinášel návštěvnost?',
  goneAnswer: 'Při redesignu se stránky slučují, mažou nebo přepisují. Porovnejte stránky, které přinášely návštěvnost před změnou, s tím, co je na webu dnes.',
  goneText: 'V Search Console v sekci Výkon porovnejte stránky s nejvíce kliky před změnou a po ní. Smazané stránky obnovte, nebo je přesměrujte na odpovídající novou.',

  structTitle: 'Nezměnila se struktura a vnitřní odkazy?',
  structAnswer: 'Nové menu a jiná struktura mohou skrýt důležité stránky. Stránka bez vnitřních odkazů se hůř hledá a hůř hodnotí.',
  structText: 'Zkontrolujte, zda jsou důležité stránky propojené z menu a z dalších stránek webu. Pokud po redesignu odkazy zmizely, doplňte je.',

  dupTitle: 'Nevznikly duplicity nebo chyby u hlavní adresy?',
  dupAnswer: 'Po redesignu se často objeví dvě verze webu: s www a bez www nebo http a https. Google pak vybírá jednu a signály se dělí.',
  dupText: 'Stejný princip platí při změně domény nebo přechodu na https: bez správného přesměrování 301 zůstává stará verze v Googlu.',
  dupLead: 'Co jsou duplicity a jak je vyřešit, vysvětluji v článku',
  dupLinkText: 'Duplicitní obsah',

  gscTitle: 'Jak změny ověřit v Search Console?',
  gscAnswer: 'V Search Console zkontrolujete konkrétní adresu, stav indexace celého webu a mapu webu. Obojí je zdarma, stačí ověřit vlastnictví.',
  gsc: [
    'Kontrola adresy URL: stav konkrétní stránky.',
    'Report Stránky: stav indexace celého webu.',
    'Mapy webu: odeslání a stav mapy webu.',
  ],
  gscLead: 'Obecný postup vysvětluji v článku',
  gscLinkText: 'Jak zjistit, jestli je web indexovaný v Googlu',

  beforeTitle: 'Co zkontrolovat před redesignem?',
  beforeAnswer: 'Před redesignem si uložte seznam starých adres, připravte mapu přesměrování a po spuštění projděte indexaci a měření.',
  beforeHowToName: 'Co zkontrolovat před redesignem',
  beforeStepNames: ['Uložte staré adresy', 'Připravte mapu přesměrování 301', 'Zkopírujte titulky a meta popisy', 'Zkontrolujte, že web není uzavřený', 'Ověřte indexaci a měření'],
  before: [
    'Uložte seznam všech starých adres.',
    'Připravte mapu přesměrování 301 ze starých adres na nové.',
    'Zkopírujte titulky a meta popisy důležitých stránek.',
    'Před spuštěním zkontrolujte, že web není uzavřený (noindex, robots.txt).',
    'Po spuštění ověřte indexaci a měření.',
  ],

  bridgeTitle: 'Co když si nejste jistí, kde je chyba?',
  bridge: 'Pokud po redesignu nevíte, kde je chyba, bezplatný audit ukáže technické chyby: indexaci, duplicity a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  border: 'Pokud je příčina v obsahu, rychlosti nebo mobilní verzi, bezplatný audit ji neukáže; v tom případě pomůže',
  borderLink: 'konzultace',
  cta: 'Chci audit zdarma',

  faqTitle: 'Časté otázky po redesignu webu',
  faq: [
    { q: 'Jak dlouho trvá, než se návštěvnost po redesignu vrátí?', a: 'Záleží na příčině a velikosti webu. Po opravě technických chyb může Google web zpracovat za dny až týdny, ale návrat návštěvnosti zaručit nelze.' },
    { q: 'Je normální, že po změně webu klesnou pozice?', a: 'Krátkodobé výkyvy jsou po změně webu časté, protože Google web znovu zpracovává. Pokud pokles trvá týdny, hledejte příčinu.' },
    { q: 'Pomůže vrátit starý web?', a: 'Někdy to může být dočasné řešení, ale lepší je najít příčinu a opravit ji. Samotný návrat ke starému webu výsledek nezaručí a může přinést další změny adres.' },
    { q: 'Musím po redesignu přesměrovat všechny staré adresy?', a: 'Ideálně ano: všechny staré adresy, které měly návštěvnost nebo odkazy, přesměrujte na nejbližší odpovídající novou stránku. Seznam starých adres si uložte před spuštěním.' },
  ],

  endTitle: 'Nevíte, kde je chyba po redesignu?',
  endText: 'Když po redesignu nevíte, kde je chyba, podívám se na technické chyby webu.',
  nextLead: 'Další krok:',
  nextLinkText: 'Duplicitní obsah: co to je a jak ho vyřešit',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  figures: [
    { kind: 'drop' as const, aria: 'Ilustrace: graf návštěvnosti, která klesne po spuštění nového webu', caption: 'Ilustrace: pokles návštěvnosti po spuštění nového webu (ukázkový průběh, ne skutečná data).' },
    { kind: 'e404' as const, aria: 'Ilustrace: report Stránky v Search Console s chybami 404', caption: 'Ilustrace: report Stránky s chybami 404 (hodnoty jsou ukázkové).' },
  ],

  schema: {
    about: ['po redesignu klesla návštěvnost', 'propad návštěvnosti webu', 'ztráta pozic po redesignu', 'změna webu SEO', 'migrace webu SEO'],
  },
};

export const POST_REDESIGN_CS = walk(raw);
