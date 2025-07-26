import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import { Helmet } from "react-helmet-async";
import SocialMediaMarketingContent from "../../components/services/SocialMediaMarketingContent";
import DarkClass from "../../components/classes/DarkClass";

const LocalSeo = () => {
    const data = ServicesV1Data.find(service => service.id === "social-media-marketing");
    const pricing=pricingInfo.find((service)=>service.serviceId==="social-media-marketing")
    return (
        <>
            <Helmet>
                <title>Expert Social Media Marketing Ageny | Market Growth Experts</title>
                <meta name="description" content="Market Growth Experts offers social media marketing packages and expert SMM services for small businesses to enhance social media presence with advantages of SMO strategy."></meta>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Social Media Marketing' breadCrumb='Social Media Marketing' LightMode={false} />
                {data && <SocialMediaMarketingContent serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default LocalSeo;