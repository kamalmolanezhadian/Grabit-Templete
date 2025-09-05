"use client";
import { RootState } from "@/store";
import { formatNumber } from "@/utility/formatNum";
import { toPersianNum } from "@/utility/parsianNum";
import React from "react";
import { useSelector } from "react-redux";

const TrackOrder = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  if (!login) {
    return (
      <div className="container">
      <p>
        لطفاً برای مشاهده این صفحه <a href="/login">وارد شوید</a> یا <a href="/register">ثبت نام کنید</a>.
      </p>
    </div>
    );
  }
  return (
    <>
      <section className="gi-track padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
            پیگیری <span> سفارش</span>
            </h2>
            <p>ما شادی و نیازها را سریع‌تر از آنچه که فکرش را بکنید، ارائه می‌کنیم.</p>
          </div>
          <div className="row">
            <div className="container">
              <div className="gi-track-box">
                {/* <!-- Details--> */}
                <div className="row">
                  <div className="col-md-4 m-b-767">
                    <div className="gi-track-card">
                    <span className="gi-track-title">سفارش</span>
                    <span>{formatNumber("#55434")}</span>
                    </div>
                  </div>
                  <div className="col-md-4 m-b-767">
                    <div className="gi-track-card">
                    <span className="gi-track-title">ملخ</span>
                    <span>{toPersianNum("v534hb")}</span>
                    </div>
                  </div>
                  <div className="col-md-4 m-b-767">
                    <div className="gi-track-card">
                    <span className="gi-track-title">تاریخ مورد انتظار</span>
                    <span>{toPersianNum("17 خرداد 1398")}</span>
                    </div>
                  </div>
                </div>
                {/* <!-- Progress--> */}
                <div className="gi-steps">
                  <div className="gi-steps-body">
                    <div className="gi-step gi-step-completed">
                      <span className="gi-step-indicator">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-comment-check"></i>
                      </span>
                      سفارش<br></br> تایید شد
                    </div>

                    <div className="gi-step gi-step-completed">
                      <span className="gi-step-indicator">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-settings"></i>
                      </span>
                      در حال پردازش <br></br> سفارش
                    </div>
                    <div className="gi-step gi-step-active">
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-gift"></i>
                      </span>
                      بررسی کیفیت<br></br>
                    </div>
                    <div className="gi-step">
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-truck-side"></i>
                      </span>
                      محصول<br></br> ارسال شد
                    </div>
                    <div className="gi-step">
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-home"></i>
                      </span>
                      محصول<br></br> تحویل داده شد
                    </div>
                  </div>
                  <div className="gi-steps-header">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackOrder;
