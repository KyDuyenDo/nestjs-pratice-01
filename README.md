## Hướng dẫn cài đặt

1. Sao chép file `.env.example` thành `.env`:
   ```bash
   cp .env.example .env
   ```

2. Cài đặt các phụ thuộc cần thiết:
   ```bash
   npm install
   ```

3. Chạy ứng dụng:
   ```bash
   npm run start
   ```

4. Kiểm tra ứng dụng đang chạy tại `http://localhost:3000`

5. Sử dụng @nestjs/config để load biến môi trường từ file .env và có validate schema bằng joi
6. Tạo middleware dùng để thực hiện logger: 
   + log input gồm params, query, body headers
7. Tạo exception filter để bắt lỗi toàn cục và gôm về format chung:
   + statusCode
   + timestamp
   + error
   + message
8. Viết custom decorator để validate dto
