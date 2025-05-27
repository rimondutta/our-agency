import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1Data from "../../assets/jsonData/services/ServiceV1New.json";
import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";
import CToolContent from "../../components/services/CToolContent";

const CToolPage = () => {

    const data = ServicesV1Data.find(service => service.id === "custom-ai-tool-development");
   
    return (
        <>
            <Helmet>
                <title>Custom AI Tool Development | Quirktix</title>
                <meta name="description" content="Quirktix leverages AI in marketing automation, business intelligence, and small business marketing. Explore AI tools and machine learning to boost efficiency."></meta>
            </Helmet>
            
            <LayoutV1>
                <Breadcrumb title='Custom AI Tool Development' breadCrumb='Custom AI Tool Development' LightMode={false} />
                {data &&  <CToolContent serviceInfo={data}  sectionClass='default-padding' />}
                <DarkClass/>
            </LayoutV1>
        </>
    );
};

export default CToolPage