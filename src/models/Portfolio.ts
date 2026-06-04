import mongoose, { Schema, Document, Types } from "mongoose";

export interface IPortfolio extends Document {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  coverImage: string;
  images: string[];
  techStack: Types.ObjectId[];
  liveUrl: string;
  githubUrl: string;
  category: Types.ObjectId | null;
  featured: boolean;
  status: 'draft' | 'published';
  order: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  startDate: Date | null;
  endDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const PortfolioSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    longDescription: { type: String, default: "" },
    coverImage: { type: String, default: "" },
    images: { type: [String], default: [] },
    techStack: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    liveUrl: { type: String, default: "" },
    githubUrl: { type: String, default: "" },
    category: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
    featured: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft'
    },
    order: { type: Number, default: 0 },
    seo: {
      metaTitle: { type: String, default: "" },
      metaDescription: { type: String, default: "" },
    },
    startDate: { type: Date, default: null },
    endDate: { type: Date, default: null },
  },
  { timestamps: true }
);

const Portfolio =
  mongoose.models.Portfolio ||
  mongoose.model<IPortfolio>("Portfolio", PortfolioSchema);

export default Portfolio;
