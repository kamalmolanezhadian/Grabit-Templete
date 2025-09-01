"use client"; // فراموش نکن، چون useState و useEffect داریم

import React, { useState, useEffect } from "react";
import MultiCatalog from "../catelog/MultiCatalog";
import ItemCard, { ItemCardProps } from "../product-item/ItemCard";

interface CartItem {
  id: string | number;
  name: string;       // نام آیتم
  price: number;
  quantity: number;
  image?: string;     // اگر تصویر نبود اختیاری
  description?: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // مثال داده اولیه، شما می‌توانید از API یا localStorage بارگذاری کنید
  useEffect(() => {
    setCartItems([
      { id: 1, name: "محصول ۱", price: 100, quantity: 2, image: "/images/item1.jpg" },
      { id: 2, name: "محصول ۲", price: 200, quantity: 1, image: "/images/item2.jpg" },
    ]);
  }, []);

  const handleWishlist = (itemId: string | number) => {
    console.log("Wishlist item:", itemId);
    // منطق اضافه کردن به Wishlist
  };

  // تبدیل CartItem به ItemCardProps
  const multiCatalogData: ItemCardProps[] = cartItems.map(item => ({
    data: {
      id: item.id,
      title: item.name,
      image: item.image || "/images/placeholder.png",
      price: item.price,
      description: item.description,
    },
    handleWishlist
  }));

  return (
    <div className="gi-cart-container">
      <div className="gi-cart-leftside col-lg-8 col-md-12">
        <MultiCatalog data={multiCatalogData} handleWishlist={handleWishlist} />
      </div>
      <div className="gi-cart-rightside col-lg-4 col-md-12">
        {/* می‌توانید سمت راست CartSummary یا TotalPrice اضافه کنید */}
        <h3>جمع کل: {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} تومان</h3>
      </div>
    </div>
  );
};

export default Cart;
