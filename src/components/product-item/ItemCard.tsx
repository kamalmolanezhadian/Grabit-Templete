"use client";

import React from "react";

export interface ItemCardProps {
  data: {
    id: number | string;
    title: string;
    image: string;
    price: number;
    description?: string;
  };
  handleWishlist: (id: number | string) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ data, handleWishlist }) => {
  const { id, title, image, price, description } = data;

  return (
    <div className="gi-item-card">
      <div className="gi-item-image">
        <img src={image} alt={title} className="img-fluid" />
      </div>
      <div className="gi-item-details">
        <h3 className="gi-item-title">{title}</h3>
        {description && <p className="gi-item-description">{description}</p>}
        <p className="gi-item-price">${price}</p>
        <button
          className="gi-wishlist-btn"
          onClick={() => handleWishlist(id)}
        >
          افزودن به علاقه‌مندی
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
