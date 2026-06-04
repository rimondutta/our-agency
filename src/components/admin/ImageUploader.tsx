"use client";

import { useState, useRef } from "react";
import { toast } from "react-toastify";

interface ImageUploaderProps {
  value?: string;
  onChange?: (url: string) => void;
  onUploadSuccess?: (url: string) => void;
  label?: string;
}

const ImageUploader = ({ value, onChange, onUploadSuccess, label = "Upload Image" }: ImageUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }

    // Limit to 5MB
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5MB");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        if (onChange) onChange(data.data.url);
        if (onUploadSuccess) onUploadSuccess(data.data.url);
        toast.success("Image uploaded successfully");
      } else {
        toast.error(data.message || "Failed to upload image");
      }
    } catch (error) {
      toast.error("An error occurred during upload");
    } finally {
      setIsUploading(false);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="admin-form-group">
      <label className="admin-form-label">{label}</label>
      
      {value ? (
        <div className="admin-dropzone-preview">
          <img src={value} alt="Preview" />
          <button 
            type="button" 
            className="admin-dropzone-remove"
            onClick={() => onChange && onChange("")}
            title="Remove image"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      ) : (
        <div 
          className={`admin-dropzone ${isDragging ? "active" : ""}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="d-none"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleUpload(e.target.files[0]);
              }
            }}
          />
          <div className="admin-dropzone-icon">
            {isUploading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <i className="fas fa-cloud-upload-alt"></i>
            )}
          </div>
          <p className="admin-dropzone-text">
            {isUploading 
              ? "Uploading..." 
              : "Click or drag and drop to upload"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
