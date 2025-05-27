import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";


interface DataType {
  title?: string;
  createdAt?: string;
  thumbnail: string;
  _id: string;
}

const SingleBlog2Item = ({ blog }: { blog: DataType }) => {
  const { title, createdAt, thumbnail, _id } = blog;
  const [loading, setLoading] = useState(false);
  const {authUser}=useAuthContext();

  const handleDelete = async (id:string) => {
    const opinion=confirm("Do you want to delete item")
    if(!opinion)
    return  

    try {

      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/deleteblog`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: authUser || "",
          },
          body: JSON.stringify({ id }),
        }
      );
      const data = await res.json();
      if (!data?.success) throw new Error(data?.message);
    } catch (err: any) {
      console.log(err)
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

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
                <li>{createdAt?.substring(0, 10)}</li>
              </ul>
            </div>
            <h2 className="post-title">
              <Link to={`/blog/${_id}`}>{title}</Link>
            </h2>
            <Link to={`/admin/editblog/${_id}`}>
              <button>Edit</button>
            </Link>
            <button
              disabled={loading}
              onClick={() => handleDelete(_id)}
              style={{ marginLeft: "20px" }}
              className=""
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog2Item;
