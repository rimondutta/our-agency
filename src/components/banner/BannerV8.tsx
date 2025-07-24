import illustration1 from "/assets/img/illustration/1.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import SplitText from "../animation/SplitText.jsx";

interface DataType {
  lightMode?: boolean;
}

const BannerV8 = ({ lightMode }: DataType) => {
  return (
    <>
      <div
        className="banner-style-eight-area bg-cover"
        style={{
          backgroundImage: `url(${
            lightMode ? "/assets/img/shape/4.jpg" : "/assets/img/shape/3.jpg"
          })`,
        }}
      >
        <div style={{paddingBottom:"70px"}} className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="banner-style-eight-heading">
                <div className="banner-title">
                  <h2  className="">
                    <SplitText
                      className="title-left split-text"
                      delay={150}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                    >
                      Built To SCALE
                    </SplitText>
                  </h2>

                  {/* <h2
                    className="title-right split-text"
                  >
                    <SplitText
                      delay={150}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                    >
                    
                    </SplitText>
                  </h2> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="thumb">
                <img src={illustration1} alt="Image Not Found" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7">
              <div className="d-grid">
                <h4>Market Growth Experts</h4>
                <div className="right">
                  <p>
                    Market Growth Experts is a digital agency focused on helping brands grow, connect, and succeed online. We blend strategy and creativity to drive real results and lasting impact.
                  </p>
                  <Link className="btn-animation mt-10" to="/about-us">
                    <i className="fas fa-arrow-right" /> <span>Know More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 offset-xl-1">
              <div style={{marginTop:"150px",paddingTop:"0",paddingBottom:"0"}} className="card-style-one">
                <div className="bottom" style={{gap:"0",justifyContent:"space-evenly"}}>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <CountUp end={450} enableScrollSpy />
                      </div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">Completed Projects</span>
                  </div>
                  <Link to="/portfolio">
                    <i className="fas fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerV8;
