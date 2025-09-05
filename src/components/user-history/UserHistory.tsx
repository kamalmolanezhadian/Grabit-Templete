"use client";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";
import { formatNumber } from "@/utility/formatNum";
import { toPersianNum } from "@/utility/parsianNum";

const UserHistory = () => {
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlist
  );
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString("en-GB")
  );

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("en-GB"));
  }, []);

  // if (!login) {
  //   return (
  //     <div className="container">
  //      <p>
  //         لطفاً <a href="/login">وارد شوید</a> یا <a href="/register">ثبت نام کنید</a>{" "}
  //         برای مشاهده این صفحه
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <>
      <section className="gi-vendor-dashboard padding-tb-40">
        <div className="container">
          <Row className="mb-minus-24px">
            <VendorSidebar />
            <div className="col-lg-9 col-md-12 mb-24">
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                <h5>آخرین سفارش</h5>
                  <div className="gi-header-btn">
                    <a className="gi-btn-2" href="#">
                    مشاهده همه
                    </a>
                  </div>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    {wishlistItems && wishlistItems.length > 0 ? (
                      <table className="table gi-vender-table">
                        <thead>
                        <tr>
                            <th scope="col">آیدی</th>
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
                                <span>
                                  <a className="gi-btn-2" href="#">
                                    مشاهده همه
                                  </a>
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>شما آخرین سفارشی ندارید!</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default UserHistory;
