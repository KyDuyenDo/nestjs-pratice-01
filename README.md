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
   + log input gồm params, query, body header

7. Tạo exception filter để bắt lỗi toàn cục và gôm về format chung:
    response: {
        statusCode: number
        timestamp: string 
        error: string 
        message: string | string[]
    }

    test: 
    - Gửi request với dữ liệu không hợp lệ để kiểm tra xem exception filter có hoạt động đúng không.
    - Trong code server, ném một exception tùy chỉnh và kiểm tra xem exception filter có bắt được không. 

8. Viết custom decorator để validate dto
   Tạo custom validator decorator sử dụng class-validator để validate dto.
    - Kiểm tra dto gửi lên có phải cấu trúc userId hay không: cấu trúc theo regex bắt đầu bằng "user_" và theo sau là chuỗi ký tự chữ số. chiều dài tối đa 15 ký tự.

    test: 
    - Gửi request với dto không hợp lệ để kiểm tra xem custom validator có hoạt động đúng không.
    - Gửi request với dto hợp lệ để kiểm tra xem custom validator có cho phép qua không.