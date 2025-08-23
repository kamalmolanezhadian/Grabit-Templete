import React from "react";
import FashionTwoArrials from "../arrivals/FashionTwoArrials";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { toPersianNum } from "@/utility/parsianNum";

const SummerBanner = () => {
  return (
    <>
      <Fade
        triggerOnce
        direction="up"
        duration={2000}
        delay={200}>
        <div className="container">
          <div className="gi-banner ">
            <div className="row padding-tb-40">
              <div className="col-md-12">
                <Fade triggerOnce direction="up" duration={2000} delay={200}>
                  <div className="gi-animated-banner banner-3">
                    <h2 className="d-none">Offers</h2>
                    <div className="gi-bnr-detail">
                      <div className="gi-bnr-info">
                      <h3>{toPersianNum(40)}% تخفیف</h3>
                        <h2>
                        جدیدترین مجموعه انحصاری <br></br>تابستانی
                        </h2>
                        <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                          خرید اکنون
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="gi-product-tab gi-products padding-tb-40 wow fadeInUp gi-products-3">
            <FashionTwoArrials />
          </div>
        </div>
      </Fade>
    </>
  );
};

export default SummerBanner;
