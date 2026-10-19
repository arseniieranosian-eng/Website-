import { defineConfig } from 'astro/config';

// Production domain (canonical, hreflang, sitemap). Override with SITE_URL for staging builds.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.seo-eranosian.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
});
