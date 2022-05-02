import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import sitemap from '@astrojs/sitemap';
import WindiCSS from 'vite-plugin-windicss'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [WindiCSS({
      preflight: true
    })],
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [astroImageTools, sitemap()],
  site: 'https://www.digitalcanvas.com.br/',
});