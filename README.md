# Dự Án Dashboard Bán Hàng - Vue.js & Ant Design

## 1. Giới thiệu
Dự án này nhằm mục đích xây dựng một dashboard để hiển thị thông tin bán hàng của Tập đoàn A. Mục tiêu là thể hiện khả năng phát triển front-end với Vue.js và Ant Design thông qua việc xây dựng một giao diện người dùng có tính tương tác và phản hồi nhanh, có thể mở rộng trong tương lai.

## 2. Phạm vi dự án
- **Thời gian thực hiện**: 4 ngày (28/08 đến 03/09)
- **Công nghệ sử dụng**:
  - Vue.js (framework cho front-end)
  - Ant Design (thư viện UI cho Vue.js)
  - HTML, CSS và JavaScript
- **Mục đích**: Xây dựng một dashboard cung cấp thông tin bán hàng bao gồm cập nhật theo thời gian thực, biểu đồ tương tác, và layout thân thiện với người dùng.

## 3. Kế hoạch & Phương pháp tiếp cận

### Bước 1: Phác thảo ý tưởng Dashboard
- **Mục tiêu**: Trước khi bắt đầu mã hóa, tạo ra bản phác thảo ý tưởng bao gồm bố cục tổng thể, các thành phần giao diện chính, và chức năng của từng phần.
- **Công cụ phác thảo**:
  - Sử dụng Figma hoặc Adobe XD (để tạo mockup kỹ thuật số).
  - Hoặc có thể vẽ tay bản phác thảo.
- **Các phần chính**:
  - **Header**: Hiển thị tên công ty và các tùy chọn điều hướng.
  - **Sidebar**: Chứa các liên kết điều hướng đến các phần khác của dashboard (ví dụ: Báo cáo, Cài đặt).
  - **Main Content**: Hiển thị các chỉ số chính như tổng doanh số, tăng trưởng doanh thu, và biểu đồ tương tác.
  - **Footer**: Thông tin thêm hoặc các liên kết khác.

### Bước 2: Xây dựng giao diện Dashboard
- **Phát triển**:
  - Sử dụng Vue.js cho kiến trúc thành phần (component-based).
  - Dùng Ant Design Vue để tận dụng các thành phần UI có sẵn (biểu đồ, bảng, form).
  - Đảm bảo giao diện responsive, hoạt động tốt trên cả desktop và thiết bị di động.
  
### Bước 3: Các tính năng & Nâng cấp
- **Tính năng chính**:
  - Biểu đồ tương tác hiển thị dữ liệu bán hàng theo thời gian.
  - Phần tóm tắt doanh số hiển thị các chỉ số KPIs (ví dụ: tổng doanh thu, số lượng bán ra).
  - Bộ lọc để xem dữ liệu theo khu vực, thời gian hoặc sản phẩm.
- **Tính năng nâng cao (nếu có thời gian)**:
  - Cập nhật dữ liệu bán hàng theo thời gian thực.
  - Hệ thống quản lý người dùng.
  - Dashboard tùy chỉnh (ví dụ: kéo thả các widget).

### Bước 4: Triển khai
- **Hosting**:
  - Sử dụng GitHub Pages hoặc Netlify để triển khai ứng dụng.
  - Cung cấp link demo trực tiếp.
- **Nộp bài**:
  - Kèm theo bản phác thảo ý tưởng ban đầu khi gửi bài.
  - Nộp bài trước thời hạn ngày 04/09.

## 4. Thử thách & Giải pháp
- **Thiết kế responsive**: Sử dụng hệ thống lưới (Grid) của Ant Design để đảm bảo trải nghiệm mượt mà trên mọi thiết bị.
- **Xử lý dữ liệu**: Áp dụng quản lý trạng thái trong Vue.js để xử lý dữ liệu động một cách hiệu quả.

## 5. Kết luận
Dự án này thể hiện kỹ năng phát triển front-end với Vue.js và Ant Design, cùng với khả năng lập kế hoạch, thiết kế và triển khai một dashboard hoàn chỉnh, thân thiện với người dùng. Khả năng mở rộng và nâng cấp cũng đã được tích hợp trong thiết kế để chuẩn bị cho các tính năng tương lai.

## 6. Cách chạy dự án
1. Clone repository:
   ```bash
   git clone <url_repo>
