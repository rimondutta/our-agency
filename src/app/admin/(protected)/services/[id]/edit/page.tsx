"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [formData, setFormData] = useState<any>({
    title: "",
    slug: "",
    icon: "",
    description: "",
    price: 0,
    status: "active",
    order: 0,
  });

  useEffect(() => {
    if (id) fetchService();
  }, [id]);

  const fetchService = async () => {
    try {
      const res = await fetch(`/api/admin/services/${id}`);
      const data = await res.json();
      if (data.success) {
        const service = data.data;
        setFormData({
          title: service.title || "",
          slug: service.slug || "",
          icon: service.icon || "",
          description: service.description || "",
          price: service.price || 0,
          status: service.status || "active",
          order: service.order || 0,
        });
      } else {
        toast.error(data.error || "Failed to load service");
        router.push("/admin/services");
      }
    } catch (error) {
      toast.error("Error loading service");
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev: any) => ({ 
      ...prev, 
      [name]: type === "number" ? parseFloat(value) : value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/services/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Service updated successfully");
        router.push("/admin/services");
      } else {
        toast.error(data.error || "Failed to update service");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <div>Loading...</div>;

  return (
    <div className="admin-form-card">
      <form onSubmit={handleSubmit}>
        <div className="admin-form-group">
          <label className="admin-form-label">Title *</label>
          <input
            type="text"
            name="title"
            required
            className="admin-form-control"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Slug</label>
          <input
            type="text"
            name="slug"
            required
            className="admin-form-control"
            value={formData.slug}
            onChange={handleChange}
          />
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Icon Class</label>
          <input
            type="text"
            name="icon"
            className="admin-form-control"
            value={formData.icon}
            onChange={handleChange}
          />
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Description</label>
          <textarea
            name="description"
            className="admin-form-control"
            value={formData.description}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <div className="admin-form-group" style={{ display: "flex", gap: "16px" }}>
          <div style={{ flex: 1 }}>
            <label className="admin-form-label">Price ($)</label>
            <input
              type="number"
              name="price"
              className="admin-form-control"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className="admin-form-label">Sort Order</label>
            <input
              type="number"
              name="order"
              className="admin-form-control"
              value={formData.order}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Status</label>
          <select
            name="status"
            className="admin-form-control"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="admin-form-actions">
          <button type="submit" className="admin-btn-primary" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
          <Link href="/admin/services" className="admin-btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
