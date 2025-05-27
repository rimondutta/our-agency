interface DataType {
  id?: number;
  serviceName?: string;
  img?:string
}

const ServiceList = ({ service }: { service: DataType }) => {
  const { serviceName, img } = service;

  return (
    <>
      {/* <div className="icon">
        <i className="fas fa-long-arrow-right" />
      </div> */}
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <img
          style={{ height: "100px",width:"120px" }}
          src={img}
          alt=""
        />
        <div>{serviceName}</div>
      </div>
    </>
  );
};

export default ServiceList;
