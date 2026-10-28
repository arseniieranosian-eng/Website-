// Czech content of the blog article /blog/jak-vybrat-seo-specialistu/ (brief K2 of 29.10.2026), the contractor-selection article of the funnel to /konzultace/. Informational, no self-promotion: no "choose me", no
// list of the author's advantages, no cases, figures, prices or reviews, no comparisons of contractors, no generalisations about the market, no word "podvod". The disclosure of the author's interest stands in the first two
// sentences. Defaults taken: no quote, no observations, no audit CTA, no K1 link, only the links /blog/co-je-seo-audit/ (F5), /blog/audit-konzultace-nebo-start/ (related) and /konzultace/ (closing block).
// Title: "Výběr SEO specialisty: otázky a signály | Eranosian" (51 characters; the brief's 60 would break the site-wide limit of 55); description 140 (brief: 152, limit 150). The author's own tables and checklists are marked
// "doporučení autora, ne požadavek Google". The Google statements (no one can guarantee a #1 ranking; warning signs; read-only Search Console access first; the owner is responsible for the people they hire; asking former
// clients) follow the brief word for word; they were NOT compared with the Google page from here (developers.google.com is not reachable from the build environment), so that comparison is still open before the live release.
// Length: about 1 050 words, below the 1 200–1 800 target; nothing outside the brief was added. No HowTo, no Service, no ratings, no Quotation.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_SELECT_SPECIALIST_PUBLISHED = '2026-10-29';
// Review every 90 days against the Google source: next 2027-01-27.

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/jak-vybrat-seo-specialistu.webp', width: 1200, height: 630, alt: 'Ilustrace: otázky před spoluprací a kontrolní seznam varovných signálů při výběru SEO specialisty' },

  lead: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté. Opírám se proto hlavně o oficiální doporučení Googlu. SEO specialista je člověk, který pomáhá upravit web tak, aby mu vyhledávače lépe rozuměly a aby ho zájemci snáze našli.',

  doTitle: 'Co by měl SEO specialista umět a dělat?',
  doAnswer: 'SEO specialista by měl umět zkontrolovat, jak vyhledávač web vidí, navrhnout úpravy obsahu a technického stavu a vysvětlit, co se změní a proč. Nemá mlžit ani tajit postup. Seznam dovedností je doporučení autora, ne požadavek Google; dobrého specialistu pozná také to, že srozumitelně vysvětluje.',

  askTitle: 'Na co se zeptat před spoluprací?',
  askAnswer: 'Zeptejte se na příklady předchozí práce, na to, jaké výsledky a v jakém čase specialista očekává, a jak úspěch měří. Google doporučuje zeptat se také na zkušenosti dřívějších klientů. Dobrá odpověď je konkrétní a srozumitelná, ne obecný slib. Otázky shrnuje tabulka níže.',
  askTable: {
    head: ['Otázka', 'Proč na ni ptát'],
    rows: [
      ['Můžete ukázat příklady předchozí práce?', 'zjistíte, jak specialista pracuje'],
      ['Jaké výsledky a v jakém čase očekáváte?', 'odpověď má být realistická, bez slibu pozice'],
      ['Jak budete měřit úspěch?', 'víte, podle čeho budete hodnotit spolupráci'],
      ['Co přesně budete na webu dělat?', 'specialista má umět vysvětlit každou změnu'],
      ['S kým z dřívějších klientů mohu mluvit?', 'ověříte zkušenost nezávisle'],
    ],
  },
  askNote: 'Tabulka je doporučení autora, ne požadavek Google.',

  promiseTitle: 'Může SEO specialista slíbit první místo?',
  promiseAnswer: 'Ne. Google uvádí, že nikdo nemůže zaručit první pozici ve vyhledávání, a pokud to někdo slibuje, doporučuje najít jiného specialistu. Pozici ovlivňuje řada faktorů, které žádný jednotlivec plně neovládá. Poctivá nabídka popisuje postup a měření, ne záruku výsledku ani počtu poptávek.',

  warnTitle: 'Jaké jsou varovné signály?',
  warnAnswer: 'Varovné signály podle Googlu jsou slib první pozice, tvrzení o zvláštním vztahu s Googlem, nevyžádané nabídky e-mailem, tajnůstkářství ohledně postupu a schémata kolem odkazů. Google také uvádí, že na SEO specialistu nemáte nikdy odkazovat. Kontrolní seznam níže je přehled, ne soud o konkrétním člověku.',
  warnLead: 'Varovné signály:',
  warn: [
    'slibuje první pozici;',
    'tvrdí, že má zvláštní vztah s Googlem;',
    'nabídka přišla e-mailem bez vyzvání;',
    'odmítá vysvětlit, co bude dělat;',
    'nabízí schémata kolem odkazů;',
    'chce, abyste odkazovali na něj.',
  ],

  accessTitle: 'Jaký přístup k webu mu dát?',
  accessAnswer: 'Na začátku dejte specialistovi jen čtecí přístup do Google Search Console, zápisový zatím ne. Pokud má přístup k serveru, má být ochoten vysvětlit všechny změny, které na webu dělá. Přístup je otázka důvěry, proto jej rozšiřujte postupně a podle toho, co specialista skutečně potřebuje.',
  accessNote: 'Google Search Console je bezplatný nástroj Googlu pro sledování webu.',

  verifyTitle: 'Jak ověřit zkušenosti a reference?',
  verifyAnswer: 'Požádejte o příklady práce a o kontakt na dřívější klienty. Zeptejte se, zda byli se službou spokojeni, zda se s ním dobře spolupracovalo a zda jim přinesl užitek. Příklady uvedené na webu berte jako výchozí bod, ne jako důkaz. Ověření je na vás.',
  verifyLead: 'Co ověřit:',
  verify: [
    'příklady práce;',
    'kontakt na dřívější klienty;',
    'spokojenost a snadná spolupráce;',
    'konkrétní odpovědi bez slibu pozice;',
    'srozumitelné vysvětlení postupu.',
  ],

  ownerTitle: 'Co znamená, že za web odpovídáte vy?',
  ownerAnswer: 'Podle Googlu odpovídáte za jednání firem, které si najmete. Pokud SEO specialista vytvoří klamavý nebo zavádějící obsah, může být web z indexu Googlu odstraněn nebo se zhorší jeho zobrazení. Proto vyžadujte, aby specialista vysvětlil, co přesně na webu dělá a proč to dělá.',

  meetTitle: 'Jak vypadá rozumná první schůzka?',
  meetAnswer: 'Rozumná první schůzka řeší cíl, současný stav webu, navrhovaný postup, způsob měření a odpovědnost na vaší straně. Nehledejte slib výsledku, ale srozumitelné vysvětlení. O ceně se rozhodněte až po tomto vysvětlení; tento článek žádné ceny neuvádí. Seznam níže je doporučení autora.',
  meetLead: 'První schůzka:',
  meet: [
    'cíl;',
    'současný stav webu;',
    'navrhovaný postup;',
    'způsob měření;',
    'kdo je odpovědný na vaší straně.',
  ],
  listNote: 'Seznam je doporučení autora, ne požadavek Google.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Potřebuji vůbec SEO specialistu?', a: 'Záleží na vaší situaci. Část úprav může provést i vlastník webu, jiné vyžadují technické znalosti nebo čas, který nemusíte mít. Před rozhodnutím si ujasněte cíl, co umíte a stihnete sami a co by měl dělat někdo jiný. Odpověď tedy není vždy ano.' },
    { q: 'Kolik zkušeností má mít SEO specialista?', a: 'Neexistuje obecný počet let, který by zaručil kvalitu. Důležitější je, zda specialista umí ukázat příklady práce, vysvětlit postup a změřit výsledek, a zda mu věří jeho dřívější klienti. Zkušenosti ověřte konkrétními otázkami, ne jen délkou praxe, a nechte si je vysvětlit srozumitelně.' },
    { q: 'Může SEO specialista zaručit pozici?', a: 'Ne. Google uvádí, že nikdo nemůže zaručit první místo ve výsledcích vyhledávání, a doporučuje najít jiného specialistu, pokud to někdo slibuje. Poctivá nabídka popisuje postup, měření a očekávání, ne záruku pozice. Totéž platí pro slib konkrétního počtu poptávek nebo termínu výsledku.' },
    { q: 'Mám dát specialistovi přístup do Search Console?', a: 'Na začátku jen čtecí přístup, zápisový zatím ne. Takto to doporučuje Google. Čtecí přístup umožní specialistovi vidět data o webu, ale ne měnit nastavení. Rozsah přístupu můžete později rozšířit, pokud si vybudujete důvěru a víte, jaké změny specialista dělá a proč je dělá.' },
    { q: 'Jak poznám kvalitní SEO audit?', a: 'Kvalitní audit srozumitelně popisuje, co a proč se na webu kontroluje, jaké problémy našel a co s nimi dělat, bez slibu výsledku. Podrobně, co má SEO audit obsahovat, popisuje samostatný článek. Pokud audit jen vypisuje čísla bez vysvětlení, požádejte o jasnější výklad.', linkAfter: 'samostatný článek', linkKey: 'postSeoAudit' },
    { q: 'Co dělat, když mi někdo nabídne SEO e-mailem?', a: 'Buďte opatrní. Google uvádí, že je dobré mít se na pozoru před firmami, které vás kontaktují e-mailem bez vyzvání. Nevěřte slibu první pozice ani tvrzení o zvláštním vztahu s Googlem. Zeptejte se, kdo nabídku posílá a co přesně chce na webu dělat.' },
  ],

  relatedTitle: 'Související články',
  endBefore: 'Pokud chcete nezávislý pohled na konkrétní nabídku od SEO dodavatele, je k dispozici',
  endLinkText: 'SEO konzultace',

  schema: {
    about: ['jak vybrat SEO specialistu', 'na co se zeptat SEO specialisty', 'varovné signály SEO specialista', 'přístup do Search Console pro SEO specialistu'],
  },
};

export const POST_SELECT_SPECIALIST_CS = walk(raw);
