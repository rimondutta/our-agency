import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";
import CLLMContent from "../../components/services/CLLMContent";

const CLLMPAGE = () => {

    const data = ServicesV1Data.find(service => service.id === "custom-llm-and-fine-tuning");
   
    return (
        <>
            <Helmet>
                <title>Custom LLM and Fine Tuning | Market Growth Experts</title>
                <meta name="description" content="Market Growth Experts leverages AI in marketing automation, business intelligence, and small business marketing. Explore AI tools and machine learning to boost efficiency."></meta>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Custom LLM and Fine Tuning' breadCrumb='Custom LLM and Fine Tuning' LightMode={false} />
                {data &&  <CLLMContent serviceInfo={data}  sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default CLLMPAGE;