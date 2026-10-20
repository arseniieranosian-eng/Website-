import type { Lang, PageKey, ServiceKey } from '../i18n/routes';
import { CASE_LABEL, CASE_LINE, TYPO_LINE } from './case-summary';

type L<T = string> = Record<Lang, T>;

export interface CaseStudy {
  key: Extract<PageKey, 'caseKb' | 'caseTypo'>;
  langs?: readonly Lang[]; // languages the case page exists in (default: all)
  industry: L;
  teaser: L;
  challenge: L;
  solution: L<string[]>;
  // Only figures confirmed by the author's text, each with its period and source (the client is anonymous).
  metrics: { value: string; label: L }[];
  services: ServiceKey[];
}

export const CASES: CaseStudy[] = [
  {
    key: 'caseKb',
    industry: CASE_LABEL,
    teaser: CASE_LINE,
    challenge: {
      cs: 'Web fungoval, ale nepřiváděl nové klienty: byl postavený pro lidi, kteří firmu už znají a jen potřebují objednat.',
      en: 'The website worked, but it did not bring new clients: it was built for people who already know the company and just need to order.',
      ru: 'Сайт работал, но не приводил новых клиентов: он был построен для тех, кто уже знает компанию и просто хочет заказать.',
    },
    solution: {
      cs: ['Samostatná stránka pro každé město s lokálním obsahem', 'Obsah jako trychtýř: články vedoucí ke stránkám služeb', 'Lokalizace jednotlivých jazykových verzí, ne jen překlad', 'Technické SEO: strukturovaná data a rychlost webu'],
      en: ['A separate page for every city with local content', 'Content as a funnel: articles leading to the service pages', 'Localisation of each language version, not just translation', 'Technical SEO: structured data and site speed'],
      ru: ['Отдельная страница для каждого города с локальным контентом', 'Контент как воронка: статьи ведут на страницы услуг', 'Локализация каждой языковой версии, а не просто перевод', 'Техническое SEO: структурированные данные и скорость сайта'],
    },
    metrics: [
      { value: '×8', label: { cs: 'poptávek v červnu oproti květnu (formulář a e-mail; reálné číslo je vyšší)', en: 'enquiries in June vs May (form and e-mail; the real number is higher)', ru: 'заявок в июне по сравнению с маем (форма и e-mail; реальное число выше)' } },
      { value: 'B2B', label: { cs: 'první B2B klient po 4 měsících práce', en: 'first B2B client after 4 months of work', ru: 'первый B2B-клиент после 4 месяцев работы' } },
    ],
    services: ['start', 'fullSeo'],
  },
];

CASES.push({
  key: 'caseTypo',
  langs: ['ru'],
  industry: { cs: 'Tiskárna', en: 'Print shop', ru: 'Типография' },
  teaser: { cs: '', en: '', ru: TYPO_LINE },
  challenge: { cs: '', en: '', ru: 'Сайт работал, но Google плохо понимал его структуру, а страницы не были привязаны к запросам, по которым люди готовы заказывать печать.' },
  solution: { cs: [], en: [], ru: ['Технический краулинг и данные Google Search Console', 'Исправление битых ссылок и иерархии заголовков', 'Карта запросов по воронке под коммерческий интент', '20+ посадочных страниц на WordPress', 'Еженедельный мониторинг'] },
  metrics: [
    { value: '×8,75', label: { cs: '', en: '', ru: 'органический трафик: 1 200 → 10 500 визитов в месяц, июль 2024 → июль 2025' } },
  ],
  services: ['start', 'fullSeo'],
});

export const caseByKey = (key: CaseStudy['key']) => CASES.find((c) => c.key === key)!;
