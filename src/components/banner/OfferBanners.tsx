"use client";
import { toPersianNum } from "@/utility/parsianNum";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Row } from "react-bootstrap";

const OfferBanners = () => {
  return (
    <>
      <section className="gi-offer-section padding-tb-40">
        <div className="container">
          {/* <!--  Offer banners --> */}
          <Row>
            <Fade
              triggerOnce
              direction="left"
              duration={2000}
              className="col-md-6 wow fadeInLeft"
              data-wow-duration="2s"
            >
              <div className="gi-ofr-banners">
                <div className="gi-bnr-body">
                  <div className="gi-bnr-img">
                    <span className="lbl">{toPersianNum(30)}% تخفیف</span>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL + "/assets/img/banner/2.jpg"
                      }
                      alt="banner"
                    />
                  </div>
                  <div className="gi-bnr-detail">
                    <h5>میان وعده و فست فود خوشمزه</h5>
                    <p>طعم یک چیز خاص</p>
                    <a href="/shop-left-sidebar-col-3" className="gi-btn-2">
                      خرید اکنون
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade
              triggerOnce
              direction="right"
              duration={2000}
              className="col-md-6 wow fadeInRight"
              data-wow-duration="2s"
            >
              <div className="gi-ofr-banners m-t-767">
                <div className="gi-bnr-body">
                  <div className="gi-bnr-img">
                    <span className="lbl">{toPersianNum(50)} % تخفیف</span>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL + "/assets/img/banner/3.jpg"
                      }
                      alt="banner"
                    />
                  </div>
                  <div className="gi-bnr-detail">
                    <h5>میوه ها و سبزیجات تازه</h5>
                    <p>یک وعده غذایی سالم برای هر کس</p>
                    <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                      خرید اکنون
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </Row>
        </div>
      </section>
    </>
  );
};

export default OfferBanners;
