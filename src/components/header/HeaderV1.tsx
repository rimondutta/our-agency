import { Link } from "react-router-dom";
// import MainMenu from './MainMenu';
import Main from './Main'
// import SidebarInfo from './SidebarInfo';
import logo from '/assets/img/logo.png';
import logoLight from '/assets/img/logo-light.png';
import useSidebarMenu from "../../hooks/useSidebarMenu";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
// import useSidebarInfo from "../../hooks/useSidebarInfo";
import useStickyMenu from "../../hooks/useStickyMenu";


interface DataType {
    lightMode?: boolean;
}

const HeaderV1 = ({ lightMode }: DataType) => {

    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const toggleSubMenu = useSubMenuToggle();
    // const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();
    const isMenuSticky = useStickyMenu();
    return (
        <>
            <header>
                <nav className={`navbar  mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed on menu-center ${isMenuSticky ? "sticked" : "no-background"} ${isOpen ? "navbar-responsive" : ""}`}>
                    {/* <div className="container d-flex justify-content-between align-items-center"> */}
                    <div style={{width:"90%"}} className="mx-auto  d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img src={lightMode ? logo : logoLight} className="logo logo-display" alt="Logo" />
                                <img src={lightMode ? logo : logoLight} className="logo logo-scrolled" alt="Logo" />
                            </Link>
                        </div>
                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <img src={logoLight} alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>
                            <Main toggleSubMenu={toggleSubMenu} navbarPlacement='navbar-center' />
                        </div>
                        <div className="attr-right">
                            <div className="attr-nav flex">
                                <ul>
                                    <li className="button">
                                        <Link to="/contact-us">Get in touch</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <SidebarInfo openInfoBar={openInfoBar} closeInfoBar={closeInfoBar} isInfoOpen={isInfoOpen} /> */}
                    </div>
                    {/* <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} /> */}
                </nav>
            </header>
        </>
    );
};

export default HeaderV1;