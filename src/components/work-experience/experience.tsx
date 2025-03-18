import { Check } from "lucide-react";

export function ExperienceCard({
  title,
  description,
  points,
}: {
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="rounded-lg border  p-5 shadow-sm">
      <h3 className="text-lg font-semibold flex gap-2 items-center">
        <Check size={20} color="#0040ff" strokeWidth={2} absoluteStrokeWidth />
        {title}
      </h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <ul className="mt-3 list-disc list-inside space-y-1">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
