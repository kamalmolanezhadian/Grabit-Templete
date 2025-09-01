"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ItemCard, { ItemCardProps } from "../itemCard/ItemCard";

interface MultiCatalogProps {
  data: any[];
  handleWishlist: (item: any) => void;
}

const MultiCatalog: React.FC<MultiCatalogProps> = ({ data, handleWishlist }) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <Swiper spaceBetween={20} slidesPerView={4}>
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <ItemCard data={item} handleWishlist={handleWishlist} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MultiCatalog;
