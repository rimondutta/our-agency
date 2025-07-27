import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/CT/1.jpg";
import img2 from "/assets/img/portfolio/CT/2.jpg";
import img3 from "/assets/img/portfolio/CT/3.jpg";

const Chameleon = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Market Growth Experts</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Chameleon Transfer" />
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
                          <h3>Chameleon Transfer</h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            SEO <br /> Content Marketing <br /> Analytics
                            Tracking <br /> Google Search Console Optimization{" "}
                            <br />
                            Performance Reporting
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            Chameleon Transfer aimed to scale organic traffic,
                            user engagement, and event-driven conversions
                            through consistent content and SEO improvements
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
                          Chameleon Transfer offers heat transfer printing
                          solutions, targeting both professional printers and
                          apparel startups. Despite a functional website, the
                          brand lacked sustained traffic growth and organic
                          content visibility. The company sought assistance to
                          drive users from search engines, boost session
                          engagement, and improve their keyword footprint to
                          generate qualified leads and visibility in a niche
                          market
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
                          The website had low click-through rates (CTR),
                          underutilized search visibility, and limited blog
                          traffic. Key metrics like engagement time and event
                          conversions were inconsistent. The average position
                          across search queries was 46.6, far from
                          top-performing rankings. Additionally, there was
                          minimal event tracking and a lack of optimization
                          across social and referral channels, reducing the
                          potential conversion funnel.
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
                          We rolled out a targeted blog strategy backed by
                          keyword research and analytics tracking. Each blog
                          focused on answering niche-specific queries like “What
                          does DTF mean in printing?” and “Types of t-shirt
                          printing methods,” generating thousands of
                          impressions. SEO improvements pushed organic clicks to
                          514 and impressions to 108K. Events per session
                          reached 7.02, with over 44K total event triggers,
                          reflecting better user interaction and higher intent
                          behavior.
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

export default Chameleon;
