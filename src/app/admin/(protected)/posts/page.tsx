"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

export default function PostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/posts");
      const data = await res.json();
      if (data.success) {
        setPosts(data.data);
      } else {
        toast.error(data.error || "Failed to fetch posts");
      }
    } catch (error) {
      toast.error("Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    
    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Post deleted successfully");
        fetchPosts();
      } else {
        toast.error(data.error || "Failed to delete post");
      }
    } catch (error) {
      toast.error("Error deleting post");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="admin-table-container">
        <div className="admin-table-header">
          <h3>All Posts</h3>
          <Link href="/admin/posts/new" className="admin-btn-primary">
            <i className="fas fa-plus"></i> Add New Post
          </Link>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td style={{ textTransform: "capitalize" }}>{post.category}</td>
                <td>
                  <span
                    className={`admin-badge ${
                      post.status === "published" ? "success" : "neutral"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                <td>
                  <div className="admin-actions">
                    <Link
                      href={`/admin/posts/${post._id}/edit`}
                      className="admin-btn-icon edit"
                      title="Edit"
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="admin-btn-icon delete"
                      title="Delete"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  No posts found. Create one to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
