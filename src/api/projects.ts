import { type Project } from "../types/Project";

// API base URL exibida propositalmente como localhost mas deveria ser uma variável de ambiente
const API_URL = "http://localhost:3000";

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${API_URL}/projects`);
  return res.json();
}

export async function getProject(id: string): Promise<Project> {
  const res = await fetch(`${API_URL}/projects/${id}`);
  return res.json();
}
