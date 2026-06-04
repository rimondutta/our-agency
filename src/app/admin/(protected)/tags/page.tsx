"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/utilities/Preloader";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { toast } from "react-hot-toast";

export default function TagsPage() {
  const [tags, setTags] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTag, setEditingTag] = useState<any>(null);
  
  // Form state
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [color, setColor] = useState("#C9F31D");

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [tagToDelete, setTagToDelete] = useState<string | null>(null);

  const fetchTags = async () => {
    try {
      const res = await fetch("/api/admin/tags");
      const data = await res.json();
      if (data.success) {
        setTags(data.data);
      }
    } catch (error) {
      toast.error("Failed to load tags");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  const resetForm = () => {
    setName("");
    setSlug("");
    setColor("#C9F31D");
    setEditingTag(null);
  };

  const handleOpenModal = (tag: any = null) => {
    if (tag) {
      setEditingTag(tag);
      setName(tag.name);
      setSlug(tag.slug || "");
      setColor(tag.color || "#C9F31D");
    } else {
      resetForm();
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload = { name, slug, color };

    try {
      const url = editingTag 
        ? `/api/admin/tags/${editingTag._id}` 
        : "/api/admin/tags";
      const method = editingTag ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(editingTag ? "Tag updated" : "Tag created");
        fetchTags();
        handleCloseModal();
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to save tag");
    }
  };

  const handleDeleteClick = (id: string) => {
    setTagToDelete(id);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!tagToDelete) return;

    try {
      const res = await fetch(`/api/admin/tags/${tagToDelete}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Tag deleted");
        fetchTags();
      } else {
        toast.error(data.error || "Failed to delete");
      }
    } catch (error) {
      toast.error("Failed to delete tag");
    } finally {
      setIsConfirmOpen(false);
      setTagToDelete(null);
    }
  };

  if (loading) return <Preloader />;

  return (
    <div>
      <div className="admin-table-container">
        <div className="admin-table-header">
          <h3>Tags</h3>
          <button className="admin-btn-primary" onClick={() => handleOpenModal()}>
            <i className="fas fa-plus"></i> Add Tag
          </button>
        </div>

        {tags.length === 0 ? (
          <div style={{ padding: "32px", textAlign: "center", color: "var(--admin-text-muted)" }}>
            No tags found. Create one to get started.
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Slug</th>
                <th>Color</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tags.map((tag) => (
                <tr key={tag._id}>
                  <td style={{ fontWeight: 600 }}>
                    <span className="admin-tag" style={{ borderLeft: `3px solid ${tag.color}` }}>
                      {tag.name}
                    </span>
                  </td>
                  <td>{tag.slug}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: tag.color }}></div>
                      {tag.color}
                    </div>
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button className="admin-btn-icon edit" onClick={() => handleOpenModal(tag)} title="Edit">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="admin-btn-icon delete" onClick={() => handleDeleteClick(tag._id)} title="Delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h3>{editingTag ? "Edit Tag" : "Add Tag"}</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="admin-modal-body">
                <div className="admin-form-group">
                  <label className="admin-form-label">Name *</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="admin-form-group">
                  <label className="admin-form-label">Slug</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="Auto-generated if left blank"
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Color</label>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      style={{ width: "40px", height: "40px", padding: "0", border: "none", borderRadius: "4px", cursor: "pointer" }}
                    />
                    <input
                      type="text"
                      className="admin-form-control"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="admin-btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn-primary">
                  {editingTag ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmDialog
        isOpen={isConfirmOpen}
        title="Delete Tag"
        message="Are you sure you want to delete this tag? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmOpen(false)}
      />
    </div>
  );
}
