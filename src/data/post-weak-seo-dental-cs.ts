// Czech content of the blog article /blog/slabe-seo-konkurence-zubni-ordinace/ (brief B1 of 04.11.2026): why even dental practices with weak SEO stand in front in the results.
// Informational, YMYL niche: no medical, legal or price statements, nothing about reviews (no conclusion about their effect, no advice), no names. The observation (31. 10. 2026,
// 14 sites, query "stomatologie v Praze", organic results) is the same as on the niche page (S1: to be confirmed by the author). Decisions from the author's standing rules, which override
// the brief: no guarantee phrases (the sentences "Výsledek ani pozici nezaručuji" in H2-4 and in the closing block are not written, FAQ f4 "Stačí k prvnímu místu dobré SEO?" is not written,
// f3 has no "neslibuji"). K4: the Google source is a visible line WITHOUT "zkontrolováno [datum]": the Google page could not be opened (S2 open). K8 waits for the author.
// The author's quote (rule J) is a plain blockquote after H2-2, no Quotation markup. No links in the body except that one source; the closing block has ONE button.
import { walk } from '../lib/cs-typo';

// First publication of this address (Q3 default: the day of publication); do NOT bump it when the page is edited.
export const POST_WEAK_SEO_DENTAL_PUBLISHED = '2026-11-04';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/slabe-seo-konkurence-zubni-ordinace.webp', width: 1200, height: 630, alt: 'Ilustrace: výsledky vyhledávání pro dotaz „stomatologie v Praze“ s webem vpředu, kterému chybí blog a FAQ, a otazník nad příčinou' },

  lead: 'Níže jsou moje pozorování webů zubních ordinací ve výsledcích vyhledávání, hypotéza a to, co z nich nevyplývá.',

  seenTitle: 'Co jsem viděl u prvních výsledků pro „stomatologie v Praze“?',
  seenAnswer: 'K 31. 10. 2026 jsem si prohlédl 14 webů zubních ordinací a klinik z organických výsledků pro dotaz „stomatologie v Praze“. Všechny zobrazují recenze na stránkách, u 11 z 14 chybí blog a u všech 14 je FAQ nedostatečné. U tří jsou služby jen na jedné stránce a žádný nemá strukturovaná data.',
  seenMore: 'FAQ považuji za nedostatečné, když chybí u stránek služeb nebo když není samostatná stránka s odpověďmi. Je to můj pozorovací vzorek, ne průzkum trhu. Názvy webů neuvádím.',

  whatTitle: 'Co z toho plyne a co ne?',
  whatAnswer: 'V mém vzorku platilo, že weby s těmito nedostatky jsou ve výsledcích vpředu. To nic neříká o příčině. Google používá mnoho signálů a ze čtrnácti webů, jednoho dotazu a jednoho dne nelze odvozovat obecné pravidlo. Pro jiný dotaz nebo jiný den to může být jinak.',
  quote: 'Pozorování mi říká, co na webech chybí, ne proč jsou vpředu. Tyto dvě věci nelze zaměňovat.',

  checkTitle: 'Jak si svůj web zkontrolovat sám?',
  checkAnswer: 'Porovnejte svůj web s tím, co jsem sledoval: má každá služba vlastní stránku, jsou u služeb odpovědi na organizační otázky (objednání, platba), existuje blog a je na webu strukturované značení? Je to kontrolní seznam pozorovaných věcí, ne návod na pozici. Otázky léčby tady nerozebírám.',

  whyTitle: 'Proč jsou tyto weby vpředu?',
  whyAnswer: 'Proč jsou tyto weby vpředu, nevím: Google podle své dokumentace používá mnoho signálů. Domněnkou je, že mezi zubními ordinacemi zatím není silný konkurent, který by byl dobře čitelný pro vyhledávače i AI. Mým cílem je, aby jím byl váš web.',
  whySource: { text: 'Google Search Central, Ranking systems guide', href: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide' },
  sourceLabel: 'Zdroj:',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Proč je nade mnou konkurence se slabším webem?', a: 'Může to mít více důvodů a z vnějšku je spolehlivě nezjistíte. Google používá mnoho signálů a každý dotaz se může chovat jinak. V mém pozorování byly vpředu weby s viditelnými nedostatky, ale příčinu z toho odvodit nelze. Proto ji neodhaduji.' },
    { q: 'Jak poznám, jak silná je konkurence mé ordinace?', a: 'Zkuste si projít prvních deset výsledků pro dotaz, na který chcete být vidět, a všímejte si, zda mají služby vlastní stránky, FAQ, blog a strukturovaná data. To je hrubé srovnání, ne měření síly. Přesnější obrázek dá samostatná analýza konkurence. Výsledky se mohou lišit podle místa a zařízení.' },
    { q: 'Kdy má smysl začít s SEO?', a: 'Smysl to má, když chcete poptávky z vyhledávání a jste ochotni web průběžně doplňovat. Nejdřív si web projděte a zhodnoťte, co chybí, a rozhodněte se podle toho.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Chcete, aby byl web vaší zubní ordinace srozumitelný pro Google i AI?',
  endText: 'Podívejte se na stránku SEO pro zubní ordinace.',
  endCta: 'SEO pro zubní ordinace v Praze',
};

export const POST_WEAK_SEO_DENTAL_CS = walk(raw);
