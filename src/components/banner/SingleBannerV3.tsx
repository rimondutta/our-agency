import { Link } from "react-router-dom";

interface DataType {
  id?: number;
  thumb?: string;
  tag?: string;
  title?: string;
  date?: string;
}

const SingleBannerV3 = ({ banner }: { banner: DataType }) => {
  const { id, title, thumb } = banner;
  

  return (
    <>
      {/* <div className="banner-style-three">
                <Link to="#" className="cursor-target" data-bs-toggle="modal" data-bs-target={`#${id}`}>
                    <div className="thumb">
                        <div className="bnner">
                            <img src={`/assets/img/portfolio/${thumb}`} alt="Image Not Found" width={1050} height={700} />
                        </div>
                    </div>
                    <div className="content">
                        <div className="content-info">
                            <span>{tag}</span>
                            <h2>{title}</h2>
                            <div className="date">{date}</div>
                        </div>
                    </div>
                </Link>
            </div> */}
      <div className="banner-style-three" style={{ width: "100%" }}>
        <Link
          to="#"
          className="cursor-target"
          data-bs-toggle="modal"
          data-bs-target={`#${id}`}
        >
          <div className="thumb">
            <div className="bnner">
              <img
                src={thumb}
                alt="Image Not Found"
                width={1050}
                height={700}
              />
            </div>
          </div>
          <div className="content">
            <div className="content-info">
              {/* <span>{tag}</span> */}
              <h2 style={{ marginTop: "10px" }}>{title}</h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleBannerV3;
