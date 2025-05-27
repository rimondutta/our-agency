// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
// import { Link } from "react-router-dom";
import PriceV2New from "../price/PriceV2New.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MostPopularServices from "./MostPopularServices.tsx";

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

const EcommerceSeoContent = ({
  serviceInfo,
  sectionClass,
  pricing,
}: ServiceDetailsProps) => {
  const {
    title,
    whyChooseP1,
    bannerImg1,
    bannerImg2,
    whyChooseP2,
    faqs,
    definition,
    importance,
    importance_title,
  } = serviceInfo || {};

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
            <div
              style={{ marginTop: "50px" }}
              className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
            >
              {/* Image */}
              <a
                className="w-100"
                href="https://quickwinseo.net/"
                target="_blank"
              >
                <div className="w-100 w-lg-50 text-center p-2">
                  <img
                    src="/assets/img/blog/quick win.jpg"
                    alt="Blog"
                    className="img-fluid"
                    style={{
                      maxWidth: "500px",
                      minHeight: "600px",
                      width: "100%",
                    }}
                  />
                </div>
              </a>

              {/* Text */}
              <div className="w-100 w-lg-50 p-4 ">
                <h2 className="post-title">
                  <a href="https://quickwinseo.net/" target="_blank">
                    Our QuickWin SEO Makes All the Difference{" "}
                  </a>
                </h2>
                <h3>Why is it the best move?</h3>
                <p>{whyChooseP1}</p>
                <p> {whyChooseP2}</p>
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

        <div className="container">
          <MostPopularServices />
          <div className="services-details-items">
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
      </div>
    </>
  );
};

export default EcommerceSeoContent;
