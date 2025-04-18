#!/bin/bash

# Tạo thư mục docs nếu nó không tồn tại
mkdir -p docs

echo "🚀 Building site for GitHub Pages..."

# Build frontend với cấu hình dành riêng cho GitHub Pages
echo "📦 Building frontend..."
npx vite build --config vite.config.github.ts

# Tạo file .nojekyll để ngăn GitHub Pages sử dụng Jekyll
touch docs/.nojekyll

# Sao chép index.html thành 404.html để xử lý các SPA route
echo "📄 Creating 404.html for SPA routing..."
cp docs/index.html docs/404.html

echo "✅ Build completed successfully! The site is ready in the \"docs\" folder."
echo ""
echo "⭐ To deploy to GitHub Pages:"
echo "1. Create a new GitHub repository"
echo "2. Push the entire project to the repository"
echo "3. Go to repository Settings > Pages"
echo "4. Select \"Deploy from a branch\" under Source"
echo "5. Select the branch and \"/docs\" folder, then click Save"
echo ""