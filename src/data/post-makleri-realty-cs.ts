// Czech content of the blog article /blog/makleri-na-webu-realitni-kancelare/ (brief of 11.11.2026, block "Realitní kanceláře"): how to show the brokers on the website of a real-estate agency. DRAFT: not linked from anywhere.
// Own text and structure (K9): at most one sentence from the articles about the local presence (profile on maps: one sentence + link in H2-2), the FAQ (who approves the answers: one sentence + link in H2-5) and the service
// pages (one sentence + link in H2-6). Services prodej / pronájem / odhad only as examples of the reader's services ("například"); no "správa", no "hypotéky"; no legal statement about GDPR, licences or consent to photos
// (always "ověřte u právníka"); no claim about the behaviour of clients; reviews and ratings are never evidence; the claims about Google (authorship, fabricated profiles) have the source with Last updated and the date of
// the check (11. 11. 2026); nothing about AI Overviews / AI Mode, E-E-A-T is not called a ranking factor.
// H2-7 (the author's observation) is CONDITIONAL: it waits for the author's numbers (brief Q2); until OBSERVATION is filled the block and its contents item are not rendered and the article must not be published.
// Template for the text once the numbers exist (40-60 words): "K [datum] jsem si prohlédl 12 webů realitních kanceláří z výsledků pro dotaz „realitní kancelář v Praze“ a 11 webů pro dotaz „realitní kancelář v Brně“.
// Samostatnou stránku nebo sekci o makléřích mělo [X] z 12 v Praze a [Y] z 11 v Brně. Je to můj pozorovací vzorek, ne průzkum trhu." + "Praha a Brno jsou dva samostatné vzorky s různým dotazem. Kritéria (a)-(d) jsou moje, ne měření. Názvy webů neuvádím."
// The expert lines stay hidden until the author gives the command (EXPERT_CONFIRMED_MAKLERI). The author's quote (rule J) is a plain blockquote without Quotation markup.
import { walk } from '../lib/cs-typo';

// Date of publication: the author sets it by hand on the day the article goes out (Q6); the day of the brief is only a placeholder. Do NOT bump it when the page is edited.
export const POST_MAKLERI_REALTY_PUBLISHED = '2026-11-11';
// Visible only after the author writes that Katariina agrees to take part in this article and has seen the final text (Q3).
export const EXPERT_CONFIRMED_MAKLERI = false;
// The links to the FAQ article and the services article are shown because both are published (the author approved their links on 10.11.2026).
export const FAQ_ARTICLE_PUBLISHED_M = true;
export const SERVICES_ARTICLE_PUBLISHED_M = true;
// H2-7: null until the author gives the numbers (Q2). When set: { text, more } with the final paragraph (40-60 words) and the sentence(s) below it.
export const OBSERVATION: null | { text: string; more: string } = null;

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/makleri-na-webu-realitni-kancelare.webp', width: 1200, height: 630, alt: 'Ilustrace: karta makléře s jménem, rolí a kontaktem na webu realitní kanceláře' },
  reviewer: { before: 'Obsah konzultovala a věcně zkontrolovala', name: 'Katariina Kofanova', href: 'https://katariinaestates.cz/', after: ', realitní makléřka.' },

  lead: 'Článek je o tom, jaké údaje o makléřích a kdo za texty stojí uvádět na webu realitní kanceláře. Neřeším právní otázky ani ceny.',

  whyTitle: 'Proč má web realitní kanceláře ukazovat, kdo za ní stojí?',
  whyAnswer: 'Web má ukázat, kdo za kanceláří stojí a kdo odpovídá za texty, aby návštěvník nemusel hádat, s kým jedná. Google se v pokynech k užitečnému obsahu ptá, zda je návštěvníkům zřejmé, kdo obsah vytvořil. Nejde o záruku pozic, ale o srozumitelnost webu.',
  sourceLabel: 'Zdroj:',
  whySource: { before: 'Google Search Central, Creating helpful, reliable, people-first content,', href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', after: ', Last updated 2026-10-05, zkontrolováno 11. 11. 2026.' },

  dataTitle: 'Jaké údaje o makléři na web patří?',
  dataAnswer: 'Na stránku makléře patří jméno ve tvaru, který používá s klienty, jeho role v kanceláři, v čem pomáhá (například prodej, pronájem nebo odhad) a způsob kontaktu, který sám povolil. Doplnit lze texty, které podepisuje nebo kontroluje. Údaje musí odpovídat skutečnosti a schválit je má makléř i vedení kanceláře.',
  dataMaps: { link: 'Profil makléře na mapách', after: ' popisuje samostatný článek.' },
  quote: 'Na webu kanceláře má být vidět, kdo za textem stojí.',
  tableTitle: 'Co ukázat, kdo schvaluje a kdy ověřit u právníka',
  tableHead: ['Údaj', 'Kdo schvaluje', 'Ověřit u právníka'],
  tableRows: [
    ['Jméno a role', 'makléř, vedení', 'ne'],
    ['Oblast práce (příklady služeb)', 'makléř, vedení', 'ne'],
    ['Telefon a e-mail', 'makléř', 'ověřit u právníka'],
    ['Podpis textů', 'makléř', 'ne'],
    ['Nabídky makléře', 'vedení kanceláře', 'ne'],
    ['Fotografie', 'makléř', 'ověřit u právníka'],
  ],
  tableNote: 'Tabulka je moje doporučení, ne pravidlo trhu.',

  notTitle: 'Co na web bez souhlasu a kontroly nepatří?',
  notAnswer: 'Bez souhlasu makléře nepatří na web jeho fotografie, telefon, e-mail ani jiné osobní údaje. Nepatří tam ani vymyšlené nebo nedoložené recenze, pochvalné přívlastky, čísla obchodů bez zdroje a formulace o oprávnění k činnosti. U osobních údajů a oprávnění si postup ověřte u právníka.',

  writeTitle: 'Jak napsat krátký popis makléře?',
  writeAnswer: 'Krátký popis makléře má říct, kdo to je, v čem pomáhá a jak se s ním spojit. Pište prostě, bez pochvalných přívlastků a bez čísel, která nelze doložit. Hotový text i údaje schvaluje makléř a případně právník. Popis vždy podepište skutečným jménem a doplňte datum poslední kontroly.',
  writeSteps: [
    'Domluvte s makléřem, co o něm smí být na webu.',
    'Vyberte údaje: jméno, roli, oblast práce a způsob kontaktu.',
    'Napište krátký popis bez pochvalných přívlastků a bez nedoložených čísel.',
    'Nechte text a údaje schválit makléřem a případně právníkem.',
    'Přidejte datum poslední kontroly a ověřte, že kontakty odpovídají profilům a katalogům.',
  ],

  signTitle: 'Kdo na webu podepisuje a kontroluje texty?',
  signAnswer: 'Pod odborným textem může být uvedeno, kdo ho napsal nebo zkontroloval, například formou „Autor“ a „Text zkontroloval“. Údaj musí být pravdivý: jméno uvádějte jen u textů, které makléř skutečně napsal nebo prošel. Vymyšlené autory a profily nepoužívejte, Google je označuje za klam.',
  signSource: 'Google Search Central, Creating helpful, reliable, people-first content (viz výše), zkontrolováno 11. 11. 2026.',
  signFaq: { before: 'O tom, kdo', link: 'schvaluje odpovědi ve FAQ', after: ', píši zvlášť.' },

  pageTitle: 'Má mít každý makléř vlastní stránku?',
  pageAnswer: 'Ne nutně. U menší kanceláře může stačit jeden blok „Náš tým“ s krátkým popisem každého makléře. Vlastní stránka dává smysl tam, kde makléř vede vlastní nabídky nebo samostatnou oblast a je o čem psát. Stránky, které se liší jen jménem a fotografií, čtenáři nepomáhají.',
  pageServices: { before: 'Jak psát stránky služeb, rozebírám v', link: 'článku o popisu služeb', after: '.' },

  seenTitle: 'Co jsem viděl u webů realitních kanceláří?',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Má mít makléř na webu fotografii?', a: 'Fotografie makléře patří na web jen s jeho souhlasem. Zda ji uvést, je rozhodnutí kanceláře. Může pomoci návštěvníkovi poznat, s kým bude jednat, ale není nutná. Formulaci souhlasu a pravidla zveřejnění ověřte u právníka, protože tento článek právní radu nedává.' },
    { q: 'Mají být u makléře telefon a e-mail?', a: 'Uveďte jen ty kontakty, které makléř sám povolil. Mají odpovídat údajům v profilech na mapách a v katalozích, aby návštěvník nenarazil na různá čísla. Pokud makléř svůj kontakt zveřejnit nechce, použijte společný kontakt kanceláře. Podmínky zveřejnění osobních údajů ověřte u právníka.' },
    { q: 'Mají být u makléře recenze nebo čísla obchodů?', a: 'Recenze ani hodnocení nevymýšlejte a nepoužívejte je jako důkaz kvality. Čísla obchodů nebo klientů uvádějte jen tehdy, když máte zdroj, který dokážete ukázat. Bez zdroje je vynechte. Zda hodnocení na webu zveřejnit, je rozhodnutí kanceláře, které má schválit makléř nebo vedení.' },
    { q: 'Co dělat, když makléř z kanceláře odejde?', a: 'Stránku nebo blok o makléři aktualizujte nebo odstraňte, aby web neukazoval zastaralé údaje. Zkontrolujte také podpisy u textů, kontakty a nabídky, které na něj odkazují. Jak naložit s jeho osobními údaji a s texty, které napsal, ověřte u právníka, protože tento článek právní radu nedává.' },
  ] as { q: string; a: string }[],

  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  expertNote: 'Katariina Kofanova za konzultaci nedostala odměnu a nespolupracuje se mnou na komerčním základě.',
  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Řešíte, jak ukázat makléře na webu své realitní kanceláře?',
  endText: 'Pokud chcete s obsahem webu poradit, podívejte se na stránku pro vaše město.',
  endPraha: 'SEO pro realitní kanceláře v Praze',
  endBrno: 'SEO pro realitní kanceláře v Brně',

  schema: {
    about: ['makléři na webu realitní kanceláře', 'stránka makléře', 'tým realitní kanceláře na webu', 'autor textů na webu kanceláře'],
  },
};

export const POST_MAKLERI_REALTY_CS = walk(raw);
