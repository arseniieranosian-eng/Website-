import type { Lang, PageKey, ServiceKey } from '../i18n/routes';
import { CASE_LABEL, CASE_LINE, TYPO_LINE, TYPO_LINE_CS, EDU_LINE, EDU_LINE_CS, SEASON_LINE, SEASON_LINE_CS, HALF_LINE_CS } from './case-summary';

type L<T = string> = Record<Lang, T>;

export interface CaseStudy {
  key: Extract<PageKey, 'caseKb' | 'caseHalf' | 'caseTypo' | 'caseEdu' | 'caseSeason' | 'caseRazbor'>;
  langs?: readonly Lang[]; // languages the case page exists in (default: all)
  industry: L;
  teaser: L;
  challenge: L;
  solution: L<string[]>;
  // Only figures confirmed by the author's text, each with its period and source (the client is anonymous).
  metrics: { value: string | L; label: L }[]; // value may differ per language
  services: ServiceKey[];
}

export const CASES: CaseStudy[] = [
  {
    key: 'caseKb',
    industry: CASE_LABEL,
    teaser: CASE_LINE,
    challenge: {
      cs: 'Web fungoval, ale nepřiváděl nové klienty: byl postavený pro lidi, kteří firmu už znají a jen potřebují objednat.',
      en: 'The website worked, but it did not bring new clients: it was built for people who already know the company and just need to order.',
      ru: 'Сайт работал, но не приводил новых клиентов: он был построен для тех, кто уже знает компанию и просто хочет заказать.',
    },
    solution: {
      cs: ['Samostatná stránka pro každé město s lokálním obsahem', 'Obsah jako trychtýř: články vedoucí ke stránkám služeb', 'Lokalizace jednotlivých jazykových verzí, ne jen překlad', 'Technické SEO: strukturovaná data a rychlost webu'],
      en: ['A separate page for every city with local content', 'Content as a funnel: articles leading to the service pages', 'Localisation of each language version, not just translation', 'Technical SEO: structured data and site speed'],
      ru: ['Отдельная страница для каждого города с локальным контентом', 'Контент как воронка: статьи ведут на страницы услуг', 'Локализация каждой языковой версии, а не просто перевод', 'Техническое SEO: структурированные данные и скорость сайта'],
    },
    metrics: [
      { value: '×8', label: { cs: 'poptávek v červnu oproti květnu (formulář a e-mail; reálné číslo je vyšší)', en: 'enquiries in June vs May (form and e-mail; the real number is higher)', ru: 'заявок в июне по сравнению с маем (форма и e-mail; реальное число выше)' } },
      { value: 'B2B', label: { cs: 'první B2B klient po 4 měsících práce', en: 'first B2B client after 4 months of work', ru: 'первый B2B-клиент после 4 месяцев работы' } },
    ],
    services: ['start', 'fullSeo'],
  },
];

CASES.push({
  key: 'caseTypo',
  langs: ['cs', 'ru'],
  industry: { cs: 'Tiskárna', en: 'Print shop', ru: 'Типография' },
  teaser: { cs: TYPO_LINE_CS, en: '', ru: TYPO_LINE },
  challenge: { cs: 'Web fungoval, ale Google špatně rozuměl jeho struktuře a stránky nebyly navázané na dotazy, u kterých lidé objednávají tisk.', en: '', ru: 'Сайт работал, но Google плохо понимал его структуру, а страницы не были привязаны к запросам, по которым люди готовы заказывать печать.' },
  solution: { cs: ['Technický crawl a data z Google Search Console', 'Oprava rozbitých odkazů a hierarchie nadpisů', 'Mapa dotazů podle trychtýře a komerčního záměru', '20+ vstupních stránek na WordPressu', 'Týdenní monitoring'], en: [], ru: ['Технический краулинг и данные Google Search Console', 'Исправление битых ссылок и иерархии заголовков', 'Карта запросов по воронке под коммерческий интент', '20+ посадочных страниц на WordPress', 'Еженедельный мониторинг'] },
  metrics: [
    { value: '×8,75', label: { cs: 'organická návštěvnost: 1\u00a0200 → 10\u00a0500 návštěv za měsíc, červenec 2024 → červenec 2025', en: '', ru: 'органический трафик: 1 200 → 10 500 визитов в месяц, июль 2024 → июль 2025' } },
  ],
  services: ['start', 'fullSeo'],
});

CASES.push({
  key: 'caseEdu',
  langs: ['cs', 'ru'],
  industry: { cs: 'Vzdělávací platforma', en: 'Education platform', ru: 'Образовательная платформа' },
  teaser: { cs: EDU_LINE_CS, en: '', ru: EDU_LINE },
  challenge: { cs: 'Nový web bez historie a autority ve vyhledávání: soutěžit o nejhledanější dotazy bylo nereálné.', en: '', ru: 'Новый сайт без истории и авторитета в поиске: конкурировать по популярным запросам было нереально.' },
  solution: { cs: ['Výzkum klíčových slov s důrazem na málo hledané dotazy', 'Návrh struktury stránek', 'Návrh stránek blogu'], en: [], ru: ['Исследование ключевых слов с акцентом на низкочастотные запросы', 'Проектирование структуры страниц', 'Проектирование страниц блога'] },
  metrics: [
    { value: '+55%', label: { cs: 'organické návštěvnosti za 7 měsíců, březen → září 2025 (relativní data)', en: '', ru: 'органического трафика за 7 месяцев, март → сентябрь 2025 (относительные данные)' } },
  ],
  services: ['start'],
});

CASES.push({
  key: 'caseSeason',
  langs: ['cs', 'ru'],
  industry: { cs: 'Překladatelská agentura · část 2', en: 'Translation agency · part 2', ru: 'Переводческое агентство · часть 2' },
  teaser: { cs: SEASON_LINE_CS, en: '', ru: SEASON_LINE },
  challenge: { cs: 'Organická návštěvnost se nepřevádí na poptávky: v trychtýři chyběla horní část, komerční záměr, lokální pokrytí a signály důvěry.', en: '', ru: 'Органический трафик не превращался в заявки: в воронке не было верха, коммерческого интента, гео-покрытия и сигналов доверия.' },
  solution: { cs: ['Diagnóza trychtýře a byznys modelu', 'Technická vrstva a strukturovaná data', 'Stránky služeb pro komerční záměr', 'Blog a FAQ jako horní část trychtýře', 'Lokální stránky podle měst'], en: [], ru: ['Диагноз воронки и бизнес-модели', 'Технический слой и структурированные данные', 'Страницы услуг под коммерческий интент', 'Блог и FAQ как верх воронки', 'Локальные страницы по городам'] },
  metrics: [
    { value: '×24', label: { cs: 'poptávky z webu: jaro (březen–květen) → léto (červen–srpen) 2026, jedno okno, ne meziročně, od nízké základny', en: '', ru: 'заявки с сайта: весна (март–май) → лето (июнь–август) 2026, одно окно, не год к году, от низкой базы' } },
  ],
  services: ['start', 'fullSeo'],
});

CASES.push({
  key: 'caseHalf',
  langs: ['cs', 'ru'],
  industry: { cs: 'Překladatelská agentura · půl roku práce', en: '', ru: 'Переводческое агентство · полгода работы' },
  teaser: { cs: HALF_LINE_CS, en: '', ru: 'За полгода заявки три месяца подряд росли на 65–70 % месяц к месяцу, B2B-заявки выросли в три раза, а сайт появился в Google AI Overview.' },
  challenge: { cs: 'Web ve čtyřech jazycích nepřinášel žádné poptávky (ani jeden odeslaný formulář) a zhruba polovina sekcí, které takový web potřebuje, neexistovala.', en: '', ru: 'Сайт на четырёх языках не приносил заявок (ни одной отправленной формы), а примерно половины нужных разделов не было.' },
  solution: { cs: ['Web jako systém tří druhů stránek', 'Samostatné stránky pro Prahu, Brno a Pardubice', 'Lokalizace každé jazykové verze, ne jen překlad', 'Týdenní reporty s ověřitelnými zdroji'], en: [], ru: ['Сайт как система из трёх типов страниц', 'Отдельные страницы для Праги, Брно и Пардубице', 'Локализация каждой языковой версии, а не только перевод', 'Еженедельные отчёты с проверяемыми источниками'] },
  metrics: [
    { value: { cs: '+65–70\u00a0%', en: '', ru: '+65–70\u00a0%' }, label: { cs: 'poptávek měsíčně, tři měsíce po sobě (formulář a e-mail)', en: '', ru: 'заявок в месяц, три месяца подряд (форма и почта)' } },
    { value: { cs: '×3', en: '', ru: '×3' }, label: { cs: 'B2B poptávky (+200\u00a0%), léto 2026', en: '', ru: 'B2B-заявки, лето 2026' } },
  ],
  services: ['start', 'fullSeo'],
});

// Review ("Разбор"), not a result: no metrics (a review has no figures; nothing may look like a result).
CASES.push({
  key: 'caseRazbor',
  langs: ['cs', 'ru'],
  industry: { cs: 'Rozbor webu', en: '', ru: 'Разбор · агентство недвижимости' },
  teaser: { cs: 'Jak probíhá konzultace s auditem a plánem na 12 měsíců: s čím přišel majitel malé pražské kanceláře, co jsem na webu viděl a co jsem navrhl.', en: '', ru: 'Как проходит консультация с аудитом и планом на 12 месяцев: с чем пришёл владелец, что я увидел и что предложил.' },
  challenge: { cs: '', en: '', ru: '' },
  solution: { cs: [], en: [], ru: [] },
  metrics: [],
  services: ['consulting'],
});

export const caseByKey = (key: CaseStudy['key']) => CASES.find((c) => c.key === key)!;
