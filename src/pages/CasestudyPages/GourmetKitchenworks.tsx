import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


import img1 from "/assets/img/portfolio/gk1.jpg"
import img2 from "/assets/img/portfolio/gk2.jpg"
import img3 from "/assets/img/portfolio/gk3.jpg"


const GourmetKitchen = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Quirktix</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb="Gourmet Kitchen Works" />
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
                          <h3>Gourmet Kitchenworks</h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            UI/UX <br /> Technical Optimization <br /> Google
                            Ads{" "}
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>
                            We helped Gourmet Kitchenworks expand their digital
                            footprint and improve conversion outcomes
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
                          Gourmet Kitchenworks is the exclusive U.S. distributor
                          for five premium European kitchenware brands.
                          Initially operating at a modest scale, the brand aimed
                          to scale its reach across the country through a
                          stronger online presence. In May 2024, they partnered
                          with us to enhance their website experience and drive
                          traffic through strategic marketing efforts. Despite
                          the initial launch, they faced a dry spell with no
                          sales in the first two months, leading us to revisit
                          our approach and dig deeper into technical and
                          consumer behavior insights.
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
                          Although the redesigned website launched successfully,
                          the first two months showed zero sales. The bounce
                          rate was high, and users seemed lost navigating the
                          catalog. Pricing inconsistencies and lack of product
                          segmentation further created confusion. Despite active
                          ad campaigns, conversions remained stagnant. The core
                          challenge was creating an intuitive shopping
                          experience that reflected the premium quality of the
                          products while also addressing pricing and
                          categorization issues.
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
                          We revisited the customer journey and redesigned the
                          product structure with clear categorization, creating
                          easier paths to purchase. A detailed price analysis
                          helped align offerings with customer expectations. We
                          optimized the UI further for mobile responsiveness and
                          clarity. Our Google Ads strategy was refined to better
                          target high-intent keywords. These changes enhanced
                          discoverability, improved time-on-site, and drove
                          meaningful conversions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {data && <ProjectDetailsContent projectInfo={data} totalProjects={PortfolioV4Data.length} />} */}
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default GourmetKitchen;
