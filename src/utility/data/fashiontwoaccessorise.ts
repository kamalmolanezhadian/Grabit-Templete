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
    color1 : any;
    color2 : any;
    color3 : any;
    size1: string;
    size2: string;
    id: number
  }
  
  const fashiontwoaccessorise: Accessorise[] = [
    {
      title: "کیف دستی زنانه",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
      category: "کیف پول",
      newPrice: 50000,
      oldPrice: 70000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 56438,
      id: 1,
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
      title: "کمربند چرم مردانه",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
      category: "کمربند",
      newPrice: 15000,
      oldPrice: 17000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 56438,
      id: 62,
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
      title: "عطر ماندگار",
      sale: "فروش",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      category: "عطر",
      newPrice: 25000,
      oldPrice: 30000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 56438,
      id: 63,
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
      title: "شامپو ضد شوره",
      sale: "جدید",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
      category: "شامپو",
      newPrice: 5000,
      oldPrice: 7000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 56438,
      id: 114,
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
      title: "لوسیون بدن پوست خشک",
      sale: "جدید",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
      category: "لوسیون بدن",
      newPrice: 2000,
      oldPrice: 3000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 56438,
      id: 115,
      quantity: 1,
      rating: 5,
      status: "ناموجود",
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
      sku: 56438,
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
      sku: 56438,
      id: 73,
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
      title: "ست آرایشی فشرده",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
      category: "ست آرایشی",
      newPrice: 78000,
      oldPrice: 85000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 56438,
      id: 68,
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
      title: "رژلب مایع مات",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      category: "رژلب",
      newPrice: 20000,
      oldPrice: 30000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 56438,
      id: 73,
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
      title: "ست آرایشی فشرده",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
      category: "ست آرایشی",
      newPrice: 78000,
      oldPrice: 85000,
      location: "آنلاین",
      brand: "بیشما ارگانیک",
      sku: 56438,
      id: 68,
      quantity: 1,
      rating: 4,
      status: "موجود",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    }
  ];
  
  export default fashiontwoaccessorise;
  