import { existsSync, readdirSync } from 'node:fs';

// True when at least one blog post file exists. Used to skip querying the content
// collection while the blog is empty (Astro warns about empty collections).
export const HAS_POSTS = (() => {
  const dir = './src/content/blog';
  if (!existsSync(dir)) return false;
  return (readdirSync(dir, { recursive: true }) as string[]).some((f) => String(f).endsWith('.md'));
})();
