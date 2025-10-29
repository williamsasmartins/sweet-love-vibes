import fs from 'fs';
import path from 'path';

const root = process.cwd();
const publicDir = path.join(root, 'sweet-love-vibes-main', 'public');
const srcAssetsDir = path.join(root, 'sweet-love-vibes-main', 'src', 'assets');
const distDir = path.join(root, 'sweet-love-vibes-main', 'dist');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFileSafe(from, to) {
  ensureDir(path.dirname(to));
  fs.copyFileSync(from, to);
  console.log(`Copied: ${from} -> ${to}`);
}

function copyPublicHtml() {
  if (!fs.existsSync(publicDir)) return;
  const files = fs.readdirSync(publicDir).filter((f) => f.endsWith('.html'));
  for (const f of files) {
    const from = path.join(publicDir, f);
    const to = path.join(distDir, f);
    copyFileSafe(from, to);
  }
}

function copyOgImage() {
  const publicOg = path.join(publicDir, 'og-image.png');
  const assetLogo = path.join(srcAssetsDir, 'logo-sweetslove.png');
  const distOg = path.join(distDir, 'og-image.png');

  if (fs.existsSync(publicOg)) {
    copyFileSafe(publicOg, distOg);
    return;
  }
  if (fs.existsSync(assetLogo)) {
    copyFileSafe(assetLogo, distOg);
    return;
  }
  console.warn('Warning: No OG image found (public/og-image.png or src/assets/logo-sweetslove.png)');
}

ensureDir(distDir);
copyPublicHtml();
copyOgImage();
console.log('Static copy complete.');