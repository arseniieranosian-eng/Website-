// Czech content of the blog article /blog/novy-web-a-google-ho-nevidi/ (brief of 21.10.2026), level 1 of the free-audit funnel (symptom).
// Waiting time only as "dny až týdny" (a guide, no concrete days, no guarantee). The free audit does not speed up Google; it only shows
// technical errors that may block indexing. The Search Console limit on index requests is not described (to be checked on a live account),
// the text only advises not to send requests repeatedly; the 5th step of "Postup v kostce" (index request) is visible but not in HowTo.
// Seznam: one general sentence, no steps. Names of Search Console items are working names. No SERP analysis, no author story invented.
// The pictures are drawn illustrations ("ilustrace"). HowTo = the first four visible steps of "Postup v kostce".
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_NEWSITE_PUBLISHED = '2026-10-21';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/novy-web-a-google-ho-nevidi.webp', width: 1200, height: 630, alt: 'Ilustrace: nově spuštěný web, který Google zatím nenašel' },

  lead: 'Nový web Google obvykle objeví za dny až týdny, přesně to slíbit nelze. Hned po spuštění ověřte web v Google Search Console, odešlete mapu webu a zkontrolujte, že web není zavřený před vyhledávači. Pokud se web neobjeví ani po týdnech, hledejte příčinu.',
  forWhom: 'Text je pro majitele, který právě spustil nový web a Google o něm zatím mlčí. Najdete v něm, jestli je čekání normální, co udělat hned po spuštění a kdy začít hledat příčinu. Většinu kroků zvládnete sami.',

  normalTitle: 'Je normální, že nový web Google zatím nevidí?',
  normalAnswer: 'Ano, často ano. Google musí nový web najít, přečíst a zpracovat, a to nějakou dobu trvá.',
  normalText: 'Čekání samo o sobě není chyba, chybou je zapomenutý zákaz indexace nebo web, na který nic neodkazuje.',

  howLongTitle: 'Jak dlouho trvá, než se nový web objeví v Googlu?',
  howLongAnswer: 'Obvykle dny až týdny. Přesný termín slíbit nelze, protože záleží na webu, jeho odkazech a na tom, jak snadno ho Google najde.',
  howLongLead: 'Co zkusit, než se web objeví, najdete v části',
  howLongLinkText: 'Co udělat hned po spuštění webu?',

  checkTitle: 'Jak zkontrolovat, zda Google web zná?',
  checkAnswer: 'Zadejte do Googlu site:vasedomena.cz a podívejte se do Google Search Console. Číslo u site: je přibližné, přesný stav ukáže Search Console.',
  checkLead: 'Podrobný postup vysvětluji v článku',
  checkLinkText: 'Jak zjistit, jestli je web indexovaný v Googlu',
  checkText: 'Pokud nevidíte nic, nemusí jít o chybu: u úplně nového webu je to běžné.',

  startTitle: 'Co udělat hned po spuštění webu?',
  startAnswer: 'Ověřte web v Google Search Console, odešlete mapu webu, zkontrolujte, že web není zavřený před vyhledávači, a propojte stránky vnitřními odkazy.',
  howToName: 'Co udělat hned po spuštění webu',
  stepNames: ['Ověřte web v Google Search Console', 'Odešlete mapu webu', 'Zkontrolujte zákaz indexace', 'Propojte stránky'],
  steps: [
    'Ověřte web v Google Search Console.',
    'Odešlete mapu webu (sitemap.xml).',
    'Zkontrolujte, že web není zavřený před vyhledávači (noindex, robots.txt).',
    'Propojte stránky vnitřními odkazy, aby Google našel všechny.',
    'U nejdůležitějších stránek zvažte žádost o indexaci.',
  ],
  startText: 'Většinu kroků zvládnete sami. Mapa webu pomáhá Googlu stránky najít, ale indexaci nezaručuje.',

  fasterTitle: 'Co udělat, aby Google web našel rychleji?',
  fasterAnswer: 'Pomůže odkaz z jiného webu, profil firmy a sociální sítě, protože podle odkazů Google nové weby objevuje. Nic z toho nezaručuje rychlý výsledek.',
  faster: [
    'Odkaz z jiného webu.',
    'Profil firmy a sociální sítě s odkazem na web.',
    'Žádost o indexaci u hlavních stránek.',
  ],
  fasterText: 'Žádost nemá smysl posílat opakovaně.',
  quote: 'Čekání je normální. Ale když se web neobjeví ani po týdnech, nečekejte dál a hledejte příčinu.',

  weeksTitle: 'Co když se web neobjeví ani po týdnech?',
  weeksAnswer: 'Pokud se web neobjeví ani po týdnech, hledejte příčinu: zákaz indexace, robots.txt, chybějící odkazy, duplicity nebo prázdné stránky.',
  weeks: {
    head: ['Příčina', 'Jak poznat', 'Co dělat'],
    rows: [
      ['Zákaz indexace (noindex)', 'zdroj stránky, Kontrola adresy URL', 'odstranit zákaz'],
      ['robots.txt blokuje web', 'otevřít vasedomena.cz/robots.txt', 'upravit zákaz'],
      ['Na web nic neodkazuje', 'žádné vnitřní ani vnější odkazy', 'doplnit vnitřní odkazy, získat odkaz'],
      ['Duplicity', 'dvě verze webu (www a bez www)', 'sjednotit adresy'],
      ['Prázdné nebo slabé stránky', 'stránky bez obsahu', 'doplnit obsah'],
    ],
  },
  weeksLead1: 'Duplicitám se věnuje článek',
  weeksLink1: 'Duplicitní obsah',
  weeksLead2: 'Další příčiny najdete v článku',
  weeksLink2: 'Proč se můj web nezobrazuje v Googlu',
  bridge: 'Pokud se web neobjeví ani po týdnech a nevíte proč, bezplatný audit ukáže technické chyby: indexaci, duplicity a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  border: 'Audit nezrychlí práci Googlu, ukáže jen technické chyby, které mohou bránit zařazení.',
  cta: 'Chci audit zdarma',

  avoidTitle: 'Čemu se při čekání vyhnout?',
  avoidAnswer: 'Nekupujte odkazy, neposílejte žádost o indexaci opakovaně a neměňte adresy stránek, dokud web není v Googlu.',
  avoid: [
    'Nekupujte odkazy.',
    'Neposílejte žádost o indexaci opakovaně.',
    'Neměňte adresy stránek. Pokud je to nutné, nastavte přesměrování 301.',
  ],
  avoidLead: 'Jak na to, vysvětluji v článku',
  avoidLinkText: 'Přesměrování 301 a chyby 404',

  seznamTitle: 'Jak je to se Seznamem?',
  seznamAnswer: 'Seznam hledá weby samostatně od Googlu, takže web může být v jednom vyhledávači a v druhém zatím ne. Nástroje pro správce webů nabízí i Seznam.',

  faqTitle: 'Časté otázky o novém webu v Googlu',
  faq: [
    { q: 'Musím web do Googlu přihlásit?', a: 'Nemusíte, Google web najde sám. Ověření v Google Search Console a odeslání mapy webu ale hledání usnadní.' },
    { q: 'Za jak dlouho se nový web objeví?', a: 'Obvykle za dny až týdny, přesný termín slíbit nelze. Záleží na webu a na tom, jak snadno ho Google najde.' },
    { q: 'Pomůže žádost o indexaci?', a: 'U důležitých stránek může pomoci, ale nic nezaručuje a nemá smysl ji posílat opakovaně.' },
    { q: 'Proč Google našel jen část stránek?', a: 'Google nemusí zařadit všechny stránky: některé může blokovat noindex, být duplicitní nebo slabé. Stav ukazuje report Stránky v Search Console.' },
    { q: 'Pomůže mapa webu?', a: 'Mapa webu pomáhá Googlu stránky najít, ale indexaci nezaručuje.' },
  ],

  endTitle: 'Nevíte, proč Google nový web nevidí?',
  endText: 'Když se nový web neobjeví ani po týdnech, podívám se na technické chyby webu.',
  nextLead: 'Další krok:',
  nextLinkText: 'Jak zjistit, jestli je web indexovaný v Googlu',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  figures: [
    { kind: 'gscadd' as const, aria: 'Ilustrace: přidání webu jako vlastnosti v Google Search Console, volba Doména nebo Předpona adresy URL', caption: 'Ilustrace: přidání webu do Search Console (zjednodušené, ne skutečný snímek obrazovky).' },
    { kind: 'sitemaps' as const, aria: 'Ilustrace: odeslání mapy webu sitemap.xml v Google Search Console', caption: 'Ilustrace: odeslání mapy webu a její stav (hodnoty jsou ukázkové).' },
    { kind: 'pages' as const, aria: 'Ilustrace: report Stránky v Search Console s počtem indexovaných a neindexovaných stránek', caption: 'Ilustrace: report Stránky, indexované a neindexované stránky (hodnoty jsou ukázkové).' },
  ],

  schema: {
    about: ['nový web nevidí Google', 'jak dlouho trvá indexace nového webu', 'nový web v Googlu', 'indexace nového webu'],
  },
};

export const POST_NEWSITE_CS = walk(raw);
