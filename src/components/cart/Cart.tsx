"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCard from "../product-item/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeItem } from "../../store/reducers/cartSlice";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import DiscountCoupon from "../discount-coupon/DiscountCoupon";
import QuantitySelector from "../quantity-selector/QuantitySelector";
import Link from "next/link";
import { toPersianNum } from "@/utility/parsianNum";

interface Country {
  id: string;
  name: any;
  iso2: string;
}

interface State {
  id: string;
  name: any;
  state_code: string;
}

const Cart = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [filteredCountryData, setFilteredCountryData] = useState<Country[]>([]);
  const [filteredStateData, setFilteredStateData] = useState<State[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [discount, setDiscount] = useState(0);

  const { data: country } = useSWR("/api/country", fetcher, {
    onSuccess,
    onError,
  });

  useEffect(() => {
    if (country) {
      setFilteredCountryData(
        country.map((country: any) => ({
          id: country.id,
          countryName: country.name,
          iso2: country.iso2,
        }))
      );
    }
  }, [country]);

  const handleCountryChange = async (e: any) => {
    const { value } = e.target;
    setLoadingStates(true);
    const response = await fetcher(`/api/state`, {
      country_code: value,
    });
    setLoadingStates(false);
    setFilteredStateData(
      response.map((state: any) => ({
        id: state.id,
        StateName: state.name,
        state_code: state.state_code,
      }))
    );
  };

  const handleStateChange = async (e: any) => {
    const { value, options, selectedIndex } = e.target;
    const stateName = options[selectedIndex].text;
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      setSubTotal(0);
      setVat(0);
      return;
    }

    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.newPrice * item.quantity,
      0
    );
    setSubTotal(subtotal);
    const vatAmount = subtotal * 0.2;
    setVat(vatAmount);
  }, [cartItems]);

  const handleDiscountApplied = (discount: number) => {
    setDiscount(discount);
  };

  const discountAmount = subTotal * (discount / 100);
  const total = subTotal + vat - discountAmount;

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeItem(item.id));
  };

  // **اضافه کردن تابع handleWishlist**
  const handleWishlist = (item: any) => {
    console.log("Added to wishlist:", item);
  };

  const { data, error } = useSWR("/api/deal", fetcher, { onSuccess, onError });

  if (error) return <div>محصولات بارگیری نشد</div>;
  if (!data) return <Spinner />;

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  return (
    <>
      <section className="gi-cart-section padding-tb-40">
        <h2 className="d-none">صفحه سبد خرید</h2>
        <div className="container">
          {cartItems.length === 0 ? (
            <div
              style={{ textAlign: "center", fontSize: "20px", fontWeight: "300" }}
              className="gi-pro-content cart-pro-title"
            >
              آیتم را در سبد خرید اضافه کنید
            </div>
          ) : (
            <div className="row">
              <div className="gi-cart-rightside col-lg-4 col-md-12">
                <div className="gi-sidebar-wrap">
                  <div className="gi-sidebar-block">
                    <div className="gi-sb-title">
                      <h3 className="gi-sidebar-title">خلاصه</h3>
                    </div>
                    <div className="gi-sb-block-content">
                      <h4 className="gi-ship-title">تخمین حمل و نقل</h4>
                      <div className="gi-cart-form">
                        <p>مقصد خود را برای دریافت برآورد حمل و نقل وارد کنید</p>
                        <form action="#" method="post">
                          <span className="gi-cart-wrap">
                            <label>کشور </label>
                            <span className="gi-cart-select-inner">
                              <select
                                name="gi_cart_country"
                                id="gi-cart-select-country"
                                className="gi-cart-select"
                                defaultValue=""
                                onChange={handleCountryChange}
                              >
                                <option value="" disabled>
                                  کشور
                                </option>
                                {filteredCountryData.map((country: any, index: number) => (
                                  <option key={index} value={country.iso2}>
                                    {country.countryName}
                                  </option>
                                ))}
                              </select>
                            </span>
                          </span>
                          <span className="gi-cart-wrap">
                            <label>ایالت/استان</label>
                            <span className="gi-cart-select-inner">
                              <select
                                name="state"
                                id="gi-select-state"
                                className="gi-register-select"
                                onChange={handleStateChange}
                              >
                                <option value="" disabled>
                                  منطقه / ایالت
                                </option>
                                {loadingStates ? (
                                  <option disabled>در حال بارگزاری</option>
                                ) : (
                                  filteredStateData.map((state: any, index) => (
                                    <option key={index} value={state.state_code}>
                                      {state.StateName}
                                    </option>
                                  ))
                                )}
                              </select>
                            </span>
                          </span>
                          <span className="gi-cart-wrap">
                            <label>کد پستی</label>
                            <input type="text" name="postalcode" placeholder="کد پستی" />
                          </span>
                        </form>
                      </div>
                    </div>
                    <div className="gi-sb-block-content">
                      <div className="gi-cart-summary-bottom">
                        <div className="gi-cart-summary">
                          <div>
                            <span className="text-left">کل فرعی</span>
                            <span className="text-right">${toPersianNum(subTotal.toFixed(2))}</span>
                          </div>
                          <div>
                            <span className="text-left">هزینه های تحویل</span>
                            <span className="text-right">${toPersianNum(vat.toFixed(2))}</span>
                          </div>
                          <div>
                            <DiscountCoupon onDiscountApplied={handleDiscountApplied} />
                          </div>
                          <div className="gi-cart-coupan-content">
                            <form
                              className="gi-cart-coupan-form"
                              name="gi-cart-coupan-form"
                              method="post"
                              action="#"
                            >
                              <input
                                className="gi-coupan"
                                type="text"
                                required
                                placeholder="کد کوپن خود را وارد کنید"
                                name="gi-coupan"
                                defaultValue=""
                              />
                              <button className="gi-btn-2" type="submit" name="subscribe" defaultValue="">
                                درخواست
                              </button>
                            </form>
                          </div>
                          <div className="gi-cart-summary-total">
                            <span className="text-left">مقدار کل</span>
                            <span className="text-right">${toPersianNum(total.toFixed(2))}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gi-cart-leftside col-lg-8 col-md-12 m-t-991">
                <div className="gi-cart-content">
                  <div className="gi-cart-inner">
                    <div className="row">
                      <form action="#">
                        <div className="table-content cart-table-content">
                          <table>
                            <thead>
                              <tr>
                                <th>محصول</th>
                                <th>قیمت</th>
                                <th style={{ textAlign: "center" }}>مقدار</th>
                                <th>مجموع</th>
                                <th>اکشن</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cartItems.map((item: any, index: number) => (
                                <tr key={index}>
                                  <td data-label="Product" className="gi-cart-pro-name">
                                    <a href="/product-left-sidebar">
                                      <img className="gi-cart-pro-img mr-4" src={item.image} alt="" />
                                      {item.title}
                                    </a>
                                  </td>
                                  <td data-label="Price" className="gi-cart-pro-price">
                                    <span className="amount">${toPersianNum(item.newPrice)}</span>
                                  </td>
                                  <td data-label="Quantity" className="gi-cart-pro-qty" style={{ textAlign: "center" }}>
                                    
