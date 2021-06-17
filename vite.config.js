import { resolve } from 'path'
import { defineConfig } from 'vite'
import { imagetools } from "vite-imagetools"
import WindiCSS from 'vite-plugin-windicss'
const typography = require('windicss/plugin/typography')
import viteCompression from 'vite-plugin-compression'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { minifyHtml } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '/~/', replacement: `${resolve(__dirname, 'src')}/` },
    ],
  },
  extract: {
    include: ['./**/*.html'],
  },
  safelist: ['prose', 'prose-sm', 'm-auto'],
  darkMode: 'class',
  plugins: [
    typography,
    WindiCSS(),
    imagetools(),
    minifyHtml(),
    viteSingleFile(),
    // gizp
    viteCompression(),
    // br
    viteCompression({
      ext: '.br',
      algorithm: 'brotliCompress',
    }),],
    build: {
      target: "esnext",
      assetsInlineLimit: 100000000,
      chunkSizeWarningLimit: 100000000,
      cssCodeSplit: false,
      brotliSize: false,
      rollupOptions: {
        inlineDynamicImports: true,
        output: {
          manualChunks: () => "everything.js",
        },
      },
    },
  theme: {}
})