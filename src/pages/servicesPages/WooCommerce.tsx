import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import pricingInfo from "../../assets/jsonData/price/PriceV2New.json";
import WooCommerceContent from "../../components/services/WooCommerceContent";
import DarkClass from "../../components/classes/DarkClass";

const Woocommerce = () => {
  const data = ServicesV1Data.find(
    (service) => service.id === "woocommerce-development"
  );
  const pricing = pricingInfo.find(
    (service) => service.serviceId === "woocommerce-development"
  );

  return (
    <>
      <Helmet>
        <title>WooCommerce Development Services & Integration | WooCommerce Agency</title>
        <meta name="description" content="Quirktix offers expert WooCommerce development services and integration for your online store. Partner with a leading WooCommerce development agency now."></meta>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="WooCommerce Development"
          breadCrumb="WooCommerce Development"
          LightMode={false}
        />
        {data && (
          <WooCommerceContent
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

export default Woocommerce;
