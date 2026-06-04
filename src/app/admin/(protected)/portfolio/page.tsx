"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import RoleGuard from "@/components/admin/RoleGuard";
import ConfirmDialog from "@/components/admin/ConfirmDialog";

const ITEMS_PER_PAGE = 12;

export default function PortfolioListPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/admin/portfolio");
      const data = await res.json();
      if (data.success) {
        setProjects(data.data);
      } else {
        toast.error(data.message || "Failed to load projects");
      }
    } catch {
      toast.error("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`/api/admin/portfolio/${deleteId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        fetchProjects();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Error connecting to server");
    } finally {
      setDeleteId(null);
    }
  };

  const handleTogglePublish = async (item: any) => {
    try {
      const res = await fetch(`/api/admin/portfolio/${item._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: !item.isPublished }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        fetchProjects();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Error toggling publish status");
    }
  };

  const handleToggleFeatured = async (item: any) => {
    try {
      const res = await fetch(`/api/admin/portfolio/${item._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !item.featured }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        fetchProjects();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Error toggling featured status");
    }
  };

  const filtered = projects.filter(
    (p) =>
      p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.clientName?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <RoleGuard
      allowedRoles={["superadmin", "admin"]}
      fallback={<div>Access Denied</div>}
    >
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Portfolio Projects</h3>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Search projects..."
              className="admin-form-control"
              style={{ width: "250px", padding: "8px 12px" }}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <Link href="/admin/portfolio/new" className="admin-btn-primary">
              <i className="fas fa-plus"></i> Add Project
            </Link>
          </div>
        </div>
      </div>

      {loading ? (
        <div
          style={{
            textAlign: "center",
            padding: "64px",
            color: "#94a3b8",
          }}
        >
          <i
            className="fas fa-spinner fa-spin fa-2x"
            style={{ color: "#38bdf8" }}
          ></i>
          <p style={{ marginTop: "16px" }}>Loading projects...</p>
        </div>
      ) : paginated.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "64px",
            color: "#94a3b8",
            backgroundColor: "#1e293b",
            borderRadius: "12px",
            border: "1px solid #334155",
          }}
        >
          <i className="fas fa-folder-open fa-3x"></i>
          <p style={{ marginTop: "16px" }}>No projects found.</p>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {paginated.map((item) => (
              <div
                key={item._id}
                style={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "180px",
                    backgroundColor: "#0f172a",
                    overflow: "hidden",
                  }}
                >
                  {item.coverImage ? (
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        color: "#334155",
                        fontSize: "2rem",
                      }}
                    >
                      <i className="fas fa-image"></i>
                    </div>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      display: "flex",
                      gap: "4px",
                    }}
                  >
                    {item.featured && (
                      <span
                        className="admin-badge"
                        style={{
                          backgroundColor: "rgba(251,191,36,0.2)",
                          color: "#fbbf24",
                          border: "1px solid rgba(251,191,36,0.4)",
                        }}
                      >
                        Featured
                      </span>
                    )}
                    <span
                      className={`admin-badge ${item.isPublished ? "success" : "warning"}`}
                    >
                      {item.isPublished ? "Published" : "Draft"}
                    </span>
                  </div>
                </div>
                <div style={{ padding: "16px" }}>
                  <h4 style={{ margin: "0 0 4px 0", fontSize: "1rem" }}>
                    {item.title}
                  </h4>
                  {item.clientName && (
                    <p
                      style={{
                        margin: "0 0 12px 0",
                        color: "#94a3b8",
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.clientName}
                    </p>
                  )}
                  {item.technologies?.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: "4px",
                        flexWrap: "wrap",
                        marginBottom: "12px",
                      }}
                    >
                      {item.technologies
                        .slice(0, 3)
                        .map((tech: string, i: number) => (
                          <span
                            key={i}
                            className="admin-badge neutral"
                            style={{ fontSize: "0.65rem" }}
                          >
                            {tech}
                          </span>
                        ))}
                      {item.technologies.length > 3 && (
                        <span
                          className="admin-badge neutral"
                          style={{ fontSize: "0.65rem" }}
                        >
                          +{item.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="admin-actions">
                    <button
                      className="admin-btn-icon"
                      title={item.isPublished ? "Unpublish" : "Publish"}
                      onClick={() => handleTogglePublish(item)}
                      style={{
                        color: item.isPublished ? "#4ade80" : "#fde047",
                      }}
                    >
                      <i
                        className={
                          item.isPublished ? "fas fa-eye" : "fas fa-eye-slash"
                        }
                      ></i>
                    </button>
                    <button
                      className="admin-btn-icon"
                      title={item.featured ? "Unfeature" : "Feature"}
                      onClick={() => handleToggleFeatured(item)}
                      style={{ color: item.featured ? "#fbbf24" : "#94a3b8" }}
                    >
                      <i className="fas fa-star"></i>
                    </button>
                    <Link
                      href={`/admin/portfolio/${item._id}`}
                      className="admin-btn-icon edit"
                      title="Edit"
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button
                      className="admin-btn-icon delete"
                      title="Delete"
                      onClick={() => setDeleteId(item._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                padding: "24px",
                marginTop: "24px",
              }}
            >
              <button
                className="admin-btn-secondary"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className="admin-btn-secondary"
                  style={
                    currentPage === i + 1
                      ? {
                          backgroundColor: "#38bdf8",
                          color: "#0f172a",
                          borderColor: "#38bdf8",
                        }
                      : {}
                  }
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="admin-btn-secondary"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Project"
        message="Are you sure you want to delete this project? This action cannot be undone."
        confirmText="Delete"
        isDestructive={true}
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </RoleGuard>
  );
}
