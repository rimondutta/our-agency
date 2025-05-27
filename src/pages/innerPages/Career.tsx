import LayoutV1 from "../../components/layouts/LayoutV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

import DarkClass from "../../components/classes/DarkClass";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { toast } from "react-toastify";

type FormDataType = {
  file: File | null;
  name: string;
  email: string;
  position: string;
};

const Career = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    position: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    
    e.preventDefault();
    const tempData = new FormData();
    tempData.append("name", formData.name);
    tempData.append("email", formData.email);
    tempData.append("position", formData.position);
    if (formData.file) {
      tempData.append("file", formData.file);
    }

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/sendcareer`,
        {
          method: "POST",
          headers: {
            "Accept-Type": "application/json",
          },
          body: tempData,
        }
      );

      const data = await response.json();

      if (data?.success) {
        setFormData({
          name: "",
          email: "",
          position: "",
          file: null,
        });
        toast.success("Form Saved Successfully");
      } else throw new Error(data?.message);
    } catch (err: any) {
      toast.warn(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers | Quirktix</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Careers" breadCrumb="Careers" />
        <div style={{ padding: "10px 20px" }} className="container">
          <div
            style={{ paddingBottom: "20px", paddingTop: "40px" }}
            className="mt-5"
          >
            <div className="card shadow bg-dark text-white">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "5%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Left Side (Image) - Hidden on small screens, visible on medium and up */}
                <div
                  style={{
                    minHeight: "550px",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50%",
                  }}
                  className="careerformimage"
                >
                  <img
                    src="/assets/img/services/dev.jpg"
                    alt="Business professional"
                    style={{ minHeight: "650px" }}
                    className="w-100 object-fit-cover"
                  />
                </div>

                {/* Form Content */}
                <div className="careerform p-4">
                  <h2 className="fw-bold  fs-3 text-center fs-md-2 text-white">
                    Join Our Team
                  </h2>

                  <form
                    className=""
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-4">
                      <label className="form-label text-white">Name</label>
                      <input
                        name="name"
                        placeholder="Enter Name"
                        className="form-control bg-dark  text-white"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-white">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="form-control bg-dark text-white"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-white">
                        Applying For
                      </label>
                      <input
                        type="string"
                        name="position"
                        placeholder="Enter position"
                        className="form-control bg-dark text-white"
                        value={formData.position}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="form-label text-white"
                        htmlFor="fileUpload"
                      >
                        Upload Resume
                      </label>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: "#212529",
                          borderRadius: "6px",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          padding: "8px 12px",
                          transition: "border-color 0.2s ease",
                        }}
                        className="form-control"
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(255, 255, 255, 0.4)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(255, 255, 255, 0.2)")
                        }
                      >
                        <label
                          htmlFor="fileUpload"
                          style={{
                            backgroundColor: "#c9f21d",
                            color: "black",
                            padding: "6px 12px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontWeight: "500",
                            fontSize: "0.9rem",
                            marginRight: "12px",
                            transition: "background-color 0.2s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#c9f21d")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "#c9f21d")
                          }
                        >
                          Choose File
                        </label>
                        <input
                          type="file"
                          name="file"
                          id="fileUpload"
                          style={{ display: "none" }}
                          onChange={handleChange}
                        />
                        <span
                          style={{
                            color: formData.file
                              ? "white"
                              : "rgba(255, 255, 255, 0.5)",
                            fontSize: "0.9rem",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {formData.file
                            ? formData.file.name
                            : "No file chosen"}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn mx-auto btn-outline-success fw-bold px-3 py-2"
                        style={{
                          color: "black",
                          borderColor: "white",
                        }}
                      >
                        {loading ? "Loading" : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Career;
