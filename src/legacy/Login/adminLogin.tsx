// @ts-nocheck
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LayoutV1 from "../../components/layouts/LayoutV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    password: "",
  });
  const navigate = useNavigate();
  
  const { setAuthUser } = useAuthContext();
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
      
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data?.success) {
        localStorage.setItem("user", JSON.stringify(data?.token));
        setAuthUser(data?.token);
        setFormData({
          password: "",
        });
        toast.success("Logged in Successfully");
        navigate("/admin/dashboard");
      } else throw new Error(data?.message || "Invalid password");
    } catch (err: any) {
      toast.warn(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Market Growth Experts</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Admin Login" breadCrumb="Admin Login" LightMode={false} />
        
        <div className="login-area default-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="login-form-box shadow-lg p-5 rounded" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                  <div className="form-title text-center mb-4">
                    <h2 className="text-white">Welcome Back</h2>
                    <p className="text-light">Please enter your administrator password to continue.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                      <label className="form-label text-white">Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="••••••••••••"
                        className="form-control"
                        style={{ padding: '15px', backgroundColor: '#0f172a', color: 'white', border: '1px solid #334155' }}
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="text-center mt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-theme effect btn-md w-100"
                        style={{ background: 'linear-gradient(to right, #38bdf8, #818cf8)', border: 'none', color: 'white', fontWeight: 'bold' }}
                      >
                        {loading ? (
                          <><i className="fas fa-circle-notch fa-spin me-2"></i> Authenticating...</>
                        ) : (
                          "Sign In to Dashboard"
                        )}
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

export default AdminLogin;
