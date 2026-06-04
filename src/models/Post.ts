import mongoose, { Schema, Document, Types } from "mongoose";

export interface IPost extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: Types.ObjectId | null;
  tags: Types.ObjectId[];
  status: 'draft' | 'published' | 'archived';
  author: Types.ObjectId | null;
  views: number;
  readTime: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, default: "" },
    content: { type: String, default: "" },
    coverImage: { type: String, default: "" },
    category: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft'
    },
    author: { type: Schema.Types.ObjectId, ref: "User", default: null },
    views: { type: Number, default: 0 },
    readTime: { type: Number, default: 0 },
    seo: {
      metaTitle: { type: String, default: "" },
      metaDescription: { type: String, default: "" },
    },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);

export default Post;
