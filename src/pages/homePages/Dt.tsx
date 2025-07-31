import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";
// import HeaderV4 from "../../components/header/HeaderV4";
import MultiSection from "../../components/multi/MultiSection";
import ServicesV1 from "../../components/services/ServicesV1";
import FooterV1 from "../../components/footer/FooterV1";
import ClientsV1 from "../../components/clients/ClientsV1";
import PortfolioV5 from "../../components/portfolio/PortfolioV5";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";
import PartnerV2 from "../../components/partner/PartnerV2";
import Countries from "../../components/clients/countries";
import CursorEffect from "../../components/animation/CursorEffect";

// import BannerV10 from "../../components/banner/BannerV10";
// import AboutV6 from "../../components/about/AboutV6";
import AboutV7 from "../../components/about/AboutV7";
// import WhyChooseV2 from "../../components/whyChoose/WhyChooseV2";
import BannerV1 from "../../components/banner/BannerV1";
// import Team2Page from "../innerPages/Team2Page";
import TeamV1 from "../../components/team/TeamV1";
// import BlogV1 from "../../components/blog/BlogV1";
import HeaderV1 from "../../components/header/HeaderV1";
// import BlogV1 from "../../components/blog/BlogV1";
// import BlogV2 from "../../components/blog/BlogV2";

const Dt = () => {
  return (
    <>
      <Helmet>
        <title>Top Digital Marketing Agency | Market Growth Experts</title>
        <meta
          name="description"
          content="Market Growth Experts is a top digital marketing agency for small businesses, offering AI growth marketing services, expert digital marketing management, and development services​."
        />
      </Helmet>

      <div className="smooth-scroll-container">
        <HeaderV1 lightMode={false} />
        <BannerV1 />
        {/* <AboutV6/> */}
        {/* <WhyChooseV2/> */}
        <AboutV7 />
        <ClientsV1 sectionClass="bg-gray" />
        <ServicesV1 sectionClass="bg-gray" hasTitle={true} />
        <TeamV1 />
        <MultiSection />
        <PortfolioV5 />
        <TestimonialV3 />
        {/* <BlogV1/> */}
        <PartnerV2 />
        <Countries />
        <CursorEffect />

        <FooterV1 />
        <DarkClass />
      </div>
    </>
  );
};

export default Dt;
