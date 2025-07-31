import { Helmet } from "react-helmet-async";
import AboutV5 from "../../components/about/AboutV5";
import AwardV1 from "../../components/awards/AwardV1";
import BannerV7 from "../../components/banner/BannerV7";
// import BlogV1 from "../../components/blog/BlogV1";
import DarkClass from "../../components/classes/DarkClass";
// import HeaderV1 from "../../components/header/HeaderV1";
import PortfolioV4 from "../../components/portfolio/PortfolioV4";
import ProcessWrapper from "../../components/process/ProcessWrapper";
import ServicesV5 from "../../components/services/ServicesV5";
// import TeamV1 from "../../components/team/TeamV1";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";
import HeaderV1 from "../../components/header/HeaderV1";
import FooterV1 from "../../components/footer/FooterV1";
import TeamV1 from "../../components/team/TeamV1";

const Home8 = () => {
    return (
        <>
            <Helmet>
                <title>Market Growth Experts - Home 8</title>
            </Helmet>

            <HeaderV1 />
            <BannerV7 />
            <ServicesV5 sectionClass='bg-gray' />
            <AboutV5 sectionClass='blurry-shape-left' />
            <PortfolioV4 sectionClass='bg-gray default-padding' hasTitle={true} />
            <ProcessWrapper />
            <TeamV1 />
            <AwardV1 sectionClass='default-padding-top' />
            <TestimonialV3 />
            {/* <BlogV1 sectionClass='bg-gray' /> */}
            <FooterV1 />
            <DarkClass />
        </>
    );
};

export default Home8