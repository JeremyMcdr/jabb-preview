import { cpSync, mkdirSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const out = resolve(root, '_site');

mkdirSync(out, { recursive: true });

const sites = ['modern-colored', 'streetwear', 'urban-neon', 'modern-b2b'];

for (const site of sites) {
  const src = resolve(root, 'sites', site, 'dist');
  const dest = resolve(out, site);
  cpSync(src, dest, { recursive: true });
  console.log(`Copied ${site}/dist -> _site/${site}/`);
}

// Copy landing page
copyFileSync(resolve(root, 'landing', 'index.html'), resolve(out, 'index.html'));
console.log('Copied landing/index.html -> _site/index.html');
