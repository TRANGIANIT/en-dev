# 🚀 Hướng Dẫn Cài Đặt Nhanh

## Bước 1: Yêu Cầu Hệ Thống

Bạn cần cài đặt:
- **Node.js** (version 14 trở lên) - [Tải từ nodejs.org](https://nodejs.org/)
- **npm** (đi kèm với Node.js)

Kiểm tra xem đã cài đặt chưa:
```bash
node --version  # Phải ≥ v14.0.0
npm --version   # Phải ≥ v6.0.0
```

## Bước 2: Mở Terminal / Command Prompt

### Trên macOS:
```bash
# Nhấn Cmd + Space, gõ "Terminal"
# Hoặc dùng Terminal từ Applications > Utilities
```

### Trên Windows:
```bash
# Nhấn Windows + R, gõ "cmd"
# Hoặc tìm "Command Prompt" trong Start Menu
```

### Trên Linux:
```bash
# Nhấn Ctrl + Alt + T
# Hoặc mở Terminal từ Applications
```

## Bước 3: Navigate đến Project

```bash
# Gõ lệnh này (thay đường dẫn nếu khác)
cd /Users/locnm/Downloads/Code/englishblog/english-learning-app

# Hoặc copy-paste đường dẫn đầy đủ
```

Để chắc chắn bạn ở đúng folder, kiểm tra xem có file `package.json`:
```bash
ls         # macOS / Linux
dir        # Windows
```

## Bước 4: Cài Đặt Dependencies

```bash
npm install
```

Chờ 2-5 phút cho quá trình cài đặt hoàn tất. Bạn sẽ thấy:
```
added XXX packages
```

## Bước 5: Chạy Ứng Dụng

```bash
npm start
```

Ứng dụng sẽ tự động mở trình duyệt. Nếu không, mở:
```
http://localhost:3000
```

## 🎉 Thành Công!

Bạn sẽ thấy:
```
  App running at:
    http://localhost:3000
```

Nhấn **Ctrl + C** để dừng ứng dụng.

## 📊 Build Cho Production

Khi bạn muốn build cho production:

```bash
npm run build
```

Các file sẽ được tạo trong folder `build/`

## 🔧 Troubleshooting

### Lỗi: "npm: command not found"
**Giải pháp**: Cài đặt Node.js lại từ [nodejs.org](https://nodejs.org/)

### Lỗi: "Port 3000 is already in use"
**Giải pháp**: 
```bash
# macOS / Linux
lsof -i :3000
kill -9 <PID>

# Hoặc chạy trên port khác
PORT=3001 npm start
```

### Lỗi: "Module not found"
**Giải pháp**:
```bash
# Xóa node_modules và cài lại
rm -rf node_modules
npm install
```

### Dữ liệu không hiển thị
**Giải pháp**: 
```bash
# Xóa localStorage
# Mở DevTools (F12) > Console, gõ:
localStorage.clear()

# Reload trang
```

### React không load
**Giải pháp**:
```bash
# Xóa cache npm
npm cache clean --force
npm install
npm start
```

## 📚 Các Lệnh Hữu Ích

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm start

# Build cho production
npm run build

# Chạy tests
npm test

# Xóa build folder
npm run eject  # ⚠️ Cẩn thận! Không thể undo!
```

## 🌐 Deploy Ứng Dụng

### Deploy lên Vercel (Khuyến Nghị)

1. Tạo tài khoản tại [vercel.com](https://vercel.com/)
2. Import project
3. Tự động deploy!

### Deploy lên Netlify

1. Tạo tài khoản tại [netlify.com](https://netlify.com/)
2. Kết nối GitHub hoặc upload `build/` folder
3. Hoàn tất!

### Deploy lên GitHub Pages

```bash
# Thêm vào package.json:
"homepage": "https://yourusername.github.io/english-learning-app"

# Build
npm run build

# Deploy
npx gh-pages -d build
```

## ❓ Câu Hỏi Thường Gặp

**Q: Dữ liệu của tôi có được lưu trữ an toàn không?**
A: Có, dữ liệu được lưu trên máy của bạn qua localStorage. Tuyệt đối riêng tư.

**Q: Tôi có thể sử dụng trên điện thoại không?**
A: Có, ứng dụng responsive hoàn toàn. Chỉ cần mở browser và nhập localhost.

**Q: Khi nào nên ôn tập?**
A: Dashboard sẽ báo cho bạn. Mỗi ngày kiểm tra xem có bao nhiêu card cần ôn.

**Q: Tôi có thể thêm flashcards của riêng mình không?**
A: Hiện tại chưa hỗ trợ, nhưng sẽ có trong phiên bản tới. Bạn có thể sửa file `flashcards_data.json`.

**Q: Làm sao để backup dữ liệu?**
A: 
```bash
# Mở DevTools (F12), Console
JSON.stringify(localStorage)

# Copy output này ra file để backup
```

---

**Bạn đã sẵn sàng! Hãy bắt đầu học tiếng Anh ngay hôm nay! 🎓**
