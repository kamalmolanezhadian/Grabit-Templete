interface Fashion {
  name: string;
  image: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  quantity: number;
  id: number;
}

const fashionselling: Fashion[] = [
  {
    id: 73,
    name: "رژلب",
    title: "رژلب مایع مات",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    quantity: 1,
    newPrice: 5000, // تبدیل به ریال (50.00 دلار = 5000 تومان)
    oldPrice: 5500,
  },
  {
    id: 1,
    name: "کیف پول",
    title: "کیف دستی زنانه",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    quantity: 1,
    newPrice: 5200,
    oldPrice: 5500,
  },
  {
    id: 63,
    name: "عطر",
    title: "عطر ماندگار",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    quantity: 1,
    newPrice: 1000,
    oldPrice: 1100,
  },
  {
    id: 86,
    name: "لباس نوزاد",
    title: "ست لباس نخی پسرانه",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_1.jpg",
    quantity: 1,
    newPrice: 2500,
    oldPrice: 3000,
  },
  {
    id: 101,
    name: "کفش",
    title: "کفش ورزشی مردانه آبی",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
    quantity: 1,
    newPrice: 2000,
    oldPrice: 3000,
  },
  {
    id: 114,
    name: "شامپو",
    title: "شامپو ضد شوره",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    quantity: 1,
    newPrice: 2000,
    oldPrice: 3000,
  }
];
export default fashionselling;