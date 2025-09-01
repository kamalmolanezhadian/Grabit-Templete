"use client";

import React, { useState, useEffect } from "react";
import MultiCatalog from "../catelog/MultiCatalog";
import ItemCard, { ItemCardProps } from "../product-item/ItemCard";


interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleWishlist = (item: CartItem) => {
    console.log("Added to wishlist:", item);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>
      <section className="gi-cart-section padding-tb-40">
        <h2 className="d-none">صفحه سبد خرید</h2>
        <div className="container">
          {cartItems.length === 0 ? (
            <div>آیتمی در سبد خرید اضافه کنید</div>
          ) : (
            <div className="row">
              <div className="gi-cart-rightside col-lg-4 col-md-12">
                <div className="gi-sidebar-wrap">
                  <div className="gi-sidebar-block">
                    <h3>سبد خرید شما</h3>
                    {cartItems.map(item => (
                      <div key={item.id} className="cart-item">
                        <p>{item.name}</p>
                        <p>{item.price} تومان</p>
                        <button onClick={() => removeFromCart(item.id)}>
                          حذف
                        </button>
                        <button onClick={() => handleWishlist(item)}>
                          افزودن به علاقه‌مندی
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="gi-cart-leftside col-lg-8 col-md-12">
                <MultiCatalog data={cartItems} handleWishlist={handleWishlist} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;

