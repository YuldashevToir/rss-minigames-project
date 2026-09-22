import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
