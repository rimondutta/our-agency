"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/utilities/Preloader";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import ImageUploader from "@/components/admin/ImageUploader";
import { toast } from "react-hot-toast";

export default function MediaPage() {
  const [media, setMedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [mediaToDelete, setMediaToDelete] = useState<string | null>(null);

  const fetchMedia = async () => {
    try {
      const res = await fetch("/api/admin/media");
      const data = await res.json();
      if (data.success) {
        setMedia(data.data);
      }
    } catch (error) {
      toast.error("Failed to load media");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleUploadSuccess = (url: string) => {
    toast.success("Image uploaded successfully");
    fetchMedia();
  };

  const handleDeleteClick = (id: string) => {
    setMediaToDelete(id);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!mediaToDelete) return;

    try {
      const res = await fetch(`/api/admin/media/${mediaToDelete}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Media deleted");
        fetchMedia();
      } else {
        toast.error(data.error || "Failed to delete");
      }
    } catch (error) {
      toast.error("Failed to delete media");
    } finally {
      setIsConfirmOpen(false);
      setMediaToDelete(null);
    }
  };
  
  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  };

  if (loading) return <Preloader />;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '32px' }}>
        
        {/* Upload Section */}
        <div>
          <div className="admin-form-card" style={{ position: 'sticky', top: '100px', padding: '24px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '24px' }}>Upload Media</h3>
            <ImageUploader onUploadSuccess={handleUploadSuccess} />
            <p style={{ color: 'var(--admin-text-muted)', fontSize: '0.85rem', marginTop: '16px', textAlign: 'center' }}>
              Supported formats: JPG, PNG, WEBP, GIF.
            </p>
          </div>
        </div>

        {/* Media Grid */}
        <div className="admin-table-container" style={{ padding: '24px' }}>
          <h3 style={{ marginTop: 0, marginBottom: '24px' }}>Media Library</h3>
          
          {media.length === 0 ? (
            <div style={{ padding: "32px", textAlign: "center", color: "var(--admin-text-muted)" }}>
              No media uploaded yet.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
              {media.map((item) => (
                <div key={item._id} style={{ 
                  backgroundColor: 'var(--admin-input-bg)', 
                  border: '1px solid var(--admin-border)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  position: 'relative'
                }} className="media-card group">
                  <div style={{ position: 'relative', paddingTop: '100%' }}>
                    <img 
                      src={item.url} 
                      alt={item.filename || "Uploaded media"} 
                      style={{ 
                        position: 'absolute', 
                        top: 0, left: 0, width: '100%', height: '100%', 
                        objectFit: 'cover' 
                      }} 
                    />
                  </div>
                  <div style={{ padding: '12px' }}>
                    <div style={{ 
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      marginBottom: '8px'
                    }} title={item.filename}>
                      {item.filename || "image"}
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button 
                        onClick={() => copyToClipboard(item.url)}
                        style={{ background: 'none', border: 'none', color: 'var(--admin-accent)', cursor: 'pointer', fontSize: '0.9rem', padding: 0 }}
                        title="Copy URL"
                      >
                        <i className="fas fa-copy"></i> Copy
                      </button>
                      
                      <button 
                        onClick={() => handleDeleteClick(item._id)}
                        style={{ background: 'none', border: 'none', color: 'var(--admin-danger)', cursor: 'pointer', fontSize: '0.9rem', padding: 0 }}
                        title="Delete"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ConfirmDialog
        isOpen={isConfirmOpen}
        title="Delete Media"
        message="Are you sure you want to delete this media file? It will be removed from Cloudinary and any posts using it may display a broken image."
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmOpen(false)}
      />
      
      <style jsx>{`
        .media-card { transition: transform 0.2s, box-shadow 0.2s; }
        .media-card:hover { transform: translateY(-4px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3); border-color: rgba(255,255,255,0.1) !important; }
      `}</style>
    </div>
  );
}
