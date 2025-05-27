import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import LayoutV1 from "../../components/layouts/LayoutV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    password: "",
  });
  const navigate=useNavigate();
  
  const {setAuthUser}=useAuthContext();

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data?.success) {
        localStorage.setItem("user",data?.token);
        setAuthUser(localStorage.getItem("user")||null) ;
        setFormData({
          password: "",
        });
        toast.success("Logged in Successfully");
        navigate("/admin/blogs")
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
        <title>Login | Quirktix</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Login" breadCrumb="Login" LightMode={false} />
        <form onSubmit={handleSubmit}>
          <div style={{ width: "60%", margin: "auto" }} className="container">
            <div className="mb-4">
              <label className="form-label text-white">Password</label>
              <input
                name="password"
                placeholder="Enter Password"
                className="form-control bg-dark text-white"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className=""
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
          </div>
        </form>

        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default AdminLogin;
