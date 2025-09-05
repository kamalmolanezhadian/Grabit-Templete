interface Testimonials {
  name: string;
  image: string;
  subimage: string;
  category: string;
  description: string;
  subimagetwo: string;
}

const testimonials: Testimonials[] = [
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/1.jpg",
    name: "مریم کریمی",
    subimage: process.env.NEXT_PUBLIC_URL + "/assets/img/icons/top-quotes.svg",
    subimagetwo: process.env.NEXT_PUBLIC_URL + "/assets/img/icons/bottom-quotes.svg",
    category: "مدیرعامل",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/2.jpg",
    subimage: process.env.NEXT_PUBLIC_URL + "/assets/img/icons/top-quotes.svg",
    subimagetwo: process.env.NEXT_PUBLIC_URL + "/assets/img/icons/bottom-quotes.svg",
    name: "امیررضا محمدی",
    category: "مدیرکل",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/user/3.jpg",
    subimage: process.env.NEXT_PUBLIC_URL + "/assets/img/icons/top-quotes.svg",
    subimagetwo: process.env.NEXT_PUBLIC_URL + "/assets/img/icons/bottom-quotes.svg",
    name: "نازنین یزدانی",
    category: "مدیر بازاریابی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];
export default testimonials;
