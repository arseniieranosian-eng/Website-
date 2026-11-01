// Czech content of the blog article /blog/slabe-seo-konkurence-prekladatelske-agentury/ (brief of 1.11.2026, full version): why a competitor with a weak site can stand in front in the search results.
// Informational: the author's observations (mid-March to mid-September 2026, queries "překlady Praha / Brno / Pardubice", top 10–15) and hypotheses, no proof of a cause, no promise that the competitor is easy to beat.
// Title 51 → shortened to 47 characters for the site-wide limit (≤55) and to carry the main keyword "proč je konkurence před mnou". Defaults taken: the total number of checks is not given, no company size, no names in the text
// or in the caption of the video (the names are visible only inside the video and on its poster: the author's decision [?]7), no VideoObject, one link to the Google documentation (paraphrase, no quotation, the link is not
// marked as verified: the page could not be opened from the build environment). The poster of the video is a neutral card without company names (the original poster of the niche pages shows a company logo and URL). The Pardubice data are given as an observation without a client name and without dates.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_WEAK_SEO_PUBLISHED = '2026-11-01';
export const GOOGLE_RANKING_URL = 'https://developers.google.com/search/docs/appearance/ranking-systems-guide';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/slabe-seo-konkurence-prekladatelske-agentury.webp', width: 1200, height: 630, alt: 'Ilustrace: výsledky vyhledávání, ve kterých stojí vpředu web s několika chybějícími prvky a otazník nad příčinou' },

  lead: 'Konkurence, která stojí ve vyhledávání vpředu, nemusí mít nejlepší web. Tento článek ukazuje, co jsem u výsledků pro překlady pozoroval, a nepředstírá, že znám příčinu.',

  seenTitle: 'Co jsem viděl u prvních výsledků pro překlady?',
  seenAnswer: 'Od poloviny března do poloviny září 2026 jsem přibližně 12× měsíčně kontroloval prvních 10 až 15 výsledků pro dotazy „překlady Praha“, „překlady Brno“ a „překlady Pardubice“. Často se opakovalo totéž: chyběla strukturovaná data i FAQ na stránkách služeb a většina webů neměla blog. Je to můj pozorovací vzorek, ne průzkum trhu.',
  seenMore: 'Blog měly weby na prvních dvou místech. U ostatních výsledků chyběl častěji. Přesné počty nemám, jde o pozorování v průběhu půl roku, ne o měření.',

  videoTitle: 'Jak vypadají weby dvou z těchto agentur?',
  videoAnswer: 'Video na YouTube ukazuje weby dvou překladatelských agentur, které se objevují ve vyhledávání, a co na nich z hlediska SEO vidím. Je to můj osobní rozbor, ne měření ani žebříček. Co z něj plyne, jsou domněnky, ne příčiny. Výsledek pro váš web z něj odvodit nelze.',
  video: { youtube: 'l2-SXybLlss', poster: '/media/slabe-seo-video-poster.webp', width: 1280, height: 652, alt: 'Náhled videa: rozbor webů dvou překladatelských agentur', playLabel: 'Přehrát video: rozbor webů dvou překladatelských agentur', frameTitle: 'Rozbor webů dvou překladatelských agentur', openLabel: 'Otevřít video na YouTube', note: 'Video, 9 minut, natočeno v červnu 2026' },

  whyTitle: 'Proč mohou být vpředu i weby s nedostatky?',
  whyAnswer: 'Google podle své dokumentace používá mnoho faktorů a signálů, takže pozici neurčuje jen to, co je na webu vidět. Proč byl konkrétní web vpředu, nevím. Domněnka: blog na prvních dvou místech může být jedním ze signálů, ale nemohu to prokázat. Silnější signály jinde z výsledků nepoznám.',
  whySource: 'Dokumentace Google o systémech řazení',

  easyTitle: 'Znamená to, že je konkurence snadná?',
  easyAnswer: 'Ne. Že je před vámi web s nedostatky, neznamená, že ho snadno předběhnete, protože nevidím všechny signály, které Google používá. V Pardubicích si majitel agentury myslel, že konkurenci nemá, ale ve vyhledávání byli konkrétní konkurenti včetně velkých hráčů. Silnější signály jinde z výsledků nepoznám.',

  takeTitle: 'Co si z toho má vzít agentura?',
  takeAnswer: 'Porovnejte svůj web s tím, co vidíte u prvních výsledků: adresy URL, stránky služeb, FAQ, blog, strukturovaná data. Rozdíl je podnět ke kontrole, ne důkaz příčiny. Nejde o návod, jak někoho předběhnout. Řešte především to, co na vašem webu skutečně chybí.',
  takeNote: 'Nedokážu prokázat, že konkurence SEO nedělá; soudím z toho, co je na webu vidět, například z adres URL bez popisu.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Proč je nade mnou konkurence se slabším webem?', a: 'Přesnou příčinu neznám a u cizího webu ji ani nezjistím. Google podle dokumentace pracuje s mnoha faktory a signály, takže pozici neurčuje jen vzhled nebo SEO webu. Mohu popsat, co je na webu vidět, ale nevím, jaké signály má konkurence jinde.' },
    { q: 'Je v mém městě menší konkurence než v Praze?', a: 'Záleží. Z mého pozorování nevyplývá, že by v menším městě byla konkurence automaticky menší. V Pardubicích si majitel agentury myslel, že konkurenci nemá, ale ve výsledcích byli konkrétní konkurenti včetně velkých hráčů. Chcete-li znát situaci ve svém městě, podívejte se na výsledky svých dotazů.' },
    { q: 'Jak poznám, jak silná je konkurence?', a: 'Zadejte dotazy, podle kterých vás mají zákazníci hledat, a podívejte se na prvních několik výsledků: jaké mají adresy, stránky služeb, FAQ a blog. Sílu konkurence podle toho jen odhadnete, nezměříte ji. Přesnější obraz dá teprve kontrola vašeho webu a výsledků v delším čase.' },
    { q: 'Kdy má smysl začít s SEO?', a: 'Má smysl, pokud chcete poptávky z vyhledávání, máte jasně popsané služby a jste ochotni web průběžně doplňovat. Pokud se spoléháte jen na doporučení nebo nemáte kapacitu přijímat nové klienty, SEO zatím nemusí být prioritou. Rozhodnout vám pomůže krátká kontrola vašeho webu.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Chcete vědět, co SEO pro překladatelskou agenturu ve vašem městě obnáší?',
  endText: 'Na stránce pro vaše město najdete, co práce zahrnuje a jak začít.',
  ctas: [
    { page: 'nicheTranslation' as const, label: 'Překlady Praha' },
    { page: 'nicheBrno' as const, label: 'Překlady Brno' },
    { page: 'nichePardubice' as const, label: 'Překlady Pardubice' },
  ],
};

export const POST_WEAK_SEO_CS = walk(raw);
