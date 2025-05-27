import { Link } from "react-router-dom";

interface DataType {
    title?: string;
    breadCrumb?: string;
    LightMode?: boolean
}

const Breadcrumb = ({ title, breadCrumb, LightMode }: DataType) => {
    return (
        <>   
            <div className={`breadcrumb-area text-center ${LightMode ? "bg-gray" : "bg-dark"}`}
                style={{ backgroundImage: `url(/assets/img/shape/${LightMode ? "6.jpg" : "10.jpg"})` }}>
                <div className="container">
                    <div className="breadcrumb-item">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 style={{fontSize: '60px'}}>{title ? title : "not found"}</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li><Link to="/"><i className="fas fa-home" /> Home</Link></li>
                                        <li className="active">{breadCrumb ? breadCrumb : "error"}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;