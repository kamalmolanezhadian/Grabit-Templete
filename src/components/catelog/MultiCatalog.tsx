"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ItemCard, { ItemCardProps } from "../itemCard/ItemCard";

interface MultiCatalogProps {
  data: any[];
}

const MultiCatalog: React.FC<MultiCatalogProps> = ({ data }) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setItems(data);
    }
  }, [data]);

  const handleWishlist = (itemId: string) => {
    console.log("Wishlist item:", itemId);
    // اینجا می‌توان لاجیک اضافه/حذف از لیست علاقه‌مندی را اضافه کرد
  };

  return (
    <section className="multi-catalog-section">
      <h2 className="d-none">محصولات چندکاتالوگی</h2>
      <Swiper spaceBetween={20} slidesPerView={4}>
        {items.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <ItemCard data={item} handleWishlist={handleWishlist} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MultiCatalog;
