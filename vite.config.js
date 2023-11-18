import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        icosahedral: resolve(__dirname, 'the-icosahedral.html'),
        sphere: resolve(__dirname, 'the-sphere.html'),
      },
      // output: {
      //   format: 'umd',
      //   entryFileNames: 'main.js',
      //   esModule: false,
      //   compact: true,
      //   globals: {
      //     jquery: '$',
      //   },
      // },
    },
  },
})