import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

type profileLinkType = {
  title: string;
  icon: JSX.Element;
  href: string;
};

type profileLinksType = profileLinkType[];

export const profileLinks: profileLinksType = [
  {
    title: "Github",
    icon: (
      <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/MaheshRautrao",
  },
  {
    title: "Twitter",
    icon: (
      <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/mahesh_rautrao",
  },
  {
    title: "Instagram",
    icon: (
      <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.instagram.com/rautrao.mahesh/",
  },
  {
    title: "LinkedIn",
    icon: (
      <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/mahesh-rautrao-90052b1ba/",
  },
];
