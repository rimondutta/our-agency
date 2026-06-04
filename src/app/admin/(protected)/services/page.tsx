"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import RoleGuard from "@/components/admin/RoleGuard";
import ConfirmDialog from "@/components/admin/ConfirmDialog";

const ITEMS_PER_PAGE = 10;

export default function ServicesListPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch("/api/admin/services");
      const data = await res.json();
      if (data.success) {
        setServices(data.data);
      } else {
        toast.error(data.message || "Failed to load services");
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
      const res = await fetch(`/api/admin/services/${deleteId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        fetchServices();
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
      const res = await fetch(`/api/admin/services/${item._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: !item.isPublished }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        fetchServices();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Error toggling publish status");
    }
  };

  const filtered = services.filter((s) =>
    s.title?.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="admin-table-container">
        <div className="admin-table-header">
          <h3>Services</h3>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Search..."
              className="admin-form-control"
              style={{ width: "250px", padding: "8px 12px" }}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <Link href="/admin/services/new" className="admin-btn-primary">
              <i className="fas fa-plus"></i> Add Service
            </Link>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Description</th>
                <th>Order</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", padding: "32px" }}>
                    <i
                      className="fas fa-spinner fa-spin fa-2x"
                      style={{ color: "#38bdf8" }}
                    ></i>
                    <p style={{ marginTop: "16px", color: "#94a3b8" }}>
                      Loading data...
                    </p>
                  </td>
                </tr>
              ) : paginated.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    style={{
                      textAlign: "center",
                      padding: "32px",
                      color: "#94a3b8",
                    }}
                  >
                    No services found.
                  </td>
                </tr>
              ) : (
                paginated.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: "8px",
                            backgroundColor: "#1e293b",
                            border: "1px solid #334155",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#38bdf8",
                            fontSize: "1.2rem",
                          }}
                        >
                          <i className={item.icon || "fas fa-concierge-bell"}></i>
                        </div>
                        <div>
                          <div style={{ fontWeight: 600 }}>{item.title}</div>
                          <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                            /{item.slug}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          maxWidth: "300px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.shortDescription || "—"}
                      </div>
                    </td>
                    <td>{item.order}</td>
                    <td>
                      <span
                        className={`admin-badge ${item.isPublished ? "success" : "warning"}`}
                      >
                        {item.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td>
                      <div className="admin-actions">
                        <button
                          className="admin-btn-icon"
                          title={item.isPublished ? "Unpublish" : "Publish"}
                          onClick={() => handleTogglePublish(item)}
                          style={{ color: item.isPublished ? "#4ade80" : "#fde047" }}
                        >
                          <i
                            className={
                              item.isPublished
                                ? "fas fa-eye"
                                : "fas fa-eye-slash"
                            }
                          ></i>
                        </button>
                        <Link
                          href={`/admin/services/${item._id}`}
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
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              padding: "16px 24px",
              borderTop: "1px solid #334155",
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
                className={`admin-btn-secondary ${currentPage === i + 1 ? "active" : ""}`}
                style={
                  currentPage === i + 1
                    ? { backgroundColor: "#38bdf8", color: "#0f172a", borderColor: "#38bdf8" }
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
      </div>

      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Service"
        message="Are you sure you want to delete this service? This action cannot be undone."
        confirmText="Delete"
        isDestructive={true}
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </RoleGuard>
  );
}
