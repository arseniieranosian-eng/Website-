// Czech content of the blog article /blog/presmerovani-301-a-chyby-404/ (brief of 21.10.2026), level 2 of the free-audit funnel ("how to
// fix"). Principles and a check, not a replacement of the developer's work: the free audit does not set up redirects. No code (no verified
// example). 301 "helps pass signals", never "keeps rankings"; timing only "days to weeks" as a guide. The claim that a mass redirect to the
// home page may be judged a soft 404 is worded with "může" and has to be checked against Google's help; names of Search Console items
// (Stránky, Nenalezeno (404), Kontrola adresy URL, Výkon) are working names to check on a live account. No SERP analysis was done, no
// author story is invented. The pictures are drawn illustrations ("ilustrace"). HowTo = the four visible steps of "Postup v kostce".
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_REDIRECTS_PUBLISHED = '2026-10-21';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/presmerovani-301-a-chyby-404.webp', width: 1200, height: 630, alt: 'Ilustrace: stará adresa a šipka přesměrování 301 na novou adresu' },

  lead: 'Přesměrování 301 trvale posílá návštěvníky i Google ze staré adresy na novou, takže se neztratí návštěvnost ani signály. Chyba 404 znamená, že stránka neexistuje. Po změně adres připravte mapu přesměrování, nastavte ji a ověřte. Nastavení patří vývojáři nebo správci webu.',
  forWhom: 'Text je pro majitele webu, kterému se změnily adresy, například po redesignu nebo přechodu na nový systém. Najdete v něm, co přesměrování dělá, jak připravit mapu adres a jak ověřit, že funguje. Nastavení dělá vývojář nebo správce webu; tady jsou principy a kontrola.',

  stepsTitle: 'Postup v kostce',
  howToName: 'Co dělat po změně adres webu',
  stepNames: ['Uložte seznam starých adres', 'Připravte mapu přesměrování', 'Nechte nastavit přesměrování 301', 'Ověřte přesměrování'],
  steps: [
    'Uložte seznam všech starých adres.',
    'Připravte mapu přesměrování: každou starou adresu spárujte s nejbližší novou stránkou.',
    'Nechte nastavit přesměrování 301.',
    'Ověřte přesměrování v prohlížeči a v Search Console.',
  ],

  whatTitle: 'Co je přesměrování 301 a kdy ho použít?',
  whatAnswer: 'Přesměrování 301 je trvalé přesměrování ze staré adresy na novou. Použijte ho po změně adresy stránky, domény nebo přechodu na https a při sloučení stránek.',
  whatText: 'Přesměrování 301 pomáhá předat signály ze staré adresy na novou, ale pozice nezaručuje. Pokud stránku jen přesouváte, je 301 správná volba.',

  diffTitle: 'Jaký je rozdíl mezi přesměrováním 301 a 302?',
  diffAnswer: '301 je trvalé a 302 dočasné. Pro trvalou změnu adresy použijte 301, 302 jen tehdy, když se stránka brzy vrátí.',
  diff: {
    head: ['Typ', 'Význam', 'Kdy použít'],
    rows: [
      ['301', 'trvalé přesměrování', 'změna adresy, domény, https, sloučení stránek'],
      ['302', 'dočasné přesměrování', 'krátkodobá změna, například údržba nebo akce'],
    ],
  },
  diffText: 'Chybou bývá 302 místo 301 u trvalé změny.',

  e404Title: 'Co je chyba 404 a kdy je v pořádku?',
  e404Answer: 'Chyba 404 znamená, že stránka na adrese neexistuje. Ne každá 404 je chyba: pokud jste stránku smazali a nemáte náhradu, může být 404 v pořádku.',
  e404Text: 'Jinak je to u takzvané soft 404: stránka se tváří jako nalezená, ale nemá obsah, a Google ji může zpracovat jako 404. Vhodná je také vlastní stránka 404 s navigací, ze které se návštěvník dostane dál.',

  mapTitle: 'Jak připravit mapu přesměrování po změně adres?',
  mapAnswer: 'Mapa přesměrování je tabulka starých a nových adres. Každou starou adresu spárujte s nejbližší odpovídající novou stránkou a začněte těmi, které měly návštěvnost nebo odkazy.',
  mapSteps: [
    'Získejte seznam starých adres (ze starého sitemapu, ze Search Console, z exportu webu).',
    'Spárujte každou starou adresu s odpovídající novou stránkou.',
    'Přednost dejte adresám s návštěvností nebo odkazy.',
    'Pro adresy bez náhrady zvolte nejbližší téma, nebo ponechte 404.',
  ],
  mapText: 'Neposílejte vše na úvodní stránku, důvod najdete v části o nejčastějších chybách.',

  setTitle: 'Jak přesměrování nastavit?',
  setAnswer: 'Přesměrování se nastavuje v administraci webu, pomocí pluginu nebo v konfiguraci serveru. Způsob závisí na systému, proto ho nechte nastavit vývojáře nebo správce webu.',
  set: [
    'Pomocí pluginu, například u WordPressu.',
    'V administraci redakčního systému nebo e-shopu.',
    'V konfiguraci serveru, to řeší vývojář.',
  ],
  setText: 'Kód v článku není; postup se liší podle systému a hostingu.',

  checkTitle: 'Jak ověřit, že přesměrování funguje?',
  checkAnswer: 'Otevřete starou adresu v prohlížeči a podívejte se, kam vede. Pak ověřte v Search Console, že Google vidí novou adresu.',
  checkSteps: [
    'Otevřete starou adresu a ověřte, že vede na správnou novou stránku.',
    'Zkontrolujte, že vede přímo, bez řetězce přesměrování.',
    'V Search Console použijte Kontrolu adresy URL u nové stránky.',
    'Odešlete aktuální mapu webu.',
  ],
  checkLead: 'Jak zjistit, co Google zařadil, vysvětluji v článku',
  checkLinkText: 'Jak zjistit, jestli je web indexovaný v Googlu',

  errTitle: 'Jaké jsou nejčastější chyby u přesměrování?',
  errAnswer: 'Nejčastěji jde o přesměrování všeho na úvodní stránku, řetězce a smyčky přesměrování, 302 místo 301 a přesměrování na stránku se zákazem indexace.',
  err: {
    head: ['Chyba', 'Proč vadí', 'Co dělat'],
    rows: [
      ['Vše na úvodní stránku', 'Google ji může vyhodnotit jako soft 404', 'přesměrovat na nejbližší odpovídající stránku'],
      ['Řetězec přesměrování (A→B→C)', 'zpomaluje a mate Google', 'přesměrovat přímo A→C'],
      ['Smyčka přesměrování', 'stránka se nenačte', 'opravit pravidla'],
      ['302 místo 301 u trvalé změny', 'signály se nemusí předat', 'použít 301'],
      ['Přesměrování na stránku s noindex', 'stránka se nezařadí', 'odstranit noindex nebo změnit cíl'],
      ['Zapomenuté parametry nebo odkazy', 'staré odkazy končí na 404', 'doplnit pravidla'],
    ],
  },
  quote: 'Neposílejte všechno na úvodní stránku. Každá stará adresa by měla vést na nejbližší odpovídající novou stránku.',

  gscTitle: 'Co dělat s chybami 404 v Search Console?',
  gscAnswer: 'V reportu Stránky najdete adresy, které Google vidí jako nenalezené. Důležité adresy s návštěvností nebo odkazy přesměrujte, ostatní můžete nechat.',
  gsc: [
    'Otevřete report Stránky a najděte stav „Nenalezeno (404)“.',
    'Seřaďte adresy podle důležitosti.',
    'Důležité adresy opravte nebo přesměrujte.',
    'Ostatní adresy můžete nechat.',
    'Po opravě zkontrolujte, zda se stav změnil.',
  ],
  listTitle: 'Kontrolní seznam',
  list: [
    'Seznam starých adres je uložen.',
    'Mapa přesměrování je hotová.',
    'Přesměrování je ověřeno v prohlížeči.',
    '404 v Search Console jsou zkontrolovány.',
    'Mapa webu je odeslána.',
  ],

  bridgeTitle: 'Co když si nejste jistí, jestli jsou přesměrování v pořádku?',
  bridge: 'Pokud nevíte, jestli máte po změně adres správně nastavená přesměrování, bezplatný audit ukáže technické chyby: indexaci, duplicity a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  border: 'Audit přesměrování nenastavuje, jen ukáže technické chyby; nastavení dělá vývojář nebo správce webu.',
  cta: 'Chci audit zdarma',

  faqTitle: 'Časté otázky o přesměrování a chybách 404',
  faq: [
    { q: 'Jak dlouho nechat přesměrování zapnuté?', a: 'Dlouhodobě, ideálně trvale, pokud stará adresa měla návštěvnost nebo odkazy. Odstranit ho lze, až když na starou adresu nikdo neodkazuje ani nechodí.' },
    { q: 'Zachová 301 pozice?', a: '301 pomáhá předat signály ze staré adresy na novou, ale pozice nezaručuje. Výsledek závisí na webu a na dalších změnách; obvykle se projeví za dny až týdny.' },
    { q: 'Co je soft 404?', a: 'Stránka, která se tváří jako nalezená, ale ve skutečnosti nemá obsah nebo ukazuje chybu. Google ji může zpracovat jako 404.' },
    { q: 'Mám přesměrovat vše na úvodní stránku?', a: 'Ne. Každou starou adresu přesměrujte na nejbližší odpovídající novou stránku. Hromadné přesměrování na úvodní stránku může Google vyhodnotit jako soft 404.' },
  ],

  endTitle: 'Nevíte, jestli jsou přesměrování v pořádku?',
  endText: 'Když si nejste jistí, jestli jsou přesměrování v pořádku, podívám se na technické chyby webu.',
  nextLead: 'Další krok:',
  chooseLead: 'Nevíte, čím začít?',
  chooseLinkText: 'Audit zdarma, konzultace, nebo Start',
  nextLinkText: 'Po redesignu webu klesla návštěvnost: kde hledat chybu',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  figures: [
    { kind: 'map' as const, aria: 'Ilustrace: mapa přesměrování se starými adresami a jim odpovídajícími novými adresami', caption: 'Ilustrace: mapa přesměrování, každá stará adresa vede na nejbližší odpovídající novou (ukázkové adresy).' },
    { kind: 'chain' as const, aria: 'Ilustrace: řetězec přesměrování A, B, C a přímé přesměrování z A na C', caption: 'Ilustrace: řetězec přesměrování A→B→C a správné přímé přesměrování A→C.' },
    { kind: 'e404' as const, aria: 'Ilustrace: report Stránky v Search Console s chybami 404', caption: 'Ilustrace: report Stránky s chybami 404 (hodnoty jsou ukázkové).' },
  ],

  schema: {
    about: ['přesměrování 301', 'chyba 404', '301 vs 302', 'přesměrování po změně adres webu', 'soft 404'],
  },
};

export const POST_REDIRECTS_CS = walk(raw);
