import Animate from "../animation/Animate";
import thumb3 from "/assets/img/services/unlock revenue growth.jpg";

interface DataType {
  sectionClass?: string;
}

const WhyChooseV1 = ({ sectionClass }: DataType) => {
  return (
    <>
      <div className={`${sectionClass ? sectionClass : ""}`}>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5">
              <div className="thumb-style-one">
                <img src={thumb3} alt="Image Not Found" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="choose-us-style-one">
                <div className="pl-80 pl-md-0 pl-xs-0">
                  <h4 className="sub-title">Why Market Growth Experts</h4>
                  <h2 className="title">Unlock Revenue Growth</h2>
                  <div
                    className="faq-style-one accordion mt-30"
                    id="faqAccordion"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Strategy That Performs
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            We craft data-driven strategies that align with your
                            goals and drive measurable results.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Seamless Execution
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            From development to marketing — we execute with
                            precision to turn plans into profit
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Scale Without Limits
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Grow confidently with systems, tools, and tactics
                            designed to expand your brand's potential.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="award-items">
                  <Animate className="animate__animated animate__fadeInLeft">
                    <div className="award-item bg-white">
                      {/* <i className="fab fa-behance" />
                      <h4>Behance Awards </h4> */}
                      <img src="/assets/img/partner/sp.png" alt="" />
                    </div>
                  </Animate>

                  <Animate
                    className="animate__animated animate__fadeInLeft"
                    delay="100ms"
                  >
                    <div className="award-item bg-white">
                      <img src="/assets/img/partner/meta.png" alt="" />
                    </div>
                  </Animate>

                  <Animate
                    className="animate__animated animate__fadeInLeft"
                    delay="200ms"
                  >
                    <div className="award-item bg-white">
                       <img src="/assets/img/partner/tick-tock.png" alt="" />
                    </div>
                  </Animate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseV1;
