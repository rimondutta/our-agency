import { Link } from "react-router-dom";
import { ServiceData } from "@/hooks/useServices";

const SingleServiceV3 = ({ service, index }: { service: ServiceData; index: number }) => {
    const { icon, title, shortDescription, slug } = service;

    // Format number like "01", "02", etc.
    const number = String(index + 1).padStart(2, "0");

    return (
        <>
            <div className="service-three-content">
                <div className="top">
                    <div className="icon">
                        {icon && (
                            icon.startsWith("http") || icon.startsWith("/")
                                ? <img src={icon} alt="Image Not Found" width={130} height={130} />
                                : <img src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={130} height={130} />
                        )}
                    </div>
                </div>
                <div className="info">
                    <h4><Link to={`/service/${slug}`}>{title} </Link></h4>
                    <p>{shortDescription}</p>
                </div>
                <div className="bottom">
                    {number}
                </div>
            </div>
        </>
    );
};

export default SingleServiceV3;