// Czech content of the blog article /blog/jednorazove-seo-nebo-prubezne/ (brief of 23.11.2026, comparative series, article 1): an informational comparison of WAYS OF WORKING (one-time work vs continuous), not of companies.
// Only the author's own formats + "do it yourself" are compared; no contractor, agency, freelancer or service is named; no outside prices; no figures about the market; no promise of a position, enquiries or a term.
// Prices checked on 23.11.2026 against the author's pages /konzultace/ (2 000 Kč per hour, 3 000 Kč with the audit and consultation without a time limit; "Konzultace ... práci neprovádím"), /start-3-mesice/ (50 000 Kč, 25 000 + 25 000 po dohodě,
// work "na webu i na mapách", weekly reports) and /full-seo/ (od 15 000 Kč měsíčně, podle rozsahu práce a oboru). Texts are verbatim from the brief. The body links only to two articles (rule F: no links to the service pages);
// ONE button to /konzultace/ at the end ([?-2]). The comparative wording is to be shown to a lawyer before the series is published ([?-3]). Dates are set by hand ([?-4]).
import { walk } from '../lib/cs-typo';

// Set by hand: the day the author publishes (the day of the brief is the default). Do NOT bump it when the page is edited.
export const POST_ONETIME_PUBLISHED = '2026-11-23';
export const POST_ONETIME_MODIFIED = '2026-11-23';

const K = ' Kč';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/jednorazove-seo-nebo-prubezne.webp', width: 1200, height: 630, alt: 'Ilustrace: jedna úprava webu a průběžná práce v kalendáři' },

  lead: 'Jednorázová úprava řeší konkrétní problém na webu a končí. Průběžné SEO je práce na webu po delší dobu. Tady je přehled, pro koho se hodí která varianta, co obsahuje, kolik orientačně stojí a jaká má omezení. Žádná varianta nezaručuje pozici ani počet poptávek.',

  diffTitle: 'Co je jednorázová úprava a co průběžné SEO?',
  diffAnswer: 'Jednorázová úprava je omezený zásah: audit, konzultace nebo oprava konkrétních chyb, po kterém práce končí. Průběžné SEO je práce na webu po delší dobu, třeba tři měsíce nebo rok. Rozdělení je moje pracovní, ne oficiální definice. V praxi se obě varianty často kombinují.',

  onceTitle: 'Pro koho se hodí jednorázová úprava?',
  onceAnswer: 'Hodí se, když víte, co chcete řešit, a máte někoho, kdo úpravy provede. Například při kontrole před redesignem, u jedné technické chyby nebo když potřebujete druhý názor. Jednorázový zásah neřeší práci, která se musí opakovat, třeba nový obsah nebo měření.',
  onceList: [
    'jedna konkrétní otázka nebo chyba,',
    'úpravy provede váš tým nebo vývojář,',
    'kontrola před změnou webu,',
    'druhý názor.',
  ],

  ongoingTitle: 'Pro koho se hodí průběžné SEO?',
  ongoingAnswer: 'Hodí se, když web potřebuje víc než jednu opravu: nové stránky, úpravy textů, práci s mapami a profily a pravidelné měření. Dává smysl tam, kde je poptávka z Googlu pro podnikání důležitá. Výsledky nejsou zaručené a obvykle se neobjeví hned.',
  ongoingList: [
    'web potřebuje víc úprav,',
    'obsah a profily se mají průběžně udržovat,',
    'poptávka z vyhledávání je pro podnikání důležitá,',
    'je někdo, kdo úpravy schválí.',
  ],

  priceTitle: 'Kolik která varianta orientačně stojí?',
  priceAnswer: `Orientační ceny uvádím podle svých stránek služeb k 23. 11. 2026: konzultace 2 000${K} za hodinu, s auditem webu 3 000${K}, SEO start na tři měsíce 50 000${K} a Full SEO na rok od 15 000${K} měsíčně. Konečná cena závisí na oboru a rozsahu webu.`,
  tableHead: ['Varianta', 'Pro koho je vhodná', 'Orientační cena', 'Výhody', 'Omezení'],
  tableRows: [
    ['Úpravy vlastními silami', 'Kdo má čas a základní znalosti webu', 'Bez nákladů na službu, počítá se váš čas', 'Plná kontrola nad změnami', 'Chybí druhý pohled a práce zabere čas'],
    ['Konzultace nebo audit', 'Kdo potřebuje odpovědi nebo přehled stavu webu', `2 000${K} za hodinu; 3 000${K} s auditem webu`, 'Rychlé, jasný výstup, bez dlouhé spolupráce', 'Úpravy za vás neprovádím, takže se tím neprovedou'],
    ['SEO start (3 měsíce)', 'Kdo chce začít se základem webu a profilů', `50 000${K} (25 000${K} na začátku, 25 000${K} po dohodě)`, 'Práce na webu i na mapách, týdenní reporty', 'Tři měsíce nemusí stačit na všechny úpravy; výsledek se nezaručuje'],
    ['Full SEO (rok)', 'Kdo potřebuje systematickou práci po delší dobu', `Od 15 000${K} měsíčně, podle oboru a rozsahu webu`, 'Práce na webu po celý rok', 'Delší závazek a vyšší měsíční náklad; výsledek se nezaručuje'],
  ],
  tableNote: 'Ceny jsou orientační podle mých stránek služeb, zkontrolováno 23. 11. 2026. U některých oborů je minimum Full SEO vyšší. Tabulka nehodnotí práci jiných dodavatelů.',
  quote: 'Jednorázová úprava a průběžné SEO nejsou soupeři. Liší se tím, jak dlouho trvá práce, kterou web potřebuje.',

  decideTitle: 'Jak se mezi variantami rozhodnout?',
  decideAnswer: 'Nejdřív určete, co má web přinést, například poptávky nebo telefonáty, ne pozici. Pak zjistěte stav webu a rozdělte úpravy na ty, které stačí udělat jednou, a ty, které se opakují. Podle toho zvolte délku spolupráce a rozhodnutí ověřte po prvních výsledcích.',
  decideSteps: [
    { text: 'Určete cíl webu: poptávky, telefonáty nebo objednávky, ne pozici v Googlu.' },
    { before: 'Zjistěte stav webu, například auditem nebo konzultací (', link: 'co si vybrat jako první krok', key: 'postChoose' as const, after: ').' },
    { text: 'Rozdělte úpravy na jednorázové (technické chyby, struktura stránek) a opakované (nový obsah, profily v mapách, měření). Rozdělení je moje doporučení.' },
    { before: 'Zvolte délku spolupráce podle rozsahu úprav; k plánu na rok viz ', link: 'SEO plán na 12 měsíců', key: 'postSeoPlan' as const, after: '.' },
    { text: 'Po prvních výsledcích rozhodnutí ověřte a případně změňte variantu.' },
  ],
  decideNote: 'Žádný z kroků nezaručuje výsledek ani pozici.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Je SEO jednorázová záležitost?', a: 'Ne vždy, ale část práce je jednorázová. Opravy technických chyb nebo úprava struktury webu se dají udělat jednou. Nový obsah, aktualizace, práce s profily v mapách a měření se opakují. Podle mých zkušeností proto SEO bývá kombinací jednorázových úprav a průběžné práce.' },
    { q: 'Kdy stačí jedna konzultace nebo audit?', a: 'Stačí, když máte konkrétní otázku nebo chcete znát stav webu a úpravy provede někdo ve vašem týmu. Audit dá přehled a plán, ale změny sám neprovede. Pokud web potřebuje opakovanou práci, třeba nový obsah nebo měření, jedna konzultace obvykle nestačí.' },
    { q: 'Kolik stojí průběžné SEO?', a: `Podle mých stránek služeb stojí SEO start na tři měsíce 50 000${K} a Full SEO na rok od 15 000${K} měsíčně. Přesná cena závisí na oboru a rozsahu webu a u některých oborů je minimum vyšší. Ceny jsou k 23. 11. 2026 a mohou se změnit.` },
    { q: 'Dá se po jednorázové úpravě přejít na průběžné SEO?', a: 'Ano. Výstupy auditu nebo konzultace, například seznam úprav, se dají použít jako základ pro delší spolupráci. Není to povinné, výstupy můžete použít i jinde. Po prvních výsledcích se můžete v klidu rozhodnout, zda budete pokračovat sami, nebo s dalším dodavatelem.' },
    { q: 'Zaručí některá varianta pozici v Googlu?', a: 'Ne. Žádná z variant nezaručuje pozici v Googlu ani počet poptávek. Google řadí výsledky podle vlastních pravidel a ta se mění. Dá se předem popsat, co se bude dělat a co se bude měřit, ale ne to, kde web skončí.' },
  ],

  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },
  endTitle: 'Nevíte, která varianta se hodí vašemu webu?',
  endCta: 'Objednat SEO konzultaci',
  moreTitle: 'Další články',
  moreLead: 'Další články o tom, jak vybrat první krok a plánovat SEO.',
  moreMore: 'Číst článek',
};

export const POST_ONETIME_CS = walk(raw);
