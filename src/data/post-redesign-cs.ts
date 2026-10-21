// Czech content of the blog article /blog/po-redesignu-klesla-navstevnost/ (keyword brief of 21.10.2026), level 1 of the free-audit
// funnel (symptom). Order: first "is the drop real" (measurement, seasonality), only then the technical causes. No promise that an
// audit or a fix brings traffic or rankings back; the recovery-time answer has no numbers. Redirects and 404 only in one sentence each
// (details belong to the planned redirect article 8), noindex/robots.txt, duplicates and the indexation check one sentence plus a link.
// "Pokles pozic" in general is a different intent and gets only an honest border (consultation). Names of Search Console items
// (Výkon, Stránky, Mapy webu, Kontrola adresy URL) are working names to check on a live account. No author story is invented.
// The pictures are drawn illustrations ("ilustrace"). Title is 57 characters (the brief's longer wording would be cut in results).
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

  lead: 'Když po redesignu klesla návštěvnost, bývá příčinou chybné měření, změněné adresy bez přesměrování, chyby 404 nebo zapomenutý zákaz indexace. Nejdřív ověřte, zda je pokles skutečný, a teprve potom hledejte technickou příčinu. Zaručit návrat návštěvnosti nelze.',
  forWhom: 'Text je pro majitele webu, kterému po změně webu přišlo méně lidí a nechce panikařit ani nic přehlédnout. Většinu bodů ověříte sami. Bezplatný audit se vyplatí, když si nejste jistí, co vidíte.',

  tableTitle: 'Kde hledat chybu po redesignu',
  table: {
    head: ['Kde hledat', 'Jak ověřit', 'Co dělat'],
    rows: [
      ['Měření', 'je na novém webu měřicí kód a sedí čísla s kliky v Search Console', 'doplnit nebo opravit kód'],
      ['Adresy bez přesměrování', 'stará adresa vs. nová', 'nastavit přesměrování 301'],
      ['Chyby 404', 'report Stránky v Search Console', 'opravit odkazy nebo přesměrovat'],
      ['Noindex a robots.txt', 'zdroj stránky a vasedomena.cz/robots.txt', 'odstranit zákaz indexace'],
      ['Duplicity', 'stejný obsah na více adresách', 'sjednotit adresy'],
      ['Indexace a mapa webu', 'Kontrola adresy URL a Mapy webu', 'odeslat novou mapu webu'],
    ],
  },

  realTitle: 'Je pokles návštěvnosti opravdu skutečný?',
  realAnswer: 'Nejdřív ověřte, zda nejde o chybu měření: zda je na novém webu měřicí kód (GA4), zda čísla sedí s kliky v Search Console a zda nejde jen o sezónnost.',
  realText: 'Po redesignu se kód často nepřenese a čísla klesnou jen v analytice. Porovnejte údaje s klikami v sekci Výkon v Search Console a stejné období s loňským rokem. Teprve když pokles potvrdí obě měření, hledejte technickou příčinu.',
  quote: 'Po redesignu nejdřív ověřte, zda je pokles skutečný, a teprve pak hledejte technickou příčinu. Panika bez dat nepomůže.',

  urlTitle: 'Změnily se po redesignu adresy bez přesměrování?',
  urlAnswer: 'Když se adresy změní a staré se nepřesměrují, Google je může ztratit a návštěvníci i odkazy skončí na prázdné stránce. To je častá příčina propadu po změně webu.',
  urlText: 'Řešením je přesměrování 301 ze staré adresy na novou. Podrobný postup připravuji v samostatném článku.',

  e404Title: 'Objevují se po změně webu chyby 404?',
  e404Answer: 'Chyby 404 znamenají, že adresa už neexistuje. Po změně webu se objeví u starých adres a u odkazů, které vedou na odstraněné stránky.',
  e404Text: 'Seznam najdete v reportu Stránky v Search Console. U adres s návštěvností nebo odkazy opravte odkazy nebo přesměrujte na odpovídající novou stránku.',

  indexTitle: 'Nezůstal na webu zákaz indexace?',
  indexAnswer: 'Při vývoji nového webu se často zapíná zákaz indexace a po spuštění se zapomene vypnout. Web pak může z výsledků mizet.',
  indexLead: 'Noindex a robots.txt vysvětluji v článku',
  indexLinkText: 'Proč se můj web nezobrazuje v Googlu',

  dupTitle: 'Nevznikly po redesignu duplicity?',
  dupAnswer: 'Po změně webu může být stejný obsah dostupný na staré i nové adrese, nebo s www i bez www. Google pak vybere jen jednu verzi.',
  dupLead: 'Co jsou duplicity a jak je vyřešit, vysvětluji v článku',
  dupLinkText: 'Duplicitní obsah',

  gscTitle: 'Jak v Search Console poznat, co kleslo?',
  gscAnswer: 'V Search Console otevřete Výkon, porovnejte období před spuštěním a po něm a podívejte se, které stránky ztratily nejvíc kliků. Stav indexace zkontrolujte v reportu Stránky.',
  gscSteps: [
    'Otevřete Výkon a porovnejte období před spuštěním nového webu a po něm.',
    'Seřaďte stránky podle změny kliků a najděte ty, které ztratily nejvíc.',
    'U těchto adres zkontrolujte stav v Kontrole adresy URL.',
    'Odešlete novou mapu webu v sekci Mapy webu.',
  ],
  gscLead: 'Obecný postup, jak zjistit, co je v indexu, vysvětluji v článku',
  gscLinkText: 'Jak zjistit, jestli je web indexovaný v Googlu',

  gscHowToName: 'Jak v Search Console poznat, co po redesignu kleslo',
  gscStepNames: ['Porovnejte období ve Výkonu', 'Najděte stránky se ztrátou kliků', 'Zkontrolujte adresy v Kontrole adresy URL', 'Odešlete novou mapu webu'],
  beforeHowToName: 'Co zkontrolovat před redesignem',
  beforeStepNames: ['Uložte staré adresy', 'Připravte přesměrování 301', 'Zkontrolujte noindex a robots.txt', 'Přeneste měřicí kód', 'Odešlete mapu webu a projděte report Stránky'],

  notTitle: 'Co když příčina není technická?',
  notAnswer: 'Po redesignu se často změní obsah, rychlost načítání i mobilní verze, a pokles pak nemusí mít technickou příčinu. Bezplatný audit ji neukáže.',
  notText: 'Bezplatný audit kontroluje jen technické chyby: indexaci, duplicity a další technické problémy. Pokud je příčina v obsahu, rychlosti nebo mobilní verzi, nebo se web v Googlu drží, ale na slabých pozicích, pomůže spíš konzultace.',
  notLinkText: 'SEO konzultace',
  bridge: 'Pokud si nejste jistí, co v Search Console vidíte, bezplatný audit ukáže technické chyby: indexaci, duplicity a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  cta: 'Chci audit zdarma',

  beforeTitle: 'Co zkontrolovat před redesignem?',
  beforeAnswer: 'Před spuštěním nového webu uložte seznam starých adres, připravte přesměrování a zkontrolujte, že nový web neblokuje indexaci a má měřicí kód.',
  before: [
    'Uložte seznam všech starých adres.',
    'Připravte pro každou důležitou adresu odpovídající novou adresu a přesměrování 301.',
    'Zkontrolujte, že na novém webu není noindex ani zákaz v robots.txt.',
    'Přeneste měřicí kód a ověřte, že měří.',
    'Po spuštění odešlete novou mapu webu a projděte report Stránky.',
  ],

  faqTitle: 'Časté otázky po redesignu',
  faq: [
    { q: 'Jak dlouho trvá, než se návštěvnost po redesignu vrátí?', a: 'Záleží na příčině a velikosti webu, proto to nelze říct přesně. Po opravě technické chyby Google web projde znovu, ale ani čas, ani návrat původní návštěvnosti se zaručit nedají.' },
    { q: 'Je normální, že po změně webu klesnou pozice?', a: 'Mírné kolísání po větší změně webu může být normální, protože Google stránky znovu zpracovává. Výrazný a trvalý pokles ale stojí za kontrolu adres, přesměrování a indexace.' },
    { q: 'Pomůže vrátit starý web?', a: 'Nemusí. Pomůže jen tehdy, když je příčina v nových adresách nebo nastavení. Nejdřív zjistěte příčinu a teprve potom rozhodněte; oprava konkrétní chyby bývá šetrnější než další velká změna.' },
    { q: 'Musím po redesignu přesměrovat všechny staré adresy?', a: 'Přesměrujte hlavně adresy, které měly návštěvnost nebo odkazy a mají nový ekvivalent. Plošné přesměrování všeho na úvodní stránku obvykle nepomůže. Podrobný postup připravuji v samostatném článku.' },
  ],

  endTitle: 'Nevíte, kde je příčina poklesu?',
  endText: 'Když poznáte příznaky, ale nevíte, kde je příčina, podívám se na technické chyby webu.',
  nextLead: 'Další krok:',
  nextLinkText: 'Co je SEO audit a co obsahuje',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  figures: [
    { kind: 'drop' as const, aria: 'Ilustrace: graf návštěvnosti, která klesne po spuštění nového webu', caption: 'Ilustrace: pokles návštěvnosti po spuštění nového webu (ukázkový průběh, ne skutečná data).' },
    { kind: 'e404' as const, aria: 'Ilustrace: report Stránky v Search Console s chybami 404', caption: 'Ilustrace: report Stránky s chybami 404 (hodnoty jsou ukázkové).' },
  ],

  schema: {
    about: ['po redesignu klesla návštěvnost', 'propad návštěvnosti webu', 'ztráta pozic po redesignu', 'migrace webu SEO', 'přesměrování 301'],
  },
};

export const POST_REDESIGN_CS = walk(raw);
