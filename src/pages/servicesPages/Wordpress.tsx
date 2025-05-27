import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json";
import WordpressContent from "../../components/services/WordpressContent";
import DarkClass from "../../components/classes/DarkClass";

const Wordpress = () => {
  const data = ServicesV1Data.find(
    (service) => service.id === "wordpress-development"
  );
  const pricing = pricingInfo.find(
    (service) => service.serviceId === "wordpress-development"
  );

  return (
    <>
      <Helmet>
        <title>Custom WordPress Development & Website Design Services | Quirktix</title>
        <meta name="description" content="Quirktix is a leading WordPress development company offering custom WordPress website design, and web development solutions for your business. Explore Quirktix Now!"></meta>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="WordPress Development"
          breadCrumb="WordPress Development"
          LightMode={false}
        />
        {data && (
          <WordpressContent
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

export default Wordpress;
