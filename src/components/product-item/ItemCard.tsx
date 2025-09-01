import React, { useState } from "react";
import allproduct from "@/data/all.product";

interface ItemCardProps {
  data: typeof allproduct[0];
  handleWishlist: (product: typeof allproduct[0]) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ data, handleWishlist }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="gi-product-content">
        <div className="gi-product-inner">
          <div className="gi-pro-image-outer">
            <img src={data.image} alt={data.title} className="gi-pro-image" />
            <img src={data.imageTwo} alt={data.title} className="gi-pro-image-two" />
          </div>

          {/* بخش پرچم فروش */}
          {data.sale && (
            <div className="gi-product-flags">
              <span
                className={`gi-product-flag ${
                  data.sale === "جدید"
                    ? "new"
                    : data.sale === "حراج"
                    ? "sale"
                    : "special"
                }`}
              >
                {data.sale}
              </span>
            </div>
          )}

          <div className="gi-pro-details">
            <h3 className="gi-pro-title">{data.title}</h3>
            <div className="gi-pro-price">
              <span className="new-price">{data.newPrice} تومان</span>
              {data.oldPrice && <span className="old-price">{data.oldPrice} تومان</span>}
            </div>
            <div className="gi-pro-actions">
              <button onClick={() => handleWishlist(data)}>افزودن به علاقه‌مندی</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
