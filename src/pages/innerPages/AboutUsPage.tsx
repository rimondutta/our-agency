import { Helmet } from "react-helmet-async";
import AboutV6 from "../../components/about/AboutV6";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PartnerV2 from "../../components/partner/PartnerV2";
import TeamV1 from "../../components/team/TeamV1";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";

const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - About Us</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='About Company' breadCrumb='About' />
                <AboutV6 sectionClass='bg-gray' />
                <FunFactV1 sectionClass='default-padding-bottom bg-gray' />
                <PartnerV2 />
                <TeamV1 sectionClass='bg-gray' hasTitle={true} />
                <TestimonialV3 />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default AboutUsPage;