import { Link } from "react-router-dom";
// import NewsletterV2 from '../newsletter/NewsletterV2';
import FooterSocial from "../social/FooterSocial";
import logoLight from "/assets/img/logo-light.png";
import logo from "/assets/img/logo.png";

interface DataType {
  sectionClass?: string;
  lightMode?: boolean;
}

const FooterV1 = ({ sectionClass, lightMode }: DataType) => {
  return (
    <>
      <footer className={`${sectionClass ? sectionClass : ""}`}>
        <div className="container">
          <div className="f-items">
            <div className="row">
              <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15 pr-md-15 pr-xs-15">
                <div className="top">
                  {lightMode ? (
                    <img src={logo} alt="Image Not Found" />
                  ) : (
                    <img src={logoLight} alt="Image Not Found" />
                  )}
                </div>
                <ul className="address-list">
                  <li>
                    <h4>Crafting Tomorrow’s Brands, Today.</h4>
                    <p>We help businesses grow online with smart design, strong branding, and digital marketing. Our goal is to build modern brands that stand out and succeed.</p>
                  </li>
                  <li>
                    <h4>Location.</h4>
                    <p>
                      Chattogram, Bangladesh.
                    </p>
                    <h4>
                    </h4>
                      <h4>Phone</h4>
                    {/* <p>
                      <a href="tel:+880 1404587727">+880 1404587727</a>
                    </p> */}
                    <p>
                      <a href="tel:+880 1860-042757">+880 1614-696977</a>
                    </p>
                    <p>
                      <a href="tel:+880 1860-042757">+880 1860-042757</a>
                    </p>
                    <p>
                      <a href="tel:+880 1707-673248">+880 1707-673248</a>
                    </p>
                  </li>
                </ul>
                {/* <ul>
                  <li style={{ width: "70%", marginTop: "10px" }}>
                    <h4></h4>
                    <a href="tel:+880 1404-587727">+880 1404-587727</a>
                  </li>
                </ul> */}
              </div>
              <div className="col-lg-5 offset-lg-1 footer-item">
                <h4 className="widget-title">Useful Link</h4>
                <ul className="useful-link">
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQS</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Term & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      Help Desk
                    </a>
                  </li>
                </ul>
                <div className="footer-contact">
                  <ul>
                    {/* <li>
                      <a href="mailto:info@quirktix.com">mgexperts@gmail.com</a>
                    </li> */}
                    {/* <li>
                     <a target="_blank" href="https://rimondutta.vercel.app/">
                      
                    </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="footer-social">
                  <FooterSocial />
                </ul>
              </div>
              <div className="col-lg-6 text-end">
                <p>
                  Copyright &copy; {new Date().getFullYear()} Market Growth Experts. All Rights Reserved 2025. By <a href="https://www.facebook.com/dutta.rimon/" target="_blank" rel="noopener noreferrer" style={{ color: "#c9f31d" }}>Rimon Dutta</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
