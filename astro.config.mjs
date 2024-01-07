import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import astroExpressiveCode from 'astro-expressive-code'
import netlify from "@astrojs/netlify/functions";

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
const astroExpressiveCodeOptions = {
  themes: ['one-dark-pro', 'github-light'],
  shiki: {

  },
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroExpressiveCode(astroExpressiveCodeOptions), mdx()]
  // output: "server",
  // adapter: netlify()
});