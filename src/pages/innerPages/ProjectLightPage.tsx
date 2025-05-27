import LayoutV1Light from '../../components/layouts/LayoutV1Light';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import PortfolioV2 from '../../components/portfolio/PortfolioV2';
import { Helmet } from 'react-helmet-async';

const ProjectLightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Project Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Case Studies' breadCrumb='Project-light' LightMode={true} />
                <PortfolioV2 moreBtn={true} sectionClass='default-padding' />
            </LayoutV1Light>
        </>
    );
};

export default ProjectLightPage;