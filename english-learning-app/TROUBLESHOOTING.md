# 🔧 Troubleshooting Guide

## Vấn Đề Phổ Biến & Giải Pháp

---

## 🔴 Development Issues

### 1. `npm: command not found`
**Triệu Chứng**: Command line không nhận npm
**Giải Pháp**:
```bash
# Cài Node.js từ https://nodejs.org/
# Kiểm tra:
node --version
npm --version
```

### 2. `Module not found`
**Triệu Chứng**: Error: Cannot find module 'react'
**Giải Pháp**:
```bash
# Xóa node_modules
rm -rf node_modules

# Xóa cache
npm cache clean --force

# Cài lại
npm install
```

### 3. Port 3000 đang dùng
**Triệu Chứng**: `Error: listen EADDRINUSE :::3000`
**Giải Pháp** (macOS/Linux):
```bash
# Cách 1: Dùng port khác
PORT=3001 npm start

# Cách 2: Kill process trên port 3000
lsof -i :3000
kill -9 <PID>
```

**Giải Pháp** (Windows):
```bash
# Cách 1: Dùng port khác
set PORT=3001 && npm start

# Cách 2: Kill process trên port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### 4. CSS/JS không tải
**Triệu Chứng**: Trang tải nhưng không có style
**Giải Pháp**:
```bash
# Hard refresh
Ctrl+Shift+R  (Windows/Linux)
Cmd+Shift+R   (macOS)

# Hoặc xóa cache browser:
F12 > Application > Clear Storage
```

### 5. Flashcards không hiển thị
**Triệu Chứng**: Trang trắng hoặc dashboard không có dữ liệu
**Giải Pháp**:
```bash
# 1. Kiểm tra console (F12)
# 2. Xóa localStorage
# DevTools Console:
localStorage.clear()

# 3. Reload trang
location.reload()

# 4. Xóa build và build lại
rm -rf build
npm run build
```

---

## 🔴 Build Issues

### 6. Build fails
**Triệu Chứng**: `npm run build` bị lỗi
**Giải Pháp**:
```bash
# 1. Xóa build
rm -rf build

# 2. Cài lại dependencies
rm -rf node_modules
npm ci

# 3. Build lại
npm run build
```

### 7. Build size quá lớn
**Triệu Chứng**: Build lớn > 10MB
**Giải Pháp**:
```bash
# Kiểm tra kích thước
du -sh build/

# Phân tích bundle
npm run build -- --analyze

# Loại bỏ unreachable code:
npm run build -- --production
```

---

## 🔴 GitHub Pages Issues

### 8. 404 Not Found on GitHub Pages
**Triệu Chứng**: https://TRANGIANIT.github.io/en-dev hiển thị 404
**Giải Pháp**:
```bash
# 1. Kiểm tra homepage trong package.json
# Phải có: "homepage": "https://TRANGIANIT.github.io/en-dev"

# 2. Build lại
npm run build

# 3. Deploy
npm run deploy

# 4. Chờ 5 phút
# GitHub Pages cần thời gian update

# 5. Kiểm tra repository settings
# Settings > Pages > Source: gh-pages branch
```

### 9. Blank Page trên GitHub Pages
**Triệu Chứng**: Trang tải nhưng trắng
**Giải Pháp**:
```bash
# 1. Mở DevTools (F12)
# 2. Xem Console tab cho errors

# Nếu lỗi CSS/JS paths:
# Đảm bảo homepage đúng:
# "homepage": "https://TRANGIANIT.github.io/en-dev"

# 3. Hard refresh
Ctrl+Shift+R

# 4. Xóa cache browser
Settings > Clear browsing data
```

### 10. GitHub Actions deploy failed
**Triệu Chứng**: Workflow bị lỗi ❌
**Giải Pháp**:
```bash
# 1. Xem logs
# Repository > Actions > Latest workflow > View logs

# 2. Lỗi thường gặp:
# - npm ERR! code ENOMEM
#   → Build quá nặng, tăng memory
# - Cannot find module
#   → npm ci bị lỗi, check package-lock.json

# 3. Fix và push lại
git add .
git commit -m "Fix build"
git push origin main
```

---

## 🔴 Feature Issues

### 11. Flashcards không lưu progress
**Triệu Chứng**: Đóng tab rồi mở lại, dữ liệu mất
**Giải Pháp**:
```bash
# Check localStorage support
# DevTools Console:
typeof localStorage !== 'undefined'

# Nếu false = localStorage disabled
# Bật Private Browsing mode

# Kiểm tra browser settings
# Settings > Privacy > Allow localStorage
```

### 12. Flashcard animation giật
**Triệu Chứng**: Lật thẻ không mượt
**Giải Pháp**:
```bash
# 1. Browser quá cũ
# Cập nhật browser lên phiên bản mới

# 2. Hardware acceleration
# Chrome: Settings > Advanced > Use hardware acceleration

# 3. Tắt extensions
# Chrome: Incognito mode
```

### 13. SRS không tính toán đúng
**Triệu Chứng**: Lịch ôn tập sai
**Giải Pháp**:
```bash
# 1. Xóa localStorage
localStorage.clear()

# 2. Bắt đầu lại từ đầu
location.reload()

# 3. Kiểm tra logic
# App.js > handleUpdateProgress()
```

---

## 🔴 Performance Issues

### 14. Ứng dụng chậm
**Triệu Chứng**: Lag khi chạy, bị đông
**Giải Pháp**:
```bash
# 1. Kiểm tra RAM/CPU
# Mở Task Manager (Windows)
# hoặc Activity Monitor (macOS)

# 2. Đóng các tabs khác
# Giải phóng memory

# 3. Restart browser
# Xóa cache
```

### 15. Mobile app chậy
**Triệu Chứng**: Lag trên điện thoại
**Giải Pháp**:
```bash
# 1. Update browser
# Chrome/Safari lên phiên bản mới

# 2. Xóa cache app
# Settings > Apps > [Browser] > Clear Cache

# 3. Kiểm tra internet
# Kết nối WiFi hoặc 4G mạnh
```

---

## 📊 Debugging Tips

### Bật Debug Mode
```bash
# DevTools Console
localStorage.setItem('DEBUG', 'true')
location.reload()

# Xem logs chi tiết
console.log(JSON.stringify(localStorage))
```

### Kiểm tra Network
```bash
# DevTools > Network tab
# Reload trang
# Xem request/response times
```

### Profiling
```bash
# DevTools > Performance tab
# Record > Perform action > Stop
# Phân tích performance bottleneck
```

---

## 🆘 Nếu Vẫn Gặp Vấn Đề

### Thông Tin Cần Cung Cấp
```
1. OS: Windows / macOS / Linux
2. Browser: Chrome / Firefox / Safari
3. Node version: (chạy: node --version)
4. Error message: (copy từ console)
5. Steps to reproduce: (cách lặp lại lỗi)
```

### Liên Hệ Support
- 📧 Issue: https://github.com/TRANGIANIT/en-dev/issues
- 💬 Discussion: https://github.com/TRANGIANIT/en-dev/discussions

---

## ✅ Verify Everything Works

```bash
# Checklist trước deploy:

# 1. Dependencies cài OK
npm ls react

# 2. Build không error
npm run build

# 3. Không warning
npm run build 2>&1 | grep -i warning

# 4. Build size OK
du -sh build/

# 5. Files đúng
ls build/static/js/ | wc -l

# ✅ Tất cả OK = Ready to deploy!
```

---

**Không tìm thấy vấn đề của bạn?**

Tạo issue: https://github.com/TRANGIANIT/en-dev/issues/new

Happy Learning! 🎓
