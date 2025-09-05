interface Clothe {
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

const clothes: Clothe[] = [
  {
    title: "پیراهن طرح دار مردانه",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_2.jpg",
    category: "پوشاک مردانه",
    newPrice: 59000,
    oldPrice: 87000,
    location: "آنلاین",
    brand: "بیهشما ارگانیک",
    sku: 23232,
    id: 41,
    quantity: 1,
    rating: 3,
    status: "موجود",
  },
  {
    title: "لباس مدل پرنسسی زنانه",
    sale: "حراج",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_2.jpg",
    category: "پوشاک زنانه",
    newPrice: 58000,
    oldPrice: 65000,
    location: "آنلاین",
    brand: "بیهشما ارگانیک",
    sku: 23232,
    id: 132,
    quantity: 1,
    rating: 3,
    status: "موجود",
  },
  {
    title: "پیراهن شیک مردانه طرح دار",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    category: "پوشاک مردانه",
    newPrice: 59000,
    oldPrice: 87000,
    location: "آنلاین",
    brand: "بیهشما ارگانیک",
    sku: 23232,
    id: 71,
    quantity: 1,
    rating: 3,
    status: "موجود",
  },
  {
    title: "لباس زنانه شیک طرح دار",
    sale: "حراج",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    category: "پوشاک زنانه",
    newPrice: 78000,
    oldPrice: 85000,
    location: "آنلاین",
    brand: "بیهشما ارگانیک",
    sku: 23232,
    id: 134,
    quantity: 1,
    rating: 4,
    status: "ناموجود",
  },
  {
    title: "پیراهن طرح دار مردانه",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/36_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/36_2.jpg",
    category: "پوشاک مردانه",
    newPrice: 25000,
    oldPrice: 35000,
    location: "آنلاین",
    brand: "بیهشما ارگانیک",
    sku: 23232,
    id: 41,
    quantity: 1,
    rating: 2,
    status: "موجود",
  },
  {
    title: "ست لباس نخی پسرانه",
    sale: "حراج",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_2.jpg",
    category: "پوشاک نوزادی",
    newPrice: 45000,
    oldPrice: 56000,
    location: "آنلاین",
    brand: "بیهشما ارگانیک",
    sku: 23232,
    id: 86,
    quantity: 1,
    rating: 1,
    status: "موجود",
  },
  {
    title: "کت مردانه زمستانی",
    sale: "حراج",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/38_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/38_2.jpg",
    category: "پوشاک زمستانی",
    newPrice: 49000,
    oldPrice: 65000,
    location: "آنلاین",
    brand: "بیهشما ارگانیک",
    sku: 23232,
    id: 87,
    quantity: 1,
    rating: 45,
    status: "موجود",
  },
  {
    title: "تیشرت یقه گرد طرح دار",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_2.jpg",
    category: "یونیسکس",
    newPrice: 3200,
    oldPrice: 4500,
    location: "آنلاین",
    brand: "بیهشما ارگانیک",
    sku: 23232,
    id: 75,
    quantity: 1,
    rating: 3,
    status: "ناموجود",
  },
]

export default clothes;
