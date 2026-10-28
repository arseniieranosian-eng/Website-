// Czech content of the blog article /blog/seo-plan-na-12-mesicu/ (brief K3 of 28.10.2026), the "what does a 12-month SEO plan contain" article of the funnel to /konzultace/. Informational; the plan is NOT a guarantee
// and that is said directly. The disclosure of the author's interest stands in the first two sentences. No paid product is described (no structure of the author's own plan), no self-promotion, no cases, figures, prices or
// reviews. Defaults taken: no quote, no observations, no audit CTA; links: /blog/co-je-seo-audit/ (H2-3), /blog/jak-vybrat-seo-specialistu/ (F2, K2 is published), /blog/audit-konzultace-nebo-start/ (related) and
// /konzultace/ (closing block). Title: "SEO plán na 12 měsíců: co obsahuje | Eranosian" (46 characters; the brief's 60 would break the site-wide limit of 55); description 150 as in the brief. The three stage blocks of H2-4 are one
// sentence each (the brief asks for them without giving their text; no concrete work, no terms). The Google statement (wait a few weeks to assess; some changes take hours, others months) follows the brief; it was NOT
// compared with the SEO Starter Guide from here (developers.google.com is not reachable from the build environment), so that comparison is still open before the live release. Length: about 1 050 words, below the
// 1 200–1 800 target; nothing outside the brief was added. No HowTo, no Service, no ratings, no Quotation.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_SEO_PLAN_PUBLISHED = '2026-10-28';
// Review every 90 days: next 2027-01-26.

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/seo-plan-na-12-mesicu.webp', width: 1200, height: 630, alt: 'Ilustrace: SEO plán s cílem, prioritami, etapami a měřením, bez záruky výsledků' },

  lead: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté. Plán popisuji obecně, ne podle konkrétní nabídky. SEO plán je dokument, který popisuje, co a v jakém pořadí se na webu bude dělat a jak se bude měřit pokrok.',

  whatTitle: 'Co je SEO plán a k čemu slouží?',
  whatAnswer: 'SEO plán popisuje, co a v jakém pořadí se na webu bude dělat, kdo za to odpovídá a jak se pozná pokrok. Slouží k tomu, aby práce nebyla nahodilá. Plán není záruka výsledků: nezaručuje pozice ani poptávky, jen přehledně uspořádává kroky a odpovědnosti.',

  partsTitle: 'Z čeho se dobrý plán skládá?',
  partsAnswer: 'Dobrý plán obsahuje cíl, výchozí stav webu, priority, etapy práce, způsob měření a odpovědnosti na obou stranách. Každá část odpovídá na jinou otázku: kam míříte, kde stojíte, co je důležité, v jakém pořadí, jak poznáte pokrok a kdo co dělá. Tabulka níže části shrnuje.',
  partsTable: {
    head: ['Část plánu', 'Co obsahuje'],
    rows: [
      ['Cíl', 'co má plán dosáhnout, vyjádřeno jako poptávky, ne pozice'],
      ['Výchozí stav', 'co o webu víme před začátkem'],
      ['Priority', 'co se dělá dřív a proč'],
      ['Etapy', 'jak je práce rozdělená v čase, bez pevných termínů'],
      ['Měření', 'co se sleduje a odkud jsou data'],
      ['Odpovědnosti', 'kdo co dělá na obou stranách'],
    ],
  },
  partsNote: 'Tabulka je doporučení autora, ne požadavek Google.',

  auditTitle: 'Jak plán vychází z auditu?',
  auditAnswerBefore: 'Plán má vycházet ze zjištění o webu, například z auditu: bez znalosti výchozího stavu nelze určit priority. Audit říká, co na webu je, plán říká, co se s tím bude dělat. Co má SEO audit obsahovat, popisuje',
  auditLinkText: 'samostatný článek',
  auditAnswerAfter: ', tady ho nevysvětluji.',

  stagesTitle: 'Jak se plán dělí na etapy?',
  stagesAnswer: 'Plán lze rozdělit na přípravu, úpravy a vyhodnocení: nejdřív se ujasní stav a priority, potom se provádějí úpravy a nakonec se data vyhodnotí a postup se upraví. Etapy nemají pevný kalendář. Jejich délku určuje stav webu, rozsah změn a rozhodnutí klienta.',
  stages: [
    { h: 'Příprava', text: 'Ujasní se cíl, výchozí stav webu a priority.' },
    { h: 'Úpravy', text: 'Provádějí se úpravy podle priorit a zaznamenává se, co se změnilo.' },
    { h: 'Vyhodnocení', text: 'Vyhodnocují se data a podle nich se postup upraví.' },
  ],

  prioTitle: 'Jak plán určuje priority?',
  prioAnswer: 'Priority určují, co udělat dřív. Dříve se dává tomu, co brání webu být v Googlu vidět nebo srozumitelný pro zájemce, a později tomu, co jen zlepšuje detaily. Pořadí je doporučení autora a závisí na konkrétním webu. Žádné obecné číslo ani lhůta k tomu neexistuje.',
  prioLead: 'Co se řadí podle priority:',
  prio: [
    'co brání webu být vidět;',
    'co brání zájemci porozumět;',
    'co brání v kontaktu;',
    'co jen zlepšuje detaily;',
    'co závisí na rozhodnutí klienta.',
  ],

  measureTitle: 'Jak se v plánu měří pokrok?',
  measureAnswer: 'Plán má říkat, co se bude sledovat a odkud se berou data: viditelnost ve vyhledávání, návštěvnost a poptávky podle zdroje. Čísla v plánu nečekejte. Google doporučuje počkat několik týdnů, než posoudíte, zda úpravy pomohly. Plán lhůty neslibuje, jen určuje, co a kdy zkontrolovat.',
  measureLead: 'Co měřit:',
  measure: [
    'viditelnost ve vyhledávání;',
    'návštěvnost;',
    'poptávky podle zdroje;',
    'delší období místo jednotlivých dnů;',
    'kdo a kdy hodnotí.',
  ],

  diffTitle: 'Čím se kvalitní plán liší od obecného seznamu rad?',
  diffAnswer: 'Kvalitní plán je konkrétní pro daný web, vysvětluje, proč jsou kroky v tomto pořadí, jmenuje odpovědnosti a říká i to, co se dělat nebude. Obecný seznam rad platí pro každý web stejně. Rozdíl poznáte podle toho, zda plán pracuje s údaji o vašem webu.',

  takeTitle: 'Co si z plánu odnést, i když nic nekoupíte?',
  takeAnswer: 'I bez nákupu si z plánu odnesete otázky, které stojí za zodpovězení: jaký je cíl, jaký je výchozí stav, co je priorita a jak poznáte pokrok. Můžete je použít při rozhovoru s libovolným dodavatelem i při vlastní práci na webu. Tento článek nic neprodává.',
  takeLead: 'Otázky k plánu:',
  take: [
    'jaký je cíl;',
    'jaký je výchozí stav;',
    'co je priorita;',
    'jak poznám pokrok;',
    'kdo za co odpovídá.',
  ],
  listNote: 'Seznam je doporučení autora, ne požadavek Google.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Musí mít SEO plán 12 měsíců?', a: 'Ne. Délka plánu je věc dohody a situace; rok je jen jedna z možných délek a Google nic takového nepředepisuje. Kratší plán může dávat smysl pro menší web nebo pro jednu konkrétní úpravu. Důležitější než délka je konkrétnost a srozumitelnost plánu.' },
    { q: 'Kdo má plán připravit?', a: 'Plán může připravit SEO specialista ve spolupráci s vlastníkem webu, nebo ho může vypracovat sám vlastník. Důležité je, aby plán vycházel z údajů o webu a aby byl srozumitelný pro toho, kdo ho bude schvalovat. Jak vybrat specialistu, popisuje samostatný článek.', linkAfter: 'samostatný článek', linkKey: 'postSelectSpecialist' },
    { q: 'Kolik stránek má SEO plán mít?', a: 'Záleží na webu, cíli a rozsahu práce. Neexistuje správný počet stran. Plán má být tak dlouhý, aby bylo jasné, co se bude dělat, v jakém pořadí a jak se pozná pokrok. Dlouhý plán bez konkrétních kroků není lepší než krátký a konkrétní.' },
    { q: 'Může se plán během roku změnit?', a: 'Ano. Plán je pracovní dokument a po vyhodnocení dat nebo při změně cíle či kapacity se může upravit. Změnu je dobré zapsat a vysvětlit důvod. Pevný plán, který se nesmí měnit, nemusí odpovídat realitě, protože vyhledávače i konkurence se mění.' },
    { q: 'Slibuje plán výsledky?', a: 'Ne. Plán popisuje kroky, pořadí a měření, ne záruku výsledků. Google uvádí, že některé změny se mohou projevit za několik hodin a jiné trvat několik měsíců, proto nelze konkrétní výsledek předem slíbit. Pokud plán slibuje pozice, je to varovný signál.' },
    { q: 'Jak poznám, že je plán obecný?', a: 'Plán je obecný, pokud neodkazuje na váš web, nevysvětluje, proč jsou kroky v tomto pořadí, nejmenuje odpovědnosti a nepopisuje měření. Takový seznam by platil pro jakýkoli web. Zeptejte se, které konkrétní zjištění o vašem webu za jednotlivými kroky stojí a proč jsou právě tyto.' },
  ],

  relatedTitle: 'Související články',
  endBefore: 'Pokud chcete nezávislý pohled na to, jak by mohl vypadat plán pro váš web, je k dispozici',
  endLinkText: 'SEO konzultace',

  schema: {
    about: ['SEO plán na 12 měsíců', 'jak vypadá SEO plán', 'co obsahuje SEO plán', 'čím se liší kvalitní SEO plán od obecného'],
  },
};

export const POST_SEO_PLAN_CS = walk(raw);
