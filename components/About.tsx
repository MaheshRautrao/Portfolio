// components/About.tsx
import Image from "next/image";
import { Button, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <section id="about" className="mb-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/placeholder.svg"
          alt="Mahesh Rautrao"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div>
          <Heading mb="2">Hello, I&apos;m Mahesh Rautrao</Heading>
          <Text mb="3">
            Full-Stack Developer | Creative Problem Solver I am a passionate
            full-stack developer with a deep love for technology and a creative
            approach to solving complex problems. I thrive on innovation,
            constantly pushing the boundaries of what&apos;s possible through
            hands-on projects and custom-built solutions. From developing
            browser extensions to streamline workflows, to actively learning and
            evolving with the latest tech trends, I bring both creativity and
            technical expertise to every project I work on. For me, technology
            isn’t just a career—it’s a way of life.
          </Text>
          <Button colorScheme="teal" variant="outline">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
