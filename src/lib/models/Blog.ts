import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  content: string;
  metaDescription: string;
  thumbnail: string;
  scripts: string[];
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    metaDescription: { type: String },
    thumbnail: { type: String },
    scripts: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

// If the model already exists, use it; otherwise, create a new one
export const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>('Blog', blogSchema);
