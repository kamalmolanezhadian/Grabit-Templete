import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ItemCard, { ItemCardProps } from "../itemCard/ItemCard";

interface MultiCatalogProps {
  data: any[];
}

const MultiCatalog: React.FC<MultiCatalogProps> = ({ data }) => {
  const [catalogData, setCatalogData] = useState<any[]>([]);

  useEffect(() => {
    setCatalogData(data);
  }, [data]);

  const handleWishlist = (item: any) => {
    console.log("Added to wishlist:", item);
    // اینجا کد واقعی اضافه کردن به علاقه‌مندی‌ها را بنویسید
  };

  const getData = () => {
    return catalogData;
  };

  const swiperParams = {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      320: { slidesPerView: 1 },
      480: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  };

  return (
    <div className="multi-catalog">
      <Swiper {...swiperParams}>
        {getData().map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <ItemCard 
              data={item} 
              handleWishlist={() => handleWishlist(item)} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MultiCatalog;
