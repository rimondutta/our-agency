import { Helmet } from "react-helmet-async";
import BlogWithSidebarContentLight from "../../components/blog/BlogWithSidebarContentLight";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";

const BlogWithSidebarLightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Blog With Sidebar Light</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <LayoutV1Light>
                    <Breadcrumb title='Blog Sidebar' breadCrumb='blog-with-sidebar-light' LightMode={true} />
                    <BlogWithSidebarContentLight sectionClass="default-padding" />
                </LayoutV1Light>
            </div>
        </>
    );
};

export default BlogWithSidebarLightPage;