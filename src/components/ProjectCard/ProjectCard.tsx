import { type Project } from "../../types/Project";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const percentage = Math.min(
    Math.round((project.collected / project.goal) * 100),
    100
  );

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={project.imageUrl} alt={project.title} />
        </figure>
      </div>

      <div className="card-content">
        <p className="title is-5">{project.title}</p>

        <ProgressBar value={percentage} />

        <p className="mt-2">
          {percentage}% · R$ {project.collected}
        </p>

        <Link
          to={`/projects/${project.id}`}
          className="button is-link is-fullwidth mt-3"
        >
          Ver projeto
        </Link>
      </div>
    </div>
  );
}
