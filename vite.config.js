/*jshint esversion: 8 */
/*jshint -W030 */

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import banner from 'vite-plugin-banner';

export default defineConfig({
    mode: 'jit',
    base: '/dist/',
    plugins: [
      vue(),
      banner(`/**\n * Built by PremoWeb (https://premoweb.com/).\n */`),
    ],
    root: 'frontend/',
    build: {
      write: true,
      outDir: '../backend/dist/',
      publicPath: '/dist/',
      publicDir: './frontend/public/',
      emptyOutDir: true,
      manifest: true,
    },
    server: {
      watch: {
        usePolling: true,
      },
      cors: true,
      strictPort: true,
      port: 80,
      proxy: {
        '^/api/': {
          target: 'http://localhost:81',
          ws: true,
          changeOrigin: true,
          pathRewrite: { '^/api/': '/api/v1/' },
        }
      },
    }
});
