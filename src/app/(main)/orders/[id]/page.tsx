import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import ProductOrderDetails from "@/components/order-page/OrdersDetails";
import { Row } from "react-bootstrap";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const id = (await params).id;
  return (
    <>
      {/* {params.id} */}
      <Breadcrumb title={"جزئیات سفارشات من"} />
      <section className="gi-blog padding-tb-40">
        <div className="container">
          <Row>
            <ProductOrderDetails id={id} />
          </Row>
        </div>
      </section>
    </>
  );
}