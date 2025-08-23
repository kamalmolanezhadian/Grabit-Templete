import { toPersianNum } from "@/utility/parsianNum";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";

const DiscountCoupon = ({ onDiscountApplied }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isBtnVisible, setIsBtnVisible] = useState(true);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleApplyDiscount = () => {
    if (couponCode === "") {
      setErrorMessage("کد کوپن نمی تواند خالی باشد");
      setDiscount(0);
    } else if (couponCode === "SAVE10") {
      setDiscount(10); // 10% discount
      setErrorMessage("");
      setIsBtnVisible(false);
    } else if (couponCode === "SAVE20") {
      setDiscount(20); // 10% discount
      setErrorMessage("");
      setIsBtnVisible(false);
    } else {
      setDiscount(0); // No discount
      setErrorMessage("تخفیف بیش از مقدار مجاز غیرقابل اعمال است.");
    }
  };

  const handleRemoveCoupon = () => {
    setCouponCode("");
    setDiscount(0);
    setIsInputVisible(false);
    setIsBtnVisible(true);
    setErrorMessage("");
    onDiscountApplied(discount);
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <span className="text-left">تخفیف کوپن </span>
          {isBtnVisible ? (
            <span style={{ marginLeft: "90px" }} className="text-right">
              <a
                className="gi-checkout-coupon cursor-pointer"
                onClick={() => setIsInputVisible(true)}
              >
                اعمال تخفیف
              </a>
            </span>
          ) : (
            <span style={{ marginLeft: "100px" }} className="text-right">
              {toPersianNum(discount)}% تخفیف
            </span>
          )}
        </div>
        {isInputVisible && (
          <div className="mt-2">
            {isBtnVisible ? (
              <>
                <input
                  style={{ width: "210px", height: "40px" }}
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="کد کوپن را وارد کنید"
                  className="border p-2"
                />
                <button
                  style={{ marginLeft: "50px" }}
                  className="ml-2 p-2 bg-blue-500 text-white"
                  onClick={handleApplyDiscount}
                >
                  درخواست
                </button>
              </>
            ) : (
              <>
                <span style={{ position: "relative" }}>
                  {" "}
                  <Badge bg="secondary">
                    {couponCode}
                    <a
                      onClick={handleRemoveCoupon}
                      style={{
                        color: "white",
                        position: "absolute",
                        right: "0",
                        top: "0",
                        fontSize: "12px",
                      }}
                      className="gi-select-cancel"
                      href="#"
                    >
                      ×
                    </a>
                  </Badge>
                </span>
              </>
            )}
          </div>
        )}
        {errorMessage && (
          <div className="mt-2 text-red-500">{errorMessage}</div>
        )}
        {discount > 0 && discount <= 100 && (
          <div className="mt-2 text-green-500">
            تخفیف اعمال شد! دریافت کردید {toPersianNum(discount)}% تخفیف.
          </div>
        )}
        {discount > 100 && (
          <div className="mt-2 text-red-500">
           تخفیف بیش از مقدار مجاز غیرقابل اعمال است
          </div>
        )}
      </div>
    </>
  );
};

export default DiscountCoupon;
