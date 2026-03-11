# 📊 Dữ Liệu Flashcards - Hướng Dẫn Chi Tiết

## Tổng Quan

Dữ liệu flashcards được trích xuất từ **26 bài học tiếng Anh toàn diện** cấp tốc mục tiêu TOEIC 550-700+. 

**Tổng số flashcards**: 410+
- Từ vựng: ~250 flashcards
- Ngữ pháp: ~160 flashcards

## Cấu Trúc Dữ Liệu

### File: `src/data/flashcards_data.json`

```json
[
  {
    "id": "1_vocab_0",
    "type": "vocabulary",
    "front": "I (tôi)",
    "back": "Ngôi thứ nhất số ít - chỉ bản thân mình",
    "example": "I am a teacher",
    "day": "1",
    "day_title": "Day 1_Thể khẳng định và phủ định của động từ to be",
    "interval": 1,
    "easeFactor": 2.5,
    "nextReview": 0,
    "repetitions": 0,
    "lastReview": 0
  },
  {
    "id": "1_grammar_0",
    "type": "grammar",
    "front": "Cấu trúc to be affirmative",
    "back": "Subject + am/is/are + ...",
    "example": "I am a student",
    "day": "1",
    "day_title": "Day 1_Thể khẳng định và phủ định của động từ to be",
    "interval": 1,
    "easeFactor": 2.5,
    "nextReview": 0,
    "repetitions": 0,
    "lastReview": 0
  }
]
```

### Giải Thích Các Field

| Field | Kiểu | Mô Tả |
|-------|------|-------|
| `id` | string | ID duy nhất của flashcard: `{day}_{type}_{index}` |
| `type` | string | Loại: "vocabulary" hoặc "grammar" |
| `front` | string | Mặt trước của flashcard (câu hỏi) |
| `back` | string | Mặt sau của flashcard (đáp án) |
| `example` | string | Ví dụ sử dụng (có thể rỗng) |
| `day` | string | Bài học số mấy (1-26) |
| `day_title` | string | Tên đầy đủ của bài học |
| `interval` | number | Khoảng ôn tập (số ngày) - Mặc định 1 |
| `easeFactor` | number | Hệ số dễ nhớ - Mặc định 2.5 |
| `nextReview` | number | Timestamp của lần ôn tiếp theo |
| `repetitions` | number | Số lần đã ôn tập - Mặc định 0 |
| `lastReview` | number | Timestamp của lần ôn cuối cùng |

## Các Bài Học (Days)

### Unit 1: Động Từ To Be (Days 1-7)

#### Day 1: Thể Khẳng Định Và Phủ Định
- Các ngôi: I, you, we, they, she, he, it
- Tính từ sở hữu: my, your, our, their, her, his, its
- Động từ to be: am, is, are
- Cấu trúc: S + am/is/are + ...

**Flashcards**: 
- 8 từ vựng (các ngôi, tính từ sở hữu, đặc biệt)
- 2 quy tắc ngữ pháp

#### Day 2: Thể Nghi Vấn
- Câu hỏi với to be: Am/Is/Are + S + ...?
- Trả lời: Yes, S + am/is/are / No, S + am/is/are not

**Flashcards**:
- Quy tắc cấu tạo câu hỏi
- Ví dụ thực tế

#### Day 3-4: Câu Hỏi Với Từ Để Hỏi
- Who (ai)
- What (cái gì)
- Where (ở đâu)
- When (khi nào)

**Flashcards**: Từ vựng + Ví dụ câu hỏi cho mỗi từ

### Unit 2: Động Từ Thường (Days 5-7)

- Cấu trúc khẳng định: S + V + ...
- Cấu trúc phủ định: S + do/does + not + V + ...
- Cấu trúc nghi vấn: Do/Does + S + V + ...?

### Unit 3: Các Thì (Days 8-20)

#### Simple Tenses
- **Present Simple** (Days 8-9): Diễn tả sự thật chung, thói quen
- **Past Simple** (Days 12-13): Diễn tả sự việc đã xảy ra
- **Future Simple** (Days 16): Diễn tả dự định, dự báo

#### Continuous Tenses
- **Present Continuous** (Day 10): Đang xảy ra
- **Past Continuous** (Day 14): Đang xảy ra trong quá khứ

#### Perfect Tenses
- **Present Perfect** (Day 15): Bắt đầu từ quá khứ đến hiện tại
- **Future Perfect** (Day 17): Sẽ hoàn thành trước một thời điểm tương lai

#### Comparative
- **Phân biệt Simple vs Continuous** (Day 11)

### Unit 4: Âm Trang & Từ Vựng (Days 18-20)

- **Day 18**: Phát âm tiếng Anh
- **Day 19-20**: Trọng âm trong tiếng Anh
- **Day 20**: Câu hỏi với từ để hỏi khác

### Unit 5: Động Từ Khuyết & Liên Từ (Days 22-25)

#### Day 22: Động Từ Khuyết Thiếu
- can/could, will/would, shall/should, may/might, must, should
- Ví dụ: "I can speak English"

#### Days 23-25: Liên Từ
- **Day 23**: and, but, or, so, because
- **Day 24**: Liên từ chỉ thời gian (before, after, when, while)
- **Day 25**: Liên từ chỉ sự đối lập (although, though, whereas)

### Unit 6: Câu Điều Kiện (Days 26)

- **Conditional Type 1**: Điều kiện có thể xảy ra ở tương lai
  - If + S + V (present) + S + will + V (infinitive)
  - Ví dụ: If you study hard, you will pass the exam

- **Conditional Type 2**: Điều kiện không có thực ở hiện tại
  - If + S + V (past) + S + would + V (infinitive)
  - Ví dụ: If I were rich, I would travel around the world

## Cách Sử Dụng Dữ Liệu

### 1. Load Trong React

```javascript
import flashcardsData from './data/flashcards_data.json';

function App() {
  const [flashcards] = useState(flashcardsData);
  // Sử dụng flashcards
}
```

### 2. Chỉnh Sửa Flashcard

Mở `src/data/flashcards_data.json` và chỉnh sửa:

```json
{
  "id": "1_vocab_0",
  "front": "I (tôi)",
  "back": "Ngôi thứ nhất số ít",
  "example": "I am a teacher" // Thêm ví dụ
}
```

### 3. Thêm Flashcard Mới

```json
{
  "id": "custom_1",
  "type": "vocabulary",
  "front": "Từ vựng của tôi",
  "back": "Định nghĩa của tôi",
  "example": "Ví dụ của tôi",
  "day": "27",
  "day_title": "My Custom Day",
  "interval": 1,
  "easeFactor": 2.5,
  "nextReview": 0,
  "repetitions": 0,
  "lastReview": 0
}
```

### 4. Xuất Dữ Liệu (Backup)

```javascript
// Mở DevTools (F12), Console
const data = JSON.stringify(localStorage);
console.log(data);
// Copy output ra file
```

### 5. Nhập Dữ Liệu (Restore)

```javascript
// DevTools Console
localStorage.setItem('userProgress', JSON.stringify({...}));
```

## Thống Kê Dữ Liệu

### Phân Bố Theo Loại

| Loại | Số Lượng | Tỷ Lệ |
|------|----------|-------|
| Từ Vựng | ~250 | ~61% |
| Ngữ Pháp | ~160 | ~39% |
| **Tổng** | **410+** | **100%** |

### Phân Bố Theo Bài Học

| Bài Học | Nội Dung | Số Card |
|---------|---------|---------|
| 1-7 | Động từ To Be | ~60 |
| 8-11 | Present & Present Continuous | ~40 |
| 12-15 | Past Simple & Past Continuous & Present Perfect | ~50 |
| 16-17 | Future Tenses | ~30 |
| 18-20 | Âm & Từ Để Hỏi | ~40 |
| 22-25 | Động Từ Khuyết & Liên Từ | ~80 |
| 26 | Câu Điều Kiện | ~20 |

## Cấu Trúc Flashcard Tốt

### ✅ Flashcard Tốt

**Front**: What is the present simple form of "go"?
**Back**: The present simple form is "go" (I/you/we/they go, he/she/it goes)
**Example**: I go to school every day.

### ❌ Flashcard Tệ

**Front**: Present simple
**Back**: A lot of stuff about present simple...

## Mẹo Học Hiệu Quả Với Dữ Liệu Này

1. **Theo Thứ Tự**: Học từ Day 1 đến Day 26
2. **Nắm Vững From Đơn Trước**: Đặc biệt To Be (Day 1-7) là nền tảng
3. **Lặp Lại**: Đừng bỏ qua bất kỳ phiên ôn nào
4. **Sử Dụng Ví Dụ**: Đọc ví dụ kỹ lưỡng
5. **Ghi Chú**: Thêm ví dụ của riêng bạn vào dữ liệu

## Cập Nhật Dữ Liệu

### Regenerate Từ PDF

Nếu bạn muốn regenerate dữ liệu từ PDF gốc:

```bash
python3 extract_data.py
```

File sẽ được tạo tại:
```
/Users/locnm/Downloads/Code/englishblog/flashcards_data.json
```

---

**Dữ liệu này được cách soạn bởi cô Vũ Thị Mai Phương - giáo viên tiếng Anh chuyên nghiệp.**

Happy Learning! 🎓
