interface Page {
  name: string;
  href: string;
}

const pages: Page[] = [
  {
    name: "درباره ما",
    href: "/about-us",
  },
  {
    name: "تماس با ما",
    href: "/contact-us",
  },
  {
    name: "سبد خرید",
    href: "/cart",
  },
  {
    name: "تسویه حساب",
    href: "/checkout",
  },
  {
    name: "سفارشات",
    href: "/orders",
  },
  {
    name: "مقایسه",
    href: "/compare",
  },
  {
    name: "سوالات متداول",
    href: "/faq",
  },
  {
    name: "ورود",
    href: "/login",
  },
];
export default pages;
