import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import UserHistory from '@/components/user-history/UserHistory'



const page = () => {
    return (
        <>


            <Breadcrumb title={"تاریخچه کاربر"} />
            <UserHistory />

        </>
    )
}

export default page
