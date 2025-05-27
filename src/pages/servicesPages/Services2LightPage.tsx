import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ClientsV1 from "../../components/clients/ClientsV1";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import PriceV1 from "../../components/price/PriceV1";
import ServicesV2 from "../../components/services/ServicesV2";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";

const Services2LightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Services 2 Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Our Services' breadCrumb='services-2-light' LightMode={true} />
                <ServicesV2 />
                <FunFactV1 sectionClass='default-padding' />
                <ClientsV1 sectionClass='bg-gray' />
                <TestimonialV2 />
                <PriceV1 sectionClass='bg-gray' />
            </LayoutV1Light>
        </>
    );
};

export default Services2LightPage;