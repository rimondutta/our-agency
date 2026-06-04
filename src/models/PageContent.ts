import mongoose, { Schema, Document } from "mongoose";

export interface IPageContent extends Document {
  page: 'home' | 'about' | 'contact' | 'services';
  section: string;
  key: string;
  value: string;
  type: 'text' | 'richtext' | 'image' | 'json';
  updatedAt: Date;
  createdAt: Date;
}

const PageContentSchema: Schema = new Schema(
  {
    page: { 
      type: String, 
      enum: ['home', 'about', 'contact', 'services'], 
      required: true 
    },
    section: { type: String, required: true },
    key: { type: String, required: true },
    value: { type: String, required: true },
    type: { 
      type: String, 
      enum: ['text', 'richtext', 'image', 'json'],
      default: 'text' 
    },
  },
  { timestamps: true }
);

// Ensure that page + section + key is unique
PageContentSchema.index({ page: 1, section: 1, key: 1 }, { unique: true });

const PageContent = mongoose.models.PageContent || mongoose.model<IPageContent>("PageContent", PageContentSchema);

export default PageContent;
