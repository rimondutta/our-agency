// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";
import MostPopularServices from "./MostPopularServices.tsx";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
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

const WebApplicationContent = ({
  serviceInfo,
  sectionClass,
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteType: "",
    otherWebsiteType: "",
    additional: "",
  });
  const [loading, setLoading] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Discovery & Planning",
      img: "/assets/img/services/winning product.jpg",
      description:
        "We start by understanding your brand, business goals, and target audience. This phase includes gathering requirements, defining project scope, and setting timelines. Our aim is to build a clear roadmap that aligns technical execution with your long-term objectives.",
    },
    {
      id: 2,
      title: " Design & Wireframing",
      img: "/assets/img/services/supplying.jpg",
      description:
        "Our design team crafts intuitive wireframes and visual mockups to bring your ideas to life. We focus on user experience, brand consistency, and aesthetics—ensuring the design not only looks great but also guides users seamlessly through your site.",
    },
    {
      id: 3,
      title: "Development",
      img: "/assets/img/services/custom store.jpg",
      description:
        "Once the design is finalized, our developers build your website using clean, scalable code. We implement all planned functionalities, from basic layouts to advanced integrations, ensuring the site is responsive, fast, and compatible across all devices..",
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      img: "/assets/img/services/branding.jpg",
      description:
        "Before going live, we conduct thorough testing—checking for bugs, browser compatibility, and performance issues. This phase ensures your website runs smoothly and delivers a flawless user experience under all conditions.",
    },
    {
      id: 5,
      title: "Launch & Handover",
      img: "/assets/img/services/data driven.jpg",
      description:
        "After final approval, we launch your site and hand over full access. We also provide basic training and documentation to help you manage your site independently. Post-launch support is available to ensure everything stays optimized.",
    },
  ];

  const Skills = [
    "Custom Website Development",
    "eCommerce Website Development",
    "Web Application Development",
    "CMS-Based Development (WordPress, Shopify, etc.)",
    "Landing Page & UI/UX Design",
    "Website Maintenance & Support",
  ];

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
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/sendwebappmail`,
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
          websiteType: "",
          otherWebsiteType: "",
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
              <h1 style={{ marginBottom: "50px" }}>
                Our Web Development Services{" "}
              </h1>
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
            <div style={{ marginTop: "50px" }}>
              <h2 className="text-center">Our Proven Process</h2>
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
          <div className="mt-5">
            <div className="card shadow bg-dark text-white">
              <div className="row g-0" style={{ minHeight: "650px" }}>
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="col-md-5 col-lg-5 d-none d-md-block"
                >
                  <img
                    style={{ height: "80%", objectPosition: "center" }}
                    src="/assets/img/services/contact_us_2.jpg"
                    alt="Business professional"
                    className="w-100 object-fit-cover"
                  />
                </div>

                {/* Right Side (Form Content) */}
                <div className="col-md-12 col-lg-7 p-4 p-md-5">
                  <h2 className="fw-bold mb-4 fs-3 fs-md-2 text-white">
                    LEARN HOW WE CAN ENHANCE THE EFFECTIVENESS OF YOUR WEB APP
                    DEVELOPMENT.
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        className="form-control bg-dark text-white"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Email address *"
                          className="form-control bg-dark text-white"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <span className="alert-error" />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Phone no. *"
                          className="form-control bg-dark text-white"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <select
                        name="websiteType"
                        className="form-select bg-dark text-white"
                        value={formData.websiteType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select Website Type
                        </option>
                        <option value="eCommerce App">eCommerce App</option>
                        <option value="Blog App">Blog App</option>
                        <option value="Chat App">Chat App</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>

                    {formData.websiteType === "Others" && (
                      <div className="mb-4">
                        <input
                          type="text"
                          name="otherWebsiteType"
                          placeholder="Specify Website Type"
                          className="form-control bg-dark text-white"
                          value={formData.otherWebsiteType}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    <div className="mb-4">
                      <textarea
                        name="additional"
                        placeholder="Additional information"
                        className="form-control bg-dark text-white"
                        style={{
                          height: "120px",
                        }}
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
                        disabled={loading}
                        type="submit"
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

export default WebApplicationContent;
