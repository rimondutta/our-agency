import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";

import ContentPapa from "../../components/services/ContentPAPAContent";

const CPAPA = () => {

    const data = ServicesV1Data.find(service => service.id === "content-personalization-and-predictive-Analysis");
   
    return (
        <>
            <Helmet>
                <title>Content Personalization And Predictive Analysis | Quirktix</title>
                <meta name="description" content="Quirktix leverages AI in marketing automation, business intelligence, and small business marketing. Explore AI tools and machine learning to boost efficiency."></meta>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Content Personalization And Predictive Analysis' breadCrumb='Content Personalization And Predictive Analysis' LightMode={false} />
                {data &&  <ContentPapa serviceInfo={data}  sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default CPAPA;