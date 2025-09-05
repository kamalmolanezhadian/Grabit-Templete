interface Category {
  name: string;
  persantine: string;
  icon: string;
  image: string;
  item: number;
  num: number;
}

const category: Category[] = [
  {
    persantine: "30%",
    icon: "fi fi-tr-peach",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "میوه ها",
    item: 320,
    num: 1,
  },
  {
    persantine: "",
    icon: "fi fi-tr-bread",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "نانوایی",
    item: 65,
    num: 2,
  },
  {
    persantine: "15%",
    icon: "fi fi-tr-corn",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "سبزیجات",
    item: 548,
    num: 3,
  },
  {
    persantine: "10%",
    icon: "fi fi-tr-coffee-pot",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "لبنیات و شیر",
    item: 48,
    num: 4,
  },
  {
    persantine: "",
    icon: "fi fi-tr-french-fries",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "میان وعده و ادویه",
    item: 59,
    num: 5,
  },
  {
    persantine: "",
    icon: "fi fi-tr-hamburger-soda",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "آبمیوه و نوشیدنی",
    item: 845,
    num: 6,
  },
  {
    persantine: "",
    icon: "fi fi-tr-shrimp",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "غذاهای دریایی",
    item: 652,
    num: 1,
  },
  {
    persantine: "20%",
    icon: "fi fi-tr-popcorn",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "فست فود",
    item: 320,
    num: 2,
  },
  {
    persantine: "",
    icon: "fi fi-tr-egg",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "تخم مرغ",
    item: 154,
    num: 3,
  },
];
export default category;
