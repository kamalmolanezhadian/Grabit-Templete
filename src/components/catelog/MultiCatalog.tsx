"use client";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCard from "../product-item/ItemCard";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import { toPersianNum } from "@/utility/parsianNum";

const MultiCatalog = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/deal", fetcher, { onSuccess, onError });

  if (error) return <div>محصولات بارگیری نشد</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  return (
    <>
      <section className="gi-single-vendor padding-tb-40">
        <div className="container">
          <Row>
            <Col lg={12}>
              <div className="gi-page-description">
                <img
                  src={process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/1.jpg"}
                  alt="vendor"
                />
                <div className="detail">
                  <h5 className="gi-desc-title">درباره شرکت ما</h5>
                  <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>غذاهای نئون</h5>
                <span>( کسب و کار خرده فروشی )</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>سطح</h5>
                <span>سطح : {toPersianNum(9)} از {toPersianNum(10)}</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>محصولات فروشنده</h5>
                <span>{toPersianNum(598)} محصول</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>از زمان فروشنده</h5>
                <span>{toPersianNum(1)} سال و {toPersianNum(11)}ماه</span>
              </div>
            </Col>
          </Row>
          <Row className="overflow-hidden m-t-30px m-b-minus-24px">
            <div className="gi-new-prod-section col-lg-12">
              <div className="gi-products">
                <Fade
                  triggerOnce
                  direction="up"
                  duration={2000}
                  delay={300}
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
                      0: {
                        slidesPerView: 1,
                      },
                      320: {
                        slidesPerView: 1,
                      },
                      425: {
                        slidesPerView: 2,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1025: {
                        slidesPerView: 5,
                      },
                    }}
                    className="deal-slick-carousel gi-product-slider"
                  >
                    {getData().map((item: any, index: number) => (
                      <SwiperSlide key={index}>
                        <ItemCard data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Fade>
              </div>
            </div>
          </Row>
        </div>
      </section>
      <section className="gi-single-vendor padding-tb-40">
        <div className="container">
          <Row>
            <Col lg={12}>
              <div className="gi-page-description">
                <img
                  src={process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/3.jpg"}
                  alt="vendor"
                />
                <div className="detail">
                  <h5 className="gi-desc-title">درباره شرکت ما</h5>
                  <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>مد ماری</h5>
                <span>( فروشگاه خرده فروشی )</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>سطح</h5>
                <span>سطح: {toPersianNum(5)} از {toPersianNum(10)}</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>محصولات فروشنده</h5>
                <span>{toPersianNum(598)} محصول</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>از زمان فروشنده</h5>
                <span>{toPersianNum(1)} سال و {toPersianNum(11)}ماه</span>
              </div>
            </Col>
          </Row>
          <Row className="overflow-hidden m-t-30px m-b-minus-24px">
            <div className="gi-new-prod-section col-lg-12">
              <div className="gi-products">
                <Fade
                  triggerOnce
                  direction="up"
                  duration={2000}
                  delay={300}
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
                      0: {
                        slidesPerView: 1,
                      },
                      320: {
                        slidesPerView: 1,
                      },
                      425: {
                        slidesPerView: 2,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1025: {
                        slidesPerView: 5,
                      },
                    }}
                    className="deal-slick-carousel gi-product-slider"
                  >
                    {getData().map((item: any, index: number) => (
                      <SwiperSlide key={index}>
                        <ItemCard data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Fade>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default MultiCatalog;
