import type { Lang, PageKey, ServiceKey } from '../i18n/routes';

type L<T = string> = Record<Lang, T>;

export interface CaseStudy {
  key: Extract<PageKey, 'caseKb'>;
  client: string;
  industry: L;
  teaser: L;
  challenge: L;
  solution: L<string[]>;
  // Leads figures: author's data; impressions/clicks: Make Up Digital Agency reference (data/reviews.ts).
  metrics: { value: string; label: L }[];
  services: ServiceKey[];
}

export const CASES: CaseStudy[] = [
  {
    key: 'caseKb',
    client: 'KB Překlady',
    industry: { cs: 'Překladatelská agentura', en: 'Translation agency', ru: 'Бюро переводов' },
    teaser: {
      cs: 'Web překladatelské agentury, který na startu prakticky nerankoval a nepřinášel poptávky: za první 4 měsíce 8× více poptávek, přes léto dalších 24× a citace v Google AI Overview.',
      en: 'A translation agency website that hardly ranked and brought no enquiries at the start: leads 8× in the first 4 months, a further 24× over the summer and citations in Google AI Overview.',
      ru: 'Сайт бюро переводов, который на старте почти не ранжировался и не приносил заявок: за первые 4 месяца заявок в 8 раз больше, за лето ещё в 24 раза и цитирование в Google AI Overview.',
    },
    challenge: {
      cs: 'Na začátku web prakticky nerankoval ve vyhledávání a nepřinášel žádné poptávky.',
      en: 'At the start the website hardly ranked in search and brought no enquiries.',
      ru: 'На старте сайт практически не ранжировался в поиске и не приносил заявок.',
    },
    solution: {
      cs: ['Vybudování struktury webu od nuly', 'Pravidelné SEO audity', 'Týdenní podrobné reporty o odvedené práci', 'Optimalizace pro AI vyhledávání: web získal citace v Google AI Overview po boku oficiálních vládních zdrojů'],
      en: ['Site structure built from scratch', 'Regular SEO audits', 'Detailed weekly reports on the work done', 'Optimisation for AI search: the site earned citations in Google AI Overview alongside official government sources'],
      ru: ['Структура сайта выстроена с нуля', 'Регулярные SEO-аудиты', 'Еженедельные подробные отчёты о проделанной работе', 'Оптимизация под AI-поиск: сайт получил цитирование в Google AI Overview наряду с официальными государственными источниками'],
    },
    metrics: [
      { value: '×8', label: { cs: 'poptávek za první 4 měsíce – v termínu dohodnutém s klientem', en: 'leads in the first 4 months – on the timeline agreed with the client', ru: 'заявок за первые 4 месяца — в срок, согласованный с клиентом' } },
      { value: '×24', label: { cs: 'dalších přes léto, nezávisle na sezónní poptávce', en: 'further growth over the summer, independent of seasonal demand', ru: 'ещё за лето, независимо от сезонного спроса' } },
      { value: '×6', label: { cs: 'zobrazení ve vyhledávání', en: 'search impressions', ru: 'показов в поиске' } },
      { value: '×300+', label: { cs: 'kliknutí z vyhledávání', en: 'clicks from search', ru: 'кликов из поиска' } },
    ],
    services: ['start', 'fullSeo'],
  },
];

export const caseByKey = (key: CaseStudy['key']) => CASES.find((c) => c.key === key)!;
