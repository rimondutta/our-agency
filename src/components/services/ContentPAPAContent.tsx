import { Link } from "react-router-dom";
import MostPopularServices from "./MostPopularServices.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";

interface DataType {
  title?: string;
  bannerImg?: string;
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

const ContentPapa = ({ serviceInfo, sectionClass }: ServiceDetailsProps) => {
  const { title, bannerImg, faqs, definition, importance, importance_title } =
    serviceInfo || {};

  const cards = [
    {
      id: 1,
      title: "Real-Time Personalization",
      img: "/assets/img/services/ai/cpapa/Real-Time Personalization.png",
      description:
        "Customize user experiences based on behavior, preferences, and purchase intent.",
    },
    {
      id: 2,
      title: "Predictive Targeting ",
      img: "/assets/img/services/ai/cpapa/Predictive Targeting.png",
      description:
        "Use AI to anticipate customer actions and send offers before they even search.",
    },
    {
      id: 3,
      title: "Dynamic Content Delivery",
      img: "/assets/img/services/ai/cpapa/Dynamic Content Delivery.png",
      description:
        "Auto-adapt emails, ads, and landing pages for each unique user.",
    },
    {
      id: 4,
      title: "Behavior-Driven Campaigns",
      img: "/assets/img/services/ai/cpapa/Behavior-Driven Campaigns.png",
      description:
        " Launch marketing flows triggered by user behavior across channels.",
    },
    {
      id: 5,
      title: "Higher ROI, Lower Waste",
      img: "/assets/img/services/ai/cpapa/Higher ROI, Lower Waste.png",
      description:
        "Spend smarter with campaigns that convert more and guess less.",
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
              <div style={{ marginTop: "40px" }}>
                <h2>Hyper-Personalized Marketing Powered by Predictive AI</h2>
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
                  modules={[Navigation, Keyboard, Autoplay]}
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
                                  card?.img
                                    ? card.img
                                    : `/assets/img/blog/4.jpg`
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
              <div className="container" style={{ marginTop: "50px" }}>
                <div
                  style={{ marginTop: "30px", width: "100%" }}
                  className={`mb-5 finetunebox`}
                >
                  {/* Text */}
                  <div className="finetuneimage text-center p-2">
                    <img
                      src="/assets/img/team/shubhsir shoot.png"
                      alt="Blog"
                      className="img-fluid"
                      style={{
                        width: "450px",
                        height: "550px",
                      }}
                    />
                  </div>
                  <div className="p-4 finetunecontent">
                    <h2>
                      Increase Retention Through Behavior-Based Content Deliver
                    </h2>
                    <ul>
                      <li className="listitem">
                        {" "}
                        Deliver content based on real-time actions like clicks,
                        page views, and time spent, so users always see what's
                        most relevant to them.
                      </li>

                      <li className="listitem">
                        Reduce bounce rates by guiding users with personalized
                        recommendations aligned with their browsing habits and
                        intent.
                      </li>

                      <li className="listitem">
                        Send timely nudges—like emails or app notifications—when
                        users show signs of hesitation or drop-off, increasing
                        the chance of re-engagement.
                      </li>

                      <li className="listitem">
                        Keep repeat customers loyal by showing content or offers
                        tailored to their purchase history and preferences.
                      </li>

                      <li className="listitem">
                        Use automated workflows to scale personalization without
                        needing manual input for every user interaction.
                      </li>

                      <li className="listitem">
                        Turn passive visitors into active buyers by addressing
                        individual needs at the right moment, building long-term
                        brand trust.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                style={{ marginTop: "50px" }}
                className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
              >
                <div className="w-100 w-lg-50 text-center p-2">
                  <img
                    src="/assets/img/about/choose us 1.png"
                    alt="Blog"
                    className="img-fluid"
                    style={{
                      maxWidth: "500px",
                      height: "500px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="w-100 w-lg-50 p-4 ">
                  <h2 className="post-title">
                    <Link to={`#`}>Why Choose Us? </Link>
                  </h2>
                  <p>
                    Choosing us for content personalization and predictive
                    analysis means partnering with a team that combines deep
                    data expertise with cutting-edge AI technology to deliver
                    truly meaningful customer experiences. We don’t just offer
                    personalization, we deliver it with precision backed by
                    real-time data and AI-driven insights. Our approach goes
                    beyond surface-level customization by deeply analyzing user
                    behavior to create content that truly resonates.
                  </p>
                  <p>
                    With our expertise, you get more than just tools, you get
                    strategies that convert casual browsers into loyal
                    customers. We build automated, scalable systems that grow
                    with your business and adapt as your audience evolves.
                    Whether you're aiming to boost retention, reduce churn, or
                    enhance user experience, we bring the technical know-how and
                    marketing intuition to make it happen efficiently and
                    effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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

export default ContentPapa;
