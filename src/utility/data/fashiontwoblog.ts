interface Blog {
  name: string;
  image: string;
  date: string;
  title: string;
  month: string;
}

const fashiontwoblog: Blog[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/9.jpg",
    name: "ساعت",
    date: "۳۰",
    title: "راهنمای بازاریابی: ۵ گام تا موفقیت",
    month: "خرداد",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/10.jpg",
    date: "۰۲",
    name: "کفش",
    title: "بهترین راه حل مشکلات معاملات تجاری در بازار",
    month: "فروردین",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/11.jpg",
    date: "۰۹",
    name: "مد",
    title: "۳۱ آمار خدمات مشتریان خرده‌فروشی در سال ۲۰۱۹",
    month: "اسفند",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/12.jpg",
    date: "۲۵",
    name: "عینک",
    title: "ایده‌های تجاری برای افزایش ترافیک کسب‌وکار",
    month: "دی",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/13.jpg",
    date: "۱۰",
    name: "کیف",
    title: "راهنمای بازاریابی: ۵ گام تا موفقیت",
    month: "آذر",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/14.jpg",
    date: "۰۸",
    name: "مد",
    title: "۱۵ آمار و ایده خدمات مشتریان در سال ۲۰۲۳",
    month: "مرداد",
  },
];
export default fashiontwoblog;
