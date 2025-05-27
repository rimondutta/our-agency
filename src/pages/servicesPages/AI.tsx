import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";
import AIContent from "../../components/services/AIContent";

const AI = () => {

    const data = ServicesV1Data.find(service => service.id === "artificial-intelligence");
   
    return (
        <>
            <Helmet>
                <title>AI for Business Automation & Marketing Strategy | Quirktix</title>
                <meta name="description" content="Quirktix leverages AI in marketing automation, business intelligence, and small business marketing. Explore AI tools and machine learning to boost efficiency."></meta>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Artificial Intelligence' breadCrumb='Artificial Intelligence' LightMode={false} />
                {data &&  <AIContent serviceInfo={data}  sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default AI;