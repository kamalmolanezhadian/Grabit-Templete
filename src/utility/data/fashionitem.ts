interface Fashion {
  name: string;
  image: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  quantity: number;
  id: number;
}

const fashionitem: Fashion[] = [
  {
    id: 71,
    name: "مد",
    title: "پیراهن طرح دار مردانه",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    quantity: 1,
    newPrice: 42000,
    oldPrice: 45000,
  },
  {
    id: 86,
    name: "لباس کودک",
    title: "ست لباس نخی پسرانه",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_1.jpg",
    quantity: 1,
    newPrice: 25000,
    oldPrice: 30000,
  },
  {
    id: 62,
    name: "کمربند",
    title: "کمربند چرم مردانه",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
    quantity: 1,
    newPrice: 62000,
    oldPrice: 65000,
  },
  {
    id: 63,
    name: "عطر",
    title: "عطر ماندگار",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    quantity: 1,
    newPrice: 10000,
    oldPrice: 11000,
  },
  {
    id: 73,
    name: "رژ لب",
    title: "رژ لب مایع مات",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    quantity: 1,
    newPrice: 52000,
    oldPrice: 55000,
  },
  {
    id: 101,
    name: "کفش",
    title: "کفش ورزشی مردانه آبی",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
    quantity: 1,
    newPrice: 20000,
    oldPrice: 30000,
  },
];
export default fashionitem;