import { useState } from "react";
import { IPricing, IPricingPlan } from "@/models/Service";
import TagInput from "./TagInput";

interface PricingManagerProps {
  pricing: IPricing;
  onChange: (pricing: IPricing) => void;
}

export default function PricingManager({ pricing, onChange }: PricingManagerProps) {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  // Initialize if empty
  const currentPricing = pricing || { monthlyPlans: [], yearlyPlans: [], serviceId: "" };

  const handleAddPlan = (type: "monthly" | "yearly") => {
    const plans = type === "monthly" ? currentPricing.monthlyPlans : currentPricing.yearlyPlans;
    const newPlan: IPricingPlan = {
      id: Date.now(),
      title: "",
      description: "",
      features: [],
      blockedFeatures: [],
      priceOriginal: null,
      priceDiscounted: 0,
      currency: "$",
      billingCycle: type === "monthly" ? "month" : "year"
    };
    
    onChange({
      ...currentPricing,
      [type === "monthly" ? "monthlyPlans" : "yearlyPlans"]: [...(plans || []), newPlan]
    });
  };

  const handleRemovePlan = (type: "monthly" | "yearly", index: number) => {
    const plans = [...(type === "monthly" ? currentPricing.monthlyPlans : currentPricing.yearlyPlans)];
    plans.splice(index, 1);
    onChange({
      ...currentPricing,
      [type === "monthly" ? "monthlyPlans" : "yearlyPlans"]: plans
    });
  };

  const handlePlanChange = (type: "monthly" | "yearly", index: number, field: keyof IPricingPlan, value: any) => {
    const plans = [...(type === "monthly" ? currentPricing.monthlyPlans : currentPricing.yearlyPlans)];
    plans[index] = { ...plans[index], [field]: value };
    onChange({
      ...currentPricing,
      [type === "monthly" ? "monthlyPlans" : "yearlyPlans"]: plans
    });
  };

  const renderPlans = (type: "monthly" | "yearly") => {
    const plans = type === "monthly" ? currentPricing.monthlyPlans : currentPricing.yearlyPlans;
    
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
        {plans?.map((plan, index) => (
          <div key={plan.id} style={{ backgroundColor: "#1e293b", padding: "16px", borderRadius: "6px", border: "1px solid #475569" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <h4 style={{ margin: 0, color: "#e2e8f0", fontSize: "1rem" }}>Plan {index + 1}</h4>
              <button
                type="button"
                style={{ backgroundColor: "#ef4444", color: "white", border: "none", borderRadius: "4px", padding: "4px 8px", cursor: "pointer", fontSize: "0.8rem" }}
                onClick={() => handleRemovePlan(type, index)}
              >
                Remove
              </button>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Title (e.g. Basic)</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={plan.title}
                  onChange={(e) => handlePlanChange(type, index, "title", e.target.value)}
                  required
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Discounted Price</label>
                <input
                  type="number"
                  className="admin-form-control"
                  value={plan.priceDiscounted}
                  onChange={(e) => handlePlanChange(type, index, "priceDiscounted", parseFloat(e.target.value) || 0)}
                  required
                />
              </div>
            </div>

            <div className="admin-form-group" style={{ marginBottom: "12px" }}>
              <label className="admin-form-label">Description</label>
              <input
                type="text"
                className="admin-form-control"
                value={plan.description}
                onChange={(e) => handlePlanChange(type, index, "description", e.target.value)}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <TagInput
                  label="Included Features"
                  placeholder="Add feature"
                  value={plan.features}
                  onChange={(tags) => handlePlanChange(type, index, "features", tags)}
                />
              </div>
              <div>
                <TagInput
                  label="Blocked Features"
                  placeholder="Add blocked"
                  value={plan.blockedFeatures}
                  onChange={(tags) => handlePlanChange(type, index, "blockedFeatures", tags)}
                />
              </div>
            </div>
          </div>
        ))}
        <button type="button" className="admin-btn-secondary" onClick={() => handleAddPlan(type)} style={{ alignSelf: "flex-start" }}>
          + Add {type === "monthly" ? "Monthly" : "Yearly"} Plan
        </button>
      </div>
    );
  };

  return (
    <div className="admin-form-group" style={{ backgroundColor: "#0f172a", padding: "16px", borderRadius: "8px", border: "1px solid #334155" }}>
      <label className="admin-form-label" style={{ marginBottom: "16px", display: "block" }}>Pricing Manager</label>
      
      <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid #334155", paddingBottom: "12px" }}>
        <button
          type="button"
          onClick={() => setActiveTab("monthly")}
          style={{
            padding: "8px 16px",
            backgroundColor: activeTab === "monthly" ? "#2563eb" : "transparent",
            color: activeTab === "monthly" ? "white" : "#94a3b8",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Monthly Plans
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("yearly")}
          style={{
            padding: "8px 16px",
            backgroundColor: activeTab === "yearly" ? "#2563eb" : "transparent",
            color: activeTab === "yearly" ? "white" : "#94a3b8",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Yearly Plans
        </button>
      </div>

      {renderPlans(activeTab)}
    </div>
  );
}
