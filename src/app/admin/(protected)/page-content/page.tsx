"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/utilities/Preloader";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { toast } from "react-hot-toast";

export default function PageContentPage() {
  const [contents, setContents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContent, setEditingContent] = useState<any>(null);
  
  // Filter state
  const [selectedPage, setSelectedPage] = useState<string>("home");

  // Form state
  const [page, setPage] = useState("home");
  const [section, setSection] = useState("");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("text");

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [contentToDelete, setContentToDelete] = useState<string | null>(null);

  const fetchContents = async () => {
    try {
      const url = selectedPage === "all" ? "/api/admin/page-content" : `/api/admin/page-content?page=${selectedPage}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setContents(data.data);
      }
    } catch (error) {
      toast.error("Failed to load page content");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContents();
  }, [selectedPage]);

  const resetForm = () => {
    setPage(selectedPage === "all" ? "home" : selectedPage);
    setSection("");
    setKey("");
    setValue("");
    setType("text");
    setEditingContent(null);
  };

  const handleOpenModal = (content: any = null) => {
    if (content) {
      setEditingContent(content);
      setPage(content.page);
      setSection(content.section);
      setKey(content.key);
      setValue(content.value);
      setType(content.type || "text");
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
    
    const payload = { page, section, key, value, type };

    try {
      const url = editingContent 
        ? `/api/admin/page-content/${editingContent._id}` 
        : "/api/admin/page-content";
      const method = editingContent ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(editingContent ? "Content updated" : "Content saved");
        fetchContents();
        handleCloseModal();
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to save content");
    }
  };

  const handleDeleteClick = (id: string) => {
    setContentToDelete(id);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!contentToDelete) return;

    try {
      const res = await fetch(`/api/admin/page-content/${contentToDelete}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Content deleted");
        fetchContents();
      } else {
        toast.error(data.error || "Failed to delete");
      }
    } catch (error) {
      toast.error("Failed to delete content");
    } finally {
      setIsConfirmOpen(false);
      setContentToDelete(null);
    }
  };

  if (loading) return <Preloader />;

  const pages = ["all", "home", "about", "contact", "services"];
  const types = ["text", "richtext", "image", "json"];

  return (
    <div>
      <div className="admin-table-container">
        <div className="admin-table-header" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <h3>Page Content</h3>
          
          <div style={{ display: 'flex', gap: '12px', flex: 1, alignItems: 'center' }}>
            <label style={{ color: 'var(--admin-text-muted)', fontSize: '0.9rem' }}>Filter by Page:</label>
            <select 
              className="admin-form-control" 
              style={{ width: 'auto', padding: '8px 12px' }}
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
            >
              {pages.map(p => (
                <option key={p} value={p}>{p === "all" ? "All Pages" : p.charAt(0).toUpperCase() + p.slice(1)}</option>
              ))}
            </select>
          </div>

          <button className="admin-btn-primary" onClick={() => handleOpenModal()}>
            <i className="fas fa-plus"></i> Add Content
          </button>
        </div>

        {contents.length === 0 ? (
          <div style={{ padding: "32px", textAlign: "center", color: "var(--admin-text-muted)" }}>
            No content found for this page. Create one to get started.
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Section</th>
                <th>Key</th>
                <th>Type</th>
                <th>Value Preview</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contents.map((item) => (
                <tr key={item._id}>
                  <td style={{ textTransform: 'capitalize', fontWeight: 600 }}>{item.page}</td>
                  <td>{item.section}</td>
                  <td><code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>{item.key}</code></td>
                  <td>
                    <span className="admin-badge neutral">{item.type}</span>
                  </td>
                  <td style={{ maxWidth: '250px' }}>
                    <div style={{ 
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis',
                      color: 'var(--admin-text-secondary)'
                    }}>
                      {item.value}
                    </div>
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button className="admin-btn-icon edit" onClick={() => handleOpenModal(item)} title="Edit">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="admin-btn-icon delete" onClick={() => handleDeleteClick(item._id)} title="Delete">
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
          <div className="admin-modal-content" style={{ maxWidth: '600px' }}>
            <div className="admin-modal-header">
              <h3>{editingContent ? "Edit Content" : "Add Content"}</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="admin-modal-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Page *</label>
                    <select
                      className="admin-form-control"
                      value={page}
                      onChange={(e) => setPage(e.target.value)}
                      required
                    >
                      {pages.filter(p => p !== "all").map(p => (
                        <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="admin-form-group">
                    <label className="admin-form-label">Type *</label>
                    <select
                      className="admin-form-control"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      required
                    >
                      {types.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Section *</label>
                    <input
                      type="text"
                      className="admin-form-control"
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                      placeholder="e.g. hero"
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Key *</label>
                    <input
                      type="text"
                      className="admin-form-control"
                      value={key}
                      onChange={(e) => setKey(e.target.value)}
                      placeholder="e.g. title"
                      required
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Value *</label>
                  {type === "text" || type === "image" ? (
                    <input
                      type="text"
                      className="admin-form-control"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      required
                    />
                  ) : (
                    <textarea
                      className="admin-form-control"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      style={{ minHeight: "150px" }}
                      required
                    />
                  )}
                  {type === "image" && <small style={{ color: 'var(--admin-text-muted)' }}>Provide an image URL.</small>}
                </div>
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="admin-btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn-primary">
                  {editingContent ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmDialog
        isOpen={isConfirmOpen}
        title="Delete Content"
        message="Are you sure you want to delete this content item? This could break the frontend layout if required."
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmOpen(false)}
      />
    </div>
  );
}
