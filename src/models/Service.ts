import mongoose, { Schema, Document } from "mongoose";

export interface IFaq {
  q: string;
  a: string;
}

export interface IPricingPlan {
  id: number;
  title: string;
  description: string;
  features: string[];
  blockedFeatures: string[];
  priceOriginal: number | null;
  priceDiscounted: number;
  currency: string;
  billingCycle: string;
}

export interface IPricing {
  monthlyPlans: IPricingPlan[];
  yearlyPlans: IPricingPlan[];
  serviceId: string;
}

export interface IService extends Document {
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  features: string[];
  price: number;
  faqs: IFaq[];
  pricing: IPricing;
  isPublished: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const FaqSchema = new Schema({
  q: { type: String, required: true },
  a: { type: String, required: true },
});

const PricingPlanSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  features: { type: [String], default: [] },
  blockedFeatures: { type: [String], default: [] },
  priceOriginal: { type: Number, default: null },
  priceDiscounted: { type: Number, required: true },
  currency: { type: String, default: "$" },
  billingCycle: { type: String, default: "month" },
});

const PricingSchema = new Schema({
  monthlyPlans: { type: [PricingPlanSchema], default: [] },
  yearlyPlans: { type: [PricingPlanSchema], default: [] },
  serviceId: { type: String, default: "" },
});

const ServiceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    icon: { type: String, default: "" },
    shortDescription: { type: String, default: "" },
    fullDescription: { type: String, default: "" },
    coverImage: { type: String, default: "" },
    features: { type: [String], default: [] },
    price: { type: Number, default: 0 },
    faqs: { type: [FaqSchema], default: [] },
    pricing: { type: PricingSchema, default: {} },
    isPublished: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Service =
  mongoose.models.Service ||
  mongoose.model<IService>("Service", ServiceSchema);

export default Service;
