import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";
import alpinejs from "@astrojs/alpinejs";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.digitalcanvas.com.br/',
  build: {
    assets: 'assets'
  },
  integrations: [icon(), tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    applyBaseStyles: true
  }), sitemap(), alpinejs(), compress({
    // CSS: false,
    HTML: true,
    Image: false
    // JavaScript: false,
    // SVG: false,
  })],
  output: "server",
  adapter: netlify({
    imageCDN: false
  })
});