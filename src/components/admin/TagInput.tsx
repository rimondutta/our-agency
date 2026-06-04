"use client";

import { useState } from "react";

interface TagInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
  label?: string;
  placeholder?: string;
}

const TagInput = ({ value, onChange, label, placeholder = "Add a tag and press Enter" }: TagInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = inputValue.trim();
      
      if (newTag && !value.includes(newTag)) {
        onChange([...value, newTag]);
      }
      setInputValue("");
    }
  };

  const removeTag = (indexToRemove: number) => {
    onChange(value.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="admin-form-group">
      {label && <label className="admin-form-label">{label}</label>}
      
      <div className="admin-tag-input-wrapper">
        {value.map((tag, index) => (
          <span key={index} className="admin-tag">
            {tag}
            <button
              type="button"
              className="admin-tag-remove"
              onClick={() => removeTag(index)}
            >
              <i className="fas fa-times"></i>
            </button>
          </span>
        ))}
        
        <input
          type="text"
          className="admin-tag-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ""}
        />
      </div>
      <small style={{ color: "#94a3b8", display: "block", marginTop: "4px" }}>
        Press Enter or comma to add a tag
      </small>
    </div>
  );
};

export default TagInput;
