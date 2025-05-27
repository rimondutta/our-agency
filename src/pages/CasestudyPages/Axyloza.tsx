import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/axyloza/1.jpg";
import img2 from "/assets/img/portfolio/axyloza/2.jpg";
import img3 from "/assets/img/portfolio/axyloza/3.jpg";

const Axyloza = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Quirktix</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Axyloza" />
        <div className={`project-details-items default-padding-bottom `}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={img1} alt="Image Not Found" />
                </div>
              </div>
              <div className="col-lg-10 offset-lg-1">
                <div className="project-details-main-info">
                  <div className="project-single-tags">
                    <Link to="#">Marketing</Link>
                  </div>
                  <div className="project-author-details mt-35">
                    <ul>
                      <li>
                        <div className="left-info">
                          <h3>Client</h3>
                        </div>
                        <div className="right-info">
                          <h3>Axyloza</h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            Website Redesign
                            <br />
                            User Experience Optimization
                            <br />
                            Mobile Responsiveness
                            <br />
                            Conversion Rate Optimization.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            Our work focused on updating the visual design,
                            simplifying navigation, making the site fully
                            mobile-friendly, optimizing product pages for better
                            conversion, and strengthening the brand’s consistent
                            look and feel.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <img src={img2} alt="Image Not Found" />
        </div>

        {/* 3rd Section */}
        <div className="project-details-items default-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="item-grid-container">
                  <div className="single-grid">
                    <div className="item-grid-colum">
                      <div className="left-info">
                        <h3>
                          <strong>01</strong> Background
                        </h3>
                      </div>
                      <div className="right-info">
                        <p>
                          Axyloza offers carefully selected products that aim to
                          enhance lifestyle and bring happiness to customers.
                          Although their product range was strong, their
                          existing website did not reflect the quality and
                          values of the brand. The site’s outdated design and
                          poor user experience made it difficult to convert
                          visitors into buyers, which led Axyloza to seek a
                          comprehensive website redesign.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-grid">
                    <div className="item-grid-colum">
                      <div className="left-info">
                        <h3>
                          <strong>02</strong> The Challenges
                        </h3>
                      </div>
                      <div className="right-info">
                        <p>
                          The previous website faced several challenges that
                          limited growth. The design was outdated and failed to
                          represent the modern, stylish nature of Axyloza’s
                          products. Navigation was confusing, making it hard for
                          users to find what they were looking for, resulting in
                          high bounce rates. Moreover, the site lacked mobile
                          responsiveness at a time when many users accessed it
                          from smartphones. In addition, inconsistent branding
                          across pages weakened the company’s identity and
                          trustworthiness.
                        </p>
                        <img src={img3} alt="Image Not Found" />
                      </div>
                    </div>
                  </div>
                  <div className="single-grid">
                    <div className="item-grid-colum">
                      <div className="left-info">
                        <h3>
                          <strong>03</strong> The Solution
                        </h3>
                      </div>
                      <div className="right-info">
                        <p>
                          We approached the redesign with a focus on creating a
                          clean, modern aesthetic that aligned with Axyloza’s
                          brand vision. The navigation was overhauled to provide
                          a smoother, more intuitive browsing experience,
                          allowing customers to easily explore product
                          categories. We built the site to be fully responsive
                          so that it worked flawlessly on all devices,
                          particularly mobiles. Product pages were optimized
                          with clear descriptions and high-quality images to
                          boost conversion rates.
                        </p>
                      </div>
                    </div>
                  </div>
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

export default Axyloza;
