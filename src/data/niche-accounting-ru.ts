// Russian version of the niche landing page /ru/seo-dlya-buhgalterskih-kompanij-praga/ (brief of 31.10.2026), the pair of /seo-pro-ucetni-kancelare-praha/ (cs). hreflang cs ↔ ru comes from ONLY_LANGS.
// Facts equal to the Czech page (parity): the observation of 25.10.2026 (16 sites, counts), the capacity rule + status (the same constant as the Czech page), the audit (what it covers, 24 hours, no call, no obligation),
// "2–3 months" only about the author's own projects without a guarantee, the translation case (+65–70 % month on month for three months, March–September 2026), prices (the same numbers as on the Czech page: from the shared constants).
// Applied from the author's standing rules: no "no case / no results in this niche" statement (29.10.2026), no guarantees, no site / competitor names, "агентство" never about the author, "бухгалтерская компания" in the headings.
// Deviation from the brief (parity wins): the price answers carry the numbers because the Czech page already shows them (Brno brief, [?]4). No B2B tripling. No "other materials" block (no Russian articles on accounting).
import SUMMARIES from './niche-summaries.json';
import { OBS_NOTE } from './niche-obs-note';
import { START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { PRICES } from './consulting-shared';
import { NICHE_ACCOUNTING_STATUS_DATE } from './niche-accounting-cs';

export const NICHE_ACCOUNTING_RU_PUBLISHED = '2026-10-31';
const kc = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Kč`;
const STATUS_DATE = NICHE_ACCOUNTING_STATUS_DATE.replace(/\s/g, ''); // 31.10.2026
const PRICES_TEXT = `консультация — ${kc(PRICES.questions)} за час или ${kc(PRICES.audit)} с аудитом и планом, «Старт» — ${kc(START_PRICE)} за три месяца, Full SEO — от ${kc(FULLSEO_MONTHLY)} в месяц`;

export const NICHE_ACCOUNTING_RU = {
  lang: 'ru' as const,
  published: NICHE_ACCOUNTING_RU_PUBLISHED,
  authorLabel: 'Автор',
  authorName: 'Арсений Ераносьян',
  updatedLabel: 'Обновлено',

  lead: SUMMARIES['/ru/seo-dlya-buhgalterskih-kompanij-praga/'],
  heroAudit: 'Получить бесплатный аудит',
  heroConsulting: 'Консультации',

  coopTitle: 'Как выглядит сотрудничество?',
  coopAnswer: 'Сотрудничество начинается с бесплатного аудита технических ошибок сайта: индексации, дублей и других технических проблем. Презентацию я отправляю в течение 24 часов, без звонка и без обязательств. Дальше можно выбрать консультацию, «Старт» на три месяца или Full SEO на год. Карты — отдельная услуга.',
  steps: {
    head: ['Шаг', 'Что входит', 'Страница'],
    rows: [
    { page: 'audit' as const, name: 'Бесплатный аудит', text: 'технические ошибки сайта: индексация, дубли и другие технические проблемы', link: 'Бесплатный аудит' },
    { page: 'consulting' as const, name: 'Консультация', text: 'час ответов на вопросы или аудит с планом на 12 месяцев', link: 'Консультации' },
    { page: 'start' as const, name: 'Старт на 3 месяца', text: 'три месяца работы над основой сайта и ключевыми страницами', link: 'Старт на 3 месяца' },
    { page: 'fullSeo' as const, name: 'Full SEO на год', text: 'долгая работа со стратегией, контентом и техническим контролем', link: 'Full SEO на год' },
    { page: 'maps' as const, name: 'Карты', text: 'Google Maps и Mapy.com для местного поиска', link: 'Карты' },
    ],
  },

  priceTitle: 'Сколько это стоит и когда будут первые результаты?',
  priceAnswer: `Стоимость зависит от выбранной услуги: ${PRICES_TEXT}. Бесплатный аудит ничего не стоит. В моих проектах первые изменения обычно появляются через 2–3 месяца.`,

  expTitle: 'Какой у меня опыт в этой нише?',
  expAnswer: 'У меня есть кейс из другой ниши, переводческого агентства: заявки из форм росли на 65–70 % месяц к месяцу три месяца подряд (март–сентябрь 2026). Кейс показывает порядок работы, а не результат для вашей ниши. Результаты из другой ниши я не переношу на ваш сайт, поэтому использую кейс как пример подхода.',
  expLink: 'Прочитать кейс переводческого агентства',

  obsTitle: 'Что я увидел на сайтах бухгалтерских компаний?',
  obsAnswer: 'К 25.10.2026 я просмотрел сайты 16 бухгалтерских компаний. У 14 из 16 нет блога, у всех 16 слабый FAQ и нет структурированных данных, у всех 16 меню и заголовки плохо подходят для ИИ, а у 5 сайтов услуги перечислены списком без отдельных страниц. Это моё наблюдение, а не исследование рынка.',
  obsNote: `${OBS_NOTE.ru} Эти пункты я разбираю на консультации и в «Старте», в бесплатный аудит они не входят.`,

  fitTitle: 'Для кого SEO имеет смысл, а для кого нет?',
  fitAnswer: 'SEO подходит бухгалтерским компаниям, которые хотят получать клиентов из поиска, у которых понятные услуги, цены и свободные мощности. Не подходит тем, кто работает только по рекомендациям или не может взять новых клиентов. Страница подойдёт и налоговым консультантам с собственным сайтом.',

  faqTitle: 'Частые вопросы',
  faq: [
    { q: 'Есть ли смысл в SEO для бухгалтерской компании?', a: 'Да, если вы хотите получать клиентов из поиска, а не только по рекомендациям. Для этого сайт должен ясно показывать услуги, цены и то, как начать. Первый шаг — бесплатный аудит технических ошибок. Сначала я смотрю на технические основы сайта, затем на структуру услуг.' },
    { q: 'Когда появляются первые изменения?', a: 'В моих проектах первые изменения обычно появляются через 2–3 месяца. Конкретный срок для вашего сайта зависит от его состояния, конкуренции и объёма правок и выясняется только после аудита. Сначала я смотрю на сайт и только потом говорю, что в нём можно сделать.' },
    { q: 'Сколько стоит SEO для бухгалтерской компании?', a: `Стоимость зависит от выбранной услуги: ${PRICES_TEXT}. Специальных цен для бухгалтерских компаний нет. Бесплатный аудит ничего не стоит и ни к чему не обязывает, с него я рекомендую начать.` },
    { q: 'Что такое GEO/AEO для бухгалтерской компании?', a: 'GEO/AEO — это оптимизация контента для ответов ИИ и поиска: короткие прямые ответы, понятные цены и отдельные страницы услуг. Попадёт ли компания в рекомендации ИИ, но сайт, понятный и людям, и поиску, имеет лучшую стартовую позицию, чем неструктурированный. Такой контент понятен и читателю.' },
    { q: 'Что входит в бесплатный аудит?', a: 'Бесплатный аудит проверяет только технические ошибки сайта: индексацию, дубли и другие технические проблемы. Презентацию я отправляю в течение 24 часов, без звонка и без обязательств. Ключевые слова, конкуренты, карты, видимость в ИИ, скорость и мобильная версия в аудит не входят.' },
    { q: 'С каким числом компаний вы работаете одновременно?', a: `Я работаю одновременно не более чем с тремя компаниями из одной ниши, чтобы на каждую хватало времени. Статус для ниши бухгалтерии на ${STATUS_DATE}: свободно. Статус обновляется и одинаков во всех языковых версиях страницы. Счётчик «X из 3» я не веду.` },
  ],

  endTitle: 'Хотите узнать, какие технические ошибки есть на вашем сайте?',
  endText: 'Бесплатный аудит проверяет только технические ошибки. Презентацию отправляю в течение 24 часов, без звонка и без обязательств.',
  endCta: 'Получить бесплатный аудит',
  endConsulting: 'Консультации',

  schema: {
    serviceName: 'SEO и GEO/AEO для бухгалтерских компаний',
    serviceType: 'SEO и GEO/AEO для бухгалтерских компаний',
    areaServed: 'Praha',
    audience: 'бухгалтерские компании',
  },
};
