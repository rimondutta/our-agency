import { Helmet } from "react-helmet-async";
import AboutV2 from "../../components/about/AboutV2";
import CursorEffect from "../../components/animation/CursorEffect";
import BannerV2 from "../../components/banner/BannerV2";
import BlogV1 from "../../components/blog/BlogV1";
import FooterV2 from "../../components/footer/FooterV2";
import HeaderV2 from "../../components/header/HeaderV2";
import PortfolioV5 from "../../components/portfolio/PortfolioV5";
import ServicesV6 from "../../components/services/ServicesV6";
import TeamV3 from "../../components/team/TeamV3";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import WhyChooseV3 from "../../components/whyChoose/WhyChooseV3";

const Home2Light = () => {
    return (
        <>
            <Helmet>
                <title>Quirktix - Home 2 Light</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 lightMode={true} />
                <BannerV2 />
                <AboutV2 />
                <ServicesV6 />
                <PortfolioV5 />
                <WhyChooseV3 />
                <TeamV3 sectionClass='bg-dark' hasTitle={true} />
                <TestimonialV2 sectionClass='bg-gray' />
                <BlogV1 />
                <CursorEffect />
                <FooterV2 lightMode={true} sectionClass='bg-gray' />
            </div>
        </>
    );
};

export default Home2Light;