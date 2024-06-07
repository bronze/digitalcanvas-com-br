import {defineConfig} from 'astro/config';
import compress from "astro-compress";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    applyBaseStyles: true
  }), sitemap(), compress({
    // CSS: false,
    HTML: true
    // Image: false,
    // JavaScript: false,
    // SVG: false,
  })],
  site: 'https://www.digitalcanvas.com.br/',
  output: "server",
  adapter: netlify()
});