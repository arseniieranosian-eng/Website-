// Czech content of the blog article /blog/proc-web-ucetni-kancelare-neprinasi-poptavky/ (brief U2 of 26.10.2026), the diagnostic article of the accounting-firm funnel (U1 = channels overview).
// Defaults taken: no quote, no dated observations, no prices, no audit CTA (the closing block is one link to the landing page), no tax / legal statements, no software or portal names, no U3–U7 links (they do not
// exist yet). The description is 140 characters (the brief's 154 would break the site-wide limit of 150). The link to U1 is in the introduction only; F3 names the article without a second link.
// Length: the brief's texts give about 1 000 words, below the 1 200–1 800 target; nothing was added that is not in the brief. No HowTo, no Service, no ratings, no Quotation.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_ACCOUNTING_NOLEADS_PUBLISHED = '2026-10-26';
// Review every 90 days: next 2027-01-24.

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/proc-web-ucetni-kancelare-neprinasi-poptavky.webp', width: 1200, height: 630, alt: 'Ilustrace: web účetní kanceláře s kontrolním seznamem příčin, proč nepřináší poptávky' },

  leadBefore: 'Web účetní kanceláře může být přehledný a přesto nepřinášet žádné poptávky. Příčinu je dobré hledat postupně, od viditelnosti v Googlu až po první kontakt; přehled kanálů najdete v článku',
  leadLinkText: 'Jak získat klienty pro účetní kancelář',

  findTitle: 'Najde vás vůbec Google?',
  findAnswerBefore: 'Web musí být ve vyhledávání vůbec k nalezení. Pokud ho Google neindexuje, zájemce ho nenajde, i když je web pěkný a funkční. Nejdřív proto ověřte, zda se stránky v Googlu zobrazují. Podrobně, proč se web nezobrazuje, popisuje',
  findLinkText: 'samostatný článek',
  findAnswerAfter: ', tady zůstáváme u základní kontroly.',

  whoTitle: 'Je zřejmé, pro koho kancelář pracuje?',
  whoAnswer: 'Zájemce chce rychle poznat, zda kancelář řeší jeho situaci, například jako OSVČ, s.r.o., plátce nebo neplátce DPH. Pokud web mluví obecně o účetnictví, zájemce neví, zda je to pro něj. Pomáhá jasně napsat, pro jaké klienty kancelář pracuje, a nenechávat to na odhadu.',

  whatTitle: 'Je z webu patrné, co kancelář dělá a jak spolupracuje?',
  whatAnswer: 'Návštěvník potřebuje vidět, jaké služby kancelář nabízí a jak spolupráce probíhá: zda se schází osobně nebo online a jak se předávají doklady. Seznam služeb s krátkým popisem pomáhá víc než obecná věta. Ceny tu řešit nemusíte, jde o srozumitelnost nabídky.',

  contactTitle: 'Co se stane po prvním kontaktu?',
  contactAnswer: 'Zájemce, který napíše nebo zavolá, potřebuje vědět, co bude následovat. Formulář má být krátký, telefon a e-mail dohledatelné a odpověď má přijít v rozumné době. Pokud web neříká, jak vypadá první krok spolupráce, zájemce může odejít dřív, než ho kancelář vůbec osloví.',

  trustTitle: 'Proč by zájemce kanceláři věřil?',
  trustAnswer: 'Důvěru na webu tvoří konkrétní prvky: jména a podoba lidí v kanceláři, adresa, kontakty a základní údaje o firmě. U služby, při které klient předává doklady a finanční údaje, je důležité vidět, kdo za webem stojí. Nevymýšlejte hodnocení ani reference, které nemáte.',

  wordsTitle: 'Hledají lidé službu tak, jak ji kancelář na webu pojmenovala?',
  wordsAnswer: 'Zájemci hledají podle své situace, například účetní pro OSVČ, vedení účetnictví pro s.r.o. nebo online účetní. Pokud web používá jen obecné pojmy, nemusí jim odpovídat. Je užitečné psát služby slovy, jakými je klient popisuje. Žádná taková stránka ale automaticky nezaručuje pozici.',

  sourceTitle: 'Víte, odkud poptávky přicházejí?',
  sourceAnswer: 'Bez měření nepoznáte, zda web poptávky nepřináší, nebo zda je jen nezaznamenáváte. Poptávka může přijít formulářem, telefonem nebo e-mailem. Stačí si zapisovat, odkud se zájemce ozval, a sledovat, kolik poptávek přichází z webu. To je základ pro rozhodování o změnách. Technické nastavení měření tu nerozebírám.',

  startTitle: 'S čím začít kontrolu?',
  startAnswer: 'Začněte kontrolou, zda je web v Googlu vidět, potom projděte srozumitelnost nabídky, první kontakt a důvěru. Tabulka a checklist níže shrnují typické příznaky a místo, kde hledat příčinu. Toto pořadí je doporučení autora, ne pravidlo Googlu, a přesnou příčinu ukáže až kontrola konkrétního webu.',
  table: {
    head: ['Příznak', 'Co zkontrolovat'],
    rows: [
      ['Web se v Googlu nezobrazuje', 'zda jsou stránky indexované'],
      ['Zájemce neví, zda je služba pro něj', 'zda je jasné, pro jaké klienty kancelář pracuje'],
      ['Návštěvníci odcházejí z webu', 'zda je seznam služeb a postup spolupráce srozumitelný'],
      ['Formulář nikdo nevyplňuje', 'zda je formulář krátký a zda je vidět jiný kontakt'],
      ['Zájemce nevěří webu', 'zda jsou vidět lidé, adresa a základní údaje o firmě'],
      ['Nevíte, odkud poptávky jsou', 'zda si zapisujete zdroj každé poptávky'],
    ],
  },
  checklistLead: 'Kontrolní seznam prvních kroků:',
  checklist: [
    'web je v Googlu vidět;',
    'je jasné, pro koho kancelář pracuje;',
    'služby jsou popsané srozumitelně;',
    'kontakt je dohledatelný na každé stránce;',
    'web ukazuje, kdo za kanceláří stojí;',
    'poptávky se zapisují podle zdroje.',
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Jak poznám, že web účetní kanceláře nefunguje?', a: 'Web nefunguje, pokud nepřináší poptávky a vy nevíte proč. Praktická kontrola má tři kroky: ověřit, zda je web v Googlu, zda zájemce pochopí nabídku a zda snadno najde kontakt. Pokud odpověď na některý krok není ano, začněte tam. Přesnou příčinu ukáže až důkladnější kontrola webu.' },
    { q: 'Proč nemám návštěvníky na webu účetní kanceláře?', a: 'Důvodů může být víc: web nemusí být v Googlu, nemusí odpovídat na to, co lidé hledají, nebo ho nikdo nenavštěvuje, protože klienty získáváte jinak. Návštěvnost a poptávky jsou dvě různé věci. Nejdřív zjistěte, zda je web indexovaný a zda je kde návštěvníky získávat.' },
    { q: 'Stačí, když klienty získávám z doporučení?', a: 'Doporučení jsou pro účetní kancelář dobrý základ, ale zájemce si ji může ještě vyhledat. Zda stačí, závisí na tom, kolik klientů potřebujete a jak stabilně doporučení přicházejí. Doporučení a web se nevylučují. Přehled dalších kanálů najdete v článku Jak získat klienty pro účetní kancelář.' },
    { q: 'Má každá služba mít vlastní stránku?', a: 'Ne vždy. Samostatná stránka dává smysl tam, kde klient hledá službu konkrétním slovem a potřebuje konkrétní informace. Pro několik podobných služeb stačí jedna přehledná stránka. Rozhodnutí závisí na tom, jak se služby liší a kolik užitečného obsahu o každé z nich máte.' },
    { q: 'Jak dlouho trvá, než se změny na webu projeví?', a: 'Záleží na stavu webu, konkurenci a rozsahu změn. Některé opravy se projeví rychleji, jiné trvají déle a Google nemusí změny zpracovat hned. Žádnou lhůtu nezaručuji. Proto je dobré sledovat poptávky i vývoj návštěvnosti v delším období, ne jen po pár dnech od úpravy.' },
    { q: 'Co zkontrolovat jako první?', a: 'Nejdřív ověřte, zda je web ve vyhledávání vidět. Pak zkontrolujte, zda se na první pohled pozná, pro koho kancelář pracuje, zda jsou kontakty snadno dohledatelné a zda víte, odkud poptávky přicházejí. Tabulka a checklist v článku tento postup shrnují do několika kroků.' },
  ],

  endText: 'Systematickou práci na SEO webu účetní kanceláře popisuje stránka',
  endLinkText: 'SEO pro účetní kanceláře v Praze',
  endText2: 'Tento článek je jen přehled míst, kde hledat příčinu.',

  schema: {
    about: ['web účetní kanceláře nepřináší poptávky', 'proč nemám klienty z webu účetní kanceláře', 'web účetní kanceláře bez poptávek'],
  },
};

export const POST_ACCOUNTING_NOLEADS_CS = walk(raw);
