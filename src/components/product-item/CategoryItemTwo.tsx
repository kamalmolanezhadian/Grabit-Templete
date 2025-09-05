import { formatNumber } from "@/utility/formatNum";
import { toPersianNum } from "@/utility/parsianNum";
import Link from "next/link";

const CategoryItemTwo = ({ data }) => {
  return (
    <>
      <div className="gi-cat-icon">
        <span className="gi-lbl">{toPersianNum(data.persantine)}</span>
        <img src={data.image} alt="category" />
        <div className="gi-cat-detail">
          <Link href="/shop-left-sidebar-col-3">
            <h4 className="gi-cat-title">{data.name}</h4>
          </Link>
          <p className="items">{formatNumber(data.item)} مورد</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItemTwo;
