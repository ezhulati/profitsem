import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://profitsem.com',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) =>
        !page.includes('/api/') &&
        !page.includes('/thank-you') &&
        !page.includes('/404') &&
        !page.includes('/locations/0'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [],
      serialize(item) {
        // Set custom priorities based on page type
        if (item.url === 'https://profitsem.com/') {
          item.priority = 1.0; // Homepage
          item.changefreq = 'weekly';
        } else if (item.url.includes('/services/google-ads/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/free-analysis/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/services/') && !item.url.endsWith('/services/')) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/pricing/') || item.url.includes('/contact/') || item.url.includes('/about/')) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/blog/') && !item.url.endsWith('/blog/')) {
          item.priority = 0.75;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/case-studies/') && !item.url.endsWith('/case-studies/')) {
          item.priority = 0.75;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/resources/') && !item.url.endsWith('/resources/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/locations/') && !item.url.endsWith('/locations/')) {
          item.priority = 0.65;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/privacy/') || item.url.includes('/terms/')) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        } else {
          // Index pages and other content
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }

        return item;
      },
    }),
  ],
  output: 'hybrid',
  adapter: vercel({
    runtime: 'nodejs20.x',
    webAnalytics: {
      enabled: true,
    },
    functionPerRoute: false,
    edgeMiddleware: false,
    includeFiles: [],
    imageService: true,
  }),
  vite: {
    ssr: {
      noExternal: ['@radix-ui/*'],
    },
  },
});
