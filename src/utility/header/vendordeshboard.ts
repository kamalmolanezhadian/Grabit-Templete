interface vendor {
  name: string;
  href: string;
  slug: string;
}

const vendordeshboard: vendor[] = [
  {
    name: "پروفایل کاربر",
    href: "/user-profile",
    slug: "user-profile"
  },
  {
    name: "تاریخچه کاربر",
    href: "/user-history",
    slug: "user-history"
  },
  {
    name: "داشبورد فروشنده",
    href: "/vendor-dashboard",
    slug: "vendor-dashboard"
  },
  {
    name: "تنظیمات فروشنده",
    href: "/vendor-setting",
    slug: "vendor-setting"
  },
  {
    name: "آپلود فروشنده",
    href: "/vendor-upload",
    slug: "vendor-upload"
  },
  {
    name: "لیست فروشندگان",
    href: "/vendor-list-2",
    slug: "vendor-list-2"
  },
  {
    name: "سبد خرید",
    href: "/cart",
    slug: "cart"
  },
  {
    name: "تسویه حساب",
    href: "/checkout",
    slug: "checkout"
  },
  {
    name: "پیگیری سفارش",
    href: "/track-order",
    slug: "track-order"
  },
  {
    name: "فاکتور",
    href: "/user-invoice",
    slug: "user-invoice"
  }
]
export default vendordeshboard;
