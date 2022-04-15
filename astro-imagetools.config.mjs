import { defineConfig } from "astro-imagetools/config";

// `astro-imagetools.config.mjs`
export default defineConfig({
  placeholder: "none",
  fadeInTransition: "false",
  format: ["avif", "webp", "jpg"],
  breakpoints: [300, 600, 900, 1200, 1500],
  objectFit: "cover",
  layout: "fill",
});