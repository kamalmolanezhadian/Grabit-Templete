interface Selling {
    name: string;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  const selling: Selling[] = [
    {
      id: 11212,
      name: "سبزیجات",
      title: "لیمو بدون هسته",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/18_1.jpg",
      quantity: 1,
      newPrice: 42000,
      oldPrice: 45000,
      waight: "5کیلوگرم"
    },
    {
      id: 168,
      name: "میوه‌ها",
      title: "انبه کیسر",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/28_1.jpg",
      quantity: 1,
      newPrice: 62000,
      oldPrice: 65.00,
      waight: "1 کیلوگرم"
    },
    {
      id: 161431,
      name: "میوه خشک",
      title: "مخلوط آجیل و بادام",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/7_2.jpg",
      quantity: 1,
      newPrice: 10000,
      oldPrice: 11000,
      waight: "500 گرم"
    },
    {
      id: 16411,
      name: "میوه خشک",
      title: "بسته بادام کالیفرنیایی",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
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
      id: 16141,
      name: "میوه خشک",
      title: "مخلوط توت و انگور",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/5_1.jpg",
      quantity: 1,
      newPrice: 52000,
      oldPrice: 55000,
      waight: "1 عدد"
    },
]
  export default selling;