import { Helmet } from "react-helmet-async";
import BlogStandardContentLight from "../../components/blog/BlogStandardContentLight";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";

const BlogStandardLightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Blog Standard Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Blog Standard' breadCrumb='blog-standard-light' LightMode={true} />
                <BlogStandardContentLight sectionClass='default-padding' />
            </LayoutV1Light>
        </>
    );
};

export default BlogStandardLightPage;