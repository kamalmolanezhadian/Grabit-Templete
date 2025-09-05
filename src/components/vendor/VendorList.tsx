"use client";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import useSWR from "swr";
import { toPersianNum } from "@/utility/parsianNum";
import { formatNumber } from "@/utility/formatNum";

const VendorList = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const { data, error } = useSWR("/api/vendorlist", fetcher, {
    onSuccess,
    onError,
  });

  if (error) return <div>محصولات بارگیری نشد ...</div>;
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
      <div className="padding-tb-40">
        {getData().map((item: any, index: number) => (
          <section
            className="section gi-catalog-multi-vendor m-b-30"
            key={index}
          >
            <div className="container">
              <div className="row">
                <div className="gi-multi-vendor-detail">
                  <div className="gi-page-description-info">
                    <div className="gi-catalog-vendor">
                      <img src={item.image} alt="vendor img" />
                    </div>
                    <div className="gi-catalog-vendor-info">
                      <div className="row vendor-card-height">
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                            <a href="/catalog-single-vendor">
                              <h6 className="name">{item.name}</h6>
                            </a>
                            <p>( {item.description} )</p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                          <h6>سطح</h6>
                            <p>
                              (سطح: {toPersianNum(item.level)} از {toPersianNum(item.levelOutOf)})
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                            <h6>محصولات فروشنده</h6>
                            <p>{formatNumber(item.products)} محصولات</p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 detail-card-space">
                          <div className="catalog-detail-card">
                          <h6>فروشنده از زمان</h6>
                            <p>{toPersianNum(2)} سال و {toPersianNum(10)} ماه</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default VendorList;
