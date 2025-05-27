import HeaderV1 from '../../components/header/HeaderV1';
import BannerV1 from '../../components/banner/BannerV1';
// import BrandV1 from '../../components/brand/BrandV1';
// import AboutV1 from '../../components/about/AboutV1';
// import ServicesV1Light from '../../components/services/ServicesV1Light';
// import ProjectV2Light from '../../components/project/ProjectV2Light';
import PriceV2 from '../../components/price/PriceV2';
// import TestimonialV1 from '../../components/testimonial/TestimonialV1';
// import TeamV3 from '../../components/team/TeamV3';
import MultiSectionLight from '../../components/multi/MultiSectionLight';
// import BlogV2 from '../../components/blog/BlogV2';
// import FooterV3 from '../../components/footer/FooterV3';
import { Helmet } from 'react-helmet-async';
// import BannerV4 from '../../components/banner/BannerV4';
// import BannerV3 from '../../components/banner/BannerV3';
// import BannerV2 from '../../components/banner/BannerV2';
// import BannerV6 from '../../components/banner/BannerV6';
// import BannerV7 from '../../components/banner/BannerV7';
// import BannerV8 from '../../components/banner/BannerV8';
// import BannerV9 from '../../components/banner/BannerV9';
// import BannerV10Light from '../../components/banner/BannerV10Light';
// import BrandV2 from '../../components/brand/BrandV2';

import ServicesV2 from '../../components/services/ServicesV2';

// import ServicesV3Light from '../../components/services/ServicesV3Light';
// import ServicesV4 from '../../components/services/ServicesV4';
// import ServicesV5 from '../../components/services/ServicesV5';
// import ServicesV6 from '../../components/services/ServicesV6';
import ProjectV1Light from '../../components/project/ProjectV1Light';
// import PriceV1 from '../../components/price/PriceV1';
// import PriceV3 from '../../components/price/PriceV3';
// import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import TestimonialV3 from '../../components/testimonial/TestimonialV3';
// import TeamV1 from '../../components/team/TeamV1';
// import TeamV2 from '../../components/team/TeamV2';
import BlogV1 from '../../components/blog/BlogV1';
import AboutV2 from '../../components/about/AboutV2';
// import AboutV3 from '../../components/about/AboutV3';
// import AboutV4 from '../../components/about/AboutV4';
// import AboutV5 from '../../components/about/AboutV5';
import AboutV6 from '../../components/about/AboutV6';
// import AboutV7 from '../../components/about/AboutV7';
import FooterV1 from '../../components/footer/FooterV1';
// import FooterV2 from '../../components/footer/FooterV2';
// import FooterV4 from '../../components/footer/FooterV4';
import ClientsV1 from '../../components/clients/ClientsV1';
// import PortfolioV1 from '../../components/portfolio/PortfolioV1';
// import PortfolioV1Light from '../../components/portfolio/PortfolioV1Light';
// import PortfolioV3Light from '../../components/portfolio/PortfolioV3Light';
// import SinglePortfolioV4Light from '../../components/portfolio/SinglePortfolioV4Light';
// import PortfolioV6Light from '../../components/portfolio/PortfolioV6Light';
// import PortfolioV2 from '../../components/portfolio/PortfolioV2';
// import PortfolioV4 from '../../components/portfolio/PortfolioV4';
import PortfolioV5 from '../../components/portfolio/PortfolioV5';
import ProcessWrapper from '../../components/process/ProcessWrapper';
// import ExpertiseV1 from '../../components/expertise/ExpertiseV1';
import FunFactV1 from '../../components/fact/FunFactV1';
// import AchievementAward from '../../components/awards/AchievementAward';
// import AwardV1 from '../../components/awards/AwardV1';
// import ContactV1 from '../../components/contact/ContactV1';
// import QuickContact from '../../components/contact/QuickContact';
// import ContactMap from '../../components/map/ContactMap';
// import NewsletterV2 from '../../components/newsletter/NewsletterV2';
import PartnerV2 from '../../components/partner/PartnerV2';
// import WhyChooseV1 from '../../components/whyChoose/WhyChooseV1';
// import WhyChooseV2 from '../../components/whyChoose/WhyChooseV2';
import WhyChooseV3 from '../../components/whyChoose/WhyChooseV3';

const Home9Light = () => {
    return (
        <>
            <Helmet>
                <title>Quirktix - Home 9 Light</title>
            </Helmet>

            <HeaderV1 lightMode={true} />
            {/* <p>Banner 1</p> */}
            <BannerV1 lightMode={true} />
            {/* <p>Banner 2</p>
            <BannerV2 />
            <p>Banner 3</p>
            <BannerV3 />
            <p>Banner 4</p>
            <BannerV4 />
            <p>Banner 6</p>
            <BannerV6 />
            <p>Banner 7</p>
            <BannerV7 lightMode={true} />
            <p>Banner 8</p>
            <BannerV8 lightMode={true} />
            <p>Banner 9</p>
            <BannerV9 lightMode={true} />
            <p>Banner 10</p>
            <BannerV10Light /> */}
           
            {/* <p>BrandV1</p>
            <BrandV1 />
            <p>BrandV2 </p>
            <BrandV2 /> */}

            {/* <p>AboutV2 </p> */}
            <AboutV2  />

            {/* <p>Focus/service 2</p> */}
            <ServicesV2 sectionClass="default-padding bg-gray" hasTitle={true}/>

            {/* <p>ClientsV1 </p> */}
            <ClientsV1 sectionClass="bg-gray"/>

            {/* <p>PortfolioV5 </p> */}
            <PortfolioV5/>

            {/* <p> ProcessWrapper </p> */}
            <ProcessWrapper />

            {/* <p>TestimonialV3 </p> */}
            <TestimonialV3 />

            {/* <p>Project v1</p> */}
            <ProjectV1Light/>

            {/* <p>FACT </p> */}
            <FunFactV1/>

             {/* <p>Price 2</p> */}
             <PriceV2 />

             {/* <p>MultiSectionLight </p> */}
            <MultiSectionLight />

               
            {/* <p>BlogV1 </p> */}
            <BlogV1 sectionClass='bg-gray' />


            {/* <p>Partner</p> */}
            <PartnerV2/>
            
            {/* <p>Why Choose V3</p>  */}
            <WhyChooseV3/>

            <AboutV6 />

           {/* <p>Focus/service 1</p>
            <ServicesV1Light sectionClass='default-padding bg-gray' hasTitle={true} />
        
             <p>Focus/service 3</p>
             <ServicesV3Light sectionClass="default-padding bg-gray" hasTitle={true}/>
             <p>Focus/service 4</p>
             <ServicesV4/>
             <p>Focus/service 5</p>
             <ServicesV5/>
             <p>Focus/service 6</p>
             <ServicesV6/>

             

             <p>PortfolioV1 </p>
             <PortfolioV1Light/>

             <p>PortfolioV2 </p>
             <PortfolioV2/>
             <p>PortfolioV3 </p>
             <PortfolioV3Light/>
             <p>PortfolioV4 </p>
             <PortfolioV4/>
            
             <p>PortfolioV6 </p>
             <PortfolioV6Light/>

        

             <p>TestimonialV1 </p>
            <TestimonialV1 />
            <p>TestimonialV2 </p>
            <TestimonialV2 />
          

         
            <p>Project v2</p>
            <ProjectV2Light />

            <p>Expertise 1</p>
            <ExpertiseV1/>

         
            <p>PriceV1 </p>
            <PriceV1 />
            <p>PriceV2 </p>
            <PriceV2 />
            <p>PriceV3 </p>
            <PriceV3 />
            <p>MultiSectionLight </p>
            <MultiSectionLight />
         
            <p>BlogV2 </p>
            <BlogV2 sectionClass='bg-gray' />
            <p>Contact 1</p>
            <ContactV1 />
            <p>Contact 2</p>
            <QuickContact />
            <p>Contact Map</p>
            <ContactMap/>
            <p>News Letter</p>
            <NewsletterV2/>
            <p>Partner</p>
            <PartnerV2/>
            <p>Why Choose V1</p>
            <WhyChooseV1/>
            <p>Why Choose V2</p>
            <WhyChooseV2/>
            <p>Why Choose V3</p>
            <WhyChooseV3/>
            <p>AboutV1 </p>
            <AboutV1 lightMode={true} />
          
            <p>AboutV3 </p>
            <AboutV3  />
            <p>AboutV4 </p>
            <AboutV4  />
            <p>AboutV5 </p>
            <AboutV5  />
            <p>AboutV6 </p>
            <AboutV6 lightMode={true} />
            <p>AboutV7 </p>
            <AboutV7  />

            <p>TeamV1 </p>
            <TeamV1 sectionClass='bg-dark' hasTitle={true} />
            <p>TeamV2 </p>
            <TeamV2 />
            <p>TeamV3 </p>
            <TeamV3 sectionClass='bg-dark' hasTitle={true} />
           

         

            <p>Acheivement and Awards</p>
            <AchievementAward/>
            <AwardV1/> */}
        
            {/* <p>FooterV1 </p> */}
            <FooterV1 lightMode={true} />
            {/* <p>FooterV2 </p>
            <FooterV2 />
            <p>FooterV3 </p>
            <FooterV3 />
            <p>FooterV4 </p>
            <FooterV4 /> */}
        </>
    );
};

export default Home9Light;