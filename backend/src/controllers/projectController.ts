import { Request, Response } from "express";
import { Project } from "../models/Project";

export async function getProjects(_req: Request, res: Response) {
  try {
    const projects = await Project.find({ published: true }).sort({ createdAt: -1 });
    res.json({ success: true, data: projects });
  } catch {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
}

export async function getProjectBySlug(req: Request, res: Response) {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json({ success: true, data: project });
  } catch {
    res.status(500).json({ error: "Failed to fetch project" });
  }
}

export async function createProject(req: Request, res: Response) {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch {
    res.status(500).json({ error: "Failed to create project" });
  }
}

export async function updateProject(req: Request, res: Response) {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json({ success: true, data: project });
  } catch {
    res.status(500).json({ error: "Failed to update project" });
  }
}

export async function deleteProject(req: Request, res: Response) {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json({ success: true, message: "Project deleted" });
  } catch {
    res.status(500).json({ error: "Failed to delete project" });
  }
}
