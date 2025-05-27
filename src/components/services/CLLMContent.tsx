import { Swiper, SwiperSlide } from "swiper/react";
import MostPopularServices from "./MostPopularServices.tsx";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

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

const CLLMContent = ({ serviceInfo, sectionClass }: ServiceDetailsProps) => {
  const { title, bannerImg, faqs, definition, importance, importance_title } =
    serviceInfo || {};
  const cards = [
    {
      id: 1,
      title: "Generic Responses from Public Models",
      img: "/assets/img/services/ai/customer segment.png",
      description:
        "Eliminate vague or irrelevant answers by training models on your proprietary data to generate highly specific, accurate, and context-aware outputs.",
    },
    {
      id: 2,
      title: "Lack of Industry-Specific Knowledge",
      img: "/assets/img/services/ai/predictive.png",
      description:
        "Tailor your LLM to deeply understand your industry jargon, workflows, compliance needs, and customer queries..",
    },
    {
      id: 3,
      title: "Inconsistent Brand Voice",
      img: "/assets/img/services/ai/ai chatbot.png",
      description:
        "Maintain a consistent tone, terminology, and style in customer communications, marketing content, and support responses.",
    },
    {
      id: 4,
      title: "Poor Productivity in Manual Processes",
      img: "/assets/img/services/ai/custom content.png",
      description:
        "Automate repetitive content generation tasks—reports, summaries, code snippets, legal drafts—tailored to your company’s standards.",
    },
  ];
  const features = [
    {
      icon: "/assets/img/icon/conversion rate.svg", // Bootstrap Icon class
      title: "Pre-Trained Model Adaptation",
      description:
        "Build on top-tier models like GPT or open-source LLMs, customized for your industry and use case.",
    },
    {
      icon: "/assets/img/icon/Cost Per Acquisition.svg",
      title: "Secure Data Handling",
      description: "Fine-tune using your internal data with strict privacy protocols and enterprise-grade security.",
    },
    {
      icon: "/assets/img/icon/Return on Ad Spend.svg",
      title: "Multi-Language Support",
      description:
        "Deploy models capable of understanding and generating content across various languages and dialects.",
    },
    {
      icon: "/assets/img/icon/Click-Through Rate.svg",
      title: "Task-Specific Optimization",
      description:
        "Configure models for high performance in targeted tasks like summarization, classification, or Q&A.",
    },
    {
      icon: "/assets/img/icon/Customer Lifetime Value.svg",
      title: "Seamless API Integration",
      description:
        "Easily plug your custom model into existing workflows, apps, or internal systems.",
    },
    {
      icon: "/assets/img/icon/Impressions & Reach.svg",
      title: "Continuous Improvement Loop",
      description:
        "Monitor performance and re-train periodically to keep your model sharp, relevant, and up to date.",
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
          </div>
         <div className="mt-50 mt-xs-20">
              <h2>Key Features We Offer </h2>
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
          <div style={{ marginTop: "40px" }}>
            <h2>Challenges that Custom LLM can help you solve</h2>
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
                <Link to={`#`}>Why Choose Us? </Link>
              </h2>
              <p>
                We combine deep AI expertise with real-world business insight to
                create language models that don’t just work, they work for you.
                Our fine-tuning process is rooted in understanding your data,
                industry, and goals, allowing us to build models that perform
                with precision and align seamlessly with your brand.
              </p>
              <p>
                We don’t believe in one-size-fits-all AI; we believe in
                solutions that evolve with your needs. From secure data handling
                to post-deployment support, we ensure your custom LLM delivers
                consistent, accurate, and context-aware results that drive real
                business impact.
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

export default CLLMContent;
