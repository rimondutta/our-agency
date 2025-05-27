import { Helmet } from "react-helmet-async";
import AllBlogPagesContent from "../../components/blog/AllBlogsContent";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

const AllBlogPages = () => {
    return (
        <>
            <Helmet>
                <title>Blogs | Quirktix</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Blogs' breadCrumb='Blogs' />
                <AllBlogPagesContent sectionClass='default-padding-bottom' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default AllBlogPages;