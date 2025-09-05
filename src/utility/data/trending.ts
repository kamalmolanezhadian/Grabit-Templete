interface Trending {
    name: string;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  const trending: Trending[] = [
    {
      id: 1664511,
      name: "میوه خشک",
      title: "مخلوط آجیل سالم، بسته 200 گرمی",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/10_1.jpg",
      quantity: 1,
      newPrice: 42000,
      oldPrice: 45000,
      waight: "5 کیلوگرم"
    },
    {
      id: 12123,
      name: "سبزیجات",
      title: "گوجه فرنگی ارگانیک تازه",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/11_1.jpg",
      quantity: 1,
      newPrice: 25000,
      oldPrice: 30000,
      waight: "250 گرم"
    },
    {
      id: 1218723,
      name: "قهوه",
      title: "بسته مخلوط قهوه با کرم شکلات",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/19_1.jpg",
      quantity: 1,
      newPrice: 62000,
      oldPrice: 65000,
      waight: "1 کیلوگرم"
    },
    {
      id: 1841,
      name: "میوه‌ها",
      title: "لیچی تازه",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/25_1.jpg",
      quantity: 1,
      newPrice: 10000,
      oldPrice: 11000,
      waight: "500 گرم"
    },
    {
      id: 16141,
      name: "میوه خشک",
      title: "مخلوط توت و انگور",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/5_1.jpg",
      quantity: 1,
      newPrice: 52000,
      oldPrice: 56000,
      waight: "1 عدد"
    },
    {
      id: 169,
      name: "آناناس",
      title: "میوه‌ها",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/29_1.jpg",
      quantity: 1,
      newPrice: 20000,
      oldPrice: 30000,
      waight: "12 عدد"
    },
]
  export default trending;