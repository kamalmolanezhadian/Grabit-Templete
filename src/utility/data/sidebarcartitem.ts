interface Item {
    title: string;
    newPrice: number;
    waight: string;
    image: string;
    id: number
  }

  const cart: Item[] = [
    {
      title: "زنجبیل ارگانیک",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
      id: 58,
      newPrice: 65.00,
      waight: "۱ کیلوگرم",
    },
    {
      title: "خرما بسته ارزش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_2.jpg",
      id: 56,
      newPrice: 78.00,
      waight: "۳ عدد"
    },
    {
      title: "بلوبری",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/23_1.jpg",
      id: 1831,
      newPrice: 30.00,
      waight: "۲۵۰ گرم"
    }
  ];
  export default cart;