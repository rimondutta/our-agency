import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ClientsV1 from "../../components/clients/ClientsV1";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import PriceV1 from "../../components/price/PriceV1";
import ServicesV3Light from "../../components/services/ServicesV3Light";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";

const Services3LightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Services 3 Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Our Services' breadCrumb='services-3-light' LightMode={true} />
                <ServicesV3Light sectionClass='default-padding-bottom bg-gray' />
                <FunFactV1 sectionClass='default-padding' />
                <PriceV1 sectionClass='bg-gray' />
                <ClientsV1 />
                <TestimonialV2 sectionClass='bg-gray' />
            </LayoutV1Light>
        </>
    );
};

export default Services3LightPage;