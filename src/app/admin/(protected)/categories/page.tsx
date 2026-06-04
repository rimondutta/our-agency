"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/utilities/Preloader";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { toast } from "react-hot-toast";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  
  // Form state
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#C9F31D");

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/admin/categories");
      const data = await res.json();
      if (data.success) {
        setCategories(data.data);
      }
    } catch (error) {
      toast.error("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const resetForm = () => {
    setName("");
    setSlug("");
    setDescription("");
    setColor("#C9F31D");
    setEditingCategory(null);
  };

  const handleOpenModal = (category: any = null) => {
    if (category) {
      setEditingCategory(category);
      setName(category.name);
      setSlug(category.slug || "");
      setDescription(category.description || "");
      setColor(category.color || "#C9F31D");
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
    
    const payload = { name, slug, description, color };

    try {
      const url = editingCategory 
        ? `/api/admin/categories/${editingCategory._id}` 
        : "/api/admin/categories";
      const method = editingCategory ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(editingCategory ? "Category updated" : "Category created");
        fetchCategories();
        handleCloseModal();
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to save category");
    }
  };

  const handleDeleteClick = (id: string) => {
    setCategoryToDelete(id);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!categoryToDelete) return;

    try {
      const res = await fetch(`/api/admin/categories/${categoryToDelete}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Category deleted");
        fetchCategories();
      } else {
        toast.error(data.error || "Failed to delete");
      }
    } catch (error) {
      toast.error("Failed to delete category");
    } finally {
      setIsConfirmOpen(false);
      setCategoryToDelete(null);
    }
  };

  if (loading) return <Preloader />;

  return (
    <div>
      <div className="admin-table-container">
        <div className="admin-table-header">
          <h3>Categories</h3>
          <button className="admin-btn-primary" onClick={() => handleOpenModal()}>
            <i className="fas fa-plus"></i> Add Category
          </button>
        </div>

        {categories.length === 0 ? (
          <div style={{ padding: "32px", textAlign: "center", color: "var(--admin-text-muted)" }}>
            No categories found. Create one to get started.
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
              {categories.map((cat) => (
                <tr key={cat._id}>
                  <td style={{ fontWeight: 600 }}>{cat.name}</td>
                  <td>{cat.slug}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: cat.color }}></div>
                      {cat.color}
                    </div>
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button className="admin-btn-icon edit" onClick={() => handleOpenModal(cat)} title="Edit">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="admin-btn-icon delete" onClick={() => handleDeleteClick(cat._id)} title="Delete">
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
              <h3>{editingCategory ? "Edit Category" : "Add Category"}</h3>
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
                  <label className="admin-form-label">Description</label>
                  <textarea
                    className="admin-form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ minHeight: "80px" }}
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
                  {editingCategory ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmDialog
        isOpen={isConfirmOpen}
        title="Delete Category"
        message="Are you sure you want to delete this category? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmOpen(false)}
      />
    </div>
  );
}
