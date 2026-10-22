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
      title: 'SEO specialista Praha: SEO a GEO/AEO | Arsenii Eranosian',
      description: 'Pracuji osobně: bezplatný SEO audit, konzultace, SEO start na 3 měsíce a Full SEO na rok včetně GEO/AEO. Zjistěte, kolik zákazníků vám uniká.',
      h1: 'SEO, které přivádí poptávky. Ve vyhledávačích i v AI.',
    },
    en: {
      name: 'Home',
      title: 'SEO & GEO/AEO Specialist in Prague | Arsenii Eranosian',
      description: 'English-speaking SEO and GEO/AEO specialist in Prague for Google, Seznam and AI search. Start with a free technical audit: no call, no obligation.',
      h1: 'English-speaking SEO specialist in Prague: enquiries from Google, Seznam and AI',
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
      name: 'Bezplatný audit',
      title: 'Bezplatný SEO audit webu: technické chyby | Eranosian',
      description: 'Bezplatná kontrola technických chyb webu: indexace, duplicity a další problémy. Prezentace do 24 hodin, bez callu a bez závazků. Požádejte o audit.',
      h1: 'Bezplatný SEO audit technických chyb vašeho webu',
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
  // Russian-only page (see ONLY_LANGS in routes.ts); the cs / en entries are placeholders and are never built.
  caseTypo: {
    cs: {
      name: 'SEO pro tiskárnu',
      title: 'SEO pro tiskárnu: návštěvnost 8,75× za rok | Eranosian',
      description: 'Případová studie: jak jsem zvýšil organickou návštěvnost tiskárny z 1\u00a0200 na 10\u00a0500 měsíčně za rok. Pořadí priorit a 20+ vstupních stránek. Audit zdarma.',
      h1: 'SEO pro tiskárnu: organická návštěvnost vzrostla 8,75× za 12 měsíců',
    },
    en: { name: 'SEO for a print shop', title: 'SEO for a print shop', description: 'SEO for a print shop', h1: 'SEO for a print shop' },
    ru: {
      name: 'SEO для типографии',
      title: 'SEO для типографии: рост трафика в 8,75 раза | Eranosian',
      description: 'Как я вырастил органический трафик типографии с 1 200 до 10 500 визитов в месяц за год: порядок приоритетов и 20+ посадочных. Закажите бесплатный аудит.',
      h1: 'SEO для типографии: рост органического трафика в 8,75 раза за 12 месяцев',
    },
  },
  caseEdu: {
    cs: {
      name: 'SEO pro novou vzdělávací platformu',
      title: 'SEO pro vzdělávací platformu: +55\u00a0% návštěv | Eranosian',
      description: 'Jak jsme s kolegou zvýšili organickou návštěvnost nové vzdělávací platformy o 55\u00a0% za 7 měsíců se sázkou na málo hledané dotazy. Audit zdarma.',
      h1: 'SEO pro novou vzdělávací platformu: +55\u00a0% organické návštěvnosti za 7 měsíců',
    },
    en: { name: 'SEO for an education platform', title: 'SEO for an education platform', description: 'SEO for an education platform', h1: 'SEO for an education platform' },
    ru: {
      name: 'SEO для образовательной платформы',
      title: 'SEO для образовательной платформы: +55% трафика | Eranosian',
      description: 'Как мы с коллегой подняли органический трафик новой образовательной платформы на 55% за 7 месяцев: ставка на низкочастотные запросы. Закажите аудит.',
      h1: 'SEO для новой образовательной платформы: +55% органического трафика за 7 месяцев',
    },
  },
  caseSeason: {
    cs: {
      name: 'SEO v nízké sezóně',
      title: 'SEO v nízké sezóně: poptávky 24× za léto | Eranosian',
      description: 'Jak jsem za léto zvýšil poptávky z webu překladatelské agentury 24×, zatímco zájem o široký dotaz klesal. Případová studie, část 2. Audit zdarma.',
      h1: 'SEO v nízké sezóně pro překladatelskou agenturu: poptávky z webu vzrostly 24×',
    },
    en: { name: 'SEO in the low season', title: 'SEO in the low season', description: 'SEO in the low season', h1: 'SEO in the low season' },
    ru: {
      name: 'SEO в низкий сезон',
      title: 'SEO в низкий сезон: заявки выросли в 24 раза | Eranosian',
      description: 'Как я за лето вырастил заявки с сайта переводческого агентства в 24 раза в низкий сезон: воронка, FAQ, города. Закажите бесплатный аудит.',
      h1: 'SEO в низкий сезон для переводческого агентства: заявки с сайта выросли в 24 раза',
    },
  },
  caseHalf: {
    cs: {
      name: 'SEO pro překladatelskou agenturu: půl roku',
      title: 'Případová studie SEO překladatelské agentury | Eranosian',
      description: 'Jak jsem za půl roku postavil web překladatelské agentury, který měl nulu poptávek: lokální stránky, B2B poptávky a nové vstupní body. Audit zdarma.',
      h1: 'Případová studie SEO pro překladatelskou agenturu: půl roku od nuly k růstu poptávek',
    },
    en: { name: 'SEO for a translation agency: half a year', title: 'SEO for a translation agency: half a year', description: 'SEO for a translation agency: half a year', h1: 'SEO for a translation agency: half a year' },
    ru: { name: 'SEO для переводческого агентства: полгода', title: 'SEO для переводческого агентства: полгода', description: 'SEO для переводческого агентства: полгода', h1: 'SEO для переводческого агентства: полгода' },
  },
  postB2b: {
    cs: {
      name: 'Jak získat B2B klienty pro překladatelskou agenturu',
      title: 'Jak získat B2B klienty: překladatelská agentura | Eranosian',
      description: 'Jak získat B2B klienty pro překladatelskou agenturu? Co má ukázat stránka pro firmy a jak firmy vybírají. Požádejte o bezplatný audit technických chyb.',
      h1: 'Jak získat B2B klienty pro překladatelskou agenturu?',
    },
    en: { name: 'How to get B2B clients for a translation agency', title: 'How to get B2B clients for a translation agency', description: 'How to get B2B clients for a translation agency', h1: 'How to get B2B clients for a translation agency' },
    ru: { name: 'Как получить B2B-клиентов переводческому агентству', title: 'Как получить B2B-клиентов агентству', description: 'Как получить B2B-клиентов агентству', h1: 'Как получить B2B-клиентов агентству' },
  },
  postClients: {
    cs: {
      name: 'Jak získat klienty pro překladatelskou agenturu',
      title: 'Jak získat klienty pro překladatelskou agenturu | Eranosian',
      description: 'Jak získat klienty pro překladatelskou agenturu? Porovnávám SEO, reklamu, mapy, partnerství a B2B. Požádejte o bezplatný audit technických chyb.',
      h1: 'Jak získat klienty pro překladatelskou agenturu: přehled kanálů',
    },
    en: { name: 'How to get clients for a translation agency', title: 'How to get clients for a translation agency', description: 'How to get clients for a translation agency', h1: 'How to get clients for a translation agency' },
    ru: { name: 'Как получить клиентов переводческому агентству', title: 'Как получить клиентов агентству', description: 'Как получить клиентов агентству', h1: 'Как получить клиентов агентству' },
  },
  postNoLeads: {
    cs: {
      name: 'Proč překladatelská agentura nemá poptávky z webu?',
      title: 'Web překladatelské agentury nepřináší poptávky | Eranosian',
      description: 'Web překladatelské agentury nepřináší poptávky? Ukazuji, co zkontrolovat první: indexaci, jazykové verze, stránky pro firmy. Požádejte o bezplatný audit.',
      h1: 'Proč překladatelská agentura nemá poptávky z webu?',
    },
    en: { name: 'Why a translation agency gets no leads from its website', title: 'Why a translation agency gets no leads', description: 'Why a translation agency gets no leads', h1: 'Why a translation agency gets no leads' },
    ru: { name: 'Почему у переводческого агентства нет заявок с сайта', title: 'Почему у агентства нет заявок', description: 'Почему у агентства нет заявок', h1: 'Почему у агентства нет заявок' },
  },
  postChoose: {
    cs: {
      name: 'Audit zdarma, konzultace, nebo Start',
      title: 'SEO audit, konzultace nebo start: jak začít | Eranosian',
      description: 'Nevíte, jak začít s SEO? Vyberte podle situace: bezplatný audit technických chyb, konzultace, nebo SEO start na 3 měsíce. Poradím, kde začít.',
      h1: 'Audit zdarma, konzultace, nebo Start: co si vybrat jako první krok v SEO',
    },
    en: { name: 'Free audit, consulting or Start', title: 'Free audit, consulting or Start', description: 'Free audit, consulting or Start', h1: 'Free audit, consulting or Start' },
    ru: { name: 'Аудит, консультация или Старт', title: 'Аудит, консультация или Старт', description: 'Аудит, консультация или Старт', h1: 'Аудит, консультация или Старт' },
  },
  postNewSite: {
    cs: {
      name: 'Nový web a Google ho nevidí',
      title: 'Nový web nevidí Google: kolik čekat a co udělat | Eranosian',
      description: 'Google nový web nevidí? Ověřte web v Search Console, odešlete mapu webu a zkontrolujte noindex. Při dlouhém čekání pomůže bezplatný audit technických chyb.',
      h1: 'Nový web a Google ho nevidí: jak dlouho trvá indexace a co udělat',
    },
    en: { name: 'New site not in Google', title: 'New site not in Google', description: 'New site not in Google', h1: 'New site not in Google' },
    ru: { name: 'Новый сайт не виден в Google', title: 'Новый сайт не виден в Google', description: 'Новый сайт не виден в Google', h1: 'Новый сайт не виден в Google' },
  },
  postRedirects: {
    cs: {
      name: 'Přesměrování 301 a chyby 404',
      title: 'Přesměrování 301: jak ho nastavit a ověřit | Eranosian',
      description: 'Po změně adres webu pomůže správné přesměrování 301. Postup, nejčastější chyby a kontrolní seznam. Bezplatný audit technických chyb.',
      h1: 'Přesměrování 301 a chyby 404: co dělat po změně adres webu',
    },
    en: { name: '301 redirects and 404 errors', title: '301 redirects and 404 errors', description: '301 redirects and 404 errors', h1: '301 redirects and 404 errors' },
    ru: { name: 'Редирект 301 и ошибки 404', title: 'Редирект 301 и ошибки 404', description: 'Редирект 301 и ошибки 404', h1: 'Редирект 301 и ошибки 404' },
  },
  postAds: {
    cs: {
      name: 'SEO a reklama',
      title: 'SEO a reklama: proč reklama funguje lépe s SEO | Eranosian',
      description: 'SEO nebo reklama? Reklama dodá návštěvníky rychle, ale výsledek závisí na webu. Jak SEO reklamě pomáhá a v jakém pořadí je kombinovat. Poradím, kde začít.',
      h1: 'SEO a reklama: proč reklama funguje lépe na optimalizovaném webu',
    },
    en: { name: 'SEO and advertising', title: 'SEO and advertising', description: 'SEO and advertising', h1: 'SEO and advertising' },
    ru: { name: 'SEO и реклама', title: 'SEO и реклама', description: 'SEO и реклама', h1: 'SEO и реклама' },
  },
  postRedesign: {
    cs: {
      name: 'Po redesignu klesla návštěvnost',
      title: 'Po redesignu klesla návštěvnost: kde je chyba | Eranosian',
      description: 'Po redesignu klesla návštěvnost? Zkontrolujte adresy bez přesměrování, noindex i měření. Bezplatný audit technických chyb, prezentace do 24 hodin.',
      h1: 'Po redesignu webu klesla návštěvnost: co se stalo a kde hledat chybu',
    },
    en: { name: 'Traffic drop after a redesign', title: 'Traffic drop after a redesign', description: 'Traffic drop after a redesign', h1: 'Traffic drop after a redesign' },
    ru: { name: 'Падение трафика после редизайна', title: 'Падение трафика после редизайна', description: 'Падение трафика после редизайна', h1: 'Падение трафика после редизайна' },
  },
  postDuplicates: {
    cs: {
      name: 'Duplicitní obsah',
      title: 'Duplicitní obsah: co to je a jak ho vyřešit | Eranosian',
      description: 'Co je duplicitní obsah, odkud se bere a proč webu škodí. Jak ho poznat v Search Console a vyřešit přes 301 nebo canonical. Bezplatný audit technických chyb.',
      h1: 'Duplicitní obsah: co to je, jak ho poznat a jak ho vyřešit',
    },
    en: { name: 'Duplicate content', title: 'Duplicate content', description: 'Duplicate content', h1: 'Duplicate content' },
    ru: { name: 'Дубли контента', title: 'Дубли контента', description: 'Дубли контента', h1: 'Дубли контента' },
  },
  postSeoAudit: {
    cs: {
      name: 'Co je SEO audit',
      title: 'Co je SEO audit a co obsahuje: typy a rozsah | Eranosian',
      description: 'Co je SEO audit, z čeho se skládá a jak poznat dobrý. Co zjistí bezplatný audit technických chyb a co už ne. Poradím, kdy stačí a kdy je potřeba víc.',
      h1: 'Co je SEO audit a co by měl obsahovat: průvodce pro majitele webu',
    },
    en: { name: 'What is an SEO audit', title: 'What is an SEO audit', description: 'What is an SEO audit', h1: 'What is an SEO audit' },
    ru: { name: 'Что такое SEO-аудит', title: 'Что такое SEO-аудит', description: 'Что такое SEO-аудит', h1: 'Что такое SEO-аудит' },
  },
  postNotShown: {
    cs: {
      name: 'Proč se web nezobrazuje v Googlu',
      title: 'Proč se web nezobrazuje v Googlu: 7 důvodů | Eranosian',
      description: 'Proč se váš web nezobrazuje v Googlu: noindex, robots.txt, nový web i duplicity. Co zkontrolovat dnes a jak pomůže bezplatný audit technických chyb.',
      h1: 'Proč se můj web nezobrazuje v Googlu: 7 nejčastějších důvodů',
    },
    en: { name: 'Why is my site not in Google', title: 'Why is my site not in Google', description: 'Why is my site not in Google', h1: 'Why is my site not in Google' },
    ru: { name: 'Почему сайта нет в Google', title: 'Почему сайта нет в Google', description: 'Почему сайта нет в Google', h1: 'Почему сайта нет в Google' },
  },
  postIndexing: {
    cs: {
      name: 'Jak zjistit, jestli je web indexovaný',
      title: 'Jak zjistit, jestli je web indexovaný v Googlu | Eranosian',
      description: 'Jak za 5 minut zjistit, zda Google vidí váš web: operátor site: i Google Search Console. Co dělat, když stránky chybí. Bezplatný audit technických chyb.',
      h1: 'Jak zjistit, jestli je web indexovaný v Googlu: 5 jednoduchých způsobů',
    },
    en: { name: 'How to check if a site is indexed', title: 'How to check if a site is indexed', description: 'How to check if a site is indexed', h1: 'How to check if a site is indexed' },
    ru: { name: 'Как проверить индексацию сайта', title: 'Как проверить индексацию сайта', description: 'Как проверить индексацию сайта', h1: 'Как проверить индексацию сайта' },
  },
  nicheBrno: {
    cs: {
      name: 'SEO pro překladatelské agentury v Brně',
      title: 'SEO pro překladatelské agentury Brno a GEO/AEO | Eranosian',
      description: 'Pomáhám překladatelským agenturám v Brně s B2B poptávkami přes Google a Mapy.com. Prezentace bezplatného auditu do 24 hodin, bez hovoru.',
      h1: 'SEO pro překladatelské agentury v Brně',
    },
    en: { name: 'SEO for translation agencies in Brno', title: 'SEO for translation agencies in Brno', description: 'SEO for translation agencies in Brno', h1: 'SEO for translation agencies in Brno' },
    ru: { name: 'SEO для переводческих агентств в Брно', title: 'SEO для переводческих агентств в Брно', description: 'SEO для переводческих агентств в Брно', h1: 'SEO для переводческих агентств в Брно' },
  },
  nicheTranslation: {
    cs: {
      name: 'SEO pro překladatelské agentury v Praze',
      title: 'SEO a GEO/AEO pro překladatelské agentury Praha | Eranosian',
      description: 'Dělám SEO a GEO/AEO pro překladatelské agentury v Praze: jazykové páry, služby, B2B stránky. Začněte bezplatným auditem technických chyb.',
      h1: 'SEO pro překladatelské agentury v Praze',
    },
    en: { name: 'SEO for translation agencies in Prague', title: 'SEO for translation agencies in Prague', description: 'SEO for translation agencies in Prague', h1: 'SEO for translation agencies in Prague' },
    ru: { name: 'SEO для переводческих агентств в Праге', title: 'SEO для переводческих агентств в Праге', description: 'SEO для переводческих агентств в Праге', h1: 'SEO для переводческих агентств в Праге' },
  },
  caseKb: {
    cs: {
      name: 'SEO pro překladatelskou agenturu',
      title: 'SEO překladatelské agentury za 4 měsíce | Eranosian',
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
      title: 'Arsenii Eranosian: SEO a GEO/AEO specialista | O mně',
      description: 'Jsem Arsenii Eranosian, SEO a GEO/AEO specialista v Praze. Začínám od byznys modelu, ne od klíčových slov. Podívejte se na projekty. Napište mi.',
      h1: 'Arsenii Eranosian: SEO a GEO/AEO specialista v Praze',
    },
    en: {
      name: 'About',
      title: 'About Arsenii Eranosian – SEO Specialist in Prague',
      description: 'Arsenii Eranosian, SEO specialist in Prague. Organic traffic up to +775% YoY in 3 years. SEO as a system that turns search into revenue.',
      h1: 'Arsenii Eranosian, SEO specialist',
    },
    ru: {
      name: 'Обо мне',
      title: 'Обо мне – Arsenii Eranosian, SEO-специалист в Праге',
      description: 'Arsenii Eranosian, SEO-специалист из Праги. За 3 года рост трафика до +775% за год. SEO как система, которая превращает поиск в выручку.',
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
