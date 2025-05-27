import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Helmet } from "react-helmet-async";
import banner6 from "/assets/img/services/m2.jpg";
import { Link } from "react-router-dom";
import LayoutV1 from "../../components/layouts/LayoutV1";
import DarkClass from "../../components/classes/DarkClass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, FreeMode } from "swiper/modules";
import MostPopularServices from "../../components/services/MostPopularServices";
import TestimonialMarketing from "../../components/testimonial/TestimonialMarketing";
const Marketing = () => {
  const features = [
    {
      icon: "/assets/img/about/audienc.svg", // Bootstrap Icon class
      title: "Reach the Right Audience",
      description:
        "Targeting the right people at the right time makes all the difference. Smart marketing drives relevant traffic, boosting engagement and conversions.",
    },
    {
      icon: "/assets/img/about/lvels.svg",
      title: "Connect on a Deeper Level",
      description:
        "Personalization is key. Marketing today isn’t just about selling — it’s about building meaningful relationships with your customers.",
    },
    {
      icon: "/assets/img/about/ai in marketing.svg",
      title: "AI in Marketing ",
      description:
        "AI helps analyze data, predict behaviors, and optimize campaigns, giving you a competitive edge in a fast-paced digital world.",
    },
    {
      icon: "/assets/img/about/adapt.svg",
      title: "Adapt to Change",
      description:
        "Marketing is constantly evolving. We keep your brand agile, adapting to the latest trends and tools to ensure sustained growth.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Digital Marketing Company & Website Development Services | Quirktix</title>
        <meta name="description" content="Quirktix is a top marketing company offering digital marketing management services. We use the best AI models for business with leading digital marketing platforms."></meta>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Marketing"
          breadCrumb="Marketing"
          LightMode={false}
        />
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={banner6} alt="Thumb" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-50 mt-xs-20">
            <h1>The Future of Growth is Marketing </h1>
            <div className="row g-4 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-3">
                  <div className="text-white  p-4 text-center h-100 rounded-4 shadow-sm border border-secondary">
                    <img src={feature.icon} style={{ width: "60px" }} alt="" />
                    <h5 className="fw-bold mt-4">{feature.title}</h5>
                    <p className="mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "100px" }} className="row">
            <div className="col-xl-12">
              <div className="service-single-thumb">
                <img src="/assets/img/banner/marketing 1.png" alt="Thumb" />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2>Marketing Starts with the Right Answers</h2>
            <p>
              Do you know the one thing that helps a business grow? It's
              understanding your audience — what they want, need, fear, and
              desire. With the right answers, you create better marketing, reach
              the right people, and grow. So, what are the questions you need to
              ask to succeed?
            </p>
            {/* <ul className="" style={{ paddingLeft: "15px" }} id="marketing">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni saepe, dolores voluptatem numquam rerum doloribus tempore
                nam cumque quia.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni saepe, dolores voluptatem numquam rerum doloribus tempore
                nam cumque quia.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni saepe, dolores voluptatem numquam rerum doloribus tempore
                nam cumque quia.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni saepe, dolores voluptatem numquam rerum doloribus tempore
                nam cumque quia.
              </li>
            </ul> */}
            <div style={{ marginTop: "40px" }} className="process-style-two">
              <div className="process-style-two-item">
                <span>01</span>
                <h4>Who are you selling to?</h4>
                <p>
                  Define your ideal customer — their behavior, goals, and pain
                  points — so every message speaks directly to them.
                </p>
              </div>
              <div className="process-style-two-item">
                <span>02</span>
                <h4>What problem are you solving?</h4>
                <p>
                  People buy solutions, not products. Understand what keeps your
                  audience up at night and show how you solve it.
                </p>
              </div>
              <div className="process-style-two-item">
                <span>03</span>
                <h4>What makes them trust you?</h4>
                <p>
                  Trust builds brands. From social proof to clear messaging, the
                  right answers help build credibility and confidence..
                </p>
              </div>
              <div className="process-style-two-item">
                <span>04</span>
                <h4>How can AI help you understand more?</h4>
                <p>
                  AI uncovers deep insights by analyzing customer data, spotting
                  patterns, and predicting what drives engagement and action.
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2>What We Bring to the Table ?</h2>

            <div
              style={{ marginTop: "50px" }}
              className={`portfolio-style-four-area `}
            >
              <div className="container no-gap">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="project-style-four-items">
                      <Swiper
                        className="project-center-stage-carousel"
                        loop={true}
                        freeMode={true}
                        grabCursor={true}
                        slidesPerView={1}
                        centeredSlides={true}
                        spaceBetween={30}
                        autoplay={false}
                        navigation={{
                          nextEl: ".project-center-button-next",
                          prevEl: ".project-center-button-prev",
                        }}
                        breakpoints={{
                          991: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            centeredSlides: false,
                          },
                          1200: {
                            slidesPerView: 2.5,
                            spaceBetween: 60,
                          },
                          1800: {
                            slidesPerView: 2.8,
                            spaceBetween: 80,
                          },
                        }}
                        modules={[Navigation, FreeMode, Keyboard]}
                      >
                        <div className="swiper-wrapper">
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/services/marketing/local seo-100.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Marketing"</span>
                                  <Link to={`/local-seo`}>
                                    <h2>Local Seo</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/local-seo`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/services/marketing/ecommerce seo-100.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Marketing"</span>
                                  <Link to={`/ecommerce-seo`}>
                                    <h2>Ecommerce Seo</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/ecommerce-seo`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/services/marketing/performance marketing-100.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Marketing"</span>
                                  <Link to={`/performance-marketing`}>
                                    <h2>Performance Marketing</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/performance-marketing`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/services/marketing/social media marketing-100.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Marketing"</span>
                                  <Link to={`/social-media-marketing`}>
                                    <h2>Social Media Marketing</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/social-media-marketing`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/services/marketing/influencer marketing-100.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Marketing"</span>
                                  <Link to={`/influencer-marketing`}>
                                    <h2>Influencer Marketing</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/influencer-marketing`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            {/* <SinglePortfolioV4 portfolio={portfolio} /> */}
                            <div className="portfolio-style-four">
                              <div className="thumb">
                                <img
                                  src={`/assets/img/services/marketing/ecommerce marketing-100.jpg`}
                                  alt="Image Not Found"
                                  width={700}
                                  height={600}
                                />
                                <div className="content">
                                  <span>"Marketing"</span>
                                  <Link to={`/ecommerce-marketing`}>
                                    <h2>Ecommerce Marketing</h2>
                                  </Link>
                                  <Link
                                    className="btn-animation"
                                    to={`/ecommerce-marketing`}
                                  >
                                    <i className="fas fa-arrow-right" />{" "}
                                    <span>See Details</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </div>
                      </Swiper>
                      {/* Navigation */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "200px",
                        }}
                        className="project-four-nav"
                      >
                        <div className="nav-items">
                          <div className="project-center-button-prev" />
                          <div className="project-center-button-next" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "60px" }}>
            <h2>Behind the Numbers: Our Work in Action</h2>
            <div className="container">
              <div className="row align-center">
                <div className="col-lg-5">
                  <div className="thumb-style-one">
                    <img
                      src="/assets/img/services/dtfnc.jpg"
                      alt="Image Not Found"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="choose-us-style-one">
                    <div className="pl-80 pl-md-0 pl-xs-0">
                      <h2>DTFNC</h2>
                      <div>
                        DTFNC, a leading provider of custom Direct-to-Film (DTF)
                        transfers, partnered with us to strengthen their online
                        presence and attract a broader customer base. Our
                        collaboration focused on comprehensive SEO strategies,
                        including keyword optimization, content enhancement, and
                        technical improvements. By aligning their website
                        content with relevant search queries and ensuring a
                        seamless user experience, we aimed to improve their
                        search engine rankings and drive organic traffic.
                        <div className="mt-4">
                          As a result of our targeted SEO efforts, DTFNC
                          experienced a significant increase in organic search
                          visibility. The website saw improved rankings for key
                          industry-related keywords, leading to higher traffic
                          and increased customer engagement. This growth not
                          only expanded their reach within the custom apparel
                          market but also contributed to a notable rise in
                          online orders, solidifying DTFNC's position as a
                          trusted name in the DTF transfer industry.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TestimonialMarketing />
          <MostPopularServices />
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Marketing;
