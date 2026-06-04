import ServicesV1Data from "../assets/jsonData/services/ServiceV1New.json";
import pricingInfo from "../assets/jsonData/price/PriceV2New.json";

export interface FAQ {
  q: string;
  a: string;
}

export interface PricingPlan {
  id: number;
  title: string;
  description: string;
  features: string[];
  blockedFeatures: string[];
  priceOriginal: number | null;
  priceDiscounted: number;
  currency: string;
  billingCycle: string;
}

export interface PricingDataType {
  serviceId: string;
  monthlyPlans?: PricingPlan[];
  yearlyPlans?: PricingPlan[];
}

export interface ServiceData {
  id: string;
  type?: string;
  icon?: string;
  iconLight?: string;
  bannerImg1?: string;
  bannerImg2?: string;
  bannerImg?: string;
  img1?: string;
  img2?: string;
  title: string;
  definition: string;
  text?: string;
  importance: string[];
  importance_title: string;
  whyChooseP1: string;
  whyChooseP2: string;
  faqs: FAQ[];
  activeClass?: string;
}

// Simulate API fetch for a single service
export const getServiceBySlug = (slug: string): { service: ServiceData | null, pricing: PricingDataType | null } => {
  const service = ServicesV1Data.find((s) => s.id === slug) as ServiceData | undefined;
  const pricing = pricingInfo.find((p) => p.serviceId === slug) as PricingDataType | undefined;
  
  return {
    service: service || null,
    pricing: pricing || null
  };
};

// Simulate API fetch for all services
export const getAllServices = (): ServiceData[] => {
  return ServicesV1Data as ServiceData[];
};
