interface Wishlist {
  title: string;
  newPrice: number;
  waight: any;
  image: string;
  date: string;
  status: string;
}

const wishlist: Wishlist[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/1_1.jpg",
    title: "بادام کالیفرنیایی ارزشمند 250 گرم + بسته 50 گرمی",
    date: "30 خرداد 1401",
    status: "موجود",
    newPrice: 65,
    waight: "",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/10_1.jpg",
    date: "2 فروردین 1401",
    title: "مخلوط آجیل سالم، بسته 200 گرمی",
    status: "ناموجود",
    newPrice: 68,
    waight: "",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/15_1.jpg",
    date: "9 اسفند 1400",
    title: "فلفل دلمه‌ای قرمز",
    status: "موجود",
    newPrice: 360,
    waight: "",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
    date: "25 دی 1400",
    title: "زنجبیل ارگانیک",
    status: "ناموجود",
    newPrice: 584,
    waight: ""
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/18_1.jpg",
    date: "10 آذر 1400",
    title: "لیمو - بدون هسته",
    status: "ناموجود",
    newPrice: 65,
    waight: ""
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/20_1.jpg",
    date: "8 مرداد 1400",
    title: "بروکلی تازه ارگانیک",
    status: "غیرفعال",
    newPrice: 65,
    waight: ""
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/25_1.jpg",
    date: "8 مرداد 1400",
    title: "لیچی تازه",
    status: "موجود",
    newPrice: 368,
    waight: ""
  }
];
export default wishlist;
