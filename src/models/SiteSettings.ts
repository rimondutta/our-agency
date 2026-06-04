import mongoose, { Schema, Document } from "mongoose";

export interface ISiteSettings extends Document {
  siteName: string;
  tagline: string;
  logo: string;
  favicon: string;
  seo: {
    defaultMetaTitle: string;
    defaultMetaDescription: string;
    ogImage: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
  contactEmail: string;
  footerText: string;
  maintenanceMode: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SiteSettingsSchema: Schema = new Schema(
  {
    siteName: { type: String, default: "My Website" },
    tagline: { type: String, default: "" },
    logo: { type: String, default: "" },
    favicon: { type: String, default: "" },
    seo: {
      defaultMetaTitle: { type: String, default: "" },
      defaultMetaDescription: { type: String, default: "" },
      ogImage: { type: String, default: "" },
    },
    socialLinks: {
      github: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      twitter: { type: String, default: "" },
      instagram: { type: String, default: "" },
      youtube: { type: String, default: "" },
    },
    contactEmail: { type: String, default: "" },
    footerText: { type: String, default: "" },
    maintenanceMode: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const SiteSettings = mongoose.models.SiteSettings || mongoose.model<ISiteSettings>("SiteSettings", SiteSettingsSchema);

export default SiteSettings;
