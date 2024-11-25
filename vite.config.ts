import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: '/src/api',
      assets: '/src/assets',
      client: '/src/client',
      context: '/src/context',
      hooks: '/src/hooks',
      routing: '/src/routing',
      shared: '/src/shared',
      static: '/src/static',
      styles: '/src/styles',
      types: '/src/types',
    },
  },
});
