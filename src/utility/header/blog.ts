interface Blog {
  name: string;
  href: string;
}

const blog: Blog[] = [
  {
    name: "نوار کناری چپ",
    href: "/blog-left-sidebar",
  },
  {
    name: "نوار کناری راست",
    href: "/blog-right-sidebar",
  },
  {
    name: "تمام عرض",
    href: "/blog-full-width",
  },
  {
    name: "جزئیات نوار کناری چپ",
    href: "/blog-detail-left-sidebar",
  },
  {
    name: "جزئیات نوار کناری راست",
    href: "/blog-detail-right-sidebar",
  },
  {
    name: "جزئیات تمام عرض",
    href: "/blog-detail-full-width",
  },
];
export default blog;
