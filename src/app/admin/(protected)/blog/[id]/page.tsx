"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import RoleGuard from "@/components/admin/RoleGuard";
import RichTextEditor from "@/components/admin/RichTextEditor";
import ImageUploader from "@/components/admin/ImageUploader";
import TagInput from "@/components/admin/TagInput";
import Preloader from "@/components/utilities/Preloader";

export default function EditBlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/admin/posts/${id}`);
      const data = await res.json();
      if (data.success) {
        setFormData({
          ...data.data,
          seo: data.data.seo || { metaTitle: "", metaDescription: "", keywords: [] }
        });
      } else {
        toast.error(data.message);
        router.push("/admin/blog");
      }
    } catch (error) {
      toast.error("Failed to load blog post");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        router.push("/admin/blog");
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
      <div className="admin-form-card" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>Edit Blog Post</h2>
          <Link href="/admin/blog" className="admin-btn-secondary">Back to Blog</Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ flex: '2 1 500px' }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Title</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Slug</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.slug || ""}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                />
              </div>
              
              <div className="admin-form-group">
                <label className="admin-form-label">Excerpt / Short Description</label>
                <textarea
                  className="admin-form-control"
                  value={formData.excerpt || ""}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={2}
                />
              </div>

              <RichTextEditor
                label="Content"
                value={formData.content || ""}
                onChange={(content) => setFormData({ ...formData, content })}
              />
              
              <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155' }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem' }}>SEO Settings</h3>
                
                <div className="admin-form-group">
                  <label className="admin-form-label">Meta Title</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={formData.seo?.metaTitle || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      seo: { ...formData.seo, metaTitle: e.target.value } 
                    })}
                  />
                </div>
                
                <div className="admin-form-group">
                  <label className="admin-form-label">Meta Description</label>
                  <textarea
                    className="admin-form-control"
                    value={formData.seo?.metaDescription || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      seo: { ...formData.seo, metaDescription: e.target.value } 
                    })}
                    rows={2}
                  />
                </div>
                
                <TagInput
                  label="SEO Keywords"
                  value={formData.seo?.keywords || []}
                  onChange={(tags) => setFormData({ 
                    ...formData, 
                    seo: { ...formData.seo, keywords: tags as never[] } 
                  })}
                  placeholder="e.g. digital marketing, seo"
                />
              </div>
            </div>
            
            <div style={{ flex: '1 1 300px' }}>
              <ImageUploader 
                label="Cover Image"
                value={formData.coverImage || ""}
                onChange={(url) => setFormData({ ...formData, coverImage: url })}
              />

              <div className="admin-form-group">
                <label className="admin-form-label">Category</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.category || ""}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </div>

              <TagInput
                label="Tags"
                value={formData.tags || []}
                onChange={(tags) => setFormData({ ...formData, tags: tags as never[] })}
              />

              <div className="admin-form-group" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px', padding: '16px', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155' }}>
                <label className="admin-switch">
                  <input 
                    type="checkbox" 
                    checked={formData.isPublished !== false}
                    onChange={(e) => setFormData({...formData, isPublished: e.target.checked})}
                  />
                  <span className="admin-switch-slider"></span>
                </label>
                <span className="admin-form-label" style={{ margin: 0 }}>Published</span>
              </div>
            </div>
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="admin-btn-primary" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </RoleGuard>
  );
}
