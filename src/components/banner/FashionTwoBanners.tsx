import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import { Col, Row } from "react-bootstrap";
import Spinner from "../button/Spinner";
import { toPersianNum } from "@/utility/parsianNum";

const FashionTwoBanners = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/fashiontwobanner", fetcher, {
    onSuccess,
    onError,
  });

  if (error) return <div>محصولات بارگیری نشد</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <>
      <div className="gi-offer-section padding-tb-40">
        {/* <!--  Offer banners --> */}
        <div className="container">
          <Row>
            <Col xl={4} md={6} className="wow fadeInUp" data-wow-duration="2s">
              <Fade triggerOnce direction="up" duration={2000}>
                <div className="gi-ofr-banners">
                  <div className="gi-bnr-body bnr-3">
                    <div className="gi-bnr-img">
                      <span className="lbl">{toPersianNum(50)} % تخفیف</span>
                      <img
                        src={
                          process.env.NEXT_PUBLIC_URL +
                          "/assets/img/banner/12.jpg"
                        }
                        alt="banner"
                      />
                    </div>
                    <div className="gi-bnr-detail">
                    <h5>کالکشن زنانه</h5>
                      <Link
                        href="/shop-left-sidebar-col-3"
                        className="gi-btn-2"
                      >
                        خرید اکنون
                      </Link>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col xl={4} md={6} className="wow fadeInUp" data-wow-duration="2s">
              <Fade triggerOnce direction="up" duration={2000}>
                <div className="gi-ofr-banners m-t-767">
                  <div className="gi-bnr-body bnr-3">
                    <div className="gi-bnr-img">
                      <span className="lbl">{toPersianNum(50)} % تخفیف</span>
                      <img
                        src={
                          process.env.NEXT_PUBLIC_URL +
                          "/assets/img/banner/13.jpg"
                        }
                        alt="banner"
                      />
                    </div>
                    <div className="gi-bnr-detail">
                    <h5>کالکشن کودک</h5>
                      <Link
                        href="/shop-left-sidebar-col-3"
                        className="gi-btn-2"
                      >
                        خرید اکنون
                      </Link>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col
              xl={4}
              md={6}
              className="wow fadeInUp d-n-1199"
              data-wow-duration="2s"
            >
              <Fade triggerOnce direction="up" duration={2000}>
                <div className="gi-ofr-banners m-t-767">
                  <div className="gi-bnr-body bnr-3">
                    <div className="gi-bnr-img">
                      <span className="lbl">{toPersianNum(50)}% تخفیف</span>
                      <img
                        src={
                          process.env.NEXT_PUBLIC_URL +
                          "/assets/img/banner/14.jpg"
                        }
                        alt="banner"
                      />
                    </div>
                    <div className="gi-bnr-detail">
                    <h5>کالکشن مردانه</h5>
                      <Link
                        href="/shop-left-sidebar-col-3"
                        className="gi-btn-2"
                      >
                        خرید اکنون
                      </Link>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default FashionTwoBanners;
