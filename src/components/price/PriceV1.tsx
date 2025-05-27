import SplitText from "../animation/SplitText.jsx";
import PriceV1Data from "../../assets/jsonData/price/PriceV1Data.json"
import SinglePriceV1 from "./SinglePriceV1.js";
import { useState } from "react";

interface DataType {
    sectionClass?: string
}

const PriceV1 = ({ sectionClass }: DataType) => {

    const [activeServiceId, setActiveServiceId] = useState(PriceV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`pricing-style-one-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Best Pricing</h4>
                                <h2 className="title split-text">
                                    <SplitText
                                        delay={40}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        The best pricing plans to get your best rate
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="pricing-items">
                        <div className="row">
                            {PriceV1Data.map(plan =>
                                <div
                                    className="col-xl-6"
                                    key={plan.id}
                                    onMouseEnter={() => handleMouseEnter(plan.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <SinglePriceV1 plan={plan} activeServiceId={activeServiceId} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;