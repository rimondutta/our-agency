import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import PortfolioV3 from "../../components/portfolio/PortfolioV3";

const Project2LightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Project 2 Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Case Studies' breadCrumb='Project-2-light' LightMode={true} />
                <PortfolioV3 sectionClass='default-padding' />
            </LayoutV1Light>
        </>
    );
};

export default Project2LightPage;