import type { Lang, PageKey } from './routes';

// Unique title / meta description / H1 for every page and language.
// `name` is the short label used in navigation and breadcrumbs.
// scripts/check-seo.mjs fails the build if any title, description or H1 repeats.

export interface PageMeta {
  name: string;
  title: string;
  description: string;
  h1: string;
}

export const META: Record<PageKey, Record<Lang, PageMeta>> = {
  home: {
    cs: {
      name: 'Domů',
      title: 'SEO specialista Praha – Arsenii Eranosian | SEO a GEO/AEO',
      description: 'SEO specialista v Praze. Dostanu váš web na první stránky Google a Seznamu a do odpovědí AI. Začněte bezplatným SEO auditem.',
      h1: 'SEO, které přivádí poptávky. Ve vyhledávačích i v AI.',
    },
    en: {
      name: 'Home',
      title: 'SEO Specialist in Prague – Arsenii Eranosian | SEO & GEO/AEO',
      description: 'Prague-based SEO specialist. I get your website onto page one of Google and Seznam and into AI answers. Start with a free SEO audit.',
      h1: 'SEO that brings enquiries. In search engines and in AI.',
    },
    ru: {
      name: 'Главная',
      title: 'SEO-специалист в Праге – Arsenii Eranosian | SEO и GEO/AEO',
      description: 'SEO-специалист в Праге. Вывожу сайты в топ Google и Seznam и в ответы нейросетей. Начните с бесплатного SEO-аудита.',
      h1: 'SEO, которое приводит заявки. В поиске и в нейросетях.',
    },
  },
  audit: {
    cs: {
      name: 'Audit zdarma',
      title: 'Bezplatný SEO audit webu | Arsenii Eranosian',
      description: 'Získejte bezplatný SEO audit: technický stav webu, klíčová slova, konkurence a viditelnost v AI. Konkrétní doporučení do 24 hodin.',
      h1: 'Bezplatný SEO audit vašeho webu',
    },
    en: {
      name: 'Free audit',
      title: 'Free SEO Audit of Your Website | Arsenii Eranosian',
      description: 'Get a free SEO audit: technical health, keywords, competitors and AI visibility. Specific recommendations within 24 hours.',
      h1: 'A free SEO audit of your website',
    },
    ru: {
      name: 'Бесплатный аудит',
      title: 'Бесплатный технический SEO-аудит сайта | Eranosian',
      description: 'Бесплатная проверка технических ошибок сайта: индексация, дубли страниц и другие проблемы. Отчёт с рекомендациями за 24 часа. Без обязательств.',
      h1: 'Бесплатный SEO-аудит вашего сайта',
    },
  },
  consulting: {
    cs: {
      name: 'SEO konzultace',
      title: 'SEO konzultace — od 2 000 Kč za hodinu | Eranosian',
      description: 'Potřebujete nezávislý pohled na SEO vašeho webu? Konzultace online nebo v Praze, odpovědi na otázky i audit s plánem na 12 měsíců. Domluvte si termín.',
      h1: 'SEO konzultace',
    },
    en: {
      name: 'Consulting',
      title: 'SEO Consulting – Website Review & Action Plan | Prague',
      description: 'SEO consulting online or in person in Prague. A review of your website, answers to your questions and a written, prioritised action plan.',
      h1: 'SEO consulting',
    },
    ru: {
      name: 'Консультации',
      title: 'SEO консультация и аудит сайта: цена от 2 000 Kč | Eranosian',
      description: 'Нужен независимый взгляд на SEO вашего сайта? Консультация онлайн или в Праге: ответы на вопросы, аудит и план на 12 месяцев. Запишитесь на консультацию.',
      h1: 'SEO консультация',
    },
  },
  start: {
    cs: {
      name: 'SEO start na 3 měsíce',
      title: 'SEO start na 3 měsíce za 50 000 Kč: audit, mapy | Eranosian',
      description: 'Technický audit, opravy, hlavní stránky a mapy Google/Mapy.com za 3 měsíce. První výsledky obvykle za 2-3 měsíce, reporty týdně. Pošlete nezávaznou poptávku.',
      h1: 'SEO start na 3 měsíce',
    },
    en: {
      name: '3-month start',
      title: '3-Month SEO Start – Audit, Fixes, First Results',
      description: 'A three-month SEO kick-off: technical audit and fixes, keyword research, optimisation of key pages and analytics setup.',
      h1: 'A 3-month SEO start',
    },
    ru: {
      name: 'Старт на 3 месяца',
      title: 'SEO продвижение сайта на 3 месяца — от 50 000 Kč | Eranosian',
      description: 'Технический аудит, внедрение правок, контент и карты Google/Seznam за 3 месяца. Первые результаты через 2-3 месяца, отчёты еженедельно. Оставьте заявку.',
      h1: 'SEO продвижение сайта на 3 месяца',
    },
  },
  fullSeo: {
    cs: {
      name: 'Full SEO na rok',
      title: 'Full SEO na rok — od 15 000 Kč měsíčně | Eranosian',
      description: 'Kompletní SEO na 12 měsíců: obsah, odkazy, technický dohled a mapy Google/Mapy.com. První výsledky obvykle za 2-3 měsíce. Pošlete nezávaznou poptávku.',
      h1: 'Full SEO na rok',
    },
    en: {
      name: 'Full SEO (1 year)',
      title: 'Full-Year SEO – Strategy, Content, Links & Reporting',
      description: 'Full SEO for 12 months: strategy, content, link building, technical monitoring, GEO/AEO optimisation and monthly reports for long-term growth.',
      h1: 'Full SEO for a year',
    },
    ru: {
      name: 'Full SEO на год',
      title: 'SEO продвижение сайта на год — от 15 000 Kč/мес | Eranosian',
      description: 'Полное SEO-сопровождение на 12 месяцев: аудит, контент, ссылки, карты Google и Seznam. Первые результаты через 2-3 месяца. Оставьте заявку на SEO.',
      h1: 'SEO продвижение сайта на год',
    },
  },
  maps: {
    cs: {
      name: 'Mapy (Google + Mapy.com)',
      title: 'Lokální SEO: Google Maps a Mapy.com | Eranosian',
      description: 'Propagace v mapách Google a Seznam s platbou za výsledek: hovory, trasy, prokliky, recenze. Balíček Full od 1800 Kč měsíčně za profil. Nezávazná poptávka.',
      h1: 'Lokální SEO: propagace na Google Maps a Mapy.com',
    },
    en: {
      name: 'Maps (Google + Mapy.com)',
      title: 'Local SEO: Google Maps & Mapy.com (Seznam) | Prague',
      description: 'Local SEO for businesses in Czechia: Google Business Profile and Firmy.cz / Mapy.com optimisation, reviews and higher map rankings.',
      h1: 'Local SEO: Google Maps and Mapy.com',
    },
    ru: {
      name: 'Карты (Google + Mapy.com)',
      title: 'Продвижение в Google Maps и Mapy.com: звонки | Eranosian',
      description: 'Продвижение бизнеса в картах Google и Seznam с оплатой за результат: отзывы, звонки, маршруты. Любой город. Оставьте заявку на локальное SEO.',
      h1: 'Локальное SEO: Google Maps и Mapy.com',
    },
  },
  geo: {
    cs: {
      name: 'SEO + GEO/AEO',
      title: 'Co je GEO a AEO? Optimalizace pro Google i AI | Eranosian',
      description: 'GEO a AEO vysvětleně: jak funguje optimalizace pro ChatGPT, Gemini a AI Overviews a proč jde vždy ruku v ruce se SEO. Žádná záruka zmínky v AI.',
      h1: 'SEO + GEO/AEO: dvě v jednom',
    },
    en: {
      name: 'SEO + GEO/AEO',
      title: 'SEO + GEO/AEO 2-in-1 – Visibility in Google and ChatGPT',
      description: 'SEO and GEO/AEO (Generative and Answer Engine Optimization) in one: a website found by Google and Seznam as well as ChatGPT, Gemini, Perplexity and AI Overviews.',
      h1: 'SEO + GEO/AEO: two in one',
    },
    ru: {
      name: 'SEO + GEO/AEO',
      title: 'SEO + GEO/AEO 2 в 1 – видимость в Google и в ChatGPT',
      description: 'SEO и GEO/AEO (Generative and Answer Engine Optimization) вместе: сайт, который находят Google и Seznam, а также ChatGPT, Gemini, Perplexity и AI Overviews.',
      h1: 'SEO + GEO/AEO: два в одном',
    },
  },
  cases: {
    cs: {
      name: 'Případové studie',
      title: 'Případové studie SEO – výsledky klientů | Arsenii Eranosian',
      description: 'Případové studie: jak SEO a GEO/AEO zvýšily návštěvnost a počet poptávek mých klientů. Výchozí stav, postup a měřitelné výsledky.',
      h1: 'Případové studie',
    },
    en: {
      name: 'Case studies',
      title: 'SEO Case Studies – Client Results | Arsenii Eranosian',
      description: 'Case studies: how SEO and GEO/AEO grew traffic and enquiries for my clients. Starting point, approach and measurable results.',
      h1: 'Case studies',
    },
    ru: {
      name: 'Кейсы',
      title: 'SEO-кейсы – результаты клиентов | Arsenii Eranosian',
      description: 'Кейсы: как SEO и GEO/AEO увеличили трафик и число заявок у моих клиентов. Исходная ситуация, работа и измеримые результаты.',
      h1: 'Кейсы',
    },
  },
  caseKb: {
    cs: {
      name: 'SEO pro překladatelskou agenturu',
      title: 'Případová studie SEO překladatelské agentury | Eranosian',
      description: 'Jak jsem pomohl překladatelské agentuře získat prvního B2B klienta přes SEO: lokální stránky ve 3 městech, obsah a AI Overviews. Přečtěte si postup.',
      h1: 'SEO pro překladatelskou agenturu se třemi pobočkami',
    },
    en: {
      name: 'SEO for a translation agency',
      title: 'SEO Case Study: Translation Agency | Eranosian',
      description: 'How I helped a translation agency win its first B2B client through SEO: local pages in 3 cities, content and AI Overviews. Read the approach.',
      h1: 'SEO for a translation agency with three branches',
    },
    ru: {
      name: 'SEO для переводческого агентства',
      title: 'Кейс: SEO для переводческого агентства | Eranosian',
      description: 'Как я помог переводческому агентству получить первого B2B-клиента через SEO: локальные страницы в 3 городах, контент и AI Overviews. Читайте подход.',
      h1: 'SEO для переводческого агентства с тремя филиалами',
    },
  },
  reviews: {
    cs: {
      name: 'Recenze',
      title: 'Recenze klientů – zkušenosti se SEO spoluprací',
      description: 'Co o spolupráci říkají klienti: recenze a zkušenosti se SEO konzultacemi, tříměsíčním startem, celoročním SEO a lokálním SEO.',
      h1: 'Recenze klientů',
    },
    en: {
      name: 'Reviews',
      title: 'Client Reviews – Experience Working on SEO Together',
      description: 'What clients say: reviews of SEO consulting, the 3-month start, full-year SEO and local SEO work.',
      h1: 'Client reviews',
    },
    ru: {
      name: 'Отзывы',
      title: 'Отзывы клиентов – опыт SEO-сотрудничества',
      description: 'Что говорят клиенты: отзывы о SEO-консультациях, старте на 3 месяца, SEO на год и локальном SEO.',
      h1: 'Отзывы клиентов',
    },
  },
  blog: {
    cs: {
      name: 'Blog',
      title: 'SEO blog – návody a novinky ze světa SEO a GEO/AEO',
      description: 'Praktické články o SEO, GEO/AEO, lokálním SEO a vyhledávání v Google, Seznamu a AI. Návody, které můžete hned použít.',
      h1: 'Blog o SEO a GEO/AEO',
    },
    en: {
      name: 'Blog',
      title: 'SEO Blog – Guides and News on SEO and GEO/AEO',
      description: 'Practical articles on SEO, GEO/AEO, local SEO and search in Google, Seznam and AI assistants. Guides you can apply right away.',
      h1: 'Blog about SEO and GEO/AEO',
    },
    ru: {
      name: 'Блог',
      title: 'SEO-блог – статьи о SEO и GEO/AEO',
      description: 'Практические статьи об SEO, GEO/AEO, локальном SEO и поиске в Google, Seznam и нейросетях. Советы, которые можно применить сразу.',
      h1: 'Блог об SEO и GEO/AEO',
    },
  },
  faq: {
    cs: {
      name: 'Časté dotazy',
      title: 'Časté dotazy o SEO – ceny, termíny, spolupráce',
      description: 'Odpovědi na nejčastější otázky o SEO: jak dlouho trvá, co obsahuje audit, jak probíhá spolupráce a jaký je rozdíl mezi SEO a GEO/AEO.',
      h1: 'Časté dotazy',
    },
    en: {
      name: 'FAQ',
      title: 'SEO FAQ – Timelines, Process and Working Together',
      description: 'Answers to common SEO questions: how long it takes, what the audit includes, how we work together and how SEO differs from GEO/AEO.',
      h1: 'Frequently asked questions',
    },
    ru: {
      name: 'Вопросы и ответы',
      title: 'Вопросы и ответы об SEO – сроки, процесс, сотрудничество',
      description: 'Ответы на частые вопросы об SEO: сколько времени занимает, что входит в аудит, как строится работа и чем SEO отличается от GEO/AEO.',
      h1: 'Вопросы и ответы',
    },
  },
  about: {
    cs: {
      name: 'O mně',
      title: 'O mně – Arsenii Eranosian, SEO specialista v Praze',
      description: 'Arsenii Eranosian, SEO specialista z Prahy. Za 3 roky růst návštěvnosti až +777 % meziročně. SEO jako systém, který mění vyhledávání v tržby.',
      h1: 'Arsenii Eranosian, SEO specialista',
    },
    en: {
      name: 'About',
      title: 'About Arsenii Eranosian – SEO Specialist in Prague',
      description: 'Arsenii Eranosian, SEO specialist in Prague. Organic traffic up to +777% YoY in 3 years. SEO as a system that turns search into revenue.',
      h1: 'Arsenii Eranosian, SEO specialist',
    },
    ru: {
      name: 'Обо мне',
      title: 'Обо мне – Arsenii Eranosian, SEO-специалист в Праге',
      description: 'Arsenii Eranosian, SEO-специалист из Праги. За 3 года рост трафика до +777% за год. SEO как система, которая превращает поиск в выручку.',
      h1: 'Arsenii Eranosian, SEO-специалист',
    },
  },
  contact: {
    cs: {
      name: 'Kontakt',
      title: 'Kontakt – poptávka SEO spolupráce | Arsenii Eranosian',
      description: 'Napište mi poptávku SEO, konzultace nebo bezplatného auditu. Odpovím do jednoho pracovního dne. Praha a celá ČR.',
      h1: 'Kontakt',
    },
    en: {
      name: 'Contact',
      title: 'Contact – Request SEO Services | Arsenii Eranosian',
      description: 'Send an enquiry about SEO, consulting or a free audit. I reply within one business day. Prague, Czechia and remote.',
      h1: 'Contact',
    },
    ru: {
      name: 'Контакты',
      title: 'Контакты – заявка на SEO | Arsenii Eranosian',
      description: 'Оставьте заявку на SEO, консультацию или бесплатный аудит. Отвечу в течение одного рабочего дня. Прага и удалённо.',
      h1: 'Контакты',
    },
  },
  privacy: {
    cs: {
      name: 'Ochrana osobních údajů',
      title: 'Zásady ochrany osobních údajů | Arsenii Eranosian',
      description: 'Jak zpracovávám osobní údaje z kontaktního formuláře a analytických cookies, na jakém právním základě a jaká máte práva.',
      h1: 'Zásady ochrany osobních údajů',
    },
    en: {
      name: 'Privacy policy',
      title: 'Privacy Policy | Arsenii Eranosian',
      description: 'How I process personal data from the contact form and analytics cookies, on what legal basis, and what rights you have.',
      h1: 'Privacy policy',
    },
    ru: {
      name: 'Политика конфиденциальности',
      title: 'Политика конфиденциальности | Arsenii Eranosian',
      description: 'Как я обрабатываю персональные данные из формы заявки и аналитических cookie, на каком основании и какие у вас права.',
      h1: 'Политика конфиденциальности',
    },
  },
  thanks: {
    cs: {
      name: 'Děkuji',
      title: 'Děkuji za poptávku | Arsenii Eranosian',
      description: 'Vaše poptávka byla odeslána. Ozvu se vám do jednoho pracovního dne.',
      h1: 'Děkuji, poptávka je odeslaná',
    },
    en: {
      name: 'Thank you',
      title: 'Thank You for Your Enquiry | Arsenii Eranosian',
      description: 'Your enquiry has been sent. I will get back to you within one business day.',
      h1: 'Thank you, your enquiry has been sent',
    },
    ru: {
      name: 'Спасибо',
      title: 'Спасибо за заявку | Arsenii Eranosian',
      description: 'Ваша заявка отправлена. Я свяжусь с вами в течение одного рабочего дня.',
      h1: 'Спасибо, заявка отправлена',
    },
  },
};
