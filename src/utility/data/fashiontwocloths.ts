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
  color1 : any;
  color2 : any;
  color3 : any;
  size1: string;
  size2: string;
  id: number
}

const fashiontwoclothes: Clothe[] = [
  {
    title: "پیراهن طرح دار مردانه",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_2.jpg",
    category: "پوشاک مردانه",
    newPrice: 59000,
    oldPrice: 87000,
    location: "آنلاین",
    brand: "بیشما ارگانیک",
    sku: 23456,
    id: 41,
    quantity: 1,
    rating: 2,
    status: "موجود",
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "S",
    size2: "M"
  },
  {
    title: "لباس زنانه پرنسسی",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_2.jpg",
    category: "پوشاک زنانه",
    newPrice: 58000,
    oldPrice: 65000,
    location: "آنلاین",
    brand: "بیشما ارگانیک",
    sku: 23456,
    id: 132,
    quantity: 1,
    rating: 3,
    status: "موجود",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  },
  {
    title: "پیراهن طرح دار مردانه",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    category: "پوشاک مردانه",
    newPrice: 59000,
    oldPrice: 87000,
    location: "آنلاین",
    brand: "بیشما ارگانیک",
    sku: 23456,
    id: 71,
    quantity: 1,
    rating: 4,
    status: "ناموجود",
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "S",
    size2: "M"
  },
  {
    title: "لباس زنانه طرح دار",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    category: "پوشاک زنانه",
    newPrice: 78000,
    oldPrice: 85000,
    location: "آنلاین",
    brand: "بیشما ارگانیک",
    sku: 23456,
    id: 134,
    quantity: 1,
    rating: 3,
    status: "موجود",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
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
    brand: "بیشما ارگانیک",
    sku: 23456,
    id: 41,
    quantity: 1,
    rating: 5,
    status: "موجود",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  },
  {
    title: "ست لباس نخی پسرانه",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_2.jpg",
    category: "لباس نوزاد",
    newPrice: 45000,
    oldPrice: 56000,
    location: "آنلاین",
    brand: "بیشما ارگانیک",
    sku: 23456,
    id: 86,
    quantity: 1,
    rating: 4,
    status: "موجود",
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "S",
    size2: "M"
  },
  {
    title: "کت و ژاکت مردانه",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/38_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/38_2.jpg",
    category: "پوشاک زمستانی",
    newPrice: 49000,
    oldPrice: 65000,
    location: "آنلاین",
    brand: "بیشما ارگانیک",
    sku: 23456,
    id: 87,
    quantity: 1,
    rating: 2,
    status: "ناموجود",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  },
  {
    title: "تیشرت یقه گرد طرح دار",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_2.jpg",
    category: "یونیسکس",
    newPrice: 32000,
    oldPrice: 45000,
    location: "آنلاین",
    brand: "بیشما ارگانیک",
    sku: 23456,
    id: 75,
    quantity: 1,
    rating: 4,
    status: "موجود",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  },
  {
    title: "پیراهن طرح دار مردانه",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_2.jpg",
    category: "پوشاک مردانه",
    newPrice: 59000,
    oldPrice: 87000,
    location: "آنلاین",
    brand: "بیشما ارگانیک",
    sku: 23456,
    id: 41,
    quantity: 1,
    rating: 2,
    status: "موجود",
    color1: 1,
    color2: 2,
    color3: 3,
    size1: "S",
    size2: "M"
  },
  {
    title: "لباس زنانه پرنسسی",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_2.jpg",
    category: "پوشاک زنانه",
    newPrice: 58000,
    oldPrice: 65000,
    location: "آنلاین",
    brand: "بیشما ارگانیک",
    sku: 23456,
    id: 132,
    quantity: 1,
    rating: 3,
    status: "ناموجود",
    color1: '',
    color2: '',
    color3: '',
    size1: "",
    size2: ""
  }
];

export default fashiontwoclothes;
