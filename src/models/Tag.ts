import mongoose, { Schema, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  slug: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

const TagSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    color: { type: String, default: "#000000" },
  },
  { timestamps: true }
);

const Tag = mongoose.models.Tag || mongoose.model<ITag>("Tag", TagSchema);

export default Tag;
