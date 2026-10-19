import type { Lang, PageKey } from '../i18n/routes';

// Single source of FAQ. `pages` controls where a question is shown besides /caste-dotazy/;
// `home` sets its order in the home-page block (4–5 items).

export interface FaqItem {
  id: string;
  q: Record<Lang, string>;
  a: Record<Lang, string>;
  pages: PageKey[];
  home?: number;
}

export const FAQ: FaqItem[] = [
  {
    id: 'audit',
    home: 1,
    pages: ['audit'],
    q: {
      cs: 'Co obsahuje bezplatný SEO audit?',
      en: 'What does the free SEO audit include?',
      ru: 'Что входит в бесплатный SEO-аудит?',
    },
    a: {
      cs: 'Zkontroluji technický stav webu (indexace, rychlost, mobilní verze), hlavní klíčová slova a pozice, konkurenci a to, zda vás zmiňují AI asistenti. Dostanete stručný report s 5–10 nejdůležitějšími kroky.',
      en: 'I check the technical health of the site (indexing, speed, mobile), main keywords and rankings, competitors and whether AI assistants mention you. You get a short report with the 5–10 most important next steps.',
      ru: 'Я проверяю техническое состояние сайта (индексация, скорость, мобильная версия), основные запросы и позиции, конкурентов и упоминания в ответах нейросетей. Вы получаете краткий отчёт с 5–10 главными шагами.',
    },
  },
  {
    id: 'time',
    home: 2,
    pages: ['start', 'fullSeo'],
    q: {
      cs: 'Za jak dlouho uvidím výsledky?',
      en: 'How soon will I see results?',
      ru: 'Когда будут результаты?',
    },
    a: {
      cs: 'První změny po technických opravách bývají vidět za 4–8 týdnů. Výrazný růst návštěvnosti a poptávek obvykle přichází mezi 3. a 6. měsícem, v konkurenčních oborech později.',
      en: 'The first changes after technical fixes usually show within 4–8 weeks. Significant growth in traffic and enquiries typically comes between months 3 and 6, later in competitive niches.',
      ru: 'Первые изменения после технических исправлений обычно видны через 4–8 недель. Заметный рост трафика и заявок — как правило, на 3–6-м месяце, в конкурентных нишах позже.',
    },
  },
  {
    id: 'geo',
    home: 3,
    pages: ['geo', 'fullSeo'],
    q: {
      cs: 'Jaký je rozdíl mezi SEO a GEO?',
      en: 'What is the difference between SEO and GEO?',
      ru: 'Чем SEO отличается от GEO?',
    },
    a: {
      cs: 'SEO zlepšuje pozice ve výsledcích vyhledávání Google a Seznamu. GEO (Generative Engine Optimization) zvyšuje šanci, že vás doporučí a ocitují AI nástroje jako ChatGPT, Gemini nebo Google AI Overviews. Dělám obojí najednou, protože se navzájem posilují.',
      en: 'SEO improves rankings in Google and Seznam results. GEO (Generative Engine Optimization) increases the chance that AI tools like ChatGPT, Gemini or Google AI Overviews recommend and cite you. I do both at once because they reinforce each other.',
      ru: 'SEO улучшает позиции в выдаче Google и Seznam. GEO (Generative Engine Optimization) повышает шанс, что вас порекомендуют и процитируют ChatGPT, Gemini или Google AI Overviews. Я делаю и то и другое сразу — они усиливают друг друга.',
    },
  },
  {
    id: 'process',
    home: 4,
    pages: ['start', 'consulting'],
    q: {
      cs: 'Jak probíhá spolupráce?',
      en: 'How does working together look?',
      ru: 'Как строится сотрудничество?',
    },
    a: {
      cs: 'Začínáme bezplatným auditem a krátkým callem. Pak vyberete formu spolupráce, já připravím plán a pravidelně reportuji výsledky. Na všechno máte jednoho člověka – mě.',
      en: 'We start with a free audit and a short call. Then you choose the format, I prepare a plan and report results regularly. You always deal with one person – me.',
      ru: 'Начинаем с бесплатного аудита и короткого созвона. Затем вы выбираете формат, я готовлю план и регулярно отчитываюсь о результатах. Вы всегда общаетесь с одним человеком — со мной.',
    },
  },
  {
    id: 'location',
    home: 5,
    pages: ['maps', 'consulting', 'contact'],
    q: {
      cs: 'Pracujete i s firmami mimo Prahu?',
      en: 'Do you work with businesses outside Prague?',
      ru: 'Работаете ли вы с компаниями не из Праги?',
    },
    a: {
      cs: 'Ano. Sídlím v Praze, ale většina spolupráce probíhá online, takže pracuji s firmami z celé ČR i ze zahraničí. Osobní schůzku rád domluvím v Praze.',
      en: 'Yes. I am based in Prague, but most work happens online, so I work with businesses across Czechia and abroad. I am happy to meet in person in Prague.',
      ru: 'Да. Я живу в Праге, но большая часть работы идёт онлайн, поэтому я работаю с компаниями по всей Чехии и за рубежом. Лично могу встретиться в Праге.',
    },
  },
  {
    id: 'guarantee',
    pages: ['fullSeo', 'start'],
    q: {
      cs: 'Garantujete první místo v Google?',
      en: 'Do you guarantee the #1 spot on Google?',
      ru: 'Гарантируете ли вы первое место в Google?',
    },
    a: {
      cs: 'Ne – a nikdo seriózní to nedělá, protože algoritmy vyhledávačů nikdo neovládá. Garantuji transparentní práci, jasný plán a měřitelné cíle, které si na začátku společně nastavíme.',
      en: 'No – and nobody serious does, because no one controls search algorithms. I guarantee transparent work, a clear plan and measurable goals that we agree on at the start.',
      ru: 'Нет — и никто добросовестный этого не обещает, потому что алгоритмы поисковиков никому не подконтрольны. Я гарантирую прозрачную работу, понятный план и измеримые цели, которые мы согласуем в начале.',
    },
  },
  {
    id: 'seznam',
    pages: ['maps', 'fullSeo'],
    q: {
      cs: 'Řešíte i Seznam, nebo jen Google?',
      en: 'Do you work on Seznam too, or only Google?',
      ru: 'Работаете ли вы с Seznam или только с Google?',
    },
    a: {
      cs: 'Obojí. Seznam má v Česku stále významný podíl vyhledávání, zvlášť u lokálních dotazů a v Mapy.com. Optimalizaci i měření nastavuji pro oba vyhledávače.',
      en: 'Both. Seznam still holds a significant share of searches in Czechia, especially for local queries and on Mapy.com. I set up optimisation and tracking for both search engines.',
      ru: 'И с тем, и с другим. У Seznam по-прежнему заметная доля поиска в Чехии, особенно в локальных запросах и на Mapy.com. Оптимизацию и аналитику я настраиваю под оба поисковика.',
    },
  },
  {
    id: 'consulting-format',
    pages: ['consulting'],
    q: {
      cs: 'Jak se na konzultaci připravit?',
      en: 'How should I prepare for a consultation?',
      ru: 'Как подготовиться к консультации?',
    },
    a: {
      cs: 'Stačí poslat adresu webu a seznam otázek. Pokud mi dáte přístup do Google Search Console a GA4, rozbor bude přesnější.',
      en: 'Just send your website address and a list of questions. If you give me access to Google Search Console and GA4, the review will be more precise.',
      ru: 'Достаточно прислать адрес сайта и список вопросов. Если дадите доступ к Google Search Console и GA4, разбор будет точнее.',
    },
  },
  {
    id: 'languages',
    pages: ['about', 'consulting', 'contact'],
    q: {
      cs: 'V jakých jazycích pracujete?',
      en: 'Which languages do you work in?',
      ru: 'На каких языках вы работаете?',
    },
    a: {
      cs: 'Česky, anglicky, rusky a ukrajinsky. Umím připravit i SEO pro vícejazyčné weby, včetně správného nastavení hreflang.',
      en: 'Czech, English, Russian and Ukrainian. I also handle SEO for multilingual websites, including correct hreflang setup.',
      ru: 'На чешском, английском, русском и украинском. Делаю SEO и для многоязычных сайтов, включая правильную настройку hreflang.',
    },
  },
];

export const homeFaq = () => FAQ.filter((f) => f.home).sort((a, b) => a.home! - b.home!);
export const faqFor = (key: PageKey) => FAQ.filter((f) => f.pages.includes(key));
