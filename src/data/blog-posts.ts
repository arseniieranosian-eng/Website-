// Blog articles built as dedicated pages (own layout, not Markdown). Listed on the blog index and in its sitemap entry.
import type { Lang, PageKey } from '../i18n/routes';
import { META } from '../i18n/meta';
import { POST_INDEXING_CS, POST_INDEXING_PUBLISHED } from './post-indexing-cs';
import { POST_NOT_SHOWN_CS, POST_NOT_SHOWN_PUBLISHED } from './post-not-shown-cs';
import { POST_SEO_AUDIT_CS, POST_SEO_AUDIT_PUBLISHED } from './post-seo-audit-cs';
import { POST_DUPLICATES_CS, POST_DUPLICATES_PUBLISHED } from './post-duplicates-cs';
import { POST_REDESIGN_CS, POST_REDESIGN_PUBLISHED } from './post-redesign-cs';
import { POST_ADS_CS, POST_ADS_PUBLISHED } from './post-ads-cs';
import { POST_REDIRECTS_CS, POST_REDIRECTS_PUBLISHED } from './post-redirects-cs';
import { POST_NEWSITE_CS, POST_NEWSITE_PUBLISHED } from './post-newsite-cs';
import { POST_CHOOSE_CS, POST_CHOOSE_PUBLISHED } from './post-choose-cs';
import { POST_NOLEADS_CS, POST_NOLEADS_PUBLISHED } from './post-noleads-cs';
import { POST_CLIENTS_CS, POST_CLIENTS_PUBLISHED } from './post-clients-cs';
import { POST_B2B_CS, POST_B2B_PUBLISHED } from './post-b2b-cs';
import { POST_PAIRS_CS, POST_PAIRS_PUBLISHED } from './post-pairs-cs';
import { POST_REALTY_CS, POST_REALTY_PUBLISHED } from './post-realty-cs';
import { POST_REALTY_NOLEADS_CS, POST_REALTY_NOLEADS_PUBLISHED } from './post-realty-noleads-cs';
import { POST_REALTY_SMALL_CS, POST_REALTY_SMALL_PUBLISHED } from './post-realty-small-cs';
import { POST_REALTY_LISTINGS_CS, POST_REALTY_LISTINGS_PUBLISHED } from './post-realty-listings-cs';
import { POST_ACCOUNTING_CHANNELS_CS, POST_ACCOUNTING_CHANNELS_PUBLISHED } from './post-accounting-channels-cs';
import { POST_FINANCE_CHANNELS_RU, POST_FINANCE_CHANNELS_PUBLISHED } from './post-finance-channels-ru';
import { POST_SEO_PLAN_CS, POST_SEO_PLAN_PUBLISHED } from './post-seo-plan-cs';
import { POST_SELECT_SPECIALIST_CS, POST_SELECT_SPECIALIST_PUBLISHED } from './post-select-specialist-cs';
import { POST_REDESIGN_PLAN_CS, POST_REDESIGN_PLAN_PUBLISHED } from './post-redesign-plan-cs';
import { POST_ACCOUNTING_TIME_CS, POST_ACCOUNTING_TIME_PUBLISHED } from './post-accounting-time-cs';
import { POST_ACCOUNTING_PAGES_CS, POST_ACCOUNTING_PAGES_PUBLISHED } from './post-accounting-pages-cs';
import { POST_ACCOUNTING_LOCAL_CS, POST_ACCOUNTING_LOCAL_PUBLISHED } from './post-accounting-local-cs';
import { POST_ACCOUNTING_SMALL_CS, POST_ACCOUNTING_SMALL_PUBLISHED } from './post-accounting-small-cs';
import { POST_ACCOUNTING_NOLEADS_CS, POST_ACCOUNTING_NOLEADS_PUBLISHED } from './post-accounting-noleads-cs';
import { POST_REALTY_LOCAL_CS, POST_REALTY_LOCAL_PUBLISHED } from './post-realty-local-cs';
import { POST_REALTY_DISTRICTS_CS, POST_REALTY_DISTRICTS_PUBLISHED } from './post-realty-districts-cs';
import { POST_REALTY_PORTALS_CS, POST_REALTY_PORTALS_PUBLISHED } from './post-realty-portals-cs';

export interface DedicatedPost { key: PageKey; lang: Lang; date: string; title: string; description: string; image?: { src: string; width: number; height: number; alt: string } }

const ALL: DedicatedPost[] = [
  { key: 'postAccountingChannels', lang: 'cs', date: POST_ACCOUNTING_CHANNELS_PUBLISHED, title: META.postAccountingChannels.cs.h1, description: META.postAccountingChannels.cs.description, image: POST_ACCOUNTING_CHANNELS_CS.cover },
  { key: 'postFinanceChannels', lang: 'ru', date: POST_FINANCE_CHANNELS_PUBLISHED, title: META.postFinanceChannels.ru.h1, description: META.postFinanceChannels.ru.description, image: POST_FINANCE_CHANNELS_RU.cover },
  { key: 'postIndexing', lang: 'cs', date: POST_INDEXING_PUBLISHED, title: META.postIndexing.cs.h1, description: META.postIndexing.cs.description, image: POST_INDEXING_CS.cover },
  { key: 'postNotShown', lang: 'cs', date: POST_NOT_SHOWN_PUBLISHED, title: META.postNotShown.cs.h1, description: META.postNotShown.cs.description, image: POST_NOT_SHOWN_CS.cover },
  { key: 'postSeoAudit', lang: 'cs', date: POST_SEO_AUDIT_PUBLISHED, title: META.postSeoAudit.cs.h1, description: META.postSeoAudit.cs.description, image: POST_SEO_AUDIT_CS.cover },
  { key: 'postDuplicates', lang: 'cs', date: POST_DUPLICATES_PUBLISHED, title: META.postDuplicates.cs.h1, description: META.postDuplicates.cs.description, image: POST_DUPLICATES_CS.cover },
  { key: 'postRedesign', lang: 'cs', date: POST_REDESIGN_PUBLISHED, title: META.postRedesign.cs.h1, description: META.postRedesign.cs.description, image: POST_REDESIGN_CS.cover },
  { key: 'postAds', lang: 'cs', date: POST_ADS_PUBLISHED, title: META.postAds.cs.h1, description: META.postAds.cs.description, image: POST_ADS_CS.cover },
  { key: 'postRedirects', lang: 'cs', date: POST_REDIRECTS_PUBLISHED, title: META.postRedirects.cs.h1, description: META.postRedirects.cs.description, image: POST_REDIRECTS_CS.cover },
  { key: 'postNewSite', lang: 'cs', date: POST_NEWSITE_PUBLISHED, title: META.postNewSite.cs.h1, description: META.postNewSite.cs.description, image: POST_NEWSITE_CS.cover },
  { key: 'postChoose', lang: 'cs', date: POST_CHOOSE_PUBLISHED, title: META.postChoose.cs.h1, description: META.postChoose.cs.description, image: POST_CHOOSE_CS.cover },
  { key: 'postNoLeads', lang: 'cs', date: POST_NOLEADS_PUBLISHED, title: META.postNoLeads.cs.h1, description: META.postNoLeads.cs.description, image: POST_NOLEADS_CS.cover },
  { key: 'postClients', lang: 'cs', date: POST_CLIENTS_PUBLISHED, title: META.postClients.cs.h1, description: META.postClients.cs.description, image: POST_CLIENTS_CS.cover },
  { key: 'postSeoPlan', lang: 'cs', date: POST_SEO_PLAN_PUBLISHED, title: META.postSeoPlan.cs.h1, description: META.postSeoPlan.cs.description, image: POST_SEO_PLAN_CS.cover },
  { key: 'postSelectSpecialist', lang: 'cs', date: POST_SELECT_SPECIALIST_PUBLISHED, title: META.postSelectSpecialist.cs.h1, description: META.postSelectSpecialist.cs.description, image: POST_SELECT_SPECIALIST_CS.cover },
  { key: 'postRedesignPlan', lang: 'cs', date: POST_REDESIGN_PLAN_PUBLISHED, title: META.postRedesignPlan.cs.h1, description: META.postRedesignPlan.cs.description, image: POST_REDESIGN_PLAN_CS.cover },
  { key: 'postAccountingTime', lang: 'cs', date: POST_ACCOUNTING_TIME_PUBLISHED, title: META.postAccountingTime.cs.h1, description: META.postAccountingTime.cs.description, image: POST_ACCOUNTING_TIME_CS.cover },
  { key: 'postAccountingPages', lang: 'cs', date: POST_ACCOUNTING_PAGES_PUBLISHED, title: META.postAccountingPages.cs.h1, description: META.postAccountingPages.cs.description, image: POST_ACCOUNTING_PAGES_CS.cover },
  { key: 'postAccountingLocal', lang: 'cs', date: POST_ACCOUNTING_LOCAL_PUBLISHED, title: META.postAccountingLocal.cs.h1, description: META.postAccountingLocal.cs.description, image: POST_ACCOUNTING_LOCAL_CS.cover },
  { key: 'postAccountingSmall', lang: 'cs', date: POST_ACCOUNTING_SMALL_PUBLISHED, title: META.postAccountingSmall.cs.h1, description: META.postAccountingSmall.cs.description, image: POST_ACCOUNTING_SMALL_CS.cover },
  { key: 'postAccountingNoLeads', lang: 'cs', date: POST_ACCOUNTING_NOLEADS_PUBLISHED, title: META.postAccountingNoLeads.cs.h1, description: META.postAccountingNoLeads.cs.description, image: POST_ACCOUNTING_NOLEADS_CS.cover },
  { key: 'postRealtyLocal', lang: 'cs', date: POST_REALTY_LOCAL_PUBLISHED, title: META.postRealtyLocal.cs.h1, description: META.postRealtyLocal.cs.description, image: POST_REALTY_LOCAL_CS.cover },
  { key: 'postRealtyDistricts', lang: 'cs', date: POST_REALTY_DISTRICTS_PUBLISHED, title: META.postRealtyDistricts.cs.h1, description: META.postRealtyDistricts.cs.description, image: POST_REALTY_DISTRICTS_CS.cover },
  { key: 'postRealtyPortals', lang: 'cs', date: POST_REALTY_PORTALS_PUBLISHED, title: META.postRealtyPortals.cs.h1, description: META.postRealtyPortals.cs.description, image: POST_REALTY_PORTALS_CS.cover },
  { key: 'postRealtyListings', lang: 'cs', date: POST_REALTY_LISTINGS_PUBLISHED, title: META.postRealtyListings.cs.h1, description: META.postRealtyListings.cs.description, image: POST_REALTY_LISTINGS_CS.cover },
  { key: 'postRealtySmall', lang: 'cs', date: POST_REALTY_SMALL_PUBLISHED, title: META.postRealtySmall.cs.h1, description: META.postRealtySmall.cs.description, image: POST_REALTY_SMALL_CS.cover },
  { key: 'postRealtyNoLeads', lang: 'cs', date: POST_REALTY_NOLEADS_PUBLISHED, title: META.postRealtyNoLeads.cs.h1, description: META.postRealtyNoLeads.cs.description, image: POST_REALTY_NOLEADS_CS.cover },
  { key: 'postRealty', lang: 'cs', date: POST_REALTY_PUBLISHED, title: META.postRealty.cs.h1, description: META.postRealty.cs.description, image: POST_REALTY_CS.cover },
  { key: 'postPairs', lang: 'cs', date: POST_PAIRS_PUBLISHED, title: META.postPairs.cs.h1, description: META.postPairs.cs.description, image: POST_PAIRS_CS.cover },
  { key: 'postB2b', lang: 'cs', date: POST_B2B_PUBLISHED, title: META.postB2b.cs.h1, description: META.postB2b.cs.description, image: POST_B2B_CS.cover },
];

export const dedicatedPosts = (lang: Lang) => ALL.filter((p) => p.lang === lang).sort((a, b) => b.date.localeCompare(a.date));

// Blog index groups: every article belongs to one funnel (the goal it leads the reader to). The index shows one section per group (order below, newest article first inside a group).
type L3 = Record<Lang, string>;
export interface BlogGroup { id: string; title: L3; lead: L3; keys: PageKey[] }
export const BLOG_GROUPS: BlogGroup[] = [
  {
    id: 'audit',
    title: { cs: 'Bezplatný audit: technické chyby webu', en: 'Free audit: technical website errors', ru: 'Бесплатный аудит: технические ошибки сайта' },
    lead: { cs: 'Články o problémech, které ukáže bezplatný audit: indexace, duplicity, přesměrování a změny webu.', en: 'Articles on the problems a free audit shows: indexing, duplicates, redirects and site changes.', ru: 'Статьи о проблемах, которые показывает бесплатный аудит: индексация, дубли, редиректы и изменения сайта.' },
    keys: ['postIndexing', 'postNotShown', 'postSeoAudit', 'postDuplicates', 'postRedirects', 'postNewSite', 'postRedesign'],
  },
  {
    id: 'consulting',
    title: { cs: 'SEO konzultace: před rozhodnutím', en: 'SEO consultation: before you decide', ru: 'SEO-консультация: перед решением' },
    lead: { cs: 'Redesign a migrace webu, výběr SEO specialisty a SEO plán: co zkontrolovat a na co se zeptat.', en: 'Website redesign and migration, choosing an SEO specialist and the SEO plan: what to check and what to ask.', ru: 'Редизайн и миграция сайта, выбор SEO-специалиста и SEO-план: что проверить и о чём спросить.' },
    keys: ['postRedesignPlan', 'postSelectSpecialist', 'postSeoPlan'],
  },
  {
    id: 'choose',
    title: { cs: 'Jak vybrat první krok v SEO', en: 'Choosing the first step in SEO', ru: 'Как выбрать первый шаг в SEO' },
    lead: { cs: 'Audit, konzultace, Start nebo reklama: co se hodí jako první.', en: 'Audit, consultation, Start or ads: what fits first.', ru: 'Аудит, консультация, Старт или реклама: с чего начать.' },
    keys: ['postChoose', 'postAds'],
  },
  {
    id: 'translation',
    title: { cs: 'Překladatelské agentury', en: 'Translation agencies', ru: 'Переводческие агентства' },
    lead: { cs: 'Jak překladatelská agentura získává klienty a poptávky z webu.', en: 'How a translation agency gets clients and enquiries from its website.', ru: 'Как переводческое агентство получает клиентов и заявки с сайта.' },
    keys: ['postNoLeads', 'postClients', 'postB2b', 'postPairs'],
  },
  {
    id: 'realty',
    title: { cs: 'Realitní kanceláře', en: 'Real estate agencies', ru: 'Агентства недвижимости' },
    lead: { cs: 'Web, nabídky, čtvrti, mapy a portály z pohledu realitní kanceláře.', en: 'Website, listings, neighbourhoods, maps and portals from a real estate agency’s point of view.', ru: 'Сайт, объявления, районы, карты и порталы с точки зрения агентства недвижимости.' },
    keys: ['postRealty', 'postRealtyNoLeads', 'postRealtySmall', 'postRealtyListings', 'postRealtyPortals', 'postRealtyDistricts', 'postRealtyLocal'],
  },
  {
    id: 'accounting',
    title: { cs: 'Účetní kanceláře', en: 'Accounting firms', ru: 'Бухгалтерские фирмы' },
    lead: { cs: 'Jak účetní kancelář získává nové klienty.', en: 'How an accounting firm gets new clients.', ru: 'Как бухгалтерская фирма получает новых клиентов.' },
    keys: ['postAccountingChannels', 'postAccountingNoLeads', 'postAccountingSmall', 'postAccountingLocal', 'postAccountingPages', 'postAccountingTime'],
  },
  {
    id: 'finance',
    title: { cs: 'Finanční poradci', en: 'Financial consultants', ru: 'Финансовые консультанты' },
    lead: { cs: 'Jak finanční poradce získává klienty.', en: 'How a financial consultant gets clients.', ru: 'Как финансовый консультант получает клиентов.' },
    keys: ['postFinanceChannels'],
  },
];

// Articles of a language grouped by funnel (empty groups are dropped). Articles that belong to no group would be lost, so the build fails on them.
export const dedicatedPostGroups = (lang: Lang) => {
  const posts = dedicatedPosts(lang);
  const listed = new Set(BLOG_GROUPS.flatMap((g) => g.keys));
  const orphan = ALL.filter((p) => !listed.has(p.key));
  if (orphan.length) throw new Error(`blog articles without a group: ${orphan.map((p) => p.key).join(', ')}`);
  return BLOG_GROUPS.map((g) => ({ group: g, posts: posts.filter((p) => g.keys.includes(p.key)) })).filter((x) => x.posts.length > 0);
};
