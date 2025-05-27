import { Helmet } from "react-helmet-async";
import AboutV4 from "../../components/about/AboutV4";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import ZoomVideoV1 from "../../components/videos/ZoomVideoV1";
import WhyChooseV1 from "../../components/whyChoose/WhyChooseV1";

const About2LightPage = () => {
    
    return (
        <>
            <Helmet>
                <title>Quirktix - About 2 Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='About Company' breadCrumb='About-2-light' LightMode={true} />
                <AboutV4 sectionClass='default-padding' />
                <FunFactV1 sectionClass='default-padding-bottom' />
                <ZoomVideoV1 />
                <WhyChooseV1 sectionClass='default-padding' />
                <TestimonialV2 sectionClass='bg-gray' />
            </LayoutV1Light>
        </>
    );
};

export default About2LightPage;