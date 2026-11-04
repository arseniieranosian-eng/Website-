// Czech content of the blog article /blog/duplicitni-stranky-eshop-tisk-varianty/ (brief A2 of 04.11.2026): duplicate pages in an e-shop with printed products.
// Informational. Decisions from the author's standing rules, which override the brief: no guarantee phrases (the last CTA sentence "Výsledek ani pozici nezaručuji" and
// "Neslibuji, že…" in f3 are not written; the sentences that Google's canonical is a hint "nezaručuje" are about canonical, not a promise of results).
// K4: the three Google sources are visible lines WITHOUT the "zkontrolováno [datum]" part: the Google pages could not be opened from the build environment (S3/S4 open),
// so no check date is stated; S4 (the Search Console report name in H2-5) is also unverified; D1 (own observation) is NOT inserted (no data, Q2); K8 (AI line) waits for the author.
// The print-shop case and its figures are not used (S2). No platform names. One link in the body: the general article on duplicates (blog → blog); the closing block has ONE button.
import { walk } from '../lib/cs-typo';

// First publication of this address (open question Q4: the day of publication); do NOT bump it when the page is edited.
export const POST_DUP_ESHOP_PUBLISHED = '2026-11-04';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/duplicitni-stranky-eshop-tisk-varianty.webp', width: 1200, height: 630, alt: 'Ilustrace: jeden produkt e-shopu s tiskem s mnoha variantami formátu, gramáže a nákladu, ze kterého vzniká spousta podobných stránek' },

  lead: 'Článek vysvětluje, proč v e-shopu s tiskem vznikají velmi podobné stránky a kdy je dobré je řešit.',
  leadLink: { before: 'Obecné vysvětlení duplicit najdete v ', text: 'samostatném článku', after: '.' },

  originTitle: 'Jak vznikají duplicitní stránky v e-shopu s tiskem?',
  originAnswer: 'V e-shopu s tiskem vzniká mnoho kombinací: formát, materiál, náklad, povrchová úprava. Pokud každá kombinace dostane vlastní adresu a text se liší jen názvem, vznikají velmi podobné stránky. Google podle svého popisu hodnotí podobnost obsahu a z podobných stránek vybírá jednu, kterou ukáže.',
  originSource: { text: 'Google Search Central, Consolidating duplicate URLs', href: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls' },
  quote: 'Nová stránka dává smysl jen tehdy, když na ni někdo opravdu hledá a když říká něco jiného než ta vedle.',

  ownTitle: 'Které kombinace mají mít vlastní stránku a které ne?',
  ownAnswer: 'Vlastní stránku má smysl dělat tam, kde lidé tu kombinaci opravdu hledají a kde máte co říct jinak, například jiné použití nebo parametry. Ostatní varianty patří na jednu stránku produktu jako volba. Je to moje doporučení pro e-shop s tiskem, ne pravidlo Google.',

  filtersTitle: 'Co dělat s filtry v e-shopu?',
  filtersAnswer: 'Filtry mohou vytvořit velmi mnoho adres. Google ve svém popisu uvádí, že pokud procházení tráví nad zbytečnými adresami, zbývá méně času na nové a užitečné stránky. U filtrů je potřeba rozhodnout, které adresy mají být indexovatelné. Změny nechte připravit s vývojářem.',
  filtersSource: { text: 'Google Search Central, Managing faceted navigation', href: 'https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation' },

  canonTitle: 'Co je kanonická URL a co nezaručuje?',
  canonAnswer: 'Kanonická URL je podle Google adresa, kterou Google vybral jako nejreprezentativnější z množiny duplicitních stránek. Vaše označení canonical je jen nápověda, ne příkaz. Proto samotný canonical nezaručuje, že Google vybere právě vaši adresu. Je to jedna z věcí, které se ověřují.',
  canonSource: { text: 'Google Search Central, What is URL canonicalization', href: 'https://developers.google.com/search/docs/crawling-indexing/canonicalization' },

  checkTitle: 'Jak poznat, že e-shop duplicity má?',
  checkAnswer: 'Podívejte se do Search Console na přehled indexování stránek a na stránky, které Google nezařadil, a porovnejte několik adres produktů, které se liší jen variantou. Pokud vidíte mnoho velmi podobných adres, je to důvod ke kontrole. Je to orientační postup, ne diagnóza.',

  sourceLabel: 'Zdroj:',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Škodí duplicitní stránky e-shopu?', a: 'Stránka Google o konsolidaci duplicit pokuty nezmiňuje. Popisuje, že Google vybírá kanonickou verzi a že duplicity mohou zbytečně spotřebovávat čas procházení. Jak velký dopad mají na váš e-shop, nelze obecně říct. Proto je dobré duplicity nejdřív zjistit a teprve potom rozhodnout.' },
    { q: 'Stačí canonical k vyřešení duplicit?', a: 'Samotný canonical nestačí, protože podle Google jde o nápovědu, ne o pravidlo. Důležité je také, aby se podobné stránky nevytvářely zbytečně a aby si adresy neodporovaly. Správné nastavení záleží na platformě e-shopu, proto ho připravte s vývojářem, nezkoušejte ho naslepo.' },
    { q: 'Je konfigurátor tisku problém pro SEO?', a: 'Konfigurátor sám problém být nemusí. Záleží na tom, jaké adresy při výběru vznikají a zda jsou přístupné vyhledávačům. Obecně se to říct nedá. Dá se to zjistit prohlídkou adres konkrétního e-shopu a rozhodnout, které z nich mají být indexovatelné.' },
    { q: 'Kdo má duplicity v e-shopu opravit?', a: 'Změnu nastavení obvykle provádí vývojář nebo správce e-shopu. SEO specialista pomůže zjistit, kde duplicity vznikají, a navrhnout, které stránky nechat samostatné. Do nastavení platformy vždy zasahuje někdo, kdo ji zná, aby se neznefunkčnil nákupní proces. Samotný audit duplicit nic neopraví, jen ukáže, kde je problém.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  endTitle: 'Máte e-shop s tiskem?',
  endText: 'Podívejte se, jak SEO pro tiskárny a polygrafii dělám. Součástí bezplatného technického auditu jsou i duplicitní stránky a obsah.',
  endCta: 'Podívat se na SEO pro tiskárny',
};

export const POST_DUP_ESHOP_CS = walk(raw);
