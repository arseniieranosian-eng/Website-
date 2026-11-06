// Czech content of the blog article /blog/faq-na-webu-zubni-ordinace/ (brief B2 of 06.11.2026): how the FAQ on a dental practice website should look.
// Informational, YMYL niche: no medical, legal or price statements, nothing about reviews, before/after or promises, no names of sites, practices or doctors. The observation of 31. 10. 2026
// (14 sites, "stomatologie v Praze") is only about the FAQ here (not the full block D1). The Seznam observation of 06.11.2026 is as in the brief (no site name, no number of questions in the code).
// Decisions from the author's standing rules, which override the brief: no guarantee phrases of the author ("Výsledek ani pozici nezaručuji" is left out of FAQ f4 and of the closing block);
// the statements about Seznam and Google ("zobrazení se nezaručuje" is Seznam's own rule, "Google FAQ už nezobrazuje") stay. Source lines: the dates "zkontrolováno 6. 11. 2026" are real (both pages opened on the day of publication, S1; the Google URL now redirects to the changelog entry removing-faq-rich-result);
// K8 waits for the author. The author's quote (rule J) is a plain blockquote after H2-3, no Quotation markup. No body links except the two sources;
// the closing block has ONE button.
import { walk } from '../lib/cs-typo';

// First publication of this address (Q3 default: the day of publication); do NOT bump it when the page is edited.
export const POST_FAQ_DENTAL_PUBLISHED = '2026-11-06';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/faq-na-webu-zubni-ordinace.webp', width: 1200, height: 630, alt: 'Ilustrace: otázka pacienta a odpověď ordinace jako základ FAQ na webu zubní ordinace' },

  lead: 'Článek je o tom, jak FAQ na webu ordinace sestavit tak, aby pomáhalo čtenáři. Neřeším léčbu ani ceny.',

  whatTitle: 'Co je FAQ na webu zubní ordinace a komu slouží?',
  whatAnswer: 'FAQ je část webu s odpověďmi na otázky, které návštěvníky zajímají dřív, než se objednají. U ordinace jde hlavně o organizační věci: objednání, zrušení návštěvy, příchod a kontakt. Slouží pacientům i ordinaci, protože se na stejné věci nemusí ptát telefonem. Odpovědi o léčbě patří lékaři.',

  whichTitle: 'Jaké otázky do FAQ patří?',
  whichAnswer: 'Vybírejte otázky, na které se pacienti ordinace opravdu ptají při objednání: jak se objednat, jak návštěvu zrušit, co si vzít s sebou, kde je ordinace a jak se k ní dostat. Nepište o léčbě, cenách ošetření ani pojišťovnách, pokud to neschválí lékař ordinace. Je to moje doporučení, ne pravidlo.',

  whereTitle: 'Kam FAQ na webu umístit?',
  whereAnswer: 'Krátké FAQ dejte přímo ke službě, kde otázku řeší, a obecné otázky na samostatnou stránku. U jedné stránky služby stačí několik otázek, ne dlouhý seznam. Důležité je, aby otázky odpovídaly tomu, co je na stránce vidět, a nepřidávaly se jen pro počet. Je to moje doporučení.',
  quote: 'FAQ má odpovídat na to, na co se pacient zeptá dřív, než zavolá, ne na všechno, co ordinace umí.',

  seenTitle: 'Co jsem viděl u webů zubních ordinací?',
  seenAnswer: 'K 31. 10. 2026 jsem si prohlédl 14 webů zubních ordinací a klinik z organických výsledků pro dotaz „stomatologie v Praze“. U všech 14 bylo FAQ nedostatečné: u stránek služeb chybělo, nebo nebyla samostatná stránka s odpověďmi. Je to můj pozorovací vzorek, ne průzkum trhu. Názvy webů neuvádím.',

  markupTitle: 'Má smysl značení FAQPage?',
  markupAnswer: 'Pro Google dnes ne: rozšířené výsledky FAQ už nezobrazuje. Pro Seznam může mít smysl: jeho nápověda popisuje FAQ snippety ze značení FAQPage a na jednom příkladu jsem je viděl. Zobrazení se nezaručuje a FAQ sloužící jako reklama se na výdeji nemusí objevit. Značení doplňuje užitečné FAQ, nenahrazuje ho.',
  sourceLabel: 'Zdroj:',
  sources: [
    { before: 'Google Search Central, FAQ (FAQPage) structured data,', href: 'https://developers.google.com/search/docs/appearance/structured-data/faqpage', after: ', zkontrolováno 6. 11. 2026.' },
    { before: 'Nápověda Seznam.cz Vyhledávání, Snippety k FAQ stránkám,', href: 'https://o-seznam.cz/napoveda/vyhledavani/strukturovana-data/snippety-k-faq-strankam/', after: ', zkontrolováno 6. 11. 2026.' },
  ],
  obs: 'K 6. 11. 2026 jsem v Seznamu na mobilu zadal dotaz „Jak často bych měl navštěvovat zubaře?“. Na prvním místě se zobrazil článek webu zubní ordinace a pod výsledkem tři rozkliknutelné otázky. Ve zdrojovém kódu stránky je značení FAQPage ve formátu microdata. To odpovídá nápovědě Seznamu, podle které FAQ snippety vznikají ze značení FAQPage. Zobrazení to ale nezaručuje.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Kolik otázek má FAQ mít?', a: 'Pevný počet neexistuje. Otázek má být tolik, na kolik se pacienti skutečně ptají, a každá má mít srozumitelnou odpověď. Příliš dlouhý seznam se hůř čte a hůř udržuje aktuální. Začněte několika nejčastějšími organizačními otázkami a doplňujte je podle toho, co se opakuje.' },
    { q: 'Má mít každá stránka služby vlastní FAQ?', a: 'Nemusí. FAQ u služby má smysl, když se k ní opravdu opakují stejné otázky, jinak stačí obecná stránka. Odpovědi se nemají kopírovat mezi stránkami beze změny, protože pak nepřidávají nic nového. Je to moje doporučení, ne pravidlo Google ani Seznamu.' },
    { q: 'Kdo má odpovědi ve FAQ schvalovat?', a: 'Odpovědi týkající se léčby má schvalovat lékař ordinace, protože za obsah odpovídá ordinace. Organizační odpovědi, například o objednání nebo kontaktu, může připravit správce webu. Já připravuji strukturu a formulace a upozorním na místa, kde je potřeba odborný souhlas. Jde o moji doporučenou praxi, ne o právní pokyn.' },
    { q: 'Zaručí značení FAQPage zobrazení v Seznamu nebo v Googlu?', a: 'Ne. Seznam ve své nápovědě popisuje, že FAQ snippety bere ze značení FAQPage, ale zobrazení nezaručuje a FAQ sloužící jako reklama se na výdeji nemusí objevit. Google rozšířené výsledky FAQ už nezobrazuje. Značení musí odpovídat viditelným otázkám a odpovědím na stránce.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Řešíte FAQ na webu zubní ordinace?',
  endText: 'Podívejte se, jak SEO pro zubní ordinace dělám.',
  endCta: 'SEO pro zubní ordinace v Praze',

  schema: {
    about: ['FAQ na webu zubní ordinace', 'časté dotazy web ordinace', 'co dát na web zubní ordinace', 'FAQPage'],
  },
};

export const POST_FAQ_DENTAL_CS = walk(raw);
