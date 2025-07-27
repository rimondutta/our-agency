import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/ls1.jpg"
import img2 from "/assets/img/portfolio/ls2.jpg"
import img3 from "/assets/img/portfolio/ls3.jpg"

const LadderSafety = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Market Growth Experts</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Ladder Safety Rails" />
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
                          <h3>Ladder Safety Rails</h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            UI/UX <br /> Search Engine Optimization
                            <br /> Google Ads
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            We worked with Ladder Safety Rails to make their
                            website more user-friendly, improve its search
                            engine ranking, and boost online visibility.
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
                          Ladder Safety Rails has been in the ladder safety
                          business for over 10 years, with a mission to simplify
                          the use of extension ladders in the U.S. Although
                          their website was functional, it lacked the
                          user-friendliness and visibility required to reach a
                          broader audience. With only a keyword density of 251,
                          the brand faced challenges in gaining traction online.
                          Our goal was to make the website more accessible,
                          improve its search rankings, and make it easier for
                          customers to navigate and purchase products.
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
                          The website’s initial user experience was confusing,
                          which led to poor conversion rates. Despite being in
                          business for a decade, the website's keyword density
                          was low at only 251, leading to limited organic
                          traffic and search visibility. We needed to redesign
                          the site to simplify its structure, enhance its
                          usability, and optimize it for better SEO performance.
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
                          We started by completely overhauling the website’s
                          design to create a minimalistic, user-friendly
                          interface, aligned with the brand’s niche. Through
                          strategic SEO optimizations, we increased the
                          website’s keyword density from 251 to 2,000,
                          significantly improving its search engine ranking. The
                          combined efforts of CRO improvements and ongoing SEO
                          work resulted in a remarkable 3.9k traffic increase,
                          bringing in more leads and improving overall
                          engagement.
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

export default LadderSafety;
