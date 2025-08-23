"use client";
import { toPersianNum } from "@/utility/parsianNum";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Fade triggerOnce direction="up" duration={2000} delay={200}>
      <section
        className="gi-banner padding-tb-40 wow fadeInUp"
        data-wow-duration="2s"
      >
        <div className="container">
          <Row>
            <Col md={12}>
              <div
                className="gi-animated-banner"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <h2 className="d-none">پیشنهادات</h2>
                <div className="gi-bnr-detail">
                  <div className="gi-bnr-info">
                    <h2>
                    میوه های تازه <br></br>محصولات سالم
                    </h2>
                    <h3>
                      {toPersianNum(30)}% تخفیف در فروش <span>عجله کن!!!</span>
                    </h3>
                    <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                      خرید اکنون
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Fade>
  );
};

export default Banner;
