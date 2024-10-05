import Image from "next/image";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((project) => (
          <Card maxW="sm" key={project}>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">Project {project}</Heading>
                <Text>A brief description of the project</Text>
              </Stack>
              <Image
                src={`/images/placeholder.svg`}
                alt={`Project ${project}`}
                width={400}
                height={50}
                className="rounded-md mb-4"
              />
            </CardBody>

            <CardFooter>
              <Button variant="outline" className="w-full">
                View Project
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
