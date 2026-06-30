// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.electricista-badalona.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Las páginas legales llevan noindex; no deben aparecer en el sitemap.
      filter: (page) =>
        !/\/(aviso-legal|politica-privacidad|ca\/avis-legal|ca\/politica-de-privacitat)\/?$/.test(page),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          ca: 'ca-ES',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
