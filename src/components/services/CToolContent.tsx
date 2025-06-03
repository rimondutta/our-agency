
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

const CToolContent = ({
  serviceInfo,
  sectionClass,
}: ServiceDetailsProps) => {
  const {
    title,
    bannerImg,
    faqs,
    definition,
    importance,
    importance_title,
  } = serviceInfo || {};

   const cards = [
    {
      id: 1,
      title: "Customer Segmentation",
      img: "/assets/img/services/ai/customer segment.png",
      description:
        "AI can analyze vast amounts of customer data to identify patterns and segment audiences effectively. This allows businesses to create highly targeted marketing campaigns, ensuring that the right message reaches the right people, increasing engagement and conversion rates while reducing wasted resources.",
    },
    {
      id: 2,
      title: "Predictive Analytics",
      img: "/assets/img/services/ai/predictive.png",
      description:
        "AI-powered predictive analytics can help businesses forecast future trends, consumer behavior, and sales. By leveraging historical data, AI can provide insights into what customers are likely to purchase, allowing brands to tailor their strategies and improve decision-making, leading to enhanced ROI and reduced risks.",
    },
    {
      id: 3,
      title: "Content Personalization",
      img: "/assets/img/services/ai/ai chatbot.png",
      description:
        "AI can personalize content in real-time by analyzing customer preferences, behaviors, and interactions. It helps businesses create dynamic content that resonates with individual users, enhancing customer satisfaction, loyalty, and overall engagement, which can ultimately lead to higher sales and brand affinity.",
    },
    {
      id: 4,
      title: "Automated Customer Support",
      img: "/assets/img/services/ai/custom content.png",
      description:
        "AI-driven chatbots and virtual assistants are transforming customer support by providing instant responses to queries. These systems can handle a wide range of customer service issues, from product inquiries to troubleshooting, improving customer satisfaction while reducing operational costs and increasing efficiency.",
    },
  ];
  
  const features = [
    {
      icon: "/assets/img/services/ai/app.svg", // Bootstrap Icon class
      title: "AI Project Coordinator",
      description:
        "Converts raw business data into interactive videos where users can explore insights by asking questions.",
    },
    {
      icon: "/assets/img/services/ai/tracer.svg",
      title: "Spider Sage",
      description:
        "A powerful scraper that processes bulk website links to collect and store targeted data automatically.",
    },
    // {
    //   icon: "/assets/img/services/ai/chatbot.svg",
    //   title: "DROK: Worlds First AI Marketing Expert ",
    //   description:
    //     "It is powered by an advanced LLM, built to solve your marketing challenges with expert-level precision.",
    // },
    {
      icon: "/assets/img/services/ai/sales automation.svg",
      title: "AI Sales Automation",
      description:
        "An agentic AI package that calls, collects and automates the entire sales process from outreach to follow-up.",
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
              <div className="w-100">
                <div className="aitoolsdesc  text-white p-4  h-100">
                  <a
                    style={{
                      width: "70%",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                      position: "relative",
                    }}
                    target="_blank"
                    href="#"
                  >
                    {" "}
                    
                  </a>
                  <div>
                    <h3
                      style={{ marginTop: "75px" }}
                      className="fw-bold text-center"
                    >
                      Your Trusted AI Marketing Expert
                    </h3>
                    <p className="mb-4">
                      At the core of this system lies a cutting-edge Large
                      Language Model (LLM), designed to intelligently and
                      efficiently address your most pressing marketing
                      challenges. Trained on a vast and diverse dataset that
                      spans marketing strategy, digital trends, consumer
                      psychology, and brand communication, the model is capable
                      of delivering insights, recommendations, and content that
                      rival the expertise of seasoned professionals.
                    </p>
                    <p className="mb-4">
                      One of its standout capabilities is its ability to rapidly
                      synthesize large amounts of information. Instead of
                      spending hours researching audience behavior or testing
                      different headlines, marketers can receive real-time
                      suggestions backed by language intelligence and data
                      patterns. It can assist with everything from email
                      marketing and social media content to customer
                      segmentation and funnel optimization.
                    </p>
                    <p>
                      {" "}
                      What makes this LLM truly valuable is not just its breadth
                      of knowledge, but its ability to evolve and learn from
                      interactions. As it processes more queries and adapts to
                      specific industries, it becomes even more aligned with the
                      unique needs of your brand or business. This means faster
                      workflows, better content, smarter decisions, and
                      ultimately — higher ROI on your marketing efforts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row g-4 mt-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-12 col-sm-6 col-lg-3">
                    <div className="text-white  p-4 text-center h-100 rounded-4 shadow-sm border border-secondary">
                      <img
                        src={feature.icon}
                        style={{ width: "60px" }}
                        alt=""
                      />
                      <h4 className="fw-bold mt-4">{feature.title}</h4>
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
           <div style={{ marginTop: "40px" }}>
              <h2>Challenges That Our AI Can Help You Solve</h2>
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

export default CToolContent;
