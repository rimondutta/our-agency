import { Link } from "react-router-dom";
import MostPopularServiceData from "../../assets/jsonData/services/MostPopularServices.json";
const MostPopularServices = () => {
  return (
    <div className="services-more mb-60 mt-100 mt-xs-30">
      <h2 className="mb-20">Most popular services</h2>
      <div className="row">
        {MostPopularServiceData.map((item, idx) => {
          return (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="item">
                <img
                  src={item?.imgsrc}
                  alt="Image Not Found"
                  width={75}
                  height={60}
                />
                <h4>
                  <Link to={`#`}>{item?.name}</Link>
                </h4>
                <p>{item?.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MostPopularServices;
