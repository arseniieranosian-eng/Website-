// Czech content of the niche landing page /seo-pro-prekladatelske-agentury-brno/ (brief of 22.10.2026), the second page of the series. It is
// NOT published (routes.ts: NICHE_READY.nicheBrno = false) until it has the three parts that make it different from the Prague page: (a) its own
// video with two other sites, (b) verified observations of the Brno search results with a date, (c) its own FAQ (written below, points 3 and 5
// are Brno-specific) and the local block. The build stops if the flag is on and the video or the market observations are missing.
// Shared wording (capacity rule, audit, formats, reviews, closing text) comes from niche-shared.ts. No guarantees, no blog links,
// "já", the word "agentura" is never used about the author. The case uses only the approved formula; the Brno lines repeat the case page
// WITHOUT the AI Overview claim (its date, conditions and a screenshot are still missing). The quote is a draft for the author's approval.
import SUMMARIES from './niche-summaries.json';
import { HALF_FORMULA_CS } from './case-summary';
import { NICHE_SHARED_CS_TR as NICHE_SHARED_CS } from './niche-shared';
import { NICHE_READY } from '../i18n/routes';
import { walk } from '../lib/cs-typo';

export const NICHE_BRNO_PUBLISHED = '2026-10-22';

// Verified observations of the Google.cz / Seznam results for Brno: the queries, what the results show, the date of the check.
export const NICHE_BRNO_MARKET: null | { checked: string; observations: string[] } = {
  checked: '16. 10. 2026',
  observations: [
    'Pro dotaz „překlady Brno“ ukazuje Google AI Overview několik ověřených překladatelských služeb v Brně, mezi nimi i brněnskou pobočku klienta z případové studie.',
    'Výsledky u služeb zobrazují údaje z profilu: adresu, informaci o otevření a odkaz na oficiální web. Proto má smysl, aby byly údaje v profilech shodné s webem.',
  ],
};

// The review video: by the author's decision of 22.10.2026 the SAME recording as on the Prague page (the brief asked for another one with two
// other sites; this is a conscious exception, the duplicate-content risk is accepted). Same rules, same chapters / observations / transcript when they exist.
import { NICHE_VIDEO } from './niche-translation-cs';

export const NICHE_BRNO_VIDEO: null | {
  youtube: string; poster: string; width: number; height: number; duration: string; title: string; recorded?: string;
  intro: string; chapters?: { title: string; start: number; end: number }[]; observations?: string[]; transcript?: string; contact: string; contactLink: string;
} = NICHE_VIDEO ? { ...NICHE_VIDEO, title: 'Co jsem viděl na webech přesto.cz a skrivanek.cz?' } : null;

// Google AI Overview for "překlady Brno": a screenshot with the client covered (public/images/niche-ai-overview-brno.webp, the third-party
// thumbnail is covered too). It is wired into the page as `caseImage` ONLY with the date of the screenshot (like the Prague one:
// "Snímek obrazovky z DD. MM. RRRR."). Until the date is known the page does not show it and does not claim an AI Overview for Brno.
export const NICHE_BRNO_AI_SHOT: null | { date: string } = { date: '16. 10. 2026' };

if (NICHE_READY.nicheBrno && (!NICHE_BRNO_MARKET || !NICHE_BRNO_VIDEO)) {
  throw new Error('The Brno landing page is switched on (NICHE_READY.nicheBrno) but the market observations or the video are missing: it would be a doorway copy of the Prague page.');
}

const raw = {
  lang: 'cs' as const,
  published: NICHE_BRNO_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  showWhy: false,
  lead: SUMMARIES['/seo-pro-prekladatelske-agentury-brno/'], // summary block (brief of 31.10.2026): data/niche-summaries.json
  heroAudit: 'Chci bezplatný audit',
  heroVideoLink: 'Podívat se na rozbor webů',

  whyTitle: 'Proč překladatelské agentury v Brně potřebují SEO?',
  whyAnswer: 'Překladatelská agentura v Brně potřebuje SEO, protože firmy hledají dodavatele překladů ve vyhledávání: podle jazykového páru, oboru a města. Bez vlastních stránek pro tyto dotazy poptávky odcházejí ke konkurenci. SEO přivádí poptávky z Googlu a Seznamu průběžně, ne jen po dobu placené kampaně.',
  why: [
    'B2B poptávky překlady Brno: firmy a kanceláře hledají překladatele podle oboru.',
    'Jazykové páry: lidé hledají konkrétní kombinaci, například překlad z češtiny do angličtiny.',
    'Město: brněnské agentury potřebují stránky, které Brno opravdu jmenují.',
  ],
  whyText: 'Nejde o to mít web, ale o marketing překladatelské agentury Brno, který přivádí nové klienty a zakázky z vyhledávání.',
  market: NICHE_BRNO_MARKET ? { title: 'Co ukazují výsledky vyhledávání pro Brno?', paragraphs: NICHE_BRNO_MARKET.observations, checkedLabel: 'Zkontrolováno', checked: NICHE_BRNO_MARKET.checked } : null,

  doTitle: 'Co pro překladatelskou agenturu v Brně konkrétně dělám?',
  doAnswer: 'Pro překladatelskou agenturu v Brně stavím stránky jazykových párů, služeb, oborů a lokality, upravuji stránku pro firmy (B2B), hlídám indexaci a duplicity mezi jazykovými verzemi a připravuji obsah i pro AI odpovědi. K tomu patří lokální přítomnost v Google Maps a na Mapy.com.',
  doIntro: 'Optimalizace webu překladatelské agentury není jedna úprava, ale několik stránek a nastavení, které na sebe navazují:',
  do: [
    { art: 'pairs', h: 'Stránky jazykových párů', text: 'Samostatná stránka pro jazykový pár dává smysl tam, kde na pár existuje poptávka. Není potřeba ji dělat vždy.' },
    { art: 'services', h: 'Stránky služeb a oborů', text: 'Firma obvykle nehledá „překlady“ obecně, ale například právní, technický nebo lékařský překlad. Každá služba a obor má mít stránku, která na dotaz odpoví.' },
    { art: 'b2b', h: 'Stránka pro firmy (B2B)', text: 'Firmy rozhodují jinak než jednotlivci: chtějí vědět, jak se pracuje na opakovaných zakázkách a v jakých oborech. Stránka pro firmy to popíše srozumitelně a vede k poptávce.' },
    { art: 'versions', h: 'Jazykové verze: indexace a duplicity', text: 'U vícejazyčného webu hlídám, aby Google viděl každou jazykovou verzi a nepletl si je s kopiemi. Duplicity mezi verzemi jsou častá technická chyba.' },
    { art: 'local', h: 'Lokální přítomnost v Brně: Google Maps a Mapy.com pro agentury', text: 'Brno: místní přítomnost se pozná. Při práci na projektu jsem u jedné brněnské agentury viděl, že město uvádí důsledně: v nadpisech, v popisech služeb, například u soudních překladů, i v profilu. Brněnská stránka agentury s pobočkou má dělat totéž, ale jen s tím, co pobočka skutečně nabízí: adresou, telefonem a službami. Pobočka z mé případové studie měla vlastní průběh, proto ji neměřím společně s ostatními městy.' },
    { art: 'geo', h: 'GEO/AEO: součást každé služby', text: 'GEO/AEO připravuje obsah tak, aby mu AI nástroje rozuměly a mohly ho citovat. Je součástí každé služby; citace slíbit nelze.' },
  ],
  quote: 'U překladatelské agentury v Brně se poptávka rozhoduje v detailech: jazykový pár, obor, město. Stránky, které je nepopisují, nemá Google co ukázat.',

  // The explanatory "how local presence works" block was removed on 25.10.2026 (niche landing pages are commercial: as little informational intent as possible).
  videoTitle: 'Co jsem viděl na webech [A] a [B]?',
  videoRecordedLabel: 'Natočeno',
  videoChaptersTitle: 'Kapitoly',
  videoObsTitle: 'Co bylo na webech vidět',
  videoTranscriptTitle: 'Přepis videa',
  videoPlay: 'Přehrát video',
  videoOpen: 'Otevřít video v novém okně',

  caseTitle: 'Jak to funguje v praxi? Případová studie',
  caseAnswer: 'U překladatelské agentury s pobočkami rostly poptávky tři měsíce po sobě o 65–70 % měsíc po měsíci a B2B poptávky se zvýšily trojnásobně (březen–září 2026). Údaje jsou relativní a klient zůstává anonymní. Brněnská pobočka měla vlastní průběh.',
  caseFormula: HALF_FORMULA_CS,
  caseCity: [
    'Brno: výrazný letní růst s několika vrcholy; na podzim aktivita mírně polevila, ale zůstala výrazně nad dubnovým startem; u klíčových dotazů top 5 a výš.',
  ],
  caseImage: NICHE_BRNO_AI_SHOT ? { src: '/images/niche-ai-overview-brno.webp', width: 670, height: 484, alt: 'Google AI Overview pro dotaz „překlady Brno“: mezi uvedenými překladatelskými službami je i brněnská pobočka klienta, jejíž název, adresa a logo jsou zakryté', caption: `Google AI Overview pro dotaz „překlady Brno“: mezi uvedenými službami je i brněnská pobočka klienta (název, adresa a logo jsou zakryté). Snímek obrazovky z ${NICHE_BRNO_AI_SHOT.date}.` } : null,
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
    { q: 'Jak dlouho trvá SEO pro překladatelskou agenturu v Brně?', a: 'První výsledky se obvykle objeví za 2–3 měsíce. Garantovat je nelze, záleží na stavu webu a konkurenci v oboru.' },
    { q: 'Jak se liší SEO od reklamy pro agenturu v Brně?', a: 'Reklamu nespravuji. SEO buduje stránky, které přivádějí poptávky dlouhodobě; reklama přináší poptávky po dobu, kdy za ni platíte.' },
    { q: 'Pomůže agentuře v Brně profil na Mapy.com a Google Maps?', a: 'Může pomoci, aby ji firmy našly při hledání s názvem města. Profil nezaručuje pozici ani počet poptávek. Důležité je, aby byly údaje v profilu shodné s webem a aby odkazy z profilu vedly na správné stránky. Mapy.com provozuje Seznam, takže profil pomáhá i těm, kdo hledají přes Seznam.' },
    { q: 'Potřebuje agentura samostatné stránky pro jazykové páry?', a: 'Ne vždy, jen tam, kde je poptávka.' },
    { q: 'Jak se SEO řeší u agentury s pobočkou v Brně a v dalších městech?', a: 'Každé město potřebuje vlastní lokální stránku a profil na Google Maps a na Mapy.com s jednotnými údaji. Města mají různé podmínky i konkurenci, proto stránka pro Brno popisuje brněnskou nabídku a nekopíruje text stránky pro jiné město.' },
    { q: 'S kolika firmami z oboru pracujete současně?', a: NICHE_SHARED_CS.capacityShort.replace('Nejvýše tři firmy z jednoho oboru.', 'Nejvýše se třemi.') },
  ],

  endTitle: NICHE_SHARED_CS.end.title,
  endText: NICHE_SHARED_CS.end.text,
  endCta: NICHE_SHARED_CS.end.cta,
  endContact: NICHE_SHARED_CS.end.contact,
  otherNiches: NICHE_READY.nicheRealty ? { lead: 'Další obory:', items: [{ page: 'nicheRealty' as const, label: 'Realitní kanceláře v Praze' }] } : null,
  otherCitiesLead: 'Další města:',
  otherCities: [{ page: 'nicheTranslation' as const, label: 'Praha' }, ...(NICHE_READY.nichePardubice ? [{ page: 'nichePardubice' as const, label: 'Pardubice' }] : [])],

  schema: {
    serviceName: 'SEO a GEO/AEO pro překladatelské agentury',
    areaServed: 'Brno',
    audience: 'překladatelské agentury',
  },
};

export const NICHE_BRNO_CS = walk(raw);
