interface Item {
    rating: number;
    image: string;
    title: string;
    newPrice: number;
    oldPrice: number;
  }

  const moreitem: Item[] = [
    {
      rating: 3,
      title:"کیسه ارزش خرما",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/8_1.jpg",
      newPrice: 55000,
      oldPrice: 32000,
    },
    {
        rating: 5,
        title:"کیسه ارزش خرما",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_1.jpg",
        newPrice: 60000,
        oldPrice: 56000,
      },
      {
        rating: 2,
        title:"میان وعده مخلوط گرپس",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/5_1.jpg",
        newPrice: 35000,
        oldPrice: 28000,
      },
      {
        rating: 5,
        title:"بسته بادام ",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_1.jpg",
        newPrice: 23000,
        oldPrice: 16000,
      },     
  ]
  export default moreitem;