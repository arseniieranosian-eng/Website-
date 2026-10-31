// Czech content of the blog article /blog/prazske-mestske-casti-a-ctvrti-web-realitni-kancelare/ (brief N9 of 31.10.2026): the Prague counterpart of N8 about the territorial designations of Prague (not a copy of N8 or N6).
// Sources supplied by the author on 31.10.2026: a map of the city sections of Prague (state of 1. 7. 2023: 22 sections named Praha 1–22 and 35 sections with their own names = 57) and links to the pages of MČ Praha 1–22 on metropolevsech.eu.
// The official documents of the brief (Statut hl. m. Prahy, Sbírka zákonů, ČÚZK) could not be read from the build environment, so the text confirms only what the map shows (the number and names of the city sections) and
// states the other designations (správní obvody, katastrální území) without numbers or definitions. The examples Vinohrady / Smíchov / Žižkov are NOT used (status unconfirmed, brief 0b). No observations ([?]3), no prices, no services,
// no links to N8, no guarantees, no portals. Google is mentioned in one sentence without a quotation and without a link. N6 does not overlap (it holds only general principles with "čtvrť A / čtvrť B").
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_REALTY_PRAGUE_DISTRICTS_PUBLISHED = '2026-10-31';

export const PRAGUE_DISTRICTS: { name: string; url?: string }[] = [
    { name: 'Praha 1', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-1/' },
    { name: 'Praha 2', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-2/' },
    { name: 'Praha 3', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-3/' },
    { name: 'Praha 4', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-4/' },
    { name: 'Praha 5', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-5/' },
    { name: 'Praha 6', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-6/' },
    { name: 'Praha 7', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-7/' },
    { name: 'Praha 8', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-8/' },
    { name: 'Praha 9', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-9/' },
    { name: 'Praha 10', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-10/' },
    { name: 'Praha 11', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-11/' },
    { name: 'Praha 12', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-12/' },
    { name: 'Praha 13', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-13/' },
    { name: 'Praha 14', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-14/' },
    { name: 'Praha 15', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-15/' },
    { name: 'Praha 16', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-16-2/' },
    { name: 'Praha 17', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-17/' },
    { name: 'Praha 18', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-18/' },
    { name: 'Praha 19', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-19/' },
    { name: 'Praha 20', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-20/' },
    { name: 'Praha 21', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-21/' },
    { name: 'Praha 22', url: 'https://metropolevsech.eu/cs/kontakty/urady-v-praze/jednotlive-mestske-casti/mestska-cast-praha-22/' },
    { name: 'Běchovice' },
    { name: 'Benice' },
    { name: 'Březiněves' },
    { name: 'Čakovice' },
    { name: 'Ďáblice' },
    { name: 'Dolní Chabry' },
    { name: 'Dolní Měcholupy' },
    { name: 'Dolní Počernice' },
    { name: 'Dubeč' },
    { name: 'Klánovice' },
    { name: 'Koloděje' },
    { name: 'Kolovraty' },
    { name: 'Královice' },
    { name: 'Křeslice' },
    { name: 'Kunratice' },
    { name: 'Libuš' },
    { name: 'Lipence' },
    { name: 'Lochkov' },
    { name: 'Lysolaje' },
    { name: 'Nebušice' },
    { name: 'Nedvězí' },
    { name: 'Petrovice' },
    { name: 'Přední Kopanina' },
    { name: 'Řeporyje' },
    { name: 'Satalice' },
    { name: 'Šeberov' },
    { name: 'Slivenec' },
    { name: 'Štěrboholy' },
    { name: 'Suchdol' },
    { name: 'Troja' },
    { name: 'Újezd' },
    { name: 'Velká Chuchle' },
    { name: 'Vinoř' },
    { name: 'Zbraslav' },
    { name: 'Zličín' },
];

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/prazske-mestske-casti-a-ctvrti-web-realitni-kancelare.webp', width: 1200, height: 630, alt: 'Ilustrace: označení Praha 1, Praha 5 a Praha 7 a dalších městských částí Prahy, propojená s domem realitní kanceláře' },

  lead: 'Tento článek ukazuje, jak na webu realitní kanceláře označit pražské lokality a jak postavit stránky lokalit. Je určený majitelům a manažerům realitních kanceláří v Praze.',

  namesTitle: 'Jak se v Praze označují území a čím se liší?',
  namesAnswer: 'V Praze se používá několik různých označení území: městské části, správní obvody a katastrální území. Nejde o totéž a na webu se nemají zaměňovat. Počet a názvy městských částí uvádím níže podle mapy se stavem k 1. 7. 2023, ne z paměti. Ostatní označení si před použitím ověřte u oficiálního zdroje.',
  namesSourceText: 'Zdroj seznamu: mapa městských částí hlavního města Prahy se stavem k 1. 7. 2023. U městských částí Praha 1 až Praha 22 vede název na stránku příslušné městské části.',
  names: PRAGUE_DISTRICTS,

  pageTitle: 'Jak má stránka lokality v Praze vypadat?',
  pageAnswer: 'Stránka lokality má jasně říct, o jakém území je, a nemá na jedné stránce míchat různá označení, jako by šlo o totéž. Uvádějte jen nabídky a zkušenosti, které kancelář skutečně má. Stránka složená podle šablony se zaměněným názvem čtenáři nic navíc nedá. Podle zásad Google je problémem tvorba stránek pro podobné dotazy, které čtenáři nepřinášejí hodnotu.',
  pageLead: 'Obecný postup psaní stránky lokality je v článku',
  pageLinkText: 'Jak napsat stránku čtvrti na web realitní kanceláře?',

  writeTitle: 'Jak psát názvy: oficiálně, nebo tak, jak lidé mluví?',
  writeAnswer: 'Používejte označení, které je úřední, a u obecně známých názvů uveďte, ke kterému úřednímu označení patří, jakmile to ověříte u oficiálního zdroje. Čtenář tak pozná, o jaké území jde. Neuvádějte, že je určitý název městskou částí, pokud jste to neověřili. Jiný název než úřední vysvětlete přímo v textu.',

  errTitle: 'Jakým chybám se u pražských lokalit vyhnout?',
  errAnswer: 'Vyhněte se zaměňování různých označení území, šabloně se změněným názvem, nedoloženým tvrzením o lokalitě a stránkám bez nabídek. Jde o moje doporučení z práce s weby nemovitostí, ne o statistiku trhu. Každou stránku lokality napište tak, aby obsahovala něco, co kancelář o dané lokalitě skutečně ví.',

  structTitle: 'Jak lokality zapsat do struktury webu?',
  structAnswer: 'Lokality zapište do přehledné struktury: přehledová stránka a z ní odkazy na jednotlivá území, o kterých kancelář opravdu něco ví. Z každé stránky lokality vede odkaz zpět na přehled a na související nabídky. Stránku zakládejte, až máte co říct, a ne předem pro všechna označení, která v Praze existují.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Mám mít stránku pro každé území?', a: 'Ne. Stránku zakládejte jen pro území, ke kterému máte nabídky nebo skutečnou zkušenost. Stránka bez nabídky a bez vlastního obsahu čtenáři nic nedá. Území, o kterém zatím nic konkrétního nevíte, můžete zmínit na přehledové stránce nebo ve službách, vlastní stránku si nechte na později.' },
    { q: 'Mohu použít stejný text pro více lokalit?', a: 'Ne. Stejný text se zaměněným názvem je jen šablona. Každá stránka lokality má obsahovat to, co kancelář o daném území skutečně ví: své nabídky a vlastní zkušenost. Pokud takový obsah nemáte, raději stránku nezakládejte, než abyste vydávali několik skoro stejných textů pro různé názvy.' },
    { q: 'Mám uvádět ceny a trendy v lokalitě?', a: 'Ceny a trendy uvádějte jen tehdy, pokud je umíte doložit zdrojem a datem. Bez zdroje je čtenář nemůže ověřit a mohou být nepřesné. Obecné odhady trhu na stránku lokality nepište. Držte se nabídek, které kancelář skutečně má, a vlastní zkušenosti s daným územím, kterou umíte popsat.' },
    { q: 'Kolik městských částí má Praha?', a: 'Podle mapy městských částí hlavního města Prahy se stavem k 1. 7. 2023 má Praha 57 městských částí: 22 s označením Praha 1 až Praha 22 a dalších 35 s vlastními názvy. Číslo se může změnit, proto uvádím datum mapy, a před psaním textu na web si ověřte aktuální stav u hlavního města Prahy.' },
  ],

  endTitle: 'Chcete vědět, co SEO pro realitní kancelář v Praze obnáší?',
  endText: 'Na stránce o SEO pro realitní kanceláře v Praze najdete, co práce zahrnuje a jak začít. Výsledek ani pozici nezaručuji.',
  endCta: 'SEO pro realitní kanceláře v Praze',
};

export const POST_REALTY_PRAGUE_DISTRICTS_CS = walk(raw);
