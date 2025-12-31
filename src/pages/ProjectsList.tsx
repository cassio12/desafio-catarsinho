import ProjectCard from "../components/ProjectCard/ProjectCard";
import { useProjects } from "../hooks/useProjects";

export default function ProjectsList() {
  const { projects, loading } = useProjects();

  if (loading) return <p className="p-4">Carregando projetos...</p>;

  return (
    <section className="section mt-6">
      <div className="columns is-multiline">
        {projects.map((project) => (
          <div key={project.id} className="column is-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
