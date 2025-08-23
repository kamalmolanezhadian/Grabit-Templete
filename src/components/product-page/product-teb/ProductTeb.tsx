import React, { useEffect, useState } from "react";
import { Tab, TabList, Tabs } from "react-tabs";
import { Fade } from "react-awesome-reveal";
import RatingComponent from "@/components/stars/RatingCompoents";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Form } from "react-bootstrap";
import { toPersianNum } from "@/utility/parsianNum";
import { formatNumber } from "@/utility/formatNum";

export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  postCode: string;
  country: string;
  state: string;
  profilePhoto?: string;
  description: string;
}

const getRegistrationData = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("registrationData");
    return data ? JSON.parse(data) : null;
  }
  return null;
};

const ProductTeb = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const [userData, setUserData] = useState<any | null>(null);
  const [validated, setValidated] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([
    {
      name: "فاطمه کوشکی",
      rating: 3,
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      avatar: "/assets/img/avatar/placeholder.jpg",
    },
  ]);

  useEffect(() => {
    if (login) {
      const data = getRegistrationData();
      if (data?.length > 0) {
        setUserData(data[data.length - 1]);
      }
    }
  }, [login]);

  const handleProductClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (userData && comment && rating) {
        setReviews([
          ...reviews,
          {
            name: `${userData.firstName} ${userData.lastName}`,
            rating,
            comment,
            avatar:
              userData.profilePhoto || "/assets/img/avatar/placeholder.jpg",
          },
        ]);

        setComment("");
        setRating(0);
      }
    }

    setValidated(true);
  };
  return (
    <>
      <Tabs
        selectedIndex={selectedIndex}
        onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}
        className="gi-single-pro-tab"
      >
        <div className="gi-single-pro-tab-wrapper">
          <TabList className="gi-single-pro-tab-nav">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <Tab className="nav-item" role="presentation" key={"details"}>
                <button
                  className={`nav-link ${selectedIndex == 0 ? "active" : ""}`}
                  id="details-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#gi-spt-nav-details"
                  type="button"
                  role="tab"
                  aria-controls="gi-spt-nav-details"
                  aria-selected="true"
                  onClick={() => handleProductClick(0)}
                >
                  جزئیات
                </button>
              </Tab>
              <Tab className="nav-item" role="presentation" key={"info"}>
                <button
                  className={`nav-link ${selectedIndex == 1 ? "active" : ""}`}
                  id="info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#gi-spt-nav-info"
                  type="button"
                  role="tab"
                  aria-controls="gi-spt-nav-info"
                  aria-selected="false"
                  onClick={() => handleProductClick(1)}
                >
                 مشخصات
                </button>
              </Tab>
              <Tab className="nav-item" role="presentation" key={"vendor"}>
                <button
                  className={`nav-link ${selectedIndex == 2 ? "active" : ""}`}
                  onClick={() => handleProductClick(2)}
                  id="vendor-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#gi-spt-nav-vendor"
                  type="button"
                  role="tab"
                  aria-controls="gi-spt-nav-vendor"
                  aria-selected="false"
                >
                  فروشنده
                </button>
              </Tab>
              <Tab className="nav-item" role="presentation" key={"review"}>
                <button
                  className={`nav-link ${selectedIndex == 3 ? "active" : ""}`}
                  onClick={() => handleProductClick(3)}
                  id="review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#gi-spt-nav-review"
                  type="button"
                  role="tab"
                  aria-controls="gi-spt-nav-review"
                  aria-selected="false"
                >
                  نظرات
                </button>
              </Tab>
            </ul>
          </TabList>
          <div className="tab-content  gi-single-pro-tab-content">
            <Fade
              duration={1000}
              className={`tab-pane fade ${
                selectedIndex === 0 ? "show active" : ""
              }`}
            >
              <div className="gi-single-pro-tab-desc">
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
                <ul>
                  <li>
                    هر نوع محصولی که می خواهید - ساده، قابل تنظیم
                  </li>
                  <li>محصولات قابل دانلود/دیجیتال، محصولات مجازی</li>
                  <li>مدیریت موجودی با اقلام سفارش‌داده شده</li>
                  <li>درزهای تخت در سرتاسر.</li>
                </ul>
                <p>
                 
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
              </div>
            </Fade>
            <Fade
              duration={1000}
              className={`tab-pane fade ${
                selectedIndex === 1 ? "show active" : ""
              }`}
            >
              <div className="gi-single-pro-tab-moreinfo">
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
                <ul>
                  <li>
                  <span>مدل</span> SKU140
                  </li>
                  <li>
                    <span>وزن</span> 500 گرم
                  </li>
                  <li>
                    <span>ابعاد</span> 35 × 30 × 7 سانتی متر
                  </li>
                  <li>
                    <span>رنگ</span> مشکی، صورتی، قرمز، سفید
                  </li>
                  <li>
                    <span>اندازه</span> 10 * 20
                  </li>
                </ul>
              </div>
            </Fade>
            <Fade
              duration={1000}
              className={`tab-pane fade ${
                selectedIndex === 2 ? "show active" : ""
              }`}
            >
              <div className="gi-single-pro-tab-moreinfo">
                <div className="gi-product-vendor">
                  <div className="gi-vendor-info">
                    <span>
                      <img
                        src={
                          process.env.NEXT_PUBLIC_URL +
                          "/assets/img/vendor/3.jpg"
                        }
                        alt="vendor"
                      />
                    </span>
                    <div>
                      <h5>جعبه اقیانوس</h5>
                      <p>محصولات: {formatNumber(358)}</p>
                      <p>فروش: {formatNumber(5587)}</p>
                    </div>
                  </div>
                  <div className="gi-detail">
                  <ul>
                      <li>
                        <span>شماره تلفن:</span> 987654321 +00
                      </li>
                      <li>
                        <span>ایمیل. :</span> Example@gmail.com
                      </li>
                      <li>
                        <span>آدرس. :</span> تهران سهروردی شمالی
                      </li>
                    </ul>
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade
              duration={1000}
              className={`tab-pane fade ${
                selectedIndex === 3 ? "show active" : ""
              }`}
            >
              {!login ? (
                <div className="container">
                 <p>
                    لطفاً <a href="/login">وارد شوید</a> یا{" "}
                    برای بررسی محصول <a href="/register">ثبت نام کنید</a>.
                  </p>
                </div>
              ) : (
                <div className="row">
                  <div className="gi-t-review-wrapper">
                    {reviews.map((data, index) => (
                      <div key={index} className="gi-t-review-item">
                        <div className="gi-t-review-avtar">
                          <img
                            src={
                              data.avatar ||
                              process.env.NEXT_PUBLIC_URL +
                                "/assets/img/avatar/placeholder.jpg"
                            }
                            alt="user"
                          />
                        </div>
                        <div className="gi-t-review-content">
                          <div className="gi-t-review-top">
                            <div className="gi-t-review-name">{data.name}</div>
                            <div className="gi-t-review-rating">
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className={`gicon gi-star ${
                                    i < data.rating ? "fill" : "gi-star-o"
                                  }`}
                                ></i>
                              ))}
                            </div>
                          </div>
                          <div className="gi-t-review-bottom">
                            <p>{data.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="gi-ratting-content">
                    <h3>یک نظر اضافه کنید</h3>
                    <div className="gi-ratting-form">
                      <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                        action="#"
                      >
                        <div className="gi-ratting-star">
                          <RatingComponent
                            onChange={setRating}
                            value={rating}
                          />
                        </div>
                        <div className="gi-ratting-input form-submit">
                          <Form.Group>
                            <Form.Control
                              as="textarea"
                              name="comment"
                              placeholder="Enter Your Comment"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                            لطفا پاسخ خود را وارد کنید
                            </Form.Control.Feedback>
                          </Form.Group>
                          <button
                            style={{ marginTop: "15px" }}
                            className="gi-btn-2"
                            type="submit"
                          >
                            ارسال
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              )}
            </Fade>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default ProductTeb;
