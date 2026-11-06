// The author's photos of the services (free audit, SEO consultation, 3-month Start, Full SEO, maps): ru and uk share the Russian pictures, cs and en have their own.
// Used by the service cards, the small thumbnails in the tables, the decorative slot and the heroes of the service pages.
import type { Lang } from '../i18n/routes';

export type ServicePhoto = { src: string; width: number; height: number; wide: boolean };
const FILE: Record<string, string> = { audit: 'audit-free', consulting: 'seo-consulting', start: 'start-3-months', fullSeo: 'full-seo', maps: 'maps' };

export const servicePhoto = (lang: Lang | string | undefined, kind: string): ServicePhoto | undefined => {
  const f = FILE[kind];
  if (!f || !lang) return undefined;
  const suffix = lang === 'uk' ? 'ru' : lang;
  if (!['ru', 'cs', 'en'].includes(suffix)) return undefined;
  const wide = kind === 'maps';
  return { src: `/images/services/${f}-${suffix}.webp`, width: 768, height: wide ? 432 : 512, wide };
};
