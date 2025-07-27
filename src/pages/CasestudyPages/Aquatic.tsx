import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/av/1.jpg";
import img2 from "/assets/img/portfolio/av/2.jpg";
import img3 from "/assets/img/portfolio/av/3.jpg";

const Aquatic = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Market Growth Experts</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Case Studies"
          breadCrumb="Aquatic Venture"
        />
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
                          <h3>Aquatic Venture</h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            SEO Optimization <br /> Performance Marketing
                            (Google Ads)
                            <br /> Google Search Console Fixes <br /> SEMrush
                            Keyword Strategy
                            <br />
                            Analytics & Reporting (GA4)
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            We partnered with Aquatic Venture to scale their
                            online presence through a strategic mix of SEO and
                            performance marketing. Our goal was to drive
                            qualified traffic, increase user engagement, and fix
                            technical issues affecting visibility.
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
                          Aquatic Venture, a brand specializing in aquatic
                          equipment and supplies, wanted to strengthen its
                          digital footprint. Despite having a functional
                          e-commerce platform, they were facing stagnant traffic
                          and poor keyword visibility. The brand approached us
                          to diagnose the gaps and scale their performance
                          through SEO and paid ads. They also needed help
                          addressing technical issues in Google Search Console
                          and lacked clarity in keyword strategy
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
                          The website had major technical SEO issues, poor
                          search engine visibility, and underperforming ad
                          campaigns. Google Search Console showed indexing
                          problems and critical crawl errors. There was also a
                          lack of keyword intent mapping, which limited content
                          performance. The ad campaigns were not optimized,
                          resulting in low conversions and wasted budget.
                          Additionally, there was no proper engagement tracking
                          or user journey data through GA4, making it difficult
                          to assess performance.
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
                          We began by fixing all major SEO and indexing issues
                          using insights from Google Search Console and SEMrush.
                          We also optimized on-page SEO elements, improved
                          internal linking, and implemented a high-intent
                          keyword strategy. To drive traffic, we launched
                          targeted Google Search and Shopping ads with clear ROI
                          tracking. We also set up GA4 for engagement analytics,
                          enabling us to fine-tune campaigns. As a result,
                          Aquatic Venture saw a 43% increase in users, a 305%
                          jump in clicks, and a 296% growth in impressions. The
                          engagement rate improved to 47.39%, and keyword
                          rankings rose across key product categories.
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

export default Aquatic;
