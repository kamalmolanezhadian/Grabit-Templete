import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import OrderPage from '@/components/order-page/Orders'



const page = () => {
    return (
        <>


            <Breadcrumb title={"سفارش های من"} />
            <OrderPage />

        </>
    )
}

export default page
