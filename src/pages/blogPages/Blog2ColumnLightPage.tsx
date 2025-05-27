import { Helmet } from "react-helmet-async";
import Blog2ColumnContentLight from "../../components/blog/Blog2ColumnContentLight";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";

const Blog2ColumnLightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Blog 2 Column Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Blog Grid' breadCrumb='blog-2-column-light' LightMode={true} />
                <Blog2ColumnContentLight sectionClass='default-padding' />
            </LayoutV1Light>
        </>
    );
};

export default Blog2ColumnLightPage;