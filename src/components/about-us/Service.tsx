import React from "react";
import Services from "../service/Services";
import { Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    <>
      <section className="gi-service-section padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
            <span>خدمات</span> ما 
            </h2>
            <p>
            خدمات مشتری نباید یک بخش باشد. باید کل شرکت باشد.
            </p>
          </div>
          <Row className="m-tb-minus-12">
            <Services />
          </Row>
        </div>
      </section>
    </>
  );
};

export default Service;
