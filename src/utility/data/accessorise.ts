interface Accessorise {
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

const accessorise: Accessorise[] = [
  {
    title: "کیف پول زنانه",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    category: "کیف پول",
    newPrice: 50000,
    oldPrice: 70000,
    location: "در فروشگاه، آنلاین",
    brand: "بهیما ارگانیک",
    sku: 55555,
    id: 1,
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
    rating: 2,
    location: "در فروشگاه، آنلاین",
    brand: "دarsh مارت",
    sku: 55555,
    id: 62,
    quantity: 1,
    status: "موجود",
  },
  {
    title: "عطر ماندگار",
    sale: "حراج",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    category: "عطر",
    newPrice: 25000,
    oldPrice: 30000,
    rating: 4,
    location: "در فروشگاه، آنلاین",
    brand: "بهیما ارگانیک",
    sku: 55555,
    id: 63,
    quantity: 1,
    status: "ناموجود",
  },
  {
    title: "شامپو ضد شوره",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    category: "شامپو",
    newPrice: 5.0,
    oldPrice: 7.0,
    rating: 4,
    location: "آنلاین",
    brand: "دarsh مارت",
    sku: 55555,
    id: 114,
    quantity: 1,
    status: "موجود",
  },
  {
    title: "لوسیون بدن برای پوست خشک",
    sale: "جدید",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    category: "لوسیون بدن",
    newPrice: 2000,
    oldPrice: 3000,
    rating: 3,
    location: "در فروشگاه",
    brand: "دarsh مارت",
    sku: 55555,
    id: 115,
    quantity: 1,
    status: "ناموجود",
  },
  {
    title: "گوشواره رز گلد",
    sale: "حراج",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    category: "جواهرات",
    newPrice: 60000,
    oldPrice: 80000,
    rating: 2,
    location: "در فروشگاه، آنلاین",
    brand: "بهیما ارگانیک",
    sku: 55555,
    id: 2,
    quantity: 1,
    status: "غیرفعال",
  },
  {
    title: "رژ لب مایع مات",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    category: "رژ لب",
    newPrice: 20000,
    oldPrice: 30000,
    rating: 5,
    location: "در فروشگاه، آنلاین",
    brand: "دarsh مارت",
    sku: 55555,
    id: 73,
    quantity: 1,
    status: "موجود",
  },
  {
    title: "کیت آرایشی فشرده",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
    category: "کیت آرایش",
    newPrice: 78000,
    oldPrice: 85000,
    rating: 2,
    location: "آنلاین",
    brand: "بهیما ارگانیک",
    sku: 55555,
    id: 68,
    quantity: 1,
    status: "ناموجود",
  },
];

export default accessorise;
