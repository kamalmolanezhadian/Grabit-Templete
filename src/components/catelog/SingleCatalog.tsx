import { toPersianNum } from "@/utility/parsianNum";
import Shop from "../shop-sidebar/Shop";
import { Col, Row } from "react-bootstrap";

const SingleCatelog = () => {
  return (
    <>
      <section className="gi-single-vendor padding-tb-40">
        <div className="container">
        <Row>
            <Col lg={12}>
              <div className="gi-page-description">
                <img
                  src={process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/1.jpg"}
                  alt="vendor"
                />
                <div className="detail">
                  <h5 className="gi-desc-title">درباره شرکت ما</h5>
                  <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                  </p>
                </div>
              </div>
            </Col>
          </Row>
           <Row>
                      <Col lg={3} md={6}>
                        <div className="gi-vendor-dashboard-sort-card">
                          <h5>غذاهای نئون</h5>
                          <span>( کسب و کار خرده فروشی )</span>
                        </div>
                      </Col>
                      <Col lg={3} md={6}>
                        <div className="gi-vendor-dashboard-sort-card">
                          <h5>سطح</h5>
                          <span>سطح : {toPersianNum(9)} از {toPersianNum(10)}</span>
                        </div>
                      </Col>
                      <Col lg={3} md={6}>
                        <div className="gi-vendor-dashboard-sort-card">
                          <h5>محصولات فروشنده</h5>
                          <span>{toPersianNum(598)} محصول</span>
                        </div>
                      </Col>
                      <Col lg={3} md={6}>
                        <div className="gi-vendor-dashboard-sort-card">
                          <h5>از زمان فروشنده</h5>
                          <span>{toPersianNum(1)} سال و {toPersianNum(11)}ماه</span>
                        </div>
                      </Col>
                    </Row>
        </div>
      </section>
      <section className="gi-shop">
        <div className="container">
          <Shop order={"order-lg-last order-md-first"} lg={9} xl={4} />
        </div>
      </section>
    </>
  );
};

export default SingleCatelog;
