ần mềm POS đơn thuần; nó là một giải pháp quản trị toàn diện được thiết kế để xóa bỏ sự đứt gãy thông tin giữa các bộ phận vận hành và các nền tảng bán hàng trực tuyến.

🌟 Giá Trị Độc Bản (USP)
Khác với các phần mềm quản lý thông thường, OmniRest đóng vai trò là một "trạm trung chuyển dữ liệu" thông minh:

Đồng bộ đa kênh 2 chiều: Tự động ẩn món trên Grab/Shopee khi hết hàng, giảm tỷ lệ hủy đơn xuống 0%.

Quản trị "Linh hồn" lợi nhuận: Tự động trừ kho theo định mức (BOM) và cảnh báo hao hụt thực tế.

Vận hành không chạm: Số hóa hoàn toàn luồng dữ liệu từ Order -> Bếp -> Thu ngân.

🏗️ Kiến Trúc Giải Pháp (Tech Stack)
Hệ thống được xây dựng trên nền tảng công nghệ mạnh mẽ, đảm bảo tính chính xác tuyệt đối trong xử lý giao dịch:

Backend: Java Spring Boot 3.4.1 – Đảm bảo tính ổn định cho logic trừ kho phức tạp và giao dịch tài chính.

Frontend: React.js – Web Admin/Web App mượt mà cho điều phối và báo cáo.

Mobile: React Native – Ứng dụng di động linh hoạt cho nhân viên phục vụ, hỗ trợ can thiệp phần cứng (máy in/POS).

Real-time: WebSocket (STOMP) – Kết nối tức thời giữa các bộ phận, đảm bảo thông tin không có độ trễ.

🛠️ Các Trụ Cột Tính Năng Chính

1. Seamless Operation (Vận hành không chạm)
   Số hóa luồng đơn hàng từ POS tại quán và các App giao hàng (Grab/Shopee) về một màn hình điều phối duy nhất.

2. Inventory & BOM Management
   Quản lý định mức nguyên liệu (Bill of Materials). Tự động đối soát hao hụt lý thuyết và thực tế, cảnh báo khi tồn kho thấp.

3. Loss Prevention (Chống thất thoát)
   Kiểm soát chặt chẽ hành vi hủy món, giảm giá thông qua Audit Log (Nhật ký hệ thống) và phân quyền (RBAC).

4. Light CRM
   Tích hợp Zalo/Facebook để chăm sóc khách hàng tự động và tích điểm thành viên mà không cần cài đặt app trung gian.

📈 Tầm Nhìn Phát Triển
Hướng tới trở thành một nền tảng phân tích dữ liệu lớn (Big Data), giúp chủ doanh nghiệp đưa ra các quyết định thay đổi thực đơn và chiến lược kinh doanh dựa trên hành vi thực tế của khách hàng.
