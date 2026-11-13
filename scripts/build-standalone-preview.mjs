import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const assetsDir = path.join(distDir, 'assets');
const outDir = path.join(rootDir, 'preview');

const assetFiles = fs.readdirSync(assetsDir);
const cssFile = assetFiles.find((f) => f.endsWith('.css'));
const jsFile = assetFiles.find((f) => f.endsWith('.js'));

if (!cssFile || !jsFile) {
  throw new Error('Missing compiled CSS or JS in dist/assets. Run `npm run build` first.');
}

let css = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
let js = fs.readFileSync(path.join(assetsDir, jsFile), 'utf8');

// Inline woff2 font files referenced in CSS as base64 data URIs
css = css.replace(/url\((['"]?)(?:\.\/|\/assets\/)?([^)'"]+\.woff2)\1\)/g, (match, _q, fileName) => {
  const cleanName = path.basename(fileName);
  const fontPath = path.join(assetsDir, cleanName);
  if (!fs.existsSync(fontPath)) {
    return match;
  }
  const b64 = fs.readFileSync(fontPath).toString('base64');
  return `url("data:font/woff2;base64,${b64}")`;
});

// Embed WebP studio assets as data URIs so standalone HTML works from any host or file://
const heroWebpB64 = fs
  .readFileSync(path.join(rootDir, 'public/images/titan-hero-box.webp'))
  .toString('base64');
const logoWebpB64 = fs
  .readFileSync(path.join(rootDir, 'public/images/titan-screaming-logo.webp'))
  .toString('base64');
const sealWebpB64 = fs
  .readFileSync(path.join(rootDir, 'public/images/titan-launch-seal.webp'))
  .toString('base64');
const faviconPngB64 = fs
  .readFileSync(path.join(rootDir, 'public/favicon.png'))
  .toString('base64');

const heroDataUri = `data:image/webp;base64,${heroWebpB64}`;
const logoDataUri = `data:image/webp;base64,${logoWebpB64}`;
const sealDataUri = `data:image/webp;base64,${sealWebpB64}`;

const replacements = [
  ['./images/titan-hero-box.webp', heroDataUri],
  ['./images/titan-hero-box.png', heroDataUri],
  ['/images/titan-hero-box.webp', heroDataUri],
  ['/images/titan-hero-box.png', heroDataUri],
  ['images/titan-hero-box.webp', heroDataUri],
  ['images/titan-hero-box.png', heroDataUri],
  ['./images/titan-screaming-logo.webp', logoDataUri],
  ['./images/titan-screaming-logo.png', logoDataUri],
  ['/images/titan-screaming-logo.webp', logoDataUri],
  ['/images/titan-screaming-logo.png', logoDataUri],
  ['images/titan-screaming-logo.webp', logoDataUri],
  ['images/titan-screaming-logo.png', logoDataUri],
  ['./images/titan-launch-seal.webp', sealDataUri],
  ['./images/titan-launch-seal.png', sealDataUri],
  ['/images/titan-launch-seal.webp', sealDataUri],
  ['/images/titan-launch-seal.png', sealDataUri],
  ['images/titan-launch-seal.webp', sealDataUri],
  ['images/titan-launch-seal.png', sealDataUri],
];

for (const [target, uri] of replacements) {
  js = js.split(`"${target}"`).join(`"${uri}"`);
  js = js.split(`'${target}'`).join(`'${uri}'`);
  js = js.split(`\`${target}\``).join(`\`${uri}\``);
}

js = js.replace(/"\.\/"\s*\+\s*"data:image\/webp;base64,/g, '"data:image/webp;base64,');

const safeJs = js.replace(/<\/script/gi, '<\\/script');

const html = `<!doctype html>
<html lang="en" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="data:image/png;base64,${faviconPngB64}" />
    <title>GOLD TITAN — Gold Trading. Automated. Simplified.</title>
    <meta
      name="description"
      content="GOLD TITAN is an automated gold-trading software solution developed for the XAUUSD market, compatible with MetaTrader 4 and MetaTrader 5."
    />
    <meta name="theme-color" content="#070707" />
    <style>${css}</style>
  </head>
  <body class="bg-[#070707] text-[#F5F2EA] antialiased selection:bg-[#FFD000]/30 selection:text-[#F5F2EA]">
    <div id="root"></div>
    <script>(function(){"use strict";${safeJs}})();</script>
  </body>
</html>
`;

fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, 'index.html');
fs.writeFileSync(outFile, html, 'utf8');
console.log(`Generated standalone ${outFile} (${Math.round(html.length / 1024)} KB)`);
