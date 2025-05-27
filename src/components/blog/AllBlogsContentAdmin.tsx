// import BlogV3Data from "../../assets/jsonData/blog/BlogV3Data.json";

import { useEffect, useState } from "react";
// import Pagination from "react-paginate";
import { Link,  } from "react-router-dom";
import SingleBlog2ItemAdmin from "./SingleBlog2ItemAdmin";

interface DataType {
  sectionClass?: string;
}

const AllBlogPagesContentAdmin = ({ sectionClass }: DataType) => {


  const [blogs, setBlogs] = useState([]);
  
  const getAllBlogs = async () => {
    try {

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/getallblogs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (!data?.success) throw new Error(data?.message);
      setBlogs(data?.blogs);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  // Pagination

  // const navigate = useNavigate();
  // const { page } = useParams<{ page?: string }>();

  // // Set initial page from URL
  // const currentPageNumber = Number(page) || 1;
  // const [currentPage, setCurrentPage] = useState(currentPageNumber);
  // const [itemsPerPage] = useState(4);

  // useEffect(() => {
  //   setCurrentPage(currentPageNumber);
  // }, [currentPageNumber]);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentBlogData = BlogV3Data.slice(startIndex, endIndex);

  // const handlePageClick = (data: any) => {
  //   const selectedPage = data.selected + 1;
  //   setCurrentPage(selectedPage);

  //   // Update the URL dynamically
  //   navigate(`/blogs?page=${selectedPage}`);

  //   setTimeout(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, 200);
  // };

  // const totalPages = Math.ceil(BlogV3Data.length / itemsPerPage);

  return (
    <>
      <div
        className={`blog-area blog-grid-colum ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="container">
          <div className="row">
            {blogs.map((blog, idx) => (
              <div className="col-lg-6 mb-50" key={idx}>
                <SingleBlog2ItemAdmin blog={blog} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {/* <div className="row">
            <div className="col-md-12 pagi-area text-center">
              <Pagination
                previousLabel={
                  currentPage === 1 ? (
                    <i className="fas fa-ban"></i>
                  ) : (
                    <i className="fas fa-angle-double-left"></i>
                  )
                }
                nextLabel={
                  currentPage === totalPages ? (
                    <i className="fas fa-ban"></i>
                  ) : (
                    <i className="fas fa-angle-double-right"></i>
                  )
                }
                breakLabel={"..."}
                pageCount={Math.ceil(BlogV3Data.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination text-center"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
              />
            </div>
          </div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Link to="/admin/addblog">
              
              <button>Add Blog</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlogPagesContentAdmin;
