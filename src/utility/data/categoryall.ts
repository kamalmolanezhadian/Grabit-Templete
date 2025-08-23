interface Category {
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

const categoryall: Category[] = [
  {
    title: "پیراهن طرح دار مردانه",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_2.jpg",
    category: "پوشاک مردانه",
    newPrice: 59000,
    oldPrice: 87000,
    location: "آنلاین",
    brand: "بهیما ارگانیک",
    sku: 23232,
    id: 71,
    quantity: 1,
    rating: 4,
    status: "نناموجود",
  },
  {
    title: "گوشواره رز گلد",
    sale: "فروش",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    category: "جواهرات",
    rating: 1,
    newPrice: 60000,
    oldPrice: 80000,
    location: "آنلاین",
    brand: "بهیما ارگانیک",
    sku: 23232,
    id: 2,
    quantity: 1,
    status: "ناموجود",
  },
  {
    title: "رژ لب مایع مات",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    category: "رژ لب",
    newPrice: 20000,
    oldPrice: 30000,
    location: "آنلاین",
    brand: "بهیما ارگانیک",
    sku: 23232,
    id: 73,
    quantity: 1,
    rating: 4,
    status: "موجود",
  },
  {
    title: "لباس زنانه طرح دار",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    category: "پوشاک زنانه",
    newPrice: 78000,
    oldPrice: 85000,
    location: "آنلاین",
    brand: "بهیما ارگانیک",
    sku: 23232,
    id: 134,
    quantity: 1,
    rating: 2,
    status: "موجود",
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
    brand: "بهیما ارگانیک",
    sku: 23232,
    id: 75,
    quantity: 1,
    status: "موجود",
    rating: 5,
  },
  {
    title: "عطر ماندگار",
    sale: "حراج",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    category: "عطر",
    newPrice: 25000,
    oldPrice: 30000,
    location: "آنلاین",
    brand: "بهیما ارگانیک",
    sku: 23232,
    id: 63,
    quantity: 1,
    rating: 2,
    status: "ناموجود",
  },
  {
    title: "کفش ورزشی زنانه",
    sale: "حراج",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    category: "ورزشی",
    newPrice: 50000,
    oldPrice: 60000,
    location: "آنلاین",
    brand: "بهیما ارگانیک",
    sku: 23232,
    id: 106,
    quantity: 1,
    rating: 3,
    status: "موجود",
  },
  {
    title: "کمربند چرم مردانه",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
    category: "کمربند",
    newPrice: 15000,
    oldPrice: 17000,
    location: "آنلاین",
    brand: "بهیما ارگانیک",
    sku: 23232,
    id: 62,
    quantity: 1,
    rating: 2,
    status: "ناموجود",
  },
];

export default categoryall;
