// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";
import MostPopularServices from "./MostPopularServices.tsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { toast } from "react-toastify";
import { useState } from "react";

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

const WordpressContent = ({
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

  const cards = [
    {
      id: 1,
      title: "Open-Source Platform",
      img: "/assets/img/services/wordpress/Open-Source Platform.png",
      description:
        "WordPress is free and fully customizable, with constant updates from a vibrant developer community.",
    },
    {
      id: 2,
      title: "User-Friendly Interface",
      img: "/assets/img/services/wordpress/User-Friendly Interface.png",
      description:
        "WordPress is designed for ease of use, making it ideal for beginners. At the same time, it offers advanced features and flexibility for experienced developers.",
    },
    {
      id: 3,
      title: "SEO-Friendly",
      img: "/assets/img/services/wordpress/SEO-Friendly.png",
      description:
        "With built-in SEO tools and plugins, WordPress helps you optimize your site for better visibility in search engines",
    },
    {
      id: 4,
      title: "Scalable and Flexible ",
      img: "/assets/img/services/wordpress/Scalable and Flexible.png",
      description:
        "WordPress grows with your business, offering the flexibility to expand your site’s features as needed .",
    },
    {
      id: 5,
      title: "Wide Range of Themes",
      img: "/assets/img/services/wordpress/Wide Range of Themes.png",
      description:
        "Choose from thousands of pre-designed themes to create a unique, professional look for your site .",
    },
    {
      id: 6,
      title: "Strong Community Support",
      img: "/assets/img/services/wordpress/Strong Community Support.png",
      description:
        "Benefit from extensive resources, tutorials, and support from a large, active WordPress community.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    country: "",
    budget: 0,
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
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/commonform`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, type: "Wordpress Development" }),
        }
      );

      const data = await response.json();

      if (data?.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          industry: "",
          country: "",
          budget: 0,
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
              <h1 style={{ marginBottom: "20px" }}>
                Why WordPress is the Best Choice for Your Website?
              </h1>
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
            <div style={{ marginTop: "50px" }}>
              <h2 className="text-center">
                WooCommerce integration for powerful ecommerce setup
              </h2>
              <div className="mt-4">
                <h3 className="mb-2">Seamless Integration with WordPress</h3>
                <p>
                  WooCommerce integrates effortlessly with WordPress, providing
                  a strong platform for eCommerce.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="mb-2">Customizable Product Options</h3>
                <p>
                  WooCommerce allows you to create a variety of product types
                  and attributes, tailored to your business needs.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="mb-2">Secure Payment Gateways</h3>
                <p>
                  WooCommerce supports multiple secure payment gateways,
                  offering customers convenient and safe checkout options
                </p>
              </div>
              <div className="mt-4">
                <h3 className="mb-2">Scalable and Flexible</h3>
                <p>
                  WooCommerce grows with your business, offering features to
                  support everything from small shops to large enterprises.
                </p>
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
                  <Link to={`#`}>Why Choose Us?</Link>
                </h2>
                <p>{whyChooseP1}</p>
                <p> {whyChooseP2}</p>
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
            style={{ paddingBottom: "20px", paddingTop: "40px" }}
            className="mt-5"
          >
            <div className="card shadow bg-dark text-white">
              <div
                style={{
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
                    justifyContent: "center",
                    alignItems: "center",
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
                    HELP US UNDERSTAND YOUR QUERY.
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

                    <div
                      className="mb-4"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ width: "45%" }} className="">
                        <label className="form-label text-white">Country</label>
                        <input
                          name="country"
                          placeholder="Enter country name"
                          className="form-control bg-dark text-white"
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </div>

                      <div style={{ width: "45%" }} className="">
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
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">Industry</label>
                      <input
                        name="industry"
                        placeholder="Enter industry name"
                        className="form-control bg-dark text-white"
                        value={formData.industry}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">Budget</label>
                      <input
                        name="budget"
                        type="number"
                        min={0}
                        placeholder="Enter budget in USD"
                        className="form-control bg-dark text-white"
                        onWheel={(e) => e.currentTarget.blur()}
                        value={formData.budget}
                        onChange={handleChange}
                      />
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

export default WordpressContent;
