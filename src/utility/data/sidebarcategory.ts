interface SidebarCategory {
  name: string;
  persantine: string;
  image: string;
  item: number;
  num: number
}

const sidebarcategory: SidebarCategory[] = [
  {
    persantine: "30%",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-1.png",
    name: "لباس",
    item: 320,
    num: 1
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-2.png",
    name: "ساعت",
    item: 65,
    num: 2
  },
  {
    persantine: "15%",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-3.png",
    name: "لباس مجلسی",
    item: 548,
    num: 3
  },
  {
    persantine: "10%",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-4.png",
    name: "عینک",
    item: 48,
    num: 4
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-5.png",
    name: "کلاه",
    item: 59,
    num: 5
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-6.png",
    name: "شلوارک",
    item: 845,
    num: 6
  },
  {
    persantine: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/category/c-7.png",
    name: "ژاکت",
    item: 320,
    num: 4
  },
];
export default sidebarcategory;
