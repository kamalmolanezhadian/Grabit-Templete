interface Rated {
    name: string;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  const rated: Rated[] = [
    {
      id: 58,
      name: "سبزیجات",
      title: "زنجبیل ارگانیک",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
      quantity: 1,
      newPrice: 62000,
      oldPrice: 65000,
      waight: "1 کیلوگرم"
    },
    {
      id: 16511,
      name: "میوه خشک",
      title: "بسته خرما",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_2.jpg",
      quantity: 1,
      newPrice: 56000,
      oldPrice: 70000,
      waight: "3 عدد"
    },
    {
      id: 1831,
      name: "میوه‌ها",
      title: "بلوبری",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/23_1.jpg",
      quantity: 1,
      newPrice: 25000,
      oldPrice: 30000,
      waight: "250 گرم"
    },
    {
      id: 121293,
      name: "سبزیجات",
      title: "پیاز هیبرید",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/13_1.jpg",
      quantity: 1,
      newPrice: 20000,
      oldPrice: 30000,
      waight: "12 عدد"
    },
    {
      id: 1283,
      name: "سبزیجات",
      title: "سیب زمینی",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/12_1.jpg",
      quantity: 1,
      newPrice: 50000,
      oldPrice: 55000,
      waight: "2 بسته"
    },
    {
      name: "میوه‌ها",
      id: 168,
      title: "انبه کیسر",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/28_1.jpg",
      quantity: 1,
      newPrice: 52000,
      oldPrice: 55000,
      waight: "1 عدد"
    },
]
  export default rated;