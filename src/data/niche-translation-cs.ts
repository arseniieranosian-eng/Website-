// Czech content of the niche landing page /seo-pro-prekladatelske-agentury-praha/ (brief of 22.10.2026), the first of the series
// /seo-pro-[obor]-[mesto]/. Commercial page: no guarantees, no prices, no blog links, "já" (never "my"), the word "agentura" is never used about
// the author (it appears only as the niche / client type). The case wording uses only the approved formula (3 months in a row +65–70 % month over
// month, B2B ×3, March–September 2026; no ×8, no ×24, no +400 %); the city result of the brief is not used (no data yet, decision 6 open).
// Reviews: none from translation agencies exist in the shared source, so the block is a link to all reviews. The video block (9 min, real
// companies) is rendered only when NICHE_VIDEO is set: until then no chapters, observations, transcript or VideoObject exist. The "Další města"
// block (Brno, Pardubice) appears when those pages are published. The quote is a draft for the author's approval.
import { HALF_FORMULA_CS } from './case-summary';
import { NICHE_SHARED_CS } from './niche-shared';
import { walk } from '../lib/cs-typo';

// First publication of this address; do NOT bump it when the page is edited (dateModified comes from git).
export const NICHE_PUBLISHED = '2026-10-22';

// The review video with the market analysis (9 minutes, two real public websites), embedded from Google Drive (the file must be shared as
// "anyone with the link"). Shown as a facade (poster + play button), the player loads on click. Chapters, observations, the transcript
// and the recording date are optional: they are rendered when present (the brief wants them), and VideoObject is added only when both the
// transcript and the recording date exist. Rules of the block: only what was visible on the public sites at the recording date, neutral tone.
export const NICHE_VIDEO: null | {
  drive: string; poster: string; width: number; height: number; duration: string; recorded?: string;
  intro: string; chapters?: { title: string; start: number; end: number }[]; observations?: string[]; transcript?: string; contact: string; contactLink: string;
} = {
  drive: '1y7-xJcchsH2rsOh50_9AHpyMxdmtLzJL',
  poster: '/media/rozbor-webu-prekladatelskych-agentur-poster.webp',
  width: 1280,
  height: 652,
  duration: 'PT9M',
  intro: 'V 9minutovém videu procházím veřejné weby dvou překladatelských agentur: strukturu, stránky služeb, jazykové verze a indexaci. Popisuji jen to, co bylo na webech vidět v době natáčení. Nehodnotím kvalitu překladů ani byznys.',
  contact: 'Pokud se vás web týká a chcete něco upřesnit nebo opravit, napište mi přes',
  contactLink: 'kontaktní stránku',
};

const raw = {
  lang: 'cs' as const,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  lead: 'Dělám SEO a GEO/AEO pro překladatelské agentury v Praze. Stavím stránky jazykových párů, služeb pro firmy a měst, hlídám indexaci jazykových verzí a pracuji s Google Maps i Mapy.com. Začínáme bezplatným auditem technických chyb, bez hovoru a bez závazků. Prezentaci posílám do 24 hodin.',
  heroAudit: 'Chci bezplatný audit',
  heroVideoLink: 'Podívat se na rozbor webů',
  videoTitle: 'Co jsem viděl na webech přesto.cz a skrivanek.cz?',
  videoRecordedLabel: 'Natočeno',
  videoChaptersTitle: 'Kapitoly',
  videoPlay: 'Přehrát video',
  videoOpen: 'Otevřít video v novém okně',
  videoObsTitle: 'Co bylo na webech vidět',
  videoTranscriptTitle: 'Přepis videa',

  whyTitle: 'Proč překladatelské agentury potřebují SEO?',
  whyAnswer: 'Překladatelská agentura potřebuje SEO, protože firmy hledají dodavatele překladů ve vyhledávání: podle jazykového páru, oboru a města. Bez vlastních stránek pro tyto dotazy poptávky odcházejí ke konkurenci. SEO přivádí poptávky z Googlu a Seznamu průběžně, ne jen po dobu placené kampaně.',
  why: [
    'B2B poptávky: firmy, kanceláře, zdravotnictví nebo průmysl hledají překladatele podle oboru.',
    'Jazykové páry: lidé hledají konkrétní kombinaci, například překlad z češtiny do angličtiny.',
    'Města: poptávka v Praze a okolí vyžaduje stránky, které město opravdu jmenují.',
    'Sezónnost: poptávky během roku kolísají a stránky v Googlu pomáhají výkyvy vyrovnávat, i když nic nezaručují.',
  ],
  whyText: 'Nejde o to mít web, ale o marketing překladatelské agentury, který přivádí nové klienty a zakázky z vyhledávání.',

  doTitle: 'Co pro překladatelskou agenturu konkrétně dělám?',
  doAnswer: 'Pro překladatelskou agenturu stavím stránky jazykových párů, služeb, oborů a měst, upravuji stránku pro firmy (B2B), hlídám indexaci a duplicity mezi jazykovými verzemi a připravuji obsah i pro AI odpovědi. K tomu patří lokální přítomnost v Google Maps a na Mapy.com.',
  doIntro: 'Optimalizace webu překladatelské agentury není jedna úprava, ale několik stránek a nastavení, které na sebe navazují:',
  do: [
    { h: 'Stránky jazykových párů', text: 'Samostatná stránka pro jazykový pár dává smysl tam, kde na pár existuje poptávka a agentura o něm umí napsat konkrétně. Není potřeba ji dělat vždy.' },
    { h: 'Stránky služeb a oborů', text: 'Firma obvykle nehledá „překlady“ obecně, ale například právní, technický nebo lékařský překlad. Každá služba a obor má mít stránku, která na dotaz odpoví.' },
    { h: 'Stránka pro firmy (B2B poptávky)', text: 'Firmy rozhodují jinak než jednotlivci: chtějí vědět, jak se pracuje na opakovaných zakázkách a v jakých oborech. Stránka pro B2B poptávky to popíše srozumitelně a vede k poptávce.' },
    { h: 'Jazykové verze: indexace a duplicity', text: 'U vícejazyčného webu hlídám, aby Google viděl každou jazykovou verzi a nepletl si je s kopiemi. Duplicity mezi verzemi jsou častá technická chyba.' },
    { h: 'Lokální přítomnost: Google Maps a Mapy.com pro agentury', text: 'Pro agentury s kanceláří nebo pobočkou v Praze je důležitý profil na Google Maps a na Mapy.com. Lokální SEO překladatelské agentury Praha stojí na jednotných údajích, recenzích a stránce, která na profil navazuje.' },
    { h: 'GEO/AEO: součást každé služby', text: 'GEO/AEO připravuje obsah tak, aby mu AI nástroje rozuměly a mohly ho citovat. Je součástí každé služby; citace slíbit nelze.' },
  ],
  quote: 'U překladatelské agentury se poptávka rozhoduje v detailech: jazykový pár, obor, město. Stránky, které tyto detaily nepopisují, nemá Google co ukázat.',

  caseTitle: 'Jak to funguje v praxi? Případová studie',
  caseAnswer: 'U překladatelské agentury s pobočkami rostly poptávky tři měsíce po sobě o 65–70 % měsíc po měsíci a B2B poptávky se zvýšily trojnásobně (březen–září 2026). Údaje jsou relativní a klient zůstává anonymní. Postup, výsledky i omezení najdete v celé případové studii.',
  caseFormula: HALF_FORMULA_CS,
  caseNote: 'Název klienta a absolutní čísla nezveřejňuji.',
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

  auditTitle: 'Co zahrnuje bezplatný audit?',
  auditAnswer: 'Bezplatný audit zkontroluje technické chyby webu: indexaci, duplicitní obsah a další technické problémy. U vícejazyčných webů se dívám zvlášť na indexaci jazykových verzí a duplicity mezi nimi. Výsledek dostanete jako krátkou prezentaci do 24 hodin, bez hovoru a bez závazků.',
  auditNotLead: 'Do auditu nepatří:',
  auditNot: ['klíčová slova', 'konkurence', 'mapy', 'viditelnost v AI vyhledávání', 'rychlost načítání', 'mobilní verze'],
  auditCta: 'Chci bezplatný audit',

  formatsTitle: 'Jaké formáty spolupráce existují?',
  formatsAnswer: 'Můžete začít bezplatným auditem, konzultací, SEO startem na 3 měsíce, nebo Full SEO na rok. Pro lokální přítomnost je samostatná služba Mapy. Každá stránka služby vysvětluje, co přesně formát obsahuje.',
  formats: {
    head: ['Formát', 'Pro koho', 'Co zahrnuje'],
    rows: [
      { page: 'consulting' as const, label: 'SEO konzultace', who: 'pro ty, kdo potřebují odpovědi a plán', what: '1 hodina, nebo audit s plánem na 12 měsíců' },
      { page: 'start' as const, label: 'SEO start na 3 měsíce', who: 'pro ty, kdo chtějí postavit základ webu', what: '3 měsíce: audit, opravy, klíčová slova a klíčové stránky' },
      { page: 'fullSeo' as const, label: 'Full SEO na rok', who: 'pro ty, kdo chtějí dlouhodobý růst', what: '12 měsíců: strategie, čtvrtletní priority a měsíční obsah; GEO/AEO v každé službě' },
      { page: 'maps' as const, label: 'SEO pro Mapy', who: 'pro agentury, které hledají zákazníky lokálně', what: 'Google Maps a Mapy.com, od 4 měsíců' },
    ],
  },
  formatsNote: 'První výsledky se obvykle objeví za 2–3 měsíce; garance neexistuje.',

  reviewsTitle: 'Co říkají klienti?',
  reviewsAnswer: 'Recenze od klientů najdete na samostatné stránce, vždy s uvedením zdroje.',
  reviewsLink: 'Všechny recenze',

  faqTitle: 'Často kladené otázky',
  faq: [
    { q: 'Jak dlouho trvá SEO pro překladatelskou agenturu?', a: 'První výsledky se obvykle objeví za 2–3 měsíce. Garantovat je nelze, záleží na stavu webu a konkurenci v oboru.' },
    { q: 'Čím se SEO liší od reklamy pro překladatelskou agenturu?', a: 'Reklamu nespravuji. SEO buduje stránky, které přivádějí poptávky dlouhodobě; reklama přináší poptávky po dobu, kdy za ni platíte.' },
    { q: 'Potřebuje agentura samostatnou stránku pro každý jazykový pár?', a: 'Ne vždy. Stránku má smysl dělat tam, kde na pár existuje poptávka a agentura umí o něm napsat konkrétně.' },
    { q: 'Jak vypadá SEO pro agenturu s pobočkami v několika městech?', a: 'Každé město potřebuje vlastní lokální stránku a profil na Google Maps a na Mapy.com s jednotnými údaji. Praha má vlastní podmínky a konkurenci, proto její stránka popisuje pražskou nabídku a nekopíruje text jiných měst.' },
    { q: 'Co dělá bezplatný audit u webů s více jazykovými verzemi?', a: 'Zkontroluje indexaci jazykových verzí a duplicity mezi nimi. Klíčová slova, konkurence, mapy, viditelnost v AI, rychlost a mobilní verze do auditu nepatří.' },
    { q: 'Kolik firem z oboru obsluhujete současně?', a: NICHE_SHARED_CS.capacityShort },
  ],

  endTitle: 'Zjistěte, jestli má váš web technické chyby',
  endText: 'Bezplatný audit ukáže technické chyby webu překladatelské agentury: indexaci, duplicity a další technické problémy. Krátkou prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  endCta: 'Chci bezplatný audit',
  endContact: 'Napište mi',

  schema: {
    serviceName: 'SEO a GEO/AEO pro překladatelské agentury',
    areaServed: 'Praha',
    audience: 'překladatelské agentury',
  },
};

export const NICHE_CS = walk(raw);
