import { Card, CardBody } from "@chakra-ui/react";

export default function Skills() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "CSS",
          "HTML",
          "Git",
          "Figma",
        ].map((skill) => (
          <Card key={skill}>
            <CardBody className="flex items-center justify-center h-24 border shadow-sm rounded-md">
              <span className="text-lg font-semibold">{skill}</span>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
