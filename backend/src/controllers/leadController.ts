import { Request, Response } from "express";
import { z } from "zod";
import { Lead } from "../models/Lead";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  projectType: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
  preferredDate: z.string().optional(),
});

export async function createLead(req: Request, res: Response) {
  try {
    const data = leadSchema.parse(req.body);
    const lead = await Lead.create(data);
    res.status(201).json({ success: true, data: lead });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation failed", details: error.issues });
    }
    res.status(500).json({ error: "Failed to create lead" });
  }
}

export async function getLeads(req: Request, res: Response) {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json({ success: true, data: leads });
  } catch {
    res.status(500).json({ error: "Failed to fetch leads" });
  }
}

export async function updateLeadStatus(req: Request, res: Response) {
  try {
    const { status } = req.body;
    const lead = await Lead.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!lead) return res.status(404).json({ error: "Lead not found" });
    res.json({ success: true, data: lead });
  } catch {
    res.status(500).json({ error: "Failed to update lead" });
  }
}
