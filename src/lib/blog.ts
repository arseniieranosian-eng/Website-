import { getCollection, type CollectionEntry } from 'astro:content';
import { LANGS, postPath, type Lang } from '../i18n/routes';
import { HAS_POSTS } from './has-posts';

export type Post = CollectionEntry<'blog'>;

export const postLang = (p: Post) => p.id.split('/')[0] as Lang;
export const postSlug = (p: Post) => p.id.split('/')[1];
export const postUrl = (p: Post) => postPath(postLang(p), postSlug(p));

export async function allPosts(): Promise<Post[]> {
  if (!HAS_POSTS) return [];
  const posts = await getCollection('blog', (p) => !p.data.draft);
  for (const p of posts) {
    if (!LANGS.includes(postLang(p))) throw new Error(`Blog post in unknown language folder: ${p.id}`);
  }
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function postsByLang(lang: Lang, limit?: number) {
  const posts = (await allPosts()).filter((p) => postLang(p) === lang);
  return limit ? posts.slice(0, limit) : posts;
}

// hreflang alternates: only languages where a translation actually exists.
export async function postAlternates(post: Post): Promise<Partial<Record<Lang, string>>> {
  const siblings = (await allPosts()).filter((p) => p.data.translationKey === post.data.translationKey);
  return Object.fromEntries(siblings.map((p) => [postLang(p), postUrl(p)]));
}
