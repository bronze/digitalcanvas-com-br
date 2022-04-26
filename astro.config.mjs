import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import astroImagePlugin from "astro-imagetools/plugin";
import WindiCSS from 'vite-plugin-windicss'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [astroImagePlugin, WindiCSS({
      preflight: true
    })],
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [sitemap()],
  site: 'https://www.digitalcanvas.com.br/',
});