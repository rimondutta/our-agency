"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import ImageUploader from "@/components/admin/ImageUploader";
import TagInput from "@/components/admin/TagInput";
import Preloader from "@/components/utilities/Preloader";

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    if (session?.user?.id) {
      fetchProfile();
    }
  }, [session]);

  const fetchProfile = async () => {
    try {
      const res = await fetch(`/api/admin/team/${session?.user?.id}`);
      const data = await res.json();
      if (data.success) {
        setFormData({
          ...data.data,
          password: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to load profile");
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

      const res = await fetch(`/api/admin/team/${session?.user?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Profile updated successfully");
        // Update NextAuth session if name or photo changed
        await update({
          name: formData.name,
          profilePhoto: formData.profilePhoto,
        });
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
  if (!formData) return <div>Failed to load profile.</div>;

  return (
    <div className="admin-form-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: 0 }}>My Profile</h2>
        <p style={{ color: '#94a3b8', margin: '4px 0 0 0' }}>Update your personal information</p>
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
              <label className="admin-form-label">Email Address (Cannot be changed)</label>
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
              <label className="admin-form-label">New Password (leave blank to keep current)</label>
              <input
                type="password"
                className="admin-form-control"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                minLength={6}
              />
            </div>
            
            <div className="admin-form-group">
              <label className="admin-form-label">Social Links</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input
                  type="text"
                  className="admin-form-control"
                  placeholder="LinkedIn URL"
                  value={formData.socialLinks?.linkedin || ""}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, linkedin: e.target.value }
                  })}
                />
                <input
                  type="text"
                  className="admin-form-control"
                  placeholder="Twitter / X URL"
                  value={formData.socialLinks?.twitter || ""}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, twitter: e.target.value }
                  })}
                />
                <input
                  type="text"
                  className="admin-form-control"
                  placeholder="GitHub URL"
                  value={formData.socialLinks?.github || ""}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, github: e.target.value }
                  })}
                />
              </div>
            </div>
          </div>
          
          <div style={{ flex: '1 1 300px' }}>
            <ImageUploader 
              label="Profile Photo"
              value={formData.profilePhoto || ""}
              onChange={(url) => setFormData({ ...formData, profilePhoto: url })}
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
          </div>
        </div>

        <div className="admin-form-actions">
          <button type="submit" className="admin-btn-primary" disabled={saving}>
            {saving ? "Saving..." : "Save Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}
