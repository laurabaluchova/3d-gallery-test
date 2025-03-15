import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
      output: {
        banner: () => {
          const files = fs.readdirSync('dist').map(file => ({
            name: file,
            content: fs.readFileSync(path.join('dist', file), 'utf-8'),
          }));
          fs.writeFileSync('dist/file-log.json', JSON.stringify(files, null, 2));
          return '';
        }
      }
    }
  }
});
