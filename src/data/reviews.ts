import type { Lang, ServiceKey } from '../i18n/routes';

// Single source of reviews. Home, service pages, case studies and /recenze/
// all pull from here — never copy review text into a page.
//
// Names of private reviewers are intentionally left out; `role`/`company`
// identify them instead. Schema.org Review markup is emitted only for entries
// that have both an `author` and a `rating` (none currently do, so no stars).

export interface Review {
  id: string;
  author?: string;
  role: Record<Lang, string>;
  company?: string;
  logo?: string; // company logo shown next to the review (public/images/logos)
  source?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  date?: string; // ISO, when known
  origin?: Lang; // language the review was originally written in (other languages are translations)
  text: Record<Lang, string>;
  short?: Record<Lang, string>; // excerpt for compact cards (home, service pages)
  services: ServiceKey[];
  caseKey?: 'caseKb';
  featured?: number; // lower = shown first on the home page
  sample: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: 'make-up-agency',
    origin: 'ru',
    company: 'Make Up Digital Agency',
    logo: '/images/logos/make-up-digital-agency.webp',
    role: { cs: 'partnerská digitální agentura', en: 'partner digital agency', ru: 'партнёрское digital-агентство' },
    text: {
      cs: 'Arsenii s námi pracoval na SEO propagaci webu překladatelské agentury v rámci spolupráce s Make Up Digital Agency.\n\nNa začátku web prakticky nerankoval a nepřinášel poptávky. Arsenii od nuly vybudoval strukturu webu, pravidelně prováděl audity a každý týden poskytoval podrobné reporty o odvedené práci.\n\nBěhem spolupráce vzrostla zobrazení ve vyhledávání 6×, kliknutí více než 300×. Web se začal objevovat v Google AI Overview a ChatGPT a počet poptávek dosáhl stabilního růstu: po prvním nárůstu 5× přibylo dalších +65–70 % každý měsíc. B2B poptávky se ztrojnásobily.\n\nDoporučujeme Arsenii jako systematického, zodpovědného a výsledkového SEO specialistu.',
      en: 'Arsenii worked with us on the SEO of a translation agency’s website as part of our cooperation with Make Up Digital Agency.\n\nAt the start the site hardly ranked and brought no enquiries. Arsenii built the site structure from scratch, ran regular audits and sent detailed weekly reports on the work done.\n\nDuring the engagement search impressions grew 6×, clicks more than 300×. The site started appearing in Google AI Overview and ChatGPT, and enquiries moved to steady growth: after the first 5× increase, a further +65–70% every month. B2B enquiries tripled.\n\nWe recommend Arsenii as a systematic, responsible and results-driven SEO specialist.',
      ru: 'Арсений работал с нами над SEO-продвижением сайта переводческого агентства в рамках сотрудничества с Make Up Digital Agency.\n\nНа старте сайт практически не ранжировался и не приносил заявок. Арсений с нуля выстроил структуру сайта, регулярно проводил аудиты и еженедельно предоставлял подробные отчёты по проделанной работе.\n\nЗа время сотрудничества показы в поиске выросли в 6 раз, клики — более чем в 300 раз. Сайт начал появляться в Google AI Overview и ChatGPT, а количество заявок вышло на стабильный рост: после первого увеличения в 5 раз — ещё +65–70% ежемесячно. B2B-заявки выросли втрое.\n\nРекомендуем Арсения как системного, ответственного и результативного SEO-специалиста.',
    },
    short: {
      cs: 'Na začátku web prakticky nerankoval a nepřinášel poptávky. Arsenii od nuly vybudoval strukturu webu, pravidelně prováděl audity a každý týden posílal podrobné reporty. […] Zobrazení ve vyhledávání vzrostla 6×, kliknutí více než 300×, B2B poptávky se ztrojnásobily. Doporučujeme jako systematického, zodpovědného a výsledkového SEO specialistu.',
      en: 'At the start the site hardly ranked and brought no enquiries. Arsenii built the site structure from scratch, ran regular audits and sent detailed weekly reports. […] Search impressions grew 6×, clicks more than 300×, B2B enquiries tripled. We recommend him as a systematic, responsible and results-driven SEO specialist.',
      ru: 'На старте сайт практически не ранжировался и не приносил заявок. Арсений с нуля выстроил структуру сайта, регулярно проводил аудиты и еженедельно присылал подробные отчёты. […] Показы в поиске выросли в 6 раз, клики — более чем в 300 раз, B2B-заявки выросли втрое. Рекомендуем как системного, ответственного и результативного SEO-специалиста.',
    },
    services: ['start', 'fullSeo'],
    caseKey: 'caseKb',
    featured: 1,
    sample: false,
  },
  {
    id: 'consulting-client',
    origin: 'ru',
    role: { cs: 'klientka SEO konzultace', en: 'SEO consultation client', ru: 'клиентка SEO-консультации' },
    text: {
      cs: 'Děkuji vám za konzultaci o SEO v digitálním marketingu. Pro mě to bylo velmi poučné. Získala jsem od vás spoustu cenných a užitečných informací z vaší zkušenosti a praxe. Měla jsem mnoho otázek a za hodinu a půl naší komunikace jsem získala orientaci a praktický akční plán pro současnou fázi.',
      en: 'Thank you for the consultation on SEO in digital marketing. It was very informative for me. I received a lot of valuable, useful information from your experience and practice. I had many questions, and in an hour and a half of talking I got direction and a practical action plan for my current stage.',
      ru: 'Благодарю Вас за консультацию относительно SEO в Digital Marketing. Для меня это было очень познавательно. Получила от Вас множество ценной полезной информации из Вашего опыта и практики. У меня было много вопросов, и за полтора часа нашего общения я получила ориентир и практический план к действию на данном этапе.',
    },
    services: ['consulting'],
    featured: 2,
    sample: false,
  },
  {
    id: 'linkedin-mentor',
    origin: 'en',
    role: { cs: 'mentor ve společnosti Unimenty', en: 'mentor at Unimenty', ru: 'ментор в Unimenty' },
    logo: '/images/logos/unimenty.webp',
    source: 'LinkedIn',
    date: '2026-01-13',
    text: {
      cs: 'Měl jsem to potěšení spolupracovat s Arsenim ve společnosti Unimenty, kde měl na starosti on-page SEO a copywriting. Soustavně dodával kvalitní, dobře strukturovaný obsah optimalizovaný pro vyhledávače i uživatelskou zkušenost. Arsenii dobře rozumí osvědčeným postupům SEO a umí složité myšlenky přetavit do jasného a poutavého textu. Spolehlivý a zdatný profesionál, spolupráci s ním vřele doporučuji.',
      en: 'I had the pleasure of working with Arsenii at Unimenty, where he was responsible for on-page SEO and copywriting. He consistently delivered high-quality, well-structured content optimized for both search engines and user experience. Arsenii has a strong understanding of SEO best practices and knows how to turn complex ideas into clear, engaging copy. A reliable and skilled professional, I highly recommend working with him.',
      ru: 'Мне было приятно работать с Арсением в Unimenty, где он отвечал за on-page SEO и копирайтинг. Он стабильно выдавал качественный, хорошо структурированный контент, оптимизированный и для поисковых систем, и для пользователей. Арсений хорошо знает SEO best practices и умеет превращать сложные идеи в понятные, живые тексты. Надёжный и сильный профессионал, искренне рекомендую работать с ним.',
    },
    services: ['start', 'fullSeo'],
    featured: 3,
    sample: false,
  },
  {
    id: 'linkedin-teammate',
    origin: 'en',
    role: { cs: 'kolega z týmu Unimenty', en: 'teammate at Unimenty', ru: 'коллега по команде в Unimenty' },
    logo: '/images/logos/unimenty.webp',
    source: 'LinkedIn',
    text: {
      cs: 'Měl jsem to potěšení pracovat s Arsenim v jednom týmu ve společnosti Unimenty. Arsenii soustavně prokazoval silný profesionalismus, kreativitu a orientaci na výsledky v každém projektu, na kterém jsme spolupracovali. […] Jeho komunikační dovednosti a proaktivní přístup z něj dělaly spolehlivého člena týmu, na kterého jsem se mohl vždy spolehnout, že dodá kvalitní práci včas.',
      en: 'I had the pleasure of working with Arsenii in the same team at Unimenty. Arsenii consistently demonstrated strong professionalism, creativity, and a results-driven mindset in every project we collaborated on. […] His communication skills and proactive approach made him a reliable team member and someone I could always count on to deliver high-quality work on time.',
      ru: 'Мне было приятно работать с Арсением в одной команде в Unimenty. Арсений неизменно демонстрировал высокий профессионализм, креативность и ориентацию на результат в каждом проекте, над которым мы работали вместе. […] Его коммуникативные навыки и проактивный подход делали его надёжным членом команды, на которого я всегда мог положиться в том, что качественная работа будет сделана в срок.',
    },
    services: ['fullSeo'],
    sample: false,
  },
];

const byDate = (a: Review, b: Review) => (b.date ?? '').localeCompare(a.date ?? '');

export const featuredReviews = (limit = 3) =>
  REVIEWS.filter((r) => r.featured !== undefined)
    .sort((a, b) => a.featured! - b.featured!)
    .slice(0, limit);

export const reviewsForService = (key: ServiceKey, limit = 2) =>
  REVIEWS.filter((r) => r.services.includes(key))
    .sort((a, b) => (a.featured ?? 99) - (b.featured ?? 99) || byDate(a, b))
    .slice(0, limit);

export const reviewsForCase = (key: 'caseKb') => REVIEWS.filter((r) => r.caseKey === key);

// Page order: the featured ones first, then by date.
export const allReviews = () =>
  [...REVIEWS].sort((a, b) => (a.featured ?? 99) - (b.featured ?? 99) || byDate(a, b));

// Reviews for a service page: the service's own first, then (if fewer than `min`) the latest
// reviews of other services — newest dated first, undated ones in featured order.
export const reviewsWithFallback = (key: ServiceKey, max = 3, min = 3, preferOrigin?: Lang) => {
  const own = reviewsForService(key, max);
  if (own.length >= min) return own;
  const rest = REVIEWS.filter((r) => !own.includes(r)).sort(
    (a, b) =>
      (preferOrigin ? Number(b.origin === preferOrigin) - Number(a.origin === preferOrigin) : 0) ||
      (b.date ? 1 : 0) - (a.date ? 1 : 0) ||
      byDate(a, b) ||
      (a.featured ?? 99) - (b.featured ?? 99),
  );
  return [...own, ...rest].slice(0, max);
};
