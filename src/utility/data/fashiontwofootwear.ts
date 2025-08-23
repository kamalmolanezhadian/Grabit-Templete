interface Footwear {
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
  
  const fashiontwofootwear: Footwear[] = [
    {
      title: "کفش ورزشی مردانه مشکی",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/40_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/40_2.jpg",
      category: "ورزشی",
      newPrice: 100000,
      oldPrice: 120000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 23456,
      id: 100,
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
      title: "کفش ورزشی مردانه آبی",
      sale: "فروش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
      category: "ورزشی",
      newPrice: 150000,
      oldPrice: 170000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 23456,
      id: 101,
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
      title: "کفش رسمی مردانه",
      sale: "فروش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_2.jpg",
      category: "مهمانی",
      newPrice: 110000,
      oldPrice: 120000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 23456,
      id: 102,
      quantity: 1,
      rating: 3,
      status: "موجود",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    },
    {
      title: "کفش رسمی زنانه",
      sale: "جدید",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/43_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/43_1.jpg",
      category: "مهمانی",
      newPrice: 200000,
      oldPrice: 240000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 23456,
      id: 103,
      quantity: 1,
      rating: 2,
      status: "موجود",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "کفش ورزشی مردانه",
      sale: "جدید",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/44_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/44_2.jpg",
      category: "یونیسکس",
      newPrice: 250000,
      oldPrice: 350000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 23456,
      id: 104,
      quantity: 1,
      rating: 5,
      status: "ناموجود",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "کفش روزانه زنانه",
      sale: "فروش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
      category: "ورزشی",
      newPrice: 500000,
      oldPrice: 600000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 23456,
      id: 105,
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
      title: "کفش ورزشی زنانه",
      sale: "فروش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
      category: "روزمره",
      newPrice: 110000,
      oldPrice: 120000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 23456,
      id: 106,
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
      title: "کفش طرح دار نوزادی",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/47_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/47_1.jpg",
      category: "کفش نوزاد",
      newPrice: 150000,
      oldPrice: 170000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 23456,
      id: 107,
      quantity: 1,
      rating: 4,
      status: "ناموجود",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "کفش ورزشی مردانه آبی",
      sale: "فروش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
      category: "ورزشی",
      newPrice: 150000,
      oldPrice: 170000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 23456,
      id: 101,
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
      title: "کفش رسمی مردانه",
      sale: "فروش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_2.jpg",
      category: "مهمانی",
      newPrice: 110000,
      oldPrice: 120000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 23456,
      id: 102,
      quantity: 1,
      rating: 3,
      status: "ناموجود",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    }
  ];
  
  export default fashiontwofootwear;
  