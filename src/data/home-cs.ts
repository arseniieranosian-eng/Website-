// Czech content of the home page / (brief of 20.10.2026): a hub between the sections. Prices come from the shared sources
// (consulting-shared, start-shared, fullseo-shared); case formulas from case-summary.ts (one place). No blog, no "agentura",
// no "3 roky zkušeností", no average growth, no guarantees. Maps show no price until the payment terms are decided.
import { fmtKc, PRICES } from './consulting-shared';
import { NICHE_READY } from '../i18n/routes';
import { START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { KB_FORMULA_CS, SEASON_FORMULA_CS, HALF_FORMULA_CS, TYPO_FORMULA_CS, EDU_FORMULA_CS } from './case-summary';

export const HOME_CS = {
  lang: 'cs' as const,
  updatedLabel: 'Aktualizováno',
  heroName: 'Arsenii Eranosian',
  eyebrow: 'SEO specialista v Praze',
  lead: 'Jsem SEO a GEO/AEO specialista v Praze a pracuji osobně, jeden člověk od auditu po reporty. Pomáhám firmám získávat poptávky z Googlu, Seznamu i odpovědí AI. Začněte bezplatným auditem technických chyb webu: krátká prezentace do 24 hodin, bez callu a bez závazků.',
  heroAudit: 'Chci bezplatný audit',
  heroContact: 'Napište mi',
  formTitle: 'Bezplatný SEO audit',

  navTitle: 'Kam dál? Vyberte podle toho, co potřebujete',
  navAnswer: 'Nevíte, kam jít dál? Vyberte situaci, která je vám nejblíž, a otevře se správná stránka.',
  nav: [
    { need: 'Chci jen zkontrolovat web', page: 'audit' as const, text: 'Krátká prezentace s hlavními technickými chybami do 24 hodin, zdarma.' },
    { need: 'Potřebuji poradit a mít plán', page: 'consulting' as const, text: 'Odpovědi na vaše otázky a plán, co dělat dál.' },
    { need: 'Chci rychlý start na 3 měsíce', page: 'start' as const, text: 'Intenzivní práce na webu a mapách od auditu po optimalizaci.' },
    { need: 'Chci dlouhodobý růst', page: 'fullSeo' as const, text: 'Roční péče podle plánu: strategie, obsah a monitoring.' },
    { need: 'Jsem lokální firma', page: 'maps' as const, text: 'Google Maps a Mapy.com: profil, recenze a lokální pozice.' },
    { need: 'Chci rozumět GEO/AEO', page: 'geo' as const, title: 'SEO a GEO/AEO', text: 'Jak SEO a GEO/AEO funguje a proč je dělám společně.' },
  ],

  servicesTitle: 'Jaké služby nabízím?',
  services: [
    { page: 'consulting' as const, text: 'Kontrola webu, odpovědi na otázky a jasný akční plán. Online nebo osobně v Praze.', meta: `Od ${fmtKc(PRICES.questions)} (1 hodina nebo bez časového limitu)` },
    { page: 'start' as const, text: 'Intenzivní práce od auditu a oprav po klíčová slova a optimalizaci klíčových stránek.', meta: `${fmtKc(START_PRICE)}, 3 měsíce` },
    { page: 'fullSeo' as const, text: 'Roční péče: strategie, obsah, technický monitoring a GEO/AEO.', meta: `Od ${fmtKc(FULLSEO_MONTHLY)} měsíčně, 12 měsíců` },
    { page: 'maps' as const, text: 'Lokální SEO: profil, recenze a lokální pozice.', meta: 'Od 4 měsíců' },
  ],
  servicesMore: 'Více',

  nichesTitle: 'Obory a města',
  nichesAnswer: 'Pro některé obory mám samostatné stránky s tím, co v nich dělám a jak postupuji.',
  // Grouped by niche: the niche name is the subheading, the city pages are the cards under it (labels come from NICHE_GROUPS in routes.ts).
  nicheGroups: [
    {
      id: 'translation' as const,
      cards: [
        { page: 'nicheTranslation' as const, title: 'SEO pro překladatelské agentury v Praze', text: 'Stránky jazykových párů, služeb a měst, indexace jazykových verzí a lokální přítomnost.' },
        ...(NICHE_READY.nicheBrno ? [{ page: 'nicheBrno' as const, title: 'SEO pro překladatelské agentury v Brně', text: 'Stránky jazykových párů, služeb a lokality, indexace jazykových verzí a Mapy.com.' }] : []),
      ],
    },
  ],

  quote: 'SEO není o aktivitě, ale o pořadí priorit. Nejdřív odstraníte, co Googlu brání web pochopit, pak postavíte architekturu podle byznysu a teprve potom škálujete obsah.',

  geoTitle: 'Co je GEO/AEO a proč ho dělám spolu se SEO?',
  geoAnswer: 'SEO řeší, aby se web zobrazoval v Googlu a Seznamu. GEO/AEO řeší, aby vás citovaly a doporučovaly AI nástroje, například ChatGPT, Gemini, Perplexity a Google AI Overviews. Dělám je vždy společně, je to součást každé služby.',
  geoLink: 'Jak SEO a GEO/AEO funguje',

  resultsTitle: 'Jaké výsledky už mají moji klienti?',
  resultsAnswer: 'Pět případových studií z různých situací: nový web, nízká sezóna, růst návštěvnosti a firma s pobočkami (první čtyři měsíce i půl roku práce). U každé uvádím období a zdroj čísel.',
  cases: [
    { label: 'Firma s pobočkami', name: 'Překladatelská agentura, část 1', formula: KB_FORMULA_CS, page: 'caseKb' as const },
    { label: 'Nízká sezóna', name: 'Překladatelská agentura, část 2', formula: SEASON_FORMULA_CS, page: 'caseSeason' as const },
    { label: 'Půl roku práce', name: 'Překladatelská agentura: půl roku práce', formula: HALF_FORMULA_CS, page: 'caseHalf' as const },
    { label: 'Růst návštěvnosti', name: 'Tiskárna', formula: TYPO_FORMULA_CS, page: 'caseTypo' as const },
    { label: 'Nový web', name: 'Vzdělávací platforma', formula: EDU_FORMULA_CS, page: 'caseEdu' as const },
  ],
  resultsMore: 'Všechny případové studie',
  resultsNote: 'Názvy klientů a absolutní čísla nezveřejňuji. Počty a procenta jsou relativní data.',
  caseMore: 'Číst studii',

  reviewsTitle: 'Co říkají klienti?',
  reviewsMore: 'Všechny recenze',

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Jak probíhá bezplatný audit?', a: 'Pošlete adresu webu, zkontroluji technické chyby (indexaci, duplicity a další problémy) a do 24 hodin dostanete krátkou prezentaci. Bez callu a bez závazků.' },
    { q: 'Kolik stojí SEO služby?', a: `Audit je zdarma. Konzultace stojí od ${fmtKc(PRICES.questions)}, SEO start ${fmtKc(START_PRICE)} za 3 měsíce a Full SEO od ${fmtKc(FULLSEO_MONTHLY)} měsíčně. Ceny najdete u jednotlivých služeb výše.` },
    { q: 'Za jak dlouho přijdou první výsledky?', a: 'První výsledky přicházejí obvykle za 2–3 měsíce, ale zaručit je nelze. Záleží na oboru, konkurenci a stavu webu.' },
    { q: 'Pracujete i mimo Prahu?', a: 'Ano. Pracuji převážně na dálku, s klienty po celém Česku i v zahraničí; osobní schůzka v Praze je možná.' },
    { q: 'Čím se liší SEO a GEO/AEO?', a: 'SEO míří na pozice v Googlu a Seznamu, GEO/AEO na to, aby vás doporučovaly a citovaly AI nástroje. Dělám je společně.', link: 'geo' as const, linkText: 'SEO a GEO/AEO' },
    { q: 'Co když nevím, kterou službu potřebuji?', a: 'Začněte bezplatným auditem nebo konzultací, případně použijte výše blok „Kam dál?“.' },
  ],
  faqMore: 'Všechny dotazy',

  aboutTitle: 'Kdo za tím stojí?',
  aboutAnswer: 'Jsem Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Pracuji osobně, česky, anglicky a rusky.',
  aboutMore: 'Více o mně',
  photoAlt: 'Arsenii Eranosian, SEO specialista v Praze',

  ctaTitle: 'Zjistěte, kolik zákazníků vám uniká',
  ctaText: 'Bezplatný audit ukáže technické chyby vašeho webu.',
  ctaAudit: 'Chci bezplatný audit',
  ctaContact: 'Napište mi',
};
