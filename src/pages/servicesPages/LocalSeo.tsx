import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import { Helmet } from "react-helmet-async";
import LocalSeoContent from "../../components/services/LocalSeoContent";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

const LocalSeo = () => {
    const data = ServicesV1Data.find(service => service.id === "local-seo");
    const pricing=pricingInfo.find((service)=>service.serviceId==="local-seo")
    return (
        <>
            <Helmet>
                <title>Local SEO Services & Expert Solutions to Grow Google Business Profile</title>
                <meta name="description" content="Market Growth Experts offers affordable local SEO services to increase Google Business Profile traffic, perform local SEO audits, and generate organic visits to grow your audience."></meta>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Local SEO' breadCrumb='Local SEO' LightMode={false}/>
                {data && <LocalSeoContent serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default LocalSeo;