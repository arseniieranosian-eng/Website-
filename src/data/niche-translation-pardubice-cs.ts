// Czech content of the niche landing page /seo-pro-prekladatelske-agentury-pardubice/ (brief of 22.10.2026), the third page of the series. It is
// NOT published (routes.ts: NICHE_READY.nichePardubice = false): the brief makes publication conditional on three parts of its own, because
// this page has the highest doorway risk of the series: (a) its own video with two OTHER sites, (b) its own FAQ (written below: questions 2 and 4
// are Pardubice-specific), (c) a verified and dated analysis of the Pardubice search results. (a) and (c) are missing, so the build stops if the flag
// is switched on without them. Options in the brief if they never exist: merge into a "Pardubický kraj" page, or keep a block on the case page.
// Shared wording (capacity rule, audit, formats, reviews, closing text) comes from niche-shared.ts. No guarantees, no prices in the markup, "já",
// the word "agentura" is never used about the author. The case uses only the approved formula; the city lines stay empty until the periods and
// relative figures for Pardubice are confirmed (and no AI Overview / ChatGPT claim). The quote is a draft for the author's approval.
import { HALF_FORMULA_CS } from './case-summary';
import { NICHE_SHARED_CS, NICHE_CAPACITY_DATE } from './niche-shared';
import { NICHE_READY } from '../i18n/routes';
import { walk } from '../lib/cs-typo';

export const NICHE_PARDUBICE_PUBLISHED = '2026-10-22';

// Verified observations of the Google.cz / Seznam results for Pardubice (how many local players, which formats, how the map block looks) with
// the date of the check. Missing: nothing may be invented here.
export const NICHE_PARDUBICE_MARKET: null | { checked: string; observations: string[] } = null;

// The review video with two other sites that belong to the Pardubice market / region. Missing; when it exists it has the same shape as NICHE_VIDEO
// (YouTube id, poster, size, duration, intro, recording date, chapters, observations, transcript, right of reply).
export const NICHE_PARDUBICE_VIDEO: null | {
  youtube: string; poster: string; width: number; height: number; duration: string; title: string; recorded?: string;
  intro: string; chapters?: { title: string; start: number; end: number }[]; observations?: string[]; transcript?: string; contact: string; contactLink: string;
} = null;

if (NICHE_READY.nichePardubice && (!NICHE_PARDUBICE_MARKET || !NICHE_PARDUBICE_VIDEO)) {
  throw new Error('The Pardubice landing page is switched on (NICHE_READY.nichePardubice) but the market analysis or the video are missing: it would be a doorway copy of the Prague and Brno pages.');
}

const raw = {
  lang: 'cs' as const,
  published: NICHE_PARDUBICE_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  lead: 'Dělám SEO a GEO/AEO pro překladatelské agentury v Pardubicích. Stavím stránky jazykových párů, služeb pro firmy a měst, hlídám indexaci jazykových verzí a pracuji s Google Maps i Mapy.com. Začínáme bezplatným auditem technických chyb, bez hovoru a bez závazků. Prezentaci posílám do 24 hodin.',
  heroAudit: 'Chci bezplatný audit',
  heroVideoLink: 'Podívat se na rozbor webů',

  whyTitle: 'Proč překladatelské agentury v Pardubicích potřebují SEO?',
  whyAnswer: 'Překladatelská agentura v Pardubicích potřebuje SEO, protože firmy hledají dodavatele překladů ve vyhledávání: podle jazykového páru, oboru a města. Bez vlastních stránek pro tyto dotazy poptávky odcházejí ke konkurenci. SEO přivádí poptávky z Googlu a Seznamu průběžně, ne jen po dobu placené kampaně.',
  why: [
    'B2B poptávky překlady Pardubice: firmy a kanceláře hledají překladatele podle oboru.',
    'Jazykové páry: lidé hledají konkrétní kombinaci, například překlad z češtiny do angličtiny.',
    'Město: agentury v Pardubicích potřebují stránky, které Pardubice opravdu jmenují.',
  ],
  whyText: 'Nejde o to mít web, ale o marketing překladatelské agentury Pardubice, který přivádí nové klienty a zakázky z vyhledávání.',
  market: NICHE_PARDUBICE_MARKET ? { title: 'Co ukazují výsledky vyhledávání pro Pardubice', paragraphs: NICHE_PARDUBICE_MARKET.observations, checkedLabel: 'Zkontrolováno', checked: NICHE_PARDUBICE_MARKET.checked } : null,

  doTitle: 'Co pro překladatelskou agenturu v Pardubicích konkrétně dělám?',
  doAnswer: 'Pro překladatelskou agenturu v Pardubicích stavím stránky jazykových párů, služeb, oborů a lokality, upravuji stránku pro firmy (B2B), hlídám indexaci a duplicity mezi jazykovými verzemi a připravuji obsah i pro AI odpovědi. K tomu patří lokální přítomnost v Google Maps a na Mapy.com.',
  doIntro: 'Optimalizace webu překladatelské agentury není jedna úprava, ale několik stránek a nastavení, které na sebe navazují:',
  do: [
    { h: 'Stránky jazykových párů', text: 'Samostatná stránka pro jazykový pár dává smysl tam, kde na pár existuje poptávka. Není potřeba ji dělat vždy.' },
    { h: 'Stránky služeb a oborů', text: 'Firma obvykle nehledá „překlady“ obecně, ale například právní, technický nebo lékařský překlad. Každá služba a obor má mít stránku, která na dotaz odpoví.' },
    { h: 'Stránka pro firmy (B2B)', text: 'Firmy rozhodují jinak než jednotlivci: chtějí vědět, jak se pracuje na opakovaných zakázkách a v jakých oborech. Stránka pro firmy to popíše srozumitelně a vede k poptávce.' },
    { h: 'Jazykové verze: indexace a duplicity', text: 'U vícejazyčného webu hlídám, aby Google viděl každou jazykovou verzi a nepletl si je s kopiemi. Duplicity mezi verzemi jsou častá technická chyba.' },
    { h: 'Lokální přítomnost v Pardubicích', text: 'Pro agentury s kanceláří v Pardubicích je důležitý profil na Google Maps a na Mapy.com. Lokální SEO překladatelské agentury Pardubice stojí na jednotných údajích a na stránce, která na profil navazuje.' },
    { h: 'GEO/AEO: součást každé služby', text: 'GEO/AEO připravuje obsah tak, aby mu AI nástroje rozuměly a mohly ho citovat. Je součástí každé služby; citace slíbit nelze.' },
  ],
  quote: 'V menším městě se konkurence nepozná podle počtu firem, ale podle toho, kdo je vidět, když zákazník hledá.',

  local: {
    title: 'Jak funguje lokální přítomnost agentury v Pardubicích?',
    answer: 'Profil na Google Maps a Mapy.com pomáhá agentuře v Pardubicích, aby ji firmy našly při hledání s městem. Nezaručuje pozici ani počet poptávek. Zkontroluji, zda jsou údaje (název, adresa, kontakt, obory) shodné s webem, a doplním, co chybí. Ověřím také odkazy z profilu.',
    points: [
      'Údaje o firmě (název, adresa, kontakt, obory) jsou shodné na webu i v profilech.',
      'Odkazy z profilu vedou na správné stránky webu.',
      'Mapy.com provozuje Seznam: firma v Pardubicích s profilem tam je vidět i těm, kdo hledají přes Seznam.',
    ],
    more: 'Lokální propagaci řeší samostatná služba',
    moreLink: 'SEO pro Mapy',
  },

  videoTitle: 'Co jsem viděl na webech dvou agentur z Pardubicka?',
  videoRecordedLabel: 'Natočeno',
  videoChaptersTitle: 'Kapitoly',
  videoObsTitle: 'Co bylo na webech vidět',
  videoTranscriptTitle: 'Přepis videa',
  videoPlay: 'Přehrát video',
  videoOpen: 'Otevřít video na YouTube',

  caseTitle: 'Jak to funguje v praxi? Případová studie',
  caseAnswer: 'U překladatelské agentury s pobočkami rostly poptávky tři měsíce po sobě o 65–70 % měsíc po měsíci a B2B poptávky se zvýšily trojnásobně (březen–září 2026). Údaje jsou relativní a klient zůstává anonymní.',
  caseFormula: HALF_FORMULA_CS,
  caseCity: null as string[] | null,
  caseImage: null,
  caseNote: 'Název klienta a absolutní čísla nezveřejňuji. Městská data nejsou součástí celkové formule.',
  caseLink: 'Přečíst celou případovou studii',

  coopTitle: NICHE_SHARED_CS.capacityTitle,
  coopAnswer: NICHE_SHARED_CS.capacityAnswer,
  coopHowToName: 'Jak spolupráce probíhá',
  coopStepNames: ['Bezplatný audit', 'Rozhodnutí o formátu', 'Práce podle formátu'],
  coopSteps: [
    'Začneme bezplatným auditem technických chyb webu.',
    'Rozhodneme se pro formát spolupráce.',
    'Pracuji podle zvoleného formátu.',
  ],

  auditTitle: NICHE_SHARED_CS.audit.title,
  auditAnswer: NICHE_SHARED_CS.audit.answer,
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

  articles: NICHE_SHARED_CS.articles,

  faqTitle: 'Často kladené otázky',
  faq: [
    { q: 'Jak dlouho trvá SEO pro překladatelskou agenturu v Pardubicích?', a: 'První výsledky se u mých služeb obvykle objeví za 2–3 měsíce. Je to zkušenost s mými projekty, ne obecné pravidlo trhu, a nic neručí. Doba závisí na stavu webu, konkurenci v oboru a na tom, zda jde o sezónní pokles, nebo o chybu.' },
    { q: 'Má smysl pro agenturu v menším městě lokální vyhledávání?', a: 'V menším městě firmy často hledají dodavatele s názvem města, proto je důležité mít správný profil na Google Maps a Mapy.com i stránky, které místo zmiňují. Je to můj předpoklad, ne tvrdé pravidlo: ověřte ho na výsledcích hledání ve svém oboru a na vlastních poptávkách.' },
    { q: 'Jak se řeší SEO agentury s pobočkami v několika městech?', a: 'U agentury s pobočkami v několika městech se obvykle dělají samostatné stránky a profily pro každé město s vlastním obsahem, ne kopie jedné stránky. Důležité je, aby se údaje na webu, Google Maps a Mapy.com shodovaly. Konkrétní řešení závisí na tom, kde mají zákazníci sídlo.' },
    { q: 'Konkurují mi agentury z Prahy a Brna?', a: 'Záleží na tom, na jaké dotazy cílíte. U dotazů bez názvu města se můžete potkat s agenturami z celé země, u dotazů s městem jde hlavně o místní firmy. Konkrétní závěry nedělám bez prohlédnutí výsledků hledání pro váš obor a bez data kontroly.' },
    { q: 'S kolika firmami z oboru pracujete současně?', a: `Nejvýše se třemi firmami z jednoho oboru. Je to omezení kapacity, ne příslib výlučnosti. Údaj platí k ${NICHE_CAPACITY_DATE} a při změně ho aktualizuji. Počítám podle oboru, ne podle města, proto se číslo neliší mezi stránkami pro jednotlivá města.` },
  ],

  endTitle: NICHE_SHARED_CS.end.title,
  endText: NICHE_SHARED_CS.end.text,
  endCta: NICHE_SHARED_CS.end.cta,
  endContact: NICHE_SHARED_CS.end.contact,
  otherCitiesLead: 'Další města:',
  otherCities: [{ page: 'nicheTranslation' as const, label: 'Praha' }, ...(NICHE_READY.nicheBrno ? [{ page: 'nicheBrno' as const, label: 'Brno' }] : [])],

  schema: {
    serviceName: 'SEO a GEO/AEO pro překladatelské agentury',
    areaServed: 'Pardubice',
    audience: 'překladatelské agentury',
  },
};

export const NICHE_PARDUBICE_CS = walk(raw);
