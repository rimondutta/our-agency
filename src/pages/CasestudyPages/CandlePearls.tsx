import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/candle-1.jpg";
import img2 from "/assets/img/portfolio/candle-2.jpg";
import img3 from "/assets/img/portfolio/candle-3.jpg";

const CandlePearls = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Market Growth Experts</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Candle Pearls" />
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
                          <h3>CANDLE PEARLS</h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            On-Page SEO
                            <br /> Off-Page SEO <br /> Keyword Research <br />{" "}
                            Content Optimization <br />
                            Backlink Building and Technical SEO
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            Our goal for Candle Pearls was to increase organic
                            visibility and drive online sales through a
                            structured SEO strategy .
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
                          Candle Pearls offers a diverse range of luxury
                          candles. Despite great products, the brand wasn’t
                          reaching enough organic customers. With little
                          visibility on search engines, sales and traffic
                          remained flat. The store needed a full-scale SEO
                          intervention to stand out in a competitive eCommerce
                          landscape and attract the right audience organically.
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
                          The website suffered from inconsistent keyword usage,
                          limited backlinks, and slow technical performance.
                          Search rankings for core products were poor, resulting
                          in only 30 monthly clicks initially. There was also
                          low impression share, minimal domain authority, and a
                          lack of structured content to support search indexing
                          and user engagement.
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
                          We implemented our well-researched SEO strategy
                          starting with keyword-driven content updates and
                          optimized metadata. Technical fixes improved site
                          speed and crawlability. We also built quality
                          backlinks. The result? Clicks rose from 30 to 320+,
                          impressions jumped from <strong> 1.14K to over 17.6K</strong>, and
                          overall visibility surged—proving the SEO foundation
                          drove real results.
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

export default CandlePearls;
