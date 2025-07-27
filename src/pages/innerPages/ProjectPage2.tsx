import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PortfolioV5New from "../../components/portfolio/PortfolioV5New";

const ProjectPage2 = () => {
    return (
        <>
            <Helmet>
                <title>Portfolio: Showcasing Our Digital Marketing & Development Successes</title>
                <meta name="description" content="Explore Market Growth Expert's portfolio featuring successful projects in SEO, web design, branding, and more. See how we've helped businesses achieve their digital goals."></meta>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Portfolio' breadCrumb='Portfolio' />
                <PortfolioV5New  hasShape={true} />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default ProjectPage2;
