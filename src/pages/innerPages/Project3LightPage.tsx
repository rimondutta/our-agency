import LayoutV1Light from '../../components/layouts/LayoutV1Light';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import PortfolioV6Light from '../../components/portfolio/PortfolioV6Light';
import { Helmet } from 'react-helmet-async';

const Project3LightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Project 3 Light</title>
            </Helmet>

            <div className="project-page">
                <LayoutV1Light>
                    <Breadcrumb title='Case Studies' breadCrumb='Project-3-light' LightMode={true} />
                    <PortfolioV6Light sectionClass='bg-gray' />
                </LayoutV1Light>
            </div>
        </>
    );
};

export default Project3LightPage;