import { SocialLinksFloatingGroup } from "@/components/social-links-floating-group";
import { NeonButton } from "@/components/home/hero-section/neon-button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9 flex flex-col gap-y-5 ">
        <div>
          <Link
            href="https://www.upwork.com/freelancers/~011135c2d193d66f98"
            target="_blank"
          >
            <NeonButton text="Let's Work Together" />
          </Link>
        </div>
        <p className="text-5xl">
          Turning Ideas into
          <span className="text-blue-400"> experiences</span> and Challenges
          into <span className="text-blue-400">solutions</span>
        </p>
        <p>
          &quot; Hello! I&apos;m a full-stack developer with a passion for
          building efficient, scalable solutions. My expertise spans{" "}
          <span className="text-blue-400">Next.js</span>,{" "}
          <span className="text-blue-400">React.js</span>,{" "}
          <span className="text-blue-400">Node.js</span>,{" "}
          <span className="text-blue-400">Express.js</span>,{" "}
          <span className="text-blue-400">C#</span>,{" "}
          <span className="text-blue-400">.NET</span>,{" "}
          <span className="text-blue-400">SQL</span>, and{" "}
          <span className="text-blue-400">
            NoSQL databases ( MongoDB, Azure CosmosDB)
          </span>
          , with a strong foundation in{" "}
          <span className="text-blue-400">Data Structures and Algorithms</span>.
          I thrive on solving complex problems and turning ideas into seamless,
          interactive experiences across the stack. Whether it&apos;s crafting
          dynamic frontends, architecting backends, or optimizing databases,
          I&apos;m excited to bring ideas to life through code. Let&apos;s
          create something remarkable together ! &quot;
        </p>

        <div>
          <div className="inline-block">
            <SocialLinksFloatingGroup />
          </div>
        </div>
      </div>

      <div className="col-span-3">
        <img
          src="/profileImage.jpg"
          alt="Profile Image"
          className="border-2 border-gray-200 rounded-lg"
        />
      </div>
    </div>
  );
}
