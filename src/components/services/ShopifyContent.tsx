// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  FreeMode,
  Keyboard,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

import bannerImg2 from "/assets/img/services/shopify/banner02.jpg";

import ServicesV4Data from "../../../src/assets/jsonData/services/ServicesV4Data.json";
import SingleServiceV4 from "./SingleServiceV4";
import MostPopularServices from "./MostPopularServices.tsx";
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

const ShopifyContent = ({ serviceInfo, sectionClass }: ServiceDetailsProps) => {
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
      icon: "/assets/img/icon/Data_Conversion.svg", // Bootstrap Icon class
      title: "Seamless Third-Party App Integration",
      description:
        "We connect your store with essential tools like email marketing, analytics, and review apps for a complete ecosystem.",
    },
    {
      icon: "/assets/img/icon/custom feature development.svg",
      title: "Custom Feature Development",
      description:
        "Need something unique? We build tailored features that align with your brand goals and improve user experience.",
    },
    {
      icon: "/assets/img/icon/tools.svg",
      title: "Inventory & Order Management Tools",
      description:
        "Automate stock updates, order tracking, and fulfillment with smart integrations that save time and reduce errors.",
    },
    {
      icon: "/assets/img/icon/payment and checkout.svg",
      title: "Payment & Checkout Enhancements",
      description:
        "We optimize and customize your payment flow to ensure faster, secure, and smoother transactions.",
    },
    {
      icon: "/assets/img/icon/referral.svg",
      title: "Loyalty & Referral Systems",
      description:
        "Boost customer retention by integrating loyalty points, rewards, and referral program apps into your store.",
    },
    {
      icon: "/assets/img/icon/chat tool.svg",
      title: "Real-Time Chat & Support Tools",
      description:
        "Enable instant customer support with chat tools and bots that drive engagement and resolve queries instantly.",
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
          body: JSON.stringify({...formData,type:"shopify"}),
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
            <div className="row mt-4">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={bannerImg2} alt="Thumb" />
                </div>
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
                Our Shopify Developmet Service Include{" "}
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
                        {ServicesV4Data.slice(0,6).map((service) => (
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
        <div className="container">
          <div
            style={{ marginTop: "80px" }}
            className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
          >
            {/* Image */}
            <div className="w-100 w-lg-50 text-center p-2">
              <img
                src="/assets/img/blog/choose us 1.png"
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
          <div
            style={{ marginTop: "50px" }}
            className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
          ></div>
          <div style={{ marginTop: "0px", paddingTop: "0px" }}>
            <Swiper
              modules={[Pagination, Navigation, Keyboard, Mousewheel, Autoplay]}
              navigation={{
                nextEl: ".right",
                prevEl: ".left",
              }}
              mousewheel={true}
              grabCursor={true}
              autoplay={true}
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
                  <div
                    style={{ minHeight: "380px", width: "100%" }}
                    className="feature-card d-flex flex-column justify-content-between text-center p-4 rounded-4 shadow border border-secondary bg-dark h-100"
                  >
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
          </div>
        </div>

        <div className="container">
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
            <div  className="card shadow bg-dark text-white">
              <div
                style={{
                  width:"100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap:"5%",
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
                <div   className="formcontent p-4 p-md-5">
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

                    <div className="mb-4" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <div style={{width:"45%"}} className="">
                        <label className="form-label text-white">Country</label>
                        <input
                          name="country"
                          placeholder="Enter country name"
                          className="form-control bg-dark text-white"
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </div>

                      <div style={{width:"45%"}} className="">
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

export default ShopifyContent;
