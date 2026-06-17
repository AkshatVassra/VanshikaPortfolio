import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
  gallery: string[];
  description: string;
  clientGoals: string[];
  designProcess: string[];
  materials: { name: string; image?: string }[];
  year: string;
  location: string;
  featured: boolean;
  published: boolean;
}

const projectSchema = new Schema<IProject>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    subtitle: String,
    category: String,
    tags: [String],
    image: String,
    gallery: [String],
    description: String,
    clientGoals: [String],
    designProcess: [String],
    materials: [{ name: String, image: String }],
    year: String,
    location: String,
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Project = mongoose.models.Project || mongoose.model<IProject>("Project", projectSchema);
