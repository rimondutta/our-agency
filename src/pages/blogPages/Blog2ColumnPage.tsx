import { Helmet } from "react-helmet-async";
import Blog2ColumnContent from "../../components/blog/Blog2ColumnContent";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

const Blog2ColumnPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Blog 2 Column</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Blog Grid' breadCrumb='blog-2-column' />
                <Blog2ColumnContent sectionClass='default-padding-bottom' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default Blog2ColumnPage;