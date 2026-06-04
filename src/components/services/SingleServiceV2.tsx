import { Link } from "react-router-dom";
import useHoverEffects from "../../hooks/useHoverEffects";
import { ServiceData } from "@/hooks/useServices";

const SingleServiceV2 = ({ service, index }: { service: ServiceData; index: number }) => {
    const { slug, icon, title, shortDescription, features, coverImage } = service;

    const { activeIndex, hoveredIndex, handleMouseEnter, handleMouseLeave, handleMouseMove, handleMouseLeaveWrapper } = useHoverEffects();

    return (
        <li
            className={`hover-active-item ${activeIndex === hoveredIndex ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                to={`/service/${slug}`}
                className="service-hover-item"
                onMouseMove={(e: React.MouseEvent<HTMLAnchorElement>) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeaveWrapper(index)}
            >
                <div className="service-hover-content">
                    <div className="left">
                        <div className="icon">
                            {icon && (
                                icon.startsWith("http") || icon.startsWith("/") 
                                    ? <img src={icon} alt="Icon" width={145} height={160} />
                                    : <img src={`/assets/img/icon/${icon}`} alt="Icon" width={145} height={160} />
                            )}
                        </div>
                        <div className="item-title">
                            <span>{`0${index + 1}`}</span>
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <div className="details">
                        <p>{shortDescription}</p>
                        {features && features.length > 0 && (
                            <ul className="list-style-five">
                                {features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="arrow">
                        <strong className="btn-arrow-xl">
                            <i className="fas fa-long-arrow-right" />
                        </strong>
                    </div>
                </div>

                {coverImage && (
                    <div className={`service-hover-wrapper service-hover-wrapper-${index}`}
                        style={{ opacity: 0, position: "absolute", transition: "opacity 0.3s" }}>
                        <img
                            className="service-hover-placeholder"
                            src={coverImage.startsWith("http") || coverImage.startsWith("/") ? coverImage : `/assets/img/illustration/${coverImage}`}
                            width={450}
                            height={450}
                            alt="Image Not Found"
                        />
                    </div>
                )}
            </Link>
        </li>
    );
};

export default SingleServiceV2;
