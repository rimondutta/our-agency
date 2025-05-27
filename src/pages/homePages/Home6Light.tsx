import { Helmet } from "react-helmet-async";
import AboutV7 from "../../components/about/AboutV7";
import BannerV10Light from "../../components/banner/BannerV10Light";
import BlogV1 from "../../components/blog/BlogV1";
import FunFactV1 from "../../components/fact/FunFactV1";
import FooterV2 from "../../components/footer/FooterV2";
import HeaderV6 from "../../components/header/HeaderV6";
import PartnerV2 from "../../components/partner/PartnerV2";
import PortfolioV2 from "../../components/portfolio/PortfolioV2";
import ServicesV2 from "../../components/services/ServicesV2";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";

const Home6Light = () => {
    return (
        <>
            <Helmet>
                <title>Quirktix - Home 6 Light</title>
            </Helmet>

            <HeaderV6 lightMode={true} />
            <BannerV10Light />
            <AboutV7 />
            <PartnerV2 sectionClass='bg-gray' />
            <ServicesV2 sectionClass='default-padding-top' hasTitle={true} />
            <PortfolioV2 sectionClass='default-padding bg-gray' hasTitle={true} />
            <TestimonialV2 />
            <FunFactV1 sectionClass='default-padding bg-gray' />
            <BlogV1 />
            <FooterV2 lightMode={true} />
        </>
    );
};

export default Home6Light;