import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: 'superadmin' | 'admin' | 'team_member';
  avatar?: string;
  phone?: string;
  jobTitle?: string;
  bio?: string;
  skills?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email']
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    role: {
      type: String,
      enum: ['superadmin', 'admin', 'team_member'],
      default: 'team_member',
    },
    avatar: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    jobTitle: {
      type: String,
      default: ''
    },
    bio: {
      type: String,
      default: ''
    },
    skills: {
      type: [String],
      default: []
    },
    socialLinks: {
      linkedin: { type: String, default: '' },
      twitter: { type: String, default: '' },
      github: { type: String, default: '' },
      website: { type: String, default: '' },
    },
    isActive: {
      type: Boolean,
      default: true
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;