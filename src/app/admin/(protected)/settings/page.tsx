"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/utilities/Preloader";
import { toast } from "react-hot-toast";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // Form State
  const [siteName, setSiteName] = useState("");
  const [tagline, setTagline] = useState("");
  const [logo, setLogo] = useState("");
  const [favicon, setFavicon] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [footerText, setFooterText] = useState("");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  
  // SEO
  const [defaultMetaTitle, setDefaultMetaTitle] = useState("");
  const [defaultMetaDescription, setDefaultMetaDescription] = useState("");
  const [ogImage, setOgImage] = useState("");
  
  // Social
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/admin/settings");
        const data = await res.json();
        if (data.success && data.data) {
          const s = data.data;
          setSiteName(s.siteName || "");
          setTagline(s.tagline || "");
          setLogo(s.logo || "");
          setFavicon(s.favicon || "");
          setContactEmail(s.contactEmail || "");
          setFooterText(s.footerText || "");
          setMaintenanceMode(s.maintenanceMode || false);
          
          if (s.seo) {
            setDefaultMetaTitle(s.seo.defaultMetaTitle || "");
            setDefaultMetaDescription(s.seo.defaultMetaDescription || "");
            setOgImage(s.seo.ogImage || "");
          }
          
          if (s.socialLinks) {
            setGithub(s.socialLinks.github || "");
            setLinkedin(s.socialLinks.linkedin || "");
            setTwitter(s.socialLinks.twitter || "");
            setInstagram(s.socialLinks.instagram || "");
            setYoutube(s.socialLinks.youtube || "");
          }
        }
      } catch (error) {
        toast.error("Failed to load settings");
      } finally {
        setLoading(false);
      }
    };
    
    fetchSettings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    const payload = {
      siteName,
      tagline,
      logo,
      favicon,
      contactEmail,
      footerText,
      maintenanceMode,
      seo: {
        defaultMetaTitle,
        defaultMetaDescription,
        ogImage,
      },
      socialLinks: {
        github,
        linkedin,
        twitter,
        instagram,
        youtube,
      }
    };

    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Settings updated successfully");
      } else {
        toast.error(data.error || "Failed to update settings");
      }
    } catch (error) {
      toast.error("An error occurred while saving settings");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Preloader />;

  return (
    <div className="admin-form-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '24px', borderBottom: '1px solid var(--admin-border)', paddingBottom: '16px' }}>
        Site Settings
      </h2>
      
      <form onSubmit={handleSubmit}>
        
        {/* General Settings */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: 'var(--admin-accent)', marginBottom: '16px', fontSize: '1.1rem' }}>General</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="admin-form-group">
              <label className="admin-form-label">Site Name</label>
              <input
                type="text"
                className="admin-form-control"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
              />
            </div>
            
            <div className="admin-form-group">
              <label className="admin-form-label">Tagline</label>
              <input
                type="text"
                className="admin-form-control"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
              />
            </div>
            
            <div className="admin-form-group">
              <label className="admin-form-label">Contact Email</label>
              <input
                type="email"
                className="admin-form-control"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className="admin-form-group" style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '32px' }}>
              <label className="admin-switch">
                <input
                  type="checkbox"
                  checked={maintenanceMode}
                  onChange={(e) => setMaintenanceMode(e.target.checked)}
                />
                <span className="admin-switch-slider"></span>
              </label>
              <label style={{ color: maintenanceMode ? 'var(--admin-warning)' : 'var(--admin-text-secondary)', fontWeight: 500 }}>
                Maintenance Mode (Site Offline)
              </label>
            </div>
          </div>
          
          <div className="admin-form-group" style={{ marginTop: '16px' }}>
            <label className="admin-form-label">Footer Text</label>
            <input
              type="text"
              className="admin-form-control"
              value={footerText}
              onChange={(e) => setFooterText(e.target.value)}
            />
          </div>
        </div>

        {/* Branding */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: 'var(--admin-accent)', marginBottom: '16px', fontSize: '1.1rem' }}>Branding</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="admin-form-group">
              <label className="admin-form-label">Logo URL</label>
              <input
                type="text"
                className="admin-form-control"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
                placeholder="https://..."
              />
              {logo && <img src={logo} alt="Logo preview" style={{ height: '40px', marginTop: '12px', objectFit: 'contain' }} />}
            </div>
            
            <div className="admin-form-group">
              <label className="admin-form-label">Favicon URL</label>
              <input
                type="text"
                className="admin-form-control"
                value={favicon}
                onChange={(e) => setFavicon(e.target.value)}
                placeholder="https://..."
              />
            </div>
          </div>
        </div>

        {/* SEO Settings */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: 'var(--admin-accent)', marginBottom: '16px', fontSize: '1.1rem' }}>Default SEO</h3>
          <div className="admin-form-group">
            <label className="admin-form-label">Default Meta Title</label>
            <input
              type="text"
              className="admin-form-control"
              value={defaultMetaTitle}
              onChange={(e) => setDefaultMetaTitle(e.target.value)}
            />
          </div>
          
          <div className="admin-form-group">
            <label className="admin-form-label">Default Meta Description</label>
            <textarea
              className="admin-form-control"
              value={defaultMetaDescription}
              onChange={(e) => setDefaultMetaDescription(e.target.value)}
              style={{ minHeight: "80px" }}
            />
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Default OG Image URL (For social sharing)</label>
            <input
              type="text"
              className="admin-form-control"
              value={ogImage}
              onChange={(e) => setOgImage(e.target.value)}
              placeholder="https://..."
            />
          </div>
        </div>

        {/* Social Links */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: 'var(--admin-accent)', marginBottom: '16px', fontSize: '1.1rem' }}>Social Links</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="admin-form-group">
              <label className="admin-form-label"><i className="fab fa-github"></i> GitHub</label>
              <input
                type="text"
                className="admin-form-control"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="https://github.com/..."
              />
            </div>
            
            <div className="admin-form-group">
              <label className="admin-form-label"><i className="fab fa-linkedin"></i> LinkedIn</label>
              <input
                type="text"
                className="admin-form-control"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://linkedin.com/in/..."
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label"><i className="fab fa-twitter"></i> Twitter / X</label>
              <input
                type="text"
                className="admin-form-control"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                placeholder="https://twitter.com/..."
              />
            </div>
            
            <div className="admin-form-group">
              <label className="admin-form-label"><i className="fab fa-instagram"></i> Instagram</label>
              <input
                type="text"
                className="admin-form-control"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="https://instagram.com/..."
              />
            </div>
            
            <div className="admin-form-group">
              <label className="admin-form-label"><i className="fab fa-youtube"></i> YouTube</label>
              <input
                type="text"
                className="admin-form-control"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
                placeholder="https://youtube.com/..."
              />
            </div>
          </div>
        </div>

        <div className="admin-form-actions" style={{ borderTop: '1px solid var(--admin-border)', paddingTop: '24px' }}>
          <button type="submit" className="admin-btn-primary" disabled={saving}>
            {saving ? (
              <><i className="fas fa-spinner fa-spin"></i> Saving...</>
            ) : (
              <><i className="fas fa-save"></i> Save Settings</>
            )}
          </button>
        </div>
        
      </form>
    </div>
  );
}
