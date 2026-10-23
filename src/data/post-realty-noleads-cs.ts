// Czech content of the blog article /blog/proc-web-realitni-kancelare-neprinasi-poptavky/ (brief N2 of 23.10.2026), the middle of the real-estate funnel N1–N10. Defaults taken (no
// answers to the brief's questions): no "I have seen" observations (none supplied), no figures or percentages, no portal names, no case results; the author's quote is a DRAFT and
// is NOT published until the author confirms it (QUOTE_CONFIRMED = false: no quote block, no Quotation). The Czech names of the Search Console report are to be checked before
// publishing. Links: the audit-funnel article "proč se web nezobrazuje v Googlu" (it exists on the site), N1 (published); N4–N10 get links only when they are published (the
// text names them without a hyperlink until then). No HowTo, no Service, no ratings, no prices.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_REALTY_NOLEADS_PUBLISHED = '2026-10-23';
export const QUOTE_CONFIRMED = true;

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/proc-web-realitni-kancelare-neprinasi-poptavky.webp', width: 1200, height: 630, alt: 'Ilustrace: web realitní kanceláře s nulou poptávek a kontrolním seznamem: indexace, služby, kontakt' },

  lead: 'Web realitní kanceláře může poptávky nepřinášet z několika důvodů, které se často kombinují: stránky nejsou ve vyhledávání, nabídky leží jen na portálech, služby jsou na jedné stránce, chybí lokality a jasný kontakt, nebo se poptávky neměří. Níže je tabulka příčin, jak je poznat a co zkontrolovat jako první. Výsledek neslibuji.',
  forWhom: 'Text je pro majitele realitní kanceláře, který má web, ale poptávky z něj nepřicházejí. Najdete tu osm častých příčin, způsob, jak je poznat, a pořadí, ve kterém je kontrolovat.',

  tocTitle: 'Co v textu najdete',
  toc: [
    { id: 'priciny', text: 'Jaké jsou nejčastější příčiny, proč web nepřináší poptávky?' },
    { id: 'google', text: 'Je web vůbec v Google?' },
    { id: 'portaly', text: 'Stačí, když mám nabídky jen na portálech?' },
    { id: 'sluzby', text: 'Má každá služba vlastní stránku?' },
    { id: 'lokalita', text: 'Hledají lidé vaši lokalitu?' },
    { id: 'kontakt', text: 'Vidí návštěvník, co má udělat?' },
    { id: 'mereni', text: 'Víte, odkud poptávky přicházejí?' },
    { id: 'prvni', text: 'Co zkontrolovat jako první?' },
  ],

  causesTitle: 'Jaké jsou nejčastější příčiny, proč web nepřináší poptávky?',
  causesAnswer: 'Může jít o kombinaci technických a obsahových příčin: stránky nejsou správně ve vyhledávání, nabídky jsou jen na portálech, služby leží na jedné stránce, chybí lokality a jasný kontakt, nebo se poptávky neměří. Technické příčiny ukáže bezplatný audit, ostatní vyžadují konzultaci nebo spolupráci.',
  causes: {
    head: ['Příčina', 'Jak to poznáte', 'Co s tím', 'Zachytí bezplatný audit?'],
    rows: [
      ['Důležité stránky nejsou ve vyhledávání', 'v Google Search Console jsou stránky nezaindexované', 'technická kontrola a oprava', 'Ano'],
      ['Duplicitní stránky (adresy, filtry)', 'více adres se stejným obsahem', 'sjednotit, technická oprava', 'Ano'],
      ['Nabídky jen na portálech', 'na webu nejsou vlastní stránky nabídek', 'zvážit vlastní stránky nabídek', 'Ne'],
      ['Všechny služby na jedné stránce', 'menu odkazuje kotvami níž', 'samostatné stránky služeb', 'Ne'],
      ['Žádné stránky lokalit', 'chybí stránky městských částí', 'stránky s vlastním obsahem', 'Ne'],
      ['Nejasný kontakt a formulář', 'kontakt je skrytý', 'zjednodušit', 'Ne'],
      ['Neměří se zdroj poptávek', 'nevíte, odkud přicházejí', 'zavést jednoduché měření', 'Ne'],
      ['Příliš brzká očekávání', 'web je nový nebo se dlouho neměnil', 'počítat s časem', 'Ne'],
    ],
  },
  causesNote: 'Tabulka je obecná, bez čísel a bez hodnocení konkrétních webů.',

  googleTitle: 'Je web vůbec v Google?',
  googleAnswer: 'Pokud důležité stránky nejsou v Google, nikdo je tam nenajde. Stav indexace zjistíte v Google Search Console. Podrobnější rozbor, proč se web nezobrazuje, najdete v samostatném článku. Technickou kontrolu indexace a duplicit pokrývá bezplatný audit technických chyb, prezentaci dostanete do 24 hodin, bez hovoru.',
  googleLead: 'Proč se web nemusí zobrazovat, rozebírám v článku',
  googleLinkText: 'Proč se web nezobrazuje v Googlu?',
  googleAuditLead: 'Technickou kontrolu zajistí',
  googleAuditLinkText: 'bezplatný audit',

  portalsTitle: 'Stačí, když mám nabídky jen na portálech?',
  portalsAnswer: 'Pokud jsou nabídky jen na portálech, web nemá vlastní stránky, které by vyhledávač mohl zobrazit. Nabídky na vlastním webu s unikátním popisem a samostatnou adresou dávají vyhledávači co indexovat, ale přinášejí i technická rizika, například duplicity. Podrobnosti rozebírám v samostatných článcích o nabídkách a portálech.',
  portalsOverviewLead: 'Přehled kanálů, odkud klienti přicházejí, najdete v článku',
  portalsOverviewLinkText: 'Jak získat klienty pro realitní kancelář',

  servicesTitle: 'Má každá služba vlastní stránku?',
  servicesAnswer: 'Pokud nabídka služeb, například prodej, koupě, pronájem a odhad, leží na jedné stránce, vyhledávač vidí jedno téma místo několika. Samostatné stránky služeb mají jasnější obsah i vlastní adresu. Menu, které jen odkazuje kotvami níž na stejné stránce, samostatné stránky nevytváří.',

  localTitle: 'Hledají lidé vaši lokalitu?',
  localAnswer: 'Lidé často hledají nemovitost nebo službu s lokalitou, třeba městskou částí nebo čtvrtí. Pokud web na lokalitu nemá žádnou stránku, nemá se o co opřít. Stránky lokalit ale mají smysl jen s vlastním obsahem. Šablonovité kopie s vyměněným názvem jsou riziko, ne řešení.',

  contactTitle: 'Vidí návštěvník, co má udělat?',
  contactAnswer: 'Návštěvník musí rychle poznat, co má udělat: zavolat, napsat nebo vyplnit formulář. Pokud je kontakt skrytý, formulář zdlouhavý nebo chybí na stránkách služeb, návštěvy se v poptávky nepromění. Je to otázka obsahu a uspořádání webu, ne technická chyba z bezplatného auditu.',

  measureTitle: 'Víte, odkud poptávky přicházejí?',
  measureAnswer: 'Když nevíte, odkud poptávky přicházejí, nepoznáte, co funguje. Sledujte alespoň počet formulářů, telefonátů a e-mailů a jejich zdroj, pokud jej zjistíte. Nastavení měření a souhlasy s cookies zde nerozepisuji. Konkrétní postup záleží na vašem webu a je lepší ho řešit s odborníkem.',

  firstTitle: 'Co zkontrolovat jako první?',
  firstAnswer: 'Začněte tím, co lze ověřit nejrychleji: zda jsou důležité stránky ve vyhledávání, zda má každá služba vlastní stránku, zda jsou na webu nabídky, zda je vidět kontakt a zda víte, odkud poptávky přicházejí. Teprve pak řešte obsah a lokality. Zaručit výsledek to ale nemůže.',
  first: [
    'Jsou důležité stránky ve vyhledávání?',
    'Má každá služba vlastní stránku?',
    'Jsou na webu vlastní nabídky?',
    'Je vidět kontakt a formulář?',
    'Víte, odkud poptávky přicházejí?',
    'Má každá lokalita vlastní stránku s vlastním obsahem?',
  ],

  // Confirmed by the author (23.10.2026): published
  quote: 'Nejdřív ověřte, jestli je web ve vyhledávání, a teprve pak řešte, co na něm chybí.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Jak poznám, že web realitní kanceláře nefunguje?', a: 'Web nefunguje, pokud nepřináší návštěvníky ani poptávky navzdory času, který od jeho spuštění uplynul. Projděte kontrolní seznam: indexace, stránky služeb, nabídky, kontakt a měření. Nejde o diagnózu, ale o pořadí kontrol. Technické chyby, jako indexaci a duplicity, ukáže bezplatný audit.', links: [{ page: 'audit' as const, text: 'Bezplatný audit' }] },
    { q: 'Proč nemám návštěvníky na webu realitní kanceláře?', a: 'Důvodů může být několik: stránky nejsou ve vyhledávání, web nemá samostatné stránky služeb nebo lokalit, nabídky jsou jen na portálech, nebo lidé web jednoduše nenacházejí. Příčinu nelze určit bez kontroly konkrétního webu. První krok je zjistit, zda jsou důležité stránky vůbec ve vyhledávání.' },
    { q: 'Jak dlouho trvá, než web začne přinášet poptávky?', a: 'U mých vlastních projektů se první změny obvykle objevují za 2–3 měsíce, ale záruku nedávám. Doba závisí na stavu webu, konkurenci a rozsahu úprav. V realitním oboru zatím nemám vlastní případovou studii, takže pro něj žádný termín neslibuji a odhad vychází až z auditu.' },
    { q: 'Kolik stojí audit webu?', a: 'Bezplatný audit technických chyb je zdarma, bez hovoru a bez závazku. Placená konzultace s auditem a plánem na 12 měsíců má cenu uvedenou na stránce konzultace, kterou zde neduplikuji. Cena SEO se pak liší podle zvolené služby. Aktuální částky najdete na stránkách jednotlivých služeb.', links: [{ page: 'audit' as const, text: 'Bezplatný audit' }, { page: 'consulting' as const, text: 'SEO konzultace' }] },
    { q: 'Stačí, když mám nabídky jen na portálech?', a: 'Záleží na cíli. Pokud vám stačí kontakt přes portál, vlastní web nutně nepotřebuje nabídky. Pokud chcete, aby vás klienti našli i mimo portál, vlastní stránky pomáhají, ale přinášejí technická rizika, například duplicity. Podrobnosti rozebírám v samostatných článcích o portálech a nabídkách.' },
    { q: 'Co přesně bezplatný audit zkontroluje?', a: 'Bezplatný audit zkontroluje technické chyby: indexaci, duplicity a další technické problémy. Prezentaci dostanete do 24 hodin, bez hovoru a bez závazku. Příčiny ze struktury webu, obsahu, konverze a měření neukáže, ty řeší placená konzultace nebo Start. Klíčová slova, konkurenci, mapy ani rychlost neobsahuje.', links: [{ page: 'audit' as const, text: 'Bezplatný audit' }, { page: 'start' as const, text: 'SEO start na 3 měsíce' }] },
  ],

  endTitle: 'Chcete vědět, jestli má váš web technické chyby, které brání indexaci?',
  endText: 'Požádejte o bezplatný audit. Zkontroluje technické chyby webu, například indexaci a duplicity. Slibuji jen to: technický rozbor, ne vyřešení struktury nebo obsahu webu.',
  cta: 'Požádat o bezplatný audit',
  endConsulting: 'Nebo se podívejte na',
  endConsultingLink: 'konzultaci',
  landingLead: 'Co dělám pro realitní kanceláře, popisuji na stránce',
  landingLinkText: 'SEO pro realitní kanceláře v Praze',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  schema: {
    about: ['proč web realitní kanceláře nepřináší poptávky', 'web realitní kanceláře bez poptávek', 'web realitní kanceláře nefunguje', 'příčiny nulových poptávek z webu'],
  },
};

export const POST_REALTY_NOLEADS_CS = walk(raw);
