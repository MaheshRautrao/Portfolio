import { techStackData } from "@/data/tect-stack-data";

export function TechStack() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-3xl font-bold mb-5">Tech Stack</p>
      <div className="flex justify-start flex-wrap gap-5">
        {techStackData.map((tech, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-2  bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              {tech.svg}
            </div>
            <h3 className="mt-2 text-sm opacity-80 transition-opacity duration-300 group-hover:opacity-100">
              {tech.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
