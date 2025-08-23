import { toPersianNum } from "@/utility/parsianNum";
import Link from "next/link";
import React from "react";

const CategoryItem = ({ data }) => {
  return (
    <div className="gi-cat-icon">
      <span className="gi-lbl">{toPersianNum(data.persantine)}</span>
      <i className={data.icon}></i>
      <div className="gi-cat-detail">
        <Link href="/shop-left-sidebar-col-3">
          <h4 className="gi-cat-title">{data.name}</h4>
        </Link>
        <p className="items">{toPersianNum(data.item)} مورد</p>
      </div>
    </div>
  );
};

export default CategoryItem;
