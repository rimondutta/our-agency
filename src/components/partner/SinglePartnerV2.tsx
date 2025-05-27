interface DataType {
    id?: number;
    category?: string;
    thumb?: string;
    website?: string;
}

const SinglePartnerV2 = ({ partner }: { partner: DataType }) => {
    const { thumb } = partner

    return (
        <>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="partner-two-item">
                <img src={`/assets/img/brand/${thumb}`} alt="Image Not Found" width={350} height={100}  />
            </div>
        </>
    );
};

export default SinglePartnerV2;