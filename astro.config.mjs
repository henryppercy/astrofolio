import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import astroExpressiveCode from 'astro-expressive-code'
import netlify from '@astrojs/netlify';

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
const astroExpressiveCodeOptions = {
  themes: ['kanagawa-dragon', 'vitesse-light'],
  useDarkModeMediaQuery: false,
  styleOverrides: {
    frames: {
      shadowColor: '#0',
    },
  },
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroExpressiveCode(astroExpressiveCodeOptions), mdx()],
  adapter: netlify(),
  output: 'server',
});
