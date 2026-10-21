// Czech content of the blog article /blog/audit-konzultace-nebo-start/ (brief of 21.10.2026), closing article of the audit funnel
// (level 3, "ready to choose"). No prices (the service pages are the source; the Maps terms are not decided), first results only as the
// site-wide "2–3 měsíce" with no guarantee. The limits of the free audit repeat the list of /audit-zdarma/ and of «Co je SEO audit».
// The brief's unconfirmed business rules ("Start before Full SEO", "format can change") are worded as possibilities ("ne nutně", "po dohodě").
// The article does not sell everything at once: any step can be the first. Maps links use the current address (/lokalni-seo-mapy/).
// The consultation format follows the consultation page (one hour, or an audit with a 12-month plan; online or in Prague). No SERP analysis,
// no author story invented. The picture is a drawn illustration ("ilustrace").
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_CHOOSE_PUBLISHED = '2026-10-21';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/audit-konzultace-nebo-start.webp', width: 1200, height: 630, alt: 'Ilustrace: čtyři stupně od bezplatného auditu přes konzultaci a SEO start po Full SEO' },

  lead: 'Vybírejte podle otázky, kterou máte. Chcete vědět, zda má web technické chyby? Bezplatný audit. Potřebujete odpovědi a plán? Konzultace. Chcete, aby se základ webu udělal? SEO start na 3 měsíce. Full SEO a Mapy přicházejí později, pro dlouhodobý růst a místní vyhledávání.',
  forWhom: 'Text je pro majitele webu, který neví, čím v SEO začít. Začít můžete z kteréhokoli kroku, nic z toho nemusíte brát celé. Najdete tu, kdy se který krok hodí, co bezplatný audit nezahrnuje a na co se zeptat, než si službu vyberete.',

  pickTitle: 'Jak si vybrat první krok v SEO?',
  pickAnswer: 'První krok vybírejte podle toho, na co potřebujete odpověď: technické chyby, plán, nebo hotový základ webu.',
  pick: {
    head: ['Moje situace', 'Doporučený krok', 'Proč'],
    rows: [
      ['Nevím, zda má web technické chyby nebo zda je v Googlu', 'bezplatný audit', 'ukáže technické chyby bez závazků'],
      ['Mám otázky a chci plán, ale práci zatím dělat nechci', 'konzultace', 'odpovědi a plán postupu'],
      ['Chci, aby se základ webu opravil a postavil', 'SEO start na 3 měsíce', 'tři měsíce práce na základu'],
      ['Chci dlouhodobý růst a nový obsah', 'Full SEO', 'strategie a práce po celý rok'],
      ['Zákazníci mě hledají v mapách', 'Mapy', 'místní vyhledávání Google Maps a Mapy.com'],
    ],
  },
  pickNote: 'Výsledky závisí na oboru, konkurenci a výchozím stavu webu a nelze je zaručit.',

  freeTitle: 'Kdy stačí bezplatný audit technických chyb?',
  freeAnswer: 'Bezplatný audit stačí, když chcete vědět, zda má web technické chyby: indexaci, duplicity a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  freeNotLead: 'Co bezplatný audit nezahrnuje:',
  freeNot: [
    'klíčová slova a témata',
    'konkurence',
    'mapy (Google Maps, Mapy.com)',
    'viditelnost v AI vyhledávání',
    'rychlost načítání a Core Web Vitals',
    'mobilní verze',
  ],
  freeLead: 'Co je SEO audit a čím se jeho typy liší, vysvětluji v článku',
  freeLinkText: 'Co je SEO audit',
  freeAuditLink: 'Chci audit zdarma',

  consTitle: 'Kdy je lepší konzultace?',
  consAnswer: 'Konzultace je pro ty, kdo potřebují odpovědi a plán. Prochází web, odpovídá na otázky a dá konkrétní postup; práci za vás neprovádím.',
  consText: 'Konzultace může být jedna hodina s odpověďmi, nebo audit webu s plánem na 12 měsíců. Proběhne online nebo v Praze, jednorázově nebo opakovaně.',
  consLinkText: 'SEO konzultace',

  startTitle: 'Kdy dává smysl SEO start na 3 měsíce?',
  startAnswer: 'SEO start je tři měsíce práce na základu webu: audit, opravy, klíčová slova a optimalizace hlavních stránek. Hodí se, když chcete, aby se základ udělal a měl další růst na čem stát.',
  startText: 'První výsledky obvykle přicházejí za 2–3 měsíce, ale zaručit je nelze. Záleží na oboru, konkurenci a stavu webu.',
  startLinkText: 'SEO start na 3 měsíce',

  laterTitle: 'Kdy přijde na řadu Full SEO a Mapy?',
  laterAnswer: 'Full SEO je rok systematické práce pro dlouhodobý růst, Mapy řeší místní vyhledávání v Google Maps a na Mapy.com. Hodí se, když základ webu už stojí.',
  later: [
    'Full SEO: strategie, čtvrtletní priority a nový obsah každý měsíc; GEO/AEO je součástí každé služby.',
    'Mapy: Google Maps a Mapy.com, výsledky se měří hovory, trasami a návštěvami webu.',
  ],
  laterGeoLead: 'Jak SEO a GEO/AEO souvisí, vysvětluji na stránce',
  laterGeoLink: 'Jak SEO a GEO/AEO funguje',
  fullLinkText: 'Full SEO',
  mapsLinkText: 'Mapy',

  mustTitle: 'Musím začít auditem?',
  mustAnswer: 'Ne. Můžete začít konzultací nebo rovnou SEO startem. Bezplatný audit je jen nejlehčí vstup, ne povinný krok.',
  mustText: 'Pokud už víte, že potřebujete plán nebo hotový základ, audit přeskočte. Vrátit se k němu můžete kdykoli později.',
  quote: 'Do SEO se dá vstoupit z několika stran. Audit je nejlehčí vstup, ale není povinný: začněte tím, na co potřebujete odpověď.',

  flowTitle: 'Jak na sebe kroky navazují?',
  flowAnswer: 'Kroky na sebe navazují od nejlehčího po nejhlubší: audit, konzultace, SEO start, Full SEO. Nemusíte jít celou cestou ani v tomto pořadí.',
  flowFigure: { kind: 'ladder' as const, aria: 'Ilustrace: schéma kroků bezplatný audit, konzultace, SEO start a Full SEO, doplněné o Mapy podle potřeby', caption: 'Ilustrace: každý krok můžete přeskočit.' },

  askTitle: 'Na co se zeptat, než si SEO službu vyberete?',
  askAnswer: 'Zeptejte se, co služba zahrnuje a co ne, jak se měří výsledek a jak často dostanete report. Dobrý partner nic nezaručuje a řekne, co nedělá.',
  ask: [
    'Co přesně služba zahrnuje?',
    'Co nezahrnuje?',
    'Jak se měří výsledek?',
    'Jak často dostanu report?',
    'Slibuje někdo konkrétní pozice nebo termín?',
  ],
  askFlags: 'Červené vlajky: garance prvních míst, nejasný rozsah, žádný report.',

  faqTitle: 'Časté otázky o prvním kroku v SEO',
  faq: [
    { q: 'Musím začít bezplatným auditem?', a: 'Ne. Můžete začít konzultací nebo rovnou SEO startem. Bezplatný audit je jen nejlehčí vstup.' },
    { q: 'Stačí jedna konzultace?', a: 'Může stačit, pokud potřebujete odpovědi a plán a práci provedete sami nebo s vývojářem. Pokud chcete, aby se práce provedla, zvažte SEO start.' },
    { q: 'Je SEO start nutný před Full SEO?', a: 'Ne nutně. Pokud je základ webu v pořádku, může mít smysl začít rovnou Full SEO; poradím na konzultaci nebo po auditu.' },
    { q: 'Za jak dlouho se projeví první výsledky?', a: 'Obvykle za 2–3 měsíce, ale záleží na oboru, konkurenci a stavu webu a zaručit je nelze.' },
    { q: 'Můžu změnit formát během spolupráce?', a: 'Ano, formát lze po dohodě změnit, například po konzultaci přejít na SEO start.' },
  ],

  endTitle: 'Nevíte, čím začít?',
  endText: 'Když si nejste jistí, začněte bezplatným auditem technických chyb. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  cta: 'Chci audit zdarma',
  alsoLead: 'Další možnosti:',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  schema: {
    about: ['SEO audit nebo konzultace', 'jak začít s SEO', 'první krok v SEO', 'co si vybrat SEO'],
  },
};

export const POST_CHOOSE_CS = walk(raw);
