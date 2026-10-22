// Czech content of the blog article /blog/stranka-pro-kazdy-jazykovy-par/ (brief D of 22.10.2026), level 2 of the funnel (diagnostics / how to do it),
// framed by the niche, with a closing block towards the Prague landing. The decision table is explicitly "orientační, vychází z mé úvahy, ne z průzkumu";
// no numeric thresholds of demand and no "right" number of pairs. The author's observations block ("Co vidím u agentur") is NOT written (none supplied);
// the case is only linked, no numbers. Names of the tools (Search Console, Sklik, Google Keyword Planner) and the wording about thin / low-value content
// are still to be checked against the current interfaces and Google's documentation before publishing. Links to the future article E (language versions,
// hreflang) are added when it exists. No HowTo, no prices. The quote is a draft for the author's approval.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_PAIRS_PUBLISHED = '2026-10-22';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/stranka-pro-kazdy-jazykovy-par.webp', width: 1200, height: 630, alt: 'Ilustrace: seznam jazykových párů, u většiny z nich odškrtnutá stránka, u jednoho pomlčka' },

  lead: 'Ne vždy. Samostatnou stránku pro jazykový pár má smysl dělat tam, kde na pár existuje poptávka a agentura o něm umí napsat konkrétně: obory, formáty, termíny a způsob zadání. Ostatní páry mohou zůstat v přehledu jazyků nebo na stránce pro skupinu příbuzných jazyků.',
  forWhom: 'Text je pro majitele překladatelské agentury, který zvažuje, které jazykové páry mají mít vlastní stránku. Najdete tu rozdíl mezi stránkou páru a jazykovou verzí webu, tabulku rozhodnutí, odhad poptávky a seznam toho, co má taková stránka obsahovat.',

  tocTitle: 'Co v textu najdete',
  toc: [
    { id: 'rozdil', text: 'Čím se stránka pro pár liší od jazykové verze webu?' },
    { id: 'smysl', text: 'Kdy má stránka pro pár smysl?' },
    { id: 'poptavka', text: 'Jak zjistit, jestli na pár existuje poptávka?' },
    { id: 'obsah', text: 'Co má obsahovat stránka pro jazykový pár?' },
    { id: 'sablona', text: 'Co hrozí, když stránky párů vznikají podle šablony?' },
    { id: 'ostatni', text: 'Co s páry, na které stránku nemám?' },
  ],

  diffTitle: 'Čím se stránka pro pár liší od jazykové verze webu?',
  diffAnswer: 'Stránka pro jazykový pár je stránka služby, například překlady z češtiny do angličtiny. Jazyková verze webu je celý web přeložený do jiného jazyka. Jsou to dvě různá rozhodnutí. Tento článek řeší stránky párů, jazykové verze webu bude řešit samostatný článek o indexaci a hreflang.',
  diffText: 'Samostatná stránka pro jazykový pár tedy nemá nic společného s tím, kolik jazyků má váš web. Může existovat na webu v jednom jazyce, a naopak vícejazyčný web ještě nemusí mít žádnou stránku pro konkrétní pár.',

  smysl: {
    title: 'Kdy má stránka pro pár smysl?',
    answer: 'Stránka pro pár má smysl, když na ni existuje poptávka, když o páru umíte napsat konkrétně a když ji dokážete udržovat aktuální. Tabulka níže shrnuje typické situace a rozhodnutí. Je orientační a vychází z mé úvahy, ne z průzkumu. Upravte ji podle vlastní situace.',
    head: ['Situace', 'Stránka pro pár?', 'Proč'],
    rows: [
      ['Pár přináší pravidelné poptávky', 'ano', 'existuje poptávka a zkušenost'],
      ['Pár, na který máte specializaci (obor)', 'ano', 'lze napsat konkrétně'],
      ['V dotazech je zájem, ale nemáte zkušenosti', 'zatím ne', 'nelze napsat konkrétně'],
      ['Vzácný pár s ojedinělými poptávkami', 'spíše ne (přehled nebo karta jazyka)', 'údržba nestojí za to'],
      ['Skupina příbuzných jazyků', 'jedna stránka pro skupinu', 'menší riziko podobných textů'],
      ['Nemáte kapacitu udržovat obsah', 'spíše ne', 'zastaralé stránky škodí důvěře'],
    ],
    note: 'Orientační přehled, nikoli data z průzkumu.',
  },
  quote: 'Stránka pro pár má smysl tehdy, když o něm umíte říct něco, co nejde napsat o jiném páru.',

  demandTitle: 'Jak zjistit, jestli na pár existuje poptávka?',
  demandAnswer: 'Poptávku na pár poznáte z několika zdrojů: z vlastních poptávek, z dotazů v Search Console, z nástrojů pro klíčová slova (Sklik, Google Keyword Planner) a z výsledků hledání. Žádný z nich nedává přesné číslo. Proto neuvádím pevný práh, rozhodujte podle kombinace zdrojů a podle svého oboru.',
  demandText: 'Nejspolehlivější je obvykle to, co už dnes máte: které páry vám přinášejí zakázky. O tom, odkud další klienti mohou přicházet, píšu v článku',
  demandLinkText: 'Jak získat klienty pro překladatelskou agenturu',

  contentTitle: 'Co má obsahovat stránka pro jazykový pár?',
  contentAnswer: 'Stránka pro jazykový pár má říct, co agentura u této dvojice jazyků dělá: pro které obory, v jakých formátech a termínech, jak zadat poptávku a kdo se o zakázku stará. Má obsahovat konkrétní příklady bez jmen klientů a odpovědi na časté otázky. Text se nesmí kopírovat mezi páry.',
  content: [
    'Obory, ve kterých pár překládáte.',
    'Formáty souborů, se kterými pracujete.',
    'Termíny a způsob jejich domluvy.',
    'Jak zadat poptávku.',
    'Kontakt na konkrétního člověka.',
    'Příklady práce bez jmen klientů.',
    'Časté otázky k danému páru.',
    'Vlastní text, ne šablona.',
  ],
  contentText: 'Stránka pro pár neřeší všechno. Firmám, které zadávají pravidelné zakázky, má sloužit samostatná stránka, kterou popisuji v článku',
  contentLinkText: 'Jak získat B2B klienty pro překladatelskou agenturu',

  templateTitle: 'Co hrozí, když stránky párů vznikají podle šablony?',
  templateAnswer: 'Když se stránky párů liší jen názvem jazyka, jsou si texty velmi podobné a Google je může vyhodnotit jako málo užitečné. Zobrazit se pak může jiná stránka, než chcete, nebo žádná. Jde o mechanismus, ne o jistotu sankce. Podrobnosti o duplicitním obsahu najdete v článku o duplicitách.',
  templateLead: 'Jak duplicity vznikají a jak je poznat, vysvětluji v článku',
  templateLinkText: 'Duplicitní obsah: co to je, jak ho poznat a jak ho vyřešit',

  otherTitle: 'Co s páry, na které stránku nemám?',
  otherAnswer: 'Páry, na které samostatnou stránku nemáte, můžete uvést v přehledu jazyků, v kartě konkrétního jazyka nebo na stránce pro skupinu příbuzných jazyků. Rozhodnutí se dá změnit, až se objeví poptávka. Důležité je, aby i tyto páry byly na webu dohledatelné a vedla k nim kontaktní cesta.',
  otherLead: 'Pokud web nepřivádí poptávky vůbec, začněte pořadím kontroly v článku',
  otherLinkText: 'Proč překladatelská agentura nemá poptávky z webu?',

  auditTitle: 'Co zahrnuje bezplatný audit?',
  auditAnswer: 'Bezplatný audit zkontroluje technické chyby webu: indexaci, duplicitní obsah a další technické problémy. U vícejazyčných webů se dívám zvlášť na indexaci jazykových verzí a duplicity mezi nimi. Výsledek dostanete jako krátkou prezentaci do 24 hodin, bez hovoru a bez závazků.',
  cta: 'Chci audit zdarma',

  praguTitle: 'Pro agentury v Praze',
  praguText: 'Pokud je vaše agentura z Prahy, na samostatné stránce popisuji, jak pracuji s weby překladatelských agentur: stránky jazykových párů a služeb, indexaci jazykových verzí a lokální přítomnost.',
  praguLinkText: 'Co dělám pro pražské překladatelské agentury',

  faqTitle: 'Často kladené otázky',
  faq: [
    { q: 'Potřebuji samostatnou stránku pro každý jazyk?', a: 'Ne vždy. Rozlišujte jazyk a pár: stránka pro jeden jazyk může obsáhnout více párů, stránka pro pár cílí na konkrétní směr. Rozhodněte podle poptávky a podle toho, co o páru umíte napsat. Jazykovou verzi webu, tedy celý web v jiném jazyce, řeší jiné rozhodnutí.' },
    { q: 'Kolik stránek jazykových párů mám vytvořit?', a: 'Pevné číslo neuvádím. Rozhodují kritéria: poptávka na pár, zkušenosti agentury, reálné poptávky a schopnost udržovat obsah aktuální. Začněte páry, které už dnes přinášejí zakázky nebo na které máte co konkrétního říct, a další přidávejte podle výsledků. Každý pár vyhodnoťte zvlášť. Obsah musí být vždy konkrétní.' },
    { q: 'Jak pojmenovat stránku jazykového páru a jaký má mít URL?', a: 'Název i adresa mají jasně říct, o jaké dvojici jde, například překlady z češtiny do angličtiny. Adresa má být krátká, čitelná a stabilní. Je to praktické doporučení, nikoli pravidlo, které by Google vyžadoval. Ověřte zvolený styl na několika stránkách, než ho použijete všude.' },
    { q: 'Může Google stránky jazykových párů považovat za duplicitní?', a: 'Může, pokud se liší jen názvem jazyka a obsah je téměř stejný. Google pak může zobrazit jinou stránku, než chcete. Jde o mechanismus, ne o jistotu sankce. Řešením je, aby každá stránka měla vlastní, konkrétní text. Podrobnosti najdete v článku o duplicitním obsahu.', link: 'postDuplicates' as const, linkText: 'Duplicitní obsah: co to je, jak ho poznat a jak ho vyřešit' },
    { q: 'Co s páry, na které stránku nemám?', a: 'Můžete je uvést v přehledu jazyků, v kartě jazyka nebo na stránce pro skupinu příbuzných jazyků. Důležité je, aby se k nim návštěvník dostal a mohl vyžádat nabídku. Až se objeví poptávka, můžete pro pár udělat samostatnou stránku. Rozhodnutí lze kdykoli změnit.' },
  ],

  endTitle: 'Nevíte, které páry stránku potřebují?',
  endText: 'Když si nejste jistí, jestli web překladatelské agentury nemá technické chyby, podívám se na ně.',
  caseLead: 'Jak vypadala práce na webu překladatelské agentury v praxi, popisuje',
  caseLinkText: 'případová studie',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  schema: {
    about: ['stránka pro každý jazykový pár', 'stránky jazykových párů', 'samostatná stránka pro jazykový pár', 'struktura webu překladatelské agentury'],
  },
};

export const POST_PAIRS_CS = walk(raw);
