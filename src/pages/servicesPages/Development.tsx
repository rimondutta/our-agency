import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Helmet } from "react-helmet-async";
import banner6 from "/assets/img/services/dev.jpg";
import { Link } from "react-router-dom";
import LayoutV1 from "../../components/layouts/LayoutV1";
import DarkClass from "../../components/classes/DarkClass";
import MostPopularServices from "../../components/services/MostPopularServices";
import TestimonialDevelopment from "../../components/testimonial/TestimonialDevelopment";
// import Blog2ColumnContent from "../../components/blog/Blog2ColumnContent";
// import PortfolioV3 from "../../components/portfolio/PortfolioV3";

const Development = () => {
  const features = [
    {
      icon: "/assets/img/services/development/startup friendly.svg", // Bootstrap Icon class
      title: "Startup-Friendly Builds",
      description:
        "Fast, lean websites designed to get you online and growing.",
    },
    {
      icon: "/assets/img/services/development/growth.svg",
      title: "Growth-Ready Upgrades",
      description:
        "Scalable systems that support higher traffic and more features.",
    },
    {
      icon: "/assets/img/services/development/solution.svg",
      title: "Enterprise-Level Solutions",
      description:
        "Advanced tools and integrations to manage complex business needs.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Custom Web & Ecommerce Development Services | AI & Web Development</title>
        <meta name="description" content="Market Growth Experts offers expert development services including AI development, custom web development and ecommerce website development to enhance your online presence."></meta>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Development"
          breadCrumb="Development"
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
            <h1 style={{ marginBottom: "50px" }}>
              Customized Development for Every Stage of Growth{" "}
            </h1>
            <div className="container py-5">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {features.map((feature, index) => (
                  <div key={index} className="col">
                    <div className="text-white bg-dark p-4 text-center h-100 rounded-4 shadow-sm border border-secondary">
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
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2>Core Pillars of Our Development Solutions</h2>

            <div style={{ marginTop: "50px", width: "100%" }}>
              {[
                {
                  id: 1,
                  title: "Scalable & Modular Codebase",
                  img: "/assets/img/services/development/modular.png",
                  p: "We build solutions with a modular structure that allows for easy updates and expansion. This means you can add features, handle higher traffic, or pivot your platform without rebuilding from scratch. It keeps your development agile and future-proof, no matter how fast your business grows.",
                },
                {
                  id: 2,
                  title: "User-First Experience Design",
                  img: "/assets/img/services/development/user experience.png",
                  p: "Every development decision is made with your users in mind. We prioritize speed, simplicity, and intuitive navigation—ensuring that your website or app isn’t just functional but enjoyable to use. This leads to higher engagement, better retention, and ultimately, more conversions.",
                },
                {
                  id: 3,
                  title: "Business-Aligned Development Strategy",
                  img: "/assets/img/services/development/strategy.png",
                  p: "We don’t just code—we understand your business goals first. Our solutions are designed to align with your revenue model, operations, and audience needs. Whether you're in eCommerce, SaaS, or services, we tailor development to support your unique journey and growth targets.",
                },
                {
                  id: 4,
                  title: "Built-In Performance & Security",
                  img: "/assets/img/services/development/built in security.png",
                  p: "Speed and safety aren’t optional—they’re essential. We optimize every layer of your platform for fast loading, smooth functionality, and strong data protection. From code quality to server configuration, our team ensures your digital product performs reliably and remains secure at all times.",
                },
              ].map((item, index) => (
                <div
                  key={item.id}
                  className={`w-100 d-flex flex-column flex-lg-row ${
                    index % 2 !== 0 ? "flex-lg-row-reverse" : ""
                  }  mb-5`}
                >
                  {/* Image */}
                  <div className="w-100 w-lg-50 text-center p-2">
                    <img
                      src={item.img}
                      alt="Blog"
                      className="img-fluid"
                      style={{
                        maxWidth: "500px",
                        height: "550px",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} className="w-100 w-lg-50 p-4 text-center">
                    <h2 className="post-title">
                      <Link to={`#`}>{item.title}</Link>
                    </h2>
                    <p>{item?.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2>Explore Our Services</h2>
            <div className="container">
              <div className={`portfolio-style-three-area`}>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/services/development/shopify.png`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      className="col-lg-5"
                    >
                      <h2 className="ptext">
                        <Link to={`/shopify-development/`}>
                          <strong> Shopify</strong>
                        </Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/shopify-development/`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/services/development/woocommerce.png`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      className="col-lg-5"
                    >
                      <h2 className="ptext">
                        <Link to={`/woocommerce-development`}>
                          WooCommerce <strong> Development</strong>
                        </Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/woocommerce-development`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/services/development/AI.png`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      className="col-lg-5"
                    >
                      <h2 className="ptext">
                        <Link to={`/artificial-intelligence`}>
                          Artificial <strong>Intelligence</strong>
                        </Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/artificial-intelligence`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/services/development/web dev.png`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      className="col-lg-5"
                    >
                      <h2 className="ptext">
                        <Link to={`/web-application-development`}>
                          Web <strong>Applications</strong>
                        </Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/web-application-development`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/services/development/mobile app.png`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      className="col-lg-5"
                    >
                      <h2 className="ptext">
                        <Link to={`/mobile-application-development`}>
                          Mobile <strong>Application</strong>
                        </Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/mobile-application-development`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-style-three-item">
                  <div className="row align-center">
                    <div className="col-lg-7">
                      <img
                        src={`/assets/img/services/development/wordpress.png`}
                        alt="Image Not Found"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      className="col-lg-5"
                    >
                      <h2 className="ptext">
                        <Link to={`/wordpress-development`}>Wordpress</Link>
                      </h2>
                      <Link
                        className="btn-animation mt-10"
                        to={`/wordpress-development`}
                      >
                        <i className="fas fa-arrow-right" />
                        <span>See Details</span>
                      </Link>
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
                    <img src="/assets/img/services/aq.jpg" alt="Image Not Found" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="choose-us-style-one">
                    <div className="pl-80 pl-md-0 pl-xs-0">
                      <h2>Aquatic Venture</h2>
                      <div>
                        We partnered with <span style={{fontWeight:"bold"}}>Aquatic Venture</span> to build a clean,
                        easy-to-navigate website that brings their love for
                        water adventures online. The platform showcases a wide
                        range of inflatable kayaks, paddleboards, boats, and
                        accessories. Our goal was to create a smooth shopping
                        experience where customers can quickly find what they
                        need and feel confident making a purchase.
                      </div>
                      <div className="mt-4">
                        After launching the new website, Aquatic Venture saw
                        better engagement and a more seamless user journey
                        across all devices. With clear categories, detailed
                        product pages, and faster load times, the platform is
                        now better equipped to serve both first-time buyers and
                        experienced outdoor lovers. The new design helps build
                        trust and supports Aquatic Venture’s mission to provide
                        top-quality gear for unforgettable moments on the water.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TestimonialDevelopment/>
          <MostPopularServices />
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Development;
