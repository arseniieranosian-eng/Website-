// Ukrainian content of /uk/start-3-misiatsi/ (brief of 02.11.2026): a mirror of the Russian page (start-ru.ts).
// Prices come from start-shared.ts (one source for all languages).
import { fmtKc } from './consulting-shared';
import { START_PAYMENTS, START_PRICE } from './start-shared';
import { CONSULTING_UK } from './consulting-uk';
import { CASE_LINE, TYPO_LINE_UK, EDU_LINE_UK, SEASON_LINE_UK } from './case-summary';

const [PAY1, PAY2] = START_PAYMENTS;
const price = fmtKc(START_PRICE);
const pay = `${fmtKc(PAY1)} на початку роботи та ${fmtKc(PAY2)} за домовленістю`;

interface Include { text: string; link?: { part: string; page: 'geo' }; catalog?: string }

export const START_UK = {
  lang: 'uk' as const,
  slogan: 'На рейки зростання',
  h1: 'SEO-просування сайту на 3 місяці',
  lead: 'Три місяці повної роботи над вашим сайтом і картами Google та Seznam: аудит і план на 12 місяців, впровадження правок, контент, посилання, оптимізація під пошуковики та під ШІ. Перші результати через 2-3 місяці, звіт щотижня.',
  updatedLabel: 'Оновлено',
  badge: `${price} · 3 місяці`,
  heroPrimary: 'Залишити заявку',
  heroAudit: 'Безкоштовний аудит',

  priceTitle: 'Скільки коштує SEO-просування сайту на 3 місяці?',
  priceAnswer: `SEO-просування сайту на 3 місяці коштує ${price} (≈ €2 000). Платити можна частинами: ${pay}.`,
  priceNote: 'Сума в євро орієнтовна, за курсом на дату публікації; основна ціна в кронах.',
  // JSON-LD Offer.description: the visible payment sentence without its final period.
  payTerms: `Платити можна частинами: ${pay}`,

  includesTitle: 'Що входить у SEO-просування на 3 місяці?',
  // `link` turns the given part of the sentence into a link to that page. The OfferCatalog in JSON-LD is
  // built from the first sentence of each item, so the list and the markup always say the same.
  includes: <Include[]>[
    { text: 'Технічний аудит сайту та план SEO на 12 місяців.' },
    { text: 'Аналіз ключових слів і конкурентів.' },
    { text: 'Проєкт структури сайту.' },
    { text: 'Впровадження правок на сайті та оптимізація головних сторінок.' },
    { text: 'Контент і посилання.' },
    { text: 'Оптимізація під пошуковики та під ШІ.', link: { part: 'під ШІ', page: 'geo' as const } },
    { text: 'Налаштування Google Search Console та аналітики.' },
    {
      text: 'Ведення профілів на Google Картах, Mapy.com (Seznam) і Firmy.cz, без обмеження за кількістю профілів: дзвінки, маршрути, переходи на сайт і робота з відгуками.',
      catalog: 'Ведення профілів на Google Картах, Mapy.com (Seznam) і Firmy.cz без обмеження за кількістю профілів: дзвінки, маршрути, переходи на сайт, відгуки',
    },
    { text: 'Щотижневий звіт: що зроблено, навіщо і які результати. Дзвінок за бажанням.' },
  ],

  stagesTitle: 'Як проходить робота?',
  // The same strings are shown in the numbered list and emitted as HowToStep name/text (word for word).
  stages: [
    { name: 'Місяць 1', text: 'Аудит, аналіз ключових слів і конкурентів, план на 12 місяців, технічні виправлення, структура сайту, запуск роботи з картами.' },
    { name: 'Місяць 2', text: 'Контент і оптимізація сторінок під запити ваших клієнтів.' },
    { name: 'Місяць 3', text: 'Масштабування: розширюємо охоплення під запити клієнтів, щоб сайт знаходило більше людей, ніж ті, хто одразу шукає сторінки послуг. Більше людей — більше шансів на заявки. Посилання, підсумки та план далі.' },
  ],
  weekly: 'Щотижня: звіт про виконану роботу.',

  resultsTitle: 'Коли будуть перші результати?',
  resultsAnswer: 'Перші результати SEO-просування з’являються через 2-3 місяці після початку роботи.',
  resultsNote: '',

  forWhomTitle: 'Для кого підходить просування на 3 місяці?',
  forWhom: [
    'Нові сайти та інтернет-магазини, які починають отримувати трафік із пошуку.',
    'Компанії, які раніше не займалися SEO системно.',
    'Сайти, що втратили трафік після редизайну або переходу на новий сайт.',
    'Бізнеси, яким потрібні дзвінки з карт Google і Seznam.',
  ],

  mapsTitle: 'Карти Google і Seznam входять у пакет',
  maps: 'Профілі на Google Картах, Mapy.com (Seznam) і Firmy.cz ведуться в межах пакета, без обмеження за кількістю профілів: стільки, скільки потрібно вашому бізнесу. Працюю з усіма метриками (дзвінки, маршрути, переходи на сайт) і з відгуками. Мета: дзвінки та звернення прямо з карти.',
  mapsOnly: 'Якщо вам потрібні лише карти:',

  compareTitle: 'Старт на 3 місяці чи Full SEO на рік?',
  compare: { before: 'Старт на 3 місяці: інтенсивний перший етап із планом, впровадженням і першими результатами. ', link: 'Full SEO на рік', after: ': робота протягом 12 місяців за планом.' },
  consultingNote: { before: 'Якщо вам потрібні лише відповіді на запитання і план, подивіться ', link: 'консультацію', after: '.' },

  caseTitle: 'Що це дало клієнтам?',
  caseText: CASE_LINE.uk,
  caseText2: TYPO_LINE_UK,
  caseLink2: 'Кейс «SEO для друкарні»',
  caseText3: EDU_LINE_UK,
  caseLink3: 'Кейс «SEO для освітньої платформи» (запуск нового сайту)',
  caseText4: SEASON_LINE_UK,
  caseLink4: 'SEO в низький сезон (частина 2)',
  caseLink: 'Уся історія',

  reviewsTitle: 'Що кажуть клієнти?',
  reviewsLink: 'Усі відгуки',

  faqTitle: 'Часті запитання про SEO-просування на 3 місяці',
  faq: [
    { q: 'Скільки коштує просування сайту на 3 місяці?', a: `${price} за 3 місяці. У вартість входять аудит і план на 12 місяців, впровадження правок, контент, посилання, оптимізація під пошуковики та під ШІ, карти Google і Seznam та щотижнева звітність.` },
    { q: 'Чи можна платити частинами?', a: `Так, ${pay}.` },
    { q: 'Коли чекати перших результатів?', a: 'Через 2-3 місяці після початку роботи.' },
    { q: 'Як часто ви звітуєте про роботу?', a: 'Щотижня: що зроблено, навіщо і які результати. Дзвінок за бажанням.' },
    { q: 'Скільки профілів карт входить у пакет?', a: 'Стільки, скільки потрібно вашому бізнесу, без обмеження за кількістю. З усіма метриками (дзвінки, маршрути, переходи на сайт) і роботою з відгуками.' },
    { q: 'Чим «Старт на 3 місяці» відрізняється від «Full SEO на рік»?', a: '«Старт на 3 місяці» — це інтенсивний перший етап: план, впровадження та перші результати. «Full SEO на рік» — це робота протягом 12 місяців за планом.' },
    { q: 'Чи працюєте ви з новими сайтами та інтернет-магазинами?', a: 'Так.' },
  ],
  faqAll: 'Усі часті запитання',

  formTitle: 'Залишити заявку',

  otherTitle: 'Інші послуги',
  more: 'Докладніше',
  audit: CONSULTING_UK.audit,
  geo: CONSULTING_UK.geo,

  schema: {
    serviceName: 'SEO-просування сайту на 3 місяці',
    serviceType: 'SEO-просування сайту',
    audience: 'Україномовні власники бізнесу, яким потрібні заявки та дзвінки з пошуку і з карт',
    catalogName: 'Що входить у SEO-просування на 3 місяці?',
    howToName: 'Як проходить SEO-просування сайту на 3 місяці',
    availableLanguage: 'uk',
    areaServed: [
      { '@type': 'Country', name: 'Чехія' },
      { '@type': 'Country', name: 'США' },
      { '@type': 'AdministrativeArea', name: 'Європейський союз' },
    ],
  },
};
