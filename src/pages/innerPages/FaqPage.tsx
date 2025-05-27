import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import Faq from "../../components/faq/faq";

const FaqPage = () => {
    return (
        <>
            <Helmet>
                <title>Faqs | Quirktix</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Frequently Asked Questions' breadCrumb='Faqs' />
                <Faq/>
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default FaqPage;