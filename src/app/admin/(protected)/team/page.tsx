"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DataTable from "@/components/admin/DataTable";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import Link from "next/link";
import RoleGuard from "@/components/admin/RoleGuard";

export default function TeamListPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await fetch("/api/admin/team");
      const data = await res.json();
      if (data.success) {
        setMembers(data.data);
      } else {
        toast.error(data.message || "Failed to load team members");
      }
    } catch (error) {
      toast.error("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`/api/admin/team/${deleteId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        fetchMembers();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error connecting to server");
    } finally {
      setDeleteId(null);
    }
  };

  const columns = [
    {
      header: "Member",
      accessor: (item: any) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {item.profilePhoto ? (
            <img src={item.profilePhoto} alt={item.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
          ) : (
            <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {item.name.substring(0, 2).toUpperCase()}
            </div>
          )}
          <div>
            <div style={{ fontWeight: 600 }}>{item.name}</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.email}</div>
          </div>
        </div>
      ),
    },
    { header: "Job Title", accessor: "jobTitle" },
    {
      header: "Role",
      accessor: (item: any) => {
        let badgeClass = 'admin-badge-team';
        if (item.role === 'superadmin') badgeClass = 'admin-badge-superadmin';
        if (item.role === 'admin') badgeClass = 'admin-badge-admin';
        
        return (
          <span className={`admin-badge ${badgeClass}`}>
            {item.role.replace('_', ' ')}
          </span>
        );
      },
    },
    {
      header: "Status",
      accessor: (item: any) => (
        <span className={`admin-badge ${item.isActive ? "success" : "neutral"}`}>
          {item.isActive ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: (item: any) => (
        <div className="admin-actions">
          <Link href={`/admin/team/${item._id}`} className="admin-btn-icon edit" title="Edit">
            <i className="fas fa-edit"></i>
          </Link>
          <button 
            className="admin-btn-icon delete" 
            title="Delete"
            onClick={() => setDeleteId(item._id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  return (
    <RoleGuard allowedRoles={["superadmin"]} fallback={<div>Access Denied</div>}>
      <DataTable
        title="Team Members"
        data={members}
        columns={columns}
        keyExtractor={(item) => item._id}
        searchField="name"
        actionHref="/admin/team/new"
        actionText="Add Member"
        loading={loading}
      />

      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Team Member"
        message="Are you sure you want to delete this team member? This action cannot be undone."
        confirmText="Delete"
        isDestructive={true}
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </RoleGuard>
  );
}
