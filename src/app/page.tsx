import { Spotlight } from "../components/accertinity/Spotlight";
import { TechStack } from "@/components/home/tech-stack";
import { Hero } from "@/components/home/hero-section/hero";
import { WorkExperience } from "@/components/work-experience/work-experience";
import { ShakingText } from "@/components/home/shaking-text";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-20">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 "
        fill="white"
      /> */}
      <Hero />
      <WorkExperience />
      <TechStack />
      <ShakingText />
    </div>
  );
}
