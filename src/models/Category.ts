import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
  postCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    color: { type: String, default: "#000000" },
    icon: { type: String, default: "" },
    postCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Category = mongoose.models.Category || mongoose.model<ICategory>("Category", CategorySchema);

export default Category;
