import { ServiceData } from "@/hooks/useServices";

interface ServiceDetailsProps {
    serviceInfo?: ServiceData;
    sectionClass?: string;
}

const ServiceDetailsContent = ({ serviceInfo, sectionClass }: ServiceDetailsProps) => {
    if (!serviceInfo) return null;

    const { title, fullDescription, features, coverImage } = serviceInfo;

    return (
        <>
            <div className={`services-details-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="service-single-thumb">
                                    <img 
                                        src={coverImage || "/assets/img/banner/6.jpg"} 
                                        alt={title} 
                                        style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-7">
                                <h2>{title}</h2>
                                <p style={{ whiteSpace: "pre-line" }}>
                                    {fullDescription}
                                </p>
                            </div>
                            <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                <h3>What We Offer:</h3>
                                {features && features.length > 0 ? (
                                    <ul className="feature-list-item">
                                        {features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No specific features listed.</p>
                                )}
                            </div>
                        </div>

                        {serviceInfo.faqs && serviceInfo.faqs.length > 0 && (
                            <div className="d-grid colums-2 mt-50">
                                <div className="item">
                                    <div className="faq-style-one faq-style-two">
                                        <h2 className="mb-30">Any questions find here.</h2>
                                        <div className="accordion" id="faqAccordion">
                                            {serviceInfo.faqs.map((faq, index) => (
                                                <div className="accordion-item" key={index}>
                                                    <h2 className="accordion-header" id={`heading${index}`}>
                                                        <button 
                                                            className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} 
                                                            type="button" 
                                                            data-bs-toggle="collapse" 
                                                            data-bs-target={`#collapse${index}`} 
                                                            aria-expanded={index === 0 ? "true" : "false"} 
                                                            aria-controls={`collapse${index}`}
                                                        >
                                                            {faq.q}
                                                        </button>
                                                    </h2>
                                                    <div 
                                                        id={`collapse${index}`} 
                                                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                                                        aria-labelledby={`heading${index}`} 
                                                        data-bs-parent="#faqAccordion"
                                                    >
                                                        <div className="accordion-body">
                                                            <p>{faq.a}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <h2>Need more help?</h2>
                                    <p>
                                        If you have any other questions regarding our services, feel free to contact our support team. We're always here to assist you and ensure your success.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;