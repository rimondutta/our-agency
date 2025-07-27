import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/ec1.jpg"
import img2 from "/assets/img/portfolio/ec2.jpg"
import img3 from "/assets/img/portfolio/ec3.jpg"

const EyeCandy = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Market Growth Expets</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Eye Candy Brow Salon" />
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
                          <h3>Eye Candy Brow Salon</h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            Website Redevelopmen <br /> Search Engine
                            Optimization
                            <br /> Ads Management{" "}
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            We partnered with Eye Candy Brow Salon to refresh
                            their digital presence, drive more traffic, and
                            increase engagement across their six U.S. branches.
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
                          Eye Candy Brow Salon is a beauty salon with 14+ years
                          of experience and six locations across the U.S. While
                          they had a website, its performance was lacking in
                          terms of engagement and conversions. Their team
                          approached us to improve their online visibility and
                          deliver a smoother experience to their users. Our
                          approach focused on rebuilding their website from the
                          ground up to mirror the empowering, safe, and caring
                          environment they’ve nurtured in their physical spaces.
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
                          The website had low engagement metrics despite the
                          brand’s offline credibility and presence. Their online
                          clicks were stagnant at around 1.14k, and users were
                          not converting. The design didn’t resonate with their
                          target audience emotionally or visually. Our challenge
                          was to restructure the website to reflect the brand's
                          spirit while simultaneously optimizing for search
                          performance and increasing overall traffic.
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
                          We redesigned the entire website with a brand-first
                          approach—placing women empowerment and care at the
                          center. By aligning the UI/UX with the emotional tone
                          of the brand, we created a visually soothing and
                          welcoming experience. We worked on technical SEO
                          improvements and launched a targeted Google Ads
                          campaign. Over six months, user engagement improved
                          dramatically, with a 50% increase in active users and
                          total clicks rising to 2.27k
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

export default EyeCandy;
