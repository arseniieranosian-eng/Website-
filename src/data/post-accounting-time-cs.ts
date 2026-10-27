// Czech content of the blog article /blog/jak-dlouho-trva-seo-pro-ucetni-kancelar/ (brief U6 of 28.10.2026), the "how long does it take" article of the accounting-firm funnel. No guarantees of any term.
// Defaults taken: no quote, no observations, no cases, no prices, no CTA / audit, no tax or legal statements, no U7 link. Title: "Jak dlouho trvá SEO u účetní kanceláře | Eranosian" (50 characters; the brief's 60 would
// break the site-wide limit of 55; "u" instead of "pro" keeps it different from the H1); description 150 as in the brief. Neighbour links ([?]6, default of the brief): U3 (introduction), U2 (H2-5) and the new-site
// indexing article (F1); U1 (H2-8) and "SEO a reklama" (F3) are named without a link. F2 keeps the author's "obvykle po dvou až třech měsících" about his own projects (same statement as on the other pages, [?]5).
// The Google statements (SEO Starter Guide: some changes take a few hours, others several months; waiting a few weeks; recrawl: a few days to a few weeks) follow the brief; they were NOT compared with the Google pages
// from here (developers.google.com is not reachable from the build environment), so that comparison is still open before the live release. Length: about 1 150 words, below the 1 200–1 800 target; nothing outside
// the brief was added except the three one-sentence stage blocks of H2-4 (the brief asks for them without giving their text). No HowTo, no Service, no ratings, no Quotation.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_ACCOUNTING_TIME_PUBLISHED = '2026-10-28';
// Review every 90 days against the Google sources: next 2027-01-26.

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/jak-dlouho-trva-seo-pro-ucetni-kancelar.webp', width: 1200, height: 630, alt: 'Ilustrace: časová osa SEO s etapami práce a bez pevného data výsledku' },

  leadBefore: 'Záleží na stavu webu, konkurenci a rozsahu změn, proto se konkrétní lhůta slíbit nedá. Zda SEO pro malou kancelář vůbec dává smysl, řeší článek',
  leadLinkText: 'Má SEO smysl pro malou účetní kancelář?',

  whyTitle: 'Proč nelze slíbit konkrétní lhůtu?',
  whyAnswer: 'Výsledek SEO nezávisí jen na práci na webu, ale i na tom, kdy Google změny zpracuje a jak silná je konkurence. Google sám uvádí, že některé změny se mohou projevit za několik hodin a jiné trvat několik měsíců. Proto žádnou lhůtu ani počet poptávek nezaručuji.',

  factorsTitle: 'Co určuje, jak dlouho to trvá?',
  factorsAnswer: 'Dobu ovlivňuje několik faktorů: stav webu na začátku, síla konkurence, rozsah změn, kvalita obsahu a kapacita kanceláře pracovat s novými poptávkami. Žádný z nich nelze předem přesně změřit, proto tabulka níže ukazuje jen směr vlivu každého faktoru, ne počet týdnů nebo měsíců.',
  factorsTable: {
    head: ['Faktor', 'Jak ovlivňuje'],
    rows: [
      ['Stav webu na začátku', 'čím víc základních věcí chybí, tím víc je co opravovat'],
      ['Síla konkurence', 'silnější konkurence znamená delší cestu'],
      ['Rozsah změn', 'menší změny se projeví méně'],
      ['Kvalita obsahu', 'srozumitelný obsah pomáhá zájemci i vyhledávači'],
      ['Kapacita kanceláře', 'bez kapacity nové poptávky nepomohou'],
      ['Rychlost provedení', 'opožděné změny odsouvají výsledek'],
    ],
  },
  tableNote: 'Tabulka je orientační, bez čísel.',

  soonTitle: 'Co se může projevit dříve a co později?',
  soonAnswer: 'Dříve se mohou projevit technické opravy, například indexace stránek nebo jejich zobrazení ve výsledcích. Později přicházejí poptávky od klientů, protože zájemce musí stránku najít, porozumět jí a ozvat se. Google uvádí, že procházení stránky může trvat od několika dnů do několika týdnů.',
  soonTable: {
    head: ['Co', 'Kdy se může projevit'],
    rows: [
      ['Technické opravy', 'dříve (indexace, zobrazení)'],
      ['Viditelnost ve výsledcích', 'později'],
      ['Návštěvnost', 'později'],
      ['Poptávky od klientů', 'nejpozději'],
    ],
  },

  stagesTitle: 'Jak vypadají etapy práce?',
  stagesAnswer: 'Práci na SEO lze rozdělit do tří etap: opravy technických chyb a úklid stránek, spuštění vybraných směrů a vyhodnocení dat s úpravou postupu. Etapy nemají pevný kalendář, protože délku každé určuje stav webu a rozhodnutí kanceláře. Pořadí etap je doporučení autora.',
  stages: [
    { h: 'Opravy a úklid', text: 'Nejdřív se opravují technické chyby a uklízejí stránky, aby byl web v Googlu vidět a srozumitelný.' },
    { h: 'Spuštění směrů', text: 'Potom se spouštějí vybrané směry, například úpravy stránek služeb nebo nový obsah.' },
    { h: 'Vyhodnocení', text: 'Nakonec se vyhodnocují data o viditelnosti a poptávkách a podle nich se upraví postup.' },
  ],

  measureTitle: 'Co můžete měřit v prvních měsících?',
  measureAnswerBefore: 'V prvních měsících sledujte, zda jsou stránky v Googlu vidět, zda se zobrazují ve výsledcích a odkud přicházejí poptávky. Čísla neuvádím, protože závisí na webu. Google doporučuje počkat několik týdnů, než posoudíte, zda úpravy pomohly. Zdroje poptávek popisuje',
  measureLinkText: 'článek o tom, proč web nepřináší poptávky',
  measureLead: 'Co měřit:',
  measure: [
    'stránky jsou v Googlu vidět;',
    'stránky se zobrazují ve výsledcích;',
    'roste návštěvnost;',
    'zapisuji, odkud poptávky přicházejí;',
    'sleduji delší období, ne jednotlivé dny.',
  ],

  lateTitle: 'Proč se výsledek nemusí dostavit hned?',
  lateAnswer: 'Výsledek se nemusí dostavit hned, protože Google musí stránky znovu projít a vyhodnotit a konkurence se mezitím mění. Pokud se změny projeví pomalu, neznamená to automaticky chybu. Jednu změnu nehodnoťte po několika dnech, ale v delším období. Žádný konkrétní termín nezaručuji.',

  changeTitle: 'Kdy je rozumné změnit plán?',
  changeAnswer: 'Plán je rozumné přehodnotit, když se po delší době nezměnila viditelnost webu, přestože byly změny provedeny, nebo když se změnil cíl či kapacita kanceláře. Rozhodujte podle údajů o poptávkách a viditelnosti, ne podle počtu týdnů. Délku čekání nelze určit obecně.',

  waitTitle: 'Co můžete dělat, než se SEO projeví?',
  waitAnswer: 'Než se SEO projeví, využijte jiné kanály a zapisujte si, odkud poptávky přicházejí. Přehled kanálů najdete v samostatném článku. Zároveň si připravte kapacitu, aby kancelář zvládla nové klienty. Tak nebude čekání zbytečně ztracený čas, i když se SEO ještě neprojevilo.',
  waitLead: 'Než se SEO projeví:',
  wait: [
    'využít jiné kanály z přehledu;',
    'zapisovat zdroje poptávek;',
    'připravit kapacitu pro nové klienty;',
    'zkontrolovat, že je web v Googlu vidět;',
    'nehodnotit výsledek po několika dnech.',
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Jak dlouho trvá, než Google uvidí změny na webu?', a: 'Google uvádí, že některé změny se mohou projevit za několik hodin a jiné trvají několik měsíců, a že procházení stránky může trvat od několika dnů do několika týdnů. Přesná doba se liší podle webu. Pokud je web nový, popisuje to samostatný článek o indexaci.', linkAfter: 'samostatný článek o indexaci', linkKey: 'postNewSite' },
    { q: 'Za jak dlouho přijdou první poptávky?', a: 'Nejde určit předem. Poptávky závisejí na tom, zda se stránky zobrazují, zda jim zájemce porozumí a zda se ozve. U svých projektů vidím změny obvykle po dvou až třech měsících, ale nezaručuji je. U vašeho webu to může být déle i kratší.' },
    { q: 'Je SEO rychlejší než reklama?', a: 'Reklama může přinést návštěvy rychleji, ale je placená a po jejím vypnutí návštěvy z reklamy přestanou. SEO působí pomaleji a dlouhodoběji. Volba závisí na cíli a rozpočtu. Souvislosti obou kanálů popisuje samostatný článek o tom, jak spolu SEO a reklama fungují.' },
    { q: 'Proč se po úpravách nic nezměnilo?', a: 'Může to mít několik důvodů: Google změny ještě nezpracoval, konkurence je silná, změny byly příliš malé, nebo má web jiný problém. Nejdřív ověřte, zda jsou stránky v Googlu vidět, a počkejte několik týdnů. Pokud se nic nemění delší dobu, zkontrolujte příčiny podle článku o poptávkách.' },
    { q: 'Jak poznám, že SEO pracuje, když nejsou poptávky?', a: 'Sledujte, zda se zvyšuje viditelnost webu v Googlu, zda přibývá návštěv a zda se zájemci ozývají. První signály mohou být viditelnost a návštěvnost, poptávky přicházejí později. Pokud je nevidíte, nemusí to znamenat chybu; zapisujte si zdroje a hodnoťte delší období.' },
    { q: 'Mám čekat, nebo plán změnit?', a: 'Plán změňte, pokud se změnil cíl, kapacita kanceláře nebo pokud po delší době nevidíte žádný posun ve viditelnosti. Jinak je rozumné počkat několik týdnů a vyhodnotit údaje. Rozhodujte podle dat, ne podle pevného počtu měsíců, který nelze obecně určit pro každý web.' },
  ],

  endText: 'Systematickou práci na SEO webu účetní kanceláře popisuje stránka',
  endLinkText: 'SEO pro účetní kanceláře v Praze',
  endText2: 'Tento článek je jen přehled toho, jak dlouho SEO trvá a od čeho to závisí.',

  schema: {
    about: ['jak dlouho trvá SEO pro účetní kancelář', 'za jak dlouho se SEO projeví', 'co ovlivňuje rychlost SEO'],
  },
};

export const POST_ACCOUNTING_TIME_CS = walk(raw);
