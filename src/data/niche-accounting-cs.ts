// Czech content of the niche landing page /seo-pro-ucetni-kancelare-praha/ (brief of 23.10.2026), the first page of the third niche (accounting firms).
// Decisions of the author (answers to the brief's questions of 23.10.2026): no price on the page (links to the service pages), no search volumes (no Sklik data),
// the observation block of 25. 10. 2026 (16 sites, counts given by the author; added 25.10.2026, the earlier anchor-menu observation stays dropped), the translation-agency case may be mentioned with its approved formula (consent given), the capacity status
// for accounting is "volno" (dated 31. 10. 2026), daňoví poradci may be named in the audience (the advertising rules for them are NOT checked: nothing legal is
// written), no reel / video, no English version for now. No guarantees, no own case in this niche (said openly), no blog links, no "více klientů", the word
// "agentura" is never used about the author, GEO/AEO always together. hreflang: none (Czech only).
import SUMMARIES from './niche-summaries.json';
import { walk } from '../lib/cs-typo';
import { NICHE_READY } from '../i18n/routes';
import { START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { PRICES, fmtKc } from './consulting-shared';

// Once the Brno page is published (NICHE_READY.nicheAccountingBrno) the price answers are the same as on that page (brief of 31.10.2026, [?]4), and a link "Další města" is shown.
const BRNO = NICHE_READY.nicheAccountingBrno;
const PRICES_TEXT = `Balíček Start stojí ${fmtKc(START_PRICE)} za tři měsíce, Full SEO začíná na ${fmtKc(FULLSEO_MONTHLY)} měsíčně. Konzultace stojí ${fmtKc(PRICES.questions)} za hodinu, nebo ${fmtKc(PRICES.audit)} s auditem webu a plánem na 12 měsíců. Začít můžete bezplatným auditem technických chyb, který nic nestojí a k ničemu nezavazuje.`;

export const NICHE_ACCOUNTING_PUBLISHED = '2026-10-23';
// Status of the niche for the capacity rule (the same rule as on the other niche pages: at most three firms from one niche, counted per niche).
export const NICHE_ACCOUNTING_STATUS_DATE = '31. 10. 2026';

const raw = {
  lang: 'cs' as const,
  published: NICHE_ACCOUNTING_PUBLISHED,
  authorLabel: 'Autor',
  authorName: 'Arsenii Eranosian',
  updatedLabel: 'Aktualizováno',

  lead: SUMMARIES['/seo-pro-ucetni-kancelare-praha/'], // summary block (brief of 31.10.2026): data/niche-summaries.json
  heroAudit: 'Požádat o bezplatný audit',
  heroConsulting: 'Konzultace',

  searchTitle: 'Jak klienti hledají účetní?',
  searchAnswer: 'Lidé, kteří hledají účetní, nezadávají obecné „účetnictví“, ale konkrétní službu pro svou situaci: vedení účetnictví pro s.r.o., účetní pro OSVČ, mzdy nebo daňové přiznání, často s městem nebo čtvrtí. Objem jednotlivých dotazů se liší a měří se například ve Sklik, proto zde žádná čísla neuvádím.',
  search: {
    head: ['Typ dotazu', 'Příklad', 'Co člověk hledá'],
    rows: [
      ['Služba pro firmu', 'vedení účetnictví pro s.r.o.', 'pravidelné vedení účetnictví pro společnost'],
      ['Služba pro OSVČ', 'účetní pro OSVČ', 'účetní nebo daňovou evidenci pro živnostníka'],
      ['Mzdy', 'mzdy a personalistika', 'zpracování mezd a související agendu'],
      ['Daně', 'daňové přiznání', 'pomoc s podáním daňového přiznání'],
      ['Místo', 'účetní Praha', 'účetní kancelář v konkrétním městě nebo čtvrti'],
    ],
    note: 'Jde o příklady typů dotazů, ne o výsledky měření.',
  },

  whyTitle: 'Proč web účetní kanceláře často nepřináší poptávky z vyhledávání?',
  whyAnswer: 'Příčinou může být struktura webu: nabídka leží na jedné stránce a menu jen odkazuje kotvami níž, takže vyhledávač i AI vidí jednu stránku místo samostatných služeb. Nejde o technickou chybu, kterou ukáže bezplatný audit, ale o strukturu nabídky. Konkrétní příčinu určí až prohlídka vašeho webu.',
  whyLead: 'Jak to poznáte na vlastním webu:',
  why: [
    'Menu vede na kotvy na jedné stránce, ne na samostatné adresy.',
    'Služby nemají vlastní adresu, nedají se otevřít a sdílet zvlášť.',
    'Všechny služby mají stejný Title a stejný nadpis.',
    'Při hledání konkrétní služby se v Googlu zobrazí jen hlavní stránka.',
  ],

  needTitle: 'Co potřebuje web účetní kanceláře?',
  needAnswer: 'Web potřebuje samostatnou stránku pro každou službu a typ klienta, například s.r.o., OSVČ nebo mzdy, srozumitelné ceny nebo jejich rozsah a FAQ s otázkami, které lidé zadávají do Googlu nebo kladou AI. Důležitý je i technický základ: indexace a žádné duplicitní stránky. Pozice ani poptávky to nezaručí.',
  need: [
    'Samostatná stránka pro každou službu.',
    'Samostatná stránka pro každý typ klienta (s.r.o., OSVČ, mzdy).',
    'Ceny nebo jejich rozsah, aby návštěvník věděl, co čekat.',
    'FAQ s konkrétními otázkami, které lidé skutečně pokládají.',
    'Jednotný styl nadpisů a Titlů, aby se stránky nepletly.',
    'Indexace a žádné duplicitní stránky.',
  ],

  geoTitle: 'Co znamená GEO/AEO pro účetní kancelář?',
  geoAnswer: 'AI odpovědi odkazují na přehledné, aktuální a konkrétní stránky. GEO/AEO proto pro účetní kancelář znamená stručné odpovědi na konkrétní otázky, jasné ceny a samostatné stránky služeb. Že vás některá AI nebo AI přehled v Googlu doporučí, nelze zaručit a nebudu to slibovat.',
  geoLink: 'Jak SEO a GEO/AEO funguje',

  coopTitle: 'Jak spolupráce vypadá?',
  coopAnswer: 'Spolupráce začíná bezplatným auditem technických chyb: prezentaci dostanete do 24 hodin, bez hovoru a bez závazku. Pokud chcete pokračovat, následuje konzultace s plánem, tříměsíční Start nebo roční Full SEO. Pro zobrazení na mapách slouží samostatná služba. Rozsah každého kroku najdete na jeho stránce.',
  steps: {
    head: ['Krok', 'Co obsahuje', 'Odkaz'],
    rows: [
      { name: 'Bezplatný audit', text: 'technické chyby webu: indexace, duplicity a další technické problémy', page: 'audit' as const, link: 'Bezplatný audit' },
      { name: 'Konzultace', text: 'hodina odpovědí, nebo audit s plánem na 12 měsíců', page: 'consulting' as const, link: 'SEO konzultace' },
      { name: 'Start na 3 měsíce', text: 'tři měsíce práce na základu webu a klíčových stránkách', page: 'start' as const, link: 'SEO start na 3 měsíce' },
      { name: 'Full SEO na rok', text: 'dlouhodobá práce se strategií, obsahem a technickým dohledem', page: 'fullSeo' as const, link: 'Full SEO na rok' },
      { name: 'Mapy', text: 'Google Maps a Mapy.com pro místní vyhledávání', page: 'maps' as const, link: 'SEO pro Mapy' },
    ],
  },

  priceTitle: 'Kolik to stojí a kdy přijdou první výsledky?',
  priceAnswer: BRNO ? `${PRICES_TEXT} První změny se u mých vlastních projektů obvykle objevují za 2–3 měsíce, záruku ale nedávám.` : 'Cena závisí na zvolené službě: konzultace, Start na 3 měsíce nebo Full SEO na rok. Aktuální ceny a rozsah najdete na stránkách jednotlivých služeb. První změny se u mých vlastních projektů obvykle objevují za 2–3 měsíce, záruku ale nedávám.',

  expTitle: 'Jaké mám zkušenosti s tímto oborem?',
  expAnswer: 'Mám případovou studii z jiného oboru, překladatelské agentury: tři měsíce po sobě rostly poptávky z formulářů o 65–70 % měsíc od měsíce a B2B poptávky se ztrojnásobily (březen až září 2026). Jiný obor znamená i jiné výsledky.',
  expLink: 'Přečíst případovou studii překladatelské agentury',

  obsTitle: 'Co jsem zjistil na webech účetních kanceláří?',
  obsAnswer: 'K 25. 10. 2026 jsem si prohlédl 16 webů účetních kanceláří. U 14 z nich chybí blog. U všech 16 je FAQ nedostatečné, chybí strukturovaná data a web je málo připravený na AI: menu a nadpisy tomu neodpovídají.',
  obsList: [
    'U 14 z 16 webů není blog.',
    'U všech 16 webů je FAQ nedostatečné.',
    'U všech 16 webů chybí strukturovaná data (mikrodata).',
    'U všech 16 webů jsou menu a nadpisy málo přizpůsobené AI.',
    'U 5 webů je stránka služeb jen výpis služeb, bez samostatné stránky pro každou službu.',
  ],
  obsText: 'Web, který má přinášet poptávky, nemůže být jen vizitka. Služby, „o nás“ a časté dotazy by neměly ležet na jedné stránce: je potřeba je rozdělit na samostatné stránky, každou zvlášť optimalizovat a všechny vést k jednomu cíli, k poptávce. Samotný výpis služeb na jedné stránce nezaujme, každá služba potřebuje vlastní optimalizovanou stránku.',
  obsNote: 'Jde o moje pozorování, ne o výzkum. Tyto body nejsou součástí bezplatného auditu, řeší se v konzultaci a v balíčku Start.',
  obsLink: 'Konzultace: rozbor vašeho webu',

  fitTitle: 'Pro koho SEO dává smysl a pro koho ne?',
  fitAnswer: 'SEO dává smysl, pokud chcete získávat klienty i z vyhledávání a máte co nabídnout: jasné služby, ceny a kapacitu pro nové klienty. Nedává smysl, pokud klienty získáváte jen doporučením a vyhledávání nepotřebujete, nebo pokud nemáte kapacitu nové klienty přijmout. Rozhodnout vám pomůže krátká konzultace.',
  fitText: 'Stránka je určená pro účetní kanceláře a také pro daňové poradce, kteří mají vlastní web.',
  otherCities: BRNO ? { label: 'Další města:', link: 'Brno' } : null,

  faqTitle: 'Časté otázky',
  faq: [
    { q: 'Má smysl SEO pro účetní kancelář?', a: 'Dává, pokud chcete získávat klienty i z vyhledávání, ne jen doporučením. Hledají vás lidé, kteří potřebují konkrétní službu, například vedení účetnictví pro s.r.o. Pokud vám stačí doporučení a kapacitu nemáte, SEO nepotřebujete. Výsledek nezaručuji.' },
    { q: 'Jak rychle SEO funguje?', a: 'U mých vlastních projektů se první změny obvykle objevují za 2–3 měsíce, ale záruku nedávám. Rychlost závisí na stavu webu, konkurenci a rozsahu úprav. Pro konkrétní kancelář žádný termín neslibuji, odhad vychází až z auditu.' },
    { q: 'Kolik stojí SEO pro účetní kancelář?', a: BRNO ? PRICES_TEXT : 'Cena závisí na zvolené službě: konzultace, Start na 3 měsíce nebo Full SEO na rok. Konkrétní částky a rozsah najdete na stránkách jednotlivých služeb, žádné zvláštní ceny pro účetní kanceláře neuvádím. Bezplatný audit technických chyb je zdarma, bez hovoru a bez závazku.' },
    { q: 'Co znamená GEO/AEO pro účetní kancelář?', a: 'GEO/AEO je optimalizace obsahu pro odpovědi AI a vyhledávačů. U účetní kanceláře jde o stručné odpovědi na konkrétní otázky, jasné ceny a samostatné stránky služeb. Že vás ChatGPT nebo AI přehled v Googlu doporučí, nelze zaručit. Přehledný a aktuální obsah šanci na citaci jen zvyšuje.' },
    { q: 'Co zahrnuje bezplatný audit?', a: 'Bezplatný audit zkontroluje technické chyby: indexaci, duplicity a další technické problémy. Prezentaci dostanete do 24 hodin, bez hovoru a bez závazku. V auditu nejsou klíčová slova, konkurence, mapy, viditelnost v AI, rychlost ani mobilní verze. Strukturu nabídky na webu řeší placená konzultace nebo Start.' },
    { q: 'S kolika kancelářemi pracujete současně?', a: `Pracuji současně nejvýše se třemi firmami z jednoho oboru. Je to limit mé kapacity, ne výhradní spolupráce. Stav pro obor účetnictví k ${NICHE_ACCOUNTING_STATUS_DATE}: volno. Údaj aktualizuji při každé změně a stejný platí pro českou, ruskou i anglickou verzi webu.` },
  ],

  articlesTitle: 'Další články',
  articlesMore: 'Číst článek',

  endTitle: 'Požádejte o bezplatný audit technických chyb',
  endText: 'Bezplatný audit ukáže technické chyby webu účetní kanceláře: indexaci, duplicity a další technické problémy. Prezentaci pošlu do 24 hodin, bez hovoru a bez závazků.',
  endCta: 'Požádat o bezplatný audit',
  endConsulting: 'Nebo se podívejte na konzultaci',

  schema: {
    serviceName: 'SEO a GEO/AEO pro účetní kanceláře',
    serviceType: 'SEO a GEO/AEO pro účetní kanceláře',
    areaServed: 'Praha',
    audience: 'účetní kanceláře',
  },
};

export const NICHE_ACCOUNTING_CS = walk(raw);
