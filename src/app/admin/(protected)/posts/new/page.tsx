"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export default function NewPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "uncategorized",
    status: "draft",
    coverImage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Post created successfully");
        router.push("/admin/posts");
      } else {
        toast.error(data.error || "Failed to create post");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

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
            placeholder="Enter post title"
          />
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Slug (optional)</label>
          <input
            type="text"
            name="slug"
            className="admin-form-control"
            value={formData.slug}
            onChange={handleChange}
            placeholder="Leave blank to auto-generate"
          />
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Category</label>
          <select
            name="category"
            className="admin-form-control"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="uncategorized">Uncategorized</option>
            <option value="seo">SEO</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
          </select>
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Excerpt</label>
          <textarea
            name="excerpt"
            className="admin-form-control"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Brief summary..."
            rows={3}
          />
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Content *</label>
          <textarea
            name="content"
            required
            className="admin-form-control"
            value={formData.content}
            onChange={handleChange}
            placeholder="Post content (HTML/Markdown)..."
            rows={10}
          />
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Cover Image URL</label>
          <input
            type="text"
            name="coverImage"
            className="admin-form-control"
            value={formData.coverImage}
            onChange={handleChange}
            placeholder="/assets/img/blog/..."
          />
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Status</label>
          <select
            name="status"
            className="admin-form-control"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="admin-form-actions">
          <button type="submit" className="admin-btn-primary" disabled={loading}>
            {loading ? "Creating..." : "Create Post"}
          </button>
          <Link href="/admin/posts" className="admin-btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
