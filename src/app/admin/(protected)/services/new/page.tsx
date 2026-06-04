"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import RoleGuard from "@/components/admin/RoleGuard";
import RichTextEditor from "@/components/admin/RichTextEditor";
import ImageUploader from "@/components/admin/ImageUploader";
import FAQManager from "@/components/admin/FAQManager";
import PricingManager from "@/components/admin/PricingManager";

export default function NewServicePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>({
    title: "",
    slug: "",
    shortDescription: "",
    fullDescription: "",
    icon: "fas fa-concierge-bell",
    coverImage: "",
    faqs: [],
    pricing: { monthlyPlans: [], yearlyPlans: [], serviceId: "" },
    isPublished: false,
    order: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          order: Number(formData.order),
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        router.push("/admin/services");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RoleGuard allowedRoles={["superadmin", "admin"]}>
      <div className="admin-form-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            marginBottom: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>Add Service</h2>
          <Link href="/admin/services" className="admin-btn-secondary">
            Back to Services
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ flex: "2 1 400px" }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Title</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Slug (Optional)</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  placeholder="Leave blank to auto-generate from title"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Short Description</label>
                <textarea
                  className="admin-form-control"
                  value={formData.shortDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      shortDescription: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>

              <RichTextEditor
                label="Full Description"
                value={formData.fullDescription}
                onChange={(content) =>
                  setFormData({ ...formData, fullDescription: content })
                }
              />

              <div style={{ marginTop: "24px" }}>
                <FAQManager 
                  faqs={formData.faqs} 
                  onChange={(faqs) => setFormData({ ...formData, faqs })} 
                />
              </div>

              <div style={{ marginTop: "24px" }}>
                <PricingManager 
                  pricing={formData.pricing} 
                  onChange={(pricing) => setFormData({ ...formData, pricing })} 
                />
              </div>
            </div>

            <div style={{ flex: "1 1 250px" }}>
              <ImageUploader
                label="Cover Image"
                value={formData.coverImage}
                onChange={(url) =>
                  setFormData({ ...formData, coverImage: url })
                }
              />

              <div className="admin-form-group">
                <label className="admin-form-label">FontAwesome Icon</label>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={formData.icon}
                    onChange={(e) =>
                      setFormData({ ...formData, icon: e.target.value })
                    }
                    placeholder="fas fa-code"
                  />
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "8px",
                      backgroundColor: "#0f172a",
                      border: "1px solid #334155",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#38bdf8",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    <i className={formData.icon}></i>
                  </div>
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Display Order</label>
                <input
                  type="number"
                  className="admin-form-control"
                  value={formData.order}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      order: parseInt(e.target.value) || 0,
                    })
                  }
                />
              </div>

              <div
                className="admin-form-group"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "24px",
                  padding: "16px",
                  backgroundColor: "#0f172a",
                  borderRadius: "8px",
                  border: "1px solid #334155",
                }}
              >
                <label className="admin-switch">
                  <input
                    type="checkbox"
                    checked={formData.isPublished}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        isPublished: e.target.checked,
                      })
                    }
                  />
                  <span className="admin-switch-slider"></span>
                </label>
                <span className="admin-form-label" style={{ margin: 0 }}>
                  Publish
                </span>
              </div>
            </div>
          </div>

          <div className="admin-form-actions">
            <button
              type="submit"
              className="admin-btn-primary"
              disabled={loading}
            >
              {loading ? "Saving..." : "Create Service"}
            </button>
          </div>
        </form>
      </div>
    </RoleGuard>
  );
}
