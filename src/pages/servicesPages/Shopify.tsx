import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json";
import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";
import ShopifyContent from "../../components/services/ShopifyContent";

const Shopify = () => {
  const data = ServicesV1Data.find(
    (service) => service.id === "shopify-development"
  );
  const pricing = pricingInfo.find(
    (service) => service.serviceId === "shopify-development"
  );
  return (
    <>
      <Helmet>
        <title>Expert Shopify Development Services & Website Design | Quirktix</title>
        <meta name="description" content="Quirktix is a leading Shopify development company offering expert Shopify Plus development services, custom theme design, and web development for your online store."></meta>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Shopify Development"
          breadCrumb="Shopify Development"
          LightMode={false}
        />
        {data && (
          <ShopifyContent
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

export default Shopify;
