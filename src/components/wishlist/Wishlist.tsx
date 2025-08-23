"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCard from "../product-item/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addItem } from "../../store/reducers/cartSlice";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import { removeWishlist } from "@/store/reducers/wishlistSlice";
import { formatNumber } from "@/utility/formatNum";
import { toPersianNum } from "@/utility/parsianNum";

interface Item {
  id: number;
  title: string;
  newPrice: number;
  waight: string;
  image: string;
  imageTwo: string;
  date: string;
  status: string;
  rating: number;
  oldPrice: number;
  location: string;
  brand: string;
  sku: number;
  category: string;
  quantity: number;
}

const Wishlist = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlist
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString("en-GB")
  );

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("en-GB"));
  }, []);

  const dispatch = useDispatch();

  const handleRemoveFromwishlist = (id: number) => {
    dispatch(removeWishlist(id));
  };

  const handleCart = (data: Item) => {
    dispatch(addItem(data));
  };

  const { data, error } = useSWR("/api/deal", fetcher, { onSuccess, onError });

  if (error) return <div>محصولات بارگذاری نشد ...</div>;
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
      <section className="gi-faq padding-tb-40 gi-wishlist">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
            محصول <span>لیست آرزوها</span>
            </h2>
            <p>آرزوی محصول شما اولویت اول ما است.</p>
          </div>
          {wishlistItems.length === 0 ? (
            <h4 className="text-center">لیست خواسته‌های شما خالی است.</h4>
          ) : (
            <Row>
              <Col md={12}>
                <div className="gi-vendor-dashboard-card">
                  <div className="gi-vendor-card-header">
                  <h5>لیست آرزوها</h5>
                    <div className="gi-header-btn">
                      <a className="gi-btn-2" href="#">
                        خرید اکنون
                      </a>
                    </div>
                  </div>
                  <div className="gi-vendor-card-body">
                    <div className="gi-vendor-card-table">
                      <table className="table gi-table">
                        <thead>
                        <tr>
                            <th scope="col">شناسه کاربری</th>
                            <th scope="col">تصویر</th>
                            <th scope="col">نام</th>
                            <th scope="col">تاریخ</th>
                            <th scope="col">قیمت</th>
                            <th scope="col">وضعیت</th>
                            <th scope="col">اقدامات</th>
                          </tr>
                        </thead>
                        <tbody className="wish-empt">
                          {wishlistItems.map((data, index) => (
                            <tr key={index} className="pro-gl-content">
                              <td scope="row">
                                <span>{index + 1}</span>
                              </td>
                              <td>
                                <img
                                  className="prod-img"
                                  src={data.image}
                                  alt="product image"
                                />
                              </td>
                              <td>
                                <span>{data.title}</span>
                              </td>
                              <td>
                                <span>{toPersianNum(currentDate)}</span>
                              </td>
                              <td>
                                <span>{formatNumber(data.newPrice)} تومان</span>
                              </td>
                              <td>
                                <span
                                  className={
                                    data.status === "Available" ? "avl" : "out"
                                  }
                                >
                                  {data.status}
                                </span>
                              </td>
                              <td>
                                <span className="tbl-btn">
                                  <a
                                    className="gi-btn-2 add-to-cart"
                                    title="اضافه کردن به سبد خرید"
                                    onClick={() => handleCart(data)}
                                  >
                                    <i className="fi-rr-shopping-basket"></i>
                                  </a>
                                  <a
                                    onClick={() =>
                                      handleRemoveFromwishlist(data.id)
                                    }
                                    className="gi-btn-1 gi-remove-wish btn"
                                    href="#"
                                    title="حذف از لیست"
                                  >
                                    ×
                                  </a>
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </div>
      </section>
      <section className="gi-new-product padding-tb-40">
        <div className="container">
          <Row className="overflow-hidden m-b-minus-24px">
            <Col lg={12} className="gi-new-prod-section">
              <div className="gi-products">
                <Fade
                  triggerOnce
                  direction="up"
                  duration={2000}
                  delay={200}
                  className="section-title-2"
                >
                  <h2 className="gi-title">
                    تازه <span>واردان</span>
                  </h2>
                  <p>مجموعه محصولات برتر را مرور کنید</p>
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
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
