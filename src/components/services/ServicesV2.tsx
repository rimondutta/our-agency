"use client";

import SplitText from '../animation/SplitText'
import SingleServiceV2 from "./SingleServiceV2";
import { useServices } from "@/hooks/useServices";
import Preloader from "../utilities/Preloader";

interface DataType {
    sectionClass?: string;
    hasTitle?: boolean;
}

const ServicesV2 = ({ sectionClass, hasTitle }: DataType) => {
    const { services, loading, error } = useServices();

    if (loading) return <div className="text-center py-5"><Preloader /></div>;
    if (error) return <div className="text-center py-5 text-danger">{error}</div>;

    return (
        <>
            <div id="services" className={`services-style-two-area overflow-hidden ${sectionClass ? sectionClass : ""}`}>
                {/* Section Title */}
                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Services We Offer</h4>
                                    <h2 className="title">
                                        <SplitText
                                            delay={80}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Turn Information
                                        </SplitText>
                                    </h2>
                                    <h2 className="title">
                                        <SplitText
                                            delay={80}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Into Actionable Insights
                                        </SplitText>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-hover-items">
                                <ul>
                                    {services.map((service, index) =>
                                        <SingleServiceV2 service={service} index={index} key={service._id} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV2;