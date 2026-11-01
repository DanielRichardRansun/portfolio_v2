import { resolve } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        allProjects: resolve(__dirname, 'all-projects.html'),
        contact: resolve(__dirname, 'contact.html'),
        project: resolve(__dirname, 'project.html'),
        page404: resolve(__dirname, '404.html')
      }
    }
  },
  plugins: [
    {
      name: 'copy-src-assets',
      closeBundle() {
        const srcDir = resolve(__dirname, 'src/assets/images');
        const destDir = resolve(__dirname, 'dist/src/assets/images');
        const destImages = resolve(__dirname, 'dist/images');
        if (fs.existsSync(srcDir)) {
          fs.cpSync(srcDir, destDir, { recursive: true });
          fs.cpSync(srcDir, destImages, { recursive: true });
          console.log('✓ Successfully copied src/assets/images to dist/src/assets/images and dist/images');
        }
      }
    }
  ]
});
