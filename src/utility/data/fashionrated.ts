interface Fashion {
    name: string;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    quantity: number;
    id: number
  }

  const fashionrated: Fashion[] = [
    {
      id: 2,
      name: "جواهرات",
      title: "گوشواره رز گلد",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      quantity: 1,
      newPrice: 62000,
      oldPrice: 65000,
    },
    {
      id: 41,
      name: "مد",
      title: "پیراهن طرح دار مردانه",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/36_2.jpg",
      quantity: 1,
      newPrice: 56000,
      oldPrice: 78000,
    },
    {
      id: 105,
      name: "کفش",
      title: "کفش روزمره زنانه",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
      quantity: 1,
      newPrice: 25000,
      oldPrice: 30000,
    },
    {
      name: "شامپو",
      title: "شامپو ضد شوره",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
      quantity: 1,
      id: 114,
      newPrice: 20000,
      oldPrice: 30000,
    },
    {
      id: 87,
      name: "لباس",
      title: "کت مردانه مد روز",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/38_1.jpg",
      quantity: 1,
      newPrice: 50000,
      oldPrice: 55000,
    },
    {
      id: 1,
      name: "کیف پول",
      title: "کیف پول زنانه دستی",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
      quantity: 1,
      newPrice: 52000,
      oldPrice: 55000,
    }
  ];
  export default fashionrated;