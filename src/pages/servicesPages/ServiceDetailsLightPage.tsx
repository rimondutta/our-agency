import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import ServiceDetailsContentLight from "../../components/services/ServiceDetailsContentLight";
import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Helmet } from "react-helmet-async";

const ServiceDetailsLightPage = () => {

    const { id } = useParams();
    const data = ServicesV1Data.find(service => service.id === parseInt(id || '0'));

    return (
        <>
            <Helmet>
                <title>Dixor - Service Details Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Our Services' breadCrumb='service-details-light' LightMode={true} />
                {data && <ServiceDetailsContentLight serviceInfo={data} sectionClass='default-padding' />}
            </LayoutV1Light>
        </>
    );
};

export default ServiceDetailsLightPage;