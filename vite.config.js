import { defineConfig } from 'vite';

export default defineConfig({
  base: '/3d-gallery-test',
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },  
});
