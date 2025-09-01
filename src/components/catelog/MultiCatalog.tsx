import React from "react";
import ItemCard, { ItemCardProps } from "../product-item/ItemCard"; // مسیر اصلاح شد

interface MultiCatalogProps {
  data: ItemCardProps[]; // یا CartItem[] اگر میخوای از Cart.tsx استفاده کنی
  handleWishlist: (itemId: string) => void;
}

const MultiCatalog: React.FC<MultiCatalogProps> = ({ data, handleWishlist }) => {
  return (
    <div className="multi-catalog">
      {data.map((item) => (
        <ItemCard
          key={item.id}
          {...item}
          handleWishlist={() => handleWishlist(item.id)} // فقط آی‌دی پاس داده می‌شود
        />
      ))}
    </div>
  );
};

export default MultiCatalog;
