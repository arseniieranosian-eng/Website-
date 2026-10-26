// Czech content of the blog article /blog/ma-seo-smysl-pro-malou-ucetni-kancelar/ (brief U3 of 26.10.2026), the decision article ("is it worth it") of the accounting-firm funnel. An honest answer
// "not yet" is allowed. Defaults taken: no quote, no observations, no figures, no prices, no CTA, no links to Start / Full SEO / consultation / audit, no tax or market statements, no U6 / U7 links.
// The Title is 48 characters ("Malá účetní kancelář a SEO: kritéria | Eranosian"; the brief's 60 would break the site-wide limit of 55) and the description 138 (brief: 156, limit 150).
// Links: U1 (introduction), U2 (H2-6, published), "SEO a reklama" (F4), the accounting landing page (closing block). Length: the brief's texts give about 900 words, below the 1 200–1 800 target;
// nothing outside the brief was added. No HowTo, no Service, no ratings, no Quotation.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_ACCOUNTING_SMALL_PUBLISHED = '2026-10-26';
// Review every 90 days: next 2027-01-24.

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/ma-seo-smysl-pro-malou-ucetni-kancelar.webp', width: 1200, height: 630, alt: 'Ilustrace: malá účetní kancelář a váhy, na kterých se posuzuje, zda dává SEO smysl' },

  leadBefore: 'Záleží na tom, kolik klientů potřebujete, kolik jich zvládnete převzít a kde je dnes získáváte. Přehled kanálů najdete v článku',
  leadLinkText: 'Jak získat klienty pro účetní kancelář',

  whenTitle: 'Pro jakou malou kancelář SEO smysl dává a pro jakou zatím ne?',
  whenAnswer: 'SEO dává smysl, pokud kancelář chce další klienty, má kapacitu je převzít a má web, na který lze zájemce poslat. Zatím nemusí dávat smysl, pokud kapacitu nemá nebo klienty spolehlivě získává z doporučení. Rozhodnutí závisí na vašem cíli, ne jen na tom, zda je kancelář malá.',
  table: {
    head: ['Situace', 'Co z toho plyne'],
    rows: [
      ['Klienty z doporučení, kapacita je plná', 'SEO zatím není priorita'],
      ['Kapacita je volná, doporučení nestačí', 'SEO je jedna z možností, ověřte i jiné kanály'],
      ['Web nemá základní informace nebo ho zájemce nepochopí', 'nejdřív web, pak SEO'],
      ['Kancelář pracuje s jedním typem klientů', 'úzké zaměření může být výhodou'],
      ['Potřebujete klienty rychle', 'SEO rychlý výsledek nezaručuje, zvažte jiný kanál'],
      ['Nevíte, odkud klienti přicházejí', 'začněte měřením zdrojů'],
    ],
  },
  tableNote: 'Tabulka je orientační, bez čísel.',

  countTitle: 'Kolik klientů potřebujete a kolik jich zvládnete?',
  countAnswer: 'Než začnete uvažovat o SEO, určete, kolik nových klientů chcete a kolik jich skutečně zvládnete převzít. Nové poptávky nemají smysl, pokud na ně není kapacita. Čísla si stanovte sami podle své situace. Tento článek žádná čísla neuvádí a žádný počet klientů neslibuje.',

  longTitle: 'Co pro SEO znamená dlouhodobý klient?',
  longAnswer: 'Pokud kancelář s klientem spolupracuje dlouhodobě, jeden získaný klient pro ni může znamenat delší práci. Pro rozhodnutí o SEO je to důležité, ale žádný výpočet návratnosti tu neuvádím, protože závisí na vašich cenách a nákladech. Spočítejte si ho podle vlastních čísel.',

  rivalsTitle: 'S kým se malá kancelář v hledání potkává?',
  rivalsAnswer: 'V hledání se malá kancelář potkává s několika typy webů: s většími kancelářemi, s online účetními službami a s adresáři. Názvy neuvádím. Malé kanceláři pomáhá úzké zaměření, například na určitý typ klientů nebo místo, a srozumitelná nabídka, kterou zájemce rychle pochopí.',

  goalsTitle: 'Jaké cíle jsou pro malou kancelář reálné?',
  goalsAnswer: 'Realistický cíl je, aby se kancelář objevovala u užších dotazů, například pro určitý typ klientů nebo místo, a aby web zájemce srozumitelně vedl k prvnímu kontaktu. Pozici na široké dotazy nelze předpokládat ani zaručit. Cíl proto stanovte jako počet poptávek, ne jako umístění v Googlu.',

  needTitle: 'Co musí kancelář mít, aby SEO mohlo fungovat?',
  needAnswerBefore: 'Aby SEO mohlo fungovat, potřebuje kancelář web, který je v Googlu vidět, srozumitelně popisuje služby a umožňuje snadný první kontakt. Pokud web zatím poptávky nepřináší, hledejte nejdřív příčinu a postupujte krok za krokem. Postup popisuje',
  needLinkText: 'článek o tom, proč web účetní kanceláře nepřináší poptávky',

  otherTitle: 'Kdy je lepší zvolit jiný kanál nebo počkat?',
  otherAnswer: 'Jiný kanál nebo čekání je lepší, pokud potřebujete klienty rychle, nemáte kapacitu, nebo web zatím nemá základ. SEO je dlouhodobější a výsledek nezaručuje. Vhodnější mohou být doporučení, placená reklama nebo profil firmy na mapách. Podrobný přehled kanálů najdete v článku o získávání klientů.',

  stepTitle: 'Jak vypadá rozumný první krok?',
  stepAnswer: 'Rozumný první krok jsou tři věci: ověřit, že je web v Googlu vidět, popsat služby a typy klientů srozumitelně a začít si zapisovat, odkud poptávky přicházejí. Tyto kroky lze udělat samostatně a ukážou, zda má smysl jít dál. Teprve potom zvažte, zda SEO opravdu potřebujete.',
  checklistTitle: 'Jsem na SEO připravený?',
  checklist: [
    'mám volnou kapacitu pro nové klienty;',
    'web je v Googlu vidět;',
    'služby a typy klientů jsou popsané srozumitelně;',
    'kontakt je snadno dohledatelný;',
    'zapisuji, odkud poptávky přicházejí;',
    'neočekávám rychlý výsledek.',
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Má SEO smysl pro malého podnikatele?', a: 'Záleží na cíli a kapacitě. Malý podnikatel může SEO využít, pokud chce další zákazníky a umí je převzít. Pokud mu stačí doporučení a nemá volnou kapacitu, SEO zatím nemusí být potřeba. Výsledek SEO nelze zaručit, proto se vyplatí nejdřív promyslet cíl.' },
    { q: 'Může malá účetní kancelář uspět v SEO?', a: 'Může, ale záleží na webu, konkurenci a zaměření kanceláře. Malá kancelář má větší šanci u užších dotazů, například pro určitý typ klientů nebo místo, než u široké konkurence. Úspěch nelze zaručit ani odhadnout bez znalosti konkrétního webu, proto žádný slib výsledku nedávám.' },
    { q: 'Kdy SEO nedává smysl?', a: 'SEO zatím nedává smysl, pokud kancelář nemá kapacitu přijímat nové klienty, potřebuje výsledek rychle, nebo má web bez základních informací. Odpověď „zatím ne“ je legitimní. Nejdřív je dobré doplnit web a zjistit, odkud poptávky přicházejí, a teprve poté se k SEO vrátit.' },
    { q: 'Mám začít SEO, nebo reklamou?', a: 'Reklama může přinést poptávky rychleji, ale je placená a po jejím vypnutí návštěvy z reklamy přestanou. SEO působí pomaleji a dlouhodoběji. Volba závisí na cíli a rozpočtu. Souvislosti obou kanálů popisuje článek o tom, jak spolu SEO a reklama fungují.', linkAfter: 'článek o tom, jak spolu SEO a reklama fungují' },
    { q: 'Jak poznám, že je kancelář na SEO připravená?', a: 'Kancelář je na SEO připravená, pokud má volnou kapacitu, web je v Googlu vidět, služby jsou srozumitelně popsané, kontakt je snadno dohledatelný a zdroje poptávek se zapisují. Pokud některý bod chybí, doplňte ho nejdřív. Checklist v článku tyto body shrnuje.' },
    { q: 'Za jak dlouho se SEO projeví?', a: 'Záleží na stavu webu, konkurenci a rozsahu změn. Žádnou lhůtu nezaručuji. Některé změny se mohou projevit dříve, jiné později, a Google nemusí změny zpracovat okamžitě. Proto je dobré sledovat poptávky i návštěvnost v delším období a nehodnotit výsledek po několika dnech.' },
  ],

  endText: 'Systematickou práci na SEO webu účetní kanceláře popisuje stránka',
  endLinkText: 'SEO pro účetní kanceláře v Praze',
  endText2: 'Tento článek je jen přehled toho, kdy SEO dává smysl a kdy zatím ne.',

  schema: {
    about: ['má SEO smysl pro malou účetní kancelář', 'kdy SEO nedává smysl', 'jak poznám, že je kancelář na SEO připravená'],
  },
};

export const POST_ACCOUNTING_SMALL_CS = walk(raw);
