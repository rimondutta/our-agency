



// 







import { Link } from "react-router-dom";
import CountUp from "react-countup";
// import handleSmoothScroll from "../utilities/handleSmoothScroll";
import SplitText from '../animation/SplitText';

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
                  <img src="/assets/img/clients/cevherun.png" alt="Image Not Found" />
                  <img src="/assets/img/clients/alamo city popcorn.png" alt="Image Not Found" />
                  <img src="/assets/img/testimonial/marinela.jpg" alt="Image Not Found" />
                  <img src="/assets/img/testimonial/soledesign.jpg" alt="Image Not Found" />
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
                  <img src="/assets/img/brand/10.png" alt="Image Not Found" />
                </div>
                <div  className="client-style-one-item">
                  <img src="/assets/img/clients/alamo city popcorn.png"   alt="Image Not Found" />
                </div>
                <div className="client-style-one-item">
                  <img src="/assets/img/clients/ReHisk_png.png" alt="Image Not Found" />
                </div>
                <div className="client-style-one-item">
                  <img src="/assets/img/clients/ladder safety.png" alt="Image Not Found" />
                </div>
                <div className="client-style-one-item">
                  <img src="/assets/img/clients/eyecandybrownsalon.png" style={{width:"100%"}} alt="Image Not Found" />
                </div>
                <div className="client-style-one-item">
                  <img src="/assets/img/clients/dripnation.png"  alt="Image Not Found" />
                </div>
                <div className="client-style-one-item">
                  <img src="/assets/img/clients/dtfnc.png" alt="Image Not Found" />
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
