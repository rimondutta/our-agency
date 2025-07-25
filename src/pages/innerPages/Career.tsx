import { useState } from "react";
import LayoutV1 from "../../components/layouts/LayoutV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import { Helmet } from "react-helmet-async";

const Career = () => {
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");

  return (
    <>
      <Helmet>
        <title>Careers | Market Growth Experts</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Careers" breadCrumb="Careers" />
        <div style={{ padding: "10px 20px" }} className="container">
          <div style={{ paddingBottom: "20px", paddingTop: "40px" }} className="mt-5">
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
                {/* Left Image */}
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

                {/* Form */}
                <div className="careerform p-4">
                  <h2 className="fw-bold fs-3 text-center fs-md-2 text-white">Join Our Team</h2>

                  <form
                    method="POST"
                    encType="multipart/form-data"
                    action="https://formsubmit.co/connect.rimondutta@gmail.com"
                  >
                    <input
                      type="hidden"
                      name="_next"
                      value="https://marketgrowthexperts.vercel.app/"
                    />
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="mb-4">
                      <label className="form-label text-white">Name</label>
                      <input
                        name="name"
                        placeholder="Enter Name"
                        className="form-control bg-dark text-white"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="form-control bg-dark text-white"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">Applying For</label>
                      <input
                        type="text"
                        name="position"
                        placeholder="Enter Position"
                        className="form-control bg-dark text-white"
                        required
                      />
                    </div>

                    {/* File Upload */}
                    <div className="mb-4">
                      <label className="form-label text-white" htmlFor="fileUpload">
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
                        }}
                        className="form-control"
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
                          }}
                        >
                          Choose File
                        </label>
                        <input
                          type="file"
                          name="attachment"
                          id="fileUpload"
                          style={{ display: "none" }}
                          onChange={(e) =>
                            setSelectedFileName(
                              e.target.files.length > 0 ? e.target.files[0].name : "No file chosen"
                            )
                          }
                          required
                        />
                        <span
                          style={{
                            color: "rgba(255, 255, 255, 0.5)",
                            fontSize: "0.9rem",
                          }}
                        >
                          {selectedFileName}
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-outline-success fw-bold px-3 py-2"
                        style={{ color: "black", borderColor: "white" }}
                      >
                        Submit
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
