import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/btb1.jpg";
import img2 from "/assets/img/portfolio/btb2.jpg";
import img3 from "/assets/img/portfolio/btb3.jpg";

const BrewTheBlend = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Quirktix</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Brew The Blend " />
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
                          <h3> Brew the Blend </h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            SEO Strategy
                            <br /> Content Marketing <br /> Google Analytics
                            Insights
                            <br /> Technical Optimization <br />
                            Blog Posting
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            A digital growth strategy was implemented to boost
                            organic reach and search performance.
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
                          The client approached us to elevate their online
                          performance, enhance brand visibility, and attract
                          more organic users. Their website lacked updated
                          content, and SEO efforts had plateaued. Our goal was
                          to create a consistent growth path by implementing a
                          content-led SEO strategy supported by data analytics,
                          blog publishing, and website performance improvements.
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
                          The brand struggled with low search rankings, outdated
                          website structure, and limited content targeting.
                          Engagement was low, and conversions were inconsistent.
                          Despite a quality product lineup, the digital strategy
                          wasn’t converting traffic into loyal users. The lack
                          of clarity in analytics reporting and weak keyword
                          ranking also made it hard to scale or adjust
                          effectively.
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
                          We rolled out a complete SEO audit followed by a
                          data-backed roadmap. Keyword-optimized content was
                          published consistently, while technical enhancements
                          were made to the website. We tracked growth with tools
                          like Google Analytics and Search Console. The result:
                          a <strong>189.4%</strong> increase in active users, <strong>144.6%</strong> boost in
                          page views, and <strong>148% </strong> surge in event
                          interactions—setting the stage for a website redesign.
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

export default BrewTheBlend;
