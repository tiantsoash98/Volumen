import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
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