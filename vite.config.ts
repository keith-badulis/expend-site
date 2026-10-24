import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      png: { quality: 85 },
      jpeg: { quality: 85 },
      webp: { quality: 88, effort: 6 },
      avif: { quality: 80, effort: 6 },
    }),
    cloudflare(),
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    host: true,
  },
});