import { Calendar } from "lucide-react";
import { ExperienceCard } from "./experience";

export function CompanyExperienceCard({
  company,
  position,
  duration,
  experiences,
}: {
  company: string;
  position: string;
  duration: string;
  experiences: {
    title: string;
    description: string;
    points: string[];
  }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* Work History Card */}
      <div className="flex items-center gap-5 w-full max-w-lg rounded-lg border p-4 shadow-lg">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">
            {position} <span className="text-blue-400">@{company}</span>
          </h3>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" /> <span>{duration}</span>
          </div>
        </div>
      </div>

      {/* Experience Cards under Work History */}
      <div className="pl-6 border-l border-gray-700 ml-4 space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            description={exp.description}
            points={exp.points}
          />
        ))}
      </div>
    </div>
  );
}
