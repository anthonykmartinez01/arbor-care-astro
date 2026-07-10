import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// Utility/thin pages that should never appear in the XML sitemap.
const SITEMAP_EXCLUDE = ['/thank-you/', '/were-hiring/'];

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
      filter: (page) =>
        !SITEMAP_EXCLUDE.some((path) => new URL(page).pathname === path),
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
