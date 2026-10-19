import type { Lang, PageKey, ServiceKey } from '../i18n/routes';

type L<T = string> = Record<Lang, T>;

export interface CaseStudy {
  key: Extract<PageKey, 'caseKb'>;
  client: string;
  industry: L;
  teaser: L;
  challenge: L;
  solution: L<string[]>;
  // Source: client reference from Make Up Digital Agency (see data/reviews.ts).
  metrics: { value: string; label: L }[];
  services: ServiceKey[];
}

export const CASES: CaseStudy[] = [
  {
    key: 'caseKb',
    client: 'KB Překlady',
    industry: { cs: 'Překladatelská agentura', en: 'Translation agency', ru: 'Бюро переводов' },
    teaser: {
      cs: 'Web překladatelské agentury, který na startu prakticky nerankoval a nepřinášel poptávky: zobrazení ×6, kliky ×300+, poptávky nejprve ×5 a poté +65–70 % měsíčně.',
      en: 'A translation agency website that hardly ranked and brought no enquiries at the start: impressions ×6, clicks ×300+, enquiries first ×5 and then +65–70% per month.',
      ru: 'Сайт бюро переводов, который на старте почти не ранжировался и не приносил заявок: показы ×6, клики ×300+, заявки сначала ×5, затем +65–70% в месяц.',
    },
    challenge: {
      cs: 'Na začátku web prakticky nerankoval ve vyhledávání a nepřinášel žádné poptávky.',
      en: 'At the start the website hardly ranked in search and brought no enquiries.',
      ru: 'На старте сайт практически не ранжировался в поиске и не приносил заявок.',
    },
    solution: {
      cs: ['Vybudování struktury webu od nuly', 'Pravidelné SEO audity', 'Týdenní podrobné reporty o odvedené práci', 'Optimalizace pro AI vyhledávání: web se začal objevovat v Google AI Overview a ChatGPT'],
      en: ['Site structure built from scratch', 'Regular SEO audits', 'Detailed weekly reports on the work done', 'Optimisation for AI search: the site began appearing in Google AI Overview and ChatGPT'],
      ru: ['Структура сайта выстроена с нуля', 'Регулярные SEO-аудиты', 'Еженедельные подробные отчёты о проделанной работе', 'Оптимизация под AI-поиск: сайт стал появляться в Google AI Overview и ChatGPT'],
    },
    metrics: [
      { value: '×6', label: { cs: 'zobrazení ve vyhledávání', en: 'search impressions', ru: 'показов в поиске' } },
      { value: '×300+', label: { cs: 'kliknutí z vyhledávání', en: 'clicks from search', ru: 'кликов из поиска' } },
      { value: '×5', label: { cs: 'poptávek (první nárůst), pak +65–70 % měsíčně', en: 'enquiries (first jump), then +65–70% monthly', ru: 'заявок (первый рост), затем +65–70% в месяц' } },
      { value: '×3', label: { cs: 'B2B poptávek', en: 'B2B enquiries', ru: 'B2B-заявок' } },
    ],
    services: ['start', 'fullSeo'],
  },
];

export const caseByKey = (key: CaseStudy['key']) => CASES.find((c) => c.key === key)!;
