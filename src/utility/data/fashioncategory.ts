interface FashionCategory {
  name: string;
  persantine: string;
  image: string;
  item: number;
}

const fashioncategory: FashionCategory[] = [
  {
    persantine: "30%",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-1.png",
    name: "لباس‌ها",
    item: 320,
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-2.png",
    name: "ساعت‌ها",
    item: 65,
  },
  {
    persantine: "15%",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-3.png",
    name: "لباس‌های مجلسی",
    item: 548,
  },
  {
    persantine: "10%",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-4.png",
    name: "عینک‌ها",
    item: 48,
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-5.png",
    name: "کلاه و کپ‌ها",
    item: 59,
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-6.png",
    name: "شلوارک‌ها",
    item: 845,
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-7.png",
    name: "ژاکت‌ها",
    item: 320,
  },
  {
    persantine: "30%",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-1.png",
    name: "لباس‌ها",
    item: 320,
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-2.png",
    name: "ساعت‌ها",
    item: 65,
  },
];
export default fashioncategory;
