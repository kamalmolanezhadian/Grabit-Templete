"use client";
import { toPersianNum } from "@/utility/parsianNum";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaMobileAlt,
  FaGlobeAmericas,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <section className="gi-contact padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
            وارد شوید <span>لمس کنید</span>
            </h2>
            <p>
            لطفاً موضوعی را در زیر مرتبط با درخواست خود انتخاب کنید. اگر نداری
            آنچه را که نیاز دارید پیدا کنید، فرم تماس ما را پر کنید.
            </p>
          </div>
          <Row className="gi-contact-detail m-tb-minus-12">
            <Col sm={6} lg={4} className="p-tp-12">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-envelope" aria-hidden="true">
                      <FaEnvelope />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">ایمیل و وب سایت</h3>
                    <p>
                      <i className="fa fa-envelope" aria-hidden="true">
                        <FaEnvelope />
                      </i>{" "}
                      &nbsp; mail.example@gmail.com
                    </p>
                    <p>
                      <i className="fa fa-globe" aria-hidden="true">
                        <FaGlobeAmericas />
                      </i>{" "}
                      &nbsp; www.yourdomain.com
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>

            <Col sm={6} lg={4} className="p-tp-12">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-mobile" aria-hidden="true">
                      <FaMobileAlt />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">تماس</h3>
                    <p>
                      <i className="fa fa-mobile" aria-hidden="true">
                        <FaMobileAlt />
                      </i>{" "}
                      &nbsp; {toPersianNum("09121222222")}
                    </p>
                    <p>
                      <i className="fa fa-mobile" aria-hidden="true">
                        <FaMobileAlt />
                      </i>{" "}
                      &nbsp; {toPersianNum("09121222222")}
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>

            <Col sm={6} lg={4} className="p-tp-12 m-auto">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true">
                      <FaMapMarkerAlt />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">آدرس</h3>
                    <p>
                      <i className="fa fa-map-marker" aria-hidden="true">
                        <FaMapMarkerAlt />
                      </i>{" "}
                      &nbsp; رویامی ملو مورائس فیلو، ساکن خیابان مورائس فیلو، پلاک ۹۸۷، شهر سالوادور، استان میناس گرایس (MA)، کدپستی ۴۰۳۵۲، کشور برزیل است.
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>
          </Row>
          <Row className="p-t-80">
            <Col md={6}>
              <iframe src="//maps.google.com/maps?q=-12.942227,-38.480291&z=15&output=embed"></iframe>
            </Col>
            <Col md={6}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="نام کامل"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    لطفا نام خود را وارد نمایید
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="umail"
                    placeholder="ایمیل"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                  لطفا نام کاربری صحیح را وارد کنید
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="تلفن"
                    pattern="^(0|\+98|0098)?9\d{9}$" 
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                  لطفا شماره 11 رقمی را وارد کنید
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="پیام"
                    required
                  ></textarea>
                  <Form.Control.Feedback type="invalid">
                  لطفا پیام را وارد کنید
                  </Form.Control.Feedback>
                </Form.Group>
                <button type="submit" className="gi-btn-2">
                  ارسال
                </button>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Contact;
