const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Running HireMeAI Build Script...');

// 1. Build frontend
execSync('cd frontend && npm install && npm run build', { stdio: 'inherit' });

// 2. Ensure root public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 3. Copy files from frontend/.output/public
const frontendPublic = path.join(__dirname, 'frontend', '.output', 'public');
if (fs.existsSync(frontendPublic)) {
  fs.cpSync(frontendPublic, publicDir, { recursive: true });
}

// 4. Find assets for index.html
const assetsDir = path.join(publicDir, 'assets');
let mainJs = '';
let mainCss = '';

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  for (const f of files) {
    if (f.startsWith('index-') && f.endsWith('.js')) {
      mainJs = `/assets/${f}`;
    }
    if (f.startsWith('styles-') && f.endsWith('.css')) {
      mainCss = `/assets/${f}`;
    }
  }
}

// 5. Generate index.html
const htmlContent = `<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HireMeAI — AI Career & Resume Intelligence Suite</title>
    <meta name="description" content="AI-powered resume grounded candidate interview, ATS compatibility scoring, cover letter generator, and STAR mock interview preparation platform." />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    ${mainCss ? `<link rel="stylesheet" href="${mainCss}" />` : ''}
  </head>
  <body class="bg-background text-foreground antialiased">
    <div id="root"></div>
    ${mainJs ? `<script type="module" src="${mainJs}"></script>` : ''}
  </body>
</html>`;

fs.writeFileSync(path.join(publicDir, 'index.html'), htmlContent);
console.log('✅ Generated public/index.html with mainJs:', mainJs, 'mainCss:', mainCss);

// 6. Copy .vercel/output if present
const vercelOutput = path.join(__dirname, 'frontend', '.vercel', 'output');
if (fs.existsSync(vercelOutput)) {
  fs.cpSync(vercelOutput, path.join(__dirname, '.vercel', 'output'), { recursive: true });
  console.log('✅ Copied .vercel/output to root');
}

console.log('🎉 HireMeAI Build Completed Successfully!');
