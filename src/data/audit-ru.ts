// Russian content of /ru/besplatnyj-audit/ (brief of 19.10.2026): an adaptation for Russian-speaking business
// owners, not a translation of the Czech page. The free audit is technical errors only.
import { fmtKc, PRICES } from './consulting-shared';
import { START_PRICE } from './start-shared';
import { CONSULTING_RU } from './consulting-ru';

interface Check { text: string; inCatalog?: false }

// Sample presentation video (public/media/audit-example.mp4, prepared by scripts/prepare-audit-video.sh from the raw
// recording). Set to null to hide the video block and drop the VideoObject from the JSON-LD together.
interface Video {
  src: string;
  poster: string;
  width: number;
  height: number;
  duration: string; // ISO 8601
  uploadDate: string; // ISO date the video went live on the site; change only if the file is replaced
}
export const AUDIT_VIDEO: Video | null = {
  src: '/media/audit-example.mp4',
  poster: '/media/audit-example-poster.jpg',
  width: 1280,
  height: 688,
  duration: 'PT32S',
  uploadDate: '2026-10-19',
};

// Sample audit for another niche (cs page has the same one as a YouTube Short): a screen recording of the English presentation for a software developer for machine-building and metalworking
// companies (added 27.10.2026; the owner of the site agreed to the anonymous example). Prepared from the raw recording: no sound, the Windows task bar at the bottom cropped
// (1280x680). The file still carries the watermarks of the editors it was exported from (VEED, CapCut): replace it with a clean export when there is one (same name, same prepare step).
export interface AuditExample { id: string; src: string; poster: string; width: number; height: number; duration: string; uploadDate: string; niche: string; lang: string; caption: string; name: string; description: string; text: string }
export const AUDIT_EXAMPLES_RU: AuditExample[] = [
  {
    id: 'machinery-software',
    src: '/media/audit-example-machinery-software.mp4',
    poster: '/media/audit-example-machinery-software-poster.jpg',
    width: 1280,
    height: 680,
    duration: 'PT37S',
    uploadDate: '2026-10-27',
    niche: 'разработка специализированного программного обеспечения для автоматизации машиностроительных и металлообрабатывающих предприятий',
    lang: 'английский',
    caption: 'Пример презентации бесплатного SEO-аудита для сайта на английском языке (37 секунд, без звука).',
    name: 'Пример презентации SEO-аудита для сайта на английском языке',
    description: 'Пример презентации бесплатного SEO-аудита для сайта разработчика программного обеспечения для машиностроения: сводка по сайту, технические ошибки с приоритетами и следующие шаги. Презентация на английском.',
    text: 'Аудит сделан для англоязычного сайта. По словам владелицы сайта, она ориентируется на американский рынок, но компания работает по всему миру. Название сайта в видео не показано.',
  },
];

export const AUDIT_RU = {
  lang: 'ru' as const,
  h1: 'Бесплатный SEO-аудит вашего сайта',
  lead: 'Оставьте адрес сайта, и в течение 24 часов я пришлю короткую презентацию с главными техническими ошибками и рекомендациями: что мешает сайту расти и что исправлять в первую очередь. Бесплатно, без созвона и без обязательств. Аудит делаю я лично, а не автоматический сервис.',
  updatedLabel: 'Обновлено',
  badge: 'Бесплатно · 24 часа · без созвона',
  heroPrimary: 'Заказать бесплатный аудит',

  checksTitle: 'Что проверяет бесплатный SEO-аудит?',
  checksAnswer: 'Бесплатный аудит проверяет технические ошибки сайта: индексацию, дубли страниц и другие проблемы, из-за которых Google хуже читает и показывает ваш сайт.',
  checks: <Check[]>[
    { text: 'Индексация: адреса, закрытые от робота, страницы без canonical, адреса с параметрами.' },
    { text: 'Дубли: повторяющиеся заголовки H1 и H2, одинаковые мета-описания.' },
    { text: 'Заголовки и описания: слишком длинные или слишком короткие тайтлы и мета-описания.' },
    { text: 'Другие технические ошибки сайта, влияющие на показы в поиске.', inCatalog: false },
  ],
  // The fourth OfferCatalog item: the deliverable (shown in the comparison table below).
  deliverable: 'Презентация с главными техническими ошибками и рекомендациями',
  // JSON-LD Offer.description: a sentence of the lead, so the markup repeats the visible text.
  offerTerms: 'Бесплатно, без созвона и без обязательств',

  notTitle: 'Чего в бесплатном аудите нет?',
  notAnswer: 'Бесплатный аудит это только технические ошибки сайта. Всё остальное решается в других услугах.',
  not: [
    { label: 'Ключевые слова:', links: [{ text: 'Консультация', page: 'consulting' as const }], sep: '' },
    { label: 'Конкуренты:', links: [{ text: 'Консультация', page: 'consulting' as const }, { text: 'Старт на 3 месяца', page: 'start' as const }], sep: ' или ' },
    { label: 'Карты и локальное SEO:', links: [{ text: 'Карты', page: 'maps' as const }], sep: '' },
    { label: 'Видимость в ИИ:', links: [{ text: 'SEO + GEO/AEO', page: 'geo' as const }], sep: '' },
  ],

  quote: { text: 'Честнее сразу сказать, чего в бесплатном аудите нет, чем обещать больше, чем он способен дать.', author: 'Арсений Ераносьян', role: 'SEO- и GEO/AEO-специалист' },

  stagesTitle: 'Как проходит SEO-аудит?',
  // The same strings are shown in the numbered list and emitted as HowToStep text (word for word).
  stages: [
    'Вы заполняете форму: адрес сайта и контакт.',
    'Я изучаю сайт и готовлю презентацию.',
    'Отправляю вам презентацию с главными техническими ошибками и рекомендациями, без созвона.',
    'Вы решаете, продолжать ли работу.',
  ],

  getTitle: 'Что вы получите после аудита?',
  getAnswer: 'Короткую презентацию с главными техническими ошибками сайта и рекомендациями. Она приходит в течение 24 часов, без созвона и без обязательств.',
  videoTitle: 'Как выглядит презентация?',
  videoCaption: 'Пример презентации бесплатного SEO-аудита (32 секунды, без звука).',
  videoName: 'Пример презентации бесплатного SEO-аудита',
  videoDescription: 'Пример презентации, которую вы получаете после бесплатного SEO-аудита: сводка по сайту, технические ошибки с приоритетами и что даёт платный разбор.',
  examplesTitle: 'Пример аудита для другой ниши',
  examplesNiche: 'Ниша',
  examplesLang: 'Язык презентации',
  videoText: 'Слайды примера: сводка по сайту (сколько страниц просканировано, сколько ошибок и предупреждений, что в порядке и что мешает росту); часть товарных страниц не найдена в Google; слишком длинные тайтлы; шаблонные заголовки H1, H2 и мета-описания; сигналы для Google с приоритетами (адреса, закрытые от робота, страницы без canonical, адреса с параметрами); мелочи, которые накапливаются; что даёт платный разбор: ошибки с примерами страниц, решения и план на 12 месяцев.',

  nicheLead: 'Для финансовых консультантов в аудите отдельно смотрю индексацию страниц направлений и дубли между языковыми версиями. Подробнее:',
  nicheLink: 'SEO для финансовых консультантов в Чехии',

  compareTitle: 'Чем бесплатный аудит отличается от консультации и Старта?',
  compareAnswer: 'Аудит показывает, где проблемы. Консультация показывает, что с ними делать. Старт на 3 месяца означает, что исправления делаю я.',
  table: {
    corner: 'Параметр',
    head: ['Бесплатный аудит', 'Консультация + аудит сайта', 'Старт на 3 месяца'],
    rows: [
      ['Цена', 'Бесплатно', fmtKc(PRICES.audit), fmtKc(START_PRICE)],
      ['Что вы получаете', 'Презентация с главными техническими ошибками и рекомендациями', 'Ошибки с примерами страниц, решения и план на 12 месяцев', 'Исправления, работа над сайтом и картами 3 месяца'],
      ['Созвон', 'Нет', 'Онлайн или лично в Праге', 'Еженедельный отчёт, созвон по желанию'],
      ['Кто исправляет', 'Вы', 'Вы', 'Я'],
    ],
  },
  compareLinks: { consulting: 'Консультация', start: 'Старт на 3 месяца' },

  reviewsTitle: 'Что говорят клиенты?',
  reviewsLink: 'Все отзывы',

  faqTitle: 'Вопросы о бесплатном SEO-аудите',
  faq: [
    { q: 'Сколько стоит аудит?', a: 'Бесплатно.' },
    { q: 'Сколько времени займёт?', a: 'Результат в течение 24 часов.' },
    { q: 'Что будет в отчёте?', a: 'Короткая презентация с главными техническими ошибками сайта и рекомендациями.' },
    { q: 'Нужен ли созвон?', a: 'Нет, презентация отправляется без созвона.' },
    { q: 'Какие обязательства после аудита?', a: 'Никаких, вы сами решаете, продолжать ли работу.' },
    { q: 'Чем аудит отличается от платной консультации?', a: `Аудит показывает только ошибки сайта. Консультация даёт ответы на ваши вопросы и план действий: ${fmtKc(PRICES.questions)} за час или ${fmtKc(PRICES.audit)} с аудитом сайта и планом на 12 месяцев.` },
  ],
  faqAll: 'Все частые вопросы',

  formTitle: 'Заказать бесплатный аудит',

  otherTitle: 'Другие услуги',
  more: 'Подробнее',
  geo: CONSULTING_RU.geo,

  schema: {
    serviceName: 'Бесплатный SEO-аудит сайта',
    serviceType: 'Технический SEO-аудит',
    audience: 'Русскоговорящие владельцы бизнеса, чей сайт не растёт или потерял трафик',
    catalogName: 'Что проверяет бесплатный SEO-аудит',
    howToName: 'Как проходит бесплатный SEO-аудит',
    availableLanguage: 'ru',
    areaServed: [
      { '@type': 'Country', name: 'Чехия' },
      { '@type': 'Country', name: 'США' },
      { '@type': 'AdministrativeArea', name: 'Европейский союз' },
    ],
  },
};
