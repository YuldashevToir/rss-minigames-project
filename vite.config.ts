import { defineConfig } from 'vite';

export default defineConfig({
  // Ensures assets load correctly on GitHub Pages (replace with your exact repository name if needed later)
  base: './', 
  build: {
    outDir: 'dist',
    minify: 'terser', // Optimizes the final bundle code cleanly
    sourcemap: true,  // Helps with debugging production builds
  },
  server: {
    port: 3000,
    open: true,       // Automatically opens the browser when you run npm run dev
  }
});
