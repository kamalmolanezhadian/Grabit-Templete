interface Blog {
  category: string;
  image: string;
  date: string;
  title: string;
  description: string;
}

const blogcontent: Blog[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/1.jpg",
    category: "محصولات ارگانیک",
    date: "30 خرداد 1403",
    title: "راهنمای جامع بازاریابی دیجیتال برای کسب و کارها",
    description: "5 استراتژی کلیدی برای موفقیت در بازاریابی دیجیتال و جذب مشتریان بیشتر"
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/2.jpg",
    date: "2 فروردین 1403",
    category: "میوه‌های تازه",
    title: "راهکارهای حل چالش‌های تجاری در بازار رقابتی",
    description: "روش‌های نوین برای غلبه بر مشکلات معاملات و افزایش فروش"
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/3.jpg",
    date: "9 اسفند 1402",
    category: "سبزیجات ارگانیک",
    title: "آمارهای حیاتی خدمات مشتری در صنعت خرده‌فروشی",
    description: "بررسی 31 شاخص مهم در تجربه مشتری و رضایت خریداران"
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/4.jpg",
    date: "25 دی 1402",
    category: "رستوران و فست فود",
    title: "ایده‌های نوآورانه برای توسعه کسب و کار",
    description: "راهکارهای عملی برای افزایش ترافیک فروشگاه و جذب مشتری"
  },
  {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/5.jpg",
      date: "10 آذر 1402",
      category: "میوه‌های فصلی",
      title: "استراتژی‌های طلایی بازاریابی محصولات",
      description: "5 گام اساسی برای طراحی کمپین‌های بازاریابی موفق"
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/6.jpg",
      date: "8 مرداد 1402",
      category: "سبزیجات محلی",
      title: "روندهای جدید خدمات مشتری در سال 1403",
      description: "15 استراتژی برتر برای بهبود تجربه مشتری و وفاداری خریداران"
    },
];
export default blogcontent;
