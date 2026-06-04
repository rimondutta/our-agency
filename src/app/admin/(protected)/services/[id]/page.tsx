"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import RoleGuard from "@/components/admin/RoleGuard";
import RichTextEditor from "@/components/admin/RichTextEditor";
import ImageUploader from "@/components/admin/ImageUploader";
import Preloader from "@/components/utilities/Preloader";
import FAQManager from "@/components/admin/FAQManager";
import PricingManager from "@/components/admin/PricingManager";

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    fetchService();
  }, [id]);

  const fetchService = async () => {
    try {
      const res = await fetch(`/api/admin/services/${id}`);
      const data = await res.json();
      if (data.success) {
        setFormData(data.data);
      } else {
        toast.error(data.message);
        router.push("/admin/services");
      }
    } catch (error) {
      toast.error("Failed to load service");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`/api/admin/services/${id}`, {
        method: "PUT",
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
      setSaving(false);
    }
  };

  if (loading) return <Preloader />;
  if (!formData) return null;

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
          <h2 style={{ margin: 0 }}>Edit Service</h2>
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
                  value={formData.title || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Slug</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.slug || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Short Description</label>
                <textarea
                  className="admin-form-control"
                  value={formData.shortDescription || ""}
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
                value={formData.fullDescription || ""}
                onChange={(content) =>
                  setFormData({ ...formData, fullDescription: content })
                }
              />
              
              <div style={{ marginTop: "24px" }}>
                <FAQManager 
                  faqs={formData.faqs || []} 
                  onChange={(faqs) => setFormData({ ...formData, faqs })} 
                />
              </div>

              <div style={{ marginTop: "24px" }}>
                <PricingManager 
                  pricing={formData.pricing || { monthlyPlans: [], yearlyPlans: [], serviceId: formData.slug }} 
                  onChange={(pricing) => setFormData({ ...formData, pricing })} 
                />
              </div>
            </div>

            <div style={{ flex: "1 1 250px" }}>
              <ImageUploader
                label="Cover Image"
                value={formData.coverImage || ""}
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
                    value={formData.icon || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, icon: e.target.value })
                    }
                    required
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
                    <i className={formData.icon || "fas fa-circle"}></i>
                  </div>
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Display Order</label>
                <input
                  type="number"
                  className="admin-form-control"
                  value={formData.order || 0}
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
                    checked={formData.isPublished !== false}
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
                  Published
                </span>
              </div>
            </div>
          </div>

          <div className="admin-form-actions">
            <button
              type="submit"
              className="admin-btn-primary"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </RoleGuard>
  );
}
