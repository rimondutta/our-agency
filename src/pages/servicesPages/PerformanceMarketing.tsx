import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
// import ServiceDetailsContentLight2 from "../../components/services/ServiceDetailsContentLight2";

import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json";
import LayoutV1 from "../../components/layouts/LayoutV1";
import DarkClass from "../../components/classes/DarkClass";
import PerformanceMarketingContent from "../../components/services/PerformanceMarketingContent";

const PerformanceMarketing = () => {
  const data = ServicesV1Data.find(
    (service) => service.id === "performance-marketing"
  );
  const pricing = pricingInfo.find(
    (service) => service.serviceId === "performance-marketing"
  );

  

  return (
    <>
      <Helmet>
        <title>Top Performance Marketing Company & Google Ads Services | Market Growth Experts</title>
        <meta name="description" content=" is a leading performance marketing company offering Google Ads management services, product listing ads, and Google Local Services Ads to boost your business."></meta>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Performance Marketing"
          breadCrumb="Performance Marketing"
        />
        {data && (
          <PerformanceMarketingContent
            serviceInfo={data}
            pricing={pricing}
            sectionClass="default-padding"
          />
        )}
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default PerformanceMarketing;
