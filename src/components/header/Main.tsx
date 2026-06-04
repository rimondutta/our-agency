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
        <li className="dropdown">
          <Link to="/" className=" active" data-toggle="dropdown" onClick={toggleSubMenu}>Home</Link>
        </li>
        <li className="dropdown">
          <Link to="/about-us" className=" active" data-toggle="dropdown" onClick={toggleSubMenu}>About</Link>
        </li>
        <li className="dropdown">
          <Link
            to="/service/marketing"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Marketing
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/service/local-seo">Local SEO</Link></li>
            <li><Link to="/service/ecommerce-seo">Ecommerce SEO</Link></li>
            <li><Link to="/service/performance-marketing">Performance Marketing</Link></li>
            <li><Link to="/service/social-media-marketing">Social Media Marketing</Link></li>
            <li><Link to="/service/influencer-marketing">Influencer Marketing</Link></li>
            <li><Link to="/service/ecommerce-marketing">Ecommerce Marketing</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link
            to="/service/development"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Development
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/service/shopify-development">Shopify</Link></li>
            <li><Link to="/service/woocommerce-development">WooCommerce</Link></li>
            <li><Link to="/service/wordpress-development">WordPress</Link></li>
            <li><Link to="/service/web-application-development">Web Applications</Link></li>
            <li><Link to="/service/mobile-application-development">Mobile Applications</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/service/dropshipping" className="active" data-toggle="dropdown" onClick={toggleSubMenu}>
            Dropshipping
          </Link>
          
        </li>

        <li className="dropdown">
          <Link to="/service/artificial-intelligence" className="active" data-toggle="dropdown" onClick={toggleSubMenu}>
            Artificial Intelligence
          </Link>
        </li>
        <li>
            <Link to="/services">All Services</Link>
        </li>
        <li className="dropdown">
          <Link to="/portfolio" className=" active" data-toggle="dropdown" onClick={toggleSubMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/blogs">Blog</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
