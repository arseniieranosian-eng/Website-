// Czech content of the blog article /blog/faq-na-webu-realitni-kancelare/ (brief of 10.11.2026, block "Realitní kanceláře"): how the FAQ on a real-estate agency website should look. DRAFT: not linked from anywhere.
// Own text and structure (K9): it does not copy the article about the FAQ of a dental practice. The observation (07.11.2026: Praha 12 sites, FAQ missing 12, short answer missing 12; Brno 11 sites, FAQ missing 11,
// short answer missing 11) is the one of the article /blog/slabe-seo-konkurence-realitni-kancelare/ (the blog figure of that article is not repeated: only FAQ and the short answer); no search conditions for Praha, no site names.
// Statements about Google and Seznam have a visible source with the date of the check (10. 11. 2026). Nothing is claimed about AI Overviews / AI Mode. The expert lines are hidden until the author confirms
// that Katariina Kofanova has seen the final text (EXPERT_CONFIRMED). The author's quote (rule J) is a plain blockquote without Quotation markup.
import { walk } from '../lib/cs-typo';

// First publication (Q1 default: the day of the brief); do NOT bump it when the page is edited.
export const POST_FAQ_REALTY_PUBLISHED = '2026-11-10';
// Visible only after the author writes that Katariina has seen the final text and agrees with the wording of H2-2, H2-3 and H2-5 (brief of 10.11.2026).
export const EXPERT_CONFIRMED = false;

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/faq-na-webu-realitni-kancelare.webp', width: 1200, height: 630, alt: 'Ilustrace: otázka klienta a odpověď makléře jako základ FAQ na webu realitní kanceláře' },
  reviewer: { before: 'Obsah konzultovala a věcně zkontrolovala', name: 'Katariina Kofanova', href: 'https://katariinaestates.cz/', after: ', realitní makléřka.' },

  lead: 'Článek je o tom, jak FAQ na webu realitní kanceláře sestavit tak, aby pomáhalo čtenáři. Neřeším ceny, provize ani právní otázky.',

  whatTitle: 'Co je FAQ na webu realitní kanceláře a komu slouží?',
  whatAnswer: 'FAQ je část webu, kde realitní kancelář krátce odpovídá na otázky, které klient řeší dřív, než zavolá nebo napíše. Slouží zájemci, který hledá rychlou odpověď, a kanceláři, protože se na stejné věci nemusí ptát opakovaně. FAQ nemá být reklama ani výčet všeho, co kancelář dělá.',

  whichTitle: 'Jaké otázky do FAQ realitní kanceláře patří?',
  whichAnswer: 'Do FAQ patří otázky, které klienti opravdu kladou před spoluprací: jak spolupráce probíhá, s čím kancelář pomáhá, ve kterých lokalitách pracuje, jak probíhá odhad nemovitosti a prohlídka a jak se s ní spojit. Odpověď má popsat postup. Ceny, provize a smluvní podmínky v tomto článku neřeším. Jde o moje doporučení, ne o pravidlo trhu.',
  quote: 'Otázky do FAQ nevymýšlím u stolu: beru je z toho, na co se klienti opravdu ptají.',

  approveTitle: 'Kdo má odpovědi ve FAQ schvalovat?',
  approveAnswer: 'Odpovědi ve FAQ má schvalovat makléř, který za kancelář odpovídá. Pokud se odpověď týká smlouvy, provize, daní nebo dokumentů, má ji zkontrolovat právník nebo jiný odborník. Já jako SEO specialista pomáhám se strukturou a formulací; odbornou správnost odpovědí neposuzuji a nenahrazuji právní radu.',

  writeTitle: 'Jak napsat krátkou odpověď?',
  writeAnswer: 'Krátká odpověď začíná přímou větou, která odpovídá na položenou otázku, a pokračuje jednou až třemi větami s upřesněním. Podle mého doporučení stačí 40 až 60 slov. Vyhněte se slibům výsledku a odkazům místo odpovědi. Hotový text projde schválením makléře, případně právníka.',
  writeSteps: [
    'Vyberte otázku, kterou klienti skutečně kladou (z e-mailů, telefonátů nebo prohlídek).',
    'Odpovězte v první větě přímo.',
    'Doplňte jednu až tři věty s upřesněním.',
    'Nechte odpověď schválit makléřem, případně právníkem.',
  ],

  whereTitle: 'Kam FAQ na webu umístit?',
  whereAnswer: 'Krátké FAQ patří přímo na stránku služby nebo lokality, kde otázka vzniká, aby návštěvník nemusel hledat jinde. Obecné otázky o spolupráci se hodí na jednu společnou stránku. Stejnou otázku s odpovědí neopakujte na více stránkách, jinak se odpovědi časem rozejdou.',
  whereLinks: { before: 'Jak rozdělit', services: 'stránky služeb', middle: 'a jak napsat', district: 'stránku čtvrti', after: ', popisují samostatné články.' },

  seenTitle: 'Co jsem viděl u webů realitních kanceláří?',
  seenAnswer: { before: 'K 7. 11. 2026 jsem si prohlédl 12 webů realitních kanceláří z výsledků pro dotaz „realitní kancelář v Praze“ a 11 webů pro dotaz „realitní kancelář v Brně“. FAQ chybělo u všech dvanácti v Praze i u všech jedenácti v Brně. Jasnou krátkou odpověď na stránce služby jsem nenašel ani u jednoho. Je to', link: 'můj pozorovací vzorek', after: ', ne průzkum trhu.' },
  seenMore: 'Praha a Brno jsou dva samostatné vzorky s různým dotazem. Jasná krátká odpověď je moje kritérium, ne měření. Názvy webů neuvádím.',

  notTitle: 'Co do FAQ realitní kanceláře nepatří?',
  notAnswer: 'Do FAQ nepatří reklamní slogany, slíbené výsledky, ceny a provize bez schválení, právní rady ani odpovědi, které jen odkazují jinam. FAQ má odpovídat na otázku čtenáře. Pokud kancelář nemůže odpověď bezpečně uvést, je lepší otázku vynechat než odpovídat vágně. Neúplná odpověď čtenáři nepomůže.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Má mít každá stránka služby vlastní FAQ?', a: 'Ne nutně. Vlastní FAQ má smysl tam, kde se klienti opakovaně ptají na stejné věci a odpověď souvisí s danou službou nebo lokalitou. Stačí krátký blok s několika otázkami. Otázky, které se týkají celé kanceláře, patří na jednu společnou stránku, aby se neopakovaly.' },
    { q: 'Kolik otázek má FAQ mít?', a: 'Pevné číslo neexistuje, záleží na tom, na co se klienti opravdu ptají. Lepší je několik otázek s jasnými odpověďmi než dlouhý seznam, který nikdo nedočte. Začněte těmi, které slyšíte nejčastěji, a další přidávejte podle zájmu. Počet nevolte kvůli vyhledávačům, ale kvůli čtenáři.' },
    { q: 'Má smysl značit FAQ pomocí FAQPage?', a: 'Pro Google ne: rozšířené výsledky FAQ už nezobrazuje. Seznam ve své nápovědě FAQ snippety ze značení FAQPage popisuje, zobrazení ale nezaručuje. Pokud značení použijete, musí odpovídat viditelným otázkám a odpovědím. Zdroje: {google}, {seznam}, zkontrolováno 10. 11. 2026.', links: { google: { text: 'Google Search Central', href: 'https://developers.google.com/search/updates' }, seznam: { text: 'Seznam nápověda', href: 'https://o-seznam.cz/napoveda/vyhledavani/strukturovana-data/snippety-k-faq-strankam/' } } },
    { q: 'Kdo má FAQ aktualizovat?', a: 'Aktualizaci má hlídat osoba, která za web odpovídá, nejlépe makléř nebo vedoucí kanceláře. Odpovědi je třeba projít, když se změní služby, lokality nebo postup spolupráce. Datum poslední kontroly lze uvést přímo na stránce. Zastaralá odpověď může klienta zmást, proto se vyplatí kontrolu naplánovat.' },
  ] as { q: string; a: string; links?: Record<string, { text: string; href: string }> }[],

  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  expertNote: 'Katariina Kofanova za konzultaci nedostala odměnu a nespolupracuje se mnou na komerčním základě.',
  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Řešíte FAQ na webu své realitní kanceláře?',
  endText: 'Pokud chcete s FAQ na webu poradit, podívejte se na stránku pro vaše město.',
  endPraha: 'SEO pro realitní kanceláře v Praze',
  endBrno: 'SEO pro realitní kanceláře v Brně',

  schema: {
    about: ['FAQ na webu realitní kanceláře', 'časté dotazy web realitní kanceláře', 'co dát na web realitní kanceláře', 'FAQPage'],
  },
};

export const POST_FAQ_REALTY_CS = walk(raw);
