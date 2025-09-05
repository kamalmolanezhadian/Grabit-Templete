"use client"
import { RootState } from "@/store";
import { toPersianNum } from "@/utility/parsianNum";
import React from "react";
import { useSelector } from "react-redux";

const TrackOrderTwo = () => {
  const login = useSelector((state: RootState) => state.registration.isAuthenticated);

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
      <section className="gi-Track-Order gi-track padding-tb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Details--> */}
              <div className="row">
                <div className="col-md-4 m-b-767">
                  <div className="gi-track-card">
                  <span className="gi-track-title">سفارش</span>
                    <span>{toPersianNum("#6152")}</span>
                  </div>
                </div>
                <div className="col-md-4 m-b-767">
                  <div className="gi-track-card">
                    <span className="gi-track-title">ملخ ها</span>
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
              <ul className="gi" data-gi-steps="5">
                <li className="gi-done">
                  سفارش <br></br> تایید شد
                </li>
                <li className="gi-done">
                  در حال پردازش سفارش <br></br>
                </li>
                <li className="gi-done">
                  بررسی کیفیت <br></br>
                </li>
                <li className="gi-todo">
                  محصول <br></br> ارسال شد
                </li>
                <li className="gi-todo">
                  محصول <br></br> تحویل داده شد
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackOrderTwo;
