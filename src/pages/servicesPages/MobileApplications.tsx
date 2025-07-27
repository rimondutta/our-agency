import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import MobileApplicationContent from "../../components/services/MobileApplicationContent";
import DarkClass from "../../components/classes/DarkClass";

const MobileApplication = () => {
    const data = ServicesV1Data.find(service => service.id === "mobile-application-development");
    const pricing=pricingInfo.find((service)=>service.serviceId==="mobile-application-development")

    return (
        <>
            <Helmet>
                <title>Custom Mobile App Development Services & Cross-Platform Solutions</title>
                <meta name="description" content="Market Growth Experts offers custom mobile app development services, including cross-platform app development, mobile application design, and the best phone apps for Android."></meta>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Mobile Application Development' breadCrumb='Mobile Application Development' LightMode={false} />
                {data && <MobileApplicationContent serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default MobileApplication;