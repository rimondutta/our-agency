"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/orders");
      const data = await res.json();
      if (data.success) {
        setOrders(data.data);
      } else {
        toast.error(data.error || "Failed to fetch orders");
      }
    } catch (error) {
      toast.error("Error fetching orders");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    
    try {
      const res = await fetch(`/api/admin/orders/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Order deleted successfully");
        fetchOrders();
      } else {
        toast.error(data.error || "Failed to delete order");
      }
    } catch (error) {
      toast.error("Error deleting order");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="admin-table-container">
        <div className="admin-table-header">
          <h3>All Orders</h3>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  <div>{order.customerName}</div>
                  <small style={{ color: "#94a3b8" }}>{order.customerEmail}</small>
                </td>
                <td>{order.serviceName}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>
                  <span
                    className={`admin-badge ${
                      order.status === "completed"
                        ? "success"
                        : order.status === "pending"
                        ? "warning"
                        : order.status === "cancelled"
                        ? "danger"
                        : "neutral"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  <div className="admin-actions">
                    <Link
                      href={`/admin/orders/${order._id}`}
                      className="admin-btn-icon edit"
                      title="View Details"
                    >
                      <i className="fas fa-eye"></i>
                    </Link>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="admin-btn-icon delete"
                      title="Delete"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
