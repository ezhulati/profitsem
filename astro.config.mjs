import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://profitsem.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  output: 'hybrid',
  adapter: vercel({
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
