import BlogPage from '@/components/blog-sidebar/BlogPage'
import { Row } from 'react-bootstrap'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'

const page = () => {
    return (
        <>


            <Breadcrumb title={"صفحه بلاگ"} />
            <section className="gi-blog padding-tb-40">
                <div className="container">
                    <Row>
                        <BlogPage lg={8} md={6} />
                    </Row>
                </div>
            </section>

        </>
    )
}

export default page
