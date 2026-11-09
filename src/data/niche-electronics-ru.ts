// Russian niche landing page /ru/seo-dlya-magazinov-elektroniki-praga/ "SEO и GEO/AEO для магазинов электроники в Праге: заказы из Google и ИИ" (brief of 25.10.2026, rules A–G): the pair of the Czech page
// (hreflang cs ↔ ru, the site convention adds x-default = cs). Same sections, audit terms, prices, FAQ and niche status as the Czech page; the proof line is only "В этой нише результатов у меня пока нет." (the Czech page dropped
// the translation case too, default of the brief). Defaults taken (no answers to the brief's open questions): slug as in the brief, the observation block of 15.10.2026 (12 sites, the author's qualitative findings, NO counts, no city: it is not stated that all 12 are from Prague), no funnel articles, nothing about VAT,
// no brands / shops / competitors / Heureka / Zboží.cz, no quote, no Product/Offer, nothing about the metrics "звонки, маршруты, переходы" (the RU service pages do not state them). The Title is shortened to <= 55 characters and the
// Description to <= 150 (the site rule of 25.10.2026). Prices come from the single sources of the service pages. Review every 90 days and at any price change (23.01.2027).
import { OBS_NOTE } from './niche-obs-note';
import SUMMARIES from './niche-summaries.json';
import { fmtKc, PRICES } from './consulting-shared';
import { START_PAYMENTS, START_PRICE } from './start-shared';
import { NICHE_PRICE, priceAnswerRu, priceFaqRu } from './niche-prices';

// Publication date of this address (the brief: 25.10.2026); do NOT bump it when the page is edited (dateModified comes from git and moves with price edits).
export const NICHE_ELECTRONICS_RU_PUBLISHED = '2026-10-25';
export const ELECTRONICS_CAPACITY_DATE_RU = '25.10.2026';
const [PAY1, PAY2] = START_PAYMENTS;
const Q = fmtKc(PRICES.questions);
const A = fmtKc(PRICES.audit);
const S = fmtKc(START_PRICE);
const F = fmtKc(NICHE_PRICE.electronics.monthly); // Full SEO of this niche (niche-prices.ts)

export const NICHE_ELECTRONICS_RU = {
  lang: 'ru' as const,
  published: NICHE_ELECTRONICS_RU_PUBLISHED,
  authorLabel: 'Автор',
  authorName: 'Арсений Ераносьян',
  updatedLabel: 'Обновлено',

  lead: SUMMARIES['/ru/seo-dlya-magazinov-elektroniki-praga/'], // summary block (brief of 31.10.2026): data/niche-summaries.json
  heroAudit: 'Хочу бесплатный технический аудит',

  helpTitle: 'С чем я помогаю магазинам электроники в Праге?',
  helpAnswer: 'Проверяю технический базис интернет-магазина, чтобы поисковики видели категории, товары и их варианты, и предлагаю структуру категорий и фильтров. Рекомендую содержание категорий и ответы на частые вопросы и готовлю сайт к цитированию в ответах ИИ. Структура, тексты и разметка товаров входят в платные форматы.',
  helpLead: 'Что вы получаете:',
  help: [
    'техническая проверка',
    'структура категорий и фильтров',
    'рекомендации по содержанию категорий',
    'FAQ',
    'подготовка к GEO/AEO: прямые ответы, таблицы, актуальность',
    'разметка товаров только как часть платной работы',
  ],
  helpLinksLead: 'Подробности:',
  helpLinks: [
    { page: 'start' as const, text: 'Старт на 3 месяца' },
    { page: 'fullSeo' as const, text: 'Full SEO на год' },
    { page: 'geo' as const, text: 'SEO и GEO/AEO' },
  ],

  seeTitle: 'Что я вижу на сайтах магазинов электроники и что с этим делаю?',
  seeAnswer: '15.10.2026 я просмотрел 12 сайтов магазинов электроники. Чаще всего у них нет FAQ или его недостаточно, почти всегда нет блога, заголовки не сформулированы как вопросы, а микроразметки часто нет. Эти пункты не входят в бесплатный аудит, их разбор идёт в консультации и пакете Start.',
  seeNote: OBS_NOTE.ru,
  seeLead: 'Проблема и что я предлагаю:',
  see: [
    'нет FAQ или его недостаточно → набор вопросов и формат ответов',
    'нет блога → структура блога и темы статей',
    'заголовки не вопросы → заголовки разделов в формате вопроса',
    'нет микроразметки → разметка товаров в рамках платной работы',
  ],
  seeLink: 'Разобрать мой сайт на консультации',

  forTitle: 'Для кого это и для кого нет?',
  forAnswer: 'Услуга для интернет-магазинов электроники и техники в Праге и для магазинов с точкой продаж и сайтом, которые хотят, чтобы их находили в Google и в ответах ИИ. Не подходит тем, кто ждёт гарантированного числа заказов или первого места в выдаче.',
  forLang: 'Говорю на чешском, английском и русском; могу работать с сайтами на украинском, польском и словацком.',
  forNext: 'Что входит в бесплатный аудит',

  auditTitle: 'Что входит в бесплатный аудит, а что нет?',
  auditAnswer: 'Бесплатный аудит технический: проверяю индексацию, дубли и другие технические ошибки интернет-магазина. Презентацию вы получаете в течение 24 часов, без созвона и обязательств. В аудит не входят ключевые слова, конкуренты, карты, видимость в ИИ, скорость и мобильная версия. Остальные области решают платные услуги, о них вы решаете после аудита.',
  audit: {
    head: ['Входит', 'Не входит'],
    rows: [
      ['индексация', 'ключевые слова'],
      ['дубли', 'конкуренты'],
      ['другие технические ошибки', 'карты и видимость в ИИ'],
      ['презентация в течение 24 часов, без созвона и обязательств', 'скорость и мобильная версия'],
    ],
  },
  auditNote: 'Структура, контент, конверсия, FAQ и разметка товаров: это консультация или Start.',
  auditChecksLead: 'Что технически проверяется на сайте магазина:',
  auditChecks: [
    'категории и товары в индексе',
    'дубли из фильтров и параметров в адресе',
    'варианты товара и canonical',
    'пагинация',
    'снятые с продажи и отсутствующие товары (статусы ответа, переадресации)',
    'страницы внутреннего поиска в индексе',
    'sitemap',
    'языковые версии (если есть)',
  ],
  auditLead: 'Подробнее об аудите:',
  auditLink: 'Бесплатный аудит',
  auditExampleLead: 'Пример того, как выглядит результат аудита интернет-магазина:',
  auditExampleLink: 'короткое анонимное видео (36 секунд) на странице аудита',
  auditExampleNote: 'Это пример результата аудита, а не кейс магазина электроники.',

  mapsTitle: 'А что с профилями магазина на картах?',
  mapsAnswer: 'Профили магазина на Google Картах, Mapy.com и Firmy.cz входят в пакеты Start и Full SEO без ограничения числа профилей. Есть и отдельная услуга по картам. В бесплатный аудит карты не входят. Подробности и условия на странице услуги. Решить, нужна ли эта услуга, можно после аудита.',
  mapsLead: 'Услуга описана на странице',
  mapsLink: 'SEO для Mapy',

  coopTitle: 'Как начать и сколько стоит?',
  coopAnswer: priceAnswerRu('electronics'), // the capacity sentence lives in the FAQ
  coopLinks: [
    { page: 'consulting' as const, text: 'Консультации' },
    { page: 'start' as const, text: 'Старт на 3 месяца' },
    { page: 'fullSeo' as const, text: 'Full SEO на год' },
  ],

  faqTitle: 'Часто задаваемые вопросы',
  faq: [
    priceFaqRu('electronics', 'магазина электроники'),
    { q: 'Что я получу после бесплатного аудита?', a: 'После аудита вы получаете презентацию технических ошибок сайта в течение 24 часов, без созвона и обязательств. Что делать дальше, решаете вы: консультация, пакет Start или Full SEO. Структуру, контент, конверсию и FAQ аудит не разбирает, это платные форматы. Также в аудит не входят ключевые слова, конкуренты, карты и видимость в ИИ.' },
    { q: 'Чем Start отличается от Full SEO?', a: `Start длится три месяца и стоит ${S}: ${fmtKc(PAY1)} в начале и ${fmtKc(PAY2)} по договорённости. Full SEO это работа на 12 месяцев от ${F} в месяц, точная цена зависит от объёма и ниши. В оба формата входят профили на картах. Выбрать формат поможет бесплатный аудит.` },
    { q: 'Как проходит работа шаг за шагом?', a: 'Начинаете с бесплатного технического аудита. Если нужно разобрать структуру и контент сайта, дальше идёт консультация, затем пакет Start на 3 месяца или постоянный Full SEO. Объём работы уточняем на консультации.' },
    { q: 'Можно ли начать только с консультации?', a: `Да. Часовая консультация за ${Q} это ответы на ваши вопросы и короткое письменное резюме. Консультация за ${A} включает аудит сайта и план на 12 месяцев: презентация готова за 2 рабочих дня после получения сайта, затем созвон. Start или Full SEO можно заказать позже.` },
    { q: 'Со сколькими компаниями из одной ниши вы работаете?', a: `Я работаю одновременно не более чем с тремя компаниями из одной ниши. Это предел моей загрузки, а не эксклюзивность. На ${ELECTRONICS_CAPACITY_DATE_RU} ниша магазинов электроники свободна. Если это изменится, я обновлю данные на странице, чтобы они были актуальными и одинаковыми во всех языковых версиях.` },
  ],

  endTitle: 'Какой следующий шаг?',
  endAnswer: 'Хотите узнать, есть ли на сайте вашего магазина технические ошибки, из-за которых поисковик не индексирует категории или товары? Начните с бесплатного технического аудита: презентацию вы получите в течение 24 часов, без созвона и обязательств. Если ошибок нет, вы узнаете и это.',
  endCta: 'Хочу бесплатный технический аудит',

  schema: {
    serviceName: 'SEO и GEO/AEO для магазинов электроники',
    serviceType: 'SEO и GEO/AEO',
    areaServed: 'Praha',
    description: 'SEO и GEO/AEO для магазинов электроники и техники в Праге: технический базис интернет-магазина, категории, фильтры, варианты товаров, ответы на частые вопросы и подготовка к цитированию в ответах ИИ.',
  },
};
