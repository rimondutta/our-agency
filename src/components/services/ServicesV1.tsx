import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json"
import SplitText from "../animation/SplitText.jsx"
import { Link } from "react-router-dom";
import { useState } from "react";

interface DataType {
    hasTitle?: boolean;
    sectionClass?: string;
    lightMode?: boolean
}

const ServicesV1 = ({ hasTitle, sectionClass, lightMode }: DataType) => {

    const [activeServiceId, setActiveServiceId] = useState(ServicesV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div style={{paddingBottom:"80px"}} className={`services-style-one-area ${sectionClass ? sectionClass : ""}`}>

                {/* Service Title */}
                {hasTitle &&
                    <div className="service-style-one-heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                                    <div className="site-heading">
                                        <h4 className="sub-title">Services We Excel In</h4>
                                        <h2 className="title split-text">
                                            <SplitText
                                                delay={40}
                                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                easing="easeOutCubic"
                                                threshold={0.2}
                                                rootMargin="-50px"
                                            >
                                                Turn Information Into Actionable Insights
                                            </SplitText>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="services-style-one-items">
                        <div className="row">
                            {ServicesV1Data.map((service) => (
                                <div
                                    
                                    className="col-xl-3 col-lg-6 col-md-6 single-item"
                                    key={service.id}
                                    onMouseEnter={() => handleMouseEnter(service.id)}
                                    onMouseLeave={handleMouseLeave}
                                    style={{position:"relative"}}
                                >
                                    <div style={{minHeight:"550px"}} className={`services-style-one-item ${activeServiceId === service.id ? 'active' : ''}`}>
                                        <div className="icon">
                                            {lightMode ?
                                                <img src={`/assets/img/${service.iconLight}`} alt="Image Not Found" width={75} height={60} /> :
                                                <img src={`/assets/img/${service.icon}`} alt="Image Not Found" width={75} height={60} />
                                            }
                                        </div>
                                        <h4 >
                                            <Link to={`#`}>{service.title}</Link>
                                        </h4>
                                        <p>{service.text}</p>
                                        <Link style={{position:"absolute",bottom:"40px",width:"70%"}} className="btn-full" to={`#`}>
                                            Read More <i className="fas fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;