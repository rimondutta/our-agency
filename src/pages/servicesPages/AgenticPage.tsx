import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";
import AgenticContent from "../../components/services/AgenticContent";

const AgenticPage = () => {

    const data = ServicesV1Data.find(service => service.id === "agentic-process-automation");
   
    return (
        <>
            <Helmet>
                <title>Agentic Process Automation | Quirktix</title>
                <meta name="description" content="Quirktix leverages AI in marketing automation, business intelligence, and small business marketing. Explore AI tools and machine learning to boost efficiency."></meta>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Agentic Process Automation' breadCrumb='Agentic Process Automation' LightMode={false} />
                {data &&  <AgenticContent serviceInfo={data}  sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default AgenticPage;