import mongoose, { Schema, Document, Types } from "mongoose";

export interface IMedia extends Document {
  url: string;
  publicId: string;
  filename: string;
  mimeType: string;
  size: number;
  uploadedBy: Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}

const MediaSchema: Schema = new Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, required: true },
    filename: { type: String, required: true },
    mimeType: { type: String, required: true },
    size: { type: Number, required: true },
    uploadedBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

const Media = mongoose.models.Media || mongoose.model<IMedia>("Media", MediaSchema);

export default Media;
