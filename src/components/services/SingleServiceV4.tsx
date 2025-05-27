import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    titleFirst?: string;
    titleLast?: string;
    icon?: string;
    text?: string;
    number?: string;
}

const SingleServiceV4 = ({ service }: { service: DataType }) => {
    const { titleFirst, icon, text } = service;

    return (
        <>
            <div style={{minHeight:"400px"}} className="cteative-service-item">
                <div className="top">
                    <h4><Link to="">{titleFirst} </Link></h4>
                    <img src={`/assets/img/icon/${icon}`} alt="Icon" width={200} height={200} />
                </div>
                <p>{text}</p>
                {/* <span>{number}</span> */}
            </div>
        </>
    );
};

export default SingleServiceV4;