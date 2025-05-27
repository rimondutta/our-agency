import { Link } from "react-router-dom";
import PriceV2New from "../price/PriceV2New.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MostPopularServices from "./MostPopularServices.tsx";

interface DataType {
  title?: string;
  bannerImg?: string;
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

const PerformanceMarketingContent = ({
  serviceInfo,
  sectionClass,
  pricing,
}: ServiceDetailsProps) => {
  const {
    title,
    whyChooseP1,
    bannerImg,
    whyChooseP2,
    faqs,
    definition,
    importance,
    importance_title,
  } = serviceInfo || {};

  const features = [
    {
      icon: "/assets/img/icon/conversion rate.svg", // Bootstrap Icon class
      title: "Conversion Rate",
      description:
        "Tracks how many visitors complete a desired action like a purchase or sign-up.",
    },
    {
      icon: "/assets/img/icon/Cost Per Acquisition.svg",
      title: "Cost Per Acquisition (CPA)",
      description: "Measures how much it costs to acquire one paying customer.",
    },
    {
      icon: "/assets/img/icon/Return on Ad Spend.svg",
      title: "Return on Ad Spend (ROAS)",
      description:
        "Shows how much revenue is earned for every dollar spent on ads.",
    },
    {
      icon: "/assets/img/icon/Click-Through Rate.svg",
      title: "Click-Through Rate (CTR)",
      description:
        "Indicates how many people clicked on your ad after seeing it.",
    },
    {
      icon: "/assets/img/icon/Customer Lifetime Value.svg",
      title: "Customer Lifetime Value (CLV)",
      description:
        "Estimates the total revenue a business earns from a single customer over time.",
    },
    {
      icon: "/assets/img/icon/Impressions & Reach.svg",
      title: "Impressions & Reach",
      description:
        "Measures how many times your ad is shown and how many people saw it.",
    },
  ];

  const cards = [
    {
      id: 1,
      title: "Data-Driven Decisions",
      img: "/assets/img/services/pm/Data driven decision-100.jpg",
      description:
        "Our strategy is grounded in data. We use strong analytics tools to monitor performance and adjust campaigns in real time.",
    },
    {
      id: 2,
      title: "Targeted PPC Campaigns",
      img: "/assets/img/services/pm/targeted ppc campaigns-100.jpg",
      description:
        "We create highly focused paid campaigns aimed at reaching your ideal audience.",
    },
    {
      id: 3,
      title: "Conversion Rate Optimization",
      img: "/assets/img/services/pm/conversion rate optimization-100.jpg",
      description:
        "We continuously test and refine landing pages, ads, and user flow to ensure that visitors take the desired action.",
    },
    {
      id: 4,
      title: "A/B Testing",
      img: "/assets/img/services/pm/AB testing-100.jpg",
      description:
        "We run A/B tests to compare different strategies and identify the best-performing approaches.",
    },
    {
      id: 5,
      title: "Remarketing Campaigns",
      img: "/assets/img/services/pm/remarketing campaigns-100.jpg",
      description:
        "We re-engage users who have previously interacted with your brand but didn't convert.",
    },
    {
      id: 6,
      title: "Multi-Platform Advertising",
      img: "/assets/img/services/pm/multiplatorm advertising-100.jpg",
      description:
        "We use multiple advertising platforms like Google Ads, Facebook Ads, and more to reach a broader audience.",
    },
    {
      id: 7,
      title: "Performance Tracking & Analytics",
      img: "/assets/img/services/pm/performance tracking & analytics-100.jpg",
      description:
        "Our detailed reporting helps you understand the success of your campaigns and guides future decision-making for continuous improvement.",
    },
    {
      id: 8,
      title: "Budget Optimization",
      img: "/assets/img/services/pm/Budget optimization-100.jpg",
      description:
        "We manage your advertising budget efficiently, allocating resources to the highest-performing campaigns.",
    },
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
                  <img src={bannerImg} alt="Thumb" />
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
            <div className="">
              <h2>Our Strategy</h2>
              {/* <div className="row gx-1 mt-4 gy-4 mb-5">
                {cards.map((card) => (
                  <div key={card.id} className="col-12 mb-3 col-md-6 col-lg-4">
                    <div className="card h-100 border shadow-sm">
                      <div className="position-relative">
                        <img
                          src={`/assets/img/blog/4.jpg`}
                          className="card-img-top"
                          alt="Featured"
                          style={{ height: "550px", objectFit: "cover" }}
                        />

                        <div
                          className="position-absolute bg-dark text-white rounded-circle d-flex align-items-center justify-content-center shadow"
                          style={{
                            width: "40px",
                            height: "40px",
                            top: "12px",
                            left: "5px",
                            fontWeight: "bold",
                            border: "2px solid white",
                          }}
                        >
                          {card.id}
                        </div>
                      </div>
                      <div className="card-body">
                        <h4 style={{ color: "black" }} className="card-title">
                          {card.title}
                        </h4>
                        <p
                          className="card-text text-muted"
                          style={{
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
              <Swiper
                loop={true}
                centeredSlides={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                navigation={{
                  nextEl: ".dropshippingservice-next",
                  prevEl: ".dropshippingservice-prev",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1000: {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                  },
                }}
                modules={[Navigation]}
              >
                <div className="swiper-wrapper">
                  {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                      <div
                        key={card.id}
                        style={{ minHeight: "650px", padding: "10px" }}
                      >
                        <div className="card h-100 border">
                          <div className="position-relative">
                            <img
                              src={
                                card?.img ? card.img : `/assets/img/blog/4.jpg`
                              }
                              className="card-img-top"
                              alt="Featured"
                              style={{ height: "460px", width: "100%" }}
                            />
                            <div
                              className="position-absolute bg-dark text-white rounded-circle d-flex align-items-center justify-content-center shadow"
                              style={{
                                width: "40px",
                                height: "40px",
                                top: "12px",
                                left: "5px",
                                fontWeight: "bold",
                                border: "2px solid white",
                              }}
                            >
                              {card.id}
                            </div>
                          </div>
                          <div className="card-body">
                            <h4
                              style={{ color: "black" }}
                              className="card-title"
                            >
                              {card.title}
                            </h4>
                            <p
                              className="card-text text-muted"
                              style={{
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                              }}
                            >
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  top: "110%",
                  left: "50%",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="dropshippingservice-prev left btn bg-white  border border-dark rounded-pill px-4 d-flex align-items-center">
                  <i className="fas fa-chevron-left me-2 text-dark"></i>
                </button>
                <button className="dropshippingservice-next bg-white right btn  border border-dark rounded-pill px-4 d-flex align-items-center">
                  <i className="fas fa-chevron-right ms-2 text-dark"></i>
                </button>
              </div>
            </div>
            <div className="mt-50 mt-xs-20">
              <h2>Metrics we use to measure your growth </h2>
              <div style={{ marginTop: "40px", paddingTop: "40px" }}>
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
                      slidesPerView: 3,
                    },
                  }}
                >
                  {features.map((feature, index) => (
                    <SwiperSlide key={index}>
                      <div className="feature-card d-flex flex-column justify-content-between text-center p-4 rounded-4 shadow border border-secondary bg-dark h-100">
                        <div>
                          <img
                            src={feature.icon}
                            alt={feature.title}
                            style={{ width: "60px", marginBottom: "20px" }}
                          />
                          <h5 className="fw-semibold fs-5 text-white">
                            {feature.title}
                          </h5>
                          <p className="text-secondary fs-5 mt-2">
                            {feature.description}
                          </p>
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
            <div
              style={{ marginTop: "50px" }}
              className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
            >
              {/* Image */}
              <div className="w-100 w-lg-50 text-center p-2">
                <img
                  src="/assets/img/blog/why.png"
                  alt="Blog"
                  className="img-fluid"
                  style={{ maxWidth: "500px", height: "500px", width: "100%" }}
                />
              </div>
              {/* Text */}
              <div className="w-100 w-lg-50 p-4 ">
                <h2 className="post-title">
                  <Link to={`/blog-single-with-sidebar`}>Why Choose Us? </Link>
                </h2>
                <p>{whyChooseP1}</p>
                <p>{whyChooseP2}</p>
              </div>
            </div>
          </div>
        </div>
        <PriceV2New pricing={pricing} />
        <div className="container mt-4">
          <MostPopularServices />
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
        </div>
      </div>
    </>
  );
};

export default PerformanceMarketingContent;
