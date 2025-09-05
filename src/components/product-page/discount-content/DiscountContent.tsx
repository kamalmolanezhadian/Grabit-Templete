import { getRegistrationData } from "@/components/login/RegisterPage";
import RatingComponent from "@/components/stars/RatingCompoents";
import { RootState } from "@/store";
import { toPersianNum } from "@/utility/parsianNum";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const DiscountContent = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const [userData, setUserData] = useState<any | null>(null);
  const [validated, setValidated] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([
    {
      name: "Moris Willson",
      rating: 3,
      comment:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
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

  const handleAccordionToggle = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
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
            avatar: userData.profilePhoto || "/assets/img/avatar/placeholder.jpg",
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
      <div className={`gi-accordion style-1 gi-single-pro-tab-content`}>
        <div
          className={`gi-accordion-item ${
            activeAccordion === 0 ? "active" : ""
          }`}
        >
          <h4
            className="gi-accordion-header"
            onClick={() => handleAccordionToggle(0)}
          >
          جزئیات محصول
          </h4>
          <div
            className={`gi-accordion-body ${
              activeAccordion === 0 ? "show" : ""
            }`}
          >
            <div className="gi-single-pro-tab-desc">
              <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
              </p>
              <ul>
              <li>هر نوع محصولی که می خواهید - ساده، قابل تنظیم</li>
              <li>محصولات قابل دانلود/دیجیتال، محصولات مجازی</li>
                <li>مدیریت موجودی با اقلام سفارش‌داده شده</li>
                <li>درزهای تخت در سرتاسر.</li>
              </ul>
              <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
              </p>
              <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
              </p>
            </div>
          </div>
        </div>
        <div
          className={`gi-accordion-item ${
            activeAccordion === 1 ? "active" : ""
          }`}
        >
          <h4
            className="gi-accordion-header"
            onClick={() => handleAccordionToggle(1)}
          >
           مشخصات
          </h4>
          <div
            className={`gi-accordion-body ${
              activeAccordion === 1 ? "show" : ""
            }`}
          >
            <div className="gi-single-pro-tab-moreinfo">
              <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
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
                <span>اندازه</span>{" 10 * 20 "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`gi-accordion-item ${
            activeAccordion === 2 ? "active" : ""
          }`}
        >
          <h4
            className="gi-accordion-header"
            onClick={() => handleAccordionToggle(2)}
          >
           فروشنده.
          </h4>
          <div
            className={`gi-accordion-body ${
              activeAccordion === 2 ? "show" : ""
            }`}
          >
            <div className="gi-single-pro-tab-moreinfo">
              <div className="gi-product-vendor">
                <div className="gi-vendor-info">
                  <span>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/3.jpg"
                      }
                      alt="vendor"
                    />
                  </span>
                  <div>
                  <h5>جعبه اقیانوس</h5>
                    <p>محصولات: {toPersianNum(333)}</p>
                    <p>فروش: {toPersianNum(5587)}</p>
                  </div>
                </div>
                <div className="gi-detail">
                  <ul>
                    <li>
                    <span>شماره تلفن:</span> {toPersianNum("09122222222")}
                    </li>
                    <li>
                    <span>ایمیل. :</span> Example@gmail.com
                    </li>
                    <li>
                      <span>آدرس. :</span> تهران - شهرک ولیعصر
                    </li>
                  </ul>
                  <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`gi-accordion-item ${
            activeAccordion === 3 ? "active" : ""
          }`}
        >
          <h4
            className="gi-accordion-header"
            onClick={() => handleAccordionToggle(3)}
          >
            نظرات
          </h4>
          <div
            className={`gi-accordion-body p-b-0 ${
              activeAccordion === 3 ? "show" : ""
            }`}
          >
            <div id="gi-spt-nav-review" className="a-tab-pane">
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
                            <Form.Control.Feedback
                              type="invalid"
                            >
                             لطفا پاسخ خود را وارد کنید
                            </Form.Control.Feedback>
                          </Form.Group>
                          <button style={{marginTop : "15px"}} className="gi-btn-2" type="submit">
                            ارسال
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountContent;
