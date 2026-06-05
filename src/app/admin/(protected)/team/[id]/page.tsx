"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import RoleGuard from "@/components/admin/RoleGuard";
import ImageUploader from "@/components/admin/ImageUploader";
import TagInput from "@/components/admin/TagInput";
import Preloader from "@/components/utilities/Preloader";

export default function EditTeamMemberPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    fetchMember();
  }, [id]);

  const fetchMember = async () => {
    try {
      const res = await fetch(`/api/admin/team/${id}`);
      const data = await res.json();
      if (data.success) {
        setFormData({
          ...data.data,
          password: "", // Don't populate password
        });
      } else {
        toast.error(data.message);
        router.push("/admin/team");
      }
    } catch (error) {
      toast.error("Failed to load user data");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const submitData = { ...formData };
      if (!submitData.password) {
        delete submitData.password;
      }

      const res = await fetch(`/api/admin/team/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        router.push("/admin/team");
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
    <RoleGuard allowedRoles={["superadmin"]}>
      <div className="admin-form-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>Edit Team Member</h2>
          <Link href="/admin/team" className="admin-btn-secondary">Back to Team</Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Full Name</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.name || ""}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Email Address (Read Only)</label>
                <input
                  type="email"
                  className="admin-form-control"
                  value={formData.email || ""}
                  readOnly
                  disabled
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Job Title</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.jobTitle || ""}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Phone Number</label>
                <input
                  type="tel"
                  className="admin-form-control"
                  value={formData.phone || ""}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Role</label>
                <select
                  className="admin-form-control"
                  value={formData.role || "team_member"}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <option value="team_member">Team Member</option>
                  <option value="admin">Admin</option>
                  <option value="superadmin">Superadmin</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">New Password (leave blank to keep current)</label>
                <input
                  type="password"
                  className="admin-form-control"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  minLength={8}
                />
              </div>
              
              <div className="admin-form-group" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <label className="admin-switch">
                  <input 
                    type="checkbox" 
                    checked={formData.isActive !== false}
                    onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                  />
                  <span className="admin-switch-slider"></span>
                </label>
                <span className="admin-form-label" style={{ margin: 0 }}>Active Account</span>
              </div>
            </div>
            
            <div style={{ flex: '1 1 300px' }}>
              <ImageUploader 
                label="Profile Photo"
                value={formData.avatar || ""}
                onChange={(url) => setFormData({ ...formData, avatar: url })}
              />
              
              <div className="admin-form-group">
                <label className="admin-form-label">Bio</label>
                <textarea
                  className="admin-form-control"
                  value={formData.bio || ""}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                />
              </div>
              
              <TagInput
                label="Skills"
                value={formData.skills || []}
                onChange={(tags) => setFormData({ ...formData, skills: tags })}
                placeholder="e.g. React, Node.js"
              />

              <div className="admin-form-group">
                <label className="admin-form-label">LinkedIn URL</label>
                <input
                  type="url"
                  className="admin-form-control"
                  value={formData.socialLinks?.linkedin || ""}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, linkedin: e.target.value }
                  })}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Twitter URL</label>
                <input
                  type="url"
                  className="admin-form-control"
                  value={formData.socialLinks?.twitter || ""}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, twitter: e.target.value }
                  })}
                  placeholder="https://twitter.com/username"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">GitHub URL</label>
                <input
                  type="url"
                  className="admin-form-control"
                  value={formData.socialLinks?.github || ""}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, github: e.target.value }
                  })}
                  placeholder="https://github.com/username"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Website URL</label>
                <input
                  type="url"
                  className="admin-form-control"
                  value={formData.socialLinks?.website || ""}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, website: e.target.value }
                  })}
                  placeholder="https://yourwebsite.com"
                />
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
