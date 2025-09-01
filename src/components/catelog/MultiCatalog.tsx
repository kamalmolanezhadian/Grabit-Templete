"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ItemCard, { ItemCardProps } from "../product-item/ItemCard";

interface MultiCatalogProps {
  fetchData: () => Promise<any[]>;
  handleWishlist: (itemId: string) => void;
}

const MultiCatalog: React.FC<MultiCatalogProps> = ({ fetchData, handleWishlist }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, [fetchData]);

  return (
    <section className="multi-catalog-section">
      <div className="container">
        <h2 className="section-title">محصولات</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <ItemCard data={item} handleWishlist={handleWishlist} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MultiCatalog;
