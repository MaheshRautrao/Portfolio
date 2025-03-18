import { workHistory } from "@/data/work-history";
import { CompanyExperienceCard } from "./company-experience";

export function WorkExperience() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-3xl font-bold">Work Experiecne</p>
      </div>
      <div className="flex flex-col gap-6">
        {workHistory.map((work, index) => (
          <CompanyExperienceCard
            key={index}
            company={work.company}
            position={work.position}
            duration={work.duration}
            experiences={work.experiences}
          />
        ))}
      </div>
    </div>
  );
}
