import React from "react";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section className="gi-about padding-tb-40">
        <div className="container">
          <Row>
            <Col xl={6} md={12}>
              <div className="gi-about-img">
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL + "/assets/img/common/about.png"
                  }
                  className="v-img"
                  alt="about"
                />
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL +
                    "/assets/img/common/about-2.png"
                  }
                  className="h-img"
                  alt="about"
                />
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL +
                    "/assets/img/common/about-3.png"
                  }
                  className="h-img"
                  alt="about"
                />
              </div>
            </Col>
            <Col xl={6} md={12}>
              <div className="gi-about-detail">
                <div className="section-title">
                  <h2>
                    ما کی <span>هستیم?</span>
                  </h2>
                  <p>
                  ا اینجا هستیم تا فقط بهترین محصولات را برای شما ارائه دهیم.
                    خانه های خود را با بهترین وسایل ضروری غنی کنید.
                  </p>
                </div>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                </p>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default About;
