export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Mercedes-Benz C300",
    price: 1890000000,
    description: "Sedan hạng sang với thiết kế hiện đại và động cơ mạnh mẽ.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfT7_OQFXxZf87XvdQPS0CK0El8B9_vt7Zu82vHVwJpIBiEi5rbE36-sef&s=10",
    category: "Sedan",
  },
  {
    id: 2,
    name: "BMW X5",
    price: 4250000000,
    description: "SUV cao cấp, không gian rộng rãi, công nghệ tiên tiến.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VBOs1Lu-r1Mru21cKzeFhOLQd_R0CoQ-C_de_NZV6A&s=10",
    category: "SUV",
  },
  {
    id: 3,
    name: "Toyota Camry",
    price: 1350000000,
    description: "Mẫu sedan bền bỉ, tiết kiệm nhiên liệu.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7RIB6RdDJIdlzsoGm_CuY04uODpAnFXwR8eW6y0LukA&s=10",
    category: "Sedan",
  },
  {
    id: 4,
    name: "Ford Ranger Wildtrak",
    price: 980000000,
    description: "Xe bán tải mạnh mẽ, phù hợp mọi địa hình.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRdOHqe-VspP8WlRIjdJozS_4Tdb4R7VRweUImX7rzQ&s=10",
    category: "Bán tải",
  },
  {
    id: 5,
    name: "Porsche 911",
    price: 7800000000,
    description: "Xe thể thao sang trọng với hiệu suất vượt trội.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqbjnnLJNp6LFrEqWZDA1Bggo7keJdOKO5kYUWgyrJw&s=10",
    category: "Thể thao",
  },
  {
    id: 6,
    name: "VinFast VF8",
    price: 1129000000,
    description: "SUV điện thông minh do Việt Nam sản xuất.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8c973m7tCmzRe-2CWb8PrjXowma847aqhW4ckzpHguA&s=10",
    category: "Xe điện",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 mẫu xe đáng mua nhất năm 2026",
    slug: "5-mau-xe-dang-mua-2026",
    excerpt:
      "Tổng hợp những mẫu xe được đánh giá cao về thiết kế và công nghệ.",
    content:
      "Năm 2026 đánh dấu sự bùng nổ của các dòng xe điện và xe hybrid. Các thương hiệu như Mercedes, BMW, VinFast và Toyota liên tục giới thiệu nhiều mẫu xe mới với nhiều tính năng hiện đại.",
    author: "Lương Đức Quý",
    date: "2026-07-20",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVRkk3uYQpES5QxEjSbBjsalqFbr0yDY77V46cHYBSA&s=10",
  },
  {
    id: 2,
    title: "Kinh nghiệm chọn mua ô tô cho gia đình",
    slug: "kinh-nghiem-chon-xe-gia-dinh",
    excerpt: "Những tiêu chí quan trọng khi chọn mua xe gia đình.",
    content:
      "Khi lựa chọn xe gia đình, bạn nên ưu tiên các yếu tố như độ an toàn, mức tiêu hao nhiên liệu, không gian nội thất và chi phí bảo dưỡng.",
    author: "Nguyễn Minh Anh",
    date: "2026-07-18",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YJoaMWqrI9iDbqEyvvO84T-UXP43v80zHXa8hgv35w&s=10",
  },
  {
    id: 3,
    title: "Xu hướng xe điện trong tương lai",
    slug: "xu-huong-xe-dien",
    excerpt: "Xe điện đang thay đổi ngành công nghiệp ô tô như thế nào?",
    content:
      "Xe điện ngày càng phổ biến nhờ khả năng tiết kiệm chi phí vận hành, thân thiện với môi trường và được trang bị nhiều công nghệ thông minh.",
    author: "Trần Hoàng Nam",
    date: "2026-07-15",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36mlcAyC33khEgXuq8EsQma17UZEsag-5aLgi8Q7zhg&s=10",
  },
];

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Mercedes-Benz ra mắt C-Class phiên bản mới",
    content:
      "Phiên bản mới được nâng cấp động cơ, hệ thống giải trí MBUX và nhiều công nghệ hỗ trợ lái tiên tiến.",
    date: "2026-07-22",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfT7_OQFXxZf87XvdQPS0CK0El8B9_vt7Zu82vHVwJpIBiEi5rbE36-sef&s=10",
    category: "Xe mới",
  },
  {
    id: 2,
    title: "VinFast công bố chính sách ưu đãi mới",
    content:
      "Khách hàng mua xe điện VinFast trong tháng này sẽ được hỗ trợ sạc miễn phí và giảm giá đặc biệt.",
    date: "2026-07-21",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8c973m7tCmzRe-2CWb8PrjXowma847aqhW4ckzpHguA&s=10",
    category: "Khuyến mãi",
  },
  {
    id: 3,
    title: "BMW giới thiệu công nghệ tự lái thế hệ mới",
    content:
      "Hệ thống hỗ trợ lái thông minh mới giúp tăng độ an toàn và mang lại trải nghiệm lái xe hiện đại hơn.",
    date: "2026-07-19",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VBOs1Lu-r1Mru21cKzeFhOLQd_R0CoQ-C_de_NZV6A&s=10",
    category: "Công nghệ",
  },
  {
    id: 4,
    title: "Toyota Camry tiếp tục dẫn đầu doanh số",
    content:
      "Toyota Camry tiếp tục là mẫu sedan bán chạy nhờ độ bền, khả năng tiết kiệm nhiên liệu và giá trị sử dụng cao.",
    date: "2026-07-17",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNubphWmDAr63-p49NRbF8phSb0i5o_ZGkwB1YHDQQxA&s=10",
    category: "Thị trường",
  },
];
