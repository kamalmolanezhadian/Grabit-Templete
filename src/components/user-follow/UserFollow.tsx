"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";
import { toPersianNum } from "@/utility/parsianNum";

const UserFollow = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const SwitchOn = useSelector((state: RootState) => state.cart.isSwitchOn);

  // if (!login) {
  //   return (
  //     <div className="container">
  //     <p>
  //       لطفاً برای مشاهده این صفحه <a href="/login">وارد شوید</a> یا <a href="/register">ثبت نام کنید</a>.
  //     </p>
  //   </div>
  //   );
  // }
  return (
    <>
      <section className="gi-User-Follow padding-tb-40">
        <div className="container">
          <Row className="mb-minus-24px">
            <VendorSidebar />
            <Col lg={9} md={12} className="mb-24">
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                <h5>فهرست دنبال کنندگان شما</h5>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    <table className="table gi-vender-table">
                    <thead>
                        <tr>
                          <th scope="col">فروشنده</th>
                          <th scope="col">نام</th>
                          <th scope="col">محصول</th>
                          <th scope="col">سطح</th>
                          <th scope="col">کشور</th>
                          <th scope="col">اقدامات</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/vendor/1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>شاپ مارکت</span>
                          </td>
                          <td>
                            <span>{toPersianNum("678")}</span>
                          </td>
                          <td>
                            <span>{toPersianNum(8)}</span>
                          </td>
                          <td>
                            <span>هند</span>
                          </td>
                          <td>
                            <span>
                              <a href="#" className="gi-btn-2">
                              لغو دنبال کردن
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/vendor/1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>سیتی مارکت</span>
                          </td>
                          <td>
                            <span>{toPersianNum("628")}</span>
                          </td>
                          <td>
                            <span>{toPersianNum(1)}</span>
                          </td>
                          <td>
                            <span>روسیه</span>
                          </td>
                          <td>
                            <span>
                              <a href="#" className="gi-btn-2">
                              لغو دنبال کردن
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/vendor/1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>سیتی مارکت</span>
                          </td>
                          <td>
                            <span>{toPersianNum("328")}</span>
                          </td>
                          <td>
                            <span>{toPersianNum(3)}</span>
                          </td>
                          <td>
                            <span>هلند</span>
                          </td>
                          <td>
                            <span>
                              <a href="#" className="gi-btn-2">
                              لغو دنبال کردن
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/vendor/1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span> مارکت</span>
                          </td>
                          <td>
                            <span>{toPersianNum("128")}</span>
                          </td>
                          <td>
                            <span>{toPersianNum(1)}</span>
                          </td>
                          <td>
                            <span>ترکیه</span>
                          </td>
                          <td>
                            <span>
                              <a href="#" className="gi-btn-2">
                              لغو دنبال کردن
                              </a>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default UserFollow;
