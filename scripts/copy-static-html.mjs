import { mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const dist = resolve(root, 'dist');
const files = [
  ['public/privacy.html', 'privacy.html'],
  ['public/facebook.html', 'facebook.html'],
  ['src/assets/logo-sweetslove.png', 'og-image.png'],
];

mkdirSync(dist, { recursive: true });

for (const [fromRel, toRel] of files) {
  const from = resolve(root, fromRel);
  const to = resolve(dist, toRel);
  if (!existsSync(from)) {
    console.warn(`[copy-static-html] skip: ${fromRel} not found`);
    continue;
  }
  try {
    copyFileSync(from, to);
    console.log(`[copy-static-html] copied: ${fromRel} -> ${toRel}`);
  } catch (err) {
    console.error(`[copy-static-html] failed: ${fromRel}`, err);
    process.exitCode = 1;
  }
}