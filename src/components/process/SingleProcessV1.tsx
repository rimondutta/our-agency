interface DataType {
    title?: string;
    thumb?: string;
    text?: string;
}

const SingleProcessV1 = ({ process }: { process: DataType }) => {
    const { thumb, title, text } = process

    return (
        <>
            <div className="item">
                <div className="icon">
                    <img src={`/assets/img/icon/${thumb}`} alt="Icon" width={200} height={230} />
                </div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleProcessV1;