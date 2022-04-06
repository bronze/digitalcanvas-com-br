import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import astroImagePlugin from "astro-imagetools/plugin";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [astroImagePlugin],
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false,
    },
  }), sitemap()],
  site: 'https://www.digitalcanvas.com.br/',
});