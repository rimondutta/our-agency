import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import PreviewBlog from "../../pages/blogPages/PreviewBlog";
import { useAuthContext } from "../../context/AuthContext";

const CLOUDINARY_UPLOAD_PRESET = "Quill Image";
const CLOUDINARY_CLOUD_NAME = "dteglgu3w";

interface QuillToolbar {
  addHandler(eventName: string, handler: (...args: any[]) => void): void;
}

interface FormData {
  title: string;
  metaDescription: string;
  scriptTags: string[];
  thumbnail: string;
}

const EditBlog = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLInputElement | null>(null);
  const quillRef = useRef<Quill | null>(null);
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(false);
  const { authUser } = useAuthContext();
    const { id } = useParams();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    metaDescription: "",
    scriptTags: [],
    thumbnail: "",
  });

  const resizeRef = useRef<{
    img: HTMLImageElement | null;
    handles: HTMLElement[];
  }>({ img: null, handles: [] });

  // Fetch blog content from API
  const fetchBlog = async () => {
    
    if (!id) return;
    
    console.log(authUser);

    try {

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/getblogdetails/${id}`,
        {
          method: "GET",
          headers : {
            "Content-Type" : "application/json",
            Authorization : authUser ? authUser:""
          }
        }
      );

      const data = await response.json();
      console.log(data);

      if (quillRef.current) {
        quillRef.current.clipboard.dangerouslyPasteHTML(data.blog.content);
        setContent(data.blog.content);
      }

      setFormData({
        title: data.blog.title,
        metaDescription: data.blog.metaDescription,
        scriptTags: data.blog.scripts,
        thumbnail: data.blog.thumbnail,
      });

    } catch (error) {
      console.error("Failed to fetch blog:", error);
      alert("Could not load blog content.");
    }
  };

  // Initialize Quill editor and custom resize logic
  useEffect(() => {
    if (!editorRef.current || quillRef.current) return;

    const quill = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
        toolbar: {
          container: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike"],
            [{ script: "sub" }, { script: "super" }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }],
            ["blockquote", "code-block"],
            ["link", "image"],
            ["clean"],
          ],
        },
      },
      formats: [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "script",
        "color",
        "background",
        "align",
        "direction",
        "list",
        "indent",
        "blockquote",
        "code-block",
        "link",
        "image",
      ],
    });

    // Image upload handler
    const imageHandler = () => {
      console.log("Hii");
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        try {
          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );
          const data = await res.json();

          const range = quill.getSelection() || {
            index: quill.getLength(),
            length: 0,
          };
          quill.insertEmbed(range.index, "image", data.secure_url);
          quill.setSelection(range.index + 1);
        } catch (error) {
          console.error("Image upload failed:", error);
          alert("Failed to upload image.");
        }
      };
    };

    // Handle image click
    const handleImageClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "IMG") {
        const img = target as HTMLImageElement;
        // Alt text editing
        const currentAlt = img.getAttribute("alt") || "";
        const newAlt = prompt("Edit alt text for the image:", currentAlt);
        if (newAlt !== null) {
          img.setAttribute("alt", newAlt);
          setContent(quill.root.innerHTML);
        }
        // Initialize resize
        initImageResize(img);
      }
    };

    const initImageResize = (img: HTMLImageElement) => {
      // Remove existing handles
      resizeRef.current.handles.forEach((handle) => handle.remove());
      resizeRef.current.handles = [];

      // Ensure image has explicit dimensions
      if (!img.getAttribute("width"))
        img.setAttribute("width", `${img.naturalWidth}`);
      if (!img.getAttribute("height"))
        img.setAttribute("height", `${img.naturalHeight}`);

      const createHandle = (
        position: "bottom-right" | "right-center" | "bottom-center"
      ) => {
        const handle = document.createElement("div");
        handle.className = `resize-handle ${position}`;
        Object.assign(handle.style, {
          position: "absolute",
          width: "12px",
          height: "12px",
          background: "#007bff",
          border: "1px solid #fff",
          borderRadius: "50%",
          cursor:
            position === "bottom-right"
              ? "se-resize"
              : position === "right-center"
              ? "e-resize"
              : "s-resize",
          zIndex: "10000",
        });
        document.body.appendChild(handle);
        return handle;
      };

      const bottomRightHandle = createHandle("bottom-right");
      const rightCenterHandle = createHandle("right-center");
      const bottomCenterHandle = createHandle("bottom-center");

      resizeRef.current.handles = [
        bottomRightHandle,
        rightCenterHandle,
        bottomCenterHandle,
      ];

      const updateHandlePosition = () => {
        const rect = img.getBoundingClientRect();
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        bottomRightHandle.style.left = `${rect.right + scrollX - 6}px`;
        bottomRightHandle.style.top = `${rect.bottom + scrollY - 6}px`;

        rightCenterHandle.style.left = `${rect.right + scrollX - 6}px`;
        rightCenterHandle.style.top = `${
          rect.top + scrollY + rect.height / 2 - 6
        }px`;

        bottomCenterHandle.style.left = `${
          rect.left + scrollX + rect.width / 2 - 6
        }px`;
        bottomCenterHandle.style.top = `${rect.bottom + scrollY - 6}px`;
      };

      updateHandlePosition();

      // Resize both width and height (maintain aspect ratio)
      const startProportionalResize = (e: MouseEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = img.offsetWidth;
        const startHeight = img.offsetHeight;
        const aspectRatio = startWidth / startHeight;

        const onMouseMove = (moveEvent: MouseEvent) => {
          let newWidth = startWidth + (moveEvent.clientX - startX);
          let newHeight = newWidth / aspectRatio;

          newWidth = Math.max(newWidth, 50);
          newHeight = Math.max(newHeight, 50);

          img.style.width = `${newWidth}px`;
          img.style.height = `${newHeight}px`;
          img.setAttribute("width", `${Math.round(newWidth)}`);
          img.setAttribute("height", `${Math.round(newHeight)}`);

          updateHandlePosition();
          setContent(quillRef.current!.root.innerHTML);
        };

        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      };

      // Resize width only
      const startWidthResize = (e: MouseEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = img.offsetWidth;

        const onMouseMove = (moveEvent: MouseEvent) => {
          let newWidth = startWidth + (moveEvent.clientX - startX);
          newWidth = Math.max(newWidth, 50);

          img.style.width = `${newWidth}px`;
          img.setAttribute("width", `${Math.round(newWidth)}`);

          updateHandlePosition();
          setContent(quillRef.current!.root.innerHTML);
        };

        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      };

      // Resize height only
      const startHeightResize = (e: MouseEvent) => {
        e.preventDefault();
        const startY = e.clientY;
        const startHeight = img.offsetHeight;

        const onMouseMove = (moveEvent: MouseEvent) => {
          let newHeight = startHeight + (moveEvent.clientY - startY);
          newHeight = Math.max(newHeight, 50);

          img.style.height = `${newHeight}px`;
          img.setAttribute("height", `${Math.round(newHeight)}`);

          updateHandlePosition();
          setContent(quillRef.current!.root.innerHTML);
        };

        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      };

      bottomRightHandle.addEventListener("mousedown", startProportionalResize);
      rightCenterHandle.addEventListener("mousedown", startWidthResize);
      bottomCenterHandle.addEventListener("mousedown", startHeightResize);

      // Remove handles if user clicks elsewhere
      const removeHandles = (e: MouseEvent) => {
        const target = e.target as Node;
        if (
          !img.contains(target) &&
          !bottomRightHandle.contains(target) &&
          !rightCenterHandle.contains(target) &&
          !bottomCenterHandle.contains(target)
        ) {
          bottomRightHandle.remove();
          rightCenterHandle.remove();
          bottomCenterHandle.remove();
          resizeRef.current.handles = [];
          document.removeEventListener("click", removeHandles);
        }
      };

      document.addEventListener("click", removeHandles);
      window.addEventListener("scroll", updateHandlePosition);
    };

    const toolbar = quill.getModule("toolbar") as unknown as QuillToolbar;
    toolbar.addHandler("image", imageHandler);

    quill.root.addEventListener("click", handleImageClick);

    quill.on("text-change", () => {
      setContent(quill.root.innerHTML);
    });

    quillRef.current = quill;
   
    fetchBlog();

    // Cleanup
    return () => {
      quill.root.removeEventListener("click", handleImageClick);
      resizeRef.current.handles.forEach((handle) => handle.remove());
    };
  }, []);
  
    useEffect(() => {
    if (id) fetchBlog();
  }, [id]);

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index?: number
  ) => {
    const { name, value } = e.target;
    if (name === "scriptTags" && index !== undefined) {
      // Update specific script tag
      const updatedScriptTags = [...formData.scriptTags];
      updatedScriptTags[index] = value;
      setFormData({ ...formData, scriptTags: updatedScriptTags });
    } else {
      // Update title or metaDescription
      setFormData({ ...formData, [name]: value });
    }
  };

  // Add a new script tag field
  const addScriptTag = () => {
    setFormData({ ...formData, scriptTags: [...formData.scriptTags, ""] });
  };

  // Remove a script tag field
  const removeScriptTag = (index: number) => {
    const updatedScriptTags = formData.scriptTags.filter((_, i) => i !== index);
    setFormData({ ...formData, scriptTags: updatedScriptTags });
  };

  const uploadthumbnail = async () => {
    const inputEl = thumbRef.current;

    if (!inputEl || !inputEl.files || inputEl.files.length === 0) {
      alert("Please select an image first");
      return;
    }

    const file = inputEl.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // replace with your actual unsigned preset

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      setFormData((formData) => ({ ...formData, thumbnail: data.secure_url }));

      alert("Upload successful!");
    } catch (error) {
      console.error(error);
      alert("Upload failed!");
    }
  };

  const handleSave = async () => {
    if (!id) return;
    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/editblogdetails`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json",Authorization:authUser||"" },
          body: JSON.stringify({ content, formData, id }),
        }
      );
      const data = await res.json();
      if (!data?.success) throw new Error(data?.message);
    } catch (err: any) {
      alert(err.message);
    }finally{
      setLoading(false)
    }
  };

  return (
    <>
      <div className={`d-${!preview ? "block" : "none"}`}>
        <div>
          <h2 className="text-center">Edit Blog</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: 10,
            }}
          >
            <button onClick={() => setPreview(true)}>Preview</button>
            {loading ? (
              <button onClick={handleSave}>Loading</button>
            ) : (
              <button onClick={handleSave}>Save</button>
            )}
          </div>
        </div>

        <div
          ref={editorRef}
          style={{
            background: "#fff",
            minHeight: "300px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <div style={{ width: "80%", margin: "auto" }}>
          <form>
            <div className="mt-4 mb-4">
              <label htmlFor="">Upload Thumnail</label>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <input
                  ref={thumbRef}
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  style={{
                    width: "60%",
                    border: "1px solid black",
                    padding: "10px 10px",
                    borderRadius: "10px",
                  }}
                />
                <button
                  type="button"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "10px",
                  }}
                  onClick={uploadthumbnail}
                >
                  Upload
                </button>
              </div>
              {formData?.thumbnail ? (
                <a href={formData?.thumbnail}>Image</a>
              ) : (
                ""
              )}
            </div>

            <div className="mb-4">
              <label className="form-label">Blog Title</label>
              <input
                name="title"
                placeholder="Enter Blog Title"
                className=""
                style={{
                  width: "100%",
                  border: "1px solid black",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Meta Description</label>
              <textarea
                name="metaDescription"
                placeholder="Enter Meta Description (150-160 characters)"
                className=""
                style={{
                  height: "100px",
                  width: "100%",
                  border: "1px solid black",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
                value={formData.metaDescription}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Script Tags</label>
              {formData.scriptTags.map((script, index) => (
                <div
                  key={index}
                  className="mb-3 d-flex align-items-start gap-2"
                >
                  <textarea
                    name="scriptTags"
                    placeholder="Enter Script Tag (e.g., <script>...</script>)"
                    className=""
                    style={{
                      height: "80px",
                      width: "100%",
                      border: "1px solid black",
                      flex: "1",
                      padding: "10px 10px",
                    }}
                    value={script}
                    onChange={(e) => handleChange(e, index)}
                  />
                  {formData.scriptTags.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-sm"
                      style={{
                        height: "80px",
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "10px",
                      }}
                      onClick={() => removeScriptTag(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="btn btn-sm"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                }}
                onClick={addScriptTag}
              >
                Add Script Tag
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`d-${preview ? "block" : "none"}`}>
        {preview ? (
          <PreviewBlog content={content} setPreview={setPreview} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default EditBlog;
