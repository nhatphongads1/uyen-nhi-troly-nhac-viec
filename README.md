# Uyển Nhi — Trợ lý nhắc việc

Dự án app thứ 2 của Phong (sau game quiz trắc nghiệm). Người phụ trách: Tuấn Kiệt.

## Tính năng (v4, 01/11/2026 — giọng Uyển Nhi thật)
- **Giọng Uyển Nhi thật** (thu sẵn, tiếng Việt): gọi "ông chủ", nhắc việc — tên việc đọc bằng giọng máy; bản EN/中文 dùng giọng máy
- **Giao diện kiểu app Trung Quốc** (học từ WeChat/Alipay/TickTick + mẫu "AI LÀM TRỢ LÝ RIÊNG" của Phong): đỏ may mắn #D21F2B + đen + trắng, chữ to đậm, nút đỏ full-width, badge đỏ
- **3 ngôn ngữ: Tiếng Việt / English / 中文** — nút chuyển VI·EN·中文, lưu lựa chọn; giọng đọc + ngày giờ theo ngôn ngữ
- **Responsive:** điện thoại 1 cột; máy tính (≥960px) 2 cột
- **Quy tắc nhắc 3 tầng:** 20:00 tối hôm trước → 30 phút trước giờ → dồn dập mỗi 3 phút bằng giọng nói + tin nhắn đến khi bấm "Đã nhớ ✓"
- Lặp lại ngày/tuần, badge quá hạn đỏ, lưu localStorage, PWA offline (kèm file giọng đọc)

## Chạy thử
Mở `index.html` trên điện thoại hoặc máy tính. Cho phép thông báo khi được hỏi.

## Deploy
Chưa deploy. Khi Phong chốt tên repo GitHub → upload 4 file (index.html, manifest.json, sw.js, avatar.png) → bật GitHub Pages như game quiz.

## File
- index.html — toàn bộ app (1 file)
- manifest.json, sw.js — PWA
- avatar.png — avatar Uyển Nhi
