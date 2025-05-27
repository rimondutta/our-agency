import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV3 from "../../components/services/ServicesV3";
import MostPopularServices from "../../components/services/MostPopularServices";
import banner6 from "/assets/img/services/vaishnavi-pic-2.png"
const Services3Page = () => {
  return (
    <>
      <Helmet>
        <title>Services | Quirktix</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Our Services" breadCrumb="Services" />
        <div className="container">
          <div className="row ">
            <div className="col-xl-12">
              <div className="service-single-thumb">
                <img src={banner6} alt="Thumb" />
              </div>
            </div>
          </div>
        </div>
        <ServicesV3 sectionClass="default-padding bg-gray" />
        <div className="container">
          <MostPopularServices />
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Services3Page;
