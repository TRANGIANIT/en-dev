# 🚀 Deployment Guide - GitHub Pages

## Cách Deploy lên GitHub Pages

### ✅ Đã Cấu Hình
- ✅ `homepage` trong package.json
- ✅ `gh-pages` script
- ✅ GitHub Actions workflow
- ✅ Environment variables

### 🔧 Cách 1: Auto Deploy (Khuyến Nghị)

GitHub Actions sẽ tự động deploy khi bạn push lên branch `main`.

**Bước 1**: Push code
```bash
git add .
git commit -m "Update for GitHub Pages deployment"
git push origin main
```

**Bước 2**: Chờ GitHub Actions chạy
- Truy cập: https://github.com/TRANGIANIT/en-dev/actions
- Chờ workflow "Deploy to GitHub Pages" hoàn thành

**Bước 3**: Xem kết quả
- Truy cập: https://TRANGIANIT.github.io/en-dev

---

## 🔧 Cách 2: Manual Deploy

### Bước 1: Install dependencies (nếu chưa)
```bash
npm install
```

### Bước 2: Build
```bash
npm run build
```

### Bước 3: Deploy
```bash
npm run deploy
```

### Bước 4: Xem kết quả
- Truy cập: https://TRANGIANIT.github.io/en-dev

---

## 📝 Cấu Hình GitHub Pages

### Repository Settings
1. Mở: https://github.com/TRANGIANIT/en-dev/settings/pages
2. Chọn:
   - Source: **GitHub Actions** (nếu có)
   - Hoặc Source: Branch **gh-pages**, Folder **/root**

### Enable GitHub Actions
1. Mở: https://github.com/TRANGIANIT/en-dev/settings/actions
2. Chọn: **Allow all actions and reusable workflows**

---

## ✨ Tính Năng Sau Deploy

✅ Ứng dụng sẽ hoạt động ở: 
```
https://TRANGIANIT.github.io/en-dev
```

✅ Tất cả tính năng vẫn hoạt động:
- Dashboard
- Flashcards
- Spaced Repetition
- LocalStorage (dữ liệu lưu trên máy bạn)

✅ Responsive trên:
- Desktop
- Tablet
- Mobile

---

## 🐛 Troubleshooting

### Lỗi: 404 Not Found
**Giải pháp**: 
- Chờ 5 phút sau khi deploy
- Xóa cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+Shift+R

### Lỗi: Blank Page
**Giải pháp**:
- Kiểm tra browser console (F12)
- Xem logs của GitHub Actions

### Lỗi: CSS/JS không tải
**Giải pháp**:
- Đảm bảo `homepage` đúng trong package.json
- Build lại: `npm run build`

---

## 📊 Status

- **Build Status**: [![Build](https://img.shields.io/github/actions/workflow/status/TRANGIANIT/en-dev/deploy.yml?branch=main)](https://github.com/TRANGIANIT/en-dev/actions)
- **Live URL**: https://TRANGIANIT.github.io/en-dev
- **Repository**: https://github.com/TRANGIANIT/en-dev

---

## 🎯 Next Steps

1. Push code lên GitHub
2. GitHub Actions sẽ auto-deploy
3. Truy cập link GitHub Pages
4. Chia sẻ link với bạn bè!

---

**Happy Learning! 🎓**
