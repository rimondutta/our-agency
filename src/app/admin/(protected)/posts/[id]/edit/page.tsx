"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "uncategorized",
    status: "draft",
    coverImage: "",
  });

  useEffect(() => {
    if (id) fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/admin/posts/${id}`);
      const data = await res.json();
      if (data.success) {
        const post = data.data;
        setFormData({
          title: post.title || "",
          slug: post.slug || "",
          excerpt: post.excerpt || "",
          content: post.content || "",
          category: post.category || "uncategorized",
          status: post.status || "draft",
          coverImage: post.coverImage || "",
        });
      } else {
        toast.error(data.error || "Failed to load post");
        router.push("/admin/posts");
      }
    } catch (error) {
      toast.error("Error loading post");
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Post updated successfully");
        router.push("/admin/posts");
      } else {
        toast.error(data.error || "Failed to update post");
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
            {loading ? "Saving..." : "Save Changes"}
          </button>
          <Link href="/admin/posts" className="admin-btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
