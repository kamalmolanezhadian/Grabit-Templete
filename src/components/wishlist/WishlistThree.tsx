"use client";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../../store/reducers/cartSlice";
import { addWishlist, removeWishlist } from "@/store/reducers/wishlistSlice";
import { addCompare, removeCompareItem } from "@/store/reducers/compareSlice";
import { useState } from "react";
import QuickViewModal from "../model/QuickViewModal";
import { showSuccessToast } from "../toast-popup/Toastify";
import StarRating from "../stars/StarRating";
import { formatNumber } from "@/utility/formatNum";

interface Item {
  id: number;
  title: string;
  newPrice: number;
  waight: string;
  image: string;
  imageTwo: string;
  date: string;
  status: string;
  rating: number;
  oldPrice: number;
  location: string;
  brand: string;
  sku: number;
  category: string;
  quantity: number;
}

const WishlistThree = () => {
  const [show, setShow] = useState(false);
  const [quickData, setQuickData] = useState<Item>();
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlist
  );

  const compareItems = useSelector((state: RootState) => state.compare.compare);

  const dispatch = useDispatch();

  const handleRemoveFromwishlist = (id: number) => {
    dispatch(removeWishlist(id));
  };

  const handleCart = (data: Item) => {
    dispatch(addItem(data));
  };

  const handleClose = () => setShow(false);
  const handleShow = (eachItem: Item) => {
    setQuickData(eachItem);
    setShow(true);
  };

  const isInWishlist = (data: Item) => {
    return wishlistItems.some((item: Item) => item.id === data.id);
  };

  const handleWishlist = (data: Item) => {
    if (!isInWishlist(data)) {
      dispatch(addWishlist(data));
      showSuccessToast("با موفقیت محصول را در لیست علاقه مندی ها اضافه کنید!", {
        icon: false,
      });
    } else {
      dispatch(removeWishlist(data.id));
      showSuccessToast("حذف محصول در لیست علاقه مندی ها با موفقیت!", {
        icon: false,
      });
      // showErrorToast("Item already have to wishlist");
    }
  };

  const isInCompare = (data: Item) => {
    return compareItems.some((item: Item) => item.id === data.id);
  };

  const handleCompareItem = (data: Item) => {
    if (!isInCompare(data)) {
      dispatch(addCompare(data));
      showSuccessToast(`افزودن محصول به لیست مقایسه با موفقیت!`, {
        icon: false,
      });
    } else {
      dispatch(removeCompareItem(data.id));
      showSuccessToast("حذف محصول در لیست مقایسه با موفقیت!", {
        icon: false,
      });
      // showErrorToast("Item already have to compare list");
    }
  };

  return (
    <>
      <section className="gi-wishlist padding-tb-40">
        <div className="container">
          <div className="row mb-minus-24px">
            {wishlistItems.map((data, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 gi-product-box pro-gl-content"
              >
                <a
                  href="#/"
                  onClick={() => handleRemoveFromwishlist(data.id)}
                  className="remove-product"
                >
                  <i className="fi-rr-cross-small"></i>
                </a>
                <div className="gi-product-content">
                  <div className="gi-product-inner">
                    <div className="gi-pro-image-outer">
                      <div className="gi-pro-image">
                        <a href="/product-left-sidebar" className="image">
                          <span className="label veg">
                            <span className="dot"></span>
                          </span>
                          <img
                            className="main-image"
                            src={data.image}
                            alt="Product"
                          />
                          <img
                            className="hover-image"
                            src={data.imageTwo}
                            alt="Product"
                          />
                        </a>

                        <div className="gi-pro-actions">
                          <a
                            href="#"
                           
                            className={
                              "gi-btn-group wishlist " +
                              (isInWishlist(data) ? "active" : "")
                            }
                            title="لیست آرزوها"
                            onClick={() => handleCart(data)}
                          >
                            <i className="fi-rr-heart"></i>
                          </a>
                          <a
                            href="#"
                            className="gi-btn-group quickview"
                            data-link-action="quickview"
                            title="دیدن سرپع"
                            data-bs-toggle="modal"
                            data-bs-target="#gi_quickview_modal"
                            onClick={() => handleShow(data)}
                          >
                            <i className="fi-rr-eye"></i>
                          </a>
                          <a
                            href="#/"
                            onClick={() => handleCompareItem(data)}
                            className={
                              "gi-btn-group compare " +
                              (isInCompare(data) ? "active" : "")
                            }
                            title="مقایسه"
                          >
                            <i className="fi fi-rr-arrows-repeat"></i>
                          </a>
                          <a
                            href="#/"
                            onClick={() => handleWishlist(data)}
                            title="اضافه کردن به سبد خرید"
                            className="gi-btn-group add-to-cart"
                            
                          >
                            <i className="fi-rr-shopping-basket"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="gi-pro-content">
                      <a href="/shop-left-sidebar-col-3">
                        <h6 className="gi-pro-stitle">{data.brand}</h6>
                      </a>
                      <h5 className="gi-pro-title">
                        <a href="/product-left-sidebar">{data.title}</a>
                      </h5>
                      <p className="gi-info">
                      برخلاف تصور رایج، لورم ایپسوم ساده نیست
                        متن تصادفی ریشه در یک قطعه لاتین کلاسیک دارد
                        ادبیات مربوط به 45 قبل از میلاد، که آن را بیش از 2000 سال قدمت می‌دهد.
                      </p>
                      <div className="gi-pro-rat-price">
                        <span className="gi-pro-rating">
                          <StarRating rating={data.rating} />
                        </span>
                        <span className="gi-price">
                          <span className="new-price">{formatNumber(data.newPrice)} تومان</span>
                          <span className="old-price">{formatNumber(data.oldPrice)} تومان</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {quickData && (
        <QuickViewModal
          data={quickData}
          handleClose={handleClose}
          show={show}
        />
      )}
    </>
  );
};

export default WishlistThree;
