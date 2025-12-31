import { useEffect, useState } from "react";
import { getProjects } from "../api/projects";
import { type Project } from "../types/Project";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return { projects, loading };
}
