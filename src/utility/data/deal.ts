interface Deal {
  category: string;
  sale: string;
  image: string;
  imageTwo: string;
  newPrice: number;
  oldPrice: number;
  title: string;
  weight: string;
  rating: any;
  status: string;
  location: string;
  brand: string;
  sku: number;
  quantity: number;
  id: number;
}

const deal: Deal[] = [
  {
    title: "بسته آجیل مخلوط توت",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/6_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/6_2.jpg",
    category: "میوه های خشک",
    newPrice: 49000,
    oldPrice: 65000,
    location: "Online",
    brand: "بهشما ارگانیک",
    sku: 23122,
    id: 51,
    quantity: 1,
    weight: "",
    rating: 4,
    status: "موجود",
  },
  {
    title: "کوکی های ترکیبی چند دانه",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
    category: "کوکی ها",
    weight: "10",
    newPrice: 49000,
    oldPrice: 65000,
    location: "Online",
    brand: "بهشما ارگانیک",
    sku: 23122,
    id: 52,
    quantity: 1,
    rating: 3,
    status: "موجود",
  },
  {
    title: "بسته آب انبه تازه",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_2.jpg",
    category: "غذاها",
    newPrice: 49000,
    oldPrice: 65000,
    location: "Online",
    brand: "بهشما ارگانیک",
    sku: 23122,
    id: 53,
    quantity: 1,
    weight: "",
    rating: 2,
    status: "موجود",
  },
  {
    title: "کیسه تازه ارزش خرما",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_2.jpg",
    category: "میوه های خشک",
    newPrice: 49000,
    oldPrice: 65000,
    location: "Online",
    brand: "بهشما ارگانیک",
    sku: 23122,
    id: 54,
    quantity: 1,
    weight: "",
    rating: 3,
    status: "موجود",
  },
  {
    title: "استیک فیبر ماسالا مجیک",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/1_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/1_2.jpg",
    category: "Foods",
    newPrice: 49000,
    oldPrice: 65000,
    location: "Online",
    brand: "بهشما ارگانیک",
    sku: 23122,
    id: 55,
    quantity: 1,
    weight: "2 بسته",
    rating: 2,
    status: "ناموجود",
  },
  {
    title: "طبیعی هاب گیلاس کاروندا",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/24_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/24_1.jpg",
    category: "میوه تازه",
    newPrice: 49000,
    oldPrice: 65000,
    location: "Online",
    brand: "بهشما ارگانیک",
    sku: 23122,
    id: 56,
    quantity: 1,
    weight: "1 کیلوگرم",
    rating: 2,
    status: "موجود",
  },
  {
    title: "بسته آب انبه تازه",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_2.jpg",
    category: "غذاها",
    newPrice: 49000,
    oldPrice: 65000,
    location: "Online",
    brand: "بهشما ارگانیک",
    sku: 23122,
    id: 59,
    quantity: 1,
    weight: "",
    rating: 2,
    status: "موجود",
  },
  {
    title: "بسته زنجبیل تازه ارگانیک",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
    category: "Tuber root",
    newPrice: 49000,
    oldPrice: 65000,
    location: "Online",
    brand: "بهشما ارگانیک",
    sku: 23122,
    id: 58,
    quantity: 1,
    weight: "100 گرم",
    rating: 4,
    status: "ناموجود",
  },
];


export default deal;
