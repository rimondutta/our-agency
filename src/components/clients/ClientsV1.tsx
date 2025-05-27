import team10 from "/assets/img/clients/cevherun.png";
import team11 from "/assets/img/clients/alamo city popcorn.png";
import team12 from "/assets/img/testimonial/marinela.jpg";
import team13 from "/assets/img/testimonial/soledesign.jpg";
// import brand10 from "/assets/img/brand/10.png";
import brand10 from "/assets/img/clients/cevherun.png";
import brand2 from "/assets/img/clients/alamo city popcorn.png";
import brand3 from "/assets/img/clients/ReHisk_png.png";
import brand4 from "/assets/img/clients/ladder safety.png";
import brand8 from "/assets/img/clients/eyecandybrownsalon.png";
import brand6 from "/assets/img/clients/dripnation.png";
import brand7 from "/assets/img/clients/dtfnc.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
// import handleSmoothScroll from "../utilities/handleSmoothScroll";
import SplitText from "../animation/SplitText.jsx";

interface DataType {
  sectionClass?: string;
}

const ClientsV1 = ({ sectionClass }: DataType) => {
  return (
    <>
      <div
        className={`clients-area default-padding ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 mb-md-50">
              <div className="brand-info">
                <h4 className="sub-title">Our Clients</h4>

                <h2 className="title split-text">
                  <SplitText
                    delay={100}
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
                    Worked With Top Brands
                  </SplitText>
                </h2>

                <p className="split-text">
                  <SplitText
                    delay={5}
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
                    We’ve partnered with 105+ brands across industries, helping
                    them scale through strategy, design, and execution. Our work
                    speaks through the growth and trust we’ve built together.
                  </SplitText>
                </p>

                <div className="clients-card mt-10">
                  <img src={team10} alt="Image Not Found" />
                  <img src={team11} alt="Image Not Found" />
                  <img src={team12} alt="Image Not Found" />
                  <img src={team13} alt="Image Not Found" />
                  <Link to="#">
                    <i className="fas fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 col-lg-7">
              <div className="client-style-one-items">
                <div className="client-style-one-item">
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="count-num">
                        <CountUp end={45} enableScrollSpy />
                      </div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">Active Clients</span>
                  </div>
                </div>
                <div className="client-style-one-item">
                  <img src={brand10} alt="Image Not Found" />
                </div>
                <div  className="client-style-one-item">
                  <img src={brand2}   alt="Image Not Found" />
                </div>
                <div className="client-style-one-item">
                  <img src={brand3} alt="Image Not Found" />
                </div>
                <div className="client-style-one-item">
                  <img src={brand4} alt="Image Not Found" />
                </div>
                <div className="client-style-one-item">
                  <img src={brand8} style={{width:"100%"}} alt="Image Not Found" />
                </div>
                <div className="client-style-one-item">
                  <img src={brand6}  alt="Image Not Found" />
                </div>
                <div className="client-style-one-item">
                  <img src={brand7} alt="Image Not Found" />
                </div>
                <div className="client-style-one-item">
                  <Link to="/portfolio" >
                    View All
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

export default ClientsV1;
