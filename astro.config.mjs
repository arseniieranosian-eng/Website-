import { defineConfig } from 'astro/config';

// Production domain: set SITE_URL in the build environment (used for canonical, hreflang, sitemap).
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.example.cz',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
});
