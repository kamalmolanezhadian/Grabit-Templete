interface Team {
  name: string;
  image: string;
  title: string;
}

const team: Team[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/1.jpg",
    name: "نازنین موسوی",
    title: "بنیانگذار",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/2.jpg",
    name: "امیرحسین رضایی",
    title: "مؤسس مشترک",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/3.jpg",
    name: "پرستو کریمی",
    title: "مدیر",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/4.jpg",
    name: "علیرضا نجفی",
    title: "سرپرست",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/5.jpg",
    name: "ستایش احمدی",
    title: "سرپرست",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/3.jpg",
    name: "یاسمن غفاری",
    title: "مدیر",
  },
];
export default team;
