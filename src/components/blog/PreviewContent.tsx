
import Animate from "../animation/Animate";



interface BlogSingleProps {
  content?: string;
  sectionClass?: string;
  setPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreviewContent = ({
  content,
  sectionClass,
  setPreview,
}: BlogSingleProps) => {

  return (
    <>
      <div
        className={`blog-area single full-blog full-blog ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="container">
           <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"40px"}}>
            <button onClick={()=>setPreview(false)}>BACK</button>
            </div> 
          <div className="blog-items">
            <div className="row">
              <Animate className="animate__animated animate__fadeInUp">
                <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                  {content ? (
                    <div
                      className="blog-content-html ql-editor"
                      dangerouslySetInnerHTML={{ __html:content }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </Animate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewContent;
