#!/bin/bash

# Tạo thư mục docs nếu nó không tồn tại
mkdir -p docs

echo "🚀 Building site for GitHub Pages..."

# Build frontend với cấu hình dành riêng cho GitHub Pages
echo "📦 Building frontend..."
npx vite build --config vite.config.github.ts

# Tạo file .nojekyll để ngăn GitHub Pages sử dụng Jekyll
touch docs/.nojekyll

# Sao chép file từ client/public vào thư mục docs
echo "📄 Copying required files for SPA routing..."
cp -r client/public/* docs/

echo "✅ Build completed successfully! The site is ready in the \"docs\" folder."
echo ""
echo "⭐ To deploy to GitHub Pages:"
echo "1. Create a new GitHub repository"
echo "2. Push the entire project to the repository"
echo "3. Go to repository Settings > Pages"
echo "4. Select \"Deploy from a branch\" under Source"
echo "5. Select the branch and \"/docs\" folder, then click Save"
echo ""