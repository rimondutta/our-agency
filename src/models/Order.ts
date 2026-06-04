import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceName: string;
  serviceId: string;
  message: string;
  status: "pending" | "in-progress" | "completed" | "cancelled";
  amount: number;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema: Schema = new Schema(
  {
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, default: "" },
    serviceName: { type: String, default: "" },
    serviceId: { type: String, default: "" },
    message: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed", "cancelled"],
      default: "pending",
    },
    amount: { type: Number, default: 0 },
    notes: { type: String, default: "" },
  },
  { timestamps: true }
);

const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
