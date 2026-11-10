// Czech content of the blog article /blog/stranky-sluzeb-realitni-kancelare/ (brief of 10.11.2026, block "Realitní kanceláře"): what to write on the page of a service of a real-estate agency. DRAFT: not linked from anywhere.
// Own text and structure (K9): it does not copy the articles about the FAQ, about missing enquiries or about the dental FAQ. The services prodej / koupě / pronájem / odhad appear only as examples of the reader's
// services ("například"), never as services of the author; no "správa", no "hypotéky". The observation (07.11.2026: Praha 12 sites, Brno 11 sites, a clear short answer on a service page missing everywhere) is the one of
// the article /blog/slabe-seo-konkurence-realitni-kancelare/; no search conditions for Praha, no site names, no new numbers (Q6). The doorway-abuse statement has its Google source with Last updated and the date of
// the check; nothing is claimed about AI Overviews / AI Mode. The expert lines stay hidden until the author gives the command (EXPERT_CONFIRMED). The author's quote (rule J) is a plain blockquote without Quotation markup.
import { walk } from '../lib/cs-typo';

// Date of publication: the author sets it by hand on the day the article goes out (Q1); the day of the brief is only a placeholder. Do NOT bump it when the page is edited.
export const POST_SERVICES_REALTY_PUBLISHED = '2026-11-10';
// Visible only after the author writes "Katariina viděla finální text a souhlasí" (and confirms her participation in this article, Q3).
export const EXPERT_CONFIRMED_SERVICES = false;
// The link to the FAQ article (H2-4) is shown once that article is published; the author approved its publication links on 10.11.2026.
export const FAQ_ARTICLE_PUBLISHED = true;

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/stranky-sluzeb-realitni-kancelare.webp', width: 1200, height: 630, alt: 'Ilustrace: stránka služby realitní kanceláře s částmi pro koho, co zahrnuje a jak probíhá' },
  reviewer: { before: 'Obsah konzultovala a věcně zkontrolovala', name: 'Katariina Kofanova', href: 'https://katariinaestates.cz/', after: ', realitní makléřka.' },

  lead: 'Článek je o tom, co napsat na stránku služby realitní kanceláře, aby klient pochopil, co kancelář dělá. Neřeším ceny, provize ani právní otázky.',

  startTitle: 'Co má stránka služby realitní kanceláře říct hned na začátku?',
  startAnswer: 'Stránka služby má hned na začátku říct, pro koho je a v jaké situaci pomáhá, například při prodeji bytu nebo při hledání pronájmu. Návštěvník tak rychle pozná, že je na správném místě. Úvod napište jazykem klienta, ne jazykem kanceláře, a vyhněte se sloganům.',

  contentTitle: 'Jak popsat, co služba zahrnuje a jak probíhá?',
  contentAnswer: 'Napište, co kancelář pro klienta udělá, a potom, jak spolupráce probíhá krok za krokem. Kroky mají odpovídat skutečnému postupu kanceláře, ne obecné šabloně. Obecný popis bez konkrétního postupu čtenáři nepomůže. Termíny, ceny a smluvní podmínky na stránce uvádějte jen tehdy, když je schválí makléř, případně právník. Jde o moje doporučení, ne o pravidlo trhu.',
  quote: 'Stránka služby se nepíše pro vyhledávač, ale pro klienta, který se rozhoduje, komu zavolá.',

  differTitle: 'Jak psát prodej, koupi, pronájem a odhad, aby se stránky nelišily jen názvem?',
  differAnswer: 'Každá služba má mít vlastní obsah: jinou situaci klienta, jiný postup, jiné otázky. Pokud se stránky prodeje, koupě, pronájmu a odhadu liší jen názvem služby, jsou šablonové a čtenáři nepomáhají. Nejdřív zjistěte, co se u dané služby skutečně liší, a teprve to popište.',
  differTemplate: { before: 'Jak vypadají', link: 'šablonové stránky', after: ' a proč nepomáhají, popisuji v článku o stránkách čtvrtí.' },
  differGoogle: 'Google v pravidlech proti spamu označuje jako doorway abuse stránky vytvořené tak, aby se umístily na konkrétní podobné dotazy.',
  sourceLabel: 'Zdroj:',
  differSource: { before: 'Google Search Central, Spam policies (doorway abuse),', href: 'https://developers.google.com/search/docs/essentials/spam-policies', after: ', Last updated 2026-08-28, zkontrolováno 10. 11. 2026.' },

  answersTitle: 'Jaké krátké odpovědi patří na stránku služby?',
  answersAnswer: 'Na stránku služby patří krátké odpovědi na otázky, které klient řeší před spoluprací: jak služba probíhá, co je potřeba připravit, kdo se klientovi věnuje a jak se kanceláři ozvat. Každá odpověď má mít jednu až tři věty. Odpovědi o smlouvě nebo dokumentech má schválit právník.',
  answersFaq: { before: 'Jak krátké odpovědi psát, popisuje článek', link: 'FAQ na webu realitní kanceláře', after: '.' },

  promiseTitle: 'Co na stránce služby neslibovat a co nechat ověřit makléřem nebo právníkem?',
  promiseAnswer: 'Na stránce neslibujte výsledek, rychlost prodeje ani konkrétní částky bez schválení kanceláře. Texty o provizi, smlouvě, daních a dokumentech má před zveřejněním zkontrolovat makléř, případně právník. Já jako SEO specialista tyto části neposuzuji. Bezpečnější je uvést méně informací než informaci, která může klienta uvést v omyl.',

  stepsTitle: 'Jak stránku služby postavit krok za krokem?',
  stepsAnswer: 'Stránku služby lze postavit v několika krocích: vybrat situaci klienta, popsat obsah a postup služby, doplnit krátké odpovědi, nechat text schválit a přidat kontakt s odkazy na související stránky. Pořadí není pravidlo, ale praktická pomůcka. Každou službu napište zvlášť, nikdy jednu stránku pro všechny.',
  steps: [
    'Vyberte situaci klienta, pro kterou služba je.',
    'Popište, co služba zahrnuje a jak probíhá.',
    'Doplňte krátké odpovědi na otázky klientů.',
    'Nechte text schválit makléřem, případně právníkem.',
    'Přidejte kontakt a odkazy na související stránky.',
  ],

  seenTitle: 'Co jsem viděl u webů realitních kanceláří?',
  seenAnswer: { before: 'K 7. 11. 2026 jsem si prohlédl 12 webů realitních kanceláří z výsledků pro dotaz „realitní kancelář v Praze“ a 11 webů pro dotaz „realitní kancelář v Brně“. U všech dvanácti v Praze i u všech jedenácti v Brně jsem na stránkách služeb nenašel jasnou krátkou odpověď na otázku klienta. Je to', link: 'můj pozorovací vzorek', after: ', ne průzkum trhu.' },
  seenMore: 'Praha a Brno jsou dva samostatné vzorky s různým dotazem. Jasná krátká odpověď je moje kritérium, ne měření. Názvy webů neuvádím.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Má mít každá služba vlastní stránku?', a: 'Doporučuji to, pokud se služba liší postupem nebo situací klienta. Vlastní stránka dá službě jasnější obsah a vlastní adresu. Neznamená to ale vytvářet stránky, které se liší jen názvem. Důvody a postup, když jsou všechny služby na jedné stránce, popisuji v {proc}.', links: { proc: { text: 'samostatném článku', href: 'https://seo-eranosian.com/blog/proc-web-realitni-kancelare-neprinasi-poptavky/#sluzby' } } },
    { q: 'Kolik informací má stránka služby obsahovat?', a: 'Pevné číslo neexistuje, záleží na službě a na tom, co klient potřebuje vědět před prvním kontaktem. Začněte situací klienta, obsahem služby a postupem, další informace přidávejte podle otázek, které kancelář opakovaně slyší. Pište jen to, co je přesné a co schválila kancelář.' },
    { q: 'Má mít stránka služby viditelný kontakt?', a: 'Ano, kontakt má být na stránce služby vidět, aby klient nemusel hledat, jak se ozvat. Stačí telefon, e-mail nebo krátký formulář podle toho, co kancelář zvládne vyřizovat. Důležité je, aby údaje byly stejné jako v profilech na mapách a v katalozích.' },
    { q: 'Mám na stránce služby uvádět cenu?', a: 'To je rozhodnutí kanceláře. Ceny a provize jsou obchodní a smluvní téma, proto jejich zveřejnění a formulaci má schválit makléř, případně právník. V článku konkrétní částky ani provize neuvádím. Pokud cenu neuvedete, napište aspoň, jak se klient o podmínkách dozví.' },
  ] as { q: string; a: string; links?: Record<string, { text: string; href: string }> }[],

  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  expertNote: 'Katariina Kofanova za konzultaci nedostala odměnu a nespolupracuje se mnou na komerčním základě.',
  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Řešíte, jak popsat služby na webu své realitní kanceláře?',
  endText: 'Pokud chcete s popisem služeb poradit, podívejte se na stránku pro vaše město.',
  endPraha: 'SEO pro realitní kanceláře v Praze',
  endBrno: 'SEO pro realitní kanceláře v Brně',

  schema: {
    about: ['stránka služby realitní kanceláře', 'popis služeb na webu realitní kanceláře', 'co napsat na web realitní kanceláře', 'FAQPage'],
  },
};

export const POST_SERVICES_REALTY_CS = walk(raw);
