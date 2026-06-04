"use client";

import { Link } from "react-router-dom";
import { useServices } from "@/hooks/useServices";
import Preloader from "../utilities/Preloader";

const MostPopularServices = () => {
  const { services, loading, error } = useServices();

  if (loading) return <Preloader />;
  if (error) return null; // Hide section silently on error

  // Just grab the first 3 services as "Most Popular"
  const popularServices = services.slice(0, 3);

  return (
    <div className="services-more mb-60 mt-100 mt-xs-30">
      <h2 className="mb-20">Most popular services</h2>
      <div className="row">
        {popularServices.map((item) => {
          return (
            <div key={item._id} className="col-lg-4 col-md-6">
              <div className="item">
                <img
                  src={
                    item.icon && (item.icon.startsWith("http") || item.icon.startsWith("/"))
                      ? item.icon
                      : `/assets/img/icon/${item.icon || "default.png"}`
                  }
                  alt={item.title}
                  width={75}
                  height={60}
                />
                <h4>
                  <Link to={`/service/${item.slug}`}>{item.title}</Link>
                </h4>
                <p>{item.shortDescription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MostPopularServices;
