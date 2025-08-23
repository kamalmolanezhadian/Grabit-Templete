interface Blog {
  name: string;
  image: string;
  date: string;
  title: string;
}

const fashionblog: Blog[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/9.jpg",
    name: "ساعت‌ها",
    date: "۹ تیر ۱۴۰۱", // June 30, 2022 → 1401/4/9
    title: "راهنمای بازاریابی: ۵ گام تا موفقیت",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/10.jpg",
    date: "۱۳ فروردین ۱۴۰۱", // April 2, 2022 → 1401/1/13
    name: "کفش‌ها",
    title: "بهترین راه حل برای مشکلات معاملات تجاری در بازار",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/11.jpg",
    date: "۱۸ اسفند ۱۴۰۰", // March 9, 2022 → 1400/12/18
    name: "مد",
    title: "۳۱ آمار خدمات مشتری در حوزه مد که باید در ۲۰۱۹ بدانید",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/12.jpg",
    date: "۵ بهمن ۱۴۰۰", // January 25, 2022 → 1400/11/5
    name: "عینک‌ها",
    title: "ایده‌های تجاری برای افزایش ترافیک کسب‌وکار شما",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/13.jpg",
    date: "۱۹ آذر ۱۴۰۰", // December 10, 2021 → 1400/9/19
    name: "کیف‌ها",
    title: "راهنمای بازاریابی: ۵ گام به سوی موفقیت",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/14.jpg",
    date: "۱۷ مرداد ۱۴۰۰", // August 8, 2021 → 1400/5/17
    name: "مد",
    title: "۱۵ آمار و ایده خدمات مشتری که باید در ۲۰۲۳ بدانید",
  },
];
export default fashionblog;
