import PriceV2New from "../price/PriceV2New.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MostPopularServices from "./MostPopularServices.tsx";
import { Link } from "react-router-dom";

interface DataType {
  title?: string;
  bannerImg1?: string;
  bannerImg2?: string;
  img1?: string;
  img2?: string;
  whyChooseP1?: string;
  whyChooseP2?: string;
  faqs?: FAQ[];
  definition?: string;
  importance?: string[];
  importance_title?: string;
}

interface FAQ {
  q?: string;
  a?: string;
}
interface PricingPlan {
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

interface PricingDataType {
  serviceId?: string;
  monthlyPlans?: PricingPlan[];
  yearlyPlans?: PricingPlan[];
}

interface ServiceDetailsProps {
  serviceInfo?: DataType;
  sectionClass?: string;
  pricing?: PricingDataType;
}

const LocalSeoContent = ({
  serviceInfo,
  sectionClass,
  pricing,
}: ServiceDetailsProps) => {
  const {
    title,
    bannerImg1,
    bannerImg2,
    faqs,
    definition,
    importance,
    importance_title,
  } = serviceInfo || {};

  const features = [
    {
      icon: "/assets/img/services/development/small business owner.svg", // Bootstrap Icon class
      title: "Small Business Owners",
      description:
        "Boosts local visibility and drives nearby customers to your doorstep.",
    },
    {
      icon: "/assets/img/services/development/Service-Based Professionals.svg",
      title: "Service-Based Professionals",
      description: "Helps clients find and contact you in their local area.",
    },
    {
      icon: "/assets/img/services/development/Multi-Location brand.svg",
      title: "Multi-Location Brands",
      description:
        "Boosts search visibility for each branch in its specific market.",
    },
  ];

  const Skills = [
    "Technical SEO",
    "Keywords Planning",
    "Competitor Research",
    "Blog Optimization",
    "Quality Link building",
    "Meta optimization",
    "GSC and GA4 Analysis",
    "Google my business Optimization",
  ];
  return (
    <>
      <div
        className={`services-details-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={bannerImg1} alt="Thumb" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <h2>{title}</h2>
                <p>{definition}</p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <p>{importance_title}</p>
                <h3>What We Offer:</h3>
                <ul className="feature-list-item">
                  {importance?.map((item, idx) => {
                    return <li key={idx}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-center">Seo Toolkit</h2>
              <div
                style={{
                  display: "flex",
                  marginTop: "50px",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
                className=""
              >
                <div style={{ width: "200px" }} className="mb-4">
                  <img
                    className="img-fluid"
                    src="/assets/img/partner/ahrefs.png"
                    alt=""
                  />
                </div>
                <div style={{ width: "200px" }} className="mb-4">
                  <img
                    className="img-fluid"
                    src="/assets/img/partner/google keyword planner.png"
                    alt=""
                  />
                </div>
                <div style={{ width: "200px" }} className="mb-4">
                  <img
                    className="img-fluid"
                    src="/assets/img/partner/google merchant account.png"
                    alt=""
                  />
                </div>
                <div style={{ width: "200px" }} className="mb-4">
                  <img
                    className="img-fluid"
                    src="/assets/img/partner/google trends.png"
                    alt=""
                  />
                </div>
                <div style={{ width: "200px" }} className="mb-4">
                  <img
                    className="img-fluid"
                    src="/assets/img/partner/screaming frog.png"
                    alt=""
                  />
                </div>
                <div style={{ width: "200px" }} className="mb-4">
                  <img
                    className="img-fluid"
                    src="/assets/img/partner/semrush1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row mt-80 mt-xs-50 gallery-two-columns">
              <div className="row">
                <div className="col-xl-12">
                  <div className="service-single-thumb">
                    <img src={bannerImg2} alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 mt-xs-20">
            <h1 className="text-center" style={{ marginBottom: "50px" }}>
              Who Needs Local SEO Services?
            </h1>
            <div className="container py-1">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {features.map((feature, index) => (
                  <div key={index} className="col">
                    <div className="text-white bg-dark p-4 text-center h-100 rounded-4 shadow-sm border border-secondary">
                      <img
                        src={feature.icon}
                        style={{ width: "60px" }}
                        alt=""
                      />
                      <h5 className="fw-bold mt-4">{feature.title}</h5>
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: "50px" }}
            className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
          >
            {/* Image */}
            <div className="w-100 w-lg-50 text-center p-2">
              <img
                src="/assets/img/about/what edge will it offer 1.png"
                alt="Blog"
                className="img-fluid"
                style={{ maxWidth: "500px", height: "500px", width: "100%" }}
              />
            </div>
            {/* Text */}
            <div className="w-100 w-lg-50 p-4 ">
              <h2 className="post-title">
                <Link to={`#`}>What Edge Will It Give Your Business?</Link>
              </h2>
              <p>
                Local SEO helps your business appear in search results when
                people nearby are actively looking for your products or
                services. It improves your visibility on platforms like Google
                Search and Google Maps, especially for location-based queries
                such as “near me” or “best service in city.” This targeted
                exposure connects you with customers who are ready to take
                action—calling, visiting, or making a purchase. Optimizing your
                Google Business Profile, managing online reviews, and ensuring
                accurate local citations also build credibility and trust.
                Compared to traditional advertising, Local SEO is cost-effective
                and delivers long-term value by attracting organic traffic
                without ongoing ad spend.
              </p>
              <p>
                For businesses that rely on local footfall or regional
                clientele, it’s one of the most impactful marketing strategies
                available. In short, Local SEO turns local searchers into loyal
                customers—giving your business a real edge in today’s
                competitive landscape.
              </p>
            </div>
          </div>

          <div style={{ paddingTop: "50px" }} className="">
            <h2>Outrank your competitors with our seo service</h2>
            <div style={{ marginTop: "40px" }}>
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".right",
                  prevEl: ".left",
                }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {Skills.map((name, index) => (
                  <SwiperSlide className="" key={index}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "150px",
                      }}
                      className="p-3 ocard  rounded shadow-sm text-center"
                    >
                      <div
                        style={{ fontWeight: "bold" }}
                        className="text-dark fs-4"
                      >
                        {name}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  gap: "10px",
                }}
                className="project-four-nav"
              >
                <div className="d-flex justify-content-center align-items-center gap-2 my-4">
                  <button className="left btn  border border-dark rounded-pill px-4 d-flex align-items-center">
                    <i className="fas fa-chevron-left me-2 text-dark"></i>
                  </button>
                  <button className="right btn  border border-dark rounded-pill px-4 d-flex align-items-center">
                    <i className="fas fa-chevron-right ms-2 text-dark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PriceV2New pricing={pricing} />

        <div className="container mt-4">
          <div className="item">
            <div className="faq-style-one faq-style-two">
              <h2 className="mb-30">Frequently Asked Questions</h2>
              <div className="accordion" id="faqAccordion">
                {faqs?.map((item, idx) => {
                  return (
                    <div key={idx} className="accordion-item">
                      <h2 className="accordion-header" id={`heading${idx}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${idx}`}
                          aria-expanded="true"
                          aria-controls={`collapse${idx}`}
                        >
                          {item.q}
                        </button>
                      </h2>
                      <div
                        id={`collapse${idx}`}
                        className={`accordion-collapse collapse`}
                        //className="accordion-collapse collapse show"  //use this to keep the answers open
                        aria-labelledby={`heading${idx}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <MostPopularServices />
        </div>
      </div>
    </>
  );
};

export default LocalSeoContent;
