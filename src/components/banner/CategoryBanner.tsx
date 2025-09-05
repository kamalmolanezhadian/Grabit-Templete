import { toPersianNum } from "@/utility/parsianNum";
import Link from "next/link";
import React from "react";

const CategoryBanner = () => {
  return (
    <>
      <div className="padding-b-40 m-b-40">
        <div className="row">
          <div className="col-md-6">
            <div className="gi-ofr-banners">
              <div className="gi-bnr-body">
                <div className="gi-bnr-img">
                  <span className="lbl">{toPersianNum(50)}% تخفیف</span>
                  <img
                    src={
                      process.env.NEXT_PUBLIC_URL + "/assets/img/banner/5.jpg"
                    }
                    alt="banner"
                  />
                </div>
                <div className="gi-bnr-detail">
                  <h5>میوه ها و سبزیجات تازه</h5>
                  <p>طعم یک چیز خاص</p>
                  <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                    خرید اکنون
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="gi-ofr-banners m-t-767">
              <div className="gi-bnr-body">
                <div className="gi-bnr-img">
                  <span className="lbl">{toPersianNum(50)}% تخفیف</span>
                  <img
                    src={
                      process.env.NEXT_PUBLIC_URL + "/assets/img/banner/6.jpg"
                    }
                    alt="banner"
                  />
                </div>
                <div className="gi-bnr-detail">
                  <h5>میان وعده و فست فود خوشمزه</h5>
                  <p>یک وعده غذایی سالم برای هر کس</p>
                  <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                    خرید اکنون
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
