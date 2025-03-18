import { ImagesCarousel } from "@/components/images-carousel";
import { projects } from "@/data/projects";
import { ArrowRight, Check, Github, Globe } from "lucide-react";
import { notFound } from "next/navigation";

function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId);
}

export default function ProjectDetailsPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;
  const project = getProjectById(projectId);

  if (!project) return notFound();

  return (
    <div className="flex justify-center flex-col px-48 gap-10 mt-5 mb-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-semibold leading-tight">
          {project.projectTitle}
        </h1>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs font-medium rounded-md bg-zinc-200 text-black"
            >
              #{tag.name}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-3">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              <Github className="w-5 h-5" />
              GitHub Code
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              <Globe className="w-5 h-5" />
              Live Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <div>
        <ImagesCarousel images={project.images} />
      </div>

      <div>
        <h1 className="text-3xl font-semibold mb-5">Description</h1>
        {project.projectDescription}
      </div>
      <div>
        <h1 className="text-3xl font-semibold mb-5">Features</h1>
        <ul className="flex flex-col gap-5">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check
                size={20}
                color="#0040ff"
                strokeWidth={2}
                absoluteStrokeWidth
              />
              {feature.feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
