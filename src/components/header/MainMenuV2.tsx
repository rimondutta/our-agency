/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

interface DataType {
    toggleSubMenu2?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    closeInfoBar?: () => void;
}

const MainMenuV2 = ({ toggleSubMenu2, closeInfoBar }: DataType) => {
    return (
        <>
            <ul className="simple-menu-list">
                <li><Link to="/" onClick={closeInfoBar}>Home</Link></li>

                <li>
                    <Link to="#" >Services </Link>
                    <i className="fas fa-plus" onClick={toggleSubMenu2} />
                    <ul className="sub-menu">
                        <li><Link to="/services" onClick={closeInfoBar}>All Services</Link></li>
                        <li className="menu-dropdown">
                            <Link to="#">Marketing</Link>
                            <i className="fas fa-plus" onClick={toggleSubMenu2} />
                            <ul className="sub-menu">
                                <li><Link to="/service/marketing" onClick={closeInfoBar}>Marketing Overview</Link></li>
                                <li><Link to="/service/ecommerce-seo" onClick={closeInfoBar}>Ecommerce SEO</Link></li>
                                <li><Link to="/service/local-seo" onClick={closeInfoBar}>Local SEO</Link></li>
                                <li><Link to="/service/performance-marketing" onClick={closeInfoBar}>Performance Marketing</Link></li>
                                <li><Link to="/service/social-media-marketing" onClick={closeInfoBar}>Social Media Marketing</Link></li>
                                <li><Link to="/service/influencer-marketing" onClick={closeInfoBar}>Influencer Marketing</Link></li>
                                <li><Link to="/service/ecommerce-marketing" onClick={closeInfoBar}>Ecommerce Marketing</Link></li>
                            </ul>
                        </li>
                        <li className="menu-dropdown">
                            <Link to="#">Development</Link>
                            <i className="fas fa-plus" onClick={toggleSubMenu2} />
                            <ul className="sub-menu">
                                <li><Link to="/service/development" onClick={closeInfoBar}>Development Overview</Link></li>
                                <li><Link to="/service/shopify-development" onClick={closeInfoBar}>Shopify Development</Link></li>
                                <li><Link to="/service/woocommerce-development" onClick={closeInfoBar}>WooCommerce Development</Link></li>
                                <li><Link to="/service/web-application-development" onClick={closeInfoBar}>Web Application Development</Link></li>
                                <li><Link to="/service/wordpress-development" onClick={closeInfoBar}>WordPress Development</Link></li>
                                <li><Link to="/service/mobile-application-development" onClick={closeInfoBar}>Mobile Application Development</Link></li>
                                <li><Link to="/service/dropshipping" onClick={closeInfoBar}>Dropshipping</Link></li>
                            </ul>
                        </li>
                        <li className="menu-dropdown">
                            <Link to="#">AI Solutions</Link>
                            <i className="fas fa-plus" onClick={toggleSubMenu2} />
                            <ul className="sub-menu">
                                <li><Link to="/service/artificial-intelligence" onClick={closeInfoBar}>Artificial Intelligence</Link></li>
                                <li><Link to="/service/content-personalization-and-predictive-analysis" onClick={closeInfoBar}>Content Personalization & Predictive Analysis</Link></li>
                                <li><Link to="/service/agentic-process-automation" onClick={closeInfoBar}>Agentic Process Automation</Link></li>
                                <li><Link to="/service/custom-llm-and-fine-tuning" onClick={closeInfoBar}>Custom LLM & Fine-Tuning</Link></li>
                                <li><Link to="/service/custom-ai-tool-development" onClick={closeInfoBar}>Custom AI Tool Development</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link to="#" >Portfolio </Link>
                    <i className="fas fa-plus" onClick={toggleSubMenu2} />
                    <ul className="sub-menu">
                        <li><Link to="/portfolio" onClick={closeInfoBar}>All Projects</Link></li>
                    </ul>
                </li>

                <li><Link to="/blogs" onClick={closeInfoBar}>Blog</Link></li>
                <li><Link to="/team" onClick={closeInfoBar}>Team</Link></li>
                <li><Link to="/about-us" onClick={closeInfoBar}>About</Link></li>
                <li><Link to="/contact-us" onClick={closeInfoBar}>Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenuV2;