// Blog articles built as dedicated pages (own layout, not Markdown). Listed on the blog index and in its sitemap entry.
import type { Lang, PageKey } from '../i18n/routes';
import { META } from '../i18n/meta';
import { POST_INDEXING_CS, POST_INDEXING_PUBLISHED } from './post-indexing-cs';
import { POST_NOT_SHOWN_CS, POST_NOT_SHOWN_PUBLISHED } from './post-not-shown-cs';
import { POST_SEO_AUDIT_CS, POST_SEO_AUDIT_PUBLISHED } from './post-seo-audit-cs';

export interface DedicatedPost { key: PageKey; lang: Lang; date: string; title: string; description: string; image?: { src: string; width: number; height: number; alt: string } }

const ALL: DedicatedPost[] = [
  { key: 'postIndexing', lang: 'cs', date: POST_INDEXING_PUBLISHED, title: META.postIndexing.cs.h1, description: META.postIndexing.cs.description, image: POST_INDEXING_CS.cover },
  { key: 'postNotShown', lang: 'cs', date: POST_NOT_SHOWN_PUBLISHED, title: META.postNotShown.cs.h1, description: META.postNotShown.cs.description, image: POST_NOT_SHOWN_CS.cover },
  { key: 'postSeoAudit', lang: 'cs', date: POST_SEO_AUDIT_PUBLISHED, title: META.postSeoAudit.cs.h1, description: META.postSeoAudit.cs.description, image: POST_SEO_AUDIT_CS.cover },
];

export const dedicatedPosts = (lang: Lang) => ALL.filter((p) => p.lang === lang).sort((a, b) => b.date.localeCompare(a.date));
