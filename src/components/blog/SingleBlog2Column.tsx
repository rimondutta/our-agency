import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumb?: string;
    title?: string;
    author?: string;
    date?: string;
}

const SingleBlog2Column = ({ blog }: { blog: DataType }) => {
    const { id, thumb, author, title, date } = blog

    return (
        <>
            <div className="home-blog-style-one">
                <div className="thumb">
                    <Link to={`/blog-single-with-sidebar/${id}`}>
                        <img src={`/assets/img/blog/${thumb}`} width={800} height={600} alt="Thumb" />
                    </Link>
                     <h2>{author}  {date}</h2>
                    
                    <div className="info">
                        <h2 className="post-title">
                            <Link to={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                        </h2>
                        <div style={{textAlign:"center"}}>1</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog2Column;