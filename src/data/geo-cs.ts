// Czech content of /seo-a-geo/ (brief of 20.10.2026): an informational hub, NOT a service (no form, no price, no
// Service/Offer markup). GEO/AEO is part of every service. Written as an adaptation for the Czech market.

import { CASE_GEO_LINE } from './case-summary';

// First publication of the page (site launch); do NOT bump it when the page is edited.
export const GEO_PUBLISHED = '2026-10-19';

const geoDef = 'optimalizace webu pro generativní AI nástroje, které skládají odpověď z více zdrojů, například ChatGPT, Gemini nebo Perplexity.';
const aeoDef = 'optimalizace webu pro přímé odpovědi na otázky, například v Google AI Overviews.';
const diff = 'SEO zlepšuje pozice ve výsledcích Google a Seznamu. GEO/AEO zvyšuje šanci, že vás AI nástroje jako ChatGPT, Gemini nebo Google AI Overviews doporučí a ocitují. Dělám obojí, protože se vzájemně posilují.';
const noGuarantee = 'Žádnou zmínku nelze zaručit.';

export const GEO_CS = {
  lang: 'cs' as const,
  h1: 'SEO + GEO/AEO: dvě v jednom',
  updatedLabel: 'Aktualizováno',
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  authorRole: 'SEO a GEO/AEO specialista v Praze',
  // Visible definition, 40-60 words, right under the H1 (the page demonstrates what it explains).
  definition: 'GEO (Generative Engine Optimization) a AEO (Answer Engine Optimization) je optimalizace webu tak, aby ho AI nástroje jako ChatGPT, Gemini, Perplexity nebo Google AI Overviews dokázaly najít, pochopit a citovat v odpovědích. Dělám ji vždy společně se SEO: není to zvláštní balíček ani zvláštní cena.',

  whatTitle: 'Co je GEO a co je AEO?',
  what: [
    { term: 'GEO', def: geoDef },
    { term: 'AEO', def: aeoDef },
  ],
  whatNote: 'V praxi se oba pojmy prolínají, proto je řeším společně a píšu GEO/AEO.',

  diffTitle: 'Jaký je rozdíl mezi SEO a GEO/AEO?',
  diffAnswer: diff,
  table: {
    corner: 'Parametr',
    head: ['SEO', 'GEO/AEO'],
    rows: [
      ['Kde se zobrazujete', 'Google a Seznam', 'ChatGPT, Gemini, Perplexity, AI Overviews'],
      ['Cíl', 'Pozice a návštěvnost z výsledků vyhledávání', 'Zmínky a citace v odpovědích AI'],
      ['Na co se optimalizuje', 'Technický stav a rychlost, klíčová slova a obsah, odkazy a autorita', 'Strukturovaná data a jasná entita, obsah ve formátu otázka a přímá odpověď, zmínky v důvěryhodných zdrojích'],
      ['Jak se měří', 'Pozice, návštěvnost, poptávky', 'Zmínky v odpovědích AI'],
    ],
  },

  togetherTitle: 'Proč dělám SEO a GEO/AEO dohromady?',
  togetherAnswer: 'AI nástroje čerpají z dobře indexovaných a důvěryhodných webů, které bývají právě ty s dobrým SEO. Obsah psaný srozumitelně pro AI je navíc srozumitelnější i pro lidi a vyhledávače. Proto to není dvojí práce ani dvojí cena.',

  googleTitle: 'Co o tom říká Google?',
  googleAnswer: 'Google ve své dokumentaci uvádí, že pro zobrazení v AI Overviews a AI Mode nejsou potřeba žádné zvláštní podmínky ani zvláštní značení a že platí běžné zásady SEO. Proto GEO/AEO nestavím proti SEO, ale na jeho základu.',
  googleLink: { text: 'oficiální dokumentace Google', href: 'https://developers.google.com/search/docs/appearance/ai-features', prefix: 'Zdroj: ' },

  doTitle: 'Co konkrétně dělám pro GEO/AEO',
  // The same strings are shown in the numbered list and emitted as HowToStep text (word for word).
  steps: [
    'Audit viditelnosti v AI: které otázky testovat a které značky AI doporučuje.',
    'Značení Schema.org pro firmu, osoby, služby a FAQ: pomáhá jednoznačně popsat, kdo jste a co nabízíte (není to podmínka zobrazení v Google).',
    'Úprava klíčových stránek do formátu otázka a přímá odpověď.',
    'Sjednocení údajů o firmě na webu a v katalozích.',
    'Pravidelné měření zmínek v odpovědích AI.',
  ],

  guaranteeTitle: 'Garantujete zmínku v odpovědích AI?',
  guaranteeAnswer: 'Ne. Nikdo nemůže zaručit konkrétní zmínku v odpovědi AI, protože AI nástroje nelze ovládat a jejich odpovědi se mění. Garantuji transparentní práci, srozumitelný plán a měřitelné cíle domluvené na začátku.',

  separateTitle: 'Platím za GEO/AEO zvlášť?',
  separateAnswer: 'Ne. GEO/AEO je součástí každé služby, není to samostatný balíček ani samostatná cena.',
  includedTitle: 'Kde je GEO/AEO zahrnuto',
  included: [
    { text: 'Konzultace: doporučení pro GEO/AEO', link: 'Konzultace', page: 'consulting' as const },
    { text: 'Start na 3 měsíce', link: 'Start na 3 měsíce', page: 'start' as const },
    { text: 'Full SEO na rok', link: 'Full SEO na rok', page: 'fullSeo' as const },
    { text: 'Mapy (Google + Mapy.com)', link: 'Mapy (Google + Mapy.com)', page: 'maps' as const },
  ],
  auditNote: { link: 'Bezplatný audit', after: ' GEO/AEO a viditelnost v AI nekontroluje, jen technické chyby webu.' },

  seeTitle: 'Jak vás vidí AI a kde to ověřím?',
  seeAnswer: 'Viditelnost vašeho webu v AI odpovědích ověřuji v rámci služeb Konzultace, Start na 3 měsíce a Full SEO na rok. Bezplatný audit kontroluje jen technické chyby webu, viditelnost v AI nekontroluje.',

  caseTitle: 'Příklady z praxe',
  caseText: CASE_GEO_LINE.cs,
  caseLink: 'Celý příběh',
  // Screenshots of Google answers that mention a client agency. The client's name, addresses, phone and logo are covered
  // (the red arrows are the author's own marks). Dates of the screenshots are not given, so none is claimed.
  examplesIntro: 'Čtyři ukázky z Googlu, kde se překladatelská agentura, na které pracuji, objevuje v odpovědích AI. Název klienta, adresy, telefon a logo jsem zakryl.',
  examples: [
    {
      id: 'ai-medical',
      images: [{ src: '/images/geo/ai-medical.webp', width: 497, height: 530, alt: 'Google AI Overview k dotazu „czech medical translation“: odpověď doporučuje překladatelskou agenturu, její název je zakrytý' }],
      caption: 'Dotaz „czech medical translation“: AI Overview doporučuje agenturu pro lékařské překlady. Název agentury je zakrytý.',
    },
    {
      id: 'ai-diploma',
      images: [
        { src: '/images/geo/ai-diploma-1.webp', width: 640, height: 1387, alt: 'Odpověď Google v režimu AI na dotaz „translation of diploma in Prague“, první část: cena a požadavky na ověřený překlad diplomu' },
        { src: '/images/geo/ai-diploma-2.webp', width: 640, height: 1387, alt: 'Odpověď Google v režimu AI na dotaz „translation of diploma in Prague“, druhá část: agentura je uvedena mezi místními poskytovateli, její název je zakrytý' },
      ],
      caption: 'Dotaz „translation of diploma in Prague“ v režimu AI Google. Jde o jednu odpověď na dvou snímcích; v druhé části je agentura uvedena mezi poskytovateli v Praze. Název je zakrytý.',
    },
    {
      id: 'ai-cities',
      images: [{ src: '/images/geo/ai-cities.webp', width: 720, height: 1280, alt: 'Tři výsledky Google k dotazům „překlady Pardubice“, „překlady Brno“ a „překlady Praha“: AI Overview uvádí překladatelskou agenturu a její pobočky, názvy, adresy, telefon a logo jsou zakryté' }],
      caption: 'Dotazy „překlady Pardubice“, „překlady Brno“ a „překlady Praha“: AI Overview uvádí agenturu a její pobočky. Názvy, adresy, telefon a logo jsou zakryté, červené šipky jsou moje značky.',
    },
  ],
  examplesNote: 'Odpovědi AI se mění a zmínku v nich zaručit nelze. Ukázky dokládají, že se agentura v takových odpovědích objevila, ne že se tam objeví vždy.',

  faqTitle: 'Časté otázky o GEO a AEO',
  faq: [
    { q: 'Co je GEO a AEO?', a: `GEO (Generative Engine Optimization) je ${geoDef} AEO (Answer Engine Optimization) je ${aeoDef} V praxi se oba pojmy prolínají a řeším je společně.` },
    { q: 'Jak se liší SEO od GEO/AEO?', a: diff },
    { q: 'Musím platit za GEO/AEO zvlášť?', a: 'Ne, je součástí každé služby.' },
    { q: 'Jak AI vybírá, které weby zmíní?', a: `Přesný mechanismus veřejně známý není a liší se podle nástroje. AI obvykle čerpá z dobře indexovaných a důvěryhodných webů s jasnými odpověďmi na otázky, což bývají weby s kvalitním SEO. ${noGuarantee}` },
    { q: 'Kde si mohu nechat zkontrolovat viditelnost webu v AI?', a: 'V rámci Konzultace, Startu na 3 měsíce a Full SEO na rok. Bezplatný audit kontroluje jen technické chyby webu.' },
  ],

  ctaTitle: 'Chcete začít u základu?',
  ctaText: 'Bezplatný audit najde technické chyby vašeho webu: indexaci, duplicity a další problémy. Nebo mi napište.',
  ctaAudit: 'Chci bezplatný audit',
  ctaContact: 'Napište mi',

  schema: {
    termSetName: 'GEO a AEO',
    howToName: 'Co konkrétně dělám pro GEO/AEO',
    geoAlt: 'Generative Engine Optimization',
    aeoAlt: 'Answer Engine Optimization',
  },
};
