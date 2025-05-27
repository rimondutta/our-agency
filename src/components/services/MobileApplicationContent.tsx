// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";

import MostPopularServices from "./MostPopularServices.tsx";
import { useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
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

const MobileApplicationContent = ({
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

  const features = [
    {
      icon: "/assets/img/services/custom app development.svg", // Bootstrap Icon class
      title: "Custom App Development",
      description:
        "Tailored apps that align with your specific business goals.",
    },
    {
      icon: "/assets/img/services/Compatibility.svg",
      title: "Cross-Platform Compatibility",
      description: "Seamless app experience across both iOS and Android.",
    },
    {
      icon: "/assets/img/services/user centric.svg",
      title: "User-Centric Design",
      description: "Intuitive, engaging, and easy-to-navigate user interface.",
    },
    {
      icon: "/assets/img/services/scale up.svg",
      title: "Scalable Architecture",
      description: "Apps designed to grow with your business need.",
    },
  ];

  const cards = [
    {
      id: 1,
      title: "Custom Solutions",
      img: "/assets/img/services/wyg/Custom Solutions.jpg",
      description:
        "We develop mobile apps tailored to your unique business needs.",
    },
    {
      id: 2,
      title: "High-Performance Apps",
      img: "/assets/img/services/wyg/High-Performance Apps.jpg",
      description:
        "Our apps are optimized for speed and efficiency, ensuring smooth performance.",
    },
    {
      id: 3,
      title: "User-Focused Design",
      img: "/assets/img/services/wyg/User-Focused Design.jpg",
      description:
        "We prioritize user experience to create engaging, intuitive interfaces.",
    },
    {
      id: 4,
      title: "Cross-Platform Reach",
      img: "/assets/img/services/wyg/Cross-Platform Reach.jpg",
      description:
        "Your app will work seamlessly across both iOS and Android platforms.",
    },
    {
      id: 5,
      title: "Scalability",
      img: "/assets/img/services/wyg/Scalability.jpg",
      description: "Apps are built to evolve with your business as it grows.",
    },
    {
      id: 6,
      title: "Ongoing Support",
      img: "/assets/img/services/wyg/Ongoing Support.jpg",
      description:
        "We provide continuous updates and troubleshooting to keep your app running smoothly",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appType: "",
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
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/sendmobileappmail`,
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
          appType: "",
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
                <h3>What We Offer :</h3>
                <ul className="feature-list-item">
                  {importance?.map((item, idx) => {
                    return <li key={idx}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "50px" }}>
              <h2 className="text-center">Key Features We Offer</h2>
              <div className="row g-4 mt-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-12 col-sm-6 col-lg-3">
                    <div className="text-white  p-4 text-center h-100 rounded-4 shadow-sm border border-secondary">
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
            <div style={{ marginTop: "40px" }}>
              <h2>What You Get When You Choose Us</h2>
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
          <div className="mt-5">
            <div className="card shadow bg-dark text-white">
              <div className="row g-0" style={{ minHeight: "750px" }}>
                {/* Left Side (Image) - Hidden on small screens, visible on medium and up */}
                <div className="col-md-5 col-lg-5 d-none d-lg-block">
                  <img
                    src="/assets/img/services/contact_us_2.jpg"
                    alt="Business professional"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                {/* Right Side (Form Content) */}
                <div className="col-md-12 col-lg-7 p-4 p-md-5">
                  <h2 className="fw-bold mb-4 fs-3 fs-md-2 text-white">
                    LEARN HOW WE CAN ENHANCE THE EFFECTIVENESS OF YOUR MOBILE
                    APP DEVELOPMENT.
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
                        name="appType"
                        className="form-select bg-dark text-white"
                        value={formData.appType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select App Type
                        </option>
                        <option value="Android">Android</option>
                        <option value="iOS">iOS</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <textarea
                        name="additional"
                        placeholder="Additional information"
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

export default MobileApplicationContent;
