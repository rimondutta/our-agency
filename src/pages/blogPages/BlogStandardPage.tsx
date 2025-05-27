import LayoutV1 from '../../components/layouts/LayoutV1';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import BlogStandardContent from '../../components/blog/BlogStandardContent';
import DarkClass from '../../components/classes/DarkClass';
import { Helmet } from 'react-helmet-async';

const BlogStandardPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Blog Standard</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Blog Standard' breadCrumb='blog-standard' />
                <BlogStandardContent sectionClass='default-padding-bottom' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default BlogStandardPage;