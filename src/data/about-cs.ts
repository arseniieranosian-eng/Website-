// Czech content of /o-mne/ (brief of 20.10.2026), clients anonymous (translation agency, print shop, education platform,
// real-estate agency). Figures only from the accepted case pages; NOT used: +777 %, "3 roky", "55–60 %", "+775 % za tři roky",
// "+65–70 % měsíčně", "B2B ×3", client names. Open points are marked in the README / report, not invented here: the
// experience wording ("od roku 2024"), the markets, the Indian internship figure (+60 %, relative data), the tools list.
import { walk } from '../lib/cs-typo';
import { SEASON_FORMULA_CS, TYPO_FORMULA_CS, EDU_FORMULA_CS } from './case-summary';


const raw = {
  lang: 'cs' as const,
  updatedLabel: 'Aktualizováno',
  answer: 'Jsem Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Pracuji osobně, česky, anglicky a rusky. Začínám od byznys modelu, ne od klíčových slov: SEO beru jako systém, který mění vyhledávání na poptávky. Moje projekty doložím případovými studiemi.',
  heroAudit: 'Chci bezplatný audit',
  heroContact: 'Napište mi',
  photoAlt: 'Arsenii Eranosian, SEO specialista v Praze',
  photo2Alt: 'Arsenii Eranosian při rozhovoru o SEO',

  approachTitle: 'Jak přistupuji k SEO?',
  approachAnswer: 'Nezačínám seznamem klíčových slov, ale byznys modelem: jak firma vydělává, kdo jsou její skuteční zákazníci a co brání vyhledávání, aby je přivádělo. SEO pro mě není seznam úkolů, ale systém, který mění vyhledávání na poptávky.',
  approachText: {
    before: 'Technické SEO, obsah, lokální SEO a strukturovaná data slouží jedné otázce: jak z organického vyhledávání udělat poptávky. Služby, které z toho vycházejí: ',
    links: [
      { text: 'konzultace', page: 'consulting' as const },
      { text: 'SEO start na 3 měsíce', page: 'start' as const },
      { text: 'Full SEO na rok', page: 'fullSeo' as const },
      { text: 'mapy', page: 'maps' as const },
    ],
    afterLinks: '. ',
    geo: { before: 'GEO/AEO je součástí každé služby (', link: 'SEO a GEO/AEO', after: ').' },
  },

  expTitle: 'Jaké mám zkušenosti?',
  expAnswer: 'Pracuji v SEO od roku 2024 na projektech ve čtyřech zemích. U každého projektu uvádím roli, období a doložený výsledek; názvy klientů nezveřejňuji.',
  exp: [
    { head: 'Překladatelská agentura (Česko) · SEO specialista na kontrakt · březen – září 2026', text: `${SEASON_FORMULA_CS}; lokální stránky podle měst, FAQ a blog jako horní část trychtýře.`, links: [{ text: 'Půl roku práce', page: 'caseKb' as const }, { text: 'Nízká sezóna', page: 'caseSeason' as const }], linksLead: 'Případové studie: ' },
    { head: 'Tiskárna (ruskojazyčný trh) · SEO specialista na volné noze · léto 2024 – léto 2025', text: `${TYPO_FORMULA_CS}; technický základ, architektura klíčových slov, 20+ vstupních stránek na WordPressu.`, links: [{ text: 'Případová studie', page: 'caseTypo' as const }], linksLead: '' },
    { head: 'Vzdělávací platforma (Bulharsko) · marketér (SEO), stáž · březen – září 2025', text: `${EDU_FORMULA_CS.replace(/, březen → září 2025 \(7 měsíců\)/, ' za 7 měsíců')}; výzkum klíčových slov a návrh struktury webu a blogu.`, links: [{ text: 'Případová studie', page: 'caseEdu' as const }], linksLead: '' },
    { head: 'Digitální marketing (Indie) · SEO stážista · 2024 (5 měsíců)', text: '+60 % organické návštěvnosti za 5 měsíců (relativní data); on-page a off-page optimalizace; první profesní SEO projekt.', links: [], linksLead: '' },
  ],
  expNote: 'Konkrétní čísla klientů nezveřejňuji.',

  consTitle: 'Co jsem řešil v konzultacích?',
  consAnswer: 'Vedle dlouhodobých projektů dělám konzultace a SEO audity na zakázku. Čtyři příklady (anonymizované) ukazují, co z nich zákazník dostane.',
  cons: [
    'Realitní kancelář v Praze (říjen 2026). Klient se ptal na konkrétní cíl: top 1 pro jeden konkrétní dotaz. Místo nereálného slibu jsem vysvětlil, že konkurenti nejsou obsahové weby, ale produkty s vlastními algoritmy a léty PR, takže top 1 v rozumném horizontu není reálné. Ukázal jsem skutečný potenciál: dlouhý chvost a lokální dotazy, obsahový trychtýř a anglickou verzi pro expaty. Výstup: plán na 12 měsíců ve 4 etapách podle sezónnosti poptávky.',
    'PR firma (říjen 2026). Web bez jasné struktury, stránky bez vlastní role. Navrhl jsem architekturu, kde má každá stránka svůj úkol a všechny vedou k poptávce; služby na samostatných stránkách, FAQ s krátkou přímou odpovědí pod otázkou a schema značkami pro AI vyhledávání.',
    'Analýza návštěvnosti v Yandex Metrice (zadání od firmy). Rozbor zdrojů návštěvnosti, Google vs Yandex, kvalita návštěv.',
    '1:1 mentoring pro lidi na cestě do SEO.',
  ],
  consLink: 'SEO konzultace',

  marketsTitle: 'S jakými trhy a jazyky pracuji?',
  marketsAnswer: 'Pracoval jsem na projektech v Česku, Rusku, Bulharsku a Indii a obsah připravuji česky, rusky, ukrajinsky a anglicky. Každá jazyková verze má své vlastní dotazy, proto obsah adaptuji, ne jen překládám.',
  markets: ['Trhy: Česko, Rusko, Bulharsko, Indie', 'Jazyky obsahu: cs, en, ru, uk'],

  toolsTitle: 'Jaké nástroje používám?',
  toolsAnswer: 'Pracuji s Ahrefs, SEMrush, Google Analytics 4, Google Search Console, Looker Studio, Yandex Metrikou a WordPressem. Nástroje jen sbírají data; závěry dělám ručně.',
  tools: ['Ahrefs', 'SEMrush', 'Google Analytics 4', 'Google Search Console', 'Looker Studio', 'Yandex Metrika', 'WordPress'],

  verifyTitle: 'Kde si mě ověříte?',
  verifyAnswer: 'Mé zkušenosti si ověříte na LinkedInu, v recenzích a v případových studiích s uvedeným obdobím a zdrojem čísel.',

  reviewsTitle: 'Co říkají klienti?',
  reviewsMore: 'Všechny recenze',

  faqTitle: 'Časté otázky o mně',
  faq: [
    { q: 'Kdo za webem stojí?', a: 'Za webem stojím já, Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Všechny služby dělám osobně.' },
    { q: 'Pracujete sám?', a: 'Ano. S každým klientem pracuji přímo já, od auditu po reporty; práci dál nepředávám.' },
    { q: 'V jakých jazycích pracujete?', a: 'Komunikuji česky, anglicky a rusky. Obsah připravuji pro české, anglické, ruské a ukrajinské publikum a adaptuji ho, ne jen překládám.' },
    { q: 'Jak vypadá první spolupráce?', a: 'Začíná bezplatným auditem technických chyb webu: krátká prezentace do 24 hodin, bez callu a bez závazků. Pak se sami rozhodnete: konzultace, SEO start na 3 měsíce, nebo Full SEO na rok.' },
    { q: 'Co nedělám?', a: 'Nezaručuji pozice ani konkrétní výsledek, ten závisí na oboru, konkurenci a stavu webu. U čísel vždy uvádím období a zdroj.' },
  ],

  ctaTitle: 'Jste v SEO na začátku, nebo chcete druhý pohled?',
  ctaText: 'Bezplatný audit ukáže technické chyby vašeho webu. Prezentaci dostanete do 24 hodin, bez callu a bez závazků.',
  ctaAudit: 'Chci bezplatný audit',
  ctaContact: 'Napište mi',
};

export const ABOUT_CS = walk(raw);
