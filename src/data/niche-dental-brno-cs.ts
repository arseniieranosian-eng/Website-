// Czech content of the niche landing page /seo-pro-zubni-ordinace-brno/ (brief of 27.11.2026). DRAFT, NOT PUBLISHED: built only when NICHE_READY.nicheDentalBrno is true (routes.ts; false = not built, not in the sitemap,
// not in the menu, not linked from other pages). Publication gate (doorway rule K9): block 4 "Co vidím na webech zubních ordinací v Brně?" (NICHE_DENTAL_BRNO_OBS) must hold the author's dated Brno data; until then it is null,
// the block is not rendered and scripts/check-niche-dental-brno-cs.mjs refuses a real build with the page. Preview for the author: PREVIEW_DRAFTS=1 npm run build (never upload that build).
// Structure and shared texts come from the Prague page (data/niche-dental-cs.ts), copied from there so that the wording stays the same; prices come from the same source (data/niche-prices.ts), no second hand-typed copy.
// NOT carried over from Prague: the numbers and dates of the observation (30 výsledků, 24/17, FAQ 7/24 and 3/17, blog 12/24 and 8/17, markup 17/24 and 11/17, 15. 11. 2026), the ZnamyLekar.cz observation of 5. 11. 2026 and the
// source line with that date, the capacity line ("volno", the capacity belongs to the niche, not to the city: the author decides one date for both pages [?3]). No link to the Prague page [?4]. Dates are set by hand by the author.
import { walk } from '../lib/cs-typo';
import { priceAnswerCs, priceFaqCs } from './niche-prices';
import { NICHE_DENTAL_CS as P } from './niche-dental-cs';

// Placeholders: the author sets the real date of publication / update (the page is not published).
export const NICHE_DENTAL_BRNO_PUBLISHED = '2026-11-27';

// Block 4 (WAITING for the author's data from the Brno results). Template of the answer (40-60 words), the fields in [..] stay empty:
//   „K [DATUM] jsem na Googlu a Seznamu prošel po 30 výsledcích dotazu „stomatologie v Brně“. Mezi nimi bylo [X] webů ordinací na Googlu a [Y] na Seznamu. FAQ mělo [..], blog [..], strukturovaná data [..].
//    Je to můj pozorovací vzorek, ne průzkum trhu. Weby neuvádím.“
// plus "Metodika a limity" (2-3 sentences: date, queries, what counted as a practice site, what did not (catalogues, institutions), that the sample is small) and the score fields (as in Prague, sent by the author).
// After the author's data: measure the answer (40-60 words), check that no number equals a Prague one without a reason. No site, clinic or catalogue names (K2: dated, with limits).
export const NICHE_DENTAL_BRNO_OBS: null | { title: string; answer: string; list: string[]; method: string } = null;

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
  expAnswer: P.expAnswer,

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
