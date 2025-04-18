// build-github.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Tạo thư mục docs nếu nó không tồn tại
if (!fs.existsSync('docs')) {
  fs.mkdirSync('docs');
}

console.log('🚀 Building site for GitHub Pages...');

// Build frontend với cấu hình dành riêng cho GitHub Pages
try {
  console.log('📦 Building frontend...');
  execSync('npx vite build --config vite.config.github.ts', { stdio: 'inherit' });
  
  // Tạo file .nojekyll để ngăn GitHub Pages sử dụng Jekyll
  fs.writeFileSync(path.join('docs', '.nojekyll'), '');

  // Sao chép index.html thành 404.html để xử lý các SPA route
  console.log('📄 Creating 404.html for SPA routing...');
  fs.copyFileSync(path.join('docs', 'index.html'), path.join('docs', '404.html'));

  console.log('✅ Build completed successfully! The site is ready in the "docs" folder.');
  console.log('');
  console.log('⭐ To deploy to GitHub Pages:');
  console.log('1. Create a new GitHub repository');
  console.log('2. Push the entire project to the repository');
  console.log('3. Go to repository Settings > Pages');
  console.log('4. Select "Deploy from a branch" under Source');
  console.log('5. Select the branch and "/docs" folder, then click Save');
  console.log('');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}