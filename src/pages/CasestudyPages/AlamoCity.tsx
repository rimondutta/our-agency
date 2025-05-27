import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img1 from "/assets/img/portfolio/ac1.jpg"
import img2 from "/assets/img/portfolio/ac2.jpg"
import img3 from "/assets/img/portfolio/ac3.jpg"

const Alamocity = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Quirktix </title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Case Studies"
          breadCrumb="Alamo City Popcorn Company"
        />
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
                          <h3>Alamo City Popcorn Company</h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            Search Engine Optimization <br /> Content
                            Optimization <br /> Google Ads{" "}
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            We focused on enhancing Alamo City Popcorn’s online
                            visibility, boosting organic traffic, and improving
                            the website’s ranking on SERPs to increase online
                            sales.
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
                          Alamo City Popcorn is a family-owned gourmet popcorn
                          business based in San Antonio, Texas, offering a wide
                          range of popcorn flavors and products. Despite its
                          local success, it faced challenges in reaching a wider
                          online audience and increasing its visibility on
                          search engine result pages. Initially, the website had
                          only 34 keywords ranking on page 1.
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
                          The main challenge for Alamo City Popcorn was limited
                          keyword visibility on search engines. With only 34
                          keywords ranking on page 1, the website lacked organic
                          traffic, and its online sales were not reaching their
                          full potential. Additionally, the site needed a better
                          SEO strategy to improve its SERP ranking and attract a
                          broader customer base.
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
                          We optimized the website’s content and conducted
                          thorough SEO improvements to enhance keyword rankings.
                          By focusing on long-tail and highly relevant keywords,
                          we increased the number of keywords ranking on page 1
                          from 34 to 484. Our efforts also included monitoring
                          total clicks, impressions, CTR, and average position.
                          As a result, Alamo City Popcorn saw significant
                          improvements in online visibility and engagement,
                          leading to a growth in organic traffic and sales.
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

export default Alamocity;
