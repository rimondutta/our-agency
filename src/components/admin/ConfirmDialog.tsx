"use client";

import { ReactNode } from "react";

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
}

const ConfirmDialog = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isDestructive = false
}: ConfirmDialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="admin-modal-overlay" onClick={onCancel}>
      <div className="admin-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <h3>{title}</h3>
        </div>
        
        <div className="admin-modal-body">
          <p style={{ margin: 0 }}>{message}</p>
        </div>
        
        <div className="admin-modal-footer">
          <button 
            type="button" 
            className="admin-btn-secondary" 
            onClick={onCancel}
          >
            {cancelText}
          </button>
          
          <button 
            type="button" 
            className="admin-btn-primary"
            style={isDestructive ? { backgroundColor: '#ef4444', color: 'white' } : {}}
            onClick={() => {
              onConfirm();
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
