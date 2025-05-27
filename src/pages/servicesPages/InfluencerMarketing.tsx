import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import { Helmet } from "react-helmet-async";
import InfluencerMarketingContent from "../../components/services/InfluencerMarketingContent";
import DarkClass from "../../components/classes/DarkClass";

const InfluencerMarketing = () => {
    const data = ServicesV1Data.find(service => service.id === "influencer-marketing");
    const pricing=pricingInfo.find((service)=>service.serviceId==="influencer-marketing")
    return (
        <>
            <Helmet>
                <title>Influencer Marketing | Quirktix</title>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Influencer Marketing' breadCrumb='Influencer Marketing' LightMode={false} />
                {data && <InfluencerMarketingContent serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default InfluencerMarketing;