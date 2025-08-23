interface Product {
    name: string;
    href: string;
    subname : SubPage[];
  }

  interface SubPage {
    name: string;
    href: string;
  }
  
  const productpage: Product[] = [
    {
      name: "صفحه محصول",
      href: "",
      subname: [
        { name: "نوار کناری سمت چپ محصول", href: "/product-left-sidebar" },
      { name: "نوار کناری سمت راست محصول", href: "/product-right-sidebar" }
      ]
    },
    {
      name: "محصول بر اساس",
      href: "",
      subname: [
        { name: "نوار کناری سمت چپ", href: "/product-according-left-sidebar" },
        { name: "نوار کناری سمت راست", href: "/product-according-right-sidebar" }
      ]
    },  
  ];
  export default productpage;
  