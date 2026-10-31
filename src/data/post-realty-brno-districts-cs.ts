// Czech content of the blog article /blog/mestske-casti-brna-web-realitni-kancelare/ (brief N8 of 31.10.2026): Brno-specific (official names of the city districts, examples), not a copy of N6
// (stranky-ctvrti-a-lokalit-realitni-kancelare). Decisions: title shortened to 47 characters ("realitky", as in N6) for the site-wide limit title <= 55; Description without a call to action and without the number.
// Source of the list: the author supplied the list (Czech Wikipedia list of the Brno city districts, names 1–15) and a map of the districts (the other 14 names read from the map); the Statut města Brna
// itself could not be opened (brno.cz is not reachable from the build environment), so the text names the list as the source, not the Statut (replace when the Statut is verified).
// No observations (default [?]3), no prices, no services, no Start / Full SEO / audit / konzultace, no guarantees, no portals. Google is mentioned in one sentence without a quotation and without a link.
import { walk } from '../lib/cs-typo';
import { NICHE_REALTY_BRNO_DISTRICTS as DISTRICTS } from './niche-realty-brno-cs';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_REALTY_BRNO_DISTRICTS_PUBLISHED = '2026-10-31';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/mestske-casti-brna-web-realitni-kancelare.webp', width: 1200, height: 630, alt: 'Ilustrace: oficiální názvy městských částí Brna, Brno-střed, Brno-sever a Brno-jih, propojené s domem realitní kanceláře' },

  lead: 'Tento článek ukazuje, jak na webu realitní kanceláře uvést městské části Brna a jak postavit stránky lokalit. Je určený majitelům a manažerům realitních kanceláří v Brně.',

  namesTitle: 'Z čeho se Brno skládá a které názvy jsou oficiální?',
  namesAnswer: 'Brno se dělí na městské části. Jejich počet a názvy uvádí seznam městských částí Brna, ze kterého vycházím, a na webu je vhodné používat právě tyto názvy a odkázat na zdroj. Seznam 29 městských částí je uvedený níže. Názvy nevymýšlím ani nezkracuji, před použitím si je ověřte na stránkách města Brna.',
  namesSource: DISTRICTS!.source,
  names: DISTRICTS!.names.map((x) => x.name),

  pageTitle: 'Jak má stránka lokality v Brně vypadat?',
  pageAnswer: 'Stránka lokality má uvádět oficiální název městské části a jen to, co kancelář o lokalitě skutečně ví: nabídky, které tam opravdu má, a vlastní zkušenost. Nemá být šablonou, ve které se mění jen název. Podle zásad Google je problémem tvorba stránek pro podobné dotazy, které čtenáři nepřinášejí hodnotu.',
  pageLead: 'Obecný postup psaní stránky lokality je v článku',
  pageLinkText: 'Jak napsat stránku čtvrti na web realitní kanceláře?',

  writeTitle: 'Jak psát názvy: oficiálně, nebo tak, jak lidé mluví?',
  writeAnswer: 'Doporučuji uvádět oficiální název městské části. Používáte-li jiný, rozšířenější název, vysvětlete ho v textu, aby čtenář poznal, o kterém území mluvíte. Pozor na názvy, které se opakují v jiných městech: Vinohrady jsou i v Praze, a proto je u brněnských vhodné psát Brno-Vinohrady, jak uvádí oficiální název.',

  errTitle: 'Jakým chybám se u stránek lokalit vyhnout?',
  errAnswer: 'Hlavní chybou je šablona, ve které se mění jen název lokality. Dále jsou to nedoložené informace o lokalitě, názvy bez vysvětlení a stránky bez jediné nabídky. Jde o moje doporučení z práce s weby nemovitostí, ne o statistiku trhu. Každá stránka lokality má mít vlastní obsah, který kancelář opravdu může obhájit.',

  structTitle: 'Jak lokality zapsat do struktury webu?',
  structAnswer: 'Lokality zapište do přehledné hierarchie: stránka s přehledem oblastí a z ní odkazy na jednotlivé městské části, ve kterých kancelář skutečně něco nabízí. Z každé stránky lokality vede odkaz zpět na přehled a na související nabídky. Stránku lokality zakládejte, až máte o lokalitě co říct, ne předem pro všechny.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Kolik městských částí má Brno?', a: 'Podle seznamu městských částí Brna, ze kterého vycházím, má Brno celkem 29 městských částí. Číslo i názvy beru vždy ze seznamu a uvádím zdroj, protože se mohou změnit. Před psaním textu na web si proto vždy aktuální stav ověřte na stránkách města Brna.' },
    { q: 'Mám mít stránku pro každou městskou část?', a: 'Ne. Stránku zakládejte jen pro městské části, ke kterým máte nabídky nebo skutečnou zkušenost. Stránka bez nabídky a bez vlastního obsahu čtenáři nic nedá. Lokalitu, o které zatím nic konkrétního nevíte, můžete zmínit na přehledové stránce nebo ve službách, vlastní stránku si nechte na později.' },
    { q: 'Mohu použít stejný text pro více lokalit?', a: 'Ne. Stejný text se zaměněným názvem je jen šablona. Každá stránka lokality má obsahovat to, co kancelář o dané městské části skutečně ví: své nabídky a vlastní zkušenost. Pokud takový obsah nemáte, raději stránku nezakládejte, než abyste vydávali několik skoro stejných textů.' },
    { q: 'Mám uvádět ceny a trendy v lokalitě?', a: 'Ceny a trendy uvádějte jen tehdy, pokud je umíte doložit zdrojem a datem. Bez zdroje je čtenář nemůže ověřit a mohou být nepřesné. Obecné odhady trhu na stránku lokality nepište. Držte se nabídek, které kancelář skutečně má, a vlastní zkušenosti s danou městskou částí, kterou umíte popsat.' },
  ],

  endTitle: 'Chcete vědět, co SEO pro realitní kancelář v Brně obnáší?',
  endText: 'Na stránce o SEO pro realitní kanceláře v Brně najdete, co práce zahrnuje a jak začít. Výsledek ani pozici nezaručuji.',
  endCta: 'SEO pro realitní kanceláře v Brně',
};

export const POST_REALTY_BRNO_DISTRICTS_CS = walk(raw);
