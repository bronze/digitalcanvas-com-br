import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: false, // or 'media' or 'class'
  preflight: true,
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
  },
  extract: {
    include: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [],
});
