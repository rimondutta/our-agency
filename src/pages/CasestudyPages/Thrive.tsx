import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/TWS/1.jpg";
import img2 from "/assets/img/portfolio/TWS/2.jpg";
import img3 from "/assets/img/portfolio/TWS/3.jpg";

const Thrive = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Quirktix</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="ThriveWell Sports" />
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
                          <h3>ThriveWell Sports</h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            Website redesign <br /> user experience (UX)
                            optimization <br />
                            mobile responsiveness <br /> conversion rate
                            optimization (CRO) <br /> and brand identity
                            enhancement.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            The project encompassed a comprehensive website
                            redesign aimed at modernizing the visual aesthetics,
                            enhancing user navigation, ensuring seamless mobile
                            responsiveness, optimizing product pages for higher
                            conversions, and reinforcing a cohesive brand
                            identity throughout the site.
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
                          ThriveWell Sports is dedicated to providing
                          high-quality fitness gear and apparel that empowers
                          individuals on their wellness journey. Despite
                          offering a robust product line catering to various
                          fitness disciplines, their existing website did not
                          effectively convey the brand's energetic spirit and
                          commitment to quality. Recognizing the need for a
                          digital transformation, ThriveWell Sports sought to
                          create an online platform that truly reflected their
                          brand ethos and engaged their target audience more
                          effectively.
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
                          hindered user engagement and sales performance. The
                          design was outdated and lacked the vibrant energy
                          synonymous with the brand, making it less appealing to
                          potential customers. Navigation was unintuitive,
                          causing users to struggle in finding products of
                          interest, which led to increased bounce rates.
                          Additionally, the site was not fully optimized for
                          mobile devices, resulting in a subpar experience for a
                          significant portion of visitors accessing the site via
                          smartphones and tablets.
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
                          To address these challenges, we embarked on a
                          comprehensive website redesign that aligned with the
                          brand’s vision and goals. We developed a modern,
                          visually engaging design that encapsulated the brand's
                          energetic and empowering ethos. The site's navigation
                          was restructured to provide a more intuitive and
                          seamless user journey, enabling customers to
                          effortlessly explore product categories and find items
                          of interest. We ensured full mobile responsiveness,
                          delivering a consistent and optimized experience
                          across all devices. Product pages were enhanced with
                          high-quality imagery, detailed descriptions, and clear
                          calls-to-action to boost conversion rates.
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

export default Thrive;
