1. Sử dụng @nestjs/config để load biến môi trường từ file .env và có validate schema bằng joi
2. Tạo middleware dùng để thực hiện logger: 
  + log input gồm params, query, body headers
3. Tạo exception filter để bắt lỗi toàn cục và gôm về format chung:
  + statusCode
  + timestamp
  + error
  + message
4. Viết custom decorator để validate dto
