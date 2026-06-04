"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import RoleGuard from "@/components/admin/RoleGuard";
import ImageUploader from "@/components/admin/ImageUploader";
import TagInput from "@/components/admin/TagInput";

export default function NewPortfolioPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    coverImage: "",
    images: [] as string[],
    tags: [] as string[],
    clientName: "",
    projectUrl: "",
    githubUrl: "",
    technologies: [] as string[],
    isPublished: true,
    featured: false,
    completedAt: "",
  });
  const [newImageUrl, setNewImageUrl] = useState("");

  const addImage = () => {
    if (newImageUrl && !formData.images.includes(newImageUrl)) {
      setFormData({ ...formData, images: [...formData.images, newImageUrl] });
      setNewImageUrl("");
    }
  };

  const removeImage = (url: string) => {
    setFormData({
      ...formData,
      images: formData.images.filter((img) => img !== url),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          completedAt: formData.completedAt || null,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        router.push("/admin/portfolio");
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RoleGuard allowedRoles={["superadmin", "admin"]}>
      <div
        className="admin-form-card"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <div
          style={{
            marginBottom: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>Add Portfolio Project</h2>
          <Link href="/admin/portfolio" className="admin-btn-secondary">
            Back to Portfolio
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ flex: "2 1 500px" }}>
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
                  placeholder="Leave blank to auto-generate"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Client Name</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.clientName}
                  onChange={(e) =>
                    setFormData({ ...formData, clientName: e.target.value })
                  }
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Description</label>
                <textarea
                  className="admin-form-control"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={5}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">
                  Additional Images (URLs)
                </label>
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <input
                    type="url"
                    className="admin-form-control"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="Paste image URL and click Add"
                  />
                  <button
                    type="button"
                    className="admin-btn-primary"
                    onClick={addImage}
                  >
                    Add
                  </button>
                </div>
                {formData.images.length > 0 && (
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {formData.images.map((img, i) => (
                      <div key={i} style={{ position: "relative" }}>
                        <img
                          src={img}
                          alt={`Image ${i + 1}`}
                          style={{
                            width: 80,
                            height: 60,
                            objectFit: "cover",
                            borderRadius: "4px",
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(img)}
                          style={{
                            position: "absolute",
                            top: -6,
                            right: -6,
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            border: "none",
                            backgroundColor: "#ef4444",
                            color: "white",
                            fontSize: "10px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          x
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div style={{ flex: "1 1 300px" }}>
              <ImageUploader
                label="Cover Image"
                value={formData.coverImage}
                onChange={(url) =>
                  setFormData({ ...formData, coverImage: url })
                }
              />

              <div className="admin-form-group">
                <label className="admin-form-label">Project URL</label>
                <input
                  type="url"
                  className="admin-form-control"
                  value={formData.projectUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, projectUrl: e.target.value })
                  }
                  placeholder="https://..."
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">GitHub URL</label>
                <input
                  type="url"
                  className="admin-form-control"
                  value={formData.githubUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, githubUrl: e.target.value })
                  }
                  placeholder="https://github.com/..."
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Completed Date</label>
                <input
                  type="date"
                  className="admin-form-control"
                  value={formData.completedAt}
                  onChange={(e) =>
                    setFormData({ ...formData, completedAt: e.target.value })
                  }
                />
              </div>

              <TagInput
                label="Tags"
                value={formData.tags}
                onChange={(tags) =>
                  setFormData({ ...formData, tags: tags as never[] })
                }
                placeholder="e.g. web, design"
              />

              <TagInput
                label="Technologies"
                value={formData.technologies}
                onChange={(tags) =>
                  setFormData({
                    ...formData,
                    technologies: tags as never[],
                  })
                }
                placeholder="e.g. React, Node.js"
              />

              <div
                className="admin-form-group"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "16px",
                  padding: "12px",
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
                  Published
                </span>
              </div>

              <div
                className="admin-form-group"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px",
                  backgroundColor: "#0f172a",
                  borderRadius: "8px",
                  border: "1px solid #334155",
                }}
              >
                <label className="admin-switch">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        featured: e.target.checked,
                      })
                    }
                  />
                  <span className="admin-switch-slider"></span>
                </label>
                <span className="admin-form-label" style={{ margin: 0 }}>
                  Featured
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
              {loading ? "Saving..." : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </RoleGuard>
  );
}
