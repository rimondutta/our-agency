// @ts-nocheck
import { Helmet } from "react-helmet-async";
import AboutV6 from "../../components/about/AboutV6";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import TeamV3 from "../../components/team/TeamV3";

// import { Link } from "react-router-dom";
import { useState } from "react";
import WhyChooseV3 from '../../components/whyChoose/WhyChooseV3';
import MostPopularServices from '../../components/services/MostPopularServices';
import Countries from '../../components/clients/countries';
// import SocialShareNew from '../../components/social/SocialShareNew';

const AboutUsPage2 = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Textile Printing");
  const industryData: Record<
    string,
    {
      activeUsers: string;
      sessions: string;
      eventCount: string;
      clicks: string;
      impressions: string;
    }
  > = {
    "Textile Printing": {
      activeUsers: "205%",
      sessions: "159%",
      eventCount: "1.8 M",
      clicks: "53.7 K",
      impressions: "2.85 M",
    },
    "Food & Beverage": {
      activeUsers: "187%",
      sessions: "142%",
      eventCount: "2.3 M",
      clicks: "48.2 K",
      impressions: "3.12 M",
    },
    "Health & Safety": {
      activeUsers: "231%",
      sessions: "178%",
      eventCount: "1.5 M",
      clicks: "62.4 K",
      impressions: "2.41 M",
    },
    Clothing: {
      activeUsers: "193%",
      sessions: "151%",
      eventCount: "2.1 M",
      clicks: "57.8 K",
      impressions: "3.05 M",
    },
    Technologies: {
      activeUsers: "247%",
      sessions: "183%",
      eventCount: "2.7 M",
      clicks: "71.3 K",
      impressions: "4.22 M",
    },
    // ...
  };
  const currentStats = industryData[selectedIndustry];
  return (
    <>
      <Helmet>
        <title> About | Market Growth Experts</title>
        <meta title="About Market Growth Experts | Transforming Startups into Brands" content="Market Growth Experts is a passionate team of designers, strategists, and experts committed to helping startups become recognized brands for their business solutions."></meta>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="About Us" breadCrumb="About" />
        <div className="py-5 bg-gray">
          <div className="container">
            <div className="row align-center">
              <div className="col-lg-5">
                <div className="thumb-style-one">
                  <img src="/assets/img/about/who-we-are.png" alt="Image Not Found" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="choose-us-style-one">
                  <div className="pl-80 pl-md-0 pl-xs-0">
                    <h3 className="sub-title">Who We Are?</h3>
                    <p
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      With over 3+ years of industry experience and a proven
                      track record of working with 300+ clients, we have become
                      a trusted partner in turning visions into powerful brands.
                    </p>
                    <p>
                      If there were two words to describe us, it would be
                      “Pushing boundaries”. Not bound by traditional thinking or
                      restricted to conventional approaches, as a digital agency
                      we are innovators, creatives, and problem solvers
                      determined to forge our own path forward. Our relentless
                      pursuit of excellence has led us to create leading-edge
                      solutions that yield real results for our clients.
                    </p>
                    <p>
                      With an emphasis on innovation and creativity, We are
                      always looking for new ways to improve ourselves,
                      re-organize and grow anew in the arena of digital media.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <h2>Our Vision</h2>
          <div className="mt-4">
            Our vision is simple–to transform your Startup into a BRAND. At
            Market Growth Experts, we understand the struggle of building a
            brand from the ground up. Like many of our clients, our journey
            began as a dream fueled by passion, creativity, and determination.
            Through relentless hard work and innovative thinking, that dream
            evolved into a successful agency.{" "}
          </div>
        </div>
        <AboutV6 sectionClass="bg-gray" />
        <TeamV3 hasTitle={true} />
        <div
          style={{ marginTop: "60px", paddingBottom: "30px" }}
          className="container"
        >
          <div className="container-fluid p-0">
            <div className="row g-0" style={{ minHeight: "70vh" }}>
              {/* Left Column - Industries */}
              <div className="col-12 col-md-6 bg-dark h-100 d-flex flex-column">
                <div className="px-4 py-3 flex-grow-1">
                  <h2 className="fs-2 fw-bold mb-1">Industries</h2>
                  <p className="mb-3 fs-3">
                    Our expertise knows no industry boundaries.
                  </p>

                  <div className="d-flex flex-column gap-3">
                    {Object.keys(industryData).map((industry) => (
                      <div
                        key={industry}
                        className="d-flex justify-content-between align-items-center pb-2 cursor-pointer"
                        style={{
                          borderBottom: `1px solid ${selectedIndustry === industry
                            ? "#C9F31D"
                            : "#D9D9D9"
                            }`,
                          color:
                            selectedIndustry === industry ? "white" : "#D9D9D9",
                          cursor: "pointer",
                        }}
                        onClick={() => setSelectedIndustry(industry)}
                      >
                        <span className="fs-4">{industry}</span>
                        {/* <button
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      border: `1px solid ${selectedIndustry === industry ? "#C9F31D" : "#D9D9D9"}`,
                      color: selectedIndustry === industry ? "#C9F31D" : "#D9D9D9",
                      background: "transparent",
                    }}
                  >
                    <img src="./Arrow 2.svg" alt="" />
                  </button> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Stats */}
              <div className="col-12 col-md-6  d-flex flex-column">
                {/* Active Users */}
                <div
                  className="d-flex flex-column justify-content-end align-items-end text-end p-2 flex-grow-1"
                  style={{ backgroundColor: "#C9F31D", height: "25%" }}
                >
                  <p style={{ color: "black" }} className="fs-4 mb-0">
                    Active Users
                  </p>
                  <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                    {currentStats.activeUsers}
                  </p>
                </div>

                {/* Sessions and Event Count */}
                <div className="d-flex flex-grow-1" style={{ height: "25%" }}>
                  <div
                    className="d-flex flex-column justify-content-end align-items-end p-2 text-end w-50"
                    style={{ backgroundColor: "white" }}
                  >
                    <p style={{ color: "black" }} className="fs-4 mb-0">
                      Sessions
                    </p>
                    <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                      {currentStats.sessions}
                    </p>
                  </div>
                  <div className="d-flex flex-column justify-content-end align-items-end p-2 text-end w-50 bg-dark">
                    <p style={{ color: "#C9F31D" }} className="fs-4 mb-0">
                      Event Count
                    </p>
                    <p
                      className="fs-3 fw-bold mb-0"
                      style={{ color: "#C9F31D" }}
                    >
                      {currentStats.eventCount}
                    </p>
                  </div>
                </div>

                {/* Clicks */}
                <div
                  className="d-flex flex-column justify-content-end align-items-end text-end p-2 flex-grow-1"
                  style={{ backgroundColor: "#C9F31D", height: "25%" }}
                >
                  <p style={{ color: "black" }} className="fs-4 mb-0">
                    Clicks
                  </p>
                  <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                    {currentStats.clicks}
                  </p>
                </div>

                {/* Impressions */}
                <div
                  className="d-flex flex-column justify-content-end align-items-end text-end p-2 flex-grow-1"
                  style={{ backgroundColor: "white", height: "25%" }}
                >
                  <p style={{ color: "black" }} className="fs-4 mb-0">
                    Impressions
                  </p>
                  <p style={{ color: "black" }} className="fs-3 fw-bold mb-0">
                    {currentStats.impressions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WhyChooseV3 />

        <div className="container">

          <Countries />

          <MostPopularServices />
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default AboutUsPage2;
