// Czech content of the blog article /blog/jak-ziskat-b2b-klienty-pro-prekladatelskou-agenturu/ (brief C of 22.10.2026), level 1–2 of the audit funnel
// (B2B), framed by the niche, with a closing block towards the Prague landing. The table of company types is explicitly "orientační, vychází z mé
// úvahy, ne z průzkumu" (no invented statistics); the groups are to be confirmed against the author's real clients. Direct e-mail approach: only
// "podle mých informací", "ověřte u právníka", not legal advice; no cold-mail instructions. The author's observations block ("Co vidím u agentur") is
// NOT written (none supplied); the case is not quoted with numbers. The hypothesis "poptávky od firem přicházejí později" is left out (no observation).
// Links to the future articles D and F are added when they exist. No HowTo, no prices. The quote is a draft for the author's approval.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_B2B_PUBLISHED = '2026-10-22';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/jak-ziskat-b2b-klienty-pro-prekladatelskou-agenturu.webp', width: 1200, height: 630, alt: 'Ilustrace: stránka pro firmy s obory, jazykovými páry, termíny a kontaktem' },

  lead: 'Zakázky od firem získá překladatelská agentura, pokud má na webu samostatnou stránku pro firmy, uvádí konkrétní obory a jazykové páry, jasně popisuje způsob spolupráce a dokládá práci reálnými referencemi. Ke všemu musí vést snadný kontakt na konkrétního člověka. Bez nich firmy často odejdou ke konkurenci.',
  forWhom: 'Text je pro majitele překladatelské agentury, který chce získat B2B klienty a neví, co má firmám web nabídnout. Najdete tu, čím se firma liší od soukromého klienta, co má stránka pro firmy ukázat, jak firmy hledají dodavatele a jak je oslovit přímo.',

  tocTitle: 'Co v textu najdete',
  toc: [
    { id: 'rozdil', text: 'Čím se firma liší od soukromého klienta?' },
    { id: 'stranka', text: 'Co má ukázat stránka pro firmy?' },
    { id: 'firmy', text: 'Co hledají různé typy firem?' },
    { id: 'hledani', text: 'Jak firmy hledají překladatelskou agenturu?' },
    { id: 'osloveni', text: 'Jak oslovit firmy přímo?' },
  ],

  diffTitle: 'Čím se firma liší od soukromého klienta?',
  diffAnswer: 'Firma obvykle zadává překlady opakovaně a rozhoduje o nich více lidí, takže řeší termíny, formáty souborů, smlouvu a stálou kontaktní osobu. Soukromý klient řeší většinou jednorázovou zakázku a cenu. Proto se stránka pro firmy píše jinak než nabídka pro jednotlivce.',
  diffLead: 'Pokud vám nepřicházejí žádné poptávky, začněte pořadím kontroly v článku',
  diffLinkText: 'Proč překladatelská agentura nemá poptávky z webu?',

  pageTitle: 'Co má ukázat stránka pro firmy?',
  pageAnswer: 'Stránka pro firmy má ukázat obory a jazykové páry, které agentura zvládá, formáty a termíny, způsob zadání poptávky a spolupráce, kontakt na konkrétního člověka a doklady práce. Certifikace uvádějte jen tehdy, pokud je agentura skutečně má. Reference používejte pouze s povolením klienta.',
  page: [
    'Obory, které agentura zvládá.',
    'Jazykové páry.',
    'Formáty souborů, se kterými pracujete.',
    'Termíny a způsob jejich domluvy.',
    'Jak zadat poptávku.',
    'Jak probíhá spolupráce (smlouva, fakturace).',
    'Kontakt na konkrétního člověka.',
    'Příklady práce bez jmen klientů.',
  ],
  pageText: 'Jak pracovat se stránkami jazykových párů, popíšu v samostatném článku.',
  quote: 'Firma nevybírá jednou větou. Vybírá podle toho, jestli z webu pozná, že s ní může spolupracovat i příště.',

  typesTitle: 'Co hledají různé typy firem?',
  typesAnswer: 'Tabulka je orientační a vychází z mé úvahy, ne z průzkumu. Ukazuje, co obvykle různé typy firem u překladatelské agentury hledají a co by stránka měla ukázat. Upravte ji podle vlastních klientů a podle toho, kdo vám skutečně zadává práci.',
  types: {
    head: ['Typ firmy', 'Co obvykle hledá', 'Co má stránka ukázat'],
    rows: [
      ['Právní a účetní firmy', 'přesnost, mlčenlivost, ověřené překlady, termíny', 'obory, ověřené překlady, způsob zacházení s důvěrnými dokumenty'],
      ['Výrobní a technické firmy', 'technickou terminologii, opakované zakázky, rámcovou smlouvu', 'obory, práci s terminologií, způsob spolupráce a stálý kontakt'],
      ['Zdravotnictví a farmacie', 'odbornost, kontrolu kvality, dodržení formátů', 'obory, kontrolu kvality, formáty souborů'],
      ['IT a marketingové firmy', 'rychlost, lokalizaci, formáty souborů, někdy tendr', 'jazykové páry, formáty souborů, termíny'],
    ],
  },
  typesNote: 'Orientační přehled, nikoli data z průzkumu.',

  searchTitle: 'Jak firmy hledají překladatelskou agenturu?',
  searchAnswer: 'Firmy hledají překladatelskou agenturu ve vyhledávání podle jazykového páru, oboru a města, ptají se na doporučení nebo oslovují dodavatele, které už znají. Který způsob převládá, záleží na oboru. Proto se vyplatí být vidět ve vyhledávání a zároveň mít kde navázat osobní kontakt.',
  searchLead: 'Porovnání kanálů, ze kterých agentury získávají klienty, najdete v článku',
  searchLinkText: 'Jak získat klienty pro překladatelskou agenturu',
  searchText: 'Web překladatelské agentury pro firmy by měl na dotazy podle oboru a jazykového páru odpovídat konkrétně. Profily na mapách pomáhají při hledání s městem.',

  directTitle: 'Jak oslovit firmy přímo?',
  directAnswer: 'Firmy můžete oslovit přímo, například telefonicky, na LinkedInu nebo na obchodních akcích. U e-mailu platí pravidla o obchodních sděleních, která podle mých informací vyžadují předchozí souhlas příjemce. Před rozesláním si pravidla ověřte u právníka, tento článek není právní poradenství. Nejdřív zvažte, zda je přímé oslovení pro váš obor vhodné.',

  auditTitle: 'Co zahrnuje bezplatný audit?',
  auditAnswer: 'Bezplatný audit zkontroluje technické chyby webu: indexaci, duplicitní obsah a další technické problémy. U vícejazyčných webů se dívám zvlášť na indexaci jazykových verzí a duplicity mezi nimi. Výsledek dostanete jako krátkou prezentaci do 24 hodin, bez hovoru a bez závazků.',
  cta: 'Chci audit zdarma',

  praguTitle: 'Pro agentury v Praze',
  praguText: 'Pokud je vaše agentura z Prahy, na samostatné stránce popisuji, jak pracuji s weby překladatelských agentur: stránky pro firmy, jazykové páry, indexaci jazykových verzí a lokální přítomnost.',
  praguLinkText: 'Jak pracuji s pražskými agenturami',

  faqTitle: 'Často kladené otázky',
  faq: [
    { q: 'Potřebuje překladatelská agentura samostatnou stránku pro firmy?', a: 'Záleží na tom, kdo vám překlady zadává. Pokud pracujete pro firmy s pravidelnými zakázkami, samostatná stránka usnadní orientaci a ukáže obory, termíny a způsob spolupráce. Pokud děláte hlavně jednorázové zakázky pro jednotlivce, stačí jednodušší nabídka. Rozhodněte podle skutečných poptávek. Stránku lze rozšiřovat postupně.' },
    { q: 'Čím se B2B klient liší od soukromého klienta?', a: 'Firma zadává překlady opakovaně, často rozhoduje více lidí a zajímají ji termíny, formáty souborů, smlouva a stálý kontakt. Soukromý klient obvykle řeší jednorázovou zakázku a cenu. Přesné rozdíly se liší podle oboru, proto je vždy ověřte u vlastních klientů. Zeptejte se klientů, jak vás našli.' },
    { q: 'Jak firmy vybírají překladatelskou agenturu?', a: 'Firmy obvykle hodnotí obory a jazykové páry, zkušenosti, termíny, způsob spolupráce a reference. Pořadí se liší podle typu firmy. Tabulka v tomto článku je orientační a vychází z mé úvahy, ne z průzkumu, proto ji ověřte u vlastních klientů. Ptejte se i těch, kdo nakonec nevybrali vás.' },
    { q: 'Je v pořádku oslovovat firmy e-mailem?', a: 'Pro e-mailová obchodní sdělení podle mých informací platí pravidla, která vyžadují předchozí souhlas příjemce, s výjimkou stávajících klientů. Zkontrolujte aktuální znění zákona a svůj případ u právníka. Tento článek není právní poradenství a pravidla se mohou změnit. Ověřte také, zda se pravidla vztahují na adresy firem.' },
    { q: 'Jak dlouho trvá, než přijdou první poptávky od firem?', a: 'U mých služeb se první výsledky obvykle objeví za 2–3 měsíce. Je to zkušenost s mými projekty, ne obecné pravidlo trhu, a nic neručí. Doba závisí na stavu webu, konkurenci v oboru a na tom, jak snadno firmy najdou kontakt.' },
  ],

  endTitle: 'Nevíte, co firmám na webu chybí?',
  endText: 'Když si nejste jistí, jestli web překladatelské agentury nemá technické chyby, podívám se na ně.',
  caseLead: 'Jak vypadala práce na webu překladatelské agentury v praxi, popisuje',
  caseLinkText: 'případová studie',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  schema: {
    about: ['jak získat B2B klienty překladatelská agentura', 'B2B klienti překlady', 'jak oslovit firmy překladatelská agentura', 'stránka pro firmy překlady'],
  },
};

export const POST_B2B_CS = walk(raw);
