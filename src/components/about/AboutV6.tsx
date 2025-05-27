import thumb2 from "/assets/img/about/values.png";
import thumb12 from "/assets/img/thumb/12.jpg";
// import arrowIcon from "/assets/img/icon/arrow.png";
// import arrowTheme from "/assets/img/icon/arrow-theme.png";
import ServiceListData from "../../../src/assets/jsonData/services/ServiceListData.json";
import ServiceList from "../services/ServiceList";
import { Link } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface DataType {
  lightMode?: boolean;
  sectionClass?: string;
}

const AboutV6 = ({ lightMode, sectionClass }: DataType) => {
  const containerRef = useScrollAnimation();

  const [activeServiceId, setActiveServiceId] = useState(
    ServiceListData[0]?.id || null
  );

  const handleMouseEnter = (id: number) => {
    setActiveServiceId(id);
  };

  const handleMouseLeave = () => {
    // Do nothing on mouse leave to keep the active item
  };

  return (
    <>
      <div
        className={`about-style-six-area default-padding ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div style={{ width: "95%" }} className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="thumb-style-four">
                <img src={lightMode ? thumb12 : thumb2} alt="Image Not Found" />
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div
                className="about-style-six-info text-scroll-animation"
                ref={containerRef}
              >
                <div className="info">
                  <div className="d-flex">
                    {/* <Link to="/about-us">
                      <img
                        src={lightMode ? arrowTheme : arrowIcon}
                        alt="Image Not Found"
                      />
                    </Link> */}
                    <h2 className="title text">
                      {/* Best creative & digital agency */}
                      Our Values
                    </h2>
                  </div>
                  <p className="text">
                    At the core of Quirktix lie values that guide
                    our actions and shape our culture.
                  </p>
                </div>
                
                  {/* {ServiceListData.slice(0,3).map((service) => (
                    <li
                      key={service.id}
                      onMouseEnter={() => handleMouseEnter(service.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        to="#"
                        className={`${
                          activeServiceId === service.id ? "active" : ""
                        }`}
                      >
                        <ServiceList service={service} />
                      </Link>
                    </li>
                  ))} */}
                  <div className="valuesbox" style={{ marginTop: "40px"}}>
                    <Swiper
                      modules={[Navigation]}
                      navigation={{
                        nextEl: ".right",
                        prevEl: ".left",
                      }}
                      loop={true}
                      breakpoints={{
                        0: {
                          slidesPerView: 2,
                        },
                        1200: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {ServiceListData.map((service, index) => (
                        <SwiperSlide  className=""  key={index}>
                          <li
                            style={{width:"90%",height:"250px"}}
                            key={service.id}
                            onMouseEnter={() => handleMouseEnter(service.id)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <Link
                              to="#"
                              style={{height:"250px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px",border:"2px solid grey"}}
                              className={`${
                                activeServiceId === service.id ? "active" : ""
                              }`}
                            >
                              <ServiceList service={service} />
                            </Link>
                          </li>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "40px",
                        gap: "10px",
                      }}
                      className="project-four-nav"
                    >
                      <div className="d-flex justify-content-center align-items-center gap-2 my-4">
                        <button className="left btn  border border-dark rounded-pill px-4 d-flex align-items-center">
                          <i className="fas fa-chevron-left me-2 text-dark"></i>
                        </button>
                        <button className="right btn  border border-dark rounded-pill px-4 d-flex align-items-center">
                          <i className="fas fa-chevron-right ms-2 text-dark"></i>
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV6;
