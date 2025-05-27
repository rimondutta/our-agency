import { Link } from "react-router-dom";

interface DataType {
    title?: string;
    createdAt?:string;
    thumbnail:string,
    _id:string,
}

const SingleBlog2Item = ({ blog }: { blog: DataType }) => {
    const { title,createdAt,thumbnail,_id } = blog

    return (
        <>
            <div className="home-blog-style-one">
                <div className="thumb">
                    <Link to={`/blog/${_id}`}>
                        <img src={thumbnail} width={800} height={600} alt="Thumb" />
                    </Link>
                    <div className="info">
                        <div className="meta">
                            <ul>
                                <li>{createdAt?.substring(0,10)}</li>
                            </ul>
                        </div>
                        <h2 className="post-title">
                            <Link to={`/blog/${_id}`}>{title}</Link>
                        </h2>
                        <Link to={`/blog/${_id}`} className="button-regular">
                            Continue Reading
                            <i className="fas fa-long-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog2Item;