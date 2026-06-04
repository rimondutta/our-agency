"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// ReactQuill must be imported dynamically to avoid SSR document/window errors
const ReactQuill = dynamic(() => import("react-quill-new"), { 
  ssr: false,
  loading: () => <div style={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading Editor...</div>
});

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const modules = {
  toolbar: [
    [{ 'header': [2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ]
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

const RichTextEditor = ({ value, onChange, label }: RichTextEditorProps) => {
  return (
    <div className="admin-form-group">
      {label && <label className="admin-form-label">{label}</label>}
      <div className="admin-quill-wrapper">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
