import { ProjectsList } from "@/components/projects/projects-list";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <ProjectsList projects={projects} />
    </div>
  );
}
