// Czech content of the niche landing page /seo-pro-zubni-ordinace-brno/ (brief of 27.11.2026). PUBLISHED by the author's decision of 27.11.2026 WITHOUT block 4 (the brief's gate K9 was lifted by the author): "Co vidím na webech zubních ordinací v Brně?" (NICHE_DENTAL_BRNO_OBS) is null and is added later with the dated Brno data;
// until then the block is not rendered and the "observation" sentences of the Prague experience paragraph are left out (unchanged by brief v3: other blocks are not touched; P.expAnswer could be restored now that block 4 exists).
// Structure and shared texts come from the Prague page (data/niche-dental-cs.ts), copied from there so that the wording stays the same; prices come from the same source (data/niche-prices.ts), no second hand-typed copy.
// NOT carried over from Prague: the numbers and dates of the observation (30 výsledků, 24/17, FAQ 7/24 and 3/17, blog 12/24 and 8/17, markup 17/24 and 11/17, 15. 11. 2026), the ZnamyLekar.cz observation of 5. 11. 2026 and the
// source line with that date, the capacity line ("volno", the capacity belongs to the niche, not to the city: the author decides one date for both pages [?3]). No link to the Prague page [?4]. Dates are set by hand by the author.
import { walk } from '../lib/cs-typo';
import { priceAnswerCs, priceFaqCs } from './niche-prices';
import { NICHE_DENTAL_CS as P } from './niche-dental-cs';

// Placeholders: the author sets the real date of publication / update (the page is not published).
export const NICHE_DENTAL_BRNO_PUBLISHED = '2026-11-27';

// Blocks 4 and 5 (brief v3 of 27.11.2026, the author's table "Stomatologie v Brně: Google.cz a Seznam.cz", 20 organic positions per engine; the date of the check is not in the author's file: default 27. 11. 2026 [?1]).
// Counts (checked against the brief's appendix): Google 20 positions = 19 different sites (one site twice), 17 practice / clinic sites (a hospital clinic and a catalogue excluded), FAQ 2 (+1 partial), blog 4 (+3 only news),
// markup 11 (JSON-LD 8 + 3 microdata only); Seznam 20 positions: 13 practice / clinic sites, 6 catalogues + 1 Mapy.com card, FAQ 3, blog 8 (+1 partial), markup 11 (all JSON-LD); 4 practice sites are in both results.
// No site, clinic, catalogue or portal names, no comparison with Prague or between the engines in words, no links, no ratings. The Prague numbers and dates are not used.
export const NICHE_DENTAL_BRNO_OBS: null | { title: string; answer: string; head: string[]; rows: string[][]; note: string; methodLabel: string; method: string; more: { before: string; link: string; after: string } } = {
  title: 'Co vidím na webech zubních ordinací v Brně?',
  answer: 'K 27. 11. 2026 jsem prošel po 20 organických výsledcích Googlu a Seznamu pro dotaz „stomatologie v Brně“. Webů ordinací a klinik bylo na Googlu 17 a na Seznamu 13, čtyři z nich byly v obou. Na Seznamu tvořily 7 z 20 pozic katalogy a karta Mapy.com, na Googlu jeden katalog.',
  head: ['', 'Google.cz', 'Seznam.cz'],
  rows: [
    ['Pozic ve vzorku', '20 (19 různých webů)', '20'],
    ['Weby ordinací a klinik', '17', '13'],
    ['Katalogy a karta Mapy.com', '1', '7'],
    ['Klinika nemocnice', '1', '0'],
    ['FAQ', '2 z 17', '3 z 13'],
    ['Blog nebo články', '4 z 17', '8 z 13'],
    ['Strukturovaná data (JSON-LD nebo microdata)', '11 z 17', '11 z 13'],
  ],
  note: 'Částečně: FAQ u 1 webu na Googlu, blog u 3 webů na Googlu a u 1 webu na Seznamu (jen sekce novinek či aktualit). JSON-LD mají 8 z 17 webů na Googlu a 11 z 13 na Seznamu; u části webů jde jen o obecné značení šablony.',
  methodLabel: 'Metodika a limity',
  // Added at the author's request (27.11.2026, overrides "no links inside the new blocks" of brief v3): a pointer to the full article; the numbers stay as above.
  more: { before: 'Podrobnější rozbor a postup, jak si web zkontrolovat sám, je v', link: 'samostatném článku', after: '.' },
  method: 'Dotaz „stomatologie v Brně“, Google.cz a Seznam.cz, vždy 20 pozic organických výsledků; reklamy, AI Overviews, blok Mapy.com a videa do počtu nepatří. Na Googlu byl jeden web dvakrát. FAQ, blog a značení jsem hledal ve zdrojovém kódu zadané stránky bez přihlášení. Krátkou odpověď jsem neposuzoval. Je to můj pozorovací vzorek, ne průzkum trhu. Weby neuvádím.',
};
export const NICHE_DENTAL_BRNO_SERP = {
  title: 'Co ukazuje vyhledávání pro dotaz „stomatologie v Brně“?',
  answer: 'K 27. 11. 2026 se na Google.cz pro dotaz „stomatologie v Brně“ zobrazily nad organikou dva bloky reklam a mezi nimi AI Overviews. Na Seznam.cz byla nad organikou reklama a blok Mapy.com, uvnitř organiky blok videí. Je to jedno pozorování, ne pravidlo; závěry o trhu z něj nedělám.',
};

const raw = {
  lang: 'cs' as const,
  published: NICHE_DENTAL_BRNO_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  proof: P.proof,
  // NEW text (brief 3.1) + the audit offer copied from the Prague summary.
  lead: 'Dělám SEO a GEO/AEO pro zubní ordinace v Brně. Pracuji z Prahy: konzultace probíhají online nebo osobně v Praze. Začíná se bezplatným technickým auditem: prezentace do 24 hodin, bez hovoru a bez závazků.',
  heroAudit: P.heroAudit,

  coopTitle: P.coopTitle,
  coopAnswer: P.coopAnswer,

  priceTitle: P.priceTitle,
  priceAnswer: priceAnswerCs('dental'),

  expTitle: P.expTitle,
  expAnswer: 'Pracoval jsem v jiných oborech, například pro překladatelskou agenturu. Zkušenosti z jiných oborů nevydávám za výsledek své práce v oboru zubní péče.',

  // NEW (brief 3.6, 49 words)
  brnoTitle: 'Na co si dát pozor, když má ordinace sídlo nebo pobočku v Brně?',
  brnoAnswer: 'Profil, stránka i služby mají popisovat jen místo, které ordinace v Brně skutečně má. Adresa, telefon a ordinační hodiny musí být všude stejné: na webu, v mapách i v katalozích. Má-li ordinace více poboček, každá potřebuje vlastní stránku a vlastní profil. Texty o léčbě před zveřejněním schvaluje lékař ordinace.',

  doTitle: P.doTitle,
  doAnswer: P.doAnswer,

  // ZnamyLekar.cz: only the general part (no observation of 5. 11. 2026, no source line with that date, no screenshot of the portal)
  zlTitle: P.zlTitle,
  zlAnswer: P.zlAnswer,
  zlData: P.zlData,
  zlFull: P.zlFull,
  zlDoctor: P.zlDoctor,

  fitTitle: P.fitTitle,
  fitAnswer: P.fitAnswer,

  faqTitle: P.faqTitle,
  faq: [
    ...P.faq,
    // NEW (brief 3.12, 43 words)
    { q: 'Máte v Brně kancelář?', a: 'V Brně adresu nemám, pracuji z Prahy. Konzultace probíhají online přes video nebo osobně v Praze. Na webu neuvádím brněnskou adresu ani netvrdím místní přítomnost. Pro ordinaci v Brně se postup nemění: začíná bezplatným technickým auditem webu, bez hovoru a bez závazku.' },
  ],
  disclosure: 'Jsem SEO specialista, proto může být moje hodnocení zaujaté.',
  mistake: { before: 'Našli jste chybu?', link: 'Napište mi.' },

  endTitle: P.endTitle,
  endText: P.endText,
  endCta: P.endCta,

  schema: {
    serviceName: 'SEO a GEO/AEO pro zubní ordinace v Brně',
    serviceType: 'SEO a GEO/AEO pro zubní ordinace',
    areaServed: 'Brno',
    audience: 'zubní ordinace',
  },
};

export const NICHE_DENTAL_BRNO_CS = walk(raw);
