"use client";
import { toPersianNum } from "@/utility/parsianNum";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row align-itegi-center">
            {/* <!-- Header Top social Start --> */}
            <div className="col text-left header-top-left d-lg-block">
              <div className="header-top-social">
                <ul className="mb-0">
                  <li className="list-inline-item persian-num">
                    <Link href="/">
                      <i className="fi fi-rr-phone-call"></i>
                    </Link>
                    {toPersianNum("09330122171")}
                   
                  </li>
                  <li className="list-inline-item persian-num">
                    <Link href="/">
                      <i className="fi fi-brands-whatsapp"></i>
                    </Link>
                    {toPersianNum("09330122171")}
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Header Top social End -->
                    <!-- Header Top Message Start --> */}
            <div className="col text-center header-top-center">
              <div className="header-top-message">
              سریع ترین مقصد خرید آنلاین جهان
              </div>
            </div>
            {/* <!-- Header Top Message End -->
                    <!-- Header Top Language Currency --> */}
             <div className="col header-top-right d-none d-lg-block">
              <div className="header-top-right-inner d-flex justify-content-end">
                <Link className="gi-help" href="/faq">
                  کمک ؟
                </Link>
                <Link className="gi-help" href="/track-order">
               پیگیری سفارش ؟
                </Link>
                {/* <!-- Language Start --> */}
                <Dropdown className="header-top-lan-curr header-top-lan">
                  <Dropdown.Toggle
                    variant=""
                    className="dropdown-toggle"
                    id="dropdown-basic"
                  >
                    انگلیسی
                    <i
                      className="fi-rr-angle-small-down"
                      aria-hidden="true"
                    ></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li" className="active">
                      انگلیسی
                    </Dropdown.Item>
                    <Dropdown.Item as="li">ایتالیایی</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* <!-- Language End -->
                                <!-- Currency Start --> */}
                <Dropdown className="header-top-lan-curr header-top-curr">
                  <Dropdown.Toggle
                    variant=""
                    className="dropdown-toggle"
                    id="dropdown-basic"
                  >
                    Dollar
                    <i
                      className="fi-rr-angle-small-down"
                      aria-hidden="true"
                    ></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li" className="dropdown-item active">
                      USD $
                    </Dropdown.Item>
                    <Dropdown.Item as="li" className="dropdown-item">
                      EUR €
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- Currency End --> */}
              </div>
            </div>
            {/* <!-- Header Top Language Currency --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
