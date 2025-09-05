import { Row } from 'react-bootstrap'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import ProductAccordingPage from '@/components/product-page/ProductAccordingPage'
import RelatedProduct from '@/components/product-page/related-product/RelatedProduct'

const page = () => {
    return (
        <>


            <Breadcrumb title={"صفحه محصول"} />
            <section className="gi-single-product padding-tb-40" style={{overflowX:"hidden"}}>
                <div className="container">
                    <Row>
                        <ProductAccordingPage
                            order={"order-lg-last order-md-first"}
                            none={""}
                            lg={9}
                        />
                    </Row>
                </div>
            </section>
            <RelatedProduct />

        </>
    )
}

export default page
