import { Helmet } from "react-helmet-async";
import AllBlogPagesContentAdmin from "../../components/blog/AllBlogsContentAdmin";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

const AllBlogPagesAdmin = () => {
    return (
        <>
            <Helmet>
                <title>Blogs | Market Growth EXperts</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Blogs' breadCrumb='Blogs' />
                <AllBlogPagesContentAdmin sectionClass='default-padding-bottom' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default AllBlogPagesAdmin;