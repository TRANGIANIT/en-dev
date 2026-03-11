# 🧠 Hệ Thống Spaced Repetition (SRS) - Hướng Dẫn Chi Tiết

## Spaced Repetition là gì?

**Spaced Repetition** (Ôn tập cách quãng) là một kỹ thuật học tập dựa trên khoa học thần kinh, giúp bạn ghi nhớ thông tin lâu dài nhất và hiệu quả nhất.

### Nguyên Tắc Cơ Bản

Bộ não của bạn có "đường cong quên lãng":
- Sau 1 giờ: Bạn quên ~50% thông tin
- Sau 1 ngày: Bạn quên ~70% thông tin
- Sau 1 tuần: Bạn quên ~80-90% thông tin

Nhưng nếu bạn **ôn tập trước khi quên hoàn toàn**, bạn có thể duy trì 100% ghi nhớ!

## SM-2 Algorithm - Thuật Toán Được Sử Dụng

Ứng dụng sử dụng **SM-2 (SuperMemo 2)** - thuật toán được phát triển bởi Piotr Wozniak, được chứng minh hiệu quả trong hơn 30 năm.

### Các Thông Số Chính

1. **Interval (Khoảng ôn tập)**
   - Số ngày cho đến lần ôn tập tiếp theo
   - Bắt đầu: 1 ngày
   - Tăng theo: Ease Factor × Interval trước

2. **Ease Factor (Hệ số dễ nhớ)**
   - Con số đại diện cho độ khó của card
   - Mặc định: 2.5
   - Cao hơn = Card dễ nhớ = Ôn lâu lâu hơn
   - Thấp hơn = Card khó nhớ = Ôn thường xuyên hơn

3. **Repetitions (Số lần ôn)**
   - Số lần bạn đã ôn tập card này

### Công Thức Tính Toán

**Step 1: Tính Ease Factor Mới**
```
EF' = EF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
EF' = max(1.3, EF')
```

Trong đó `quality` là điểm bạn cho card (0-5):
- 0-2: Sai hoàn toàn
- 3: Bình thường (nhớ vừa vừa)
- 4: Tốt (nhớ rõ)
- 5: Hoàn hảo (rất chắc chắn)

**Step 2: Tính Interval Mới**

Lần 1:
```
interval = 1 day
```

Lần 2:
```
interval = 3 days
```

Lần 3+:
```
interval = previous_interval * EF
```

**Step 3: Reset Nếu Sai**
```
Nếu quality < 3:
  - repetitions = 0
  - interval = 1 day
  - Để card được ôn lại sớm
```

## Ví Dụ Thực Tế

### Tình Huống: Học Từ "Beautiful" (Đẹp)

**Ngày 1: Lần ôn tập đầu tiên**
- Bạn trả lời: 😊 Tốt (quality = 4)
- EF' = 2.5 + (0.1 - 1 * 0.12) = 2.48
- Interval = 1 ngày
- **Lần ôn tiếp theo: Ngày 2**

**Ngày 2: Lần ôn tập thứ hai**
- Bạn trả lời: 🤩 Hoàn hảo (quality = 5)
- EF' = 2.48 + (0.1 - 0 * 0.1) = 2.58
- Interval = 3 ngày
- **Lần ôn tiếp theo: Ngày 5**

**Ngày 5: Lần ôn tập thứ ba**
- Bạn trả lời: 😐 Bình thường (quality = 3)
- EF' = 2.58 + (0.1 - 2 * 0.18) = 2.14
- Interval = 3 * 2.14 ≈ 6.4 ≈ 6 ngày
- **Lần ôn tiếp theo: Ngày 11**

**Ngày 11: Lần ôn tập thứ tư**
- Bạn trả lời: 😞 Sai (quality = 2)
- EF' = 2.14 + (0.1 - 3 * 0.26) = 0.98 → 1.3 (minimum)
- Interval = 1 ngày (RESET)
- **Lần ôn tiếp theo: Ngày 12 (lập tức)**

**Ngày 12: Lần ôn tập thứ năm**
- Bạn trả lời: 🤩 Hoàn hảo (quality = 5)
- EF' = 1.3 + (0.1 - 0 * 0.1) = 1.4
- Interval = 1 * 1.4 = 1.4 ≈ 1 ngày
- **Lần ôn tiếp theo: Ngày 13**

Và quá trình tiếp tục...

## Lợi Ích của SRS

### 1. **Học Nhanh Hơn** ⚡
- Tập trung vào card khó nhớ
- Không lãng phí thời gian vào card dễ

### 2. **Nhớ Lâu Hơn** 📚
- Ôn tập tại thời điểm tối ưu
- Giúp chuyển từ bộ nhớ tạm sang bộ nhớ dài hạn

### 3. **Tiết Kiệm Thời Gian** ⏱️
- Học 30 phút/ngày = Học tất cả
- Không cần học lại từ đầu

### 4. **Khoa Học** 🧬
- Dựa trên nghiên cứu tâm lý học
- Được chứng minh trong thực tế hơn 30 năm

## Cách Sử Dụng Hiệu Quả

### 1. **Đánh Giá Chính Xác** 🎯
```
😞 Sai = Không nhớ hoàn toàn (quality 2)
😐 Bình Thường = Nhớ vừa vừa, chưa rõ (quality 3)
😊 Tốt = Nhớ rõ nhưng chậm (quality 4)
🤩 Hoàn Hảo = Rất chắc chắn, nhanh (quality 5)
```

Hãy **trung thực**! Khi bạn chọn "tốt" nhưng thực tế chỉ nhớ vừa vừa, hệ thống sẽ không ôn tập lại đủ.

### 2. **Học Thường Xuyên** 📅
Không nên:
- ❌ Học cả tuần rồi ngừng 3 tuần
- ❌ Học 10 giờ một lúc

Nên:
- ✅ Học 20 phút mỗi ngày
- ✅ Ôn tập vào cùng một giờ

### 3. **Không Bỏ Qua Phiên Ôn** 🔄
- Mỗi lần bỏ qua phiên ôn tập, bạn phải học lại từ đầu
- Hệ thống sẽ cộng gộp các card chờ ôn
- Tiếp theo sẽ khó hơn

### 4. **Tạo Flashcard Tốt** ✨
- **Mặt trước**: Một câu hỏi cụ thể (không quá dài)
- **Mặt sau**: Một câu trả lời rõ ràng
- **Ví dụ**: Giúp bạn nhớ cách sử dụng

### 5. **Điều Chỉnh Nếu Cần** 🔧
Nếu dùng lâu, bạn sẽ phát hiện:
- Một số card quá khó (Ease Factor thấp)
- Một số card quá dễ (Ease Factor cao)
- Điều này là bình thường!

## So Sánh Các Phương Pháp Học

| Phương Pháp | Nhớ Sau 1 Tháng | Nhớ Sau 6 Tháng | Thời Gian |
|---|---|---|---|
| Học 1 lần | 30% | 5% | 2 giờ |
| Học lặp lại 3 lần | 60% | 25% | 4 giờ |
| Spaced Repetition | 85% | 75% | 3 giờ |

## Công Thức Toán Học (Chi Tiết)

Nếu bạn muốn hiểu sâu hơn:

### Ease Factor Adjustment
```
ΔEF = 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)
```

Khi q = 5 (hoàn hảo):
```
ΔEF = 0.1 - 0 * (0.08) = 0.1
EF' = EF + 0.1
```

Khi q = 3 (bình thường):
```
ΔEF = 0.1 - 2 * (0.08 + 2 * 0.02) = 0.1 - 2 * 0.12 = -0.14
EF' = EF - 0.14
```

Khi q = 0 (sai):
```
ΔEF = 0.1 - 5 * (0.08 + 5 * 0.02) = 0.1 - 5 * 0.18 = -0.8
EF' = max(1.3, EF - 0.8)  # Không thấp hơn 1.3
```

## Tài Liệu Tham Khảo

- 📚 [SuperMemo: Incremental Learning](https://www.supermemo.com/)
- 📖 [Spaced Repetition - Wikipedia](https://en.wikipedia.org/wiki/Spaced_repetition)
- 🔬 [Forgetting Curve - Hermann Ebbinghaus](https://en.wikipedia.org/wiki/Forgetting_curve)

---

**Hãy bắt đầu học hôm nay! Spaced Repetition sẽ giúp bạn thành thạo tiếng Anh nhanh chóng.** 🚀
