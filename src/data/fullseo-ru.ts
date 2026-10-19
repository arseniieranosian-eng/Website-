// Russian content of /ru/uslugi/full-seo/ (brief of 19.10.2026): an adaptation for Russian-speaking
// business owners in Czechia, the EU and the USA, not a translation of the Czech page.
// Prices come from fullseo-shared.ts / start-shared.ts (one source for all languages).
import { fmtKc } from './consulting-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { START_PRICE } from './start-shared';
import { CONSULTING_RU } from './consulting-ru';

const from = `от ${fmtKc(FULLSEO_MONTHLY)} в месяц`;
const From = `От ${fmtKc(FULLSEO_MONTHLY)} в месяц`;

interface Item { text: string; link?: { part: string; page: 'geo' }; catalog?: string }
interface Group { title: string; items: Item[] }

export const FULLSEO_RU = {
  lang: 'ru' as const,
  packageName: 'Full SEO',
  h1: 'SEO продвижение сайта на год',
  lead: 'Полное SEO на 12 месяцев: работа над сайтом, ссылки и публикации вне его, карты Google и Seznam, оптимизация под поисковики и под ИИ. Я веду всё SEO за вас и каждую неделю показываю, что сделано и какой результат.',
  updatedLabel: 'Обновлено',
  badge: `${from} · 12 месяцев`,
  heroPrimary: 'Оставить заявку',
  heroAudit: 'Бесплатный аудит',

  priceTitle: 'Сколько стоит SEO продвижение на год?',
  // The euro estimate appears only in visible text (JSON-LD has CZK only).
  priceAnswer: `SEO продвижение на год стоит ${from} (≈ €600). Точная цена зависит от объёма работ и ниши. Уточните цену в заявке, я предложу лучшую стоимость под ваш бюджет.`,
  priceNote: 'Сумма в евро ориентировочная, по курсу на дату публикации; основная цена в кронах.',
  // JSON-LD Offer.description: this sentence is also the answer of the first FAQ item.
  priceTerms: `${From}, точная цена зависит от объёма работ и ниши`,

  includesTitle: 'Что входит в SEO продвижение на год',
  // One sentence per item. The OfferCatalog in JSON-LD is built from the first sentence of each item
  // (or `catalog`, where the brief fixes a different wording), so the list and the markup say the same.
  groups: <Group[]>[
    {
      title: 'Работа над сайтом',
      items: [
        { text: 'SEO-аудит сайта: скорость, ошибки, индексация, структура, тексты.' },
        { text: 'Анализ ключевых слов в Ahrefs, SEMrush и Google Keyword Planner.' },
        { text: 'On-page SEO: заголовки H1 и H2, meta description, ключевые слова, тексты, alt-теги картинок.' },
        { text: 'Контент каждый месяц: статьи, страницы услуг, блог. Объём подбирается индивидуально под нишу и конкуренцию.' },
        { text: 'Постоянный технический контроль.' },
        {
          text: 'Аналитика в Google Analytics и Google Search Console: сколько людей пришло, по каким запросам, какие страницы работают.',
          catalog: 'Аналитика в Google Analytics и Google Search Console',
        },
        { text: 'Годовая стратегия, квартальные планы приоритетов и итоги года.' },
      ],
    },
    {
      title: 'Работа вне сайта',
      items: [
        { text: 'Линкбилдинг: публикации, каталоги, PR-статьи, ссылки с других сайтов.' },
        {
          text: 'Ведение профилей на Google Картах и Seznam Mapy, без ограничения по количеству профилей: звонки, маршруты, переходы на сайт и работа с отзывами.',
          catalog: 'Ведение профилей на Google Картах и Seznam Mapy без ограничения по количеству профилей: звонки, маршруты, переходы на сайт, отзывы',
        },
      ],
    },
    {
      title: 'ИИ и отчётность',
      items: [
        { text: 'Оптимизация под поисковики и под ИИ.', link: { part: 'под ИИ', page: 'geo' } },
        { text: 'Еженедельный отчёт: что сделано, для чего и какие результаты. Созвон по желанию.' },
      ],
    },
  ],
  contentExample: 'Пример контента: статья «Какие документы нужно перевести для ПМЖ в Чехии» приводит клиентов из поиска.',

  stagesTitle: 'Как проходит работа',
  // The same strings are shown in the numbered list and emitted as HowToStep text (word for word).
  stages: [
    { name: 'Шаг 1', text: 'Аудит и стратегия на год.' },
    { name: 'Шаг 2', text: 'Квартальный план приоритетов.' },
    { name: 'Шаг 3', text: 'Постоянная работа и еженедельные отчёты.' },
    { name: 'Шаг 4', text: 'Итоги года и план на следующий.' },
  ],

  resultsTitle: 'Когда будут первые результаты?',
  resultsAnswer: 'Первые результаты SEO продвижения появляются через 2-3 месяца после начала работы.',
  resultsNote: 'Первое место в Google не гарантирую. Гарантирую прозрачную работу, понятный план и измеримые цели, согласованные в начале.',

  forWhomTitle: 'Для кого подходит Full SEO на год',
  forWhom: [
    'Компании, для которых сайт главный источник заявок.',
    'Интернет-магазины и услуги в конкурентных нишах.',
    'Компании без собственного SEO-специалиста.',
    'Бизнесы, которым нужны звонки с карт Google и Seznam.',
  ],

  mapsTitle: 'Карты Google и Seznam входят в пакет',
  mapsBefore: 'Профили на Google Картах и Seznam Mapy ведутся в рамках пакета, без ограничения по количеству профилей: столько, сколько нужно вашему бизнесу. Работаю со всеми метриками (звонки, маршруты, переходы на сайт) и с отзывами. Как и в пакете «',
  mapsStartLink: 'Старт на 3 месяца',
  mapsAfter: '».',
  mapsOnly: 'Если вам нужны только карты:',

  compareTitle: 'Full SEO на год или Старт на 3 месяца?',
  compare: {
    before: '«',
    startLink: 'Старт на 3 месяца',
    after: `» это интенсивный первый этап за ${fmtKc(START_PRICE)}: план, внедрение и первые результаты. «Full SEO на год» это работа 12 месяцев по годовой стратегии с квартальными планами и итогами года, ${from}.`,
  },
  consultingNote: { before: 'Если вам нужны только ответы на вопросы и план, посмотрите ', link: 'консультацию', after: '.' },

  caseTitle: 'Что это дало клиентам',
  caseText: 'KB PŘEKLADY: сайт бюро переводов почти не ранжировался и не приносил заявок. За 4 месяца работы число заявок выросло в 8 раз, летом в 24 раза, а агентство появилось в ответах Google AI Overview.',
  caseLink: 'Вся история',

  reviewsTitle: 'Что говорят клиенты',
  reviewsLink: 'Все отзывы',

  faqTitle: 'Частые вопросы о SEO продвижении на год',
  faq: [
    { q: 'Сколько стоит SEO продвижение на год?', a: `${From}, точная цена зависит от объёма работ и ниши.` },
    { q: 'Как часто вы отчитываетесь?', a: 'Еженедельно: что сделано, для чего и какие результаты. Созвон по желанию.' },
    { q: 'Входят ли карты Google и Seznam в пакет?', a: 'Да, без ограничения по количеству профилей, со всеми метриками (звонки, маршруты, переходы на сайт) и работой с отзывами, как и в пакете «Старт на 3 месяца».' },
    { q: 'Когда ждать первых результатов?', a: 'Через 2-3 месяца после начала работы.' },
    { q: 'Остаются ли квартальные планы и итоги года?', a: 'Да. В пакет входят квартальные планы приоритетов и итоги года с планом на следующий.' },
    { q: 'Чем Full SEO отличается от Старта на 3 месяца?', a: `«Старт на 3 месяца» это интенсивный первый этап за ${fmtKc(START_PRICE)}. «Full SEO на год» это работа 12 месяцев по годовой стратегии, ${from}.` },
  ],
  faqAll: 'Все частые вопросы',

  formTitle: 'Оставить заявку',

  otherTitle: 'Другие услуги',
  otherAll: 'Все услуги',
  more: 'Подробнее',
  audit: CONSULTING_RU.audit,
  geo: CONSULTING_RU.geo,

  schema: {
    serviceName: 'SEO продвижение сайта на год',
    serviceType: 'SEO продвижение сайта',
    audience: 'Русскоговорящие владельцы бизнеса, для которых сайт главный источник заявок',
    catalogName: 'Что входит в SEO продвижение на год',
    howToName: 'Как проходит SEO продвижение сайта на год',
    availableLanguage: 'ru',
    areaServed: [
      { '@type': 'Country', name: 'Чехия' },
      { '@type': 'Country', name: 'США' },
      { '@type': 'AdministrativeArea', name: 'Европейский союз' },
    ],
  },
};
