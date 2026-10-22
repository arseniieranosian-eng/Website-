// Czech content of the blog article /blog/proc-prekladatelska-agentura-nema-poptavky/ (brief B of 22.10.2026), level 1 of the audit funnel
// (symptom), framed by the niche (translation agencies), not by a city. "Agentura" is used only about the clients; "já", never "my". Eight causes in
// the order of checking (seasonality first, NOT "a low season is not a fault" as a universal claim); the table of causes is the citable element.
// No guarantees: the checklist does not promise to find the cause in every case and the audit does not "fix" anything. The author's
// observations block ("Co vidím u webů překladatelských agentur") is NOT written (no real observations were supplied; nothing is invented).
// Links to the future articles C, D, E, F are added when they exist. HowTo is not used (the causes are a table, not a process). The quote is a draft.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_NOLEADS_PUBLISHED = '2026-10-22';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/proc-prekladatelska-agentura-nema-poptavky.webp', width: 1200, height: 630, alt: 'Ilustrace: web překladatelské agentury bez poptávek a lupa nad kontrolním seznamem' },

  lead: 'Překladatelská agentura nemá poptávky z webu nejčastěji proto, že Google nevidí všechny stránky nebo jazykové verze, že chybí stránky pro hledané dotazy (jazykové páry, služby, firmy) nebo že web míří na koncové zákazníky místo firem. Nejdřív ověřte sezónnost a indexaci, potom strukturu stránek.',
  forWhom: 'Text je pro majitele překladatelské agentury, kterému web přináší málo poptávek a neví, kde začít. Pomůže zjistit, proč web nepřináší poptávky, i bez technických znalostí. Níže je osm příčin v pořadí, v jakém je doporučuji kontrolovat.',

  tocTitle: 'Osm příčin',
  toc: [
    { id: 'sezonnost', text: 'Je to sezóna, nebo chyba na webu?' },
    { id: 'indexace', text: 'Vidí Google všechny stránky a jazykové verze webu?' },
    { id: 'duplicity', text: 'Opakuje se obsah mezi jazykovými verzemi?' },
    { id: 'stranky', text: 'Má web stránky pro to, co lidé hledají?' },
    { id: 'firmy', text: 'Mluví web i k firmám, nebo jen ke koncovým zákazníkům?' },
    { id: 'zmeny', text: 'Nezmizelo něco po redesignu nebo změně adres?' },
    { id: 'mapy', text: 'Souhlasí údaje na Google Maps a Mapy.com s webem?' },
    { id: 'kontakt', text: 'Najde návštěvník, jak se ozvat?' },
  ],
  tableTitle: 'Přehled příčin a pořadí kontroly',
  table: {
    head: ['Příčina', 'Jak poznám', 'Co zkontrolovat první'],
    rows: [
      ['1. Sezónnost', 'poptávky klesají každý rok ve stejném období', 'porovnat stejné období s loňským rokem'],
      ['2. Indexace', 'v Googlu chybí stránky nebo celé jazykové verze', 'zjistit, kolik stránek Google zná a zda jsou mezi nimi všechny verze'],
      ['3. Duplicity mezi verzemi', 'Google zobrazí jinou stránku, než chcete', 'zkontrolovat opakující se obsah a označení jazykových verzí'],
      ['4. Chybějící stránky', 'web nemá stránky pro jazykové páry, služby ani město', 'porovnat hledané dotazy s existujícími stránkami'],
      ['5. Chybějící stránka pro firmy', 'web mluví jen ke koncovým zákazníkům', 'ověřit, zda existuje stránka pro firmy a odpovídá na jejich otázky'],
      ['6. Chyby po změně webu', 'návštěvnost klesla po redesignu nebo změně adres', 'porovnat období před změnou a po ní, zkontrolovat přesměrování'],
      ['7. Údaje na mapách', 'název, adresa nebo kontakt se liší od webu', 'porovnat údaje na Google Maps, Mapy.com a na webu'],
      ['8. Kontakt a formulář', 'návštěvníci chodí, ale nikdo se neozve', 'vyzkoušet formulář a ověřit, že zprávy chodí'],
    ],
  },
  tableNote: 'Přehled je pomůcka, ne záruka: nenajde příčinu v každém případě.',
  orderFigure: { kind: 'order8' as const, aria: 'Ilustrace: schéma osmi kroků kontroly od sezónnosti po kontakt a formulář', caption: 'Ilustrace: pořadí, v jakém příčiny doporučuji kontrolovat.' },

  seasonTitle: 'Je to sezóna, nebo chyba na webu?',
  seasonAnswer: 'Než začnete hledat chybu, ověřte, zda nejde o sezónu. Porovnejte stejné období s loňským rokem, ne s předchozím měsícem. Pokud pokles odpovídá loňskému průběhu, nemusí jít o chybu. Pokud ne, pokračujte dalšími příčinami v tomto přehledu. Hodí se i srovnání několika let, pokud je máte k dispozici.',
  seasonText: 'Sezónu je potřeba vyloučit jako první, jinak se hledá chyba tam, kde není. Jak se projekt choval v letním útlumu, ukazuje případová studie',
  seasonLinkText: 'SEO v nízké sezóně',

  indexTitle: 'Vidí Google všechny stránky a jazykové verze webu?',
  indexAnswer: 'Google může ukazovat jen část webu. U vícejazyčných webů se často neindexují celé jazykové verze nebo stránky služeb. Zkontrolujte, kolik stránek je v indexu a zda jsou mezi nimi všechny jazykové verze. Podrobný postup je v článku o zjištění indexace.',
  indexLinkText: 'Jak zjistit, jestli je web indexovaný v Googlu',

  dupTitle: 'Opakuje se obsah mezi jazykovými verzemi?',
  dupAnswer: 'Stejné texty ve více jazykových verzích nebo na více adresách mohou Google zmást, takže zobrazí jinou stránku, než chcete. Zkontrolujte, zda se obsah mezi verzemi neopakuje a zda je každá verze správně označena. Postup najdete v článku o duplicitním obsahu.',
  dupLinkText: 'Duplicitní obsah',

  pagesTitle: 'Má web stránky pro to, co lidé hledají?',
  pagesAnswer: 'Firmy hledají překladatele podle jazykového páru, oboru nebo města. Pokud web takové stránky nemá, nemá se v hledání kde objevit. Samostatnou stránku ale nepotřebuje každý pár, jen ten, o kterém umíte napsat konkrétně a na který existuje poptávka. Obecná stránka „překlady“ tyto dotazy nepokryje.',
  pages: [
    'Jazykový pár: stránka s konkrétním popisem, pro koho a v jakých oborech překládáte.',
    'Služba a obor: právní, technický nebo lékařský překlad mají mít každý vlastní stránku.',
    'Město: pokud působíte lokálně, stránka by měla město opravdu jmenovat.',
  ],

  b2bTitle: 'Mluví web i k firmám, nebo jen ke koncovým zákazníkům?',
  b2bLead: 'Co má stránka pro firmy ukázat, vysvětluji v článku',
  b2bLinkText: 'Jak získat B2B klienty pro překladatelskou agenturu',
  b2bAnswer: 'Web, který mluví jen ke koncovým zákazníkům, neosloví firmy, které zadávají pravidelné zakázky. Zkontrolujte, zda existuje samostatná stránka pro firmy a zda odpovídá na jejich otázky: obory, termíny a způsob spolupráce. Bez ní poptávky z B2B zůstávají nízké. Firmy navíc obvykle porovnávají více dodavatelů.',

  changesTitle: 'Nezmizelo něco po redesignu nebo změně adres?',
  changesAnswer: 'Po redesignu, přechodu na nový systém nebo změně adres se často ztratí přesměrování nebo se objeví chyby 404. Návštěvnost pak klesne a poptávky s ní. Porovnejte období před změnou a po ní a zkontrolujte přesměrování. Postup je v článcích o redesignu a o přesměrování.',
  changesLinkText1: 'Po redesignu klesla návštěvnost',
  changesLinkText2: 'Přesměrování 301 a chyby 404',
  quote: 'Když agentura nemá poptávky, málokdy za tím stojí jedna chyba. Obvykle je to několik drobností, které se sčítají.',

  mapsTitle: 'Souhlasí údaje na Google Maps a Mapy.com s webem?',
  mapsAnswer: 'Pokud název, adresa a kontakt na Google Maps a Mapy.com neodpovídají webu, firmy vás hůř najdou při hledání s městem. Zkontrolujte, zda jsou údaje shodné. Podrobnosti budou v samostatném článku o lokální přítomnosti agentury. Stejné údaje by měly být i v zápatí a na kontaktní stránce webu.',

  contactTitle: 'Najde návštěvník, jak se ozvat?',
  contactAnswer: 'Návštěvník, který nenajde, jak se ozvat, odejde. Zkontrolujte, zda je kontakt a formulář vidět na každé důležité stránce, zda formulář funguje a zda vám zprávy z něj skutečně chodí. Odeslání si vyzkoušejte sami. Chybí-li potvrzení po odeslání, návštěvník nemusí vědět, že se zpráva odeslala.',

  auditTitle: 'Co zahrnuje bezplatný audit?',
  auditAnswer: 'Bezplatný audit zkontroluje technické chyby webu: indexaci, duplicitní obsah a další technické problémy. U vícejazyčných webů se dívám zvlášť na indexaci jazykových verzí a duplicity mezi nimi. Výsledek dostanete jako krátkou prezentaci do 24 hodin, bez hovoru a bez závazků.',
  cta: 'Chci audit zdarma',

  praguTitle: 'Pro překladatelské agentury v Praze',
  praguText: 'Pokud je vaše agentura z Prahy, mám pro vás samostatnou stránku o tom, co v praxi dělám: stránky jazykových párů, služeb pro firmy, indexaci jazykových verzí a lokální přítomnost. Najdete tam i rozbor veřejných webů v oboru.',
  praguLinkText: 'SEO pro překladatelské agentury v Praze',

  faqTitle: 'Často kladené otázky',
  faq: [
    { q: 'Jak dlouho čekat na první poptávky po úpravách webu?', a: 'První poptávky po úpravách se obvykle objeví za 2–3 měsíce, ale záleží na stavu webu a konkurenci v oboru. Garantovat se to nedá. Mění se i sezóna, proto sledujte srovnání se stejným obdobím loni. Do té doby sledujte, zda přibývá indexovaných stránek a zda se zlepšují zobrazení.' },
    { q: 'Proč mi klesla návštěvnost webu překladatelské agentury?', a: 'Pokles může způsobit sezóna nebo chyba. Porovnejte stejné období loni. Pokud se pokles shoduje s redesignem, přesunem webu nebo změnou adres, hledejte chybu v přesměrování a indexaci. Obě situace rozebírají články o redesignu a o novém webu. Začněte porovnáním s loňskem.', links: [{ page: 'postRedesign' as const, text: 'Po redesignu klesla návštěvnost' }, { page: 'postNewSite' as const, text: 'Nový web a Google ho nevidí' }] },
    { q: 'Je problém v webu, nebo v reklamě?', a: 'Zdroj problému určíte podle toho, odkud poptávky přicházejí. Pokud web nemá návštěvnost z vyhledávání, jde o web a SEO. Pokud návštěvníci chodí, ale neodesílají poptávky, jde o obsah a kontakt. Reklamu nespravuji, nechám to na specialistovi. Rozlišení ušetří čas i peníze.', links: [{ page: 'postAds' as const, text: 'SEO a reklama' }] },
    { q: 'Musím web překladatelské agentury předělat?', a: 'Ne vždy. Nejdřív zkontrolujte indexaci, duplicity, přesměrování a chybějící stránky, protože tyto věci se dají opravit i na stávajícím webu. Nový web má smysl, pokud kontrola ukáže strukturální problém, který se jinak opravit nedá. Změna webu bez kontroly může problém jen přenést na nový web.' },
    { q: 'Co zkontroluje bezplatný audit?', a: 'Bezplatný audit zkontroluje indexaci, duplicitní obsah a další technické problémy. Nezahrnuje klíčová slova, konkurenci, mapy, AI-viditelnost, rychlost ani mobilní verzi. Výsledek je krátká prezentace do 24 hodin, bez hovoru a bez závazků. Audit slouží k tomu, abyste věděli, kde jsou technické chyby, nikoli jako záruka výsledku.' },
  ],

  endTitle: 'Nevíte, kde je příčina?',
  endText: 'Když si nejste jistí, co na webu překladatelské agentury brzdí poptávky, podívám se na technické chyby webu.',
  clientsLead: 'Odkud mohou překladatelské agentury brát klienty, vysvětluji v článku',
  clientsLinkText: 'Jak získat klienty pro překladatelskou agenturu',
  caseLead: 'Jak vypadala práce na webu překladatelské agentury v praxi, popisuje',
  caseLinkText: 'případová studie',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  schema: {
    about: ['proč překladatelská agentura nemá poptávky', 'web překladatelské agentury nepřináší poptávky', 'málo poptávek z webu', 'jak zjistit proč web nepřináší poptávky'],
  },
};

export const POST_NOLEADS_CS = walk(raw);
