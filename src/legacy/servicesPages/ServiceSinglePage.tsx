// @ts-nocheck
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";
import Link from "next/link";
import { useEffect, useState } from "react";
import MostPopularServices from "../../components/services/MostPopularServices";
import ServiceDetailsContent from "../../components/services/ServiceDetailsContent";
import Preloader from "../../components/utilities/Preloader";
import { ServiceData } from "@/hooks/useServices";

import PriceV2New from "../../components/price/PriceV2New";

const ServiceSinglePage = ({ slug }: { slug: string }) => {
  
  const [service, setService] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      if (!slug) return;
      try {
        const res = await fetch(`/api/public/services/${slug}`);
        const result = await res.json();
        
        if (result.success) {
          setService(result.data);
          setError(null);
        } else {
          setError(result.message || "Service not found");
        }
      } catch (err) {
        setError("An error occurred while fetching the service.");
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <LayoutV1>
        <div className="container py-5 text-center">
          <Preloader />
        </div>
      </LayoutV1>
    );
  }

  if (error || !service) {
    return (
      <LayoutV1>
        <div className="container py-5 text-center" style={{ minHeight: "50vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <h2 className="mb-4">{error || "Service not found"}</h2>
          <Link to="/services" className="btn btn-theme effect">Back to Services</Link>
        </div>
      </LayoutV1>
    );
  }

  const hasPricing = service.pricing && (
    (service.pricing.monthlyPlans && service.pricing.monthlyPlans.length > 0) || 
    (service.pricing.yearlyPlans && service.pricing.yearlyPlans.length > 0)
  );

  return (
    <>
      <Helmet>
        <title>{service.title} | Market Growth Experts</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>
      
      <LayoutV1>
        <Breadcrumb title={service.title} breadCrumb={service.title} LightMode={false} />
        
        <ServiceDetailsContent serviceInfo={service} sectionClass="default-padding-bottom pt-5" />

        {hasPricing && (
          <PriceV2New pricing={service.pricing} />
        )}

        <div className="container">
          <MostPopularServices />
        </div>
        
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default ServiceSinglePage;
