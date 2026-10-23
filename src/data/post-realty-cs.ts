// Czech content of the blog article /blog/jak-ziskat-klienty-pro-realitni-kancelar/ (brief N1 of 23.10.2026), the hub of the real-estate funnel N1–N10 for the landing
// page /seo-pro-realitni-kancelare-praha/. Defaults taken (no answers to the brief's questions): no portal names, no figures or effectiveness claims, no prices of SEO,
// no own observations of realtors' sites, no case results (the translation case is not used as proof). The author's quote is a DRAFT and is NOT published until the author
// confirms it (QUOTE_CONFIRMED = false: no quote block, no Quotation). The Czech name of the Google business profile is to be checked before publishing. Links to the
// future articles N4 (portal vs own website) and N8 (reviews and the profile on maps) are added when they exist. No HowTo, no Service, no ratings.
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const POST_REALTY_PUBLISHED = '2026-10-23';
export const QUOTE_CONFIRMED = true;

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',
  readLabel: 'Čtení',
  readUnit: 'min',
  cover: { src: '/images/blog/jak-ziskat-klienty-pro-realitni-kancelar.webp', width: 1200, height: 630, alt: 'Ilustrace: šest kanálů pro získání klientů realitní kanceláře: portály, web, doporučení, reklama, mapy a SEO' },

  lead: 'Klienty může realitní kancelář získávat z realitních portálů, doporučení, vlastního webu, placené reklamy, map a vyhledávání. Žádný kanál není nejlepší pro všechny: záleží na velikosti kanceláře, rozpočtu a kapacitě. Níže kanály porovnávám, uvádím jejich omezení a ukazuji, jak vybrat první. Výsledky neslibuji.',
  forWhom: 'Text je pro majitele realitní kanceláře, který zvažuje, odkud brát další klienty. Najdete tu srovnání šesti kanálů v tabulce, omezení každého z nich a tři první kroky, které dávají smysl i při malém rozpočtu.',

  tocTitle: 'Co v textu najdete',
  toc: [
    { id: 'kanaly', text: 'Odkud se berou klienti realitní kanceláře?' },
    { id: 'portaly', text: 'Co přinášejí realitní portály?' },
    { id: 'web', text: 'Proč mít vlastní web, když jsou portály?' },
    { id: 'doporuceni', text: 'Jakou roli hrají doporučení a reputace?' },
    { id: 'reklama', text: 'Kdy dává smysl placená reklama?' },
    { id: 'seo', text: 'Kdy dává smysl SEO a GEO/AEO?' },
    { id: 'velikost', text: 'Jak vybrat kanál podle velikosti kanceláře?' },
    { id: 'zacit', text: 'Jak začít: první tři kroky' },
  ],

  channelsTitle: 'Odkud se berou klienti realitní kanceláře?',
  channelsAnswer: 'Realitní kancelář může získávat klienty z realitních portálů, doporučení a reputace, vlastního webu, placené reklamy, sociálních sítí a map. Kanály se doplňují a každý má svá omezení. Která kombinace dává smysl, záleží na velikosti kanceláře, rozpočtu a času, který může věnovat obsahu a správě.',
  channels: {
    head: ['Kanál', 'Odkud klient přichází', 'Kdy se hodí', 'Omezení'],
    rows: [
      ['Realitní portály', 'z portálu, kde už hledá konkrétní nemovitost', 'když potřebujete rychlý kontakt s poptávkou', 'řídíte se pravidly platformy a kancelář je tam vedle mnoha dalších'],
      ['Doporučení a recenze', 'od známých a bývalých klientů, z recenzí', 'když máte spokojené klienty a dobré jméno', 'růst závisí na počtu spokojených klientů a nejde ho snadno zrychlit'],
      ['Vlastní web', 'z vyhledávání, reklamy nebo odkazu', 'když chcete řídit značku, obsah a způsob zachycení poptávky', 'sám nestačí, lidé ho musí najít, a výsledky nepřijdou hned'],
      ['Placená reklama', 'z reklamy na konkrétní nabídku nebo období', 'když potřebujete návštěvníky rychle', 'funguje jen po dobu, kdy za ni platíte, a nevytváří trvalé aktivum'],
      ['Sociální sítě', 'z příspěvků, videí a komunity', 'když umíte pravidelně tvořit obsah a budovat značku', 'vyžadují pravidelnou práci a čas'],
      ['Mapy a profil firmy', 'z hledání poblíž nebo s názvem čtvrti', 'když chcete být vidět lidem v okolí', 'viditelnost závisí na úplných údajích a na recenzích'],
    ],
  },
  channelsNote: 'SEO a GEO/AEO jsou popsané samostatně níže. Tabulka je orientační a nehodnotí účinnost kanálů.',

  portalsTitle: 'Co přinášejí realitní portály?',
  portalsAnswer: 'Realitní portály přivádějí lidi, kteří už hledají konkrétní nemovitost, ale kancelář tam stojí vedle mnoha dalších a řídí se pravidly platformy. Hodí se pro rychlý kontakt s poptávkou, ale na jejich provozovateli závisí. Konkrétní podmínky jednotlivých portálů zde neuvádím, najdete je u nich.',

  webTitle: 'Proč mít vlastní web, když jsou portály?',
  webLead: 'Pokud web nepřináší poptávky, začněte pořadím kontroly v článku',
  webLinkText: 'Proč web realitní kanceláře nepřináší poptávky?',
  webAnswer: 'Vlastní web je kanál, který kancelář sama řídí: obsah, značku i způsob, jak zachytí poptávku. Klienty nepřináší hned a sám nestačí, lidé ho musí najít, například ve vyhledávání nebo z reklamy. Může portály doplňovat, ne nutně nahrazovat. Záleží na tom, co a jak na něm nabídnete.',

  refTitle: 'Jakou roli hrají doporučení a reputace?',
  refAnswer: 'Doporučení a recenze přivádějí klienty, kteří kanceláři už důvěřují. Pomáhají i v místním vyhledávání na mapách. Omezení je, že růst závisí na počtu spokojených klientů a nedá se snadno zrychlit. Profil firmy na Googlu a Mapy.com doplňují doporučení o viditelnost, když lidé hledají poblíž.',
  refLead: 'Pro lokální viditelnost slouží samostatná služba',
  refLinkText: 'SEO pro Mapy',

  adsTitle: 'Kdy dává smysl placená reklama?',
  adsAnswer: 'Placená reklama obvykle přivede návštěvníky rychleji než SEO, ale jen po dobu, kdy za ni platíte. Hodí se pro konkrétní nabídky nebo období a nevytváří trvalé aktivum. Ceny a nastavení zde neřeším, reklamu nespravuji. Srovnání slouží k tomu, abyste mohli kanály rozumně poměřit.',

  seoTitle: 'Kdy dává smysl SEO a GEO/AEO?',
  seoAnswer: 'SEO a GEO/AEO dávají smysl, pokud chcete získávat klienty i z vyhledávání, máte co nabídnout a můžete počkat. U mých vlastních projektů se první změny obvykle objevují za 2–3 měsíce, ale záruku nedávám a v realitním oboru zatím nemám vlastní případovou studii. Podrobnosti jsou na stránce SEO pro realitní kanceláře.',
  seoLead: 'Co v oboru dělám a jak postupuji, popisuji na stránce',
  seoLinkText: 'SEO pro realitní kanceláře v Praze',
  seoSmallLead: 'Jestli SEO dává smysl právě pro malou kancelář, rozebírám v článku',
  seoSmallLinkText: 'Má SEO smysl pro malou realitní kancelář?',
  seoAuditLead: 'Technické chyby webu zkontroluje',
  seoAuditLinkText: 'bezplatný audit',

  sizeTitle: 'Jak vybrat kanál podle velikosti kanceláře?',
  sizeAnswer: 'Malá kancelář s omezeným rozpočtem obvykle začíná kanály, které nestojí velké peníze a využívají její silné stránky: doporučení, profil na mapách a několik kvalitních stránek vlastního webu. Větší kancelář může kombinovat portály, reklamu a SEO. Jde o orientační úvahu, ne o pravidlo.',
  sizeLead: 'Zeptejte se sami sebe:',
  size: [
    'Kolik peněz můžu měsíčně věnovat marketingu a jak dlouho?',
    'Kolik času mám na tvorbu obsahu a správu kanálu?',
    'Kdo konkrétní kanál povede a vyhodnotí?',
    'Jak dlouho můžu čekat na první výsledky?',
    'Jaké kanály mi už dnes přivádějí klienty?',
  ],

  startTitle: 'Jak začít: první tři kroky',
  startAnswer: 'Začněte tím, že zjistíte, odkud klienti přicházejí dnes. Vyberte jeden kanál, který dokážete dlouhodobě udržovat, ne všechny najednou. Po několika měsících vyhodnoťte, co funguje, a teprve pak přidejte další. Plán s ověřitelnými kroky je lepší než slib rychlého růstu, i když začnete s malým rozpočtem.',
  startSteps: [
    'Zjistěte, odkud klienti přicházejí dnes.',
    'Vyberte jeden kanál, který dokážete dlouhodobě udržovat.',
    'Po několika měsících vyhodnoťte, co funguje, a teprve pak přidejte další.',
  ],

  // Confirmed by the author (23.10.2026): published
  quote: 'Nejdřív zjistěte, odkud klienti přicházejí dnes, a teprve potom vybírejte další kanál.',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Odkud mají realitní kanceláře klienty?', a: 'Realitní kanceláře získávají klienty z portálů, doporučení, vlastního webu, placené reklamy, sociálních sítí a map. Poměr se liší podle velikosti kanceláře, oblasti a rozpočtu a obecné číslo uvádět nelze. Jaký kanál je pro vás nejlepší, zjistíte tak, že sledujete, odkud přicházejí vaši skuteční klienti.' },
    { q: 'Má smysl vlastní web realitní kanceláře, když jsou portály?', a: 'Má, ale nenahrazuje portály, jen je doplňuje. Vlastní web řídíte sami: značku, obsah i způsob, jak zachytíte poptávku. Klienty nepřináší hned a musí ho lidé najít. Podrobnější srovnání portálů a vlastního webu bude v samostatném článku. Hodí se zejména tehdy, když chcete, aby vás klienti našli i mimo portály.' },
    { q: 'Kolik stojí marketing realitní kanceláře?', a: 'Cena závisí na zvolených kanálech a jejich rozsahu: portály, reklama a SEO mají každé jiný model placení. Konkrétní částky zde neuvádím. Ceny mých služeb najdete na stránkách konzultace, tříměsíčního Startu a Full SEO. Technické chyby webu zkontroluje bezplatný audit bez závazku.', links: [{ page: 'consulting' as const, text: 'SEO konzultace' }, { page: 'start' as const, text: 'SEO start na 3 měsíce' }, { page: 'fullSeo' as const, text: 'Full SEO na rok' }, { page: 'audit' as const, text: 'Bezplatný audit' }] },
    { q: 'Kdy začne SEO přinášet první poptávky?', a: 'U mých vlastních projektů se první změny obvykle objevují za 2–3 měsíce, ale záruku nedávám. Rychlost závisí na stavu webu, konkurenci a rozsahu úprav. V realitním oboru zatím nemám vlastní případovou studii, takže pro něj žádný termín neslibuji a odhad vychází až z auditu.' },
    { q: 'Je lepší reklama, nebo SEO pro realitní kancelář?', a: 'Nelze říct obecně. Reklama obvykle přivede návštěvníky rychleji, ale jen po dobu placení. SEO pracuje déle a nemá záruku výsledku, ale nezávisí na každém kliknutí. Vyberte podle rozpočtu, časového horizontu a schopnosti obsah udržovat. Reklamu nespravuji, proto doporučení nestavím na mém zájmu.' },
    { q: 'Jak začít, když kancelář nemá velký rozpočet?', a: 'Začněte jedním kanálem, který zvládnete udržovat, ne všemi najednou. Zjistěte, odkud klienti přicházejí dnes, využijte doporučení a profil na mapách a upravte několik klíčových stránek webu. Po několika měsících vyhodnoťte výsledky a teprve potom přidejte další kanál. Plán s ověřitelnými kroky je lepší než velký rozpočet bez plánu.' },
  ],

  endTitle: 'Chcete vědět, v jakém stavu je web vaší kanceláře?',
  endText: 'Požádejte o bezplatný audit technických chyb. Audit zkontroluje technické chyby webu, prezentaci dostanete do 24 hodin, bez hovoru a bez závazků. V auditu nejsou klíčová slova, konkurence, mapy, viditelnost v AI, rychlost ani mobilní verze.',
  cta: 'Požádat o bezplatný audit',
  endConsulting: 'Nebo se podívejte na',
  endConsultingLink: 'konzultaci',
  landingLead: 'Co dělám pro realitní kanceláře, popisuji na stránce',
  authorNote: 'Napsal Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Víc o mně a o tom, jak pracuji, najdete na stránce',
  authorLinkText: 'O mně',

  schema: {
    about: ['jak získat klienty pro realitní kancelář', 'klienti realitní kanceláře', 'marketing realitní kanceláře', 'kanály pro realitní kancelář'],
  },
};

export const POST_REALTY_CS = walk(raw);
