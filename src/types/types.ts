export interface Blog {
  id: string;
  blogTitle: string;
  blogLink: string;
  blogCoverImageLink: string;
  blogContent: string;
  blogReadTime: string;
  tags: tag[];
  blogIntro: string;
}

export interface tag {
  name: string;
}

export interface Project {
  id: string;
  projectTitle: string;
  projectDescription: string;
  projectCoverImageLink: string;
  tags: { name: string }[];
  githubLink?: string;
  liveLink?: string;
  images: projectImage[];
  features: projectFeature[];
}
export interface projectFeature {
  feature: string;
}

export interface projectImage {
  src: string;
  alt: string;
}
