import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import { Link } from "react-router-dom";
import PriceV2New from "../price/PriceV2New.tsx";

interface DataType {
  title?: string;
  bannerImg?:string;
  img1?:string;
  img2?:string;
  whyChooseP1?: string;
  whyChooseP2?: string;
  faqs?:FAQ[];
  definition?:string,
  importance?:string[],
  importance_title?:string,
}

interface FAQ{
  q?:string;
  a?:string;
}
interface PricingPlan {
  id: number;
  title: string;
  description: string;
  features: string[];
  blockedFeatures: string[];
  priceOriginal: number | null;
  priceDiscounted: number;
  currency: string;
  billingCycle: string;
}
interface PricingDataType {
  serviceId?: string;
  monthlyPlans?:PricingPlan[];
  yearlyPlans?:PricingPlan[];
}


interface ServiceDetailsProps {
  serviceInfo?: DataType;
  sectionClass?: string;
  pricing?:PricingDataType;
}

const ServiceDetailsContentLight = ({
  serviceInfo,
  sectionClass,
  pricing
}: ServiceDetailsProps) => {
  const { title, whyChooseP1,bannerImg, img1,img2,whyChooseP2, faqs,definition,importance,importance_title } =
    serviceInfo || {};
  return (
    <>
      <div
        className={`services-details-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={bannerImg} alt="Thumb" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <h2>{title}</h2>
                <p>
                  {definition}
                </p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <p>
                  {importance_title}
                </p>
                <ul className="feature-list-item">
                  {importance?.map((item,idx)=>{
                    return <li key={idx}>{item}</li>
                  })}
                </ul>
              </div>
            </div>
            {/* <div className="mt-50 mt-xs-20">
              <div className="process-style-two">
                <div className="process-style-two-item">
                  <span>01</span>
                  <h4>Project Research</h4>
                  <p>
                    We begin by analyzing your target audience and understanding
                    where they spend their time online. This ensures we create
                    content that speaks to their interests and needs.
                  </p>
                </div>
                <div className="process-style-two-item">
                  <span>02</span>
                  <h4>Best Concept</h4>
                  <p>
                    Based on our research, we develop a content strategy that
                    aligns with your brand’s voice and objectives. We create
                    eye-catching posts, engaging captions, and shareable videos
                    that capture attention and spark conversations.
                  </p>
                </div>
                <div className="process-style-two-item">
                  <span>03</span>
                  <h4>Design Implement</h4>
                  <p>
                    We tailor content for each social media platform (Instagram,
                    Facebook, YouTube, etc.) to maximize reach and engagement.
                    Each platform has its own strengths, and we optimize our
                    content accordingly.
                  </p>
                </div>
                <div className="process-style-two-item">
                  <span>04</span>
                  <h4>Final Result</h4>
                  <p>
                    We track key metrics such as engagement rates, follower
                    growth, and click-through rates to gauge the success of our
                    campaigns. This allows us to continuously optimize our
                    strategy for better results.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="row mt-80 mt-xs-50 gallery-two-columns">
              <div className="col-md-6">
                <img src={img1} alt="Image Not Found" />
              </div>
              <div className="col-md-6">
                <img src={img2} alt="Image Not Found" />
              </div>
            </div>
          </div>
        </div>
        <PriceV2New pricing={pricing} />
        <div className="container">
          <div className="services-details-items">
            <div className="d-grid colums-2 mt-50">
              <div className="item">
                <div className="faq-style-one faq-style-two">
                  <h2 className="mb-30">Frequently Asked Questions</h2>
                  <div className="accordion" id="faqAccordion">
                    {
                      faqs?.map((item,idx)=>{
                        return (
                          <div key={idx} className="accordion-item">
                          <h2 className="accordion-header" id={`heading${idx}`}>
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${idx}`}
                              aria-expanded="true"
                              aria-controls={`collapse${idx}`}
                            >
                              {item.q}
                            </button>
                          </h2>
                          <div
                            id={`collapse${idx}`}
                            className={`accordion-collapse collapse`}
                            //className="accordion-collapse collapse show"  //use this to keep the answers open
                            aria-labelledby={`heading${idx}`}
                            data-bs-parent="#faqAccordion"
                          >
                            <div className="accordion-body">
                              <p>{item.a}</p>
                            </div>
                          </div>
                          </div>
                        )
                      })
                    }
                   
                  </div>
                </div>
              </div>
              <div className="item">
                <h2>What we do?</h2>
                <p>{whyChooseP1}</p>
                <p>{whyChooseP2}</p>
              </div>
            </div>
            <div className="services-more mt-100 mt-xs-30">
              <h2 className="mb-20">Most popular services</h2>
              <div className="row">
                {ServicesV1Data.slice(0, 3).map((service) => (
                  <div className="col-lg-4 col-md-6" key={service.id}>
                    <div className="item">
                      <img
                        src={`/assets/img/icon/${service.iconLight}`}
                        alt="Image Not Found"
                        width={75}
                        height={60}
                      />
                      <h4>
                        <Link to={`/service-details-light/${service.id}`}>
                          {service.title}
                        </Link>
                      </h4>
                      <p>{service.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContentLight;
