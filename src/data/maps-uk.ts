// Ukrainian content of /uk/mapy/ (brief of 02.11.2026): a mirror of the Russian page (maps-ru.ts).
// Pay-per-result terms (unit price, how results are confirmed, minimum monthly payment) are NOT in the brief yet,
// so no number appears here or in the JSON-LD (no priceSpecification).
import { fmtKc } from './consulting-shared';
import { START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { MAPS_MIN_MONTHS, MAPS_RATES, MAPS_FULL_MONTHLY } from './maps-shared';
import { CONSULTING_UK } from './consulting-uk';

interface Include { text: string; link?: { part: string; page: 'geo' }; catalog?: string }

// Ukrainian labels for the shared rates ("за 10 дзвінків" etc.).
const UK_LABEL = { calls: ['Дзвінки', 'дзвінків'], routes: ['Маршрути', 'маршрутів'], visits: ['Переходи на сайт', 'переходів'] } as const;
const UK_RATES = MAPS_RATES.map((r) => ({ name: UK_LABEL[r.key][0], unit: `за ${r.qty} ${UK_LABEL[r.key][1]}`, price: r.price }));

const term = `${MAPS_MIN_MONTHS} місяці`;

export const MAPS_UK = {
  lang: 'uk' as const,
  h1: 'Локальне SEO: Google Maps і Mapy.com',
  lead: 'Просуваю бізнес у картах Google і Seznam: оптимізую профілі, приводжу дані про компанію до єдиного вигляду, вибудовую отримання відгуків і відстежую дзвінки, маршрути та переходи на сайт. Працюю віддалено, для будь-якого міста. Ви платите за результат.',
  updatedLabel: 'Оновлено',
  badge: `Оплата за результат · від ${MAPS_MIN_MONTHS} місяців · без обмеження за профілями`,
  heroPrimary: 'Залишити заявку',
  heroAudit: 'Безкоштовний аудит',

  priceTitle: 'Скільки коштує просування в Google Maps і Mapy.com?',
  priceAnswer: `Просування в картах оплачується за результат: ви платите за реальні дзвінки, маршрути та переходи на сайт із карт. Мінімальний строк роботи ${term}.`,
  priceNote: 'Якщо вам потрібен ще й сайт, карти вже входять у пакети «Старт на 3 місяці» і «Full SEO».',
  // Rates: shown as a list and emitted as priceSpecification (name = the visible label, price = the visible amount).
  rates: [
    ...UK_RATES.map((r) => ({ label: `${r.name}:`, text: `${r.unit}, 1 профіль`, price: r.price, spec: `${r.name}: ${r.unit}, 1 профіль` })),
    {
      label: 'Full-пакет:',
      text: 'Google Карти + Mapy.com (Seznam), усі метрики та робота з відгуками, на місяць, 1 профіль',
      price: MAPS_FULL_MONTHLY,
      spec: 'Full-пакет: Google Карти + Mapy.com (Seznam), усі метрики та робота з відгуками, на місяць, 1 профіль',
    },
  ],
  ratesNote: 'Оплата рахується за результати, отримані за період дії договору. Результат підтверджується вивантаженням із карт: у Google Business Profile і Mapy.com є статистика. Full-пакет вигідніший, ніж набирати все окремо. Кілька філій? Кожен профіль рахується окремо. Розрахунок ціни завжди йде за 1 профіль.',
  // JSON-LD Offer.description: the visible answer without its final period.
  offerTerms: `Просування в картах оплачується за результат: ви платите за реальні дзвінки, маршрути та переходи на сайт із карт. Мінімальний строк роботи ${term}`,

  forWhomTitle: 'Кому підходить просування в картах?',
  forWhom: [
    'Клінікам, салонам і ресторанам: люди обирають місце через пошук поруч.',
    'Виїзним фахівцям і сервісним послугам: важливі дзвінки та охоплення районів.',
    'Мережам і компаніям з кількома філіями: у кожної філії свій профіль і свої відгуки.',
    'Магазинам і компаніям з офлайн-точкою.',
    'Бізнесам у будь-якому місті Чехії та ЄС: працюю віддалено.',
  ],

  includesTitle: 'Що входить у просування в картах?',
  // The OfferCatalog in JSON-LD is built from these items (first sentence, or the `catalog` wording).
  includes: <Include[]>[
    { text: 'Створення або оптимізація профілю Google Business Profile.' },
    { text: 'Профіль на Mapy.com і Firmy.cz.' },
    { text: 'Єдині дані про компанію (назва, адреса, телефон) в усіх каталогах.' },
    { text: 'Система отримання відгуків і робота з відгуками на Google Картах.' },
    { text: 'Ведення профілів без обмеження за кількістю.' },
    { text: 'Відстеження метрик: дзвінки, маршрути, переходи на сайт.' },
    {
      text: 'Структура локальних посадкових сторінок: ТЗ з поясненням кожного блоку (впровадження з вашого боку).',
      catalog: 'Структура локальних посадкових сторінок: ТЗ з поясненням кожного блоку',
    },
    { text: 'Оптимізація під ШІ-пошук.', link: { part: 'ШІ-пошук', page: 'geo' as const } },
    { text: 'Щотижневий звіт, дзвінок за бажанням.', catalog: 'Щотижневий звіт' },
  ],

  metricsTitle: 'Які метрики карт відстежуються?',
  metricsAnswer: 'Я відстежую три метрики: дзвінки, маршрути та переходи на сайт із карт. Саме за ними рахується результат роботи.',
  metrics: ['Дзвінки з карт Google і Mapy.com.', 'Маршрути до вашої точки.', 'Переходи на сайт.'],
  metricsExtra: 'Додатково: динаміка відгуків і позицій у картах.',

  localTitle: 'Локальні сторінки для точок і філій',
  localAnswer: 'Я готую ТЗ зі структурою локальної посадкової сторінки та пояснюю кожен блок: навіщо він потрібен і що в ньому писати. Впровадження на сайті залишається з вашого боку.',
  localIntro: 'До ТЗ входять:',
  local: [
    'Заголовки та порядок блоків сторінки.',
    'Прив’язка до району та точки.',
    'Ключові слова для кожного блоку.',
    'Перелінковка з іншими сторінками сайту.',
  ],

  stagesTitle: 'Як проходить робота?',
  // The same strings are shown in the numbered list and emitted as HowToStep text (word for word).
  stages: [
    'Аудит поточних профілів і конкурентів.',
    'Оптимізація профілів і каталогів.',
    'Налаштування відгуків і локального контенту.',
    'Щотижневий звіт і моніторинг позицій на картах.',
  ],

  resultsTitle: 'Коли чекати перших результатів?',
  resultsAnswer: `Терміни залежать від ніші, конкуренції та стартової позиції, тому обговорюємо ваш випадок окремо. Мінімальний строк роботи ${term}. Динаміку дзвінків, маршрутів і переходів ви бачите в щотижневому звіті.`,
  resultsNote: '',

  packsTitle: 'Карти входять у пакети «Старт» і «Full SEO»',
  packs: {
    intro: 'Якщо вам потрібен не лише профіль, а й просування сайту, карти вже включені: ',
    startLink: '«Старт на 3 місяці»',
    startPrice: `, ${fmtKc(START_PRICE)}`,
    mid: ' і ',
    fullLink: '«Full SEO на рік»',
    fullPrice: `, від ${fmtKc(FULLSEO_MONTHLY)} на місяць`,
    outro: '. Профілі без обмеження, метрики ті самі.',
  },

  reviewsTitle: 'Що кажуть клієнти?',
  reviewsLink: 'Усі відгуки',

  faqTitle: 'Часті запитання про просування в картах',
  faq: [
    { q: 'Як відбувається оплата?', a: `Оплата за результат: ви платите за реальні дзвінки, маршрути та переходи з карт. ${UK_RATES.map((r) => `${r.name}: ${fmtKc(r.price)} ${r.unit}`).join('; ')}; Full-пакет: ${fmtKc(MAPS_FULL_MONTHLY)} на місяць. Результати рахуються за період дії договору та підтверджуються вивантаженням із карт. Ціна завжди за 1 профіль.` },
    { q: 'Скільки профілів можна вести?', a: 'Без обмеження.' },
    { q: 'Які метрики відстежуються?', a: 'Дзвінки, маршрути та переходи на сайт.' },
    { q: 'Який мінімальний строк роботи?', a: `Від ${MAPS_MIN_MONTHS} місяців.` },
    { q: 'Коли чекати перших результатів?', a: 'Терміни залежать від ніші, конкуренції та стартової позиції, обговоримо ваш випадок окремо.' },
    { q: 'Чи створюєте ви локальні сторінки?', a: 'Готую ТЗ зі структурою та поясненням кожного блоку, впровадження з вашого боку.' },
    { q: 'Чи входять карти в пакети «Старт» і «Full SEO»?', a: 'Так.' },
    { q: 'У яких містах ви працюєте?', a: 'У будь-якому, робота ведеться віддалено. Зустрічі особисто можливі в Празі.' },
  ],
  faqAll: 'Усі часті запитання',

  formTitle: 'Залишити заявку',

  otherTitle: 'Інші послуги',
  more: 'Докладніше',
  audit: CONSULTING_UK.audit,
  geo: CONSULTING_UK.geo,

  schema: {
    serviceName: 'Локальне SEO: Google Maps і Mapy.com',
    serviceType: 'Локальне SEO, просування в картах',
    offerName: 'Просування в Google Maps і Mapy.com',
    audience: 'Бізнеси з офлайн-точкою, виїзні фахівці та компанії з кількома філіями',
    channel: 'Віддалено, зустрічі особисто в Празі',
    catalogName: 'Що входить у просування в картах?',
    howToName: 'Як проходить просування в картах',
    availableLanguage: 'uk',
    areaServed: [
      { '@type': 'Country', name: 'Чехія' },
      { '@type': 'Country', name: 'США' },
      { '@type': 'AdministrativeArea', name: 'Європейський союз' },
    ],
  },
};
