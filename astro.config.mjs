import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://arborcaretreesolutions.com',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
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
    '/firewood-supplier-denver-co': '/other-services',
  },
});
