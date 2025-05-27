import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import QuickContact from "../../components/contact/QuickContact";
import FaqV1 from "../../components/faq/FaqV1";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";

const FaqLightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Faq Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Frequently asked question' breadCrumb='faq-light' LightMode={true} />
                <FaqV1 />
                <QuickContact title='Need' titleBold='Help?' sectionClass='bg-theme' />
            </LayoutV1Light>
        </>
    );
};

export default FaqLightPage;