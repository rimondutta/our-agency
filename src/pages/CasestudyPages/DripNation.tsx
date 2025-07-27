import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/dn1.jpg"
import img2 from "/assets/img/portfolio/dn2.jpg"
import img3 from "/assets/img/portfolio/dn3.jpg"

const Dripnation = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Market Growth Experts</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Drip Nation" />
        <div className={`project-details-items default-padding-bottom `}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img
                    src={img1}
                    alt="Image Not Found"
                  />
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
                          <h3>Drip Nation IL</h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            Search Engine Optimization (SEO)
                            <br />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            Our focus was on improving Drip Nation IL’s website
                            for better traffic, engagement, and impressions.
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
                          Drip Nation IL is a fashion and clothing brand
                          specializing in trendy apparel. They faced challenges
                          with the seasonal nature of their product line, making
                          it difficult to maintain consistent SEO rankings. With
                          a goal of improving organic traffic and engagement,
                          they sought assistance to optimize their website and
                          ensure their seasonal offerings gained visibility
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
                          The major challenge was the seasonal nature of their
                          product line, which required frequent updates to
                          maintain relevance and SEO rankings. Without constant
                          updates to product pages, the website’s traffic and
                          impressions were affected. The business also struggled
                          to keep up with ever-changing consumer interests and
                          the competitive nature of the fashion industry.
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
                          We optimized the collection pages and enhanced alt
                          text to improve search engine visibility. Our focus on
                          maintaining relevance and SEO best practices,
                          including frequent updates to product pages, led to
                          significant improvements in website traffic and
                          impressions. With consistent monitoring and
                          optimization, we saw a 10x increase in clicks and a
                          sixfold growth in impressions, significantly boosting
                          their online presence.
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

export default Dripnation;
