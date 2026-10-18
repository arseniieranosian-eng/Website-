import type { Lang, PageKey, ServiceKey } from '../i18n/routes';

type L<T = string> = Record<Lang, T>;

export interface CaseStudy {
  key: Extract<PageKey, 'caseKb'>;
  client: string;
  industry: L;
  teaser: L;
  challenge: L;
  solution: L<string[]>;
  // TODO: replace placeholder metrics with real, verifiable numbers.
  metrics: { value: string; label: L }[];
  services: ServiceKey[];
}

// TODO: challenge/solution copy below is a draft structure — verify against the real project.
export const CASES: CaseStudy[] = [
  {
    key: 'caseKb',
    client: 'KB Překlady',
    industry: { cs: 'Překladatelská agentura', en: 'Translation agency', ru: 'Бюро переводов' },
    teaser: {
      cs: 'Překladatelská agentura v silně konkurenčním oboru: z nevýrazných pozic na přední místa pro klíčové dotazy a více poptávek z vyhledávání.',
      en: 'A translation agency in a highly competitive field: from weak rankings to top positions for key queries and more enquiries from search.',
      ru: 'Бюро переводов в очень конкурентной нише: от слабых позиций к верхним строчкам по ключевым запросам и рост заявок из поиска.',
    },
    challenge: {
      cs: 'Web měl technické chyby v indexaci, slabou strukturu služeb a nízkou viditelnost na dotazy typu „soudní překlad Praha“. Většina poptávek přicházela jen z doporučení.',
      en: 'The website had indexing errors, a weak service structure and low visibility for queries such as “certified translation Prague”. Most enquiries came only from referrals.',
      ru: 'У сайта были ошибки индексации, слабая структура услуг и низкая видимость по запросам вроде «судебный перевод Прага». Большинство заявок приходило только по рекомендациям.',
    },
    solution: {
      cs: ['Technický audit a oprava indexace', 'Nová struktura stránek podle jazyků a typů překladů', 'Optimalizace textů a meta údajů', 'Lokální SEO v Google Maps a Mapy.com', 'Strukturovaná data a příprava na AI vyhledávání'],
      en: ['Technical audit and indexing fixes', 'New page structure by language and translation type', 'Copy and metadata optimisation', 'Local SEO on Google Maps and Mapy.com', 'Structured data and preparation for AI search'],
      ru: ['Технический аудит и исправление индексации', 'Новая структура страниц по языкам и типам переводов', 'Оптимизация текстов и метаданных', 'Локальное SEO в Google Maps и Mapy.com', 'Структурированные данные и подготовка к AI-поиску'],
    },
    metrics: [
      { value: '+XXX %', label: { cs: 'organická návštěvnost', en: 'organic traffic', ru: 'органический трафик' } },
      { value: 'XX', label: { cs: 'dotazů v TOP 3', en: 'queries in the top 3', ru: 'запросов в ТОП-3' } },
      { value: '×X', label: { cs: 'poptávek z webu', en: 'website enquiries', ru: 'заявок с сайта' } },
    ],
    services: ['start', 'fullSeo', 'maps'],
  },
];

export const caseByKey = (key: CaseStudy['key']) => CASES.find((c) => c.key === key)!;
