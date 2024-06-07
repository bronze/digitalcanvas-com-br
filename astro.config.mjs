import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import critters from "astro-critters";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), critters({
    critters: true,
    preload: 'body'
  }), compress(), tailwind(), icon()],
  site: 'https://www.digitalcanvas.com.br/'
});