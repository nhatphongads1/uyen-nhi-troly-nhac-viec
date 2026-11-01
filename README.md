# Uyển Nhi — Trợ lý nhắc việc

Dự án app thứ 2 của Phong (sau game quiz trắc nghiệm). Người phụ trách: Tuấn Kiệt.

## Tính năng (v2, 01/11/2026 — theo yêu cầu của Phong)
- Thêm việc cần nhắc: tên việc, ngày giờ, lặp lại (một lần / mỗi ngày / mỗi tuần), ghi chú
- **Quy tắc nhắc 3 tầng:**
  1. 📅 Nhắc 1 lần lúc 20:00 tối hôm trước ("Ngày mai bạn có...")
  2. ⏰ Nhắc 30 phút trước giờ
  3. 🔔 Đến giờ: nhắc dồn dập mỗi 3 phút bằng **giọng nói + tin nhắn**, đến khi bấm **"Đã nhớ ✓"** mới dừng
- Banner đỏ nhấp nháy trong app khi có việc đến giờ chưa xác nhận
- Danh sách việc: sắp xếp theo giờ, tick hoàn thành, xóa, badge quá hạn
- Thống kê: việc hôm nay / chưa xong / đã xong
- Lưu trên máy (localStorage), riêng tư, chạy offline (PWA)
- Lưu ý: app phải mở (tab trình duyệt) thì mới nhắc được — web app thuần không gửi được thông báo khi đóng hẳn

## Chạy thử
Mở `index.html` trên điện thoại hoặc máy tính. Cho phép thông báo khi được hỏi.

## Deploy
Chưa deploy. Khi Phong chốt tên repo GitHub → upload 4 file (index.html, manifest.json, sw.js, avatar.png) → bật GitHub Pages như game quiz.

## File
- index.html — toàn bộ app (1 file)
- manifest.json, sw.js — PWA
- avatar.png — avatar Uyển Nhi
