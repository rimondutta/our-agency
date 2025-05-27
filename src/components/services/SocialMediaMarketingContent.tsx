import { Link } from "react-router-dom";
import PriceV2New from "../price/PriceV2New.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerV3Data from "../../../src/assets/jsonData/banner/BannerV3Data.json";
import SingleBannerV3 from "../../components/banner/SingleBannerV3.js";
import bannerImg2 from "/assets/img/banner/social media management.png";
import {
  Keyboard,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import MostPopularServices from "./MostPopularServices.tsx";

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

const SocialMediaMarketingContent = ({
  serviceInfo,
  sectionClass,
  pricing,
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
      icon: "/assets/img/icon/brand position.svg", // Bootstrap Icon class
      title: "Consistent Brand Presence",
      description:
        " Stay top-of-mind with a steady stream of relevant and engaging content.",
    },
    {
      icon: "/assets/img/icon/engagement.svg",
      title: "Higher Engagement Rates",
      description:
        "Build genuine connections through interactive posts, stories, and community replies.",
    },
    {
      icon: "/assets/img/icon/platform specific.svg",
      title: "Platform-Specific Strategies",
      description:
        "Tailored campaigns that match the unique behavior of each social platform.",
    },
    {
      icon: "/assets/img/icon/reach.svg",
      title: "Growth in Followers & Reach",
      description:
        "Organic and paid efforts that steadily expand your brand’s visibility.",
    },
    {
      icon: "/assets/img/icon/audience insight.svg",
      title: "Better Audience Insights",
      description:
        "Track real-time data to understand what works and where to improve.",
    },
    {
      icon: "/assets/img/icon/website traffic.svg",
      title: "Increased Website Traffic & Conversions",
      description:
        " Drive targeted traffic from social channels to your store or landing pages.",
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
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={bannerImg2} alt="Thumb" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="">Platforms We Serve</h2>
              <div
                style={{
                  display: "flex",
                  marginTop: "50px",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
                className=""
              >
                <div style={{ width: "180px" }} className="">
                  <img
                    className="img-fluid"
                    src="/assets/img/partner/fb.svg"
                    alt=""
                  />
                </div>
                <div style={{ width: "180px" }} className="">
                  <img
                    className="img-fluid"
                    src="/assets/img/partner/insta.svg"
                    alt=""
                  />
                </div>
                <div style={{ width: "180px" }} className="">
                  <img
                    className="img-fluid"
                    src="/assets/img/partner/tiktok.svg"
                    alt=""
                  />
                </div>
                <div style={{ width: "180px" }} className="">
                  <img
                    className="img-fluid"
                    src="/assets/img/partner/yt.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="container mt-4 pt-4">
              <h2 className="">Industry Expertise</h2>
              <div
                style={{ padding: "20px 0px" }}
                className="banner-style-three-area "
              >
                <Swiper
                  className="banner-slide-counter"
                  loop={true}
                  grabCursor={true}
                  mousewheel={true}
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
                  modules={[
                    Pagination,
                    Navigation,
                    Keyboard,
                    Mousewheel,
                    Autoplay,
                  ]}
                >
                  <div className="swiper-wrapper">
                    {BannerV3Data.slice(6).map((banner) => (
                      <SwiperSlide key={banner.id}>
                        <SingleBannerV3 banner={banner} />
                      </SwiperSlide>
                    ))}
                  </div>

                  <div className="banner-slide-button-prev" />
                  <div className="banner-slide-button-next" />
                </Swiper>
              </div>
            </div>
            <div className="mt-50 mt-xs-20">
              <h1>What can you expect? </h1>
              <div style={{ marginTop: "40px", paddingTop: "40px" }}>
                <Swiper
                  modules={[
                    Pagination,
                    Navigation,
                    Keyboard,
                    Mousewheel,
                    Autoplay,
                  ]}
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
              </div>
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
              <div className="w-100 w-lg-50 p-4 ">
                <h2 className="post-title">
                  <Link to={`/blog-single-with-sidebar`}>Why Choose Us? </Link>
                </h2>
                <p>{whyChooseP1}</p>
                <p>{whyChooseP2}</p>
              </div>
            </div>
          </div>
        </div>
        <PriceV2New pricing={pricing} />
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
        </div>
      </div>
    </>
  );
};

export default SocialMediaMarketingContent;
