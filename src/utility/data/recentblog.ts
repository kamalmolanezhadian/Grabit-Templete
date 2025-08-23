interface Blog {
    category: string;
    image: string;
    date: string;
    title: string;
    description: string
  }
  
const recentblog: Blog[] = [
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/6.jpg",
      category: "محصولات ارگانیک",
      date: "تیر 1400 - تیر 1401",
      title: "برترین اینفلوئنسرهای مد و فشن",
      description: "معرفی تاثیرگذارترین افراد در صنعت مد و پوشاک"
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/5.jpg",
      date: "فروردین 1400 - فروردین 1401",
      category: "میوه‌های تازه",
      title: "ویترین خرید آخر هفته ووگ",
      description: "مروری بر بهترین محصولات و ترندهای فصلی"
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/4.jpg",
      date: "اسفند 1399 - اسفند 1400",
      category: "سبزیجات ارگانیک",
      title: "جدیدترین مدل‌های ژاکت بازار فشن",
      description: "آخرین ترندهای پوشاک زمستانی و بهاری"
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/3.jpg",
      date: "دی 1399 - دی 1400",
      category: "فست فود و رستوران",
      title: "ترندهای تابستانی بازار مد",
      description: "محبوب‌ترین استایل‌های فصل گرم سال"
    },
    {
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/2.jpg",
      date: "آذر 1400 - آذر 1401",
      category: "سبزیجات محلی",
      title: "ترندهای زمستانی بازار مد 1400",
      description: "بررسی پرفروش‌ترین محصولات فصل سرما"
    }
];
  export default recentblog;
  