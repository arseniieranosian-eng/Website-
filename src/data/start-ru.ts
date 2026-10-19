// Russian content of /ru/uslugi/start-3-mesyaca/ (brief of 19.10.2026): an adaptation for Russian-speaking
// business owners in Czechia, the EU and the USA, not a translation of the Czech page.
// Prices come from start-shared.ts (one source for all languages).
import { fmtKc } from './consulting-shared';
import { START_PAYMENTS, START_PRICE } from './start-shared';
import { CONSULTING_RU } from './consulting-ru';

const [PAY1, PAY2] = START_PAYMENTS;
const price = fmtKc(START_PRICE);
const pay = `${fmtKc(PAY1)} в начале работы и ${fmtKc(PAY2)} по договорённости`;

interface Include { text: string; link?: { part: string; page: 'geo' }; catalog?: string }

export const START_RU = {
  lang: 'ru' as const,
  slogan: 'На рельсы роста',
  h1: 'SEO продвижение сайта на 3 месяца',
  lead: 'Три месяца полной работы над вашим сайтом и картами Google и Seznam: аудит и план на 12 месяцев, внедрение правок, контент, ссылки, оптимизация под поисковики и под ИИ. Первые результаты через 2-3 месяца, отчёт каждую неделю.',
  updatedLabel: 'Обновлено',
  badge: `${price} · 3 месяца`,
  heroPrimary: 'Оставить заявку',
  heroAudit: 'Бесплатный аудит',

  priceTitle: 'Сколько стоит SEO продвижение сайта на 3 месяца?',
  priceAnswer: `SEO продвижение сайта на 3 месяца стоит ${price} (≈ €2 000). Платить можно частями: ${pay}.`,
  priceNote: 'Сумма в евро ориентировочная, по курсу на дату публикации; основная цена в кронах.',
  // JSON-LD Offer.description: the visible payment sentence without its final period.
  payTerms: `Платить можно частями: ${pay}`,

  includesTitle: 'Что входит в SEO продвижение на 3 месяца',
  // `link` turns the given part of the sentence into a link to that page. The OfferCatalog in JSON-LD is
  // built from the first sentence of each item, so the list and the markup always say the same.
  includes: <Include[]>[
    { text: 'Технический аудит сайта и план SEO на 12 месяцев.' },
    { text: 'Анализ ключевых слов и конкурентов.' },
    { text: 'Проект структуры сайта.' },
    { text: 'Внедрение правок на сайте и оптимизация главных страниц.' },
    { text: 'Контент и ссылки.' },
    { text: 'Оптимизация под поисковики и под ИИ.', link: { part: 'под ИИ', page: 'geo' as const } },
    { text: 'Настройка Google Search Console и аналитики.' },
    {
      text: 'Ведение профилей на Google Картах, Mapy.com (Seznam) и Firmy.cz, без ограничения по количеству профилей: звонки, маршруты, переходы на сайт и работа с отзывами.',
      // Wording of this OfferCatalog item as given in the brief (differs slightly from the visible sentence).
      catalog: 'Ведение профилей на Google Картах, Mapy.com (Seznam) и Firmy.cz без ограничения по количеству профилей: звонки, маршруты, переходы на сайт, отзывы',
    },
    { text: 'Еженедельный отчёт: что сделано, для чего и какие результаты. Созвон по желанию.' },
  ],

  stagesTitle: 'Как проходит работа',
  // The same strings are shown in the numbered list and emitted as HowToStep name/text (word for word).
  stages: [
    { name: 'Месяц 1', text: 'Аудит, анализ ключей и конкурентов, план на 12 месяцев, первые правки, запуск работы с картами.' },
    { name: 'Месяц 2', text: 'Технические исправления, структура сайта, контент.' },
    { name: 'Месяц 3', text: 'Оптимизация страниц, ссылки, итоги и план дальнейших шагов.' },
  ],
  weekly: 'Каждую неделю: отчёт о проделанной работе.',

  resultsTitle: 'Когда будут первые результаты?',
  resultsAnswer: 'Первые результаты SEO продвижения появляются через 2-3 месяца после начала работы.',
  resultsNote: 'Первое место в Google не гарантирую. Гарантирую прозрачную работу, понятный план и измеримые цели, согласованные в начале.',

  forWhomTitle: 'Для кого подходит продвижение на 3 месяца',
  forWhom: [
    'Новые сайты и интернет-магазины, которые начинают получать трафик из поиска.',
    'Компании, которые раньше не занимались SEO системно.',
    'Сайты, потерявшие трафик после редизайна или переезда на новый сайт.',
    'Бизнесы, которым нужны звонки с карт Google и Seznam.',
  ],

  mapsTitle: 'Карты Google и Seznam входят в пакет',
  maps: 'Профили на Google Картах, Mapy.com (Seznam) и Firmy.cz ведутся в рамках пакета, без ограничения по количеству профилей: столько, сколько нужно вашему бизнесу. Работаю со всеми метриками (звонки, маршруты, переходы на сайт) и с отзывами. Цель: звонки и обращения прямо с карты.',
  mapsOnly: 'Если вам нужны только карты:',

  compareTitle: 'Старт на 3 месяца или Full SEO на год?',
  compare: { before: 'Старт на 3 месяца: интенсивный первый этап с планом, внедрением и первыми результатами. ', link: 'Full SEO на год', after: ': работа в течение 12 месяцев по плану.' },
  consultingNote: { before: 'Если вам нужны только ответы на вопросы и план, посмотрите ', link: 'консультацию', after: '.' },

  caseTitle: 'Что это дало клиентам',
  caseText: 'KB PŘEKLADY: сайт бюро переводов почти не ранжировался и не приносил заявок. За 4 месяца работы число заявок выросло в 8 раз, летом в 24 раза, а агентство появилось в ответах Google AI Overview.',
  caseLink: 'Вся история',

  reviewsTitle: 'Что говорят клиенты',
  reviewsLink: 'Все отзывы',

  faqTitle: 'Частые вопросы о SEO продвижении на 3 месяца',
  faq: [
    { q: 'Сколько стоит продвижение сайта на 3 месяца?', a: `${price} за 3 месяца. В стоимость входят аудит и план на 12 месяцев, внедрение правок, контент, ссылки, оптимизация под поисковики и под ИИ, карты Google и Seznam и еженедельная отчётность.` },
    { q: 'Можно ли платить частями?', a: `Да, ${pay}.` },
    { q: 'Когда ждать первых результатов?', a: 'Через 2-3 месяца после начала работы.' },
    { q: 'Как часто вы отчитываетесь о работе?', a: 'Еженедельно: что сделано, для чего и какие результаты. Созвон по желанию.' },
    { q: 'Сколько профилей карт входит в пакет?', a: 'Столько, сколько нужно вашему бизнесу, без ограничения по количеству. Со всеми метриками (звонки, маршруты, переходы на сайт) и работой с отзывами.' },
    { q: 'Чем «Старт на 3 месяца» отличается от «Full SEO на год»?', a: '«Старт на 3 месяца» это интенсивный первый этап: план, внедрение и первые результаты. «Full SEO на год» это работа в течение 12 месяцев по плану.' },
    { q: 'Работаете ли вы с новыми сайтами и интернет-магазинами?', a: 'Да.' },
  ],
  faqAll: 'Все частые вопросы',

  formTitle: 'Оставить заявку',

  otherTitle: 'Другие услуги',
  otherAll: 'Все услуги',
  more: 'Подробнее',
  audit: CONSULTING_RU.audit,
  geo: CONSULTING_RU.geo,

  schema: {
    serviceName: 'SEO продвижение сайта на 3 месяца',
    serviceType: 'SEO продвижение сайта',
    audience: 'Русскоговорящие владельцы бизнеса, которым нужны заявки и звонки из поиска и с карт',
    catalogName: 'Что входит в SEO продвижение на 3 месяца',
    howToName: 'Как проходит SEO продвижение сайта на 3 месяца',
    availableLanguage: 'ru',
    areaServed: [
      { '@type': 'Country', name: 'Чехия' },
      { '@type': 'Country', name: 'США' },
      { '@type': 'AdministrativeArea', name: 'Европейский союз' },
    ],
  },
};
