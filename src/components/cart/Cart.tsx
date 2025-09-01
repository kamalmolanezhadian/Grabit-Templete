"use client"; 
import React, { useState, useEffect } from "react";
import MultiCatalog from "../catelog/MultiCatalog";
import ItemCard, { ItemCardProps } from "../product-item/ItemCard"; // مسیر اصلاح شد

interface CartItem {
  id: string; // فرض کردم id رشته هست، اگر عدد هست عدد بگذار
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // تابع handleWishlist فقط آی‌دی می‌گیرد
  const handleWishlist = (itemId: string) => {
    const item = cartItems.find((i) => i.id === itemId);
    if (!item) return;

    // ادامه منطق اضافه کردن به wishlist
    console.log("Added to wishlist:", item.title);
  };

  return (
    <div className="gi-cart-container">
      <div className="gi-cart-leftside col-lg-8 col-md-12">
        <MultiCatalog data={cartItems} handleWishlist={handleWishlist} />
      </div>
    </div>
  );
};

export default Cart;

