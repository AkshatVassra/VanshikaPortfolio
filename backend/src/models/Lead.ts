import mongoose, { Schema, Document } from "mongoose";

export interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  preferredDate?: string;
  status: "new" | "contacted" | "qualified" | "closed";
  createdAt: Date;
}

const leadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    projectType: { type: String, required: true },
    budget: { type: String, required: true },
    message: { type: String, required: true },
    preferredDate: String,
    status: { type: String, enum: ["new", "contacted", "qualified", "closed"], default: "new" },
  },
  { timestamps: true }
);

export const Lead = mongoose.models.Lead || mongoose.model<ILead>("Lead", leadSchema);
