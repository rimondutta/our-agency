"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/admin/dashboard";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
        callbackUrl,
      });

      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success("Login successful");
        router.push(callbackUrl);
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Market Growth Experts</title>
      </Helmet>

      <div className="admin-login-wrapper">
        {/* Animated Ambient background lights */}
        <div className="admin-login-bg-glow"></div>
        <div className="admin-login-bg-glow second"></div>

        <div className="admin-login-card">
          <div className="admin-login-logo-wrapper">
            <img 
              src="/assets/img/logo-light.png" 
              className="admin-login-logo" 
              alt="Market Growth Experts Logo" 
            />
          </div>

          <div className="admin-login-header">
            <h2>Welcome Back</h2>
            <p>Administrator Login Portal</p>
          </div>

          <form onSubmit={handleSubmit} className="admin-login-form">
            <div className="admin-form-group">
              <div className="input-icon-wrapper">
                <input
                  type="email"
                  className="admin-form-control"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <i className="fas fa-envelope input-icon"></i>
              </div>
            </div>
            
            <div className="admin-form-group">
              <div className="input-icon-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="admin-form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <i className="fas fa-lock input-icon"></i>
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                </button>
              </div>
            </div>

            <button type="submit" className="admin-login-btn" disabled={loading}>
              {loading ? (
                <span><i className="fas fa-circle-notch fa-spin mr-2"></i> Authenticating...</span>
              ) : (
                "Sign In to Dashboard"
              )}
            </button>
          </form>

          <a href="/" className="back-to-site-link">
            <i className="fas fa-arrow-left"></i> Back to Website
          </a>
        </div>
      </div>
    </>
  );
}
