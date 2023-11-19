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
        square: resolve(__dirname, 'the-square.html'),
        pyramid: resolve(__dirname, 'the-pyramid.html'),
        cube: resolve(__dirname, 'the-cube.html'),
        repertoire: resolve(__dirname, 'repertoire.html'),
      }
    }
  },
})