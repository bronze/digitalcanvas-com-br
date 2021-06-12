import { defineConfig } from 'vite'
import { imagetools } from "vite-imagetools"
import WindiCSS from 'vite-plugin-windicss'
const typography = require('windicss/plugin/typography')

// https://vitejs.dev/config/
export default defineConfig({
  extract: {
    include: ['./**/*.html'],
  },
  safelist: ['prose', 'prose-sm', 'm-auto'],
  darkMode: 'class',
  plugins: [typography, WindiCSS(), imagetools()],
  theme: {}
})