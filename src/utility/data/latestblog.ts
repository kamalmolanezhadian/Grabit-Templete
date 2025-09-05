interface Blog {
    name: string;
    image: string;
    date: string
    title: string;
  }
  
  const latestblog: Blog[] = [
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/1.jpg",
      name: "ارگانیک",
      date: "1401.03.12",
      title: "راهنمای بازاریابی: 5 گام تا موفقیت در مسیر",
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/2.jpg",
      date: "1401.03.12",
      name: "میوه‌ها",
      title: "بهترین راه حل مشکلات معاملات تجاری در بازار",
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/3.jpg",
      date: "1401.03.12",
      name: "سبزیجات",
      title: "31 آمار مهم خدمات مشتریان فروشگاه‌ها در سال 2019",
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/4.jpg",
      date: "1401.03.12",
      name: "فست فود",
      title: "ایده‌های تجاری برای افزایش ترافیک کسب‌وکار شما",
    },
    {
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/5.jpg",
        date: "1401.03.12",
        name: "میوه‌ها",
        title: "راهنمای بازاریابی: 5 گام در مسیر موفقیت",
      },
      {
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/6.jpg",
        date: "1401.03.12",
        name: "سبزیجات",
        title: "15 آمار و ایده خدمات مشتریان در سال 2023",
      },
  ];
  export default latestblog;