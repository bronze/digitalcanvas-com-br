import {defineConfig} from 'astro/config';
import UnoCSS from 'unocss/astro';
import compress from "astro-compress";
import critters from "astro-critters";
import image from "@astrojs/image";
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  integrations: [sitemap(), image({
    // may be useful if your hosting provider allows caching between CI builds
    cacheDir: "./.cache/image"
  }), UnoCSS(), compress(), critters()],
  site: 'https://www.digitalcanvas.com.br/'
});