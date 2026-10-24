// Czech content of the blog article /blog/jak-ziskat-klienty-pro-ucetni-kancelar/ (brief U1 of 24.10.2026), the hub of the accounting funnel U1–U6 for the landing /seo-pro-ucetni-kancelare-praha/.
// Defaults taken (no answers to the brief's questions): slug fine, publication date = the date of the brief, maps URL /lokalni-seo-mapy/, byline links to /o-mne/, consultation linked without prices.
// The author's quote (position) is confirmed (the author always confirms his quotes) and published. The brief's default "observation" (services on one page, menu on anchors, "na části webů, které jsem si
// prohlédl") is NOT published: the author has not confirmed that he viewed accounting sites, so there is no dated observation, no counts, no invented findings. No accounting, tax or legal advice, no prices of
// accountants, no case in the niche, no advertising platforms or their rules, no mailing law, no tax advisers, the "up to three companies" niche rule is not used here, "agentura" never about the author,
// "2–3 měsíce" only about the author's own projects. U2–U6 are named nowhere until they exist. Review every 90 days (22. 1. 2027).
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_ACCOUNTING_CHANNELS_PUBLISHED = '2026-10-24';

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/jak-ziskat-klienty-pro-ucetni-kancelar.webp', width: 1200, height: 630, alt: 'Ilustrace: šest kanálů, odkud může účetní kancelář získávat klienty' },

  lead: 'Klienty pro účetní kancelář lze získávat kombinací kanálů: doporučení, vlastního webu a vyhledávání, map, placené reklamy, sociálních sítí a spolupráce s jinými profesemi. Který zvolit, závisí na čase, rozpočtu a typu klientů, například s.r.o. nebo OSVČ. Univerzálně nejlepší kanál neexistuje a žádný z nich výsledek nezaručuje.',
  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',

  tocTitle: 'Co v textu najdete',
  toc: [
    { id: 'kanaly', text: 'Odkud mají účetní kanceláře klienty?' },
    { id: 'doporuceni', text: 'Co dělají doporučení a reference?' },
    { id: 'web', text: 'Kdy dává smysl vlastní web a vyhledávání?' },
    { id: 'mapy', text: 'Co přinášejí mapy a profil firmy?' },
    { id: 'reklama', text: 'Kdy se vyplatí placená reklama?' },
    { id: 'vyber', text: 'Jak vybrat kanál, když není čas na všechno?' },
    { id: 'start', text: 'Jak začít: první tři kroky' },
  ],

  channelsTitle: 'Odkud mají účetní kanceláře klienty?',
  channelsAnswer: 'Účetní kanceláře mohou získávat klienty z doporučení a referencí, z webu a vyhledávání, z map a profilu firmy, z placené reklamy, ze sociálních sítí i od jiných profesí. Každý kanál má vlastní omezení: doporučení nelze plánovat, reklama působí jen po dobu platby a web potřebuje čas.',
  channels: {
    head: ['Kanál', 'Odkud klient přichází', 'Kdy se hodí', 'Omezení'],
    rows: [
      ['Doporučení a reference', 'od stávajících klientů a známých', 'když už má kancelář spokojené klienty', 'nelze plánovat, roste jen s okruhem klientů'],
      ['Vlastní web a SEO, GEO/AEO', 'z vyhledávání a z odpovědí AI', 'když klient hledá kancelář sám', 'první změny trvají měsíce, výsledek nelze zaručit'],
      ['Mapy a profil firmy', 'z map a hledání v okolí', 'když klienta rozhoduje poloha', 'profil je třeba udržovat; podrobnosti na stránce'],
      ['Placená reklama', 'z reklam ve vyhledávání a na sítích', 'když je třeba rychlejší start', 'působí jen po dobu platby; pravidla platformy a profese prověřit'],
      ['Sociální sítě a obsah', 'z příspěvků a článků', 'když chcete budovat důvěru', 'vyžaduje pravidelnou práci'],
      ['Partnerství s jinými profesemi', 'od právníků, podnikatelských poradců a dalších oborů', 'když máte spřízněné obory', 'závisí na vztazích; bez slibu výsledku'],
    ],
    mapsLink: 'Mapy',
  },

  recTitle: 'Co dělají doporučení a reference?',
  recAnswer: 'Doporučení přivádějí klienty, kteří už dostali důvěru od někoho, koho znají. Omezením je, že nelze určit, kdy přijdou, a že jejich počet roste jen s okruhem stávajících klientů. Doporučení jsou dobrý základ, ale na plánovaný růst nemusí stačit, proto je lepší je doplnit dalším kanálem.',
  recText: 'Důvěra se často buduje už během spolupráce s klientem, proto doporučení vznikají přirozeně. Nelze je ale plánovat ani urychlit. Proto stojí za to myslet i na kanály, které lze ovlivnit vlastním časem nebo rozpočtem.',

  webTitle: 'Kdy dává smysl vlastní web a vyhledávání?',
  webAnswer: 'Vlastní web dává smysl, když chce kancelář získávat klienty i mimo okruh doporučení a klient ji hledá sám v Googlu nebo se ptá AI. Web musí být srozumitelný pro vyhledávač i pro AI. U mých projektů se první změny obvykle objevují za 2–3 měsíce, záruka neexistuje a v této oblasti zatím výsledky nemám.',
  webLead: 'Co v oboru dělám, popisuji na stránce',
  webLinkText: 'SEO pro účetní kanceláře v Praze',
  // Confirmed by the author (24.10.2026): published
  quote: 'Doporučení jsou pro účetní kancelář dobrý základ, ale klient si kancelář může ještě vyhledat. Proto stojí za to, aby byla vidět ve vyhledávání i v odpovědích AI.',

  mapsTitle: 'Co přinášejí mapy a profil firmy?',
  mapsAnswer: 'Mapy a profil firmy ukazují kancelář lidem, kteří hledají v okolí. Přínos závisí na úplném a udržovaném profilu a na tom, zda klienta při výběru rozhoduje poloha kanceláře. Výsledek nelze zaručit. Podrobnosti k lokálnímu SEO a mapám jsou na samostatné stránce.',
  mapsLead: 'Lokální SEO a mapy popisuje stránka',
  mapsLinkText: 'SEO pro Mapy',

  adsTitle: 'Kdy se vyplatí placená reklama?',
  adsAnswer: 'Placená reklama může přivést poptávky rychleji než SEO, ale jen po dobu, kdy za ni platíte. Vyplatí se, když kancelář potřebuje rychlý start a má rozpočet na testování. Pravidla reklamní platformy i své profese si před spuštěním prověřte. Výsledek nelze zaručit.',
  adsText: 'U e-mailových a dalších rozesílek existují pravidla, před spuštěním se obraťte na právníka.',

  chooseTitle: 'Jak vybrat kanál, když není čas na všechno?',
  chooseAnswer: 'Kanál vyberte podle odpovědí na pár otázek: kolik času a rozpočtu máte, jak rychle potřebujete první poptávky, jací klienti vás zajímají a kde vás hledají. Začněte jedním nebo dvěma kanály a po několika měsících vyhodnoťte, co přineslo poptávky. Univerzálně nejlepší kanál neexistuje.',
  chooseLead: 'Otázky, které si stojí za to položit:',
  choose: [
    'Kolik času týdně mohu kanálu věnovat?',
    'Mám rozpočet na reklamu, nebo spíš čas?',
    'Potřebuji poptávky rychle, nebo mohu počkat na SEO?',
    'Jací klienti mě zajímají (například s.r.o., OSVČ) a kde je hledají?',
    'Mám spokojené klienty, kteří by mě doporučili?',
  ],

  startTitle: 'Jak začít: první tři kroky',
  startAnswerBefore: 'Začněte třemi kroky: zjistěte, odkud přišli vaši současní klienti, vyberte jeden až dva kanály podle svého času a rozpočtu a po několika měsících vyhodnoťte, co přineslo poptávky. Pokud zvažujete web, můžete si objednat',
  startAnswerLink: 'bezplatný technický audit',
  startAnswerAfter: 'Ten odhalí technické chyby, ale neřeší výběr kanálu.',
  start: [
    'Zjistěte, odkud přišli vaši současní klienti.',
    'Vyberte jeden až dva kanály podle svého času a rozpočtu.',
    'Po několika měsících vyhodnoťte, co přineslo poptávky.',
  ],

  faqTitle: 'Často kladené otázky',
  faq: [
    { q: 'Jak získat první klienty jako účetní?', a: 'Začít lze u lidí, které už znáte: bývalých kolegů, známých podnikatelů a lidí z jiných oborů, kteří mohou kancelář doporučit. Zároveň si připravte web nebo profil, kde se klient dozví, co nabízíte. Který kanál bude fungovat, nelze předem zaručit, proto první měsíce sledujte, odkud poptávky přišly.' },
    { q: 'Jak získat klienty jako účetní OSVČ?', a: 'Pokud má účetní OSVČ omezený čas nebo rozpočet, dává smysl vybrat jeden až dva kanály: doporučení od stávajících klientů, profil na mapách nebo jednoduchý web. Reklama a sociální sítě vyžadují průběžně čas nebo peníze. Žádný kanál nezaručuje poptávku, proto sledujte, co funguje.' },
    { q: 'Má smysl vlastní web účetní kanceláře?', a: 'Záleží na tom, odkud chcete klienty získávat. Pokud vás klienti hledají sami ve vyhledávání nebo se ptají AI, web jim umožní kancelář najít a posoudit. Pokud klienty získáváte jen z doporučení, může web sloužit hlavně k ověření důvěry. Výsledek nelze zaručit.' },
    { q: 'Který kanál je nejlepší pro účetní kancelář?', a: 'Univerzálně nejlepší kanál neexistuje. Doporučení jsou dobrý základ, web a mapy pomáhají těm, kdo hledají sami, reklama přináší rychlejší start za průběžnou platbu. Výběr závisí na vašem čase, rozpočtu a typu klientů. Začněte jedním až dvěma kanály a po několika měsících vyhodnoťte výsledky.' },
    { q: 'Vyplatí se placená reklama pro účetní kancelář?', a: 'Reklama může přivést poptávky rychleji než SEO, ale jen po dobu, kdy za ni platíte. Vyplatí se, pokud máte rozpočet na testování a umíte vyhodnotit, odkud poptávky přišly. Výsledek nelze zaručit. Před spuštěním si prověřte pravidla reklamní platformy a své profese.' },
    { q: 'Za jak dlouho se projeví SEO?', a: 'U mých projektů se první změny obvykle objevují za 2–3 měsíce. Záruka ale neexistuje a doba závisí na webu, konkurenci a rozsahu úprav. V oblasti účetních kanceláří zatím výsledky nemám, proto tuto dobu nelze brát jako příslib pro vaši kancelář.' },
  ],

  endTitle: 'Související stránky a další krok',
  endText: 'Co v oboru dělám, popisuji na stránce',
  endLandingLink: 'SEO pro účetní kanceláře v Praze',
  endAudit: 'Technické chyby webu ukáže bezplatný technický audit: prezentaci pošlu do 24 hodin, bez hovoru a bez závazků. V auditu nejsou klíčová slova, konkurence, mapy, viditelnost v AI, rychlost ani mobilní verze a nehodnotí výběr kanálu ani strukturu služeb.',
  endConsulting: 'Rozsah a podmínky konzultace jsou na stránce',
  endConsultingLink: 'SEO konzultace',
  endGrow: 'Web můžete dál rozvíjet',
  endStart: 'SEO startem na 3 měsíce',
  endOr: 'nebo',
  endFull: 'Full SEO na rok',
  cta: 'Požádat o bezplatný audit',

  schema: {
    about: ['jak získat klienty pro účetní kancelář', 'marketing pro účetní kancelář', 'propagace účetní kanceláře', 'získávání klientů účetní kanceláře'],
  },
};

export const POST_ACCOUNTING_CHANNELS_CS = walk(raw);
