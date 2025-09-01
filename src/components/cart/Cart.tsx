"use client"; // حتماً باید اول فایل باشه

import React, { useState, useEffect } from "react";
import MultiCatalog from "../catelog/MultiCatalog";
import ItemCard, { ItemCardProps } from "../product-item/ItemCard";

// فرض می‌کنیم CartItem تعریفش اینطوریه:
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  // بقیه فیلدها
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // نمونه handleWishlist
  const handleWishlist = (itemId: string) => {
    console.log("Wishlist:", itemId);
    // کد اضافه کردن به لیست علاقه‌مندی‌ها
  };

  useEffect(() => {
    // Load cart items از localStorage یا API
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <div className="gi-cart-container">
      <div className="gi-cart-leftside col-lg-8 col-md-12">
        <MultiCatalog 
          data={cartItems.map(item => ({ data: item, handleWishlist }))}
        />
      </div>
      {/* می‌توانید سمت راست CartSummary یا TotalPrice اضافه کنید */}
    </div>
  );
};

export default Cart;
