import MostPopularServices from "./MostPopularServices.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleServiceV4 from "./SingleServiceV4.tsx";
import ServicesV4Data from "../../../src/assets/jsonData/services/ServicesV4Data.json";
import { Autoplay, FreeMode, Keyboard, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

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

const AgenticContent = ({ serviceInfo, sectionClass }: ServiceDetailsProps) => {
  const { title, bannerImg, faqs, definition, importance, importance_title } =
    serviceInfo || {};

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
          </div>
        </div>
        <div
          style={{ width: "90%", margin: "auto", marginTop: "50px" }}
          className="services-style-four-area default-padding-bottom overflow-hidden blurry-shape-left"
        >
          <div className=" mt-xs-20">
            <div className="container container-stage">
              <h1 style={{ marginBottom: "50px" }}>
                How Agentic Process Automation Works?
              </h1>
              <div className="row">
                <div className="col-lg-12">
                  <div className="services-item-one-items">
                    <Swiper
                      className="services-carousel swiper"
                      loop={true}
                      autoplay={true}
                      freeMode={true}
                      grabCursor={true}
                      slidesPerView={1}
                      spaceBetween={30}
                      breakpoints={{
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 50,
                        },
                        1400: {
                          slidesPerView: 2.8,
                          spaceBetween: 50,
                        },
                        1800: {
                          slidesPerView: 2.8,
                          spaceBetween: 70,
                        },
                      }}
                      modules={[Navigation, FreeMode, Keyboard, Autoplay]}
                    >
                      <div className="swiper-wrapper">
                        {ServicesV4Data.slice(6, 13).map((service) => (
                          <SwiperSlide key={service.id}>
                            <SingleServiceV4 service={service} />
                          </SwiperSlide>
                        ))}
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div
            style={{ marginTop: "50px" }}
            className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
          >
            {/* Image */}
            <div className="w-100 w-lg-50 text-center p-2">
              <img
                src="/assets/img/about/choose us 1.png"
                alt="Blog"
                className="img-fluid"
                style={{ maxWidth: "500px", height: "500px", width: "100%" }}
              />
            </div>
            {/* Text */}
            <div className="w-100 w-lg-50 p-4 ">
              <h2 className="post-title">
                <Link to={`#`}>
                  Why Should You Choose Agentic Process Automation?{" "}
                </Link>
              </h2>
              <p>
                We bring together cutting-edge AI technology and deep industry
                expertise to deliver agentic automation solutions that truly
                work for your business. Our autonomous agents don’t just follow
                scripts, they think, adapt, and improve on their own, freeing
                your teams to focus on higher-value tasks.
              </p>
              <p>
                We prioritize reliability, security, and seamless integration,
                ensuring your workflows run smoothly across all systems. With
                our support, you gain scalable automation that evolves with your
                needs, reduces errors, accelerates processes, and drives
                measurable efficiency gains.
              </p>
            </div>
          </div>
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

export default AgenticContent;
