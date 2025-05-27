import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Helmet } from "react-helmet-async";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";

const NewCareers = () => {
  const features = [
    {
      icon: "/assets/img/icon/23.png", // Bootstrap Icon class
      title: "GET CERTIFIED",
      description:
        "Our curriculum is built on suggestions from over 450 corporates across Asia, Get certified to add an edge to your CV.",
    },
    {
      icon: "/assets/img/icon/23.png",
      title: "AWARD-WINNING LMS",
      description:
        "Learn through 24*7 interactive LMS with PPTs, Videos, Assignments, Case Studies & Quizzes along with a progress tracker.",
    },
    {
      icon: "/assets/img/icon/23.png",
      title: "MOST IN-DEPTH PROGRAM",
      description:
        "50+ Modules, 321+ learning hours, followed by 2 online certification tests. A training program that sets a benchmark.",
    },
  ];

  const programs = [
    {
      bg_image: "/assets/img/icon/ml.jpg", // Bootstrap Icon class,
      category: "Data Science",
      title: "DATA SCIENCE,AI AND ML",
      description:
        "Our curriculum is built on suggestions from over 450 corporates across Asia, Get certified to add an edge to your CV.",
    },
    {
      bg_image: "/assets/img/icon/ml.jpg",
      title: "Annual DigiHero Program",
      category: "Annual Program",
      description:
        "Learn through 24*7 interactive LMS with PPTs, Videos, Assignments, Case Studies & Quizzes along with a progress tracker.",
    },
    {
      bg_image: "/assets/img/icon/ml.jpg",
      title: "Online Marketing Professional",
      category: "Digital Marketing",
      description:
        "50+ Modules, 321+ learning hours, followed by 2 online certification tests. A training program that sets a benchmark.",
    },
    {
      bg_image: "/assets/img/icon/ml.jpg",
      title: "Online Marketing Practitioner",
      category: "Digital Marketing",
      description:
        "50+ Modules, 321+ learning hours, followed by 2 online certification tests. A training program that sets a benchmark.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Careers | Quirktix</title>
      </Helmet>

      <LayoutV1Light>
        <Breadcrumb LightMode={true} title="Careers" breadCrumb="Careers" />
        <div className="container">
          <div style={{ marginTop: "40px" }}>
            <h1 className="text-center">Why Choose Quirktix?</h1>
            <div
              style={{ width: "60%", margin: "auto", fontSize: "20px" }}
              className="text-center"
            >
              Quirktix is awarded as the “Most Trusted Brand in Digital
              Education” by WCRC (Leading Marketing Research Firm and Magazine).
            </div>
            <div
              style={{ width: "95%", margin: "auto" }}
              className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="col">
                  <div
                    style={{ height: "300px" }}
                    className="text-white pt-4 px-4  rounded-4 shadow-sm border border-secondary"
                  >
                    <img
                      src={feature.icon}
                      style={{ width: "60px", color: "black" }}
                      alt=""
                    />
                    <h5 className="fw-bold mt-4">{feature.title}</h5>
                    <p className="mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="container py-1">
             
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12">
                    <div
                      className="position-relative"
                      style={{ backgroundColor: "#222", minHeight: "500px" }}
                    >
            
                      <div className="container">
                        <div className="row py-5">
                          <div className="col-lg-6 d-flex flex-column justify-content-center">
                          
                            <div className="mb-3">
                              <span
                                className="badge rounded-pill px-3 py-2"
                                style={{
                                  backgroundColor: "#FF6B35",
                                  color: "white",
                                  fontSize: "1rem",
                                }}
                              >
                                Theory, Live Practical & Implementation
                              </span>
                            </div>

                        
                            <h1 className="display-4 fw-bold text-white mb-3">
                              Award Winning LMS – <br />
                              DOLMS!
                            </h1>

                      
                            <p className="text-white fs-5 mb-4">
                              High-quality explainer videos of all topics.
                              <br />
                              Learn on desktop or mobile-based on preferences
                              <br />
                              also you can track your learning progress with
                              <br />
                              SMART tracker.
                            </p>

                            <div className="mb-5">
                              <button
                                className="btn px-4 py-2 d-inline-flex align-items-center"
                                style={{
                                  backgroundColor: "#FF6B35",
                                  color: "white",
                                }}
                              >
                                Watch the Video
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-arrow-right ms-2"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>

                      
                          <div className="col-lg-6 position-relative">
                            <div
                              className="position-relative"
                              style={{ height: "400px" }}
                            >
                             
                              <div
                                className="position-absolute shadow"
                                style={{
                                  right: "20%",
                                  top: "10%",
                                  transform: "rotate(10deg)",
                                  zIndex: 2,
                                  maxWidth: "250px",
                                }}
                              >
                                <div className="card border-0 rounded-4 overflow-hidden">
                                  <div className="card-body p-0">
                                    <img
                                      src="/placeholder.svg?height=400&width=250"
                                      alt="Digital Marketing Certificate"
                                      className="img-fluid"
                                      style={{ objectFit: "cover" }}
                                    />
                                  </div>
                                </div>
                              </div>

                          
                              <div
                                className="position-absolute shadow"
                                style={{
                                  right: "40%",
                                  top: "25%",
                                  transform: "rotate(-5deg)",
                                  zIndex: 1,
                                  maxWidth: "250px",
                                }}
                              >
                                <div className="card border-0 rounded-4 overflow-hidden">
                                  <div className="card-body p-0">
                                    <img
                                      src="/placeholder.svg?height=400&width=250"
                                      alt="3 Years Program"
                                      className="img-fluid"
                                      style={{ objectFit: "cover" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                
                      <div
                        className="position-absolute bottom-0 w-100"
                        style={{ height: "80px", backgroundColor: "#e9ecef" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div>
            <h1
              style={{ width: "60%", margin: "auto", marginTop: "40px" }}
              className="text-center"
            >
              Digiperform Certified Programs. Join The Next Revolution Now!
            </h1>
            <div
              style={{ width: "60%", margin: "auto", fontSize: "20px" }}
              className="text-center"
            >
              Digiperform, as a Leading Digital Marketing Courses &
              Certification Academy, provides value-for-money courses which you
              can afford at the best price in the market. 57,000+ Digiperformers
              got a placement with Digiperform Certifications in top brands.
            </div>
            <div
              style={{ width: "95%", margin: "auto" }}
              className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"
            >
              {programs.map((feature, index) => (
                <div key={index} className="col">
                  <div
                    style={{ height: "280px", position: "relative" }}
                    className="text-white  rounded-4 shadow-sm border border-secondary"
                  >
                    <img
                      src={feature?.bg_image}
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        zIndex: "0",
                      }}
                      alt=""
                    />
                    <div
                      style={{ position: "absolute", top: "20px", zIndex: "1" }}
                    >
                      <div
                        style={{
                          backgroundColor: "#C9F31D",
                          fontSize: "16px",
                          borderRadius: "6px",
                          paddingLeft: "5px",
                          width: "80%",
                          margin: "auto",
                        }}
                        className="py-1"
                      >
                        {feature?.category}
                      </div>
                      <div
                        className="fw-bold mt-4"
                        style={{
                          fontSize: "30px",
                          color: "white",
                          width: "80%",
                          margin: "auto",
                        }}
                      >
                        {feature.title}
                      </div>
                      <div style={{ width: "80%", margin: "auto" }}>
                        Know More
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "40px" }}>
              <div className="features-grid">
                <div className="feature-item">
                  <img src="/assets/img/icon/23.png" alt="" />
                  <div>
                    Innovative ideas are really important to make you different
                    from others. Digiperform involves innovative ideologies for
                    imparting knowledge and skills to our trainees.
                  </div>
                </div>
                <div className="feature-item">
                  <img src="/assets/img/icon/23.png" alt="" />
                  <div>
                    Innovative ideas are really important to make you different
                    from others. Digiperform involves innovative ideologies for
                    imparting knowledge and skills to our trainees.
                  </div>
                </div>
                <div className="feature-item">
                  <img src="/assets/img/icon/23.png" alt="" />
                  <div>
                    Innovative ideas are really important to make you different
                    from others. Digiperform involves innovative ideologies for
                    imparting knowledge and skills to our trainees.
                  </div>
                </div>
                <div className="feature-item">
                  <img src="/assets/img/icon/23.png" alt="" />
                  <div>
                    Innovative ideas are really important to make you different
                    from others. Digiperform involves innovative ideologies for
                    imparting knowledge and skills to our trainees.
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "60%",
                  margin: "auto",
                }}
              >
                {" "}
                <div>
                  Are you ready? Join our Digital Marketing Institute now.
                </div>
                <button style={{ width: "30%" }}>Start a free demo</button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <h1 className="text-center">What Our Trainees Have To Say ?</h1>
            <div
              style={{ width: "60%", margin: "auto", fontSize: "20px" }}
              className="text-center"
            >
              Our Courses have Been Receiving an average rating of 9.4/10 from
              our course participants. Till date, Digiperform has trained more
              than 75,000+ individuals.
            </div>
            <div
              style={{ width: "95%", margin: "auto" }}
              className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="col">
                  <div
                    style={{ height: "300px" }}
                    className="text-white pt-4 px-4  rounded-4 shadow-sm border border-secondary"
                  >
                    <img
                      src={feature.icon}
                      style={{ width: "60px", color: "black" }}
                      alt=""
                    />
                    <h5 className="fw-bold mt-4">{feature.title}</h5>
                    <p className="mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <div style={{width:"100px",margin:"auto"}}>
                    <img style={{width:"100%"}} src="/assets/img/clients/Black-1.png" alt="" />
            </div>
            <h1 className="text-center mt-4">
              Corporates Clients Hiring Digiperformers Include
            </h1>
            <div
              style={{ width: "60%", margin: "auto", fontSize: "20px" }}
              className="text-center"
            >
              Moreover, 13,300+ Fresher Got their 1st Job; With Digiperform
              Certifications & Over 9000+ Trainees Got Better Salary Hike.
            </div>
            <img src="/assets/img/clients/companies.webp" className="mt-4" alt="" />
          </div>
        </div>
      </LayoutV1Light>
    </>
  );
};

export default NewCareers;
