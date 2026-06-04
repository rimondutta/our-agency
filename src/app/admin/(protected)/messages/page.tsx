"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/utilities/Preloader";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { toast } from "react-hot-toast";

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/admin/messages");
      const data = await res.json();
      if (data.success) {
        setMessages(data.data);
      }
    } catch (error) {
      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleToggleRead = async (message: any) => {
    try {
      const res = await fetch(`/api/admin/messages/${message._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: !message.read }),
      });
      const data = await res.json();
      if (data.success) {
        fetchMessages();
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const handleDeleteClick = (id: string) => {
    setMessageToDelete(id);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!messageToDelete) return;

    try {
      const res = await fetch(`/api/admin/messages/${messageToDelete}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Message deleted");
        fetchMessages();
      } else {
        toast.error(data.error || "Failed to delete");
      }
    } catch (error) {
      toast.error("Failed to delete message");
    } finally {
      setIsConfirmOpen(false);
      setMessageToDelete(null);
    }
  };

  if (loading) return <Preloader />;

  return (
    <div>
      <div className="admin-table-container">
        <div className="admin-table-header">
          <h3>Inbox</h3>
        </div>

        {messages.length === 0 ? (
          <div style={{ padding: "32px", textAlign: "center", color: "var(--admin-text-muted)" }}>
            No messages found.
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>From</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} style={{ backgroundColor: msg.read ? 'transparent' : 'rgba(201, 243, 29, 0.05)' }}>
                  <td>
                    <button 
                      onClick={() => handleToggleRead(msg)}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        cursor: 'pointer',
                        color: msg.read ? 'var(--admin-text-muted)' : 'var(--admin-accent)',
                        fontSize: '1.25rem'
                      }}
                      title={msg.read ? "Mark as unread" : "Mark as read"}
                    >
                      <i className={msg.read ? "far fa-envelope-open" : "fas fa-envelope"}></i>
                    </button>
                  </td>
                  <td>
                    <div style={{ fontWeight: msg.read ? 500 : 700, color: msg.read ? 'var(--admin-text-secondary)' : 'var(--admin-text)' }}>
                      {msg.name}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--admin-text-muted)' }}>
                      {msg.email}
                    </div>
                  </td>
                  <td style={{ fontWeight: msg.read ? 400 : 600 }}>{msg.subject}</td>
                  <td style={{ maxWidth: '300px' }}>
                    <div style={{ 
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis',
                      color: 'var(--admin-text-secondary)'
                    }}>
                      {msg.message}
                    </div>
                  </td>
                  <td style={{ fontSize: '0.85rem' }}>
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button className="admin-btn-icon delete" onClick={() => handleDeleteClick(msg._id)} title="Delete">
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

      <ConfirmDialog
        isOpen={isConfirmOpen}
        title="Delete Message"
        message="Are you sure you want to delete this message? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmOpen(false)}
      />
    </div>
  );
}
