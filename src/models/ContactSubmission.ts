import mongoose, { Schema, Document } from "mongoose";

export interface IContactSubmission extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSubmissionSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ContactSubmission =
  mongoose.models.ContactSubmission ||
  mongoose.model<IContactSubmission>("ContactSubmission", ContactSubmissionSchema);

export default ContactSubmission;
