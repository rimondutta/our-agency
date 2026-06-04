import { useState } from "react";
import { IFaq } from "@/models/Service";

interface FAQManagerProps {
  faqs: IFaq[];
  onChange: (faqs: IFaq[]) => void;
}

export default function FAQManager({ faqs = [], onChange }: FAQManagerProps) {
  const handleAddFaq = () => {
    onChange([...faqs, { q: "", a: "" }]);
  };

  const handleRemoveFaq = (index: number) => {
    const newFaqs = [...faqs];
    newFaqs.splice(index, 1);
    onChange(newFaqs);
  };

  const handleFaqChange = (index: number, field: "q" | "a", value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    onChange(newFaqs);
  };

  return (
    <div className="admin-form-group" style={{ backgroundColor: "#0f172a", padding: "16px", borderRadius: "8px", border: "1px solid #334155" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <label className="admin-form-label" style={{ margin: 0 }}>FAQ Section</label>
        <button type="button" className="admin-btn-secondary" style={{ padding: "4px 12px", fontSize: "0.9rem" }} onClick={handleAddFaq}>
          + Add FAQ
        </button>
      </div>

      {faqs.length === 0 ? (
        <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>No FAQs added yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ display: "flex", gap: "12px", alignItems: "flex-start", backgroundColor: "#1e293b", padding: "12px", borderRadius: "6px" }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                <input
                  type="text"
                  className="admin-form-control"
                  placeholder="Question"
                  value={faq.q}
                  onChange={(e) => handleFaqChange(index, "q", e.target.value)}
                  required
                />
                <textarea
                  className="admin-form-control"
                  placeholder="Answer"
                  value={faq.a}
                  onChange={(e) => handleFaqChange(index, "a", e.target.value)}
                  rows={2}
                  required
                />
              </div>
              <button
                type="button"
                style={{ backgroundColor: "#ef4444", color: "white", border: "none", borderRadius: "4px", width: "32px", height: "32px", cursor: "pointer" }}
                onClick={() => handleRemoveFaq(index)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
