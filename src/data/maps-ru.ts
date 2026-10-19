// Russian content of /ru/uslugi/karty/ (brief of 19.10.2026): an adaptation for Russian-speaking business
// owners in Czechia, the EU and the USA, not a translation of the Czech page.
// Pay-per-result terms (unit price, how results are confirmed, minimum monthly payment) are NOT in the brief yet,
// so no number appears here or in the JSON-LD (no priceSpecification).
import { fmtKc } from './consulting-shared';
import { START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { MAPS_MIN_MONTHS, MAPS_RATES, MAPS_FULL_MONTHLY } from './maps-shared';
import { CONSULTING_RU } from './consulting-ru';

interface Include { text: string; link?: { part: string; page: 'geo' }; catalog?: string }

const term = `${MAPS_MIN_MONTHS} месяца`;

export const MAPS_RU = {
  lang: 'ru' as const,
  h1: 'Локальное SEO: Google Maps и Mapy.com',
  lead: 'Продвигаю бизнес в картах Google и Seznam: оптимизирую профили, привожу данные о компании к единому виду, выстраиваю получение отзывов и отслеживаю звонки, маршруты и переходы на сайт. Работаю удалённо, для любого города. Вы платите за результат.',
  updatedLabel: 'Обновлено',
  badge: `Оплата за результат · от ${MAPS_MIN_MONTHS} месяцев · без ограничения по профилям`,
  heroPrimary: 'Оставить заявку',
  heroAudit: 'Бесплатный аудит',

  priceTitle: 'Сколько стоит продвижение в Google Maps и Mapy.com?',
  priceAnswer: `Продвижение в картах оплачивается за результат: вы платите за реальные звонки, маршруты и переходы на сайт с карт. Минимальный срок работы ${term}.`,
  priceNote: 'Если вам нужен ещё и сайт, карты уже входят в пакеты «Старт на 3 месяца» и «Full SEO».',
  // Rates: shown as a list and emitted as priceSpecification (name = the visible label, price = the visible amount).
  rates: [
    ...MAPS_RATES.map((r) => ({ label: `${r.name}:`, text: `${r.unit}, 1 профиль`, price: r.price, spec: `${r.name}: ${r.unit}, 1 профиль` })),
    {
      label: 'Full-пакет:',
      text: 'Google Карты + Mapy.com (Seznam), все метрики и работа с отзывами, в месяц, 1 профиль',
      price: MAPS_FULL_MONTHLY,
      spec: 'Full-пакет: Google Карты + Mapy.com (Seznam), все метрики и работа с отзывами, в месяц, 1 профиль',
    },
  ],
  ratesNote: 'Оплата считается за результаты, полученные за период действия договора. Результат подтверждается выгрузкой из карт: в Google Business Profile и Mapy.com есть статистика. Full-пакет выгоднее, чем набирать всё по отдельности. Несколько филиалов? Каждый профиль считается отдельно. Расчёт цены всегда идёт за 1 профиль.',
  // JSON-LD Offer.description: the visible answer without its final period.
  offerTerms: `Продвижение в картах оплачивается за результат: вы платите за реальные звонки, маршруты и переходы на сайт с карт. Минимальный срок работы ${term}`,

  forWhomTitle: 'Кому подходит продвижение в картах',
  forWhom: [
    'Клиникам, салонам и ресторанам: люди выбирают место через поиск рядом.',
    'Выездным специалистам и сервисным услугам: важны звонки и охват районов.',
    'Сетям и компаниям с несколькими филиалами: у каждого филиала свой профиль и свои отзывы.',
    'Магазинам и компаниям с офлайн-точкой.',
    'Бизнесам в любом городе Чехии и ЕС: работаю удалённо.',
  ],

  includesTitle: 'Что входит в продвижение в картах',
  // The OfferCatalog in JSON-LD is built from these items (first sentence, or the `catalog` wording).
  includes: <Include[]>[
    { text: 'Создание или оптимизация профиля Google Business Profile.' },
    { text: 'Профиль на Mapy.com и Firmy.cz.' },
    { text: 'Единые данные о компании (название, адрес, телефон) во всех каталогах.' },
    { text: 'Система получения отзывов и работа с отзывами на Google Картах.' },
    { text: 'Ведение профилей без ограничения по количеству.' },
    { text: 'Отслеживание метрик: звонки, маршруты, переходы на сайт.' },
    {
      text: 'Структура локальных посадочных страниц: ТЗ с объяснением каждого блока (внедрение на вашей стороне).',
      catalog: 'Структура локальных посадочных страниц: ТЗ с объяснением каждого блока',
    },
    { text: 'Оптимизация под ИИ-поиск.', link: { part: 'ИИ-поиск', page: 'geo' as const } },
    { text: 'Еженедельный отчёт, созвон по желанию.', catalog: 'Еженедельный отчёт' },
  ],

  metricsTitle: 'Какие метрики карт отслеживаются?',
  metricsAnswer: 'Я отслеживаю три метрики: звонки, маршруты и переходы на сайт с карт. Именно по ним считается результат работы.',
  metrics: ['Звонки с карт Google и Mapy.com.', 'Маршруты к вашей точке.', 'Переходы на сайт.'],
  metricsExtra: 'Дополнительно: динамика отзывов и позиций в картах.',

  localTitle: 'Локальные страницы для точек и филиалов',
  localAnswer: 'Я готовлю ТЗ со структурой локальной посадочной страницы и объясняю каждый блок: зачем он нужен и что в нём писать. Внедрение на сайте остаётся на вашей стороне.',
  localIntro: 'В ТЗ входят:',
  local: [
    'Заголовки и порядок блоков страницы.',
    'Привязка к району и точке.',
    'Ключевые слова для каждого блока.',
    'Перелинковка с другими страницами сайта.',
  ],

  stagesTitle: 'Как проходит работа',
  // The same strings are shown in the numbered list and emitted as HowToStep text (word for word).
  stages: [
    'Аудит текущих профилей и конкурентов.',
    'Оптимизация профилей и каталогов.',
    'Настройка отзывов и локального контента.',
    'Еженедельный отчёт и мониторинг позиций в картах.',
  ],

  resultsTitle: 'Когда ждать первых результатов?',
  resultsAnswer: `Сроки зависят от ниши, конкуренции и стартовой позиции, поэтому обсуждаем ваш случай отдельно. Минимальный срок работы ${term}. Динамику звонков, маршрутов и переходов вы видите в еженедельном отчёте.`,
  resultsNote: 'Первое место в картах не гарантирую.',

  packsTitle: 'Карты входят в пакеты «Старт» и «Full SEO»',
  packs: {
    intro: 'Если вам нужен не только профиль, но и продвижение сайта, карты уже включены: ',
    startLink: '«Старт на 3 месяца»',
    startPrice: `, ${fmtKc(START_PRICE)}`,
    mid: ' и ',
    fullLink: '«Full SEO на год»',
    fullPrice: `, от ${fmtKc(FULLSEO_MONTHLY)} в месяц`,
    outro: '. Профили без ограничения, метрики те же.',
  },

  reviewsTitle: 'Что говорят клиенты',
  reviewsLink: 'Все отзывы',
  casesLink: 'Все кейсы',

  faqTitle: 'Частые вопросы о продвижении в картах',
  faq: [
    { q: 'Как происходит оплата?', a: `Оплата за результат: вы платите за реальные звонки, маршруты и переходы с карт. ${MAPS_RATES.map((r) => `${r.name}: ${fmtKc(r.price)} ${r.unit}`).join('; ')}; Full-пакет: ${fmtKc(MAPS_FULL_MONTHLY)} в месяц. Результаты считаются за период действия договора и подтверждаются выгрузкой из карт. Цена всегда за 1 профиль.` },
    { q: 'Сколько профилей можно вести?', a: 'Без ограничения.' },
    { q: 'Какие метрики отслеживаются?', a: 'Звонки, маршруты и переходы на сайт.' },
    { q: 'Какой минимальный срок работы?', a: `От ${MAPS_MIN_MONTHS} месяцев.` },
    { q: 'Когда ждать первых результатов?', a: 'Сроки зависят от ниши, конкуренции и стартовой позиции, обсудим ваш случай отдельно.' },
    { q: 'Создаёте ли вы локальные страницы?', a: 'Готовлю ТЗ со структурой и объяснением каждого блока, внедрение на вашей стороне.' },
    { q: 'Входят ли карты в пакеты «Старт» и «Full SEO»?', a: 'Да.' },
    { q: 'В каких городах вы работаете?', a: 'В любом, работа ведётся удалённо. Встречи лично возможны в Праге.' },
  ],
  faqAll: 'Все частые вопросы',

  formTitle: 'Оставить заявку',

  otherTitle: 'Другие услуги',
  otherAll: 'Все услуги',
  more: 'Подробнее',
  audit: CONSULTING_RU.audit,
  geo: CONSULTING_RU.geo,

  schema: {
    serviceName: 'Локальное SEO: Google Maps и Mapy.com',
    serviceType: 'Локальное SEO, продвижение в картах',
    offerName: 'Продвижение в Google Maps и Mapy.com',
    audience: 'Бизнесы с офлайн-точкой, выездные специалисты и компании с несколькими филиалами',
    channel: 'Удалённо, встречи лично в Праге',
    catalogName: 'Что входит в продвижение в картах',
    howToName: 'Как проходит продвижение в картах',
    availableLanguage: 'ru',
    areaServed: [
      { '@type': 'Country', name: 'Чехия' },
      { '@type': 'Country', name: 'США' },
      { '@type': 'AdministrativeArea', name: 'Европейский союз' },
    ],
  },
};
