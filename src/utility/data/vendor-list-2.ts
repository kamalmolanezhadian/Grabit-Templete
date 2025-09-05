interface VendorListTwo {
  id: number;
  name: string;
  description: string;
  image: string;
  level: number;
  levelOutOf: number;
  products: number;
}

const vendorlisttwo: VendorListTwo[] = [
  {
    id: 1,
    name: "فروشگاه ماروتی",
    description: "کسب و کار خرده فروشی",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/1.jpg",
    level: 9,
    levelOutOf: 10,
    products: 568,
  },
  {
    id: 2,
    name: "فروشگاه ماروتی",
    description: "کسب و کار خرده فروشی",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/2.jpg",
    level: 10,
    levelOutOf: 10,
    products: 444,
  },
  {
    id: 3,
    name: "فروشگاه ماروتی",
    description: "کسب و کار خرده فروشی",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/3.jpg",
    level: 8,
    levelOutOf: 10,
    products: 674,
  },
  {
    id: 4,
    name: "فروشگاه ماروتی",
    description: "کسب و کار خرده فروشی",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/4.jpg",
    level: 7,
    levelOutOf: 10,
    products: 356,
  },
  {
    id: 5,
    name: "فروشگاه ماروتی",
    description: "کسب و کار خرده فروشی",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/5.jpg",
    level: 7,
    levelOutOf: 10,
    products: 541,
  },
  {
    id: 6,
    name: "فروشگاه ماروتی",
    description: "کسب و کار خرده فروشی",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/6.jpg",
    level: 9,
    levelOutOf: 10,
    products: 235,
  },
  {
    id: 7,
    name: "فروشگاه ماروتی",
    description: "کسب و کار خرده فروشی",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/7.jpg",
    level: 8,
    levelOutOf: 10,
    products: 813,
  },
  {
    id: 8,
    name: "فروشگاه ماروتی",
    description: "کسب و کار خرده فروشی",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/blog/9.jpg",
    level: 10,
    levelOutOf: 10,
    products: 578,
  },
];

export default vendorlisttwo;
