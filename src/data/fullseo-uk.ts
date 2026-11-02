// Ukrainian content of /uk/full-seo/ (brief of 02.11.2026): a mirror of the Russian page (fullseo-ru.ts).
// Prices come from fullseo-shared.ts / start-shared.ts (one source for all languages).
import { fmtKc } from './consulting-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { START_PRICE } from './start-shared';
import { CONSULTING_UK } from './consulting-uk';
import { CASE_LINE, TYPO_LINE_UK, SEASON_LINE_UK } from './case-summary';

const from = `від ${fmtKc(FULLSEO_MONTHLY)} на місяць`;
const From = `Від ${fmtKc(FULLSEO_MONTHLY)} на місяць`;

interface Item { text: string; link?: { part: string; page: 'geo' }; catalog?: string }
interface Group { title: string; items: Item[] }

export const FULLSEO_UK = {
  lang: 'uk' as const,
  packageName: 'Full SEO',
  h1: 'SEO-просування сайту на рік',
  lead: 'Повне SEO на 12 місяців: робота над сайтом, посилання та публікації поза ним, карти Google і Seznam, оптимізація під пошуковики та під ШІ. Я веду все SEO за вас і щотижня показую, що зроблено і який результат.',
  updatedLabel: 'Оновлено',
  badge: `${from} · 12 місяців`,
  heroPrimary: 'Залишити заявку',
  heroAudit: 'Безкоштовний аудит',

  priceTitle: 'Скільки коштує SEO-просування на рік?',
  // The euro estimate appears only in visible text (JSON-LD has CZK only).
  priceNiche: `Full SEO починається від ${fmtKc(FULLSEO_MONTHLY)} на місяць. Ціна для вашої ніші вказана на сторінці ніші.`,
  priceAnswer: `SEO-просування на рік коштує ${from} (≈ €600). Точна ціна залежить від обсягу робіт і ніші. Уточніть ціну в заявці, я запропоную найкращу вартість під ваш бюджет.`,
  priceNote: 'Сума в євро орієнтовна, за курсом на дату публікації; основна ціна в кронах.',
  // JSON-LD Offer.description: this sentence is also the answer of the first FAQ item.
  priceTerms: `${From}, точна ціна залежить від обсягу робіт і ніші`,

  includesTitle: 'Що входить у SEO-просування на рік?',
  // One sentence per item. The OfferCatalog in JSON-LD is built from the first sentence of each item
  // (or `catalog`, where the brief fixes a different wording), so the list and the markup say the same.
  groups: <Group[]>[
    {
      title: 'Робота над сайтом',
      items: [
        { text: 'SEO-аудит сайту: швидкість, помилки, індексація, структура, тексти.' },
        { text: 'Аналіз ключових слів в Ahrefs, SEMrush і Google Keyword Planner.' },
        { text: 'On-page SEO: заголовки H1 і H2, meta description, ключові слова, тексти, alt-теги картинок.' },
        { text: 'Контент щомісяця: статті, сторінки послуг, блог. Обсяг підбирається індивідуально під нішу та конкуренцію.' },
        { text: 'Постійний технічний контроль.' },
        {
          text: 'Аналітика в Google Analytics і Google Search Console: скільки людей прийшло, за якими запитами, які сторінки працюють.',
          catalog: 'Аналітика в Google Analytics і Google Search Console',
        },
        { text: 'Річна стратегія, квартальні плани пріоритетів і підсумки року.' },
      ],
    },
    {
      title: 'Робота поза сайтом',
      items: [
        { text: 'Лінкбілдинг: публікації, каталоги, PR-статті, посилання з інших сайтів.' },
        {
          text: 'Ведення профілів на Google Картах, Mapy.com (Seznam) і Firmy.cz, без обмеження за кількістю профілів: дзвінки, маршрути, переходи на сайт і робота з відгуками.',
          catalog: 'Ведення профілів на Google Картах, Mapy.com (Seznam) і Firmy.cz без обмеження за кількістю профілів: дзвінки, маршрути, переходи на сайт, відгуки',
        },
      ],
    },
    {
      title: 'ШІ та звітність',
      items: [
        { text: 'Оптимізація під пошуковики та під ШІ.', link: { part: 'під ШІ', page: 'geo' } },
        { text: 'Щотижневий звіт: що зроблено, навіщо і які результати. Дзвінок за бажанням.' },
      ],
    },
  ],
  contentExample: 'Приклад контенту: стаття «Які документи потрібно перекласти для ПМЖ у Чехії» приводить клієнтів із пошуку.',

  stagesTitle: 'Як проходить робота?',
  // The same strings are shown in the numbered list and emitted as HowToStep text (word for word).
  stages: [
    { name: 'Крок 1', text: 'Аудит і стратегія на рік.' },
    { name: 'Крок 2', text: 'Квартальний план пріоритетів.' },
    { name: 'Крок 3', text: 'Постійна робота та щотижневі звіти.' },
    { name: 'Крок 4', text: 'Підсумки року та план на наступний.' },
  ],

  resultsTitle: 'Коли будуть перші результати?',
  resultsAnswer: 'Перші результати SEO-просування з’являються через 2-3 місяці після початку роботи.',
  resultsNote: '',

  forWhomTitle: 'Для кого підходить Full SEO на рік?',
  forWhom: [
    'Компанії, для яких сайт — головне джерело заявок.',
    'Інтернет-магазини та послуги в конкурентних нішах.',
    'Компанії без власного SEO-спеціаліста.',
    'Бізнеси, яким потрібні дзвінки з карт Google і Seznam.',
  ],

  mapsTitle: 'Карти Google і Seznam входять у пакет',
  mapsBefore: 'Профілі на Google Картах, Mapy.com (Seznam) і Firmy.cz ведуться в межах пакета, без обмеження за кількістю профілів: стільки, скільки потрібно вашому бізнесу. Працюю з усіма метриками (дзвінки, маршрути, переходи на сайт) і з відгуками. Як і в пакеті «',
  mapsStartLink: 'Старт на 3 місяці',
  mapsAfter: '».',
  mapsOnly: 'Якщо вам потрібні лише карти:',

  compareTitle: 'Full SEO на рік чи Старт на 3 місяці?',
  compare: {
    before: '«',
    startLink: 'Старт на 3 місяці',
    after: `» — це інтенсивний перший етап за ${fmtKc(START_PRICE)}: план, впровадження та перші результати. «Full SEO на рік» — це робота 12 місяців за річною стратегією з квартальними планами та підсумками року, ${from}.`,
  },
  consultingNote: { before: 'Якщо вам потрібні лише відповіді на запитання і план, подивіться ', link: 'консультацію', after: '.' },

  caseTitle: 'Що це дало клієнтам?',
  caseText: CASE_LINE.uk,
  caseText2: TYPO_LINE_UK,
  caseLink2: 'Кейс «SEO для друкарні»',
  caseText3: SEASON_LINE_UK,
  caseLink3: 'SEO в низький сезон (частина 2)',
  caseLink: 'Уся історія',

  reviewsTitle: 'Що кажуть клієнти?',
  reviewsLink: 'Усі відгуки',

  faqTitle: 'Часті запитання про SEO-просування на рік',
  faq: [
    { q: 'Скільки коштує SEO-просування на рік?', a: `${From}, точна ціна залежить від обсягу робіт і ніші.` },
    { q: 'Як часто ви звітуєте?', a: 'Щотижня: що зроблено, навіщо і які результати. Дзвінок за бажанням.' },
    { q: 'Чи входять карти Google і Seznam у пакет?', a: 'Так, без обмеження за кількістю профілів, з усіма метриками (дзвінки, маршрути, переходи на сайт) і роботою з відгуками, як і в пакеті «Старт на 3 місяці».' },
    { q: 'Коли чекати перших результатів?', a: 'Через 2-3 місяці після початку роботи.' },
    { q: 'Чи залишаються квартальні плани та підсумки року?', a: 'Так. У пакет входять квартальні плани пріоритетів і підсумки року з планом на наступний.' },
    { q: 'Чим Full SEO відрізняється від Старту на 3 місяці?', a: `«Старт на 3 місяці» — це інтенсивний перший етап за ${fmtKc(START_PRICE)}. «Full SEO на рік» — це робота 12 місяців за річною стратегією, ${from}.` },
  ],
  faqAll: 'Усі часті запитання',

  formTitle: 'Залишити заявку',

  otherTitle: 'Інші послуги',
  more: 'Докладніше',
  audit: CONSULTING_UK.audit,
  geo: CONSULTING_UK.geo,

  schema: {
    serviceName: 'SEO-просування сайту на рік',
    serviceType: 'SEO-просування сайту',
    audience: 'Україномовні власники бізнесу, для яких сайт — головне джерело заявок',
    catalogName: 'Що входить у SEO-просування на рік?',
    howToName: 'Як проходить SEO-просування сайту на рік',
    availableLanguage: 'uk',
    areaServed: [
      { '@type': 'Country', name: 'Чехія' },
      { '@type': 'Country', name: 'США' },
      { '@type': 'AdministrativeArea', name: 'Європейський союз' },
    ],
  },
};
