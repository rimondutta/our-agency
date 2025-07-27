import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Helmet } from "react-helmet-async";
import LayoutV1 from "../../components/layouts/LayoutV1";
import DarkClass from "../../components/classes/DarkClass";
import banner6 from "/assets/img/services/dropshipping.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerV3Data from "../../../src/assets/jsonData/banner/BannerV3Data.json";
import CardWithProgressBar from "../../components/process/CardsWithProgressBar.js";
import { toast } from "react-toastify";

import {
  Keyboard,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import SingleBannerV3 from "../../components/banner/SingleBannerV3.js";
import { useState } from "react";
import MostPopularServices from "../../components/services/MostPopularServices.js";

const Dropshipping = () => {
  const [loading, setLoading] = useState(false);
  const cards = [
    {
      id: 1,
      title: "Winning Product Research",
      img: "/assets/img/services/dropshipping/winning product research-100.jpg",
      description:
        "We analyze trending products, search volume, competition, and cost-per-click to find a niche that has high demand and long-term growth potential.",
    },
    {
      id: 2,
      title: "Supplier Sourcing & Logistics",
      img: "/assets/img/services/dropshipping/supplier sourcing and logistic-100.jpg",
      description:
        "We connect you with reliable suppliers from the U.S. and duty-free regions to ensure faster shipping times, superior product quality, and better customer satisfaction.",
    },
    {
      id: 3,
      title: "Custom Store & Website Development",
      img: "/assets/img/services/dropshipping/custom store and website development-100.jpg",
      description:
        "We design and develop a high-converting online store tailored to your niche, ensuring a seamless user experience and optimized sales funnel.",
    },
    {
      id: 4,
      title: "Branding & Positioning",
      img: "/assets/img/services/dropshipping/brand positioning-100.jpg",
      description:
        "We help you create a unique brand identity, from logo creation to product packaging",
    },
    {
      id: 5,
      title: "Data-Driven Marketing Strategy",
      img: "/assets/img/services/dropshipping/Data driven marketing strategy-100.jpg",
      description:
        "Our expert team develops targeted ad campaigns, SEO strategies, and email marketing plans to scale your business profitably.",
    },
    {
      id: 6,
      title: "Performance Tracking & Optimization",
      img: "/assets/img/services/dropshipping/performance tracking & marketing strategy-100.jpg",
      description:
        "We use advanced analytics, A/B testing, and conversion rate optimization to maximize your profitability.",
    },
  ];

  const features = [
    {
      icon: "/assets/img/services/dropshipping/unreliable deliveries.jpg", // Bootstrap Icon class
      title: "Unreliable Delivery",
      description:
        "You have no control over shipping times, leading to frustrated customers.",
    },
    {
      icon: "/assets/img/services/dropshipping/poor product quality.jpg",
      title: "Poor Product Quality",
      description:
        "Customers often receive damaged or incorrect items, resulting in high return rates and refunds.",
    },
    {
      icon: "/assets/img/services/dropshipping/low repeate customer.jpg",
      title: "Low Repeat Customers",
      description:
        "Bad experiences mean fewer returning buyers and negative reviews.",
    },
    {
      icon: "/assets/img/services/dropshipping/high duties.jpg",
      title: "High Duties",
      description:
        "With tariffs of up to 60% on Chinese products (imposed by the US administration), your profit margins shrink significantly.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question1: "",
    question1Details: "",
    question2: "",
    question2Details: "",
    question3: "",
    question4: "",
  });

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
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/senddropshippingformmail`,
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
          question1: "",
          question1Details: "",
          question2: "",
          question2Details: "",
          question3: "",
          question4: "",
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
      <Helmet>
        <title>Explore Dropshipping Services for Entrepreneurs | Market Growth Experts</title>
        <meta name="description" content="Market Growth Experts offers comprehensive dropshipping services, including product research, supplier sourcing, custom store development, and branding, to help entrepreneurs."></meta>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Dropshipping"
          breadCrumb="Dropshipping"
          LightMode={false}
        />
        <div style={{ width: "95%", margin: "auto" }} className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={banner6} alt="Thumb" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-center">
              Access suppliers used by top sellers
            </h2>
            <p style={{ fontSize: "20px" }}>
              Dropshipping isn't just about selling products—it's about selling
              the right products from trusted suppliers who support long-term
              profitability. At Market Growth Experts, we connect you with the same
              high-performing suppliers used by top sellers worldwide. Each
              supplier is carefully vetted to ensure quality, reliability, fast
              fulfillment, and strong profit margins.
            </p>
            <p style={{ fontSize: "20px" }}>
              By partnering with us, you’re choosing an agency that builds your
              brand with data-backed strategies, premium suppliers, and expert
              marketing techniques. With the right products and partners in
              place, your business is set up to scale confidently and
              sustainably.
            </p>
          </div>
        </div>
        <div  className="container mt-50 mt-xs-20">
          <h1 className="text-center">
            Start Your Dropshipping Business The Right Way
          </h1>
          <h4 className="mt-5 text-center">
            Are you tired of the pitfalls of Chinese dropshipping? Many
            entrepreneurs jump into dropshipping with high hopes, only to face
            disappointing results. Due to reasons like:
          </h4>
          <div className="row g-4 mt-4">
            {features.map((feature, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="text-white  p-4 text-center h-100 rounded-4 shadow-sm border border-secondary">
                  <img
                    src={feature.icon}
                    style={{ width: "80%",aspectRatio:"square" }}
                    alt=""
                  />
                  <h4 className="fw-bold mt-4">{feature.title}</h4>
                  <p className="mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{paddingBottom:"40px", marginTop: "100px" }}>
          <div style={{ position: "relative" }} className="container">
            <h2 className="text-center">
              Our Dropshipping Service Encompasses
            </h2>
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
                  slidesPerView: 2.8,
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

        <div>
          <CardWithProgressBar />
        </div>
        <div
          style={{ marginTop: "50px" }}
          className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
        >
          {/* Image */}
          <div className="w-100 w-lg-50 text-center p-2">
            <img
              src="/assets/img/blog/why.png"
              alt="Blog"
              className="img-fluid"
              style={{ maxWidth: "500px", height: "500px", width: "100%" }}
            />
          </div>
          {/* Text */}
          <div className="drop w-100 w-lg-50 p-4 ">
            <h2 className="post-title">Why Choose Us?</h2>
            <ul style={{ width: "70%" }}>
              <li style={{marginBottom:"8px"}}>
                <span style={{ fontWeight: "bold",fontSize:"20px" }}>No More Guesswork</span>:
                We handle the research, planning, and setup so you can focus on
                growing your business.
              </li>
              <li style={{marginBottom:"8px"}}>
                {" "}
                <span style={{ fontWeight: "bold",fontSize:"20px" }}>
                  Duty-Free Solutions:
                </span>{" "}
                Avoid hefty tariffs by sourcing products from non-Chinese
                suppliers.
              </li>
              <li style={{marginBottom:"8px"}}>
                <span style={{ fontWeight: "bold",fontSize:"20px" }}>Proven Results:</span> Our
                strategies have helped countless entrepreneurs build successful
                dropshipping businesses.{" "}
              </li>
              <li style={{marginBottom:"8px"}}>
                <span style={{ fontWeight: "bold",fontSize:"20px" }}>End-to-End Support:</span>
                From niche selection to marketing, we’re with you every step of
                the way.
              </li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: "60px" }} className="container">
          <h2 className="text-center">Start today with the best niche</h2>
          <div
            style={{ padding: "20px 0px" }}
            className="banner-style-three-area"
          >
            <Swiper
              className="banner-slide-counter"
              loop={true}
        
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1000}
              pagination={{
                clickable: true,
                type: "fraction",
                el: ".banner-slide-pagination",
              }}
              navigation={{
                nextEl: ".banner-slide-button-next",
                prevEl: ".banner-slide-button-prev",
              }}
              breakpoints={{
                991: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
                992: {
                  slidesPerView: 2.2,
                  spaceBetween: 50,
                },
                1400: {
                  slidesPerView: 2.4,
                  spaceBetween: 80,
                },
              }}
              modules={[Pagination, Navigation, Keyboard, Mousewheel, Autoplay]}
            >
              <div className="swiper-wrapper">
                {BannerV3Data.slice(0, 6).map((banner) => (
                  <SwiperSlide key={banner.id}>
                    <SingleBannerV3 banner={banner} />
                  </SwiperSlide>
                ))}
              </div>

              <div className="banner-slide-button-prev" />
              <div className="banner-slide-button-next" />
            </Swiper>
          </div>
          <MostPopularServices />
          <div
            style={{ paddingBottom: "80px", paddingTop: "40px" }}
            className="mt-5"
          >
            <div className="card shadow bg-dark text-white">
              <div className="row g-0" style={{ minHeight: "650px" }}>
                {/* Left Side (Image) - Hidden on small screens, visible on medium and up */}
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="col-md-5 col-lg-5  d-none d-md-block"
                >
                  <img
                    style={{ height: "80%", objectPosition: "center" }}
                    src="/assets/img/services/contact_us.jpg"
                    alt="Business professional"
                    className="w-100 object-fit-cover"
                  />
                </div>

                {/* Right Side (Form Content) */}
                <div className="col-md-7 col-lg-7 p-4 p-md-5">
                  <h2 className="fw-bold mb-4 fs-3 fs-md-2 text-white">
                    HELP US UNDERSTAND YOUR NEEDS WITH THESE QUESTIONS
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
                        Do you have a website?
                      </label>
                      <select
                        name="question1"
                        className="form-select bg-dark text-white"
                        value={formData.question1}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {formData.question1 === "Yes" && (
                        <input
                          type="url"
                          name="question1Details"
                          placeholder="Enter Website URL"
                          className="form-control bg-dark text-white mt-4"
                          value={formData.question1Details}
                          onChange={handleChange}
                        />
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">
                        Do you have a registered company?
                      </label>
                      <select
                        name="question2"
                        className="form-select bg-dark text-white"
                        value={formData.question2}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {formData.question2 === "Yes" && (
                        <input
                          type="text"
                          name="question2Details"
                          placeholder="Enter Company Name"
                          className="form-control bg-dark text-white mt-4"
                          value={formData.question2Details}
                          onChange={handleChange}
                        />
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">
                        Have you tried hands-on dropshipping?
                      </label>
                      <select
                        name="question3"
                        className="form-select bg-dark text-white"
                        value={formData.question3}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">
                        Do you want to pursue dropshipping as full-time or side
                        income?
                      </label>
                      <select
                        name="question4"
                        className="form-select bg-dark text-white"
                        value={formData.question4}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="Full-time">Full-time</option>
                        <option value="Side Income">Side Income</option>
                      </select>
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
                        className="btn mx-auto btn-outline-success fw-bold px-3 py-2"
                        disabled={loading}
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
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Dropshipping;
