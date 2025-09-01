"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCard from "../product-item/ItemCard";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import { Fade } from "react-awesome-reveal";
import Spinner from "../button/Spinner";

interface MultiCatalogProps {
  hasPaginate?: boolean;
  onSuccess?: () => void;
  onError?: () => void;
}

const MultiCatalog = ({
  hasPaginate = false,
  onSuccess = () => {},
  onError = () => {},
}: MultiCatalogProps) => {
  const { data, error } = useSWR("/api/deal", fetcher, { onSuccess, onError });

  if (error) return <div>محصولات بارگیری نشد</div>;
  if (!data) return <Spinner />;

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  // تابع handleWishlist اضافه شده
  const handleWishlist = (item: any) => {
    console.log("Add to wishlist:", item);
    // می‌توانی منطق اضافه کردن به علاقه‌مندی‌ها را اینجا پیاده سازی کنی
  };

  return (
    <section className="gi-new-product padding-tb-40">
      <div className="container">
        <div className="row overflow-hidden m-b-minus-24px">
          <div className="gi-new-prod-section col-lg-12">
            <div className="gi-products">
              <Fade
                triggerOnce
                direction="up"
                duration={2000}
                delay={200}
                className="section-title-2"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <>
                  <h2 className="gi-title">
                    تازه <span>واردان</span>
                  </h2>
                  <p>مجموعه محصولات برتر را مرور کنید</p>
                </>
              </Fade>
              <Fade
                triggerOnce
                direction="up"
                duration={2000}
                delay={200}
                className="gi-new-block m-minus-lr-12"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                <Swiper
                  loop={true}
                  autoplay={{ delay: 1000 }}
                  slidesPerView={5}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    320: { slidesPerView: 1, spaceBetween: 25 },
                    426: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    1025: { slidesPerView: 5 },
                  }}
                  className="deal-slick-carousel gi-product-slider"
                >
                  {getData().map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                      <ItemCard
                        data={item}
                        handleWishlist={() => handleWishlist(item)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiCatalog;
