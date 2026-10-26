// Czech content of the niche landing page /seo-pro-realitni-kancelare-praha/ (brief of 22.10.2026), the first page of the second niche of the series.
// NOT published (routes.ts: NICHE_READY.nicheRealty = false): the brief makes publication conditional on the author's own materials, because without
// them the page would be generic: (a) the author's dated observations of real-estate sites, (c) a verified analysis of the Praha results; its own FAQ
// (b) is written below. There is NO case study in this niche and the translation case results must not be carried over: the page has no case block.
// The experience block (2.7) and the video (2.6) are optional and stay off until the author confirms them. The control-areas table is worded as
// "areas of the check", never as a fact about specific sites; the author's observations (with a date) are added to it when they exist.
// The build stops if the flag is on and the market observations are missing. Shared wording (capacity rule, audit "not" list, formats, reviews,
// closing text) comes from niche-shared.ts. No guarantees, no prices, no blog links, "já", the word "agentura" is never used about the author.
// The quote is a draft for the author's approval.
import { NICHE_SHARED_CS, NICHE_CAPACITY_DATE } from './niche-shared';
import { NICHE_READY } from '../i18n/routes';
import { walk } from '../lib/cs-typo';

export const NICHE_REALTY_PUBLISHED = '2026-10-22';

// Verified observations of the Google.cz / Seznam results for Praha (portals, maps, firms, formats) with the date of the check. Missing.
export const NICHE_REALTY_MARKET: null | { checked: string; observations: string[] } = {
  checked: '22. 10. 2026',
  observations: [
    'Pro dotaz „realitní kancelář Praha“ ukazuje Google nad organickými výsledky blok s mapou.',
    'V organických výsledcích jsou vedle sebe weby samotných kanceláří (sítě i jednotlivé firmy) a katalogy či žebříčky firem: seznam „nejlepších firem“ a adresář kanceláří a makléřů.',
    'Google AI Overview vypisuje několik kanceláří s krátkým popisem a adresou pobočky a vedle nich ukazuje karty dvou firem.',
  ],
};

// The author's own dated observations of real-estate sites (shown under the control-areas table). Missing.
export const NICHE_REALTY_OBSERVATIONS: null | { checked: string; observations: string[] } = {
  checked: 'říjen 2026',
  observations: [
    'Při auditu webu z oboru nemovitostí jsem našel technicky rozbité stránky: na některých se zdvojila značka <body> a title. Takové stránky opravuji jako první.',
    'Na části stránek chyběl nadpis H1, hlavní signál pro vyhledávač o tom, o čem stránka je.',
    'Obrázky bez alternativního textu a stránky se stejným title, které si ve výsledcích vyhledávání konkurují.',
  ],
};

// Optional review video of public real-estate sites (same shape as NICHE_VIDEO). Decision of the author pending.
export const NICHE_REALTY_VIDEO: null | {
  youtube: string; poster: string; width: number; height: number; duration: string; title: string; recorded?: string;
  intro: string; chapters?: { title: string; start: number; end: number }[]; observations?: string[]; transcript?: string; contact: string; contactLink: string;
} = null;

// "Jaké mám zkušenosti s weby nemovitostí?": only what the author confirms (projects, analyses, observations). Missing: the block is not rendered.
// Since 26.10.2026 the block ends with a pointer to the review of one Prague agency's website (it replaces the dormant "Moje pozorování" list, which is not rendered: showAreas is false).
export const NICHE_REALTY_EXPERIENCE: null | { title: string; answer: string; points?: string[]; pointer?: { text: string; link: string } } = {
  title: 'Jaké mám zkušenosti s weby nemovitostí?',
  answer: 'V říjnu 2026 jsem zpracoval SEO audit a strategii propagace na 12 měsíců pro web z oboru nemovitostí. Výsledky z tohoto projektu zatím neuvádím: jde o čerstvý audit, ne o dokončenou práci. Název klienta nezveřejňuji.',
  points: [
    'Audit zahrnoval současný technický stav webu, srovnání s konkurencí a plán na 12 měsíců.',
    'Případovou studii pro tento obor zatím nemám a výsledky překladatelské případové studie sem nepřenáším.',
  ],
  pointer: { text: 'Výsledky v této nice zatím nejsou. Podrobný rozbor webu jedné pražské kanceláře:', link: 'Co jsem navrhl pro web malé realitní kanceláře v Praze?' },
};

if (NICHE_READY.nicheRealty && !NICHE_REALTY_MARKET) {
  throw new Error('The real-estate landing page is switched on (NICHE_READY.nicheRealty) but the analysis of the Praha results is missing: the page would be generic.');
}

const raw = {
  lang: 'cs' as const,
  published: NICHE_REALTY_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  showWhy: false,
  showAreas: false,
  lead: 'Dělám SEO a GEO/AEO pro realitní kanceláře v Praze. Stavím stránky nabídek, čtvrtí a služeb, hlídám indexaci a duplicity a pracuji s Google Maps i Mapy.com. Začínáme bezplatným auditem technických chyb, bez hovoru a bez závazků. Prezentaci posílám do 24 hodin.',
  heroAudit: 'Chci bezplatný audit',
  heroVideoLink: 'Podívat se na rozbor webů',

  whyTitle: 'Proč realitní kanceláře potřebují SEO?',
  whyAnswer: 'Realitní kancelář potřebuje SEO, protože zájemci o nemovitost hledají ve vyhledávání podle čtvrti, typu a velikosti bytu nebo domu. Vlastní web s dobře strukturovanými stránkami může přivádět přímé poptávky bez závislosti na jednom portálu. Pozici ani počet poptávek však SEO nezaručuje.',
  why: [
    'Čtvrť: zájemci hledají nemovitost podle lokality, ne podle názvu firmy.',
    'Typ a velikost: byt, dům, dispozice, každý dotaz potřebuje stránku, která na něj odpoví.',
    'Přímé poptávky: poptávky pro realitní kancelář přicházejí i mimo portály, pokud má web co ukázat.',
  ],
  whyText: 'Pořadí na portálech neurčuje váš web. Vlastní web si budujete sami a výsledky zůstávají vám.',
  market: NICHE_REALTY_MARKET ? { title: 'Co ukazují výsledky vyhledávání pro Prahu', paragraphs: NICHE_REALTY_MARKET.observations, checkedLabel: 'Zkontrolováno', checked: NICHE_REALTY_MARKET.checked } : null,

  doTitle: 'Co pro realitní kancelář v Praze konkrétně dělám?',
  doAnswer: 'Pro realitní kancelář v Praze upravuji stránky nabídek a čtvrtí, hlídám indexaci, duplicity z filtrů a zastaralé nabídky, připravuji obsah i pro AI odpovědi a pracuji s profily na Google Maps a Mapy.com. Začínám kontrolou technických chyb a postupuji podle toho, co ukáže.',
  doIntro: 'Optimalizace webu realitní kanceláře není jedna úprava, ale několik oblastí, které na sebe navazují:',
  do: [
    { h: 'Stránky nabídek', text: 'Nabídka má mít vlastní stránku, kterou Google dokáže najít a pochopit. Hlídám, aby se z ní po prodeji nestala chyba a aby si nabídky nekonkurovaly mezi sebou.' },
    { h: 'Stránky čtvrtí a lokalit', text: 'Stránka čtvrti dává smysl, jen když má vlastní obsah. Šablonové texty se stejnou větou pro každou čtvrť nepomáhají, proto každá stránka popisuje to, co k dané lokalitě opravdu patří.' },
    { h: 'Indexace a duplicity', text: 'Filtry, řazení a stránkování umí vytvořit mnoho adres se stejným obsahem. Hlídám, které z nich má Google vidět a které ne.' },
    { h: 'Lokální přítomnost', text: 'Pro kancelář s adresou v Praze je důležitý profil na Google Maps a na Mapy.com. Údaje v nich mají odpovídat webu.' },
    { h: 'GEO/AEO: součást každé služby', text: 'GEO/AEO připravuje obsah tak, aby mu AI nástroje rozuměly a mohly ho citovat. Je součástí každé služby; citace slíbit nelze.' },
  ],
  quote: 'U realitní kanceláře rozhoduje nejen cena nabídky, ale i to, jestli ji zájemce na webu najde dřív než na portálu.',

  areas: {
    title: 'Jaké oblasti u webů realitních kanceláří kontroluji jako první?',
    answer: 'Tabulka ukazuje oblasti, které u webů realitních kanceláří kontroluji jako první. Nejde o seznam chyb, které má každý web, ale o pořadí kontroly. U každé oblasti uvádím, jak ji poznáte a co zkontrolovat nejdřív. Konkrétní nález závisí na vašem webu a systému.',
    head: ['Oblast', 'Jak ji poznám', 'Co zkontrolovat první'],
    rows: [
      ['Prodané a neaktuální nabídky', 'Stránka nabídky zůstává na webu nebo vede na chybu, i když už nabídka neplatí.', 'Co web zobrazí na adrese prodané nabídky a zda je tato adresa v mapě webu.'],
      ['Filtry a řazení', 'Stejný seznam nabídek je dostupný na mnoha adresách s různými parametry.', 'Zda se adresy z filtrů a řazení indexují a zda mají správnou kanonickou adresu.'],
      ['Obsah z portálů', 'Popisy nabídek se shodují s popisy na jiných webech.', 'Zda je text nabídky na webu vlastní, nebo přebraný.'],
      ['Stránky čtvrtí', 'Stránky čtvrtí se liší jen názvem čtvrti.', 'Zda má každá stránka vlastní obsah a zda se na ni dá z webu dostat.'],
      ['Indexace a mapa webu', 'Stránky, které mají přivádět poptávky, nejsou ve vyhledávání vidět.', 'Zda jsou důležité stránky v mapě webu a zda nejsou zablokované.'],
      ['Profily na mapách', 'Údaje na Google Maps nebo Mapy.com se liší od údajů na webu.', 'Zda se shoduje název, adresa, telefon a odkaz na web.'],
    ],
    observationsTitle: 'Moje pozorování',
    checkedLabel: 'K datu',
    observations: NICHE_REALTY_OBSERVATIONS ? NICHE_REALTY_OBSERVATIONS.observations : null,
    checked: NICHE_REALTY_OBSERVATIONS ? NICHE_REALTY_OBSERVATIONS.checked : '',
    note: 'Tabulka popisuje oblasti kontroly, ne zjištění o konkrétních webech.',
  },

  // The explanatory "how local presence works" block was removed on 25.10.2026 (niche landing pages are commercial: as little informational intent as possible).
  videoTitle: 'Co jsem viděl na webech realitních kanceláří?',
  videoRecordedLabel: 'Natočeno',
  videoChaptersTitle: 'Kapitoly',
  videoObsTitle: 'Co bylo na webech vidět',
  videoTranscriptTitle: 'Přepis videa',
  videoPlay: 'Přehrát video',
  videoOpen: 'Otevřít video na YouTube',

  experience: NICHE_REALTY_EXPERIENCE,

  coopTitle: 'Jak spolupracuji s realitními kancelářemi?',
  coopAnswer: NICHE_SHARED_CS.capacityAnswer,
  coopHowToName: 'Jak spolupráce probíhá',
  coopStepNames: ['Bezplatný audit', 'Rozhodnutí o formátu', 'Práce podle formátu'],
  coopSteps: [
    'Začneme bezplatným auditem technických chyb webu.',
    'Rozhodneme se pro formát spolupráce.',
    'Pracuji podle zvoleného formátu.',
  ],

  auditTitle: NICHE_SHARED_CS.audit.title,
  auditAnswer: 'Bezplatný audit zkontroluje technické chyby webu: indexaci, duplicitní obsah a další technické problémy. U realitních kanceláří se dívám zvlášť na indexaci nabídek a duplicity z filtrů. Neřeší klíčová slova ani konkurenci. Výsledek dostanete jako krátkou prezentaci do 24 hodin, bez hovoru a bez závazků.',
  auditNotLead: NICHE_SHARED_CS.audit.notLead,
  auditNot: NICHE_SHARED_CS.audit.not,
  auditCta: NICHE_SHARED_CS.audit.cta,

  formatsTitle: NICHE_SHARED_CS.formats.title,
  formatsAnswer: NICHE_SHARED_CS.formats.answer,
  formats: NICHE_SHARED_CS.formats.table,
  formatsNote: NICHE_SHARED_CS.formats.note,

  reviewsTitle: NICHE_SHARED_CS.reviews.title,
  reviewsAnswer: NICHE_SHARED_CS.reviews.answer,
  reviewsLink: NICHE_SHARED_CS.reviews.link,

  articles: { title: 'Další články', lead: 'Praktické články pro majitele realitních kanceláří.', more: 'Číst článek', keys: ['postRealty', 'postRealtyNoLeads', 'postRealtySmall', 'postRealtyListings', 'postRealtyPortals', 'postRealtyDistricts', 'postRealtyLocal'] as const },

  faqTitle: 'Často kladené otázky',
  faq: [
    { q: 'Proč realitní kancelář potřebuje SEO, když má inzerci na portálech?', a: 'I když máte nabídky na portálech, vlastní web může přivádět poptávky, které nejdou přes portál. Portály jsou jedním z kanálů, SEO budujete na vlastním webu a výsledky zůstávají. Podíl poptávek z portálů a z webu si ověřte u sebe, obecné číslo neuvádím.' },
    { q: 'Jak dlouho trvá SEO pro realitní kancelář?', a: 'První výsledky se u mých služeb obvykle objeví za 2–3 měsíce. Je to zkušenost s mými projekty, ne obecné pravidlo trhu, a nic neručí. Doba závisí na stavu webu, konkurenci v oboru a na tom, zda jde o sezónní výkyv, nebo o chybu.' },
    { q: 'Mám dávat nabídky na vlastní web, když je mám na portálech?', a: 'Záleží na stavu webu a na tom, jak nabídky zobrazujete. Nabídky na vlastním webu mohou přivádět poptávky, ale je nutné hlídat technickou stránku: indexaci, zastaralé nabídky a duplicity. Zda obsah z portálů opakovat, rozhodněte podle vlastní situace. Konkrétní doporučení vyžaduje prohlídku webu.' },
    { q: 'Jak se SEO liší od reklamy pro realitní kancelář?', a: 'SEO buduje stránky, které přivádějí poptávky dlouhodobě, ale první výsledky přicházejí později. Reklama přináší poptávky rychle, ale jen po dobu, kdy za ni platíte. Reklamu nespravuji. Obě cesty se dají kombinovat podle situace a rozpočtu. Proto je dobré vědět, co přesně od kterého kanálu čekáte.' },
    { q: 'S kolika firmami z oboru pracujete současně?', a: `Nejvýše se třemi firmami z jednoho oboru. Je to omezení kapacity, ne příslib výlučnosti. Údaj platí k ${NICHE_CAPACITY_DATE} a při změně ho aktualizuji. Počítám podle oboru, proto se číslo pro realitní kanceláře počítá zvlášť od ostatních oborů. Hranice platí pro každý obor zvlášť.` },
  ],

  endTitle: NICHE_SHARED_CS.end.title,
  endText: 'Bezplatný audit ukáže technické chyby webu realitní kanceláře: indexaci, duplicity z filtrů a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  endCta: NICHE_SHARED_CS.end.cta,
  endContact: NICHE_SHARED_CS.end.contact,
  otherNiches: { lead: 'Další obory:', items: [{ page: 'nicheTranslation' as const, label: 'Překladatelské agentury v Praze' }] },

  schema: {
    serviceName: 'SEO a GEO/AEO pro realitní kanceláře',
    areaServed: 'Praha',
    audience: 'realitní kanceláře',
  },
};

export const NICHE_REALTY_CS = walk(raw);
