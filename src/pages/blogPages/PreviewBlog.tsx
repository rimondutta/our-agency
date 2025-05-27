import LayoutV1 from "../../components/layouts/LayoutV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";

import PreviewContent from "../../components/blog/PreviewContent";

interface PreviewBlogContent {
  content?: string;
  setPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreviewBlog = ({
  content,
  setPreview,
}: PreviewBlogContent) => {

  return (
    <>
      <LayoutV1>
        <Breadcrumb title="Blog Single" breadCrumb="blog-single" />
        {
          <PreviewContent
            sectionClass="default-padding-bottom"
            content={content}
            setPreview={setPreview}
          />
        }
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default PreviewBlog;
