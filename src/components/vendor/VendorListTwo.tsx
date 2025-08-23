"use client";
import { RootState } from "@/store";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import useSWR from "swr";
import { toPersianNum } from "@/utility/parsianNum";

const VendorList = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  const { data, error } = useSWR("/api/vendorlisttwo", fetcher, {
    onSuccess,
    onError,
  });

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  if (!login) {
    return (
      <div className="container">
       <p>
          لطفاً <a href="/login">وارد شوید</a> یا <a href="/register">ثبت نام کنید</a>{" "}
          برای مشاهده این صفحه
        </p>
      </div>
    );
  }
  return (
    <>
      <section className="gi-Single-Vendor padding-tb-40">
        <div className="container">
          <Row className="mb-minus-24px">
            {getData().map((item: any, index: number) => (
              <Col lg={3} sm={6} className="mb-24" key={index}>
                <div className="gi-vendor-card">
                  <div className="gi-vendor-card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="gi-vendor-card-inner">
                    <a href="/catalog-single-vendor">
                      <h6 className="name">{item.name}</h6>
                    </a>
                    <p className="des">( {item.description} )</p>
                    <div className="row info">
                      <div className="col-6">
                        <div className="gi-catalog-ratings-info">
                          <h6>سطح</h6>
                          <p>
                            {toPersianNum(item.level)} / {toPersianNum(item.levelOutOf)}
                          </p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="gi-catalog-ratings-info">
                          <h6>محصولات</h6>
                          <p>{toPersianNum(item.products)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default VendorList;
