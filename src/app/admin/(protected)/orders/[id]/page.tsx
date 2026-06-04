"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export default function OrderDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [order, setOrder] = useState<any>(null);
  const [status, setStatus] = useState("pending");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (id) fetchOrder();
  }, [id]);

  const fetchOrder = async () => {
    try {
      const res = await fetch(`/api/admin/orders/${id}`);
      const data = await res.json();
      if (data.success) {
        setOrder(data.data);
        setStatus(data.data.status || "pending");
        setNotes(data.data.notes || "");
      } else {
        toast.error(data.error || "Failed to load order");
        router.push("/admin/orders");
      }
    } catch (error) {
      toast.error("Error loading order");
    } finally {
      setFetching(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, notes }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Order updated successfully");
        setOrder(data.data);
      } else {
        toast.error(data.error || "Failed to update order");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <div>Loading...</div>;
  if (!order) return null;

  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <div className="admin-form-card" style={{ flex: 2 }}>
        <h3 style={{ marginBottom: "20px", marginTop: 0 }}>Order Details</h3>
        
        <div style={{ marginBottom: "24px" }}>
          <h4 style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "8px" }}>Customer Info</h4>
          <p><strong>Name:</strong> {order.customerName}</p>
          <p><strong>Email:</strong> <a href={`mailto:${order.customerEmail}`} style={{ color: "#38bdf8" }}>{order.customerEmail}</a></p>
          <p><strong>Phone:</strong> {order.customerPhone || "N/A"}</p>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h4 style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "8px" }}>Service Info</h4>
          <p><strong>Service:</strong> {order.serviceName}</p>
          <p><strong>Amount:</strong> ${order.amount}</p>
          <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
        </div>

        <div>
          <h4 style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "8px" }}>Message</h4>
          <div style={{ background: "#0f172a", padding: "16px", borderRadius: "8px", border: "1px solid #334155" }}>
            {order.message || "No message provided."}
          </div>
        </div>
      </div>

      <div className="admin-form-card" style={{ flex: 1 }}>
        <h3 style={{ marginBottom: "20px", marginTop: 0 }}>Manage Order</h3>
        
        <form onSubmit={handleUpdate}>
          <div className="admin-form-group">
            <label className="admin-form-label">Status</label>
            <select
              className="admin-form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Admin Notes</label>
            <textarea
              className="admin-form-control"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={5}
              placeholder="Internal notes..."
            />
          </div>

          <button type="submit" className="admin-btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
            {loading ? "Updating..." : "Update Order"}
          </button>
        </form>
      </div>
    </div>
  );
}
