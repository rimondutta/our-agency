// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";
import MostPopularServices from "./MostPopularServices.tsx";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { toast } from "react-toastify";

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

const AIContent = ({ serviceInfo, sectionClass }: ServiceDetailsProps) => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    aiService: "",
    additional: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/sendaimail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data?.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          aiService: "",
          additional: "",
        });
        toast.success("Form Saved Successfully");
      } else throw new Error(data?.message);
    } catch (err: any) {
      toast.warn(err.message);
    } finally {
      setLoading(false);
    }
  };

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

  
  
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleClick=()=>{
    if(contactRef.current){
      contactRef.current.scrollIntoView({behavior:"smooth"})
    }
  }
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

            <div className="mt-50 mt-xs-20">
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
                    href=""
                  >
                    {" "}
                    <div
                      style={{ paddingTop: "40px", paddingBottom: "20px" }}
                      className="drokimg rounded-4 text-center shadow-sm border border-secondary"
                    >
                      {/* <img
                        src="/assets/img/services/white 1.png"
                        style={{ width: "90%" }}
                        alt=""
                      /> */}
                      {/* <div style={{backgroundColor:"white",color:"black",width:"40%",borderRadius:'10px',position:"absolute",top:"-20px",right:"0"}}>Click Here To Try Now</div> */}
                    </div>
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
              <div className="container" style={{ marginTop: "50px" }}>
                <h2>Finetune LLM For Your Business</h2>
                <div
                  style={{ marginTop: "30px", width: "100%" }}
                  className={`mb-5 finetunebox`}
                >
                  {/* Text */}
                  <div
                    className="p-4 finetunecontent"
                  >
                    <h2 className="post-title">
                      <div>What are its benefit?</div>
                    </h2>
                    <p>
                      Fine-tuning a Large Language Model (LLM) for your business
                      offers a wide range of advantages that significantly
                      enhance operational efficiency, user engagement, and
                      overall productivity. By training the model on your
                      company’s domain-specific data—such as product manuals,
                      customer queries, emails, or internal documentation—the
                      LLM becomes highly proficient in understanding the unique
                      vocabulary, workflows, and tone of your industry.
                      Additionally, fine-tuned LLMs can dramatically reduce
                      human workload by automating repetitive tasks such as data
                      entry, report generation, summarization, and transcription
                    </p>
                    <p>
                      Importantly, when deployed in a secure environment, a
                      fine-tuned LLM can help maintain data privacy and
                      compliance with industry regulations, as the model
                      operates within your infrastructure and does not expose
                      sensitive information to external APIs. Furthermore, the
                      adaptability of a fine-tuned model means it can evolve
                      with your business—learning from ongoing interactions,
                      feedback, and new data, which ensures its relevance over
                      time.
                    </p>

                    <button className="btn" onClick={handleClick}>Contact Now</button>
                  </div>
                  <div  className="finetuneimage text-center p-2">
                    <img
                      src="/assets/img/team/shubhsir shoot.png"
                      alt="Blog"
                      className="img-fluid"
                      style={{
                        width: "450px",
                        height:'550px'
                      }}
                    />
                  </div>
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
                <p>{whyChooseP1}</p>
                <p>{whyChooseP2}</p>
              </div>
            </div>
          </div>
        </div>

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
          <div 
            ref={contactRef}
            style={{ paddingBottom: "20px", paddingTop: "40px" }}
            className="mt-5"
          >
            <div className="card shadow bg-dark text-white">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                {/* Left Side (Image) - Hidden on small screens, visible on medium and up */}
                <div
                  style={{
                    height: "100%",
                    width: "40%",
                  }}
                  className="formImageDiv"
                >
                  <img
                    src="/assets/img/services/contact_us.jpg"
                    alt="Business professional"
                    className="h-100 w-100 object-fit-cover"
                  />
                </div>

                {/* Right Side (Form Content) */}
                <div className="formcontent p-4 p-md-5">
                  <h2 className="fw-bold mb-4 fs-3 fs-md-2 text-white">
                    HELP US UNDERSTAND YOUR AI SERVICE NEEDS
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label text-white">Name</label>
                      <input
                        name="name"
                        placeholder="Enter Name"
                        className="form-control bg-dark text-white"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-white">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="form-control bg-dark text-white"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Phone Number"
                        className="form-control bg-dark text-white"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">
                        What type of AI service do you want?
                      </label>
                      <select
                        name="aiService"
                        className="form-select bg-dark text-white"
                        value={formData.aiService}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="AI Chatbot">AI Chatbot</option>
                        <option value="AI Calling Assistant">
                          AI Calling Assistant
                        </option>
                        <option value="AI Sales">AI Sales</option>
                        <option value="Custom AI Solution">
                          Custom AI Solution
                        </option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-white">
                        Additional Information
                      </label>
                      <textarea
                        name="additional"
                        placeholder="Enter any additional details"
                        className="form-control bg-dark text-white"
                        style={{ height: "120px" }}
                        value={formData.additional}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className=""
                    >
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn mx-auto btn-outline-success fw-bold px-3 py-2"
                        style={{
                          color: "black",

                          borderColor: "white",
                        }}
                      >
                        {loading ? "Loading" : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIContent;
