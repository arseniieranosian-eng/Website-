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

export interface DedicatedPost { key: PageKey; lang: Lang; date: string; title: string; description: string; image?: { src: string; width: number; height: number; alt: string } }

const ALL: DedicatedPost[] = [
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
  { key: 'postRealtyNoLeads', lang: 'cs', date: POST_REALTY_NOLEADS_PUBLISHED, title: META.postRealtyNoLeads.cs.h1, description: META.postRealtyNoLeads.cs.description, image: POST_REALTY_NOLEADS_CS.cover },
  { key: 'postRealty', lang: 'cs', date: POST_REALTY_PUBLISHED, title: META.postRealty.cs.h1, description: META.postRealty.cs.description, image: POST_REALTY_CS.cover },
  { key: 'postPairs', lang: 'cs', date: POST_PAIRS_PUBLISHED, title: META.postPairs.cs.h1, description: META.postPairs.cs.description, image: POST_PAIRS_CS.cover },
  { key: 'postB2b', lang: 'cs', date: POST_B2B_PUBLISHED, title: META.postB2b.cs.h1, description: META.postB2b.cs.description, image: POST_B2B_CS.cover },
];

export const dedicatedPosts = (lang: Lang) => ALL.filter((p) => p.lang === lang).sort((a, b) => b.date.localeCompare(a.date));
