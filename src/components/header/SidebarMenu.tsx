import { Link } from "react-router-dom";
import logoLight from "/assets/img/logo-light.png"
import MainMenuV2 from './MainMenuV2';
import SocialShareV3 from '../social/SocialShareV3';
import HeaderNewsLetter from './HeaderNewsLetter';
import useSubMenuToggleV2 from "../../hooks/useSubMenuToggleV2";

interface DataType {
    openMenu?: () => void;
    isInfoOpen?: boolean;
    openInfoBar?: () => void;
    closeInfoBar?: () => void;
}

const SidebarMenu = ({ isInfoOpen, closeInfoBar, openInfoBar }: DataType) => {

    const toggleSubMenu2 = useSubMenuToggleV2();

    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="side-menu">
                            <Link to="#" onClick={openInfoBar}>
                                <strong>MENU </strong>
                                <div className="line">
                                    <span className="bar-1" />
                                    <span className="bar-2" />
                                    <span className="bar-3" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2">
                    <div className={`side ${isInfoOpen ? "on" : ""}`}>
                        <Link to="#" className="close-side" onClick={closeInfoBar}>Close <i className="fas fa-times" /></Link>
                        <div className="widget">
                            <div className="logo">
                                <Link to="/home-2">
                                    <img src={logoLight} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-7">
                                    <div className="side-navbar-inner">
                                        <div className="simple-menu">
                                            <MainMenuV2 toggleSubMenu2={toggleSubMenu2} closeInfoBar={closeInfoBar} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                                    <div className="side-widgets">
                                        <div className="widget address">
                                            <div>
                                                <ul>
                                                    <li>
                                                        <div className="content">
                                                            <p>Address</p>
                                                            <strong>California, TX 70240</strong>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="content">
                                                            <p>Email</p>
                                                            <strong>support@validtheme.com</strong>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="content">
                                                            <p>Contact</p>
                                                            <strong>+44-20-7328-4499</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="widget newsletter">
                                            <h4 className="title">Get Subscribed!</h4>
                                            <HeaderNewsLetter />
                                        </div>
                                        <div className="widget social">
                                            <ul className="link">
                                                <SocialShareV3 />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarMenu;