interface Footwear {
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
  id: number
}

const footwear: Footwear[] = [
  {
    title: "کفش ورزشی مردانه مشکی",
    sale: "0",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/40_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/40_2.jpg",
    category: "ورزشی",
    newPrice: 10000,
    oldPrice: 12000,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 100,
    quantity: 1,
    rating: 3,
    status: "موجود",
  },
  {
    title: "کفش ورزشی مردانه آبی",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
    category: "ورزشی",
    newPrice: 15000,
    oldPrice: 17000,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 101,
    quantity: 1,
    rating: 2,
    status: "موجود",
  },
  {
    title: "کفش رسمی مردانه",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_2.jpg",
    category: "مهمانی",
    newPrice: 11000,
    oldPrice: 12000,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 102,
    quantity: 1,
    rating: 4,
    status: "ناموجود",
  },
  {
    title: "کفش رسمی زنانه",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/43_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/43_1.jpg",
    category: "مهمانی",
    newPrice: 20000,
    oldPrice: 24000,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 103,
    quantity: 1,
    rating: 5,
    status: "موجود",
  },
  {
    title: "کفش ورزشی مردانه",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/44_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/44_2.jpg",
    category: "یونیسکس",
    newPrice: 25000,
    oldPrice: 35000,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 104,
    quantity: 1,
    rating: 2,
    status: "موجود",
  },
  {
    title: "کفش روزمره زنانه",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    category: "ورزشی",
    newPrice: 50000,
    oldPrice: 60000,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 105,
    quantity: 1,
    rating: 1,
    status: "ناموجود",
  },
  {
    title: "کفش ورزشی زنانه",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
    category: "راحتی",
    newPrice: 11000,
    oldPrice: 12000,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 106,
    quantity: 1,
    rating: 3,
    status: "موجود",
  },
  {
    title: "کفش طرح دار بچگانه",
    sale: "0",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/47_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/47_1.jpg",
    category: "کفش بچه",
    newPrice: 15000,
    oldPrice: 17000,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 107,
    quantity: 1,
    rating: 4,
    status: "موجود",
  },
];

export default footwear;
