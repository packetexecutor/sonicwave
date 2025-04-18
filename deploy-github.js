#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tạo thư mục docs nếu chưa tồn tại
const docsDir = path.resolve(__dirname, 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

console.log('🚀 Đang build trang web cho GitHub Pages...');

try {
  // Build ứng dụng với cấu hình GitHub
  console.log('📦 Đang build frontend...');
  execSync('npx vite build --config vite.config.github.ts', { stdio: 'inherit' });

  // Tạo file .nojekyll
  fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');

  // Tạo/chỉnh sửa CNAME nếu cần
  // fs.writeFileSync(path.join(docsDir, 'CNAME'), 'your-domain.com');

  // Tạo file 404.html đặc biệt cho SPA routing
  const notFoundHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>SonicWave Executor</title>
  <script type="text/javascript">
    // Giải pháp cho GitHub Pages với Single Page Applications
    // https://github.com/rafgraph/spa-github-pages
    var pathSegmentsToKeep = 0;

    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
</body>
</html>`;

  fs.writeFileSync(path.join(docsDir, '404.html'), notFoundHtml);

  // Thêm script định tuyến vào index.html
  const indexPath = path.join(docsDir, 'index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Kiểm tra nếu script định tuyến đã tồn tại
  if (!indexContent.includes('window.history.replaceState')) {
    indexContent = indexContent.replace(
      '<div id="root"></div>',
      `<div id="root"></div>
    <!-- Script for GitHub Pages SPA routing -->
    <script type="text/javascript">
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>`
    );
    
    fs.writeFileSync(indexPath, indexContent);
  }

  // Bỏ script Replit banner
  indexContent = indexContent.replace(
    /<script type="text\/javascript" src="https:\/\/replit\.com\/public\/js\/replit-dev-banner\.js"><\/script>/g, 
    ''
  );
  fs.writeFileSync(indexPath, indexContent);

  console.log('✅ Build hoàn tất! Trang web đã sẵn sàng trong thư mục "docs".');
  console.log('');
  console.log('⭐ Để triển khai lên GitHub Pages:');
  console.log('1. Tạo repository GitHub mới');
  console.log('2. Đẩy toàn bộ dự án lên repository đó');
  console.log('3. Vào Settings > Pages');
  console.log('4. Chọn "Deploy from a branch" trong phần Source');
  console.log('5. Chọn branch của bạn và thư mục "/docs", sau đó nhấn Save');
  console.log('');

} catch (error) {
  console.error('❌ Lỗi trong quá trình build:', error);
  process.exit(1);
}