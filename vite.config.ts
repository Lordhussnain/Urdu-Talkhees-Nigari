import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          contact: path.resolve(__dirname, 'contact.html'),
        },
      },
    },
    plugins: [
      {
        name: 'copy-static-github-pages-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          if (!fs.existsSync(distDir)) {
            return;
          }
          for (const dirName of ['css', 'js', 'assets']) {
            const srcDir = path.resolve(__dirname, dirName);
            const destDir = path.resolve(distDir, dirName);
            if (fs.existsSync(srcDir)) {
              fs.cpSync(srcDir, destDir, {recursive: true, force: true});
            }
          }
          const nojekyllSrc = path.resolve(__dirname, '.nojekyll');
          const nojekyllDest = path.resolve(distDir, '.nojekyll');
          if (fs.existsSync(nojekyllSrc)) {
            fs.copyFileSync(nojekyllSrc, nojekyllDest);
          }
        },
      },
    ],
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
