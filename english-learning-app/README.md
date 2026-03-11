# 📚 English Learning Hub - Học Tiếng Anh Với Spaced Repetition

## Giới Thiệu

**English Learning Hub** là một ứng dụng web hiện đại được thiết kế để giúp bạn học tiếng Anh hiệu quả nhất. Ứng dụng kết hợp hai phương pháp học tập tối ưu:

- 🔄 **Spaced Repetition System (SRS)** - Hệ thống ôn tập cách quãng theo thuật toán SM-2
- 📇 **Flashcards** - Thẻ ghi nhớ thông minh với ví dụ và định nghĩa

## Tính Năng Chính

### 1. 📊 Dashboard Thông Minh
- Xem tổng quan tiến độ học tập
- Theo dõi số flashcard đã ôn tập
- Xem số card đã nắm vững
- Biết được bao nhiêu card cần ôn hôm nay

### 2. 📚 Hệ Thống Flashcard
- **Từ Vựng** - Học từ vựng tiếng Anh với định nghĩa rõ ràng
- **Ngữ Pháp** - Hiểu rõ các quy tắc ngữ pháp tiếng Anh
- Ví dụ thực tế cho mỗi card
- Xem lật thẻ (flip animation) đẹp mắt

### 3. 🧠 Spaced Repetition Algorithm
- Sử dụng thuật toán **SM-2** - được các chuyên gia công nhận
- Tự động tính toán lịch ôn tập tối ưu
- Học từ dễ đến khó dần dần
- Lưu tiến độ tự động trên máy (localStorage)

### 4. 📈 Theo Dõi Tiến Độ
- Biểu đồ tiến độ học tập
- Thống kê chi tiết theo từng bài học
- Tỷ lệ thành công trong mỗi phiên học
- Lịch sử ôn tập

### 5. 🎯 Hệ Thống Đánh Giá
Sau khi trả lời mỗi câu hỏi, bạn đánh giá mức độ hiểu biết:
- 😞 **Sai** - Không biết / Quên hoàn toàn
- 😐 **Bình Thường** - Vừa nhớ, chưa rõ ràng
- 😊 **Tốt** - Nhớ rõ, thường trả lời đúng
- 🤩 **Hoàn Hảo** - Rất chắc chắn, nhớ kỹ

## Cách Cài Đặt

### Yêu Cầu
- Node.js (version 14 trở lên)
- npm hoặc yarn

### Các Bước Cài Đặt

1. **Clone hoặc download project**
```bash
cd /Users/locnm/Downloads/Code/englishblog/english-learning-app
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy ứng dụng**
```bash
npm start
```

4. **Truy cập ứng dụng**
Mở trình duyệt và truy cập: `http://localhost:3000`

## Cách Sử Dụng

### Phiên Học Thường Ngày

1. **Xem Dashboard**
   - Kiểm tra tiến độ học tập của bạn
   - Xem bao nhiêu card cần ôn hôm nay

2. **Bắt Đầu Học**
   - Nhấn nút "Bắt Đầu Học Bây Giờ"
   - Lật thẻ để xem đáp án
   - Đánh giá mức độ hiểu biết

3. **Xem Kết Quả**
   - Sau khi hoàn thành, xem kết quả phiên học
   - Tỷ lệ thành công sẽ được hiển thị

### Thuật Toán Spaced Repetition (SM-2)

Thuật toán SM-2 hoạt động như sau:

**Lần đầu tiên:**
- Nếu trả lời đúng (quality ≥ 3): Lịch ôn tiếp theo là 1 ngày
- Nếu trả lời sai (quality < 3): Lịch ôn tiếp theo là lập tức

**Lần thứ hai:**
- Nếu trả lời đúng: Lịch ôn tiếp theo là 3 ngày
- Nếu trả lời sai: Reset về 1 ngày

**Lần thứ ba trở đi:**
- Lịch ôn = Lịch ôn trước × Ease Factor
- Ease Factor tự động điều chỉnh dựa trên hiệu suất

**Công Thức Điều Chỉnh Ease Factor:**
```
EF' = EF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
EF' = max(1.3, EF')  // Không thấp hơn 1.3
```

Điều này đảm bảo:
- Card dễ sẽ được ôn lâu lâu hơn
- Card khó sẽ được ôn thường xuyên hơn
- Tổng thời gian học được tối ưu hóa

## Cấu Trúc Project

```
english-learning-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js        # Thanh điều hướng
│   │   ├── Dashboard.js         # Bảng điều khiển
│   │   ├── FlashcardLearning.js # Phiên học
│   │   ├── Flashcard.js         # Thẻ ghi nhớ
│   │   └── ProgressChart.js     # Biểu đồ tiến độ
│   ├── styles/
│   │   ├── App.css
│   │   ├── Navigation.css
│   │   ├── Dashboard.css
│   │   ├── FlashcardLearning.css
│   │   ├── Flashcard.css
│   │   └── ProgressChart.css
│   ├── data/
│   │   └── flashcards_data.json # Dữ liệu flashcards
│   ├── App.js                   # Component chính
│   └── index.js                 # Entry point
├── package.json
└── README.md
```

## Dữ Liệu Flashcards

Dữ liệu được trích xuất từ 26 bài học tiếng Anh toàn diện bao gồm:

### Bài Học (Days)
- **Day 1-7**: Động từ To Be (khẳng định, phủ định, nghi vấn)
- **Day 8-9**: Thì hiện tại & Từ loại
- **Day 10-20**: Các thì tiếng Anh (hiện tại, quá khứ, tương lai)
- **Day 22-26**: Động từ khuyết thiếu, Liên từ, Câu điều kiện

### Nội Dung Mỗi Bài
- Từ vựng mới với định nghĩa
- Ngữ pháp chi tiết
- Ví dụ thực tế
- Hướng dẫn phát âm

## Lưu Trữ Dữ Liệu

- **LocalStorage**: Tiến độ học tập được lưu tự động trên máy của bạn
- **Không cần cloud**: Dữ liệu riêng tư của bạn
- **Đồng bộ tự động**: Khi bạn quay lại, tiến độ được khôi phục

## Mẹo Học Hiệu Quả

1. 🎯 **Học Đều Đặn**: Mỗi ngày 15-30 phút
2. ✅ **Trung Thực**: Đánh giá chính xác mức độ hiểu biết
3. 🔄 **Ôn Tập**: Không bỏ qua bất kỳ phiên ôn nào
4. 📝 **Ghi Chú**: Viết lại các card khó
5. 🎓 **Sử Dụng Trong Thực Tế**: Áp dụng từ vựng và ngữ pháp

## Công Nghệ Sử Dụng

- **React 18.2.0** - Frontend framework
- **CSS3** - Styling với hiệu ứng
- **LocalStorage API** - Lưu trữ dữ liệu
- **SM-2 Algorithm** - Spaced Repetition

## Tương Lai

Các tính năng sắp tới:
- 🔊 Phát âm từ vựng
- 📱 Mobile app native
- 🌍 Đăng nhập & đồng bộ cloud
- 🎮 Gamification (badges, streaks)
- 📊 Thống kê nâng cao
- 🤖 AI suggestions

## Liên Hệ & Hỗ Trợ

Nếu bạn gặp vấn đề hoặc có đề xuất, hãy:
- Kiểm tra console (F12) xem có lỗi nào
- Xóa localStorage nếu có vấn đề: `localStorage.clear()`

## License

Project này được tạo cho mục đích học tập.

---

**Happy Learning! 🎓**

Hãy kiên nhẫn và kiên trì. Với Spaced Repetition, bạn sẽ nắm vững tiếng Anh nhanh hơn bạn tưởng!
