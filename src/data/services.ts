import type { Lang, ServiceKey } from '../i18n/routes';
import { fmtKc, MIN_PRICE } from './consulting-shared';
import { START_PRICE } from './start-shared';
import { FULLSEO_MONTHLY } from './fullseo-shared';
import { MAPS_FULL_MONTHLY } from './maps-shared';

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
  // Show another service's reviews (maps work was delivered as part of Full SEO).
  reviewsFrom?: ServiceKey;
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
      cs: ['Majitelé firem, kteří chtějí druhý názor na SEO svého webu', 'Weby před redesignem nebo přechodem na nový web', 'Firmy, které chtějí vědět, co a kdy na webu změnit'],
      en: ['Business owners who want to understand SEO', 'Marketing teams and in-house specialists', 'Websites before a redesign or migration'],
      ru: ['Владельцы бизнеса, которым нужно второе мнение по SEO сайта', 'Сайты перед редизайном или переездом на новый сайт', 'Те, кто хочет понять, что и когда менять на сайте'],
    },
    includes: {
      cs: ['Analýza webu před konzultací', 'Konzultace online nebo osobně v Praze', 'U auditu: prezentace s body růstu a plánem na 12 měsíců do 2 pracovních dnů', 'U hodinové konzultace: krátké písemné shrnutí'],
      en: ['Website analysis before the call', 'Consultation online or in person in Prague', 'With the audit: a presentation with growth points and a 12-month plan within 2 business days', 'With the one-hour call: a short written summary'],
      ru: ['Анализ сайта до встречи', 'Консультация онлайн или лично в Праге', 'С аудитом: презентация с точками роста и планом на 12 месяцев в течение 2 рабочих дней', 'После часовой консультации: короткое письменное резюме'],
    },
    process: {
      cs: ['Pošlete mi web a otázky', 'Projdu web, u auditu do 2 pracovních dnů připravím prezentaci', 'Společně vše probereme na konzultaci', 'Po hodinové konzultaci dostanete krátké shrnutí'],
      en: ['Send me your site and questions', 'I review the site; with the audit I prepare a presentation within 2 business days', 'We go through everything on the call', 'After the one-hour call you get a short summary'],
      ru: ['Присылаете сайт и вопросы', 'Я изучаю сайт, при аудите в течение 2 рабочих дней готовлю презентацию', 'Вместе всё обсуждаем на созвоне', 'После часовой консультации — короткое резюме'],
    },
    duration: { cs: `Od ${fmtKc(MIN_PRICE)} · 1 hodina nebo bez časového omezení`, en: 'One-off or recurring', ru: `От ${fmtKc(MIN_PRICE)} · 1 час или без ограничения по времени` },
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
    duration: { cs: `${fmtKc(START_PRICE)} · 3 měsíce`, en: '3 months', ru: `${fmtKc(START_PRICE)} · 3 месяца` },
    related: ['fullSeo', 'maps'],
  },
  {
    key: 'fullSeo',
    icon: 'chart',
    short: {
      cs: 'Celoroční péče: strategie, obsah, odkazy, technický dohled a GEO/AEO. Stabilní růst poptávek.',
      en: 'Year-round care: strategy, content, links, technical monitoring and GEO/AEO. Steady growth in enquiries.',
      ru: 'Работа весь год: стратегия, контент, ссылки, технический контроль и GEO/AEO. Стабильный рост заявок.',
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
      cs: ['Roční strategie a čtvrtletní plány', 'Obsahový plán a tvorba textů', 'Linkbuilding', 'Průběžný technický dohled', 'SEO + GEO/AEO optimalizace', 'Měsíční reporting a call'],
      en: ['Annual strategy and quarterly plans', 'Content plan and copywriting', 'Link building', 'Ongoing technical monitoring', 'SEO + GEO/AEO optimisation', 'Monthly reporting and call'],
      ru: ['Годовая стратегия и квартальные планы', 'Контент-план и написание текстов', 'Линкбилдинг', 'Постоянный технический контроль', 'SEO + GEO/AEO-оптимизация', 'Ежемесячная отчётность и созвон'],
    },
    process: {
      cs: ['Audit a strategie na celý rok', 'Čtvrtletní plán priorit', 'Průběžná práce a měsíční reporty', 'Vyhodnocení a plán na další rok'],
      en: ['Audit and strategy for the year', 'Quarterly priority plan', 'Ongoing work and monthly reports', 'Annual review and next-year plan'],
      ru: ['Аудит и стратегия на год', 'Квартальный план приоритетов', 'Постоянная работа и ежемесячные отчёты', 'Итоги года и план на следующий'],
    },
    duration: { cs: `Od ${fmtKc(FULLSEO_MONTHLY)} měsíčně · 12 měsíců`, en: '12 months', ru: `От ${fmtKc(FULLSEO_MONTHLY)} в месяц · 12 месяцев` },
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
    duration: { cs: 'Od 4 měsíců', en: 'From 4 months', ru: `От 4 месяцев · Full-пакет ${fmtKc(MAPS_FULL_MONTHLY)} в месяц` },
    related: ['start', 'fullSeo'],
    reviewsFrom: 'fullSeo',
  },
];

export const serviceByKey = (key: ServiceKey) => SERVICES.find((s) => s.key === key)!;
