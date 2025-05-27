/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

interface DataType {
  navbarPlacement?: string;
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {
  return (
    <>
      <ul
        className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`}
        data-in="fadeInDown"
        data-out="fadeOutUp"
      >
        {/* <li className="dropdown">
                    <Link to="#" className=" active" data-toggle="dropdown" onClick={toggleSubMenu}>Home</Link>
                    
                </li> */}
        <li className="dropdown">
          <Link
            to="/about-us"
            className=" active"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            About
          </Link>
        </li>
        <li className="dropdown">
          <Link
            to="/marketing"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Marketing
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/local-seo">Local SEO</Link>
            </li>
            <li>
              <Link to="/ecommerce-seo">Ecommerce SEO</Link>
            </li>
            <li>
              <Link to="/performance-marketing">Performance Marketing</Link>
            </li>
            <li>
              <Link to="/social-media-marketing">Social Media Marketing</Link>
            </li>
            <li>
              <Link to="/influencer-marketing">Influencer Marketing</Link>
            </li>
            <li>
              <Link to="/ecommerce-marketing">Ecommerce Marketing</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link
            to="/development"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Development
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/shopify-development">Shopify</Link>
            </li>
            <li>
              <Link to="/woocommerce-development">WooCommerce</Link>
            </li>
            <li>
              <Link to="/wordpress-development">WordPress</Link>
            </li>
            <li>
              <Link to="/web-application-development">Web Applications</Link>
            </li>
            <li>
              <Link to="/mobile-application-development">
                Mobile Applications
              </Link>
            </li>
            {/* <li>
              <Link to="/artificial-intelligence">Artificial Intelligence</Link>
            </li> */}
          </ul>
        </li>
        <li className="dropdown">
          <Link
            to="/dropshipping"
            className="active"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Dropshipping
          </Link>
        </li>
        <li className="dropdown">
          <Link
            to="/portfolio"
            className=" active"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Portfolio
          </Link>
        </li>
        <li className="dropdown">
          <Link
            to="/artificial-intelligence"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Artificial Intelligence
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/content-personalization-and-predictive-Analysis">Content Personalization and Predictive Analysis</Link>
            </li>
            <li>
              <Link to="/custom-llm-and-fine-tuning">Custom LLM and Fine Tuning</Link>
            </li>
            <li>
              <Link to="/custom-ai-tool-development">Custom AI Tool Development</Link>
            </li>
            <li>
              <Link to="/agentic-processs-automation">Agentic Process Automation</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact-us">contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
