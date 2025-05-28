import { useEffect, useRef } from "react";
import ContactForm from "../form/ContactForm";
import SocialShareV2 from "../social/SocialShareV2";
import { useLocation } from "react-router-dom";

interface DataType {
  sectionClass?: string;
}

const ContactV1 = ({ sectionClass }: DataType) => {
  const location=useLocation()  
  const contactFormRef = useRef<HTMLDivElement | null>(null);
  
  
  useEffect(() => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ block: "start" });
    }
  }, [location]);

  return (
    <>
      <div
        className={`contact-area overflow-hidden relative ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="container">
          <div className="contact-style-one-items">
            <div className="row">
              <div className="col-tact-stye-one col-lg-4">
                <div className="contact-style-one-info">
                  <ul className="contact-address">
                    <li>
                      <a className="phone-link" href="tel:+8801404587727">
                        <i className="fas fa-user-headset" /> +8801404587727
                      </a>
                    </li>
                    <li>
                      <div className="info">
                        <h4>Bangladesh</h4>
                        <p>
                          8 The Green, Kotowali <br /> Chattogram
                        </p>
                      </div>
                    </li>
                    {/* <li>
                      <div className="info">
                        <h4>India</h4>
                        <p>
                          9A, Tower B4, SPAZE ITECH PARK
                          <br /> Sector 49 Gurugram
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <h4>United Kingdom</h4>
                        <p>
                          71-75, Shelton Street, Covent Garden
                          <br /> London, WC2H 9JQ
                        </p>
                      </div>
                    </li> */}
                    <li>
                      <div className="info">
                        <h4>Email</h4>
                        <a href="mailto:info@quirktix.com">
                          info@quirktix.com
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <ul className="social-link">
                          <SocialShareV2 />
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                ref={contactFormRef}
                className="col-tact-stye-one col-lg-7 offset-lg-1"
              >
                <div className="contact-form-style-one">
                  <h4 className="sub-title">Have Questions?</h4>
                  <h2 className="title">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV1;
