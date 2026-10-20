import type { Lang, PageKey, ServiceKey } from '../i18n/routes';
import { CASE_LABEL, CASE_LINE } from './case-summary';

type L<T = string> = Record<Lang, T>;

export interface CaseStudy {
  key: Extract<PageKey, 'caseKb'>;
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

export const caseByKey = (key: CaseStudy['key']) => CASES.find((c) => c.key === key)!;
