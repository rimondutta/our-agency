import { Helmet } from "react-helmet-async";
import Blog3ColumnContentLight from "../../components/blog/Blog3ColumnContentLight";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";

const Blog3ColumnLightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Blog 3 Column Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Blog Grid' breadCrumb='blog-3-column-light' LightMode={true} />
                <Blog3ColumnContentLight sectionClass='default-padding' />
            </LayoutV1Light>
        </>
    );
};

export default Blog3ColumnLightPage;