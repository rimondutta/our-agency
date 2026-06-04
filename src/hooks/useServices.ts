import { useState, useEffect } from "react";

import { IFaq, IPricing } from "@/models/Service";

export interface ServiceData {
  _id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  features: string[];
  price: number;
  faqs?: IFaq[];
  pricing?: IPricing;
  isPublished: boolean;
  order: number;
}

export function useServices() {
  const [services, setServices] = useState<ServiceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/public/services");
        const result = await response.json();

        if (result.success) {
          setServices(result.data);
        } else {
          setError(result.message || "Failed to fetch services");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
}
