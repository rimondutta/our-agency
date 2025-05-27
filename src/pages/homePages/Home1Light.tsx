import { Helmet } from "react-helmet-async";
import AboutV6 from "../../components/about/AboutV6";
import BannerV8 from "../../components/banner/BannerV8";
import BlogV2 from "../../components/blog/BlogV2";
import ClientsV1 from "../../components/clients/ClientsV1";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import MultiSectionLight from "../../components/multi/MultiSectionLight";
import ProjectV1Light from "../../components/project/ProjectV1Light";
import ServicesV1 from "../../components/services/ServicesV1";
import TeamV1 from "../../components/team/TeamV1";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";

const Home1Light = () => {
    return (
        <>
            <Helmet>
                <title>Quirktix - Creative Digital Agency Light</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV1 lightMode={true} />
                <BannerV8 lightMode={true} />
                <AboutV6 lightMode={true} />
                <ServicesV1 sectionClass='bg-gray default-padding' hasTitle={true} lightMode={true} />
                <ProjectV1Light />
                <TeamV1 hasTitle={true} />
                <ClientsV1 sectionClass='bg-dark' />
                <TestimonialV3 sectionClass='bg-gray' />
                <MultiSectionLight />
                <BlogV2 sectionClass='bg-gray' />
                <FooterV1 lightMode={true} />
            </div>
        </>
    );
};

export default Home1Light;