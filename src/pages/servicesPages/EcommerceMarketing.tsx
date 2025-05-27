import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";

import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import { Helmet } from "react-helmet-async";
import EcommerceMarketingContent from "../../components/services/EcommerceMarketingContent";
import DarkClass from "../../components/classes/DarkClass";

const EcommerceMarketing = () => {
    const data = ServicesV1Data.find(service => service.id === "ecommerce-marketing")
    const pricing=pricingInfo.find((service)=>service.serviceId==="ecommerce-marketing")

    return (
        <>
            <Helmet>
                <title>Ecommerce Marketing Agency & Digital Marketing Services | Quirktix</title>
                <meta name="description" content="Quirktix is a certified ecommerce marketing agency offering ecommerce marketing, Amazon marketing, and expert ecommerce marketing services to boost your online sales."></meta>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Ecommerce Marketing' breadCrumb='Ecommerce Marketing' LightMode={false} />
                {data && <EcommerceMarketingContent serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default EcommerceMarketing;