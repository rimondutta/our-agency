import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json"
import WebApplicationContent from "../../components/services/WebApplicationContent";
import DarkClass from "../../components/classes/DarkClass";

const WebApplication = () => {
    const data = ServicesV1Data.find(service => service.id === "web-application-development");
    const pricing=pricingInfo.find((service)=>service.serviceId==="web-application-development")

    return (
        <>
            <Helmet>
                <title>Custom Web Application Development Services | Market Growth Experts</title>
                <meta name="description" content=" Market Growth Experts offers expert web application development services, including custom web app development and website application solutions to enhance your business."></meta>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Web Application Development' breadCrumb='Web Application Development' LightMode={false} />
                {data && <WebApplicationContent serviceInfo={data} pricing={pricing} sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default WebApplication;