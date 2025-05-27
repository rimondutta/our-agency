import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ClientsV1 from "../../components/clients/ClientsV1";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import PriceV1 from "../../components/price/PriceV1";
import ServicesV1Light from "../../components/services/ServicesV1Light";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";

const ServicesLightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Services Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Our Services' breadCrumb='services' LightMode={true} />
                <ServicesV1Light sectionClass='default-padding-bottom bg-gray' />
                <FunFactV1 sectionClass='default-padding-bottom bg-gray' />
                <ClientsV1 />
                <PriceV1 sectionClass='bg-gray' />
                <TestimonialV2 />
            </LayoutV1Light>
        </>
    );
};

export default ServicesLightPage;