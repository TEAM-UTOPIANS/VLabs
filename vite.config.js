import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  return {
    base: (mode === 'production' && process.env.GITHUB_ACTIONS === 'true') ? '/Virtual_Labs/' : '/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          catalog: resolve(__dirname, 'catalog.html'),
          lab: resolve(__dirname, 'lab.html'),
        }
      }
    }
  };
});
