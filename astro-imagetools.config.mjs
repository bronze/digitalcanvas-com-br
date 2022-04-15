// `astro-imagetools.config.mjs`
export default {
  layout: "fill",
  placeholder: "none",
  format: { ["avif", "webp", "jpg"]},
  breakpoints: { [300, 600, 900, 1200, 1500]},
};