import LayoutV1 from '../../components/layouts/LayoutV1';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import BlogWithSidebarContent from '../../components/blog/BlogWithSidebarContent';
import DarkClass from '../../components/classes/DarkClass';
import { Helmet } from 'react-helmet-async';

const BlogWithSidebarPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Blog With Sideba</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Blog Sidebar' breadCrumb='blog-with-sidebar' />
                <BlogWithSidebarContent sectionClass="default-padding-bottom" />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default BlogWithSidebarPage;