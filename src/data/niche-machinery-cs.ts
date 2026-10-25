// Czech niche landing page /seo-pro-strojirenske-firmy/ "SEO a GEO/AEO pro strojírenské firmy" (brief of 25.10.2026; cs only, hreflang self-reference only, whole Czechia). Own structure: how the niche differs, 3 steps,
// for whom, the audit example from the related niche (a link only: no embed, no VideoObject), audit scope, cooperation, FAQ (7). Defaults taken (no answers to the brief's questions): slug as in the brief, the YouTube
// Short link from the author (without tracking parameters), languages: only indexation and structure of the existing language versions (nothing about the German market, exports or German content), no funnel articles yet,
// no observations of manufacturers' sites. The Title is shortened to <= 55 characters (the site rule of 25.10.2026). No guarantees (enquiries, positions, orders, AI citation), no prices, no competitors / portals / catalogues,
// nothing about certificates, "agentura" never about the author, only "SEO a GEO/AEO". The findings of the audit example are quoted as on the audit page. Review every 90 days (23. 1. 2027).
import { walk } from '../lib/cs-typo';

// Publication date of this address (the brief: 25. 10. 2026); do NOT bump it when the page is edited.
export const NICHE_MACHINERY_PUBLISHED = '2026-10-25';
export const MACHINERY_CAPACITY_DATE = '25. 10. 2026';
export const MACHINERY_SHORT_URL = 'https://youtube.com/shorts/J6w0iMTKJJk';

const raw = {
  lang: 'cs' as const,
  published: NICHE_MACHINERY_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  lead: 'Dělám SEO a GEO/AEO pro strojírenské a výrobní firmy: technický základ webu, stránky technologií a možností, PDF katalogy a poptávkový formulář. Začíná se bezplatným technickým auditem. Poptávky, pořadí ani citování umělou inteligencí zaručit nelze a v této oblasti zatím výsledky nemám.',
  heroAudit: 'Objednat bezplatný technický audit',

  diffTitle: 'Čím se SEO strojírenské firmy liší od jiných oborů?',
  diffAnswer: 'Zákazník z průmyslu může vybírat dodavatele podle technologií, kapacit a referencí a porovnávat jich víc. Web proto potřebuje samostatné stránky technologií, srozumitelné technické informace a jasnou cestu k poptávce. Vyhledávač i AI navíc musí číst katalogy v PDF a případné jazykové verze bez duplicit. Poptávky to nezaručuje.',
  diffText: 'Rozhodují tu technické detaily a spolehlivost, ne rychlé nákupní rozhodnutí. Proto má smysl, aby web odpovídal na otázky odběratele ještě před prvním kontaktem.',

  doTitle: 'Co pro strojírenskou firmu dělám?',
  doAnswer: 'Postupuji ve třech krocích: technický základ webu, stránky technologií a možností firmy s jasnou cestou k poptávce a FAQ a příprava na GEO/AEO. Řeším také indexaci PDF katalogů a existujících jazykových verzí. U mých projektů se první změny obvykle objevují za 2–3 měsíce, záruka neexistuje a v této oblasti zatím výsledky nemám.',
  do: [
    'Technický základ webu: indexace, duplicity a další technické problémy.',
    'Stránky technologií a možností firmy s jasnou cestou k poptávce a FAQ.',
    'Příprava na GEO/AEO.',
  ],
  doGeoLead: 'GEO/AEO je součástí každé služby, popisuji ho na stránce',
  doGeoLink: 'SEO a GEO/AEO',

  forTitle: 'Pro koho je to a pro koho ne?',
  forAnswer: 'Hodí se pro strojírenské a výrobní firmy s vlastním webem, které chtějí být vidět ve vyhledávání i v odpovědích AI a získávat poptávky z webu. Nehodí se pro firmy, které čekají zaručené zakázky nebo rychlé výsledky, ani pro ty, které potřebují jen jednorázový web pro jednu kampaň.',
  forYes: { title: 'Hodí se', items: ['strojírenská firma s webem', 'výrobní firma včetně kovovýroby', 'firma, která chce poptávky z webu'] },
  forNo: { title: 'Nehodí se', items: ['firmy, které čekají zaručené zakázky', 'firmy, které čekají rychlé výsledky', 'jednorázový web pro jednu kampaň'] },

  exampleTitle: 'Ukázka auditu ze související oblasti',
  exampleAnswer: 'Na stránce bezplatného auditu je krátké video z auditu webu dodavatele softwaru pro strojírenství. Klienta nejmenuji. Ukázka ukazuje, jak vypadá výstup auditu, například nalezené chyby v canonical adresách. Není to případová studie výrobní firmy a nic z ní neplyne o výsledcích pro váš web.',
  exampleFindings: 'V ukázce je například jedna canonical adresa na neindexovatelné stránce a osm stránek, u kterých canonical vede na jinou adresu. Neplyne z toho, že stejně to bude i u výrobní firmy.',
  exampleLead: 'Ukázku najdete na stránce',
  exampleLink: 'Bezplatný audit',
  exampleOr: 'nebo jako',
  exampleShort: 'krátké video na YouTube',

  auditTitle: 'Co obsahuje bezplatný audit a co ne?',
  auditAnswer: 'Bezplatný audit odhalí technické chyby webu: indexaci, duplicity a další technické problémy, například u stránek technologií, PDF katalogů nebo jazykových verzí. Prezentaci dostanete do 24 hodin, bez hovoru a bez závazku. Klíčová slova, konkurence, mapy, viditelnost v AI, rychlost ani mobilní verze součástí nejsou.',
  audit: {
    head: ['Co obsahuje', 'Co neobsahuje'],
    rows: [
      ['indexace webu', 'klíčová slova'],
      ['duplicity', 'konkurence'],
      ['další technické problémy, například u stránek technologií, PDF katalogů nebo jazykových verzí', 'mapy a viditelnost v AI'],
      ['prezentace do 24 hodin, bez hovoru a bez závazku', 'rychlost a mobilní verze'],
    ],
  },
  auditChecksLead: 'Co zkontrolovat na webu výrobní firmy:',
  auditChecks: [
    'indexace stránek technologií a služeb',
    'PDF katalogy a technické listy (indexace, duplicity s HTML stránkami)',
    'duplicity a parametrické adresy URL u katalogů a filtrů',
    'adresy canonical',
    'indexace jazykových verzí, pokud existují',
  ],
  auditNote: 'Strukturu, obsah, konverzi a FAQ audit nehodnotí.',
  auditLead: 'Podrobnosti k auditu najdete na stránce',
  auditLink: 'Bezplatný audit',

  coopTitle: 'Jak spolupráce probíhá?',
  coopAnswer: `Začíná se bezplatným technickým auditem, po něm následuje konzultace, balíček Start na 3 měsíce nebo Full SEO na rok. Pracuji současně nejvýše se třemi firmami z jednoho oboru; k ${MACHINERY_CAPACITY_DATE} je obor strojírenských a výrobních firem volný. Rozsah a podmínky jsou na stránkách jednotlivých balíčků.`,
  coopLinks: [
    { page: 'consulting' as const, text: 'SEO konzultace' },
    { page: 'start' as const, text: 'SEO start na 3 měsíce' },
    { page: 'fullSeo' as const, text: 'Full SEO na rok' },
  ],

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Zaručíte poptávky?', a: 'Ne. Počet poptávek, pořadí ve vyhledávání ani citování umělou inteligencí zaručit nelze, protože je ovlivňuje konkurence, stav webu a další faktory mimo můj dosah. Mohu připravit technický základ, strukturu stránek a FAQ. V této oblasti zatím výsledky nemám, takže žádné číslo slíbit nemohu.' },
    { q: 'Potřebuje výrobní firma web, když má stálé zákazníky?', a: 'Záleží na tom, odkud chcete zakázky získávat. Stálí zákazníci jsou dobrý základ, ale nový odběratel si dodavatele může před oslovením vyhledat. Web pak slouží k ověření důvěry a k zachycení poptávek od těch, kdo vás hledají sami. Výsledek zaručit nelze, začít lze bezplatným technickým auditem.' },
    { q: 'Jak dlouho trvá SEO?', a: 'U mých projektů se první změny obvykle objevují za 2–3 měsíce. Záruka neexistuje, doba závisí na stavu webu, konkurenci a rozsahu úprav. V oblasti strojírenství a výroby zatím výsledky nemám, takže tuto dobu nelze brát jako slib pro váš web.' },
    { q: 'Jak se SEO liší od reklamy?', a: 'Reklama přivádí zájemce rychleji, ale jen po dobu, kdy za ni platíte. SEO potřebuje čas, zlepšení webu ale zůstávají, i když výsledek není zaručen. Pravidla reklamních platforem je před spuštěním vhodné ověřit. Kanály lze kombinovat, který přinese víc, předem říct nelze.' },
    { q: 'Zaručíte citování AI?', a: 'Ne. Citování umělou inteligencí zaručit nelze, ovlivňují ho systémy, které nekontroluji. Web připravuji tak, aby byl srozumitelný: přímé odpovědi, FAQ, přehledné tabulky a technický základ. Citování se pak dá ověřovat ručním testem vybraných otázek v ChatGPT, Perplexity a Google AI Overview.' },
    { q: 'Co dělá bezplatný audit u webu s PDF katalogy a více jazyky?', a: 'Kontroluje, zda se PDF katalogy a jazykové verze indexují a zda nevznikají duplicity s HTML stránkami, včetně canonical adres. Prezentaci dostanete do 24 hodin, bez hovoru a bez závazku. Co konkrétně se najde, předem říct nelze. Klíčová slova, konkurenci, mapy, viditelnost v AI, rychlost ani mobilní verzi audit neřeší.' },
    { q: 'Kolik firem z oboru obsluhujete současně?', a: `Pracuji současně nejvýše se třemi firmami z jednoho oboru. K ${MACHINERY_CAPACITY_DATE} je obor strojírenských a výrobních firem volný. Jde o omezení kapacity, ne o exkluzivitu: neslibuji, že budu pracovat jen s vámi. Názvy a data klientů nezveřejňuji. Údaje o kapacitě aktualizuji při změně.` },
  ],

  endTitle: 'Další krok',
  endText: 'Chcete vědět, jestli má váš web technické chyby, které brání indexaci stránek technologií nebo katalogů? Začněte bezplatným technickým auditem.',
  endCta: 'Objednat bezplatný technický audit',

  schema: {
    serviceName: 'SEO a GEO/AEO pro strojírenské firmy',
    serviceType: 'SEO a GEO/AEO pro strojírenské a výrobní firmy',
    areaServed: 'Česko',
  },
};

export const NICHE_MACHINERY_CS = walk(raw);
