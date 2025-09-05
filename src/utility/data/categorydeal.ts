interface Deal {
  category: string;
  sale: string;
  image: string;
  imageTwo: string;
  newPrice: number;
  oldPrice: number;
  title: string;
  rating: any;
  status: string;
  location: string;
  brand: string;
  sku: number;
  quantity: number;
  id: number;
}

const Categorydeal: Deal[] = [
  {
    title: "بسته مخلوط آجیل و توت",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_2.jpg",
    category: "مد و پوشاک",
    newPrice: 45000,
    oldPrice: 56000,
    location: "Online",
    brand: "بیشما ارگانیک",
    sku: 23122,
    id: 51,
    quantity: 1,
    rating: 3,
    status: "ناموجود",
  },
  {
    title: "لباس پرنسسی زنانه",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_2.jpg",
    category: "پوشاک زنانه",
    newPrice: 58000,
    oldPrice: 65000,
    location: "Online",
    brand: "بیشما ارگانیک",
    sku: 23122,
    id: 132,
    quantity: 1,
    rating: 2,
    status: "موجود",
  },
  {
    title: "کفش اسپورت زنانه",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    category: "ورزشی",
    newPrice: 50000,
    oldPrice: 60000,
    location: "Online",
    brand: "بیشما ارگانیک",
    sku: 23122,
    id: 105,
    quantity: 1,
    rating: 4,
    status: "موجود",
  },
  {
    title: "لوسیون بدن پوست خشک",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    category: "لوسیون بدن",
    newPrice: 2000,
    oldPrice: 3000,
    location: "Online",
    brand: "بیشما ارگانیک",
    sku: 23122,
    id: 115,
    quantity: 1,
    rating: 5,
    status: "موجود",
  },
  {
    title: "رژلب مایع مات",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    category: "رژلب",
    newPrice: 20000,
    oldPrice: 30000,
    location: "Online",
    brand: "بیشما ارگانیک",
    sku: 23122,
    id: 73,
    quantity: 1,
    rating: 1,
    status: "موجود",
  },
  {
    title: "کیف پول زنانه",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    category: "کیف پول",
    newPrice: 50000,
    oldPrice: 70000,
    location: "Online",
    brand: "بیشما ارگانیک",
    sku: 23122,
    id: 1,
    quantity: 1,
    rating: 2,
    status: "موجود",
  },
  {
    title: "شامپو ضد شوره",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    category: "شامپو",
    newPrice: 5000,
    oldPrice: 7000,
    location: "Online",
    brand: "بیشما ارگانیک",
    sku: 23122,
    id: 114,
    quantity: 1,
    rating: 3,
    status: "موجود",
  },
];

export default Categorydeal;
