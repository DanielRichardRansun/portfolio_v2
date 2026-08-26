import { resolve } from 'path';
import { defineConfig } from 'vite';

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
        project: resolve(__dirname, 'project.html')
      }
    }
  }
});
