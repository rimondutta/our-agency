import HeaderV1 from '../../components/header/HeaderV1';
import BannerV1 from '../../components/banner/BannerV1';
import BrandV1 from '../../components/brand/BrandV1';
import AboutV1 from '../../components/about/AboutV1';
import ServicesV1Light from '../../components/services/ServicesV1Light';
import ProjectV2Light from '../../components/project/ProjectV2Light';
import PriceV2 from '../../components/price/PriceV2';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import TeamV3 from '../../components/team/TeamV3';
import MultiSectionLight from '../../components/multi/MultiSectionLight';
import BlogV2 from '../../components/blog/BlogV2';
import FooterV3 from '../../components/footer/FooterV3';
import { Helmet } from 'react-helmet-async';

const Home9Light = () => {
    return (
        <>
            <Helmet>
                <title>Quirktix - Home 9 Light</title>
            </Helmet>

            <HeaderV1 lightMode={true} />
            <BannerV1 lightMode={true} />
            <BrandV1 />
            <AboutV1 lightMode={true} />
            <ServicesV1Light sectionClass='default-padding bg-gray' hasTitle={true} />
            <ProjectV2Light />
            <PriceV2 />
            <TestimonialV1 />
            <TeamV3 sectionClass='bg-dark' hasTitle={true} />
            <MultiSectionLight />
            <BlogV2 sectionClass='bg-gray' />
            <FooterV3 />
        </>
    );
};

export default Home9Light;