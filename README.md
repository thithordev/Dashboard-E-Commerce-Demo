# Dự Án Dashboard  - Vue.js

## 1. Giới thiệu
Dự án này nhằm mục đích xây dựng một dashboard để hiển thị thông tin bán hàng của Tập đoàn A. Mục tiêu là thể hiện khả năng phát triển front-end với Vue.js thông qua việc xây dựng một giao diện người dùng có tính tương tác và phản hồi nhanh, có thể mở rộng trong tương lai.

# 2. Phạm vi dự án
- **Thời gian thực hiện**: 4 ngày (28/08 đến 03/09) -- tru nghi le 2/9
- **Công nghệ sử dụng**:
  - Vue.js (framework cho front-end)
  - chart.js
  - tailwindcss
  - json-server ( a fake REST API)
  - HTML, CSS và JavaScript
- **Mục đích**: Xây dựng một dashboard cung cấp thông tin bán hàng bao gồm biểu đồ tương tác, và layout thân thiện với người dùng.

## 3. Kế hoạch & Phương pháp tiếp cận

### Bước 1: Phác thảo ý tưởng Dashboard
- **Mục tiêu**: Trước khi bắt đầu mã hóa, tạo ra bản phác thảo ý tưởng bao gồm bố cục tổng thể, các thành phần giao diện chính, và chức năng của từng phần.
- **Công cụ phác thảo**:
  - Sử dụng Figma (để tạo mockup kỹ thuật số).
- **Các phần chính**:
  - **Header**: Hiển thị tên công ty và các tùy chọn điều hướng như thanh tìm kiếm, username, logout.
  - **Sidebar**: Chứa các liên kết điều hướng đến các phần khác của dashboard (ví dụ: dashboard, logout, profile ...).
  - **Main Content**: Hiển thị các chỉ số chính như tổng doanh số, đơn hàng, người dùng, sản phẩm, và biểu đồ tương tác.
  - **Footer**: Thông tin thêm hoặc các liên kết khác.

### Bước 2: Xây dựng giao diện Dashboard
- **Phát triển**:
  - Sử dụng Vue.js cho kiến trúc thành phần (component-based).
  - Đảm bảo giao diện responsive, hoạt động tốt trên cả desktop và thiết bị di động.
  
### Bước 3: Các tính năng & Nâng cấp
- **Tính năng chính**:
  - Biểu đồ tương tác hiển thị dữ liệu theo thời gian.
  - Phần tóm tắt các thông tin nhanh (ví dụ: khoản thu gần nhất, người dùng đăng ký mới, những vấn đề khác).
  - Bảng dữ liệu về người dùng
- **Tính năng nâng cao (nếu có thời gian)**:
  - Cập nhật dữ liệu bán hàng theo thời gian thực.
  - Hệ thống quản lý người dùng.

### Bước 4: Triển khai
- **Hosting**:
  - Sử dụng GitHub Pages để triển khai ứng dụng.
  - Sử dụng json-server làm fake REST API
  - Deploy json-server qua codesandbox.
  - Cung cấp link demo trực tiếp.
- **Nộp bài**:
  - Kèm theo bản phác thảo ý tưởng ban đầu khi gửi bài.
  - Nộp bài trước thời hạn ngày 04/09.

## 4. Thử thách & Giải pháp
- **Thiết kế responsive**: Sử dụng hệ thống lưới (Grid) và (flex) để đảm bảo trải nghiệm mượt mà trên mọi thiết bị.
- **Xử lý dữ liệu**: Áp dụng quản lý trạng thái trong Vue.js để xử lý dữ liệu động một cách hiệu quả.

## 5. Kết luận
Dự án này thể hiện kỹ năng phát triển front-end với Vue.js, cùng với khả năng lập kế hoạch, thiết kế và triển khai một dashboard hoàn chỉnh, thân thiện với người dùng. Khả năng mở rộng và nâng cấp cũng đã được tích hợp trong thiết kế để chuẩn bị cho các tính năng tương lai.


## 6. Sản phẩm
- **Figma link draft design**: [www.figma.com/draft-design](https://www.figma.com/design/2q8NUAAa2m7vnhD8Lw41Dj/draft-design?m=auto&t=iJF09qBj5VdcRqET-1)
- **Github page link demo websites:**: https://thithordev.github.io/Dashboard-E-Commerce-Demo/

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
