import { Helmet } from "react-helmet-async";
import AboutV4 from "../../components/about/AboutV4";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import TeamV3 from "../../components/team/TeamV3";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import ZoomVideoV1 from "../../components/videos/ZoomVideoV1";

const About2Page = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - About 2</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='About Company' breadCrumb='About-2' />
                <AboutV4 sectionClass='default-padding-bottom' />
                <FunFactV1 sectionClass='default-padding-bottom' />
                <ZoomVideoV1 />
                <TeamV3 hasTitle={true} />
                <TestimonialV2 sectionClass='bg-gray' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default About2Page;