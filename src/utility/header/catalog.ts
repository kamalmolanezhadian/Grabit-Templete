interface vendor {
    name: string;
    href: string;
  }
  
  const catalog: vendor[] = [
    {
      name: "فروشنده تکی",
      href: "/catalog-single-vendor",
    },
    {
      name: "چند فروشنده",
      href: "/catalog-multi-vendor",
    },
    {
      name: "پروفایل کاربر",
      href: "/user-profile",
    },
    {
      name: "تاریخچه کاربر",
      href: "/user-history",
    },
    {
      name: "صورتحساب",
      href: "/user-invoice",
    },
    {
      name: "دنبال کردن کاربر",
      href: "/user-follow",
    },
    {
      name: "پیگیری سفارش ۲",
      href: "/track-order-2",
    },
];
  export default catalog;
  