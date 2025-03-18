import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Project } from "@/types/types";
import { Github, Globe } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="w-96 rounded-lg overflow-hidden shadow-lg border flex flex-col justify-between"
        >
          {/* Project Image */}
          <div className="relative h-48 w-full">
            <img
              src={project.projectCoverImageLink}
              alt={project.projectTitle}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <CardHeader className="p-4">
              {/* Project Title */}
              <CardTitle className="text-lg font-semibold">
                {project.projectTitle}
              </CardTitle>

              {/* Tags with Limit */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-zinc-200 text-black"
                  >
                    #{tag.name}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-xs ">...</span>
                )}
              </div>
            </CardHeader>

            <CardContent className="p-4">
              {/* Project Introduction */}
              <p className="text-sm line-clamp-3">
                {project.projectDescription}
              </p>
            </CardContent>
          </div>
          <CardFooter className="p-4 flex justify-between items-center border-t ">
            <Link href={`/projects/${project.id}`}>
              <Button>Details</Button>
            </Link>
            <div className="flex gap-3">
              {project.githubLink && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <a href={project.githubLink} target="_blank">
                        <Github className="w-5 h-5 transition hover:scale-110" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Code Link</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {project.liveLink && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <a href={project.liveLink} target="_blank">
                        <Globe className="w-5 h-5 transition hover:scale-110" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Demo Link</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
