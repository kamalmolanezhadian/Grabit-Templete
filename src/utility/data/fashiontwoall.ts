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
    color1 : any;
    color2 : any;
    color3 : any;
    size1: string;
    size2: string;
    id: number;
  }
  
  const fashiontwoall: Category[] = [ 
    {
      title: "پیراهن طرح دار مردانه",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_2.jpg",
      category: "پوشاک مردانه",
      newPrice: 59000,
      oldPrice: 87000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 24433,
      id: 71,
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
      title: "گوشواره رز گلد",
      sale: "فروش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      category: "جواهرات",
      newPrice: 60000,
      oldPrice: 80000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 24433,
      id: 2,
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
      title: "رژلب مایع مات",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      category: "رژلب",
      newPrice: 20000,
      oldPrice: 30000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 24433,
      id: 73,
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
      title: "لباس زنانه طرح دار",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
      category: "پوشاک زنانه",
      newPrice: 78000,
      oldPrice: 85000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 24433,
      id: 134,
      quantity: 1,
      rating: 3,
      status: "ناموجود",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
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
      sku: 24433,
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
      title: "عطر ماندگار",
      sale: "فروش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      category: "عطر",
      newPrice: 25000,
      oldPrice: 30000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 24433,
      id: 63,
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
      title: "کفش ورزشی زنانه",
      sale: "فروش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
      category: "ورزشی",
      newPrice: 500000,
      oldPrice: 600000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 24433,
      id: 106,
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
      title: "کمربند چرم مردانه",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
      category: "کمربند",
      newPrice: 15000,
      oldPrice: 17000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 24433,
      id: 62,
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
      title: "پیراهن طرح دار مردانه",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_2.jpg",
      category: "پوشاک مردانه",
      newPrice: 59000,
      oldPrice: 87000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 24433,
      id: 71,
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
      title: "گوشواره رز گلد",
      sale: "فروش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      category: "جواهرات",
      newPrice: 60000,
      oldPrice: 80000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 24433,
      id: 2,
      quantity: 1,
      rating: 4,
      status: "ناموجود",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    }
  ];
  
  export default fashiontwoall;
  