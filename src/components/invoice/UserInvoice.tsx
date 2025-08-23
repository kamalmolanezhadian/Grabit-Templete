"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";

import { PDFContent } from "@/components/pdf-content/PDFContent";
import { toPersianNum } from "@/utility/parsianNum";
import { formatNumber } from "@/utility/formatNum";

const UserInvoice = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  if (!login) {
    return (
      <div className="container">
       <p>
          لطفاً <a href="/login">وارد شوید</a> یا <a href="/register">ثبت نام کنید</a>{" "}
          برای مشاهده این صفحه
        </p>
      </div>
    );
  }
  return (
    <>
      <section className="gi-User-invoice padding-tb-40">
        <div className="container">
          <div className="row mb-minus-24px">
            <VendorSidebar />
            <div className="col-lg-9 col-md-12 mb-24">
              <div className="gi-vendor-dashboard-card">
                <PDFContent
                  title="فاکیتور"
                  pageSize="A4"
                  margins="20mm"
                  fileName="user-invoice.pdf"
                >
                  <div className="gi-Track-image-inner">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL +
                        "/assets/img/logo/logo.png"
                      }
                      alt="Site Logo"
                    />
                  </div>
                  <div className="row invoice-p-30">
                    <div className="col-sm-6">
                      <div className="my-2">
                        <span className="text-sm text-grey-m2 align-middle">
                        به :{" "}
                        </span>
                        <span className="name">فاطمه کوشکی</span>
                      </div>
                      <div className="text-grey-m2">
                        <div className="my-2">لرستان - کوهدشت -شهرک رجایی</div>
                        <div className="my-2">
                          <b className="text-600">تلفن همراه : </b>{toPersianNum("09122222222")}
                        </div>
                      </div>
                    </div>
                    <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                      <hr className="d-sm-none" />
                      <div className="text-grey-m2">
                        <div className="my-2">
                          <span className="text-600 text-90">شناسه کاربری : </span>
                          {toPersianNum("111-222#")}
                        </div>

                        <div className="my-2">
                          <span className="text-600 text-90"> کد گمرکی کالا :</span>{" "}
                         {toPersianNum("123456#")}
                        </div>
                        <div className="my-2">
                          <span className="text-600 text-90">تاریخ ارسال:</span>{" "}
                          {toPersianNum("12 اکتبر 1403")}
                        </div>

                        <div className="my-2">
                          <span className="text-600 text-90">شماره فاکتور :</span>
                          {toPersianNum("6767")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gi-vendor-card-body">
                    <div className="gi-vendor-card-table mb-minus-24px">
                      <table className="table gi-vender-table">
                        <thead>
                        <tr>
                            <th scope="col">شناسه کاربری</th>
                            <th scope="col">نام</th>
                            <th scope="col">تعداد</th>
                            <th scope="col">قیمت</th>
                            <th scope="col">مقدار</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <span>{toPersianNum(3322)}</span>
                            </th>
                            <td>
                              <span>اسنک چیپس مثلثی ترد</span>
                            </td>
                            <td>
                              <span>{toPersianNum(1)}</span>
                            </td>
                            <td>
                              <span>{formatNumber(300000)}تومان</span>
                            </td>
                            <td>
                            <span>{formatNumber(400000)}تومان</span>

                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span>{toPersianNum(3322)}</span>
                            </th>
                            <td>
                              <span>اسنک چیپس مثلثی ترد</span>
                            </td>
                            <td>
                              <span>{toPersianNum(1)}</span>
                            </td>
                            <td>
                              <span>{formatNumber(300000)}تومان</span>
                            </td>
                            <td>
                            <span>{formatNumber(400000)}تومان</span>

                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span>{toPersianNum(3322)}</span>
                            </th>
                            <td>
                              <span>اسنک چیپس مثلثی ترد</span>
                            </td>
                            <td>
                              <span>{toPersianNum(1)}</span>
                            </td>
                            <td>
                              <span>{formatNumber(300000)}تومان</span>
                            </td>
                            <td>
                            <span>{formatNumber(400000)}تومان</span>

                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span>{toPersianNum(3322)}</span>
                            </th>
                            <td>
                              <span>اسنک چیپس مثلثی ترد</span>
                            </td>
                            <td>
                              <span>{toPersianNum(1)}</span>
                            </td>
                            <td>
                              <span>{formatNumber(300000)}تومان</span>
                            </td>
                            <td>
                            <span>{formatNumber(400000)}تومان</span>

                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td className="border-none" colSpan={3}>
                              <span></span>
                            </td>
                            <td className="border-color" colSpan={1}>
                              <span>
                              <strong>مجموع فرعی</strong>
                              </span>
                            </td>
                            <td className="border-color">
                              <span>{formatNumber(1900000)} تومان</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-none" colSpan={3}>
                              <span></span>
                            </td>
                            <td className="border-color" colSpan={1}>
                              <span>
                                <strong>مالیات ({toPersianNum(10)}%)</strong>
                              </span>
                            </td>
                            <td className="border-color">
                              <span>{formatNumber(200000)} تومان</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-none m-m15" colSpan={3}>
                              <span className="note-text-color">
                              یادداشت اضافی مانند شرکت یا پرداخت
                                اطلاعات...
                              </span>
                            </td>
                            <td className="border-color m-m15" colSpan={1}>
                              <span>
                                <strong>مجموع</strong>
                              </span>
                            </td>
                            <td className="border-color m-m15">
                              <span>{formatNumber(200000)} تومان</span>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </PDFContent>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInvoice;
