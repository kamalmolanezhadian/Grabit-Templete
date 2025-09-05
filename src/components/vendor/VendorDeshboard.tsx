"use client";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";
import dynamic from "next/dynamic";
import { formatNumber } from "@/utility/formatNum";
import { toPersianNum } from "@/utility/parsianNum";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const VendorDeshboard = () => {
  const [products, setProducts] = useState<any[]>([]);

  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const options: any = {
    chart: {
      height: 365,
      type: "line",
      stacked: false,
      foreColor: "#373d3f",
      sparkline: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 4, 4],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 10,
      },
    },
    colors: ["#fadfa2", "#89a6ff", "#54d3c2"],
    xaxis: {
      categories: [
        "دی",
        "بهمن",
        "اسفند",
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
      ],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: true,
      horizontalAlign: "center",
      offsetX: 0,
      offsetY: 2,
      markers: {
        width: 12,
        height: 12,
        radius: 4,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: -2,
        bottom: 15,
        left: 10,
      },
    },
    tooltip: {
      theme: "dark",
      shared: true,
      y: [
        {
          formatter: (e: number) => (e !== undefined ? e.toFixed(0) + "k" : e),
        },
        {
          formatter: (e: number) =>
            e !== undefined ? "$" + e.toFixed(2) + "k" : e,
        },
        {
          formatter: (e: number) =>
            e !== undefined ? "$" + e.toFixed(2) + "k" : e,
        },
      ],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 300,
          },
          yaxis: {
            show: false,
          },
          plotOptions: {
            bar: {
              columnWidth: "40%",
              borderRadius: 5,
            },
          },
        },
      },
    ],
  };

  const series: any = [
    {
      name: "سفارشات",
      type: "bar",
      data: [23, 12, 23, 22, 15, 42, 31, 27, 45, 28, 37, 45],
    },
    {
      name: "درآمد",
      type: "line",
      data: [
        44.64, 55.48, 45.15, 67.62, 52.57, 44.38, 41.85, 41.44, 56.56, 27.84,
        43.78, 52.57,
      ],
    },
    {
      name: "هزینه",
      type: "line",
      data: [
        30.55, 24.67, 36.85, 37.08, 42.85, 38.85, 46.64, 45.42, 49.89, 36.56,
        38.49, 55.57,
      ],
    },
  ];

  useEffect(() => {
    const storedProductsString = localStorage.getItem("products");

    if (storedProductsString) {
      const storedProducts = JSON.parse(storedProductsString);
      setProducts(storedProducts);
    } else {
      console.error("No products found in localStorage");
    }
  }, []);

  if (!login) {
    return (
      <div className="container">
        <p>
          لطفاً <a href="/login">وارد شوید</a> یا{" "}
          <a href="/register">ثبت نام کنید</a> برای مشاهده این صفحه
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="gi-vendor-dashboard padding-tb-40">
        <div className="container">
          <Row className="mb-minus-24px">
            <VendorSidebar />
            <Col lg={9} md={12} className="mb-24">
              <Row>
                <div className="container">
                  <div className="gi-vendor-cover">
                    <div className="detail">
                      <img
                        src={
                          process.env.NEXT_PUBLIC_URL +
                          "/assets/img/vendor/1.jpg"
                        }
                        alt="vendor"
                      />
                      <div className="v-detail">
                        <h5>فاطمه کوشکی</h5>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
              <Row>
                <Col lg={3} md={6}>
                  <div className="gi-vendor-dashboard-sort-card">
                    <h5>محصولات</h5>
                    <h3>{formatNumber(2332)}</h3>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className="gi-vendor-dashboard-sort-card">
                    <h5>سفارش ها</h5>
                    <h3>{formatNumber(2332)}</h3>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className="gi-vendor-dashboard-sort-card">
                    <h5>درآمد</h5>
                    <h5>{formatNumber(30000000)} تومان</h5>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className="gi-vendor-dashboard-sort-card">
                    <h5>فروش</h5>
                    <h5>{formatNumber(2000000)} تومان</h5>
                  </div>
                </Col>
              </Row>
              <div className="gi-vendor-dashboard-card m-b-30px">
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
                    {products && products.length > 0 ? (
                      <table className="table gi-vender-table">
                        <thead>
                          <tr>
                            <th scope="col">شناسه کاربری</th>
                            <th scope="col">تصویر</th>
                            <th scope="col">نام</th>
                            <th scope="col">روش</th>
                            <th scope="col">وضعیت</th>
                            <th scope="col">مجموع</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((data, index) => (
                            <tr key={index}>
                              <th scope="row">
                                <span>{toPersianNum(data.id)}</span>
                              </th>
                              <td>
                                <span>
                                  <img
                                    className="prod-img"
                                    src={data.image}
                                    alt="product image"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>{data.title}</span>
                              </td>
                              <td>
                                <span>کد</span>
                              </td>
                              <td>
                                <span>در انتظار</span>
                              </td>
                              <td>
                                <span>{formatNumber(data.newPrice)} تومان</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>شما آخرین سفارشی ندارید</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="gi-vendor-dashboard-card m-b-30px">
                <div className="gi-vendor-card-header">
                  <h5>فهرست محصولات</h5>
                  <div className="gi-header-btn">
                    <a
                      className="gi-btn-2"
                      href="#"
                      style={{ marginLeft: "5px" }}
                    >
                      مشاهده همه
                    </a>
                    <a className="gi-btn-2" href="#">
                      اضافه کردن
                    </a>
                  </div>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    <table className="table gi-vender-table">
                      <thead>
                        <tr>
                          <th scope="col">شناسه کاربری</th>
                          <th scope="col">تصویر</th>
                          <th scope="col">نام</th>
                          <th scope="col">روش</th>
                          <th scope="col">وضعیت</th>
                          <th scope="col">مجموع</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <span>{toPersianNum(444)}</span>
                          </th>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/product-images/1_1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>میان وعده های چیپس مثلثی ترد</span>
                          </td>
                          <td>
                            <span>کد</span>
                          </td>
                          <td>
                            <span>در انتظار</span>
                          </td>
                          <td>
                            <span> {formatNumber(400000)} تومان</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span>{toPersianNum(22)}</span>
                          </th>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/product-images/2_1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>کیسه بسته ارزش تاریخ</span>
                          </td>
                          <td>
                            <span>نقد</span>
                          </td>
                          <td>
                            <span>در انتظار</span>
                          </td>
                          <td>
                            <span>{formatNumber(200000)} تومان</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span>{toPersianNum(22)}</span>
                          </th>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/product-images/2_1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>کیسه بسته ارزش تاریخ</span>
                          </td>
                          <td>
                            <span>نقد</span>
                          </td>
                          <td>
                            <span>در انتظار</span>
                          </td>
                          <td>
                            <span>{formatNumber(200000)} تومان</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span>{toPersianNum(22)}</span>
                          </th>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/product-images/2_1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>کیسه بسته ارزش تاریخ</span>
                          </td>
                          <td>
                            <span>نقد</span>
                          </td>
                          <td>
                            <span>در انتظار</span>
                          </td>
                          <td>
                            <span>{formatNumber(100000)} تومان</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                  <h5>آمار رشد</h5>
                  <div className="gi-header-btn">
                    <a className="gi-btn-2" href="#">
                      دیدن همه
                    </a>
                  </div>
                </div>
                <div className="gi-vendor-card-body">
                  <div id="growthChart">
                    <ApexCharts
                      options={options}
                      series={series}
                      type="line"
                      height={350}
                    />
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

export default VendorDeshboard;
