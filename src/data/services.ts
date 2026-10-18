import type { Lang, ServiceKey } from '../i18n/routes';

type L<T = string> = Record<Lang, T>;

export interface Service {
  key: ServiceKey;
  icon: string;
  short: L; // 1–2 lines for cards
  intro: L;
  forWhom: L<string[]>;
  includes: L<string[]>;
  process: L<string[]>;
  duration: L;
  related: ServiceKey[];
}

export const SERVICES: Service[] = [
  {
    key: 'consulting',
    icon: 'chat',
    short: {
      cs: 'Rozbor webu, odpovědi na vaše otázky a jasný akční plán. Online nebo osobně v Praze.',
      en: 'A review of your site, answers to your questions and a clear action plan. Online or in Prague.',
      ru: 'Разбор сайта, ответы на вопросы и понятный план действий. Онлайн или лично в Праге.',
    },
    intro: {
      cs: 'Potřebujete druhý názor, nevíte, kde začít, nebo má váš tým SEO v rukou a chce si ověřit směr? Konzultace vám dá konkrétní odpovědi a seznam kroků seřazený podle dopadu.',
      en: 'Need a second opinion, not sure where to start, or your team handles SEO and wants to validate the direction? A consultation gives you concrete answers and a list of steps ranked by impact.',
      ru: 'Нужен взгляд со стороны, непонятно, с чего начать, или ваша команда ведёт SEO и хочет проверить направление? Консультация даст конкретные ответы и список шагов по приоритету.',
    },
    forWhom: {
      cs: ['Majitelé firem, kteří chtějí rozumět SEO', 'Marketingové týmy a in-house specialisté', 'Weby před redesignem nebo migrací'],
      en: ['Business owners who want to understand SEO', 'Marketing teams and in-house specialists', 'Websites before a redesign or migration'],
      ru: ['Владельцы бизнеса, которые хотят разобраться в SEO', 'Маркетинговые команды и in-house специалисты', 'Сайты перед редизайном или миграцией'],
    },
    includes: {
      cs: ['Analýza webu před schůzkou', '60–90 minut online nebo osobně v Praze', 'Záznam a písemné shrnutí', 'Akční plán seřazený podle priorit'],
      en: ['Website analysis before the call', '60–90 minutes online or in person in Prague', 'Recording and written summary', 'Action plan ranked by priority'],
      ru: ['Анализ сайта до встречи', '60–90 минут онлайн или лично в Праге', 'Запись и письменное резюме', 'План действий по приоритетам'],
    },
    process: {
      cs: ['Pošlete mi web a otázky', 'Projdu web a připravím podklady', 'Společně vše probereme', 'Do 2 dnů dostanete shrnutí a plán'],
      en: ['Send me your site and questions', 'I review the site and prepare notes', 'We go through everything together', 'Within 2 days you get a summary and plan'],
      ru: ['Присылаете сайт и вопросы', 'Я изучаю сайт и готовлю материалы', 'Вместе всё обсуждаем', 'В течение 2 дней — резюме и план'],
    },
    duration: { cs: 'Jednorázově nebo opakovaně', en: 'One-off or recurring', ru: 'Разово или регулярно' },
    related: ['start', 'fullSeo'],
  },
  {
    key: 'start',
    icon: 'rocket',
    short: {
      cs: 'Tři měsíce intenzivní práce: audit, opravy, klíčová slova a optimalizace hlavních stránek.',
      en: 'Three months of focused work: audit, fixes, keywords and optimisation of your key pages.',
      ru: 'Три месяца интенсивной работы: аудит, исправления, ключевые слова и оптимизация главных страниц.',
    },
    intro: {
      cs: 'Ideální první krok pro web, který zatím ze SEO nic nemá. Za tři měsíce dáme do pořádku technický základ, postavíme strukturu podle toho, co lidé hledají, a nastavíme měření, abyste viděli, co funguje.',
      en: 'The ideal first step for a site that gets nothing from SEO yet. In three months we fix the technical foundation, build a structure around what people search for and set up tracking so you can see what works.',
      ru: 'Идеальный первый шаг для сайта, который пока ничего не получает от SEO. За три месяца приводим в порядок техническую базу, строим структуру под реальные запросы и настраиваем аналитику.',
    },
    forWhom: {
      cs: ['Nové weby a e-shopy', 'Firmy, které SEO nikdy systematicky nedělaly', 'Weby po redesignu se ztrátou návštěvnosti'],
      en: ['New websites and online stores', 'Businesses that have never done SEO systematically', 'Sites that lost traffic after a redesign'],
      ru: ['Новые сайты и интернет-магазины', 'Компании, которые никогда системно не занимались SEO', 'Сайты, потерявшие трафик после редизайна'],
    },
    includes: {
      cs: ['Kompletní technický audit a opravy', 'Analýza klíčových slov a konkurence', 'Návrh struktury webu', 'Optimalizace hlavních stránek', 'Nastavení GA4 a Google Search Console', 'Měsíční report a call'],
      en: ['Full technical audit and fixes', 'Keyword and competitor research', 'Site structure proposal', 'Optimisation of key pages', 'GA4 and Google Search Console setup', 'Monthly report and call'],
      ru: ['Полный технический аудит и исправления', 'Анализ ключевых слов и конкурентов', 'Проект структуры сайта', 'Оптимизация главных страниц', 'Настройка GA4 и Google Search Console', 'Ежемесячный отчёт и созвон'],
    },
    process: {
      cs: ['1. měsíc: audit, analýza a plán', '2. měsíc: technické opravy a struktura', '3. měsíc: obsah, optimalizace a vyhodnocení'],
      en: ['Month 1: audit, research and plan', 'Month 2: technical fixes and structure', 'Month 3: content, optimisation and review'],
      ru: ['1-й месяц: аудит, анализ и план', '2-й месяц: технические исправления и структура', '3-й месяц: контент, оптимизация и итоги'],
    },
    duration: { cs: '3 měsíce', en: '3 months', ru: '3 месяца' },
    related: ['fullSeo', 'maps'],
  },
  {
    key: 'fullSeo',
    icon: 'chart',
    short: {
      cs: 'Celoroční péče: strategie, obsah, odkazy, technický dohled a GEO. Stabilní růst poptávek.',
      en: 'Year-round care: strategy, content, links, technical monitoring and GEO. Steady growth in enquiries.',
      ru: 'Работа весь год: стратегия, контент, ссылки, технический контроль и GEO. Стабильный рост заявок.',
    },
    intro: {
      cs: 'SEO přináší největší výsledky v dlouhém horizontu. V rámci ročního programu vedu celé SEO za vás: od strategie přes obsah a odkazy až po pravidelné vyhodnocení a optimalizaci pro AI vyhledávání.',
      en: 'SEO delivers the biggest results over the long run. In the annual programme I run your entire SEO: from strategy through content and links to regular reporting and optimisation for AI search.',
      ru: 'SEO даёт максимальный результат на длинной дистанции. В годовой программе я веду всё SEO за вас: от стратегии, контента и ссылок до регулярной отчётности и оптимизации под нейросети.',
    },
    forWhom: {
      cs: ['Firmy, pro které je web hlavní zdroj poptávek', 'E-shopy a služby v konkurenčních oborech', 'Firmy bez vlastního SEO specialisty'],
      en: ['Businesses whose website is the main source of leads', 'Online stores and services in competitive niches', 'Companies without an in-house SEO'],
      ru: ['Компании, для которых сайт — главный источник заявок', 'Интернет-магазины и услуги в конкурентных нишах', 'Компании без собственного SEO-специалиста'],
    },
    includes: {
      cs: ['Roční strategie a čtvrtletní plány', 'Obsahový plán a tvorba textů', 'Linkbuilding', 'Průběžný technický dohled', 'SEO + GEO optimalizace', 'Měsíční reporting a call'],
      en: ['Annual strategy and quarterly plans', 'Content plan and copywriting', 'Link building', 'Ongoing technical monitoring', 'SEO + GEO optimisation', 'Monthly reporting and call'],
      ru: ['Годовая стратегия и квартальные планы', 'Контент-план и написание текстов', 'Линкбилдинг', 'Постоянный технический контроль', 'SEO + GEO-оптимизация', 'Ежемесячная отчётность и созвон'],
    },
    process: {
      cs: ['Audit a strategie na celý rok', 'Čtvrtletní plán priorit', 'Průběžná práce a měsíční reporty', 'Vyhodnocení a plán na další rok'],
      en: ['Audit and strategy for the year', 'Quarterly priority plan', 'Ongoing work and monthly reports', 'Annual review and next-year plan'],
      ru: ['Аудит и стратегия на год', 'Квартальный план приоритетов', 'Постоянная работа и ежемесячные отчёты', 'Итоги года и план на следующий'],
    },
    duration: { cs: '12 měsíců', en: '12 months', ru: '12 месяцев' },
    related: ['start', 'maps'],
  },
  {
    key: 'maps',
    icon: 'pin',
    short: {
      cs: 'Lokální SEO na Google Maps a Mapy.com (Seznam): profil, recenze a vyšší pozice v okolí.',
      en: 'Local SEO on Google Maps and Mapy.com (Seznam): profile, reviews and higher local rankings.',
      ru: 'Локальное SEO в Google Maps и Mapy.com (Seznam): профиль, отзывы и высокие позиции рядом с клиентом.',
    },
    intro: {
      cs: 'Když někdo hledá „u mě v okolí“, rozhodují mapy. V Česku je potřeba myslet na Google i na Seznam: optimalizuji váš profil na obou platformách, sjednotím firemní údaje a nastavím systém získávání recenzí.',
      en: 'When someone searches “near me”, maps decide. In Czechia you need both Google and Seznam: I optimise your profile on both platforms, unify your business details and set up a review system.',
      ru: 'Когда ищут «рядом со мной», решают карты. В Чехии важны и Google, и Seznam: я оптимизирую профиль на обеих платформах, унифицирую данные компании и выстраиваю систему получения отзывов.',
    },
    forWhom: {
      cs: ['Kamenné provozovny, kliniky, salony', 'Řemeslníci a služby s dojezdem', 'Firmy s více pobočkami'],
      en: ['Brick-and-mortar shops, clinics, salons', 'Trades and mobile services', 'Businesses with several locations'],
      ru: ['Офлайн-точки, клиники, салоны', 'Мастера и выездные услуги', 'Компании с несколькими филиалами'],
    },
    includes: {
      cs: ['Založení či optimalizace Google Business Profile', 'Profil na Firmy.cz / Mapy.com', 'Sjednocení údajů (NAP) v katalozích', 'Strategie získávání recenzí', 'Lokální vstupní stránky na webu'],
      en: ['Google Business Profile setup or optimisation', 'Firmy.cz / Mapy.com profile', 'Consistent business details (NAP) across directories', 'Review acquisition strategy', 'Local landing pages on your site'],
      ru: ['Создание или оптимизация Google Business Profile', 'Профиль на Firmy.cz / Mapy.com', 'Единые данные (NAP) в каталогах', 'Стратегия получения отзывов', 'Локальные посадочные страницы'],
    },
    process: {
      cs: ['Audit současných profilů a konkurence', 'Optimalizace profilů a katalogů', 'Nastavení recenzí a lokálního obsahu', 'Měsíční sledování pozic v mapách'],
      en: ['Audit of current profiles and competitors', 'Profile and directory optimisation', 'Review and local content setup', 'Monthly map ranking tracking'],
      ru: ['Аудит текущих профилей и конкурентов', 'Оптимизация профилей и каталогов', 'Настройка отзывов и локального контента', 'Ежемесячный контроль позиций на картах'],
    },
    duration: { cs: 'Od 1 měsíce', en: 'From 1 month', ru: 'От 1 месяца' },
    related: ['start', 'fullSeo'],
  },
];

export const serviceByKey = (key: ServiceKey) => SERVICES.find((s) => s.key === key)!;
