import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import { isScheduledFuture } from './src/lib/schedule';

// Utility/thin + noindex pages that should never appear in the XML sitemap.
const SITEMAP_EXCLUDE = ['/thank-you/', '/were-hiring/', '/debris-removal-service-denver-co/'];

export default defineConfig({
  site: 'https://arborcaretreesolutions.com',
  output: 'static',
  // One consistent URL form site-wide (matches the canonical tags).
  trailingSlash: 'always',
  build: {
    // Inline all CSS into each page — no render-blocking stylesheet requests.
    // Total CSS is ~45KB raw (~9KB compressed), small enough to inline.
    inlineStylesheets: 'always',
  },
  integrations: [
    tailwind(),
    sitemap({
      // Exclude utility pages AND any scheduled page whose publish date
      // hasn't arrived yet (see src/lib/schedule.ts).
      filter: (page) => {
        const pathname = new URL(page).pathname;
        if (SITEMAP_EXCLUDE.includes(pathname)) return false;
        if (isScheduledFuture(pathname)) return false;
        return true;
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  redirects: {
    '/tree-service-denver-co': '/',
    '/services': '/tree-services',
    '/about': '/about-arbor-care-index',
    '/contact': '/contact-us',
    '/tree-trimming-pruning-denver-co': '/tree-trimming',
    '/tree-removal-denver-co': '/tree-removal',
    '/other-services': '/firewood-supplier-denver-co',
    // Renamed pages (descriptive slugs) — preserve old URLs.
    '/new-index-2': '/free-estimates',
    '/new-page': '/holiday-lights-denver-co',
  },
});
