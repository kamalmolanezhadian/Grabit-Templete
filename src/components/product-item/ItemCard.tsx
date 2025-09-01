import React from "react";

export interface ItemCardProps {
  data: any;
  handleWishlist: (item: any) => void;
}
interface ItemCardProps {
  data: any;
  handleWishlist: (item: any) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ data, handleWishlist }) => {
  return (
    <div className="item-card">
      {/* تصویر محصول */}
      <div className="item-card-image">
        <img src={data.image || "/placeholder.png"} alt={data.name || "Item"} />
      </div>

      {/* اطلاعات محصول */}
      <div className="item-card-content">
        <h3 className="item-card-title">{data.name}</h3>
        <p className="item-card-price">${data.price}</p>
      </div>

      {/* دکمه علاقه‌مندی */}
      <button
        className="item-card-wishlist"
        onClick={() => handleWishlist(data)}
      >
        ❤️ افزودن به علاقه‌مندی
      </button>
    </div>
  );
};

export default ItemCard;

